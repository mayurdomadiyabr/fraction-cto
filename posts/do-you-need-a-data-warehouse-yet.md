---
title: 'Do you need a data warehouse yet, or will Postgres do?'
slug: do-you-need-a-data-warehouse-yet
date: '2026-08-12T09:20:00.000Z'
category: Decisions
excerpt: >-
  Dashboards got slow, so someone proposes a warehouse. Often the fix is smaller
  and cheaper. When Postgres is enough, and the signal that it is not.
description: >-
  Do you need a data warehouse yet, or will Postgres do? The signal analytics
  has outgrown your app database, and the cheaper steps to try first.
author: The founder of Fraction
readTime: 5
draft: false
---

Your internal dashboards got slow, and an engineer proposes standing up a data warehouse. It sounds like the grown-up answer, and sometimes it is. Often it is three times the machinery your problem needs, and the same slowness could be fixed for a fraction of the cost and operational weight. The trap is treating "our analytics is slow" and "we need a warehouse" as the same sentence. They are not.

I get asked this a lot, usually right after a founder has been quoted a number for a modern data stack that made them wince. Here is how I decide whether the warehouse is the tool or the reflex.

## Why Postgres struggles at analytics specifically

Your application database is almost certainly a row store, and that is the right design for what an app does: read one record, write one record, fetch a user and their orders. It is the wrong shape for analytics. When you ask "sum revenue by month across two million rows," a row store has to walk through whole rows to pull the one or two columns your query cares about. That is why a dashboard that was instant at 50,000 rows crawls at two million.

This is architectural, not a tuning bug you can fully index your way out of. Analytics scans read a few columns across enormous numbers of rows, and a column store, which keeps each column together on disk, reads only the columns the query touches. Aggregations that take seconds on a row store come back in milliseconds on a column store. So the real question is not "do I need a warehouse," it is "have my analytics queries outgrown a row store," and the answer to the second is what should drive the first.

## The signals that you have actually outgrown Postgres

Reach for a warehouse when the evidence is specific, not when the dashboard feels sluggish once.

The clearest signal is that analytics queries are heavy enough to compete with your application for the same database, so a big reporting query slows the app your customers are using. Running expensive scans on the same instance that serves live traffic is a real problem, and it is a good reason to move analytics off the primary.

The second is volume plus complexity together. Tens of millions of rows, multi-way joins across large tables, and business users who want to slice the data many ways interactively. At that point the performance gap between a row store and a column store stops being an annoyance and becomes the difference between usable and not.

The third is organizational: you are pulling data from several sources, your payment processor, your product database, your marketing tools, and need one place to join them. A warehouse is genuinely good at being that shared, queryable home. If your analytics all live in one database and always will, that argument does not apply to you yet.

If none of those is true and the dashboard is merely slow, you likely have the same problem I described in [the app that is slow because of the query, not the scale](/post-your-app-is-slow-add-a-cache-or-fix-the-query): a missing index, an N+1 pattern, or an unbounded query, and the fix is an afternoon, not a data platform.

## The cheaper steps most teams skip

The jump from "one Postgres" to "full modern data stack" skips two steps that solve most of these problems for far less money and operational weight.

The first is a read replica. Point your analytics and dashboards at a replica of your database instead of the primary. That alone removes the "reports are slowing the app" problem, because the heavy queries no longer touch the instance serving customers, and it costs the price of one more database rather than a new platform and a pipeline to feed it.

The second is a column-oriented analytical database sized to your data, without the full warehouse apparatus around it. Tools that run a columnar engine over your existing data give you the millisecond aggregations without you stitching together ingestion, transformation models, and instance sizing, and without babysitting indexes to keep dashboards responsive. For a company with millions, not billions, of rows, this middle tier is frequently the whole answer.

Standing up a full warehouse before you need it is the same premature-scaling pattern I keep flagging, most directly in [the scaling you did not need yet](/post-premature-scaling). It is real engineering time and a recurring bill spent to solve a problem you could have deferred.

## How to decide without a data-stack RFP

Ask four questions. Are analytics queries actually competing with live app traffic, or just slow on their own? Is the slow query slow because of the data shape, or because of a missing index or an N+1 you have not looked at? Do you need to join data from multiple systems in one place, or does it all live in one database? And is the volume genuinely in the tens of millions of rows and climbing, or does it feel big without being measured?

If reports are hurting the app, move them to a replica first. If a single query is slow, profile it before you conclude the architecture is wrong. If you truly need multi-source joins over large, growing data queried many ways, the warehouse has earned its place and its bill. The honest failure I see most is a team that bought a warehouse to fix a missing index, then spent months operating a pipeline for data a tuned replica would have served. Measure the three numbers, take the cheap step that fits, and buy the platform only when the evidence points there. If you want a neutral read on whether this is a query problem or a scale problem, that is exactly what a [technical call before you commit](/book-a-call) is for.

## FAQ

### Can Postgres be a warehouse if I tune it?

For moderate analytics, a separate Postgres tuned for reporting, ideally a read replica, will carry you further than most people expect. It stops being enough when your scans are large enough that the row-store format itself is the bottleneck, at which point a columnar engine is the honest fix, not more indexes.

### What is the cheapest first move when dashboards get slow?

Profile the slow query, then move analytics onto a read replica so reporting stops fighting live traffic. Those two steps solve a large share of "we need a warehouse" cases for the price of one extra database and an afternoon of work.

### When is a full warehouse clearly worth it?

When you are joining data from several systems, querying tens of millions of rows or more many different ways, and business users need that interactively. At that scale the column-store advantage and the single-home benefit both pay off, and the operational cost is justified.
