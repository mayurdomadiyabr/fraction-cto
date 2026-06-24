---
title: You have outgrown a tool. Is it worth the cost of leaving?
slug: migrate-or-stay-tool
date: '2026-06-24T11:58:00.808Z'
category: Decisions
excerpt: >-
  Switching a core tool or platform always costs more than the demo suggests.
  Here is the threshold test I use to decide migrate now, later, or never.
description: >-
  A cost threshold for deciding whether to migrate off a tool you have outgrown,
  or stay and absorb the friction for another year.
author: The founder of Fraction
readTime: 5
draft: false
---

There is a specific decision that does not get written about much, because it is less exciting than choosing a stack from scratch: you already chose a tool, a platform, or a vendor, and now you think you have outgrown it. Should you migrate, or stay and absorb the friction? Founders get this wrong in both directions. Some cling to a tool a year too long out of fear. Others rip out something that works because a new option demoed well.

I do not decide this on vibes. I decide it on a threshold, because switching costs are almost always larger than the new tool's pricing page implies.

## The switching cost is the part nobody quotes you

When you compare two tools, you see two monthly prices. What you do not see, and what dominates the real cost, is everything required to actually move: migrating data, recreating custom configuration, rebuilding integrations, retraining the team, and running both systems in parallel until you trust the new one. Tightly coupled tools are the worst, because the integration work you did to make the old tool useful is exactly the work you now have to redo.

This is why "the new tool is 20 percent cheaper" is usually a bad reason to switch. A 20 percent saving on a line item can be wiped out for two or three years by a migration that eats a quarter of engineering time. The pricing page is the visible cost. The migration is the iceberg.

So the first question is never "is the new tool better?" It is "is the new tool enough better to clear the switching cost, and over what horizon?" This is the same buy-versus-build-versus-wait muscle I described in the [build, buy, or wait decision tree](/post-build-buy), just pointed at a tool you already own instead of a capability you are missing.

## A threshold I can actually defend

Here is a rule of thumb that keeps founders out of trouble. Frame the decision against your annual engineering budget, because that is the resource a migration actually spends.

- If the cost of staying, meaning the ongoing friction, workarounds, and lost velocity, is breaching your thresholds in three or more areas at once, or the remediation cost is climbing past roughly 30 percent of your annual engineering budget, the migration is no longer optional. Staying is the expensive choice.
- If only one or two things are over the line and the total pain is comfortably under about 20 percent of budget, defer. Put it on the list, revisit it at the next funding round, and do not spend this quarter on it.

The space in between is genuine judgment, and that is where a second opinion earns its keep. But the threshold does most of the work, because it forces you to quantify the pain of staying instead of just feeling it.

### Concrete triggers worth migrating for

Some signals are specific enough to act on directly:

- **A cost curve that has inverted.** When a usage-based tool's bill crosses the point where a different model would be meaningfully cheaper at your current and near-future volume, not your imagined volume. For example, a serverless platform that made sense at low traffic can become the wrong economics once the monthly bill is consistently high and predictable.
- **A ceiling you keep hitting.** Latency, throughput, or a feature limit that you architect around in more than one place. Once you are designing your own system to dodge a tool's limitations repeatedly, the tool is costing you more than its price.
- **Lock-in that is actively hurting flexibility.** If the vendor's roadmap and yours have diverged and you cannot route around it, the lock-in is now a strategic risk, not just an annoyance.

If none of those are true and the tool merely annoys people, that is not a migration trigger. That is a Tuesday.

## The cheap middle option founders forget

Migration is not binary. Before a full switch, there is almost always a partial move available: keep the tool for what it does well, and move only the specific workload that has outgrown it. Most "we need to migrate" conversations are really "one part of this no longer fits," and extracting just that part costs a fraction of a wholesale switch while removing most of the pain.

This is the same logic as extracting one service from a monolith instead of rewriting the whole thing. Move the workload that hurts, leave the rest, and re-evaluate in six months. You preserve optionality and you do not bet the quarter.

## How I run the decision

1. Quantify the cost of staying. Friction, workarounds, lost velocity, in real hours and dollars.
2. Estimate the full switching cost, including data, integrations, retraining, and parallel running. Not the pricing page.
3. Compare the cost of staying to your annual engineering budget. Past roughly 30 percent in three-plus areas, migrate. Under 20 percent in one or two, defer.
4. Look for the partial move before committing to a full one.
5. Set a revisit date so "defer" does not silently become "never."

The worst outcome here is not picking wrong. It is migrating on a hunch, spending a quarter, and landing somewhere only marginally better. If you want to pressure-test a migration before you commit the team, [book a call](/book-a-call) and we will put real numbers on both sides, or look at how I structure [engagement pricing](/pricing) if you want ongoing help making these calls.

### FAQ

### How do I know if it is worth migrating off a tool?

Quantify the cost of staying and compare it to your annual engineering budget. If the friction and remediation cost are pushing past roughly 30 percent across multiple areas, migrate. If it is under 20 percent and isolated to one or two issues, defer and revisit at the next funding round.

### Why is switching tools more expensive than it looks?

The pricing page shows you the new tool's monthly cost. It does not show migrating data, rebuilding integrations, recreating configuration, retraining the team, and running both systems in parallel. That hidden work usually dwarfs any line-item savings, often for years.

### Should I switch tools to save money?

Rarely on price alone. A 20 percent saving can be erased for two or three years by the migration cost. Switch when you are hitting real ceilings or the economics have fundamentally inverted at your actual volume, not for a modest discount.

### Is there an alternative to a full migration?

Usually yes. Keep the tool for what it does well and move only the specific workload that has outgrown it. A partial move costs a fraction of a full switch and removes most of the pain, while keeping your options open.
