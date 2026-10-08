---
title: "Numeric tie-out rules: AI never does the math of record"
description: Rules that keep every reported number traceable to a calculation you can re-perform — and how to enforce them.
reviewed: 2026-10-07
owner: AI lead
tags: [quality, governance, assurance]
status: stable
sidebar:
  order: 2
---

> **Rule zero: a language model never produces a number of record.** It can read numbers, copy them with a reference, and write code that calculates them. The calculation itself runs in a tool you can re-perform.

## The rules

1. **Calculation of record.** Every reported figure is produced by a defined calculation tool (approved platform, controlled workbook or reviewed script) with inputs, factors and steps retained.
2. **Bind, don't type.** Narrative uses references or binding tokens to the calculation output; publishing replaces them. Any number without a binding fails review.
3. **Copy with reference.** When a model must quote a number (for example from a source document), it copies it exactly and cites the location. No rounding, unit conversion or summing.
4. **One snapshot.** All outputs for a period (sustainability statement, CDP, SB 253 package, investor deck) come from the same signed-off snapshot of results.
5. **Tie-out before release.** A tie-out list covers every number in every output: value in output = value in snapshot, and the same metric is identical across outputs (or the difference is explained in writing).
6. **Scripts are reviewed like workpapers.** If the AI writes calculation code, a person reviews it and tests it against hand-calculated cases before use.
7. **Estimates are labelled.** Extrapolations and gap-fills are produced by the calculation tool with their method; their share is disclosed where required.

## Tie-out sheet template

| # | Output | Location | Metric ID | Value in output | Value in snapshot | Match? | Cross-framework consistent? | Checked by |
|---|---|---|---|---|---|---|---|---|

## Enforcing it

- **Lightweight:** reviewers run prompt [8.4](/playbooks/cdp-response-drafting/#prompts) or [12.4](/playbooks/assurance-testing/#prompts) to list every number, then agree each one manually.
- **Better:** a script extracts every numeric token from the outputs and compares with the snapshot; unmatched numbers block release.
- **Best:** outputs are generated from the snapshot with bindings, and the build fails on any unbound number. The [reference build](/reference-build/emissions-prototype/) implements this as a build gate.
