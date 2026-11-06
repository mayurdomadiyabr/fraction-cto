---
title: A big company self-hosted its AI coding model. Should you?
slug: self-host-ai-coding-model
date: '2026-11-06T21:17:14.980Z'
category: Decisions
excerpt: >-
  Revolut says self-hosting cut its AI coding bill to a tenth. At startup size
  the fixed cost usually wins. Here is the test.
description: >-
  Should a startup self-host an open-weight AI coding model to cut costs? Why it
  pays at 2,000 engineers, rarely at 10, and what to do instead.
author: The founder of Fraction
readTime: 7
draft: false
---

A large company says it cut its AI coding bill to a tenth by running an open-weight model on its own GPUs. Should your startup do the same? For almost every team under about fifty engineers, the answer is not yet. Self-hosting turns a variable bill into a fixed one, and fixed costs only pay off when enough people use them all day. At startup size, the better move is to get control of the bill you already have and keep the option open for later.

The story that set this off was reported on 3 November 2026. [Analytics India Magazine](https://analyticsindiamag.com/ai-news/europes-biggest-tech-startup-cuts-ai-coding-costs-by-90-using-chinese-model) covered a conference talk by Revolut's head of AI operations, who said the bank now serves most of its AI coding work from an open-weight GLM model running on its own dedicated GPUs, and that the invoice is roughly one-tenth of what it used to pay commercial providers. These are self-reported figures from a conference session, not an audited result, but the shape of the claim is believable. It is also a claim about a company with roughly 2,000 engineers using the system.

Founders have started forwarding this kind of story to me with one line: "should we be doing this?" Here is how I think about it.

## Why the economics work at Revolut's size

The reported setup is 56 high-end NVIDIA GPUs serving about 2,000 engineers. The important number is not the GPU count. It is the ratio. A dedicated GPU costs roughly the same whether it is busy or idle. When thousands of engineers send requests across the whole working day, the hardware stays busy, and the cost per request falls far below what a pay-per-token API charges.

The article also notes that Revolut spent months tuning the serving stack, cutting response latency sharply while demand grew, without adding hardware. That is real engineering work by a dedicated team. It is part of the cost, even though it does not show up on the GPU invoice.

Put simply, three things make self-hosting cheap at that scale:

- **High, steady utilisation.** Many users across many time zones keep the hardware working.
- **A team to run it.** People whose job is inference performance, uptime, and upgrades.
- **A bill large enough to matter.** When individual engineers were reportedly spending thousands of dollars a month on API usage, a ten-times reduction pays for a lot of engineering time.

## Why it usually does not work at startup size

Now take a typical seed or Series A team: six to fifteen engineers, mostly in one or two time zones, using an AI coding tool for part of the day.

### You cannot buy a small slice of a cluster

Even a modest self-hosted setup for a capable coding model needs serious GPU memory. You pay for that whether your eight engineers are using it at 11am or asleep at 3am. A big company spreads that fixed cost over thousands of people. You spread it over eight, and most hours of the day it sits idle.

### Somebody has to run it

Serving a large model well is its own discipline: batching, caching, quantisation, monitoring, upgrades when a better model version appears, and fixing it at the worst possible time. At a startup, that somebody is one of your product engineers. Every week they spend tuning inference is a week they are not shipping the product your customers pay for. I made the same argument for product features in [switching to an open-weight model](/post-switch-to-open-weight-model): the cost moves off an invoice you can read and onto engineering time you cannot.

### Quality and tooling move fast

The commercial coding tools change constantly, and so do the open models. Today's best open-weight model may be overtaken in a few months, and the tools built around commercial models often get new capabilities first. A self-hosted setup commits you to doing your own upgrades on that cycle. I covered the general version of this in [your AI coding tool will change within a year](/post-ai-coding-tool-churn).

### The bill may not be as big as it feels

For most early teams, AI coding spend is real but still small next to salaries. If ten engineers cost you several hundred thousand dollars a year, a coding-tool bill of a few thousand dollars a month is a line worth managing, not a line worth an infrastructure project.

## A quick test: is your bill big enough to care?

Before anyone proposes self-hosting, answer three questions with real numbers.

1. **What did you spend on AI coding tools and APIs last month, in total?** Include seat licences, usage overages, and any API keys engineers use directly.
2. **How is it trending?** Flat, slowly rising, or doubling every quarter?
3. **Who is driving it?** Usually a small number of heavy users or one runaway workflow accounts for most of the spend.

If the total is a small percentage of engineering payroll and roughly flat, stop here. Your problem is not infrastructure. If it is large and climbing fast, the next step is still usually not self-hosting. It is control. The [AI coding tool bill nobody budgeted for](/post-ai-coding-tool-bill) walks through how that bill tends to grow.

## What to do instead at startup size

### Get visibility first

Put every AI coding tool and API key on company accounts, with usage reporting turned on. Many teams find that one long-running agent loop or one engineer's experiment is behind a spike. You cannot optimise a bill you cannot see.

### Set budgets, not bans

Revolut reportedly started with strict usage budgets too, well before it self-hosted. Per-person or per-team monthly limits with an easy way to request more keep costs predictable without slowing down the people getting real value.

### Route by task, not by habit

Not every task needs the most expensive model. Autocomplete, simple refactors, and test generation often run fine on a cheaper tier. Hard debugging and design work may justify the top model. Most commercial tools now let you choose, and a hosted open-weight model from an inference provider gives you open-model pricing without running hardware.

### Keep your workflow portable

Avoid building so much around one vendor's proprietary features that switching becomes a project. If your prompts, agent configurations, and review process can move between tools, you keep the option of self-hosting later, when the numbers justify it.

## When self-hosting does start to make sense

There are real cases where it is worth considering earlier than the headcount suggests.

- **Data constraints.** If customer contracts or regulation mean code or data cannot leave your own infrastructure, self-hosting may be a requirement, not an optimisation.
- **Very heavy, steady usage.** If you run AI agents around the clock in your product or pipeline, utilisation can be high even with a small team.
- **You already run GPU infrastructure.** If your product is built on your own models, the team and tooling exist, and coding workloads can share them.

Even then, start with a hosted open-weight model on a managed inference provider. You get most of the price benefit, none of the hardware commitment, and a clear read on whether the model is good enough for your team's work before you buy anything.

## What to tell your board if they ask

If an investor forwards the same story, a good answer is short: "Our AI coding spend is X a month, about Y percent of engineering cost, and growing at Z. Self-hosting pays off at much larger scale because it is a fixed cost. We are controlling spend through budgets and model choice, and we keep our tooling portable so we can revisit at a larger team size." That answer shows you know your numbers and that you are not chasing a headline.

If you want a second opinion on your AI tooling costs and whether the numbers point anywhere unusual, that is a common first conversation in a [fractional CTO engagement](/pricing). You can [book a call](/book-a-call), or start with a [technical teardown](/teardown) of your current setup.

## FAQ

### Is a Chinese open-weight model a security risk if we host it ourselves?

Running the weights on your own infrastructure means your prompts and code do not go to the model's creator. The remaining questions are about the model's behaviour and the licence terms, and you should review both. Some customers or regulators may have policies about model origin, so check your contracts before choosing one.

### How many engineers do you need before self-hosting pays off?

There is no fixed number; it depends on usage intensity, the model size, and your hardware costs. For most companies it is in the hundreds of heavy daily users, not tens. Do the arithmetic with your own bill before assuming either way.

### Can we use an open-weight model without running GPUs?

Yes. Several inference providers host popular open-weight models and charge per token, often much less than frontier APIs. That is usually the right first step for a startup curious about open models.

### Will the quality be as good as the commercial tools?

For many routine coding tasks, current open models are competitive. For the hardest tasks, results vary. Test on your own codebase with your own engineers for two weeks before switching anything important.
