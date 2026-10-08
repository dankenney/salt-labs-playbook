---
title: How to contribute
description: How anyone on the team suggests or makes a change — from a quick fix to a new playbook.
reviewed: 2026-10-07
owner: AI lead
tags: [maintenance]
status: stable
sidebar:
  order: 1
---

Content lives as Markdown files in `src/content/docs/`. One file = one page. The full guide is `CONTRIBUTING.md` in the repository root; this is the short version.

## Three ways to contribute

| Size | How |
|---|---|
| **Small fix** (typo, broken link, outdated date) | Edit the Markdown file and open a pull request, or post the fix in the team channel for a maintainer |
| **Prompt improvement** | Include the golden-set result before and after (see [Evals](/prompts/evals/)); the workflow owner approves |
| **New page or playbook** | Copy the [page template](/maintaining/page-template/); open a pull request; the AI lead and the relevant workflow owner review |
| **Idea** | Use the [Ideas inbox](/ideas/inbox/#submit-an-idea) template |

## Before you submit

- [ ] Public sources only — no client names, engagement details or internal tools
- [ ] Every regulatory statement has a source link and you checked it today
- [ ] Time-saving figures are labelled as estimates with assumptions
- [ ] `reviewed:` set to today; `tags:` from the controlled list
- [ ] `npm run build` passes (it checks links and metadata)
- [ ] A line added to the [changelog](/updates/changelog/)
