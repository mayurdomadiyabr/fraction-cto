---
title: 'Your tests fail at random, so your team ignores them'
slug: flaky-tests-everyone-ignores
date: '2026-09-29T14:27:20.799Z'
category: Pattern recognition
excerpt: >-
  Flaky tests teach engineers to rerun red builds until real failures slip
  through. A simple policy to make the suite trustworthy again.
description: >-
  How flaky tests erode trust in a startup test suite, the usual causes, and a
  four-rule policy a small team can use to fix it.
author: The founder of Fraction
readTime: 6
draft: false
---

Here is a conversation I hear in almost every early engineering team that has had tests for more than a year. The build is red. Someone asks if it is a real failure. Someone else says, "that one fails sometimes, just rerun it." The rerun passes, the change merges, and nobody thinks about it again.

That test is flaky: it passes and fails on the same code. One flaky test is an annoyance. A handful of them quietly change how the team treats every failure, and once engineers learn that a red build probably means nothing, the test suite stops protecting you. You are paying to run tests that nobody believes.

## How common this is

Flakiness is not a sign of a bad team. It shows up at every scale. Google wrote about it in detail on its [testing blog](https://testing.googleblog.com/2016/05/flaky-tests-at-google-and-how-we.html), reporting that about 1.5% of its test runs were flaky and that almost 16% of its tests showed some level of flakiness. Google has dedicated teams and tooling for this. A seed-stage company has none, so the same problem just accumulates.

What makes it a pattern worth naming is the way it spreads. It does not stay at one test.

## How a test suite loses the team's trust

### Stage 1: one test is "known flaky"

A test that depends on timing, a shared database, or an outside service fails every so often. Rather than fix it, the team learns its name and reruns the build. That feels efficient.

### Stage 2: rerunning becomes the reflex

After a few more of these, the habit changes. Any red build gets a rerun first, whatever test failed. Some CI setups make this automatic with retries, which hides the problem entirely.

### Stage 3: real failures slip through

Eventually a test fails for a real reason, someone assumes it is the usual noise, reruns it, and gets lucky on timing, or merges anyway. The bug reaches production. Afterwards someone notices the test had been failing correctly the whole time.

### Stage 4: the suite becomes a tax

At this point, tests cost time to write, time to run, and time to rerun, while catching less and less. Some teams respond by deleting tests or turning CI checks off, which removes the cost and the protection together.

## What usually causes flaky tests

In the small codebases I review, the causes are predictable:

- **Timing assumptions.** Tests that sleep for a fixed time and hope a background task is done, or that assert something happens "within one second" on a busy CI machine.
- **Shared state.** Tests that depend on data left behind by other tests, so they pass or fail depending on the order they run in.
- **Real outside services.** Tests that call a live payment sandbox, email provider, or third-party API that is sometimes slow or down.
- **Dates and time zones.** Tests that break at midnight UTC, at month end, or when the CI server is in a different zone from the developer's laptop.
- **Randomness.** Generated test data that occasionally produces an edge case the test did not expect.

Almost none of these are hard to fix once someone looks. The problem is that nobody is assigned to look.

## A policy that works for a small team

You do not need special tooling to get a test suite back to trustworthy. You need a rule and an owner.

### Rule 1: a flaky test gets fixed or quarantined within a week

When a test is confirmed flaky, it goes on a short list. Within a week it is either fixed or moved out of the blocking suite into a quarantine that still runs but does not block merges. A quarantined test has an owner and a deadline. If it is not fixed by then, delete it and write a better one, because a test nobody trusts is worse than no test.

### Rule 2: no silent retries

Automatic retries in CI can be useful as a temporary measure, but they must be visible. If a test only passed on its second try, the build should say so, and that test should land on the flaky list. Silent retries are how a suite rots without anyone noticing.

### Rule 3: red means stop

Once the flaky tests are quarantined, a failing build means a real problem and the change does not merge. This is the whole point. The team has to be able to believe the signal again.

### Rule 4: someone looks at the trend

Once a month, someone spends thirty minutes on how often builds fail, which tests fail most, and how long the suite takes. On a small team that is usually the most senior engineer, or a [fractional CTO](/pricing) if you have one. The goal is to catch the slide from Stage 1 to Stage 2 before it becomes a habit.

## How much testing you should have in the first place

A lot of flaky suites come from writing too many slow, end-to-end tests too early. A small, reliable suite that covers the paths that move money or lose data beats a large one nobody trusts. I lay out where to focus in [how much testing you need before you have users](/post-how-much-testing-early), and when a dedicated tester starts to make sense in [do you need a QA engineer yet](/post-qa-engineer-yet).

This matters more now that more code is AI-assisted. When code is produced faster than people can read it, a trustworthy test suite is one of the few automated checks that still works, which is part of why [review becomes the bottleneck](/post-ai-review-bottleneck) on AI-heavy teams. A flaky suite removes that check at exactly the moment you need it.

## A quick way to check your own suite

Ask your engineers three questions:

- When the build fails, what is the first thing you do?
- Which tests do you consider "known flaky", and how long have they been that way?
- Has a bug reached production in the last six months that a test should have caught, and did that test fail before the bug shipped?

If the answer to the first is "rerun it", you are at Stage 2. It is a cheap fix now and an expensive one later. The state of the test suite is one of the first things I look at in a [technical teardown](/teardown), because it shows whether the team's safety net is real. If you want a second pair of eyes on yours, [book a call](/book-a-call).

## FAQ

### Is a small amount of flakiness acceptable?

A test that fails once in a very long while may not be worth hours of work, but it should still be known, tracked, and owned. The danger is not one flaky test; it is the team learning to ignore red builds. Keep the list short and visible.

### Should we just delete flaky tests?

Sometimes, yes. If a test is flaky, slow, and covers something better tested elsewhere, deleting it is the right call. If it protects something important, like payments or permissions, fix it or replace it with a more reliable test before you delete it.

### Can we use automatic retries in CI?

As a short-term measure, with visibility. Retries that hide failures make the suite look healthy while it decays. If you use them, make sure every retry is reported and feeds your flaky list.

### How do I know if this is a problem if I am not technical?

Ask how often the build is red and what people do about it. If the answer involves rerunning until it passes, or checks that were turned off to unblock work, the suite is not protecting you as much as the team thinks.
