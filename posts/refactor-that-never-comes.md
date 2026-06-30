---
title: The refactor you keep promising never arrives
slug: refactor-that-never-comes
date: '2026-06-30T12:00:44.176Z'
category: Pattern recognition
excerpt: >-
  Every team says they will clean it up after launch. Most never do. The
  difference between debt you pay down and debt you default on is a pattern
  worth recognizing early.
description: >-
  Why the cleanup you keep promising after launch never happens, and how to tell
  deferred debt from defaulted debt.
author: The founder of Fraction
readTime: 5
draft: false
---

Every engineering team has said it. "We'll do it quick and dirty for the launch, then come back and clean it up." The launch ships. The next thing is already urgent. The cleanup goes on a list nobody looks at. A year later the quick-and-dirty code is load-bearing, three more features are built on top of it, and the refactor that was going to take a week would now take a month nobody can spare.

This is not a moral failing. Deferring cleanup is often the correct call under deadline. The problem is that "we'll fix it later" gets used for two completely different situations, and teams cannot tell which one they are in until it is expensive.

## Debt you pay down versus debt you default on

There is a real distinction here, and it is the whole game.

### Some shortcuts are deliberate and tracked

The good version: you make a conscious trade. You know exactly what you skipped, why, and what it would cost to do properly. You write it down. When the pressure lifts, you go back. This is the kind of [shortcut that is genuinely the right call](/post-good-technical-debt), and mature teams take it on purpose. The debt is real but it is on the books, accruing visible interest, and someone intends to pay it.

### Most shortcuts are invisible and unowned

The bad version is the default one. "We'll fix it later" is said in a standup, nobody writes it down, no ticket gets made, and there is no trigger that brings it back. It is not a plan; it is a feeling of intent that evaporates the moment the next fire starts. This debt is not deferred. It is defaulted. The difference is whether anyone is actually coming back, and the honest answer is usually no.

## Why the cleanup never happens

Four forces keep the refactor permanently in the future.

### There is no forcing function

New features have deadlines, demos, and customers waiting. Cleanup has none of that. When two pieces of work compete and only one has a date, the dated one wins every single time. Without a trigger, "later" is not a time; it is a place things go to be forgotten.

### The person who cut the corner moves on

The engineer who wrote the shortcut knew exactly what was wrong with it. Six months later they have context-switched ten times, or left the company entirely. The knowledge of what needs fixing and why decays fast, and a refactor nobody understands is a refactor nobody volunteers for. This is the same fragility as when [too much of the system lives in one person's head](/post-key-person-codebase-risk).

### Every new feature raises the price

Code that is quick to clean up the week after launch gets harder every month, because new work is built on top of it. Three features deep, the refactor is not a refactor anymore; it is a migration with a blast radius. The cheapest moment to pay the debt was right after the launch, and that window closed quietly.

### Nobody owns the consequence

Slow feature delivery, rising bug counts, and engineers who flinch before touching a file are the interest payments. But they show up diffusely, months later, with no single cause anyone points to. The team just gets slower, and "we move slower than we used to" rarely gets traced back to the corner cut a year ago.

## How to make the refactor actually happen

The fix is not "stop cutting corners." It is to make deferred cleanup as real as the work that competes with it.

### Write the debt down when you take it on

The moment you decide to do something the fast way, make a ticket: what you skipped, why, and what it would cost to fix. Untracked debt is the kind that defaults. Tracked debt at least has a chance of being paid. This is the difference between debt on the books and debt off them.

### Attach a trigger, not a date

"We'll fix it next quarter" never survives next quarter. Better: "we fix this when we touch payments again" or "when this table passes a million rows" or "before we onboard the second integration." A trigger tied to real events fires on its own. A date in the future just slides.

### Budget cleanup as a standing line, not a someday

Teams that actually pay down debt reserve a fixed slice of capacity for it, often somewhere around 15 to 20 percent. Not a special project anyone has to fight for, but a permanent part of how the team works. When cleanup is a standing budget instead of a heroic exception, the refactor stops being something you promise and start being something you do. Deciding how much to reserve, and on what, is a [triage call about which debt actually matters](/post-triage-technical-debt) rather than cleaning everything.

### Make the slowdown visible to the people who fund it

If feature velocity is dropping because of accumulated shortcuts, that needs to reach whoever decides the roadmap, in their language. "We are 30 percent slower on this area than a year ago because of debt we deferred" is a sentence a founder can act on. "The code is messy" is not. Translating engineering reality into a decision a non-technical founder can make is exactly what I do; if your team keeps promising a cleanup that never lands, [book a call](/book-a-call).

## FAQ

### Is all deferred cleanup bad?
No. Deferring is often correct under real deadline pressure. The bad part is deferring without tracking it or attaching a trigger, so "later" quietly becomes never.

### How do I know if my team has a defaulted-debt problem?
Two tells. First, ask for the list of known shortcuts and watch whether one exists. Second, ask how much capacity went to cleanup last quarter. If there is no list and the answer is "none," the refactor is not coming.

### What is a healthy amount of capacity to spend on debt?
Many steady teams hold somewhere around 15 to 20 percent for cleanup and maintenance as a permanent line. The exact number matters less than that it is reserved on purpose rather than borrowed from whenever a feature is late.
