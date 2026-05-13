# SpendLens KPI & Metrics Strategy

This document defines the key performance indicators (KPIs) for SpendLens. Because this is a free, lead-generating utility rather than a daily-use SaaS product, standard startup metrics like DAU (Daily Active Users) are dangerous vanity metrics. We measure success entirely on qualified value delivered.

## The North Star Metric

**North Star:** Completed audits with savings identified.

### Why NOT DAU?
SpendLens is a one-time diagnostic tool for a specific procurement problem. A user who visits daily but never completes an audit is worthless to our top-of-funnel conversion. Conversely, a founder who visits *once*, completes an audit, realizes $12,000 in savings, and shares the link internally generates massive value for Credex. DAU incentivizes building sticky, habit-forming features; we want an efficient, hit-and-run utility.

### Why "Savings Identified"?
An audit that shows $0 in savings is a bad experience (and a dead lead) for Credex. The core viral loop of this product relies on its ability to *find waste*. If the audit engine consistently returns "You're perfectly optimized," the loop breaks because there is no shock-value for the founder to share on Twitter or Slack. We only care about audits that generate actionable financial recovery.

## Secondary Metrics

1. **Viral Coefficient (K-Factor):** How many new, unique audits are generated per shared public URL? This tracks the health of our "Share to Twitter/LinkedIn" distribution loop.
2. **Lead Conversion Rate:** The percentage of completed audits with >$500 in identified savings that successfully submit their email to the Supabase lead capture form.
3. **Time to Value (TTV):** The average time elapsed from landing on the homepage to viewing the completed Results dashboard. This must consistently remain under 60 seconds to fulfill our landing page promise.
