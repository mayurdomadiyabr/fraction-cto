---
title: Your AI agent can run all night. What stops it?
slug: ai-agent-no-circuit-breaker
date: '2026-07-15T13:10:00.000Z'
category: Pattern recognition
excerpt: >-
  A shipped feature that breaks fails once. An AI agent that breaks keeps acting
  until something stops it. Most teams built no circuit breaker.
description: >-
  Why an AI agent needs an automatic circuit breaker, not just a kill switch,
  and the three limits that halt a runaway agent before the bill does.
author: The founder of Fraction
readTime: 8
draft: false
---

Your AI agent works fine while you are watching it. The risk is the eight hours you are not. A shipped feature that breaks returns one bad response and stops. An agent that breaks keeps acting -- retrying, spending, and touching things -- until something makes it stop. That something has to be code, not you noticing. The fix is a circuit breaker: hard limits on steps, time, and spend that halt the agent automatically, plus a manual kill switch you can reach without shipping a deploy. Most early-stage teams have put an agent into production and built neither.

I am seeing this pattern land in the room every few weeks now. The agent demos beautifully, runs quietly for a month, and then one night it does the same wrong thing a few thousand times because nobody was awake to notice and nothing in the system was built to object.

## Why a running agent fails differently than a feature

A normal feature is a function. You call it, it returns once, and if the answer is wrong you get one wrong answer. An agent is a loop. It decides, acts, looks at what happened, and decides again. When one of those steps goes wrong -- a tool returns something malformed, an input arrives in a shape it has never seen, the model misreads the state it is in -- the agent does not return a wrong answer and stop. It tries again. And because each individual step looks locally reasonable, nothing between the agent and your bank account raises a hand.

Here is what that looks like when it goes wrong. A founder I worked with ran a nightly agent that reconciled their orders against their payment provider and emailed a summary before the team logged on. It was flawless for two months. Then the provider tweaked the shape of one error response. The agent read the malformed error as "record not found," concluded the record needed to be created, and started re-issuing refunds it had already issued the night before. It ran that loop until morning. Nobody was awake. The refunds were real money and the cleanup was a real week. The model was not broken and the code was not obviously buggy. There was simply nothing in the design whose job was to say "you have now taken the same action four hundred times, stop."

That is the difference. A feature fails in a bounded way. An agent fails in an unbounded way unless you bound it on purpose.

## A kill switch and a circuit breaker are not the same thing

Most founders, when I raise this, tell me they can just turn it off. That is a kill switch, and you should have one, but it is the weaker half of the answer. A kill switch is manual: a human sees something wrong and severs it. It assumes a human is watching in the exact window where watching matters. The problem is that agents run on their own schedule, and the expensive failures happen at 2am, over a weekend, or during the demo you are giving to someone else. When you finally look, the damage is already done.

A circuit breaker is the automatic half. It is a set of deterministic rules that halt the agent without anyone deciding to. You do not need anything clever. Three ceilings catch the large majority of runaway scenarios:

- A step cap. No single run may take more than N actions. A reconciliation that normally takes forty tool calls should never be allowed to take four hundred.
- A wall-clock timeout. No run may exceed N minutes. A loop that has been going for an hour when it usually finishes in ten is not working harder, it is stuck.
- A spend budget. No run may burn more than a set dollar amount of model and tool calls. The moment it crosses the line, it stops and asks for a human.

Cross any ceiling and the agent halts, alerts someone, and waits. The point of making these deterministic is that a drifting agent is the worst possible judge of whether it is drifting. You do not want the thing that has gone wrong to be responsible for noticing it has gone wrong. You want a dumb, external limit that does not care how confident the agent is.

## Drift is the slow version of the same failure

Not every version of this is a dramatic overnight loop. The quieter one is drift, where a stable agent slowly goes wrong because the world underneath it moved. A support agent tuned on last quarter's tickets starts mishandling this quarter's because the product changed and the questions changed with it. A pricing agent keeps applying a discount rule that was retired in March. Nothing looped, nothing crashed, and the agent looks exactly as confident as it did on day one. The output just got quietly worse.

The honest metric here is how much of the agent's output you actually trust unattended -- how often a human has to step in and correct or approve what it did. If that number is creeping up, the agent is drifting whether or not anything alarmed. Most teams never measure it, so they find out from a customer instead.

Drift and runaway loops are the same problem at different speeds, and they want the same discipline: a limit that lives outside the agent's own judgment. Scoping the agent's permissions up front is the other side of this coin -- when [you hand your AI agents the keys without scoping them](/post-ai-agent-access-scope), you decide how much damage each action can do, and a circuit breaker decides how many actions it can take before a human is forced back into the loop. You want both. One caps the blast radius per action, the other caps the duration of the mistake.

## Diligence now asks who can stop it

There is a fundraising reason to fix this beyond the operational one. Technical reviewers at seed and Series A have started asking, in plain terms, how you monitor, throttle, and shut down an agent that starts behaving badly. It is a fair question and it lands hard, because the honest answer for most early teams is "we would notice and turn it off," which is not an answer, it is a hope. An agent that can move money, email customers, or write to production data with no documented way to halt it is not read as an unfinished feature. It is read as an uncontrolled liability, and it goes on the list of [technical diligence red flags](/post-diligence-red-flags) that make an investor slow down.

The cost story is on the same page. A runaway agent does not just create a mess, it runs up a bill while it does, and that bill is unbudgeted by definition because you never planned for the loop. If you have not looked at what your agent costs when it behaves, let alone when it does not, that is the same blind spot I wrote about in [the unit economics of an AI feature](/post-ai-feature-unit-economics). A spend ceiling is the cheapest insurance against the worst version of that surprise.

## Where founders overdo it

The failure in the other direction is real, so say it plainly. You do not need an enterprise governance stack for an internal agent that drafts subject lines a human still sends. The dial is blast radius. Match the guardrail to what a bad loop would actually cost.

An agent whose worst case is a slightly-off draft that a person reviews before it goes anywhere needs a timeout and nothing more. An agent that touches money, sends things to customers, or writes to your production database needs all three ceilings and a kill switch you can reach from your phone without a deploy. Building the second one for the first case is wasted effort, and it teaches your team that the guardrails are theater. Building the first one for the second case is how you end up awake at 3am reversing refunds.

This is a judgment call, and it is exactly the kind that is hard to make well when you are also the person shipping the agent. If you want a second set of eyes on where your agents can run away and what it would cost you, [book a call](/book-a-call) or start with a [teardown](/teardown) and we will find the loops that have no floor under them.

## FAQ

### Can't I just watch it and turn it off if something goes wrong?
You can, and you should be able to, but that is a kill switch, not a circuit breaker. It only works when a human is watching in the window that matters, and the expensive failures happen when nobody is. The automatic limit is the one that saves you, because it does not depend on you being awake.

### What are the first three limits I should add?
A step or action cap so a single run cannot take wildly more actions than normal, a wall-clock timeout so a stuck loop cannot run for hours, and a spend budget so the agent halts before the bill does. Those three, set to a small multiple of what a healthy run looks like, catch most runaway scenarios without any cleverness.

### How is this different from scoping the agent's permissions?
Permissions decide how much damage any single action can do. A circuit breaker decides how many actions the agent can take before it is forced to stop and involve a human. They solve different halves of the problem -- one limits the size of each mistake, the other limits how long a mistake can go unnoticed -- and you want both.

### We are pre-launch with a small internal agent. Is this premature?
For a low-stakes internal agent, a single timeout is probably all you need for now, and building more than that is premature. The trigger to take it seriously is the moment the agent can touch money, customers, or production data on its own. At that point the circuit breaker is not premature, it is overdue.
