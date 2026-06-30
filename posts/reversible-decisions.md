---
title: The early tech decisions you can't cheaply undo
slug: reversible-decisions
date: '2026-06-30T12:00:44.303Z'
category: Pattern recognition
excerpt: >-
  Most early technical choices are easy to reverse, so move fast. A handful are
  one-way doors that get exponentially expensive to change. Knowing which is
  which is most of the job.
description: >-
  Which early technical decisions are reversible and which are one-way doors
  that get costly to undo, and how to tell them apart.
author: The founder of Fraction
readTime: 5
draft: false
---

Most of the technical decisions a startup makes in its first year do not matter much. Which CSS framework, which hosting provider, which folder structure, whether the API is REST or something else. Get them wrong and you change them in an afternoon. The mistake founders make is treating all decisions with the same weight, agonizing over the reversible ones and rushing the few that you genuinely cannot take back.

The frame that helps is one Amazon made famous: some decisions are two-way doors and some are one-way doors. Two-way doors you walk back through if you do not like what is on the other side. One-way doors lock behind you. The skill, especially early, is spending almost no time on the two-way doors and real time on the handful of one-way ones.

## Why most early decisions don't matter

Founders lose weeks to debates that do not deserve them.

### Reversible decisions are cheap to get wrong

If switching your component library, your CI provider, or your linter takes a day, the cost of choosing wrong is a day. That is not worth a week of deliberation. The correct move on a two-way door is to pick a reasonable option fast and keep building. You will learn more from shipping than from arguing, and you can change it later for almost nothing.

### Speed compounds more than correctness here

A startup's scarce resource is time to find product-market fit, not architectural elegance. Every hour spent perfecting a reversible decision is an hour not spent learning whether anyone wants the product. On two-way doors, "good enough, now" beats "optimal, next week" almost every time.

## The one-way doors that actually bite

A small number of early choices get exponentially more expensive to change as the system and the company grow. These are the ones worth slowing down for.

### Your core data model

This is the big one. The shape of your central entities, how they relate, what you store and what you throw away, threads through everything: the database, the API, the frontend, every integration, every report. Changing a foreign key relationship in week two is a five-minute migration. Changing it in year two, with millions of rows and forty features depending on it, is a multi-month project with a real chance of data loss. If you slow down for one decision, slow down for this one.

### What you do and do not capture

Data you never collected is data you cannot get back. If you do not record when something happened, who did it, or which version a user saw, you cannot reconstruct it later when you suddenly need it for billing, debugging, or a compliance request. Storage is cheap. Capturing an event costs almost nothing today and is impossible to backfill tomorrow. Err toward recording more than you think you need.

### Anything customer-facing and hard to migrate

Public API contracts, URL structures, identifiers you expose to integrators. The moment another system depends on the shape of yours, changing it means coordinating with people you do not control. These harden the instant you have a second party relying on them.

### Authentication and the identity model

How you represent users, accounts, organizations, and the relationships between them is foundational. Retrofitting multi-user accounts, or splitting a user from an organization, onto a model that assumed one person per account is one of the most painful migrations there is. It touches security, billing, and every permission check in the system.

## How to actually run this in practice

The discipline is a sorting habit, applied before each meaningful decision.

### Ask "how expensive is this to undo in two years"

Before you spend time on a choice, answer one question: if we get this wrong, what does it cost to change after we have grown 10x. If the answer is "an afternoon," pick something and move on. If the answer is "a quarter and a risky migration," that is where your senior attention belongs. Most of the value of an experienced technical leader is knowing, fast, which bucket a decision falls into. That sorting instinct is part of what shows up in a [20-minute architecture review](/post-architecture-smells), where the irreversible choices are exactly what I look at first.

### Spend your scrutiny budget where it locks in

You have a limited amount of careful thinking. Pour almost none of it on reversible choices and almost all of it on the one-way doors above. A team that agonizes over its test runner but rushes its data model has its attention exactly backwards, and it is a common pattern behind the [expensive mistakes that were avoidable](/post-expensive-mistake-or-necessity).

### When unsure, keep the door open

If you genuinely cannot tell whether a decision is reversible, the meta-move is to make it reversible: add a layer of indirection, avoid leaking the choice across boundaries, keep the option to change your mind. Optionality is worth paying a little for on the decisions you cannot yet classify.

## FAQ

### Isn't the data model something I should just get a senior engineer to design upfront?
Largely yes, and this is one of the clearest cases for senior input early, even fractionally. You do not need a full-time hire to get the irreversible decisions right; you need a few hours of experienced judgment at the moments those doors are in front of you. If you are about to make one, [book a call](/book-a-call) before you commit.

### How do I know if a decision is truly irreversible or just annoying to change?
Ask what depends on it. A choice that only your team touches is usually reversible with effort. A choice that other systems, customers, or stored data depend on is the kind that hardens, because changing it means changing things outside your control.

### We already locked in a bad data model. What now?
Then you are in migration territory, and the right move is to scope it honestly rather than keep building on top. Sometimes you migrate incrementally behind a compatibility layer; sometimes you live with it and isolate the damage. Either way it is a real project, which is precisely why the early version of this decision deserved more care than the linter did.
