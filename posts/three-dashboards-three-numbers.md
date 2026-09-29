---
title: 'Three dashboards, three customer counts, and no one trusts any'
slug: three-dashboards-three-numbers
date: '2026-09-29T14:27:20.465Z'
category: Pattern recognition
excerpt: >-
  When billing, analytics and a spreadsheet disagree, the fix is definitions and
  owners before any new data tool.
description: >-
  Why startup metrics disagree across billing, analytics and spreadsheets, and
  how to define your core numbers so the team trusts them again.
author: The founder of Fraction
readTime: 6
draft: false
---

The board meeting is in two days. The founder asks for the number of active customers. The payments dashboard says 412. The product analytics tool says 530. The spreadsheet the ops lead maintains says 388. Everyone is sure their number is right, and the next two hours go to reconciling them instead of deciding anything.

This happens at almost every startup that reaches a few hundred customers without a single definition of its core numbers. It looks like a data problem. It is really a decisions problem: when nobody trusts the numbers, the company either stops using them or uses whichever one supports the argument in the room.

## Why the numbers disagree

Usually no one is wrong. Each tool is correctly answering a different question.

### Each system defines the word differently

"Active customer" in the payments system might mean an account with a non-cancelled subscription, including one whose card failed last week. In product analytics it might mean any account where someone logged in during the last 30 days, including free trials. In the ops spreadsheet it might mean accounts that have finished onboarding. Three reasonable definitions, three different numbers, one label.

### Each system has its own gaps

Analytics tools miss users who block trackers or who use a part of the product nobody instrumented. Payment systems count test accounts and internal accounts unless someone filters them. Spreadsheets depend on whoever last updated them. Time zones, refunds, upgrades, and merged accounts each shift the totals a little.

### Nobody owns the definition

The deeper cause is that the definition was never decided. The first engineer wired up an analytics event, the finance contractor built a revenue report, and a product manager built a funnel, each with a local meaning. No one ever wrote down "this is what we mean by active customer, and this is the system of record for it."

## What it costs

The obvious cost is time. Reconciling numbers before every board meeting, investor update, or pricing discussion burns hours of the most expensive people in the company. The less obvious costs are worse.

### Decisions get made on the convenient number

When three numbers exist, each team quotes the one that flatters its plan. Growth is measured one way in marketing and another in finance. Nobody is lying, but the company is no longer steering by a shared instrument.

### Investors notice the inconsistency

If your deck says one thing, your data room says another, and your investor update says a third, a diligence reviewer will ask why. It is rarely fatal, but it forces you to explain your own numbers under pressure. Anything on the deck you may have to [prove in diligence](/post-prove-the-technical-claim) should already have one definition and one source.

### People stop looking

The quietest cost is that the team stops using data at all. If every dashboard might be wrong, gut feel wins by default.

## The fix is mostly writing things down

You do not need a data team or a warehouse to solve most of this. At a few hundred customers, the fix is a short document and a few rules.

### Pick the five numbers that run the company

Most early-stage companies really steer by five to eight numbers: something like signups, activated accounts, paying customers, revenue, churn, and one usage measure that predicts retention. Start there. Do not try to define everything.

### Write one definition per number

For each number, write a single paragraph that answers: what exactly counts, what is excluded (test accounts, internal users, refunds, free trials), what time window applies, and which system is the source of truth. For example: "Paying customer: an account with at least one paid invoice in the last 35 days, excluding internal and test accounts. Source: the billing system. Owner: finance."

### Name an owner for each

Every number needs one person who decides its definition and answers questions about it. The owner does not have to be technical; they have to be responsible.

### Make every dashboard say which definition it uses

When a chart is labelled "Active customers", it should use the written definition or be renamed to what it actually shows, like "Accounts with a login in last 30 days". This one habit removes most of the confusion without changing any data.

### Reconcile once, then explain the gap

Run the numbers side by side once, understand why they differ, and write down the expected gap. "Analytics shows about 20% more active accounts than billing because it includes trials." Now a difference is information, not an argument.

## When the tools do need to change

Sometimes the definition is fine but the data is not. Events are missing, IDs do not match between systems, or someone has to export three CSVs and join them by hand every week. That is when an engineering fix is worth it: consistent user and account IDs across tools, tracking events added deliberately, and eventually a single place where the numbers are computed.

Most teams reach for a data warehouse too early. Often a scheduled query on your production database or a read replica is enough for a long time; I lay out the trade-offs in [do you need a data warehouse yet](/post-do-you-need-a-data-warehouse-yet) and in [whether you need a data hire yet](/post-first-data-hire-yet). The definitions come first. A warehouse full of undefined numbers is just a faster way to disagree.

## A useful test

Ask three people on your team, separately, how many paying customers you have and where that number comes from. If you get the same answer and the same source, you are in good shape. If you get three answers, or one answer and three sources, you have found the pattern.

This is one of the things I look at when a founder asks for a [technical teardown](/teardown) before a raise, because inconsistent numbers usually point to inconsistent systems underneath. If your board prep keeps turning into a reconciliation exercise, [book a call](/book-a-call) and we can sort out which numbers matter and where they should come from.

## FAQ

### Which tool should be the source of truth?

For anything involving money, use the billing or payments system, because it is the one that has to be right for accounting. For usage and engagement, use your own production database where possible, since analytics tools can miss events. Use the analytics tool for funnels and behavior, and label it that way.

### Do we need a data engineer to fix this?

Usually not at this stage. Most of the fix is agreeing definitions and labelling dashboards, which a founder or ops lead can drive. You need engineering help when IDs do not match across systems or the numbers depend on manual exports.

### How often should we review the definitions?

Look at them when your business model changes, such as new pricing, a new plan type, or a new product line, and otherwise about once or twice a year. Definitions that change silently cause the same problem all over again, so record the date and reason for any change.

### Our numbers differ by only a few percent. Does it matter?

A small, explained, stable gap is fine. What matters is that you know why it exists and that it is not growing. An unexplained gap, even a small one, often hides a real issue like double-counted accounts or failed payments being counted as revenue.
