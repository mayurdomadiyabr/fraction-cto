---
title: Everyone on your team logs in as admin
slug: shared-admin-logins
date: '2026-09-22T04:31:14.233Z'
category: Pattern recognition
excerpt: >-
  Shared root and admin logins are fast until someone leaves or a password
  leaks. A practical fix for small teams, in the right order.
description: >-
  Why shared admin and root credentials hurt startups at offboarding, incidents,
  and diligence, and a five-step fix a small team can do.
author: The founder of Fraction
readTime: 6
draft: false
---

In a lot of early startups, there is one login that everyone uses. The cloud account's root user, shared in a password manager or a chat message. One admin account for the payment dashboard. One production database password that every engineer, contractor, and the agency from last year has had at some point.

It works. It is fast. Nobody has to wait for access. And it is one of the most predictable problems I find when I look under the hood of a seed-stage company, because the cost of fixing it rises every month you wait, and the cost of not fixing it arrives all at once.

The short answer: give every person their own named account with the access their job needs, lock the root and owner credentials away with strong multi-factor authentication, and make removing someone's access a checklist you can finish in an hour. This is a few days of work for most small teams, not a security program.

## Why shared logins happen

Nobody chooses shared credentials as a policy. They accumulate:

- The founder set up the cloud account on day one with a personal email and never created separate users.
- A contractor needed access urgently, and sharing the existing login was faster than working out permissions.
- An agency built the first version and set up the accounts under their own logins, which is a related problem I have covered in [when your agency hosts your product on their servers](/post-your-agency-hosts-your-product-on-their-servers).
- Somebody pasted a database password into a config file or a chat channel, and from then on it was effectively shared with everyone who could read either.

Each step was reasonable in the moment. The result is that you no longer know who can reach your production systems.

## What goes wrong

### You cannot remove anyone cleanly

When an engineer or contractor leaves, removing their access means changing a shared password and redistributing it to everyone else, and updating every system that uses it. So in practice it often does not happen. I regularly find former contractors whose access was never revoked, not out of negligence, but because revoking it would have broken something.

### You cannot tell who did what

If five people use the same admin account, the audit log says "admin" did it. When a customer's record is changed, a setting is flipped, or data is deleted, you cannot tell whether it was a mistake, a misunderstanding, or something worse. The first time you need to investigate an incident, this is the gap that hurts.

### One leak exposes everything

A shared credential has the widest possible blast radius. If it leaks, from a laptop, a chat export, or a file committed to your repository, the attacker gets everything that account can do. AWS is explicit here: its [root user best practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/root-user-best-practices.html) say not to use the root user for everyday tasks, to protect it with MFA, and to avoid creating access keys for it. Everyday work should happen through separate users or roles with narrower permissions.

### It comes up when you sell and when you raise

Enterprise customers will ask about it directly. "Do all users have unique accounts?" and "How quickly is access removed when staff leave?" are standard lines in a vendor security questionnaire, and a vague answer is one way [a security questionnaire stalls your biggest deal](/post-security-questionnaire-deal). A technical reviewer in diligence will often ask the same thing, alongside checking for [secrets sitting in your git history](/post-secrets-in-git-history-diligence).

## A practical fix for a small team

You do not need a dedicated security hire for this. Here is the order I usually recommend.

### 1. List every system that matters

Start with the systems where a bad actor could do real damage: cloud provider, code hosting, production database, domain registrar and DNS, payment processor, email provider, and your main customer data tools. For each, write down who has access and how they log in. This inventory is often the most revealing step.

### 2. Secure the owner accounts

For each critical system, make sure the top-level owner account uses a company-controlled email address, not a personal one, has strong MFA turned on, and is used only for the rare tasks that require it. Store its credentials where at least two trusted people can reach them in an emergency. Losing the only login to your domain registrar is its own kind of outage.

### 3. Give everyone their own account

Create a named account for each person with the permissions their role needs. Engineers usually do not need owner-level access to billing. Contractors usually do not need access to everything. Most major providers support this directly, and many support single sign-on so you can manage access in one place as you grow.

### 4. Rotate what was shared

Once individual accounts exist, change every password and key that was previously shared, and remove old access keys that are no longer used. Assume anything that has been pasted into chat or email is known to more people than you think.

### 5. Write the offboarding checklist

Write a short list of every system to remove a departing person from, and use it every time. If you already use single sign-on, most of this becomes one action. The same discipline applies to service accounts and tokens, including the ones your AI tools use, which I covered in [every AI agent you add is a hire you never offboard](/post-ai-agent-offboarding).

## How to check where you stand

If you are not technical, ask your lead engineer:

1. "If a contractor left today, how long would it take to remove all their access, and how would we know we got everything?"
2. "Who can log into our cloud account as the owner or root user, and when was it last used?"
3. "Is there any password or key that more than one person uses?"

The honest answer to the third question is often yes. That is fine as a starting point. What matters is having a plan and a date to fix it.

It also connects to a broader risk. If only one person knows how all these accounts fit together, you have both a security problem and a [key-person risk](/post-key-person-codebase-risk). Writing down the inventory solves part of both.

## FAQ

### We are three people. Is this really necessary?

The full version can wait, but the basics cannot: MFA on owner accounts, separate logins for each person, and no shared production passwords. These take a day or two at your size and are much harder to retrofit at twenty people.

### Do we need single sign-on?

Not on day one. It becomes worth it once you have enough people and tools that manual offboarding gets error-prone, or when enterprise customers start asking for it.

### What about the agency that built our product?

Make sure the accounts are owned by your company, not the agency, and that their access is individual and removable. Remove it when the engagement ends.

### Is a password manager enough?

A password manager is a good way to store the few credentials that must be shared, like emergency owner access. It is not a substitute for individual accounts.

If you want an outside check on who can reach your production systems, a [technical teardown](/teardown) covers access and ownership, or [book a call](/book-a-call) to talk it through.
