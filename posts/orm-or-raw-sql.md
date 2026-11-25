---
title: 'ORM or raw SQL for your startup? Use both, on purpose'
slug: orm-or-raw-sql
date: '2026-11-25T02:44:30.255Z'
category: Decisions
excerpt: >-
  Why the ORM versus raw SQL debate is the wrong question, and the simple split
  that keeps an early team fast and its queries fast.
description: >-
  Should your startup use an ORM or raw SQL? Where each helps and hurts, the
  split I recommend, and signals your team has the balance wrong.
author: The founder of Fraction
readTime: 5
draft: false
---

For most early products, use an ORM for everyday reads and writes and drop to raw SQL for the handful of queries that need it. The ORM gives you speed, safer defaults and readable migrations; raw SQL gives you control over the queries that matter for performance and reporting. The mistake is not picking one. The mistake is treating the choice as all-or-nothing, or letting nobody on the team read the SQL the ORM writes.

An ORM (object-relational mapper) is the library that lets your code say "get this customer and their last ten orders" instead of writing the database query by hand. Every framework has one or more. Founders ask me about this when a senior candidate says "ORMs are for beginners" or when the app gets slow and someone blames the ORM.

## What the ORM actually buys you

On a team of one to five engineers, an ORM earns its place for reasons that have little to do with taste:

- **Speed on the boring 80 percent.** Most of an early product is create, read, update and delete on a few dozen tables. Writing that by hand is slow and repetitive.
- **Safer defaults.** ORMs parameterize queries for you, which closes off the most common route to SQL injection. Hand-written SQL can be just as safe, but only if every engineer does it right every time.
- **Migrations as code.** Schema changes live in version control next to the code that depends on them, and a new engineer can rebuild the database from scratch. That matters more than people think; see [what a one-line migration did to production](/post-one-line-migration-took-production-down).
- **Easier hiring and onboarding.** Engineers who know your framework already know its ORM.

## Where the ORM hurts

The criticism is real, and it shows up in the same places in nearly every codebase I review.

### Hidden query counts

The classic is the N+1 problem: you load 50 orders, then the code touches each order's customer, and the ORM quietly runs 51 queries. It looks like one line of code. I wrote about finding these in [your app is slow: add a cache or fix the query](/post-your-app-is-slow-add-a-cache-or-fix-the-query); the fix is almost always to tell the ORM to load the related rows up front.

### Loading far more than you need

ORMs make it easy to load whole rows and whole tables. That is how a list page ends up pulling every record into memory, the pattern behind [the list page that loads every row](/post-list-page-loads-every-row).

### Reporting and analytics queries

Grouping, window functions, multi-table aggregates and anything a finance person asks for are usually clearer and faster in SQL. Forcing them through the ORM produces code nobody can read and queries nobody can tune.

### Database features the ORM does not model

Full-text search, partial indexes, row locks, upserts with conditions, and database-specific types are often awkward or missing. The [search box built on a LIKE query](/post-search-box-is-a-like-query) is often an ORM default that nobody questioned.

## The split I recommend

Use both, on purpose, with a rule the whole team knows.

1. **ORM by default** for normal application reads and writes.
2. **Raw SQL, parameterized, in one place** for reporting, heavy aggregates, search and the few hot paths you have measured. Keep these queries in a clearly named module, not scattered through controllers.
3. **Migrations always through the migration tool**, even when the change itself is raw SQL, so the history stays in one place.
4. **Query logging on in development.** Every engineer should see the SQL their code produces. Most ORM performance problems are found in five minutes by reading the log.
5. **A slow-query view in production.** Your database already tracks its slowest queries. Look at that list monthly; it tells you exactly which queries deserve hand-written SQL.

This keeps the speed of the ORM where it helps and removes it where it hurts. It also means the "ORMs are for beginners" argument stops being a philosophy debate and becomes a question about specific queries.

## What about query builders?

Between a full ORM and raw strings sit query builders: libraries that let you compose SQL in code, with parameters, without mapping rows into objects. They are a good middle option for teams that like to see the SQL shape but want composition and safety. They do not change the recommendation; they are another tool for the "raw SQL" bucket.

## Signals you have the balance wrong

- **Every slow page traces back to ORM-generated queries nobody has read.** You need logging and a review habit, not a rewrite.
- **Business logic lives in hand-written SQL strings copied across files.** You lost the safety and readability the ORM offered; consolidate.
- **Engineers are fighting the ORM to express a query.** That query should be SQL.
- **Someone proposes removing the ORM entirely.** On an early product this is rarely worth it. It is a large, risky change that fixes a problem a handful of queries could fix. The same logic applies to most rewrite proposals; see [rewrite or refactor](/post-rewrite-or-refactor).

## FAQ

### Is using an ORM a red flag in technical diligence?

No. Diligence reviewers look for whether the team understands its queries, has indexes where they matter and can explain its slow spots. An ORM used with query logging and a few well-placed raw queries reads as mature. An ORM nobody has looked under is the concern.

### Are ORMs slower than raw SQL?

The ORM's own overhead is usually small. The slowness comes from the queries it is allowed to generate, like N+1 patterns and loading unneeded columns. Fix those and most of the gap disappears.

### Should a non-technical founder have an opinion on this?

Not on which library, but you can ask one useful question: "Which of our queries do we write by hand, and why?" A clear answer means the team is choosing. "We never look at the SQL" means nobody is.

### When should we move a query from the ORM to raw SQL?

When it shows up in your slow-query list, when it is a report or aggregate, or when expressing it through the ORM takes more code than the SQL itself. Measure first, then move it.

If your app is getting slower and the team is split on why, a [technical teardown](/teardown) will pin down which queries are the problem. If you want help setting a sensible default for a new team, a [short call](/book-a-call) is usually enough.
