---
title: Diligence asks for your architecture diagram. Send the honest one
slug: architecture-diagram-for-diligence
date: '2026-11-06T21:14:45.428Z'
category: Fundraising
excerpt: >-
  Reviewers use your architecture diagram as their map. One honest page of what
  runs today beats an aspirational chart.
description: >-
  What to put on an architecture diagram for technical due diligence, what to
  leave off, and how to show messy parts without hurting the round.
author: The founder of Fraction
readTime: 6
draft: false
---

When diligence asks for an architecture diagram, send one page that shows how the system really works today: the services you run, the data stores, the outside providers you depend on, and how a request moves through them. Not the target architecture, not the diagram from your pitch deck, and not a fifty-box wall chart. A reviewer uses the diagram to decide where to look, so an honest, simple one makes the rest of diligence faster and friendlier.

I review a lot of these from both sides of the table. The diagrams that cause trouble are rarely too simple. They are aspirational. They show a message queue that was planned but never built, or leave out the one cron job on a single server that the whole billing flow depends on. When the reviewer finds the gap between the picture and the code, every other document you sent gets read more skeptically.

## What the reviewer uses the diagram for

A technical reviewer usually has a few days and a long list. The diagram is their map. From it they decide which parts of the system carry the most risk and where to spend their limited interview and code-reading time.

They are looking for a handful of things.

- **Single points of failure.** One database with no replica, one server running scheduled jobs, one engineer who understands a component.
- **External dependencies.** Which third-party services, if they went down or changed pricing, would take the product down with them. This overlaps with [vendor concentration](/post-vendor-concentration-diligence).
- **Where customer data flows.** Which components store or receive personal data, so they can check access control and compliance.
- **How it scales.** Which parts would need to change if usage grew tenfold, which is the real meaning behind the question [can it handle 10x](/post-can-it-handle-10x).
- **Complexity relative to team size.** A three-person team running twelve services is a different risk from a three-person team running one well-structured application.

If your diagram makes those five things easy to see, you have done most of the reviewer's first day for them.

## What to put on the page

### The parts you run

Your applications and services, each as one box with a short label: what it does, what it is written in, and where it is hosted. If you run a monolith, draw one box and say so. A monolith is a perfectly sensible choice for an early company, and pretending otherwise helps no one.

### The data stores

Databases, file storage, caches, search indexes, and queues. Note the region, and whether there are backups or replicas. If a backup has never been restored as a test, say that in your notes; reviewers will ask, and the honest answer is better than a confident wrong one.

### The outside services

Payment provider, authentication, email, AI model providers, analytics, and anything else the product calls at runtime. Group them on one side of the page. You do not need logos. You need names and one word each on what they do.

### The main flows

Draw the two or three flows that matter most, usually a user signing up, a core action in the product, and a payment, as numbered arrows. A reviewer who can follow a request from the browser to the database and back understands your system faster than one reading a list of components.

## What to leave off

Leave off anything you have not built. If you have a planned architecture, put it on a separate page clearly labelled as the plan, with a rough timeline. Mixing current and future on one page is the most common way founders accidentally mislead a reviewer.

Leave off internal detail that does not change risk: every class, every endpoint, every library. That belongs in the code, which the reviewer may read anyway. Leave off secrets, credentials, and internal hostnames. The diagram may be forwarded to people you never meet.

## Drawing it honestly when the system is messy

Most early systems have something embarrassing in them. A script on one engineer's laptop that runs the monthly invoice export. A database table that two services both write to. A manual step in deployment that only one person knows.

Put those on the diagram, marked clearly, with a short note on what you plan to do about each. This feels risky, and founders resist it. In practice it does the opposite of what they fear. A reviewer who finds a messy part that you already flagged writes "known, with a plan." A reviewer who finds a messy part you left out writes "the team either does not know its system or chose not to say," and that sentence travels to the investment committee. I go into how those reports get written in [the diligence report you never see](/post-diligence-report-you-never-see).

## How long this should take

For a typical seed or Series A company, one senior engineer can produce a good diagram in half a day, and a founder can review it in an hour. The tool does not matter. A clean drawing in any diagramming tool, exported to PDF, is fine. What matters is that it is current; a diagram from eighteen months ago is worse than none, because it shows the reviewer that documentation is not maintained.

Pair it with a short written note, a page at most, covering hosting, deployment, backups, and the known gaps. Together they make the core of the technical section of your data room, and they feed directly into the [three-page tech memo](/post-tech-memo-investors) if you are writing one.

## A quick test before you send it

Ask an engineer who did not draw it to walk a new hire through it in ten minutes. If they get stuck, or say "well, it does not really work like that," fix the diagram. Then ask yourself whether anything on the page would surprise your own team. If it would, it will surprise the reviewer more.

If you would like a second pair of eyes before you send it, reviewing the diagram against the real system is part of a [technical teardown](/teardown). You can also [book a call](/book-a-call) to talk through what your reviewer is likely to focus on.

## FAQ

### Should we use a formal notation like C4 or UML?

Only if your team already uses it. A reviewer cares about clarity, not notation. Simple labelled boxes and numbered arrows are fine for almost every early-stage company.

### What if our architecture is about to change?

Send the current one, and add a separate page with the planned change and its timeline. Never blend the two. Reviewers assess what exists, and they will check.

### Do we need a diagram if we are one application and one database?

Yes, and it will take twenty minutes. A simple diagram that shows one app, one database, and five outside services tells the reviewer your system is easy to reason about, which is a good signal.

### Who should draw it, the founder or the engineers?

An engineer who works on the system day to day should draw it, and the founder should review it. If the founder draws it alone, it tends to reflect how the system was meant to work rather than how it does.
