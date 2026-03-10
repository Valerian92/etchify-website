#!/usr/bin/env node
/**
 * Shared Session-Task Registry — Coordination-DB Edition
 *
 * Simplified: File-based registry/tracking replaced by Coordination-DB.
 * Keeps: Notion result parsing helpers (used by task-claim-tracker, auto-task-flow, etc.)
 *
 * Usage from hooks:
 *   const reg = require('./_session-task-registry');
 *   reg.parseNotionResult(toolResult);
 *   reg.extractTaskTitle(notionPageResult);
 *   reg.readTracking(sessionId);   // per-session /tmp file (fallback)
 *   reg.writeTracking(sessionId, data);
 *   reg.cleanupTracking(sessionId);
 */
const fs = require('fs');
const path = require('path');
const os = require('os');
const crypto = require('crypto');

// ─── Project Hash (consistent lowercase normalization) ──────────────────────

function getProjectHash(cwd) {
  const normalized = (cwd || process.cwd()).replace(/\\/g, '/').toLowerCase();
  return crypto.createHash('md5').update(normalized).digest('hex').slice(0, 12);
}

// ─── Per-Session Tracking (local /tmp fallback — for hooks that need sync state) ─

const TRACKING_PREFIX = 'claude-task-';
const TRACKING_MAX_AGE_MS = 8 * 60 * 60 * 1000; // 8 hours

function getTrackingPath(sessionId) {
  const short = (sessionId || 'unknown').slice(0, 8);
  const projHash = getProjectHash(process.cwd());
  return path.join(os.tmpdir(), `${TRACKING_PREFIX}${projHash}-${short}.json`);
}

function readTracking(sessionId) {
  try {
    return JSON.parse(fs.readFileSync(getTrackingPath(sessionId), 'utf8'));
  } catch {
    // Legacy fallback: try old "etchify" format
    try {
      const short = (sessionId || 'unknown').slice(0, 8);
      const legacyPath = path.join(os.tmpdir(), `claude-etchify-task-${short}.json`);
      return JSON.parse(fs.readFileSync(legacyPath, 'utf8'));
    } catch {
      return {};
    }
  }
}

function writeTracking(sessionId, data) {
  try {
    fs.writeFileSync(getTrackingPath(sessionId), JSON.stringify(data));
  } catch { /* ignore */ }
}

function cleanupTracking(sessionId) {
  try {
    const f = getTrackingPath(sessionId);
    if (fs.existsSync(f)) fs.unlinkSync(f);
    // Also clean legacy format
    const short = (sessionId || 'unknown').slice(0, 8);
    const legacyPath = path.join(os.tmpdir(), `claude-etchify-task-${short}.json`);
    if (fs.existsSync(legacyPath)) fs.unlinkSync(legacyPath);
  } catch { /* ignore */ }
}

/**
 * Clean up stale tracking files from dead sessions.
 * Called on SessionStart to prevent /tmp pollution.
 */
function cleanupStaleTracking() {
  try {
    const tmpDir = os.tmpdir();
    const files = fs.readdirSync(tmpDir);
    const now = Date.now();
    let cleaned = 0;

    for (const file of files) {
      if (!file.startsWith(TRACKING_PREFIX) && !file.startsWith('claude-etchify-task-')) continue;
      const fullPath = path.join(tmpDir, file);
      try {
        const stat = fs.statSync(fullPath);
        if (now - stat.mtimeMs > TRACKING_MAX_AGE_MS) {
          fs.unlinkSync(fullPath);
          cleaned++;
        }
      } catch { /* file may have been deleted by another session */ }
    }
    return cleaned;
  } catch {
    return 0;
  }
}

// ─── Notion Result Parsing ──────────────────────────────────────────────────

function parseNotionResult(toolResult) {
  try {
    const parsed = typeof toolResult === 'string' ? JSON.parse(toolResult) : toolResult;
    if (Array.isArray(parsed) && parsed[0]?.type === 'text' && typeof parsed[0]?.text === 'string') {
      return JSON.parse(parsed[0].text);
    }
    return parsed;
  } catch {
    return null;
  }
}

function extractTaskTitle(notionResult) {
  if (!notionResult?.properties) return '';
  const props = notionResult.properties;
  for (const name of ['Task', 'Name', 'title', 'Titel']) {
    const titleProp = props[name]?.title;
    if (Array.isArray(titleProp) && titleProp.length > 0) {
      return titleProp[0]?.plain_text || '';
    }
  }
  return '';
}

// ─── Legacy compatibility wrappers (delegate to Coordination-DB via _coordination-client) ─

function registerTask(cwd, sessionId, taskId, taskTitle) {
  // Now handled by task-claim-tracker via coordination-client acquireLock('task_claim')
  // Keep writeTracking for local sync state
  writeTracking(sessionId, {
    currentTaskId: taskId,
    currentTaskTitle: taskTitle || '',
    currentTaskStart: Date.now(),
    claimed: true,
    claimedAt: Date.now(),
  });
}

function unregisterTask(cwd, sessionId) {
  cleanupTracking(sessionId);
}

function heartbeat(cwd, sessionId) {
  // Coordination-DB heartbeat is called by file-lock-guard on every edit
}

function getOtherTasks(cwd, sessionId) {
  // Legacy: return empty — session-context.js now uses coordination-client
  return [];
}

function pruneStale(cwd) {
  // No-op: Coordination-DB handles TTL-based stale cleanup
}

function readRegistry(cwd) {
  // Legacy: return empty object
  return {};
}

module.exports = {
  // Registry (legacy wrappers)
  registerTask,
  heartbeat,
  unregisterTask,
  getOtherTasks,
  pruneStale,
  readRegistry,
  getProjectHash,
  // Per-session tracking (local /tmp)
  getTrackingPath,
  readTracking,
  writeTracking,
  cleanupTracking,
  cleanupStaleTracking,
  // Notion helpers (still needed by task hooks)
  parseNotionResult,
  extractTaskTitle,
};
