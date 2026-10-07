---
title: 'Build outbound webhooks yourself, or buy delivery?'
slug: build-webhooks-or-buy
date: '2026-10-07T02:44:12.815Z'
category: Decisions
excerpt: >-
  Sending a webhook is one HTTP call. Delivering it reliably needs signing,
  retries, and logs. When to build and when to buy.
description: >-
  Build webhook delivery in-house or buy a service like Svix? What a homegrown
  version needs and the signals it is time to buy.
author: The founder of Fraction
readTime: 5
draft: false
---

A customer asks to be notified when an order ships, so an engineer adds a loop: when the event happens, POST some JSON to the customer's URL. It works in the demo. Six months later you have fifty customers on webhooks, one of their endpoints has been returning errors for nine days, events are being dropped silently, and an enterprise prospect's security team wants to know how payloads are signed.

Short answer: you can build outbound webhooks yourself if you have a handful of customers using them and you implement signing, retries with backoff, and a delivery log from the start. Buy a webhook delivery service once webhooks become a feature customers depend on, typically when you have dozens of consuming endpoints, enterprise buyers asking about delivery guarantees, or engineers spending real time debugging failed deliveries.

## Sending a webhook is easy. Delivering one is not.

The first version is a single HTTP request. The production version has to handle everything that can go wrong on the other side of that request, which you do not control:

- The customer's endpoint is down, slow, or returns errors for hours or days.
- Their endpoint is fast but processes events out of order.
- They receive the same event twice and charge their customer twice.
- Someone spoofs a webhook to their endpoint pretending to be you.
- A misconfigured URL points at an internal address, and your server makes requests into places it should not.
- They ask "did you send event X at 14:02?" and you have no record.

Each of those is a support ticket at best and a security incident at worst. If you are still deciding whether customers need a full API at all, webhooks are often the lighter answer; we covered that trade-off in [should you build an API](/post-should-you-build-an-api). This post is about doing webhooks properly once you have committed.

## The minimum a homegrown version needs

If you build, do not ship without these.

### Signing

Sign every payload so receivers can verify it came from you. The open Standard Webhooks specification, backed by contributors from several companies that send webhooks at scale, describes a sensible approach: an HMAC-SHA256 signature over the message id, a timestamp, and the raw body, sent in headers, with support for more than one active secret so keys can be rotated without downtime. Following an existing specification means your customers can use published libraries to verify instead of reading your custom docs.

### Retries with backoff, off the request path

Send from a background queue, never inline in the user's request. Retry failures with exponential backoff over hours, not seconds, and stop eventually. If you do not have a queue yet, read [do you need a job queue yet](/post-do-you-need-a-job-queue-yet); webhooks are one of the clearest reasons to add one.

### An event id and a delivery log

Give every event a unique id so receivers can drop duplicates. Record every attempt: event, endpoint, status code, response time, attempt number. Without that log, every "we never got it" turns into guesswork.

### Protection against bad URLs

Validate customer-supplied URLs and block requests to private and internal address ranges. Otherwise your webhook sender becomes a way to probe your own network.

### Failure handling that someone sees

When an endpoint has failed for a long time, disable it and tell the customer, rather than retrying forever or dropping events quietly. Silent failure here is the same pattern as [background jobs that fail silently](/post-background-jobs-fail-silently), just with a customer on the other end.

That list is a few weeks of careful engineering for a small team, plus ongoing maintenance. For a handful of integrations it is reasonable.

## When to buy

Webhook delivery services, Svix being a well-known example alongside several others, sell the whole list above plus a customer-facing portal where your customers can add endpoints, see delivery attempts, and replay failed events themselves. That portal is the part teams underestimate. It turns "email support to ask what happened" into self-service.

Buy when two or more of these are true:

- Dozens of customer endpoints, or volume that makes the delivery log a real data store.
- Enterprise buyers asking about signing, retries, and delivery guarantees in security reviews.
- Support tickets about missed or duplicate webhooks showing up weekly.
- An engineer has become the unofficial webhook person.

The fee is usually small next to the engineer time it replaces. As with any vendor, model pricing at ten times today's volume before signing.

## What stays your job either way

Buying delivery does not design your events. You still decide:

- **Event names and payload shape.** Treat them like a public API. Changing a field breaks customer integrations you cannot see. Version payloads and announce changes.
- **What goes in the payload.** Send the minimum. Some teams send only ids and let receivers fetch details through the API, which keeps sensitive data out of logs on both sides.
- **Ordering promises.** Most systems do not guarantee order. Say so in your docs and include timestamps so receivers can reconcile.

Keep the vendor behind one internal function, `publish_event(type, payload)`, so you can change providers or bring delivery back in-house without touching every caller. That is the same habit we recommend for any [vendor abstraction](/post-vendor-abstraction-layer).

## A reasonable path for most startups

1. First integration: build it, with signing, a queue, retries, an event id, and a log. Follow the Standard Webhooks spec so you do not invent your own format.
2. Ten or more endpoints, or the first enterprise security question: price a delivery service and compare it with the engineer time you are spending.
3. Once customers depend on webhooks for their own workflows: buy, unless delivery reliability is itself part of what you sell.

If integrations are becoming a large part of your roadmap and you are unsure what to build versus buy, [book a call](/book-a-call). We also review webhook and integration design as part of a [technical teardown](/teardown).

## FAQ

### Do we need webhooks at all, or is an API enough?

An API lets customers pull data; webhooks push events to them as they happen. If customers are polling your API every minute to check for changes, webhooks will save both sides load and latency.

### How long should we retry a failed webhook?

A common pattern is exponential backoff over roughly a day, then marking the endpoint as failing and notifying the customer. The exact schedule matters less than being consistent and documenting it.

### Can a customer receive the same webhook twice?

Yes, with almost any at-least-once delivery system, yours or a vendor's. Include a unique event id and tell customers to ignore ids they have already processed.

### Is self-hosting an open-source webhook server a good middle ground?

It can be if you already run similar services comfortably. You save the fee and take on running, upgrading, and monitoring one more component.
