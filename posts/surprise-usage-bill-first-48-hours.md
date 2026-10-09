---
title: Your cloud or API bill tripled. What to do in the first week
slug: surprise-usage-bill-first-48-hours
date: '2026-10-09T03:30:34.986Z'
category: Vendors
excerpt: >-
  A surprise usage bill is an incident, not an accounting problem. Contain it,
  find the cause, then ask for a credit the right way.
description: >-
  Your cloud or API bill spiked. How to stop the meter, find the cause, request
  a credit from the vendor, and keep it from happening again.
author: The founder of Fraction
readTime: 5
draft: false
---

Your cloud or API invoice lands at three times its normal size. Maybe it is the hosting bill, maybe a usage-based API you call from your product, maybe an AI model provider. Your first instinct is to message the vendor and ask what went wrong. Your second should come first: stop the meter.

A surprise usage bill is an incident, not an accounting problem. Handle it in the order you would handle an outage: contain it, find the cause, then deal with the money. Founders who reverse that order spend a week arguing about last month's invoice while this month's keeps growing.

## Hour one: contain it

Before anyone writes to support, find out whether the spend is still happening.

- Open the vendor's usage or cost dashboard and look at the last 24 to 48 hours, not the monthly total. Is the rate still high?
- If it is, find the service, project or API key responsible and limit it. Scale it down, pause the job, rotate or revoke the key, or set a hard spending cap if the vendor offers one.
- If you cannot tell which part is responsible, cap the whole account temporarily and accept a short degradation. A few hours of a slower feature is cheaper than a few more days of an open meter.

One caution on revoking keys: if the spike might be a leaked credential, rotate the key and check where it was used before you assume it was your own code. Leaked keys running up bills for someone else's workload are common enough that it should be on your list.

## Day one: find the cause

Most surprise bills come from a short list of causes. In my experience, ranked roughly by how often I see them:

1. **A loop.** A retry that never gives up, a job that re-queues itself, a cron schedule set to every minute instead of every hour.
2. **Something left running.** A test database, a load-test cluster, a GPU instance someone started for an experiment and forgot.
3. **A change in traffic shape.** A launch, a customer integration that polls far more often than expected, a bot crawling an endpoint that calls a paid API on every request.
4. **A pricing or tier change** you missed, or a free tier or credits that ran out. If credits expired recently, that is its own conversation; see [what to do when your cloud credits run out](/post-cloud-credits-running-out).
5. **A leaked credential** used by someone else.
6. **A vendor-side metering error.** Rare, but it happens.

Compare the vendor's usage data with your own logs. If your request logs show a spike in calls from one service at the same time, the cause is yours. If the vendor shows usage your systems have no record of, you have either a leaked key or a metering problem, and both change how you talk to the vendor.

Write a short timeline: when usage started climbing, what changed around then, when you contained it. You need this for the next step anyway.

## Week one: ask for a credit, properly

Many vendors will consider a one-time courtesy credit for genuinely accidental usage, especially for a first incident on a small account. None of them are obliged to. How you ask makes a real difference.

### Make one clear request

Open a single billing case. On AWS, that means a support case under account and billing. Multiple tickets, angry chat messages and a public post on day one tend to slow things down, not speed them up.

### Bring the evidence

Include the invoice number, the services and dates involved, what caused it, what you did to stop it, and proof that it is stopped. Dashboards or screenshots showing usage back at normal levels help. If you believe the vendor metered incorrectly, bring your own request logs for the same window and ask them to reconcile.

### Ask for something specific

"Please review this" gets a form reply. "We are asking for a one-time credit of the usage above our normal baseline of about X for these dates" gets a decision. Be honest that the mistake was yours if it was. Support teams are people, and a clear, accountable request is easier to approve.

### Do not count on it

Plan your cash as if the full bill stands. A credit that arrives is a bonus. A credit you counted on that does not arrive is a second surprise.

## Week two: make it not happen again

The fix is boring and nearly free.

- **Budget alerts on every account.** On AWS, budget notifications are free; set alerts on both actual and forecast spend. Know that billing data lags by hours, so alerts catch a multi-day overrun, not a loop that runs for twenty minutes.
- **Hard caps where they exist.** Many API and model vendors let you set a monthly spending limit per project or key. Use them, set slightly above normal, and accept that a cap can stop a feature.
- **Limits in your own code.** Retries with backoff and a ceiling, timeouts on jobs, and per-customer rate limits on anything that calls a paid API. For AI agents in particular, the limits belong outside the agent; I covered that in [why AI agents need a circuit breaker](/post-ai-agent-no-circuit-breaker).
- **An owner who reads the bill.** A weekly two-minute look at the cost dashboard beats any alert. The bigger version of this problem is in [the engineering tool bill nobody owns](/post-engineering-tool-bill).

## When the spike was not a mistake

Sometimes the bill tripled because usage tripled and customers are paying for it. That is a different problem: your unit economics. If a feature's vendor cost grows faster than the revenue it brings, a credit request is the wrong tool. Look at pricing, caching, cheaper models or tiers, and whether the feature belongs on a paid plan.

## FAQ

### Will the vendor refund an accidental bill?

Sometimes, often as a one-time courtesy credit, but there is no guarantee. A clear request with a timeline, evidence and proof the problem is fixed has the best chance.

### How fast do billing alerts fire?

Slower than you think. Cloud billing data typically updates a few times a day, so alerts catch slow overruns. Fast runaways need limits in code or hard caps at the vendor.

### Should I dispute the charge with my card issuer?

Usually not as a first step. It can freeze the vendor relationship or the account. Use the vendor's billing process first, and talk to them before escalating.

### Is a leaked API key really a common cause?

Common enough to check every time. Rotate the key, look at where it was used, and check your repositories and client-side code for exposed secrets.

If your vendor bills keep surprising you and nobody on the team owns them, that is a gap a fractional CTO closes quickly. See [how pricing works](/pricing) or [book a call](/book-a-call).
