---
title: Your incident history is a diligence document now
slug: incident-history-diligence
date: '2026-07-18T11:58:05.861Z'
category: Fundraising
excerpt: >-
  Reviewers no longer just ask if you have outages. They ask what happened last
  time and what you changed. How you handled the last fire is the signal.
description: >-
  Why your outage and incident history shows up in technical diligence, and how
  a track record of handling failures well becomes an asset instead of a
  liability.
author: The founder of Fraction
readTime: 4
draft: false
---

Founders assume outages are the thing you hide in diligence. The opposite is closer to true. A reviewer expects a real product to have had incidents, and the interesting information is not whether you had them but what you did when you did. Your incident history has quietly become a diligence document, and how you handled the last fire is one of the clearest signals of engineering maturity a reviewer can read.

The instinct to present a spotless record is a trap. A startup that claims it has never had an outage is either too small to have hit real load or is not being honest, and a seasoned reviewer treats both readings as a problem. What builds confidence is evidence that when things broke, you noticed quickly, recovered cleanly, and learned something you then acted on.

## What a reviewer reads in your incidents

The history itself is data, and a reviewer is looking at a few dimensions of it.

### How you found out

The best answer is that your monitoring told you before a customer did. The worst is that you learned about a multi-hour outage from an angry support ticket. The gap between those two is a direct read on whether you can see your own system. A reviewer will ask, in some form, how you know when something is wrong, and "a customer emails us" is a finding.

### How long you were down and how often

Frequency and duration matter, but trend matters more. A team whose incidents are getting shorter and rarer over time is a team that is learning. A flat or worsening trend, or a pattern of the same failure recurring, says the lessons are not sticking. This is the same underlying question as whether you know when to stop shipping features and [fix the reliability the product is bleeding on](/post-feature-freeze-reliability).

### What changed afterward

This is the one that separates the mature teams. After an incident, did anything change? A short written postmortem, a specific fix, a new alert, a guardrail so that exact failure cannot recur. A pile of incidents with no follow-up says you are absorbing pain without converting it into resilience. A handful of incidents each with a clear "and here is what we changed" says the opposite.

## The blameless postmortem is the artifact

The concrete thing a reviewer wants to see is a track record of postmortems. Not heavy documents. A page each: what happened, the timeline, the root cause, what you changed so it does not happen again. Blameless, meaning focused on the system and the process rather than on who to fault, because the goal is a fix, not a scapegoat.

A folder of these is a remarkably strong diligence asset. It demonstrates, without you having to claim anything, that your team treats failure as information. It also shows a board and an investor that you can talk about things going wrong like an operator rather than panicking or hiding, which is exactly the skill behind [explaining technical risk to a board](/post-tech-risk-board) without it landing as a crisis.

## How to get ahead of it

If you have never written a postmortem, start now, even retroactively for the last couple of significant incidents you remember. Set a lightweight rule: any incident past a certain severity gets a one-page writeup within a few days, while the details are fresh. Keep them together somewhere a reviewer can be handed the folder.

Then make sure that folder is part of your data room rather than something you scramble to assemble mid-diligence. An organized incident history sitting ready is the difference between the empty technical half of a data room and one that answers questions before they are asked. If you are heading toward a raise and your incident history is currently a set of Slack threads and fading memories, turning that into a credible track record is a concrete, doable piece of work, and it is the sort of thing I help founders get in order. [Book a call](/book-a-call) if you want a hand shaping it.

## FAQ

### Should I disclose outages an investor might not find out about?
Yes, the significant ones, framed with what you learned and changed. A disclosed incident with a fix reads as maturity. An incident a reviewer discovers that you did not mention reads as a credibility problem, and the second one costs far more than the first.

### What counts as an incident worth writing up?
Anything with real customer impact: a meaningful outage, data loss, a security scare, a failed deploy that took the product down. Minor blips that self-recovered do not need a document. The bar is customer or data impact, not every alert that fired.

### What does a good postmortem contain?
One page: what happened, a timeline, the root cause, the customer impact, and the specific changes you made so it cannot recur the same way. Blameless in tone. The change section is the part a reviewer cares about most, because it is the proof you converted the failure into resilience.

### Does a young startup really need this?
You do not need a heavy process, but you do need the habit and a few written examples before a raise. Even three good postmortems from your last three real incidents turn a scary diligence topic into evidence that your team learns. Starting the habit early is cheap. Reconstructing a year of incidents the week diligence opens is not.
