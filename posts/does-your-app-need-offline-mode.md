---
title: Does your app need offline mode? Probably not the kind you think
slug: does-your-app-need-offline-mode
date: '2026-10-14T03:47:12.590Z'
category: Decisions
excerpt: >-
  Offline mode is a spectrum. Most apps need graceful failure and cached reads;
  true offline-first sync is an architecture, not a feature.
description: >-
  The four levels of offline support, why offline-first sync is hard, and how to
  tell which level your users actually need.
author: The founder of Fraction
readTime: 5
draft: false
---

Most apps do not need full offline mode. They need to behave well on a bad connection: show cached data, queue a few simple actions, and say clearly when something has not been saved. True offline-first, where users create and edit data for hours without a connection and it syncs later, is a much bigger commitment, and it is only worth making when your users really work where the network is not.

The request usually arrives as a single sentence in a customer call: "Does it work offline?" Someone writes it on the roadmap as one feature. It is not one feature. It is a spectrum, and the far end of it changes how your whole data layer works.

## The four levels of offline

When a founder asks me whether to build offline support, the first thing I do is work out which of these levels they actually mean.

**Level 1: graceful failure.** The app notices it has no connection, says so plainly, keeps what the user typed, and lets them retry. No data is lost and nobody is confused. Every app should do this, and many do not.

**Level 2: read offline.** Recently viewed data is cached on the device, so users can still open the last list, record or document they saw. Writes need a connection. This covers a surprising share of real requests: the field user who wants to look up a customer's address in a basement.

**Level 3: queued simple writes.** Users can perform a small set of actions offline, such as checking off a task, adding a note or logging a visit, and the app sends them when the connection returns. Each queued action is simple and unlikely to clash with someone else's work.

**Level 4: offline-first.** The device holds a real local database. Users create, edit and delete freely for long periods, and a sync engine reconciles their changes with the server and with everyone else's changes. This is what people usually picture, and it is the expensive one.

Levels 1 to 3 are features. Level 4 is an architecture.

## Why level 4 is so much harder

The hard part is not storing data on the phone. It is what happens when two people change the same thing while one of them is offline.

Say two warehouse staff both adjust the stock count of the same item while out of signal. One sets it to 8, the other to 6. When both sync, which is right? Neither: the real answer depends on what each of them did. A rule like "last write wins" quietly throws one change away. For a note's title, that is fine. For stock, money, or a medical record, it is a data-integrity bug that nobody notices until a count is wrong.

So offline-first forces decisions on every data type you sync: which changes can simply overwrite, which must be merged, which should be recorded as separate events and added up, and which must be flagged for a human to resolve. You also need to handle deletions that happen while someone else is editing, schema changes while old app versions still hold local data, and devices whose clocks are wrong.

There are good tools for this now. Sync engines that keep your normal backend database and replicate a subset to a local SQLite store are a sensible path for most teams. But a tool handles the plumbing, not the decisions about your data. And the platform choice matters: MongoDB deprecated its Atlas Device Sync product in September 2024, leaving teams that built on it to migrate. If you adopt a sync engine, it becomes one of the most deeply embedded vendors you have, so judge its staying power the way you would judge your database.

## Signals that you genuinely need offline-first

I recommend level 4 only when most of these are true:

- Your users work for long stretches without signal as a normal part of the job: field service, inspections, agriculture, construction, aviation, ships, rural health, remote retail.
- The work they do offline is the core of the product, not a side feature.
- They create and edit significant data while offline, not just read it.
- Losing or delaying that work has a real cost, such as a missed inspection record or a lost sale.
- You can name the conflict rules for each kind of data, or you are prepared to spend time working them out with real users.

If your users are mostly office workers with occasional bad Wi-Fi, levels 1 and 2 will cover nearly all of their complaints at a fraction of the cost.

## How to decide without guessing

### Go and watch

Ask three of the customers who requested offline mode to show you exactly where and when the connection fails, and what they were trying to do. Often you will find a level 2 need described in level 4 language.

### Measure the failures you already have

If you have a mobile app, check how often requests fail or time out by network condition. That tells you how big the problem is and whether better retry behaviour would fix most of it.

### Price it honestly

A level 4 sync layer is not a sprint. Expect it to shape how every future feature is built, because each new data type needs sync and conflict rules. Put that ongoing cost next to the revenue the customers asking for it represent.

### Prototype the worst conflict

Before committing, build the single nastiest conflict case for your domain and test it on real devices in airplane mode. If the team cannot agree what the right outcome is, you are not ready to build the whole thing.

If you are weighing this alongside the broader question of whether you need a native app at all, our post on [whether you need a mobile app](/post-do-you-need-a-mobile-app) covers that first step. And if a customer request is pushing offline mode up your roadmap, [book a call](/book-a-call) and we can work out which level you actually need before anyone starts building.

## FAQ

### Can a web app work offline?

Yes, to a degree. Service workers and browser storage let a web app cache screens and data and queue some actions. For heavy offline editing over long periods, a native or cross-platform app with a real local database is usually more reliable.

### Is last-write-wins good enough for conflict resolution?

For many fields, such as a name or a description, it is acceptable. For counts, balances, inventory and records where every change matters, it silently loses data. Decide per data type rather than for the whole app.

### How long does adding offline-first to an existing app take?

It depends on how much data must sync and how complex the conflict rules are. It is usually a substantial project that changes the data layer, not a feature added in a sprint. Levels 1 to 3 are much smaller.

### Should we build our own sync engine?

Almost never at an early stage. Use an established sync tool, check its long-term viability carefully, and spend your engineering time on your conflict rules instead.
