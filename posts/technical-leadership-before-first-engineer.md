---
title: When to hire technical leadership before your first engineer
slug: technical-leadership-before-first-engineer
date: '2026-07-13T11:58:32.751Z'
category: Knowing when
excerpt: >-
  Most founders hire builders first and a leader later. Sometimes that order is
  backwards and it costs you a rewrite. Here is how to tell which case you are
  in.
description: >-
  The usual advice is to hire engineers first and leadership later. When the
  reverse is right, and the specific cases where builder-first burns you.
author: The founder of Fraction
readTime: 5
draft: false
---

The default startup sequence is to hire people who write code first and worry about leadership once you have a team to lead. For most companies that is correct. But I have watched enough early teams to know there is a real set of cases where hiring a builder before you have anyone setting technical direction is the expensive mistake, and the founder only realizes it after the first rewrite.

This is a sequencing question, not a headcount question. The issue is not whether you need engineers. You do. It is what order you bring in engineering and the judgment that steers it.

## Why builder-first is usually right

Start with the default, because it is the default for good reasons. At the very beginning, the highest-value thing is a working product in front of users, and a strong senior generalist who can both build and make sound calls covers both jobs at once. Hiring a separate leadership layer before you have anything to lead is how you end up with an org chart and no product. Most founders should hire [their first senior engineer](/post-find-first-senior-engineer) and let that person carry both the building and the early judgment.

So the bar for going leader-first is high. You are overriding the sensible default, and you should only do it when one of a few specific conditions is true.

## When builder-first burns you

Here are the cases where hiring code first and direction later has cost the founders I have seen real money.

### The architecture is a one-way door

Some early decisions are cheap to change and some are not. The data model, the core service boundaries, whether you build on a platform you cannot leave, the auth and tenancy model: get these wrong and you are not refactoring, you are rewriting. If your product has a genuine one-way-door decision in the first few months, and you do not have the judgment in the room to make it well, a contractor moving fast will pour concrete in the wrong shape. A few weeks of senior technical direction before the building starts is far cheaper than the rewrite. I have written about how founders mistake [reversible decisions for irreversible ones](/post-reversible-decisions); the leader-first case is precisely when a decision really is irreversible.

### The domain is regulated or safety-critical

If you are building in fintech, healthtech, or anywhere a wrong structural call means a failed audit or a regulator conversation, the compliance-shaping decisions happen at the very start, in the architecture. A builder without that judgment will make choices that pass code review and fail the audit two years later. In these domains the direction has to precede the code, even if "direction" is only a few days a week of a specialist while a builder executes.

### You cannot personally evaluate the work

A technical founder can hire a builder first and steer them, because the founder is the judgment in the room. A non-technical founder cannot. If you cannot tell whether the code is sound, hiring a builder with nobody to vet their work means you are trusting an unvetted stranger with the thing your company is made of. Some technical direction, even fractional, has to come first so that someone who can read the work is accountable for it. This is the whole problem behind [who vets your engineer when you have no engineers](/post-who-vets-your-engineer).

### You are about to hire several people at once

If your plan is to go from zero to four engineers in a quarter, standing up that group with no technical leader means four people inventing four different conventions and you refereeing arguments you cannot judge. The leader has to be in place before the group, or the group sets bad defaults that harden fast.

## What "leadership first" actually looks like

Leader-first does not mean hiring an expensive full-time VP of Engineering before you have written a line of code. That would be its own mistake. In practice it means bringing in senior technical judgment, often fractional, to make and document the decisions that are hard to reverse, set the initial standards, and then hire and steer the builders. The leader might be in the seat for two days a week while a builder or two executes full-time. The judgment leads; the hands follow.

The cost comparison is stark. A few days a week of a fractional technical lead runs a few thousand dollars a month. A rewrite because the first builder poured the foundation wrong costs months of runway and often the morale of the team that has to throw its work away. When a genuine one-way door is involved, the leader-first premium is cheap insurance.

## How to decide

Ask three questions. Does the next quarter contain a decision that is genuinely hard to reverse? Can you, personally, evaluate whether the technical work is sound? Are you hiring one person or several at once? If there is a one-way door, you cannot judge the work yourself, or you are hiring a group, put the judgment in first. Otherwise, hire the strong generalist builder and let them carry both jobs until the team grows.

If you are not sure which case you are in, that uncertainty is itself worth an outside read before you make the first hire. [Book a call](/book-a-call) and we can figure out whether your situation needs direction first or just a good builder.

## FAQ

### Isn't hiring leadership before engineers premature?
Usually, yes, which is why builder-first is the default. It flips only in specific cases: a truly irreversible architecture decision, a regulated domain, a non-technical founder who cannot vet the work, or hiring several people at once.

### Does leader-first mean a full-time VP of Engineering?
No. Early on it almost always means fractional or part-time senior judgment that makes the hard-to-reverse calls and sets standards, while a builder or two execute. A full-time leadership hire that early is its own mistake.

### I'm a technical founder. Do I still need this?
Less often. If you can make and defend the architecture calls and evaluate the work yourself, you are the judgment in the room and can hire builders first. The leader-first case is strongest for non-technical founders or domains outside your own depth.

### How much does getting the order wrong actually cost?
The common failure is a rewrite: the first builder pours the foundation in the wrong shape and you discover it months later. That is measured in months of runway and thrown-away work, against a few thousand dollars a month for early direction.
