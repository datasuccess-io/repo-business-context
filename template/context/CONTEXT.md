# Repo Business Context – Context Map for Agents

> This file is the **index and routing guide** for AI agents and humans.  
> Read this before using `/context`.

---

## 1. How to use this file

If you are an AI agent:

1. **Always read this file before acting on a new repository.**
2. Use it to:
   - Locate the right context files for a given task.
   - Understand the meaning of `context_type`, `status`, and `last_updated`.
   - Decide which documents to treat as authoritative and which to treat as tentative.
3. When you answer a request:
   - Explicitly state which `/context` files you consulted.
   - Respect constraints and negative rules documented here.
   - Propose updates to `/context` if your work changes the underlying reality.

If you are a human:

- Use this file to quickly orient yourself and your tools: “where do I put X?” and “where should my agent read for Y?”

---

## 2. Standard front‑matter schema

Every file under `/context` starts with:

```yaml
---
context_type: <type>
status: draft | active | deprecated
last_updated: YYYY-MM-DD
---
```

### 2.1 Field meanings

- **`context_type`**: The semantic type of this document. Common values:

  - `business` — business fundamentals (vision, strategy, revenue model).
  - `persona` — user personas.
  - `strategy` — business or product strategy.
  - `feature` — features and related specs.
  - `use_case` — user stories or scenarios.
  - `architecture` — system architecture.
  - `domain_model` — domain concepts and rules.
  - `data_model` — data entities and relationships.
  - `convention` — coding or UX conventions.
  - `constraint` — explicit “must/must not” rules.
  - `decision` — point-in-time decisions (ADRs).
  - `operations` — operations overview or policies.
  - `cycle` — a build/ship cycle file.
  - `provider` — providers and integrations.
  - `brand` — brand/voice documents.
  - `agent` — agent-specific configuration.
  - `runbook` — operational runbooks.
  - `workflow` — processes (dev, CI, review).

- **`status`**:

  - `active` — Trusted source of truth for this context.
  - `draft` — Incomplete or experimental; treat carefully.
  - `deprecated` — Kept for history, not to be followed; new docs supersede it.

- **`last_updated`**:

  - The last date this file’s _meaning_ changed.
  - Agents should use this to detect stale docs and suggest reviews.
  - This date should be updated whenever the content changes meaningfully.
  - Agents can check this against recent code changes or deploys to flag inconsistencies.

### 2.2 Agent behavior rules around metadata

- Prefer `status: active` documents when multiple docs conflict.
- If all relevant docs are `draft` or very old (`last_updated` far in the past), **warn the human** and avoid strong claims.
- When you modify content (via PR or suggestion), update `last_updated` to today.
- Do not silently delete deprecated docs; mark them `deprecated` and link to their replacements.

---

## 3. Quick routing by task type

Use this table for initial routing. Then consult the sections below for details.

| If the task is…                                         | Read these files (in order)                                                                                 |
| ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Understand the overall product & business               | `business/vision.md`, `business/strategy.md`, `product/roadmap.md`                                          |
| Understand who we serve                                 | `business/personas.md`, `business/value-prop.md`                                                            |
| Propose or modify a feature                             | `product/features.md`, `product/use-cases.md`, `business/vision.md`, `business/strategy.md`                 |
| Change UX or write in‑app copy                          | `brand/voice.md`, `product/ux-principles.md`, `product/features.md`                                         |
| Change pricing or packaging                             | `business/revenue-model.md`, `business/value-prop.md`, `business/strategy.md`                               |
| Change system architecture or introduce a new component | `tech/architecture.md`, `tech/domain-model.md`, `development/constraints.md`, `development/decisions/*`     |
| Add or modify data structures / DB schema               | `tech/data-model.md`, `tech/domain-model.md`, `development/constraints.md`                                  |
| Decide whether to use a library / tool                  | `development/constraints.md`, `development/conventions.md`, `operations/providers.md`                       |
| Investigate operational issues or propose infra changes | `operations/providers.md`, `operations/observability.md`, `operations/runbook.md`                           |
| Understand what’s currently being worked on             | `operations/cycles/active.md`, then `product/roadmap.md`, `operations/cycles/backlog.md`                    |
| Plan the next build/ship cycle                          | `operations/cycles/backlog.md`, `operations/cycles/active.md`                                               |
| Generate marketing copy or social posts                 | `business/value-prop.md`, `business/personas.md`, `brand/voice.md`, `brand/channels.md`                     |
| Configure or extend agents                              | `agents/capabilities.md`, `agents/coding-agent.md`, `agents/content-agent.md`, `agents/operations-agent.md` |
| Audit the quality/freshness of context                  | This file (`CONTEXT.md`), `development/decisions/*`, all `status: active` docs ordered by `last_updated`    |
| Keep context aligned with code (Context Steward tasks)  | `development/decisions/*`, `operations/cycles/*.md`, relevant feature/tech docs per changes                 |

---

## 4. File-by-file index

This is a brief description of each standard file and how an agent should use it.

### 4.1 Root

- **`/context/README.md`**  
  Human‑oriented documentation of the Repo Business Context concept and structure.

- **`/context/CONTEXT.md` (this file)**  
  Map + routing rules for agents and humans.

### 4.2 `/context/business`

- **`vision.md`**

  - Defines the core problem, vision, target segment, and boundaries.
  - Agents: Use this to keep suggestions aligned with the product’s purpose.

- **`revenue-model.md`**

  - Pricing models, plans, billing rules, and important assumptions.
  - Agents: Use for any decision that could affect monetization (e.g., free vs paid features).

- **`personas.md`**

  - Canonical personas with stable IDs.
  - Agents: When writing copy or designing flows, target the appropriate persona IDs.

- **`strategy.md`**

  - Strategic priorities and things explicitly **out of scope** for now.
  - Agents: Do not propose out‑of‑scope features unless explicitly asked to reconsider the strategy.

- **`value-prop.md`**
  - Core value propositions and supporting arguments.
  - Agents: Align headlines, marketing copy, and UX messaging with these statements.

### 4.3 `/context/product`

- **`roadmap.md`**

  - Timeline or ordered list of product initiatives and features.
  - Agents: Use to generate tasks or propose cycles consistent with the roadmap.

- **`features.md`**

  - Source of truth for shipped and planned features (with IDs).
  - Agents: Before changing behavior or adding endpoints, check if a corresponding feature exists or needs to be added.

- **`use-cases.md`**

  - Detailed user stories and sequences.
  - Agents: Use when designing flows, tests, or end‑to‑end examples.

- **`ux-principles.md`**

  - Design rules, interaction patterns, and reusable UX solutions.
  - Agents: Follow these when generating UI code or describing UX behavior.

- **`integrations.md`**
  - External product integrations (e.g., “Integrates with GitHub, Slack”), with scope and constraints.
  - Agents: Don’t assume new integrations exist unless listed or approved here.

### 4.4 `/context/tech`

- **`architecture.md`**

  - High‑level architecture: services, boundaries, data flows.
  - Agents: Use this before proposing new services, endpoints, or cross‑service calls.

- **`domain-model.md`**

  - Domain entities and business rules in business language.
  - Agents: Keep domain logic and naming consistent with this model.

- **`data-model.md`**
  - Canonical data entities and relationships; enough detail for queries and migrations.
  - Agents: Use as ground truth for schemas. Do **not** invent tables/fields beyond this without first updating it.

### 4.5 `/context/development`

- **`conventions.md`**

  - Coding style, file structure, patterns, and preferred libraries.
  - Agents: Follow these when generating or refactoring code.

- **`constraints.md`**

  - Explicit do/don’t rules for technologies and patterns.
  - Agents: Respect these strictly; do not introduce banned libraries or patterns.

- **`workflows.md`**

  - Development workflows (local dev, testing, CI, release).
  - Agents: Use when suggesting process changes or writing automation scripts.

- **`decisions.md`**
  - Short decision records (ADRs) describing why certain choices were made.
  - Agents: Before proposing contradictory changes, review relevant decisions and highlight trade‑offs.

### 4.6 `/context/operations`

- **`providers.md`**

  - SaaS providers, infrastructure choices, AI tools, and MCP servers/tools; _no secrets_.
  - Agents: Use to know what services exist and how to interact with them.

- **`observability.md`**

  - Logging, metrics, tracing, analytics tools and conventions.
  - Agents: Use when adding instrumentation or diagnosing issues.

- **`runbook.md`**

  - Standard operating procedures: handling incidents, restarts, manual jobs.
  - Agents: Follow as a checklist when asked to respond to operational incidents.

- **`cycles/active.md`**

  - Current cycle’s objective, scope, and plan.
  - Agents: Treat this as the “current focus”; align new work with this unless asked otherwise.

- **`cycles/backlog.md`**

  - Ordered queue of ideas, bugs, and improvements.
  - Agents: When asked to “pick something useful to do next”, choose from here.

### 4.7 `/context/brand`

- **`voice.md`**

  - Brand basic identity, personality, tone, and vocabulary.
  - Agents: When generating any user-facing text, follow this file.

- **`assets.md`**

  - Pointers to design systems, logos, and media assets.
  - Agents: Reference rather than replicate details; humans keep these assets up to date.

- **`channels.md`**
  - Overview of communication channels and per-channel rules.
  - Agents: When writing channel-specific copy, adapt to each channel’s rules.

### 4.8 `/context/agents`

- **`coding-agent.md`**

  - Instructions specifically for coding agents (IDE, CI, bots).
  - Usually includes:
    - How to consult `/context` before coding.
    - Which patterns/stacks to follow.
    - How to update context when code changes semantics.

- **`content-agent.md`**

  - Instructions for copywriting/content agents.
  - Which business/product/brand files to read before writing external content.

- **`operations-agent.md`**

  - Instructions for operations-focused agents.
  - How to interpret metrics, logs, and deploy logs; how to suggest ops changes.

- **`context-steward.md`**

  - Protocol for the “Gardener”/Steward agent.
  - How to scan git diffs and `/context` to suggest or apply updates.

- **`capabilities.md`**
  - Description of available AI tools and agent platforms (e.g. MCP endpoints, CLI tools).
  - Agents: Use this to discover what extra tools you can call beyond plain code edits.

---

## 5. Search and navigation strategies (for agents)

When working on a task:

1. **Start at `AGENTS.md` (repo root)**  
   It will point you here and outline high‑level rules.

2. **Identify the task category**  
   Use the table in §3 to decide which files matter.

3. **Filter by `context_type` and `status`**  
   When searching:

   - Prefer `status: active`.
   - If many files match, use `context_type` and IDs to narrow.

4. **Cross‑reference IDs**

   - From a persona ID (e.g. `founder_early_saas`) → search across `/context` for that ID.
   - From a feature ID (e.g. `feat_team_invites`) → find where it’s referenced (features, roadmap, cycles, decisions).

5. **Watch for staleness**

   - If `last_updated` is old relative to recent code changes or deploys, flag this and propose a review.

6. **Propose updates when reality changes**
   - If you change behavior through code or configuration, you are responsible for:
     - Suggesting diffs for the relevant `/context` files.
     - Updating `last_updated`.
     - Marking outdated docs as `deprecated` and linking to replacements.

---

## 6. Safety and constraint hotspots

Certain files contain **hard constraints** that you must respect unless explicitly instructed otherwise:

- `development/constraints.md` — technology and pattern constraints.
- `tech/architecture.md` — architectural boundaries.
- `operations/providers.md` — allowed/bound providers and tools.
- `brand/voice.md` — brand voice and terminology constraints.

Before you:

- Introduce a new library or provider,
- Change architectural boundaries,
- Generate public‑facing content,

…you must consult these files and check for contradictions.

---

## 7. When context and code disagree

If you detect a mismatch between `/context` and the actual code:

1. **Do not silently pick one.**

   - Inform the user that a mismatch exists.
   - State which files and code paths conflict.

2. **Prefer actual, observable behavior for short‑term actions**

   - For execution (“run this query”, “fix this bug now”), sub‑optimize for correctness, but:
     - Note that context is stale.
     - Propose follow‑up updates to `/context`.

3. **Use the Context Steward flow**
   - If a `context-steward` agent is defined, follow its protocol in `agents/context-steward.md`.

---

## 8. Summary for agents

- Treat `/context` as your **world model**.
- Use this `CONTEXT.md` to route yourself to the right documents.
- Respect `context_type`, `status`, and `last_updated`.
- Always:
  - Read before you act.
  - Cite (by filename and IDs) which context you used.
  - Propose updates when your work changes reality.

If you follow this protocol, you will behave like a long-term collaborator who understands the product, not just a short-lived code completer.
