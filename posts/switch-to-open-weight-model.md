---
title: Your AI bill is climbing. Switch to an open-weight model?
slug: switch-to-open-weight-model
date: '2026-07-18T13:56:24.721Z'
category: Decisions
excerpt: >-
  The price gap between frontier APIs and open-weight models is real. But
  switching moves cost off an invoice you can read and onto engineering time you
  cannot.
description: >-
  A rising inference bill makes a cheaper open-weight model tempting. Here is
  the real cost of switching and a simple test for whether it is worth it.
author: The founder of Fraction
readTime: 8
draft: false
---

Your AI feature worked, users showed up, and the inference line on your bill has stopped being a rounding error. A cheaper open-weight model looks like the obvious fix, and the price gap is real: routine work that costs a lot on a frontier API can cost a fraction of that on a model whose weights are published. But for most early-stage teams the honest answer is not yet, and not wholesale. Switching does not delete the cost. It moves it off an invoice you can read and onto engineering time and reliability risk you cannot. The right first move is almost never a full migration. It is measuring which calls are actually expensive and routing only the cheap, high-volume, low-stakes ones to a cheaper model.

I have had this conversation three times in the last month, always after a founder opened their provider dashboard and got a small shock. The bill is now big enough to notice, and someone technical mentioned that an open model could do the same job for a tenth of the price. That sentence is true and incomplete, and the gap between true and complete is where the money actually goes.

## What "switch to an open-weight model" actually means

Two different things get blurred together in this decision, and separating them is most of the work.

A frontier API is the setup you almost certainly started with. You rent intelligence from a provider, you pay per token, and they run everything: the servers, the scaling, the uptime, the upgrades. You send text, you get text back, and you never think about a GPU. It is expensive per token and close to free in operational effort.

An open-weight model is one whose parameters are published, so you are allowed to run it yourself instead of renting access to someone else's. But "run it yourself" hides a fork in the road. You can pay a hosted provider to serve an open-weight model for you, which is cheaper per token than a frontier API and still someone else's servers and someone else's on-call. Or you can run the model on infrastructure you control, which is the cheapest per token and the heaviest to operate. Those are not the same decision, and founders routinely price the cheapest option and buy the responsibility of the hardest one without noticing. This is the same self-host-versus-managed math I walk through in [self-host it or pay for managed](/post-self-host-or-managed), just applied to the model layer instead of the database.

## The price tag is real. The bill is not just the price tag.

The per-token savings are genuine. If that were the whole story, everyone would have switched already. Three costs move off the invoice when you do, and none of them are smaller for being invisible.

The first is engineering time. Prompts do not port cleanly between models. The wording you tuned over months to get reliable output from your current model will behave differently on a new one, sometimes subtly, sometimes badly. Someone has to re-tune, re-test, and re-verify every prompt path, and then own the thing forever after. That is real senior time, and senior time is the most expensive thing you have.

The second is reliability. On a frontier API, uptime is the provider's problem. The moment you serve your own model, or even lean on a smaller hosted provider, uptime becomes your problem: rate limits, cold starts, capacity during a traffic spike, a failover plan for when the box falls over at 2am. You are not just buying cheaper tokens. You are buying an operational responsibility that did not exist on your team last week.

The third is the one that actually scares me, because it never shows up on any invoice: quality. A cheaper model is not the same model. It may be excellent on your boring, high-volume work and quietly worse on the edge cases that matter most. The failure mode is not an error message. It is slightly worse answers that you find out about through churn, support tickets, or a customer who stopped trusting the feature. Cost you can measure the day you switch. A quality regression you discover weeks later, after it has already done its damage.

## The test I use before switching anything

Before I let a founder touch this, I make them answer five questions honestly.

### Is inference actually a material share of your costs?

If your AI bill is two hundred dollars a month, stop. Your engineer's time spent migrating is worth more than anything you will save, and you are optimizing a rounding error while the real costs sit untouched. This only becomes a real decision when inference is a top-few line item, not when it merely annoys you.

### Is the workload high-volume and stable?

Savings compound on volume. A high-volume, boring, repetitive call is the ideal candidate to move. A low-volume or constantly-changing workload is not worth the migration tax, because you will pay the switching cost over and over as it changes.

### How high are the stakes on the output?

Sort your calls by what happens when one is wrong. Bulk classification, tagging, short internal summaries: low stakes, great candidates for a cheaper model. Anything customer-facing that touches money, legal text, or a promise you have to keep: leave it on the model you trust until you have proof, not a hunch, that a cheaper one holds up.

### Can you measure quality before and after?

If you cannot put a number on how good the output is today, you cannot tell whether a switch made it worse, and you are flying blind. An evaluation set is the precondition for this entire decision, not a nice-to-have. If you do not have one, building it comes first, which is the whole argument in [you shipped an AI feature, how do you know it is good](/post-ai-feature-evals).

### Do you have someone to own it?

A switch is not a one-time task. It is a standing responsibility: monitoring, re-tuning when the model updates, handling the incidents. If nobody on the team has room to own that, you are not saving money. You are deferring a bill to a future version of yourself who will be even busier.

## The move that captures most of the savings

Here is what I actually recommend to almost everyone pre-seed through seed, and it is not the dramatic migration. It is routing.

First, instrument per-feature inference cost so you can see which calls are expensive. Most teams have never broken the bill down this far and are shocked to learn that eighty percent of the spend comes from one or two high-volume paths. Then move only those paths, and only the low-stakes ones, to a cheaper model, while the hard and high-stakes calls stay on the frontier model you already trust. Cache aggressively where the same question comes up repeatedly.

A founder I worked with had a summarization feature that ballooned to a serious monthly number as usage grew. We did not migrate the product. We moved exactly one call, the routine per-item summary that ran on every upload, to a cheaper model, kept the customer-facing report generation where it was, and cached repeat documents. The bill dropped by more than half and no customer noticed, because the part they cared about never moved. That is the shape of a good outcome: most of the savings, almost none of the risk, no new operational shop to run.

## When a full switch is the right call

There is a version of this where migrating wholesale is correct, and it tends to arrive around Series A. Inference is genuinely a top cost line. The workload is huge and stable. You have, or can hire, the operational muscle to run a model in production. Sometimes there is a privacy or data-residency reason a customer will pay for that pushes you to self-host regardless of price. And sometimes you want out of a dependency on purpose, because [the model your product runs on can be retired out from under you](/post-ai-model-deprecation-risk) and owning the weights is one way to control that risk.

When you get there, treat it like leaving any other core vendor, with the same clear-eyed accounting of switching costs I use in [you have outgrown a tool, is it worth the cost of leaving](/post-migrate-or-stay-tool). And before any of it, make sure the feature makes money at the price you are actually paying, because a cheaper model does not fix a feature whose [unit economics were negative to begin with](/post-ai-feature-unit-economics).

If you are staring at a climbing inference bill and cannot tell whether you have a routing problem, a pricing problem, or a real migration on your hands, that is a very cheap thing to get a second opinion on before you spend a quarter on the wrong one. [Book a call](/book-a-call) and we will figure out which one it is, or [run a teardown](/teardown) on the feature first if you would rather start with the numbers.

## FAQ

### Are open-weight models actually as good as frontier models now?
On many routine tasks, close enough that you would not notice, which is exactly why this decision got real in 2026. On the hardest reasoning, the longest context, and the most ambiguous instructions, the frontier models still tend to lead. The mistake is treating "good enough on average" as "good enough for my hardest calls." Sort your workload by difficulty and stakes, and judge each slice on its own, not the model on a benchmark.

### How do I know if inference is even a big enough cost to worry about?
Break your bill down by feature and by call type before you do anything else. If AI inference is not in your top few cost lines, this is not your highest-value problem and you should close the tab. If it is, and one or two paths dominate the spend, you have a clear, contained target instead of a vague urge to switch everything.

### Can I just switch the model and keep my prompts?
Not safely. Prompts are tuned to a specific model's behavior, and the same wording can produce meaningfully different output elsewhere. Assume every prompt path needs to be re-tested against an evaluation set before you trust it in production. Skipping that step is how a cost win turns into a silent quality loss you find out about from customers.

### Isn't self-hosting always cheaper?
Cheaper per token, yes. Cheaper all-in, often no, once you count the engineering time, the on-call burden, and the reliability risk you just took on. A hosted open-weight provider is usually the sane middle: most of the price savings without you personally owning a GPU at 2am. Reserve true self-hosting for when the volume, or the privacy requirement, is large enough to justify running infrastructure.
