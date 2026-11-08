---
title: Your Gemini Flash bill doubles on January 1. Plan for it now
slug: gemini-flash-price-doubles-january
date: '2026-11-08T06:32:49.274Z'
category: Decisions
excerpt: >-
  Google's introductory Gemini Flash rate ends December 31 and the token price
  doubles. Measure the hit now and decide before January.
description: >-
  Gemini 3.6-3.8 Flash token prices double on Jan 1, 2027. How founders should
  size the hit, trim usage and decide before the bill lands.
author: The founder of Fraction
readTime: 7
draft: false
---

If your product calls one of Google's recent Gemini Flash models, your token price is scheduled to double on January 1, 2027. The introductory rate of $0.75 per million input tokens and $3.75 per million output tokens ends on December 31, and the standard rate of $1.50 and $7.50 takes over. That is not a rumour or a forecast. It is written on [Google's Gemini API pricing page](https://ai.google.dev/gemini-api/docs/pricing) as of this writing, for Gemini 3.6, 3.7 and 3.8 Flash.

The short answer for a founder: work out what your December bill looks like at double the token price, decide in November whether that is acceptable, and use the next seven weeks to cut usage or test an alternative. Do not find out from the January invoice.

## Why introductory pricing is a different kind of risk

Most AI pricing risk is uncertain. A vendor might reprice, a model might be retired, a competitor might undercut. We covered the general version in [how an AI vendor can change its price and move your margin](/post-ai-vendor-repricing-margin).

Introductory pricing is the opposite. You know the date and you know the new number. The only reason it hurts is that teams adopt a model at launch, build cost assumptions around the price they see, and nobody owns the calendar.

The pattern I see is always the same. An engineer picks the new model because it is better and cheaper than what came before. The cost per request goes into a spreadsheet, or more often into somebody's head. Pricing for your own customers gets set with that cost in mind. Then the launch price ends and the gross margin on your AI feature quietly halves, and it takes a month to notice because the bill arrives in arrears.

## Work out what doubling actually does to you

Doubling the token price does not double your company's costs. For most early-stage products it is a small number, and for a few it is existential. You need to know which group you are in.

Take an illustrative product that sends 400 million input tokens and 60 million output tokens a month through a Flash model.

- At the introductory rate: 400 x $0.75 = $300, plus 60 x $3.75 = $225. Total $525 a month.
- At the standard rate: 400 x $1.50 = $600, plus 60 x $7.50 = $450. Total $1,050 a month.

An extra $525 a month is annoying but not a strategy problem for most seed companies. Now take the same feature at a company that has grown into it: 20 billion input tokens and 3 billion output tokens a month. That goes from $26,250 to $52,500 a month, an extra $315,000 a year. At that size it is a board conversation.

The question is not the absolute number. It is the number divided by what that feature earns. If AI cost is 8 percent of the revenue it supports, doubling to 16 percent is survivable. If it was already 30 percent, you are about to sell the feature at or near a loss.

To get these numbers you need two things most early teams do not have: token usage broken down by feature, and revenue attributed to that feature. If you only have one total line on a cloud bill, getting the breakdown is the first job.

## Seven weeks of practical options

You have roughly until the end of December. That is enough time for most of these, and none of them requires rewriting your product.

### Measure and trim the waste first

In almost every AI feature I review, a large share of tokens do nothing useful. Long system prompts resent on every call, entire documents passed in when a few paragraphs would do, retries that silently repeat full requests, and verbose output nobody reads. Trimming these often cuts usage meaningfully before you change anything else. It is also the only option that saves money at both the old and new price.

### Use the discounted tiers where latency does not matter

Google, like the other large providers, offers cheaper ways to run work that does not need an instant answer, such as batch processing and lower-priority tiers, and discounts for cached repeated input. The rates for those tiers also change on January 1 according to the same pricing page, so check the new numbers rather than assuming the old discount holds. Nightly summaries, report generation and back-office classification are good candidates. Anything a user is waiting on usually is not.

### Run a real evaluation against an alternative

A smaller Flash-Lite style model, an older model still on standard pricing, a competitor, or an open-weight model you host may do your specific task well enough. "Well enough" has to be measured, not guessed. Build a test set of 100 to 200 real inputs with known good outputs, run each candidate, and compare quality and cost side by side. Our post on [switching to an open-weight model](/post-switch-to-open-weight-model) covers when hosting your own actually pays off, which at seed stage is less often than founders hope.

### Fix your own pricing before January

If your customer pricing was set with the introductory token cost in mind, now is the time to revisit it, not after margins drop. Usage-based tiers, a fair-use cap on the AI feature, or a modest price change at renewal are all easier to introduce with notice than in a hurry.

### Accept it, deliberately

For many seed companies the right answer is to absorb the increase. The model is good, the extra cost is small next to payroll, and engineering time spent shaving $500 a month is better spent on product. That is a fine decision. It just needs to be a decision someone made, written down, rather than a surprise.

## Make the calendar someone's job

The broader lesson is that every AI model in your product now has dates attached to it: launch pricing that ends, promotional tiers that expire, and retirement dates that arrive faster than older software ever did. We wrote about the retirement side in [the AI model your product runs on will be retired](/post-ai-model-deprecation-risk).

A simple habit fixes most of this. Keep a one-page register of every model your product calls, listing the model version, which feature uses it, current price, any scheduled price change and its date, and any announced retirement date. Assign one engineer to check the provider pricing and deprecation pages monthly and update it. It takes twenty minutes and it would have flagged this change the day it was announced.

This register is also exactly what a technical diligence reviewer will ask for when you raise. Being able to say "we knew about the January price change and here is what we did" reads as competent. Finding out during diligence that gross margin is about to drop does not.

## A worked example

This is an illustrative composite, not a named client. A seed-stage legal tech startup uses a Flash model to summarise uploaded contracts. Usage is about 3 billion input tokens and 250 million output tokens a month, roughly $3,200 a month at the introductory rate and $6,400 at standard pricing.

In a two-week review they find that every request resends a 6,000-token instruction block and the full contract, even for follow-up questions. Caching the instructions and passing only the relevant clauses for follow-ups cuts input tokens by about 40 percent. They also move overnight bulk summaries to the batch tier. The projected January bill lands near $4,000 rather than $6,400, and they decide to absorb that and not change customer pricing. Total engineering time: about six days.

## FAQ

### Which Gemini models does the January 2027 price change affect?

According to Google's pricing pages at the time of writing, Gemini 3.6, 3.7 and 3.8 Flash move from $0.75 and $3.75 per million input and output tokens to $1.50 and $7.50 on January 1, 2027. Several related tiers change on the same date. Check the official page for the exact list, because these pages are updated.

### Does this apply if I use Gemini through Google Cloud rather than the Gemini API?

Google's enterprise pricing page lists the same introductory rate through December 31, 2026. Some promotions there have their own terms, so read the page for the channel you actually pay through.

### Should I switch providers to avoid the increase?

Only if a measured evaluation says another model does your task as well for less. Switching without testing trades a known cost increase for an unknown quality drop, which is usually worse.

### Will other providers do the same thing?

Launch and promotional pricing is common across the industry, and it always ends. The safe assumption is that any price labelled introductory, promotional or preview is temporary.

If you want someone to go through your AI costs, model register and pricing before the change lands, that is the kind of thing a [teardown](/teardown) covers. You can also see [pricing](/pricing) or [book a call](/book-a-call).
