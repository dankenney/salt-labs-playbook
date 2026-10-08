# Maintaining the playbook

Maintainer: Salt Labs (the AI lead), maintained with Grok Bot's help. This file is the operating manual.

## Review cadence

| Content | Cadence | Notes |
|---|---|---|
| `reference/regulatory-tracker.md`, `playbooks/california-sb253-sb261.md`, `ideas/inbox.md` | Monthly | `reviewEveryMonths: 1` |
| CSRD/ESRS, IFRS S2, CDP, EU Taxonomy, assurance, independence, tool approval | Quarterly | `reviewEveryMonths: 3` |
| Everything else | 6 months | default |

`npm run review:due` lists overdue pages; overdue pages also show "review overdue" under their title. Resetting `reviewed` means a person re-read the whole page and re-checked its sources — not a typo fix.

### Monthly routine (~2 hours)
1. Horizon scan (playbook P-13): check primary sources listed in `playbooks/regulatory-horizon-scanning.md`; update tracker rows and their "checked" dates; state uncertainty explicitly.
2. Triage the ideas inbox.
3. `npm run review:due` → review overdue pages.
4. Changelog entry in `updates/changelog.md`.
5. `npm run build` → commit → deploy (only once hosting is approved).

### Known near-term dates to re-check (as of 2026-10-07)
- CDP final disclosure deadline 28 Oct 2026.
- SB 253 first report due 10 Nov 2026; CARB Initial Regulation pending OAL approval.
- Revised ESRS (2026/1563) in force 10 Nov 2026; EFRAG draft XBRL taxonomy consultation closes 11 Nov 2026.
- SB 261 Ninth Circuit ruling (pending); SEC final rescission (pending).
- ISSA 5000, IESSA and PCAOB QC 1000 effective 15 Dec 2026.

## Source-citation rules
- Primary sources first (EUR-Lex, regulators, standard setters); secondary commentary labelled as such.
- Every regulatory statement: link + date. Uncertain → say "uncertain"/"pending"/"no ruling reported as of".
- Vendor capabilities only as quotes from the vendor's own public pages, with a note that they are untested.
- No invented statistics, citations, client names or internal firm tools/policies.
- Time savings: "planning estimate" + assumptions.

## Design rules (keep agent and human edits on-brand)
- Palette: dark = deep forest (`--sl-color-black #0e1513`) with mint accent `#3fbf96` and lichen highlight `#d9f99d`; light = paper `#fbfaf7` with evergreen accent `#0d6b5e`. Defined only in `src/styles/theme.css`.
- Type: Fraunces (display headings, h2/h3), Inter (body), JetBrains Mono (code). Self-hosted; never add CDN fonts or external scripts.
- Landing page cards: `.pb-card` with `.pb-num` code (P-01…/01…) and an optional `.pb-depth` chip ("Deep dive"). Keep 8 cards per grid.
- Callouts: note = information, tip = shortcut, caution = risk, danger = hard rule (policy/legal/independence).
- Brand: "Salt Labs · AI-First Sustainability Playbook". The only brand asset is the SL monogram in `src/assets/mark.svg` (also `public/favicon.svg`). No third-party, firm or client logos.
- The footer disclaimer in `src/components/Footer.astro` must stay on every page.

## Upgrading dependencies
`npm outdated` → bump Astro/Starlight together → `npm run build` → check screenshots (`npm run preview` + `npm run screenshots`). Starlight component overrides live in `src/components/`; re-check them against the upstream `Footer.astro` / `PageTitle.astro` after major upgrades.

## Hosting & deployment
- Default is **noindex** (meta tag + `robots.txt` Disallow). Set `PLAYBOOK_INDEXABLE=true` at build time to allow indexing.
- `SITE_URL` sets the canonical URL (default `https://playbook.besaltlabs.ai`).
- GitHub Pages: `.github/workflows/deploy.yml` runs on manual dispatch only. Set repo variables `SITE_URL`, `PAGES_CUSTOM_DOMAIN` (written to `public/CNAME` at build time; see `CNAME.example`) and optionally `PLAYBOOK_INDEXABLE`. Uncomment the `push` trigger to auto-deploy.
- Content uses root-relative links, so host on a (sub)domain root, not a `github.io/<repo>` path.
- Nothing has been published. Deployment needs the owner's explicit go-ahead.
