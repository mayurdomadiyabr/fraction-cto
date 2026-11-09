---
title: Do you need a data retention policy yet?
slug: data-retention-policy-yet
date: '2026-11-09T04:11:22.630Z'
category: Knowing when
excerpt: >-
  Keeping every row forever stops being free. When a startup needs a retention
  policy, what it says, and the code behind it.
description: >-
  When an early startup needs a data retention policy, what it should say, and
  the engineering work that makes it true.
author: The founder of Fraction
readTime: 5
draft: false
---

Short answer: you need a written data retention policy once you collect personal data from real customers, and you need the code that enforces it before your first enterprise deal or your first raise, whichever comes first. If you have users in California or the EU, privacy law already expects you to keep data only as long as you need it and, in California, to tell people how long that is. This is not legal advice; it is the engineering side of a question your counsel should also see.

Most startups keep everything forever by default. Not because anyone decided to, but because deleting data needs a decision and a piece of code, and storing it needs neither. Years later the company has old trial accounts, years of logs with email addresses in them, uploaded files from churned customers, and backups nobody has looked at. All of it is risk with no value.

## Why "keep everything" stops being free

### Breach impact grows with what you keep

When something leaks, the damage is measured by what was stored. A database with three years of churned customers' data turns a small incident into a large one. Data you deleted on schedule cannot be stolen.

### The law already sets an expectation

The EU's GDPR includes a storage limitation principle: personal data should be kept no longer than necessary for the purposes it was collected for. California's privacy law, as amended by the CPRA, requires a business to disclose how long it intends to keep each category of personal information, or the criteria used to decide that, and not to keep it longer than reasonably necessary for the disclosed purpose. If your privacy policy says one thing and your systems do another, that gap is its own problem, covered in [your privacy policy promises what your code does not do](/post-privacy-policy-code-mismatch).

### Buyers and investors ask

Enterprise security questionnaires routinely ask how long you keep customer data and how you delete it when a contract ends. Diligence teams ask the same thing. "We keep everything" is an honest answer, but it is not a comfortable one.

## When to write one

Use these triggers:

- You collect personal data from people who are not your team. Sign-ups count.
- You have users in the EU or California, or you sell to businesses that do.
- A customer contract mentions deleting or returning data at the end of the term.
- A security questionnaire asks about retention.
- You are preparing a data room for a raise.

If the first trigger is true and none of the others are, a one-page policy and a list of data stores is enough for now. Once any of the others are true, you need the deletion to actually happen.

## What the policy needs to say

Keep it short and specific. For each kind of data, write down what it is, why you keep it, how long, and what happens at the end. A small SaaS company usually ends up with a table like this:

- Active customer account data: kept while the account is active, deleted or returned within a set number of days after the contract ends.
- Closed or abandoned trial accounts: deleted after a set period of inactivity, often between three and twelve months, depending on your sales cycle.
- Application logs: kept for a short window, often 30 to 90 days, long enough to debug and investigate incidents.
- Backups: kept on a rolling window, with a note that deleted data disappears from backups when they age out.
- Billing and tax records: kept for as long as your accountant and local law require, which is often several years and is set by tax rules, not product needs.
- Support tickets and emails: kept for a defined period, then deleted or anonymized.

The numbers are yours to choose with your counsel. What matters is that each one has a reason, and that the reason is written down.

## The engineering work behind it

A policy nobody enforces is worse than none, because it is a written promise you are breaking. Plan for these pieces.

### An inventory of where data lives

Most teams underestimate this. Personal data sits in the main database, but also in logs, analytics tools, error trackers, email providers, support desks, file storage, data exports on laptops, and staging copies of production. The laptop problem has its own post: [your engineers keep production data on their laptops](/post-production-data-on-laptops). Your vendors hold copies too, see [your vendors hold your customer data](/post-vet-vendors-customer-data).

### Scheduled deletion jobs

Each rule in the policy needs a job that runs and a check that it ran. Deletion jobs that fail silently are common, which is why [background jobs that fail and nobody finds out](/post-background-jobs-fail-silently) is worth reading alongside this.

### A clear rule for backups

You usually cannot surgically remove one customer from an old backup. That is acceptable if your policy says so honestly and backups expire on a fixed schedule. Balance this against recovery needs: the reason you keep backups is that customers delete things by mistake, which is covered in [a customer deleted their data by mistake](/post-customer-deleted-data-no-undo).

### Log hygiene

The easiest win is to stop writing personal data into logs in the first place. Shorter log retention then becomes a configuration change rather than a project.

### Account closure

When a customer leaves, someone should be able to run one documented process that exports their data if the contract requires it and deletes it everywhere on the inventory.

## A realistic first pass

For a team of two to five engineers, the first version usually takes a couple of weeks of part-time work:

1. Week one: list every system that holds personal data and write the one-page table.
2. Set log retention and stop logging obvious personal fields.
3. Add a scheduled job for the biggest pile, usually inactive trial accounts.
4. Write the account-closure checklist.
5. Have counsel review the policy text and your privacy notice together.

Do the rest as part of normal work. You do not need every store automated on day one; you need the policy to be true.

## FAQ

### We are tiny. Is this really needed now?

If you only have test users, no. Once real people sign up, a one-page list of what you keep and for how long is cheap and makes every later step easier.

### Does deleting data hurt our analytics or AI plans?

Sometimes. Anonymized or aggregated data can often be kept longer than raw personal data. Decide that on purpose rather than keeping everything by default.

### Who should own this?

Engineering owns the inventory and the jobs. A founder owns the policy and the customer promise. Counsel reviews the wording.

### Will investors check this?

At seed, rarely in depth. At Series A and in enterprise sales, it comes up more often, usually as part of a wider security and privacy review.

If you want a second pair of eyes on where your data actually lives, a [technical teardown](/teardown) covers it, or you can [book a call](/book-a-call).
