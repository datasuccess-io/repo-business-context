Repo Business Context — Concept Guide

What it is

- A small, in‑repo, AI‑first knowledge layer that unifies business, product, and technology for solo founders and very small teams.
- Markdown documents designed for both humans and agents to read, update, and enforce alignment with the running product.

Why it matters

- Agents and developers need intent, not only code. This context reduces drift, improves decisions, and accelerates consistent outputs across code, copy, and ops.

Who it’s for

- Solo founders or tiny teams shipping from a single repository, where the developer is also the founder.
- Not intended for multi‑repo enterprises or heavy external tooling as source of truth.

Operating principles

- Docs are canonical alongside code. Commit context changes with the code that necessitates them.
- Prefer concise, current facts over exhaustive narratives. Link out rather than duplicate.
- Use cycles, not calendar sprints: plan as you ship; reflect post‑deploy.

Front‑matter standard

- ## Every file starts with:
  context_type: business|product|tech|development|operations|brand|agent|cycle|decision
  status: draft|active|deprecated
  last_updated: YYYY-MM-DD
  ***
- Agents must update last_updated when content changes and set status: draft when unsure.

Recommended structure

- AGENTS.md Instructions for agents to use this context
- context/
  - README.md This guide
  - CONTEXT.md File map and routing for agents
  - business/ Vision, strategy, personas, pricing
  - product/ Features, flows, UX patterns
  - tech/ Architecture, domain model, data model
  - development/ Conventions, constraints, workflows, decisions
  - operations/ Providers, infrastructure, observability, CI/CD
  - cycles/ active.md, backlog.md, changelog/retros
  - brand/ Voice, assets, channels
  - agents/ Capabilities, maintenance, specialized roles

Maintenance rules

- No feature or schema change is done until relevant context files are updated.
- Data/schema changes update tech/data-model.md; stack or infra changes update tech/architecture.md and/or operations/\*.
- Copy or UX changes align with brand/voice.md and product/ux-patterns.md.
- Keep files focused; prefer <500 lines per file. Split when needed.

Cycles workflow

- cycles/active.md is the working focus. After a deploy, log a brief reflection (what changed, why, links) and clear active.md for the next cycle. Backlog and changelog files are optional but recommended.

AI integration

- Agents must read CONTEXT.md first to locate the right files, then confirm constraints before acting.
- Use tag/section scans rather than loading everything. Prefer status: active.
- When behavior changes, agents propose minimal diffs to update docs with last_updated set to today.

Optional automation

- PR checklist: “Did you update relevant context files?”
- Front‑matter lints: verify required keys and valid dates.
- Warning‑only drift check: if src/ changed but context/ did not, annotate the PR.
- Periodic Context Steward: scan recent diffs and open PRs suggesting updates.

Getting started

- Create folders listed above, starting with business/vision, product/features, tech/architecture, tech/data-model, and cycles/active.
- Populate minimal truths. Mark uncertain sections as draft.
- Point your IDE/agent to read AGENTS.md and CONTEXT.md before coding.
