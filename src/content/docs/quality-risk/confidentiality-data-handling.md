---
title: Confidentiality & client data handling
description: Practical rules for what data can go into which AI tools — always subject to your firm's policies and the client's contract.
reviewed: 2026-10-07
owner: AI lead
tags: [confidentiality, governance]
status: stable
sidebar:
  order: 4
---

:::danger[Firm policy and client contracts govern]
Only use AI tools your firm has approved **for the specific data class**. Client contracts can impose stricter limits (for example, no use of AI, or data residency). When in doubt, ask your risk or data protection contact before uploading anything.
:::

## Decision guide

| Data | Public consumer AI tools | Firm-approved enterprise assistant | Approved engagement tools / private deployments |
|---|---|---|---|
| Public information (regulations, published reports) | Per firm policy | ✓ | ✓ |
| Firm internal (non-client) | ✗ (typically) | ✓ per policy | ✓ |
| Client confidential (GL, bills, supplier data) | ✗ | Only if approved for client data and permitted by the contract | ✓ if approved |
| Personal data (names, addresses, employee data) | ✗ | Minimise; only if approved; consider anonymisation | Per data protection assessment |
| Assurance client data | ✗ | Only tools approved for assurance use | ✓ if approved; document in working papers |

## Practical rules

1. **Minimise.** Send only the fields the task needs; strip names and account numbers when they are not needed.
2. **Anonymise test sets.** Golden sets and prompt examples must be synthetic or anonymised.
3. **No cross-client leakage.** Never paste one client's deliverable into a prompt for another client.
4. **Know the retention terms.** Understand whether the tool stores prompts, uses them for training, and where data is processed. Your firm's approval should answer this.
5. **Keep outputs in approved locations.** Downloads and exports follow the same rules as the source data.
6. **Third-party APIs are a data-processing decision.** Do not call external model APIs from scripts with client data unless approved.
7. **Report incidents.** If data goes somewhere it should not, report it immediately through your firm's process.

## Public sites and shared materials

This playbook uses public information only. Do not add client names, engagement details, internal tool names or screenshots of client data to it.
