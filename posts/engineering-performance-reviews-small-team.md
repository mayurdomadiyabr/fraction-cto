---
title: Do three engineers need performance reviews?
slug: engineering-performance-reviews-small-team
date: '2026-10-01T04:14:34.384Z'
category: Hiring
excerpt: >-
  You do not need a big-company review process, but by-feel feedback breaks at
  around three engineers. A lightweight system that works.
description: >-
  Performance reviews for a startup with 3-10 engineers: a lightweight written
  system, what to measure, and when to formalise.
author: The founder of Fraction
readTime: 5
draft: false
---

You have three engineers. Nobody has had a formal review. One of them is clearly excellent, one is fine, and one you are not sure about. A board member asks how you evaluate engineering performance, and you realise the honest answer is "by feel."

The short answer: you do not need a big-company review process at three engineers, but you do need something. A lightweight twice-yearly written review, one-on-ones with a shared notes doc, and clear expectations written down per person are enough until roughly eight to ten engineers. What you cannot afford is no feedback at all, because that is how small problems become firings and how strong people leave without warning.

## Why "by feel" breaks earlier than you think

With one or two engineers, informal feedback works. You talk every day, you see the work, and you can say what you think in the moment.

It breaks around three to five engineers for predictable reasons.

**Founders give feedback unevenly.** You talk more to the engineers who are easy to talk to, and you avoid the hard conversation with the one who is struggling. The struggling engineer hears nothing for months, then hears everything at once when you finally decide to let them go. That is unfair and it is also legally risky in many jurisdictions, because nothing was written down.

**Non-technical founders misjudge output.** If you cannot read code, you tend to judge by visibility: who talks in standups, who answers Slack fastest, who demos. The engineer quietly preventing outages and untangling the data model is invisible. We see this pattern often, and it is why [managing an engineer who knows more than you](/post-manage-engineer-more-technical) needs explicit outcomes rather than impressions.

**Strong engineers leave without warning.** People who never hear where they stand and what would move them forward assume nothing will. The review conversation is often the only moment an engineer gets to say what they want next.

**Pay decisions need a basis.** The moment someone asks for a raise or you set up bands, you need a record of what each person has delivered. Without it, pay drifts to whoever negotiates hardest.

## What a lightweight system looks like

You want the minimum structure that produces fair, written, regular feedback. Here is a version that works for teams of two to ten.

**Written expectations per person.** One page per engineer: what they own, what good looks like this half, and two or three concrete outcomes. Not a competency matrix, just "you own the billing service; good means no Sev1 incidents from it and the migration done by June; you are the reviewer for all payments code."

**Weekly or biweekly one-on-ones with a running doc.** Thirty minutes, a shared document, both sides add topics. Feedback goes in as it happens, in a sentence or two. This doc becomes the raw material for the review, so nothing at review time is a surprise.

**A twice-yearly written review.** Short. Three sections: what went well with examples, what to improve with examples, and what is next for them. The engineer writes a self-review first, then you write yours, then you talk. Total time per person is a couple of hours twice a year.

**Peer input once you have it.** At four or more engineers, ask each person for two or three sentences about each colleague they work with. Keep it to specific observations, not ratings.

That is it. No ratings scale, no calibration meetings, no stack ranking. Those exist to make large organisations consistent; at your size they mostly create ceremony.

## What to measure, and what not to

Measure outcomes against the written expectations: did the things they owned work, ship, and stay reliable? Measure the multiplier effects too: code review quality, how much they unblock others, whether their decisions hold up six months later.

Do not use lines of code, commit counts, or ticket counts as performance measures. They are easy to game and they reward the wrong behaviour. Do not use AI-tool usage volume either; more generated code is not more value. If you track team delivery metrics like deployment frequency or change failure rate, use them to understand the system, not to score individuals.

## How to handle the engineer you are unsure about

This is usually the real reason founders start thinking about reviews. The answer is the same lightweight system, applied with more care.

Write down specifically what is not working, with examples. Share it in a one-on-one, not by surprise in a formal review. Agree on concrete changes and a timeframe, typically six to eight weeks. Check in every week. If it improves, say so clearly. If it does not, you have a fair and documented basis for a decision. Our guide on [when your first engineer is not working out](/post-first-engineer-not-working-out) walks through the reset in detail.

Get an outside technical read if you cannot judge the work yourself. Sometimes the "underperformer" is carrying the hardest problem in the codebase; sometimes the visible star is creating the debt everyone else is cleaning up.

## When you need more

Move toward a more structured process, with levels, a simple career ladder and calibrated pay bands, when you pass roughly eight to ten engineers, when you have a manager layer between you and the engineers, or when promotions start happening and people compare notes. Usually that coincides with hiring an [engineering lead](/post-when-to-hire-engineering-lead), and designing the process should be one of their early jobs.

## Where a fractional CTO fits

If you are a non-technical founder, the hardest part is evaluating engineering work you cannot read. A fractional CTO can set up the expectations and review template, sit in on the first cycle, and give you an independent read on each engineer's work. That is part of a typical [engagement](/pricing). If you want to talk through your team, [book a call](/book-a-call).

## Frequently asked questions

### At what team size do engineers need formal performance reviews?
A lightweight written review becomes worthwhile at about three engineers, when informal feedback starts to get uneven. A fuller process with levels and calibration usually makes sense around eight to ten engineers or once you have managers.

### How often should a small startup review engineers?
Twice a year for the written review, with weekly or biweekly one-on-ones in between. The one-on-ones carry the real feedback; the review summarises it.

### Should we use ratings or scores?
Not at small scale. Ratings exist to make large organisations consistent and comparable. With a few engineers, specific written examples are more useful and less divisive.

### How can a non-technical founder judge engineering performance?
Judge outcomes against written expectations, collect peer input, and get an independent technical review of the work periodically. Avoid proxies like commit counts or hours online.
