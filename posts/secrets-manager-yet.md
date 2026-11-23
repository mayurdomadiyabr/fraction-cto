---
title: Your secrets live in env files. Do you need a vault yet?
slug: secrets-manager-yet
date: '2026-11-23T04:16:53.920Z'
category: Knowing when
excerpt: >-
  The signs you have outgrown environment variables for secrets, which secrets
  manager to pick, and how to migrate without an outage.
description: >-
  When a startup needs a secrets manager instead of env variables: the warning
  signs, the three options, and a safe migration order.
author: The founder of Fraction
readTime: 5
draft: false
---

You need a secrets manager when more than a handful of people can see production secrets, when secrets are copied by hand between machines, or when you cannot answer "who has the database password right now?" Until then, your hosting platform's encrypted environment variables are usually enough, as long as secrets never live in git or in chat.

Most early teams I work with are somewhere in between. The secrets are in the platform's environment settings, which is fine, and also in a shared `.env` file that has been pasted into Slack twice, which is not.

## What "good enough" looks like at the start

A two-person team does not need a dedicated tool. It needs three rules that it actually keeps.

### Secrets live in one place per environment

For most early products that place is the hosting platform: the environment variable settings in Vercel, Render, Fly, Heroku, or your cloud provider's equivalent. These are encrypted at rest, scoped per environment, and access-controlled by the platform's own permissions. That is a reasonable home for production secrets when the team is small.

### Secrets never live in git

Not in the main branch, not in an old commit, not in a "temporary" config file. If one is already in your history, rotate it; deleting the file does not remove it. This comes up in every diligence process I see, and [the secrets in your git history](/post-secrets-in-git-history-diligence) are one of the easier findings to prevent.

### Secrets are not shared in chat or email

Local development secrets should be separate, low-privilege keys. If someone needs a production credential on their laptop to do their job, that is a sign you are close to needing a real tool.

## The signs you have outgrown environment variables

The move to a dedicated secrets manager is not about size alone. These are the signals I look for.

### You cannot list who has access

Ask the question: if an engineer left today, which secrets would you need to rotate? If the honest answer is "all of them, to be safe", your access is not controlled enough. A secrets manager gives you per-person or per-service access and an audit log of reads.

### The same secret is copied into several places

The Stripe key is in the platform settings, in a CI variable, in a background worker's config on a different host, and on two laptops. Every copy is a place it can leak from, and rotation means updating all of them by hand. That is where mistakes happen: one copy gets missed, a job fails at 2am, and someone pastes the old key back in.

### Contractors or agencies need access

Once people outside the company touch production, you want access that is granted per person, limited in scope, and revoked cleanly at the end of the engagement. Handing an agency the full `.env` file is the pattern I see most often in teardowns, and it is the hardest to unwind later.

### A customer or auditor asks how secrets are managed

Security questionnaires from enterprise prospects ask this directly. "They are in environment variables on our host" is an acceptable answer for a small team if access is controlled. "Several people have a copy of the file" is not.

### You need rotation you can trust

If you want database credentials or API keys rotated on a schedule, or rotated quickly after an incident, doing it by hand across several systems does not scale. When your host or a vendor tells you [your secrets may be exposed](/post-platform-env-variables-exposed), you want to rotate in one place, not ten.

## What to pick when you get there

There are three common routes. All of them are fine; the right one depends on where you already run.

### Your cloud provider's service

If you are mostly on one cloud, use its secrets service. AWS Secrets Manager, for example, charges per secret per month plus a small fee per batch of API calls (its [pricing page](https://aws.amazon.com/secrets-manager/pricing/) lists 0.40 dollars per secret per month and 0.05 dollars per 10,000 calls in the main US region at the time of writing). For an early team with a few dozen secrets that is a small monthly cost. The benefit is that access ties into the same identity and permission system as everything else.

### A dedicated secrets platform

Tools built only for secrets sync values out to your hosting platforms, CI, and local development, so the copies stay consistent. They suit teams spread across several hosts, which is common in early products that grew one service at a time. Check that the tool keeps an audit log and supports per-person access before you commit.

### Your password manager, for humans only

A team password manager is the right place for secrets that people use: dashboard logins, recovery codes, vendor accounts. It is not the right place for secrets that services read at runtime. Keep the two separate, and keep admin accounts out of any one founder's personal vault (see [product running on personal accounts](/post-founder-personal-accounts-company-assets)).

## How to migrate without breaking production

The migration is usually a few days of careful work, not a project.

1. **Inventory.** List every secret, where each copy lives, and who can see it. This list is the most valuable output, even before you change anything.
2. **Pick the home.** One source of truth per environment.
3. **Move and rotate.** Move each secret, then rotate it so that the old copies stop working. Moving without rotating leaves every old copy live.
4. **Cut access.** Remove secrets from laptops, old CI variables, and shared files.
5. **Write it down.** A short page on where secrets live, who approves access, and how to rotate. This is the answer your next security questionnaire wants.

Do the rotation during working hours, one service at a time, with someone watching logs. The common failure is a background job nobody remembered that still uses the old key.

If you want a second pair of eyes on where your secrets actually are today, a [teardown](/teardown) covers this along with the rest of your setup. To talk about who should own this inside a small team, [book a call](/book-a-call).

## FAQ

### Are environment variables on my host secure enough?

For a small team with controlled access, usually yes. They are encrypted and scoped per environment. The risk is not the variables themselves but the copies people make of them.

### When is a secrets manager overkill?

When one or two people run everything, secrets exist in one place per environment, and nobody outside the company has access. Adding a tool at that point adds setup work without reducing much risk.

### Do I need to rotate secrets after an engineer leaves?

Rotate anything they could read in plain text, especially production database credentials and payment keys. A secrets manager with per-person access shrinks that list a lot, which is one of the strongest reasons to adopt one.

### Should local development use production secrets?

No. Use separate keys with test data and limited permissions. If a developer needs production credentials for routine work, fix the workflow, not just the storage.
