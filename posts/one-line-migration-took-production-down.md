---
title: The one-line migration that took production down
slug: one-line-migration-took-production-down
date: '2026-10-13T15:30:06.286Z'
category: Pattern recognition
excerpt: >-
  A harmless schema change froze the app for minutes. Why Postgres lock queues
  turn small migrations into outages, and the habits that stop it.
description: >-
  Why a one-line database migration can freeze production, and five habits that
  prevent lock-queue outages in Postgres.
author: The founder of Fraction
readTime: 5
draft: false
---

The pull request was one line: add a column to the orders table. It passed review, passed tests, and ran in a second on staging. In production, the app stopped responding for eleven minutes. Every request that touched orders hung, the connection pool filled up, and then requests that had nothing to do with orders started failing too.

I have seen some version of this at several startups, usually around the time the main tables pass a few million rows. The migration is not slow on its own. It is the way the database queues locks that turns a harmless change into an outage. Once you understand the mechanism, the fix is a few habits, not a new tool.

## What actually happens

The examples here are PostgreSQL, because that is what most early-stage teams run. MySQL has its own version of the same problem with metadata locks.

Most schema changes need a strong lock on the table for at least a moment. `ALTER TABLE` takes an `ACCESS EXCLUSIVE` lock, which conflicts with everything, including plain reads. Usually it only needs that lock for a few milliseconds.

The trouble starts when something else is already holding a weaker lock on the table. A long analytics query. A background job that opened a transaction and is waiting on an external API. A session someone left open in a database client. The migration cannot get its lock, so it waits.

Here is the part that catches teams out: while the migration is waiting, every new query on that table queues behind it, even simple `SELECT`s that would normally run alongside the long query without any problem. Postgres grants locks in order, so the waiting `ALTER TABLE` blocks everyone who arrives after it. Your one-line migration is not running. It is standing in the doorway.

From the outside, that looks exactly like a database outage. Requests time out, the pool runs out of connections, and the error tracker lights up with timeouts from parts of the app nobody touched.

## The second version: changes that lock for a long time

Some changes do hold their lock for real work, and those scale with table size:

- **Building an index** with plain `CREATE INDEX` blocks writes to the table for the whole build. On a large table that can be minutes.
- **Adding a constraint** like a foreign key or `NOT NULL` check makes Postgres scan the whole table under a strong lock.
- **Changing a column type** often rewrites the entire table.

One that used to be on this list is no longer a problem: since PostgreSQL 11, adding a column with a constant default does not rewrite the table. Teams sometimes still avoid it out of old habit.

## The habits that prevent it

None of these need a new service. They need someone to make them the default.

### 1. Set a lock timeout on every migration

Tell the migration to give up quickly if it cannot get its lock, for example `SET lock_timeout = '2s'` at the top of the migration, or as the default for the database user your migrations run as. If the lock is not available, the migration fails in two seconds instead of freezing the app for ten minutes. Then you retry it a minute later. A failed migration is an annoyance. A frozen table is an incident.

### 2. Build indexes concurrently

Use `CREATE INDEX CONCURRENTLY`. It takes longer and cannot run inside a transaction, so you may need to tell your migration tool to run that step on its own, but reads and writes continue while it builds. If a concurrent build fails, it can leave an invalid index behind, so check for that and drop it before retrying. When an index is actually the right fix at all is a separate question, which I covered in [index, replica, or shard](/post-database-index-replica-shard).

### 3. Split risky changes into steps

Instead of adding a foreign key in one go, add it as `NOT VALID` (a brief lock, no scan) and then run `VALIDATE CONSTRAINT` separately, which uses a weaker lock and does not block normal traffic. The same idea applies to renames and type changes: add the new column, write to both, backfill in small batches, switch reads, then drop the old one later.

### 4. Kill abandoned transactions

Set `idle_in_transaction_session_timeout` so a session that opened a transaction and wandered off cannot hold locks forever. Many of the worst lock queues I have seen were caused by a forgotten session, not by real traffic.

### 5. Look before you run

Before a migration on a big table, check what is running: a quick look at `pg_stat_activity` for long transactions. If a nightly report is mid-run, wait.

## Why this is a leadership problem, not a database problem

Every one of these habits is well documented. Teams still get hit because nobody owns migration safety as a rule. The engineer writing the migration tested it on staging, where the table had a few thousand rows and no traffic, and it was fine. Nothing in the process asked "what does this lock, and for how long, on the real table?"

That question belongs in the deploy process, alongside the other steps I described in [making deploys boring](/post-deploys-are-an-event). In practice it is a short checklist in the pull request template, and ideally a linter in CI that flags `CREATE INDEX` without `CONCURRENTLY` and migrations without a lock timeout.

It also matters for how you read the incident afterwards. When the app went down, the error tracker filled with timeouts from unrelated endpoints, and the team spent the first half of the outage looking in the wrong place. If [nobody reads the error tracker](/post-error-tracker-nobody-reads) on a normal day, it is even harder to read it in an emergency.

## FAQ

### Our tables are small. Do we need any of this?

Not much yet. A lock timeout on migrations costs nothing and is worth adding now, because the lock-queue problem can happen on a small table if a long transaction is open. The rest matters once your busiest tables reach millions of rows or migrations start taking more than a second or two.

### Should we only run migrations at night?

Running heavy changes in a quiet window helps, but it is not a substitute for lock timeouts. Night is also when batch jobs and reports run, which are exactly the long transactions that cause lock queues.

### Do we need a zero-downtime migration tool?

Usually not at seed or Series A. The habits above cover most cases. Specialised tools earn their place when you have very large tables, frequent schema changes, or a team big enough that a written checklist stops being followed.

### What should we do while it is happening?

Find and cancel the waiting migration first, not the long query. Cancelling the migration releases the queue behind it immediately. Then work out what held the original lock.

If your team has had an outage like this and you want a second pair of eyes on the deploy and migration process, a [technical teardown](/teardown) covers it, or [book a call](/book-a-call) to talk it through.
