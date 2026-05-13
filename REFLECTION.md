# Project Reflection

Building SpendLens has been a massive learning experience in architecting a specialized, full-stack web application from scratch. This document serves as a reflection on the development process, challenges overcome, and how AI was leveraged as an engineering multiplier rather than a crutch.

## Core Learnings

The most significant learning was realizing the hard limits of relying on Large Language Models for deterministic output. My initial prototype attempted to use OpenAI to do the math and calculate the cost savings for the user. It failed spectacularly—it hallucinated pricing tiers, miscalculated seat counts, and failed to reliably recommend logical downgrades. 

I quickly pivoted, decoupling the intelligence. I learned to use AI where it shines (contextualizing raw data into a human-readable executive summary) and used raw, type-safe TypeScript functions where deterministic reasoning was required (the actual cost calculation engine).

## AI Usage

I used ChatGPT and Cursor extensively to accelerate boilerplate generation, brainstorm UI/UX ideas, and map out the overarching application architecture. AI was incredibly useful as a pair-programmer when dealing with unfamiliar syntax in Tailwind v4 and debugging complex Vitest module resolution errors.

However, **I manually implemented and validated the core audit logic** because financial pricing recommendations required strict deterministic reasoning that LLMs currently cannot guarantee. All math, component routing, and state persistence were mapped and coded manually to ensure absolute reliability.

## A Notable AI Failure

During the build phase for the lead capture system, **Cursor incorrectly recommended storing sensitive user lead data (emails and names) directly in the public `localStorage` state** before syncing. 

I actively rejected this approach after reviewing the security implications. Passing raw PII into a client-side unencrypted store creates an unnecessary surface area for data extraction. Instead, I routed the lead capture form directly to a secure Supabase backend instance and only saved non-sensitive tool configurations locally. This ensured that the public share URL (`/results/:id`) remained entirely anonymized. This was a strong reminder that AI optimizes for immediate code execution, not necessarily security or architectural integrity.
