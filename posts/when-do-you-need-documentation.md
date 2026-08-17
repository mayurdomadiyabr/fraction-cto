---
title: When does a startup actually need documentation?
slug: when-do-you-need-documentation
date: '2026-08-17T11:59:24.596Z'
category: Knowing when
excerpt: >-
  At two people, skipping docs is often the right call. Here is the exact point
  where not writing things down turns from lean into dangerous.
description: >-
  When does a startup need documentation? The signals you have crossed the line,
  and the small set of pages actually worth writing.
author: The founder of Fraction
readTime: 5
draft: false
---

"We should really document this" is one of the most common sentences in an early startup, and one of the least acted on. Founders feel guilty about it, engineers promise to get to it, and the codebase stays a thing that lives in one or two people's heads. Most of that guilt is misplaced. At the earliest stage, not writing things down is often the right call. The skill is knowing the exact point where it stops being right.

I get asked to review a lot of small codebases, and I can usually tell within an hour whether a team's lack of documentation is lean or dangerous. Here is the line I use.

## Why documenting too early is a real mistake

Documentation is inventory, and inventory has a carrying cost. Every document you write is a claim about how the system works, and the moment the system changes, that claim is either updated or quietly becomes a lie. In a two-person startup rewriting core assumptions every week, elaborate documentation is not diligence, it is a maintenance burden attached to code that will not exist in a month.

At the earliest stage, the two people building the thing have the whole system in their heads, and talking to each other is faster and more accurate than any wiki. Writing a detailed architecture document for a product that pivots twice before launch is effort spent describing a building you are about to demolish. So when a founder tells me they feel bad about having almost no docs, my first question is not why not, but whether anyone would read them yet.

The trap is that "we move too fast to document" is true right up until it is dangerously false, and the transition is quiet. Nothing announces it.

## The signals that you have crossed the line

The value of documentation is a function of how many people need shared context and how expensive it is to reconstruct that context by asking. Watch for these.

### The whole system lives in one person's head

The single clearest trigger. If there is exactly one person who understands how deployments work, or why the billing logic is the way it is, or what breaks if you touch a particular module, you do not have a documentation gap, you have a [key-person risk](/post-key-person-codebase-risk) wearing a disguise. The day that person is sick, on holiday, or gone, the knowledge leaves with them. Writing down the handful of things only they know is not bureaucracy, it is insurance on the most valuable asset you have.

### You are about to onboard someone new

The cost of no documentation shows up sharply the first time a new engineer joins. Onboarding without any written context means a senior engineer spends their first two weeks interrupting your existing team constantly, and your existing team spends those weeks re-explaining things instead of building. A short written guide to the environment, the deploy process, and the shape of the system pays for itself in the first week. This is exactly the moment I flag in [your first engineer starts Monday, now what](/post-onboarding-first-engineer): the day before a new hire arrives is the deadline for the minimum viable docs.

### The same questions get asked over and over

If your team keeps re-answering the same questions in Slack, or you find yourself re-explaining the same decision to the same people, that is the system telling you the context should be written once and read many times. Repeated verbal explanation is documentation you are paying for in real time, forever, instead of writing down once.

### Someone outside the team needs to trust your system

There is an external trigger too. When you raise, an investor's technical diligence will want to see that your system is understood and not just working by luck. A [technical data room that is empty](/post-technical-data-room) reads as a team that does not know its own architecture. You do not need this on day one, but the moment a raise is on the horizon, the internal reasons and the external reasons to write things down converge.

## What "enough" documentation actually is

The reason teams avoid this is that they imagine a wiki nobody maintains. That version is worse than nothing, because stale documentation actively misleads. The goal is not completeness, it is the smallest set of durable, high-value pages that would survive most changes.

A practical starting kit for a team crossing the line:

- A one-page runbook: how to deploy, how to roll back, what to do when the common things break.
- An environment and setup guide, so a new engineer can get running without a two-day pairing session.
- A short "why" file for the two or three decisions that would be expensive or dangerous to reverse, so the reasoning outlives the person who made it.

That is most of the value in an afternoon. Notice what is not on the list: exhaustive API docs, diagrams of every module, a process manual. Those are the things that rot fastest and pay off slowest at your stage. Document the things that are stable and expensive to reconstruct, skip the things that change weekly, and treat the docs as a small living asset rather than a monument. When the map keeps drifting from the territory, a [technical teardown](/teardown) can tell you which parts of the system are actually worth writing down.

## FAQ

### We are two people moving fast. Do we need documentation yet?

Probably only the barest minimum. If both of you hold the whole system and talk constantly, detailed docs are a maintenance burden on code that keeps changing. Write down the handful of things that would be a disaster to lose if one of you disappeared, and skip the rest until more people need shared context.

### What is the single clearest trigger to start writing things down?

When critical knowledge lives in exactly one person's head, or when you are about to add someone who does not have that context. Both mean the cost of reconstructing knowledge by asking has started to exceed the cost of writing it once.

### What should the first documentation actually cover?

A deploy-and-rollback runbook, an environment setup guide, and a short note on the two or three decisions that are expensive to reverse. That is the high-value, slow-to-rot core. Avoid exhaustive docs that describe fast-changing details, because those go stale and mislead.

### Is stale documentation worse than none?

Often yes. A confidently wrong document sends people down the wrong path with more certainty than no document would. That is exactly why the goal is a small set of durable pages you can realistically keep current, not a large wiki you cannot.
