# Etchify Website

Marketing-Website für Etchify — Shopify Gravur & Print Konfigurator.
Owner: Valerian Huber (Luvex / Alpin-Code)

## Tech Stack
- **Framework**: Next.js 16 (App Router) + React 19 + TypeScript
- **Styling**: Tailwind CSS 4 + @tailwindcss/typography
- **Font**: Inter (Google Fonts)
- **i18n**: Custom system mit DeepL API, 5 Sprachen (DE, EN, FR, ES, IT)
- **Hosting**: Vercel
- **Domain**: https://etchify.app

## Wichtige Pfade
```
src/app/          # Next.js App Router pages
src/components/   # React Components (landing/, layout/, ui/)
src/lib/          # i18n, LocaleProvider, utilities
src/locales/      # Translation JSON files (de, en, fr, es, it)
```

## Konventionen
- Commits: Deutsch oder Englisch OK
- Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>
- Plan-Mode für größere Features
- Skills nutzen und pflegen

## Design System
- **Primary**: #818cf8 (Indigo)
- **Secondary**: #a78bfa (Light Indigo)
- **Dark BG**: #0f0d1a
- **Darker BG**: #0a0812 (Footer)
- **Muted BG**: #1a1726
- **Border**: #2a2538
- **Text**: white (primary), gray-400 (secondary), gray-500 (muted)

## Commands
```bash
npm run dev          # Development server
npm run build        # Production build
npm run lint         # ESLint
```

## Infrastructure Tools
- **Vercel CLI**: `npx vercel` (eingeloggt als valerian92) — Deployments, Domains, Env-Vars
- **Hostinger MCP**: DNS, Domains, VPS verwalten (global in ~/.claude/.mcp.json)
- **Task CLI**: `node .claude/tools/notion-tasks.js` — PostgreSQL Tasks via SSH+Docker
- **Playwright**: Nur wenn MCP/CLI nicht ausreicht oder User mitsehen will

### Tool-Prioritaet
1. Hostinger MCP fuer DNS/Domain/VPS
2. Vercel CLI fuer Deployments
3. SSH fuer VPS-Zugriff
4. Playwright als letztes Mittel
