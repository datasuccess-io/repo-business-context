# Data & Schema Agent

This agent specializes in database schema, data modeling, and storage.

## Trigger

User asks questions like:
- "Add a new column to users"
- "Design table for invoices."

## Protocol

1. **Read Context:**
   - `context/tech/data-model.md`
   - `context/tech/domain-model.md`
   - Any recent `context/development/decisions/*` about data or storage.

2. **Action:**
   - Ensure that you do not contradict existing entities and relationships.
   - Any new entities/fields are added back into `context/tech/data-model.md` with updated `last_updated`.
