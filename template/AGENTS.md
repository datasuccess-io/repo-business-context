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

Notes on paths:

- All file paths referenced below are relative to `/context/` unless explicitly stated.
- The cycles directory is `/context/operations/cycles/` (plural: `cycles`). The current cycle file to update is `operations/cycles/active.md`.

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

5. **Keep the active cycle current.**  
   While planning and executing work, update `operations/cycles/active.md` to reflect:
   - The chosen objective and scope.
   - In‑progress items, links to branches/PRs/commits, and completed items.
   - Post‑deploy notes and a link to any snapshot (e.g., `operations/cycles/YYYYMMDD.md`).

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

## 4. Routing by task type (Specialized Agents)

For each incoming user request, categorize it and invoke the corresponding agent. Refer to the specific agent file for detailed protocol.

| Task Type | Agent File | Examples |
| :--- | :--- | :--- |
| **Business & Product** | `agents/business-agent.md` | “Should we build X?”, “Positioning strategy” |
| **Feature & UX** | `agents/feature-agent.md` | “Add team invites”, “Design onboarding” |
| **Coding & Architecture** | `agents/coding-agent.md` | “Implement server action”, “Refactor module” |
| **Data & Schema** | `agents/data-agent.md` | “Add column”, “Design table” |
| **Operations & Cycles** | `agents/operations-agent.md` | “Plan cycle”, “Deploy summary” |
| **Content & Marketing** | `agents/content-agent.md` | “Write post”, “Draft email” |
| **Context Stewardship** | `agents/context-steward.md` | Keeping context in sync with code |

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
