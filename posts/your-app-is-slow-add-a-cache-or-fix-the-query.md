---
title: 'Your app is slow. Add a cache, or fix the query?'
slug: your-app-is-slow-add-a-cache-or-fix-the-query
date: '2026-07-22T11:59:11.714Z'
category: Decisions
excerpt: >-
  A cache hides a slow system, it does not fix one. How to tell a slow query
  from an over-called one, and when a cache is actually the right tool.
description: >-
  Your app is slow. How to tell whether you need a cache or a faster query, and
  the cost each choice hides.
author: The founder of Fraction
readTime: 5
draft: false
---

A page is slow, users are complaining, and an engineer proposes adding a caching layer. It sounds decisive and technical, so it usually gets approved. Half the time it is the wrong call, because a cache does not fix a slow system, it hides one, and the thing it hides tends to come back louder six months later as stale data and cache-invalidation bugs. The real question is whether you have a query that is slow or a query that is called too often, and those have different fixes.

Here is how I decide before anyone reaches for Redis.

## Fix the query first, almost always

Most "we need a cache" problems are actually unoptimized database problems wearing a costume. Before adding any caching layer, I make the team answer two things.

### Is the query slow, or is it the N+1 pattern?

The classic culprit is code that runs one query to fetch a list, then one more query per item in that list. Load a page with 200 rows and you have fired 201 queries. That page looks like it needs a cache. It needs a join. Fixing the access pattern often turns a 2-second page into a 200-millisecond one with no new infrastructure to operate.

### Have you actually looked at the indexes?

A missing index on a column you filter or sort by will make a query scale linearly with your table. It runs fine on 1,000 rows in development and falls over at 500,000 in production. Adding the index is a one-line change. Adding a cache to paper over the missing index means you now maintain a cache and still have the slow query underneath it. This is the kind of unglamorous fix that [triaging technical debt properly](/post-triage-technical-debt) surfaces before it becomes a fire.

Your database is also already a cache. Postgres keeps recently used data in a shared buffer pool in memory. For a read-heavy workload whose working set fits in RAM, the database behaves like a cache without you adding a single new moving part.

## When a cache is genuinely the right tool

Sometimes the query is already tight and the problem is real volume. That is when a cache earns its place.

Reach for one when the same expensive result is read far more often than it changes. If 80 percent of your traffic asks for the same 20 items, putting those in a fast in-memory store stops your database from getting hammered by identical work. The performance gap is not subtle: a typical in-memory cache hit lands in 1 to 3 milliseconds, while a real database query is often 50 to 300 milliseconds.

The same tool is the right answer for things that are naturally short-lived and keyed: session tokens, rate-limit counters, and temporary data that should expire on its own. Those want time-to-live and eviction, which a cache gives you and a database does not, cleanly.

## The cost nobody prices in

A cache is a second copy of your data, and now you own the hard problem of keeping two copies honest. The trap is write-heavy data. If a value changes more often than it is read, the work of invalidating the cache exceeds the work you saved, and you have added complexity for a net loss.

Do the arithmetic before committing. One cache miss can cost as much as 100 cache hits, because on a miss you pay the full database query and the cache write. A cache with a poor hit rate is slower than no cache at all, plus you now debug staleness bugs on top of it. Adding it before you have measured the hit rate is the same premature-optimization reflex as [scaling infrastructure you do not need yet](/post-premature-scaling).

## A five-minute way to decide

You do not need a formal review to make this call. Pull up the slow endpoint and ask, in order: how long does the underlying query take, how often is it hit, and how often does the data behind it change. Three numbers settle most cases.

If the query is slow but rarely called, fix the query and move on, a cache would barely help. If the query is fast but hammered with identical reads of data that almost never changes, a cache is a clean win. If the data changes constantly, do not cache it, no matter how often it is read, because you will spend all your savings on invalidation and inherit staleness bugs on top.

The honest failure I see most is teams that never gather those three numbers and add a cache on instinct. Six months later they cannot tell you the hit rate, the bug count is up, and the original slow query is still there underneath, untouched. Measure first, then decide. The tool is cheap. The wrong tool is not.

## FAQ

### How do I know if my hit rate will be good?

Look at your access logs before you build anything. If a small set of keys accounts for most reads and that data changes rarely, your hit rate will be high and a cache is worth it. If reads are spread evenly across everything, or the data changes constantly, it will not be, and you should keep optimizing the source instead.

### Can I just cache everything to be safe?

No. Caching everything maximizes your staleness surface and your invalidation bugs while helping only the fraction of data that is actually hot. Cache the specific expensive, frequently-read, rarely-changed results. Leave the rest alone.

### My engineer insists Redis will fix it. How do I push back?

Ask for the numbers, not the tool. What is the current query time, how often is it called, how often does the underlying data change, and what is the expected hit rate? If they can answer those and the case holds, approve it. If they cannot, the honest next step is to profile the slow query first. If you want a neutral read on whether your slowness is a query problem or a scale problem, [book a technical call](/book-a-call) and share the slow endpoints.
