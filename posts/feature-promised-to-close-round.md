---
title: You promised investors a feature before the round closes
slug: feature-promised-to-close-round
date: '2026-10-10T02:54:18.964Z'
category: Fundraising
excerpt: >-
  A feature promised to close a round gets built with a fixed date, vague scope
  and a distracted team. What to say instead.
description: >-
  Promising investors a feature before close usually backfires. What it does to
  your team and round, and better answers to give.
author: The founder of Fraction
readTime: 5
draft: false
---

An investor is interested but not convinced. In the meeting you say the integration they asked about will be live in six weeks, before the round closes. They nod. Now your engineering team has a deadline set by a fundraising conversation they were not in. Is promising a feature to close the round a mistake?

Usually, yes. Not because ambition is bad, but because a feature promised to an investor gets built under the worst conditions: a fixed date, a vague scope, and a team that is also answering diligence questions. It tends to ship half-done or not at all, and either outcome can cost you more credibility than not promising it.

## Why founders make the promise

It is an understandable move. An investor raises a concern, often a specific gap like "you do not support larger teams yet" or "you need the integration with X", and the fastest way to remove the concern is to say it will be fixed soon. In the room, it feels like a small commitment.

The trouble is who pays for it. The founder made the promise. The engineers have to deliver it, usually on top of a roadmap that was already full, during the weeks when a technical reviewer is also asking for documents, architecture walkthroughs and access.

## What happens to the team

I have watched the same sequence several times:

1. The feature gets dropped into the current sprint with a hard date.
2. Scope is never properly agreed, because the founder is negotiating it with the investor, not the team.
3. Engineers cut corners: no tests, a hard-coded path for the demo, a manual step somebody runs by hand.
4. Other work slips, sometimes including fixes that diligence will look for.
5. The feature ships just in time, or a week late, in a state nobody is proud of.

The cost does not end at close. The shortcut becomes permanent, because after the raise there is always something newer and more urgent. A year later it is the part of the system nobody wants to touch. I wrote about how that happens in [the prototype that quietly became your production system](/post-prototype-became-production).

## What happens to the round

There are three possible outcomes, and only one is good.

### It ships properly, on time

Great. This happens when the feature was already mostly built, the scope was small, and the team agreed to the date before it was promised. In other words, when it was not really a new promise.

### It ships, but diligence notices how

A technical reviewer looks at recent commits and sees a large, rushed change with no tests, landed the week before close. That raises the question every reviewer asks: is this how the team always works? Your commit history tells this story whether you mention it or not, as covered in [your commit history is a diligence document too](/post-commit-history-diligence).

### It slips

Now the investor has a concrete example of the team missing a date it set itself, during the period when you were trying hardest to impress them. Some investors will shrug. Others will re-read your whole roadmap more sceptically, which is exactly the test described in [your roadmap is a wishlist; diligence will notice](/post-roadmap-credibility-diligence).

## What to say instead

You do not need to promise a ship date to answer a concern. These answers work better:

### Show you understand the gap

"Yes, we do not support larger teams yet. Here is why we deprioritised it, here is what it takes to build, and here is roughly when it lands on the roadmap." This shows judgment, which is what the investor is actually assessing.

### Offer evidence, not a date

If the feature is partly built, show the part that exists. If customers have asked for it, say how many and what they said. If you have a scoped design, share it. Concrete evidence answers the concern better than a deadline.

### Commit to a decision, not a delivery

"We will decide whether to build this in the next quarter based on X" is a promise you can keep. It tells the investor you have a process. It does not lock your team into a date set in a meeting.

### If you must commit, scope it with the team first

Sometimes a commitment really is the thing that closes the round. If so, step out of the room, talk to the people who will build it, agree a small and specific scope, and add buffer. Then tell the investor the smaller thing with the date your team gave you, not the date that sounded good in the meeting.

## The underlying problem

Founders end up making these promises because nobody technical is in the fundraising conversation. The founder carries the roadmap in their head and makes calls in real time with no one to check them against what the team can actually do.

Having senior technical judgment available during a raise changes this. Someone who can say, in the meeting or on a call that afternoon, "that is four weeks of work, not two, and here is what it displaces" stops the promise being made in the first place. That is a common reason founders bring in fractional technical leadership in the months before a round; [how pricing works](/pricing) explains what that kind of engagement typically covers.

It also helps you write the technical story investors read before the meeting. A clear roadmap with honest tiers, in a [three-page tech memo](/post-tech-memo-investors), reduces how often you get pushed for promises in the first place.

## FAQ

### Is it ever fine to promise a feature to an investor?

Yes, when it is already mostly built, the scope is small and specific, and the team agreed the date before you said it. In that case it is a status update, not a new promise.

### What if the investor makes the feature a condition of investing?

Then scope it properly with your team before agreeing, and get the condition written down clearly. A vague condition is worse than a clear, slightly later one.

### How do I tell my team about a promise I already made?

Directly and early. Explain what you promised, ask them what a realistic scope is, and go back to the investor with that if it differs. Most investors respect a correction more than a miss.

### Will declining to promise a date cost me the round?

Rarely on its own. Investors are assessing judgment. A clear explanation of the trade-off is usually more convincing than a date.

If you are about to raise and want a second opinion on what your team can credibly commit to, [book a call](/book-a-call).
