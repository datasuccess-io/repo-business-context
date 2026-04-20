# Routing — task type to files to load

Before any substantive task in an RBC-enabled repo, consult this table. Load **only** the listed files for the task at hand. Never load the full `/context/` folder.

Why this matters: context rot is real. Models reason more sharply on 2 focused files than on 20 loosely-related ones, even when the window can technically hold them all. Precise loading is a feature, not a constraint.

---

## Routing table

| Task type | Files to load |
|---|---|
| Understand the overall product and business | `business/vision.md`, `business/strategy.md`, `product/roadmap.md` |
| Understand the target user | `business/personas.md`, `business/value-prop.md` |
| Propose or design a feature | `product/features.md`, `product/use-cases.md`, `business/strategy.md`, `business/personas.md` |
| Write UX copy or in-app UI text | `brand/voice.md`, `brand/ux-principles.md`, `product/features.md`, `business/personas.md` |
| Write marketing copy (landing page, email, social, ads) | `business/value-prop.md`, `business/personas.md`, `brand/voice.md`, `brand/channels.md` |
| Work on pricing, plans, or billing | `business/revenue-model.md`, `business/value-prop.md`, `business/strategy.md` |
| System architecture change | `tech/architecture.md`, `tech/conventions.md`, `business/domain-model.md` |
| Data model or schema change | `tech/data-model.md`, `business/domain-model.md`, `tech/conventions.md` |
| Pick a library, tool, or provider | `tech/conventions.md`, `tech/providers.md` |
| Plan next cycle or prioritize work | `product/roadmap.md`, `product/backlog.md`, `business/strategy.md` |
| Diagnose an operational issue | `tech/providers.md`, `tech/observability.md` |
| Onboard a new agent or teammate | `business/vision.md`, `product/roadmap.md`, `tech/architecture.md`, `brand/voice.md` |
| Write commit messages, PR descriptions, release notes | `product/features.md`, `brand/voice.md` |
| Respond to user feedback or frame a customer conversation | `business/personas.md`, `brand/voice.md`, `business/value-prop.md` |

---

## Default starting points

When a task doesn't clearly match a row:

- **Business or product question** → `business/vision.md` + `business/personas.md`
- **Tech or build question** → `tech/architecture.md` + `tech/conventions.md`
- **Copy or content of any kind** → always include `brand/voice.md`

**Never load more than 4 files without a specific reason.** If you think you need 5+, first ask whether the task can be narrowed.

---

## Missing or empty files

If a file in the row is missing or empty:

1. **Note the gap in your response** — e.g., *"`business/personas.md` is empty, so I'm working without persona context."*
2. **Decide:** can the task proceed reasonably without it?
   - **Yes** → proceed with a generic answer, flag the assumption.
   - **No** → ask a minimal gap question per `onboarding-gradual.md` before proceeding.
3. **Never fabricate the content of a missing file.** An empty file that could have guided the task is better than an invented one that silently misleads.

---

## State when you loaded context

In your response, briefly state which files you read. One line is enough:

> *"Using `brand/voice.md` and `business/personas.md`."*

This lets the user catch drift early (e.g., if your output doesn't match what the file actually says, they notice).

---

## When the routing table is wrong for your task

The table is a default, not a law. If a task genuinely needs different files, pick them and say so. The principle — small focused set, cite them — holds even when the specific files differ.
