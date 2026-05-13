# SpendLens Development Log

## Day 3 — 2026-05-13
**Hours worked:** 6

**What I did:**
- Finalized the `react-helmet-async` implementation to get Open Graph tags working properly for Twitter/LinkedIn previews.
- Integrated `react-share` for viral sharing buttons on the results page.
- Added a full Vitest testing suite for the audit engine.
- Configured GitHub Actions for CI/CD.

**What I learned:**
- When migrating files from `.js` to `.ts` in a Vite environment, you absolutely *must* delete the old `.js` files. Vitest was resolving to an obsolete `pricingData.js` file instead of my new TypeScript version, causing my tests to fail with `optimizedSpend: 0` for over an hour.

**Blockers:**
- Wasted way too much time debugging the `NaN` errors in the testing suite only to realize it was a module resolution conflict. Extremely frustrating, but a good lesson in keeping the directory clean.

**Plan for tomorrow:**
- Final UI sweep.
- Deploy to Vercel/Netlify.
- Start drafting the Product Hunt launch copy.

---

## Day 2 — 2026-05-12
**Hours worked:** 9

**What I did:**
- Built the core `auditEngine.ts` logic.
- Implemented the OpenAI integration for the executive summary feature.
- Hooked up Supabase to save audit snapshots and generate UUIDs for the public share pages.

**What I learned:**
- Relying on AI to do math is a terrible idea. I initially tried to have OpenAI calculate the savings, but it kept hallucinating tier prices or doing the seat math wrong. I reversed course and built a deterministic, hardcoded rules engine in TypeScript instead. The AI is now *only* used to write the 100-word human-readable summary.
- Supabase's out-of-the-box Postgres API is magical. Saved me easily 3 days of backend setup.

**Blockers:**
- The OpenAI API was occasionally timing out during testing, causing the whole UI to hang. I had to build a template-based fallback string so the app degrades gracefully if the API fails.

**Plan for tomorrow:**
- Focus entirely on the "viral loop" — public share URLs, dynamic meta tags, and testing the engine edge cases.

---

## Day 1 — 2026-05-11
**Hours worked:** 8

**What I did:**
- Initialized the repository using React, Vite, and Tailwind CSS v4.
- Set up the project structure (`/components`, `/pages`, `/utils`).
- Built the initial multi-step `SpendForm` and set up `localStorage` persistence.

**What I learned:**
- Tailwind v4 handles configuration completely differently than v3. It took some reading through the new docs to get the base theme variables set up properly without a `tailwind.config.js` file.
- Using `localStorage` early on makes testing the multi-page flow so much easier since I don't lose my form state on hot reloads.

**Blockers:**
- Getting the glassmorphism and animated gradients to look "premium" was surprisingly tough. I had to rip out my first attempt at the UI because it looked too much like a generic dashboard template. Re-did it with a darker, more modern aesthetic.

**Plan for tomorrow:**
- Tackle the actual audit math and start integrating the AI tool pricing data.
