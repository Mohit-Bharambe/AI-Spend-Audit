# Pricing Data Management

SpendLens relies on a structured pricing database to generate accurate financial recommendations.

## Structure

Pricing is defined in `src/data/pricingData.ts`. Each tool entry follows this schema:

```typescript
export const pricingData = {
  toolName: {
    planName: {
      price: number, // Monthly cost per seat (or total for flat tiers)
      recommendedFor: string // Description of the ideal use case/team size
    }
  }
}
```

## Adding a New Tool

1. Open `src/data/pricingData.ts`.
2. Add a new object following the schema above.
3. Update the `planOptions` in `src/components/SpendForm.jsx` if necessary.
4. The **Audit Engine** will automatically pick up the new tool data for its lookup functions.

## Strategy

We prioritize "List Prices" for transparency. For Enterprise tiers where pricing is typically hidden, we use "Floor Estimates" (e.g., $60/mo) to provide a baseline for optimization.
