# Maintenance — keeping context aligned with reality

Context files are living documents. Your job is to update them as the product evolves — not as a separate chore, but in the flow of normal work. Context decay is the #1 risk of this framework; proactive updates are the primary defense.

The mental model: **would a thoughtful collaborator update this note before the next session?** If yes, update it now.

## When to update

Update whenever the current work **changes business reality** — not just code structure.

**Refactors and bug fixes usually do NOT need context updates.** Only update when the _truth of the product_ changed — what it does, who it's for, how it's priced, how it runs, how it sounds.

**`product/architecture.md` is the exception to that rule.** For this one file, structural change _is_ the truth, so work that looks like "just a refactor" can be exactly what it needs to record. Update it when:

- a surface, module, or entry point is added, removed, or renamed;
- an external service is added, dropped, or swapped — or you discover which of its limits actually constrains the design;
- a request path is redrawn, or one gains or loses an auth boundary;
- a bug turns out to have been caused by something non-obvious about how the pieces fit. **Write the trap down.** A trap that cost a production bug once will cost another unless it's recorded — this is the highest-value content in the file, and the content least likely to exist anywhere else.

The bar is lower here than elsewhere, because the cost is asymmetric: a slightly stale architecture note is a nuisance, while a missing one sends the next plan into a system that no longer exists.

## How to update

The operating rule: **decisions are assisted; updates are autonomous.** The user chooses the direction when facts conflict; you propagate the chosen direction across files without further approval.

For clear factual changes (feature shipped, pricing stated explicitly in conversation): **update the file directly and announce it.**

> _"Updated `business/revenue-model.md` — free tier raised to 50 requests/day."_

For uncertain inferences (reading between the lines, architecture implied by code structure): **update and note your source.**

> _"Updated `product/features.md` based on new component added — social login. Correct me if that's off."_

Announce every update. Never silently mutate a context file. One line is enough — no detailed explanation needed.

## Consistency check before writing

Before writing an update, glance at the files `references/routing.md` pairs with the one you're changing (a pricing change pairs with `value-prop.md`; an audience change pairs with `personas.md` and `strategy.md`). If the new fact contradicts any of them, **stop before writing** and surface it as a decision:

> _"You positioned this for entry-level professionals in `business/personas.md`, but a $10k/month starter plan implies enterprise buyers. Rethink the pricing, or update the positioning?"_

Once the user picks a direction, update **all** affected files in one pass and announce each. Catching these contradictions early is a core reason RBC exists — a mismatch between pricing and personas is a business problem, not a filing problem.

## When files disagree with each other or with the code

Silent drift is the failure mode. When you detect a conflict:

1. **Surface it explicitly**, naming the files and evidence:
   > _"`business/revenue-model.md` says the free tier is 10 requests/day. The current code shows 50. Which is correct?"_
2. **Wait for the user's answer.** Don't pick a side silently.
3. **Update whichever source is wrong** based on the user's confirmation. If the code was stale and the context was right, fix the code (if in scope). If the context was stale and the code was right, update the context file.
4. **Flag cross-file conflicts the same way.** If `strategy.md` and `vision.md` are inconsistent, surface it and ask which is current.

## Cadence — when to run maintenance proactively

Maintenance happens naturally:

- **After meaningful work** — when you're about to wrap up a task that shifted reality, update before closing the session.
- **When you notice** — if mid-task you spot clearly stale content, mention it and update even if it's not directly relevant to the current task.
- **On user request** — if the user asks "how's the context looking?" or "anything out of date?", sweep the files and flag any whose domains have likely shifted based on recent code and conversation.

Don't run maintenance sweeps unprompted. Small in-flow updates are respectful; bulk audits are not.

## Anti-patterns

- **Don't rewrite context files to match your sense of style.** Preserve the user's language.
- **Don't surface 5 conflicts at once.** Raise the most important 1–2 decisions first; handle the rest separately. (Plain factual updates don't need this rationing — apply and announce them.)
- **Don't delete content without cause.** If something is stale and there's no clear replacement, write what's currently true instead of just deleting.
- **Don't silently update.** Even when the update is obvious, announce it — one line.
