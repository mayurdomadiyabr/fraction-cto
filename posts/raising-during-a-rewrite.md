---
title: Raising in the middle of a rewrite? What investors will ask
slug: raising-during-a-rewrite
date: '2026-11-21T04:35:27.454Z'
category: Fundraising
excerpt: >-
  A half-finished rewrite reads as risk in a raise. How to present it so
  investors see a controlled plan, not a team stuck between two systems.
description: >-
  Raising while a rewrite is half done. What investors worry about, the four
  facts they want, and how to show a controlled plan instead of a stall.
author: The founder of Fraction
readTime: 5
draft: false
---

You can raise money while a rewrite is in progress, but you have to present it as a controlled project with a date, a cutover plan and a fallback, not as the reason the roadmap stopped. Investors are not afraid of rewrites. They are afraid of rewrites that have no end. If you can show what is already live on the new system, what remains, and what happens if it runs late, a rewrite stops being a red flag and becomes evidence of judgment.

I have sat on both sides of this conversation. The founder usually wants to hide the rewrite until after the round closes. That almost never works, because it comes up the moment someone asks why shipping slowed down, or talks to an engineer. Better to own it.

## Why a rewrite worries investors

From the investor's chair, a rewrite in progress raises three questions at once.

### Is the team shipping anything customers can see?

Rewrites are notorious for freezing the product. Customers wait, competitors move, and the growth curve in the deck flattens just as the money is supposed to accelerate it. If your release notes for the last four months are empty, the investor will notice.

### Will the money go into finishing the old work?

If part of the round is going to fund completing the rewrite, the investor is paying to get back to where you were. That is not automatically bad, but it needs to be said plainly in your [use of funds](/post-engineering-use-of-funds), not buried.

### Does the team know how to finish?

The most common failure I see is not a bad new system. It is a team that has two systems running in parallel for a year because nobody planned the switch. Investors who have watched this before will ask about it directly.

## The four facts investors want

Before the first meeting, get four facts on one page. If you cannot answer one of them, that is the most useful thing you will learn this month.

### 1. Why you started

One or two sentences, in business terms. "The old system could not support multi-tenant accounts, which our three largest prospects require" is a reason. "The code was messy" is not. If the honest answer is closer to the second, think hard about whether this should have been a [rewrite or a refactor](/post-rewrite-or-refactor) in the first place.

### 2. What is already live

The strongest evidence is production traffic. "Billing and onboarding run on the new system for all customers since August" is worth more than any architecture diagram. If nothing is live yet, that is the biggest risk in the story and you should say what goes live first and when.

### 3. What remains, with a date

A short list of the remaining pieces, with an honest estimate and the assumptions behind it. As a rule of thumb from my own work, rewrites run late by half again on average, so if your estimate is three months, show the plan that survives four and a half.

### 4. How the old system gets switched off

The cutover plan: how data moves, how you run both systems during the switch, how you roll back, and the date the old system is turned off. If you do not have one, our piece on [planning a rewrite cutover](/post-rewrite-cutover-plan) is a reasonable place to start.

## How to present it in the room

The framing matters as much as the facts.

### Lead with the customer reason

Investors respond to "we rebuilt this because enterprise customers needed X, and two of them signed once it shipped". They tune out at "we migrated from one framework to another". Tie every part of the rewrite to something a customer gets.

### Show the shipping that happened anyway

If you kept shipping customer-facing features during the rewrite, list them. If you did not, say so and explain when feature work resumes. Pretending is worse than a pause.

### Name the fallback

What happens if it runs three months late? Can the old system keep serving customers? What is the cost of running both? Founders rarely volunteer this, which is exactly why it reassures people when they do.

### Keep the engineers' story consistent

Diligence often includes [conversations with your engineers](/post-diligence-interviews-your-engineers). If the team privately thinks the rewrite is six months behind while the deck says it is nearly done, that contradiction will come out. Agree the facts with the team before the raise, not during it.

## When to pause the raise instead

Sometimes the right call is to wait. In my experience it is worth delaying a raise by a couple of months if the cutover is that close, because "we finished the migration last month and shipping speed doubled" is a much stronger story than "we are nearly there". It is also worth waiting if you genuinely do not know when the rewrite will end. Investors can price a known risk. They walk away from an unknown one.

On the other hand, if your runway forces the timing, raise now and be candid. A clear plan with a known risk is fundable.

## A short example

A composite of a few companies I have worked with: a B2B startup, seven engineers, eighteen months of revenue, halfway through moving off a codebase an agency had built. The first draft of their deck did not mention it. We rewrote the technical slide to say three things: new system live for all new signups since spring, the remaining twenty percent of old accounts migrating in two batches with dates, old system off by year end with a fallback if batch two slipped. The lead investor's technical advisor spent most of the call on the fallback and then moved on. The rewrite went from the thing they were nervous about to a line item.

## FAQ

### Should I mention the rewrite if investors do not ask?

Yes. It will come out through shipping velocity, engineer conversations or the code itself. Raising it first, with a plan, puts you in control of the story.

### Can I use the round to finish the rewrite?

You can, but say so and size it. Show what percentage of the engineering budget goes to finishing the rewrite versus new product, and when that split changes.

### What if an agency built the old system and recommended the rewrite?

Then investors will want to know who decided, and why. If that is your situation, read about [what to do when an agency recommends a rewrite](/post-agency-recommends-rewrite) and be ready to explain the decision independently of the vendor.

### Can a fractional CTO help with this?

Yes, mostly by pressure-testing the remaining estimate and the cutover plan before investors do. If you want an outside view on whether your rewrite story holds up, [book a call](/book-a-call) or start with a [technical teardown](/teardown).
