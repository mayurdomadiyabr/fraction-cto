---
title: Your database dies at 2am. Can you get it back?
slug: disaster-recovery-diligence
date: '2026-07-18T11:58:05.604Z'
category: Fundraising
excerpt: >-
  Backups you have never restored are not backups. Diligence asks how fast you
  recover and how much you lose, and a vague answer is the finding.
description: >-
  Why disaster recovery is a diligence question, what RTO and RPO mean for a
  startup, and how to answer the recovery question without hand-waving.
author: The founder of Fraction
readTime: 5
draft: false
---

Here is a question I ask founders that reliably changes the temperature of the room: if your primary database died right now, how long until you are back, and how much data would you lose. The confident answer is rare. The common one is some version of "we have backups," said in a tone that tells me nobody has ever tried to restore one.

That gap is exactly what a diligence reviewer is probing when they ask about disaster recovery. It is not a checkbox about whether backups exist. It is a test of whether you know your own failure modes and have a real, tested plan for the day something breaks. Vague answers about resilience and redundancy, with no numbers attached, are a signal a reviewer notices.

## Two numbers you should be able to say out loud

Disaster recovery has a shared vocabulary, and using it correctly signals that you have actually thought about this.

### RPO: how much data you can lose

Recovery point objective is the maximum amount of data, measured in time, you are willing to lose. If you back up every 24 hours, your RPO is 24 hours, which means a failure at the wrong moment costs you a full day of customer data. If that is unacceptable for your product, your backup frequency is wrong, and a reviewer will do that arithmetic in their head while you talk.

### RTO: how long you can be down

Recovery time objective is the maximum acceptable downtime: how long from failure to back-in-business. An RTO of four hours and an RTO of four days require completely different infrastructure and completely different amounts of money. Naming yours, and showing that it matches what your customers actually tolerate, is the difference between a plan and a hope.

The point is not to have aggressive numbers. A young startup with a 24-hour RPO and a one-day RTO can be completely reasonable. The point is to know them, to have chosen them on purpose, and to have proven you can actually hit them.

## Backups you have never restored are not backups

The most expensive lesson in this area is that an untested backup is a guess. Backups fail silently: a job that has been erroring for months, a dump that is missing a table, a restore procedure nobody has run and that turns out to take eight hours the first time you try it under pressure. The 3-2-1 pattern, three copies of your data on two kinds of media with one off-site, is the baseline, but the copies only count if you have restored from them.

Test restores on a schedule. Quarterly for anything critical is a reasonable early-stage bar. An automated restore check that boots your backup and confirms it is intact closes the gap between "we have backups" and "we have recoverable backups," and those are very different sentences to say in a diligence call.

## It is really a single-point-of-failure question

Disaster recovery is one instance of a larger question a reviewer is asking: where can one failure take the whole thing down. Map the dependencies. If your entire system lives in one cloud region with no plan for that region going dark, that is a single point of failure. If a critical piece of state exists in exactly one place with no replica, same problem. This connects directly to whether your architecture can [handle real growth](/post-can-it-handle-10x), because the same weak points that break under a failure often break under load too.

The other single point of failure is human. If only one engineer knows how to run a restore, your recovery time in practice is however long it takes to reach that person, which on a bad night could be never. A recovery plan that depends on one unreachable human is the same [key-person risk](/post-key-person-codebase-risk) in a different costume.

## How to answer it in diligence

Have a one-page recovery plan in your data room before anyone asks. It states your RPO and RTO by workload, describes how backups run and where they live, records when you last tested a restore and how long it took, and names more than one person who can execute it. That page turns a scary open-ended question into a two-minute confident answer, and it is precisely the kind of artifact that keeps [your technical data room](/post-technical-data-room) from being the empty half that stalls a review.

If you cannot write that page today because you genuinely do not know the answers, that is worth fixing before a raise rather than discovering it live. Getting a startup to a tested, documented recovery story is a concrete piece of work, and if you want help sizing it, [book a call](/book-a-call).

## FAQ

### What RPO and RTO should an early-stage startup target?
There is no universal number. Pick them from what your customers actually tolerate. A 24-hour RPO and a one-day RTO are fine for many early products. The mistake is not having loose targets, it is not knowing yours or never having tested whether you can hit them.

### How often should I test a restore?
Quarterly for critical data is a defensible early-stage cadence, with automated integrity checks in between. The first real restore always takes longer than you expect, so you want to discover that in a test, not during an outage or a diligence call.

### Is a managed database enough on its own?
It helps, because good managed providers handle replication and point-in-time recovery. But you still own the plan: you need to know the provider's RPO and RTO, confirm you can actually trigger a restore, and cover application state that lives outside the database. Managed reduces the work, it does not remove the responsibility.

### Will a reviewer actually test my backups?
Rarely themselves, but they will ask when you last tested yours and how long it took. A specific answer with a date builds confidence. "We have backups" with no restore history is the answer that turns into a follow-up and a note in their report.
