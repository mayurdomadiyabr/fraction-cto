---
title: Your AI agent is live and failing. Pull it or fix it in place?
slug: pull-ai-agent-back
date: '2026-07-17T13:30:00.000Z'
category: Decisions
excerpt: >-
  A live AI agent that just did the wrong thing in front of a customer is not a
  debugging problem first. It is a containment decision. Here is the order to
  make it in.
description: >-
  When your live AI agent misbehaves, decide fast: pull it back, shrink its
  scope, or patch it. Containment first, debugging second. Here is the order.
author: The founder of Fraction
readTime: 7
draft: false
---

If your live AI agent just took an action you can't explain, pull it back to a narrow, supervised mode first, then decide what to do next. You are not choosing between pull and patch. You pull first, because a wrong autonomous action keeps compounding while you debug, and only after it is contained do you decide whether to shrink its scope, patch it, or retire it. Founders get burned when they leave a misbehaving agent running because the fix feels close.

I have watched more than one founder lose a week to this. The agent does something odd on a Tuesday, the team says "we almost have it," and it keeps acting on real customer data until Friday. By then the cleanup costs more than the feature earned.

## The decision is containment, not debugging

When an agent misbehaves, the instinct is to open the logs and find the bug. That is the wrong first move if the agent is still taking actions that touch customers, money, or data you can't easily reverse.

Debugging is a calm activity. It assumes you have time. A live agent with write access does not give you time, because every minute it runs is another minute it can repeat the mistake at machine speed. The founder's first job is not to understand the failure. It is to stop the bleeding.

So the real question on the table is narrower than "what went wrong." It is: what is the smallest change that stops this agent from doing more harm, right now, that I can ship in the next ten minutes? Usually the answer is not a code fix. It is a scope cut, a kill switch, or a human put back in the loop. You debug after the agent can no longer surprise you.

I wrote a companion piece on the version of this problem you should have solved before launch in [what stops an AI agent that can run all night](/post-ai-agent-no-circuit-breaker). This post is about the day you didn't.

## Why live agents fail in ways the demo never did

The demo failed on quality. The bot gave a slightly wrong answer, you tuned the prompt, everyone clapped. That is the failure mode founders prepare for, and it is not the one that pulls agents back out of production.

Live agents fail on operations. A token expires and the agent silently retries against the wrong account. One misread field triggers a downstream action, which triggers another, and now three systems disagree about the truth. The model was fine. The plumbing around it was not. This is why a founder who only stress-tested answer quality is unprepared for the actual incident, and I broke that gap down separately in [your AI agent demo wowed the room, can it ship](/post-ai-agent-demo-to-production).

The practical consequence: you cannot judge whether to pull the agent by asking "is the model good enough." The model is rarely the thing that failed. Ask instead: what real-world action did it take, can I reverse that action, and can I guarantee it won't take the action again in the next hour. If any of those answers is uncomfortable, pull it.

## The three ways back

Once the agent is contained, you have three honest options. Most founders only consider the middle one.

**Pull it fully.** Turn the autonomous behavior off and route the work back to a human or a simple deterministic path. This feels like defeat. It is usually the cheapest option. A feature that is off is a feature that cannot cost you a customer while you think. You lose the demo shine; you keep the account.

**Shrink the scope.** Leave the agent running, but strip its authority. Let it draft instead of send. Let it flag instead of act. Cap it to one low-stakes segment of customers. This is the option that keeps the value while removing the blast radius, and it is the one teams reach for last because it means admitting the original scope was too wide. Scoping the agent down is the same discipline as scoping it up in the first place, which I covered in [you gave your AI agents the keys, nobody scoped them](/post-ai-agent-access-scope).

**Retire it.** Sometimes the incident is telling you the feature was a bad fit for an autonomous agent at all. If the task genuinely requires judgment you can't specify, and the cost of being wrong is high, the agent was always going to be a liability. Killing it is not a failure of engineering. It is a correct read of the risk.

The mistake is treating "patch it in place while it keeps running" as the default. It is the riskiest of the four things you can do, and founders pick it because it is the only one that doesn't require admitting anything.

## What supervised mode actually looks like

"Put a human in the loop" gets said a lot and built rarely. Concretely, supervised mode means the agent proposes and a person disposes, with three properties.

First, the human sees the action before it happens, not a log of it after. A dashboard of what the agent already did is not supervision. It is a post-mortem generator.

Second, approving is genuinely faster than doing the task by hand, or your team will quietly stop reading and rubber-stamp everything. If review is slower than the work, you have built theater, not a safeguard.

Third, there is a clean path back to full autonomy that you control, so supervised mode is a temporary state with an exit, not a permanent tax. You want to be able to say "the agent has run clean under supervision for 200 actions, we can widen it again" as a deliberate decision, not drift back because someone got tired of clicking approve.

If you cannot describe your supervised mode in those terms, you do not have one, and pulling the agent fully is the safer call.

## Build the off switch before you need it

The founders who handle this well are not the ones with the best models. They are the ones who decided, before launch, who owns the agent when it breaks and how it gets stopped in one action.

That is an ownership question as much as an engineering one. On a small team the person who built the agent is often heads-down on the next feature the day it fails. Someone has to own reliability as a job, not a chore squeezed between everything else. If nobody owns the off switch, the off switch does not get pulled, and the agent runs until a customer complains. This is the same reliability-versus-velocity trade I unpack in [freeze features and fix reliability, or keep shipping](/post-feature-freeze-reliability).

You do not need a large team to do this. You need one person with the authority to pull a live feature and the mandate to build the controls that make pulling it a ten-minute, one-command operation instead of a war room. Deciding who that is, and what "contained" means for your product, is exactly the kind of call a fractional CTO earns their retainer on. If you are staring at a live agent you are afraid to turn off, that is a good reason to [book a call](/book-a-call), and a technical [teardown](/teardown) will usually surface the missing off switch before your customers do.

## FAQ

### How fast should I pull a misbehaving live agent?

If it has write access to customer data, money, or anything you can't cheaply reverse, pull or shrink it the moment you see a failure you can't explain. Do not wait for a root cause. Containment first, diagnosis second.

### Isn't pulling the agent an overreaction to one bad action?

One visible bad action usually means several invisible ones, because agents act at machine speed and repeat. The single incident you saw is a sample, not the whole count. Pulling it lets you measure the real blast radius instead of guessing.

### Can I just add a guardrail and keep it running?

Sometimes, if the guardrail is a hard constraint the agent cannot route around, not another prompt asking it nicely. A prompt is a suggestion. A code-level cap on what actions are even possible is a guardrail. If you can only add the former quickly, contain first.

### Who should own the decision to pull an AI agent?

One named person with the authority to turn off a live feature without a meeting. On an early team that is often a fractional CTO or your most senior engineer. What matters is that the owner is decided before the incident, not chosen during it.

### Does pulling it back mean the agent was a mistake?

No. It means autonomous scope should be earned back through evidence, not granted by default. Most durable agent features get narrowed after their first real incident and widened again once they have run clean under supervision. That loop is the normal path, not a sign of failure.
