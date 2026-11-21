---
title: Diligence wants a live code walkthrough. How to prepare
slug: live-code-walkthrough-diligence
date: '2026-11-21T04:35:27.685Z'
category: Fundraising
excerpt: >-
  An investor's technical advisor wants to walk through your code on a call.
  What they look for, who should drive, and what to prepare in a day.
description: >-
  An investor's advisor wants a live walkthrough of your codebase. What they
  look for, who should drive the screen, and a one-day prep list.
author: The founder of Fraction
readTime: 5
draft: false
---

When an investor's technical advisor asks for a live walkthrough of your codebase, they are not grading your code style. They want to see whether the team understands its own system, can find things quickly, and talks honestly about weak spots. Prepare a short route through the code, let the engineer who knows it best drive the screen, and decide in advance what you will say about the parts you are not proud of.

This request has become more common at seed and Series A. Some advisors ask for repository access and read the code alone. Others prefer an hour on a video call with your lead engineer sharing their screen, because it tells them as much about the team as about the code. This post is about the second kind.

## What the advisor is actually looking for

In my experience, a walkthrough answers four questions. None of them is "is this code beautiful".

### Does the structure match the story?

Your deck and architecture diagram say the product works a certain way. The advisor wants to see that the code is shaped the same way. If the diagram shows a clean separation between billing and the core product but billing logic turns up inside a user-profile controller, that is a credibility problem, not a style problem. Have a current [architecture diagram](/post-architecture-diagram-for-diligence) ready to put next to the code.

### Can the team navigate its own system?

Watching an engineer find the code for a feature tells you a lot. Fast, confident navigation means people work in this codebase every day and understand it. Long searches, "I think it is somewhere in here", or "only the person who left knew that part" point to key-person risk.

### How do changes get to production?

Expect to be asked to show the path from a commit to a deploy: tests, review, the pipeline, how you roll back. A walkthrough of one recent pull request, from opening to release, covers most of this in five minutes.

### Where are the bodies buried?

Every codebase has a part the team avoids. Advisors know this. What they judge is whether you know where yours is and have a plan. Being shown the messy module with a clear explanation is fine. Discovering it yourself after being told everything is clean is not.

## Who should drive the screen

The engineer who works in the code most should drive. Usually that is your lead or most senior engineer, not the CTO who has been in meetings for a year, and definitely not the founder reading from notes.

The founder or CTO should be on the call to answer the business questions: why this was built rather than bought, what the roadmap needs from the architecture, what the round will fund. Agree in advance who answers what. Two people talking over each other about the same module looks like a team that has not compared notes.

If the code was mostly written by an agency or a contractor who is no longer around, say so at the start. Then have whoever now owns it drive, even if they are newer to it. Pretending your in-house team wrote code they inherited is the fastest way to lose trust, and investors routinely [check the commit history](/post-commit-history-diligence) anyway.

## A one-day prep list

You do not need weeks. A day of focused preparation is usually enough, as a rule of thumb, for a codebase built by a small team.

### Plan a route, not a tour

Pick three paths through the code and practise them once:

1. **A core user action end to end.** For example, from the signup form through the API to the database and back. This shows structure.
2. **One recent change from pull request to production.** This shows process.
3. **The part you are least happy with.** This shows honesty and judgment.

Write the file names down. Nothing is worse on a call than five minutes of searching.

### Clean the screen, not the code

Do not refactor the night before. Advisors can see recent commit dates, and a burst of tidying the day before diligence looks like what it is. Instead, close unrelated tabs, turn off notifications, increase the editor font size, and make sure no terminal shows production credentials.

### Check for secrets before you share

If keys, passwords or tokens are committed anywhere in the repository, someone will see them while you scroll. Run a secrets scanner across the current code and history first. If you find anything, rotate it before the call. Our post on [secrets in git history](/post-secrets-in-git-history-diligence) covers how.

### Prepare the honest answers

Write down two or three known weaknesses and what you plan to do about each, with rough timing. Test coverage is a common one; if yours is thin, know where it is strongest and why, as covered in [what diligence makes of test coverage](/post-test-coverage-diligence).

## Things that go badly on these calls

A few patterns I have seen turn a routine walkthrough into a follow-up list:

- **Defensiveness.** Arguing with every observation. Say "fair point, here is why we chose that" once, then move on.
- **Over-claiming.** "We have full test coverage" when the advisor can open the coverage report. Precise and modest beats impressive and wrong.
- **Live debugging.** Something breaks during the demo and the engineer starts fixing it on screen. Note it, move on, follow up in writing.
- **Showing production data.** Never scroll through real customer records on a shared screen. Use a staging environment with test data.

## What happens after the call

Usually the advisor writes a short note for the investor: a few strengths, a few risks, sometimes a list of questions. You may never see it, which is normal. If follow-up questions arrive, answer them in writing within a day or two, with links to specific files or documents rather than long explanations.

If you want to rehearse before the real thing, our [technical teardown](/teardown) is effectively a dry run of this call, and the [pricing page](/pricing) explains how it works.

## FAQ

### Should I give the advisor repository access instead?

It depends on the stage of the deal and your agreements. Read-only access under an NDA, later in diligence, is common. A live walkthrough first is often a better use of everyone's time and exposes less. Get advice before sharing source code with a strategic investor who may compete with you.

### How long does a walkthrough usually take?

In my experience, sixty to ninety minutes. If it runs much longer, the advisor has probably found something they want to understand properly, which is worth asking about directly at the end.

### What if our code really is a mess?

Say so, explain why (speed to market, an inherited codebase, a pivot), and show the plan. Investors fund messy code from teams that understand it. They hesitate on teams that do not.

### Can someone help us prepare?

Yes. An outside reviewer can run the same three routes with your team and tell you what an advisor will notice. If that would help, [book a call](/book-a-call).
