# RBC file selection and handling

This document contain a map of common RBC files. Consult it to know which files to load for a given task.

- Load **only** the files relevant for the task/answer at hand. Never load the full `/context/` folder.

> Why this matters: context rot is real. Models reason more sharply on 1-3 focused files than on 20 loosely-related ones, even when the window can technically hold them all. Precise loading is a feature, not a constraint.

Undertanding the reasoning behind folders and files, you'll be able to choose the right files to load intuitively.

## Routing references

Use the tables below to infer which files to load for any given task.

> [!IMPORTANT]
> The table is a default, not a law. If a task genuinely needs different files, pick them and say so. The principle — small focused set, cite them — holds even when the specific files differ.

> [!NOTE]
> If a referenced file is empty or missing: state the gap in your answer, decide whether you can proceed with a reasonable generic assumption, or ask one minimal gap question per `references/onboarding-gradual.md`. Never fabricate missing content.

| File                        | Intent                                                                                                                |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `brand/channels.md`         | The channels where the brand is present (e.g. Instagram, ecommerce, etc.), their relevance and how to behave on them. |
| `brand/ux-principles.md`    | How the user experience with the overall brand should be (e.g. exclusiveness, triggered emotions, etc.)               |
| `brand/vision.md`           | How the brand see and perceive itself and its customers, now and in the future.                                       |
| `brand/voice.md`            | Tone, personality, and style guidelines — do/don'ts, patterns, examples.                                              |
| `business/personas.md`      | Target user archetypes, jobs-to-be-done, pains/gains, key scenarios.                                                  |
| `business/revenue-model.md` | Pricing approach, plans and packaging, monetization mechanics, billing notes.                                         |
| `business/strategy.md`      | Goals and positioning, focus areas, priorities, differentiators, and key bets.                                        |
| `business/value-prop.md`    | Core promise and benefits, proof points, and why we win vs. alternatives.                                             |
| `product/backlog.md`        | Loosely organized ideas and next steps; high-level priorities and near-term bets.                                     |
| `product/features.md`       | Shipped and in-progress capabilities with short descriptions and status/context.                                      |
| `product/integrations.md`   | External services/tools we interoperate with, scope, rationale, and status.                                           |
| `product/use-cases.md`      | Representative workflows and scenarios showing who does what and why.                                                 |

| Task type                                                      | Suggested files to read/write                                                                 |
| -------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Understand the overall product and business                    | `brand/vision.md`, `business/strategy.md`, `product/features.md`                              |
| Understand the target user                                     | `business/personas.md`, `business/value-prop.md`                                              |
| Propose or design a feature                                    | `product/features.md`, `product/use-cases.md`, `business/strategy.md`, `business/personas.md` |
| Write UX copy or in-app UI text                                | `brand/voice.md`, `brand/ux-principles.md`, `product/features.md`, `business/personas.md`     |
| Write marketing copy (landing page, email, social, ads)        | `business/value-prop.md`, `business/personas.md`, `brand/voice.md`, `brand/channels.md`       |
| Work on pricing, plans, or billing                             | `business/revenue-model.md`, `business/value-prop.md`, `business/strategy.md`                 |
| Choose a provider or integration (business impact)             | `product/integrations.md`, `business/strategy.md`                                             |
| Plan next cycle or prioritize work                             | `product/backlog.md`, `business/strategy.md`                                                  |
| Onboard a new agent or teammate                                | `brand/vision.md`, `product/features.md`, `brand/voice.md`                                    |
| Write commit messages, PR descriptions, release notes          | `product/features.md`, `brand/voice.md`                                                       |
| Respond to user feedback or frame a customer conversation      | `business/personas.md`, `brand/voice.md`, `business/value-prop.md`                            |
| New feature shipped, or significant change to existing feature | `product/features.md`, `product/backlog.md`                                                   |
| Pricing, plan, or billing change                               | `business/revenue-model.md`, `business/value-prop.md`                                         |
| Audience, ICP, or positioning shift                            | `business/personas.md`, `business/strategy.md`, `business/value-prop.md`                      |
| Brand voice or tone evolution                                  | `brand/voice.md`                                                                              |
| New go-to-market channel                                       | `brand/channels.md`                                                                           |
| Product direction decision with long-term implications         | `brand/vision.md`, `business/strategy.md`                                                     |
