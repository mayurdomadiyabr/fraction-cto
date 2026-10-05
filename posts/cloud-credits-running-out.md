---
title: Your cloud credits run out in six months. Start now.
slug: cloud-credits-running-out
date: '2026-10-05T08:18:57.420Z'
category: Knowing when
excerpt: >-
  The cloud bill has been free since day one. What to do six months and three
  months before startup credits expire.
description: >-
  Startup cloud credits expiring soon? How to find your real bill, cut waste the
  credits hid, and decide on commits or switching providers.
author: The founder of Fraction
readTime: 5
draft: false
---

The startup credits from your cloud provider have paid the hosting bill since day one. Nobody on the team has looked at the real cost of the infrastructure, because the real cost has always been zero. Then someone opens the billing console and sees the expiry date: five months away. The monthly run rate, now visible for the first time, is larger than your largest salary.

The short answer: start working on it six months before the credits run out, not one. Find out what you will actually pay per month once credits end, compare it to revenue and runway, and cut the waste that credits hid. Most early-stage cloud bills have a large share of resources nobody needs any more. Do not panic-migrate to another provider for a fresh batch of credits unless the move is cheap and the numbers clearly justify it.

## Why credits hide the problem

Startup programs from the large cloud providers give meaningful credits, and they are a good deal. But they change behaviour. When the bill is free, nobody turns off the test environment from last spring, nobody questions the oversized database instance, and nobody notices that an AI feature is calling a managed model service thousands of times a day. Credits typically expire one to two years after they are issued, and the expiry is on a date, not when you feel ready.

The result is a cliff. One month the bill is zero; the next it is the full run rate. If that run rate was never in the financial model, it lands as a runway surprise.

## What to do six months out

### 1. Find the real monthly number

Your billing console shows what the credits are covering. Look at the last full month of usage at list price. That is your post-credit bill if nothing changes. Put it in the financial model now.

### 2. Break it down by what it serves

Group spend into a few buckets: production, staging and test environments, data and analytics, AI and model calls, and things nobody can explain. The last bucket is usually where the easy savings are.

### 3. Find the obvious waste

The common finds in early-stage accounts:

- Test and staging environments running around the clock at production size.
- Databases and servers sized for a launch spike that never came.
- Old snapshots, backups and storage buckets nobody reads.
- Logging and monitoring that keeps everything forever.
- Resources created by former employees or contractors that no one owns.

None of this needs a re-architecture. It needs someone to own the bill for a few weeks.

### 4. Look at the expensive services you chose because they were free

Credits make premium managed services feel costless. Some of those choices are right and worth paying for. Others were defaults. For each large line item, ask whether you would choose it at full price. My cost framework for that question is in [self-host or pay for managed](/post-self-host-or-managed).

## What to do three months out

### Decide on commitments carefully

Once you know your steady baseline, discounted pricing for committed usage can cut the bill noticeably. But committing before you have cleaned up locks in waste. Clean first, then commit only to the baseline you are confident about. I covered the tradeoffs in [should you sign a cloud commit](/post-cloud-commitment-decision).

### Set a budget alert and an owner

Every account should have a monthly budget alert and a named person who reads it. Without an owner, savings from a clean-up drift back within a quarter.

### Check what your gross margin looks like

Hosting cost per customer feeds straight into gross margin, and investors will ask about it. If your post-credit infrastructure cost per customer is high relative to price, that is a business question, not just an engineering one. See [your gross margin is a technical question](/post-gross-margin-technical-question).

## Should you switch providers for new credits?

It is tempting: another provider offers a fresh batch of credits, and the bill goes back to zero. Sometimes it is reasonable, if your system is simple, containerised and has few provider-specific services. Often it is not. Migration takes engineering weeks you could spend on product, introduces risk, and only delays the same cliff by another year or two. If you rely on managed databases, queues and AI services from your current provider, the move is a real project.

Run the numbers honestly: engineering time to migrate and stabilise, plus risk, against the credit value you will actually use before it expires. Credits you cannot use in time are not worth anything.

## The signs you need outside help

If nobody on the team can explain what half the bill is for, if the post-credit run rate threatens runway, or if the infrastructure was set up by an agency that is no longer around, a short outside review pays for itself quickly. That is the kind of thing our [technical teardown](/teardown) covers, and the [pricing](/pricing) page explains how a fixed-scope review works. If you just want a second opinion on the numbers, [book a call](/book-a-call).

## FAQ

### When should we start planning for credits running out?

About six months before expiry. That leaves time to clean up, test changes safely, and decide on commitments without rushing.

### How much can a clean-up typically save?

It varies too much to promise a number. Accounts that were never reviewed often have obvious waste in idle environments, oversized instances and old storage. Measure your own breakdown before estimating.

### Should we apply for more credits?

If you qualify for a higher tier with your current provider, for example after raising from an investor that participates in a provider program, it is worth checking. Moving providers just for credits is rarely worth the engineering cost.

### Who should own the cloud bill at a seed-stage startup?

One named engineer, with a monthly review alongside a founder. It does not need to be a full-time role. It needs to be someone's job.
