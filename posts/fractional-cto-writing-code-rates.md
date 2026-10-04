---
title: Your fractional CTO is writing code at CTO rates
slug: fractional-cto-writing-code-rates
date: '2026-10-04T10:00:09.280Z'
category: Pricing the work
excerpt: >-
  Hands-on help feels like value. At a CTO rate, routine coding is the most
  expensive way to get a feature built, and it hides a staffing gap.
description: >-
  Should your fractional CTO write code? When hands-on work is worth the rate,
  when it is waste, and how to price the two kinds of time.
author: The founder of Fraction
readTime: 6
draft: false
---

You hired a fractional CTO for judgment. Three months in, the invoice shows 24 hours, and when you ask what the hours went on, half of them were spent building the Stripe webhook handler your contractor was stuck on. It shipped. It felt productive. It was also the most expensive way you could have bought that handler, and it quietly covered up a staffing gap you still have.

The short answer: a fractional CTO should write code in short, deliberate bursts that unblock someone, prove an approach, or set a pattern the team copies. They should almost never be the steady way features get built. If more than about a fifth of their hours are routine construction for two months running, you are either under-staffed below them or paying a leadership rate for engineer work. Fix the staffing or split the rate. Do not let it drift.

## Why it happens

It rarely starts as a decision. At pre-seed and seed there is often nobody else. The founder cannot code, the contractor is part-time, and the fractional CTO can see exactly what is wrong. Filling the gap takes two hours. Explaining the gap and waiting for someone else to fill it takes two weeks. So they fill it.

It also feels like value to both sides. A merged pull request is visible. The leadership work you are actually paying for is not. Saying no to a feature, writing down why the team is on Postgres and not a vector database, reading an agency SOW before you sign it: none of that shows up in a demo. Hands-on work gets noticed, so hands-on work gets rewarded with more of itself.

Most of all, nobody wrote down which kind of time you were buying. The agreement says "fractional CTO, four days a month". It does not say what a day is for. What a fractional CTO retainer actually buys each month is covered in [the retainer breakdown](/post-fractional-cto-retainer-includes); the point here is that construction is usually not on that list, and when it creeps on, nobody notices.

## The four kinds of hands-on work

Not all code written by a fractional CTO is a problem. The test is what the code is for.

### Spikes and prototypes

Spending a day proving that the payment provider's API can do what you need, so the team does not spend three weeks finding out it cannot. Worth the rate. The output is a decision, not a feature, and the throwaway code should be thrown away.

### Unblocking

Two hours pairing with an engineer who has been stuck on a deployment problem since Tuesday. Worth the rate. This is teaching, and the engineer comes out able to solve the next one alone. If the same engineer needs unblocking every week, that is a hiring signal, not a coding task.

### Setting the pattern

Writing the first version of the deploy pipeline, the first module layout, the first integration test, so that everyone after copies something good. Worth the rate, as long as it is bounded. The first one is leadership. The fifth one is construction.

### Routine construction

Features, CRUD screens, the bug backlog, the webhook handler from the opening. Not worth the rate. Suppose the retainer is $8,000 a month for roughly 32 hours, an effective $250 an hour. A capable senior contractor in most markets is a third to a half of that. Ten hours of feature work has cost you $2,500 instead of around $1,000, and that is the smaller loss. The larger one is the ten hours of hiring plan, vendor review, and diligence prep that did not happen because the hours were used up.

## The dependency you did not mean to create

A fractional CTO who builds the billing module is now the only person who understands the billing module. That is key-person risk, and it is concentrated in someone who is part-time by design and will leave by design. The pattern is the same one described in [when your whole codebase lives in one person's head](/post-key-person-codebase-risk), with a twist: the person is on a retainer with a notice period.

There is a second cost. A fractional CTO who is writing code is not reviewing code. Nobody reviews the reviewer. The architectural drift they were hired to catch is now partly theirs.

## How to price the two kinds of time

You have three honest options.

**One rate, a cap, and a line on the invoice.** Keep the leadership rate, agree that hands-on work stays under roughly 20 percent of hours, and have it reported separately. Most fractional CTO invoices are a single line; [asking for what the line contains](/post-fractional-cto-invoice-detail) is how you find out whether the cap holds.

**Two rates.** A leadership rate for the judgment work and a lower engineering rate for pre-approved hands-on tasks. This is cleaner, but it needs discipline: each hands-on task is agreed before it starts, time-boxed, and labelled. Without that, the lower rate becomes an invitation.

**Stop, and hire.** If hands-on work has been over 30 or 40 percent for two months, the honest fix is not a discount. It is a senior contractor or a first engineer, and your fractional CTO should be the one telling you so. The comparison between [a fractional CTO and one more senior engineer](/post-fractional-cto-vs-senior-engineer) is not either-or at that point; you need both, and the cheaper one does the building. A fractional CTO who [will not tell you to hire](/post-fractional-cto-wont-say-hire-full-time) because it would shrink their own hours is answering a different question from the one you asked.

## How I handle it at Fraction

I will write code to prove something or to unblock someone. I say so before I start, I put a time box on it, and it is labelled on the invoice as what it was. If I find myself building features in month two, I say the quiet part to the founder: we are under-staffed, and the retainer is covering for it badly. [How the engagement works](/how-it-works) is set up so that the hours go to decisions, hiring, and vendor control, because that is what the rate is for. If you want to talk through where your own fractional CTO's hours are going, [book a call](/book-a-call).

## FAQ

### Should a fractional CTO write code at all?

Yes, in bounded bursts: prototypes that settle a decision, pairing that unblocks an engineer, and the first version of a pattern the team will copy. The code is a means to a decision or a capability, not the product. Steady feature construction is a different job at a different rate.

### Is it not cheaper to let the fractional CTO build it than to hire?

For a week, yes. Over a quarter, no. You pay a leadership rate for engineer work, you lose the leadership hours you were paying for, and you build a dependency on a part-timer. A senior contractor or a first engineer at a third of the rate, directed by the fractional CTO, is the cheaper structure.

### How do I tell unblocking from building?

Ask what the engineer can do afterwards that they could not do before. If the answer is "the feature exists", it was building. If the answer is "they can deploy on their own now", it was unblocking. The second has a lasting return. The first was just expensive labour.

### What if my fractional CTO insists on staying hands-on?

Ask them to put a number on it: what share of hours, for which categories, reported how. If they resist both the cap and the reporting, they are selling you engineering time with a CTO label on it. Compare the proposals the same way you would [compare two fractional CTO proposals](/post-compare-fractional-cto-proposals): on what the hours are for, not on how many there are.
