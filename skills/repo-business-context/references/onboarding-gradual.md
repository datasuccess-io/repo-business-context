# Path C — Build gradually (default)

This is the default mode. Use it when the user hasn't asked for onboarding, said "just keep going," or is clearly in flow and doesn't want interruption.

The operating principle: **context accumulates through normal work.** When you hit a business-context gap, ask a minimal question (1–2 max), save the answer, proceed. No upfront ceremony. No batch interrogation.

This is the mode that respects vibe coding. Most users will land here.

---

## When to ask a question

Ask only when the task you're about to do **genuinely requires** business context that doesn't exist yet. Check silently first — if the context already exists (even as `draft`), use it and move on.

Trigger examples:

| About to do… | And missing… | Ask about |
|---|---|---|
| Write public-facing copy (landing, email, CTA) | `brand/voice.md` is empty | Brand voice in 3 adjectives + one "we'd never sound like…" |
| Make a product prioritization decision | `business/strategy.md` or `product/roadmap.md` empty | Current focus or what's explicitly out-of-scope |
| Implement pricing, billing, or plan limits | `business/revenue-model.md` empty | Pricing approach (even "not decided" is valid) |
| Name a user-facing feature or copy for one | `business/personas.md` empty | Who the ideal user is, in one sentence |
| Pick a design or UX pattern | `brand/ux-principles.md` empty | Design preferences or hard constraints |
| Decide on tech tradeoffs (cost vs speed, simplicity vs scale) | `business/strategy.md` empty | Which side to lean |

The threshold: would a thoughtful collaborator ask the founder this before proceeding? If yes, ask.

---

## How to ask

**One or two sentences. Offer a default. Let the user skip.**

The format:
1. Briefly state why you're asking (connect it to the current task).
2. Ask the minimal question.
3. Offer an easy out ("skip" / "default" / "not sure yet is fine").

Examples:

> *"Before I write this pricing page — I don't have your pricing in `business/revenue-model.md` yet. Is it free, paid tiers, usage-based, or not decided? (Say 'skip' and I'll write something generic.)"*

> *"Quick one for this landing page copy: brand voice in 3 adjectives + one tone you'd never use? I'll save it to `brand/voice.md` and reuse everywhere. ('Skip' is fine — I'll draft something neutral.)"*

> *"Who's the ideal user for this feature? A sentence is enough — I'll draft `business/personas.md` from it and stop guessing."*

**Anti-patterns:**
- Don't ask 3 questions before touching the task. One or two, then act.
- Don't write the answer AND ask the question in the same turn. Ask first; wait; then write.
- Don't pretend to know something you inferred. If you guessed, say so and mark as draft.
- Don't flag every draft use. Flag inferred drafts once per session on high-stakes tasks — then proceed silently.

---

## After getting an answer

1. **Write to the relevant file(s) as `status: draft`**, bumping `last_updated` to today.
2. **Route one answer to multiple files** if it fits (see `routing.md`). A pricing answer may touch `revenue-model.md` AND `value-prop.md`.
3. **Use the just-captured context immediately** in the task you were doing.
4. **Note what you saved** briefly in your response: *"Saved your voice to `brand/voice.md` (draft) — using it here."*

If the user said "skip," don't write anything to `/context/`. Write the generic version for the task at hand and move on. Don't keep re-asking the same question next time — but do leave the file empty so the gap remains visible.

---

## Escalation — when to suggest quick onboarding

If you find yourself asking **3+ gap questions in one conversation**, suggest consolidating:

> *"We've filled in a few things already. If it's useful, I can run the 5-minute 7-question onboarding and we'll have most of `/context/` drafted in one pass. Or we keep going as-is — your call."*

Don't push. If they say keep going, keep going.

---

## Guardrails

- **Don't interrupt a task in flow with a clarifying question the task doesn't actually need.** The test: if the user didn't care about the missing context, would the output be noticeably worse? If no, just draft something reasonable with a generic voice and move on.
- **Never block on a skipped answer.** The user's "skip" is a valid signal — honor it.
- **Keep the touch light.** The value of this path is that the user barely notices it. When they look at `/context/` a week later and find it's half-populated, that should feel like magic, not like homework.
