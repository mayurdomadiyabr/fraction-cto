---
title: One customer's script slows the app for everyone else
slug: one-customer-slows-everyone
date: '2026-11-10T02:45:13.054Z'
category: Pattern recognition
excerpt: >-
  When one account's import or API loop slows every other customer, you have a
  noisy-neighbor problem. Fix it in this order.
description: >-
  Why multi-tenant apps get noisy neighbors, where it starts, and the
  per-customer limits, queues and metrics that fix it.
author: The founder of Fraction
readTime: 5
draft: false
---

If one customer's import, integration or script can make your app slow for every other customer, you have a noisy-neighbor problem, and it will get worse as you win bigger accounts. The fix at startup scale is not a new architecture. It is per-customer limits on the expensive paths, moving heavy work into a queue that one customer cannot monopolize, and dashboards that show load by customer so you can see who is causing it.

This pattern usually shows up the same way. Support gets a wave of "the app is slow" tickets from several customers at once. Engineering looks at the servers and finds them maxed out. An hour later someone notices that one customer started a bulk import, connected a new integration, or wrote a script that calls your API in a tight loop.

## Why shared systems make this inevitable

Most early-stage products are multi-tenant: every customer shares the same servers, the same database and the same background workers. That is the right choice. It is cheaper and simpler than giving each customer their own copy.

The trade-off is that shared resources have no idea who is using them. Without limits, the customer who sends the most work gets the most capacity, and everyone else waits. Small customers feel it first, because their normal, light usage suddenly gets slow for reasons they cannot see.

The risk grows with success. Your first enterprise-size customer often has ten or a hundred times the data of your average account. Their routine operations are someone else's outage.

## Where it usually starts

In the codebases I review, the same few paths cause most noisy-neighbor incidents.

### Bulk imports and exports

A customer uploads a large spreadsheet or asks for a full export. The work runs inside a web request or on the same workers that handle everyone's background jobs. It eats the database and the job queue for an hour.

### Public API without per-customer limits

You gave customers an API, which is good. But the only limit is the server's capacity. One customer's integration retries aggressively on errors, so a small problem becomes a flood. If you are still deciding whether to offer an API, [read this first](/post-should-you-build-an-api).

### Reports and searches over large accounts

A dashboard that is instant for a customer with 2,000 records takes a minute for a customer with 2 million, and it holds database resources the whole time. This is a close cousin of the [list page that loads every row](/post-list-page-loads-every-row).

### Webhooks and sync jobs

An integration partner sends a burst of events, or a sync job for one customer re-processes everything after an error. All of it lands on shared workers.

## The fixes, in the order I would do them

You do not need to rebuild into separate infrastructure per customer. Most of the benefit comes from a few targeted changes.

### 1. Measure load per customer

Before changing anything, add the customer or account ID to your logs and metrics for requests, background jobs and slow queries. Then you can answer the first question in any incident: who is causing this? Without it, every slowdown is a guessing game.

### 2. Add per-customer rate limits on the expensive paths

Put limits on API requests per customer, not just per server. Start generous, so normal customers never notice, and return a clear error with a retry hint when a limit is hit. Cloud API gateways support this directly; the AWS partner blog has a [worked example of per-tenant throttling](https://aws.amazon.com/blogs/apn/enabling-tiering-and-throttling-in-a-multi-tenant-amazon-eks-saas-solution-using-amazon-api-gateway) using usage plans and per-tenant keys. Whether you use a gateway or a few lines in your app matters less than having the limit.

### 3. Move heavy work off the web request

Imports, exports, large reports and bulk updates should run as background jobs, not inside the request. The user gets a "we will email you when it is ready" message instead of a spinner that ties up a server.

### 4. Make the queue fair

Moving work to a queue only helps if one customer cannot fill it. Simple approaches: cap how many jobs one customer can run at once, process large jobs in chunks, or give big bulk work its own lower-priority queue so it never blocks everyone's small, urgent jobs.

### 5. Set expectations in your plans

Once limits exist, write them into your pricing tiers and documentation. Larger customers who genuinely need more capacity can buy it. This turns a technical constraint into an honest commercial conversation instead of an outage.

## What it costs to fix

For a typical early-stage product, the first three steps are a few days to two weeks of focused engineering work, depending on how much heavy work currently runs inside web requests. Fair queuing and tiered limits are another week or two. These are judgment-based ranges from the teams I have worked with, not a benchmark.

Compare that with the cost of losing a few smaller customers because the app keeps slowing down, or of an enterprise customer's import taking the product down during a sales demo.

## When it is a sign of something bigger

Sometimes the noisy neighbor is a symptom of a deeper design issue: every customer's data in tables with no account-level indexes, reports computed on every page load, or no way to tell which customer a job belongs to. If you cannot answer "who caused the last slowdown" within an hour, the gap is observability and data design, not just limits. It is also worth checking [what keeps each customer's data apart](/post-tenant-isolation-by-memory) while you are in there.

A short outside review can tell you whether limits and queues are enough or whether a bigger change is coming. Our [technical teardown](/teardown) looks at exactly these shared paths.

## FAQ

### What is a noisy neighbor in SaaS?

It is when one customer's heavy usage of shared servers, databases or queues slows the product down for other customers. It is normal in multi-tenant products and is managed with per-customer limits, fair queues and monitoring.

### Do we need separate infrastructure for big customers?

Usually not at first. Per-customer limits and fair background queues handle most cases. Dedicated infrastructure for a few very large customers can make sense later, and it should be priced into their contract.

### Will rate limits annoy our customers?

Not if they are set well above normal usage and return clear errors. Most customers never hit them. The ones who do are usually running scripts or integrations that should be paced anyway.

### How do I know if we have this problem?

Look at your last few slowdowns. If several customers complained at once and the cause turned out to be one account's activity, you have it. If you could not find the cause at all, you probably have it and cannot see it yet. [Book a call](/book-a-call) if you want help working out which.
