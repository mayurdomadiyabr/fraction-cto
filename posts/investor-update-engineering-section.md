---
title: The engineering section of your investor update says nothing
slug: investor-update-engineering-section
date: '2026-09-26T03:59:11.513Z'
category: Fundraising
excerpt: >-
  A six-line format for the engineering part of your monthly investor update
  that investors actually read and diligence can reuse later.
description: >-
  What to write in the engineering section of a startup investor update: a
  six-line format, what to leave out, and how to report a bad month.
author: The founder of Fraction
readTime: 5
draft: false
---

Most founder investor updates have a product or engineering section that says some version of "shipped X, working on Y, team is heads down." Investors skim it because it tells them nothing they can use. A useful engineering section is short, and it answers three questions: are we shipping what we said we would, is anything getting riskier, and do we need help. Written that way, it also becomes the paper trail that makes your next round's technical diligence faster.

Below is the format I suggest to founders, what to leave out, and how to handle the months where the news is bad.

## Why the engineering section matters more than it looks

Investors read monthly updates to answer one question: is this company getting more or less likely to reach the next milestone? For most seed and Series A companies, the product is the milestone. If engineering is slipping, everything else in the update is downstream of it.

There is a second reason. When your next round starts, the new investor's technical reviewer will ask what happened over the last 12 to 18 months. Founders who have written a clear engineering paragraph every month can simply forward the archive. Founders who have not end up reconstructing history from memory, and memory tends to be optimistic. Reviewers notice when the story in the room does not match the story in the updates. We covered that in [why your roadmap needs to survive diligence](/post-roadmap-credibility-diligence).

## A format that fits in six lines

You do not need a long section. You need a consistent one. Here is the structure I recommend.

### 1. What shipped against what we said

One or two lines. Name what you said last month you would ship, and say whether it shipped. "Said: self-serve onboarding. Shipped: yes, live since the 12th, 40% of new signups now finish without a call." If it did not ship, say so and say why in one clause.

### 2. What we are shipping next month

Two or three items, stated so that next month you can say yes or no. "Usage-based billing live for new customers" is checkable. "Improving billing" is not.

### 3. One number that tells the health story

Pick a single operational number that matters for your stage and report it every month so the trend is visible. Good options:

- Weeks from idea to customers using it, for your last major feature.
- Uptime or number of customer-facing incidents.
- Cloud cost as a percentage of revenue, if margin is a live question. See [why gross margin is a technical question](/post-gross-margin-technical-question).
- Share of support tickets caused by bugs.

Do not change the number every month. The point is the trend line.

### 4. Risk that went up or down

One line on anything that got riskier or safer. "Our only backend engineer is now documented on deploys and billing; key-person risk down." Or: "Our AI model provider announced a price change; we estimate margin impact of 2 to 4 points and are testing an alternative." This is the line experienced investors actually read.

### 5. Team

Hires, departures, open roles. If someone important left, say it here before an investor hears it elsewhere.

### 6. The ask

One specific request: an intro to a senior engineer candidate, a reference for a vendor, a customer willing to test a beta. Specific asks get answered. "Any help appreciated" does not.

## What to leave out

**Activity instead of outcomes.** Number of commits, tickets closed, or story points. Investors cannot interpret them, and they signal that you are measuring motion.

**Technical detail that needs a glossary.** "Migrated from Redis Streams to SQS with a DLQ" means nothing to most readers. "Moved background jobs to a managed queue; fewer failed emails, and one less system we run ourselves" says the same thing.

**Unhedged dates for big things.** If you are not confident in a launch date, give a month range and a confidence level. Missing a date you called firm costs more trust than giving a range.

**Surprises saved for the board meeting.** If there is a problem, the update is where it first appears, briefly and with a plan.

## How to write the bad month

Every company has months where the main thing slipped, an engineer quit, or production went down. The instinct is to soften it or leave it out. Do not. A clear bad-news paragraph builds more credibility than three good ones, because it shows the investor they will hear things from you first.

A pattern that works:

1. **What happened**, in one sentence, with the impact on customers.
2. **Why**, in one sentence, without blame.
3. **What we changed** so it does not repeat.
4. **What it does to the plan**, including any date that moves.

For example: "The billing launch slipped to next month. We found that invoices for annual customers were calculated wrong in testing, and fixing it properly means changing how we store plan history. We have added invoice checks to our release process. The pricing change that depended on it moves from May to June."

If something bigger is going wrong, such as a rewrite that is not converging or a vendor that is failing, it is worth a separate note and probably a call. The update is not the place to explain a serious problem for the first time in detail. See [how to explain technical risk to a board](/post-tech-risk-board) for that conversation.

## If you are not technical

Non-technical founders often find this section the hardest to write, because they are relaying what engineers told them and cannot judge it. Two suggestions.

First, ask your lead engineer to draft lines 1 to 4 each month and review them with you in 15 minutes. You own the words, but they own the facts.

Second, if you cannot tell whether the answers you are getting are good, that is useful information in itself. That is often the point where founders bring in part-time senior technical help. [How Fraction works](/how-it-works) is built for exactly that gap: someone who can translate engineering reality into decisions you can defend to investors.

## FAQ

### How long should the engineering section of an investor update be?

Six to ten lines is enough. Consistency month to month matters more than length.

### Should I share engineering metrics like velocity?

Share outcome metrics investors can interpret, such as time to ship, uptime, or cost as a share of revenue. Skip internal measures like story points.

### Should I mention technical debt in updates?

Mention it when it changes a date, a cost, or a risk. Otherwise it is noise. Our note on [telling investors about technical debt](/post-disclose-technical-debt-investors) goes further.

### What if the engineering news is all bad this month?

Say so plainly, with the cause, the fix, and the impact on the plan. Investors forgive slips. They rarely forgive surprises.
