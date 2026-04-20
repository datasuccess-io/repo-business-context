---
status: draft
last_updated: 2026-04-19
category: tech
tags: observability, monitoring, signals
---

# Observability

## Signals

### Skill-proposed updates (primary)

The skill is the main observability mechanism. It notices drift in-conversation and proposes context updates before it becomes a problem — not after. This is better than post-PR CI: it catches issues at the moment of work, not the moment of merging.

### Manual review

Periodically scan `/context/` by `last_updated` and `status`:

- `active` files with an old `last_updated` in a domain that recently changed → likely stale, check against current reality.
- `draft` files sitting unreviewed for weeks → worth a quick pass to either promote or discard.

A sweep takes minutes and resets confidence in the context's accuracy.

## What there isn't

- No CI pipelines — by design. CI enforcement conflicts with existing repo setups and handles drift too late (post-PR). The skill handles it conversationally.
- No production logs — nothing runs in production.
- No metrics — there's no app to instrument.
- No alerts — no on-call.

Observability for RBC is skill-assisted + occasional manual sweep. That's intentional and sufficient for the solopreneur target.
