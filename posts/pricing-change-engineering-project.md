---
title: Switching to usage or credit pricing? It is an engineering project
slug: pricing-change-engineering-project
date: '2026-10-13T15:32:48.245Z'
category: Decisions
excerpt: >-
  Moving from seats to credits or usage pricing needs metering, plan versions
  and a migration path. What to build before you announce the change.
description: >-
  Moving to usage or credit pricing? Why it needs metering, plan versions and
  shadow billing before launch, and a realistic timeline.
author: The founder of Fraction
readTime: 7
draft: false
---

If you are moving from flat seat pricing to credits or usage-based pricing, treat it as an engineering project, not a pricing-page edit. The new model needs accurate metering, versioned plans, a way to move existing customers, and invoices customers can check. Budget weeks of engineering time and a test period before the announcement, or the first usage invoice becomes a support crisis.

This is coming up in almost every founder conversation I have this quarter. AI products have real per-use costs, so flat seat pricing is giving way to a subscription plus credits, or pure usage pricing. Usage billing has turned into a category of its own, and Stripe bought Metronome, a usage-billing company, which tells you where the payment providers think this is going. Stripe's own pricing research also found that fast-growing companies change their pricing more often than slower ones. Changing pricing is now a normal, repeated event for a startup.

What founders underestimate is that, for engineering, a new price is not a number. It is a set of systems.

## Why a pricing change lands on engineering

With seat pricing, billing is simple: count users, multiply, charge monthly. Most early products can get away with a subscription in the payment provider and a plan field on the account.

Usage or credit pricing changes what the product has to know about itself:

- **What counts as one unit.** A "credit" has to map to something the system can measure exactly: a generation, a document, a minute of processing, a resolved ticket.
- **Who used it and when.** Every unit has to be recorded against the right account and billing period, including retries, failures, and background jobs.
- **What the customer can see.** People paying per use want to see their usage before the invoice, not after.
- **What happens at the limit.** When credits run out, the product must block, warn, or allow overage, and do it consistently everywhere.

None of that exists in a seat-based product. Someone has to build it, and it touches nearly every feature that does billable work.

## The five pieces you will need

### 1. A metering pipeline you trust

Every billable action writes a usage event: account, unit type, quantity, timestamp, and a unique ID so the same action is not counted twice. That last point matters more than it looks. Retries and duplicate events are normal in distributed systems, and if your meter counts them, you overcharge. I wrote about the same problem on the incoming side in [the webhook that arrived twice](/post-webhook-arrived-twice).

Before you charge a single customer on the new model, run the meter in shadow mode for a few weeks: record usage, calculate what each customer would have paid, and compare it with what your logs and your own intuition say. Shadow mode is where you find the background job that counts every retry, or the feature that never reports usage at all.

### 2. Plan versions, not plan edits

The easiest mistake is editing the existing plan in place. Then you cannot tell which customers agreed to which terms, and you cannot honour the old price for anyone.

Instead, create a new plan version and keep the old one. Each account points at the version it is on. This is what makes grandfathering possible, and it is what lets you answer a customer who asks "what did I sign up for?"

### 3. A migration path for existing customers

Decide this before you build, because it changes what you build:

- **Grandfather** existing customers on the old plan indefinitely or for a fixed period.
- **Migrate on renewal,** so nobody's price changes mid-term.
- **Migrate everyone on a date** with notice, which is fastest but carries the most churn and support risk.

Whatever you choose, the system has to support it, report on it, and handle the edge cases: annual contracts, custom enterprise deals, accounts with credits already prepaid. Contract terms can limit what you are allowed to change and when, so check your customer agreements before you pick a date.

### 4. Usage visibility for customers

A usage page in the product showing what has been consumed this period, what remains, and what the next invoice is likely to be. Plus alerts at sensible thresholds. Customers forgive a price. They do not forgive a surprise. If you want a sense of how a surprise bill feels from the other side, [the first 48 hours after a surprise usage bill](/post-surprise-usage-bill-first-48-hours) is written for founders receiving one.

### 5. Internal reporting that matches the invoices

Finance and the founders need to see revenue by plan version, usage by customer, and margin per unit. If the numbers in your internal dashboard and the numbers on the invoices come from different calculations, they will drift. Use the same usage records for both.

## Buy the billing engine, own the policy

You almost certainly should not build the invoicing and rating engine yourself. Payment providers and dedicated usage-billing tools handle proration, tax, invoices, credit notes, and dunning far better than a startup will. What stays yours is the policy: what counts as a unit, how retries are treated, what happens at the limit, and how existing customers move. That split is the same one I recommend in [build your own billing, or let Stripe run it](/post-build-billing-or-use-stripe).

The trap is assuming the billing tool solves metering. It does not. It can only bill the usage events you send it. If your product counts wrong, the billing tool will invoice the wrong number very reliably.

## How long it really takes

For a seed-stage product moving from seats to a subscription plus credits, a realistic shape is:

- One to two weeks to define units, instrument billable actions, and build the usage event pipeline.
- Two to four weeks of shadow metering, running alongside the old pricing.
- One to two weeks for plan versioning, the usage page, limits, and alerts.
- A staged rollout: new customers first, existing customers on the chosen migration path.

That is six to eight weeks of calendar time in the cases I have seen, mostly because shadow metering cannot be rushed. Founders who announce the new pricing first and build second end up issuing credits and apologies for the first two billing cycles.

## The questions I ask before any pricing change

When a founder tells me pricing is changing next month, these are the questions that decide whether that date is realistic:

1. Can we name the single unit we charge for, and does every feature that consumes it report it today?
2. If the same action is retried three times, how many units do we record?
3. Can we show a customer their usage before we bill them?
4. Which customers are on annual or custom terms, and what do their contracts allow?
5. Can we run the new pricing in shadow mode for one full billing cycle?
6. Who owns the meter after launch?

If more than two of those get a shrug, the date moves. It is cheaper to move a launch date than to refund a month of invoices.

## Who should own it

A pricing change sits between product, engineering, and finance, so it tends to be owned by nobody. In a startup without a senior technical leader, the founder ends up as the integration point, usually discovering the metering gaps when customers start asking questions. This is exactly the kind of cross-functional, high-stakes decision where a fractional CTO pays for itself: scope the metering, choose the build-versus-buy line, and sequence the rollout so nobody is surprised. You can see how that work is structured on the [pricing page](/pricing).

## FAQ

### Can we switch to usage pricing with just a payment provider?

You can use the payment provider for invoicing and rating, and most teams should. You still need your own product to measure usage accurately and send those events, which is the part that takes the engineering time.

### Should we grandfather existing customers?

Usually yes, at least until their next renewal. Moving customers mid-term on a model they did not agree to creates churn and support load, and contracts may not allow it. Plan versioning is what makes grandfathering possible.

### How do we avoid overcharging customers on the new model?

Give every usage event a unique ID, deduplicate on it, and run the meter in shadow mode for at least one billing cycle before charging. Compare the shadow invoices against what you would expect for your largest accounts.

### What is the most common mistake?

Announcing the new pricing before the metering exists. The announcement date then forces a rushed build, and the first real invoices carry every counting bug at once.

If a pricing change is on your roadmap and you want a second opinion on the metering plan before it ships, [book a call](/book-a-call), or start with a [technical teardown](/teardown) of the billing and usage paths.
