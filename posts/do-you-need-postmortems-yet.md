---
title: Do you need incident postmortems yet? Earlier than you think
slug: do-you-need-postmortems-yet
date: '2026-11-16T02:24:12.631Z'
category: Knowing when
excerpt: >-
  When a small team should start writing postmortems, a one-page template, and
  how to make the follow-up actions happen.
description: >-
  When a startup needs incident postmortems, simple triggers for writing one, a
  one-page template, and how to follow through.
author: The founder of Fraction
readTime: 5
draft: false
---

You need written incident postmortems as soon as customers depend on your product and the same kind of problem has happened twice. That point usually arrives earlier than founders think, often with three or four engineers. You do not need a heavy process. A one-page write-up after any incident that hurt customers, lost data or woke someone up, with two or three concrete follow-up actions that actually get done, covers most of the value.

Teams skip postmortems for understandable reasons. The incident is over, everyone is tired, and writing about it feels like dwelling on a mistake. The cost shows up months later, when the same outage happens again and nobody remembers what fixed it last time.

## What a postmortem is for

A postmortem is a short record of what happened, why, and what you will change so it does not happen the same way again. Google's SRE book, in its chapter on [postmortem culture](https://sre.google/sre-book/postmortem-culture/), frames it as blameless: the write-up focuses on causes in the system and process, not on which person made the mistake.

That framing matters more in a small team than a large one. When four people build everything, every incident has an obvious name attached. If the postmortem becomes a trial, people stop reporting near misses, and near misses are the cheapest lessons you get.

## The signs you need them now

- **Repeat incidents.** The same type of failure, such as a full disk, an expired certificate or a bad deploy, has happened more than once.
- **Paying customers noticed.** Someone emailed support, asked for a credit or mentioned it on a renewal call.
- **Data was lost or exposed.** Even briefly. These need a written record for legal and trust reasons, not just engineering ones.
- **One person holds all the context.** If the engineer who fixed it left tomorrow, would anyone know what happened?
- **Diligence is coming.** Investors and acquirers increasingly ask about incident history. Having a folder of honest write-ups is far better than reconstructing events from chat logs. I covered that angle in [incident history in diligence](/post-incident-history-diligence).

If you have no customers yet, or the product is a prototype nobody depends on, skip the formal write-up. Fix things and move on.

## When to write one

Set a simple trigger so nobody has to decide case by case. A rule that works for most early teams:

- Customers could not use a core feature for more than about 30 minutes.
- Any data loss, corruption or exposure, however small.
- A rollback or emergency fix outside working hours.
- Anything a customer formally complained about.
- Anyone on the team asks for one.

Those thresholds are a rule of thumb. Tune them so you write roughly one or two a month at most. If you are writing one every week, you have a reliability problem the postmortems are correctly pointing at, and that is a different conversation.

## A one-page template

Keep it short enough that writing it takes under an hour.

### Summary

Two or three sentences: what broke, for whom, for how long.

### Timeline

Times for: when it started, when you noticed, when you understood it, when it was fixed. The gap between "started" and "noticed" is often the most useful number on the page, because it tells you whether your monitoring works.

### Causes

What happened in the system and the process. Ask "why" a few times. "The deploy broke checkout" is a symptom. "A config change shipped without a test environment, and checkout has no automated check" is closer to a cause.

### What went well

What helped you recover quickly. This is not fluff; it tells you what to protect.

### Actions

Two or three specific changes, each with an owner and a date. "Be more careful" is not an action. "Add an alert when disk use passes 80 percent, owner Sam, by Friday" is.

## The part teams get wrong: follow-through

The write-up is the easy half. The value is in the actions getting done. In the teams I work with, the most common failure is a tidy document whose actions quietly never happen.

Three habits fix most of this:

1. **Put actions in the same tracker as feature work**, not in the document only.
2. **Review open postmortem actions in a regular planning meeting**, even briefly.
3. **Limit actions to what you will actually do.** Two real fixes beat eight wishes.

If postmortem actions keep losing to feature work every sprint, that is a prioritization signal for the founder, not the engineers.

## How this fits with on-call and incident response

Postmortems are the learning loop that sits after an incident. They work best alongside a basic way of responding while something is broken: who gets alerted, who decides, and how customers are told. If you do not have that yet, read [when you need on-call](/post-when-do-you-need-on-call) and [what an incident response plan looks like to diligence](/post-incident-response-plan-diligence). A status page, covered in [whether you need a status page yet](/post-do-you-need-a-status-page-yet), handles the customer side.

## FAQ

### Should customers see our postmortems?

Sometimes. A short public summary after a significant outage builds trust, especially with B2B customers. Keep the internal version more detailed and keep names out of both.

### Who should write the postmortem?

Usually the person who led the fix, with input from anyone involved. In a very small team, the founder or technical lead should review it so the actions get prioritized.

### How soon after the incident?

Within a few working days, while details are fresh. Waiting two weeks usually means the timeline becomes guesswork.

### Do we need special tooling?

No. A shared document folder and your normal issue tracker are enough until you have many teams. Dedicated incident tools help later, mostly with coordination during the incident itself.

If incidents keep repeating and you are not sure whether the problem is process, architecture or staffing, a [technical teardown](/teardown) can pinpoint it, or you can [book a call](/book-a-call) to talk through what keeps breaking.
