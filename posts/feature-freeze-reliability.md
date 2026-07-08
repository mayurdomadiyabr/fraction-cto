---
title: 'Freeze features and fix reliability, or keep shipping?'
slug: feature-freeze-reliability
date: '2026-07-08T14:47:51.265Z'
category: Decisions
excerpt: >-
  Your velocity looks great and your error rate is climbing. How to know when to
  stop adding features and start hardening.
description: >-
  When to freeze features and fix reliability instead of shipping. The signals,
  how to run the freeze, and the trap on both sides.
author: The founder of Fraction
readTime: 5
draft: false
---

Every founder who calls me about "the app keeps breaking" wants the same thing: a way to fix reliability without slowing down features. There isn't one. At some point you have to decide to stop adding and start hardening, and the hard part is admitting you have reached that point.

I have watched teams ship a new feature every week while their error rate climbed, their support inbox filled up, and their best customer quietly started evaluating a competitor. The velocity looked great on a burndown chart. It was killing the company.

## The signals that it is time to freeze

You do not freeze features on a schedule. You freeze when the evidence says the product is losing trust faster than features are winning it. Here is what that evidence looks like.

### Reliability is now a sales problem

When a prospect asks "how often does it go down?" in the sales call, reliability has stopped being an engineering concern and become a revenue one. One SaaS team I know deployed to production every Friday with no safety net; a single small change caused a six-hour outage that cost them thousands in revenue and one reference customer. After that, "move fast" was no longer free.

If outages are showing up in churn conversations or stalled deals, the cost of the next feature is now measured in lost customers, not story points.

### Your team spends more time firefighting than building

Track where the hours actually go for two weeks. If your engineers are spending 30 to 40 percent of their time on incidents, hotfixes, and "why is this broken again," you do not have a feature velocity problem. You have a stability problem wearing a velocity costume. Adding more features to an unstable base just widens the surface area that can break.

### Every release needs a code freeze

Here is a counterintuitive one. If your team needs a full code freeze before every release to feel safe, the freeze is not the solution, it is the symptom. It usually points to weak test coverage, oversized pull requests, poor branch hygiene, or unstable environments. A team with real safety nets ships continuously and does not need to stop the world to breathe.

So the decision is not always "freeze features." Sometimes it is "fix the delivery system so you never need to freeze again." Knowing which one you are facing is the actual judgment call.

## How to run the freeze without stalling the company

A reliability freeze scares founders because it sounds like a month of zero customer-visible progress. Done well, it is not.

### Time-box it and name the exit criteria

Do not announce an open-ended freeze. Announce two weeks, or three, with specific exit criteria: error rate under X, p95 latency under Y, zero unresolved sev-1s, deploys that no longer require a human holding their breath. When the criteria are met, features resume. A freeze with a defined finish line is a sprint. A freeze without one is a morale problem.

### Freeze the backend, not everything

A full stop is rarely necessary. The riskiest changes are usually to your data model, APIs, and payment paths. Frontend and copy changes are comparatively safe. A smart freeze slows the dangerous surface area while low-risk improvements keep shipping, so customers still see the product moving.

### Fix the system, not just the symptoms

Use the freeze to build the safety nets that let you go fast again: a real test suite, a staging environment that mirrors production, smaller pull requests, automated deploys with a rollback. The goal is not just to stop the current fire. It is to make the next fire a non-event so you never have to freeze on this scale again.

## The trap on both sides

There are two ways to get this wrong, and founders tend to have a favorite.

The feature-factory trap is measuring success by how much you ship rather than what it does for users. High velocity, flat retention. You keep adding because adding feels like progress, and nobody stops to ask whether the last ten features moved a single metric. That is the same instinct behind [shipping fast and building the wrong things](/post-shipping-wrong-thing-leadership-gap), and it hides real fragility under a busy roadmap.

The opposite trap is freezing forever. Some teams get so burned by an outage that they never feel safe shipping again, and the product ossifies. Reliability work has diminishing returns too. Chasing a fifth nine when your customers would be delighted by three is its own form of [polishing instead of launching](/post-polishing-instead-of-launching).

The judgment is knowing which risk is bigger right now: the customer you lose to a bug, or the customer you never win because the product stopped improving. That call is exactly the kind of tradeoff a good technical leader is paid to make, and it is hard to make honestly when you are the founder who fell in love with the roadmap.

## FAQ

### How long should a reliability freeze last?

Time-box it to two to four weeks with explicit exit criteria. Longer than that and you are no longer fixing reliability, you are avoiding the product. If the list of fixes is bigger than four weeks, the problem is structural and you should be rebuilding your delivery process, not just patching bugs.

### Won't a feature freeze upset customers waiting on a roadmap item?

Less than you think. Customers care far more about the product working than about the next feature landing on time. A short, communicated pause to fix stability usually buys goodwill, especially from the larger accounts whose deals depend on the thing being dependable.

### How do I know if it is a reliability problem or a delivery-process problem?

If individual features work but the system is unstable, it is reliability. If you cannot ship safely without stopping everything, it is your delivery process. The tell is the code freeze itself: needing one every release means the pipeline lacks safety nets, and no amount of bug-fixing fixes that.

### We are pre-launch. Does this apply to us?

Mostly no. Before you have customers, shipping and learning beats hardening. Reliability work has a cost and a payoff, and the payoff only exists once real users depend on you. Freezing to harden a product nobody uses yet is premature. If you are unsure where you sit, [book a call](/book-a-call) and we can look at whether stability is actually your bottleneck or a distraction from finding product-market fit.
