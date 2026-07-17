---
title: Your agency is done. Can your team take over the code?
slug: agency-handoff-plan
date: '2026-07-17T09:10:00.000Z'
category: Vendors
excerpt: >-
  The contract ends, the agency rolls off to the next client, and what you are
  left holding is a black box. Nobody planned the handoff that would have
  prevented it.
description: >-
  The agency handoff nobody plans for: what real knowledge transfer looks like
  and how to write it into the engagement.
author: The founder of Fraction
readTime: 5
draft: false
---

The engagement ends the way most of them do: cleanly, on schedule, with a final invoice and a friendly email. The agency rolls off to their next client. And a few weeks later, when something breaks or a new hire tries to add a feature, you discover that what you were actually handed was a black box. The code runs, but nobody on your side knows how it is put together, where the important decisions live, or why anything was done the way it was done. The handoff that would have prevented this was never planned, because handoffs do not bill well and nobody asked for one.

This is different from the question of who legally owns the code, which I covered in [you paid for the code, you might not own it](/post-who-owns-your-code). You can own every line and every account and still be unable to operate the thing, because ownership is a legal fact and operability is a knowledge-transfer problem. The code is yours. The understanding that makes the code useful walked out the door with the team that wrote it.

## Why the black box forms

Agencies optimize for delivery, not for your team's future independence, and those are genuinely different goals. The team that built your product carries an enormous amount of context in their heads: why this database, why this structure, which parts are load-bearing and which are scaffolding, where the sharp edges are. None of that is in the code unless someone deliberately put it there, and putting it there costs hours the agency has no incentive to spend once the deliverable is accepted.

So the default outcome is a repository with thin documentation, no architectural record, and no map of the decisions that would let a new engineer come up to speed without reverse-engineering everything. This is the same failure mode as [a codebase that lives in one person's head](/post-key-person-codebase-risk), except the person is an entire team you no longer employ, and the knowledge does not just leave gradually; it leaves all at once, on the contract end date.

The cost shows up later and lands on whoever you hire next. Your first in-house engineer spends their first two months not building, but excavating: reading unfamiliar code, guessing at intent, afraid to touch anything because nobody can tell them what a change will break. You pay for that excavation at your new engineer's salary, and you pay for it in the features they are not shipping while they dig.

## What a real handoff includes

A handoff worth the name is not a zip file and a phone number. It is a deliberate transfer of the things that are not in the code. At minimum it includes documented architecture: a plain description of how the major pieces fit together and why, written for a competent engineer who has never seen the system. It includes a record of the significant technical decisions and their reasoning, so the next person knows which choices were deliberate and which were expedient. It includes runbooks for the operational realities: how to deploy, how to roll back, what to do when the common things go wrong.

It includes complete access, transferred and verified, to every account and credential the product depends on, tested by someone logging in successfully rather than assumed from a spreadsheet. And it includes live time: a working session, or a few, where your people or your incoming engineer can ask the departing team the questions that only they can answer, while they are still under contract and still remember.

The reason this so rarely happens is simple. Nobody wrote it into the engagement, so it becomes unpaid work the agency is asked to do after the money has stopped, which means it gets the effort unpaid work gets. The fix is to make the handoff a paid, scheduled deliverable of the project, not an afterthought. Reserve the last portion of the engagement, and the final payment, for knowledge transfer with a defined checklist, and make acceptance of that deliverable a condition of the project being complete. An agency that has agreed up front to a documented handoff produces a different artifact than one you beg for on the way out the door.

If you are already past the end of an engagement and staring at a black box, the move is to buy a defined block of the original team's time for a structured handoff before they forget, rather than paying your next engineer to reconstruct it slowly. Working out what that transfer needs to cover, and what your product actually requires to be operable, is exactly the kind of thing a [call](/book-a-call) or a [technical teardown](/teardown) is for.

### When should I plan the handoff?

At the start, in the SOW, not at the end. Write knowledge transfer in as a named deliverable with its own acceptance criteria and tie the final payment to it. A handoff you negotiate on the way out is unpaid work done grudgingly; a handoff you scoped at the beginning is a deliverable done properly.

### We already ended the engagement with no handoff. What now?

Buy the team's time back deliberately and soon, while the context is still fresh in their heads. A focused block of paid hours aimed at documentation, an architecture walkthrough, and verified access transfer is far cheaper than having a new hire reverse-engineer the system over months. The value of that time decays fast once the team moves on to new projects, so the sooner the better.

### How much of the budget should a handoff take?

It varies, but treating the final 5 to 10 percent of the engagement as knowledge transfer is a reasonable planning assumption for a project you intend to take in-house. If you never plan to touch the code and the same agency will maintain it forever, you can spend less, but then you have accepted a dependency, and you should know you have accepted it rather than discover it the first time you want to leave.
