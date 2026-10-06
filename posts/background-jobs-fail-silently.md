---
title: Your background jobs fail and nobody finds out
slug: background-jobs-fail-silently
date: '2026-10-06T03:16:52.171Z'
category: Pattern recognition
excerpt: >-
  Background jobs stop quietly while the site looks healthy. Three signals that
  catch most silent failures in a week of work.
description: >-
  Why startup background jobs and scheduled tasks fail silently, and the three
  signals (failures, queue age, heartbeat) that catch them.
author: The founder of Fraction
readTime: 6
draft: false
---

Most early products have a second application hiding behind the one customers see. It sends the welcome emails, syncs data to the CRM, generates the nightly invoices, resizes uploads, retries failed payments and posts to webhooks. It runs as background jobs and scheduled tasks, and in most startups I review, nobody is watching it.

The website is monitored. Someone gets paged if it goes down. The jobs are not, so when they stop, the first person to notice is usually a customer asking why their report never arrived, or a finance person asking why last week's invoices are missing. By then the failure is days old.

The short version: a background job that fails is not an error your users see, so it does not get treated like one. Fix it with three signals on your most important queue (failures, waiting time and a heartbeat), not with a big monitoring project.

## Why this happens to almost every team

It is not carelessness. It falls out of how the work gets built.

The first jobs are written by whoever needed them, usually as a quick script on a schedule or a call to a queue library. They work on day one. The engineer checks the output once, sees the emails went out, and moves on. Nothing about that moment creates a habit of checking again.

Then the failure modes arrive, and they are quiet ones:

- A worker process crashes after a deploy and nothing restarts it. The queue keeps accepting jobs. Nothing runs them.
- A third-party API starts timing out. The job retries five times, gives up, and the retry library logs it to a place nobody reads.
- A scheduled task depended on a server that got replaced. The new server never had the schedule. The task has simply not run since.
- A job runs but does nothing, because a query now returns zero rows after a schema change. It reports success every night.

The last one is the nastiest. A job that "succeeds" while doing nothing will pass every check that only looks for errors.

The monitoring guidance from vendors like [Last9](https://last9.io/blog/what-is-asynchronous-job-monitoring.md) describes the same thing: the queue can be broken long before anyone notices, while the application itself looks perfectly healthy. That matches what I see. The web app's uptime chart says 99.9%, and meanwhile nothing has synced to the CRM since Thursday.

## The cost is bigger than it looks

The direct cost is the broken work: missed emails, unsent invoices, stale data. The bigger cost is what it does to trust in the product.

Here is a composite of a case I see in some form every few months. A B2B team's nightly usage sync to their billing system quietly stops for eleven days after an infrastructure move. Nobody notices until month-end, when a batch of customers are invoiced for almost nothing. Recovering the revenue means re-running the sync by hand, explaining corrected invoices to customers, and a week of a senior engineer's time reconstructing what should have happened. The fix for the root cause, a missing scheduled task, takes twenty minutes.

That ratio is typical. Silent failures are cheap to catch and expensive to clean up, because the damage compounds every day they run undetected.

There is also a diligence angle. When an investor or acquirer asks how you know your system is working, "the site is up" is not the answer they want. Your [incident history](/post-incident-history-diligence) reads very differently when half the incidents were found by customers.

## Three signals that catch most of it

You do not need a platform team or an observability budget for this. Pick the one queue or scheduled job that would hurt most if it stopped, usually anything touching money or customer-facing email, and add three signals.

### 1. Failures that reach a human

When a job exhausts its retries, it should land somewhere a person will see within a working day. That can be a dead-letter queue with an alert on it, or simply a message to a team channel. The point is that "gave up after five tries" stops being a log line and becomes a notification.

### 2. How long jobs are waiting

Measure the age of the oldest job in the queue. If workers are dead, this number climbs steadily even though no error is ever raised. An alert at "oldest job older than 15 minutes" (or whatever is normal for you, times a few) catches the crashed-worker case that error tracking cannot see.

### 3. A heartbeat for every scheduled task

This is the one most teams are missing. For each scheduled job, have it ping a check-in URL when it finishes. If the ping does not arrive on time, you get alerted. This is sometimes called a dead man's switch: you are alerted on the absence of a signal, not the presence of an error. Services like [Honeybadger check-ins](https://www.honeybadger.io/check-ins) and several open-source tools do exactly this, and the setup is usually one line at the end of the job.

To catch the "succeeds but does nothing" case, put the heartbeat after a sanity check. If the nightly sync processed zero records on a weekday, do not send the ping. Let the missing heartbeat raise the alarm.

## What not to do

Do not try to monitor everything on day one. Teams that start with a dashboard of forty metrics end up with alerts nobody trusts, which is the same trap as [tests everyone has learned to ignore](/post-flaky-tests-everyone-ignores). Three signals on one critical queue beat forty on all of them.

Do not route job alerts to the same place as everything else. If the channel already gets fifty automated messages a day, a failed invoice job is just one more.

And do not assume your queue choice solves this. Moving from cron to a proper job queue, a decision I cover in [whether you need a job queue yet](/post-do-you-need-a-job-queue-yet), gives you retries and visibility tools, but someone still has to connect them to a human.

## A one-week fix

If you recognise your team in this, here is the plan I give founders:

1. Ask your engineers to list every background job and scheduled task, with what breaks if it stops. This list alone is usually a surprise.
2. Mark the three that touch money, customer email or data customers see.
3. Add a heartbeat to each scheduled one and a failure alert plus queue-age alert to each queued one.
4. Name one person who owns those alerts each week.

That is a few days of engineering, not a quarter. If you want a second pair of eyes on which of your jobs are actually load-bearing, it is a common first finding in a [technical teardown](/teardown).

## FAQ

### How do I know if our background jobs are failing right now?

Ask when each scheduled task last ran successfully and how you know. If the answer requires someone to log into a server and read logs, you do not know. Check the oldest job in each queue and any dead-letter or failed-jobs table; a non-empty failed list that nobody has looked at is your answer.

### Is error tracking enough to catch job failures?

No. Error tracking catches jobs that throw exceptions. It misses jobs that never start, workers that died, and jobs that complete while doing nothing. Those need queue-age and heartbeat checks, which alert on something missing rather than something going wrong.

### Who should own background job alerts in a small team?

One named person per week, rotating if you have more than two engineers. Shared ownership of alerts in a small team means nobody acts on them. The owner does not have to fix every failure, only make sure each one is seen and assigned.

### Does this need a dedicated tool?

Not at first. A dead-letter queue, a scheduled query on queue age and a free or cheap heartbeat service cover most of it. Buy a dedicated tool when you have enough queues that wiring each one by hand is the bottleneck.

If you are not sure what is running behind your product or who would notice if it stopped, [book a call](/book-a-call) and we can walk through it.
