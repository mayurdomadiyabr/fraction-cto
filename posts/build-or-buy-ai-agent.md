---
title: Building an AI agent? You may be building the wrong half
slug: build-or-buy-ai-agent
date: '2026-06-23'
category: Decisions
excerpt: >-
  Founders frame an AI feature as build or buy. The real question is which thin
  layer is actually your moat. Build that, rent the rest.
description: >-
  Stop framing your AI agent as build or buy. Buy the commodity plumbing and
  build only your data and evals - the part that is actually your moat.
author: The founder of Fraction
readTime: 9
draft: false
---

Short version: the build-versus-buy question for an AI feature is usually the wrong question. The right one is which thin layer is actually your moat, because that is the only part worth building yourself. Buy the commodity - the model, the orchestration plumbing, the generic tooling everyone else can also buy - and build only your proprietary data, your specific workflow, and the evaluation harness that proves the thing works. Most founders do the exact opposite. They spend months building the plumbing anyone can rent and quietly hand the defensible part to a vendor.

I have had four versions of this conversation in the last month, all with founders at pre-seed to Series A who are putting an AI feature at the center of their product. It arrives as a binary: do we build our own agent, or buy one of the platforms? The founder wants me to settle the bet. I almost never do, because the bet is framed wrong, and the framing is where the money gets lost.

## The question founders ask, and the one they should ask

"Build or buy" sounds like a clean decision with two outcomes. In practice an AI feature is not one thing. It is a stack of maybe six things, and you will buy some and build others no matter what, so arguing about the whole stack as a unit is how you end up overcommitted on the parts that do not matter.

Underneath almost every AI feature there is the model, the orchestration layer that strings calls together, a retrieval or memory layer, the integrations into your other systems, the data you feed it, and the evaluation harness that tells you whether the output is any good. Five of those six are commodities in 2026. You can rent them, they get cheaper every quarter, and your competitors are renting the same ones. One of them is yours. The mistake is treating all six as a single "build it so we control it" decision, because control over the commodity parts buys you almost nothing and costs you a great deal.

So the better question is not build or buy. It is: what is the smallest part of this I must own to keep my edge, and can I rent everything else? Answer that, and the build-versus-buy argument mostly dissolves.

## Why "build" usually means building the wrong half

When a founder tells me they are going to build their own agent, I ask what specifically they mean by build. Nine times out of ten the answer describes the plumbing: the framework that routes between tools, the prompt-management setup, the queue, the retry logic, the glue that holds calls together. That is real engineering work, satisfying to build, and it produces visible progress. It is also the part that has the least to do with whether the company wins.

None of that plumbing is defensible. A competitor can stand up the same orchestration in a weekend with an off-the-shelf platform, and increasingly they can do it for almost nothing, because the open-weight models and the agent frameworks have collapsed in price to a fraction of what the hosted alternatives cost. You can spend three months building a worse version of something you could have rented, and at the end you have spent your scarcest months of runway on infrastructure that confers no advantage. This is the same trap I described in the general [build, buy, or wait decision](/post-build-buy): the instinct to build for control is strongest exactly where control is worth the least.

Meanwhile the part that is genuinely yours often gets the least attention. Your proprietary data, the specific judgment your workflow encodes, the way you turn a messy real-world task into a reliable output - that is the moat, and it is frequently bolted on as an afterthought to the plumbing the team was excited to build. I have watched a founder demo a slick agent architecture and then admit, when pressed, that the actual quality of the answers came from a spreadsheet of hand-curated examples one of them maintained on the side. They had built the commodity and treated the moat as a side project. It should have been the reverse.

## What you should actually own

There are three things worth building yourself, and they are rarely the ones founders are most eager to build.

The first is your data and the loop that improves it. If your feature gets better because you have data nobody else has, or because you capture how users correct the output and feed it back, that loop is the asset. It is the thing a vendor cannot replicate by signing the same contract your competitor signed. Own it, instrument it, and treat it as the product, not the byproduct.

The second is the specific workflow you are encoding. Off-the-shelf agents are general. Your edge, if you have one, is that you understand a narrow task deeply enough to make the output reliable where a generic tool is merely plausible. That understanding lives in your prompts, your guardrails, your handling of the ten cases that actually matter to your users. That is worth building and defending.

The third, and the one almost everyone skips, is evaluation. You need a harness that tells you, every time you change something, whether the output got better or worse, measured against cases you care about. Without it you are flying blind, shipping changes on vibes, and you will not notice the regression until a customer does. This is unglamorous and it is the single highest-leverage thing a small team can build, because it is what lets you safely rent everything else. When the model you depend on changes underneath you - and it will - the eval harness is the difference between a calm afternoon and a fire drill.

## How to draw the line this quarter

The decision gets much easier when you stop deciding for all time and decide for the next two quarters. The economics here are moving fast, and a sensible line today will move as the prices and your volume move.

Start by buying everything. Wire up a hosted model and a platform, get the feature in front of users, and learn what actually matters before you build anything. The version of this feature you imagine is not the version users need, and you will waste any infrastructure you build before you know the difference. This is the same logic as treating an [AI-built MVP as a draft rather than a product](/post-ai-mvp-draft): the first version exists to teach you what to build properly, not to be defended.

Then, as you learn, pull exactly one thing in-house at a time, and only when you can name the reason. You are pulling your data loop in-house because the vendor cannot see your corrections. You are pulling your evals in-house because you keep getting surprised by regressions. You are not pulling the orchestration in-house because it would feel more like a real engineering team, which is the reason I hear most and the one that costs the most. If you cannot say in one sentence why owning a piece makes you harder to beat, keep renting it.

## When the line moves

There is a real crossover where building more of the stack starts to pay off, and it is mostly about volume and dependence. When you are running enough through a hosted vendor that the bill rivals an engineer's salary, or when a single vendor sits so deep in your product that their outage is your outage and their price hike is your problem, the math for owning more of it changes. That is a genuine decision and worth taking seriously when you reach it.

The mistake is reaching for that decision on day one, when you have neither the volume to justify it nor the knowledge to build the right thing. Premature ownership of an AI stack is just a new flavor of an old startup pattern, where teams build for a scale they have not earned yet. Buy until it hurts in a specific, measurable way, then build the thing that hurts. Do not build in advance of the pain.

If you are staring at this decision right now and the team is split between building a platform and wiring one up, that disagreement is usually a sign that nobody has separated the moat from the plumbing yet. A few hours of an experienced outside read often settles it faster than another week of internal debate, which is a large part of what a [codebase and architecture teardown](/teardown) is for. And if you want to pressure-test where your actual edge is before you commit a quarter of runway to building the wrong half, [book a call](/book-a-call) and we will map your stack against that one question: what must you own, and what should you rent.

## Frequently asked questions

### Should an early-stage startup build its own AI agent or buy a platform?

Buy first, almost always. Wire up a hosted model and an off-the-shelf platform, get the feature in front of real users, and learn what matters before building anything. Then pull in-house only the specific pieces that are your moat - typically your data loop and your evaluation harness - and keep renting the commodity plumbing. Building the whole stack on day one spends your scarcest runway on infrastructure that gives you no advantage.

### What part of an AI feature is actually worth building in-house?

Three things: the data loop that improves with use, the specific workflow and guardrails that make your output reliable where a generic tool is only plausible, and the evaluation harness that tells you whether changes help or hurt. These are the parts a competitor cannot replicate by signing the same vendor contract you did. The orchestration, the model, and the generic tooling are commodities; rent them.

### Is it cheaper to build now that open models are so inexpensive?

Cheaper to run, not cheaper to build. The falling cost of models and frameworks makes renting more attractive, not less, because the commodity layer keeps getting cheaper for everyone. Building still costs you engineering months and ongoing maintenance. Low model prices are a reason to buy the plumbing and spend your build effort on the narrow part that is genuinely yours.

### When does it make sense to bring more of the AI stack in-house?

When volume or dependence forces it. If your hosted vendor bill starts rivaling an engineer's salary, or if one vendor is so deep in your product that their outage and their pricing become existential risks, owning more of the stack starts to pay off. Reach that decision when the pain is specific and measurable, not in advance of it.

### How do I decide without a technical co-founder?

Make the team name the moat in one sentence before they build anything. If they cannot say plainly why owning a given piece makes you harder to beat, that piece should be rented. A non-technical founder does not need to adjudicate the architecture; they need to insist on that one question being answered honestly, and to get an experienced outside read when the team cannot agree.
