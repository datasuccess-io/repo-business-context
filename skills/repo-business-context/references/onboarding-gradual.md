# Path C — Build gradually (default)

This is the default mode. Use it when the user hasn't asked for onboarding, said "just keep going," or is clearly in flow and doesn't want interruption.

The operating principle: **context accumulates through normal work.** When you hit a business-context gap, ask a minimal question (1–2 max), save the answer, proceed. No upfront ceremony. No batch interrogation.

This is the mode that respects vibe coding. Most users will land here.

## When to ask a question

Ask only when the task you're about to do **genuinely requires** business context that doesn't exist yet. Check silently first — if the context already exists, use it and move on.

Check `references/routing.md` within this skill to see a list of possible files and its contents.

The threshold: would a thoughtful collaborator ask the founder this before proceeding? If yes, ask.

## How to ask

**One or two sentences. Offer a default. Let the user skip.**

The format:

1. Briefly state why you're asking (connect it to the current task).
2. Ask the minimal question.
3. Offer an easy out ("skip" / "default" / "not sure yet is fine").

Examples:

> _"Before I write this pricing page — I don't have your pricing in `business/revenue-model.md` yet. Is it free, paid tiers, usage-based, or not decided? (Say 'skip' and I'll write something generic.)"_

> _"Quick one for this landing page copy: brand voice in 3 adjectives + one tone you'd never use? I'll save it to `brand/voice.md` and reuse everywhere. ('Skip' is fine — I'll draft something neutral.)"_

> _"Who's the ideal user for this feature? A sentence is enough — I'll draft `business/personas.md` from it and stop guessing."_

**Anti-patterns:**

- Don't ask 3 questions before touching the task. One or two, then act.
- Don't write the answer AND ask the question in the same turn. Ask first; wait; then write.
- Don't pretend to know something you inferred. If you guessed, note the source briefly.

## After getting an answer

1. **Write to the relevant file(s)**.
2. **Route one answer to multiple files** if it fits (see `routing.md`). A pricing answer may touch `revenue-model.md` AND `value-prop.md`.
3. **Use the just-captured context immediately** in the task you were doing.
4. **Note what you saved** briefly in your response: _"Saved your voice to `brand/voice.md` — using it here."_

If the user said "skip," don't write anything to `/context/`. Write the generic version for the task at hand and move on. Don't keep re-asking the same question next time — but do leave the file empty so the gap remains visible.

## Escalation — when to suggest quick onboarding

If you find yourself asking **3+ gap questions in one conversation**, suggest consolidating:

> _"We've filled in a few things already. If it's useful, I can run the 5-minute 7-question onboarding and we'll have most of `/context/` drafted in one pass. Or we keep going as-is — your call."_

Don't push. If they say keep going, keep going.

## Guardrails

- **Don't interrupt a task in flow with a clarifying question the task doesn't actually need.** The test: if the user didn't care about the missing context, would the output be noticeably worse? If no, just draft something reasonable with a generic voice and move on.
- **Never block on a skipped answer.** The user's "skip" is a valid signal — honor it.
- **Keep the touch light.** The value of this path is that the user barely notices it. When they look at `/context/` a week later and find it's half-populated, that should feel like magic, not like homework.
