---
title: Who fixes the bugs after your agency delivers?
slug: agency-defect-warranty
date: '2026-08-14T09:15:00.000Z'
category: Vendors
excerpt: >-
  The launch went fine. Two weeks later checkout breaks for Amex users, and the
  agency is quoting a new rate to look at it. Done and supported were two
  contracts. You signed one.
description: >-
  What a software agency warranty should cover, how long it lasts, and how to
  agree defect terms before a post-launch bug becomes a new invoice.
author: The founder of Fraction
readTime: 5
draft: false
---

The launch went fine. Two weeks later a founder forwards me an email: checkout throws an error for anyone paying with an Amex, and the agency that built the product is quoting a new rate to look at it. The product is a month old. The bug was in the work they delivered. And the founder is finding out, in real time, that "done" and "supported" were two separate agreements, and they only signed one of them.

This is one of the most common and most avoidable disputes I see between founders and the shops they hire. It is not usually bad faith. It is a warranty clause nobody negotiated, so the default kicked in, and the default is that once the invoice clears, every problem is a new paid engagement.

## The gap between delivered and supported

Delivery means the agency handed you something that matched a specification on a specific day. Support means someone is responsible for it after that. Those are different promises, and the space between them is where the money leaks. A serious statement of work closes the gap with a warranty: a defined period after acceptance during which the agency fixes defects in the delivered work at no additional charge. Standard windows run 30 to 90 days depending on how complex the build was and how hard you negotiated. Anything shorter than 30 days on a real product is a warning.

If there is no warranty clause at all, you have not bought a product, you have bought a snapshot. Every bug found after acceptance becomes billable, and you tend to discover this exactly the week the team that knows your code has rolled off to another client. That timing is not a coincidence. It is the same rotation risk I described in [the senior team that pitched you isn't the one building](/post-agency-bait-and-switch), showing up on the support side instead of the build side. The people who could fix your bug cheapest are gone, and their replacements have to relearn your codebase on your dime.

## What a fair warranty actually covers

A warranty is not open-ended free labor, and you should not pretend it is when you negotiate. What it covers is a defect, defined as a deviation from the agreed specification. If a feature was specified to work and it does not, that is a defect, and fixing it is warranty work. Crashes, broken flows, and results that contradict the spec all sit here.

What it does not cover is where the arguments start, so get it in writing. A warranty does not cover new requirements, changes you request after acceptance, or breakage caused by a third party changing an API you depend on. That last one is real and worth pricing separately, because a payment provider or a mapping service can change under you and it is genuinely not the agency's fault. The dangerous ambiguity is the question "is this a bug or a change?" Whoever gets to answer that question controls the invoice. So the clause that matters most is not the warranty length. It is the sentence that says who decides whether something is a defect, and what evidence settles it. Tie the definition to the written spec and most of the argument disappears, which is one more reason a vague scope is expensive long after the build, exactly as I laid out in [the SOW clauses that cost you six months later](/post-sow-red-flags).

## Warranty is not a maintenance retainer

Founders conflate two things here, and agencies rarely correct the confusion because the confusion favors them. A warranty fixes what was already broken at the moment of delivery, for free, for a window. A maintenance retainer is ongoing paid work: dependency and security updates, keeping the app running as operating systems and browsers move, small changes, and being on call when something breaks months later. You need to decide which of these you actually want, because they solve different problems and cost very differently.

The honest version is that most products need both. A 30 to 90 day warranty to catch delivery defects, and then a decision about whether to put the agency on a small monthly retainer or to keep a rate card on file and call them per incident. Do not let a warranty be sold to you as if it were maintenance, and do not pay a full maintenance retainer for months when what you needed was a warranty and an occasional bug fix. If your instinct is that the retainer feels too big for how little you are shipping, that is worth pressure-testing the same way you would [renegotiate an agency bill without firing them](/post-renegotiate-agency-spend).

## How to set this up before you sign

You settle all of this before the contract is signed, because you have zero leverage during an outage. Read the agreement with four questions in hand. First, is there a warranty period stated in writing, and is it at least 30 days? Second, how is a defect defined, and is it tied to the spec rather than to the agency's opinion? Third, who triages a reported problem into defect versus change, and how is a disagreement resolved? Fourth, is there a rate card for post-warranty work agreed now, so you are not negotiating price while your checkout is down?

That last one saves the most stress. The worst time to discover an agency's emergency hourly rate is the morning your payments are failing. Pin it in the contract while you still have alternatives. If you are staring at a delivery contract and cannot find the warranty terms, that absence is the finding, and it is a short conversation worth having before you sign rather than after, which is exactly what a [call before you commit](/book-a-call) is for.

## FAQ

### How long should the warranty period be?

For most web and mobile products, 30 to 90 days after acceptance is standard and fair. Push for the longer end on anything with payments, auth, or data integrity, because those defects are the ones that surface under real load rather than in the first week. Below 30 days, ask why.

### A bug turned up after the warranty ended. Is it still the agency's fault?

Fault and free are different questions. It may well be their defect, but once the warranty window closes the contract usually makes the fix billable regardless of who caused it. This is exactly why the window length and a pre-agreed post-warranty rate matter so much. Fairness does not pay for the fix; the contract does.

### Should I hold final payment until the warranty period ends?

Usually no, and agencies will resist it hard because it wrecks their cash flow. A better structure is a small holdback, often 10 to 15 percent, released on acceptance with the warranty running from that date, plus IP assignment tied to full payment. You get a defect window without turning the whole final invoice into a hostage negotiation.
