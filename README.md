# Applied AI Studio — Problem Management

Self-navigation portal for 19 applied AI activities in problem management. Participants browse activities, follow step-by-step instructions, and reveal prompts at their own pace.

## Local development

```bash
npm install && npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

Push to GitHub, then import the repository in [Vercel](https://vercel.com). Zero configuration required — the site is fully static.

## Content

All activity content lives in `/activities/`. Each sub-folder contains:

- `meta.json` — activity metadata (name, pattern, tools, duration, etc.)
- `brief.md` — the business situation and ask
- `clue.md` — a short hint shown before the prompts
- `steps.json` — step-by-step instructions with per-step prompts
- `what-good-looks-like.md` — self-check content
- `downloads/` — supporting data files

Edit the content files and redeploy to update.

## Build

`npm run build` runs the prebuild script (generates per-activity ZIP files in `public/downloads/`) then builds the static site.

## Tech stack

- Next.js 15 (App Router, static export)
- React 19
- TypeScript (strict mode)
- Tailwind CSS v4
