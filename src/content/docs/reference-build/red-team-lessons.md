---
title: What red-teaming the prototype taught us
description: Lessons from attacking the reference prototype like a sceptical assurer or insider — and what they mean for any AI-first reporting system.
reviewed: 2026-10-07
owner: Playbook maintainers
tags: [reference-build, quality, assurance]
status: stable
sidebar:
  order: 2
---

After the [reference prototype](/reference-build/emissions-prototype/) was built, it was red-teamed the way a sceptical assurer or an insider would approach it: tampering with the ledger, bypassing segregation of duties, approving stale data, concurrent writers, web attacks, factor cut-off, XBRL scale and narrative number-swaps.

**Scorecard:** 0 critical, 11 high, 13 medium, 12 low findings. Most high findings were fixed in the same pass with regression tests added.

## The headline lesson

> **The math held up. The controls didn't — until they were tested.**

Calculations, GWPs, factor lookups and determinism were correct. The weaknesses were in the control layer — exactly the part that justifies calling a system "audit-grade".

## Lessons that apply to any AI-first system

| What happened | Lesson |
|---|---|
| A tampered ledger still showed "tie-out 89/89" and produced an evidence pack | **Verify integrity before you report.** A system must refuse to produce outputs from a broken or modified record |
| Self-approval was possible with a name variant (capitals plus a trailing space), the AI actor, or a blank actor | **Normalise identities and bar non-human actors from approving.** Test segregation of duties with adversarial inputs |
| A hash chain can be recomputed end to end by someone with database access | **Anchor integrity externally** (signed or timestamped checkpoints). A self-contained hash chain detects accidents, not insiders |
| A grid factor published after the cut-off was still in use for some results — and it was lifecycle-based, not combustion | **Enforce vintage rules on every source**, and label factor type (combustion vs lifecycle) explicitly |
| The tie-out compared a number with itself | **Tie out released files**, not in-memory values. Re-read what was actually published |
| An inline XBRL intensity value was off by a factor of 10⁶ | **Validate scale and units in tagged outputs**, ideally with an independent XBRL processor |
| A stale AI proposal could overwrite a supplier's newer resubmission | **Proposals must be bound to the version they were made on**; reject if the underlying record changed |

## Practical takeaways for teams

1. Red-team before you call anything "assurance-ready". Use an adversarial checklist (identities, tampering, stale data, scale, cut-off).
2. Make red-teaming repeatable: run security and control tests on every change, not once.
3. Report calibration honestly: a near-perfect match to published totals is meaningless if it is calibrated by construction. Lead with the **independent** comparisons.
4. Treat AI layers like code under change management: evaluation sets, regression tests and a change log.

See also: [Assurance readiness](/playbooks/assurance-readiness/) · [Numeric tie-out rules](/quality-risk/numeric-tie-out-rules/) · [Ideas inbox](/ideas/inbox/)
