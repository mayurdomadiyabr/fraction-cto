---
title: Every tool you connect to your AI agent taxes every call
slug: ai-agent-tool-tax
date: '2026-07-17T15:29:29.279Z'
category: Pattern recognition
excerpt: >-
  Every tool you connect to your AI agent loads into the model's context on
  every request, used or not. That silent tax hits cost, latency, and quality at
  once.
description: >-
  Your agent loads every tool description on every call, before the question.
  How that tax shows up in your bill, latency, and error rate.
author: The founder of Fraction
readTime: 8
draft: false
---

A founder showed me a chart of his AI product's inference bill climbing steadily over four months while active usage stayed almost flat. He assumed his model provider had quietly changed pricing. It had not. In those four months his team had wired the agent up to nine new tools: a calendar, a CRM, a document search API, an internal database, a few smaller ones. Every one of them was making every request more expensive, slower, and slightly worse, and nothing in his dashboard connected the two facts.

Here is the short version. Most AI agents load the full description of every tool they can call into the model's context on every single request, before the user's question is even read. So each integration you add raises the cost and latency of all your other calls, and past a point it starts degrading answer quality too. The fix is not fewer features. It is loading only the tools a given request could plausibly need, and measuring what you spend before the first token comes back.

## Why every tool rides along on every request

When you give an agent a tool, you are not just handing it a capability. You are handing the model a written description of that capability: the name, what it does, every parameter, the type of each parameter, and usually a sentence or two of guidance on when to use it. The model needs all of that in its context to decide whether and how to call the tool. That description is not free. It is tokens, and tokens are what you pay for and what the model has to read through on the way to an answer.

The part founders miss is that this happens on the way in, not on the way out. The tool descriptions are loaded before the model has seen the user's message. So a request that ends up using zero tools still paid for all of them. A customer asking your agent a simple question that needs no calendar, no CRM, and no database still shipped the full manual for all three to the model, got billed for it, and waited a little longer while the model read past it.

A single tool's schema can run anywhere from a couple hundred tokens for something trivial to well over a thousand for a rich one with nested parameters. String forty of those together and you can be loading tens of thousands of tokens of pure tool documentation before a single word of the actual conversation. That is the tax. It is charged per request, it scales with the number of tools you connect, and it is close to invisible unless you go looking for it.

## The three bills nobody itemizes

The token cost is the obvious one, and it is real. If every call carries an extra fifteen or twenty thousand tokens of tool descriptions, and you are running hundreds of thousands of calls a month, that is a line item you can watch grow while your product does not. This is the same category of surprise I wrote about in [the AI feature whose unit economics quietly go negative](/post-ai-feature-unit-economics), except the cause is your own tool loadout rather than user behavior.

The second bill is latency. Every token in the context is a token the model has to process. More tool descriptions means a longer prompt means a slower first response. Your users do not know why the agent feels sluggish. They just feel it.

The third bill is the one that actually scares me, because it does not show up on any invoice: quality. Models do not attend to a huge context perfectly evenly. When the model has to choose among forty tools, many of them overlapping in purpose or vaguely described, it picks the wrong one more often. It calls the search API when it should have queried the database. The failure looks like the model getting dumber, and teams respond by upgrading to a more expensive model, when the real problem was that they buried the right tool under thirty-nine distractions. I have watched a team cut their error rate meaningfully by removing tools, which is a deeply counterintuitive fix until you understand what the context is doing.

## The ten-minute audit I run

When an agent product feels slow, expensive, or unreliable and nobody can say why, the tool loadout is the first place I look. The audit is not complicated.

Count the tools the agent loads on a typical request. Not the tools you have built. The tools that get loaded into context for an ordinary interaction. Teams are frequently surprised by this number, because tools accumulate and nobody ever removes them. This is the agent version of the [integration sprawl that nobody actually decided to build](/post-integration-sprawl).

Then measure tokens before the first token out. Most model APIs report prompt tokens and completion tokens separately. Look at prompt tokens on a simple request that uses no tools at all. That number, minus your actual instructions and the user's message, is the tax you are paying on every single call for the privilege of having tools available that this request did not touch.

Finally, look at how often each tool is actually called. Instrument it for a week. You will usually find that a handful of tools do almost all the work and a long tail of tools are called rarely or never. You are paying full freight on the long tail on every request, for close to nothing in return.

## What to do about it, and what not to

The wrong response is to rip out features. You built those tools for a reason, and a smaller product is not the goal. The goal is to stop paying for all of them on every call.

Load tools conditionally. The agent rarely needs every tool for every request. A support conversation and a scheduling conversation need different tools. Route the request first, then load only the relevant set. This alone can take a forty-tool context down to five or six for most calls, and it is the highest-leverage change available.

Group and consolidate. If you have five nearly identical tools that each hit a different endpoint, you often have one tool with a parameter. Fewer, cleaner tool descriptions cost less and confuse the model less. Overlapping tools are the ones the model picks wrong.

Consider a gateway if you are past a handful of integrations. There are now layers whose job is to sit between your agent and its tools and expose only what a given request needs, not the entire catalog. Past a real number of internal systems, it is worth an afternoon of evaluation.

And measure it as a metric you actually watch. Tokens-before-first-output per request belongs on the same dashboard as your bill and your latency. It is the number that tells you the tax is creeping up before the invoice does. While you are in there, this is also the moment to confirm nobody wired in a [tool nobody vetted](/post-ai-agent-unvetted-tools), because tool sprawl and security sprawl tend to arrive together.

## The pattern underneath

The thing to internalize is not "connect fewer tools." It is that in an agent product, everything you make available to the model has a standing cost, paid on every request, whether or not that request uses it. Capability is not free just because you already built it. It sits in the context, it gets billed, it gets read, and past a certain density it makes the model worse at its job.

This is one of those early architecture decisions that is cheap to get right at the start and annoying to unwind once a year of features has piled on. It rarely shows up as a crisis. It shows up as a bill that drifts up, a product that feels a half-second slower every month, and an error rate nobody can explain. If that is the shape of what you are seeing, the tool loadout is worth a look before you blame the model or the vendor.

## FAQ

### Does this apply if I use a framework or a hosted agent platform?

Yes, and often more so, because the abstraction hides the tool loadout from you. Frameworks make it a one-line change to add a tool, which is exactly why teams accumulate so many. Ask your framework how many tokens of tool schema go into a typical call. If nobody knows, that is the finding.

### Isn't this a rounding error compared to the actual generation cost?

Sometimes, early on. But it grows with two things at once: the number of tools you connect and the number of requests you serve. A cost that is a rounding error at a thousand calls a day with five tools is not a rounding error at half a million calls a month with forty. It scales in exactly the direction your product is trying to go.

### How do I know if my quality problem is tool overload versus the model?

Instrument which tool the agent calls and check it against which tool it should have called on a sample of real requests. If the model is choosing wrong among similar or overlapping tools, that is a context problem you can fix by trimming and consolidating, not a model problem you fix by paying more.

### We are pre-seed with one simple agent. Do I need to care yet?

Not urgently. With a handful of tools and modest volume this is not your problem this quarter. What is worth doing now is the one-line habit: know your prompt-token count on a no-tool request, and glance at it when you add integrations. The point of knowing early is that it stays cheap to fix. The teams that get surprised are the ones who never looked until the bill forced them to.

### Is this the same thing as prompt engineering?

No. Prompt engineering is about the instructions you write. This is about the machinery that rides along with every request regardless of your instructions: the tool descriptions, and increasingly other context the agent carries. Getting the loadout right is closer to an architecture and cost decision than a writing one, which is why it tends to fall through the gap between whoever owns the prompt and whoever owns the bill.

If your agent's cost or latency has been drifting and nobody can point at why, a [teardown](/teardown) will usually find it in an afternoon, and you are welcome to [bring the numbers to a call](/book-a-call) if you want a second read before you touch anything.
