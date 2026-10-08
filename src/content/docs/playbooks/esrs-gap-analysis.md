---
title: "P-05 · ESRS gap analysis & datapoint mapping"
description: Map what the client already reports and holds to the revised ESRS datapoints for its material topics, find the gaps that matter, and build a remediation plan.
reviewed: 2026-10-07
owner: Workflow owner — CSRD
tags: [csrd, esrs]
status: stable
reviewEveryMonths: 3
sidebar:
  order: 5
  label: "P-05 ESRS gap & datapoints"
  badge: { text: Deep, variant: success }
---

## At a glance

| | |
|---|---|
| **Outcome** | Datapoint-level map (requirement → status → source system → owner → gap → action), a prioritised remediation plan, and a reusable mapping for next year |
| **Basis** | Revised ESRS (Delegated Regulation (EU) 2026/1563) for material topics from the [DMA](/playbooks/csrd-double-materiality/); EFRAG implementation material and XBRL taxonomy for datapoint identifiers |
| **AI does** | First-pass mapping of existing disclosures, policies and data inventories to datapoints, with quotes; gap classification; remediation drafts |
| **AI never does** | Decide whether a disclosure "meets" a requirement without reviewer confirmation; drop datapoints because they look minor |
| **Time-saving estimate** | 35–55% less time on first-pass mapping (estimate; assumes a machine-readable datapoint list and digital client documents) |

## Before you start

- **Use a machine-readable datapoint list** for the revised ESRS, not a list re-typed from a PDF. EFRAG publishes implementation material and XBRL taxonomies; EFRAG published a **draft** XBRL taxonomy for the revised ESRS on 17 Sep 2026 for consultation (see [EFRAG ESRS XBRL taxonomy project](https://www.efrag.org/en/projects/esrs-xbrl-taxonomy/exposure-draft-consultation)). Record which version you used.
- The revised ESRS reduce mandatory datapoints substantially (the Commission's text cites a 61% reduction in EFRAG's revision) and add reliefs and phase-ins. Fewer datapoints does not mean proportionally less work: policies, actions, metrics, targets and evidence still have to stand up.
- Scope the map to **material topics only**, plus the general disclosures that always apply.

## Workflow

1. **Load the datapoint list** (ID, standard, paragraph, data type, mandatory/phase-in, description) into a spreadsheet or database.
2. **Collect client sources:** last sustainability report, annual report, policies, CDP response, ESG data inventory (metric, definition, system, owner).
3. **First-pass mapping (Prompt 5.1):** for each datapoint, the AI proposes a status — *Met*, *Partially met*, *Data exists but not disclosed*, *Gap* — with a quote and location, or "no evidence found".
4. **Reviewer pass:** confirm or change every *Met* and *Partially met*. Sample 20% of *Gap* findings to check the AI did not miss evidence.
5. **Gap classification (Prompt 5.2):** policy gap, process gap, data gap, system gap or control gap; effort and dependency.
6. **Interoperability view:** tag datapoints also needed for IFRS S2, CDP or SB 253 so the client builds once. Use published mappings where available (for example CDP's mapping to IFRS S2) rather than AI-generated ones.
7. **Remediation plan (Prompt 5.3):** actions, owners, sequence, quick wins, and the controls needed for assurance.
8. **Checkpoint:** engagement leader and client sustainability lead approve the map and plan.

## Prompts

```text title="Prompt 5.1 — Datapoint first-pass mapping"
For each ESRS datapoint in DATAPOINTS, search the CLIENT_SOURCES and propose a status.

Return a row per datapoint: datapoint_id · status (Met / Partially met / Data exists, not disclosed / Gap /
No evidence found) · evidence_quote (≤ 30 words) · source (document, page or system + field) · what is missing ·
confidence (low/med/high).

Rules:
- "Met" requires a quote that addresses every element of the datapoint description. Otherwise "Partially met".
- Never mark Met based on general statements ("we are committed to…") unless the datapoint asks only for that.
- If a source is ambiguous, choose the lower status and explain.
- Do not summarise the requirement from memory; use the description provided.
DATAPOINTS: {{datapoints_csv}}
CLIENT_SOURCES: {{documents_and_data_inventory}}
```

```text title="Prompt 5.2 — Gap classification"
For each datapoint with status other than Met, classify the gap:
type (policy / process / data / system / control / disclosure-only) · root cause (one line) · effort (S/M/L) ·
dependency (e.g. needs DMA conclusion, needs supplier data, needs finance input) · assurance risk (low/med/high) ·
also needed for (IFRS S2 / CDP / SB 253 / EU Taxonomy / none) using ONLY the MAPPINGS provided.
MAPPINGS: {{official_mappings}}
```

```text title="Prompt 5.3 — Remediation plan draft"
Draft a remediation plan grouped by workstream (governance, data & systems, policies, metrics & targets,
controls & assurance readiness). For each action: datapoints addressed · owner (role) · start/finish quarter ·
prerequisite · quick win? (Y/N). Order by: mandatory first-year datapoints with high assurance risk first.
Do not add datapoints that are not in the gap list.
```

## Review checkpoints and controls

- [ ] Datapoint list version recorded (standard version, taxonomy version, date)
- [ ] Every *Met* reviewed by a person against the full requirement text
- [ ] Sampled *Gap* findings re-checked for missed evidence
- [ ] Phase-ins and reliefs applied deliberately, not by default, and documented
- [ ] Interoperability tags from official or published mappings only
- [ ] Mapping saved as a reusable asset for next year (with the client's permission)

## Output template

| datapoint_id | standard · para | description | material topic | status | evidence (quote · source) | system / owner | gap type | effort | assurance risk | also needed for | action | due |
|---|---|---|---|---|---|---|---|---|---|---|---|---|

## Related

[P-04 Double materiality](/playbooks/csrd-double-materiality/) · [P-06 IFRS S2 readiness](/playbooks/ifrs-s2-readiness/) · [P-11 Assurance readiness](/playbooks/assurance-readiness/) · [Regulatory tracker](/reference/regulatory-tracker/)
