---
title: Diligence found a real problem. What happens next?
slug: diligence-found-a-problem
date: '2026-07-11T04:42:59.519Z'
category: Fundraising
excerpt: >-
  A real diligence finding rarely kills the round. It reshapes the deal. Here is
  what actually happens and how to steer it.
description: >-
  A real technical diligence finding rarely kills a round. Here is how it
  reshapes the deal, and how to steer it.
author: The founder of Fraction
readTime: 5
draft: false
---

A technical review turns up something real: a security gap, one engineer who holds the whole codebase in their head, a rewrite you have been deferring for a year. The founder's first assumption is that the term sheet is gone. It usually is not. What changes is the shape of the deal, not whether there is one.

I have sat on both sides of this. I have run the review that surfaced the problem, and I have sat next to a founder the week after, working out what to do about it. The pattern is consistent enough that you can plan for it.

## A finding is a list, not a verdict

Diligence almost never produces a clean pass or a hard fail. It produces a list of findings, each tagged with a rough severity. Your job in the days after is to move every item into the least expensive category you can honestly defend.

There are three buckets, and every finding lands in one of them.

### Deal-breakers that must be fixed before close

These are rare. A finding is a true deal-breaker only when it threatens the thing the investor is buying: no IP assignment from a key contractor, a data-handling practice that creates open legal liability, a dependency on a single person who could leave tomorrow with no handover. If the item can be fixed in weeks and you commit to fixing it, it usually drops out of this bucket.

### Price and terms adjustments

Most serious findings land here. The round does not die; the terms move. Common outcomes are a valuation trim, an escrow tied to a technical milestone, or a change to the reps and warranties you sign. Investors may hold back a slice of capital until a specific piece of remediation is done. For a mature SaaS platform, remediation estimates of 500,000 to 2 million dollars are common, and that number gets priced into the deal one way or another.

### Post-close conditions

The largest bucket. The investor wants the issue handled, but on a timeline after the money lands: a mandatory senior hire, a security audit within 90 days, a documented plan to reduce single-person risk. A 12-month backlog of technical debt that needs three additional senior engineers runs 600,000 to 900,000 dollars a year at current rates, so expect the hiring commitment to show up as a condition, not a suggestion.

## How to respond in the first 48 hours

The response matters more than the finding. Investors are not only scoring your code. They are watching how you react to bad news, because that predicts how you will handle it after they wire the money.

### Do not argue unless the finding is wrong

If the reviewer got a fact wrong, correct it with evidence, calmly. If the finding is right, do not litigate it. Founders who spend the call defending a real problem read as founders who will hide the next one. The stronger move is to agree, then show you already understand the fix better than the reviewer does.

### Cost and time every item yourself

For each finding, put a number and a date next to it: what it costs to fix, how long it takes, and who owns it. A founder who walks into the follow-up call with a costed remediation plan changes the conversation from "should we still do this deal" to "here is the plan, which items do you want as closing conditions." You are now steering the list instead of receiving it.

### Propose the remediation before they impose it

If you propose the escrow, the hire, or the 90-day audit, you shape the terms. If you wait, the investor writes them for you, and they will write them conservatively. Offering a specific, credible plan is how you keep a price cut from becoming a bigger price cut. This is the same discipline behind [a clean technical data room](/post-technical-data-room) and [the three-page tech memo that gets you through diligence](/post-tech-memo-investors): control the narrative with your own documented plan.

## What this looks like in practice

A seed-stage company I worked with failed a security check: no separation between staging and production data, and admin credentials shared across the team. Real finding. Instead of contesting it, the founder came back 72 hours later with a two-week remediation plan, a fixed cost, and a named contractor to do the work. The investor made the fix a closing condition and kept the valuation intact. The problem that felt like it would end the round cost two weeks and a few thousand dollars.

The failure mode is the opposite: the founder goes quiet, treats the finding as an accusation, and lets three weeks pass with no plan. Now the investor is nervous not about the security gap but about the founder, and that is the version that actually loses rounds.

If you want a review to find these problems while you still have time to fix them cheaply, that is exactly what [a short pre-raise technical review](/book-a-call) is for. The findings do not get smaller by waiting; the options for handling them do.

## FAQ

### Does one serious finding kill the round?

Rarely. A single finding almost always converts into a term adjustment or a post-close condition. Rounds die from a pattern of findings plus a founder who cannot respond credibly, not from one problem that has an obvious fix.

### Should I disclose known problems before diligence starts?

Yes, the important ones. Surfacing a known weakness yourself, with a plan attached, is far cheaper than having it discovered. See [whether to tell investors about your technical debt](/post-disclose-technical-debt-investors) for how to decide what to raise and how.

### Who should cost the remediation?

Someone who can defend the number under questioning. A vague estimate from the founder invites the investor to assume the worst. A costed plan from someone who has done the work before anchors the conversation to reality and keeps the price adjustment small.
