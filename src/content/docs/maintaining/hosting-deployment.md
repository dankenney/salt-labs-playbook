---
title: Hosting & deployment
description: How the site is built, previewed and (once approved) deployed — plus hosting options with access control.
reviewed: 2026-10-07
owner: AI lead
tags: [maintenance]
status: draft
sidebar:
  order: 4
---

:::note[Live]
Published at **https://playbook.besaltlabs.ai** from the public repository `dankenney/salt-labs-playbook` (GitHub Pages, branch `main`, folder `docs/`). The site is set to noindex by default.
:::

## Build and preview

```bash title="Local build and preview"
npm ci                 # install exact dependencies (Node 22+)
npm run build          # static site → dist/ (fails on broken links, unknown tags, missing 'reviewed')
npm run preview        # serves dist/ on http://127.0.0.1:4321
npm run review:due     # lists pages past their review date
npm run publish:docs   # build and copy to docs/ for GitHub Pages (commit + push to publish)
```

## Configuration

| Variable | Default | Purpose |
|---|---|---|
| `SITE_URL` | `https://playbook.besaltlabs.ai` | Canonical URL used in sitemap and metadata |
| `PLAYBOOK_INDEXABLE` | unset (noindex) | Set to `true` to allow search engines; otherwise every page has `noindex` and `robots.txt` disallows all |

## Publishing

1. `npm run publish:docs` (builds and refreshes `docs/`).
2. Commit source and `docs/` together; push to `main`. GitHub Pages redeploys automatically.
3. Custom domain: `public/CNAME` = `playbook.besaltlabs.ai`; DNS is a DNS-only CNAME to `dankenney.github.io`.

A GitHub Actions build-on-push workflow is staged in `ops/github-actions/` and can replace the `docs/` step once the publishing token has the `workflow` scope.

## Hosting options compared (checked 7 Oct 2026)

| Option | Access control | Cost (as published) | Tradeoffs |
|---|---|---|---|
| **GitHub Pages, public** | None — anyone with the URL; indexable if `PLAYBOOK_INDEXABLE=true` | Free | Simplest; custom subdomain + HTTPS supported. Only for content you are happy to publish |
| **Private GitHub repo + Cloudflare Pages + Cloudflare Access** | Email one-time PIN or SSO/IdP policies per user or domain | Cloudflare Zero Trust Free covers up to 50 users; pay-as-you-go beyond ([Cloudflare plans](https://www.cloudflare.com/plans/)) | Strong, granular access with logs; DNS/Cloudflare setup; repo stays private |
| **Vercel password protection** | Shared password (Pro) or SSO "Passport" (Enterprise) | Pro: $20 per protected project per month ([Vercel docs](https://vercel.com/docs/deployment-protection/usage-and-pricing)) | Easy; a shared password is weak access control (no per-user revocation) |
| **Netlify password / private visibility** | Shared password, or "Private" (team and invitees via Netlify login) | Password protection on Pro (from $20/month) ([Netlify plans](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/credit-based-pricing-plans)) | Easy; similar shared-password weakness; private mode needs Netlify accounts |
| **GitHub Pages with private visibility** | Only people with read access to the repository | Requires GitHub Enterprise Cloud | Great if the team already lives in an Enterprise org; every viewer needs a GitHub seat |
| **Internal SharePoint / intranet static hosting** | Corporate SSO | Existing licences; IT effort | Best for firm-internal material and policy compliance; static-site support (search index, routing) varies and usually needs IT help |
