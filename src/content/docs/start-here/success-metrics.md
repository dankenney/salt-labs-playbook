---
title: Success metrics
description: How to measure whether AI-first delivery is working — speed, quality, adoption and risk — without fooling yourself.
reviewed: 2026-10-07
owner: AI lead
tags: [metrics, adoption]
status: stable
sidebar:
  order: 4
---

Measure four things: **speed, quality, adoption and risk**. Speed without quality is a liability; adoption without measurement is a hunch.

:::caution[No borrowed statistics]
Do not quote vendor or press claims about time savings as if they apply to your team. Measure your own baseline and report your own numbers, with the sample size.
:::

## Metric set

| Area | Metric | How to measure | Target direction |
|---|---|---|---|
| Speed | Hours per task instance (by workflow) | Timesheet code or a simple log on 5+ instances before and after | ↓ |
| Speed | Elapsed time to first draft | Kick-off to draft available for review | ↓ |
| Quality | Reviewer corrections per output | Count of material edits per item, logged by reviewer | ↓ then stable |
| Quality | Golden-set accuracy | Pass rate on the workflow's eval set, per prompt version | ↑ and no regressions |
| Quality | Downstream defects | Issues found by second-line review, client or assurer that trace to AI-assisted steps | ↓ |
| Quality | Citation validity | Share of citations that resolve to the cited page or paragraph (sampled) | 100% |
| Adoption | Workflow usage | Share of eligible engagements using the playbook | ↑ |
| Adoption | Active contributors | People who submitted a prompt fix, idea or lesson this quarter | ↑ |
| Risk | Policy exceptions | Incidents of unapproved tool use or data mishandling | 0 |
| Risk | Unbound numbers | Numbers in deliverables not traceable to a calculation of record (sampled) | 0 |

## How to report time savings honestly

1. Record the **baseline** on the same task type, with the same level of reviewer, before the pilot.
2. Include **review time** in the "after" number. AI drafts that take longer to review than to write are not savings.
3. Report a **range and the sample size** ("4 engagements, 11 instances, 25–40% less preparer time; reviewer time unchanged").
4. State the **assumptions** (data quality, client responsiveness, familiarity with the tool).
5. Re-measure after three months; early gains often shrink or grow as the novelty wears off and the prompts mature.

## Estimates in this playbook

Each playbook includes a *time-saving estimate*. These are **planning estimates, not measured results**. They state their assumptions so you can test them. Replace them with your own measured numbers as soon as you have them, and record the change in the [changelog](/updates/changelog/).
