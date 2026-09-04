---
title: AI writes your code. Do you still need a fractional CTO?
slug: fractional-cto-when-ai-writes-code
date: '2026-09-04T02:40:26.335Z'
category: Knowing when
excerpt: >-
  AI made writing code cheap, which raised the value of the three things it
  cannot do: decide what to build, judge the output, own the outcome.
description: >-
  AI writes your code, so do you still need a fractional CTO? The value moved
  from throughput to judgment, and that is the fractional CTO job.
author: The founder of Fraction
readTime: 7
draft: false
---

If AI writes most of your code, you still need a fractional CTO, and arguably you need one more than before. What changed is the job. When writing code was the expensive, slow part, technical leadership was mostly about managing the people who wrote it. Now that AI has pushed the cost of producing code toward zero, the scarce, valuable work is deciding what to build, judging whether what got built is safe and correct, and owning the consequences when it is not. That is exactly what a fractional CTO does, and none of it is something an agent can do for you.

## The cost of writing code fell. The cost of being wrong did not.

For a long time, the bottleneck in early-stage software was throughput. You had an idea, and turning it into working code took weeks of a scarce, expensive engineer's time. Technical leadership existed largely to allocate that throughput: hire the right people, keep them unblocked, review what they shipped.

AI coding agents broke that model by making throughput cheap and fast. A founder with no engineering team can now produce a working prototype in a weekend. This is real, and it is why so many people are asking whether the human layer of engineering leadership is still necessary.

But throughput was never the thing that killed early-stage companies. Building the wrong thing killed them. Shipping something insecure killed them. Making an architecture decision that looked fine at 100 users and fell over at 10,000 killed them. Those are judgment problems, and the agents that write your code do not have judgment. They have fluency. Fluency without judgment produces a large volume of confident, plausible, occasionally catastrophic output. The faster the fluency, the more judgment you need standing next to it.

## What the agents genuinely cannot do

It helps to be specific about where the gap actually is, because the answer is not "AI is bad at coding." AI is often good at coding. The gap is in three places.

The first is deciding what to build. An agent will happily implement whatever you describe, including the feature that does not matter, the integration you will regret, and the abstraction that will slow you down for a year. It has no stake in your roadmap and no memory of the ten similar features that failed at other companies. A founder without a technical partner tends to build the wrong things fast, which feels like progress and is actually motion. That failure mode has its own shape, and it is worth understanding why a team can [ship quickly and still build the wrong things](/post-shipping-wrong-thing-leadership-gap).

The second is judging the output. Agents write faster than any human can carefully read, so the constraint moves from writing to reviewing. Someone has to decide which of the thousand lines the agent produced are fine and which are a security hole, a licensing problem, or a decision that quietly locks you into a bad path. Without that person, you accumulate risk you cannot see. This is the review bottleneck, and it gets worse, not better, as your agents get faster, which is why [your AI agents writing faster than anyone can review](/post-ai-review-bottleneck) is now the core operational problem rather than a nice-to-have.

The third is owning the consequences. When the AI-built system goes down in front of your biggest customer, or a diligence team finds that no human can explain why the code does what it does, the agent is not in the room. Someone has to be accountable for the technical state of the company. Accountability does not delegate to a model.

## Why fractional, specifically, fits this moment

Granting that you need the judgment, why fractional rather than a full-time hire or a first engineer? Because the shape of the need matches the shape of a fractional engagement almost exactly.

The AI-heavy early-stage company does not need forty hours a week of someone writing code. The code is getting written. It needs a smaller amount of senior time spent on the decisions that compound: what to build next, what not to build, how to structure the parts that are expensive to change later, what has to be true before this thing is safe to put in front of paying customers. That is a few days a month of genuine seniority, not a full-time salary. The economics are stark. A fractional engagement typically runs a few thousand to fifteen thousand dollars a month, against three hundred to five hundred thousand in total compensation for a full-time technical executive who, at your stage, would be underused. If you want the arithmetic laid out, the piece on [whether a fractional CTO is worth the money](/post-fractional-cto-roi) walks through it.

A first engineer is a different tool for a different job. If you are asking what a hands-on engineer is even for once AI writes the code, the honest answer is more nuanced than "nothing," and it is covered in [what you hire an engineer for when AI writes the code](/post-hire-engineer-when-ai-writes-code). But an engineer, junior or senior, is not a substitute for the person deciding what the whole thing should be. You can have agents doing the typing and still be missing the one seat that decides whether any of it is the right typing.

## The version of this that is actually a scam

To be fair to the skeptics, there is a bad version of the AI-plus-fractional pitch. In 2026 a wave of services started bundling a thin layer of human oversight with a swarm of AI agents and charging a premium for the combination. Some of that is real value. Some of it is a markup on tools you could rent yourself, wrapped in a title. The test is the same one you would apply to any senior hire: is this person making decisions you could not make alone, and are they accountable for the outcome, or are they mostly forwarding you the agents' output with a confident summary? A real fractional CTO reduces the number of expensive mistakes you make. A repackaged agent reseller just adds a margin. Judging that difference is itself a judgment call, which is rather the point.

## So, do you still need one?

If AI writes your code and you have no senior technical judgment in the room, you do not have a cheap engineering team. You have a fast way to generate decisions you are not equipped to evaluate. The value did not disappear when the code got cheap. It moved. It moved from writing to deciding, from typing to reviewing, from doing the work to being accountable for it. That is the fractional CTO's job description, now more than before. What you are buying has always been judgment rather than throughput, and [what senior engineering judgment is actually worth](/post-paying-for-judgment) went up, not down, the day the throughput became free.

## FAQ

### If AI writes the code, isn't a fractional CTO just overhead?
No. The code getting cheaper does not make the decisions cheaper. Choosing what to build, catching the unsafe or wrong output before it ships, and owning the technical state of the company are exactly the things AI cannot do, and they are what a fractional CTO provides. The overhead worry applies to a full-time hire you would underuse, which is the case for fractional rather than against it.

### Can't I just review the AI's output myself as a non-technical founder?
You can review some of it, but you cannot judge what you cannot evaluate. Security holes, licensing problems, and architecture decisions that only bite at scale are invisible unless you know what to look for. That is the specific expertise you are paying a fractional CTO for, and it is most valuable precisely when the agents are fast.

### How is this different from hiring a first engineer?
A first engineer does the hands-on building and, increasingly, governs the agents doing it. A fractional CTO sits above that, deciding what should be built and whether the technical direction is sound. In an AI-heavy company you often need the leadership seat before you need a full-time engineer at all.

### How do I know if the fractional CTO is adding judgment or just reselling AI agents?
Ask whether they are making decisions you could not make alone and whether they are accountable for the outcomes. If the engagement is mostly forwarded agent output with a summary on top, you are paying a markup. If it is fewer expensive mistakes and a clear owner of your technical risk, that is the real thing. If you want to pressure-test a specific engagement, [book a call](/book-a-call) and lay out what you are actually getting for the money.
