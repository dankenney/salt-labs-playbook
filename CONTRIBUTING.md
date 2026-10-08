# Contributing

Anyone on the team can propose changes. Content is Markdown in `src/content/docs/`; one file per page.

## Ground rules

1. **Public sources only.** No client names, engagement details, internal tool names, screenshots of client data or non-public firm policies.
2. **Cite or omit.** Every regulatory or factual claim links a source, primary first. Regulatory statements carry a date ("as of …").
3. **Estimates are labelled.** Any time-saving or benefit number is a "planning estimate" with stated assumptions — never presented as a measured result unless it is one (then give the sample size).
4. **Firm policy first.** Pages give general practice and tell readers to follow their firm's policies; never claim to be professional advice or any organization's official guidance.
5. **Plain, confident, no hype.** Short sentences; checklists, tables and callouts.

## Adding or changing a page

1. Copy the skeleton from `src/content/docs/maintaining/page-template.md` (also rendered at `/maintaining/page-template/`).
2. Fill in frontmatter:
   ```yaml
   title: "P-15 · Short, specific title"
   description: One sentence.
   reviewed: YYYY-MM-DD        # required; today's date after a full review
   owner: Workflow owner — Topic
   tags: [from src/data/tags.ts]
   status: draft | stable | placeholder
   reviewEveryMonths: 6        # 1 regulatory, 3 fast-moving, 6 default
   sidebar: { order: 15, label: "P-15 Short label" }
   ```
3. Playbooks follow: At a glance → When to use → Inputs → Workflow → Prompts → Review checkpoints → Controls → Output template → Time-saving estimate → Related.
4. Prompts go in ` ```text title="Prompt N.n — Name" ` blocks, variables in `{{double_braces}}`, and end with a RULES block (see `/prompts/#the-house-rules-block`).
5. New tag? Add it to `src/data/tags.ts` first (unknown tags fail the build).
6. Run `npm run build` — it must pass (links, anchors, tags, required metadata).
7. Add a line to `src/content/docs/updates/changelog.md`.
8. Open a pull request. Reviewers: the AI lead plus the page's workflow owner. Prompt changes include golden-set results before/after.

## Ideas

Use the template at `/ideas/inbox/#submit-an-idea`. The AI lead triages monthly into Folded in / Backlog / Watching.
