Repo Business Context — File Map and Routing

Purpose

- Help agents quickly find the right documents for a task and apply the front‑matter rules consistently.

Front‑matter reminder

- ## Each file begins with:
  context_type: business|product|tech|development|operations|brand|agent|cycle|decision
  status: draft|active|deprecated
  last_updated: YYYY-MM-DD
  ***

Directory index

- business/
  - vision.md Problem, mission, positioning
  - personas.md ICPs and JTBD; stable IDs for cross‑referencing
  - revenue-model.md Pricing and monetization assumptions
  - strategy.md What’s in/out; phases
  - value-prop.md Core propositions
- product/
  - features.md Canonical feature list and states
  - flows.md Key user journeys (optional)
  - ux-patterns.md Design, tone, patterns (optional)
  - integrations.md Product‑level external integrations
- tech/
  - architecture.md Stack, components, data flow
  - domain-model.md Core domain concepts and rules
  - data-model.md Entities, tables, relationships (human‑readable)
- development/
  - conventions.md Code style, structure
  - constraints.md Banned or preferred libs/patterns
  - workflows.md Local dev, branching, CI basics
  - decisions/ ADRs and significant choices
- operations/
  - providers.md SaaS, APIs, keys management, agent runtimes
  - observability.md Logging, metrics, alerting
  - workflows.md CI/CD, deployment, operations playbooks
- cycles/
  - active.md Current cycle objective and plan
  - backlog.md Ideas and pending work
  - changelog.md Post‑deploy retros and history
- brand/
  - voice.md Tone and copy rules
  - assets.md Logo/colors/links
  - channels.md Communication channels
- agents/
  - capabilities.md Available tools/platforms and constraints (optional)
  - maintenance.md Context Steward/how to review (optional)

Task → files routing

- Build or change a feature
  - product/features.md, product/flows.md, tech/domain-model.md
- Change database entities/relations
  - tech/data-model.md, tech/domain-model.md
- Adjust stack, architecture, or conventions
  - tech/architecture.md, development/conventions.md, development/constraints.md
- Add/replace a provider or deployment change
  - operations/providers.md, operations/workflows.md
- Modify logs/metrics or incident handling
  - operations/observability.md, operations/workflows.md
- Write or revise UX copy or tone
  - brand/voice.md, product/ux-patterns.md
- Decide scope or positioning
  - business/strategy.md, business/value-prop.md, business/vision.md
- Plan or reflect current work
  - cycles/active.md, cycles/changelog.md

Usage protocol

- Read this file first, then the minimal set of target docs.
- Prefer status: active; when docs conflict, escalate and propose an update before coding.
- If task requires a new doc, create it with front‑matter and link it here when applicable.
