---
title: 'Monolith or microservices? The decision is about your team, not your code'
slug: monolith-or-microservices
date: '2026-06-24T11:58:00.694Z'
category: Decisions
excerpt: >-
  Founders ask whether to go microservices for scale. Almost always the answer
  is a monolith, and the real trigger to split is org size, not traffic.
description: >-
  When to split a monolith into microservices: the honest trigger is team
  coordination friction, not scale, and most startups should wait.
author: The founder of Fraction
readTime: 5
draft: false
---

Every few months a founder asks me whether they should build on microservices "so we can scale." Almost always, the answer is no, and the reason is that they are asking a team question dressed up as an architecture question. The decision to split a system into services is mostly about how many people are working on it, not how much traffic it serves.

The industry spent the late 2010s decomposing everything into microservices and the 2020s writing postmortems about it. By 2026 the consensus among people who have actually run both is clear: start with a monolith, and split only when the monolith's coupling becomes a real, named bottleneck. One widely cited 2026 figure: something like 42 percent of teams that adopted microservices have moved back toward a consolidated or modular-monolith approach. The pendulum swung, and it swung for good reasons.

## Why a monolith is the correct default

A monolith is dramatically faster to build, and speed is the only currency an early-stage company has. There are no API contracts to design between services, no network latency between components, no distributed transactions to reason about, and no service-discovery infrastructure to run. A founding team that needs to go from idea to working product in 90 days has a structural reason to keep everything in one deployable unit.

A well-structured monolith with clean internal module boundaries, a sane data model, and decent test coverage is a perfectly good architecture for the large majority of SaaS products at the large majority of scales that real businesses ever reach. Most companies never outgrow it. They just think they will, and they pay for that imagined future in present-day complexity.

The failure mode is not "we chose a monolith and hit a wall." It is "we chose microservices and drowned in operational overhead before we had customers." When a three-person team is debugging service discovery and distributed tracing instead of talking to users, the architecture has already lost.

### The hidden tax of splitting too early

Decomposing along the wrong boundaries is the most common microservices failure, and early-stage companies are the most likely to do it, because they do not yet know which parts of the system need to scale independently or which team will own what. Every boundary you draw becomes a guess locked into infrastructure, and those guesses are expensive to reverse. A bad module boundary is a refactor. A bad service boundary is a migration. This is the same instinct behind [the premature scaling pattern](/post-premature-scaling): you are paying today for a problem you have only imagined.

## The actual triggers to split

You split when you have a specific bottleneck that services genuinely solve, not when you cross a traffic number. There are really only a few:

- **Team coordination friction.** Once you have more than roughly 10 to 15 engineers sharing one deployment pipeline, they start stepping on each other, and a single release train becomes a queue. Below that headcount, microservices add coordination overhead that does not pay for itself. Microservices are a tool for scaling an organization past about 30 engineers, not for scaling a request count.
- **Genuinely different scaling profiles.** A CPU-heavy ML inference path and a network-heavy CRUD API have different needs, and splitting the hot path off can be worth it. Note this is a specific component, not the whole system.
- **Hard isolation requirements.** Regulated versus unregulated workloads, or strong security boundaries, can force a split for reasons that have nothing to do with performance.

If none of those describe you, you do not have a microservices problem. You have a monolith that needs cleaner internal boundaries, which is a much cheaper thing to fix. The [architecture smells worth watching for](/post-architecture-smells) inside a monolith are almost always a better use of attention than a rearchitecture.

## The default that ages well: a modular monolith

The 2026 recommendation for most teams is a modular monolith: one deployable unit, but built with clean internal module boundaries so it could be split later if you ever genuinely need to. You get the speed and simplicity of a monolith now, and you keep the option to extract a service or two for hot paths down the line without a ground-up rewrite. The common shape is a modular core plus two to five extracted services for the handful of paths that actually need independent scaling, and even that comes later than founders expect.

The discipline that makes this work is the same discipline that makes a clean monolith: clear module boundaries, owned data, and tests. Get those right and the split, if it ever comes, is a refactor instead of a rescue.

If you are about to commit to an architecture because an investor or a senior hire said "microservices scale," it is worth pressure-testing that against your actual team size first. That is a good [call to book](/book-a-call), or a [code teardown](/teardown) can tell you whether your current monolith is actually at its limit or just messy inside.

## The short version

1. Default to a monolith. Build it with clean module boundaries.
2. Do not split for traffic. Split for team coordination, distinct scaling profiles, or isolation.
3. The team trigger is roughly 10 to 15 engineers on one pipeline, not a request count.
4. When you do split, extract specific hot paths, not the whole system.
5. A modular monolith gives you tomorrow's option without today's tax.

### FAQ

### When should a startup move to microservices?

When team coordination breaks down, typically past 10 to 15 engineers sharing one deployment pipeline, or when a specific component has a genuinely different scaling profile. Traffic volume alone is almost never the trigger.

### Can a monolith handle real scale?

Yes. A well-structured monolith serves the majority of SaaS products at the majority of scales real businesses reach. Most companies that adopt microservices do so for organizational reasons, not because the monolith could not handle the load.

### What is a modular monolith?

A single deployable application built with strict internal module boundaries, so individual pieces could be extracted into services later without a rewrite. It is the 2026 default because it gives you simplicity now and optionality later.

### We already went microservices too early. What now?

You are not alone; a large share of teams have consolidated back. Look at merging the services that are always deployed together and never scale independently. Reversing a premature split is real work, but it is cheaper than continuing to pay the operational tax forever.
