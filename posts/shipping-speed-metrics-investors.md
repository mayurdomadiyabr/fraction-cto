---
title: Investors ask how fast you ship. Show these four numbers
slug: shipping-speed-metrics-investors
date: '2026-11-14T05:12:37.385Z'
category: Fundraising
excerpt: >-
  Deploy frequency, lead time, change failure rate and recovery time: how to
  pull them from git in an afternoon and present them in diligence.
description: >-
  Which delivery metrics to show investors at seed and Series A, how to pull
  them from git and deploy history, and which numbers to leave out.
author: The founder of Fraction
readTime: 5
draft: false
---

Investors increasingly ask some version of "how fast does your team ship?" in technical diligence. The honest answer is not a feeling and not a velocity chart from your sprint tool. It is three or four delivery numbers you can pull from your own git and deploy history, with one sentence of context each. The most widely used set comes from DORA, the long-running research program on software delivery, and you do not need any special tooling to produce a credible first version.

This post covers which numbers to show at seed and Series A, how to pull them in an afternoon, and which ones to leave out.

## Why investors ask this at all

The question is a proxy. An investor cannot read your code, so they look for evidence that money turns into shipped product at a predictable rate. A team that deploys several times a week, fixes broken releases within hours and rarely ships a change that breaks production is a team where more engineers will probably mean more output. A team that releases once a month after a stressful weekend is a team where the next hire may just add to the queue.

They are also checking for a specific failure: the startup where everything goes through one person, so delivery stops whenever that person is busy. We cover that risk directly in [our post on key-person risk](/post-one-engineer-key-person-risk).

## The four numbers, in plain words

DORA's [guide to its delivery metrics](https://dora.dev/guides/dora-metrics-four-keys/) defines them carefully. In founder language:

- **Deployment frequency.** How often a change reaches production. Count deploys per week over the last 90 days.
- **Lead time for changes.** How long a change takes from being committed to running in production. Use the median, not the average.
- **Change failure rate.** Of your deploys, the share that caused a problem needing a rollback, hotfix or urgent fix.
- **Failed deployment recovery time.** When a deploy does break something, how long until it is fixed. Again, the median.

DORA's recent material also tracks a fifth measure, rework rate: unplanned deploys made because of a production incident. It is useful internally, but for a seed-stage conversation four numbers are plenty.

The first two measure speed. The last two measure stability. Showing both matters, because speed with no stability is a team shipping bugs quickly, and investors know it.

## How to pull them in an afternoon

You do not need a metrics platform. You need your git host, your deploy log and your incident notes.

### Deployment frequency

If you deploy through a CI pipeline, the pipeline's run history for the production job is your list. Export the last 90 days and count. If deploys are manual, your hosting provider's deployment history usually has the same information.

### Lead time

For each merged pull request in the window, take the time from first commit to the production deploy that included it. A short script against your git host's API does this. If that is too much, sample 20 recent changes by hand. A sampled median, labelled as a sample, is honest and good enough.

### Change failure rate and recovery time

This is where most early teams have no data, because nobody writes incidents down. Go through the last 90 days of your team chat for rollbacks, reverts and "prod is down" messages. Each one is a failed change. Note when it was noticed and when it was fixed. If you find you cannot reconstruct this, that is a finding in itself, and the fix is cheap: start a one-line incident log today.

## What a good answer looks like

Here is the format I suggest, with illustrative numbers from a composite seed-stage team of four engineers:

| Measure | Last 90 days | Context |
|---|---|---|
| Deploys | About 9 per week | Automated pipeline, any engineer can deploy |
| Lead time (median) | 1.5 days | Longer for schema changes |
| Change failure rate | About 1 in 12 deploys | Mostly config errors, now caught by a check |
| Recovery time (median) | 40 minutes | Rollback is one command |

The context column does more work than the numbers. It shows you know why the numbers are what they are and what you are doing about the weak one. Put this table in your [technical memo](/post-tech-memo-investors) rather than the deck.

## Numbers to leave out

- **Story points and velocity.** They measure your team's own estimates, so they cannot be compared across teams and investors discount them.
- **Lines of code or commit counts.** These reward the wrong thing, and AI coding tools have made them even less meaningful.
- **Test coverage as a speed metric.** It is a separate question, with its own traps; see [which test coverage number to show](/post-test-coverage-diligence).
- **Anything you cannot reproduce.** If an investor's technical advisor asks how you got a number, you should be able to show them in five minutes.

## Do not optimise for the diligence call

The worst response to this post would be to start deploying trivial changes to inflate a number before a raise. Technical reviewers look at what was deployed, and a burst of empty deploys in the month before a round is easy to spot. These metrics are worth tracking because they tell you where your delivery process hurts. If change failure rate is high, you probably need a staging environment or better checks before release. If lead time is long, look for changes waiting days for review. Fix the cause and the number follows.

If deploys at your company still feel like an event the whole team dreads, start with [our post on why deploys should be boring](/post-deploys-are-an-event).

## FAQ

### Do seed investors really ask for DORA metrics?

Not by name, usually. They ask how often you ship and what happens when something breaks. Having these four numbers ready is the most concrete way to answer.

### What if our numbers look bad?

Show them anyway, with the reason and the fix. A team that knows its change failure rate is high and has a plan reads better than a team with no numbers at all.

### Do we need a tool to track these?

Not at first. A quarterly pull from git and your deploy history is enough until you have more than about ten engineers. After that, an automated dashboard saves time.

### Which number matters most at seed?

Recovery time, in my experience. It shows whether the team can contain a mistake, which is what investors are really worried about when they fund a small team.

If you want someone to pull these numbers with your team and tell you what they say before an investor does, look at our [technical teardown](/teardown) or [book a call](/book-a-call).
