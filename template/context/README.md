# Repo Business Context

> A small, opinionated, AI‑first context layer that lives inside your repo and unifies business, product, tech, brand, and operations for both humans and agents.

---

## 1. What is the Repo Business Context?

The **Repo Business Context (RBC)** is a convention for organizing Markdown files inside your code repository under `/context`. These files describe:

- **Why** the product exists (business, personas, strategy).
- **What** is being built (features, flows, roadmap).
- **How** it works (architecture, domain model, data model, development practices).
- **How** it runs (providers, infrastructure, observability, cycles).
- **How** it should talk (brand voice, copy rules).
- **How agents should behave** (AGENTS.md and `/context/agents/*`).

Key properties:

- **In‑repo**: Context lives in the same Git repo as the code, versioned together.
- **AI‑first**: Files are structured for large language models and agent tools to read, search, and update.
- **Canonical**: `/context` is the **single source of truth** for business + product + tech context.
- **Lightweight**: Plain Markdown + YAML front‑matter, no custom tooling required.
- **Living**: Updated as you build and ship, not a once‑off spec.

This is _not_ a runtime framework or library. It is a **living specification and semantic layer** for your project.

---

## 2. Who is this for?

RBC is optimized for:

- **Solo founders / solopreneurs who are also the developers.**
- Very **small teams** (1–3 people) working primarily inside **one repository**.
- Workflows where **AI agents (in IDE, CLI, CI, etc.) are core collaborators**, not optional helpers.

It is **not** designed for:

- Large organizations with many repos and heavy tools (Jira, Confluence, multi‑service monorepos).
- Projects where product direction changes chaotically every few days and you rarely revisit decisions.
- “Throwaway” prototypes or scripts.

You _can_ adapt the ideas to larger setups, but this template assumes:

- One primary repo per product.
- Most work (coding, planning, copy, operations) happens in this repo with AI assistance.

---

## 3. Problems the Repo Business Context solves

### 3.1 Context fragmentation

Today, key knowledge is scattered:

- Business model in Notion.
- Feature specs in random docs.
- Tech decisions in Slack threads or half‑written ADRs.
- Brand voice in someone’s head or a Figma page.

AI tools embedded in the IDE or CI **cannot see** most of this. They only see code + any inline instructions you paste.

RBC fixes this by putting **all critical context in one small, structured, AI‑readable corpus** inside the repo.

### 3.2 AI without intent

LLMs are good at code patterns, but they don’t know:

- Who you’re building for.
- Which features matter.
- Which trade‑offs (speed vs quality, cost vs UX) you care about.
- What tech or providers they must avoid.

RBC makes the **intent explicit** so agents can align code, copy, and operations decisions with your business.

### 3.3 Re‑explaining everything in every chat

Without RBC, every new AI session starts with:

> “Here’s what my app does…”  
> “Here’s my stack…”  
> “We don’t use Redux…”  
> “Our pricing is…”

RBC lets you say instead:

> “Read `/context` and summarize my project back to me.”  
> “Propose the next cycle based on `/context/operations/cycles/active.md`.”

---

## 4. Core design principles

1. **Canonical over complete**  
   `/context` stores **canonical decisions and definitions**, not every note or brainstorm. Treat it like source code for your product’s intent.

2. **AI‑first structure**  
   Files are written to be easy for LLMs:
   - Clear headings and sections.
   - Consistent patterns across files.
   - Short, focused documents (ideally < 500–800 lines).
   - Simple lists and tables over prose walls.

3. **Minimal, standardized metadata (YAML front‑matter)**  
   Every context file starts with the same small schema:

   ```yaml
   ---
   context_type: business | persona | strategy | feature | use_case | architecture | domain_model | data_model | convention | constraint | decision | operations | cycle | provider | brand | agent | runbook | workflow
   status: draft | active | deprecated
   last_updated: YYYY-MM-DD
   ---
   ```

   - `context_type` — what kind of document this is.
   - `status` — whether the content is authoritative (`active`), in progress (`draft`), or obsolete (`deprecated`).
   - `last_updated` — ISO date; update whenever the content meaningfully changes.

   You may add **extra fields** where helpful (e.g. `cycle_id`, `tags`, `version`), but these three are the standard fields across all `/context` files.

4. **Living with the code**  
   A feature isn’t fully “done” until its relevant `/context` docs are updated. Commit code and context together.

5. **Link, don’t duplicate**  
   If more detail lives in external tools (Figma, analytics, dashboards), link out from `/context` instead of copying large dumps.

6. **Separation of concerns**  
   The folder layout separates “why” (business/product) from “how it works” (tech/development) and “how it runs” (operations).

---

## 5. Directory structure

Recommended structure under the repo root:

```text
AGENTS.md                    # Root instructions for all AI agents (see below)

/context
├── README.md                # This file – explains the concept & structure
├── CONTEXT.md               # Map of files + routing guide for agents
│
├── brand/                   # The “How it talks” – communication
│   ├── voice.md             # Name, slogan, tone, do/don’t rules
│   ├── assets.md            # Logo usage, colors, references to asset locations
│   └── channels.md          # Channels (e.g. website, email, social) & per-channel nuances
|
├── business/                # The “Why” – business model and strategy
│   ├── vision.md            # Problem, mission, positioning, boundaries
│   ├── revenue-model.md     # Pricing, plans, unit economics assumptions
│   ├── personas.md          # ICPs, jobs-to-be-done, pain points (with IDs)
│   ├── strategy.md          # Phases, priorities, out-of-scope items
│   └── value-prop.md        # Core value propositions and messaging pillars
|
├── tech/                    # The “How (logical)” – system & domain
│   ├── architecture.md      # System architecture, components, data flow
│   ├── domain-model.md      # Core domain concepts and business rules
│   └── data-model.md        # Entities, relationships, key schemas
│
├── product/                 # The “What” – user-visible product
│   ├── roadmap.md           # Near / mid / long-term roadmap
│   ├── features.md          # Living spec of shipped & planned features
│   ├── use-cases.md         # Key use cases and user stories
│   ├── ux-principles.md     # UX patterns, interaction rules, content UX
│   └── integrations.md      # External product integrations and rules
│
├── development/             # The “How (development)” – how you build
│   ├── constraints.md       # Libraries / patterns to avoid; non-functional constraints
│   ├── conventions.md       # Code style, patterns, folder structure
│   ├── workflows.md         # Local dev, branching model, CI overview
│   └── decisions.md         # Short ADR-like decision notes
│
├── operations/              # The “How it runs” – operations & cycles
│   ├── providers.md         # SaaS, infra, AI tools, where credentials live (no secrets)
│   ├── observability.md     # Logging, metrics, monitoring, analytics
│   ├── runbook.md           # Incident handling, manual operational tasks
│   └── cycles/              # Build/ship cycles (formerly “sprints”)
│       ├── active.md        # Current focus – single most important file while building
│       └── backlog.md       # Ordered list of candidate work items
|
└── agents/                  # Agent-specific context
    ├── coding-agent.md      # How coding agents should behave & which docs to use
    ├── content-agent.md     # How content/copy agents should behave
    ├── operations-agent.md  # How ops/monitoring agents should behave
    ├── context-steward.md   # “Gardener” agent for keeping /context fresh
    └── capabilities.md      # Available AI tools, MCP servers, and agent platforms
```

You don’t have to create or fill every file immediately. Start small (see §10) and grow as needed.

---

## 6. The cycles model (Continuous Flow instead of Scrum)

Traditional sprints are designed for teams and calendars. For a solo founder + AI agents, the real rhythm is:

> Idea → Chat → Code → Deploy → Learn → Repeat

RBC reflects this with **cycles**:

- **`operations/cycles/active.md`**
  - The “now” file. It defines the current objective, links to relevant context, and outlines a short plan.
  - Agents should read this first when asked “what are we working on?”.

- **`operations/cycles/backlog.md`**
  - Ordered list of ideas, bugs, refactors, and improvements.
  - Each item can reference context by IDs (persona IDs, feature IDs, etc.).

- **`operations/cycles/YYYYMMDD.md`**
  - Created _after_ a significant deploy or milestone.
  - Snapshot of what changed, why, and any learnings.
  - Links to updated `/context` docs and to the relevant git commits.

Cycles are **deploy-driven**, not calendar-driven. You can finish multiple small cycles per day or one larger cycle per week, depending on your pace.

---

## 7. Writing conventions (for both humans and agents)

### 7.1 YAML front‑matter

Every `/context` file starts with:

```yaml
---
context_type: feature
status: active
last_updated: 2026-01-12
---
```

Guidelines:

- Keep `context_type` consistent. Reuse the same values across files.
- Use `status: draft` for new or uncertain documents.
- When something is no longer true but still historically useful, set `status: deprecated` and mention where to look instead.
- Always update `last_updated` when the **meaning** of the file changes, not for trivial edits.

### 7.2 One concern per file

Each file should have a clear single responsibility:

- `vision.md` – high-level business vision, not detailed features.
- `features.md` – feature list, not roadmapping process.
- `data-model.md` – canonical data entities, not DB migration history.

If a file grows too long or mixed, split it.

### 7.3 Consistent headings & IDs

Use repeatable patterns so agents can rely on structure.

**Example: feature entry in `product/features.md`:**

```markdown
---
context_type: feature
status: active
last_updated: 2026-01-12
---

# Feature: Smart Onboarding Checklist

id: feat_smart_onboarding_checklist

## Summary

Short description of what this feature does and why it exists.

## Target personas

- persona_id: founder_early_saas

## Business goal

- Increase activation rate from X% to Y% within N days.

## Status

- shipped

## Dependencies

- domain entities: Workspace, User, ChecklistTemplate
- tech: onboarding flow in `architecture.md`
```

**Example: persona entry in `business/personas.md`:**

```markdown
---
context_type: persona
status: active
last_updated: 2026-01-12
---

## Persona: Early SaaS Founder

id: founder_early_saas

### Summary

Solo or tiny-team founder building first SaaS product.

### Goals

- Launch MVP quickly.
- Validate willingness to pay.
- Minimize time spent on infra and operations.

### Pain points

- Overwhelm from tool choices.
- Limited time to learn every framework.
- Needs AI assistance but fears vendor lock-in.
```

Then other docs reference `founder_early_saas` or `feat_smart_onboarding_checklist` by ID.

### 7.4 Current vs future

Clearly distinguish:

```markdown
## Current capabilities (as of 2026-01-12)

- ...

## Planned (not yet built)

- ...
```

Agents should treat “Planned” as **ideas, not reality**.

### 7.5 Negative constraints

Be explicit about what **must not** happen; this is extremely helpful for AI:

- In `development/constraints.md`:
  - “Do NOT introduce Redux; use React Context + custom hooks.”
  - “Do NOT store PII in analytics events.”

- In `tech/architecture.md`:
  - “We will not build a native mobile app in v1; web only.”

- In `brand/voice.md`:
  - “Never call users ‘rockstars’; that word is off-brand.”

---

## 8. Interacting with AGENTS and AI tools

### 8.1 AGENTS.md at the repo root

`AGENTS.md` is the **entry point** for any agent (IDE assistant, CI bot, custom tool). It tells agents:

- Always read `/context/CONTEXT.md` to understand the map.
- How to route tasks to relevant `/context` files.
- How to respect `context_type`, `status`, and `last_updated`.
- How and when to propose or apply updates to `/context`.

(See `./AGENTS.md` in this template.)

### 8.2 Agent‑specific context in `/context/agents/`

Use these files to configure different **roles**:

- `coding-agent.md` – where to look for stack decisions, constraints, and data model.
- `content-agent.md` – where to look for value props, personas, and brand rules.
- `operations-agent.md` – where to look for providers, observability, and runbook.
- `context-steward.md` – how to scan diffs and `/context` to propose doc updates.
- `capabilities.md` – description of available AI capabilities:
  - IDE tools (Cursor, Windsurf, Copilot, etc.).
  - MCP servers and tools (e.g., for querying DB, logs, analytics).
  - Any scripts or CLIs agents can invoke.

The template does not assume a specific agent framework. You can adapt these files to MCP, custom toolchains, or other platforms.

---

## 9. Keeping the Repo Business Context up to date

The biggest risk is **stale docs**. The payoff only exists if the context remains close to reality.

### 9.1 Simple working rule

> **No feature or significant change is done until the relevant `/context` files are updated.**

When you:

- Add or significantly change a feature → update `product/features.md` and `product/roadmap.md`.
- Change domain logic or data structures → update `tech/domain-model.md` and/or `tech/data-model.md`.
- Change pricing or positioning → update `business/revenue-model.md` and `business/value-prop.md`.
- Add or change providers/infrastructure → update `operations/providers.md` and `operations/observability.md`.
- Finish a meaningful deploy → update `operations/deploy-log.md` and create/update a cycle file.

### 9.2 Recommended (optional) automations

These are **recommended patterns**, not required for the template:

1. **PR checklist**  
   Add `.github/pull_request_template.md` with something like:

   ```markdown
   - [ ] I have considered whether `/context` needs an update.
   - [ ] If user-visible behavior changed, I updated:
     - [ ] `/context/product/features.md`
     - [ ] `/context/tech/domain-model.md` or `/context/tech/data-model.md` if needed.
   ```

2. **Context drift warning Action**  
   A GitHub Action that warns (but doesn’t block) when `src/` changes but `/context` doesn’t.

3. **Context Steward / Gardener agent**  
   A script or workflow that:
   - Reads recent `git diff`.
   - Looks at relevant `/context` files.
   - Proposes updates (or opens a PR) when it detects mismatches.

Document these in `development/workflows.md` and `operations/runbook.md` as they evolve.

---

## 10. Getting started in a new project

For a new repo:

1. **Create the basic structure**
   - Add `/context` and copy this template’s files.
   - Add `AGENTS.md` at the repo root.

2. **Fill the minimal core**

   At minimum, complete:
   - `brand/voice.md` — how your product should speak.
   - `business/vision.md` — what you’re building, for whom, and what is out of scope.
   - `business/personas.md` — 1–3 key personas with IDs.
   - `product/features.md` — 3–5 initial features with IDs.
   - `tech/architecture.md` — brief description of your stack and architecture.
   - `operations/cycles/active.md` — your current objective.

3. **Hook your IDE agents to `AGENTS.md`**
   - In Cursor, Windsurf, Copilot Workspace or similar tools, configure them so that:
     - `AGENTS.md` is automatically loaded or preferred.
     - File search includes `/context` aggressively.
   - If your IDE allows nested `AGENTS.md` (e.g. inside `/context`), you can move or duplicate it there as well.
     - This allow you to have two levels of agent instructions: repo-wide (root) and context-specific.

4. **Validate**

   Ask your IDE agent:

   > “Read `/context` and summarize my project back to me.”

   If it can accurately describe your product, personas, stack, and constraints, you’re ready to build.

---

## 11. What belongs _outside_ `/context`

To keep `/context` clean:

- Do **not** store:
  - Raw meeting notes or unfiltered brainstorms.
  - Long chat transcripts.
  - Full log or analytics exports.
  - Binary design assets (images, Figma exports, etc.).

These can live in:

- `/notes` or `/docs/notes` inside the repo.
- External tools (Notion, Figma, etc.), linked from `/context`.

`/context` is only for **canonical, curated knowledge**.

---

## 12. Summary

The Repo Business Context turns your repo into a **living, AI‑first knowledge base** that encodes:

- The business and product you’re building.
- The technical and operational decisions you’ve made.
- The brand and communication style you want.
- The rules and workflows agents should follow.

For a solo founder working closely with AI, this becomes the **world model** from which all code, copy, and operations decisions are derived.

Treat `/context` like source code. Keep it small, structured, and up to date, and your agents will feel far more like collaborators than autocomplete.
