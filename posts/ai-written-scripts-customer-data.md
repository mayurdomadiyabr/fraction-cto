---
title: Your ops team writes code with AI now. Who reviews it?
slug: ai-written-scripts-customer-data
date: '2026-10-02T15:03:57.123Z'
category: Pattern recognition
excerpt: >-
  Singapore's first AI-linked breach came from an unreviewed bulk-email script.
  The six actions that should always need a second person.
description: >-
  Non-engineers now ship AI-written scripts against customer data. What
  Singapore's first AI-linked breach teaches and the review rule to adopt.
author: The founder of Fraction
readTime: 7
draft: false
---

Your customer success lead needed to email every customer about a price change. Instead of waiting for engineering, they asked an AI assistant to write a small script, pointed it at an export of the customer list, and ran it. It worked. Next month, someone in finance does the same for invoice reminders. Nobody in engineering has seen either script.

The short answer: AI has turned non-engineers into people who ship working code, and that code often touches customer data with no review at all. You do not need to ban it. You need a short list of actions that always require a second pair of eyes, a safe place for these tools to live, and someone technical who owns the rules. The cost of skipping this became very concrete in Singapore in September 2026.

## The case that made it real

On 30 September 2026, Singapore media reported that the country's data protection regulator had received its first breach notification linked to AI use. The incident itself happened in April. An employee at Bee Cheng Hiang, a well-known food company, had used a generative AI tool to write a program to send emails in batches. The program did not hide recipients from each other, so customers in each batch could see one another's email addresses. More than 95,000 customer email addresses were exposed. Reports noted the difference between correct and incorrect code came down to a small detail, and that it was the first time the company had used an AI tool in its operations ([Straits Times via Yahoo News](https://sg.news.yahoo.com/singapore-sees-first-data-breach-linked-to-ai-use-st-reports-002640437.html); [OECD AI incident record](https://oecd.ai/en/incidents/2026-09-30-1509)). The company's fix was a rule that at least two staff members check every bulk email before it goes out.

Notice what this was not. It was not a sophisticated attack, a model going rogue, or a vulnerability in the AI tool. It was an ordinary person, trying to do their job faster, running unreviewed code against real customer data. That pattern exists in most startups right now.

## Why this is a startup problem, not just a big-company one

Large companies have change management, security teams and approval workflows, however slow. A twenty-person startup has none of that outside the engineering team, and the engineering team usually has no idea what ops, sales and finance are running.

Three things make this risk higher at startups:

**The people writing scripts have the most access.** Early operators often have admin access to the CRM, the email platform, the billing system and sometimes the production database, because nobody set up roles. Our post on [shared admin logins](/post-shared-admin-logins) covers how that happens.

**The tasks are exactly the dangerous ones.** Bulk emails, bulk updates to customer records, data exports, refunds, account clean-ups. One bad loop or a wrong filter touches every customer at once.

**AI-written code looks finished.** It runs, it is tidy, it has comments. A non-engineer has no way to tell that a recipient field is wrong or that a filter will match everyone. Neither, sometimes, does the AI. We cover the general version of this in [the security holes AI-written code tends to have](/post-ai-code-security-holes).

This is different from the problem of staff pasting company data into personal AI tools, which we wrote about in [who wrote your shadow AI rule](/post-shadow-ai-startup-policy). That is data leaving the building. This is new code acting on your data, with nobody checking it.

## The actions that should always need a second person

You do not need a review process for every spreadsheet formula. You need one for a short list of actions where a single mistake reaches many customers or cannot be undone. A practical list:

- Sending email or messages to more than a handful of customers at once
- Bulk updates or deletes on customer records in any system
- Exports of customer data that leave your core systems
- Anything that moves money: refunds, credits, invoice changes, payouts
- Anything that writes to the production database directly
- Changing permissions or access for customers or staff

Write this list down, keep it to one page, and share it with every team. The rule is simple: if your script or automation does one of these things, a second person checks it before it runs on real data. For the riskiest items, that second person should be an engineer.

## Give these tools a safe place to live

Banning AI-written scripts will not work. People will keep writing them, just more quietly. The better move is to make the safe path the easy one.

### Use the tool's built-in features first

Most email platforms, CRMs and billing tools already have bulk-send, segmentation and bulk-edit features that handle the dangerous parts correctly. A marketing tool's campaign feature will not expose recipients to each other. Before anyone writes a script, ask whether the product you already pay for does it. Our post on [whether to build email sending or buy it](/post-build-email-sending-or-buy) makes the same point for product email.

### Test on fake data, then a small batch

Every script that touches customers should run first against test records, then on a small real batch, such as ten customers or your own team, before the full list. This single habit would have stopped the Singapore case at the first batch.

### Give scripts limited access

Scripts should use credentials with the minimum access they need: read-only when they only read, scoped API keys rather than an admin login. If your tools do not support that, it is a sign you need [a proper internal admin tool](/post-build-or-buy-internal-admin) for repeated operations.

### Keep them somewhere visible

A shared repository or folder for operational scripts, even a simple one, means engineering can see what exists and spot the dangerous ones. Scripts living on individual laptops are invisible until something goes wrong.

## What this means when you raise or sell to enterprises

Enterprise security questionnaires increasingly ask how you control access to customer data and what change control you have. Investors doing technical diligence ask similar questions. "Engineering reviews all code" is not true if ops is running AI-written scripts against production. A one-page rule, a small list of reviewed scripts and scoped credentials give you an honest answer.

Breach notification rules also vary by country and by what data was exposed. If a script does go wrong and touches personal data, get legal advice quickly; this post is not legal advice.

## A quick self-check for this week

Ask each team lead two questions: what scripts or automations has your team written or run in the last three months, and which of them touch customer data? Then check:

1. Does any of them send bulk messages, change records in bulk, or move money?
2. Was any of them run without someone else looking at it first?
3. What credentials do they use, and could those be narrower?

If you find even one unreviewed script on the high-risk list, you have found the gap before your customers did.

## Where outside help fits

Most early startups do not have anyone whose job is to set these rules and check them across teams. A fractional CTO can write the one-page list, review the existing scripts, set up scoped access and a safe home for operational tools, usually in a few days of work. A [technical teardown](/teardown) will surface the risky ones alongside the rest of your stack. See [pricing](/pricing) for how that works, or [book a call](/book-a-call) if you suspect your team is already running code nobody has read.

## Frequently asked questions

### Should startups stop non-engineers from writing code with AI?

No. Banning it pushes it underground. Instead, define the small set of high-risk actions that always need review, give people safe tools and limited access, and keep scripts somewhere engineering can see them.

### What happened in Singapore's first AI-linked data breach?

An employee at Bee Cheng Hiang used a generative AI tool to write a bulk email program that did not hide recipients from each other. More than 95,000 customer email addresses were exposed. The company now requires two staff members to check every bulk email.

### Was the AI tool at fault?

Reports attributed it to how the tool was used rather than a malfunction. The deeper cause was that unreviewed code ran against real customer data with no test batch and no second check.

### Which scripts are most dangerous?

Ones that send bulk messages, change or delete customer records in bulk, export customer data, move money, write to the production database, or change access permissions.

### How do I find out what scripts my team is running?

Ask each team lead directly what scripts and automations their team has used in the last three months, then review the ones that touch customer data or money first.
