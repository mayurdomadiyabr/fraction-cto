---
title: 'Do you need a vector database yet, or is Postgres enough?'
slug: do-you-need-a-vector-database-yet
date: '2026-10-07T02:44:12.270Z'
category: Decisions
excerpt: >-
  Most early AI features fit in the Postgres you already run. When pgvector is
  enough and when a dedicated vector store earns its place.
description: >-
  pgvector or a dedicated vector database for your AI feature? When Postgres is
  enough, and the specific limits that justify switching.
author: The founder of Fraction
readTime: 5
draft: false
---

Almost every founder building an AI feature this year hits the same fork. The tutorial says to set up a vector database. The pricing page for one looks reasonable. Then an engineer points out that the Postgres you already run can store embeddings too, and the team spends a week debating instead of shipping.

Short answer: if you already run Postgres and you have fewer than a few million embeddings, start with the pgvector extension in the database you already operate. Move to a dedicated vector database only when you can name the specific limit you hit, usually scale in the tens of millions of vectors, latency under heavy filtering, or a separate team that needs to own search.

## What a vector database is for

Embeddings turn text, images, or other data into lists of numbers so that similar things end up close together. A vector store finds the nearest neighbours to a query quickly. That is the core of retrieval for a chatbot answering from your documents, semantic search, recommendations, and duplicate detection.

The operation itself is not exotic anymore. pgvector added HNSW indexes, the same family of approximate nearest-neighbour index that most dedicated engines use, back in 2023. Managed Postgres providers generally offer the extension, so for many teams enabling it is a one-line change.

The real question is not "can Postgres do vectors." It is whether running one more data system is worth what it costs your small team.

## Why Postgres first is usually right

### Your data stays in one place

The hard part of most retrieval features is not finding nearest neighbours. It is filtering: only documents this customer can see, only this workspace, only records updated after a date. In Postgres the vectors sit next to the tenant id and the permissions you already enforce, so a query can filter and rank in one statement. With a separate store you copy that metadata over and keep it in sync, and every sync bug is a potential data leak between customers. If your multi-tenant isolation is already fragile, read [what keeps customers' data apart in a shared database](/post-tenant-isolation-by-memory) before adding a second copy of everything.

### One fewer system to run

A dedicated vector database is another vendor contract, another set of credentials, another backup story, and another thing that can be down at 2am. For a team of three to eight engineers, every extra system has a carrying cost that never shows up on the vendor's pricing page.

### Published benchmarks support it at startup scale

Benchmarks vary with hardware, dimensions, and recall targets, so treat any single number with care. The consistent picture across recent write-ups is that pgvector with an HNSW index handles low millions of vectors with fast queries on an ordinary instance, and that tuning effort rises sharply somewhere in the tens of millions. Most pre-seed to Series A products are nowhere near that range. A B2B app with 200 customers and 5,000 documents each, chunked into 20 pieces, is 20 million chunks only if every customer is large. Do that arithmetic for your own product before assuming you need scale you do not have.

## When a dedicated vector database earns its place

There are legitimate reasons to add one. I want to see at least one of these before recommending it:

- Vector count is genuinely heading past tens of millions, and index memory is starting to crowd out the rest of your database workload.
- Search queries are heavy enough that they slow down your transactional queries, and a read replica does not fix it.
- You need features the dedicated engines are built around, such as hybrid keyword and vector ranking out of the box, or very fast re-indexing when you change embedding models.
- Search is a core product surface with its own team, and separating it lets that team move without touching the main database.

Notice that "the tutorial used one" is not on the list. Neither is "investors will ask about our AI stack." If an investor asks, a clear answer about why you chose the simpler option is stronger than a complicated diagram; see [how to defend an AI stack to an investor](/post-defend-ai-stack-to-investor).

## The decision that matters more: your embedding pipeline

Teams agonise over where vectors live and spend no time on how they get there. The pieces that actually cause incidents are upstream:

1. How documents are chunked, and whether chunks keep enough context to be useful.
2. What happens when a source document is edited or deleted. Stale vectors answering questions from a deleted contract is a real support problem.
3. What happens when you switch embedding models. Every vector must be regenerated, so plan for a background re-embed job and a period where both versions exist.
4. Whether you can measure retrieval quality at all. Without a small evaluation set of real questions and expected sources, you cannot tell if a database change helped. Our note on [evals for AI features](/post-ai-feature-evals) covers the cheapest way to start.

Get these right and moving from pgvector to a dedicated engine later is a contained migration: re-embed or copy vectors, swap one query function. Get them wrong and no database choice will save the feature.

## How to keep the exit open

Put all vector reads and writes behind one small module in your code. The rest of the app asks it for "the ten most relevant chunks for this user and question" and never writes vector SQL directly. If you outgrow Postgres, that module is the only thing that changes. This is the same habit that makes any later [build-or-buy search decision](/post-build-search-or-buy) cheap to revisit.

If you are about to commit to a vector stack and want someone to pressure-test the choice against your actual data volumes, [book a call](/book-a-call). It is a short conversation, and it is cheaper than a migration.

## FAQ

### Is pgvector production-ready?

For most early-stage workloads, yes. It is widely run in production, supported by major managed Postgres providers, and supports HNSW indexing. The usual operational advice applies: watch index memory, and test query latency with realistic filters, not just raw similarity search.

### How many vectors is too many for Postgres?

There is no hard line. Recent benchmarks commonly show comfortable performance in the low millions and growing tuning work in the tens of millions, depending on dimensions, hardware, and recall targets. Measure on your own data before migrating.

### We use a database other than Postgres. Does the same logic apply?

The principle does: prefer vector support in a system you already run, if it has one, over adding a new system. Check what your current database offers before buying a separate one.

### Does a dedicated vector database make our AI feature more defensible?

No. The defensible parts are your data, your retrieval quality, and your product workflow. Where the vectors are stored is an implementation detail.
