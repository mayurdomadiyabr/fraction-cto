---
title: 'Do you need a job queue yet, or will cron do?'
slug: do-you-need-a-job-queue-yet
date: '2026-08-12T09:20:00.000Z'
category: Decisions
excerpt: >-
  A queue adds Redis, a worker, and a broker to babysit. Most early apps do not
  need one yet. The trigger that tells you the cron has run out of road.
description: >-
  Do you need a background job queue yet, or is a cron enough? The trigger that
  says it is time, and the operational cost a queue adds.
author: The founder of Fraction
readTime: 5
draft: false
---

An engineer wants to add a job queue. The pitch sounds mature: background workers, retries, a proper message broker. What it actually adds is a Redis instance, a worker process to keep alive, and a broker to configure and monitor, all of which someone now operates at 2am when it breaks. Sometimes that cost is worth paying. Often the humble cron job you already have is the right tool for another year.

The mistake is treating a queue as a sign of seriousness rather than a response to a specific problem. Here is how I tell which one you actually have.

## Start with cron, and do not apologize for it

For scheduled work in a single process with low stakes, a cron is not a shortcut. It is the correct design. A nightly cleanup of expired sessions, a weekly digest email, an hourly cache refresh: these have a visible schedule, a predictable trigger, and no moving parts to keep alive. There is no worker to monitor, no broker to configure, and no new infrastructure bill.

The reason this matters is that every piece of infrastructure you add is something you operate forever. A queue is not free once you install it. It is a service that can fall behind, lose messages if misconfigured, and page you when the worker dies. Adding it for work a cron handles fine is the same premature-optimization reflex I described in [scaling infrastructure you do not need yet](/post-premature-scaling), just wearing a different costume. The question is never whether a queue is more powerful. It is whether your problem needs that power today.

Most early products are lighter than their engineers assume. If the total volume of background work is a few thousand jobs a day and nothing is latency-critical, a cron and a simple database-backed task table will carry you a long way.

## The trigger that means cron has run out of road

Cron breaks in specific, recognizable ways, and the reach for a queue is right when you hit them, not before.

The first is overlap. A cron fires on a clock, so if a job takes longer than the gap between runs, the next run starts while the last one is still going. A five-minute cron running a seven-minute job will pile instances on top of each other until something falls over. If you are adding locks and "is it already running" checks to a cron, you have outgrown it.

The second is retries. Cron has no memory. If a scheduled job fails halfway through, it does not retry the failed part; it just runs again on the next tick and hopes. For work where a failure needs to be caught, retried with backoff, and eventually parked in a dead-letter place a human can inspect, you want a queue that tracks each job's state. Bolting retry semantics onto a cron by hand is how you rebuild a worse queue accidentally.

The third, and the clearest, is event-driven work triggered by a user or a webhook rather than a clock. When a payment webhook fires and you need to create an order, update a CRM, and send a confirmation email, any one of those steps can fail independently, and you are probably running more than one app instance. That combination, work triggered by an event, needing per-step retries and deduplication, running across multiple processes, is what a queue is built for. A cron cannot express it cleanly.

The fastest way to sort a task is to name its trigger. Time-based work usually starts life as a cron. Request-driven or event-driven work that must not be lost usually starts life as a queue. Most teams have a mix, and the honest move is to keep the cron for the clock work and introduce a queue only for the event work that has earned it.

## The middle step people skip

The jump is not cron straight to Redis and a fleet of workers. If you are already running Postgres, a database-backed queue, where jobs are rows and a worker polls for them, gives you retries, visibility, and deduplication with no new infrastructure to run. For modest volume it is often all you need, and you can see the backlog with a query instead of a dashboard. Reach for a dedicated broker when the volume or the concurrency genuinely exceeds what a database poll handles, not as the default first move. This is the same buy-what-you-need discipline as [the build, buy, or wait decision tree](/post-build-buy): match the tool to the load in front of you.

## How to decide without a meeting

Ask four things about the work in question. Is it triggered by a clock or by an event? Does a failure need to be retried and inspected, or is running again next tick good enough? Can two runs safely overlap, or do you need exactly-once behavior? And what is the real volume, in jobs per minute, not jobs you imagine at scale?

If the answers are clock, good-enough, safe-to-overlap, and low volume, keep the cron and spend the week on the product. If they are event, must-retry, must-not-overlap, and rising volume, a queue is a clean win, and start with the database-backed version before you stand up a broker. The honest failure I see most is a team that installed a full queue for three nightly jobs, then spent months operating infrastructure that a ten-line cron would have handled. Add the moving part when the problem demands it, not to look ready. If you are unsure which side of that line your workload falls on, that is a short call worth having before you provision anything, which is what a [technical gut-check call](/book-a-call) is for.

## FAQ

### Can I just run background jobs inside my web process?

For very light work, yes, but it couples your request latency to your background work and dies with the web process on a deploy. A cron or a small worker separates them without much added complexity. Move to a real queue when the work needs retries or must survive a restart.

### Is a database-backed queue a real queue?

For most early-stage volume, yes. Jobs as rows with a status column, a worker that claims and processes them, and retry-on-failure logic covers a surprising amount. You give up some throughput and some fancy features, and you gain one fewer piece of infrastructure to run. Graduate to a dedicated broker when the volume or concurrency outgrows the database.

### How do I know I have outgrown cron?

You are writing locks to stop overlapping runs, adding hand-rolled retry logic, or trying to react to user events on a schedule instead of on the event. Any one of those is the signal. Until then, the cron is doing its job.
