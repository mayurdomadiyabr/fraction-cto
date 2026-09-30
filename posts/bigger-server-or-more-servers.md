---
title: Your server is maxed out. Bigger box or more boxes?
slug: bigger-server-or-more-servers
date: '2026-09-30T04:28:27.035Z'
category: Decisions
excerpt: >-
  After a slowdown, the instinct is a load balancer and autoscaling. Why early
  teams should usually scale up first, and when scaling out is right.
description: >-
  Vertical vs horizontal scaling for startups: find the real bottleneck, scale
  up first, and know when more servers is the right answer.
author: The founder of Fraction
readTime: 5
draft: false
---

The app got slow during your biggest week. CPU on the one production server sat near 100%, requests queued, and a few customers saw timeouts. The next morning your engineer proposes a plan: put the app behind a load balancer, run it on several smaller machines, add autoscaling. It sounds like the grown-up answer. Often it is the second-best one.

The short answer: at early stage, scale up before you scale out. Moving to a bigger machine is usually a same-day change that buys months of headroom, while running many servers forces you to solve sessions, file storage, background jobs and deployments across machines. Scale out when you need redundancy you cannot get from one box, or when you have genuinely outgrown the largest sensible machine.

## First, find what is actually saturated

Before choosing between bigger or more, confirm what ran out. "The server is slow" can mean four different things, and only one of them is fixed by more app servers.

- **CPU on the app server.** Application code is doing too much work per request. More or bigger servers both help.
- **Memory.** The process is swapping or being killed. A bigger machine helps directly; more machines only help if each one gets less load.
- **The database.** App servers wait on slow queries. Adding app servers makes this worse by sending more concurrent queries to the same database. The fix lives in the query or the database tier, which I covered in [index, replica, or shard](/post-database-index-replica-shard).
- **An external dependency.** A slow third-party API is holding request threads. Neither option fixes it; timeouts and queues do.

Look at the metrics from the incident, not memory of it. If you have no metrics to look at, that is the first thing to fix, and it is cheaper than either scaling option. The tradeoffs of paying for monitoring are in [when to pay for observability](/post-flying-blind-in-prod-when-to-pay-for-observability).

## Why a bigger box is usually the right first move

Cloud providers make vertical scaling almost trivial. On most platforms you change the instance size and restart, sometimes with a minute or two of downtime you can schedule at night. Doubling CPU and memory roughly doubles the cost of that server, and for a seed-stage company that is often a difference of a few hundred dollars a month.

More importantly, nothing about your application has to change. Single-server applications quietly depend on being on one machine in ways that are easy to miss:

- **Sessions stored in memory** disappear when the next request lands on a different server.
- **Uploaded files written to local disk** exist on only one machine.
- **Scheduled jobs** run once per server instead of once in total, so the daily email goes out three times.
- **Caches** become inconsistent across machines.
- **Deployments** now have to roll across several servers without breaking in-flight requests.

Each is solvable, and a well-built app handles them anyway. But if yours does not, moving to many servers turns a capacity problem into a small re-architecture, under pressure, right after an incident.

## When more servers is the right answer

Scaling out is not wrong. It is the right move in specific situations, and you should recognize them.

### You need to survive losing a machine

One server is a single point of failure no matter how big it is. If a customer contract promises uptime, or an hour of downtime would cost you real revenue, you need at least two app servers behind a load balancer so one can fail or be replaced. Note that this is a reliability requirement, not a capacity one. Two modest servers can be the right answer even when one could carry the load. If your contract already promises more than your stack can deliver, read [the uptime promise your architecture cannot keep](/post-sla-promise-vs-architecture).

### Your load is spiky and predictable

If traffic is ten times higher for two hours a day, paying for a machine sized for the peak around the clock is wasteful. Autoscaling a pool of smaller servers can be cheaper, once the app is ready for it.

### You are near the top of the size range

Very large single machines exist, but price per unit of capacity eventually climbs, and you lose headroom to grow. If you are already on a large instance and still saturating it, the next step really is horizontal, or a hard look at why each request is so expensive.

## The practical sequence

For most early teams, the order that works is simple:

1. Measure what saturated during the incident.
2. If it was the app server, move to a bigger instance now and buy time.
3. In the next few weeks, make the app safe to run on two servers: external session store, object storage for files, a single scheduler for jobs.
4. Add a second server behind a load balancer for redundancy.
5. Add autoscaling only when load patterns justify it.

Step 3 is the one worth doing calmly rather than during an outage. It is also the kind of work that gets skipped when there is no technical lead, which is how teams end up adopting heavy tooling before they need it. If you are being pitched a container orchestrator as the fix, see [do you need Kubernetes yet](/post-do-you-need-kubernetes-yet-probably-not) first, and more broadly [premature scaling](/post-premature-scaling).

## FAQ

### Is vertical scaling a hack we will regret?

No. It is a legitimate, often permanent choice for products whose load fits on one large machine. Many profitable businesses run on a small number of big servers. Regret comes from skipping redundancy, not from choosing bigger machines.

### How much downtime does resizing a server cause?

On most cloud providers, resizing requires a stop and start, typically a few minutes. Schedule it at low traffic and tell customers if needed. Managed platforms sometimes do it with less interruption.

### Should we scale out the database the same way?

Usually not at first. Databases are much harder to run across several machines than stateless app servers. Scale the database up, fix the heavy queries, and add a read replica before considering anything more complex.

### What if the bigger box does not help?

Then the bottleneck was not where you thought, most often the database or an external call. That is useful information, and it is why measuring first matters.

If your team is debating a scaling plan after an incident and you want a neutral read on it, a [short call](/book-a-call) or a [technical teardown](/teardown) will usually settle it faster than another week of discussion.
