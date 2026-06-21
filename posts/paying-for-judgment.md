---
title: What senior engineering judgment is actually worth
slug: paying-for-judgment
date: '2026-06-21T12:19:24.548Z'
category: Pricing the work
excerpt: >-
  AI writes the code now, so why does a senior still cost three times a junior?
  Because you are paying for the decisions, not the typing.
description: >-
  Why senior engineering judgment - the rebuild you skip, the architecture you
  avoid - is the real thing founders pay for in 2026.
author: The founder of Fraction
readTime: 5
draft: false
---

A founder said to me recently that with AI writing most of the code, he could not see why a senior engineer should cost three times a junior anymore. It is an honest question and the premise is even half right. The typing has gotten cheap. The judgment has not. And once code is cheap, judgment is most of what you are actually paying for.

## Code got cheap, judgment did not

For most of the industry's history, seniority was priced on output. The senior wrote more code, wrote it faster, and wrote it with fewer bugs. That is still true, but it is no longer the point, because the cheap part of building software is now genuinely cheap. A capable engineer with good tools can produce a working feature in an afternoon that used to take a week.

What did not get cheap is knowing which feature, which architecture, which trade-off, and which thing not to build at all. The bottleneck moved from execution to judgment. You can generate three plausible designs in minutes; deciding which one survives contact with your next two years of growth is the hard part, and the part that an AI cannot own because it does not carry the consequences.

So the question is not why a senior costs three times a junior. It is why the gap is not larger, given that the senior's main job is now the expensive one.

## What you are actually buying

When you pay for senior judgment, you are buying a set of specific, valuable things that look like nothing until you need them.

### The rebuild you do not do

The most expensive decision in early-stage software is the unnecessary rewrite. A team convinces itself the codebase is beyond saving and spends six months rebuilding what it had, shipping nothing new the whole time. A senior who has lived through two or three of these can usually tell the difference between a codebase that needs a rewrite and one that needs a week of focused cleanup. That single call can be worth more than a year of their fees. I wrote about the flip side of this in [good technical debt: when the shortcut is the right call](/post-good-technical-debt).

### The architecture you do not over-build

The opposite mistake is just as costly. A team builds for a million users it does not have, with microservices and queues and infrastructure that a single service could have handled for two more years. Senior judgment is knowing what to leave simple. The discipline to not build something is harder to hire than the skill to build it.

### The decision made once instead of five times

Juniors and AI are both good at producing options. Neither is good at closing them. A senior turns an open, recurring debate into a settled decision and moves on. The cost of an unsettled decision is not the meeting time, it is the weeks of half-built work in both directions while the team waits for someone to commit.

### The 'no' that saves the quarter

The most underpriced thing a senior provides is a well-timed no. No, we are not adding that dependency. No, that integration is a trap. No, we should not promise that date. A junior who has not been burned says yes to keep things moving. The scar tissue that produces a confident no is exactly what you cannot get from someone cheap, and it is most of what experience actually is.

## How to price it without fooling yourself

The market gives you the rough shape. Seniors command a 30 to 50 percent rate premium over mid-level engineers, but typically deliver two to three times the effective output once you count rework avoided and cleaner architecture. A senior at a higher rate who ships maintainable work often costs less in total than a cheaper engineer who quietly builds the debt you pay down for years. This is the same reason an AI-built first version needs a senior's eye before you trust it, which I covered in [your AI-built MVP is a draft, not a product](/post-ai-mvp-draft).

For a fractional CTO the same logic runs up a level. You are not paying for hours of typing, of which there may be very few. You are paying for the handful of decisions a quarter that determine whether you spend the next year building the right thing or rebuilding the wrong one. Priced against the cost of those mistakes, senior judgment is the cheapest line in the budget, and the rate card almost undersells it.

If you are trying to work out how much senior judgment your stage actually needs and what it is fair to pay for it, that is a [short conversation worth having](/book-a-call), and you can see how I structure that on the [pricing page](/pricing).

## FAQ

### If AI writes the code, why hire seniors at all?
Because someone has to decide what to build, judge whether the generated code is right, and own the consequences when it ships. AI produces options at speed; it does not carry accountability for the trade-offs. That accountability is the senior's job and it got more valuable, not less.

### How do I tell judgment from confidence in an interview?
Ask about a decision they got wrong and what it taught them. Confidence without scar tissue gives you a clean story; real judgment comes with specific regrets and the rule they now follow because of them. The regrets are the signal.

### Is a senior worth it for a small team?
Often more so, because a small team cannot absorb a wrong architecture call. The fewer people you have, the more a single bad foundational decision costs you in proportion. That is exactly when judgment pays for itself fastest.

### Can I get senior judgment without a full-time senior salary?
Yes, that is the case for fractional and advisory models. You buy the judgment on the decisions that matter without paying a full-time salary for hours you would not fill. The trick is scoping it to the decisions, not the calendar.
