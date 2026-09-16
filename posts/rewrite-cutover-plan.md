---
title: You decided to rewrite. Now choose how you cut over.
slug: rewrite-cutover-plan
date: '2026-09-16T02:47:21.548Z'
category: Decisions
excerpt: >-
  Big bang, strangler, or parallel run. The cutover is where a rewrite is won or
  lost, and most teams treat it as a scheduling detail.
description: >-
  Big bang, strangler, or parallel run: how to choose a rewrite cutover plan,
  and what each one costs a small engineering team.
author: The founder of Fraction
readTime: 5
draft: false
---

Short answer: once you have decided to rewrite, the riskiest remaining choice is not the stack, it is the cutover. You have three real options -- big bang, strangle the old system route by route, or run both in parallel and compare -- and for most startups under Series A the strangler is the right default, because it is the only one that lets you stop halfway without losing the work.

Founders spend weeks on the rewrite decision itself and then treat the switchover as a scheduling detail. That is backwards. The rewrite decision is reversible for a long time; the cutover is the moment you can lose customers, data, or both. If you are still upstream of that, the harder question is whether to rewrite at all, which I have covered in [how to make the rewrite-or-refactor call](/post-rewrite-or-refactor).

## Big bang: one date, everything moves

Everyone builds the new system in parallel, you pick a weekend, you flip DNS, and the old system goes read-only.

It is honest about one thing: you only pay the integration cost once. There is no period where two systems are both half-true, no synchronization code to write and later delete, and the team is never carrying two mental models at the same time.

The problem is that all of your risk lands in one window, and the window is usually longer than planned. Every assumption you made about production data gets tested at the same moment as every assumption about load, auth, and the third-party integrations nobody thought about. When something fails at hour six, the rollback is not a deploy, it is a business decision, and you make it exhausted.

Big bang is defensible when the system is genuinely small, when you have a real maintenance window your customers accept, or when the data model is changing so fundamentally that running both is not possible. It is a bad fit for anything with continuous transactions or a customer base that notices downtime.

## Strangler: route by route, for months

You put a router in front of the old system and move one slice at a time. The first slice is something small and non-critical. Each subsequent slice moves when it is ready, and the old system shrinks until it is empty.

This is the default for good reason. Risk arrives in pieces you can survive. You learn about production behavior early, on a slice where being wrong is cheap. Most importantly, it is the only approach where stopping is not failure: if priorities change after four slices, you keep the four and live with a hybrid, which is a genuinely acceptable outcome rather than a write-off.

The costs are real too. You maintain two systems and the seam between them, which is its own code. Shared state is the hard part -- if both sides read and write the same tables, you need a rule for who owns what, and the rule has to be enforced, not agreed. And the migration can stall: teams routinely move the easy 70 percent, declare victory, and carry the ugly remainder for years. That last 30 percent is where the original decision was hard, and it does not get easier by waiting, which is the same failure mode as [the refactor you keep promising](/post-refactor-that-never-comes).

Guard against it by writing down the finish line before you start, including the last slice by name, and by treating the leftover as debt with an owner rather than as background noise.

## Parallel run: both systems, one truth

Both systems process real traffic. The old one still serves customers; the new one runs alongside, and you compare outputs. When the divergence rate is low enough for long enough, you switch which one answers.

This is the highest-confidence option and the most expensive. It is the right call when being wrong is not recoverable: billing, payroll, anything with money or compliance attached. A shadow run on a week of real invoices will find the edge cases no test suite invented, and finding them before customers do is worth the cost.

Be honest about that cost. You are paying for double infrastructure, you are writing comparison tooling you will throw away, and you need someone to triage every difference, most of which will be the new system being correct and the old one having a bug you never knew about. Teams underestimate the triage load more than the engineering.

## How to choose, in one pass

Ask what a bad hour looks like. If a bad hour means a few users see an error and retry, the strangler is fine. If a bad hour means wrong money moved, run in parallel first.

Ask whether you can afford to stop halfway. Pre-Series A, priorities change; the strangler survives that and big bang does not.

Ask who owns the seam. Two systems and no named owner for the boundary between them is how migrations quietly die.

Ask what the rollback actually is at each step, and make someone describe it out loud. "We would revert the deploy" is an answer. "We would restore from backup" means your rollback is a disaster-recovery drill, which is a different conversation and worth testing separately, as I have argued about [getting your database back after a 2am failure](/post-disaster-recovery-diligence).

## What to do before any of it

Whichever path you choose, do three things first. Freeze the old system's scope, so you are not chasing a moving target -- new features go into the new system or they wait. Write the data migration and run it against a copy of production, repeatedly, because in most rewrites the data is the schedule, not the code. And define the done condition in a sentence anyone can check, such as "no traffic reaches the legacy service for 14 days," so the project can actually end.

A rewrite is the most expensive thing a small engineering team can attempt, and the cutover is where the money is won or lost. If you are about to commit a quarter of your runway to one, an outside read on the plan is cheap by comparison -- a [teardown of the existing system and the migration plan](/teardown) usually changes at least one thing before it costs you.

## FAQ

### Is a big-bang cutover ever the right choice for a startup?
Yes, when the system is small, the data model change makes running both impossible, or you have a maintenance window customers genuinely accept. The test is whether you could survive the window running long, because it usually does.

### How long should a strangler migration take?
Long enough to move every slice, and it should be scoped in slices rather than months. The failure signal is not slowness, it is a stalled queue: if no slice has moved in six weeks, the migration has ended without anyone saying so.

### Do we need a parallel run if we have good tests?
Tests check the cases you imagined. A parallel run checks the cases production actually contains. For money, compliance, or anything you cannot correct after the fact, run in parallel even with strong tests.
