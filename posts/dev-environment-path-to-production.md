---
title: Attackers got into dev and reached production in 3 days. Yours?
slug: dev-environment-path-to-production
date: '2026-11-27T02:43:28.875Z'
category: Pattern recognition
excerpt: >-
  Chainstack's November breach went from a dev environment to production in
  three days. The four bridges between dev and prod, and how to close them.
description: >-
  An attacker went from Chainstack's dev environment to production in three
  days. Four bridges from dev to prod at most startups, and how to close them.
author: The founder of Fraction
readTime: 7
draft: false
---

In early November, Chainstack disclosed that an attacker came in through a third-party component, landed first in a development environment, and reached parts of production three days later, taking customer names, emails, and password hashes. The lesson for a startup is not about that component. It is that, at most early companies, development is a path to production: the same cloud account, shared credentials, a copy of real data, and a deploy pipeline that can touch everything. Separate them so that losing dev costs you a day of cleanup, not a breach notice.

I am working from public reporting here, not inside knowledge. [Chainstack's incident report](https://chainstack.com/security-incident-nov-2026/) gives the timeline: first access to a development environment on October 26, production reached on October 29, detection and access cut on October 31, investigation closed on November 2. [The Block's coverage](https://theblock.co/news/ecosystems/2026-11-12-chainstack-security-breach-438509) adds what was exposed. Chainstack has not named the component or the attacker, and I will not guess. What matters for you is the shape of the incident, because it is a shape I see in almost every early-stage stack I review.

## Why dev is the soft way in

Development environments are built for speed. That is their job. Engineers install new packages freely, try new tools, open ports to test a webhook, and paste credentials into config files to get something working by Friday. Security controls that would be unthinkable in production are normal in dev, and that is mostly fine.

The problem is not that dev is loose. It is that dev is connected. If an attacker who lands in dev can reach production, then your production security is only as strong as the loosest part of dev. And dev is where the new, unreviewed code lives: fresh dependencies, browser extensions, AI coding tools, and test integrations nobody has looked at. [The npm worm that harvested credentials](/post-npm-worm-credential-blast-radius) worked the same way: it did not need production. It needed a machine that held production keys.

## The four bridges from dev to production

When I look at how a startup's environments are wired, I am looking for bridges. These four account for most of what I find.

### Shared cloud account

Dev, staging, and production all live in one AWS, Google Cloud, or Azure account. Separation is by naming convention: resources called "dev-api" and "prod-api" side by side. Anyone with broad rights in that account can reach both, and a role that was meant for dev is one policy mistake away from production. AWS's own guidance on organising environments with multiple accounts recommends separate accounts for separate workloads and environments for exactly this reason: the account is the strongest boundary you get by default.

### Shared credentials

The same database password, API key, or cloud access key works in more than one environment. This is the most common bridge by far, and the cheapest to remove. It happens because someone copied the production environment file to get dev running, and nobody went back. If you read about [the WorkOS breach](/post-internal-tool-breach-workos) last week, a development credential that also worked in production was part of that story too.

### Real data in dev

A copy of the production database restored into dev or staging so engineers can debug with realistic data. Now dev holds your customers' names, emails, and password hashes, and an attacker does not need to reach production at all. [Production data on laptops](/post-production-data-on-laptops) is the related problem one step further out.

### A pipeline that can do everything

The CI/CD system that deploys dev also deploys production, using one set of credentials with rights across every environment. Anyone who can change a dev pipeline file, or a dependency the pipeline runs, can often get those credentials. In practice, the pipeline is the most privileged user in your company, and it is frequently the least watched.

## What separation looks like at a 5 to 20 person startup

You do not need a security team for this. You need a few structural choices, made once, that turn dev into a dead end instead of a path.

### Put production in its own cloud account

One account for production, one for everything else. Two accounts is enough at seed stage; you can split dev and staging later. Most cloud providers make this a short job with their organisation features, and your company should own the top-level organisation, not a reseller or an agency. If you are not sure who owns yours, [check whether your account sits inside someone else's organization](/post-cloud-account-in-reseller-organization).

Moving an existing production workload into a new account is real work, so the usual order is the reverse: leave production where it is, and move dev and staging out. That is often a few days of engineering time for a small product, as a rule of thumb, and it removes the biggest bridge at once.

### Give every environment its own secrets

No credential should work in two environments. Generate separate database passwords, API keys, and service accounts for dev and production, and store production secrets somewhere dev cannot read. A [secrets manager](/post-secrets-manager-yet) makes this easier but is not required to start; the platform's own per-environment settings will do. Then rotate any production secret that has ever been copied into dev, because you cannot know where those copies went.

### Keep real customer data out of dev

Use seeded fake data or a masked copy where names, emails, and hashes are replaced. If engineers truly need production data to debug, give them time-limited, logged access to a read replica inside the production boundary, rather than bringing the data out. This is less convenient, and it is the change engineers push back on most. It is also the one that most directly limits what a dev breach exposes.

### Split the pipeline's power

Use separate deploy credentials for each environment, and make production deploys run from a protected branch with required review, so a change to a dev pipeline cannot reach production keys. If your CI provider supports short-lived credentials issued per run instead of long-lived keys stored in settings, use them for production first.

## The questions to ask your team this week

If you are a non-technical founder, you do not need to do this work yourself. You need to know whether it has been done. Ask your lead engineer or agency these five questions, and ask for a yes or no on each:

1. Is production in a separate cloud account from dev and staging?
2. Does any password, key, or token work in both dev and production?
3. Is there a copy of real customer data anywhere outside production?
4. Can the dev or staging deploy pipeline reach production credentials?
5. If a developer's laptop were compromised tonight, what could the attacker reach by morning?

The fifth question is the one that matters. A good answer is short and specific. A long pause is a finding.

If the answers are uncomfortable, do not try to fix everything in a week. Remove shared credentials first, because it is cheap and closes the most common bridge. Then get real data out of dev. Then split the cloud account. Each step stands on its own.

## What this costs you if you skip it

Investors and enterprise customers ask about this now. Environment separation shows up in security questionnaires, in SOC 2 controls, and in technical diligence, and "they share an account and credentials" is a finding that slows a deal while you fix it under pressure. It is much cheaper to make the change on your own schedule than on a customer's.

The deeper cost is the one in Chainstack's disclosure. The time between first access and production was three days. Most small teams would not notice an intruder in dev in three days, and they should not have to. The point of separation is that you do not need to notice in time, because there is nothing in dev worth taking and no road from there to anything that is.

## FAQ

### Do we need separate cloud accounts if we only have three engineers?

Yes, at least two: one for production and one for everything else. It is a one-time setup, it costs nothing extra on most providers, and it is much harder to do once the product has grown.

### Is a staging environment the same as separation?

No. Staging is a place to test before release. Separation is about whether staging and dev can reach production. A staging environment in the same account with the same credentials adds a bridge, not a wall. [Do you need staging yet](/post-staging-environment-yet) covers when staging itself is worth it.

### Can we use production data in staging if we mask it?

Masked data is fine when the masking is real: names, emails, password hashes, and payment details replaced, not just hidden in the interface. Check it once by looking at the actual database.

### What should we do first if everything is shared today?

Remove shared credentials and rotate any production secret that has been in dev. It is the fastest change and closes the most common path.

If you want someone to map the bridges between your environments and tell you which to close first, that is a standard part of a [Fraction teardown](/teardown). See [pricing](/pricing) for how engagements work, or [book a call](/book-a-call) and we can go through your setup together.
