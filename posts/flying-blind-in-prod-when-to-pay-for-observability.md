---
title: Flying blind in prod? When to pay for observability
slug: flying-blind-in-prod-when-to-pay-for-observability
date: '2026-07-22T11:59:11.998Z'
category: Decisions
excerpt: >-
  You only notice monitoring when something breaks. The three cheap tools that
  stop the guessing, and when a full platform is worth its bill.
description: >-
  When to pay for observability: the three cheap tools that stop the guessing
  and when to graduate to a full platform.
author: The founder of Fraction
readTime: 5
draft: false
---

Something breaks in production, a customer tells you before your systems do, and you spend an hour grepping logs on a server trying to reconstruct what happened. That is the moment founders decide to "invest in observability," and it is also the moment they are most likely to overbuy. The full-featured monitoring platforms are extraordinary and extraordinarily expensive, and the version you need to stop flying blind costs a fraction of what a sales demo will quote you.

Here is how I think about when to spend and how much.

## The three things you actually need first

Observability is a big word for a simple goal: when something goes wrong, you can find out what and why without guessing. At the early stage, three cheap capabilities cover most of the value.

### Error tracking

You need to know a request failed the moment it fails, with a stack trace and the context around it, pushed to you rather than waiting to be discovered. A dedicated error-tracking service does this and most have a free or near-free tier for low volume. This is the single highest-return thing to add first.

### Structured logs you can search

Logs printed to a server you have to SSH into are barely better than nothing. Logs shipped to a searchable place, with a request id you can trace across services, turn a one-hour investigation into a two-minute query. You do not need a premium platform for this at low volume.

### One uptime check

A basic external check that pings your app every minute and alerts you when it is down closes the "customer told me first" gap. It costs almost nothing and it is the difference between reacting in minutes and reacting in hours.

If you have those three, you are no longer flying blind, and you have spent very little. That is usually the right altitude before you have real traffic, in the same way you [right-size how much testing you need before you have users](/post-how-much-testing-early).

## The trap: buying the enterprise platform too early

The leading observability platforms are priced per host, per feature, and per gigabyte, and it adds up fast. Infrastructure monitoring commonly starts around 15 dollars per host per month, application performance monitoring around 31 dollars per host, and logs at roughly 10 cents per gigabyte indexed on top of ingestion fees. Individually small, collectively not.

A concrete picture from the mid-market: a company with 100 engineers and 50 services can pay in the neighborhood of 10,000 dollars a month, over 120,000 dollars a year, once you total infrastructure, containers, custom metrics, logs, application traces, and synthetic monitoring. And these bills are not static. They are growing 30 to 50 percent year over year for many teams, because usage creeps and every new service adds telemetry. If your product runs AI workloads, brace yourself: those can generate 10 to 50 times more telemetry than a traditional service, and the log bill tracks that volume.

None of that means the premium platforms are a bad buy. It means they are a buy for a specific stage: enough services and enough engineers that a unified view across logs, metrics, and traces genuinely saves more time than it costs. Buying it at five engineers is paying enterprise prices to watch three services, which is the same premature reflex as [committing to a cloud spend](/post-cloud-commitment-decision) before your usage justifies it.

## When to graduate

Move up to a full platform when the cheap tools stop being enough: you have enough services that correlating a failure across them by hand is painful, you are diagnosing performance problems that need distributed traces, and you have someone who will own the tooling and, critically, control the cost. Watch the bill like a hawk, because the fastest-growing line on it is often telemetry you are not even looking at.

## Set a budget before you set up dashboards

The single best guardrail is to decide, in advance, what observability is worth to you as a percentage of your infrastructure spend, and then hold the line. Teams that skip this step wake up to a monitoring bill that rivals the cost of the systems it is watching, which is absurd but common. The platforms make it easy to happen because every default is tuned to capture more.

Treat the setup as a series of deliberate opt-ins, not a firehose you turn on and forget. Add error tracking, confirm it earns its keep, then add searchable logs, then an uptime check, and stop there until a real gap forces the next step. When you eventually move to a full platform, put one person in charge of the bill with the authority to cut retention, drop noisy custom metrics, and sample high-volume traces. Visibility you cannot afford is not visibility, it is a liability with a nicer dashboard.

## FAQ

### Isn't it risky to run without full monitoring?

The risk is running with no visibility at all, not with modest visibility. Error tracking, searchable logs, and an uptime check cover the failures that actually hurt an early product. The premium features address problems most small teams do not have yet.

### How do I keep an observability bill from exploding?

Control what you ingest and retain. Most bill shock comes from high-cardinality custom metrics, indexed logs you never query, and long retention windows. Sample aggressively, keep only what you search, and shorten retention. The default settings on these platforms are tuned to maximize your bill, not your value.

### We are adding AI features. Does that change the math?

Yes, and it argues for restraint. AI workloads emit far more telemetry per request, so an aggressive monitoring setup will grow your bill much faster than a traditional app would. Start with error tracking and targeted logging around the AI calls, measure the volume, and only then decide what deeper monitoring is worth. If you want help drawing that line, [book a technical call](/book-a-call).
