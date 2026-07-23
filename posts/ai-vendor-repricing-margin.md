---
title: Your AI vendor can change its price and move your margin
slug: ai-vendor-repricing-margin
date: '2026-07-23T14:15:00.000Z'
category: Decisions
excerpt: >-
  Your product runs on an AI vendor's API, so your gross margin is a price you
  do not set. Here is how to price the repricing risk before it hits.
description: >-
  Your AI vendor can raise prices or change billing and move your gross margin
  overnight. How to price that risk before you build, and where it lands.
author: The founder of Fraction
readTime: 9
draft: false
---

The biggest number in your cost of goods is often a price you do not set. If your product runs on a third-party AI API, your gross margin is a figure a vendor can change with a single announcement, and in 2026 several of them have: shifting from per-token to per-seat billing, retiring the cheap tier you built on, or simply raising the rate once you were too embedded to leave quickly. The fix is not to swear off vendors, which is not an option for an early team. It is to treat their pricing as a risk you price in before you build, so a repricing is an inconvenience instead of an existential event.

I usually get pulled in the month it happens, when a founder forwards me a provider's email and asks whether the new pricing quietly turns a healthy product into a money-loser at scale.

## The cost line you do not control

Most founders can tell me their revenue per customer to the dollar and go blank when I ask what it costs them to serve that customer. For a product with an AI feature at its center, a large share of that serving cost is one line: what you pay a model provider or an AI platform for every unit of work your product does. You negotiated none of it. You clicked a pricing page at launch, the numbers looked small against your seed round, and you moved on to shipping.

That line behaves differently from your other costs. Your rent is fixed, your salaries are your decision, your cloud bill grows with usage in ways you can forecast. The AI vendor line grows with usage too, but it also sits on top of a price a company you do not control can reset whenever its own margins or strategy demand it. You are running a business whose single largest variable cost is set by someone else's roadmap, and nothing on your dashboard warns you the day it changes is coming.

## What actually changes when a vendor reprices

A repricing is not one event. It arrives in a few different shapes, and they hurt in different ways.

The first is the plain rate increase. The per-unit price goes up, your cost of serving each customer rises in lockstep, and your gross margin compresses by exactly that amount. This is the easiest to see and the easiest to model, which makes it the least dangerous of the three.

The second is a change to the unit itself, and it is the one that catches teams off guard. A vendor that charged for the work your product actually did switches to charging for something correlated but not identical, and the two can diverge badly. The common 2026 version is a move away from usage-based billing toward a seat or subscription model. If your product does a lot of automated work on behalf of a small number of paying customers, a per-seat price can cost you many times what the old usage price did, even though your usage never changed. Your bill can multiply while your product does exactly what it did last month.

The third is the quiet one: the cheap tier goes away. The vendor retires the plan you are on, or deprecates the older model you built on, and steers you toward a newer, pricier one. Your invoice does not spike on a single line. It drifts as you migrate, and the drift is easy to write off as growth until you separate cost from revenue and see the margin has slipped. This is a cousin of the problem in [the AI model your product runs on will be retired](/post-ai-model-deprecation-risk), except here the pain is financial rather than technical: the model still works, it just costs more to keep using.

## Why founders miss it until it hurts

Three things conspire to keep this invisible until scale makes it loud.

You priced it at launch volume. When you set your own prices, your AI cost per customer was a rounding error, because you had a handful of users and free credits. Those unit economics were never tested at the volume where the vendor cost actually matters, so you carried a launch-day number into a scaled-up business and never rechecked it. This is the blind spot behind [an AI feature that might be losing money on every user](/post-ai-feature-unit-economics), and repricing makes it worse: the vendor can move the number after you have set your own prices around the old one.

You got locked in without deciding to. Nobody signs a document agreeing to depend on a single vendor. It happens the way most coupling happens, one integration at a time, until the vendor's specific API, model behavior, and quirks are woven through your product. By the time a repricing lands, moving off is a real engineering project, not a config change, and the vendor knows it. That leverage is precisely what [one vendor being able to take your whole product down](/post-vendor-concentration-diligence) is about, seen from the cost side rather than the uptime side.

And the invoice looks stable right up until it does not. A year of a steady rate trains you to stop watching it, and the month the vendor changes terms is the month you find out you were not tracking the one input that most determines whether your product is a business.

## How to price the risk before you build

You cannot stop a vendor from changing its prices. You can make sure that when it does, you already know what happens and have somewhere to go. A few concrete moves, none of which require you to be technical.

Know which vendor sets your margin. Ask your team a direct question: if this one provider doubled its price tomorrow, what would it do to our cost of serving a customer? If nobody can answer within a day, that is the finding. You should be able to name the vendor, the share of your serving cost it represents, and the margin at a plausible worse price, on one page.

Model a repricing, not just today's bill. Take your current volume and run the numbers at a meaningfully higher rate and at a changed billing unit. If a shift to per-seat or a rate increase turns your gross margin negative at the scale you are planning for, you have found a problem worth solving now, while it is cheap, rather than in the quarter it becomes real.

Keep an exit that is real, not theoretical. You do not need to run two vendors in parallel, which is its own tax. You need switching to be a bounded project rather than a rewrite, which usually means keeping the vendor behind a thin seam in your code instead of letting its specifics leak everywhere. This is the same instinct as knowing [when it is worth the cost of leaving a tool you have outgrown](/post-migrate-or-stay-tool). When a repricing hits, that seam is what lets you weigh [moving some work to a cheaper open-weight model](/post-switch-to-open-weight-model) as a genuine option rather than a fantasy.

Read the terms for what they promise. Most usage-based AI pricing comes with no price lock at all, so the rate you see is the rate until they change it. If a vendor will commit to pricing for a term, that commitment is worth more than a small discount. If they will not, that is information about how much of your margin you are really renting.

Instrument cost per unit, not just the total. Watching cost per customer, or per key action, as a live number next to revenue is the single habit that prevents most of this pain. A repricing shows up there immediately, months before it surfaces in a board deck as a margin that mysteriously slipped.

## Where the bill lands if you ignore it

The reason to do this while it is quiet is that the alternative is doing it in front of an audience.

It lands in diligence. An investor now treats gross margin as a technical question, and one of the sharpest versions is where your cost of goods comes from and how much of it a third party controls. "Our margin depends on a price our biggest vendor can change, and we have not modeled what happens if they do" is not an answer that survives a serious raise.

It lands in an enterprise deal. A large customer asks you to commit to pricing over a multi-year contract. If your own costs can be repriced under you at any time, you are either quoting a price you cannot safely stand behind or padding it so much you lose the deal. Founders who have modeled their vendor risk price with confidence. The ones who have not are guessing.

And it lands in the worst month. Vendors tend to reprice when their own economics shift, which often coincides with a market moment when your revenue is under pressure too. The repricing arrives the same quarter your growth slows, and a margin you assumed was durable turns out to have been on loan the whole time.

None of this means avoiding the best tools or building everything yourself. It means knowing, before you are deep in, which outside price your business rests on, what a plausible change to it does, and how fast you could respond. That is a decision you can make in an afternoon, and far easier before the email arrives than after.

## FAQ

### Should we just build our own model to avoid vendor pricing risk?

Almost never at pre-seed to Series A. Building and running your own model trades a pricing risk you can model for an engineering and operations cost that is far larger and harder to predict, and it rarely pays off below very high, stable volume. The goal is not independence for its own sake. It is knowing which vendor sets your margin and keeping the option to move if the math ever turns. Own the decision, not necessarily the model.

### How do I model this if I am not technical?

You do not need to read code, just two numbers and one afternoon. Ask your team for your current cost per customer from the vendor in question, and what it becomes at a higher rate and a changed billing unit at the scale you are targeting. If those figures do not exist yet, that is the first thing to fix. Put today's margin and the repriced margin side by side on one page, and you will know immediately whether to act now or simply watch.

### A vendor just changed our pricing and our margin is hit. What now?

Do not rush a migration in a panic, and do not just eat it silently. First, get the real number: recompute cost per customer and gross margin under the new terms at your actual volume, so you react to facts rather than fear. Then weigh three levers in order of speed: adjust your own pricing or packaging, move the highest-volume low-stakes work to a cheaper option behind your existing seam, and only then consider a larger switch. For a second read on which lever fits your numbers, [book a technical call](/book-a-call), or start with a [teardown](/teardown) of where your real cost risk sits.
