#!/usr/bin/env node
/**
 * Task-Loading Guard — Erzwingt Notion TASKS laden bei Session-Start
 * Trigger: UserPromptSubmit
 * Project: Etchify (Website)
 */
const fs = require('fs');
const path = require('path');
const os = require('os');
const crypto = require('crypto');

const PROJECT_MAP = {
  'etchify-website': 'Etchify',
  'shopify-engraving': 'Etchify',
};
function detectProject(cwd) {
  const norm = (cwd || '').replace(/\\/g, '/').toLowerCase();
  for (const [key, name] of Object.entries(PROJECT_MAP)) {
    if (norm.includes(key)) return name;
  }
  return null;
}

function getProjectHash(cwd) {
  return crypto.createHash('md5').update(cwd.replace(/\\/g, '/')).digest('hex').slice(0, 12);
}

async function main() {
  let input = '';
  for await (const chunk of process.stdin) input += chunk;

  let data;
  try { data = JSON.parse(input); } catch { process.exit(0); }

  const userMessage = (data.user_message || data.prompt || '').toLowerCase().trim();
  if (userMessage.includes('/clear') || userMessage === 'clear') process.exit(0);

  const cwd = data.cwd || process.cwd();
  const projectHash = getProjectHash(cwd);
  const flagFile = path.join(os.tmpdir(), `claude-tasks-loaded-${projectHash}`);

  if (fs.existsSync(flagFile)) {
    try {
      const flagData = JSON.parse(fs.readFileSync(flagFile, 'utf8'));
      const ageMin = (Date.now() - flagData.timestamp) / 1000 / 60;
      if (ageMin < 240) process.exit(0);
    } catch { /* corrupt flag */ }
  }

  const project = detectProject(cwd);
  const projectFlag = project ? ` --project "${project}"` : '';
  const injection = [
    '',
    '[TASK-LOADING — Fuehre als erste Aktion aus:]',
    '',
    `Bash: node .claude/tools/notion-tasks.js list${projectFlag}`,
    '',
    'Zeige dem User die offenen Tasks.',
    '',
  ].join('\n');

  process.stdout.write(injection);
  process.exit(0);
}

process.on('unhandledRejection', () => process.exit(0));
main().catch(() => process.exit(0));
