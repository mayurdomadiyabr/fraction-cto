---
title: Deploys are a big event at your startup. That is the problem.
slug: deploys-are-an-event
date: '2026-09-29T14:27:20.050Z'
category: Pattern recognition
excerpt: >-
  Rare, manual, big-batch deploys feel careful but break more often. How small
  teams make shipping boring and safer.
description: >-
  Why infrequent manual deploys cause more incidents at startups, the warning
  signs, and five steps to make small, frequent deploys routine.
author: The founder of Fraction
readTime: 6
draft: false
---

At some startups, shipping code is an occasion. Someone announces it in the team channel. The deploy happens on a Tuesday afternoon, never a Friday, and only when the one engineer who knows the steps is online. It bundles two or three weeks of changes. Afterwards, everyone watches the error logs for an hour, and about one time in four something breaks and has to be patched by hand.

If that sounds familiar, the problem is not that your team is careless. The problem is that deploying is rare and manual, and rare, manual deploys are riskier than frequent, boring ones. This is one of the most reliable patterns I see in early-stage engineering teams, and it is one of the cheapest to fix.

## Why rare deploys are the risky ones

The instinct is backwards. When deploys go wrong, teams slow down to be careful: fewer releases, more changes per release, more ceremony. That feels safer. It is not.

### Big batches hide the cause

A deploy with three weeks of changes might contain forty commits from four people. When something breaks, nobody knows which change did it, so debugging becomes a search. A deploy with one small change that breaks has an obvious suspect. The research behind the [DORA metrics](https://dora.dev/guides/dora-metrics-four-keys/) has found for years that speed and stability tend to move together: the teams that deploy most often also tend to have lower change failure rates and recover faster, not the other way round.

### Manual steps drift

If deploying means running six commands in a specific order, plus a database migration someone runs from their laptop, then every deploy is a small chance of a skipped step. The steps also change over time and live in one person's head, which is the same [key-person risk](/post-key-person-codebase-risk) that shows up everywhere else in a young codebase.

### Fear slows the whole company

When deploys hurt, engineers sit on finished work. Product feedback loops stretch from days to weeks. Sales promises a fix "in the next release", which is a date nobody controls. The cost is not only the incident; it is every week a finished feature waits for the next scary deploy.

## The signs you are in this pattern

You do not need metrics to diagnose it. Look for these:

- Deploys are scheduled, announced, or avoided on certain days.
- Only one or two people are able or allowed to deploy.
- The deploy involves steps that are not in a script, especially database changes run by hand.
- Releases contain more than a week of work.
- A bad deploy means fixing forward in a hurry, because rolling back is not really possible.
- Engineers ask "is it safe to merge this now?"

Two or more of these and deploys have become an event.

## What boring deploys look like at a small company

The goal is not an elaborate pipeline. The goal is that shipping a small change is so routine that nobody mentions it. For a team of two to eight engineers, that usually means five things.

### One command, or none

Deploying should be a single command or, better, an automatic result of merging to the main branch. If a human has to remember steps, write the steps into a script first, then automate the trigger. Most hosting platforms and CI services make this a few hours of work for a typical web app.

### Small changes, merged often

The deploy pipeline only helps if changes are small. Encourage pull requests that can be reviewed in minutes, and merge them the same day. If you are worried about unfinished features reaching users, that is what a simple flag is for. I cover when that is worth it in [feature flags versus just a deploy](/post-do-you-need-feature-flags-yet-or-just-a-deploy).

### Migrations that are part of the deploy

Database changes are where hand-run steps hurt most. Put migrations in the repository, run them automatically as part of the deploy, and prefer changes that are backward compatible for one release: add the new column, ship code that uses it, remove the old one later. That single habit removes most of the "we cannot roll back" problem.

### A rollback you have actually tried

A rollback plan you have never tested is a hope. Once a quarter, deploy something harmless and roll it back on purpose. If it takes more than a few minutes, fix that before you need it.

### A quick check after every deploy

You do not need a full observability stack on day one, but you need to know within minutes if a deploy broke login, checkout, or the main page. A basic health check plus error alerts covers most of it. If you are still deciding how much to spend here, see [when to pay for observability](/post-flying-blind-in-prod-when-to-pay-for-observability).

## Where to start this week

If your deploys are an event today, do these in order:

1. **Write the current deploy steps down exactly**, including the ones people "just know". Commit them to the repo.
2. **Turn that list into one script** and have a second engineer run it.
3. **Move database migrations into the same script.**
4. **Trigger the script from CI on merge to main**, with a manual approval step if the team is nervous at first.
5. **Shrink the batch.** Deploy daily for two weeks and watch what happens to incident count.

Most teams find that the incident rate drops within a month, and the team starts shipping noticeably more, simply because shipping stopped costing an afternoon.

## What this is not

Frequent deploys do not mean skipping review or testing. A small team still needs the lightweight checks described in [how much testing you need early](/post-how-much-testing-early). And it does not require a staging environment on day one; that has its own trigger points, covered in [do you need staging yet](/post-staging-environment-yet). It means removing the ceremony and manual risk from getting reviewed code to users.

## Why this matters beyond engineering

Deploy frequency is one of the clearest signals of a healthy engineering team, and an investor's technical reviewer will often ask how you ship and how you recover. More importantly, it sets the speed at which your company can learn from customers. A team that ships ten small changes a week learns faster than a team that ships one big one every three weeks, even with the same headcount.

When I do a [technical teardown](/teardown), the deploy process is one of the first things I look at, because it tells me more about a team's day-to-day reality than the architecture diagram does. If shipping feels heavier than it should at your company, [book a call](/book-a-call) and we can work out where the friction is.

## FAQ

### Is it really safe to deploy on Fridays?

If a deploy is small, automated, and easy to roll back, it is about as safe on Friday as on Tuesday. The Friday rule is a symptom: it exists because deploys are risky. Fix the risk and the rule stops mattering, though it is still reasonable to avoid big risky changes right before nobody is around to watch.

### How often should a small startup deploy?

There is no magic number, but aim for small changes going out at least daily when there is work to ship. The number matters less than the batch size: each deploy should be small enough that if it breaks, the cause is obvious.

### We only have one engineer. Does any of this apply?

Yes, and it matters more. A solo engineer with a manual deploy process is your whole release capability in one person's memory. A scripted deploy is also what lets a second engineer or a contractor ship safely later.

### What about mobile apps, where we cannot deploy instantly?

App store review adds delay, but the same principles apply to the backend and to how you build the app. Keep backend deploys small and automated, keep API changes backward compatible with older app versions, and automate the build and submission of the app itself.
