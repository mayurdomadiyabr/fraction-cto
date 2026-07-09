---
title: You gave your AI agents the keys. Nobody scoped them.
slug: ai-agent-access-scope
date: '2026-07-09'
category: Pattern recognition
excerpt: >-
  The AI agents in your stack are holding broad, long-lived credentials nobody
  scoped. Here is how that goes wrong at pre-seed to Series A, and the fix.
description: >-
  Your AI agents likely hold broad production access nobody decided to grant.
  How to scope agent identities before it becomes a breach or a diligence flag.
author: The founder of Fraction
readTime: 6
draft: false
---

Somewhere in your stack, an AI agent is holding a credential that can read your database, deploy to production, or call your payment API. Nobody decided to give it that much. It inherited a broad, long-lived key because that was the fastest way to make the demo work. The fix is not to rip agents out. It is to scope each one to a narrow, short-lived, task-bounded identity, so a single leaked key cannot touch everything you own. Here is how that goes wrong between pre-seed and Series A, and what scoping actually looks like.

## How the over-permission happens

No founder sits down and decides to give a bot admin rights. It happens in three small steps, each of which felt reasonable at the time.

First, someone wires up an agent to do a real job: a coding assistant that can open pull requests and trigger deploys, an in-product support agent that reads customer records, a back-office agent that reconciles invoices. To make it work on a Friday afternoon, they hand it the same credentials a human engineer uses, or a fresh API key with every scope checked because unchecking them meant reading docs.

Second, the demo works. It reads the data, it takes the action, the room is impressed. Nobody goes back to tighten the key, because tightening it risks breaking the thing that just worked. The broad credential becomes load-bearing.

Third, you add a second agent, and a third. Each one gets its own broad key, or worse, they share one. Six months later you have a handful of non-human identities that can each touch most of your systems, and no single person can tell you what any of them is actually allowed to do. I have walked into pre-seed companies with two human engineers and nine active machine identities, most of them created by an AI tool that spun up a helper and never cleaned it up.

The uncomfortable part: an agent is not a passive key holder like an old service account. It chains actions. It can call one tool, use the result to call another, spawn a sub-agent, and write and run code along the way. So the blast radius of one leaked agent credential is not one table or one endpoint. It is everything that agent can reach, plus everything it can reach through the next hop.

## Why this is a 2026 problem, not a someday problem

Two things changed this year that move agent access from a nice-to-have to a real line item.

The first is scale. In most cloud setups, machine identities now vastly outnumber human ones, and AI agents are the fastest-growing category. When your headcount is five and your machine-identity count is thirty, the humans are no longer where the risk lives. Your attack surface is a set of keys you did not audit.

The second is that buyers and investors started asking. Technical diligence in 2026 increasingly includes a specific question about how autonomous systems are permissioned and monitored. Enterprise security questionnaires now have agent-access sections. If your answer is a shrug, that is a stall on the deal, the same way an empty data room stalls a round. This is the same dynamic I wrote about in the [security questionnaire that stalls your biggest deal](/post-security-questionnaire-deal) and in why the [technical half of your data room is probably empty](/post-technical-data-room): the work is invisible until someone asks, and then it is urgent and expensive.

It is worth separating this from a related risk you may already be tracking. The vulnerabilities that hide inside AI-generated code are about what the agent *wrote*. This is about what the agent can *do*. You can have clean, well-reviewed code and still hand it a key that owns your whole account. Both matter, and they are different problems. If code quality is your worry, that is [the security holes hiding in your AI-written code](/post-ai-code-security-holes); this piece is about the identity the code runs as.

## What scoping actually looks like

You do not need an identity platform or a security hire to fix this at your stage. You need three habits and an afternoon.

Give every agent its own identity. Not a shared key, not a human's credential. One agent, one identity, so that when something goes wrong you can see which agent did it and revoke exactly that one without breaking the others. Shared keys are the machine-identity version of one password for the whole team.

Scope each identity to the narrowest job it actually does. The support agent that reads customer records does not need write access to your billing system. The deploy agent does not need to read your customer database. Write down, in one sentence per agent, what it is allowed to touch. If you cannot write that sentence, the agent is over-permissioned by definition.

Make the credentials short-lived. A key that expires with the task is a key that cannot be quietly harvested and used six months later. This is the single highest-leverage change, because it turns a permanent liability into a temporary one. Long-lived, broadly scoped keys are the ones that show up in breach post-mortems.

Then keep a log of what agents actually did. Not for compliance theater, for the moment when a customer asks why their record was changed and you need an answer that is not a guess.

None of this is exotic. It is the same least-privilege discipline good engineers apply to humans, pointed at machines. The reason it gets skipped is not difficulty. It is that nobody owns it, and it never breaks loudly enough to force the issue until it breaks very loudly.

## Who owns this at a startup with no security team

This is the honest gap. At pre-seed to Series A, agent access falls between chairs. The founder assumes an engineer is handling it. The engineer assumes it is a founder-level policy call. The agency or contractor who wired the agent in assumes it is your problem now. So it sits.

Someone has to own the boring inventory: every agent, what it can touch, whether its key expires, who gets paged if it misbehaves. That is a governance job, not a coding job, and it is exactly the kind of thing a [fractional technical leader](/pricing) sets up in a week and then leaves running. When I run a [technical teardown](/teardown) for a founder, agent and machine-identity access is now a standard section, because I keep finding the same unscoped keys in company after company.

The payoff is not just avoiding a breach. It is being able to answer the diligence question in one paragraph instead of a panicked week, and being able to add the next agent without widening the blast radius every time.

## Frequently asked questions

### Does this mean AI agents are too risky to use?

No. It means they need the same access discipline you would apply to a new employee, applied faster and to more of them. The risk is not the agent. The risk is the unscoped, long-lived key you handed it. Scope the key and the agent is a productive teammate.

### We are five people. Isn't this premature?

The opposite. Five people is when it is cheapest to fix, because you have three agents, not thirty, and no legacy sprawl to untangle. Doing it now is an afternoon. Doing it after your first enterprise deal, under a security questionnaire deadline, is a fire drill.

### An agency set up our agents. Is this their job or ours?

Once the code runs against your accounts, the risk is yours regardless of who wrote it. Ask your agency to document, per agent, what each identity can access and whether the credentials expire. If they cannot produce that in a day, that itself is the finding.

### How do I even know which agents have access to what?

Start with an inventory. List every API key, service account, and machine identity, then note which were created by or for an AI tool and what each can reach. Most founders are surprised by the count. That surprise is the point, and the list is the first deliverable.

### What is the fastest first step?

Rotate and shorten the lifetime of your most powerful agent key, and give that one agent its own dedicated identity. That single move shrinks your worst-case blast radius more than any policy document. If you want a second pair of eyes on where to start, [book a call](/book-a-call) and we can look at your actual setup.
