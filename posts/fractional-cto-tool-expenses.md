---
title: Who pays for the tools your fractional CTO uses?
slug: fractional-cto-tool-expenses
date: '2026-09-21T03:39:58.885Z'
category: Pricing the work
excerpt: >-
  Your fractional CTO keeps signing up for software. The split that holds up:
  who owns the account, what the retainer covers, and the approval threshold
  that ends the argument.
description: >-
  The retainer buys the person, not the software. How to split tool and cloud
  costs with a fractional CTO before the first invoice.
author: The founder of Fraction
readTime: 7
draft: false
---

Your fractional CTO signs up for an error-tracking tool in week two. It is $89 a month. In week four it is a CI runner upgrade at $200. By month three there is a log aggregator, a secrets manager, a staging environment, and a Postgres instance nobody is watching. None of it went through you. Then the invoice arrives and you are trying to work out which of these you agreed to pay for, and whether any of it was supposed to come out of the retainer.

The short answer: the retainer buys the person, not the software. Tools, cloud, and licenses are your costs, because you own them after the engagement ends. But that answer only works if it was written down before the first purchase, and in most engagements it was not.

## The line that actually matters: who owns the account

Forget the money for a second. The real question is whose name is on the account.

If your fractional CTO signs up for Sentry on their credit card under their own email, three things are now true. The bill is theirs to pass through to you, which adds a margin question you did not ask for. The account is theirs, which means when the engagement ends you are doing a migration you did not budget for. And the data is sitting in a vendor relationship you have no contract with, which becomes a real problem the first time an investor asks for your subprocessor list during diligence.

The rule I use is simple and I put it in the first week: every account that touches your code, your data, or your customers is created on your billing, under an email address on your domain, with you as owner and me as an admin. I do not put your infrastructure on my card. Not for convenience, not for the first month, not even for a trial.

That rule costs about twenty minutes of setup and it removes an entire category of argument later. It also means the expense question mostly answers itself: if the account is yours, the bill is yours.

## What the retainer covers and what it does not

Here is the split that holds up in practice.

**The retainer covers the fractional CTO's own working tools.** Their laptop, their editor, their password manager, their phone, their accounting software, their professional insurance. These are the cost of being in business as a contractor. If someone tries to bill you for their own laptop or their own AI coding subscription, that is a rate conversation in disguise. Say so plainly and move it into the rate.

**You pay for anything the company consumes.** Cloud infrastructure, databases, CI minutes, monitoring, error tracking, log storage, domain names, email sending, feature flags, security scanning, any SaaS your product depends on. These outlive the engagement. They are operating expenses of your company that happen to have been chosen by a contractor.

**The grey zone is the shared-use tools.** A fractional CTO working across four clients might hold one architecture-diagramming license, one API-testing tool, one AI subscription. Splitting those per client is pedantic and usually not worth the accounting. My position: if it is a tool I would hold whether or not you hired me, it is mine. If it is a seat provisioned specifically for your workspace, it is yours.

**Travel and time are separate again.** If you want your fractional CTO on-site for a board meeting or an offsite, expenses are yours at cost, with receipts, agreed in advance. Whether the travel day itself is billable is a scope question, and a fair default is that travel days count against the retainer days the same as any other working day.

What the retainer genuinely buys each month is worth reading properly, because tools are only one of the things people assume are included. I wrote a fuller breakdown of [what a fractional CTO retainer actually buys](/post-fractional-cto-retainer-includes), and the pattern is the same across all of it: the fights are always about the things nobody wrote down.

## The approval threshold, and why you want one

The expense argument is rarely about the total. It is about surprise. Nobody minds $89 for error tracking. People mind finding out about $89 for error tracking in an invoice six weeks later, because it implies there are other things they have not found out about.

So set a threshold in week one. Mine is usually this:

Under $100 a month, recurring, on our billing: buy it, tell me in the weekly note. Over $100 a month, or anything with an annual commitment, or anything that stores customer data: ask first, in writing, with what it replaces.

Two numbers, one sentence, and the entire category of expense friction disappears. The threshold is not really about control. It is about making sure each recurring cost gets said out loud once, because a recurring cost said out loud once is a cost you will remember to cancel.

The cancellation part matters more than founders expect. The tool bill is not a one-time decision, it is an annuity you keep paying. Most early-stage companies I walk into are paying for at least two things nobody uses, usually a monitoring tool and a project tracker from a previous team. The threshold conversation is what stops you adding to that pile. If your own bill has already drifted, the way to audit it is the same method either way, and I went through that process in detail in [how to cut an engineering tool bill that got away from you](/post-engineering-tool-bill).

## What to do when it already went wrong

Say you are three months in and there are eight subscriptions on a contractor's card. Do not make it a dispute. Make it a transfer.

Ask for a list of every account, the monthly cost, the renewal date, and what it does. Any competent operator can produce that in half an hour. Then work down the list in three passes. First, cancel anything you cannot justify in one sentence. Second, for everything left, create the account fresh on your billing and migrate, or use the vendor's ownership-transfer flow where one exists. Third, pay back what they fronted, at cost, with the receipts attached.

Do not haggle over the reimbursement. The money is small and the goodwill is not. The thing you are actually buying with that payment is a clean handover of accounts, and that is worth more than the $400 you might claw back.

One warning sign to take seriously: if the pass-through has a markup on it and you were not told, that is not an expense problem, that is a trust problem. Cost-plus on software licenses is an agency behaviour, and it does not belong in a fractional engagement where you are paying for judgment rather than for volume.

## Put it in the engagement letter

Four lines is enough. I use something close to this:

Company pays all infrastructure, SaaS, and license costs. All such accounts are created under Company billing and Company domain ownership. Contractor's own working tools are included in the fee. Purchases above $100 per month require written approval in advance.

That is the whole policy. It fits in a paragraph, it prevents the invoice argument, and it means that on the last day of the engagement the handover is a permissions change rather than a migration project.

If you are scoping an engagement now and want to pressure-test the commercial terms before you sign, that is exactly the kind of thing worth an hour. You can see how we structure fees on the [Fraction pricing page](/pricing), or [book a call](/book-a-call) and bring the draft contract with you.

## Common questions

### Should a fractional CTO ever put company infrastructure on their own card?

Only as a genuine stopgap, for days rather than months, and only with a written plan to transfer it. The one legitimate case is when your company bank account is not open yet. Even then, transfer ownership the week it opens. Anything longer and you are accumulating an exit cost for no benefit.

### Is it normal to be charged a markup on passed-through software costs?

No. Pass-throughs should be at cost with receipts. A markup on licenses is standard in some agency models, where the vendor is reselling, but in a fractional engagement you are buying senior judgment by the day and the software is incidental. If you see a markup, ask for it to be removed or folded transparently into the rate.

### Who pays for AI coding tools and model API usage?

Split it by whose output it is. Their personal coding assistant subscription is theirs. Model API usage that runs inside your product, or evaluation spend against your data, is yours and belongs on your cloud billing like any other infrastructure line. Set the monthly approval threshold on the API spend specifically, because it is the one line item that can move by an order of magnitude in a week without anyone deciding anything.

### What about tools bought before I had an approval threshold?

Treat the threshold as forward-looking and do a one-time audit of what already exists. Reimburse what was fronted, cancel what is not earning its place, and move the rest onto your billing. Do not apply a new rule retroactively to make a point; you will spend more in goodwill than you recover in cash.

### Does the same rule apply if I hire an agency instead of a fractional CTO?

Mostly, but agencies push back harder because reselling licenses is part of how some of them make margin. The ownership rule still applies and is worth fighting for: accounts on your billing, your domain, your name. The billing arrangement is negotiable. Ownership of the accounts should not be.
