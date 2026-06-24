---
title: Rewrite or refactor? How to make the call without betting the company
slug: rewrite-or-refactor
date: '2026-06-24T11:58:00.474Z'
category: Decisions
excerpt: >-
  Most rewrites overrun by 2-4x and many never ship. Here is the test I use to
  decide whether a codebase needs a rewrite or just disciplined refactoring.
description: >-
  A practitioner test for the rewrite vs refactor decision, so you fix the
  codebase without stalling the roadmap for a year.
author: The founder of Fraction
readTime: 5
draft: false
---

A founder pulls me in, usually a little embarrassed, and says some version of: "The codebase is a mess. My lead wants to rewrite the whole thing. Is that the right move?"

It is the most expensive question a small company asks, and the most common answer I give is "not yet, and probably not the whole thing." The reason is boring and well-documented. Industry surveys keep landing in the same range: somewhere between 60 and 80 percent of full rewrites either get cancelled or fail to deliver the benefits that justified them, and the ones that do ship routinely take two to three times longer and cost two to four times more than the original estimate. When someone pitches you a six-month rewrite, the honest planning number is closer to a year, and during that year your roadmap stops.

So before anyone touches a green-field repo, I run the decision through a few concrete tests.

## The test: is the problem the architecture or the code?

Refactoring changes the code without changing what it does. Rewriting throws out the code and the design. The single most useful question is which of those two you actually need, because they have wildly different risk profiles.

If your stack is fine and your data model is reasonable but the code is tangled, slow to change, and scary to touch, that is a refactoring problem. You can pay it down incrementally while still shipping. Nobody has to stop.

If the fundamental design cannot do what the business now needs, that is a rewrite problem. The classic example: you built a batch-processing monolith and the product now has to be real-time and event-driven. No amount of cleaning up the existing code changes that shape. You need a different architecture, and at that point a targeted rewrite of the affected system is honest work, not avoidance.

The trap is calling something an architecture problem when it is really a code-quality problem, because "rewrite" feels cleaner than "fix the thing we made." Most of the time, when I read the actual code, the architecture is survivable and the team just wants a fresh start. A fresh start is a feeling, not a plan.

### What a rewrite quietly throws away

The thing nobody puts on the slide: your messy code contains years of edge cases. Every weird conditional is usually a bug someone hit in production and patched. A rewrite starts by deleting all of that hard-won knowledge and then rediscovering it, one angry customer at a time. That is most of where the 2-4x overrun comes from. It is not the typing. It is relearning what the old system already knew.

## How AI changed the math, and how it did not

The 2026 version of this conversation includes a new argument: "AI makes rewrites cheap now." There is something real here. AI-assisted teams can parse a legacy codebase and generate documentation in hours, and finding dead code, which is often 30 to 40 percent of an old codebase, drops from weeks to days. Work that used to need eight engineers can sometimes be done by three. That genuinely lowers the cost of understanding and migrating code.

What it does not change is the risk that lives in the unknown. AI accelerates the parts you can see. It does not magically know the undocumented business rule that only exists because a customer screamed in 2023. So I treat AI as a strong argument for incremental modernization, not for a clean-room rebuild. Use it to document the old system, strip the dead code, and refactor module by module behind tests. That is where the leverage is. A faster rewrite is still a rewrite, and it still stops your roadmap.

If you are weighing this kind of modernization, it is worth reading how I separate [expensive necessities from expensive mistakes](/post-expensive-mistake-or-necessity) before you commit the quarter.

## The middle path almost everyone should take

For the large majority of early-stage companies, the right answer is neither "live with the mess" nor "burn it down." It is the strangler approach: wrap the old system, build new functionality cleanly alongside it, and migrate the worst pieces one at a time while the product keeps shipping. You get most of the benefit of a rewrite with a fraction of the all-or-nothing risk, and you can stop halfway if priorities change, which they will.

This pairs with knowing which debt is worth paying down at all. Not all of it is. I wrote separately about [when a shortcut is the right call](/post-good-technical-debt), and the same judgment applies in reverse here: some of the code that looks ugly is ugly because it is doing a hard job, and leaving it alone is the senior move.

If you want a second opinion before you commit a quarter to a rewrite, that is exactly the kind of call a [20-minute code teardown](/teardown) is built for, or you can [book a call](/book-a-call) and talk through the specific system.

## How I actually decide, in order

1. Read the code. Decide honestly: architecture problem or code-quality problem.
2. If it is code quality, refactor incrementally behind tests. Do not stop shipping.
3. If it is architecture, scope the smallest system that has to change. Rewrite that, not the whole thing.
4. Use AI to document and de-risk the old system first, before writing any new code.
5. Default to the strangler pattern so you can bail out at any point.

A rewrite is sometimes the right answer. It is just almost never the first answer, and it is rarely the whole answer.

### FAQ

### How long does a rewrite really take?

Take the engineering estimate and roughly double it. A genuine six-month rewrite tends to land near a year once you account for relearning edge cases and migrating data. Plan the roadmap around the doubled number, not the optimistic one.

### Does AI tooling make a full rewrite safe now?

It makes parts of it cheaper, especially documentation and dead-code removal. It does not remove the core risk, which is the undocumented behavior the old system encodes. Use AI to modernize incrementally rather than to justify a clean-room rebuild.

### What is the strangler pattern in plain terms?

You build new functionality around the old system and gradually route traffic to the new pieces, retiring the old code in slices. The product keeps working the whole time, and you can stop whenever the remaining old code is good enough.

### My lead engineer insists on a rewrite. Should I trust them?

Trust the diagnosis, test the prescription. Ask them to point at the specific architectural constraint that refactoring cannot fix. If they can name it concretely, listen. If the argument is mostly that the code is ugly and they want a fresh start, that is a refactoring job wearing a rewrite costume.
