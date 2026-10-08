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

:::caution[Not deployed]
As of 7 Oct 2026 the site is built locally only. Nothing is published until the owner approves a hosting option. The GitHub Pages workflow in `.github/workflows/deploy.yml` runs **only when triggered manually**.
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

## GitHub Pages (prepared, unused)

1. Create the repository (public or private, per the decision) and push.
2. Repository **Settings → Pages → Source: GitHub Actions**.
3. Set repository **variables**: `SITE_URL` (`https://playbook.besaltlabs.ai`), `PAGES_CUSTOM_DOMAIN` (`playbook.besaltlabs.ai`), optionally `PLAYBOOK_INDEXABLE=true`.
4. Add a DNS `CNAME` record for `playbook.besaltlabs.ai` pointing to `<owner>.github.io`, then set the custom domain and **Enforce HTTPS** in Pages settings.
5. Run the **Deploy playbook to GitHub Pages** workflow manually. To deploy on every push to `main`, uncomment the `push` trigger.

The workflow writes `public/CNAME` from `PAGES_CUSTOM_DOMAIN` at build time, so no domain is hard-coded in the repository. Links in content are root-relative, so use a custom (sub)domain rather than a `github.io/<repo>` project path.

## Hosting options compared (checked 7 Oct 2026)

| Option | Access control | Cost (as published) | Tradeoffs |
|---|---|---|---|
| **GitHub Pages, public** | None — anyone with the URL; indexable if `PLAYBOOK_INDEXABLE=true` | Free | Simplest; custom subdomain + HTTPS supported. Only for content you are happy to publish |
| **Private GitHub repo + Cloudflare Pages + Cloudflare Access** | Email one-time PIN or SSO/IdP policies per user or domain | Cloudflare Zero Trust Free covers up to 50 users; pay-as-you-go beyond ([Cloudflare plans](https://www.cloudflare.com/plans/)) | Strong, granular access with logs; DNS/Cloudflare setup; repo stays private |
| **Vercel password protection** | Shared password (Pro) or SSO "Passport" (Enterprise) | Pro: $20 per protected project per month ([Vercel docs](https://vercel.com/docs/deployment-protection/usage-and-pricing)) | Easy; a shared password is weak access control (no per-user revocation) |
| **Netlify password / private visibility** | Shared password, or "Private" (team and invitees via Netlify login) | Password protection on Pro (from $20/month) ([Netlify plans](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/credit-based-pricing-plans)) | Easy; similar shared-password weakness; private mode needs Netlify accounts |
| **GitHub Pages with private visibility** | Only people with read access to the repository | Requires GitHub Enterprise Cloud | Great if the team already lives in an Enterprise org; every viewer needs a GitHub seat |
| **Internal SharePoint / intranet static hosting** | Corporate SSO | Existing licences; IT effort | Best for firm-internal material and policy compliance; static-site support (search index, routing) varies and usually needs IT help |
