---
title: Do you need rate limiting yet? Your AI endpoint says yes
slug: api-rate-limiting-yet
date: '2026-11-23T04:16:54.857Z'
category: Knowing when
excerpt: >-
  Which endpoints need rate limits before launch, which can wait, and how to set
  the first numbers without blocking real customers.
description: >-
  When a startup needs API rate limiting: AI, SMS and login endpoints first,
  what to cap, how to set limits, and what can wait.
author: The founder of Fraction
readTime: 5
draft: false
---

You need rate limiting as soon as any endpoint costs you money per call, can be used to guess passwords, or can be hammered by one customer at everyone else's expense. For most products today that is before launch, because the login page, the signup form, and any AI or SMS feature all qualify. A full platform-wide policy can wait; limits on those few endpoints cannot.

Founders often think of rate limiting as something for large APIs with public developers. In the teardowns I do, the expensive incidents come from small products with one unprotected endpoint.

## Why this matters earlier than it used to

Rate limiting used to be about keeping servers up. Now it is mostly about keeping bills and accounts safe.

### Endpoints that cost money per call

Any endpoint that calls a paid service on each request is a direct line from an attacker's script to your card. The usual suspects:

- **AI features.** Every call to a model costs tokens. An unprotected "summarize this" or chat endpoint can be scripted to run all night.
- **SMS and voice.** One-time codes and phone verification are a classic target. I have written about [SMS pumping](/post-sms-bill-tripled-overnight) separately; the first defence is a limit per phone number, per IP, and per account.
- **Email sending, image processing, search, and third-party data lookups.** Anything metered.

OWASP's API security list calls this category [unrestricted resource consumption](https://owasp.org/API-Security/editions/2023/en/0xa4-unrestricted-resource-consumption/), and it explicitly includes the cost of paid third-party calls, not just server load.

### Endpoints that protect accounts

Login, password reset, signup, invite, and coupon or promo code redemption all need limits. Without them, credential stuffing and code guessing are only a matter of patience. These are usually the first findings in a security review, and among the cheapest to fix.

### One customer slowing everyone

In a shared system, one customer's runaway integration can saturate your database for every other tenant. That is a fairness problem as much as a security one, and it is covered in more depth in [when one customer slows everyone down](/post-one-customer-slows-everyone).

## When you can wait

You do not need a sophisticated, configurable rate limiting system at the start. It is fine to wait on:

- **Per-plan API quotas** for paying customers, until you have a public API and customers who integrate with it.
- **Global limits on cheap, read-only pages** that are already cached by your host or CDN.
- **Fancy algorithms.** A fixed window or token bucket per key is enough for a long time.

What you cannot wait on is a limit on the expensive and sensitive endpoints, plus a spending cap or alert on every metered vendor.

## What to put in place first

This is the order I recommend for an early product. Most of it is a day or two of engineering.

### 1. List your expensive and sensitive endpoints

Go through the routes and mark every one that either calls a paid service, sends a message, or touches authentication. For a typical early SaaS product the list is five to fifteen endpoints. That list is the scope.

### 2. Limit by the right key

Limit by IP for anonymous endpoints like login and signup, by account or API key for authenticated ones, and by target for messaging (per phone number, per email address). Limiting only by IP is weak, because attackers rotate addresses cheaply.

### 3. Use what your stack already has

Most hosting platforms, API gateways, and web frameworks have rate limiting built in or as a common add-on, often backed by a shared store like Redis so limits hold across several servers. Use that before writing your own. If you run behind a CDN or edge provider, its rules can stop the obvious abuse before it reaches your code.

### 4. Cap the bill, not just the requests

Set hard spending limits or budget alerts with every metered vendor: your model provider, your SMS provider, your cloud account. A rate limit protects one endpoint; a spending cap protects you from the endpoint you forgot. If a bill has already jumped, [the first-week playbook for a surprise bill](/post-surprise-usage-bill-first-48-hours) applies.

### 5. Return clear errors

When a limit triggers, return HTTP 429 with a `Retry-After` header and a plain message. Legitimate users and integrations can then back off politely, and your support team can tell a limit from a bug.

### 6. Log and watch

Log every limit hit with the key that triggered it. A sudden spike on the password reset endpoint is the earliest warning you will get of an attack, often days before the bill or the complaints arrive.

## Setting the numbers

There is no correct number, but there is a sensible way to start. Look at real usage for each endpoint, take the busiest legitimate user, and set the limit at a few times that. For login, a handful of attempts per minute per account and per IP is a common starting point. For AI endpoints, set a per-account daily budget in tokens or calls that matches what your pricing assumes a customer uses.

Then watch what gets blocked for a week. If paying customers hit the limit, raise it for them. If nobody legitimate comes close, you can tighten it. Treat the first numbers as a draft.

## The leadership question underneath

Rate limiting is a small engineering task. The reason it gets missed is that nobody owns the question "what is the worst thing someone could do with this endpoint?" In early teams that question belongs to whoever plays the CTO role, and it should be asked every time a feature calls a paid service.

If you want an outside check of which of your endpoints are exposed, a [teardown](/teardown) covers this. To talk about who should own these calls in your team, [book a call](/book-a-call).

## FAQ

### Do I need rate limiting before launch?

On login, signup, password reset, and any endpoint that costs money per call, yes. Everything else can usually wait until you have real traffic to learn from.

### Is a CDN or firewall enough?

It helps with crude, high-volume abuse, but it does not know your accounts or your costs. Per-account limits and vendor spending caps still need to live in your application and your vendor settings.

### What status code should a rate limit return?

HTTP 429 Too Many Requests, ideally with a `Retry-After` header so clients know when to try again.

### How do I rate limit AI features fairly?

Tie the limit to what the customer's plan pays for, usually a daily or monthly budget per account, and alert yourself well before any single account reaches a cost you would not want to absorb.
