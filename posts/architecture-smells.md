---
title: The architecture smells I look for in a 20-minute review
slug: architecture-smells
date: '2026-06-23T12:01:30.454Z'
category: Pattern recognition
excerpt: >-
  A handful of signals predict whether your next six months will be fast or
  slow. Here are the ones I check before reading a single feature.
description: >-
  The architecture smells that predict a slow six months for a startup, and what
  a fractional CTO does about each one.
author: The founder of Fraction
readTime: 4
draft: false
---

When a founder hands me a codebase, I do not start by reading features. I look for a short list of signals that tell me whether the next six months of building will be fast or slow. Most of them have nothing to do with how clean the code is. They are about how the system is shaped and who can safely change it.

I call these architecture smells. Borrowed from the older idea of code smells, a smell is not a bug. The product works. Customers are using it. But the smell tells me where the cost is hiding, and roughly how big it is.

## What an architecture smell actually is

A code smell lives inside a file: a function that is 400 lines long, a class that does nine things. An architecture smell lives between the parts: how services talk, where data lives, who can deploy, what happens when one thing fails.

Architecture smells matter more at the early stage because they set the ceiling on speed. Engineers at growth-stage startups already spend close to 42 percent of their week working around bad structure, by some industry estimates. You do not want to import that tax before you have product-market fit.

The good news: most early smells are cheap to fix if you catch them in the first year. The expensive version is the one you discover during a fundraise, when an investor's technical reviewer finds it before you do.

## The smells that predict trouble

### One service does everything

A single process handles signup, billing, the core product, background jobs, and the admin panel. It is fine at first. The smell shows up when every change forces a full redeploy and one slow query takes down billing along with the product.

I am not against monoliths. I am against a monolith with no internal seams, where nobody can describe where one concern ends and the next begins.

### Nothing sits between a laptop and production

No staging. No preview environment. Code goes from a developer's machine straight to customers. Teams in this state ship carefully, which sounds responsible, but careful means slow, and slow at the early stage is its own kind of risk.

### Only one person can deploy

Deploys live in someone's head: a sequence of manual steps, an undocumented script, a server only the first hire can reach. The day that person is on holiday, shipping stops. This is plain key-person risk, and it is usually fixable in an afternoon with a written runbook and a deploy script.

### The database is the integration layer

Two services share one database and reach into each other's tables. It feels efficient. Then one team renames a column and a different feature breaks with no warning, because nothing declared the dependency. This is the smell that turns a five-minute change into a five-day one.

### Tests exist but nobody trusts them

There is a test suite. It is red half the time, and everyone has learned to ignore it. A red suite that is ignored is worse than no suite, because it costs time to run and buys no confidence. I would rather see ten tests people believe than a thousand they route around.

## Why these beat clean code

Founders often apologize for messy code when I start a review. Messy code inside a well-shaped system is cheap to clean up incrementally. Clean code inside a badly shaped system is a trap, because the structure fights every change no matter how tidy each file is.

That is why I weight architecture smells far above style. A pretty function in a system where the database is the API will still cost you six months when you try to split the product in two. It is the same reason I treat an [AI-built MVP as a draft rather than a finished product](/post-ai-mvp-draft): the code can look done while the structure is still provisional.

## What I do when I find them

I do not recommend a rewrite. Rewrites are where good startups go to lose a quarter. I rank the smells by two questions: how soon will this block us, and how cheap is it to fix now versus later.

A deploy that only one person can run is cheap to fix now and very expensive during an outage, so it goes first. A monolith with no seams is a real problem but rarely urgent, so it waits until a specific feature forces the split. Some smells I write down and leave alone on purpose, the same way I treat [technical debt that is the right call](/post-good-technical-debt).

The output of a review is not a list of complaints. It is a ranked, dated plan with maybe four items on it, and a clear note about which ones we are choosing to ignore for now.

## FAQ

### Is a monolith an architecture smell?

No. A monolith is a reasonable default for an early-stage product. The smell is a monolith with no internal boundaries, where you cannot change billing without risking the core product. Structure matters more than the deploy unit.

### How long do these take to fix?

The cheap ones, like a deploy runbook, a staging environment, or declaring a service boundary, are days, not months. The structural ones get fixed gradually, usually alongside a feature that needs them anyway. If someone quotes you a multi-month rewrite to fix a smell, get a second opinion.

### Do I need a full-time CTO to find these?

No. A focused review by a senior engineer surfaces almost all of them in well under an hour. If you want that on your codebase, you can [book a call](/book-a-call) or start with a [teardown](/teardown).
