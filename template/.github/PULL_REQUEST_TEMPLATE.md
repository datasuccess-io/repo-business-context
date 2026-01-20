---
name: PR – Change Record
about: Use PRs as the canonical change record. Fill all sections; agents and checks rely on them.
---

<!--
This template is used by agents and CI. Do not remove required headings.
IDs: use feature IDs (feat_<slug>), cycle IDs (cycle_YYYYwWW), ADR IDs (adr_####).
-->

## What changed

- Summary:
- Scope:
- Risk level: low | medium | high
- Rollback plan:

## Why (link IDs)

- Feature ID(s):
- Use case / bug ID(s):
- Cycle ID:
- Related ADR(s):

## Decisions

- Summary of key decisions:
- New/updated ADR required? yes | no

## Context updates required

- Affected context files (relative to /context):
  -
- Do these files include updated front‑matter `last_updated`? yes | no

## Observability

- New/changed metrics/traces/logs:
- Dashboards/alerts impacted:

## Data & migrations

- Schema changes:
- Backfill/migration steps:
- Runbook updates needed? yes | no

## Tests & verification

- Test coverage added/updated:
- Manual verification steps:

## Screenshots / recordings (optional)

## Checklist

- [ ] Conventional Commit title
- [ ] Links to IDs provided
- [ ] Context files updated with `last_updated`
- [ ] ADR updated/added if needed
- [ ] Rollback described
