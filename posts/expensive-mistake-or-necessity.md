---
title: Expensive mistake or expensive necessity? How to tell
slug: expensive-mistake-or-necessity
date: '2026-06-23T12:01:30.568Z'
category: Pattern recognition
excerpt: >-
  Every founder eventually faces a six-figure technical decision. Here is the
  pattern I use to tell a costly necessity from a costly mistake.
description: >-
  A practical test for telling an expensive but necessary technical spend from
  an expensive mistake, before you commit the money.
author: The founder of Fraction
readTime: 4
draft: false
---

Every growing startup hits a decision where the number suddenly has a comma in it. A platform migration. A hire who costs as much as three of the current ones. A rebuild of the part of the system that keeps falling over. The founder's question is always the same: is this money well spent, or am I about to make an expensive mistake?

After enough of these, the answer stops being a gut call and becomes a pattern. Not every expensive decision is a mistake. Some of the best money my clients have spent looked reckless on the day. The skill is telling the two apart before you commit, not after.

## The two kinds of expensive

An expensive necessity is a cost you pay once to remove a ceiling. Done right, the pain ends and the system is genuinely better. An expensive mistake is a cost that buys motion without removing the ceiling; three months later you are back where you started, only poorer.

The trap is that they feel identical on the day you decide. Both involve a big number, a confident vendor or engineer, and a story about how much better things will be. The story is never the tell. The structure of the decision is.

## Four questions that separate them

### Does the cost scale with usage, or with regret?

A necessity usually has a cost that tracks something real: more customers, more data, a regulation you now fall under. A mistake usually has a cost that tracks how long you avoided a smaller decision. If the price tag exists because something was ignored for a year, you are often paying to feel decisive, not to fix the actual constraint.

### Is it reversible?

The single most useful question. A reversible decision deserves a fast yes and little ceremony, because the cost of being wrong is just undoing it. An irreversible one, like ripping out a database, a one-way platform migration, or a two-year contract, deserves real scrutiny no matter how good it sounds. Spend your caution where you cannot take it back.

### Who is asking for it, and what do they get?

Trace the request. An engineer who wants to rebuild the system they find annoying is not the same as a customer pattern forcing your hand. A vendor whose proposal grows every time you talk is showing you a [fixed bid that quietly becomes 60 percent more](/post-fixed-bid-trap). The motive does not make the spend wrong, but it tells you how hard to push back.

### What happens if we wait one quarter?

For a necessity, waiting makes it worse or more expensive, and you can say exactly how. For a mistake, waiting a quarter usually makes the answer obvious for free, because the real need either shows up clearly or never does. If nobody can describe what breaks by waiting, you are probably not looking at a necessity yet.

## A worked example

A seed-stage team I worked with wanted to spend roughly 80,000 dollars and a quarter of engineering time re-platforming off the stack their MVP was built on. It felt overdue, and everyone was tired of the old code.

We ran the four questions. The cost tracked regret, not usage, since traffic was flat. It was largely irreversible inside the timeline. The request came from engineers, not customers. And waiting a quarter cost almost nothing concrete. So we waited, and spent a tenth of the money fixing the three specific things that actually hurt. Six months later they raised, and nobody missed the re-platform.

A different team failed the same test in the other direction. Their single shared database was about to put them out of compliance with a deal that would triple revenue. Cost tracked usage, waiting made it worse on a known date, and the customer was forcing it. That 80,000 dollars was a necessity, and we moved fast. Same price tag, opposite call.

## The cheap mistake about expensive mistakes

The most expensive pattern is not making the wrong big call. It is treating every big number as automatically suspect and stalling. Founders who flinch at all large spends end up paying in slow decay instead, which never arrives as a single scary invoice and is far harder to recover from.

Senior judgment is mostly knowing which expensive thing to say yes to quickly. That is a large part of [what you are actually paying a senior engineer for](/post-paying-for-judgment): not the answer, but the speed and confidence of the right answer. If you are staring at one of these decisions now, it is exactly the kind of thing worth a [short call](/book-a-call).

## FAQ

### How big does a decision have to be to run this test?

Anything where being wrong costs more than a few weeks of work or is hard to undo. Small reversible decisions should be made fast and cheap; save this for the ones with a comma in the number or a one-way door.

### Is a rewrite always an expensive mistake?

No, but it fails the four questions more often than not. Most rewrites track regret rather than usage and are hard to reverse. The exception is a clear, externally forced constraint, like compliance or a platform shutting down.

### Can I run this without a technical co-founder?

Yes. The four questions are deliberately non-technical. You will want a trusted engineer to sanity-check the reversibility answer, but the framing is a founder's job, not an engineer's.
