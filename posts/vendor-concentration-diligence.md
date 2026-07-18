---
title: One vendor can take your whole product down
slug: vendor-concentration-diligence
date: '2026-07-18T11:58:05.728Z'
category: Vendors
excerpt: >-
  Somewhere in your stack is a vendor you cannot live without and have no plan
  to replace. Diligence looks for it, and so should you, before it fails.
description: >-
  How a single critical vendor becomes a concentration risk in diligence, how to
  find yours, and what a reasonable plan for it looks like.
author: The founder of Fraction
readTime: 4
draft: false
---

Most founders can name their biggest customer and their biggest cost. Far fewer can name the one vendor whose failure would take their product offline. That vendor exists in almost every startup: a payments provider, an auth service, a single cloud, a model API, a data source the whole product is built around. It works, so nobody thinks about it, until a diligence reviewer asks the question or the vendor answers it for you by going down.

Vendor concentration is a standard diligence lens now, sitting alongside architecture and security. The reviewer is not opposed to you using vendors. Building on other people's infrastructure is how startups move fast. What they are checking is whether you understand which dependencies are load-bearing, and whether losing one would be an inconvenience or an extinction event.

## What makes a vendor a concentration risk

Not every vendor matters equally. The ones that show up in diligence share a few traits.

### The product does not function without it

If this vendor is down, your core loop is down. A payments provider for a commerce product, the identity provider every login flows through, the single database host. These are not integrations, they are organs. A reviewer wants to see that you know which of your vendors are organs and which are limbs.

### There is no realistic path off it

Some dependencies are deep in a way that makes leaving genuinely hard. Your data model matches one vendor's shape. Your whole app assumes one provider's quirks. The switching cost is not a weekend, it is a quarter. That lock-in is fine as a deliberate choice and dangerous as an accident, and the difference is whether you can articulate the exit even if you never intend to take it. Knowing when a tool has become expensive to leave is its own skill, the same one behind deciding [whether it is worth the cost of leaving a tool you have outgrown](/post-migrate-or-stay-tool).

### It can change the terms unilaterally

A vendor can raise prices, deprecate the exact capability you depend on, or shut off your access with limited notice. This is sharpest right now with model providers, where the specific model your product is tuned around can simply be [retired out from under you](/post-ai-model-deprecation-risk). A dependency you cannot control and cannot cheaply replace is the definition of concentration risk.

## The sprawl version of the same problem

Concentration has a mirror image that is just as common: not one critical vendor but forty small ones, each a little dependency nobody decided on deliberately. Every new tool adds a login, a bill, a failure mode, and a piece of your product that breaks when it does. That accumulation is its own diligence finding, because [integration sprawl nobody decided to build](/post-integration-sprawl) means no single person can tell a reviewer what the product actually depends on. Whether your risk is one giant vendor or fifty tiny ones, the underlying failure is the same: you have not decided, on purpose, what you are willing to depend on.

## How to find yours before diligence does

Do the exercise a reviewer would do. List every external service the product genuinely needs to function, not the nice-to-haves. For each one, answer three questions honestly. What happens to the product the moment it disappears. How long would it take to move off it. Is there a second provider you could fail over to, or is this the only game.

The list is usually shorter than founders expect and scarier than they hoped. Most startups find two or three true single points of failure they had never named. That is a good outcome, because a named risk with a rough plan is a completely different diligence conversation than a risk a reviewer discovers before you have.

You do not need to remove every dependency. Nobody expects a seed-stage company to run two payment processors. What a reviewer wants is evidence you know where the concentration is and have a proportionate plan: a documented exit for the deepest one, a second option researched for the riskiest, an honest note that the rest are accepted risks. The same math applies when you weigh [building versus buying a piece of critical infrastructure](/post-self-host-or-managed), where owning something removes a dependency but adds a cost.

If you want a second set of eyes on which of your vendors are genuinely load-bearing before a raise, that is a concrete review I do with founders. [Book a call](/book-a-call) and we can map it.

## FAQ

### Is depending on one cloud provider a red flag?
On its own, no. Single-cloud is normal at the early stage, and multi-cloud is often premature complexity. The red flag is not knowing your recovery story if that cloud or your region goes down, and having no idea what leaving would cost if you ever had to.

### How many critical vendors is too many?
It is not a count, it is whether each one is a deliberate, understood dependency. Two critical vendors you have exit plans for are safer than one you have never thought about. The problem is unexamined dependencies, not the number of them.

### Do I need a backup for every vendor?
No. Building redundancy for everything is a waste of early-stage time and money. Concentrate on the one or two vendors whose failure ends the company, and accept the rest as documented risks. A reviewer respects proportionate, not paranoid.

### What is the fastest way to reduce this risk?
Write the dependency list and the three questions for each, then pick the single scariest one and build a real exit plan for just that one. You get most of the risk reduction, and most of the diligence credibility, from addressing the worst case rather than trying to harden everything.
