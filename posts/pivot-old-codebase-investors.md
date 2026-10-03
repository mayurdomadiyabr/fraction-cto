---
title: You pivoted. Investors will ask about the old code.
slug: pivot-old-codebase-investors
date: '2026-10-03T09:08:11.838Z'
category: Fundraising
excerpt: >-
  What investors really test when they ask how much of your pre-pivot codebase
  survived, and the short answer that works.
description: >-
  After a pivot, investors ask what happened to the old codebase. How to sort
  it, the three numbers to bring, and what not to say.
author: The founder of Fraction
readTime: 4
draft: false
---

You pivoted. The original product had a few hundred users, the new direction has better pull, and you are raising on the new story. Then an investor asks a question you did not prepare for: "How much of the old code are you keeping, and what did the pivot cost you technically?"

The short answer: investors are not asking because they want you to keep the old code. They are checking whether you understand what the pivot did to your engineering speed. A clear answer names what you reused, what you threw away, what is still lingering, and how long the new product took to stand up. A vague answer suggests the next pivot will be just as expensive and nobody is tracking it.

## What the question is really testing

Pivots are normal. Most seed investors have backed companies that changed direction at least once. What they are trying to learn is whether your team can move quickly when the evidence changes, and whether the old product left behind costs that will slow the new one.

Those costs are usually invisible to non-technical founders: database tables that still model the old business, auth and billing written for a different customer, background jobs nobody switched off, and a cloud bill paying for infrastructure no one uses. None of it is fatal. All of it is a sign of how the team works.

## Sort the old code into three piles

Before you talk to investors, sit down with whoever owns engineering and sort the codebase honestly.

### Reused on purpose

Usually infrastructure: authentication, user accounts, payments, deploy pipeline, admin tools, email sending. This is the good news. It shows the first build was not wasted, and it is often why you reached the new product in weeks instead of months.

### Thrown away on purpose

The features specific to the old market. Say so plainly. Deleting code is a sign of discipline, not failure.

### Still there by accident

This is the pile that matters. Old data models the new product works around, feature flags for features nobody uses, a second user type that complicates every permission check, scheduled jobs still running. Each of these slows every future change a little. Name them, and say which ones you will remove and when.

If that third pile is large, it is worth reading about [the refactor that never comes](/post-refactor-that-never-comes) before you promise a cleanup sprint in your deck.

## The numbers that make the answer credible

You do not need a spreadsheet. Three numbers are enough:

- **Time to the new product's first real users.** "Six weeks from decision to first paying customer" says more about your team than any slide.
- **Rough share of the codebase reused.** An honest estimate from your engineer, like "about half, mostly accounts and billing," is fine.
- **What is left to clean up and what it costs.** "Two weeks to remove the old data model, planned for next quarter" turns a weakness into a plan.

If your current product was built quickly on top of the old one, investors may also probe whether it is a prototype pretending to be production. The [prototype that became production](/post-prototype-became-production) pattern is worth checking against yourself first.

## Rewrite or keep building on it

Some founders want to use the new round to rewrite everything from scratch for the new direction. Sometimes that is right, especially if the old architecture fights the new product's core model, such as a single-user tool that became a multi-tenant team product. More often it is a six-month detour that delays the milestones the round is meant to fund.

The test I use: does the old foundation make the new product's most important workflow hard, or just ugly? Hard justifies structural work. Ugly can be cleaned up as you go. The longer version is in [rewrite or refactor](/post-rewrite-or-refactor). If you do plan structural work, put it in the use of funds openly; investors would rather fund a known cost than discover it later.

## What not to say

- "We are keeping everything, it all still works." That suggests nobody has looked.
- "We are rewriting it all after the round." That signals the round buys a rebuild, not growth.
- "The pivot had no technical cost." There is always a cost. Investors know it and will trust you less for denying it.

## A short answer you can adapt

"We pivoted in May. We kept accounts, billing, and the data pipeline, about half the codebase. We deleted the old reporting features. Two pieces of the old data model are still in the way; removing them is a two-week job planned for Q1. We went from decision to first paying customer in seven weeks."

That answer is boring, specific, and believable, which is exactly what you want in diligence.

## FAQ

### Do investors see a pivot as a negative?

Not by itself. They care whether the pivot was driven by evidence and whether the team executed it quickly. The technical answer is part of showing the second.

### Should I mention the old product in the data room?

Yes, briefly. Hiding it creates questions when an investor finds the old website or app store listing. A short note on what changed and why is enough.

### What if the old code is a mess?

Say so and show the plan. Diligence teams care more about whether you know where the problems are than whether they exist. See [how to disclose technical debt to investors](/post-disclose-technical-debt-investors).

### Is it worth an outside review after a pivot?

Often, yes. A pivot is a natural point to check whether the foundation fits the new product. A [technical teardown](/teardown) gives you that view before an investor's team forms their own.

If the pivot left you unsure what to keep and what to cut, [book a call](/book-a-call) and we can work through it.
