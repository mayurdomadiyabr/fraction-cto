---
title: 'Do you need a QA engineer yet, or just guardrails?'
slug: qa-engineer-yet
date: '2026-08-24T02:37:54.486Z'
category: Knowing when
excerpt: >-
  One embarrassing bug is not a reason to hire QA. The real trigger is when
  releasing gets risky and engineers fix more than they build.
description: >-
  When your startup needs a dedicated QA engineer versus developer testing, the
  triggers that justify it, and what to do first.
author: The founder of Fraction
readTime: 5
draft: false
---

A founder asked me last month whether it was time to hire a QA engineer because a bug had embarrassed them in front of a customer. It is the most common reason people reach for QA, and it is the wrong trigger. One painful bug is an incident to learn from, not a headcount decision. The right question is narrower: has releasing become so risky, or bug-fixing so constant, that your engineers spend more time cleaning up than building? That is when a dedicated tester turns into leverage instead of overhead.

Here is the short version. Before you have paying users and a stable product, skip dedicated QA and let engineers own testing, because speed and learning matter more than a formal process while you are still figuring out what you are building. Once you have paying customers, releases that feel scary, and developers spending more time fixing than shipping, one strong, adaptable QA hire earns their salary. Most teams cross that line somewhere past ten people, not before.

## Why developer testing is fine, until it isn't

Early on, your engineers writing their own tests is the correct answer, not a compromise. You are changing direction weekly, and a heavy test suite written around a product that no longer exists is waste. Under roughly five full-time engineers, teams reasonably share testing between themselves and their earliest users, who are forgiving because they chose to be early.

The known weakness is real, though. Developers who test their own code miss the same things they missed writing it, because they test the path they intended. That blind spot is tolerable when a bug costs you an apologetic email and a hotfix. It stops being tolerable when a bug costs you a churned enterprise account or a corrupted customer record. The shift is not about volume of bugs; it is about the cost of each one.

### The triggers that actually justify the hire

Watch for a cluster of these, not a single event. Releases have started to feel risky enough that people delay them. Bugs are causing business damage, not just annoyance: lost data, failed payments, a customer threatening to leave. Your engineers are visibly spending more time firefighting than building, which is the exact people you most need shipping burning their hours on manual regression checks. And you are shipping often enough that quality and reliability have become part of your reputation. Once the team is past ten and cranking out releases, erosion of trust becomes a business risk, not a hypothetical.

### The trigger that fools people

The false signal is searching for product-market fit and hoping QA will help you find it. It will not. If users are not sticking, a tester cannot fix that, and a QA hire at that stage is overhead paid out of a runway you should be spending on discovery. Do not confuse a quality problem with a fit problem. The goal is to bring QA in at the exact moment it becomes leverage, and not one hire sooner.

## What to do in the gap

There is a long stretch between too early and clearly overdue, and you do not have to leave it unmanaged. Build the cheap safety nets first. A short automated test suite around the flows that would cause real damage if they broke, such as signup, payment, and anything that writes customer data. A pull-request checklist so the author is not the only reviewer of behavior. A staging environment where someone other than the author clicks through the critical path before release. Modern tooling, including AI-assisted test generation, lets a small team stand up meaningful coverage without a dedicated headcount, and it buys you months of runway before the hire.

If you are earlier than this and wondering how much testing you actually need before you have users, I wrote about exactly that tradeoff in [how much testing you need before you have users](/post-how-much-testing-early). The answer there is deliberately light, and it is the right amount until the triggers above appear.

When you do hire, hire one strong generalist tester, not a team and not a narrow specialist. The most valuable early QA person writes automation, does exploratory testing, and pushes quality upstream into how engineers work, rather than sitting at the end of the line catching what already escaped. A tester who only files bug reports after the fact is a bottleneck; a tester who changes how the team ships is leverage.

Deciding whether the pain is bad enough to hire is a judgment call, and it is easy to get wrong in either direction. If you want an outside read on whether your release process needs a person or just better guardrails, you can [book a call to walk through it](/book-a-call), or compare the tradeoffs of building this capability in-house versus leaning on your existing team in our [comparison of engagement models](/comparison).

## FAQ

### What is a healthy ratio of developers to QA?
There is no universal number, and chasing a ratio is a mistake at your size. Many teams run without dedicated QA below ten people and add their first tester when release risk and firefighting justify it. After that, one QA per several engineers is common, but you scale to the pain, not to a formula.

### Should my first QA hire be manual or automation-focused?
Automation-capable, but not automation-only. Early on you need someone who can both explore the product like a skeptical user and codify the important paths so regressions get caught for free. A purely manual tester will not keep pace with a team shipping frequently.

### Can I use AI testing tools instead of hiring?
For a while, yes. AI-assisted test generation and monitoring can give a small team real coverage without a headcount, and it is a sensible way to extend the developer-owned phase. It stops being enough when someone needs to own quality strategy, triage, and the judgment about what to test, which is a person's job, not a tool's.

### We had one bad bug. Is that enough reason to hire?
No. A single incident calls for a postmortem, a test around that specific failure, and a check on your release process. Hire when bugs are recurring, causing real business damage, and consuming engineering time that should be going into the product.
