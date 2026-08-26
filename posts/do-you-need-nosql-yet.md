---
title: 'Do you need NoSQL yet, or is Postgres fine?'
slug: do-you-need-nosql-yet
date: '2026-08-26T02:37:11.487Z'
category: Decisions
excerpt: >-
  Picking NoSQL by reflex trades away the flexibility an early product needs
  most. Why relational is the right default, and when NoSQL truly fits.
description: >-
  Do you need NoSQL yet, or is Postgres fine? Why relational is the right
  default for early startups, and the specific workloads NoSQL actually fits.
author: The founder of Fraction
readTime: 5
draft: false
---

A founder building a marketplace told me they had picked a NoSQL document database for their MVP because a blog post said it "scales better." They had no scale, a highly relational data model, and were already writing application code to join documents by hand. They had chosen a solution to a problem they did not have and given themselves a real one instead. This is the most common database mistake I see at the earliest stage.

The direct answer to "do we need NoSQL yet": almost certainly not. Start with a relational database, meaning Postgres unless you have a specific reason otherwise, and reach for a non-relational store only when a concrete, present workload demands it. NoSQL is not a more modern default. It is a specialized tool for specific shapes of data and access, and picking it by reflex costs you the thing early-stage products need most: flexibility.

## Why relational is the right default

Early-stage products change constantly. You do not yet know your data model, and you will reshape it many times before you find product-market fit. A relational database is unusually good at this uncertainty for a few reasons.

It enforces structure, so bad data is harder to write and easier to trust later. It gives you joins, so you can relate users to orders to items without hand-rolling that logic in your application. It gives you transactions, so a multi-step change either fully happens or fully does not, which matters the moment money or inventory is involved. And a mature relational database like Postgres also handles a surprising amount of "NoSQL" work: it stores and indexes JSON documents, does full-text search, and covers key-value patterns, so you often do not need a second database at all.

Most importantly, when your understanding of the domain changes, a relational schema with migrations gives you a disciplined, reversible way to evolve it. That is exactly what you want while the product is still moving.

### What people think NoSQL buys them

The pitch for NoSQL is usually "scale" and "flexibility," and both deserve scrutiny at your stage.

Scale: document and key-value stores can scale horizontally to enormous volumes, which is real and valuable, at volume. But you are not at that volume. A single well-indexed Postgres instance comfortably handles far more traffic than a pre-seed to Series A product generates. Choosing NoSQL for scale you do not have is textbook [premature scaling](/post-premature-scaling): you pay a real cost today for a benefit that arrives, if ever, years out.

Flexibility: "schemaless" sounds like freedom, but it does not remove the schema, it just moves it into your application code where nothing enforces it. Six months in, you have documents from five different eras of your product, and every read has to defensively handle all five shapes. The database stopped guarding your data, so now every developer has to, forever.

## When NoSQL genuinely fits

To be clear, NoSQL is not wrong, it is specialized. There are workloads where a non-relational store is the right call, even early:

- A document database fits when your data is naturally document-shaped, read and written as whole units, with few relationships between records. Content management and event logs sometimes look like this.
- A key-value store like Redis is excellent for caching, sessions, rate limiting, and ephemeral high-speed lookups. This is a common and correct second database to add alongside your relational one.
- A specialized store earns its place for a specific job: a search engine for rich full-text search at scale, a time-series database for high-volume metrics, a graph database when relationship traversal is the core query.

Notice the pattern: you add these for a specific, identified workload, usually as a companion to your relational database, not as a replacement for it. Adding a purpose-built store to solve a real problem is very different from choosing a NoSQL primary because it sounded modern.

## The trap of choosing early

The real damage from picking the wrong database early is not performance, it is momentum. When your database fights your data model, every feature gets slower to build. The marketplace founder I mentioned was writing join logic by hand, reimplementing in application code what a relational database does natively and correctly. That is [work you are paying for twice](/post-build-buy): once to build it, again to maintain it, and a third time when it has a bug that a real database would have prevented.

Databases are also one of the harder things to change later, because your data is in them and a migration is a delicate, high-stakes operation. That is exactly why the default should be the safe, flexible, well-understood choice. You want your hard-to-reverse decisions to be the boring, forgiving ones.

## A simple rule

Start with Postgres. Use its JSON, full-text search, and key-value capabilities before you add anything else. Add Redis when you have a real caching or session need. Add a specialized store only when a specific, measured workload proves your relational database cannot serve it well. Let the requirement pull the technology in, rather than choosing the technology and then hunting for a requirement to justify it.

## FAQ

### Should my startup use SQL or NoSQL?
Start with a relational database like Postgres. It gives you structure, joins, transactions, and the flexibility to evolve your schema while the product is still changing. Reach for NoSQL only when a specific workload, such as caching, document-shaped data, or search at scale, genuinely requires it.

### Isn't NoSQL better for scale?
It can scale horizontally to very large volumes, but a single well-indexed Postgres instance handles far more than an early-stage product generates. Choosing NoSQL for scale you do not have yet trades real present flexibility for a benefit that may never arrive.

### Is "schemaless" actually more flexible?
Not really. It does not remove the schema, it moves it from the database into your application code, where nothing enforces it. Over time you accumulate documents in many shapes and every read has to handle all of them. Enforced structure is usually the friendlier option early on.

### When should I add a second database?
When a specific need appears: Redis for caching, sessions, or rate limiting; a search engine for rich full-text search at scale; a time-series store for high-volume metrics. Add these alongside your relational database to serve an identified workload, not as a wholesale replacement.

Choosing your data foundation is one of the highest-leverage and least reversible calls you make early. If you want to pressure-test your choice before you build on it, you can [book a call](/book-a-call).
