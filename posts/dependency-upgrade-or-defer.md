---
title: 'Upgrade the dependency now, or pay more for it later?'
slug: dependency-upgrade-or-defer
date: '2026-07-08T14:47:51.379Z'
category: Decisions
excerpt: >-
  Deferring a version upgrade is free this week. The bill for years of deferred
  laters arrives at once, usually during a crisis.
description: >-
  Upgrade a dependency now or defer? Why version gaps compound, which upgrades
  are safe to skip, and how to avoid the cliff.
author: The founder of Fraction
readTime: 5
draft: false
---

A framework you depend on ships a new major version. Your engineer says the upgrade will take a few days and touch nothing users can see. You have a demo Thursday and a customer escalation on fire. So you say "later." That is the right call this week. The problem is that "later" becomes the permanent answer, and the bill for all those deferred laters arrives at once, years from now, with interest.

Old dependencies are one of the largest and most invisible forms of technical debt a startup carries. And unlike most debt, this one compounds on a schedule you do not control.

## Why "later" gets expensive

The reason upgrades feel safe to defer is that nothing bad happens the day you skip one. The cost is real but it is delayed and it grows.

### The gap between versions compounds

Going from version 1 to version 1.1 is trivial. Version 1 to version 3 or 4 is usually still doable in an afternoon. Version 1 to version 20 is a rewrite. Each version you skip does not add a fixed amount of work to the eventual upgrade; it multiplies it, because breaking changes stack and the migration guides assume you did the previous steps.

The team that upgrades a little every quarter pays a small, predictable tax. The team that defers for three years pays a large, unpredictable one, often at the worst possible moment, like the middle of a fundraise or a security scramble.

### The forcing function is usually a crisis

Here is the part founders miss. You rarely get to choose when the deferred upgrade comes due. It gets forced by something outside your control: a critical security vulnerability in the old version with no backport, a payment provider that drops support for your ancient SDK, a hosting platform that stops running your end-of-life language runtime, or a new hire who refuses to work in a five-year-old stack.

When the upgrade is forced by a crisis, you do it under time pressure, with the original authors gone, on a version gap so wide the migration is genuinely dangerous. That is the expensive version of a cheap decision you could have made calmly, years earlier.

## How to decide, upgrade by upgrade

Not every upgrade is worth doing the day it ships. The skill is triaging which laters are cheap and which are dangerous. I use a few questions.

### Is this dependency load-bearing?

A logging library three levels deep is not the same as your web framework, your database driver, or your authentication provider. The more foundational the dependency, the more the version gap will hurt later, and the more you should stay close to current. For deep, foundational packages, small and frequent upgrades are the only sane strategy, because a big-bang upgrade of something everything sits on top of is the migration that eats a quarter.

### Does the old version still get security patches?

This is the line I do not let founders cross. Running a version that no longer receives security fixes is not deferring an upgrade; it is accepting an open vulnerability. The moment a version goes end-of-life, "later" is off the table, because the next forcing function might be a breach, not a deprecation notice. This is the same reasoning behind [the security holes that hide in fast-written code](/post-ai-code-security-holes): the risk is invisible right up until it is the only thing anyone is talking about.

### What breaks if we wait another year?

Sometimes the honest answer is "nothing meaningful," and deferring is correct. A stable, well-supported dependency that is one major version behind, still patched, and not blocking anything can wait. Not all technical debt is worth paying down, and treating every upgrade as urgent is its own way to burn a small team out. The goal is not a pristine dependency tree. It is avoiding the cliff.

## Make it a routine, not a decision

The teams that never get trapped by this do not make heroic upgrade decisions. They make the upgrade boring.

Budget a small, recurring slice of engineering time, an afternoon a month is often enough, to keep foundational dependencies current and patched. Small, frequent upgrades are safer and far easier to plan than the rare giant one. When you keep the gaps small, most upgrades are a version bump and a test run, not a project.

This is exactly the kind of maintenance that gets silently dropped when a team is heads-down on features, which is how the debt accumulates in the first place. It belongs in the same bucket as the other quiet maintenance work I help founders schedule before it becomes a fire, alongside a real approach to [triaging technical debt that actually matters](/post-triage-technical-debt) so you spend the afternoon on the load-bearing dependencies and not the cosmetic ones.

## FAQ

### Should we always upgrade to a new major version right away?

No. Wait a few weeks to a few months for the ecosystem and the first round of bug-fix releases to catch up, especially for a major version. But "wait for it to stabilize" is a matter of weeks; it is not the same as deferring for years. The danger is not measured upgrading, it is indefinite deferral.

### How far behind is too far behind?

Two rules of thumb. First, never run a version that no longer receives security patches. Second, for load-bearing dependencies, try not to fall more than one major version behind, because the migration difficulty grows faster than linearly with the gap.

### We are too busy shipping to do upgrades. What is the minimum?

At minimum, keep everything on a version that still gets security fixes, and budget one afternoon a month for the most foundational dependencies. That small, boring habit prevents the multi-week emergency migration that otherwise lands during your least convenient month.

### How do I know which dependencies are the risky ones?

The load-bearing ones: your language runtime, web framework, database layer, and anything touching authentication or payments. If you are not sure where your real exposure is, a [technical teardown](/teardown) can map which dependencies are load-bearing and which are safely one version behind, so you know exactly where to spend the upgrade budget.
