---
title: Your fractional CTO's first month is mostly reading. Pay full rate?
slug: fractional-cto-ramp-up-month
date: '2026-10-04T10:00:09.642Z'
category: Pricing the work
excerpt: >-
  The first month of a fractional CTO engagement is diagnosis. Pay the full rate
  if it ends in a written assessment you keep. What that should contain.
description: >-
  Should you pay a fractional CTO full rate for a first month spent reading your
  codebase? Yes, if it produces a written assessment. How to structure it.
author: The founder of Fraction
readTime: 6
draft: false
---

The first invoice arrives. Four days billed, as agreed. You ask what happened in those four days and the honest answer is: reading. The repo, the infrastructure, the agency contract, two long calls with your contractor, a look through the incident channel. Nothing shipped, no decision was made that you can point to, and you have paid a full month's retainer for someone to learn your company.

The short answer: yes, pay the full rate, on one condition. The reading has to produce something you keep. A fractional CTO's first month should end with a written assessment of your architecture, your risks, your team and your vendors, plus a plan for the next 90 days. If that document exists and it tells you at least one thing you did not know, the month was worth the fee. If the month was unstructured ramp-up with nothing to show, you have paid for someone's orientation, and that is on both of you for not defining the output.

## What ramp-up actually costs

Suppose the engagement is four days a month. In the first month, 60 to 70 percent of that time goes on understanding what you have: how the system is put together, where the fragile parts are, what the vendor is really delivering, how the engineers describe the codebase when the founder is not in the room. That is roughly two and a half days of reading before any judgment can be applied.

Founders tend to see that as a loss. It is not, provided the reading is targeted. A fractional CTO who has done this twenty times does not read your codebase the way a new hire does. They go to the places where early-stage systems break: the deploy path, the data model, the one service nobody wants to touch, the permissions, the bill. The reading is the diagnosis. The point is to write the diagnosis down.

## The output that makes the month worth it

By the end of month one you should have, in writing:

- A plain-language description of how the system is built and why, including the two or three decisions that are hard to undo.
- A ranked risk list: what can take you down, what will slow you down, and what does not matter yet.
- A view on the team and the vendors: who is carrying what, where the key-person exposure is, and whether the agency's output matches its invoices.
- A 90-day plan with the three or four things that will actually move, and the things you should stop worrying about.

That document is close to what a standalone technical review delivers, and [what a one-time technical review should cost](/post-technical-review-cost) is a useful benchmark. If the first month of a retainer produces it, you have effectively bought a review and the start of an ongoing relationship for one fee. If the month produces nothing written, you bought neither.

## When you should not pay full rate

There are three cases where the ramp-up is not your cost to carry.

**They are learning your stack, not your business.** Learning why your product is shaped the way it is: that is part of the job and you pay for it. Learning the framework your product is built in, or how the cloud provider's billing works: that is their job to already know. If the first month includes a visible learning curve on the technology itself, you have hired the wrong person for the engagement, and the pricing is the least of it. [The hidden cost of a cheap fractional CTO](/post-cheap-fractional-cto-cost) is usually this.

**Nothing is written down.** Reading that lives only in the fractional CTO's head is reading you will pay for again when they leave. The written assessment is what converts their time into your asset.

**The ramp repeats.** A fractional CTO spread across too many clients will arrive at month three needing to re-read what they read in month one. If you notice the same orientation questions coming back, the problem is capacity, not pricing, and it is worth raising directly.

## Three ways to structure the first month

**A fixed-price assessment first, then the retainer.** This is how I run it at Fraction. The [Tech Teardown](/teardown) is a two-week paid review with a written report and a 90-day plan. If we continue, the retainer starts from a shared, documented picture. If we do not, you still have the report. The ramp-up is the product, priced as a product, and nobody wonders what the first month was for.

**A retainer with a named day-30 deliverable.** If the fractional CTO prefers to start on retainer, write the assessment into the agreement as the first month's deliverable. Same output, different wrapper. This is the cleanest fix if the engagement has already started and the first invoice is what prompted the question.

**A reduced first-month rate.** Some founders ask for this and some fractional CTOs offer it. I would argue against it. A discounted month tells both sides the reading is lower-value work, which encourages skipping it. You want the reading done properly and documented, not done cheaply. If the concern is commitment risk rather than value, [a paid trial](/post-fractional-cto-paid-trial) addresses it better than a discount does.

## How to tell the reading worked

Two tests. Around week three, the fractional CTO should start asking questions you cannot answer: why a certain table has two owner columns, why the agency's staging environment points at production data, why the monthly cloud bill doubled in March. Questions you cannot answer are evidence they are deeper into the system than you are, which is what you are paying for.

At day 30, they should have found at least one thing you did not know and would have paid to know. A credential in a public repo, a vendor contract that auto-renews next month, an engineer who has quietly become the only person who can deploy. If the first month ends with a report that only confirms what you already believed, ask harder questions about how the time was spent.

What the retainer buys in months two onward is a separate question; [what a fractional CTO retainer actually includes](/post-fractional-cto-retainer-includes) covers it. For the first month, the test is simple: do you have the document, and did it surprise you. If you are weighing a fractional CTO and want the first month to be a review rather than a ramp, the [pricing page](/pricing) shows how I structure it, and you can [book a call](/book-a-call) to talk it through.

## FAQ

### Should a fractional CTO charge less for the first month?

Not usually. The first month is diagnosis, and diagnosis is high-value work when it is written down. Ask for a defined deliverable instead of a discount: a written assessment and a 90-day plan due at day 30.

### How long should ramp-up take?

For a four-day-a-month engagement on an early-stage system, most of the first month. For a larger engagement or a smaller codebase, two to three weeks. If orientation is still the main activity in month two, something is wrong with capacity or fit.

### What should the first-month assessment contain?

How the system is built and why, a ranked risk list, a view on team and vendors including key-person exposure, and a 90-day plan. It should be readable by a non-technical founder and specific enough that an engineer can act on it.

### Is a separate paid review better than starting on retainer?

It is cleaner. A fixed-price review produces a deliverable and a decision point, and the retainer starts from a documented baseline. Starting on retainer works too, as long as the agreement names the day-30 output. The failure mode is a retainer with no defined first-month deliverable.
