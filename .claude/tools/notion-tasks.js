#!/usr/bin/env node
/**
 * notion-tasks.js — Token-efficient Notion task CLI for Claude Code
 *
 * Usage:
 *   node .claude/tools/notion-tasks.js list [--project Etchify] [--all]
 *   node .claude/tools/notion-tasks.js get <page_id>
 *   node .claude/tools/notion-tasks.js done <page_id>
 *   node .claude/tools/notion-tasks.js claim <page_id> <session_id>
 *   node .claude/tools/notion-tasks.js later <page_id>       — park task for later
 *   node .claude/tools/notion-tasks.js unlater <page_id>     — bring task back to active
 *   node .claude/tools/notion-tasks.js update <page_id> <status>
 *   node .claude/tools/notion-tasks.js create <title> [--project Etchify] [--prio Hoch]
 *
 * Saves ~90% tokens vs Notion MCP by returning compact text output.
 */

// Load .env.local if NOTION_TOKEN not already set
if (!process.env.NOTION_TOKEN) {
  const fs = require('fs'), path = require('path');
  const envFile = path.resolve(__dirname, '../../.env.local');
  try {
    for (const line of fs.readFileSync(envFile, 'utf8').split('\n')) {
      const m = line.match(/^([A-Z_]+)=(.+)$/);
      if (m) process.env[m[1]] = m[2].trim();
    }
  } catch {}
}
const NOTION_TOKEN = process.env.NOTION_TOKEN;
if (!NOTION_TOKEN) { console.error('❌ NOTION_TOKEN env variable is required'); process.exit(1); }
const TASKS_DB_ID = '188fbf73-f075-80e0-895b-c1d9010e40e0';
const NOTION_VERSION = '2022-06-28';

async function notionFetch(path, method = 'GET', body = null) {
  const opts = {
    method,
    headers: {
      'Authorization': `Bearer ${NOTION_TOKEN}`,
      'Notion-Version': NOTION_VERSION,
      'Content-Type': 'application/json',
    },
  };
  if (body) opts.body = JSON.stringify(body);
  const res = await fetch(`https://api.notion.com/v1${path}`, opts);
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Notion API ${res.status}: ${err}`);
  }
  return res.json();
}

function extractTitle(page) {
  const titleProp = page.properties?.Task?.title;
  return titleProp?.map(t => t.plain_text).join('') || '(untitled)';
}

function extractSelect(page, prop) {
  return page.properties?.[prop]?.select?.name || '-';
}

function extractText(page, prop) {
  return page.properties?.[prop]?.rich_text?.map(t => t.plain_text).join('') || '';
}

function extractCheckbox(page, prop) {
  return page.properties?.[prop]?.checkbox || false;
}

function formatTask(page, verbose = false) {
  const id = page.id;
  const title = extractTitle(page);
  const prio = extractSelect(page, 'Priorität');
  const status = extractSelect(page, 'ERP_Status');
  const project = extractSelect(page, 'Projekt');
  const done = extractCheckbox(page, 'Done');
  const session = extractText(page, 'Claude_Session');

  const prioIcon = { Hoch: '🔴', Mittel: '🟡', Niedrig: '🔵' }[prio] || '⚪';
  const statusIcon = done ? '✅' : { 'In Arbeit': '🔧', 'Done': '✅', 'Erledigt': '✅', 'Später': '💤' }[status] || '📋';

  let line = `${statusIcon} ${prioIcon} ${title}`;
  if (session) line += ` [session:${session}]`;

  if (verbose) {
    const desc = extractText(page, 'Beschreibung');
    const notes = extractText(page, 'Notizen');
    line += `\n   ID: ${id}`;
    line += `\n   Project: ${project} | Status: ${status} | Prio: ${prio}`;
    if (desc) line += `\n   Desc: ${desc.substring(0, 200)}`;
    if (notes) line += `\n   Notes: ${notes.substring(0, 200)}`;
  } else {
    line += `  [${id.substring(0, 8)}]`;
  }
  return line;
}

async function listTasks(args) {
  const project = args.find((_, i) => args[i - 1] === '--project') || null;
  const showAll = args.includes('--all');
  const verbose = args.includes('-v') || args.includes('--verbose');

  const showLater = args.includes('--later');

  const filter = { and: [] };
  if (!showAll) {
    filter.and.push({ property: 'Done', checkbox: { equals: false } });
    if (!showLater) {
      // Hide "Später" tasks by default
      filter.and.push({ property: 'ERP_Status', select: { does_not_equal: 'Später' } });
    }
  }
  if (project) {
    filter.and.push({ property: 'Projekt', select: { equals: project } });
  }
  if (filter.and.length === 0) delete filter.and;

  const body = {
    filter: filter.and ? filter : undefined,
    sorts: [{ property: 'Priorität', direction: 'descending' }],
    page_size: 20,
  };

  const data = await notionFetch(`/databases/${TASKS_DB_ID}/query`, 'POST', body);

  if (data.results.length === 0) {
    console.log('No tasks found.');
    return;
  }

  console.log(`--- ${data.results.length} Tasks ${project ? `(${project})` : ''} ---`);
  for (const page of data.results) {
    console.log(formatTask(page, verbose));
  }
}

async function getTask(pageId) {
  const page = await notionFetch(`/pages/${pageId}`);
  console.log(formatTask(page, true));
}

async function claimTask(pageId, sessionId) {
  // Pre-check: is this task already claimed by another session?
  const existing = await notionFetch(`/pages/${pageId}`);
  const existingSession = extractText(existing, 'Claude_Session');
  const existingStatus = extractSelect(existing, 'ERP_Status');

  if (existingSession && existingSession !== sessionId) {
    console.error(`❌ BLOCKED: Task already claimed by session:${existingSession} (status: ${existingStatus})`);
    console.error(`   Title: ${extractTitle(existing)}`);
    console.error(`   Use --force to override, or pick a different task.`);
    if (!process.argv.includes('--force')) {
      process.exit(1);
    }
    console.log(`⚠️  --force used, overriding claim from session:${existingSession}`);
  }

  const page = await notionFetch(`/pages/${pageId}`, 'PATCH', {
    properties: {
      ERP_Status: { select: { name: 'In Arbeit' } },
      Claude_Session: { rich_text: [{ text: { content: sessionId } }] },
    },
  });

  // Write local tracking file so task-work-guard.js allows edits
  try {
    const regPath = require('path').resolve(__dirname, '../hooks/_session-task-registry.js');
    const reg = require(regPath);
    reg.writeTracking(sessionId, {
      claimed: true,
      currentTaskStart: Date.now(),
      taskId: pageId,
      taskTitle: extractTitle(page),
    });
  } catch { /* hooks dir may not exist in all repos */ }

  console.log(`✅ Claimed: ${pageId} (session: ${sessionId})`);
}

async function markDone(pageId) {
  await notionFetch(`/pages/${pageId}`, 'PATCH', {
    properties: {
      Done: { checkbox: true },
      ERP_Status: { select: { name: 'Erledigt' } },
      Claude_Session: { rich_text: [] },
    },
  });
  console.log(`✅ Done: ${pageId}`);
}

async function updateStatus(pageId, status) {
  await notionFetch(`/pages/${pageId}`, 'PATCH', {
    properties: {
      ERP_Status: { select: { name: status } },
    },
  });
  console.log(`✅ Updated: ${pageId} → ${status}`);
}

async function laterTask(pageId) {
  await notionFetch(`/pages/${pageId}`, 'PATCH', {
    properties: {
      ERP_Status: { select: { name: 'Später' } },
    },
  });
  console.log(`💤 Parked for later: ${pageId}`);
}

async function unlaterTask(pageId) {
  await notionFetch(`/pages/${pageId}`, 'PATCH', {
    properties: {
      ERP_Status: { select: { name: 'Offen' } },
    },
  });
  console.log(`📋 Back to active: ${pageId}`);
}

async function unclaimTask(pageId) {
  const page = await notionFetch(`/pages/${pageId}`);
  const title = extractTitle(page);
  const session = extractText(page, 'Claude_Session');

  if (!session) {
    console.log(`ℹ️  Task not claimed: ${title}`);
    return;
  }

  await notionFetch(`/pages/${pageId}`, 'PATCH', {
    properties: {
      ERP_Status: { select: { name: 'Offen' } },
      Claude_Session: { rich_text: [] },
    },
  });
  console.log(`🔓 Unclaimed: ${title} (was session:${session})`);
}

async function unclaimStale(args) {
  const sessionFilter = args.find((_, i) => args[i - 1] === '--session') || null;
  const project = args.find((_, i) => args[i - 1] === '--project') || null;

  // Find all tasks that have a Claude_Session set and are not done
  const filter = {
    and: [
      { property: 'Done', checkbox: { equals: false } },
      { property: 'Claude_Session', rich_text: { is_not_empty: true } },
    ],
  };
  if (project) {
    filter.and.push({ property: 'Projekt', select: { equals: project } });
  }

  const data = await notionFetch(`/databases/${TASKS_DB_ID}/query`, 'POST', {
    filter,
    page_size: 50,
  });

  if (data.results.length === 0) {
    console.log('No stale claims found.');
    return;
  }

  let unclaimed = 0;
  for (const page of data.results) {
    const session = extractText(page, 'Claude_Session');
    const title = extractTitle(page);

    // If filtering by session, skip non-matching
    if (sessionFilter && session !== sessionFilter) continue;

    await notionFetch(`/pages/${page.id}`, 'PATCH', {
      properties: {
        ERP_Status: { select: { name: 'Offen' } },
        Claude_Session: { rich_text: [] },
      },
    });
    console.log(`🔓 Unclaimed: ${title} (was session:${session})`);
    unclaimed++;
  }

  console.log(`\n✅ ${unclaimed} task(s) unclaimed.`);
}

async function createTask(title, args) {
  const project = args.find((_, i) => args[i - 1] === '--project') || 'Etchify';
  const prio = args.find((_, i) => args[i - 1] === '--prio') || null;
  const desc = args.find((_, i) => args[i - 1] === '--desc') || '';

  const properties = {
    Task: { title: [{ text: { content: title } }] },
    Projekt: { select: { name: project } },
    Quelle: { select: { name: 'Claude' } },
    Zustaendigkeit: { select: { name: 'AI/Claude' } },
  };
  if (prio) properties['Priorität'] = { select: { name: prio } };
  if (desc) properties.Beschreibung = { rich_text: [{ text: { content: desc } }] };

  const page = await notionFetch('/pages', 'POST', {
    parent: { database_id: TASKS_DB_ID },
    properties,
  });
  console.log(`✅ Created: ${page.id}`);
  console.log(`   ${title}`);
}

async function main() {
  const [cmd, ...args] = process.argv.slice(2);

  try {
    switch (cmd) {
      case 'list':
      case 'ls':
        await listTasks(args);
        break;
      case 'get':
        await getTask(args[0]);
        break;
      case 'claim':
        await claimTask(args[0], args[1]);
        break;
      case 'done':
        await markDone(args[0]);
        break;
      case 'later':
      case 'park':
        await laterTask(args[0]);
        break;
      case 'unlater':
      case 'unpark':
        await unlaterTask(args[0]);
        break;
      case 'update':
        await updateStatus(args[0], args[1]);
        break;
      case 'unclaim':
        await unclaimTask(args[0]);
        break;
      case 'unclaim-stale':
      case 'cleanup':
        await unclaimStale(args);
        break;
      case 'create':
      case 'new':
        await createTask(args[0], args.slice(1));
        break;
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
}

main();
