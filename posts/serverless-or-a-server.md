---
title: Serverless or a server for your backend?
slug: serverless-or-a-server
date: '2026-09-02T02:38:35.651Z'
category: Decisions
excerpt: >-
  Serverless or a plain server for your backend? The honest answer depends on
  one number most founders never measure: how busy your machines actually are.
description: >-
  When serverless beats containers for an early-stage backend, and the
  duty-cycle number that decides it, from a fractional CTO.
author: The founder of Fraction
readTime: 5
draft: false
---

Serverless is not automatically cheaper than running a server, and running a server is not automatically simpler. The decision turns on one number that most founders have never measured: your duty cycle, meaning what fraction of the time your compute is actually doing work versus sitting idle waiting for the next request.

Get that number roughly right and the choice makes itself. Guess at it, and you either overpay for idle servers or get a surprise bill from a serverless platform running hot all day.

## The number that decides it

Serverless bills you for execution time. You pay only while your code runs. That is a spectacular deal for spiky, low-volume, or bursty workloads, the exact shape of most early-stage traffic. A background job that runs for two minutes a day costs cents on serverless and would cost real money as a container running around the clock. Under light load, serverless commonly wins by a wide margin.

A server, or a container running continuously, bills you by the hour whether it handles one request or ten thousand. That is wasteful at low volume and a bargain at high, steady volume. Once your machines are busy most of the time, paying a flat hourly rate beats paying per invocation, and the crossover is not subtle. Published comparisons put the flip somewhere around tens of thousands of invocations per day, or roughly a 40 to 50 percent duty cycle, though your exact numbers depend on execution time and memory. The precise threshold matters less than the principle: idle machines favor serverless, busy machines favor a server.

For a pre-seed to Series A product still finding traction, traffic is almost always spiky and low. That is why serverless is the right default early. You are not paying for idle capacity, you get no servers to patch, and you scale to zero when nobody is using the product at 3am.

## What serverless actually costs you later

The bill is only one axis. Serverless carries real constraints that show up as you grow.

Cold starts add latency when a function has been idle and has to spin up. For a background job nobody is waiting on, that is invisible. For a user-facing request on the critical path, it can be the difference between a snappy and a sluggish app. There are ways to keep functions warm, but they erode the pay-only-for-what-you-use advantage.

Execution limits are real. Long-running work, big batch jobs, and anything that streams for minutes fits awkwardly into a per-invocation model. Local development and debugging are also harder, because you are simulating a distributed event system on your laptop instead of running a process you can attach to.

Most importantly, there is a portability question. Deep serverless setups tie you to one cloud's specific primitives. Migrating off later is real work. That is a reasonable trade at the start, but it is a trade, and you should make it with open eyes rather than by accident.

## The pattern that actually works

The mistake is treating this as a permanent, all-or-nothing decision. The teams that spend the least do neither pure serverless nor pure servers. They start serverless for everything, watch which paths get hot, and move only those hot paths to a container once the traffic justifies it. Migrating too early wastes engineering time on a problem you do not have. Migrating too late means months of overpaying and creaking latency. Both are expensive.

So measure. Once you are in production, look at how often each part of your system runs and for how long. The steady, high-volume paths are your candidates to move to a server. Everything spiky and occasional stays serverless. A mixed setup, servers for the always-on core and serverless for sporadic jobs, routinely lands cheaper than committing fully to either.

This is the same discipline I bring to any [premature scaling decision](/post-premature-scaling): do not buy infrastructure for a load you cannot yet demonstrate. And it connects directly to the [Kubernetes question](/post-do-you-need-kubernetes-yet-probably-not), which is the same trap one layer up. Most early teams reaching for heavy orchestration are solving for a scale they do not have, at the cost of the shipping speed they need right now.

## How I would decide today

If you are early, spiky, and small, default to serverless and stop agonizing. You will not overpay, you will not babysit servers, and you will scale to zero when idle. Keep one thing in a document: the specific workloads you would move to a container if a particular path gets hot or if cold-start latency starts hurting users. That list turns a scary rewrite into a routine, planned move.

If you already have steady, predictable, high-volume traffic, or long-running jobs that fight the serverless model, run a server or a container for the busy core and keep serverless for the edges. Do not let anyone sell you a full orchestration platform until your load data demands it.

The wrong move is picking an architecture off a conference talk. Pick it off your own duty-cycle numbers, and revisit when those numbers change.

## FAQ

### Is serverless always cheaper for a startup?
No. It is cheaper for spiky, low-volume, or bursty workloads, which describes most early traffic. Once your compute runs busy most of the day, a flat-rate server or container usually costs less. The deciding factor is your duty cycle, not the label.

### What is a duty cycle and how do I measure it?
It is the fraction of time your compute is actively working versus idle. You measure it in production by looking at how often each service runs and for how long. Low utilization favors serverless; high, steady utilization favors a server.

### When should we move a workload off serverless?
When a specific path gets consistently hot, when cold-start latency starts hurting user-facing requests, or when a job runs long enough to fight execution limits. Move that path to a container and leave the rest on serverless.

### Does serverless lock us into one cloud?
It can, if you lean heavily on one provider's proprietary primitives. That is an acceptable early trade for the speed and cost savings, but plan for it. If you want help weighing that lock-in against your roadmap, [book a call](/book-a-call).
