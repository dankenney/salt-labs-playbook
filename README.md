# BeSalt Labs · AI-First Sustainability Playbook

Practical, tactical guidance for running a climate change and sustainability services practice AI-first: use-case playbooks, copyable prompts and agent patterns, quality/risk controls, a tools landscape, a reference build, an ideas inbox and a dated regulatory tracker.

> A BeSalt Labs working playbook. Practical guidance, not professional advice — always follow your organization's policies.
> Public sources only. No client names, engagement details or internal tools.

## Quick start

```bash
# Node 22.12+ required (on the shared box: export PATH=~/.local/node22/bin:$PATH)
npm ci
npm run dev          # http://127.0.0.1:4321 with live reload
npm run build        # static site → dist/  (validates links, tags and 'reviewed' dates)
npm run preview      # serve dist/ on http://127.0.0.1:4321
npm run review:due   # pages past their review date
npm run screenshots  # headless-Chromium screenshots of a running preview → screenshots/
```

## Stack

- [Astro](https://astro.build) + [Starlight](https://starlight.astro.build) — Markdown content, sidebar, dark/light themes, copy buttons on code blocks (Expressive Code).
- [Pagefind](https://pagefind.app) — static full-text search, runs in the browser.
- `starlight-links-validator` — the build fails on broken internal links or anchors.
- Self-hosted fonts via `@fontsource` (Inter, Fraunces, JetBrains Mono). No external requests at runtime.

## Layout

```
src/content/docs/        one Markdown file per page (folders = sidebar sections)
  start-here/ playbooks/ prompts/ quality-risk/ tools/ reference-build/ ideas/ reference/ updates/ maintaining/
src/content.config.ts    frontmatter schema (reviewed, owner, tags, status, reviewEveryMonths)
src/data/tags.ts         controlled tag vocabulary
src/components/          PageTitle (metadata row) and Footer (disclaimer) overrides
src/pages/tags/          tag index and per-tag pages
src/pages/robots.txt.ts  noindex by default
src/styles/theme.css     theme (see MAINTAINING.md → Design rules)
scripts/                 review-due.mjs, screenshots.py
.github/workflows/       deploy.yml (build + deploy to GitHub Pages on push to main), check.yml (PR build)
```

See [CONTRIBUTING.md](CONTRIBUTING.md) for how content is added and [MAINTAINING.md](MAINTAINING.md) for cadence, citation rules, design rules and deployment.
