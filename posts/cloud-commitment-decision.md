---
title: Should you sign a cloud commit to cut the bill?
slug: cloud-commitment-decision
date: '2026-07-01T11:58:10.455Z'
category: Decisions
excerpt: >-
  Cloud providers will happily cut your bill by up to 72% if you commit for a
  year. That discount is a bet on a forecast you probably cannot make yet. Here
  is how to size it.
description: >-
  When a one-year cloud commitment is worth the discount for an early startup,
  and when the flexibility you give up costs more than you save.
author: The founder of Fraction
readTime: 4
draft: false
---

Somewhere between your first real invoice and your Series A, a cloud provider or a well-meaning advisor will suggest you sign a one-year commitment to cut your bill. The pitch is real: reserved capacity and savings plans can knock up to 72% off on-demand pricing. That number is large enough to make a cost-conscious founder sign quickly. It is also a bet, and the thing you are betting on is a usage forecast that most early startups cannot honestly make.

The decision is not "do I want to save money." Of course you do. The decision is whether the flexibility you give up is worth less than the discount you gain, and that depends entirely on how predictable your next twelve months actually are.

## What you are actually trading

A commitment is a swap: lower unit cost in exchange for a promise about future usage. Understanding both sides keeps you from optimizing the wrong one.

### The discount is real and it is large

On steady, predictable workloads, one-year and three-year commitments produce serious savings, and for a mature company with a flat baseline, not taking them is leaving money on the table. If you can look at a graph of your compute for the last six months and draw a straight line through it, a commitment on that baseline is close to free money.

### The flexibility you give up is also real

A commitment locks you to an instance family, a region, sometimes a specific configuration, for a year or three. Early startups pivot their architecture constantly: you move off a service, change your database, re-platform onto something serverless, or simply discover the workload you reserved for is not the workload you have six months later. When that happens, you are paying for capacity you no longer use, and the discount evaporates. This is the same shape as any other [decision you cannot cheaply undo](/post-reversible-decisions): easy to sign, expensive to unwind.

### Lock-in has a second-order cost

Deep commitments to one provider quietly raise the cost of ever leaving it. That is not automatically bad, but it is a real weight on a decision you might want to make later, and it belongs in the calculation rather than as a surprise you discover the day you consider a migration.

## How to size the decision

The honest version of this decision is arithmetic, and it turns on how much of your usage is genuinely predictable.

### Reserve only your floor, never your ceiling

The safe move is to commit to your baseline, the compute you are certain you will use no matter what, and leave everything above it on flexible pricing. If your usage never drops below a certain level, that floor is low-risk to reserve. The spiky, uncertain part on top stays on-demand where you can turn it off the day you stop needing it. Reserving your peak is how you end up locked into capacity for a workload that no longer exists.

### Prefer the flexible instrument over the rigid one

Modern providers offer commitments that flex across instance types and regions, alongside older ones that pin you to a single rigid configuration. For a startup whose architecture is still moving, the flexible instrument is worth the slightly smaller discount, because it survives the re-platforming you have not planned yet. Trading a few points of savings for the right to change your mind is a good trade at your stage.

### Ask whether the savings even move the needle

If your entire cloud bill is a few thousand dollars a month, a 40% saving is real but it is not the thing standing between you and the next milestone. Spending founder attention to squeeze a small absolute number, while locking yourself in, is a poor use of the scarcest resource you have. This is the same reasoning behind [premature scaling](/post-premature-scaling): optimizing a cost that is not yet your constraint is motion, not progress.

## When the answer is clearly yes

There is a point where committing is the obviously correct move, and it arrives with growth.

### Your baseline is stable and material

Once you have a real, flat baseline of production usage, and the bill is large enough that the savings fund something meaningful, reserving that floor is straightforward good hygiene. The signal is not your age as a company; it is the shape of your usage graph and the size of the number.

### You have someone who will actually manage it

Commitments are not set-and-forget. They need someone watching utilization, renewing deliberately, and unwinding what you have outgrown. If nobody owns that, the savings decay into waste. Getting a second opinion on whether you are at that point is a reasonable use of a [short call](/book-a-call) before you sign a multi-year contract.

## FAQ

### How much of my usage should I put under commitment?
As a starting heuristic, commit only the portion of usage you are confident persists through a pivot, often well under half of a young startup's total. The remainder stays flexible. You can always add more commitment as your baseline proves itself; you cannot easily walk one back.

### One-year or three-year?
For most pre-Series-A startups, one year at most, and often nothing longer than a flexible savings plan. Three-year terms suit companies whose architecture and scale are settled. If you cannot confidently describe your infrastructure eighteen months out, do not sign a three-year bet on it.

### Is chasing cloud savings even worth my time right now?
It depends on the size of the bill. Below a certain spend, your time is better spent on revenue than on shaving infrastructure cost. Set a threshold, and until your bill crosses it, keep everything flexible and move on.
