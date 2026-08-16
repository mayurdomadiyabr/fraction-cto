---
title: AI agents are starting to buy from you. Do you support them yet?
slug: ai-agents-buy-from-you
date: '2026-08-16'
category: Decisions
excerpt: >-
  AI agents now buy from businesses on a customer's behalf, and founders ask if
  they must support it. For most pre-seed to Series A teams the answer is not
  yet.
description: >-
  Should your startup support AI shopping agents that buy on a customer's
  behalf? Usually not yet. The one cheap readiness step to take now instead.
author: The founder of Fraction
readTime: 8
draft: false
---

AI agents have started buying things on a person's behalf, and founders keep asking me whether they need to support that yet. For almost every company between pre-seed and Series A, the honest answer is no, not yet. You do not have the agent-driven demand to justify building anything, and the standards for how agents check out are still moving under your feet. But there is a cheap readiness step you should take now, because it costs an afternoon and it keeps you from being locked out later. Do that, skip the build, and revisit when your own traffic tells you the answer has changed.

I have had this conversation four times in the last month, and it always arrives with a whiff of panic. A founder read that the card networks and the big commerce platforms now let software agents complete a purchase, saw a headline predicting that most buying will run through agents in a few years, and walked into our call convinced they are already behind. They are not behind. They are early, which is a much better place to be, as long as they do not overreact to it.

## What actually changed this year

For a long time the phrase "an AI agent bought it" was a demo, not a transaction. That stopped being true this year. The payment networks and the largest commerce platforms have started supporting purchases that a software agent initiates on a human's behalf, a few open standards for how that handshake works have emerged, and the first real transactions are flowing through them. So the capability is no longer hypothetical. An agent can, in principle, land on a storefront, read the terms, and complete a checkout without a person clicking anything.

That is a genuine shift, and it is worth understanding. It is not, for most of you, a genuine emergency. The gap between "this is now possible at the platform level" and "this matters to my specific company this quarter" is enormous, and the whole skill here is refusing to collapse that gap out of fear.

## Two different questions hide inside one

When a founder says "should we support AI agents," they are usually blending two separate questions that have different answers.

The first is whether an agent can buy from you: the checkout question. Can a piece of software complete a purchase on your product without a human in the loop, and do you want it to. This is the one that sounds urgent and is almost never urgent for an early-stage company, because it depends on your buyers actually sending agents to transact, which most of them are not doing yet.

The second is whether an agent can understand you before a human buys: the evaluation question. Long before agents transact at scale, they read. A buyer asks an assistant to compare three tools, and that assistant quietly reads your pricing page, your docs, and your comparison page, then reports back a recommendation, all without a single click showing up in your analytics. This one is already happening, it is cheaper to address, and it is the part most founders overlook while worrying about checkout.

Separating these two matters because it tells you where to spend the afternoon. You do not need to build agent checkout. You do need your product to be legible to a machine that is sizing you up on a buyer's behalf.

## Why "not yet" is the right answer for most of you

Three reasons the checkout build is a trap right now, in order of how often they bite.

You do not have the volume. Agent-initiated purchasing is real in aggregate and near zero for a specific seed-stage product with a few hundred customers who found you through a founder's network or a launch post. Building a feature for demand you cannot measure is how early teams burn a month on something no one uses.

The standard is still moving. There is more than one way agents and merchants are being wired together, the big players are still negotiating whose approach wins, and the details are shifting quarter to quarter. Building your own integration against a spec that is actively changing means you will rebuild it, possibly twice, before it earns a dollar. That is the definition of an [early technical decision that is expensive to undo](/post-reversible-decisions), and the way to stay reversible is to not hard-code anything yet.

It is not your differentiator. Whatever your startup does, "we accept purchases from robots" is not the reason a customer chooses you at this stage. Attention spent here is attention not spent on the thing that actually wins the deal. This is the same judgment you apply to [whether you need a mobile app yet](/post-do-you-need-a-mobile-app): the honest test is not whether the capability is impressive, it is whether the absence of it is costing you customers today.

## The cheap readiness step to take now

Not yet does not mean do nothing. It means do the small, durable things and skip the brittle, expensive one.

Make your product legible to a machine. Put real prices on a public page instead of hiding them behind a "contact us." Write your plans, limits, and policies in plain, stable text a reader can act on without a sales call. Keep your key pages structured and consistent rather than trapped inside an interactive widget that a reader cannot parse. None of this is agent-specific work. It is good for humans comparing you, good for search, and it happens to be exactly what an evaluating agent needs. You are not building for agents. You are removing the reasons an agent would misread or skip you.

Do not block agent traffic by reflex. Some teams, spooked by unfamiliar readers hitting their pages, move to slam the door. If those readers are acting for real prospective buyers, blocking them is blocking demand. Watch the traffic before you judge it.

Keep checkout on a provider that will do this for you. When agent purchasing does matter to your business, you want to inherit the support from your payments and commerce platform, not build the plumbing yourself. This is one more entry in the long ledger of reasons to [lean on a payments provider instead of building billing](/post-build-billing-or-use-stripe): the platform absorbs a shifting standard so you do not have to. Choosing a provider that is clearly investing in agent support is the entire "build" you need to do right now.

That is the whole readiness posture. Legible pages, an open door, a provider carrying the standard. An afternoon, not a sprint.

## When the answer flips to yes

Watch for the signals that move this from "not yet" to "now," so you act on evidence instead of a headline.

Your buyers are consumers making comparison purchases, and you start seeing unfamiliar readers working through your pricing and comparison pages in your logs. That is agents sizing you up, and it is the earliest real signal.

You sell something close to a commodity, where an agent can line you up against three competitors and decide on price and terms alone. Agent-mediated buying arrives fastest where the human was not adding much judgment to the purchase anyway.

A channel or platform partner you depend on starts requiring agent-ready checkout to stay listed. When distribution demands it, the calendar is no longer yours, and the question stops being whether and becomes how fast.

When one of these lands, the decision changes shape, and it starts to resemble the older question of [whether a customer's request justifies building an integration surface](/post-should-you-build-an-api). Until then, you are watching, not building.

## Where this bites if you get it wrong

There are two failure modes, and they pull in opposite directions.

Ignore it completely and the risk is slow: a competitor becomes the option agents reliably pick because their pages are legible and yours are locked in a widget, and you never see the buyers you lost because they were never humans clicking. That is a quiet erosion, easy to miss until a quarter of your category's discovery runs through assistants.

Overreact and the risk is fast and self-inflicted: you spend a month building a bespoke agent checkout against a standard that changes, ship it, and rebuild it before it processes a meaningful order. Early-stage teams die of the second mistake far more often than the first, because the first is invisible and the second feels like progress.

The move that avoids both is the boring one. Stay legible, stay reversible, and let the platform carry the standard while you watch your own evidence. If you want a second read on whether your specific product is already seeing agent interest or is genuinely too early, [book a call](/book-a-call) or start with a [teardown](/teardown) of where your funnel actually leaks.

## Frequently asked questions

### Do I need to support AI agent checkout at pre-seed or seed?
Almost certainly not yet. Agent-initiated buying is real in aggregate but near zero for a specific early product with a small, mostly hand-acquired customer base. Building checkout for demand you cannot yet measure is a classic early-stage waste. Make your pages machine-legible now, keep checkout on a provider that will add agent support, and revisit when your own traffic shows agent interest.

### What is the cheapest thing I can do to be ready?
Make your product understandable to a machine reading it for a buyer: public pricing, plain and stable policy and plan pages, and structured content that is not trapped inside an interactive widget. Do not block unfamiliar readers by reflex, since they may be acting for real prospects. This work also helps human comparison shoppers and search, so it is not wasted even if agent buying stays small.

### How will I know when to actually build for agents?
Watch for evidence rather than headlines. Signals include unfamiliar readers moving through your pricing and comparison pages in your logs, selling a near-commodity where agents can arbitrate on price and terms, or a distribution partner requiring agent-ready checkout. When one of those lands, the timeline stops being yours and the decision becomes how fast, not whether.

### Should I build my own agent payment integration?
Not now, and probably not ever by hand. The standards are still shifting, so anything you build yourself is likely to be rebuilt before it earns money. Inherit agent support from your payments and commerce provider instead. Choosing a provider that is clearly investing in this is the only build worth doing today.
