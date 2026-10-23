---
title: Your host says your secrets may be exposed. Rotate in this order
slug: platform-env-variables-exposed
date: '2026-10-23T11:42:16.214Z'
category: Pattern recognition
excerpt: >-
  After Railway's October 2026 incident: rotate platform-held secrets by damage,
  mind the deploy trap, and set up an inventory before the next one.
description: >-
  Your hosting platform leaked environment variables? Rotate money, data, then
  AI keys first, avoid the deploy trap, and prepare before the next incident.
author: The founder of Fraction
readTime: 8
draft: false
---

If your hosting platform tells you your environment variables may have been exposed, assume every secret stored there is known to an attacker and rotate them in order of damage: payment and banking keys first, then cloud and database credentials, then AI provider and other usage-billed keys, then everything else. Then check the logs of each service for use you did not make. The harder lesson is that rotation needs a working deploy, and the platform that leaked your secrets may be the same one you cannot deploy to that day.

On 21 October 2026, Railway, a popular hosting platform for startups, disclosed anomalous activity on the systems that store customer environment variables. Over the next two days it paused builds, invalidated sessions and API tokens, rotated storage credentials, and told customers to rotate the environment variables, API keys and registry credentials they kept on the platform and to review service logs. It said impact appeared limited to a subset of customers it would contact by email. You can follow its updates on the [Railway status page](https://status.railway.com/incident/QH8L8B3E).

This is not a post about Railway. Every platform-as-a-service, from the big clouds down, stores your secrets for you, and any of them can have a bad week. What matters is whether your company can absorb it in an afternoon or loses a week.

## Why platform-held secrets are a different risk

Most startups I review keep their production secrets in one place: the hosting platform's environment variable screen. Database URL, payment provider key, email sending key, AI provider key, cloud storage credentials, the token for the private package registry, sometimes an admin password for a third-party tool. It is convenient, and for a young company it is a reasonable default.

The risk is concentration. One leak at the platform exposes every external system your product touches, at once. That is a wider blast radius than a single developer's laptop or a single vendor breach, which is why the response order matters. We covered the narrower case of one tool holding one key in [the post on AI keys held by third-party tools](/post-ai-api-key-in-third-party-tool); this is the same problem multiplied by everything you run.

## Rotate in order of damage, not alphabetically

When the notice lands, open the variable list and sort it by what an attacker could do with each value in the next hour. My usual order:

### 1. Money movers

Payment provider secret keys, banking or payout API credentials, anything that can issue refunds, create payouts or change bank details. An attacker who can trigger refunds or redirect payouts does damage that is hard to undo. Rotate these first, then check the provider's dashboard for unusual refunds, new connected accounts or webhook endpoints you did not add.

### 2. Keys to your data

Database connection strings, cloud access keys, storage bucket credentials, and any admin token for your own backend. These are your customer data. Rotate, then look at the database and cloud logs for connections from unfamiliar addresses. If you cannot tell what normal looks like, that is a finding in itself.

### 3. Usage-billed keys

AI providers, SMS, email sending, maps, search. These do not expose data as directly, but they are payment instruments in disguise. Leaked AI keys in particular get abused fast, and Railway linked this attack to a wider series aimed at compromising AI inference providers. Set or lower spend caps while you rotate, and read [what to do in the first 48 hours of a surprise usage bill](/post-surprise-usage-bill-first-48-hours) if the charges have already started.

### 4. Supply-chain tokens

Private registry tokens, source-control tokens, CI credentials. These rarely cause an immediate bill, but they let an attacker publish code under your name or read your repository. The pattern from recent package worms, covered in [our post on credential blast radius](/post-npm-worm-credential-blast-radius), is that one stolen token becomes many.

### 5. Everything else

Analytics keys, feature flag keys, internal webhooks. Rotate them, but do not let them delay the first four.

## The trap: you need a deploy to rotate

Here is the part founders do not plan for. Rotating a secret is two steps: issue a new value at the provider, then get your running app to use it. The second step usually means updating the variable on the platform and redeploying.

During this incident Railway paused builds across the platform for a period, restored them plan by plan, and at one point advised that redeploying older code would fail and that some customers would need to reconnect their source-control integration. That is a normal thing for a platform to do while it contains an incident. It also means that for some hours a customer could revoke an old key, breaking production, without being able to ship the new one.

So the order of operations matters:

1. If you can, create the new key first and keep the old one active.
2. Update the platform variable and redeploy.
3. Confirm the app works with the new key.
4. Only then revoke the old one.

If deploys are blocked and the key is a money mover, revoke anyway and accept the downtime. For lower-risk keys, wait for the deploy path to return, but tighten caps and watch logs in the meantime. This is a judgment call that someone senior should make in the moment, not a developer at 2am on their own.

## What to set up before the next one

None of this is expensive. It is a few days of work that most early teams skip because nothing has gone wrong yet.

### Keep a secrets inventory

One table: every secret, what system it unlocks, who owns that account, what it can do (read, write, move money), and how to rotate it. When the notice arrives, you work down the list instead of discovering it. Most teams I review cannot produce this list in under an hour.

### Shrink what each key can do

Use restricted keys wherever providers offer them. A payment key that can only create charges cannot issue refunds. A database user for the app that cannot drop tables or read the audit schema limits what a leak exposes. Separate keys for staging and production, so a staging leak stays a staging problem.

### Use the platform's protected variable type

Many platforms offer a sealed or sensitive variable type that cannot be read back through the dashboard or API once set. It does not make you immune, and in this case the scope of what was reachable is still being analysed, but it reduces how many people and tools can casually read your production secrets.

### Practise one rotation

Pick one non-critical key and rotate it end to end this month, timing how long it takes. If it takes three hours and two people, you know your real recovery time for twenty keys. Teams that have done it once move several times faster when it is real.

### Know your fallback deploy path

For the product to survive a platform outage, someone should know how to run it somewhere else, even badly. You do not need a second live environment. You need a written page on how you would get a minimal version running elsewhere in a day, and to have checked that the build does not depend on anything only that platform provides. If nobody on the team can rebuild your servers, that is a [bigger problem than this incident](/post-server-nobody-can-rebuild).

## Should you move off the platform?

Probably not because of one incident, handled in the open. Moving hosting is a real project with its own risk, and every provider will have incidents. The questions worth asking are about how the platform behaved: did it disclose quickly and clearly, did it give concrete steps, did it tell affected customers directly? A platform that does those things well is often a safer bet than one that has simply not had its bad week yet.

What should change is your own dependence. If one vendor's bad day can stop you shipping and expose every key you hold, that is a concentration risk your investors will eventually ask about in diligence, and it is cheaper to fix now than to explain later.

## A worked example

Consider a hypothetical seed-stage company with one engineer, running its product and database on a single platform with 18 environment variables. The notice arrives at 9am. Without an inventory, the engineer spends the morning working out what each variable is and which accounts the company does not have logins for. The payment key gets rotated at 1pm, the database password at 3pm, and the AI key, already abused, at 4pm, after a few hundred dollars of charges.

With a one-page inventory and restricted keys, the same company rotates the payment and database keys by 10am, has spend caps that limited the AI abuse to the cap, and spends the afternoon reading logs instead of hunting for logins. Same incident, a very different day.

## FAQ

### My platform says I am probably not affected. Do I still rotate?

For anything that moves money or unlocks customer data, yes. Rotation is cheap compared with being wrong. For low-risk keys, follow the platform's guidance and watch for its final report.

### What logs should I check?

The logs of the services the secrets unlock, not just your app: payment provider events, cloud access logs, database connection logs, and usage dashboards for AI and messaging providers. Look for access from unfamiliar locations and activity at hours your team does not work.

### Is a dedicated secrets manager worth it at seed stage?

Often not yet. An inventory, restricted keys, separate environments and one practised rotation give you most of the benefit. A dedicated manager starts to pay off when you have several services and more than a handful of engineers.

### Who should own this?

Someone senior enough to make the revoke-now-or-wait calls. If you do not have that person, a short [technical teardown](/teardown) will produce the inventory and the gaps, and you can [book a call](/book-a-call) if you are in the middle of an incident now.
