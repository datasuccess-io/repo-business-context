# Path A — Quick onboarding (5-minute 5W2H)

Use this when the user picks the quick onboarding path, or explicitly asks for "RBC onboarding" / "fill my context files" / "let's set up the business context."

The promise to the user is **under 5 minutes**. Keep it tight.

## The 7 questions

Ask them conversationally, one at a time, waiting for the answer before moving on. Don't lecture; don't sub-question. One sentence answers are fine.

Open with a brief framing: _"I'll ask 7 short questions using the 5W2H method. Should take about 5 minutes. Short answers are fine, 'I don't know yet' is fine."_

1. **What** — In one sentence, what does your product do, and for whom?
2. **Why** — What problem does it solve that matters enough that someone would pay or switch tools?
3. **Who** — Describe one specific person you're building for. Real or composite, but concrete.
4. **Where** — Where will users find you? (website, social, search, referrals, app stores, partnerships, etc.)
5. **When** — What's the best moment to engage users? (first time doing something, before a purchase, planning a travel, etc.)
6. **How** — What's your #1 differentiator — the thing you do that alternatives don't?
7. **How much** — What's your pricing approach? (free, tiers, usage-based, not yet decided, etc.)

## Mapping answers to files

**One answer can populate multiple files.** Parse each response for intent and route content to the right place(s). Your judgment matters — don't mechanically split.

| Question | Primary file                            | Also fills if content fits              |
| -------- | --------------------------------------- | --------------------------------------- |
| What     | `business/vision.md`                    | `business/value-prop.md`                |
| Why      | `business/vision.md` (problem section)  | `business/strategy.md`                  |
| Who      | `business/personas.md`                  | `business/strategy.md` (audience scope) |
| Where    | `brand/channels.md`                     | `business/strategy.md` (go-to-market)   |
| When     | `product/use-cases.md`                  | —                                       |
| How      | `business/strategy.md` (differentiator) | `business/value-prop.md`                |
| How much | `business/revenue-model.md`             | —                                       |

**Plus:** infer **`brand/voice.md`** from the user's own writing style across their answers. This is not an explicit question — it's a by-product. If they wrote crisp and punchy, their voice is crisp and punchy. If they wrote warm and conversational, their voice is warm and conversational. Capture 3 adjectives + one "we'd never sound like…" note, with an inline note that it was inferred from onboarding answers.

## Writing each file

For every file you populate:

1. Lead the body with a one-line summary (useful for retrieval later).
2. Keep content short — a paragraph or a short list. The user deepens what matters over time.
3. **Use the user's own wording** wherever possible. Don't corporate-speak their answers.
4. For inferred content (especially `voice.md`), note the source inline: _"Inferred from onboarding answers — tone was terse and technical."_ This helps the user catch misreads, not approve them.

## Closing the onboarding

When files are written, close out clearly. This message sets the user's expectations for how RBC works going forward — it's the most important communication in the entire onboarding flow.

**Cover three things in sequence:**

1. **Confirm what was created.** Name the files: _"Created 7 files — `vision.md`, `personas.md`, `strategy.md`, `use-cases.md`, `revenue-model.md`, `channels.md`, `voice.md`."_

2. **Explain what's automatic from here.** Make the living-document model explicit:

   > _"Your repo now has business context. Going forward, I'll read the relevant files automatically before business-related work — copy, pricing, positioning, feature decisions — and update them when reality shifts. You don't need to maintain them manually. If something's wrong, just correct me and I'll fix the file."_

3. **Return to the original task.** If the user came for something else, continue it now — as a context-aware agent.

## Guardrails

- **Don't interrogate.** Tone is collaborative, not interview-y.
- **Don't sub-question a short answer.** If a user says "not sure yet" for pricing, note that in `revenue-model.md` and move on. "Not yet decided" is valid content.
- **Don't explain 5W2H.** Just use it. Only clarify if asked.
- **Don't over-fill files.** Short drafts beat long speculation. The user builds depth through real work, not the onboarding.
- **Don't bundle all 7 questions in one message.** One at a time keeps the pace conversational and the "under 5 min" promise honest.
- **Write confidently.** Files are live as soon as they're written.
