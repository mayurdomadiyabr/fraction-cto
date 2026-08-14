---
title: Your agency wants to rewrite it. Advice or a sale?
slug: agency-recommends-rewrite
date: '2026-08-14T09:15:00.000Z'
category: Vendors
excerpt: >-
  The agency says the honest answer is a full rebuild. Maybe. But the people
  telling you to spend six figures are the ones who get paid to do it. Read that
  advice twice.
description: >-
  When a dev agency recommends a full rewrite, how to separate real engineering
  judgment from a self-interested sale, and how to get an independent read.
author: The founder of Fraction
readTime: 5
draft: false
---

A founder inherits a codebase, hires an agency to extend it, and a few weeks in gets the verdict: the code is a mess, a patch job will only make it worse, and the honest recommendation is to rebuild it from scratch. The number attached is six figures and the timeline is months. The founder is not technical enough to judge the claim, and the people making it are the same people who would be paid to do the rebuild.

They might be completely right. Legacy code can genuinely be past saving, and a good shop will tell you a hard truth even when it costs you. But you cannot evaluate the advice without noticing the incentive sitting next to it. A rewrite is the single most profitable recommendation an agency can make: it is the longest contract, the least oversight, and the cleanest slate. That does not make it wrong. It makes it advice you should stress-test before you fund it.

## Why the incentive is worth naming

Most agencies are not scheming. But every recommendation an agency makes runs through a filter of what is good for the agency, and a rewrite happens to be near the top of that list for reasons that have nothing to do with your product. It replaces a messy, hard-to-estimate maintenance relationship with a large, well-defined, high-margin project. It removes the awkwardness of working inside code someone else wrote. And it resets the clock on all the small compromises the agency would otherwise have to own.

The tell is not whether they recommend a rewrite. It is how they justify it. "The code is bad" is not a diagnosis, it is a feeling, and it is the justification I distrust most because it is unfalsifiable and it flatters the person saying it. Real engineering judgment sounds specific and costed. It names which parts are salvageable and which are not, it estimates the risk of a rewrite honestly, and it treats a from-scratch rebuild as the expensive last resort it usually is rather than the default. I walk through how that call is actually made, without betting the company, in [rewrite or refactor](/post-rewrite-or-refactor), and the short version is that a full rewrite is the right answer far less often than it gets recommended.

## The questions that separate judgment from a sale

You do not need to read the code to pressure-test the advice. You need to make the agency defend it in specifics. Ask what exactly is wrong, module by module, and what breaks if you do nothing. Vague answers about "technical debt" and "maintainability" that never touch a concrete failure are a signal. Ask what percentage of the current system is genuinely unsalvageable versus merely ugly, because ugly code that works is not a reason to spend six figures. Ask what a strangler approach would look like, where you replace the worst parts incrementally while the product keeps running, and listen for whether they engage with it seriously or wave it away. An agency that will only sell you the big-bang rewrite, and will not cost an incremental path, is telling you something about their motive.

Ask, too, what happens to your business during the rewrite. A from-scratch rebuild usually means months where you are paying for engineering and shipping nothing customers can see, which is the exact dynamic that quietly stalls startups. If the answer is that the roadmap freezes for a quarter, that cost belongs in the decision, and it is often larger than the invoice.

## Get a read from someone who is not selling you the work

The cleanest way to defuse a conflict of interest is to introduce someone who does not share it. Before you commit to a rewrite, get an independent technical review from a party who is not going to be the one doing the rebuild. A neutral read on the codebase will tell you within a day or two whether you are looking at genuinely unsalvageable architecture or a maintainable system that an agency finds inconvenient to work in. That review costs a tiny fraction of the rewrite it might save you, and even when it confirms the rewrite is necessary, you now fund it with confidence instead of on faith.

This is precisely what a short, independent [codebase teardown](/teardown) is for. The value is not that an outsider always disagrees with your agency. Often they agree, and then you proceed knowing the recommendation survived contact with someone who had no reason to inflate it. The value is that the person telling you to spend the money and the person collecting it are no longer the same person.

## How to decide without betting the company

Hold the recommendation to a simple standard. A rewrite is justified when the current system blocks the things the business needs to do next, when specific and named parts cannot be safely changed, and when an incremental path has been honestly considered and ruled out with reasons. It is not justified by the code being unpleasant to read, by a new team preferring a different stack, or by a diagnosis that never leaves the level of adjectives.

If your agency clears that bar, fund the rebuild and manage it tightly. If it does not, you have just avoided the most expensive mistake an early company can make on the word of the one party guaranteed to profit from it. Either way, the move before you sign is the same: get one read from someone who does not get paid by your answer. If you want that read to be genuinely independent, it should come from outside the room, which is what a [second opinion before you commit](/book-a-call) is meant to give you.

## FAQ

### Is a recommended rewrite always self-serving?

No, and treating every rewrite recommendation as a scam will eventually cost you too. Codebases do reach a point where extending them is slower and riskier than rebuilding. The point is not to reject the advice, it is to refuse to fund it on the say-so of the party who profits, and to make the case survive an independent look first.

### How much of a codebase is usually actually unsalvageable?

Far less than "rewrite it all" implies. In most systems a minority of the code carries the real risk, and the rest is workable even if it is ugly. That is why an incremental replacement of the worst parts, while the product keeps running, is so often the better trade than a clean-slate rebuild that freezes your roadmap for months.

### What does an independent technical review cost versus a rewrite?

A focused external review is typically a small fixed fee measured in days of work, while a full rewrite is months of billed engineering. Spending the small amount to validate the large one is one of the highest-return decisions a non-technical founder can make, because it converts a six-figure act of faith into an informed one.
