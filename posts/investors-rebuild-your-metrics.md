---
title: Investors will rebuild your metrics. Will the numbers match?
slug: investors-rebuild-your-metrics
date: '2026-11-21T04:35:27.203Z'
category: Fundraising
excerpt: >-
  Diligence teams recompute retention and revenue from raw data. When their
  number differs from your deck, the cause is usually in your data pipeline.
description: >-
  Investors recompute retention and revenue from raw data. Why the numbers drift
  from your deck, and a one-week check to run before you raise.
author: The founder of Fraction
readTime: 6
draft: false
---

If you are raising a seed or Series A, expect the investor to rebuild your key numbers from raw data rather than trust the slide. When their number for retention or revenue comes out different from yours, it is rarely fraud. It is usually a quiet technical problem: events counted twice, test accounts left in, a definition that changed halfway through the year. The fix is to reconcile your own numbers before anyone else does.

I see this in almost every raise I help with. The founder has a clean chart in the deck. The investor's analyst asks for a customer-level export. Two days later there is an awkward call about why their net revenue retention is 104% and the deck says 118%. Nobody lied. The numbers came from three different systems that were never made to agree.

## Why investors stopped trusting the chart

A metric on a slide is a conclusion. Diligence wants the working. Guides written for buyers and investors describe the same routine: request customer-level data, build cohorts by contract start date, and recompute retention themselves, then reconcile it against the revenue figures. SaaS Capital has a useful piece on [the pitfalls in measuring retention](https://www.saas-capital.com/blog-posts/grrumbling-about-retention-metrics-or-pitfalls-in-measuring-saas-churn/) that shows how easily two honest people get different answers from the same business.

The question an analyst is really asking is simple: if someone else takes your raw data and your written definition, do they get your number? If not, your number is not the one they will use.

### The three systems that never agree

Most early-stage companies have at least three sources of truth for "how are we doing":

- **Billing** (Stripe, Chargebee, invoices in the accounting tool). This is what money actually did.
- **The product database.** Accounts, seats, plans, status flags. This is what the app thinks is true.
- **Product analytics** (an analytics tool or a homemade events table). This is what users appear to have done.

Investors care most about billing, because money is the hardest thing to fake. Founders often build the deck from analytics or the product database, because that is where the nice dashboards live. The gap between those systems is where diligence calls get uncomfortable.

## Where the numbers usually drift

These are the causes I find most often, roughly in order of frequency. None of them are exotic. All of them are invisible until someone recomputes from scratch.

### Test, internal and free accounts left in

Your own team's accounts, the demo account sales uses, the five "customers" who are friends on a free plan, the QA account a contractor created in 2024. Left in the active-user or customer count, they inflate usage and can flatter retention, because internal accounts never churn. A filter that excludes them should exist in exactly one place, and every metric should use it.

### Events counted twice

Analytics double counting is common. A page view fires from both the client and the server. A mobile app retries a failed request and logs the event twice. Someone added a second tracking snippet during a website redesign. Active-user numbers creep up and nobody notices because the trend still looks plausible. A quick check: pick one known user and one day, and count their events by hand against what they actually did.

### A definition that changed and was never written down

"Active" meant logged in during Q1. In Q3 an engineer changed it to "performed any action", which includes background syncs. The chart has a step change nobody can explain. Or "customer" meant paying account until the product team started counting workspaces. If a definition changed, that is fine. Not knowing when, or not restating history, is the problem.

### Annual plans, discounts and refunds handled inconsistently

Revenue metrics break in predictable ways: an annual prepayment counted as twelve months of revenue in the month it was paid, a 50% launch discount ignored in the recurring revenue figure, refunds and failed payments never subtracted. Billing systems usually get this right. Spreadsheets built on top of them often do not.

### Time zones and month boundaries

A customer who cancels at 11pm on the 31st in California has cancelled on the 1st in UTC. Across hundreds of customers that is enough to move a monthly churn figure. It sounds trivial until the analyst's cohort table differs from yours by one customer in every month.

## A one-week reconciliation before you raise

You do not need a data team for this. In my experience a competent engineer plus the founder can do it in about a week for a company with a few hundred customers. Treat that as a rule of thumb; messy billing history takes longer.

### Day one: write the definitions down

One short document. What counts as a customer, an active user, churn, expansion, monthly recurring revenue. Which accounts are excluded and how they are identified. When any definition changed. This document will end up in your data room anyway, so writing it now costs nothing.

### Days two and three: recompute from billing

Export customer-level billing data and compute recurring revenue and retention directly from it, using the definitions you just wrote. Do it in a spreadsheet or a short script, not your dashboard tool, so you can see every step. This is the number the investor will get. Compare it with the deck.

### Days four and five: explain every gap

For each month where your number and the billing number differ by more than a small amount, find the cause. Usually it is one of the patterns above. Fix the pipeline where you can. Where you cannot, note the reason.

### End of the week: pick one number and restate if needed

If the honest number is lower than the deck, change the deck now. A founder who says "we restated retention from 118% to 108% after reconciling to billing, here is why" looks careful. A founder whose number gets corrected by the analyst looks like they did not know their own business. The second costs far more in trust than the ten points cost in valuation.

## What this has to do with technical leadership

This is a data engineering problem dressed up as a finance one. The fixes are technical: one shared exclusion filter, server-side event deduplication, a definitions table in the database, metrics computed from billing rather than from front-end events. If you are deciding whether to buy an analytics tool or build your own reporting, [the build-versus-buy tradeoffs for product analytics](/post-build-product-analytics-or-buy) matter here too, because the tool you pick shapes how easy reconciliation is.

It belongs in the same preparation as the rest of your [technical data room](/post-technical-data-room). If you want a second pair of eyes on it before investors see it, our [technical teardown](/teardown) includes exactly this kind of check, and you can see how engagements are structured on the [pricing page](/pricing).

## FAQ

### Will investors really recompute my numbers at seed stage?

Not always in full. Many seed investors rely on the deck plus a few spot checks. But Series A investors, and any seed fund with an analyst, commonly ask for customer-level exports. Assume someone will check, because the cost of being caught out is much higher than the cost of a week of preparation.

### Which source of truth should I use?

Billing, for anything involving revenue or paying customers. Product analytics is fine for engagement metrics, but label them as such and explain how they are measured. Never build a revenue figure from analytics events.

### Should I share my analytics dashboard login with investors?

I would not, at least not as the first step. Share exports and the definitions document. A live dashboard invites questions about every odd spike, and it may expose customer data you should not be sharing. Read-only access later in confirmatory diligence is a different conversation.

### What if I find a big discrepancy a week before the raise?

Fix the deck, not the data. Restate the number, write a two-line explanation, and tell the lead investor yourself. If you want help working through it quickly, [book a call](/book-a-call) and we can go through the reconciliation together.
