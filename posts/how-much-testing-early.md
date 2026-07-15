---
title: How much testing do you need before you have users?
slug: how-much-testing-early
date: '2026-07-15T13:14:55.718Z'
category: Decisions
excerpt: >-
  The advice says 80 percent coverage from day one. Before product-market fit
  that is mostly wasted effort. Where the little testing you do write should
  actually go.
description: >-
  How much automated testing an early startup really needs before product-market
  fit, and where the few tests should go.
author: The founder of Fraction
readTime: 5
draft: false
---

How much automated testing does an early-stage product need? Founders ask me this expecting a percentage, and there is a whole industry ready to tell them the answer is 80 percent code coverage, always, from day one. That advice is written for companies that have already found product-market fit, and applying it before you have is one of the quieter ways to burn time you do not have building infrastructure for a product that is about to change shape anyway.

The honest answer is that the right amount of testing before product-market fit is much less than you have been told, and knowing where to spend the little you do write is most of the skill.

## Why heavy testing early works against you

A test is a promise that a specific behavior will not change. That is exactly what you want in a mature product and exactly what you do not want in one you are reshaping every few weeks.

Before product-market fit, your product looks fundamentally different every 60 days. Features get cut, flows get rebuilt, whole sections get thrown away because the market told you they were wrong. Every one of those changes breaks the tests that referenced the old behavior, and now you are spending more time updating tests than writing them. You built infrastructure to protect a shape that no longer exists. The tests did not catch a bug; they caught you changing your mind, which is the thing you are supposed to be doing at this stage.

Automated testing is infrastructure, and like all infrastructure it has a maintenance cost. For a pre-PMF product changing constantly, that maintenance cost usually outweighs the protection, and the hours go further spent on customer discovery and iteration, the work that actually tells you whether the product should exist. This is the same premature-scaling instinct that [sinks otherwise healthy startups](/post-premature-scaling): building for a stability you have not earned yet.

## Where the little testing you do write should go

None of this means ship untested and hope. It means aim narrowly. Even in a product changing weekly, a few things are stable, expensive to get wrong, and worth guarding.

### The parts that move money or lose data

Billing, payments, anything that charges a card or calculates what a customer owes. Authentication and the boundary that stops one customer seeing another's data. Anything that writes to a record you cannot recreate if it corrupts. These do not change shape every sprint the way your feature set does, and a bug here is not an annoyance, it is a refund, a breach, or a customer you never get back. Test these even when you test nothing else.

### The bug that already bit you twice

The most efficient test you will ever write is the one that pins a bug that has now recurred. If something broke in production, you fixed it, and it came back, that is a piece of behavior stable and important enough to lock down. Let real incidents, not a coverage target, tell you where the tests belong. Your bug tracker is a better guide to what to test than any percentage.

### The path every user takes

There is usually one flow the product cannot be broken on: sign up, get to the core action, come back. A handful of tests on that critical path catches the catastrophic break, the kind where the product is down for everyone and you find out from an angry email. That is worth a few tests. Exhaustively testing the settings page a tenth of users open is not, yet.

## The sequence that actually pays off

The timing that works for the founders I advise is straightforward. Before product-market fit, keep automated testing deliberately minimal: guard money, data, security, and the one critical path, and let everything else be covered by using the product and watching real users. After product-market fit, when the product stabilizes enough that tests stop breaking every week, invest properly. A pre-Series-A team can automate roughly 80 percent of its regression scenarios in three to four weeks once the shape holds still. Do that same work six months earlier and you would have rewritten those tests three times over.

The trap in the other direction is real too, so be honest about which stage you are in. If your product has stopped changing shape, if flows are stable and customers are relying on it, and you are still shipping with almost no tests because "we are early," you are not early anymore. You are running a product people depend on without a safety net, and every manual deploy is a coin flip. That is a different failure, and the tell is that your bugs are now regressions, breaking things that used to work, rather than churn from features you are still figuring out. This is closely related to the question of [whether you have outgrown deploying straight to production](/post-staging-environment-yet): both are about noticing the moment your maturity has quietly changed.

The skill is matching your testing investment to your stage, and the failure at either extreme is expensive. If you are genuinely unsure which side of that line your product is on, that read is one of the concrete things a fractional technical leader can give you quickly. Founders [book a call](/book-a-call) for exactly this kind of "are we investing in the right things for our stage" gut check.

## FAQ

### Isn't shipping with few tests just irresponsible?
Not before product-market fit, if you are deliberate about where the few tests go. Guarding payments, data integrity, security, and the core user path while leaving the churning feature set lightly tested is not recklessness, it is matching your effort to a product that is still changing shape. Irresponsible is heavy testing of code you are about to throw away, or no tests at all on the code that touches money.

### When exactly should we invest in real test coverage?
When the product stops changing shape every few weeks and customers start depending on it, which usually coincides with finding product-market fit. That is when tests stop breaking constantly and start paying for themselves. A pre-Series-A team can automate most of its regression coverage in three to four weeks once the product is stable enough to make that work last.

### What should we test if we only have time for a little?
The things that are stable and expensive to get wrong: anything that handles money, anything that protects one customer's data from another, anything that writes records you cannot recreate, and the single critical path every user follows. Add a test whenever a bug recurs. Let real incidents and money-touching code decide where your limited testing goes, not a coverage percentage.

### Our product is stable now but we still barely test. Is that a problem?
Yes, and it is a sign your stage has changed. If flows have stopped shifting and customers rely on the product, you have crossed from "early enough to skip tests" into "running without a safety net." The signal is that your bugs are now regressions rather than churn from unfinished features. That is the moment to make the testing investment you correctly deferred earlier.
