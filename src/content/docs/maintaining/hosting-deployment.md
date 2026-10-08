---
title: Hosting & deployment
description: How the site is built, previewed and deployed (push to main) — plus hosting options with access control.
reviewed: 2026-10-08
owner: AI lead
tags: [maintenance]
status: draft
sidebar:
  order: 4
---

:::note[Live]
Published at **https://playbook.besaltlabs.ai** from the public repository `dankenney/salt-labs-playbook`. Every push to `main` is built and deployed by GitHub Actions. The site is set to noindex by default.
:::

## Build and preview

```bash title="Local build and preview"
npm ci                 # install exact dependencies (Node 22+)
npm run build          # static site → dist/ (fails on broken links, unknown tags, missing 'reviewed')
npm run preview        # serves dist/ on http://127.0.0.1:4321
npm run review:due     # lists pages past their review date
```

## Configuration

| Variable | Default | Purpose |
|---|---|---|
| `SITE_URL` | `https://playbook.besaltlabs.ai` | Canonical URL used in sitemap and metadata |
| `PLAYBOOK_INDEXABLE` | unset (noindex) | Set to `true` to allow search engines; otherwise every page has `noindex` and `robots.txt` disallows all |

## Publishing

Push to `main` = build and deploy.

1. Edit pages; optionally run `npm run build` locally (CI runs the same build).
2. Commit and push to `main`. The **Deploy playbook to GitHub Pages** workflow (`.github/workflows/deploy.yml`) builds the site and deploys it, usually within two minutes.
3. If the build fails (broken link, unknown tag, missing `reviewed` date), nothing is deployed and the previous version stays live. Fix and push again.
4. Pull requests run **Check playbook build** (`.github/workflows/check.yml`): the same build plus the review-due report.

Custom domain `playbook.besaltlabs.ai` and Enforce HTTPS are set in the repository's Pages settings (source: GitHub Actions). DNS is a DNS-only CNAME to `dankenney.github.io`. To allow search indexing, set the repository variable `PLAYBOOK_INDEXABLE` to `true` and re-run the deploy.

## Hosting options compared (checked 7 Oct 2026)

| Option | Access control | Cost (as published) | Tradeoffs |
|---|---|---|---|
| **GitHub Pages, public** | None — anyone with the URL; indexable if `PLAYBOOK_INDEXABLE=true` | Free | Simplest; custom subdomain + HTTPS supported. Only for content you are happy to publish |
| **Private GitHub repo + Cloudflare Pages + Cloudflare Access** | Email one-time PIN or SSO/IdP policies per user or domain | Cloudflare Zero Trust Free covers up to 50 users; pay-as-you-go beyond ([Cloudflare plans](https://www.cloudflare.com/plans/)) | Strong, granular access with logs; DNS/Cloudflare setup; repo stays private |
| **Vercel password protection** | Shared password (Pro) or SSO "Passport" (Enterprise) | Pro: $20 per protected project per month ([Vercel docs](https://vercel.com/docs/deployment-protection/usage-and-pricing)) | Easy; a shared password is weak access control (no per-user revocation) |
| **Netlify password / private visibility** | Shared password, or "Private" (team and invitees via Netlify login) | Password protection on Pro (from $20/month) ([Netlify plans](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/credit-based-pricing-plans)) | Easy; similar shared-password weakness; private mode needs Netlify accounts |
| **GitHub Pages with private visibility** | Only people with read access to the repository | Requires GitHub Enterprise Cloud | Great if the team already lives in an Enterprise org; every viewer needs a GitHub seat |
| **Internal SharePoint / intranet static hosting** | Corporate SSO | Existing licences; IT effort | Best for firm-internal material and policy compliance; static-site support (search index, routing) varies and usually needs IT help |
