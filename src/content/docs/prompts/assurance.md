---
title: "Prompts: assurance"
description: Reusable prompts for assurance readiness and AI-supported assurance procedures — planning aids and drafting, never conclusions.
reviewed: 2026-10-07
owner: Workflow owner — Sustainability assurance
tags: [prompts, assurance, testing]
status: stable
sidebar:
  order: 3
---

:::caution
Use only firm-approved tools for assurance work, document AI use in the working papers, and follow your firm's methodology. These prompts are aids; the engagement team performs the procedures and concludes. See [P-12](/playbooks/assurance-testing/).
:::

Prompts embedded in playbooks: [P-11 readiness (11.1–11.5)](/playbooks/assurance-readiness/#prompts) · [P-12 testing (12.1–12.4)](/playbooks/assurance-testing/#prompts).

```text title="A-1 — Risk factor brainstorm (planning aid)"
Using the entity's prior report, criteria and process notes (attached), list factors that could increase the risk of
material misstatement in {{metrics}}: complexity, estimates, manual steps, system changes, new sites/acquisitions,
incentives (targets, remuneration links), data from third parties, prior-year issues. For each: where in the process ·
why it matters · evidence to obtain. Cite the documents. This is a brainstorming aid; the team assesses risk.
```

```text title="A-2 — Inquiry list"
Draft inquiry questions for {{role}} about {{process}} for a {{assurance_level}} assurance engagement. Group by:
process understanding, changes in the period, controls, estimates, known issues. Make questions open and specific;
avoid leading questions. Max 15 questions.
```

```text title="A-3 — Working paper draft from evidence"
Draft a working-paper summary for procedure {{procedure_id}}: objective · population and source · method (as
performed, from TEAM_NOTES) · items tested · exceptions (from EXCEPTION_LOG) · follow-up · conclusion placeholder
"[Conclusion — preparer to complete]". Use only the attached notes and logs. Do not write the conclusion.
```

```text title="A-4 — Exception analysis"
For the exceptions listed, group by root cause (unit error, period cut-off, factor selection, duplicate, missing
evidence, other), list the amounts in each group from the log (the spreadsheet totals them — do not add them yourself), and
identify whether exceptions suggest a control deficiency to discuss with the engagement leader. No conclusions on
misstatement.
```
