---
title: When does your startup actually need on-call?
slug: when-do-you-need-on-call
date: '2026-08-17T11:59:24.244Z'
category: Knowing when
excerpt: >-
  A three-person team paging itself at 2am is usually solving a problem it does
  not have yet. Here is the line where on-call earns its cost.
description: >-
  When does a startup need an on-call rotation? The signals you have crossed the
  line, and the minimum setup that is enough.
author: The founder of Fraction
readTime: 5
draft: false
---

"Should we set up on-call?" A founder asked me this after a single midnight outage rattled the team. The honest answer, for a three-person startup with forty customers, was no. What they needed was not a rotation and a paging tool. They needed to know that the one incident they had was rare, and to stop treating a rare event like a permanent condition.

On-call is one of those things founders reach for too early because it feels responsible, and then avoid too long once it is actually justified. The trick is knowing which side of the line you are on.

## What on-call actually is, and what it is not

On-call is a promise: someone is responsible for production right now, they will notice when it breaks, and they know what to do. That is three separate things, and most early teams have none of them formalized because they do not need to yet.

At two engineers, "on-call" is really just "whoever sees the Slack message first." That works, and it is not a failure of discipline. It is the correct amount of process for a system that few people depend on. The mistake is copying the shape of a 200-person engineering org, spinning up a paging tool, and building a weekly rotation before anyone would actually be paged. That is process as costume. It adds coordination overhead, handoff rituals, and a tool bill, and it protects customers you do not have yet.

So the question is not whether on-call is a good practice. It is whether the cost of not having it has started to exceed the cost of having it.

## The signals that you have crossed the line

The decision flips when a production problem stops being an inconvenience you handle whenever you notice and starts being a trust event with a customer on the other end. Watch for these.

### You have customers who would notice at 2am

The clearest trigger is a customer whose business runs on your product while your team sleeps. If you sell to other businesses in different time zones, or anyone who has an uptime expectation written into a contract, an outage that runs unattended for six hours is no longer an internal event. It is churn in slow motion. Once a night of downtime can cost you a reference customer, the cost of not being paged is real money.

### Nobody can reliably say who owns production right now

The lightweight version of on-call is a spreadsheet or a Slack message that says "Alice has infra this week, Bob has frontend." That works until it does not. The signal that you have outgrown it: during your last incident, the first ten minutes were spent figuring out who was supposed to be handling it. If "who is on call right now" is itself a question you have to answer during an outage, the informal system has failed.

### Your reliability depends on one person always being reachable

If production is only safe because one specific engineer happens to check their phone, you do not have on-call, you have a single point of failure with a pulse. This is the same [key-person risk that lives in your codebase](/post-key-person-codebase-risk) showing up in your operations. The day that person takes a real vacation, or leaves, the promise evaporates. A rotation is how you spread that responsibility so no one human is the uptime plan.

### You keep finding out about outages from customers

On-call without visibility is just anxiety. If your team learns about outages from customer emails rather than from your own systems, the problem to solve first is not scheduling, it is instrumentation. Knowing when to pay for that is its own decision, and I have written about [when observability stops being optional](/post-flying-blind-in-prod-when-to-pay-for-observability). On-call and observability arrive together: a rotation is only useful if the person on it can actually tell what broke.

## What "enough" looks like when you cross it

Founders overestimate this because they picture a full incident-management program. The minimum viable version is small.

Start with three things. A single alerting path that reaches a human reliably, so a real outage does not depend on someone happening to look. A one-week rotation among the two or three engineers who can actually fix production, so the responsibility is shared and predictable. And a short written runbook covering the handful of failures you have actually seen, so the person paged at 2am is reading rather than guessing.

That is it. You do not need a dedicated paging platform on day one. A shared schedule plus a reliable alert plus a page of notes covers most early-stage teams. Add sophistication only when a specific painful incident justifies it, the same way you should add a [staging environment only once a bad deploy can cost you a customer](/post-staging-environment-yet). The rotation length matters more than the tooling: a week is long enough to avoid constant handoffs and short enough that nobody burns out carrying the pager.

The failure mode on the other side is real too. Teams that set this up too early train everyone to ignore alerts, because the alerts are for problems that do not matter. By the time a real one fires, the muscle to respond has atrophied. Introduce on-call when you have something to protect, not before, and make the first alerts loud precisely because they are rare.

## FAQ

### We are a two-person team with a few users. Do we need on-call?

Almost certainly not. At that size, "whoever sees the alert first" is the correct amount of process, and building a formal rotation is premature. Keep a reliable alert going to a shared channel, and revisit this the moment you have customers who would be hurt by an unattended overnight outage.

### What is the single clearest trigger to start a rotation?

A paying customer whose usage does not stop when your team sleeps, especially one in another time zone or with an uptime commitment. That is the point where an unattended outage stops being an inconvenience and starts costing you money and trust.

### Do we need PagerDuty or a paid paging tool to start?

No. Most early teams can start with a shared weekly schedule and a single reliable alert to a phone. Dedicated paging platforms earn their cost once you have multiple services, complex schedules, or genuine 24/7 obligations, not before.

### How do we set up on-call without burning the team out?

Keep the rotation to a week so responsibility does not bounce around, make sure alerts only fire for things that genuinely need a human, and write down the fixes for problems you have already seen so the person on call is not solving from scratch at 2am. If you are unsure whether your reliability setup matches the risk you are carrying, a [technical teardown](/teardown) can tell you where the real gaps are.
