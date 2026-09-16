---
title: The vendor demo proves nothing. Run a bake-off instead.
slug: vendor-bake-off
date: '2026-09-16T02:47:21.711Z'
category: Decisions
excerpt: >-
  A demo is a rehearsed performance on the vendor data. A one-week bake-off on
  your own data, with a written pass condition, decides it properly.
description: >-
  How to run a vendor bake-off instead of buying off a demo: two finalists, a
  written pass condition, your own data, one week.
author: The founder of Fraction
readTime: 5
draft: false
---

Short answer: a vendor demo is a rehearsed performance on the vendor's data, and it tells you almost nothing about how the tool will behave on yours. Replace it with a bake-off: pick two finalists, define a pass condition before you start, run both against a real slice of your own data for a fixed week, and let the results decide. The whole thing costs a few days and routinely reverses the choice everyone expected.

I have watched founders sign annual contracts off a 45-minute call. The demo was excellent, because demos are built to be excellent. Then the tool met the real data, and the parts that mattered were the parts nobody showed.

## Why the demo is designed to not answer your question

A good sales engineer has run that script two hundred times. The dataset is clean, the edge cases are absent, and the integrations are pre-wired. Everything you see works because everything you see was chosen because it works.

That is not dishonesty, it is sales. The trouble is what the format hides. You do not see how the tool behaves at your volume, or with your messy historical records, or when a field you rely on is null in 8 percent of rows. You do not see how long onboarding actually takes, because in the demo it already happened. And you do not see the day-two experience at all: how support responds, how the tool fails, how hard it is to get your data back out.

Those are the things that determine whether the purchase was good, and none of them are visible in the room.

## What a bake-off looks like

The structure is simple and the discipline is the whole point.

Cut the field to two. More than two and nobody does the work properly. You get to two from a short written list of requirements, which is faster than it sounds because most categories only have a handful of serious options.

Write the pass condition before you touch either tool. This is the step that people skip and the step that makes the exercise worth anything. State what result would make each tool a yes, in numbers you can check: the extraction has to be right on at least 95 of 100 sampled documents, the import has to finish in under an hour, the search has to return in under 300 milliseconds at our current index size. Written down first, so you cannot move the goalposts toward whichever vendor you liked personally.

Use your own data, not a sample. Take a real slice, ideally one with known-ugly records in it, because the ugly records are the actual test. If the data is sensitive, use a redacted copy, but keep the shape and the mess.

Timebox it to a week and put one named person on it. Bake-offs that run "until we are confident" never end.

Then score it against what you wrote down and pick. If both pass, pick the cheaper or the one your team preferred to use, and say so plainly -- preference is a legitimate tiebreaker once the objective bar is cleared.

## The questions to ask while you have their attention

The evaluation window is the only time a vendor is maximally responsive, so use it to test things that have nothing to do with features.

Open a real support ticket with a real problem and time the response. That number is a better predictor of your next two years than any feature comparison.

Ask for an export of your own data, and actually run it. A vendor who makes leaving hard will reveal it here, and that is worth knowing before you sign rather than after, when the cost of leaving becomes [a migration decision you make under pressure](/post-migrate-or-stay-tool).

Ask what happens to your price at renewal, in writing. The uncomfortable pause tells you as much as the answer, and pricing that moves under you is a known pattern in AI-heavy tooling, as I have written about in [vendors that can reprice and move your margin](/post-ai-vendor-repricing-margin).

Ask who else your size uses it, then talk to one of them without the vendor on the call.

## When to skip the bake-off

This is a proportionate process, not a ritual. If the tool costs a few hundred dollars a year and you can leave in a day, buy it and move on; the evaluation would cost more than the mistake. Run the bake-off when the commitment is annual, when the tool holds your data, when it sits on a critical path, or when switching later would take more than a week.

Also skip it when there is no real second option. If one vendor is clearly the category standard and the alternative is a hobby project, comparing them is theater. Run a single-tool trial against your pass condition instead, which keeps the useful half of the exercise.

## The cost of getting this wrong is not the license fee

Founders tend to price a bad tool decision at the contract value. That is the smallest part. The real cost is the quarter your team spends bending your process around a tool that does not fit, the data you accumulate inside it that makes leaving harder each month, and the opportunity cost of the work that did not happen while everyone was fighting the thing.

Set against that, a week of structured evaluation is cheap, and the pass condition is the cheapest part of it. If you are about to make a decision in a category nobody on your team has bought before, an hour with someone who has watched these purchases age is worth more than another demo. You can [book a call](/book-a-call) and bring the shortlist.

## FAQ

### How many vendors should be in a bake-off?
Two. Three is defensible if the category is genuinely unsettled, but each additional tool dilutes the attention the evaluation needs, and a shallow comparison of four is worse than a serious comparison of two.

### What if the vendor will not let us test on our own data?
Treat that as a result. Any serious vendor in 2026 offers a trial or a sandbox that accepts real data. A refusal usually means onboarding is harder than the demo implied, and you will meet that difficulty later anyway.

### Who should run the evaluation, an engineer or the person who will use the tool?
The person who will live with it daily should own the outcome, with an engineer checking the integration, the data export, and the performance claims. Ownership by the buyer alone tends to miss technical dead ends; ownership by engineering alone tends to miss whether anyone will use it.
