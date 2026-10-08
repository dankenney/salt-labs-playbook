---
title: Review cadence & citation rules
description: Who reviews what and when, how "last reviewed" works, and the rules for sources on this site.
reviewed: 2026-10-07
owner: AI lead
tags: [maintenance, regulatory]
status: stable
sidebar:
  order: 3
---

## Cadence

| Content | Cadence | Reviewer | Trigger for an unscheduled review |
|---|---|---|---|
| Regulatory tracker, SB 253/261, Ideas inbox | Monthly | AI lead | Any new regulation, court ruling or official guidance |
| CSRD/ESRS, IFRS S2, CDP, assurance and independence pages | Quarterly | Workflow owners | Standard or guidance change; CDP questionnaire release |
| Other playbooks, prompts, tools | Every 6 months | Workflow owners | Model change, repeated reviewer corrections, tool change |
| Whole-site link and metadata check | Every build | Automated (`npm run build`) | — |

## Monthly maintenance routine (about 2 hours)

1. Run [P-13 horizon scanning](/playbooks/regulatory-horizon-scanning/) and update tracker rows with new **checked** dates.
2. Process the [Ideas inbox](/ideas/inbox/): fold in, backlog or drop.
3. Find overdue pages: `npm run review:due`.
4. Update the [changelog](/updates/changelog/).
5. `npm run build` → commit → deploy (once hosting is approved).

## "Last reviewed" means

A person read the **whole page**, checked its sources and examples, and confirmed it is still right. Fixing a typo does not reset the date.

## Citation rules (summary)

See [Citation discipline](/quality-risk/citation-discipline/). In short: primary sources first; link every regulatory statement; date it; state uncertainty; quote vendors only from their own public pages; no invented statistics; no client or internal information.
