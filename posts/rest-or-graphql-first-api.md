---
title: REST or GraphQL for your first API?
slug: rest-or-graphql-first-api
date: '2026-09-02T02:38:35.792Z'
category: Decisions
excerpt: >-
  REST or GraphQL for your first API? For most early-stage teams the answer is
  REST, and the reason has nothing to do with which is more modern.
description: >-
  Why REST is the right default for most early-stage APIs, and the narrow cases
  where GraphQL earns its complexity, from a fractional CTO.
author: The founder of Fraction
readTime: 5
draft: false
---

Founders bring me this one framed as old versus new: REST is the boring incumbent, GraphQL is the modern choice, so surely the modern choice is better. That framing will cost you weeks. The right question is not which is newer. It is which one your team can ship, document, and debug fastest at your current size.

For most early-stage teams, that answer is REST. Not because GraphQL is bad, but because GraphQL solves a problem you probably do not have yet, and it charges you upfront for the privilege.

## What each one is actually good at

REST is the default for a reason. The overwhelming majority of public APIs are REST, every web developer you hire already knows it, it documents cleanly with OpenAPI, and it gets free caching from the ordinary web infrastructure between your server and your users. There is nothing to learn and nothing exotic to operate. You ship endpoints, you move on.

GraphQL shines in one specific situation: a client that needs to pull varied, nested data from many sources in a single round trip, and needs to shape that data differently across different screens. A complex dashboard, a mobile app assembling one view from a dozen underlying resources, a rich front end where over-fetching and under-fetching are genuine pain, these are where GraphQL earns its complexity. If that is your product, GraphQL can be the right call even early.

The cost is real. GraphQL brings a schema, resolvers, a type system, and its own caching story, because you lose the simple HTTP caching that REST gets for free. For a small team on an MVP, that is a meaningful learning curve and a meaningful pile of new operational surface, spent before you have proven anyone wants the product.

## The question underneath the question

Notice the trap. Before you argue REST versus GraphQL, confirm you should be [building a formal API at all](/post-should-you-build-an-api). Plenty of early products expose an API because it feels like the professional thing to do, not because a real consumer needs it. If your front end and back end are one team shipping one product, you may not need a public contract yet. Do not take on API-design overhead to serve a consumer who does not exist.

If you do need one, the deciding input is your data-fetching shape. Ask what your primary client actually does. If it fetches fairly flat resources with predictable shapes, forms, lists, records, CRUD, REST is simpler and you should use it. If your primary client is a mobile app or a complex dashboard stitching one view together from many sources, GraphQL's single flexible query starts to pay for itself. Most pre-seed to Series A products are in the first bucket.

There is also a full-stack-TypeScript path worth naming. If your team is all TypeScript across front and back, a typed RPC layer gives you end-to-end type safety with far less ceremony than GraphQL, and it is worth considering before you reach for a full schema-and-resolver stack. That is a genuine third option, not a footnote.

## You are not choosing forever

The most important thing to understand is that this is a reversible decision, and the reversible direction is REST first. The established pattern is to start with REST and introduce GraphQL later, as an aggregation layer in front of your existing REST services, only once complexity actually demands it. You do not have to bet the company on the first version of your API.

That is the same logic I apply to nearly every [build-versus-buy call](/post-build-buy): take the option that is cheap to reverse, ship it, and let real usage tell you whether you have outgrown it. Choosing GraphQL upfront to avoid a hypothetical future migration is paying today for a problem you may never have. Choosing REST and layering GraphQL in later, if and when your clients get complex, keeps your options open at a fraction of the cost.

## How I would decide today

If you are a small team shipping an MVP with fairly standard data needs, use REST with OpenAPI and stop debating. If your whole stack is TypeScript, look hard at a typed RPC layer before anything heavier. Reach for GraphQL from day one only if your core client is genuinely a mobile app or complex dashboard assembling views from many sources, and you can name that need concretely rather than gesturing at it.

The wrong move is adopting GraphQL because it signals sophistication. It signals it right up until your two-person team is debugging resolver performance instead of shipping the feature a customer asked for. Pick the layer that gets you to real usage fastest, and let that usage decide what comes next.

## FAQ

### Is GraphQL better than REST?
Neither is better in the abstract. GraphQL is better when a client needs to pull varied, nested data from many sources in one flexible query. REST is better for simpler, flatter data and for shipping fast with a small team. Match the tool to your data-fetching shape.

### Can we start with REST and add GraphQL later?
Yes, and that is the recommended path. The common pattern is REST first, then a GraphQL aggregation layer in front of your existing services once client complexity justifies it. Starting simple keeps the decision reversible.

### What about typed RPC instead of either one?
If your team is full-stack TypeScript, a typed RPC layer gives you end-to-end type safety with much less overhead than GraphQL. It is a legitimate third option and often the fastest to ship for a small, all-TypeScript team.

### How do I know if this decision is being made for the wrong reasons?
If the argument for GraphQL is that it is more modern rather than that a specific client needs flexible nested queries, it is being made for the wrong reasons. If you want a neutral read on your particular case, [book a call](/book-a-call).
