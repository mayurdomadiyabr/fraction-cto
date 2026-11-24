---
title: You added a second server and every scheduled job ran twice
slug: second-server-jobs-ran-twice
date: '2026-11-24T02:37:51.355Z'
category: Pattern recognition
excerpt: >-
  Why scaling from one server to two quietly doubles your cron jobs, emails and
  charges, and the simple locking rules that keep each job to one run.
description: >-
  Why adding a second server makes scheduled jobs run twice, sending duplicate
  emails and charges, and the locking and idempotency rules that fix it.
author: The founder of Fraction
readTime: 5
draft: false
---

Scheduled jobs run twice after you add a second server because the schedule usually lives inside the app, and now there are two copies of the app, each with its own clock. Both wake up at 9:00, both send the daily digest, both charge the renewals. The fix is to make sure only one copy runs each job, with a lock or a single scheduler, and to make every job safe to run twice anyway.

This pattern has a very recognisable start. The product grows, someone adds a second server or a second container for reliability, everything looks better for a day, and then support gets a handful of emails: "Why did I get two invoices?" Nobody connects it to the scaling change, because the scaling change was supposed to make things safer.

## Why it happens

On one server, "run this at 9:00" means exactly one run. The scheduler might be a crontab on the machine, a scheduling library inside the app, or a framework feature that starts with the web process. All of them assume there is one of you.

When you scale out, the deploy tooling copies the whole app, scheduler included. Two servers means two schedulers. Autoscaling makes it worse: on a busy day you might have four copies, and the job runs four times, but only on busy days, which makes it look random.

### Platforms with a scheduler do not fully save you

Moving the schedule to a dedicated scheduler, such as a Kubernetes CronJob or a cloud scheduler service, solves the many-copies problem. It does not make duplicates impossible. The Kubernetes documentation is direct about this: it tries to avoid a scheduled job running twice but does not completely prevent it, so the jobs you define should be idempotent ([Kubernetes CronJob docs](https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/)). The same docs also describe what happens when one run is still going when the next is due, which matters for long jobs.

## Where the damage shows up

Some jobs are harmless twice. Rebuilding a search index twice wastes a few minutes. Others are not:

- **Charges and renewals.** Two runs, two charges. Refunds, support time, and an angry finance contact at your customer.
- **Emails and texts.** Duplicate digests are annoying. Duplicate SMS cost money each time.
- **Counters and reports.** A job that adds yesterday's usage to a running total doubles it, and the wrong number flows into invoices and dashboards.
- **Exports to other systems.** Two copies of the same record pushed to a CRM or accounting tool create duplicates someone has to clean by hand.

It is the same family of bug as [the webhook that arrived twice](/post-webhook-arrived-twice): the system did something twice that the code assumed would happen once.

## The fix, in two layers

### Layer one: only one copy runs the job

Pick one of these, in rough order of simplicity:

1. **One scheduler, outside the web servers.** Run the schedule in a single small worker process or a platform scheduler, and have it trigger jobs. Web servers never run scheduled work. This is the cleanest option and usually the one I recommend.
2. **A lock in the database you already have.** Before doing the work, the job takes a lock with a fixed name. If another copy already holds it, this copy exits. PostgreSQL has built-in advisory locks for exactly this ([PostgreSQL advisory lock functions](https://www.postgresql.org/docs/current/functions-admin.html#FUNCTIONS-ADVISORY-LOCKS)), and most job libraries have a "unique job" option that does something similar.
3. **Mark one server as the scheduler.** Workable for a while, but fragile: if that server is replaced or the flag is set on two, you are back where you started.

If you are already debating schedulers and queues, [do you need a job queue yet](/post-do-you-need-a-job-queue-yet) walks through when cron is enough.

### Layer two: running twice does no harm

Even with a lock, design each job so that a second run finds nothing left to do. This is what "idempotent" means in practice:

- **Record what was done.** Before charging, check for a charge record for this customer and this billing period. If it exists, skip.
- **Use the provider's duplicate protection.** Payment providers such as Stripe accept an idempotency key, so the same request sent twice creates only one charge. Use the subscription and period as the key.
- **Process a defined window, not "everything new".** "Send reminders for trials ending on 25 November" is safe to rerun. "Send reminders to everyone we have not reminded" depends on a flag being written correctly every time.
- **Set totals, do not add to them.** Recalculate the day's usage and write it, rather than adding it to a running counter.

Layer two is what protects you in the cases layer one misses: a retry after a crash halfway through, a deploy that overlaps two versions, or a well-meaning engineer running the job by hand.

## How to check your own product

Ask your engineer three questions. Where does the schedule live? How many copies of that thing run in production today, and could that number change on its own? Which jobs move money, send messages or change totals? Any job on the third list without a lock and a duplicate check is a ticket worth writing this week.

It is also worth checking whether anyone would notice if a job ran twice, or not at all. If the answer is "a customer would tell us", see [background jobs that fail silently](/post-background-jobs-fail-silently).

## FAQ

### We only have one server. Should we care yet?

Make the money-moving jobs idempotent now; it is cheap while the code is small. Leave the locking until you add a second server, but put it on the checklist for that change.

### Does serverless avoid this?

It changes the shape. A scheduled serverless function runs as a single trigger, which helps, but platforms commonly deliver events at least once, so the same duplicate-safe design still applies.

### How do we clean up after duplicate charges?

Refund the duplicates proactively, before customers ask, then add the idempotency key so it cannot repeat. Tell affected customers in one short, specific message.

### Is this something a fractional CTO looks at?

Yes. It is one of the first things I check when a team is about to scale out. A [technical teardown](/teardown) covers scheduled work along with the rest of the stack, or you can [book a call](/book-a-call) if a scaling change is coming up soon.
