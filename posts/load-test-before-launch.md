---
title: Do you need a load test before your launch?
slug: load-test-before-launch
date: '2026-11-16T02:24:12.219Z'
category: Knowing when
excerpt: >-
  When load testing is worth it for an early product, what to test in what
  order, and what usually breaks first.
description: >-
  When an early startup should load test before launch, the three tests that
  matter, and the bottlenecks that break first.
author: The founder of Fraction
readTime: 6
draft: false
---

You need a load test before a launch only when you expect a sudden, predictable spike: a Product Hunt day, a press hit, a big customer rollout, a TV or influencer mention, or a migration that moves every user at once. For steady, organic growth, good monitoring and a cheap smoke test usually beat a formal load-testing project. The point of the test is not a big number to put on a slide. It is finding the first thing that breaks while you still have time to fix it.

Most early products do not fall over because the code is slow. They fall over because one specific thing runs out: database connections, a third-party rate limit, a background queue, or the free tier on a service nobody remembered was on a free tier.

## When a load test earns its cost

These are the situations where I push founders to test before the date, not after.

- **A dated traffic event.** Launch day, a demo day, a newsletter feature, a paid campaign with a big budget. You know the day, so you can rehearse it.
- **A large customer going live.** An enterprise rollout that adds thousands of users on a Monday morning is a spike, even if your total user count still looks small.
- **A migration or re-platform.** Moving to a new database, host or framework changes your performance profile in ways nobody has measured yet.
- **Usage-shaped pricing or SLAs.** If you have promised a customer uptime or response times, you should know where your limits are before they find them.
- **A recent outage under load.** If you went down once, test the fix before the next spike proves it does not work.

If none of those apply and traffic is growing a few percent a week, you are usually better served by watching real metrics and fixing what they show. I covered the related trap of [scaling before you need to](/post-premature-scaling), and heavy load testing for traffic that may never come is a version of it.

## What to test, in order

The Grafana k6 documentation lays out a useful ladder of [load test types](https://grafana.com/docs/k6/latest/testing-guides/test-types/), from tiny smoke tests up to stress, spike, soak and breakpoint tests. For an early startup, three rungs are enough.

### 1. A smoke test

A handful of simulated users for a minute or two, against your most important flows: sign up, log in, the core action, checkout if you have one. This catches broken scripts and obvious errors, and it is cheap enough to run whenever those flows change.

### 2. An expected-peak test

Estimate your peak honestly, then test at two to three times that. If you think launch day brings 2,000 visitors in the first hour, model the share who sign up and use the core action, and simulate that rate. The multiplier is a rule of thumb, not a benchmark; it covers the fact that launch estimates are usually wrong.

### 3. A spike test

Go from near zero to your peak in seconds rather than minutes. Real launches look like this: a post goes live and everyone arrives at once. Spike tests often surface auto-scaling that reacts too slowly and connection pools that fill instantly.

Soak tests (hours at steady load) and breakpoint tests (raise load until something fails) are useful later. Most seed-stage teams do not need them for a launch.

## What usually breaks first

From the products I have looked at, the first failure is rarely where the founder expects.

- **Database connections.** Serverless functions or many app instances each open connections until the database refuses new ones. A connection pooler often fixes it.
- **Third-party limits.** Email providers, AI APIs, payment providers and SMS gateways all rate limit. Your code can be fast and still fail because a vendor says no.
- **One slow query.** A dashboard or search query that is fine with ten rows becomes the bottleneck at ten thousand. If one customer's data already slows things down, see [when one customer slows everyone](/post-one-customer-slows-everyone).
- **Background jobs.** Welcome emails, imports and webhook processing pile up in a queue that drains slower than it fills.
- **Plan limits.** Free or starter tiers on hosting, databases or auth providers with hard caps on requests or users.

Write down which of these you checked. That list is more useful than the test results themselves.

## How to run it without a big project

You do not need a performance team. A sensible engineer can do a useful round in two to four days.

1. **Pick the three to five flows that matter on launch day.** Not every endpoint.
2. **Test against a production-like environment**, with realistic data volume. Testing an empty staging database tells you little.
3. **Use an open-source tool.** k6, Locust and Artillery are all common choices. Pick whichever your team can script fastest.
4. **Watch the system, not just the tool.** Database CPU and connections, error rates, queue depth and third-party responses tell you why something failed.
5. **Fix the first bottleneck, then rerun.** The second bottleneck is often hiding behind the first.
6. **Tell your vendors.** If you expect a large spike in email, SMS or AI calls, ask for a temporary limit increase in advance. Some providers need days.

Never point a load test at a third-party API or a system you do not own without permission. Mock or stub external calls where you can, and test them separately against their documented limits.

## The launch-day plan matters as much as the test

A load test tells you where the edges are. The plan tells you what to do when you hit one anyway.

- A way to turn off non-essential features quickly, such as heavy dashboards or AI extras.
- A waitlist or queue page you can switch on if sign-ups outrun capacity.
- Someone awake and watching during the spike, with access to scale things up. If you do not yet have a rotation, see [when you need on-call](/post-when-do-you-need-on-call).
- A simple place to tell users what is going on, if you have one, like a [status page](/post-do-you-need-a-status-page-yet).

A launch that slows down gracefully and recovers is fine. A launch that silently drops sign-ups is the one that hurts.

## FAQ

### How many users should we simulate?

Start from your honest peak estimate for the busiest hour, convert it into actions per second on your key flows, and test at two to three times that. Simulating a million users when you expect two thousand is wasted effort.

### Can we load test production?

Sometimes, carefully, in a quiet window and with your vendors' limits in mind. Many early teams test a production-sized copy instead. Either way, make sure test data cannot reach real customers or trigger real emails and payments.

### Is load testing needed for a B2B product with a few customers?

Usually not as a project. A smoke test on core flows plus monitoring is enough until a large customer rollout or a migration is coming.

### What does a load test cost?

Mostly engineering time, typically a few days for a first round, plus some cloud cost for the test environment. The open-source tools are free.

If your launch date is close and you are not sure where your system will break, a [technical teardown](/teardown) can find the weak points quickly, or you can [book a call](/book-a-call) to walk through your launch plan.
