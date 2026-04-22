# Maintenance — keeping context aligned with reality

Context files are living. Your job is to propose updates when the work shifts what's true about the product, and to uphold the `status` workflow consistently.

Context decay is the #1 risk of this framework. You are the primary defense against it. Err on the side of **proposing** an update — the user can always say no. Silent drift is the failure mode to avoid.

---

## When to propose an update

Propose updates when the work you just did (or are discussing) **changes business reality**, not just code structure.

| Change | Files to propose updating |
|---|---|
| New feature shipped, or significant change to existing feature | `product/features.md`, possibly `product/roadmap.md`, possibly `business/domain-model.md` |
| Pricing, plan, or billing change | `business/revenue-model.md`, possibly `business/value-prop.md` |
| New provider or infrastructure added/removed | `tech/providers.md`, possibly `tech/architecture.md` |
| Audience, ICP, or positioning shift | `business/personas.md`, `business/strategy.md`, `business/value-prop.md` |
| Brand voice or tone evolution | `brand/voice.md` |
| New technical convention or constraint established | `tech/conventions.md` |
| New go-to-market channel | `brand/channels.md` |
| Roadmap milestone closed or priority shifted | `product/roadmap.md` |
| Architectural decision with long-term implications | `tech/architecture.md`, possibly a dated ADR under `tech/` if the convention exists |

**Refactors and bug fixes usually do NOT need context updates.** Only propose when the *truth of the product* changed — what it does, who it's for, how it costs, how it runs, how it sounds.

---

## How to propose

When you detect an update is needed:

1. **Mention it in your response**, not as a separate workflow:
   > *"This change affects `business/revenue-model.md` (it still says free tier is 10 requests/day; the new limit is 50). Want me to update it?"*
2. **If the user agrees or has clear authority delegation,** make the edit.
3. **Always bump `last_updated`** in the frontmatter to today.
4. **Preserve history conservatively.** Don't delete content the user hasn't asked to remove:
   - File still valid with tweaks → edit in place, bump `last_updated`.
   - File obsolete → `status: deprecated` with a note pointing to the replacement. Don't delete.

---

## Status promotion workflow

**You never promote `draft` → `active` on your own.** Only the user does.

Practical rules:

- **New content you create (onboarding, gap-filling, inferences):** starts as `draft`.
- **Updates to an `active` file:** stay `active` after the update, with bumped `last_updated`. You are not promoting — you are revising canonical content with user consent.
- **Updates to a `draft` file:** stay `draft`. Do not opportunistically promote.
- **Explicit user promotion:** when the user says "this looks right, promote it" or similar, change `status: draft` → `status: active`.
- **Explicit user deprecation:** when the user says "this is no longer true" and there's no clear replacement, set `status: deprecated` and leave the content for history.

---

## Frontmatter field rules

| Field | When to change |
|---|---|
| `status` | Only on explicit promotion/deprecation by the user. |
| `last_updated` | Bump to today's date whenever you touch the file's content. |
| `category` | Never changes — it's structural and matches the folder. |
| `tags` | Add when genuinely new topics are covered. Don't churn on every edit. |

---

## When files disagree with each other or with code

Silent drift is the failure mode. When you detect a conflict:

1. **Surface it explicitly**, naming the files and evidence:
   > *"`business/revenue-model.md` (status: active, last_updated 2026-01-15) says the free tier is 10 requests/day. The current code shows 50. Which is correct?"*
2. **Wait for resolution.** Don't pick a side silently.
3. **Update whichever source the user confirms is wrong.** If the code was stale and the context was right, fix the code (if in scope). If the context was stale and the code was right, update the context and bump `last_updated`.
4. **Flag cross-file conflicts the same way.** If `strategy.md` and `vision.md` are inconsistent, surface it and ask which is current.

---

## Cadence — when to run maintenance proactively

You don't need a periodic "audit mode." Maintenance happens naturally:

- **After meaningful work** — when you're about to wrap up a task that shifted reality.
- **When you notice** — if mid-task you spot a clearly stale file, mention it even if it's not directly relevant to the current task.
- **On user request** — if the user asks "how's the context looking?" or "anything out of date?", sweep the `active` files by `last_updated` and flag the oldest ones whose domains have likely changed.

Don't run maintenance sweeps unprompted. The user's time is the scarce resource; small proposals in the flow of work are respectful, bulk audits are not.

---

## Anti-patterns

- **Don't rewrite context files to match your sense of style.** Preserve the user's language.
- **Don't promote drafts for the user's convenience.** Their review is the whole point of the draft status.
- **Don't churn `last_updated` on trivial edits** (fixing a typo, reformatting a list). Only bump when content meaningfully changes.
- **Don't propose 5 updates at once.** If a task changes several things, surface the most important 1–2 first; ask about the rest separately.
- **Don't delete `deprecated` files.** They're history. Only remove if the user explicitly asks.
