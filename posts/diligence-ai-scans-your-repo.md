---
title: Diligence now starts with an AI scanning your repo
slug: diligence-ai-scans-your-repo
date: '2026-09-03T02:43:38.058Z'
category: Fundraising
excerpt: >-
  In 2026 a machine reviews your codebase before any investor does. What the
  automated pass looks for, why it is good news, and how to prepare your repo
  for it.
description: >-
  Technical diligence is being automated: AI scans your repo before a partner
  calls. What it checks and how to prepare for the machine reviewer.
author: The founder of Fraction
readTime: 7
draft: false
---

Technical due diligence used to begin with a human. A partner or a hired reviewer would ask for access, read the code over a week or two, interview your engineers, and write up what they found. In 2026 the first pass increasingly happens before any of that: an AI tool ingests your repository, your infrastructure config, and your public claims, and produces a risk summary in minutes. By the time a human at the fund reads anything, a machine has already formed an opinion about your codebase. If you are raising a seed or Series A round, you should assume this is happening and prepare for the machine reviewer, not just the human one.

This is not a small shift in tooling. It changes what gets caught, how early, and how cheaply, which means it changes what you need to have in order before you open the data room.

## What the automated pass actually looks at

The new diligence tools are not magic and they are not reading your code for elegance. They are pattern-matchers pointed at the things that are cheap to check at scale and expensive to fake. In practice that means a few consistent categories, and knowing them tells you exactly where to spend your preparation time.

The first is technical debt and consistency. An automated scan flags large files, duplicated logic, dead code, wildly inconsistent style across the codebase, and modules that appear to have been written by five different people with no shared convention. None of that is fatal on its own, but a repo that lights up here reads as unmanaged, and it invites the human reviewer to look harder.

The second is security. Automated tools are very good at the boring, high-value checks: dependencies with known vulnerabilities, secrets committed to git history, obvious injection surfaces, and authentication code that does something non-standard. These are the findings that show up in almost every report because they are easy to detect and genuinely matter. A [secret sitting in your git history](/post-secrets-in-git-history-diligence) is exactly the kind of thing a machine finds in seconds that a human might have missed on a skim.

The third, and this is the 2026 addition, is provenance and understandability. Because AI wrote a meaningful share of most young codebases now, the tools increasingly try to assess whether the code is understood and maintained rather than just generated and shipped. They look for documentation, for commit messages that explain intent, for tests that describe behavior, and for signs that a human reviewed what the machine produced. A codebase that reads as a pile of generated output with no paper trail is the new red flag, which is why [keeping a record of how AI-written code got reviewed](/post-ai-code-no-paper-trail) has gone from nice-to-have to something diligence specifically probes.

## Why founders should treat this as good news

The instinct is to find this threatening: one more automated gate between you and a term sheet. I think it is mostly the opposite, for two reasons.

Automated diligence is predictable. A human reviewer's focus depends on their background, their mood, and what they happened to notice first. A tool checks the same categories every time. That means you can prepare against a known checklist instead of guessing what a particular reviewer will care about. The things the machine looks for are the things you can fix in advance, and most of them are unglamorous hygiene rather than deep architecture.

It also front-loads the findings. In the old model, a problem surfaced deep into a process you had already spent weeks on, sometimes after a term sheet, which is the worst possible time to discover a security hole or an unmaintainable module. When a machine scans early, the problems surface early, while you still have leverage and time. A founder who runs the same class of scan on their own repo before the raise gets to fix things on their own schedule instead of explaining them under pressure.

The failure mode is not the tool existing. It is finding out what it says at the same time the investor does.

## How to prepare a repo for a machine reviewer

The preparation is not exotic, and it overlaps almost entirely with things a well-run engineering team should do anyway. The difference is doing them deliberately before you raise.

Run the scans yourself first. The same categories of tooling that a fund uses are available to you. Point a dependency scanner, a secrets scanner, and a basic static analysis pass at your own repository and read the output as if you were the investor. Most of what comes back will be fixable in a day or two, and fixing it quietly beats explaining it later.

Clean the obvious signals. Rotate and remove any secrets that ever touched git history, not just the current files. Upgrade or replace dependencies with known vulnerabilities. Delete dead code and the half-finished experiment branches that make a repo look chaotic. These are low-effort, high-signal changes that move your automated report from noisy to clean.

Make the code legible to a reviewer who was not there. This is where the provenance point bites. Ensure there are commit messages that explain why, a readme that describes how the system is put together, and tests that state what the important paths are supposed to do. For anything an AI agent generated in bulk, make sure a human clearly reviewed it and that the review is visible in the history. The goal is a codebase that does not depend on one person's memory, because that dependency is precisely what both the machine and the human are trying to detect.

Get your data room in order alongside the code. The automated pass reads the repo, but the human follow-up reads everything around it, and a coherent set of documents shapes how the whole review goes. Having the [technical data room assembled before diligence starts](/post-technical-data-room) is the single highest-leverage preparation, because it lets you control the narrative instead of scrambling to answer questions after a tool has already raised them.

## What this does not change

It is worth being clear about the limits, because the tooling gets oversold. An automated scan is excellent at the checkable and useless at the judgment calls. It can tell an investor that your dependencies are current; it cannot tell them whether your architecture is the right one for where the business is going, whether your one senior engineer is a single point of failure, or whether the roadmap is credible. Those still require a human, and they are still where deals actually turn.

So the machine pass raises the floor, not the ceiling. It catches the hygiene problems that used to slip through, which means you can no longer coast on a reviewer not noticing. But it does not evaluate the things that make a technical story compelling, and a clean automated report with no substance behind it will not save a weak business. Treat the scan as the entry ticket: necessary, increasingly automated, and entirely preparable. Then put your real effort into the parts a machine cannot grade.

If you are heading into a raise and want a read on what an automated pass and a human reviewer will each find in your codebase before either of them does, that is exactly the kind of thing worth [a short call about](/book-a-call).

## FAQ

### Do I need to hire someone to run these scans?

No, not to start. The common dependency, secrets, and static-analysis scanners are self-serve, and running them yourself gives you the same categories of findings an investor's tool will surface. Bring in a technical advisor when you want help interpreting the results or fixing anything structural, but the first pass is something a founder can trigger and read.

### Will using AI to write my code count against me in diligence?

Not by itself. Using AI tools is standard now, and reviewers expect it. What counts against you is AI-written code with no evidence that a human understood or reviewed it: no tests, no documentation, no commit history explaining intent. The concern is unmaintained code, not machine-assisted code. Show the review and the understanding and the origin stops being a problem.

### How early should I run diligence-style scans on my own repo?

Before you open a round, not during it. The whole advantage of the automated era is that the findings are predictable and fixable, but only if you see them first. Running the scans a month before you start talking to investors gives you time to clean up on your own terms; running them mid-process just tells you what the investor already knows.
