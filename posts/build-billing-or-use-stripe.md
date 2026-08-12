---
title: 'Build your own billing, or let Stripe run it?'
slug: build-billing-or-use-stripe
date: '2026-08-12T09:20:00.000Z'
category: Decisions
excerpt: >-
  Billing feels like core logic you should own. For almost every early startup,
  it is not. When to lean on Stripe, and the narrow cases where you build.
description: >-
  Build billing yourself or let Stripe run subscriptions? When to buy, the
  narrow cases to build, and the maintenance cost each choice hides.
author: The founder of Fraction
readTime: 5
draft: false
---

An engineer looks at your subscription plans and says billing is core to the business, so the team should own it rather than rent it. It is a reasonable-sounding argument, and it is wrong far more often than it is right. Billing is not one feature. It is a dozen small features that all have to be correct on the day money moves, and most of them have nothing to do with what your product actually does.

I have watched founders spend an engineer-quarter rebuilding what a payment processor already gives them for a fraction of a percent, then spend the next year maintaining it. Here is how I decide before anyone opens a pull request.

## Why billing looks like a build and almost never is

The word "billing" hides how much surface area you are volunteering to own. Charge a card once and you are done. Charge it every month and you have signed up for proration when someone upgrades mid-cycle, dunning and retry logic when a card fails, invoices that have to be correct for accounting, tax calculation that changes by jurisdiction, refunds, credits, trial expiries, and a webhook pipeline that keeps all of it in sync with your own database. None of that is your product. All of it has to work.

The failure card decides how much this matters. Roughly 5 to 15 percent of recurring charges fail on the first attempt, usually because a card expired or hit a limit, not because the customer left. A payment processor's dunning system quietly retries those on a smart schedule and recovers a large share of them. Rebuild billing yourself and you either rebuild that recovery logic too, or you silently churn paying customers you could have kept. That is revenue you lose to save on a percentage fee.

Run the arithmetic on the fee itself. Stripe Billing sits on top of standard processing at roughly half a percent of recurring revenue. On 40,000 dollars a month of subscriptions that is about 200 dollars. A senior engineer-month, fully loaded, is 15,000 to 25,000 dollars, and a from-scratch billing system is rarely one month of work, plus it never stops needing attention. The buy side wins by an order of magnitude for almost every company under Series A. This is the same build-versus-buy math I walk through in [the build, buy, or wait decision tree](/post-build-buy), applied to the one system where a bug is measured in lost dollars, not lost time. It is the same reflex that makes [building your own login instead of buying it](/post-build-your-own-auth) a bad trade.

## The narrow cases where building is the right call

Buying the processor's billing does not mean you write zero billing code. It means you do not own the engine. The line moves when your pricing stops fitting what the processor models cleanly.

Usage-based and hybrid pricing is the honest edge. If you charge per seat plus per API call plus overage, with prepaid credits that draw down and ramp deals that step up over 12 months, you will end up writing metering and rating logic on top of whatever the processor gives you. The processor still moves the money and stores the card; you own the layer that decides how much to charge. That is not building billing from scratch, and you should resist the version of this project that becomes exactly that.

The other real case is a marketplace that splits a payment across multiple parties, or contracts complex enough that finance needs custom invoice logic and revenue recognition the standard tools will not produce. Even here, the right shape is almost never a homegrown card vault. Storing and securing card data yourself pulls you into PCI scope that costs more than any fee you were trying to avoid.

## The hybrid nobody names: buy the engine, own the policy

Most of the pain comes from framing this as build or buy, one or the other. The durable answer is a seam. Let the processor own the parts that are commodity and dangerous to get wrong: the card vault, the charge, the retries, the tax and invoice primitives. You own the thin policy layer above it that is genuinely yours, such as which plan maps to which features, how a usage event turns into a charge, and what happens at the boundary of a trial.

Drawing that seam well is what keeps you from repricing your whole stack later. Most startups do eventually outgrow the simplest tier of a billing tool. The ones who migrate cleanly are the ones who kept their own pricing logic separate from the vendor's plumbing from the start.

## How to decide in an afternoon

You do not need a design doc. Answer four questions. First, does your pricing fit one plan, one cycle, one invoice, in the currencies you actually sell in? If yes, buy it and move on. Second, is subscription revenue central to the business, or a side of it? Central means lean harder on a proven system, not less. Third, if you build, who maintains the retry, tax, and invoice logic in eighteen months when the person who wrote it has moved on? Fourth, what does a billing bug cost you, in refunds, in trust, and in a finance team that no longer trusts the numbers?

The honest failure I see most is a team that built billing to feel in control, then spent a year debugging proration and dunning instead of building the product customers pay for. Own the pricing policy that is yours. Rent the money-moving machinery that is not. If you are staring at a homegrown billing project and cannot tell which side of that line it falls on, that is a thirty-minute conversation worth having before the sprint starts, and it is exactly what a [call before you commit](/book-a-call) is for.

## FAQ

### Is a payment processor's billing enough for usage-based pricing?

For simple metered pricing, yes. The tools model per-unit and tiered usage well. The moment you stack prepaid credits, add-ons, and negotiated enterprise ramps, you will write rating logic on top. That is normal. Keep that logic in your codebase and let the processor move the money.

### Will I get locked in if I buy billing?

Some, but less than people fear if you keep your pricing definitions in your own system rather than encoding them entirely in the vendor. The card data and money movement are the hard parts to migrate, and you would not want to own those anyway. Plan the seam and a later switch stays a project, not a rewrite.

### My engineer wants to build it to save the fee. How do I push back?

Ask for the total cost, not the fee. Add the build weeks, the ongoing maintenance, the dunning recovery you would have to rebuild, and the PCI exposure of touching card data. Put that next to half a percent of recurring revenue. If the numbers still favor building, it is a real edge case. Usually they do not.
