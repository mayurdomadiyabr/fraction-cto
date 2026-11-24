---
title: One slow vendor API froze your whole app
slug: slow-vendor-api-froze-your-app
date: '2026-11-24T02:37:51.129Z'
category: Pattern recognition
excerpt: >-
  Why one third-party API getting slow can take your entire product down, and
  the timeout, retry and isolation rules that keep it contained.
description: >-
  Why a slow third-party API can freeze your whole app, and the timeout, retry
  and isolation rules that keep one vendor's bad day contained.
author: The founder of Fraction
readTime: 5
draft: false
---

A single slow vendor API can freeze your whole app when your code waits on it with no timeout. Each waiting request holds a worker, a database connection or a thread, and once all of them are waiting, healthy pages stop loading too. The fix is not a bigger server. It is a timeout on every outbound call, retries with limits, and keeping vendor calls off the path your customers wait on.

This is one of the most common outage patterns I see in early products, and it is confusing the first time it happens. Your own servers look fine. CPU is low. The database is fine. And yet nothing loads, because every worker is politely waiting for an address-lookup API or a CRM that has gone slow, not down.

## Why slow is worse than down

When a vendor is fully down, its calls fail fast. You get an error in a few milliseconds and your code moves on, maybe showing a message. When a vendor is slow, its calls hang. That is the dangerous case.

Here is the arithmetic. Say your app server can handle 20 requests at once. A normal vendor call takes 200 milliseconds. Today it takes 30 seconds. Every request that touches that vendor now holds one of your 20 slots for 30 seconds instead of a fifth of a second. Within a minute of normal traffic, all 20 slots are waiting on the vendor, and the request for your pricing page, which never calls the vendor at all, queues behind them. From the customer's view, your whole product is down.

### The default is usually "wait forever"

Many HTTP libraries do not set a timeout unless you ask. Python's popular requests library is the classic example: its own documentation states that requests do not time out unless you set a timeout explicitly ([Requests docs on timeouts](https://requests.readthedocs.io/en/latest/user/advanced/#timeouts)). Other libraries have defaults measured in minutes, which is just as bad for a web request. If your engineer has never set one, assume you have none.

## The rules I put in place

None of these is exotic. Together they turn "the vendor had a bad hour" into "one feature was degraded for an hour".

### 1. Every outbound call gets a timeout

Pick a timeout for each vendor based on what the call is for, not a single global number. As a rule of thumb from what I see:

- **Inside a page load the customer is waiting on:** 2 to 5 seconds at most.
- **Inside a background job:** 10 to 30 seconds is usually fine.
- **File transfers or exports:** longer, but with a separate connect timeout of a few seconds so a dead host fails fast.

Set both a connect timeout (how long to wait to reach the server) and a read timeout (how long to wait for an answer). Many teams set one and forget the other.

### 2. Retries have a limit and a pause

Retrying a slow vendor immediately, three times, from every request, triples the load on a service that is already struggling, and triples how long your own workers wait. Retries should be few (two or three), spaced out with an increasing pause, and only for errors that might succeed on a second try. A validation error will fail every time; retrying it just wastes the slot.

### 3. Move vendor calls off the customer's path

The strongest fix is structural. If sending a lead to your CRM, enriching a signup or posting to a chat tool does not need to finish before the customer sees the next screen, do it in a background job. The page responds instantly and the job retries quietly. If you do not have background jobs yet, [whether you need a job queue](/post-do-you-need-a-job-queue-yet) covers when cron is enough and when it is not. And once you do, make sure [failed background jobs actually alert someone](/post-background-jobs-fail-silently).

### 4. Decide what the product does without the vendor

For each vendor, write one line: "if this is unavailable, we will ...". Show a cached value. Skip the enrichment and fill it in later. Hide the widget. Let the order through and verify the address afterwards. This is a product decision, not an engineering one, which is why founders should make it. I go through the AI-provider version of this in [planning for an AI provider outage](/post-ai-provider-outage-fallback).

### 5. Stop calling a vendor that keeps failing

Once you have more than a handful of vendors, add a simple circuit breaker: after a run of failures, stop calling that vendor for a short period and go straight to the fallback. It protects your workers and gives the vendor room to recover.

## How to find out if you are exposed

Ask your engineer for a list of every third-party API the app calls during a customer request, with the timeout set on each. In most teardowns the first version of that list has blanks in the timeout column. Each blank is a way for someone else's bad day to become yours.

A useful test: in staging, point one vendor's URL at a test endpoint that waits 60 seconds before answering, then load the app. If unrelated pages slow down, you have found the problem before your customers did.

When it does happen in production, the symptom is a vendor slowdown that looks like your outage, and vendors will often say their status page is green. That conversation goes better if you have your own timing data, which is part of why I recommend logging the duration of every outbound call. It also helps when [two vendors start blaming each other](/post-vendors-blaming-each-other).

## FAQ

### What timeout should I use?

Start from what the customer is waiting for. For anything inside a page load, a few seconds is the ceiling, because a customer who waits longer has usually left. Background work can wait longer. Measure the vendor's normal response time and set the timeout at several times that, not at the maximum anyone has ever seen.

### Will timeouts make errors show up more often?

Yes, and that is the point. A timeout turns a hidden hang into a visible, handled error. You then decide what to show the customer instead of letting the whole app stall.

### Is this only a problem for big apps?

No. Small apps are more exposed, because they run on fewer workers. A product on one small server with a handful of workers can be frozen by a single slow vendor in under a minute.

### Can a fractional CTO fix this without rewriting the app?

Usually. Adding timeouts and moving two or three calls into background jobs is often a week of work, not a rewrite. If you want help finding the risky calls, a [technical teardown](/teardown) maps them, and our [pricing page](/pricing) explains how the engagements work.
