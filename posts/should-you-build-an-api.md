---
title: A customer wants an API. Should you build one?
slug: should-you-build-an-api
date: '2026-07-15T13:14:55.449Z'
category: Decisions
excerpt: >-
  One customer asks for an API and it sounds like a small yes. A public API is a
  product you maintain forever. How to decide, and the lighter options to try
  first.
description: >-
  Should you build a public API? Why it is a product not a feature, what it
  costs, and the lighter options to try first.
author: The founder of Fraction
readTime: 6
draft: false
---

A customer asks if you have an API. Maybe a few of them do. It sounds like a small yes: you already have the data, you already have the endpoints your own frontend calls, how hard can it be to expose them? So you promise it, and then you discover that a public API is not a feature you ship, it is a product you now maintain forever, with its own users, its own support burden, and a promise you cannot easily take back.

This is a build-versus-wait decision, and the reason founders get it wrong is that they price the build and ignore the commitment. The build is the cheap part.

## An internal API and a public API are not the same thing

The endpoints your own app calls are an internal API. You control both sides, so you can change them whenever you want. Break one, fix the caller, ship both together, done. Nobody outside notices.

A public API is a contract with people you do not control. The moment a customer writes code against it, you have promised that code will keep working. You cannot rename a field, tighten a validation, or change a default without potentially breaking someone's integration silently, in production, at a time you will not find out about until they are angry. Everything that made your internal endpoints easy to change is exactly what you lose the day you make them public.

That shift from "I can change this" to "I have promised this will not change" is the whole decision. Treat it lightly and you will spend the next two years unable to move because a handful of integrations depend on a shape you regret.

## What it actually costs

The build itself is modest. A straightforward customer-facing API runs somewhere between 10,000 and 25,000 dollars; a more complex multi-tenant one, 25,000 to 60,000. But the quotes founders get almost never include the parts that make an API safe to expose: authentication, rate limiting, a real error-handling standard, versioning architecture, interactive documentation, and security hardening. Those are not polish. Without them a public API is a liability, and adding them after launch is far more expensive than building them in.

Then comes the part that never ends. Budget 15 to 20 percent of the build cost every year for maintenance, plus infrastructure that scales with usage and monitoring on top. And the single most expensive mistake is skipping versioning. Planning it in from the start costs a few days of architecture work. Retrofitting it onto a live API that already has customers depending on it can take months, plus a deprecation cycle you have to manage without breaking anyone. Versioning is the thing you cannot cheaply add later, so it is the thing you have to decide up front.

## When building it is the right call

None of this is an argument against ever building an API. Plenty of products should. It is an argument for building it on purpose, because you have a reason, not because one customer asked.

### The API is the product, or a real channel to it

If integrations are how customers get value, or how you distribute, then the API is not a side feature, it is core, and it deserves the full investment. Developer-facing products, platforms, anything where "does it connect to our stack" is a buying criterion: build it properly and treat it as a first-class product with its own roadmap.

### The demand is a pattern, not a request

One customer asking for an API is a data point. Ten asking, or the same request blocking deals repeatedly, is a market signal. Build for the pattern. A single request is often better served by a one-off export, a webhook, or a scoped integration you build for them, without opening a public contract you have to honor for everyone forever. This is the same discipline as telling apart a single loud customer from a real market, the trap where [your biggest customer starts writing your roadmap](/post-biggest-customer-roadmap).

### You can commit to maintaining it

An API you launch and then neglect is worse than no API. Stale docs, unversioned breaking changes, and slow support turn a selling point into a reason to churn. Only build it if you can staff the ongoing commitment, not just the initial build.

## The lighter options founders skip

Before you commit to a full public API, ask what the customer actually needs, because it is often less than an API. A webhook that pushes events to them covers a surprising number of "we need to integrate" requests. A scheduled export or a reporting endpoint covers many others. A single scoped integration you build for one important customer closes the deal without a public contract. Each of these is reversible in a way a public API is not, which is the whole point: this is a decision worth keeping cheap to undo until you are sure. That instinct to reach for the fully general solution before you need it is the same one behind a lot of [integration sprawl nobody actually decided to build](/post-integration-sprawl).

The move I recommend to most early founders is to treat the first few requests as bespoke integrations, learn what people genuinely do with them, and only then design the public API around real usage. You end up with an API shaped by evidence instead of guesses, and you delayed the irreversible commitment until you could make it well. If you are weighing this against a specific customer ask right now, it is worth talking through before you promise something public. Founders [book a call](/book-a-call) for exactly this kind of build-or-wait call.

## FAQ

### A customer will only sign if we have an API. Do we have to build one?
Find out what they need the API for first. Often it is a specific integration, a data export, or event notifications, all of which you can deliver with a webhook or a scoped one-off without exposing a full public API. Build the bespoke thing to close the deal, and only build the public API when the demand is a repeated pattern rather than one contract.

### What is the real difference between an internal and a public API?
Control. Your internal endpoints can change any time because you own every caller. A public API is a promise to outside developers that their code will keep working, so every change risks breaking integrations you cannot see. That loss of freedom to change, not the code, is what makes a public API expensive.

### Why is versioning such a big deal?
Because it is the one part you cannot cheaply add later. Designing versioning in from the start is a few days of work. Retrofitting it onto a live API with active consumers is months of work plus a managed deprecation cycle, all while trying not to break the customers you already have. Decide your versioning strategy before the first external call, not after.

### How much should we budget beyond the initial build?
Plan on 15 to 20 percent of the build cost per year for maintenance, plus infrastructure that grows with traffic and monitoring tooling. Just as important, budget the parts often left out of build quotes: authentication, rate limiting, documentation, and security hardening. An API without those is not cheaper, it is unfinished and unsafe to expose.
