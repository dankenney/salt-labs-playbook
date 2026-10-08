---
title: "P-13 · Regulatory horizon scanning"
description: A repeatable, cited monthly scan of sustainability reporting and assurance developments — with AI doing the reading and people doing the judging.
reviewed: 2026-10-07
owner: AI lead
tags: [regulatory, agents]
status: draft
reviewEveryMonths: 3
sidebar:
  order: 13
  label: "P-13 Horizon scanning"
---

## At a glance

| | |
|---|---|
| **Outcome** | A monthly update to the [regulatory tracker](/reference/regulatory-tracker/), a short team briefing, and client alerts where relevant |
| **AI does** | Monitors defined sources, summarises changes with links and dates, compares against the tracker, drafts the briefing |
| **AI never does** | Publish an update without a human check of the primary source |
| **Time-saving estimate** | 50–70% less time reading and summarising (estimate; assumes a fixed source list) |

## Source list (primary sources first)

| Topic | Primary sources |
|---|---|
| EU (CSRD, ESRS, Taxonomy) | EUR-Lex (Official Journal), European Commission, EFRAG |
| ISSB | IFRS Foundation (jurisdictional profiles page), national regulators |
| UK | GOV.UK (UK SRS), FCA policy statements |
| US federal | SEC (rulemaking, press releases), Federal Register |
| California | CARB SB 253/261 pages and guidance; court dockets via reputable law-firm summaries |
| Assurance | IAASB, IESBA, PCAOB, AICPA, national standard setters |
| Methods | GHG Protocol, SBTi, CDP, ISO |

Law-firm and Big Four summaries are useful **secondary** sources; always link the primary source in the tracker.

## Monthly workflow

1. **Collect:** fetch updates from the source list for the past month (feeds, newsletters, manual checks).
2. **Prompt 13.1:** summarise each development: what changed, effective dates, who is affected, source link, date.
3. **Diff against the tracker (Prompt 13.2):** what is new, what changes an existing row, what is unchanged.
4. **Human check:** open each primary source; confirm dates and wording. Mark anything uncertain as *uncertain*.
5. **Publish:** update the tracker rows (with "checked" dates), add a [changelog](/updates/changelog/) entry, send the team briefing.

```text title="Prompt 13.1 — Development summary"
Summarise each item in UPDATES as: jurisdiction · instrument (name, number) · what changed (≤ 40 words) ·
status (proposed / adopted / in force / enjoined / withdrawn) · key dates · who is affected · primary source URL ·
secondary source URL · confidence (high if a primary source is linked, otherwise medium/low).
Do not infer dates that are not stated. If sources conflict, report both.
```

```text title="Prompt 13.2 — Tracker diff"
Compare the summaries with the current TRACKER table. Return three lists: NEW (not in tracker), CHANGED (row id,
old value → new value, source), UNCHANGED. For CHANGED, quote the text that supports the change.
```

## Controls

- [ ] Every tracker row has a primary source link and a "checked" date
- [ ] Uncertainty is stated, not smoothed over
- [ ] Client alerts reviewed by a subject-matter lead before sending
