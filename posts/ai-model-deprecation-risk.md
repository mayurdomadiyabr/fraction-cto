---
title: The AI model your product runs on will be retired
slug: ai-model-deprecation-risk
date: '2026-07-08T00:00:00.000Z'
category: Decisions
excerpt: >-
  The model behind your AI feature is on a clock. Vendors retire models every
  few quarters, and when yours sunsets you migrate on their schedule. Here is
  how to carry that risk.
description: >-
  AI vendors retire models every few quarters. What model deprecation costs an
  early-stage startup, and how to build so a sunset email is not a crisis.
author: The founder of Fraction
readTime: 7
draft: false
---

If your product calls an AI model through someone else's API, that model has an expiration date you do not control. In 2026 the major providers retire models every few quarters, and when the one you shipped on enters its sunset window you have to re-test, re-tune, and migrate to a replacement on the vendor's clock, not yours. This is not a reason to avoid buying models. It is a standing cost you should plan for, the way you plan for a library upgrade, so the sunset email lands as a scheduled chore instead of a fire drill.

I am the founder of Fraction, and this has quietly moved up the list of things I check when I look at an early-stage AI product. A year ago the question was whether the model was good enough. Now I also ask what happens when it goes away, because for the first time that is a when, not an if.

## Why this became a real problem in 2026

For a while the model underneath your feature felt like electricity. You called the API, it answered, and you did not think about the version any more than you think about the voltage in the wall.

That assumption broke this year. Support windows that used to run eighteen to twenty-four months compressed to roughly half that. The providers are shipping new models fast, and to keep that pace they retire old ones on a schedule, sometimes forcing traffic onto a successor whether or not you asked for it. The practical result is that at almost any given moment, at least one model somewhere in a typical startup's stack is inside a retirement window.

None of this is malicious. It is the cost of riding a technology that is improving every quarter. But it changes what buying a model means. You are not buying a stable component. You are renting a fast-moving one, and the lease terms include eviction notices.

## What a sunset actually costs you

The migration itself is rarely the hard part. Swapping a model identifier in your code is an afternoon. The cost is everything around it.

The replacement model does not behave exactly like the one it replaces. Prompts that were tuned over months produce slightly different output. The tone shifts. An extraction that was reliably clean now drops a field one time in fifty. A classification that sat at ninety-four percent accuracy lands at ninety-one, or ninety-six, and you cannot tell which without measuring. If you have no way to measure, you are shipping a behavior change to every user and hoping.

So the real bill is regression work. Re-running your prompts against the new model, comparing the output to what you had, re-tuning the ones that drifted, and re-checking anything downstream that depended on the old output shape. For a founder with one AI feature and a handful of prompts, that is a focused week. For a team that has let prompts sprawl across the codebase with no evaluation harness, it is a scramble that eats a sprint and still leaks quality into production. This is the same trap I describe when a team has [built the wrong half of an AI agent](/post-build-or-buy-ai-agent): the model is the easy part, and the glue around it is where the work actually lives.

## The three ways founders get caught

I see the same three patterns, and all of them are avoidable.

### They hardcoded one model everywhere

The model name is a string literal scattered across a dozen files. There is no single place to change it, no way to run the old and new side by side, and no easy path to roll back if the new one is worse. A one-afternoon swap becomes a search-and-replace across the codebase with no safety net. The fix is boring and cheap: put the model choice behind one configuration point so switching it is a setting, not a refactor.

### They never wrote down what "working" means

This is the expensive one. If you cannot answer "how do I know the new model is at least as good as the old one," you have no way to migrate safely. You are choosing between shipping blind and manually eyeballing a few dozen examples, which does not scale and does not catch the quiet regressions. A small set of saved test cases with expected outputs, run before and after, turns a leap of faith into a checklist.

### They assumed a vendor equals stability

Founders pick a big-name provider partly for reassurance, then treat that choice as permanent infrastructure. But a large vendor deprecating on schedule is less stable, in the specific sense of version churn, than a smaller one that moves slowly. Size does not buy you a stable model version. It buys you a reliable company that will still retire the exact model you depend on. This is the gap between renting capability and owning a moat that I get into in [do you have an AI moat, or are you just renting one](/post-ai-moat-diligence).

## How to carry the risk without over-engineering

You do not need an abstraction layer that supports every model on earth. Early on that is wasted effort, and it usually makes the code worse. What you need is enough structure that a forced migration is a known-size job.

Three things get you most of the way. First, one place in the code where the model is chosen, so swapping it is a config change. Second, a handful of saved examples with expected outputs that you can run against any model to see if it holds up. Third, a habit of reading the vendor's deprecation notices instead of finding out from a 503 in production. That is the whole program. It costs a day or two to set up and it converts every future sunset from a crisis into a maintenance task.

The mistake in the other direction is real too. I have watched teams build elaborate multi-provider routing before they had a single paying customer, on the theory that they were de-risking. They were not. They were spending scarce engineering time insuring against a problem they could have absorbed in a week later, while the actual risk, that nobody wanted the product, went unaddressed. Match the effort to the stage.

## What this means when someone diligences you

If you raise, an investor's technical advisor will eventually ask what your product depends on and what happens if a dependency changes. "We call one model, hardcoded, and we have no way to tell if a replacement is worse" is a bad answer. "The model is a config choice and we have an evaluation set we run before switching" is a good one, and it takes the same two days to be able to say honestly. Model dependency is now part of how a technical read gets scored, and it is the kind of thing a [quick technical teardown](/teardown) surfaces in an afternoon.

Most of my job with early-stage founders is calling which risks to spend on now and which to carry cheaply until later. Model deprecation is squarely in the "carry it cheaply" bucket, as long as you do the two days of preparation before the sunset email arrives rather than after. If you are building on someone's model and are not sure how exposed you are, [book a call](/book-a-call) and we will size it together.

## FAQ

### How often are AI models actually being retired now?
Frequently enough that you should treat it as routine. Across the major providers, model support windows have compressed to roughly six to twelve months, and successors ship on a steady cadence. The safe assumption for planning is that any given model you depend on will enter a retirement window within a year, so build as if the next sunset is a matter of when.

### Should I use an open-weights model I host myself to avoid this?
It removes the forced-sunset problem, because nobody can retire a model whose weights you hold. But it trades that for the cost and responsibility of running inference yourself, keeping it patched, and getting the quality you would otherwise rent. For most pre-seed to Series A teams that is the wrong trade early, because the operational burden is larger than the deprecation risk you are avoiding. Revisit it when scale or data sensitivity actually justifies it.

### Is a multi-provider setup worth building up front?
Usually not before you have real usage. Supporting several providers doubles the surface you test and maintain, and early on that effort is better spent finding out whether anyone wants the feature at all. Get the cheap version first: one config point for the model and a small evaluation set. That gives you most of the portability benefit at a fraction of the cost, and you can add real multi-provider support later if the business ever needs it.

### What is the single most useful thing to do this week?
Write down ten to twenty real examples of what your AI feature should do, with the output you expect, and save them somewhere you can re-run them. That one artifact turns every future model change from a guess into a measurement, and it is the thing almost nobody has when the sunset notice lands.
