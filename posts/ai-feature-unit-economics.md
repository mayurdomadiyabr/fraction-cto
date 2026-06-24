---
title: Your AI feature might be losing money on every user
slug: ai-feature-unit-economics
date: '2026-06-24'
category: Pattern recognition
excerpt: >-
  An AI feature can lose money on every user without anyone noticing, because
  its cost is usage-based and shows up late. Find your cost per action first.
description: >-
  AI features have probabilistic, usage-based costs that can go negative per
  user before the invoice shows it. Find your cost per action before you scale.
author: The founder of Fraction
readTime: 8
draft: false
---

Short version: an AI feature can lose money on every single user without anyone on the team noticing, because its cost is usage-based and probabilistic, not fixed per seat the way normal software is. The bill is a lagging indicator. By the time the invoice tells you a flow is unprofitable, you have already scaled it to everyone. The fix is not a cheaper model. It is knowing your cost per action before you grow, instrumenting the model bill per feature, and capping the loops that quietly run up the meter.

I have had this conversation three times this month, always with founders who shipped an AI feature that users love and a finance picture that suddenly stopped making sense. The product is working, engagement is up, and the gross margin chart that used to sit comfortably above 70 percent the way SaaS margins do has started sliding toward something that looks more like a hardware company. Nobody did anything wrong on purpose. They just scaled a cost they had never measured.

## Software cost is flat. AI cost is not.

Traditional software has a comforting property: once it is built, serving one more user costs almost nothing. The marginal cost of a new seat is a rounding error, which is why software margins are high and why you can grow without watching the meter. Founders build a whole intuition on top of this. Add users, add revenue, the cost line barely moves.

An AI feature breaks that intuition. Every call to a model costs real money, the cost scales with how much the user does rather than how many users you have, and it varies wildly from one user to the next. A casual user might run your feature twice a week. A power user might run it four hundred times a day, feed it enormous documents, and trigger a chain of calls behind each click. Same plan, same price, radically different cost to serve. The user you are most proud of can be the one quietly costing you the most.

So the unit to think about is not the user. It is the action. And the cost per action is not fixed: it depends on how much context you stuff into each call, how many times the feature loops before it answers, and which model you route to. None of that is visible on your pricing page. All of it is visible on your cloud invoice, thirty days too late.

## The invoice is a lagging indicator

Here is how it goes wrong, and it is almost always the same shape. You ship a feature. On day one it is cheap, because you tested it on small inputs and light usage, and the cost per run was a few cents, so nobody wrote it down. Then usage got heavier and more varied than your tests. The context you pass each call crept upward as you added retrieval and history. The feature started chaining two or three model calls where it used to make one. Every one of those changes was reasonable on its own. Together they multiplied your cost per action by five, and you found out when the invoice arrived.

This keeps happening because the feedback loop is broken. The cost signal arrives weeks after the decision that caused it, aggregated into one big number with no breakdown by feature, so you cannot tell which flow is bleeding. You see that the bill went up. You cannot see that ninety percent of it comes from one summarization feature used by your fifty heaviest accounts, half of whom are on a free trial. By the time the pattern is legible, the feature is shipped and pulling it back is a fight.

This is the same failure mode I wrote about in [premature scaling](/post-premature-scaling): the team pours fuel on something before they understand its economics, and the scaling itself hides the problem until it is expensive to undo. AI just makes the loop faster and the numbers larger, because the cost grows with usage instead of sitting flat.

## The numbers I make founders find

When a founder shows me a margin that is sliding, I do not start with the model choice or the prompt. I start with four numbers, because until you have them you are guessing.

The first is cost per action: what one run of this feature actually costs you, today, on real user inputs rather than clean test cases. Not the average you hope for. The real one, measured over a week of actual traffic, including the heavy users.

The second is actions per account per month, and specifically the spread. The average is a trap here. You want the heavy tail, the accounts at the ninety-fifth percentile, because they decide whether your margin survives. A healthy average with a brutal tail is still a problem.

The third is cost to serve per account, the first two multiplied, compared against what that account pays you. This tells you whether a customer is profitable. I have watched a founder discover that their nineteen-dollar plan cost twenty-six dollars a month to serve for the accounts that used it most, which made their best customers their worst customers financially.

The fourth is the contribution margin of the feature as a whole, after the model bill, not the company-wide gross margin that blends the AI feature in with everything cheap. The blended number will let an unprofitable feature hide behind your healthy ones for a long time.

Most teams cannot produce these numbers when I ask, and that is the actual finding. You cannot manage a cost you have never measured at the level where the decisions get made.

## Where the money actually leaks

Once the numbers exist, the leaks are usually in a few predictable places, and almost none of them are the model's price per token.

The biggest is context bloat. Teams pass far more into each call than the task needs, because it is easy to throw the whole history and a pile of retrieved documents at the model and let it sort things out. Every extra bit of that context costs money on every single call, forever. Trimming what you send is often the single largest lever, and it usually improves quality too.

The second is uncapped loops. Agentic features that retry, re-plan, and chain steps can run up a startling bill on a single hard input, and without a ceiling on steps, one stubborn task can cost more than a hundred ordinary ones. A cap is not a quality compromise. It is the difference between a known worst case and an unbounded one.

The third is using your most expensive model for everything. Plenty of the work inside a feature is simple classification or formatting that a cheaper, smaller model handles perfectly well. Routing the easy parts to a cheap model and reserving the expensive one for work that genuinely needs it is unglamorous and often halves the bill. It is a close cousin of the moat-versus-plumbing question I raised in [building an AI agent](/post-build-or-buy-ai-agent): most of the stack is commodity work that does not need your premium option.

The fourth, and the one founders hate to hear, is pricing. If a feature is genuinely expensive to run and used heavily by design, the answer may not be engineering at all. A flat seat price is the wrong model for a usage-driven cost, and you may need a usage component, a fair-use ceiling, or a higher tier for the heavy accounts. That is a business decision, and it is yours, not your engineers'.

## What to do before you scale, not after

The move is to close the feedback loop before the feature is everywhere, not after.

Instrument cost per feature from day one, so the model bill is broken down by flow and you can see which one is growing. This is a small amount of engineering and the highest-leverage thing on this list, because it turns a lagging quarterly surprise into a number you watch weekly.

Set a cost budget per action and treat a breach as a bug. If a run is supposed to cost three cents and some inputs cost forty, that is a signal that something is looping or bloating, and you want to catch it while it is small.

And know your cost to serve your heaviest accounts before you chase more of them, because scaling an unprofitable flow does not fix it, it multiplies it. The cheapest time to find a margin problem is before you have grown it.

None of this requires a finance team or a platform rebuild. It requires someone with the judgment to ask the four questions early and the experience to know where the leaks usually are. That diagnosis is a large part of what an outside [codebase and architecture teardown](/teardown) surfaces, and it is cheap to fix in week one and painful to fix at scale. If your AI margin is drifting and nobody can tell you which feature is responsible, [book a call](/book-a-call) and we will find the number before the invoice does.

## Frequently asked questions

### Why is my AI feature's cost growing faster than my user count?

Because AI cost scales with usage, not seats. A handful of heavy users running the feature constantly, on large inputs, can cost more than thousands of light ones. Traditional software cost barely moves as you add users, so the intuition that growth is nearly free does not transfer. Track cost per action and the spread across accounts, not just totals, and you will see the heavy tail driving the bill.

### How do I find out if an AI feature is actually profitable?

Measure four numbers: cost per action on real traffic, actions per account per month including the heavy tail, cost to serve per account, and the contribution margin of that feature after the model bill. Compare cost to serve against what each account pays. The company-wide gross margin hides an unprofitable feature behind your cheap ones, so look at it in isolation.

### What is the fastest way to cut AI feature costs without hurting quality?

Usually trimming context. Teams pass far more into each call than the task needs, and every extra bit costs money on every call. After that, cap agentic loops so one hard input cannot run up an unbounded bill, and route simple steps to a cheaper model instead of using your most expensive one for everything.

### Is this an engineering problem or a pricing problem?

Both, and you have to know which before you act. If the cost is inflated by bloat and loops, it is an engineering fix. If the feature is inherently usage-heavy and you sell it at a flat seat price, no amount of optimization saves you and the fix is the business model. The four numbers tell you which situation you are in.
