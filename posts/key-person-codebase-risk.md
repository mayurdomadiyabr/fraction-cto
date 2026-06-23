---
title: When your whole codebase lives in one person's head
slug: key-person-codebase-risk
date: '2026-06-23T12:01:31.103Z'
category: Pattern recognition
excerpt: >-
  One engineer who understands everything feels like a strength until the day
  they are unavailable. Key-person risk is the early smell founders ignore most.
description: >-
  Key-person risk is the early-stage pattern founders ignore until it gets
  expensive. How to spot it and reduce it without slowing down.
author: The founder of Fraction
readTime: 4
draft: false
---

Early on, having one engineer who understands the entire system is a gift. They move fast, hold the whole thing in their head, and never need a meeting to find out how something works. Founders rightly treasure this person. The problem is that the same trait that makes them valuable, all the context living in one head, is a risk that grows quietly until the day it is suddenly very expensive.

Engineers call it the bus factor: how many people would have to be hit by a bus before the project stalls. A bus factor of one is the most common architecture smell I see in startups under twenty people, and the one founders are most reluctant to act on, because acting on it feels like distrusting the person who has carried them this far.

## The strength that becomes a liability

When the system is small, concentrated knowledge is efficient. There is no overhead of writing things down, no coordination cost, no documentation to keep current. One person decides and builds. This is genuinely faster, and at five people it is often the right trade.

It stops being a trade and becomes a liability at a predictable moment: when the cost of that person being unavailable for two weeks exceeds the cost of having spread the knowledge. That moment arrives earlier than founders expect, usually right when the product starts mattering to real revenue.

## How to tell if you have it

### One person reviews or touches everything

Every pull request waits on the same reviewer. Every tricky bug routes to the same person. They are the bottleneck and the single point of failure at once, and both get worse as you grow.

### Knowledge lives in chat, not in documents

How the deploy works, why a strange workaround exists, what the third-party integration's quirks are: all of it lives in the history of a chat thread and one person's memory. None of it survives that person leaving, and search will not save you.

### Onboarding has no path

A new engineer's only route to being productive is to ask the key person constantly. There is no document, no runbook, no map of the system. Onboarding takes weeks and consumes the very person whose time is scarcest.

### Nobody else can deploy or debug production

When production breaks at an awkward hour, exactly one person can fix it. They cannot take a real holiday. This is the sharpest edge of the risk and, fortunately, usually the cheapest to blunt with a written runbook and shared access.

## What it actually costs

The cost stays at zero right up until it is enormous. The key person leaves, or burns out, or simply takes the holiday they have earned, and progress stops. Worse, the knowledge that left does not come back; the new hire spends months rediscovering decisions that were never written down.

It also surfaces at the worst possible time during a fundraise. When an investor's reviewer asks what happens if your lead engineer leaves and the honest answer is that you would be in serious trouble, that is a finding that affects the deal. This is one of the things [investors actually probe in technical diligence](/post-diligence), and it is far cheaper to fix before you are asked than during.

There is a vendor version of this too. If your whole product was built by an outside team and the knowledge lives with them, you have the same risk with worse leverage, which is part of why [managing an offshore or agency team well](/post-managing-offshore-team) matters so much.

## Reducing the risk without slowing down

You do not fix this by burying your best engineer in bureaucracy. You fix it with a few cheap, high-leverage habits.

Write the runbook first: how to deploy, how to roll back, who has access, what to do when production breaks. One page beats none, and it is the single highest-return document a small team can have.

Pair on the scary parts. When the key person works on the one system nobody else understands, have a second engineer in the room. The point is not the code; it is moving the context into a second head.

Rotate review and on-call so more than one person sees production regularly. And document decisions as you make them, in two sentences, where the next person will find them. None of this requires heavy process, and none of it should cost you much speed.

The goal is not to make your best engineer replaceable. It is to make sure the company does not stop the day they are unavailable. If you are not sure how concentrated your risk is, that is a good thing to [talk through on a call](/book-a-call).

## FAQ

### Is key-person risk just about documentation?

No. Documentation helps, but the deeper fix is spreading live context: pairing, shared on-call, and reviews that more than one person does. Documents capture decisions; habits keep a second person current.

### Will reducing this slow my best engineer down?

A little, and far less than founders fear. A one-page runbook and occasional pairing cost hours, not weeks. Set against two weeks of stalled progress when that person is unavailable, the trade is heavily in your favor.

### When should I start worrying about this?

The moment your product carries real revenue or you are heading into a raise. Before that, a bus factor of one can be an acceptable trade. After it, the cost of being unavailable climbs fast, and so does what an investor will make of it.
