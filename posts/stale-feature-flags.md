---
title: The feature flags nobody removes are code you still run
slug: stale-feature-flags
date: '2026-11-17T04:51:19.811Z'
category: Pattern recognition
excerpt: >-
  Old feature flags hide dead code that can still run. Why flag debt is risky
  and the simple habit that keeps it under control.
description: >-
  Stale feature flags multiply untested paths and hide dead code. Why it
  matters, the Knight Capital lesson, and how to clean up.
author: The founder of Fraction
readTime: 5
draft: false
---

Feature flags that are never removed turn into code you still run but nobody remembers. Every old flag doubles the paths through that part of the product, hides dead features that can be switched back on by accident, and makes the next change riskier. The fix is boring: give every flag an owner and an expiry date when it is created, delete the flag and the losing branch once a rollout is finished, and run a short flag clean-up as part of normal work.

I like feature flags. I have argued that most small teams should [start using them early, in their simplest form](/post-do-you-need-feature-flags-yet-or-just-a-deploy). The problem is not adding flags. It is that adding one takes a minute and removing one never feels urgent.

## What stale flags look like in a real codebase

When I review an early-stage product, flag debt shows up in a few predictable ways.

- **Flags that have been 100% on for months.** The rollout finished long ago. The old branch is still there, still compiled, still tested by nobody.
- **Flags nobody can explain.** Names like `new_flow`, `v2` or `test_mike`. Nobody knows what happens if you turn them off, so nobody does.
- **Flags used for customer configuration.** A rollout flag that quietly became the setting that gives one customer a different invoice format. Now it can never be removed, and it was never designed to be a setting.
- **Flags that depend on other flags.** Feature B only works when flag A is on and flag C is off. Nobody has tested the other combinations.
- **Kill switches that no longer kill.** An emergency off switch that was added for a launch, then the code around it changed. Flipping it now might break more than it saves.

## Why this is more dangerous than it looks

### The cautionary tale everyone should know

The most expensive version of this pattern on record is Knight Capital. On 1 August 2012 the firm's order router sent millions of unintended orders in the first 45 minutes of trading. The SEC's [settlement announcement](https://www.sec.gov/news/press-release/2013-222) says the firm lost more than 460 million dollars and paid a 12 million dollar penalty. According to the SEC's order, an old function that was no longer meant to be used had been left in the code for years. New code deployed in 2012 reused a flag that had once triggered that old function, and one server did not get the new code. When the flag was switched on, that server ran the old logic.

Your startup is not a trading firm, and the stakes are rarely that high. But the mechanism is exactly what stale flags create: dead code that can still run, a flag whose meaning changed, and a deploy that did not reach everywhere.

### Testing gets quietly worse

Each flag doubles the number of states that part of the code can be in. With five independent flags on one screen there are 32 combinations. Nobody tests 32 combinations. Your test suite covers the one your developers use, and customers see the others.

### Changes slow down

Engineers working near old flags have to read and preserve both branches, or spend time working out which one is real. This is one of the hidden reasons a team that felt fast in its first year slows down in its second, along with [the refactor you keep promising and never do](/post-refactor-that-never-comes).

## The fix, in the order I put it in place

### 1. Make every new flag carry an owner and a date

When a flag is created, record who owns it, what it gates, and when it should be gone. Many flag tools have fields for this. If you use a config file or a database table, add the columns. A name like `checkout-redesign-rollout-2026q4` already tells the next person most of what they need.

### 2. Separate the kinds of flags

A temporary rollout flag, a long-lived kill switch, a paid-plan entitlement and a per-customer setting are different things. Store them differently, or at least label them. Entitlements and customer settings belong in your data model, not in a rollout tool where someone might clean them up.

### 3. Remove flags as part of finishing the work

A rollout is not done when the flag hits 100%. It is done when the flag and the losing branch are deleted and that change has shipped. I ask teams to put the removal ticket in the same sprint as the rollout, so it is not a separate job someone has to remember.

### 4. Do a short clean-up regularly

Once a month, list every flag, its age and its current value. Anything fully on or fully off for more than a few weeks gets a removal ticket or an explicit reason to stay. On a typical early codebase the first pass takes a day. After that it takes an hour.

### 5. Test your kill switches

For the switches you keep on purpose, flip them in staging every so often. A kill switch you have never exercised is a hope, not a control. If deploys are already painful at your company, that is worth fixing first, as I wrote in [why deploys being a big event is the real problem](/post-deploys-are-an-event).

## How many flags is too many

There is no magic number. As a rule of thumb from the codebases I have looked at, a small team should be able to name every live flag and say why it exists. When you need a spreadsheet to answer that question, or when the oldest rollout flag is older than your newest engineer's tenure, you have flag debt.

## FAQ

### Should we stop using feature flags because of this?

No. Flags make releases safer and let you turn off a broken feature in seconds. The risk comes from never removing them, not from using them.

### Who should own flag clean-up?

The engineer or team that created the flag. A central "flag janitor" role tends to fail because that person does not know which branch is safe to delete.

### What about flags that customers depend on?

Those are not really flags any more. Move them into proper settings or plan entitlements in your data model, with tests, then delete the flag.

### Can a fractional CTO help with this?

Yes. Flag debt is one of the first things I look for in a [teardown](/teardown), and setting up the ownership and clean-up habit is a small, high-value piece of work. If you want to talk it through, [book a call](/book-a-call).
