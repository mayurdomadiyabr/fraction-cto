---
title: How to screen a senior engineer for judgment
slug: screen-engineer-for-judgment
date: '2026-09-03T02:38:00.842Z'
category: Hiring
excerpt: >-
  A senior engineer who can code but not decide will quietly cost you more than
  a mid-level who can. How to test for judgment when you cannot read code
  yourself.
description: >-
  How to screen a senior engineer for judgment, not just coding skill, even when
  you are a non-technical founder.
author: The founder of Fraction
readTime: 5
draft: false
---

Most founders screen senior engineers the way they screen mid-level ones: can this person write correct code. At the senior level that is the wrong question, because the code is table stakes and the thing you are actually buying is judgment. A senior engineer who codes cleanly but decides badly will pick the wrong architecture, over-build the wrong things, and leave you with a system that works today and cannot grow, and you will not find that out in a coding test.

What you want to know is narrower and harder to fake: when the requirements are ambiguous, does this person ask the right questions before building; when there is a tradeoff, do they reason about it honestly instead of reaching for the tool they already like; and when something breaks in production, do they think in failure modes. You can test for all three without reading a line of code yourself.

## Judgment is what separates senior from mid-level

Interviewers who hire senior engineers well have mostly stopped asking whether the candidate can produce working code under pressure. They assume it. The rounds that actually decide the level are about ambiguous requirements, system tradeoffs, production failure, code ownership, and whether the person can explain a technical decision to someone who is not an engineer.

The tell of real seniority is that the person clarifies before they build, chooses the simplest design that works instead of the most impressive one, and names the failure modes of their own plan out loud. Weak candidates treat every question as a trivia prompt with one right answer. Strong ones treat it as a conversation about tradeoffs, and they are comfortable saying "it depends, and here is what it depends on." That comfort with uncertainty, backed by a clear way of resolving it, is the signal.

This is different from the work-sample question of whether they can build the thing. A [work-sample test tells you they can execute](/post-engineer-work-sample-test); a judgment screen tells you they will execute the right thing. You want both, and founders routinely test only the first.

## Three questions that surface judgment

You do not need to be technical to run these. You need to listen for the shape of the answer, not grade the content.

### Give them an ambiguous problem and watch what they do first

Describe a real decision from your own roadmap in plain terms: we need to let customers export their data, we are not sure how. A senior engineer's first move is to ask questions. How much data. How often. Does it need to be live or is a nightly file fine. Who consumes it. A weaker candidate starts designing immediately. The person who clarifies before building is showing you exactly the instinct that keeps early teams from building the wrong thing well.

### Ask them to argue against their own preference

When they propose an approach, ask what would make it the wrong choice, and what they would use instead. Real seniority shows up as an honest answer with actual downsides. If they cannot name a single weakness in their own plan, they are selling, not reasoning, and you will get that same overconfidence in every architecture decision they make for you.

### Ask about a time something they built broke in production

Listen for whether they think in failure modes. Did they have a way to know it broke before customers did. What did they change so it could not happen the same way again. An engineer who talks about monitoring, blast radius, and prevention has operated real systems. One who only remembers the heroic fix has not learned the more important lesson.

## Screening for judgment when you cannot read code

The honest problem for a non-technical founder is that you cannot verify the technical substance of any of this yourself. That does not make judgment unscreenable; it changes the method. The same [interview approach that works for a non-technical founder](/post-interview-engineer-non-technical) applies here: you are grading the reasoning process, not the answer.

Three things you can assess without any code. First, does the explanation get simpler as you ask follow-ups, or does it get more complicated. Good engineers can compress; people hiding uncertainty add words. Second, do they translate cleanly into business terms, so you understand the tradeoff and the cost, or do they retreat into jargon when pressed. Third, does their story hang together across the interview, or do the decisions contradict each other. A coherent, self-consistent account of how they think is worth more than any single clever answer.

Where you genuinely cannot judge the substance, borrow judgment. Have a senior engineer you trust, a fractional CTO, or a technical advisor sit in on the final conversation. An hour of experienced listening on your most expensive hire is cheap insurance, and it is the single most common gap I see in first engineering hires that quietly fall apart. If you want a second set of ears on a finalist, that is exactly the kind of thing worth [a short call about before the offer goes out](/book-a-call).

## FAQ

### Can't a take-home test show me judgment?

Partly. A take-home shows how they structure and finish a defined task, which is real signal. It does not show how they behave when the requirements are unclear, because you handed them clear ones. Judgment lives in the ambiguity, so you have to create ambiguity in a conversation and watch how they handle it.

### What is the single biggest red flag?

Certainty without curiosity. A senior candidate who jumps straight to a solution, never asks a clarifying question, and cannot name a downside of their own approach is showing you how they will make every decision on your product: fast, confident, and unexamined. That is more dangerous in a senior hire than a gap in any specific technology.

### How many judgment questions should an interview have?

Two or three deep ones beat ten shallow ones. Judgment shows up when you follow a thread far enough that memorized answers run out and the person has to actually reason in front of you. Pick a couple of real decisions from your own business and go deep rather than covering a checklist.
