---
title: 'Your database is slow. Index, replica, or shard?'
slug: database-index-replica-shard
date: '2026-09-16T02:47:21.871Z'
category: Decisions
excerpt: >-
  Almost always an index or a query fix, sometimes a read replica, very rarely
  sharding. Work in that order, because only one of them is permanent.
description: >-
  Database slow? Work in order: indexes and queries, then a read replica, then
  sharding. Why sharding is a one-way door for small teams.
author: The founder of Fraction
readTime: 6
draft: false
---

Short answer: when your database is slow, the fix is almost always an index or a query change, sometimes a read replica, and very rarely sharding. Work in that order, because the cheap fixes are also the reversible ones, and sharding is a one-way door that changes how your team writes code forever. Most early-stage teams that reach for sharding have not yet read a query plan.

This decision shows up around the time real usage arrives. The dashboard takes eleven seconds, somebody says "the database cannot handle it," and the next suggestion is architectural. It is worth slowing down for an afternoon, because the gap between the cheapest fix and the most expensive one here is roughly two orders of magnitude of effort.

## First, find out what is actually slow

You cannot make this decision without the query plan, and most teams make it without one.

Turn on slow query logging and look at what is really running. The result is usually surprising in a specific way: one or two queries account for most of the load, and they are rarely the ones anyone suspected. Very often the culprit is a query issued once per row inside a loop, which looks fine in the code and catastrophic in the log.

Then read the plan for those queries. You are looking for a sequential scan over a large table, a sort that spills to disk, or a join that multiplies rows before filtering them. Each of those has a standard remedy, and none of the remedies is a new database.

Skipping this step is how teams end up rebuilding infrastructure to work around a missing index. If your app is slow and you have not done this yet, start with the narrower version of this question: [add a cache, or fix the query](/post-your-app-is-slow-add-a-cache-or-fix-the-query).

## Indexes and query fixes: hours, reversible

This is where the overwhelming majority of early-stage database problems end.

An index on the column you filter or join by turns a scan of two million rows into a lookup. Adding one is minutes of work and a single line to revert. The cost is a small write penalty and some disk, and on a young product that trade is almost always worth it.

Query changes are the other half. Fetching related rows in one query instead of one per row. Selecting the columns you use instead of everything. Paginating with a cursor instead of a large offset. Moving an aggregate into a nightly job when it does not need to be live. None of these change your architecture, all of them are reversible, and together they routinely take a page from seconds to milliseconds.

Do this work first even if you are certain you will need more, because the measurement you get is what tells you whether you do.

## Read replicas: days, mostly reversible

A read replica is a copy of your database that serves reads while the primary handles writes. It helps when your load is genuinely read-heavy and the primary is saturated by read traffic that has already been optimized.

The trap is replication lag. A replica is slightly behind, so a user who saves a record and immediately reads it back can see the old value. That is a correctness bug, and it is subtle because it depends on timing. Handle it by routing reads that must be current to the primary, and routing analytics, reports, and search to the replica.

That last case is the strongest reason to use one. Heavy internal queries and dashboards competing with customer traffic on the same instance is a common, unnecessary self-inflicted slowdown, and a replica separates them cleanly.

A replica also gives you something else worth having: a warm copy if the primary fails. It is not a backup and does not replace one, but it changes the shape of a bad day.

## Sharding: months, effectively permanent

Sharding splits your data across multiple databases by some key -- customer, region, tenant. Every query then has to know which shard it is talking to.

It is the right answer when a single machine genuinely cannot hold your working set or absorb your write volume, and when vertical scaling has run out. Be honest about where that line sits in 2026: a single well-indexed managed instance handles far more than most Series A products will ever ask of it. Before sharding, the cheaper moves are a bigger instance, moving large binary data out of the database, archiving cold rows, and separating a hot table onto its own instance.

The reason to resist is that sharding is not a deployment change, it is a permanent constraint on how your team writes code. Cross-shard joins stop being possible. Transactions across shards become an application-level problem. Every new engineer has to learn the rule, and every query written without it is a bug. And if you choose the shard key wrong -- which is easy, because you choose it before you know your access patterns -- you get to redistribute the data later, which is harder than the original migration.

This is the shape of an irreversible decision, and it deserves the same care as the others I have described in [the early technical choices you cannot cheaply undo](/post-reversible-decisions).

## The order to work in

Measure first: slow query log, then query plans, then the top few offenders. Fix the indexes and the queries, and re-measure. Separate reporting and analytics traffic onto a replica if the primary is still busy. Scale the instance vertically while it is still cheap. Only then, with data showing a single machine cannot do the job, consider partitioning or sharding -- and when you do, pick the key from real access patterns rather than from the entity that feels most natural.

The pattern I see most often is a team three steps ahead of where the evidence is, building for a scale problem they do not have while the actual problem is a missing index and an unbounded query. That is the expensive version of [premature scaling](/post-premature-scaling), and it costs runway.

If the database is slow and the room disagrees about why, an outside read of the query log usually settles it in an afternoon. You can [book a call](/book-a-call) and bring the slow queries.

## FAQ

### How do I know if I need a read replica or just better indexes?
Optimize the queries first, then look at the primary under load. If it is still saturated and the traffic is mostly reads -- especially reports and dashboards -- a replica helps. If writes are the bottleneck, a replica does nothing, because writes still go to the primary.

### At what scale does sharding become necessary?
There is no universal row count, which is why the trigger should be evidence rather than a number: a single instance at its largest practical size, with queries already optimized, still unable to absorb write volume or hold the working set. Most early-stage products never reach that point.

### Is table partitioning the same as sharding?
No, and the difference matters. Partitioning splits a large table within one database and is largely transparent to your queries. Sharding splits data across separate databases and changes what your application can do. Partitioning is often enough for a large time-series or event table.
