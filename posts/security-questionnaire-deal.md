---
title: The security questionnaire that stalls your biggest deal
slug: security-questionnaire-deal
date: '2026-07-01T18:37:02.500Z'
category: Decisions
excerpt: >-
  A 200-question security review lands mid-deal and your biggest contract goes
  quiet. The fix is separating the controls you can prove today from the badge
  that takes months.
description: >-
  What to do when an enterprise security questionnaire stalls your biggest deal:
  triage real gaps from paperwork gaps, and time SOC 2 to actual demand.
author: The founder of Fraction
readTime: 8
draft: false
---

An enterprise prospect sends a security questionnaire, your biggest deal goes quiet, and you feel the momentum drain out of a quarter of work. Here is the short version: that form is not really asking for a certificate, it is asking whether the buyer will regret trusting you with their data. Most of what saves the deal is answering honestly about controls you can put in place this week, not the audit badge that takes months. Separate those two things and the panic gets smaller fast.

I get this call more than almost any other. A founder who has been selling well, who has a champion inside a real company, forwards me a spreadsheet with 180 questions and a subject line that reads like a hostage note. They want to know if the deal is dead and whether they need to drop everything and go buy a compliance product. The answer is usually calmer than they expect, but only if you understand what the questionnaire is actually testing.

## The questionnaire is a trust test wearing a paperwork costume

A security review looks like a compliance exercise. It is formatted like one, it arrives from a procurement or security inbox, and it is full of terms that sound like they require a lawyer. That framing makes founders treat it as a box to be checked, and reach for the fastest thing that produces a checkmark.

But read what the questions are actually probing. Do you encrypt customer data. Who on your team can access it. What happens when an employee leaves. Do you have a way to know if something went wrong. Strip the formatting away and every one of them is a version of the same question: if I hand you something valuable, are you the kind of operation that will keep it safe, and can you show me rather than tell me.

That reframing matters because it changes what you are buying. If it is a paperwork test, the answer is a document. If it is a trust test, the answer is being genuinely trustworthy and being able to demonstrate it. The document is a lagging indicator of the second thing. Founders who chase the document first, without the substance underneath, end up in the worst position of all: they pass the form and then get exposed later when a real incident shows the controls were theater.

## Two different things are hiding in one spreadsheet

The single most useful move when a questionnaire lands is to split it into two piles, because it is quietly asking for two things that have completely different costs and timelines.

### The controls a competent team already has

The first pile is basic operational hygiene. Encryption in transit and at rest. Access controls so not everyone can touch production data. Removing access when someone leaves. Backups you have actually tested. A way to see who did what. Somewhere to report a vulnerability.

None of this requires an auditor. It is the set of habits a competent engineering operation has anyway, and if you are a well-run team most of it is either already true or a few days of work away from being true. This pile is where the deal is usually won or lost, and it costs you almost nothing except honesty and a little effort. The catch is that many early teams do these things informally and have never written them down, so a real control reads as a gap simply because nobody documented it.

### The attestation the buyer's process requires

The second pile is the formal, third-party stamp: a SOC 2 report, an ISO certificate, an independent audit. This is not a control. It is an outside firm vouching that your controls exist and held up over a window of time. It takes months, because a Type II report by definition observes you over a period, and it costs real money.

Here is the part founders miss under pressure: the buyer's security team knows the difference between these two piles even when the questionnaire blurs them. What they need immediately is confidence that the first pile is real. The second pile is often a matter of timing and process, and a good champion can carry a conditional approval -- close now, badge by a set date -- if the underlying controls are genuinely there. Confusing the two is how founders talk themselves into thinking a deal needs six months when it needs six days of honest work plus a commitment.

## What to actually do when it lands mid-deal

When the spreadsheet shows up and a real contract is on the line, the sequence matters more than the panic.

### Triage real gaps from documentation gaps

Go through the questionnaire once and mark every item as one of three things: we do this and can show it, we do this but never wrote it down, or we genuinely do not do this. Most founders discover that the middle bucket is the largest by far. A team that removes departed employees' access the day they leave but has no written offboarding checklist is not insecure -- it is undocumented. Those items convert to a yes with an afternoon of writing, not a project. The genuine-gap bucket is what deserves your real attention, and it is usually short.

### Answer honestly and fast, and never bluff

A security reviewer reads these for a living. They can tell the difference between a plain, specific answer and a confident-sounding non-answer, and a bluff that gets caught does more damage to trust than an honest not-yet. If a control is not in place, say so and say when it will be. Speed matters too: a questionnaire that sits for two weeks tells the buyer something about how you operate, none of it good. A same-week, straight response often impresses more than the answers themselves.

### Decide whether this specific deal justifies the badge

If the honest gaps are small, close them and move on. If the buyer's process genuinely will not sign without an attestation you do not have, you have a clean business decision, not an emergency: is this contract, plus the pipeline of similar buyers behind it, worth starting a multi-month audit now. Sometimes it plainly is and you start today. Sometimes the honest move is a conditional close with a committed date. Either way you are making a [reversible-versus-costly decision](/post-reversible-decisions) with real numbers, not reacting to a spreadsheet. Treat it like the [build-or-buy-or-wait call](/post-build-buy) it actually is.

## The timing mistake that makes this expensive

The reason the questionnaire feels like a crisis is almost always that the underlying habits were skipped early, and now they have to be retrofitted under deal pressure. This is the pattern worth internalizing: the controls are cheap to build in from the start and expensive to bolt on later, while the certificate is the reverse -- pointless to buy early, straightforward to acquire when a real pipeline demands it.

So the timing rule is not symmetric. Build the basic security habits from day one, because they cost almost nothing when the codebase is small and a fortune to reconstruct once data models and access paths have sprawled. This is close to the [premature-scaling trap](/post-premature-scaling) in reverse -- the point is not to over-engineer security theater at pre-seed, it is to not skip the handful of habits that are nearly free now and brutal to add later. But do not go pay for a SOC 2 audit before a customer's process actually requires one. Buying the badge on spec, with no deal waiting on it, is spending scarce runway on a document that will have expired its usefulness by the time you need it.

If you want a clear read on which of your habits are solid and which are informal-but-real before a buyer forces the question, a short [teardown of your setup](/teardown) will map it in an afternoon. And if a questionnaire is on your desk right now and you are not sure whether the deal is genuinely blocked or just undocumented, [book a call](/book-a-call) and we will sort the real gaps from the paperwork ones before you panic-buy anything.

## Frequently asked questions

### Do I need SOC 2 to close enterprise deals?

Not always, and rarely as early as founders fear. Plenty of first enterprise deals close on the strength of real controls plus a credible commitment to a future audit, especially when you have a champion inside the buyer. You need SOC 2 when a buyer's procurement process hard-blocks without it and that buyer, or the pipeline behind them, is worth the months and money. Until then, the controls matter more than the certificate.

### How long does SOC 2 actually take?

A Type I report can come together in a couple of months because it checks that controls exist at a point in time. A Type II, which most serious buyers want, observes those controls over a window -- commonly several months to most of a year -- so there is a floor you cannot compress no matter how much you spend. That timeline is exactly why the honest conditional close matters: you often cannot produce the badge inside the deal cycle, so you have to close on trust and deliver the badge after.

### Can I just say we are "SOC 2 in progress"?

You can if it is true and you are specific about it. A named auditor, a defined scope, and a target date read as real. Vague in-progress language with nothing behind it reads as a stall and an experienced reviewer will treat it that way. The safe version is honesty: here is what we have in place today, here is the audit we have started, here is when the report lands.

### Should a pre-seed startup bother with any of this?

With the certificate, no. With the habits, yes -- because they are nearly free while you are small and painfully expensive to retrofit later, and because clean access control and data handling also protect you long before any enterprise buyer asks. Think of it the way you would think about [the early decisions you cannot cheaply undo](/post-reversible-decisions): skip the audit, keep the hygiene.
