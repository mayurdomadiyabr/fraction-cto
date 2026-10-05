---
title: One engineering team or two? When to split
slug: split-engineering-team
date: '2026-10-05T08:18:57.246Z'
category: Knowing when
excerpt: >-
  Standups run long and ownership is fuzzy. When one team should become two,
  when it should not, and how to draw the line.
description: >-
  When should a startup split its engineering team in two? The signs, the
  reasons to wait, and how to split by product area without new friction.
author: The founder of Fraction
readTime: 5
draft: false
---

Your engineering team has grown from three to eight people and the daily standup now takes 25 minutes. Half the room is waiting through updates that have nothing to do with their work. Planning meetings turn into negotiations. Two engineers changed the same file last week without knowing it. Someone suggests splitting into two teams, and someone else says you are too small for that.

The short answer: split when one team can no longer hold a shared picture of its own work, which usually shows up somewhere between seven and ten engineers, not at a fixed headcount. The signs are long standups, constant coordination, unclear ownership and work blocked on other people in the same team. Split along parts of the product that customers would recognise, give each team a clear owner, and do not split until you have someone who can lead each half.

## Why one team stops working

A small team works because everyone knows roughly what everyone else is doing. Coordination is free; it happens in passing. As the team grows, the number of people who need to stay in sync grows faster than the headcount. With four people there are six pairs who might need to talk. With eight there are 28. With ten, 45.

Nothing breaks on a specific day. Instead, the cost of keeping everyone informed creeps up until meetings, messages and merge conflicts take a visible slice of the week. That is the moment to think about structure.

## Signs you have outgrown one team

### Standup has become a status broadcast

When standup takes more than 15 minutes and most people tune out for most of it, the group is too big to share one picture. People are reporting, not coordinating.

### Planning is a queue, not a conversation

If sprint planning is mostly arguing about whose work goes first, the team is serving too many priorities at once. One team with one backlog can only have one top priority.

### Ownership is fuzzy

Ask who owns billing, or onboarding, or the reporting module. If the answer is "whoever touched it last", bugs will bounce between people and nobody will improve those areas on purpose.

### Engineers block each other inside the team

Pull requests wait on reviewers who are busy with unrelated work. Two people unknowingly change the same part of the code. These are signs the team is working on too many separate things to coordinate them informally.

## Signs you should not split yet

### You do not have two people who can lead

A split creates two teams, and each needs someone who sets priorities, unblocks work and talks to the rest of the company. If you only have one person who can do that, splitting creates a leaderless team. Fix that first; I wrote about the choice in [when your team needs its first lead](/post-when-to-hire-engineering-lead) and the related trap in [promoting your best engineer to lead](/post-promote-best-engineer-team-lead).

### The product has one main flow

If almost every change touches the same core flow, two teams will spend their time negotiating over it. Splitting works when the product has parts that can change independently.

### The real problem is process, not size

Sometimes a long standup is just a badly run standup. Try a shorter format and written updates for a few weeks first. If the coordination pain persists, it is structural. My view on how much process a small team needs is in [when your team needs process](/post-when-does-your-team-need-process).

## How to split well

### Split by product area, not by layer

The most common mistake is a frontend team and a backend team. Every feature then needs both teams, and the coordination you were trying to remove comes straight back. Split by something a customer would recognise: onboarding and growth on one side, the core workflow on the other; or one team per main customer type. Each team should be able to ship most of its work without waiting on the other.

### Give each team a clear mission and a short list of owned areas

Write it down in a paragraph. "Team A owns signup, billing and the admin settings. Its goal this quarter is to cut time-to-first-value in half." Ambiguity about ownership is where most post-split friction comes from.

### Keep shared code explicit

There will always be shared parts: authentication, the data model, deployment. Decide who owns each. Shared parts with no owner degrade fast. If a single database couples everything, expect friction; I described that pattern in [the shared database that couples your team](/post-shared-database-coupling).

### Keep one engineering-wide rhythm

Two teams still need one place to share decisions: a short weekly engineering meeting, one place for architecture notes, one release process. The goal is fewer daily meetings, not two isolated groups.

### Review it after one quarter

The first split is rarely perfect. After three months, look at how often work crossed between teams and whether each team shipped its goals. Adjust the boundary if one team keeps waiting on the other.

## What this does not mean

Splitting into two teams is not a reason to move to microservices or to rewrite how your system is deployed. Team structure and system structure influence each other, but two teams can work well on one codebase with clear module ownership. If someone uses the split to argue for a big architecture change, read [monolith or microservices](/post-monolith-or-microservices) first.

If you are at this point and unsure how to draw the line, it is a decision a fractional CTO is well placed to help with, because it combines product, people and architecture. A [call](/book-a-call) is the quickest way to talk it through, and the [how it works](/how-it-works) page shows what a typical engagement covers.

## FAQ

### What is the right team size?

There is no exact number. Many teams work well with roughly five to eight engineers. Past that, coordination costs rise sharply. Watch the symptoms rather than the count.

### Should we split frontend and backend?

Usually not. Layer-based teams need each other for almost every feature. Product-area teams with both skills inside each team ship more independently.

### Who should lead each new team?

Someone who can set priorities, unblock engineers and represent the team to the rest of the company. It does not have to be the strongest coder, and it should not be someone who wants to code full time.

### Do we need a VP of engineering once we have two teams?

Not necessarily at two teams. Someone needs to coordinate across them, which can be a CTO, a head of engineering or a fractional leader. The [comparison](/comparison) page lays out the options.
