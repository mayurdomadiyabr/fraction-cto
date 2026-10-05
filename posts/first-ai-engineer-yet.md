---
title: 'Do you need an AI engineer yet, or a good backend engineer?'
slug: first-ai-engineer-yet
date: '2026-10-05T08:18:56.861Z'
category: Knowing when
excerpt: >-
  Most seed startups calling a hosted model do not need an AI hire yet. The
  signs you do, and what to put in place until then.
description: >-
  When should a startup hire its first AI or ML engineer? Signs you need one,
  signs you do not, and what a backend engineer can own until then.
author: The founder of Fraction
readTime: 6
draft: false
---

A founder told me last month that the next hire had to be "an AI engineer". The product calls a hosted model in two places: it summarises a support thread and it drafts a reply. Both features work. Customers like them. The founder had read that every serious company now has an AI team, and the job post was already half written, with PyTorch and model training in the requirements.

The short answer: most pre-seed to Series A startups do not need a dedicated AI or ML engineer yet. If your AI features call a hosted model through an API, you have a product engineering problem with a model in the middle, and a strong backend engineer who owns evaluation and cost can carry it. You need a specialist when AI is the core of what you sell, when the quality of the model's output is the reason customers pay, or when the API bill, latency or data rules push you toward running models yourself.

## What "AI engineer" means on a job post now

The title covers at least three different jobs, and founders often hire the wrong one.

- **The applied AI engineer.** Builds features on top of hosted models: prompts, retrieval over your own data, tool calls, evaluation sets, guardrails, fallbacks. This is mostly software engineering with a new kind of unreliable dependency.
- **The ML engineer.** Trains, fine-tunes and serves models. Cares about data pipelines, GPUs, model versions and inference cost. Needed when you own the model, not when you rent it.
- **The research scientist.** Works on new methods. Almost no startup at seed needs one unless the research is the company.

If the job post asks for model training experience and the actual work is wiring a hosted model into a support tool, you will attract people who will be bored in a month, or who will start building a training pipeline you never needed.

## Signs you do not need one yet

These are the patterns I see when the answer is "not yet".

### Your AI features are thin layers over a hosted model

Summarise, classify, extract, draft. One or two calls per user action, a prompt, maybe some retrieval. A good generalist ships and maintains this. The hard part is not the model; it is knowing when the output is wrong, which is an evaluation habit, not a specialism. I wrote about that habit in [how to know if your AI feature is any good](/post-ai-feature-evals).

### Nobody has written down what "good output" means

If there is no evaluation set, no list of known failure cases and no owner for quality, a specialist hire will spend their first two months building that from scratch. You can build it now with the team you have, and you should, because you will need it to interview the specialist anyway.

### The AI feature is not why customers pay

If customers buy your product for the workflow, the integrations or the data, and the AI is a nice extra, then the AI feature should get engineering time in proportion to its value. A full salary dedicated to it is usually out of proportion.

## Signs you do need one

### Model output quality is the product

If customers churn when the answers get worse, and win deals because your answers are better than a competitor calling the same model, then quality work is core engineering. That is a full-time job: evaluation sets that grow every week, prompt and retrieval changes measured against them, regression checks before every model upgrade.

### The API bill is approaching an engineer's salary

When monthly inference spend gets close to what a senior engineer costs, the economics change. Caching, routing cheaper models to easy requests, batching, and possibly self-hosting an open-weight model become worth a person's full attention. I covered the self-hosting side in [switching to an open-weight model](/post-switch-to-open-weight-model) and the margin side in [AI features that lose money on every user](/post-ai-feature-unit-economics).

### Data rules or latency rule out the hosted APIs

Some customers will not allow their data to go to a third-party model. Some features need responses faster than a hosted call can deliver. Either one can push you toward running models yourself, and running models in production is ML engineering.

### You have three or more AI surfaces on the roadmap

One AI feature is a feature. Three or four, sharing retrieval, evaluation and cost controls, is a platform. Platforms need an owner, or each feature will reinvent the same plumbing badly.

## What to do instead, for now

If you are in the "not yet" group, three things carry you a long way.

1. **Give one engineer ownership of AI quality and cost.** Not as a side note: put it in their goals. They own the evaluation set, the model choice, the monthly bill and the fallback when the provider is down.
2. **Build an evaluation set of 50 to 100 real cases.** Pull them from production, label what good looks like, and run every prompt or model change against them. This is the single most useful asset a future AI hire will inherit.
3. **Track cost per user action.** One number on a dashboard: what an average AI-powered request costs you. When that number times your growth curve starts to scare you, that is your hiring signal.

If you are unsure which group you are in, an hour with someone who has made this call before is cheaper than a mis-hire. That is the kind of question we take on a [call](/book-a-call), and a [technical teardown](/teardown) will tell you whether your AI features are a thin layer or a real platform.

## If you do hire, hire the right one

Write the job post from the work, not the title. List the actual problems: "our retrieval returns the wrong documents for 20% of queries", "our inference bill grew faster than revenue last quarter". Then pick the profile that solves those problems. For most startups that is an applied AI engineer with strong backend skills, not a researcher. Ask candidates how they would know a change made the output worse. People who answer with an evaluation plan are the ones you want; people who answer with a model name usually are not.

## FAQ

### Can a regular backend engineer build our AI features?

Usually yes, if the features call hosted models. The skills that matter most are API integration, data handling, testing and cost control. What they need to add is an evaluation habit: a fixed set of real cases they check every change against.

### What is the difference between an AI engineer and an ML engineer?

An applied AI engineer builds products on top of existing models. An ML engineer trains, tunes and serves models. If you do not plan to train or host models, you probably need the first, or neither yet.

### When does the API bill justify a specialist?

When monthly model spend gets close to the fully loaded cost of a senior engineer, or when cost per user action is rising faster than revenue per user. At that point the savings from caching, routing and model choice can pay for the hire.

### Should a fractional CTO make this call?

It is a good use of one. The decision depends on your roadmap, margins and customer requirements together, and getting it wrong costs a year of salary. Our [pricing](/pricing) page shows how a short engagement for a decision like this is scoped.
