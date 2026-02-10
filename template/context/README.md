---
status: active
version: 1.1
last_updated: 2026-02-10
category: documentation
tags: readme, context, introduction, docs, onboarding
license: MIT
author:
  name: Igor Souza
  email: igor@datasuccess.io
  github: /issouza
  linkedin: /in/igorsansouza
---

**Repo Business Context**

> A small, opinionated, AI‑first context layer that lives inside your repo and unifies business, product, tech, brand, and operations for both humans and agents.

---

## 1. What is the Repo Business Context?

The **Repo Business Context (RBC)** is a convention for organizing Markdown files inside your code repository under `/context`.

These files bring to the repository the context that is often scattered across Notion, Confluence, Slack, or just in the founder’s head. By putting it in the repo:

- Why the product exists (business, personas, strategy).
- What is being built (features, flows, roadmap).
- How it works (architecture, domain model, data model, development practices).
- Where it runs (providers, infrastructure, observability, cycles).
- Who it should talk to (brand voice, copy rules).

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
- Projects with no external documentation (e.g. Notion, Confluence).
- Businesses where the code is developed before the business model is fully defined.

It is **not** designed for:

- Large organizations with many repos and heavy tools (Jira, Confluence, multi‑service monorepos).
- “Throwaway” prototypes or scripts.

You _can_ adapt the ideas to larger setups, but this template assumes:

- One primary repo per product.
- Most work (coding, planning, copy, operations) happens in this repo with AI assistance.

---

## 3. Problems the Repo Business Context solves

### 3.1. Context fragmentation

Today, key knowledge is scattered:

- Business model in Notion.
- Feature specs in random docs.
- Tech decisions in Slack threads or half‑written ADRs.
- Brand voice in someone’s head or a Figma page.

AI tools embedded in the IDE or CI **cannot see** most of this. They only see code + any inline instructions you paste.

RBC fixes this by putting **all critical context in one small, structured, AI‑readable corpus** inside the repo.

### 3.2. AI without intent

LLMs are good at code patterns, but they don’t know:

- Who you’re building for.
- Which features matter.
- Which trade‑offs (speed vs quality, cost vs UX) you care about.
- What tech or providers they must avoid.

RBC makes the **intent explicit** so agents can align code, copy, and decisions with your business.

### 3.3. Re‑explaining business in every chat

Without RBC, every new AI session starts with:

> “Here’s my ICP…”  
> “Our pricing is…”
> "The feature that differentiates us is…"
> "Here are our brand voice rules…"

RBC lets you say instead:

> “Create a pricing page and configure the Stripe integration accordingly.”  
> “Write a new feature spec for a referral program.”
> “Optimize the onboarding flow for our ICP with our brand voice.”

### 3.4. Power without purpose (Executional agents)

Modern agents can now execute actions directly: running SQL queries, charging cards via Stripe, or deploying infra. But without context, these capabilities are dangerous.

An agent without business context might:

- **Optimize the wrong metric** (e.g., delete "inactive" users who are actually on legal hold).
- **Misinterpret rules** (e.g., issue refunds that violate your TOS).
- **Drift off-brand** (e.g., post social copy that damages trust).

RBC provides the **guardrails and intent** so powerful agents become safe, effective team members rather than loose cannons.

### 3.5. The "Code First" blind spot

Technical solopreneurs often excel at engineering but may overlook business essentials like audience segmentation, brand voice, or revenue modeling. This leads to well-written code for a product nobody wants or understands.

RBC forces these "soft" concerns into the repo as **first-class citizens** (files like `business/personas.md` and `brand/voice.md`). This structure prompts you to define _who_ and _why_ before you get lost in the _how_, ensuring your dev skills serve a viable business.

---

## 4. Core design principles

1. **Canonical over complete**
   - Store **canonical decisions and definitions**, not every note or task.
   - Treat it like source code for your product’s intent.
   - Focus on the 20% of context that gives 80% of the value.
   - Less is more. A few well‑maintained files are more powerful than a sprawling wiki of half‑written docs.

2. **AI‑first writting**
   - Create short, focused documents.
   - Use consistent patterns and headings across files.
   - Prefer simple lists and tables over prose walls.
   - State constraints and rules explicitly.
   - Avoid unexplained acronyms or jargon.

3. **AI collaboration and capabilites**
   - Extract the most of the latest AI capabilities
   - Give AI power and information enough so they can be true collaborators, not just autocomplete.
   - MCP tools to take actions outside of the repo.
   - `AGENTS.md` to instruct AI tools on how to use the context and
   - Skills to automate context maintenance and extract the most of it.
   - Github Actions to enforce context updates and consistency.

4. **Minimal, standardized metadata (YAML front‑matter)**  
   Every context file starts with this same schema:

   ```yaml
   ---
   status: draft | active | deprecated
   last_updated: YYYY-MM-DD
   category: brand | business | product | skill | tech
   tags: tag1, tag2, ...
   ---
   ```

   - `status` — whether the content is authoritative (`active`),in progress (`draft`), or outdated but historically useful (`deprecated`).
   - `last_updated` — update whenever the content meaningfully changes.
   - `category` — what kind of document this is, corresponds to root-level context folders.
   - `tags` - as you evolve your context, you can add tags to summarize the topics covered, which can be useful for search and agent retrieval.

   You may add **extra fields**, but these three are the standard fields across all `/context` files.

---

## 5. Directory structure

The `/context` folder contains small, focused Markdown files organized by concern.

Token limits are a key constraint for LLMs. Smaller, focused files help you stay within those limits while providing rich context.

For humans, this structure also makes it easier to find and update the relevant context when making changes.

You may adapt it to your needs, but here is the recommended structure:

```text
/context
├── AGENTS.md                   # Root instructions for all AI agents
├── README.md                   # This file – explains RBC concept & structure
│
├── brand/
│   ├── voice.md                # Name, slogan, tone, do/don’t rules
│   ├── assets.md               # Logo usage, colors, references to asset locations
│   ├── ux-principles.md        # User experience, emotions, and design guidelines
│   └── channels.md             # Channels (e.g. website, email, social) & per-channel nuances
│
├── business/
│   ├── vision.md               # Problem, mission, positioning, boundaries
│   ├── revenue-model.md        # Pricing, plans, unit economics assumptions
│   ├── personas.md             # ICPs, jobs-to-be-done, pain points
│   ├── strategy.md             # Phases, priorities, out-of-scope items
│   ├── domain-model.md         # Core domain concepts and business rules
│   └── value-prop.md           # Core value propositions and messaging pillars
│
├── product/
│   ├── roadmap.md              # Near / mid / long-term roadmap
│   ├── backlog.md              # Ordered list of candidate work items
│   ├── features.md             # Living spec of shipped & planned features
│   ├── use-cases.md            # Key use cases and user stories
│   └── integrations.md         # External product integrations and rules
│
├── skills/
│   └── repo-business-context/
│       └── SKILL.md            # Metadata for GitHub Skills Marketplace
│
└── tech/
    ├── architecture.md         # System architecture, components, data flow
    ├── data-model.md           # Entities, relationships, key schemas
    ├── conventions.md          # Libraries, patterns, constrains
    ├── providers.md            # SaaS, infra, tools, where credentials live
    └── observability.md        # Logging, metrics, monitoring, analytics
```

You don’t have to create or fill every file immediately. Start small (see §10) and grow as needed.

---

## 6. Deploys, not sprints

Repo Business Context is **development-driven**, not documentation or sprint driven.
Traditional models are designed for teams and calendars. For a solo founder + AI agents, the real rhythm is:

> Idea → Chat → Code → Deploy → Repeat

It's normal to have multiple commits and deploys per day, and the product can evolve in a pace much faster than documenting and planning things ahead of time allows.

RBC enriches this experience by bringing additional business context to the repository itself, so AI and developers have everything they need to make informed decisions and keep the code aligned with the business goals, without needing to switch tools.

The main documentation of product evolution are **Commit messages** and the **Pull Requests** themselves, not task lists, sprint or planning docs.

Automations help manage and standardize these processes, granting useful and updated files.

The context should evolve with the code, not be a separate artifact that lags behind.

---

## 7. Keeping the Repo Business Context up to date

The biggest RBC risk is **stale docs**. The payoff only exists if the context remains close to reality.

As stated above, the context files are not to describe what is already told in the code, but to provide the business and product rationale, the "why" behind the code.

This means that **not every code change requires a context update**. If you refactor a function or fix a bug, you likely don’t changed business' characteristics.

But if you add a relevant feature, make a significant tech decision, or change your pricing, you should update the relevant context files to reflect the new reality and rationale.

### 7.1. Included automations

This template includes a set of GitHub Actions and scripts to keep the context healthy and the workflow smooth:

1. **Context Steward** (`.github/workflows/context-steward.yml`)
   - Checks if changes in `src/` are accompanied by updates in `/context`.
   - Warns in the PR if context drift is detected, reminding you to keep docs in sync.

2. **Commitlint** (`.github/workflows/commitlint.yml`)
   - Enforces [Conventional Commits](https://www.conventionalcommits.org/) (e.g., `feat:`, `fix:`, `docs:`).
   - Ensures commit history is structured for automated release notes and changelogs.

3. **Release Drafter** (`.github/workflows/release-drafter.yml`)
   - Automatically drafts release notes based on merged PRs and labels.
   - Categorizes changes (Features, Bug Fixes, Maintenance) so you don't have to write changelogs manually.

4. **PR Template & Labels**
   - `PULL_REQUEST_TEMPLATE.md` includes a checklist to verify context updates.
   - `labels.yml` syncs a standard set of labels for categorizing PRs and issues.

Feel free to disable or modify these workflows in `.github/` if they don't fit your process.

---

## 8. Getting started in a new project

You can adopt the Repo Business Context at any point: on a new repo, an existing one - even retroactively.

The earlier you start, the more it can shape your development in a positive way.

### 8.1. Structure

Use the `template/` folder and files structure as a starting point.

With them in place, AI agents can immediately start using the context to help you build and implement RBC.

> Caution to not substitute existing files with the template ones, like `.github/`, `AGENTS.md`, or `README.md`. You can merge their content manually if needed.

### 8.2. Fill out context files

Fill out the RBC files according to your project and needs, then:

- Manually fill out: gradually grow and structure the key information into the RBC format.
- Use text files or AI chat as a starting point: use AI agents to help you extract and structure the content into the RBC format.

### 8.3. Validate

Ask your IDE agent:

> “Read `/context` and summarize my project back to me.”

If it can accurately describe your product, personas, stack, and constraints, you’re ready to start building with more business context-aware agents!

---

## 9. Summary

The Repo Business Context turns your repo into a **living, AI‑first knowledge base** that encodes:

- The business and product you’re building.
- The technical and operational decisions you’ve made.
- The brand and communication style you want.
- The rules and workflows agents should follow.

For a technical solopreneur working closely with AI, this becomes the **world model** that bridges the gap between code and business value. It provides the necessary intent and guardrails to turn powerful, executional agents into safe collaborators rather than risky tools.

Treat `/context` like source code. Keep it small, structured, and up to date, and your agents will stop guessing and start delivering.
