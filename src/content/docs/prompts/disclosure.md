---
title: "Prompts: disclosure & reporting"
description: Reusable prompts for CSRD/ESRS, IFRS S2, CDP and narrative drafting with bound numbers.
reviewed: 2026-10-07
owner: Workflow owner — Disclosure
tags: [prompts, csrd, esrs, cdp, issb]
status: stable
sidebar:
  order: 2
---

Prompts embedded in playbooks: [P-04 DMA (4.1–4.5)](/playbooks/csrd-double-materiality/#prompts) · [P-05 ESRS (5.1–5.3)](/playbooks/esrs-gap-analysis/) · [P-06 IFRS S2](/playbooks/ifrs-s2-readiness/) · [P-07 SB 253](/playbooks/california-sb253-sb261/#prompts) · [P-08 CDP (8.1–8.5)](/playbooks/cdp-response-drafting/#prompts).

```text title="D-1 — Narrative with bound numbers"
Draft the narrative for {{section}} using the METRICS table (metric_id, value, unit, period).
Wherever you mention a figure, write a binding token instead of the number: {{metric:<metric_id>}} — for example
"Scope 1 emissions were {{metric:S1_total}}". The publishing tool replaces tokens with values and fails if a token
is unknown. Do not write any digits except years and standard names (e.g. "ESRS E1", "IFRS S2").
Tone: factual, concise, no promotional language.
```

```text title="D-2 — Cross-framework consistency"
Compare the same metrics and statements across DOCUMENTS (e.g. sustainability statement, CDP draft, SB 253 package,
annual report). Return a table: metric/statement · value or wording in each document · consistent? · if not, the
difference and the likely reason category (boundary, period, method, rounding, error). Do not decide which is right.
```

```text title="D-3 — Plain-language summary for executives"
Summarise the attached disclosure section for a board audience in 150 words: what we report, what changed, what is
uncertain, and what decisions are needed. Use only facts in the section; no new numbers; no adjectives like
"significant" unless the section uses them.
```

```text title="D-4 — Greenwashing-risk review"
Review the draft claims below against EVIDENCE. For each claim: claim text · type (target, achievement, product,
offset/neutrality, comparative) · evidence found (quote + source) · risk (low/med/high) · why · safer wording option.
Flag absolute claims ("carbon neutral", "sustainable", "zero"), claims relying on offsets, and comparatives without a
stated basis. Do not provide legal conclusions.
```
