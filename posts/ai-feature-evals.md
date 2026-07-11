---
title: You shipped an AI feature. How do you know it is good?
slug: ai-feature-evals
date: '2026-07-11'
category: Pattern recognition
excerpt: >-
  Your AI feature demoed well and shipped. But how do you know it stays good
  after a prompt change or model swap? Evals are the cheap answer.
description: >-
  How founders know an AI feature is actually good: a lightweight eval habit you
  can start in an afternoon with 25 real cases, not a platform.
author: The founder of Fraction
readTime: 7
draft: false
---

You shipped an AI feature. It demoed well, a few customers like it, and it is live. Now answer a harder question: how do you know it is still good tomorrow, after you change a prompt, swap the model, or a user types something you never tried? Most early teams answer this by eyeballing a handful of outputs and hoping. The discipline that replaces hope with a number is called an eval, and you can start one in an afternoon with about twenty-five real examples and a short list of what "good" means. It is the cheapest insurance an AI product can buy, and almost nobody buys it until something breaks in front of a customer.

I keep meeting founders who can tell me their signup conversion to the decimal but cannot tell me whether their AI feature got better or worse last week. That is not a character flaw. Traditional software either works or throws an error, and you notice. AI features fail quietly, in the space between "technically returned an answer" and "returned a good answer," and that space is invisible unless you are measuring it on purpose.

## Why "it works" is a claim you cannot currently defend

A normal function is deterministic. Same input, same output, and a test either passes or fails. Your AI feature is not like that. The same question can produce a good answer on Tuesday and a subtly wrong one on Wednesday, because the model is probabilistic, because you edited the prompt, or because the provider updated the model underneath you in a way you felt but did not measure.

So when you say the feature "works," what you actually mean is that it worked the handful of times you watched it, on the inputs you happened to try, which were the inputs you already knew it handled. That is the demo. Real users bring messier inputs, and they bring them when nobody is watching. The gap between "worked in the demo" and "works for a stranger at 2am" is exactly where AI products get into trouble, and I have written about the broader version of that gap in [whether your AI demo can actually ship](/post-ai-agent-demo-to-production). Evals are how you close it.

## The two wrong answers founders reach for

When I raise this, founders tend to jump to one of two extremes, and both are mistakes.

The first is ship and pray. You push changes, glance at a few outputs, and let production be your test suite. This feels fast. It is fast, right up until you tweak a prompt to fix one customer complaint and silently break three things that were working. You will not find out from your dashboard. You will find out from a churned customer, weeks later, with no idea which change caused it.

The second is the opposite panic: deciding you need a real evaluation framework, so you stop shipping and spend a month building elaborate tooling before you feel allowed to touch the feature again. For a five-person company before product-market fit, that is its own kind of waste. You do not have the time, and you do not yet know enough about your own failure modes to design the perfect harness.

The right answer is in the middle, and it is smaller than both. Treat evaluation as a lightweight habit, not a platform project.

## What an eval actually is, in founder terms

Strip away the tooling and an eval is three plain steps.

First, write down what good looks like. Not in your head, on paper. For a support-answer feature, good might mean: correct, grounded in our actual docs, does not promise things we do not do, stays on topic. Five or six concrete criteria you could hand to a new employee.

Second, collect a small set of real cases. Pull twenty to thirty actual inputs, ideally from production, including the ugly ones customers really send. This set is the single most valuable artifact here. It is your product's reality, written down.

Third, score outputs against your criteria and track the number over time. You can do the scoring by hand at first, or have a model grade against your rubric once the set grows. What matters is that before you ship a prompt change, you run it against the set and see whether the score went up or down. Now a change is a measurement, not a prayer.

That is the whole thing. Twenty-five cases, a handful of criteria, and the rule that you check the set before you ship. It costs an afternoon to stand up and it converts every future change from a gamble into a maintenance task.

## What this looks like in the room

A founder I worked with had an AI feature that summarized customer calls. A big customer complained that summaries were too long, so the team edited the prompt to make them shorter. Complaint solved. Three weeks later a different customer left, and in the exit conversation mentioned the summaries had started dropping the action items entirely. The shorter-summary change had done that. Nobody caught it because nobody had a set of examples to run the change against. The fix that solved one problem had quietly created a worse one, and it cost a customer to discover.

Standing up a twenty-five case eval set would have caught it in minutes: run the new prompt, watch the "captures action items" score fall off a cliff, and know before shipping. The team was not careless. They were flying without instruments, which feels fine right up until the weather changes. This is the same trap as [an AI team that feels fast but is not actually shipping value](/post-ai-team-feels-fast) -- motion without a way to check direction.

## When you actually need this, and when you do not

I am not telling you to evaluate everything. A throwaway prototype nobody depends on does not need an eval set, and building one is premature. The line is real users depending on the output, or you changing the system often enough that regressions are likely. If either is true, you are past the point where eyeballing is responsible.

You also do not need to buy anything yet. The instinct to purchase an evaluation platform before you have written down what good means is backwards. Start with a spreadsheet and twenty-five real cases. Add tooling only when the manual version genuinely hurts, which is a good problem and a much later one. Buy the platform to scale a discipline you already have, never to substitute for one you do not.

There is a fundraising edge here too. Technical diligence on AI products has started asking how teams know their features are good, because an AI company with no evaluation discipline is one that cannot improve safely or prove it is improving at all. The founders who can show a simple eval set and a trend line look like operators. The ones who say "it seems to work well" sound like they are hoping. That difference is starting to show up in how a technical reviewer scores you, the same way an AI-built product that reads as [a draft rather than a finished thing](/post-ai-mvp-draft) does.

## Frequently asked questions

### Isn't this just testing?

It is testing adapted to a probabilistic system. Traditional tests assert an exact answer and pass or fail. Evals score quality on a spectrum against criteria you define, because there is no single correct output. Same instinct, different mechanics, and your normal test suite does not cover it.

### We only use a hosted model through an API. Do we still need this?

Yes, and arguably more. You do not control that model, so it can change beneath you, and your prompt is doing more work than you think. An eval set is how you notice when a provider update shifts your output quality, and how you safely move to a different model when you need to.

### How much time does this really take to start?

An afternoon for the first version. Writing your criteria is an hour of arguing about what good means, which is useful on its own. Collecting twenty-five real cases is an hour of pulling from logs or support tickets. The rest is scoring, which you can do by hand until volume forces something more automated.

### Who owns the eval set in a small team?

Whoever owns the feature's quality, which early on is often the founder. It is not a job to hire for yet. It is a habit to install, and the person closest to what customers actually need should hold the definition of good. If you are not sure how to start, that is the kind of thing a short technical read can set up with you -- see [what a teardown looks like](/teardown) or [book a call](/book-a-call).
