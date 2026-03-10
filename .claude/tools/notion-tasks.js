#!/usr/bin/env node
/**
 * tasks.js — Task CLI for Claude Code (PostgreSQL backend on VPS)
 * Internal CLI tool — all inputs come from Claude Code, not end users.
 *
 * Usage:
 *   node .claude/tools/notion-tasks.js list [--project X] [--all] [--later] [-v]
 *   node .claude/tools/notion-tasks.js get <id>
 *   node .claude/tools/notion-tasks.js done <id>
 *   node .claude/tools/notion-tasks.js claim <id> <session>
 *   node .claude/tools/notion-tasks.js unclaim <id>
 *   node .claude/tools/notion-tasks.js unclaim-stale [--session X] [--project X]
 *   node .claude/tools/notion-tasks.js later <id>
 *   node .claude/tools/notion-tasks.js unlater <id>
 *   node .claude/tools/notion-tasks.js update <id> <status>
 *   node .claude/tools/notion-tasks.js create <title> [--project X] [--prio X] [--desc X]
 */

// execSync is safe here: this is an internal CLI tool where all arguments
// come from Claude Code (not from untrusted user input). SSH+docker exec
// requires shell features that execFile cannot provide.
const { execSync } = require('child_process');

const SSH_KEY = 'C:/Users/valer/.ssh/id_claude';
const SSH_HOST = 'root@72.60.83.165';
const DOCKER_CONTAINER = 'lunaria-erp-postgres';
const DB_USER = 'lunaria';
const DB_NAME = 'lunaria_erp';

function psql(sql) {
  // Pipe SQL via stdin to avoid multi-level shell escaping issues
  const cmd = `ssh -i ${SSH_KEY} ${SSH_HOST} "docker exec -i ${DOCKER_CONTAINER} psql -U ${DB_USER} -d ${DB_NAME} -t -A -F '|'"`;
  try {
    return execSync(cmd, { input: sql + '\n', encoding: 'utf8', timeout: 15000 }).trim();
  } catch (err) {
    throw new Error(`DB error: ${err.message}`);
  }
}

function parseRows(raw) {
  if (!raw) return [];
  return raw.split('\n').filter(Boolean).map(line => line.split('|'));
}

const PRIO_ICON = { Hoch: '🔴', Mittel: '🟡', Niedrig: '🔵' };
const STATUS_ICON = { 'In Arbeit': '🔧', Erledigt: '✅', 'Später': '💤' };

function formatTask(row, verbose = false) {
  const [id, name, project, priority, erpStatus, done, session, desc] = row;
  const isDone = done === 't';
  const prioIcon = PRIO_ICON[priority] || '⚪';
  const statusIcon = isDone ? '✅' : (STATUS_ICON[erpStatus] || '📋');

  let line = `${statusIcon} ${prioIcon} ${name}`;
  if (session) line += ` [session:${session}]`;

  if (verbose) {
    line += `\n   ID: ${id}`;
    line += `\n   Project: ${project || '-'} | Status: ${erpStatus || '-'} | Prio: ${priority || '-'}`;
    if (desc) line += `\n   Desc: ${desc.substring(0, 200)}`;
  } else {
    line += `  [${id.substring(0, 8)}]`;
  }
  return line;
}

function listTasks(args) {
  const project = args.find((_, i) => args[i - 1] === '--project') || null;
  const showAll = args.includes('--all');
  const showLater = args.includes('--later');
  const verbose = args.includes('-v') || args.includes('--verbose');

  const conditions = [];
  if (!showAll) {
    conditions.push("done = false");
    if (!showLater) conditions.push("erp_status != 'Später'");
  }
  if (project) conditions.push(`projekt_select = '${project}'`);

  const where = conditions.length ? `WHERE ${conditions.join(' AND ')}` : '';
  const sql = `SELECT id, name, projekt_select, priority, erp_status, done, claude_session, description FROM tasks ${where} ORDER BY CASE priority WHEN 'Hoch' THEN 1 WHEN 'Mittel' THEN 2 WHEN 'Niedrig' THEN 3 ELSE 4 END, created_at LIMIT 30`;

  const rows = parseRows(psql(sql));
  if (rows.length === 0) { console.log('No tasks found.'); return; }

  console.log(`--- ${rows.length} Tasks ${project ? `(${project})` : ''} ---`);
  rows.forEach(r => console.log(formatTask(r, verbose)));
}

function getTask(id) {
  const sql = `SELECT id, name, projekt_select, priority, erp_status, done, claude_session, description FROM tasks WHERE id::text LIKE '${id}%' LIMIT 1`;
  const rows = parseRows(psql(sql));
  if (rows.length === 0) { console.log('Task not found.'); return; }
  console.log(formatTask(rows[0], true));
}

function claimTask(id, sessionId) {
  const checkSql = `SELECT claude_session, name FROM tasks WHERE id::text LIKE '${id}%' LIMIT 1`;
  const rows = parseRows(psql(checkSql));
  if (rows.length === 0) { console.error('Task not found.'); process.exit(1); }

  const [existingSession, name] = rows[0];
  if (existingSession && existingSession !== sessionId && !process.argv.includes('--force')) {
    console.error(`❌ BLOCKED: Task already claimed by session:${existingSession}`);
    console.error(`   Title: ${name}`);
    process.exit(1);
  }

  psql(`UPDATE tasks SET erp_status = 'In Arbeit', claude_session = '${sessionId}', claimed_at = now(), updated_at = now() WHERE id::text LIKE '${id}%'`);

  try {
    const reg = require('path');
    const regPath = reg.resolve(__dirname, '../hooks/_session-task-registry.js');
    const registry = require(regPath);
    registry.writeTracking(sessionId, { claimed: true, currentTaskStart: Date.now(), taskId: id, taskTitle: name });
  } catch {}

  console.log(`✅ Claimed: ${id} (session: ${sessionId})`);
}

function markDone(id) {
  psql(`UPDATE tasks SET done = true, erp_status = 'Erledigt', claude_session = NULL, done_at = now(), updated_at = now() WHERE id::text LIKE '${id}%'`);
  console.log(`✅ Done: ${id}`);
}

function laterTask(id) {
  psql(`UPDATE tasks SET erp_status = 'Später', updated_at = now() WHERE id::text LIKE '${id}%'`);
  console.log(`💤 Parked for later: ${id}`);
}

function unlaterTask(id) {
  psql(`UPDATE tasks SET erp_status = 'Offen', updated_at = now() WHERE id::text LIKE '${id}%'`);
  console.log(`📋 Back to active: ${id}`);
}

function updateStatus(id, status) {
  psql(`UPDATE tasks SET erp_status = '${status}', updated_at = now() WHERE id::text LIKE '${id}%'`);
  console.log(`✅ Updated: ${id} → ${status}`);
}

function unclaimTask(id) {
  psql(`UPDATE tasks SET erp_status = 'Offen', claude_session = NULL, updated_at = now() WHERE id::text LIKE '${id}%'`);
  console.log(`🔓 Unclaimed: ${id}`);
}

function unclaimStale(args) {
  const sessionFilter = args.find((_, i) => args[i - 1] === '--session') || null;
  const project = args.find((_, i) => args[i - 1] === '--project') || null;

  const conditions = ["done = false", "claude_session IS NOT NULL", "claude_session != ''"];
  if (project) conditions.push(`projekt_select = '${project}'`);
  if (sessionFilter) conditions.push(`claude_session = '${sessionFilter}'`);

  const sql = `SELECT id, name, claude_session FROM tasks WHERE ${conditions.join(' AND ')}`;
  const rows = parseRows(psql(sql));

  if (rows.length === 0) { console.log('No stale claims found.'); return; }

  rows.forEach(([tid, name, session]) => {
    psql(`UPDATE tasks SET erp_status = 'Offen', claude_session = NULL, updated_at = now() WHERE id = '${tid}'`);
    console.log(`🔓 Unclaimed: ${name} (was session:${session})`);
  });
  console.log(`\n✅ ${rows.length} task(s) unclaimed.`);
}

function createTask(title, args) {
  const project = args.find((_, i) => args[i - 1] === '--project') || 'Etchify';
  const prio = args.find((_, i) => args[i - 1] === '--prio') || 'Normal';
  const desc = args.find((_, i) => args[i - 1] === '--desc') || '';

  const escapedTitle = title.replace(/'/g, "''");
  const escapedDesc = desc.replace(/'/g, "''");

  const sql = `INSERT INTO tasks (name, projekt_select, priority, quelle, zustaendigkeit, description) VALUES ('${escapedTitle}', '${project}', '${prio}', 'Claude', 'AI/Claude', '${escapedDesc}') RETURNING id`;
  const result = psql(sql);
  console.log(`✅ Created: ${result}`);
  console.log(`   ${title}`);
}

const [cmd, ...args] = process.argv.slice(2);

try {
  switch (cmd) {
    case 'list': case 'ls': listTasks(args); break;
    case 'get': getTask(args[0]); break;
    case 'claim': claimTask(args[0], args[1]); break;
    case 'done': markDone(args[0]); break;
    case 'later': case 'park': laterTask(args[0]); break;
    case 'unlater': case 'unpark': unlaterTask(args[0]); break;
    case 'update': updateStatus(args[0], args[1]); break;
    case 'unclaim': unclaimTask(args[0]); break;
    case 'unclaim-stale': case 'cleanup': unclaimStale(args); break;
    case 'create': case 'new': createTask(args[0], args.slice(1)); break;
    default:
      console.log(`Usage: notion-tasks <command> [args]
Commands:
  list [--project X] [--all] [--later] [-v]  List open tasks (--later shows parked)
  get <id>                           Get task details
  claim <id> <session>               Claim task for session
  unclaim <id>                       Release claim on task
  unclaim-stale [--session X] [--project X]  Release all stale claims
  done <id>                          Mark task as done
  later <id>                         Park task for later (hidden from list)
  unlater <id>                       Bring parked task back to active
  update <id> <status>               Update ERP_Status
  create <title> [--project X] [--prio X] [--desc X]`);
  }
} catch (err) {
  console.error(`❌ ${err.message}`);
  process.exit(1);
}
