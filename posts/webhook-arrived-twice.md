---
title: The webhook arrived twice and the customer got two orders
slug: webhook-arrived-twice
date: '2026-10-13T15:30:06.623Z'
category: Pattern recognition
excerpt: >-
  Payment and SaaS webhooks are delivered at least once, not exactly once. How
  duplicate events cause double orders and how to make handlers idempotent.
description: >-
  Webhooks can arrive twice. How duplicate events create double orders and
  charges, and how to make your handlers idempotent.
author: The founder of Fraction
readTime: 5
draft: false
---

A customer emails support: they were charged once but got two order confirmations, two shipments, and two invoices. The engineer looks at the logs and finds the payment provider sent the same "payment succeeded" event twice, eight seconds apart. The code handled both.

Nothing was broken in the payment provider. This is how webhooks are designed to work. Most providers promise to deliver each event at least once, not exactly once. If your endpoint is slow, times out, or returns an error, they send it again. Sometimes they send it again even when you did respond. Code that assumes every webhook is new will, sooner or later, do the same thing twice.

It is one of the most common bugs I find when I review an early-stage codebase that takes payments or connects to other SaaS tools.

## Why duplicates happen

A webhook is the other company's server calling yours. They send an event, wait for a 2xx response, and if they do not get one in time, they mark it as failed and retry later. Stripe, for example, documents that in live mode it keeps retrying an undelivered event for up to three days with increasing gaps between attempts.

Duplicates come from a few ordinary situations:

- **Your handler is slow.** It does real work, calls another API, sends an email, and takes longer than the provider is willing to wait. The provider retries while the first attempt is still running.
- **Your server errored after doing the work.** The order was created, then something later in the handler threw. The provider saw a 500 and retried. The order gets created again.
- **A deploy or restart** cut off the response. The work happened, the acknowledgement did not.
- **The provider resent it** for its own reasons, or someone on your team clicked "resend" in a dashboard while debugging.

Any one of these is rare on a given day. Across thousands of events a month, they are certain.

## What it looks like in the business

The damage depends on what the handler does:

- Duplicate orders, shipments, or license keys.
- Credits or account balances applied twice.
- Customers receiving the same welcome or receipt email two or three times.
- Usage counted twice, which flows into the next invoice.
- A CRM full of duplicate contacts because the form-submission webhook fired twice.

The money cases get noticed fast because customers complain. The quieter cases, like double-counted usage or duplicate CRM records, can run for months and only show up when numbers stop matching, which is one of the root causes behind [three dashboards showing three numbers](/post-three-dashboards-three-numbers).

## The fix: make handlers idempotent

Idempotent means running the handler twice with the same event has the same effect as running it once. The standard way to get there:

### 1. Record every event ID you process

Every serious provider includes a unique ID with each event. Create a table of processed event IDs with a unique constraint on the ID. When an event arrives, insert its ID first. If the insert fails because the ID already exists, you have seen this event: return 200 and stop.

### 2. Do the insert and the work together

The check and the side effect need to happen in the same database transaction. If you check "have I seen this?" and then do the work as two separate steps, two copies of the same event arriving close together can both pass the check. A unique constraint inside one transaction closes that gap.

### 3. Acknowledge fast, work later

Store the raw event, return 200 immediately, and do the real work in a background job. This removes the most common cause of retries, a slow handler, and it means you keep a copy of every event even if processing fails. If you do not have a job queue yet, [whether you need one](/post-do-you-need-a-job-queue-yet) is worth deciding now, and the jobs need monitoring, because [background jobs fail silently](/post-background-jobs-fail-silently) unless someone watches them.

### 4. Keep the records long enough

Keep processed event IDs for longer than the provider's retry window, with a margin. If you clean them up after a day and the provider retries on day two, you are back to duplicates.

### 5. Use idempotency keys going out, too

The same problem runs in the other direction. When your code calls a payment API to create a charge and the network drops before the response arrives, a naive retry creates a second charge. Payment APIs like Stripe accept an idempotency key with the request so that a retry returns the original result instead. Use one on every call that moves money or creates something.

## Also handle events out of order

Related and just as common: events do not always arrive in the order they happened. A "subscription updated" can arrive before the "subscription created" it depends on. Handlers should check the current state, or fetch the latest object from the provider, rather than assuming the sequence. If you are building more of your billing logic yourself than you planned, [whether to build billing or use Stripe](/post-build-billing-or-use-stripe) covers where that line usually sits.

## How to find out if you have this problem

A quick check you can run this week:

1. List every webhook endpoint in the app. Teams are often surprised by the count.
2. For each, ask: what happens if this exact event arrives twice, one second apart?
3. Look for a processed-events table or a unique constraint on the provider's event ID. If neither exists, the handler is almost certainly not idempotent.
4. Search your data for duplicates the bug would create: two orders with the same payment reference, two contacts with the same email created within a minute.

Step 4 often turns up a handful of past duplicates nobody connected to the cause.

## FAQ

### Is this only a problem with Stripe?

No. Payment providers, e-commerce platforms, form tools, CRMs, and messaging services all use at-least-once delivery for webhooks. Treat every incoming webhook as possibly duplicated, whoever sends it.

### Can we just check whether the order already exists?

Sometimes, if the order has a natural unique key such as the payment ID with a unique constraint on it. A check without a database constraint is not enough, because two copies arriving together can both see "not found."

### How long should we keep processed event IDs?

At least as long as the longest retry window of any provider you use, plus a margin. For most teams that means keeping them for a week or more. Storage is cheap; duplicate charges are not.

### We send webhooks to our own customers. Does this apply?

Yes, in reverse. Your customers will receive duplicates from you, so document that events can repeat and include a stable event ID they can deduplicate on. More on that in [building webhooks or buying them](/post-build-webhooks-or-buy).

If you want someone to walk through your payment and integration flows for this class of bug, it is part of every [technical teardown](/teardown). Or [book a call](/book-a-call) and we can look at your handlers together.
