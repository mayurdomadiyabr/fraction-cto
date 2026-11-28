---
title: Attacker inside? Decide what to take offline before it happens
slug: take-product-offline-during-attack
date: '2026-11-28T04:38:49.228Z'
category: Decisions
excerpt: >-
  Lyceum shut down affected systems in November and kept separate ones running.
  How to decide what to turn off when an attacker is in, before the day comes.
description: >-
  When an attacker is inside, take offline what they can reach and keep separate
  systems running. A first-hour plan for startups, using Lyceum's incident.
author: The founder of Fraction
readTime: 7
draft: false
---

When you find an attacker inside your systems, should you take the product offline? For most early-stage startups the answer is: take offline the parts the attacker can reach, keep running what you can prove is separate, and decide this before the day it happens. A full shutdown is the right call when you cannot tell what is compromised and customer data is at risk. It is the wrong call when it is just panic, because a total outage hurts customers who were never exposed. The founders who handle this well are the ones who already know which parts of their system are separate from which.

## What happened at Lyceum

On November 9, Lyceum, a Berlin-based AI inference provider, confirmed unauthorized activity in its systems and shut down everything affected that afternoon. According to the [incident post written by its CTO](https://lyceum.technology/blog/november-2026-security-incident/), it told users about the disruption within about half an hour, brought serverless inference back the same evening because it ran on separate infrastructure, notified the Berlin data protection authority on November 11, and restored all products on November 12 after confirming each system was secure. The company says the user database was exposed, including contact names, emails, and company details, and that payment data and API keys were not.

Lyceum attributes the attack to an autonomous, agent-based system. The post does not publish evidence for that, so treat it as the company's assessment. The entry point it describes is more useful for founders anyway: information in the source code of an outdated version of an open-source tool the company itself had published, combined with a vulnerability at an external database provider.

I am not judging how Lyceum handled it. From the outside, the sequence looks disciplined. What interests me is the decision every founder will face in some version: the moment you confirm someone is in, what do you turn off?

## Why the decision is hard

The pull in both directions is real.

**Reasons to shut everything down:**

- You do not yet know what the attacker can reach, and every minute online is a minute they might go further.
- Credentials need rotating, and some rotations break running services anyway.
- You are about to take on legal duties toward the people whose data is involved; stopping further exposure helps you meet them.

**Reasons not to:**

- Every customer goes down, including the ones whose data and workloads were never at risk.
- A full outage is public. If your status page says "unavailable" across the board, customers assume the worst.
- Shutting down can destroy evidence if it is done carelessly: logs on ephemeral machines, memory on a compromised host.

What decides it is not courage or caution. It is whether you can answer one question quickly: **which parts of our system share credentials, networks, or data with the part that is compromised?** If you can answer it in minutes, you can do what Lyceum appears to have done: shut down the affected zone and keep the separate one running. If you cannot, you are forced into a full shutdown, because you have no way to draw a line.

## The three zones worth knowing in advance

At an early-stage startup I want the founder or technical lead to be able to sort the system into three zones without looking anything up.

1. **Customer-facing product.** The app, the API, the workloads customers depend on.
2. **Internal operations.** Admin panels, internal tools, CI/CD, staging, the user database, analytics.
3. **Third-party surface.** Vendor accounts, database providers, the open-source code you publish, integrations with access to your data.

The question for each pair is the same: if this zone is compromised, can the attacker reach the other one? Shared credentials, a shared network, a shared database, an admin tool that can write to production. Most startups discover during an incident that the answer is yes far more often than they thought. I covered two common bridges recently: [how attackers move from a dev environment into production](/post-dev-environment-path-to-production) and [how a breach in an internal tool reaches customer data](/post-internal-tool-breach-workos).

The outcome of that mapping is what you decide in the first hour. If internal operations and the customer product share nothing an attacker can use, you can pull the internal zone offline and keep customers running. If they share an admin key, you are shutting it all down.

## A first-hour plan that fits on one page

You do not need a 40-page incident response document at seed stage. You need one page that answers these in advance:

- **Who decides.** One named person can order a shutdown without a meeting. Usually the CTO or technical founder, with a named backup.
- **What "contain" means per zone.** For each of the three zones: how to cut it off, what breaks when you do, and who is affected.
- **What to preserve first.** Snapshot affected machines and export logs before you wipe or rebuild anything. Rotating credentials is urgent; destroying evidence is avoidable.
- **Credential rotation order.** Cloud root and admin accounts first, then database credentials, then third-party API keys, then everything else. If you do not know where your credentials live, [moving them into a secrets manager](/post-secrets-manager-yet) is the work that makes this possible.
- **Who to tell, and when.** Customers about the disruption first, within the hour, even before you know the scope. The regulator, if personal data is involved.
- **How you come back.** System by system, each confirmed clean, not all at once because the pressure is high.

Investors increasingly ask for something like this; I wrote about what they look for in [the incident response plan question in diligence](/post-incident-response-plan-diligence).

## The clocks that start when you find it

If you hold personal data of people in the EU, GDPR Article 33 requires notifying your supervisory authority of a personal data breach without undue delay and, where feasible, within 72 hours of becoming aware of it, unless the breach is unlikely to result in a risk to people's rights. You can read the text of [Article 33 on EUR-Lex as part of the GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj). Other jurisdictions and your customer contracts may impose their own deadlines, and some enterprise contracts are shorter than 72 hours. This is not legal advice; check your own obligations with counsel before you need them.

The practical point: the clock starts at awareness, not at the end of your investigation. Lyceum notified its regulator two days after detection while the forensic picture was still being completed. You notify what you know, then update.

## The lesson in the entry point

Two details from Lyceum's account apply to almost every startup I look at.

**Old versions of your own public code are attack surface.** If you have ever open-sourced a tool, an SDK, or an example repository, it may describe how your internal systems work, including endpoints, naming, and configuration patterns. Old versions stay up long after you have moved on. Lyceum says it removed all old versions of the tool. Audit what you have published; [the open-source decision](/post-should-you-open-source-your-product) includes what you are revealing about your internals.

**Your vendors' vulnerabilities become yours.** The second half of the entry point was a flaw at an external database provider. You cannot patch a vendor, but you can limit what a compromised vendor connection can reach, which brings you back to zones.

## FAQ

### Should a startup always take its product offline during a breach?

No. Take offline the parts the attacker can reach. Keep running what you can show is separate. A full shutdown is right when you cannot tell where the attacker is or what they can reach.

### How fast should we tell customers?

Tell them about the disruption within the hour, even if you only know that something is wrong. Tell them the scope when you know it. Silence is read as concealment.

### Do we need a formal incident response plan at seed stage?

You need one page: who decides, how to contain each part of the system, what to preserve, rotation order, who to notify, and how to come back. That covers most of what matters.

### Does it matter if the attacker was an AI agent?

It changes the speed and volume of attempts more than the defence. Automated attacks make cheap, repeated probing practical, which I covered in [what AI attacks cost the attacker](/post-ai-attacks-25-dollars-per-target). Separation, rotation, and logging work the same either way.

If you want someone to map your zones and tell you what you would have to shut down today, a [technical teardown](/teardown) does that in one pass. See [how Fraction prices the work](/pricing), or [book a call](/book-a-call) to walk through your setup.
