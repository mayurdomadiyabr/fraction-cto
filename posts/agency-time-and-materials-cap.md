---
title: 'Time and materials with no ceiling: put a cap on it'
slug: agency-time-and-materials-cap
date: '2026-09-25T02:44:35.096Z'
category: Vendors
excerpt: >-
  An hourly agency contract with only an estimate is an open tab. A phased
  not-to-exceed cap with a warning threshold keeps the flexibility and gives you
  back control.
description: >-
  How to add a not-to-exceed cap, a warning threshold, and weekly burn reporting
  to a time-and-materials agency contract.
author: The founder of Fraction
readTime: 6
draft: false
---

Time and materials is the honest way to buy software work you cannot fully specify yet. You pay for the hours the agency actually spends, you can change direction without a change-order fight, and nobody pads a fixed price to cover their own uncertainty. The problem is the version most founders sign: an hourly rate, a rough estimate in a proposal, and no ceiling anywhere in the contract. That is not a budget. It is an open tab.

The fix is not to abandon time and materials. It is to put a not-to-exceed cap on it, plus the reporting that makes the cap mean something. This post covers how I set that up for clients and what to watch once it is running.

## Why an estimate is not a cap

Most agency proposals include a number like "estimated 480 to 560 hours." Founders read that as the price. The contract usually says something different: the client pays for hours worked at the stated rate, and the estimate is "for planning purposes only." When the project runs to 800 hours, the agency is not in breach of anything. It told you the rate. You agreed to pay it.

I am not describing a scam. Estimates are genuinely hard, and most overruns come from real discoveries: an integration that is messier than the docs claimed, a data migration nobody scoped, a design that changed twice. But an estimate without a ceiling puts all of that risk on you, and it removes the one conversation that protects you: the moment where someone has to stop and ask whether the extra work is still worth it.

A not-to-exceed cap forces that moment to happen before the money is spent, not after the invoice arrives.

## What a useful not-to-exceed clause says

A cap that only says "total fees shall not exceed $90,000" is better than nothing, but it leaves the hard part unwritten. The version I push for has four pieces.

### The ceiling itself, per phase

One cap for a nine-month project is too coarse. By the time you are near it, most of the budget is gone and you have little leverage. Cap each phase or milestone instead: discovery, first usable release, launch hardening. If phase one blows through its cap, you find out in week six, not month eight.

### A warning threshold before the ceiling

The agency should be required to tell you in writing when a phase reaches around 75 to 80 percent of its cap, along with an honest forecast of what is left. That warning is the whole point. It gives you room to cut scope, reorder features, or approve more budget on purpose, while there is still money left to make a choice with.

### What happens at the cap

Spell it out: work on that phase stops at the cap unless you approve an increase in writing. Without this, many agencies will keep working "to get you over the line" and bill it later, and you are back to an open tab. A stop rule sounds harsh. In practice it almost never triggers, because the warning threshold did its job.

### Who can approve an increase

Name the person on your side who can approve extra budget, and require it in writing, email is fine. I have seen overruns approved by a product manager in a Slack thread who had no idea the founder was tracking cash to the week.

## The reporting that makes the cap real

A cap you only check at invoice time is decoration. You need to see burn while it is happening. Ask for a short weekly report with three numbers per phase: hours used to date, hours the team now expects to need to finish, and the gap between the two.

The second number matters most. Hours used only tells you the past. The forecast to finish tells you whether the phase will land inside the cap, and watching it move week to week is the earliest warning you will get. If "hours to finish" stays flat or grows while hours used climbs, the phase is not converging. That is the signal to have a scope conversation now.

Pair the numbers with something you can see: a demo, a staging link, a working flow. Hours reported against nothing visible is the pattern I wrote about in [the agency invoice nobody reads](/post-agency-invoice), and a cap does not fix motion that is not producing progress.

## How agencies react, and what that tells you

Good agencies usually accept a not-to-exceed cap with a warning threshold. Some will ask for a small buffer, or ask that the cap exclude work you add later. Both are reasonable. Scope you add should come through a change process with its own estimate, which is how a cap stays fair to both sides. If you want a sense of how that process can itself turn into a cost center, read [how agencies charge for change requests](/post-agency-change-order-fees).

The reactions that worry me are different:

- **A flat refusal to cap anything.** It usually means the agency has no confidence in its own estimate, or its business depends on overruns.
- **Accepting the cap but refusing weekly burn reporting.** A cap without reporting means you learn you hit it when work stops.
- **Offering to switch to fixed price instead.** Sometimes fine. Often the fixed price has a large risk premium baked in, and the change-order clauses do the rest. I covered that pattern in [the fixed bid that quietly becomes 60% more](/post-fixed-bid-trap).

## A worked example

Here is an illustrative setup, not a real client's numbers. A seed-stage founder hires an agency at $95 an hour for a first release estimated at 600 hours, roughly $57,000.

Instead of one number, they cap three phases: discovery at 80 hours, core build at 420 hours, launch hardening at 100 hours. The warning threshold is 80 percent. In week seven the agency flags that core build is at 336 hours and now expects to need 500 to finish, because a payments integration turned out to need a reconciliation job nobody planned.

That warning costs nothing and is worth a lot. The founder has three options while they still have leverage: approve 80 extra hours, cut two lower-priority features to stay inside the cap, or push the reconciliation job to after launch and do it manually for the first month. They pick the third. Without the cap and the forecast, the same discovery shows up as a surprise invoice six weeks later, with the work already done and nothing left to trade.

## When a cap is the wrong tool

A cap works best for bounded pieces of work. For a long-running dedicated team, where you are really buying capacity each month, a monthly spend ceiling plus a priority list is simpler than per-phase caps. The trade-offs between those models are in [fixed bid, dedicated team, or staff aug](/post-agency-engagement-model).

It is also not a substitute for scope judgment. If nobody on your side can tell whether 420 hours for a core build is sane, the cap just makes you run out of money in a more orderly way. That is where an outside technical read helps, before you sign rather than after. If you want one, [book a call](/book-a-call) or look at what [a one-time teardown](/teardown) covers.

## FAQ

### Is not-to-exceed the same as fixed price?

No. With fixed price you pay the agreed amount whatever the hours turn out to be, and the agency carries the overrun risk, usually priced in. With a not-to-exceed cap you pay actual hours up to the ceiling. If the work takes less, you pay less.

### What percentage should the warning threshold be?

Somewhere around 75 to 80 percent of the phase cap works for most projects. Lower than that and you get warnings on noise. Higher and there is too little budget left to change course.

### Can I add a cap to a contract that is already running?

Usually yes. Frame it as a reporting and planning change for the next phase, not an accusation about the last one. Most agencies would rather agree to a cap than lose the client over a surprise invoice.

### Should the cap include bug fixes after launch?

Decide explicitly. Defects in delivered work are often better handled under a warranty clause than billed hours against a cap. See [who fixes the bugs after your agency delivers](/post-agency-defect-warranty).
