#!/usr/bin/env node
/**
 * Task-Work-Guard — Blockiert Code-Edits ohne beanspruchten Notion-Task
 * Trigger: PreToolUse (Edit|Write)
 * Project: Etchify (Website)
 */
const path = require('path');

const MAX_TASK_AGE_MS = 4 * 60 * 60 * 1000;

const ALLOWED_PATTERNS = [
  /[/\\]\.claude[/\\]/,
  /[/\\]memory[/\\]/,
  /CLAUDE\.md$/i,
  /CLAUDE\.local\.md$/i,
  /MEMORY\.md$/i,
];

async function main() {
  let input = '';
  for await (const chunk of process.stdin) input += chunk;

  let data;
  try { data = JSON.parse(input); } catch { process.exit(0); }

  const filePath = data.tool_input?.file_path || '';
  if (!filePath) process.exit(0);

  const normalizedPath = filePath.replace(/\\/g, '/');
  if (ALLOWED_PATTERNS.some(pattern => pattern.test(normalizedPath))) process.exit(0);

  const sessionId = data.session_id || '';
  if (!sessionId) process.exit(0);

  const reg = require('./_session-task-registry');
  const tracking = reg.readTracking(sessionId);

  const taskStart = tracking.currentTaskStart || 0;
  const taskAge = taskStart ? Date.now() - taskStart : Infinity;
  const hasActiveTask = taskStart > 0 && taskAge < MAX_TASK_AGE_MS;
  const isClaimed = tracking.claimed === true;

  if (hasActiveTask && isClaimed) process.exit(0);

  const shortSid = sessionId.slice(0, 8);
  const fileName = path.basename(filePath);

  process.stderr.write([
    '',
    `BLOCKIERT: Edit von "${fileName}" ohne Task-Claim!`,
    '',
    '1. node .claude/tools/notion-tasks.js list',
    `2. node .claude/tools/notion-tasks.js claim <TASK_ID> ${shortSid}`,
    '3. Dann Code bearbeiten.',
    '',
  ].join('\n'));
  process.exit(2);
}

process.on('unhandledRejection', () => process.exit(0));
main().catch(() => process.exit(0));
