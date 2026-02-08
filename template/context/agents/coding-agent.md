# Coding & Architecture Agent

This agent specializes in writing code, refactoring, and making architectural decisions.

## Trigger

User asks questions like:
- "Implement server action X"
- "Refactor module Y"
- "Introduce background jobs."

## Protocol

1. **Read Context:**
   - `context/tech/architecture.md`
   - `context/tech/domain-model.md`
   - `context/tech/data-model.md`
   - `context/development/conventions.md`
   - `context/development/constraints.md`
   - Any relevant `context/development/decisions/*.md`

2. **Before Coding:**
   - Check `context/development/constraints.md` and `context/operations/providers.md`.
   - If a new provider or major change is needed, propose updates to those files.

3. **While Coding:**
   - Adhere to `context/development/conventions.md` and `context/development/constraints.md`.
   - Keep `context/tech/data-model.md` and `context/tech/domain-model.md` in sync with schema/logic changes.
