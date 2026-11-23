---
title: 'Do you need cyber insurance yet, or just better controls?'
slug: cyber-insurance-yet
date: '2026-11-23T04:16:53.539Z'
category: Knowing when
excerpt: >-
  When an early startup actually needs cyber insurance, what the application
  asks, and why the controls come before the policy.
description: >-
  When a startup needs cyber insurance: the three triggers, what insurers ask
  about MFA and backups, and what to fix before you apply.
author: The founder of Fraction
readTime: 6
draft: false
---

Most startups do not need cyber insurance on day one. You need it when one of three things happens: an enterprise customer's contract requires it, you start holding enough sensitive customer data that a breach would cost more than your runway, or an investor or board asks. Before any of those, the money is usually better spent on the controls insurers will ask about anyway.

This is not insurance or legal advice. It is what I see when founders bring this question to me, usually a week before a contract has to be signed.

## The three triggers that make it a real question

Cyber insurance is rarely a decision founders make on their own schedule. It shows up because someone else asks for it.

### An enterprise contract asks for proof of coverage

This is the most common trigger by far. A mid-market or enterprise customer's master services agreement includes an insurance clause: you must carry cyber liability or technology errors and omissions cover at a stated limit, and send a certificate of insurance before go-live. The limits I see in startup contracts usually sit between one and five million dollars, and procurement teams treat the clause as a checkbox, not a negotiation.

If the deal matters, you will buy the policy. The useful move is to find out early. Ask for the customer's insurance requirements in the first procurement call, not after legal has redlined everything else. Getting quotes and binding a policy can take a couple of weeks if your answers to the application are clean, and longer if they are not.

### Your data would make a breach expensive

The second trigger is your own exposure. If you hold health data, financial records, identity documents, or large volumes of personal data, a breach brings costs that have nothing to do with fixing the bug: forensic investigators, lawyers, notification letters, credit monitoring, regulator responses, and customer churn. Those first-party costs are what a cyber policy is mostly for.

A rough test I use: if a breach next month would force you to spend a meaningful share of your remaining runway on response, insurance is worth pricing. If you hold a few thousand email addresses and nothing else, it usually is not yet.

### An investor or board asks

Some investors add it to a post-close checklist, especially after a priced round. This is less urgent than a contract requirement, but it is a signal that the company has reached the size where someone expects risk to be transferred, not just accepted.

## What the application will ask you

Here is the part that catches founders out. A cyber insurance application is a short security questionnaire, and your answers set the price, the limits, and sometimes whether you get cover at all.

The controls that come up again and again across carriers are:

- **Multi-factor authentication** on email, remote access, and every admin account. Not "most staff". All of them, including the founders.
- **Backups** that are separated from production, ideally immutable, and actually restore-tested.
- **Endpoint protection** on laptops and servers, and increasingly evidence that someone watches the alerts, not just that a tool is installed.
- **Patching** on a known cadence, especially for anything internet-facing.
- **A written incident response plan**, even a short one.

Most of this lines up with guidance from the carriers and brokers themselves, and the bar has risen over the last few years. Treat the vendor blogs that publish percentages as directional; the real source is the questionnaire your broker sends you.

### Why your answers matter more than the premium

The trap is answering "yes" to a control you only partly have. If you claim MFA everywhere and the breach starts from an admin account without it, you have handed the insurer a reason to dispute the claim. Answer honestly, and fix the gaps before you sign, not after.

For a small software company, the fixes are usually cheap: turn on enforced MFA in your identity provider, move backups to a separate account, put a managed endpoint tool on company laptops (see [whether you need to manage laptops yet](/post-company-laptops-management-yet)), and write a two-page incident plan. A founder or senior engineer can do most of that in a week or two.

## What to buy, and what not to

When you do buy, a few things matter more than the headline limit.

### First-party and third-party cover

First-party cover pays your own costs: forensics, legal advice, notification, business interruption, sometimes ransom negotiation. Third-party cover pays claims from customers and others harmed by the breach. Enterprise contracts usually care about third-party liability; your runway cares about first-party. Make sure the policy covers both and that the limits are not shared in a way that leaves one starved.

### Technology errors and omissions

If you sell software, customers can also claim that your product failed and cost them money, with no breach involved. That is technology errors and omissions cover, and many brokers sell it bundled with cyber. Enterprise contracts often ask for both. Check that your contract's [liability cap](/post-agency-liability-cap) and your policy limit roughly agree, or you will be promising more than you can pay.

### The panel and notification rules

Most policies require you to notify the insurer quickly and to use their approved responders, at least for part of the response. Find out who those are before an incident, and put the claims number in your incident plan. Calling your favourite forensics firm first can make part of the cost unrecoverable.

## When to wait

Waiting is the right call more often than brokers suggest. If no contract asks for it, you hold little sensitive data, and your runway is tight, spend the next month on the controls instead. Enforced MFA, tested backups, and a written response plan reduce the chance of a bad week far more than a policy does. They also make the policy cheaper when you buy it.

The order I recommend for an early team:

1. Get the controls right first: MFA, backups, endpoint protection, a plan.
2. Ask every serious prospect about insurance requirements early in procurement.
3. Get a broker quote when the first contract requires it, or when your data exposure grows.
4. Review limits each year against your largest contract and your data volume.

If you are not sure whether your current setup would survive the application, a [technical teardown](/teardown) will show you which answers you can give honestly today. If you need someone to own this alongside your other technical risks, [book a call](/book-a-call) and we can talk it through.

## FAQ

### Is cyber insurance required by law for startups?

Generally no. In most places it is a commercial requirement set by customers, investors, or lenders, not a legal one. Some regulated sectors have their own rules, so check with a broker or lawyer if you work in one.

### How much cyber cover does an early-stage startup need?

It depends on what your largest contract requires and what a breach of your data would cost. Startup contracts I see usually ask for one to five million dollars. Let the contract set the floor, then check it against your own exposure.

### Will insurers cover us if we do not have MFA everywhere?

Some will, at a higher price or with exclusions, and some will decline. More importantly, a gap you did not disclose can complicate a claim. Fix MFA before you apply; it is usually the cheapest control to put in place.

### Should the fractional CTO fill in the application?

Someone technical should, because the questions are about how your systems actually work. The founder signs it, but the answers should come from whoever knows the true state of MFA, backups, and endpoints. A [first security hire](/post-first-security-hire-yet) is not needed for this at most early companies.
