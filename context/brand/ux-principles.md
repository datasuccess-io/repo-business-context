---
status: draft
last_updated: 2026-04-19
category: brand
tags: ux-principles, design-rules
---

# UX Principles

These principles apply to both the framework itself (how users adopt RBC) and any artifacts it produces (CLI prompts, README, etc.).

## 1. Under 5 minutes to first value

The Quick onboarding promise is the framework's lead. Every interaction that blocks first value has to justify itself.

## 2. No ceremony

Skip options everywhere. "Just go" is always a valid answer. If a user says skip, we write something generic and move on — we never block on a missing answer.

## 3. Drafts over blockers

Agents propose; users decide. AI never promotes drafts on its own. Never silently commits business decisions to `active` status. The user is editor-in-chief by design.

## 4. Status transparency

Users always know what's `draft`, what's `active`, what's `deprecated`. The agent flags drafts explicitly when acting on them. No hidden state.

## 5. Living over complete

A half-populated `/context/` with current `draft` content beats a fully-populated one with stale `active` content. The framework optimizes for freshness, not coverage.

## 6. One answer, many files

The skill routes a single user answer to whichever files it fits. Users don't think in our file structure; they think in their business. The framework adapts.
