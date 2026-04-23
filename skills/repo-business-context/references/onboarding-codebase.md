# Path B — Extract from codebase

Use this when the user picks codebase extraction, or when starting in an existing repo that clearly has meaningful code and documentation already.

The goal is not to produce perfect context — it's to produce **confident drafts of what's inferrable**, cheaply, so the user only has to confirm rather than author from scratch.

## What to scan (in order, stop when you have enough signal)

1. **`README.md`** — densest source of business intent. Product name, tagline, audience, positioning, key features are usually here.
2. **Top-level folder structure** — hints at scope and domain (`landing-page/`, `dashboard/`, `billing/`, `public/`, etc.).
3. **Marketing or landing code** — if `/marketing/`, `/site/`, `/landing/`, `/apps/web/` exists, scan for hero text, pricing, CTAs.
4. **Environment/config** — `.env.example`, config files reveal providers (Stripe, Supabase, Clerk, Postgres, etc.).
5. **Recent commits** — `git log --oneline -30` shows recent focus.
6. **Open issues/PRs** — if `.github/` has relevant folders, or `gh issue list` / `gh pr list` is available, titles reveal backlog and priorities.

**Do not deep-read every file.** You're harvesting signal, not building completeness. Stop as soon as you have enough to draft.

## What to infer, and where it lands

Check `references/routing.md` within this skill to see a list of possible files and its contents.

**Deliberately skip** files with no codebase signal: `business/revenue-model.md` (unless pricing is explicit in README), `business/strategy.md` (requires human intent), `brand/assets.md`, `brand/channels.md` (requires deeper scan — save for later).

## Batch-confirm with the user

Do not silently write 8 files. Present inferences grouped, let the user confirm in one pass:

1. **Summarize findings in plain language.** For each planned file, one-line: what you inferred + the source.

   Example:

   > Based on the repo scan, here's what I'd write. Confirm and I'll create the files:
   >
   > - **`business/vision.md`** — "A feedback widget for SaaS product teams." _(from README hero line 3)_
   > - **`product/integrations.md`** — Hubspot, Slack, Google Drive. _(from user onboarding and admin area)_
   > - **`brand/voice.md`** — "Technical, friendly, no marketing fluff." _(inferred from README tone)_
   > - …
   >
   > Yes to all? Or want to adjust any?

2. **Wait for confirmation.** If the user tweaks any, incorporate their correction before writing.

3. **Write all files** in one go. Don't wait for approval.

## Quality rules

- **Low signal → don't guess.** If the codebase has nothing about pricing, leave `revenue-model.md` empty and move on. Fabrication erodes trust faster than an empty file.
- **Preserve the user's own language.** If the README says "customers," don't silently rename to "users." If it says "ship fast," don't rephrase to "rapid iteration."
- **Always cite evidence in the body** for inferred content. Evidence notes are what lets the user catch misreads quickly.
- **Write with confidence.** The evidence notes in each file body are the trust mechanism.

## Closing

Use the same close-out as Path A (see `references/onboarding-quick.md` — "Closing the onboarding"). Cover all three points:

1. **Summarize what was created** and which files were left empty (gaps visible = easier to fill later).
2. **Explain what's automatic from here** — context files will be read and updated during normal work; the user corrects by talking, not by editing files.
3. **Return to the original task** (if any).

If the user asks why you didn't draft a specific file (e.g., `revenue-model.md`), explain: _"I couldn't find pricing signals in the repo. If you want, I can ask you directly, or we can fill it later."_
