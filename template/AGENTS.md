# AGENTS – Repo Business Context Protocol

> This file defines how **all AI agents** should operate within this repository.

It applies to:

- IDE assistants (e.g. Cursor, Windsurf, GitHub Copilot Workspace).
- CLI tools or agent runners.
- CI/CD bots that generate or review code or docs.
- Any custom agents running against this repo.

---

## 1. Operating assumptions

- This repo uses a **Repo Business Context** under `/context`.
- The target user is a **solo founder or very small team**; the developer is usually the founder.
- `/context` is the **canonical source of truth** for:
  - Business goals and strategy.
  - Product features and roadmap.
  - Tech architecture and data model.
  - Development conventions and constraints.
  - Operations, cycles, and providers.
  - Brand voice and communication rules.
  - Agent-specific configuration and capabilities.

You must treat `/context` as the primary context for your decisions.

---

## 2. Golden rules

1. **Never act blindly.**  
   Before significant actions (designing features, writing code, changing data models, writing public copy), you **must** consult the relevant `/context` files.

2. **Respect constraints.**  
   Do **not** violate explicit constraints (technology, architecture, security, brand) unless the human explicitly instructs you to consider changing them—and then propose updates to `/context`.

3. **Keep context and reality aligned.**  
   If your work changes what is true about the product, you must:

   - Propose updates to `/context`, or
   - Apply them directly if allowed, updating `last_updated` and `status`.

4. **Be explicit about context usage.**  
   When presenting a plan or change, state:
   - Which `/context` files you read.
   - Which IDs (features, personas, cycles) you targeted.

---

## 3. Startup routine for any new session

When you are first invoked in this repo (or after long inactivity):

1. Read `/context/CONTEXT.md`.
2. Scan these core files:
   - `business/vision.md`
   - `product/roadmap.md`
   - `tech/architecture.md`
   - `tech/data-model.md`
   - `development/constraints.md`
   - `brand/voice.md`
3. Summarize, for yourself (and optionally the user):
   - What the product is.
   - Who it’s for.
   - The main stack and constraints.
   - The current focus (`operations/cycles/active.md` if it exists).

You may cache this mental model for the duration of the session, but you must **re‑read** when `last_updated` dates or file contents change meaningfully.

---

## 4. Routing by task type

For each incoming user request, categorize it and route accordingly.

### 4.1 Business & product tasks

Examples: “Should we build feature X?”, “How should we position this?”, “Write a landing page hero.”

1. Read:
   - `business/vision.md`
   - `business/personas.md`
   - `business/value-prop.md`
   - `business/strategy.md`
   - `product/features.md`
   - `brand/voice.md`
2. Use IDs from personas and features to stay consistent across outputs.
3. If the request implies a **change in strategy, personas, or value props**, propose and/or apply updates to the relevant `business/*` files.

### 4.2 Feature & UX tasks

Examples: “Add a team invites feature”, “Design the onboarding flow”, “Write empty state copy.”

1. Read:
   - `operations/cycles/active.md` (to check whether this task fits the current cycle).
   - `product/features.md` and `product/use-cases.md` (for relevant features).
   - `product/ux-principles.md`.
   - `brand/voice.md`.
2. If the requested feature does not yet exist in `product/features.md`:
   - Propose a new feature entry with an ID and full spec.
   - Ask the human whether to add it; if yes, update the file.

### 4.3 Coding & architecture tasks

Examples: “Implement server action X”, “Refactor module Y”, “Introduce background jobs.”

1. Read:
   - `tech/architecture.md`
   - `tech/domain-model.md`
   - `tech/data-model.md`
   - `development/conventions.md`
   - `development/constraints.md`
   - Any relevant `development/decisions/*.md`
2. Before introducing new libraries, patterns, or services:
   - Check `development/constraints.md` and `operations/providers.md`.
   - If a new provider or major change is needed, propose updates to those files.

### 4.4 Data & schema tasks

Examples: “Add a new column to users”, “Design table for invoices.”

1. Read:
   - `tech/data-model.md`
   - `tech/domain-model.md`
   - Any recent `development/decisions/*` about data or storage.
2. Ensure that:
   - You do not contradict existing entities and relationships.
   - Any new entities/fields are added back into `tech/data-model.md` with updated `last_updated`.

### 4.5 Operations & cycles tasks

Examples: “What are we currently working on?”, “Plan the next cycle”, “Summarize the last deploy.”

1. Read:
   - `operations/cycles/active.md`
   - `operations/cycles/backlog.md`
   - `operations/deploy-log.md`
   - `operations/providers.md`
   - `operations/observability.md`
2. For planning:
   - Propose a plan that:
     - References backlog items by ID.
     - Fits within the current strategic priorities.
   - Update `operations/cycles/active.md` to match the chosen plan (if allowed).

### 4.6 Content & marketing tasks

Examples: “Write a LinkedIn post announcing the new feature”, “Draft onboarding emails.”

1. Read:
   - `business/value-prop.md`
   - `business/personas.md`
   - `product/features.md` (especially the feature just shipped).
   - `brand/voice.md`
   - `brand/channels.md`
2. Adapt content to the target persona and channel, respecting all brand constraints.

---

## 5. Updating `/context` as part of your workflow

Whenever your work **changes the truth** of the product (not just code structure), you must update or propose updates to `/context`.

### 5.1 When to update

Update relevant `/context` files when:

- You add or significantly change a feature.
- You change domain logic or data entities.
- You change pricing, positioning, or audience.
- You add, remove, or significantly change providers/infrastructure.
- You complete a meaningful deploy that closes or shifts a cycle.
- You introduce a new convention or constraint that should be consistently followed.

### 5.2 How to update

1. Identify the affected files from `CONTEXT.md`.
2. For each file:
   - Edit the content to match the new reality.
   - Update `last_updated` in the front‑matter.
   - If the document is no longer valid, set `status: deprecated` and link to the replacement.
3. Present changes as:
   - A clear diff (preferred), or
   - A structured patch suggestion the user can apply.

**Never** fabricate business decisions or factual context that the user has not implied or code does not support. When in doubt, ask.

---

## 6. Specialized agent roles

You may be configured as a specific role. When so, in addition to the general protocol above, follow the instructions in the corresponding `/context/agents/*.md` file.

### 6.1 Coding agent

- Primary focus: code, tests, refactors, and dev tooling.
- Before coding:
  - Read `agents/coding-agent.md`.
  - Read the relevant tech, development, and operations sections as described in that file.
- While coding:
  - Adhere to `development/conventions.md` and `development/constraints.md`.
  - Keep `tech/data-model.md` and `tech/domain-model.md` in sync with schema/logic changes.

### 6.2 Content agent

- Primary focus: marketing, documentation, in-app copy, emails.
- Before writing:
  - Read `agents/content-agent.md`.
  - Read business, product, and brand context as instructed there.
- Always adapt content by persona ID and channel rules.

### 6.3 Operations agent

- Primary focus: deployment, monitoring, incident handling, operations insights.
- Before acting:
  - Read `agents/operations-agent.md`.
  - Read `operations/*` and relevant provider docs.
- When proposing changes:
  - Make sure they are consistent with architecture and constraints.

### 6.4 Context Steward / Gardener agent

- Primary focus: **keeping `/context` aligned with code and operations**.
- Protocol (details in `agents/context-steward.md`):
  - Periodically or per PR:
    - Read `git diff` or list of changed files.
    - Determine which `/context` files should reflect these changes.
    - Propose or apply updates with minimal diffs.
  - Prefer marking uncertain updates as `status: draft` rather than guessing.

---

## 7. Handling uncertainty and conflicts

If you encounter:

- **Conflicting information** between `/context` files, or between `/context` and code.
- **Missing information** required to answer a question responsibly.

You must:

1. Explicitly state:
   - What is missing or conflicting.
   - Which files you inspected.
2. Prefer to:
   - Ask clarifying questions, or
   - Offer multiple scenarios and label them as assumptions.
3. Never:
   - Quietly invent business policy, pricing, or legal behavior.
   - Override explicit constraints without approval.

---

## 8. Summary for agents

- `/context` is your **world model**.
- `CONTEXT.md` is your **map**.
- This `AGENTS.md` file is your **protocol**.

To behave well in this repo:

1. Start every serious task by reading the relevant context.
2. Make your use of context explicit in your reasoning and answers.
3. Keep context accurate by proposing updates when reality changes.
4. Respect all constraints and statuses unless explicitly asked to change them.

If you follow this protocol, you will operate as a consistent, aligned co‑founder, not just a pattern-matching engine.
