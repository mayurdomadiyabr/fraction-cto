---
title: Your migration stalled halfway. Finish it or roll it back?
slug: stalled-migration-finish-or-roll-back
date: '2026-09-30T04:28:26.859Z'
category: Decisions
excerpt: >-
  Two systems doing one job, and nobody decided it. How to choose between
  finishing a stalled migration and rolling it back, and do either cleanly.
description: >-
  A half-finished migration costs more than either end state. How to decide
  whether to finish or roll back, and how to close it out properly.
author: The founder of Fraction
readTime: 5
draft: false
---

Six months ago your team started moving off something: the old payments integration, the first database, a framework version, the monolith's user service. The new system is live for some traffic. The old one still runs the rest. The engineer who led the move left or got pulled onto a launch, and now every change has to be made in two places. Nobody decided to run two systems. It just became the way things are.

The short answer: a half-finished migration is usually worse than either end state, so make an explicit call within two weeks to finish it or roll it back, and put a date on it. Finish if the remaining work is well understood and the new system is already carrying real load. Roll back if the remaining work is the hard part you have not started, or the reason for the migration has gone away.

## Why the middle is the most expensive place to stand

Migrations rarely fail loudly. They stall. The first 70% is the easy traffic, the clean tables, the endpoints with tests. The last 30% is the weird customer, the report finance runs once a quarter, the integration nobody documented. Teams move the easy part, declare progress, and then the hard part waits behind every new feature.

While it waits, you pay a tax that does not show up in any single ticket:

- **Every change is double work.** A new field has to exist in both systems, or a sync job has to carry it.
- **Bugs hide in the seam.** Data written by one system and read by the other drifts in small ways. Timestamps, rounding, nulls.
- **Nobody can explain the whole system.** New engineers learn two architectures and the rules for which one owns what.
- **Incidents take longer.** The first question in every outage becomes "which side is this on?"

I have seen teams carry this for well over a year. By then the cost of the dual state has quietly exceeded the cost of the original migration.

## How to make the call

Start with an honest inventory, not a status update. Sit down with whoever knows the most and write three lists.

1. **What is fully on the new system?** Traffic, data, and ownership, all moved.
2. **What remains, in order of difficulty?** Be specific. "The reporting jobs" is not specific. "Three quarterly finance reports that join across both databases" is.
3. **Why did we start?** The original reason, in one sentence.

Then look at the answers against a few questions.

### Is the reason still true?

Migrations start for good reasons that sometimes expire. The vendor you were leaving cut its price. The scale problem you were preparing for did not arrive. The framework you were upgrading to changed direction. If the reason is gone, rolling back is not failure. It is correcting a bet with new information, the same reasoning as [abandoning a project instead of finishing it](/post-sunk-cost-abandon-project).

### Is the hard part known or unknown?

If the remaining work is large but understood, it is a scheduling problem, and finishing is usually right. If the remaining work is the part nobody has looked at closely, estimate it before committing. A one-week spike to map it is cheap compared to another quarter of drift.

### Which way is the traffic already leaning?

If the new system carries most of the load and has been stable, the rollback is its own migration with its own risk. If the new system carries a small share and has caused incidents, rolling back is often the smaller job.

## If you finish: make it a project, not a background task

Stalled migrations stall because they were treated as something to do between features. To finish one, give it an owner, a scope, and a date, and protect the time.

- **One named owner** who is accountable for the end date, not a shared responsibility.
- **A written list of what "done" means**, including deleting the old system, not just stopping writes to it.
- **A feature freeze on the seam.** No new functionality gets built on the old side, full stop.
- **Removal as the last milestone.** The migration is not finished until the old code, infrastructure and credentials are gone. If you are planning the final switch, the tradeoffs are in [how to choose your cutover](/post-rewrite-cutover-plan).

## If you roll back: do it cleanly

Rolling back needs the same discipline. Move the new-system traffic back, reconcile any data written only on the new side, delete the new code paths, and write a short note on why. That note is useful later, both for the next attempt and for diligence, where an investor may ask why there are two of something in your architecture. A clean, documented decision reads well. An unexplained half-state does not, and it is one of the things that shows up in a [technical teardown](/teardown).

## A pattern from the room

The migrations that stall most often share a feature: they were started by one strong engineer as a personal initiative, without a written reason or an end date. That engineer was usually right about the direction. What was missing was a decision at the leadership level that this was a priority worth protecting, and someone to hold the date when a launch competed for the same time. This is exactly the kind of gap a founder without a technical lead struggles to see, and one of the first things I look for when I start with a new team. If you think you might be carrying one of these, a [short call](/book-a-call) is usually enough to tell whether it is costing you.

## FAQ

### How do I know if we have a stalled migration?

Ask your engineers whether any change requires editing two systems, or whether there is a sync job that exists only to keep an old and new version consistent. If the answer is yes and nobody can give an end date, you have one.

### Is it ever fine to run two systems long term?

Sometimes, if they genuinely serve different purposes and the boundary is clean and documented. That is an architecture, not a migration. The problem is two systems doing the same job with no plan to stop.

### How long should finishing take?

It depends on what remains, but once scoped, most stalled migrations I see can be finished or rolled back in four to eight weeks of focused work. If the estimate is much larger, question whether the migration was the right plan.

### Should we pause features to finish it?

Pause features that touch the seam. Most teams can keep shipping elsewhere while one or two people finish the move. What you cannot do is let the migration be the thing everyone works on when nothing else is urgent.
