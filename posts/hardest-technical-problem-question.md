---
title: Investors ask your hardest technical problem. Answer it well
slug: hardest-technical-problem-question
date: '2026-11-07T07:42:19.786Z'
category: Fundraising
excerpt: >-
  The hardest-technical-problem question tests judgment, not moats. Name one
  problem, the failed approach, your choice and its cost.
description: >-
  How to answer the investor question about your hardest technical problem
  honestly, including when your product is not technically hard.
author: The founder of Fraction
readTime: 5
draft: false
---

Somewhere in your raise, an investor will lean back and ask: "What is the hardest technical problem you have solved?" Or its cousin: "What is technically hard about this?" Founders tend to hear it as a test of whether the company has a technical moat, and they reach for the most impressive-sounding answer available. That is usually the wrong move.

The short answer: investors asking this are testing judgment, not looking for a breakthrough. A good answer names one specific problem, explains why the obvious approach failed, and says what you chose and what it cost. If your product is not technically hard, say so plainly and name where the difficulty really lives, whether that is distribution, data, operations or regulation. A confident, honest "the hard part is not the code" beats an inflated technical story every time.

## What the question is really testing

Investors ask this for several reasons at once, and only one of them is about moats.

- **Do you understand your own product?** A non-technical founder who cannot explain the core technical trade-off in plain words is a risk, whoever wrote the code.
- **Can the team make hard calls?** The interesting part of any hard problem is the decision: what you tried, what you gave up, and why.
- **Is the difficulty where you say it is?** If the deck claims proprietary technology, this question checks whether there is anything behind it.
- **Will you tell me the truth?** An answer that is obviously overstated tells an investor how to read the rest of your pitch.

The fourth one is the trap. An experienced investor has heard hundreds of answers and can tell quickly when "we built a proprietary AI engine" means a prompt on top of a model API. Once they catch one inflated claim, every number in your deck gets discounted.

## The structure of a good answer

A good answer fits in about ninety seconds and has four parts.

### The problem, in customer terms

Start with what the customer needed, not the technology. "Our customers upload scanned invoices from hundreds of different suppliers, and they need line items extracted correctly enough to post straight to their accounting system without review."

### Why the obvious approach failed

This is where judgment shows. "We started with an off-the-shelf extraction service. It handled the layout fine, but it got quantities and unit prices confused often enough that customers had to check every invoice, which defeated the point."

### What you chose and why

"We kept the off-the-shelf extraction and built a validation layer that checks every invoice against the customer's purchase orders and flags only the ones that do not reconcile. Now customers review a small fraction of invoices instead of all of them."

### What it cost you

"It took two engineers about three months, and it means we depend on customers connecting their purchasing system, which slows onboarding." Naming the cost is what separates an answer from a pitch. Every real technical decision has one.

Notice what the example does not claim. It does not say the company invented a new extraction model. The hard part was a product decision about where to put the effort, and the answer is more credible for saying so.

## When your product is not technically hard

Plenty of good companies are not technically hard. Vertical software, marketplaces, workflow tools and many services businesses win on distribution, customer insight, data, operations or regulatory access. That is fine, and investors who back those companies know it.

The worst answer here is to invent difficulty. If the honest answer is that your stack is standard and deliberately boring, say it, and say it as a choice: "Technically, we are deliberately boring. Standard web stack, managed database, nothing custom we do not need. The hard part of this business is getting hospital procurement to approve a new vendor, and that is where we spend our effort." That answer shows focus and self-awareness, which is exactly what the question was probing.

There is a second reason to be careful. If you claim technical depth in the pitch, technical diligence will try to verify it. A reviewer who finds a thin wrapper around a third-party API where the deck promised a proprietary engine will write that up, and it travels to the investment committee. We covered how that plays out in [the deck number diligence will make you prove](/post-prove-the-technical-claim), and the AI-specific version in [whether you have an AI moat or are renting one](/post-ai-moat-diligence).

## Who should answer it

If you have a technical cofounder or a senior engineer in the room, let them answer and then add the business consequence yourself. Investors like seeing that the founder and the technical lead tell the same story.

If you are a non-technical founder without a technical lead, you still need an answer. Learn the one or two real trade-offs in your product well enough to explain them at the level above: problem, failed approach, choice, cost. You do not need to know how the code works line by line. You do need to know why it was built the way it was. If nobody on the team can explain that, it is worth fixing before the raise, not just for this question but because it is a sign of [decisions that no one owns](/post-non-technical-founder-bottleneck).

## Prepare it like any other pitch answer

Write the answer down. Read it out loud to someone technical who does not work for you and ask whether anything in it sounds inflated. Cut the jargon until a generalist investor could repeat it to their partners. Have a second, smaller example ready, because a good investor will ask for one.

If you are not sure whether your technical story holds up under a reviewer's eye, that is exactly what a [technical teardown](/teardown) checks before investors do. You can also [book a call](/book-a-call) and rehearse the answer with someone who has sat on the other side of the table.

## FAQ

### What if our hardest problem was a bug or an outage?

That can be a good answer if it led to a real decision. "Our database fell over at our first large customer, and we chose to change our data model instead of buying a bigger server" shows judgment. A story that ends in "and we fixed it" shows less.

### Should I mention technology we have not built yet?

Only clearly labelled as a plan. Mixing what exists with what you intend to build is the fastest way to lose credibility in diligence.

### Is it bad to say we use off-the-shelf tools?

No. Using managed services and existing models is usually the right call at seed. What matters is that you can explain what you built on top and why.

### How technical should the answer be?

Technical enough to be specific, plain enough that a generalist can repeat it. If you need to define three terms before the answer makes sense, simplify.
