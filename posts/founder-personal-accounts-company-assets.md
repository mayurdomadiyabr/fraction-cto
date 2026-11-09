---
title: Your product runs on a founder's personal accounts
slug: founder-personal-accounts-company-assets
date: '2026-11-09T04:11:22.169Z'
category: Knowing when
excerpt: >-
  Your domain, cloud, repo or app store listing sits on a founder's personal
  login. When to move it to the company and how.
description: >-
  Domain, cloud, repo or app store on a founder's personal account? When to move
  them to the company, and how to do it safely.
author: The founder of Fraction
readTime: 6
draft: false
---

Short answer: if your cloud account, domain, app store listing, code repository, or payment processor is registered to a founder's personal email or personal card, move it to the company before you hire your first employee, take outside money, or sign your first serious customer contract, whichever comes first. Each move is cheap while you are small and painful later, especially during diligence or a cofounder split.

Almost every early company starts this way, and that is fine. Someone needed a server, so they signed up with their Gmail and their own card. Someone registered the domain on a personal registrar account years before there was a company. The iOS app went out under one founder's individual Apple developer membership because that was faster. None of this is a mistake on day one. It becomes a problem quietly, at the moment the company starts to matter more than any one person.

## Why this matters more than it looks

The issue is not who pays the bill. It is who controls the account when something goes wrong.

When the company does not own the account, three things become fragile at once. Access depends on one person, so if they are sick, travelling, locked out, or leaving, nobody else can act. Legal ownership is murky, because the asset sits in a personal relationship between a person and a vendor. And recovery runs through a personal inbox, so a password reset, a security alert, or a billing failure goes to someone who may not read it.

I have seen a version of this pattern several times, so here is a composite. A cofounder leaves on bad terms. The production cloud account, the domain, and the shared email admin are all on their personal login. Nothing malicious happens, but for six weeks every change needs a polite email to someone who no longer works there. A deal slips because the company cannot prove it controls its own domain for an enterprise security review.

## The accounts to check

Work through these in order of how badly an outage or a dispute would hurt.

### Domain and DNS

This is the root of everything: your website, your email, your login links, and often your verification with other vendors. If the registrar account is personal, move the domain to a company-owned registrar account and turn on transfer lock and auto-renew. I covered the failure mode in [the domain that expired and took the website and email with it](/post-domain-or-certificate-expired).

### Cloud provider

The root user of your cloud account should be a company email address that more than one person can reach, such as a group alias, with strong multi-factor authentication. The payment method should be a company card. Day-to-day work should happen through named individual users, not the root login.

### Code repository

Your code should live in an organization owned by the company, with at least two owners. A repository under one person's personal account is a single point of failure for your most important asset. This is also a diligence question, which I covered in [who owns your code](/post-who-owns-your-code).

### App stores

Apple lets you enroll as an individual or as an organization. Organization enrollment needs a legal entity and a D-U-N-S number, and if you already enrolled as an individual you can ask Apple to convert the membership. Founders report that conversions can stall and take longer than expected, so do not leave this until the week before a launch or a raise. Google Play supports transferring apps between developer accounts. If an agency published your app under their account, that is the same problem with a third party in the middle, covered in [your app is published under your agency's account](/post-agency-owns-app-store-account).

### Payments and banking

Your payment processor should be connected to the company entity and the company bank account. Revenue flowing into a personal account creates tax and accounting problems on top of the control problem.

### Email, workspace, and everything that resets through it

Your workspace admin, password manager, and the recovery email on every vendor account should be company-controlled. If the recovery path runs through a founder's personal inbox, the account is still effectively personal.

## When to do it

The honest trigger list:

- Before your first employee or contractor gets access, so you are granting access from company accounts, not personal ones.
- Before you raise. Investors and their counsel ask whether the company owns its intellectual property and key assets, and personal accounts make that answer messy. The IP side is covered in [the IP paperwork that stalls your term sheet](/post-ip-assignment-raise).
- Before an enterprise security review. Questionnaires ask who has admin access and how it is controlled.
- Immediately, if there is any tension between cofounders. Moving accounts is easy while everyone is friendly and very hard once they are not.

If none of these is close, schedule it anyway. It takes a day or two of focused work for a typical early company, and it never gets cheaper.

## How to do it without breaking anything

1. Make a list of every account the product depends on: what it is, whose login, whose card, what email receives resets.
2. Create the company-owned side first: a company registrar account, a company organization in your code host, a group email alias for root logins.
3. Move one account at a time, during a quiet period, and test that the product still works after each move.
4. Update the recovery email and payment method on every account, not only the login.
5. Add a second owner to everything. Two people from the company, never one.
6. Store the inventory in a shared, access-controlled place so the next person can find it.

Domain transfers between registrars can take several days, and app store changes can take longer. Start with the slow ones.

## What not to do

Do not share a single founder login among the team. Shared logins remove the single point of failure in one way and add another, because nobody can tell who did what. That problem has its own post: [everyone on your team logs in as admin](/post-shared-admin-logins).

Do not move production accounts during a launch week. Moves are low risk, but low risk is not zero, and you want time to fix a surprise.

Do not assume the move is finished because the login changed. The payment method, the recovery email, and the legal owner on the vendor's records are separate fields, and all of them matter.

## FAQ

### Is it a red flag in diligence that we started on personal accounts?

No. Almost everyone starts that way. What reads badly is still being on personal accounts after a raise or after a cofounder has left. Show that you moved them and that two company people control each one.

### Do we need a lawyer for this?

Usually not for the accounts themselves. You may want counsel if a departed founder still controls a key asset and will not cooperate, or if the IP assignment paperwork is missing.

### What if a contractor or agency holds the account?

Treat it the same way, with more urgency. The company should be the owner and the outside party should have delegated access that you can remove.

### How long does this take?

For most early companies, one to two days of work spread over a couple of weeks, because some transfers wait on the vendor.

If you want help building the account inventory or checking it before a raise, a [technical teardown](/teardown) covers ownership and access, or you can [book a call](/book-a-call).
