---
title: Your technical cofounder left. Now you are raising.
slug: technical-cofounder-left-raise
date: '2026-10-03T09:08:11.599Z'
category: Fundraising
excerpt: >-
  A departed technical cofounder is not a dealbreaker. Messy equity, unassigned
  code, and leftover access are.
description: >-
  Raising after your technical cofounder left: the equity, IP, access, and
  knowledge checks investors run, and how to tell the story.
author: The founder of Fraction
readTime: 5
draft: false
---

Your technical cofounder left six months ago. The product still runs, a contractor or your first engineer keeps it going, and now you are raising. You know the question is coming: "who built this, and where are they now?"

The short answer: a departed technical cofounder is not a dealbreaker on its own. Investors see it often. What sinks rounds is the mess around the departure: unclear equity, code the company may not fully own, production access nobody revoked, and nobody left who understands how the system works. Clean those four things up before diligence and the story becomes a normal startup story, not a red flag.

## Why investors care about this specific exit

A technical cofounder leaving raises three questions in an investor's head at once. Was there a fight that will come back as a lawsuit? Does the company still control the asset it is selling? And can the remaining team actually change the product fast enough to hit the plan in the deck?

You can answer the first with paperwork, the second with paperwork and some access cleanup, and the third with evidence from the last few months of shipping. Founders often prepare only the story, and the story is the least important part.

## The four things diligence will check

### 1. The equity is settled

Under a standard four-year vesting schedule with a one-year cliff, the company typically has the right to repurchase unvested founder shares at the original price when a founder leaves ([Capbase](https://capbase.com/how-to-properly-deal-with-a-co-founder-leaving-your-startup/)). Investors want to see that this actually happened: a signed separation agreement, the repurchase exercised or waived in writing, and a cap table that reflects it.

What worries investors is a large block of equity held by someone who is no longer contributing, with no paperwork. That is dead weight on the cap table and a potential dispute. This is legal territory, so have your startup lawyer confirm the documents, but get it done before the round, not during it.

### 2. The company owns the code they wrote

Check that the cofounder signed an intellectual property assignment, ideally covering work done before incorporation as well. Cofounders often wrote the first version on a personal laptop, in a personal GitHub account, before the company existed. If that early work was never assigned, the company's ownership has a gap. The [code ownership problem](/post-who-owns-your-code) and the [IP assignment check before a raise](/post-ip-assignment-raise) walk through what a clean chain of title looks like.

A departing cofounder who left on good terms will usually sign a confirmatory assignment. One who left angry may not. Either way, find out now.

### 3. Their access is gone

This is the one founders skip. Make a list of every system the cofounder could reach: the code host, the cloud account (especially the root or owner account), the domain registrar, DNS, email provider, payment processor, app store accounts, the database, any API keys they created. Then confirm each one has been transferred or revoked, and rotate any credential they knew.

I have seen a company discover during diligence that the departed cofounder still owned the cloud billing account. Nothing malicious happened, but the investor's team now had a reasonable question about who controlled production. The [shared admin logins issue](/post-shared-admin-logins) is the same risk in a different form.

### 4. Someone current understands the system

Investors will want to talk to whoever runs engineering now. If that person cannot explain how deploys work, where the data lives, and what breaks most often, the departure looks like it took the knowledge with it. That is the [key-person risk](/post-key-person-codebase-risk) investors are trained to look for.

The fix is time and writing. Have your current engineer write a short architecture overview, a deploy runbook, and a list of known weak spots. Then make sure they have shipped real changes since the cofounder left. Three months of steady commits by the current team is the strongest evidence you have.

## How to tell the story

Keep it short, factual, and forward-looking. Something like: "Our cofounder left in March to pursue a different direction. Equity was settled under the vesting agreement, IP is assigned, access was transferred. Since then, our engineer has shipped the billing rewrite and the mobile release. Here is who leads engineering now and our plan for the next hire."

Do not trash the person who left. Do not hide the departure; investors will find it on LinkedIn in five minutes. And do not claim the product needed no one, because the next question will be who changes it when something breaks.

## When to bring in technical leadership

If nobody on the current team can answer architecture questions confidently, that is the gap to close before the raise, not after. Options range from promoting your strongest engineer with support, to a [technical advisor or a CTO](/post-technical-advisor-or-cto), to fractional leadership for the months around the round. Founders without any technical cofounder can also read [raising without a technical cofounder](/post-no-technical-cofounder-raise), which covers the investor framing in more depth.

## FAQ

### Will investors pass because my technical cofounder left?

Usually not, if the equity, IP, and access are clean and the current team has shown it can ship. Unresolved disputes and unclear ownership are what cause investors to walk.

### What if the cofounder will not sign anything?

Talk to a lawyer before the raise starts. An unresolved IP or equity question is much harder to fix once a term sheet is on the table, and investors will want to know about it either way.

### Should the departed cofounder talk to investors?

Not usually. Investors may do a reference check, so it helps if the separation was civil, but the conversation that matters is with the people building the product now.

### How soon before a raise should this be cleaned up?

Ideally three months or more. That gives time for paperwork, access cleanup, and a visible stretch of shipping by the current team.

If you want an independent read on whether your codebase and access setup would survive diligence after a cofounder exit, a [technical teardown](/teardown) is built for exactly this, or [book a call](/book-a-call) to talk it through.
