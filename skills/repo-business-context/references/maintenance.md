# Maintenance — keeping context aligned with reality

Context files are living documents. Your job is to update them as the product evolves — not as a separate chore, but in the flow of normal work. Context decay is the #1 risk of this framework; proactive updates are the primary defense.

The mental model: **would a thoughtful collaborator update this note before the next session?** If yes, update it now.

## When to update

Update whenever the current work **changes business reality** — not just code structure.

**Refactors and bug fixes usually do NOT need context updates.** Only update when the _truth of the product_ changed — what it does, who it's for, how it's priced, how it runs, how it sounds.

## How to update

For clear factual changes (feature shipped, pricing stated explicitly in conversation): **update the file directly and announce it.**

> _"Updated `business/revenue-model.md` — free tier raised to 50 requests/day."_

For uncertain inferences (reading between the lines, architecture implied by code structure): **update and note your source.**

> _"Updated `product/features.md` based on new component added — social login. Correct me if that's off."_

Announce every update. Never silently mutate a context file. One line is enough — no detailed explanation needed.

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
- **Don't propose 5 updates at once.** Surface the most important 1–2 first; ask about the rest separately.
- **Don't delete content without cause.** If something is stale and there's no clear replacement, write what's currently true instead of just deleting.
- **Don't silently update.** Even when the update is obvious, announce it — one line.
