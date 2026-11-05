---
title: One cloud zone lost power. Would your app have stayed up?
slug: one-cloud-zone-went-down
date: '2026-11-05T14:53:33.601Z'
category: Decisions
excerpt: >-
  A power event in one Google Cloud London zone disrupted services for hours in
  October. How to check whether your app really survives losing a single zone.
description: >-
  A single-zone cloud outage hit London in October 2026. How a small startup can
  find its hidden single-zone dependencies and fix them for a modest cost.
author: The founder of Fraction
readTime: 7
draft: false
---

If your whole product runs in one cloud availability zone, a single power problem in one data center can take you offline for most of a working day. Most early startups are in that position without knowing it, because the defaults put everything in one zone. The fix is usually not multi-region. It is making sure the few things that must stay up, especially your database, are spread across zones in the region you already use, and then testing that it works.

## What happened in October

On 20 October 2026, Google Cloud reported an outage in its London region. Google's [status page attributed it](https://status.cloud.google.com/incidents/ETJGhvY9Xaktw7tgi8dF) to a power event within the europe-west2-b zone, one of the region's three zones. Reports put the start a little after 06:00 UTC, with power mitigated around 11:30 UTC, and some customer services took longer to recover than that.

Revolut was widely reported as one of the services disrupted that day, with users losing card payments, transfers and sign-ins for hours. [The Stack reported](https://www.thestack.technology/google-cloud-incident-knocks-revolut-offline/) the disruption and the link to the Google incident. As far as I have seen, neither company has published a full analysis of exactly what failed inside Revolut's systems, so I will not guess at it.

The lesson for a small startup does not depend on those details. A cloud region is built from separate zones precisely so that one of them can fail without taking down everything. If a single zone failing can still take you down, something in your setup is pinned to that zone.

## Why most startups are single-zone without choosing to be

Nobody sits down and decides to run in one zone. It happens through defaults:

- **The database was created with the default settings.** On most providers, a managed database starts as a single instance in a single zone. High availability with a standby in a second zone is a setting you have to turn on, and it roughly doubles the database cost.
- **One server, or one small cluster, in one zone.** The first VM or Kubernetes cluster was created in whatever zone the console suggested.
- **Zonal disks.** Block storage volumes are usually tied to one zone. A server can move; its disk often cannot, without a snapshot and restore.
- **Shared networking pieces.** On AWS, for example, a NAT gateway lives in one availability zone. If every private subnet routes through one NAT gateway, losing that zone cuts off outbound traffic for workloads in the healthy zones too.
- **The cache, the queue, the search index.** A single-node Redis or a self-hosted queue on one VM quietly becomes a dependency that every request touches.

Each of these is a reasonable choice at launch. The problem is that nobody revisits them once there are paying customers.

## How to find your single-zone dependencies in an afternoon

You do not need a big architecture review to answer this. Have your engineer, or your agency, walk the request path for your most important action, such as a customer logging in and completing a payment, and write down every component it touches. For each one, answer two questions: which zone is it in, and what happens if that zone disappears?

A simple table is enough:

| Component | Where it runs | If that zone fails |
| --- | --- | --- |
| Load balancer | Regional | Keeps serving |
| App servers | 2 instances, zone a only | Down |
| Postgres | Single instance, zone a | Down, needs restore |
| Redis | 1 node, zone a | Sessions lost |
| Outbound NAT | Zone a | Workers cannot reach APIs |

The rows that say "down" are your real exposure. In most early-stage products I review, there are only two or three of them, and the database is almost always one.

If nobody on the team can fill in the table with confidence, that is the finding. It usually means the infrastructure was set up once and never documented, which is worth fixing regardless. A [technical teardown](/teardown) covers exactly this kind of question.

## What to fix first

### The database

This is the highest value change. Turning on the provider's high-availability option (Multi-AZ on AWS RDS, the high availability configuration on Google Cloud SQL, zone-redundant options on Azure) gives you a standby in another zone with automatic failover. Expect the database bill to roughly double, and expect a brief interruption during a failover, usually measured in tens of seconds to a couple of minutes rather than hours.

Do not confuse this with read replicas. A read replica in another zone helps with load, but it does not necessarily fail over automatically unless you configure and test promotion.

### App servers

Run at least two instances across two zones behind a regional load balancer, using a managed instance group, autoscaling group or a regional Kubernetes cluster. If your app keeps state on local disk, such as uploaded files, move that state to object storage first, because object storage is regional by default on the major clouds.

### The small shared pieces

Give each zone its own NAT gateway if you are on AWS and outbound traffic matters. Use a managed cache with replication across zones if sessions or rate limits depend on it, or design the app to survive a cache loss by falling back to the database.

### Backups

Zone redundancy protects against a zone failing. It does not protect against a deleted table, bad migration or compromised account. Keep tested backups, and keep at least one copy outside the main account. I covered that separately in [backups outside your cloud provider](/post-backups-outside-your-cloud-provider).

## What it costs, honestly

For a typical seed-stage SaaS on one region, the extra cost of zone redundancy is mostly the database standby plus one more app instance. As an illustration only, if your current production bill is $1,500 a month with $500 of it on the database, a reasonable multi-zone setup might take you to roughly $2,200 to $2,600. The engineering time is usually a few days if the infrastructure is defined as code, and more if it was clicked together in the console.

Compare that with what a five-hour outage costs you: refunds, support load, a churned customer, a bad week for sales. If you have contractual uptime promises, the comparison is easier still; see [your contract promises 99.99% uptime](/post-sla-promise-vs-architecture) for how to check whether the architecture can actually deliver it.

## When multi-zone is not worth it yet

Be honest about where you are. If you are pre-revenue, have a handful of pilot users, and a few hours of downtime would be an inconvenience rather than a loss, staying single-zone with good backups and a written recovery plan is a defensible choice. Spend the money on product instead, and revisit when customers depend on you during their working day.

Multi-region is a much bigger step with much higher cost and complexity, and most startups do not need it for a long time. I wrote about that decision in [do you need multi-region deployment yet](/post-do-you-need-multi-region-yet). Multi-zone is the step before it, and it is the one most teams skip.

## Test it, or it does not count

A setup that has never failed over is a guess. Once the changes are in:

1. Trigger a database failover deliberately, in a quiet hour, and time how long the app is affected.
2. Stop the app instances in one zone and confirm traffic continues.
3. Write down what happened and what surprised you.

The first test almost always finds something: a hard-coded database host, a connection pool that does not reconnect, a background worker that was only ever deployed to one zone. That is the point of testing.

If you want an experienced person to look at your setup and tell you which of these matter for your stage, that is a normal part of a fractional CTO engagement. See [pricing](/pricing) or [book a call](/book-a-call).

## FAQ

### What is the difference between a region and a zone?

A region is a geographic area, such as London. A zone is one isolated location within that region, with separate power, cooling and networking. Regions usually have three or more zones, so that a failure in one does not take down the others.

### Is multi-zone the same as multi-region?

No. Multi-zone spreads your system across data centers in the same region, which protects against a single data center failing and is relatively cheap. Multi-region runs in separate geographic regions, which protects against a whole region failing but is far more complex and expensive.

### How much does multi-zone add to a startup's cloud bill?

It depends on the stack. For a typical small SaaS, the database standby is the main cost, often roughly doubling the database line, plus at least one extra app instance. Many teams see the total bill rise by a third to a half.

### Can my agency set this up?

Usually yes, but ask them to fill in the zone table first and to run a failover test afterwards. Turning on a setting is quick. Proving the app survives losing a zone is the part that matters.
