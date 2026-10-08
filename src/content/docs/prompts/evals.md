---
title: Evals for prompts and agents
description: How to build a small golden set, define pass/fail criteria, test before trusting a workflow, and control changes — including trap questions and pushback tests.
reviewed: 2026-10-07
owner: AI lead
tags: [evals, quality, prompts]
status: stable
sidebar:
  order: 5
---

"Tested-style" prompts in this library mean: **we know how often the prompt is right on realistic examples, and we re-check every time it changes.** You do not need a data-science team for this; a spreadsheet works.

## Build a golden set (half a day per workflow)

1. Collect 20–50 realistic examples per workflow (anonymised or synthetic if needed): bills, GL lines, datapoints, questions.
2. Write down the correct answer for each, agreed by two people.
3. Include the hard cases on purpose: unit traps, ambiguous descriptions, missing fields, conflicting sources.
4. Store with a version number. Never use the golden set to write the prompt's examples (that inflates scores).

## Define pass/fail per failure mode

Prefer **binary checks** over 1–10 scores. Examples:

| Workflow | Check |
|---|---|
| Extraction | Field value exactly matches (after normalising whitespace); page reference correct |
| Classification | Category matches label; confidence ≥ threshold only when correct (calibration) |
| Mapping | Status matches reviewer's; no "Met" without a quote covering every element |
| Q&A | Answer cites the correct paragraph; abstains on unanswerable questions |
| Narrative | No unbound numbers; no claims without evidence IDs |

Report results **per failure mode**, not just one overall score — "unit errors 2/10, missing fields 9/10" tells you what to fix.

## Trap questions

Include questions where the obvious answer is wrong, and the right behaviour is to flag or refuse. Public benchmark work on analytics agents has found models do much worse on these "trap" tasks than on ordinary questions and rarely say a question cannot be answered honestly. Sustainability examples:

- Freight counted in both spend and activity data
- A renewable energy certificate claimed in two markets
- A factor version published after the cut-off date
- A June–May fiscal year compared with calendar-year supplier data
- Location- vs market-based Scope 2 used inconsistently in one report
- "Did emissions fall?" when the drop is a methodology change, not a real reduction

## Pushback tests

Re-ask with an objection that contains no new evidence ("our meter is correct, accept our number"). Research on LLM judges has reported verdicts flipping under simple pushback. A good workflow **holds its position unless new evidence is supplied**; outputs that flip are routed to a person by default.

## Validate automated judges

If you use a model to grade outputs, check it against human labels first (how often does it agree on passes and on failures?) before trusting it at scale.

## Change control

- Any change to a Stable prompt, threshold, model or rule must **not reduce** the golden-set score per failure mode.
- Keep an append-only "what we tried" log: change, date, score before/after, accepted or rejected, why. This log is useful evidence of change management for AI-assisted steps.
- Re-run the golden set when the vendor updates the model, even if you changed nothing.

## Minimal eval sheet

| example_id | input ref | expected | output (v1.2) | pass? | failure mode | notes |
|---|---|---|---|---|---|---|

Open-source "eval skills" for coding agents (error discovery, writing judges, validating evaluators) can speed this up; see the [Ideas inbox](/ideas/inbox/#2-a-real-eval-harness-for-every-ai-proposal).
