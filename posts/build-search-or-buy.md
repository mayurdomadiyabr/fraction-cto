---
title: 'Build your own search, or pay for Algolia?'
slug: build-search-or-buy
date: '2026-08-12T09:20:00.000Z'
category: Decisions
excerpt: >-
  Search feels like a feature you must own. Postgres full-text handles more than
  founders expect. When a hosted search service earns its bill, and when it does
  not.
description: >-
  Build search with Postgres or pay for Algolia? When full-text is enough, when
  hosted search earns its cost, and the dependency risk to weigh.
author: The founder of Fraction
readTime: 5
draft: false
---

A customer asks why search is bad, an engineer says the real fix is a dedicated search service, and suddenly you are pricing a hosted product whose bill scales with every query your users make. Sometimes that is the right call. Often the database you already run does more than anyone on the team realized, and the service is solving a problem you do not have yet. Search is one of those features that sounds like it must be built or bought as a big thing, when the honest first step is much smaller.

I have seen a startup pay a rising monthly search bill to index a catalog of a few thousand items that Postgres would have searched instantly, and I have seen a team hand-roll ranking logic they should have rented. Here is how I keep both mistakes off the table.

## What your database already does

Postgres has full-text search built in, and it is better than its reputation. With a text search vector and the right index, it handles stemming so that "running" matches "run," ranking so the best matches come first, and filtering combined with search in a single query. For a modest catalog, a product list, a help center, a directory of a few thousand to low tens of thousands of records, this is frequently all the search you need, and it adds no new system to operate.

That last part is the point. Every hosted search service you add is another dependency in your architecture: another thing to keep in sync with your source of truth, another place data can drift, another vendor whose outage becomes your outage. Reaching for one before your database has actually run out of road is the same reflex I keep flagging in [the build, buy, or wait decision tree](/post-build-buy), where the cheapest correct answer is often the tool already in your stack.

Before you price anything, find out whether your search is bad because Postgres full-text cannot do the job, or because nobody has set up Postgres full-text and you are running slow "like" queries against a column with no index. Those are very different problems, and only one of them costs money to fix.

## When a hosted search service earns its bill

There is a real line past which built-in database search stops being the right tool, and hitting it is a good reason to buy.

The first case is typo tolerance and instant, as-you-type results at scale. Services like Algolia are genuinely good at returning ranked, misspelling-forgiving results in a few milliseconds across large indexes, and replicating that quality by hand is a serious project. If search is a core part of your product experience, not a utility box in the corner, that quality can be worth paying for.

The second is scale and relevance tuning that your database was not built for. Once you are searching millions of documents, need faceting, synonyms, custom ranking, and language handling, a purpose-built search engine does what a general database will not do cleanly. The catch is what running one costs. A self-managed search cluster is notoriously hard to run and tune, and companies routinely end up hiring expensive specialists just to keep it healthy, which is why for many teams a hosted service is cheaper than the engineers a self-hosted cluster demands.

So the buy decision splits in two. Buy a hosted service to avoid operating a search cluster yourself. Build, or rather self-host, only when your scale, cost, or data-sensitivity needs genuinely exceed what a hosted service offers and you have the engineering depth to run the infrastructure. For most companies under that bar, the hosted service is the pragmatic choice precisely because the alternative is a full-time operational burden.

## The cost and the dependency nobody prices

Two things get left out of the search decision, and both bite later.

The first is that hosted search pricing is usage-based, so the bill scales with query volume, which is exactly the thing you hope will grow. A price that is trivial at launch can become one of your larger software line items once traffic climbs, and teams have switched off hosted search for that reason. Model the bill at ten times today's traffic before you commit, not at today's.

The second is dependency. A hosted search service sits in the path of a core feature, so you need retry logic and a graceful fallback for when it is slow or down, and you own the job of keeping its index in sync with your database. That is real work, and if search going down means your product is unusable, you have concentrated risk in an outside vendor. It is the same concern I raised in [when one vendor can take your whole product down](/post-vendor-concentration-diligence), applied to the search box. Keeping a basic database search as a fallback path is cheap insurance.

## How to decide this week

Ask four questions. Have you actually set up your database's full-text search, or are you comparing a hosted service against nothing? How big is the index today, in thousands or millions of records? Is search central to the product experience, or a convenience feature? And what does the usage-based bill look like at ten times your current traffic?

If the index is small and search is a utility, set up Postgres full-text and move on; you do not have a buying decision yet. If search is core, the index is large, and you need typo tolerance and relevance tuning, buy a hosted service rather than operating a cluster, and build in a fallback. The honest failure I see most is a team that bought hosted search to fix a missing database index, then paid a scaling bill for it every month afterward. Fix the cheap thing first, buy the service when your product genuinely needs it, and never let a core feature depend on a vendor with no fallback. If you are unsure which side of that line you are on, that is a short call worth having before you sign anything, and it is what a [technical gut-check call](/book-a-call) is for.

## FAQ

### Is Postgres full-text search good enough for a real product?

For small to moderate catalogs it often is: stemming, ranking, and combined filtering in one query, with no extra system to run. It stops being enough when you need typo tolerance, faceting, and instant results across a very large index, at which point a purpose-built search engine is the right tool.

### Should I self-host a search engine to save money?

Rarely, early on. A self-managed search cluster is hard to run and tune and usually costs more in specialist engineering time than a hosted service costs in fees. Self-host only when your scale or data-sensitivity requirements clearly exceed what hosted offers and you have the team to operate it.

### How do I avoid a runaway search bill?

Model the usage-based cost at several times your current query volume before committing, and keep a basic database search as a fallback so the hosted service is an upgrade you can walk back, not a dependency you cannot leave.
