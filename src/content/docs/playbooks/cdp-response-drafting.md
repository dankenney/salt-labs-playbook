---
title: "P-08 · CDP response drafting"
description: Draft a CDP climate response faster and more consistently — reuse prior answers, map to IFRS S2, cite evidence, and tie every number to the inventory.
reviewed: 2026-10-07
owner: Workflow owner — Disclosure
tags: [cdp, issb, ghg-accounting]
status: stable
reviewEveryMonths: 3
sidebar:
  order: 8
  label: "P-08 CDP drafting"
  badge: { text: Deep, variant: success }
---

## 2026 cycle facts (checked 7 Oct 2026)

- CDP released the 2026 corporate questionnaire in April 2026 and publishes a [mapping of IFRS S2 to the 2026 questionnaire](https://assets.ctfassets.net/v7uy4j80khf8/hEXb1sbntq2GyKiYmMzei/9c9b92d8be6292b1be7367bb8fd3b002/Mapping_IFRS_S2_to_CDP%C3%A2__s_2026_Questionnaire.pdf). CDP notes that alignment does not by itself mean compliance with IFRS S1/S2.
- The 2026 **scoring deadline was 16 Sep 2026**; the portal stays open for (unscored) disclosure and amendments until **28 Oct 2026** (23:59 IDLW). Source: [CDP Disclosure 2026](https://www.cdp.net/en/disclosure-2026), [CDP Help Center](https://help.cdp.net/en-us/knowledgebase/article/KA-01079).
- Use CDP's version-control table to see which questions changed from last year before reusing answers.

## At a glance

| | |
|---|---|
| **Outcome** | A complete draft response in CDP's structure, each answer with evidence links, a change log vs last year, and a numeric tie-out to the GHG inventory |
| **AI does** | Carries forward and updates prior answers; drafts new answers from evidence; flags changed questions; checks consistency across modules |
| **AI never does** | Enter numbers that are not from the inventory; make claims (targets, policies, board oversight) without evidence; submit |
| **Time-saving estimate** | See [estimate](#time-saving-estimate) |

## Inputs

- [ ] Last year's submitted response (export) and score feedback
- [ ] This year's questionnaire, guidance and version-control table
- [ ] GHG inventory output (Scope 1, 2 location/market, 3 by category), verification statement if any
- [ ] Evidence library: policies, board minutes extracts, targets (with validation status), risk register, transition plan, energy and renewable data
- [ ] IFRS S2 / ESRS disclosures if published, for consistency

## Workflow

1. **Change triage (Prompt 8.1):** compare last year's questions with this year's using the version-control table. Tag each question *unchanged*, *changed wording*, *new*, *removed*.
2. **Evidence library:** put source documents in one approved location with stable IDs. Answers must cite these IDs.
3. **Carry-forward (Prompt 8.2):** for unchanged questions, update last year's answer only where evidence shows a change; list what changed.
4. **Draft new and changed answers (Prompt 8.3):** from evidence only, in CDP's required format (selection lists, numeric fields, text limits).
5. **Numbers:** Module 7-type emissions fields are filled **from the inventory output by reference**, not typed by the AI. Run the tie-out (**Prompt 8.4** finds every number in the draft and checks it against the inventory).
6. **Consistency pass (Prompt 8.5):** governance, risk and target statements are consistent across modules and with the annual report and other disclosures.
7. **Review:** owners of each module review; the sustainability lead approves; the client submits.
8. **After submission:** store the final export, the evidence index and lessons for next year.

## Prompts

```text title="Prompt 8.1 — Question change triage"
Compare LAST_YEAR_QUESTIONS with THIS_YEAR_QUESTIONS using the VERSION_CONTROL_TABLE.
For each of this year's questions return: question_id · status (unchanged / wording changed / new / removed-merged) ·
summary of the change (≤ 20 words) · reuse advice (reuse / update / draft new).
Use the version-control table as the authority; if it conflicts with your comparison, follow the table and flag it.
```

```text title="Prompt 8.2 — Carry-forward with change log"
For question {{question_id}}, here is last year's answer and the current evidence.
1. Identify statements in last year's answer that are no longer supported by current evidence.
2. Produce an updated answer in the same format, changing only what the evidence requires.
3. Output a change log: old text → new text → evidence ID.
Rules: do not improve wording for its own sake; do not add claims without an evidence ID; keep within {{char_limit}} characters.
```

```text title="Prompt 8.3 — Draft a new or changed answer"
Draft an answer to CDP question {{question_id}} ("{{question_text}}") following the guidance in GUIDANCE.
- Use only EVIDENCE; cite evidence IDs in square brackets after each claim.
- For selection fields, choose only from the options listed in GUIDANCE.
- For numeric fields, write the reference to the inventory cell (e.g. INV!Scope1_total) instead of a number.
- If evidence is insufficient, write "INSUFFICIENT EVIDENCE" and list what is needed and from whom.
- Respect the character limit of {{char_limit}}.
```

```text title="Prompt 8.4 — Numeric tie-out finder"
List every number, percentage and year in the draft response below, with its question ID and the sentence.
For each, state the inventory or evidence reference it should tie to, or "UNBOUND" if none is cited.
Do not judge whether the number is correct; the tie-out tool will compare values.
```

```text title="Prompt 8.5 — Cross-module consistency"
Review the full draft. Report inconsistencies between modules and with ANNUAL_REPORT and OTHER_DISCLOSURES on:
board oversight, management responsibility, risk identification process, targets (base year, scope, ambition,
validation status), Scope 1/2/3 totals and categories, renewable energy share, and transition plan statements.
Quote both sides and give question IDs. Do not edit the draft.
```

## Review checkpoints and controls

| Checkpoint | Who | What |
|---|---|---|
| Change triage | Workflow owner | Correct reuse decisions; new questions assigned |
| Module review | Module owners | Evidence supports each claim; selections valid |
| Numeric tie-out | Senior | Zero UNBOUND numbers; values equal inventory |
| Approval | Client sustainability lead | Final content; client submits |

- **Target claims** (for example science-based target validation) must cite the validation record; do not rely on memory.
- **Consistency with regulated filings** (annual report, CSRD, SB 253) is checked; differences are explained, not hidden.

## Output template

| question_id | status | answer (draft) | evidence IDs | numbers bound? | owner | reviewer | approved |
|---|---|---|---|---|---|---|---|

## Time-saving estimate

:::note[Estimate, not a measured result]
**Planning estimate:** 30–50% less drafting time for a returning discloser with a good prior response and an organised evidence library; 15–25% for first-time disclosers.

**Assumptions:** an approved assistant with document access; inventory finalised before drafting starts; reviewers available. Replace with measured numbers.
:::

## Related

[P-06 IFRS S2 readiness](/playbooks/ifrs-s2-readiness/) · [Numeric tie-out rules](/quality-risk/numeric-tie-out-rules/) · [Prompt library: disclosure](/prompts/disclosure/)
