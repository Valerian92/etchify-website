---
name: vercel-deploy-convention
description: Vercel deployment convention — only [deploy]-tagged commits trigger builds. Use when committing, deploying, or discussing Vercel.
updated: 2026-03-11
---

# Vercel Deploy Convention

## Problem
Vercel Free Plan = 100 builds/day. Every `git push` triggered a build, burning through the limit quickly during active development.

## Solution
`vercel.json` → `ignoreCommand` checks for `[deploy]` tag in commit message:
- Commit WITHOUT `[deploy]` → Vercel **skips** the build (exit 0)
- Commit WITH `[deploy]` → Vercel **builds** production (exit 1)

## Usage

```bash
# Normal development commit (no Vercel build)
git commit -m "fix: template camelCase transformation"

# Deploy to production (triggers Vercel build)
git commit -m "fix: template camelCase transformation [deploy]"
```

## When to use [deploy]
- After a batch of changes is tested and ready
- Before QA verification via Playwright
- After fixing a Vercel build blocker
- NOT on every small commit during development

## Files
- `vercel.json` — `ignoreCommand` with grep for `[deploy]`
- `.claude/hookify.vercel-deploy-tag.local.md` — Reminder hook on git commit
