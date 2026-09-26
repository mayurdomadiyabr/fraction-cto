---
title: Your contract promises 99.99% uptime. Your stack can't deliver it
slug: sla-promise-vs-architecture
date: '2026-09-26T03:59:11.333Z'
category: Fundraising
excerpt: >-
  What each uptime number really allows, why your providers cap your ceiling,
  and how to fix an SLA sales signed that engineering cannot keep.
description: >-
  Your SLA promises 99.99% but your stack delivers 99.9%. The downtime math, why
  diligence checks it, and how to renegotiate the promise.
author: The founder of Fraction
readTime: 6
draft: false
---

Your biggest customer contract promises 99.99% uptime. Your product runs on one database instance, deploys by hand, and has no one on call at night. That gap is common, it is usually invisible until something breaks, and it is exactly the kind of thing technical diligence now checks. The fix is rarely to rebuild the architecture. It is to make the promise match what you can actually deliver, and to know the numbers before someone else calculates them for you.

This post explains what an uptime number actually commits you to, how to work out what your current setup can realistically deliver, and what to do when sales has promised more than engineering can keep.

## What the nines actually mean

Uptime percentages sound close together. They are not. Here is the downtime each one allows, using a 30-day month.

| Commitment | Allowed downtime per month | Per year |
| --- | --- | --- |
| 99.5% | about 3.6 hours | about 43.8 hours |
| 99.9% | about 43 minutes | about 8.8 hours |
| 99.95% | about 22 minutes | about 4.4 hours |
| 99.99% | about 4.3 minutes | about 53 minutes |

A 99.99% promise means a single bad deploy that takes 15 minutes to roll back has already breached the month. So has one database failover that nobody notices until a customer emails. If nobody is paged at 3am, 99.99% is not a target you can hit. You would just be lucky.

## Your ceiling is set by what you depend on

Most early products sit on top of a chain of services: a cloud database, a hosting platform, an auth provider, a payment processor, an email service. If any link in that chain being down means your product is down, their availability limits yours.

A rough way to see it: if your product needs three services that each deliver 99.95%, and any one of them failing takes you down, the best you can expect is roughly 0.9995 x 0.9995 x 0.9995, which is about 99.85%. That is before counting your own bugs and deploys.

Your providers publish what they commit to. For example, [Amazon's RDS service level agreement](https://aws.amazon.com/rds/sla/) commits to 99.95% monthly uptime for Multi-AZ deployments and 99.5% for a single instance. If your production database is a single instance, your own contract promising 99.99% is promising something your database provider does not promise you. And their remedy for a miss is a service credit on your AWS bill, not coverage for the credits you owe your customers.

## Why diligence cares about this now

Investors and acquirers increasingly read your largest customer contracts, and they hand the technical clauses to whoever is doing the technical review. The reviewer then compares the promise to three things:

- **The architecture.** Single points of failure, single region, single database instance, manual deploys.
- **The operations.** Is anyone on call? Is there monitoring that would notice an outage before a customer does? We covered the threshold for this in [when a startup actually needs on-call](/post-when-do-you-need-on-call).
- **The history.** Your incident log and status page. If you have had four hours of downtime this year and a contract that allows 53 minutes, the reviewer will ask whether you paid the credits. See [why incident history is now a diligence document](/post-incident-history-diligence).

The finding is rarely dramatic on its own. But it is a clean example of sales and engineering not talking to each other, which is what reviewers are really looking for. It also puts a number on your exposure: how much in credits, or which termination rights, could you owe this year?

## How the gap happens

In almost every case I have seen, nobody lied. It goes like this. A large prospect sends its standard vendor paper. It includes an SLA schedule with 99.99% because that is what their procurement template says. The founder is closing their biggest deal, the clause looks like boilerplate, and no engineer reads it. Six months later the same number is copied into the next enterprise contract because "we already agreed to it once."

The same pattern shows up with response times ("critical issues acknowledged within 15 minutes, 24/7") and with recovery commitments ("data restored within one hour") that nobody has ever tested. We wrote about testing the recovery half in [can you get your database back at 2am](/post-disaster-recovery-diligence).

## What to do about it

### Measure what you actually deliver

Before you negotiate anything, get a real number. Put an external uptime check on the paths customers actually use, not just the homepage, and look at the last few months of incidents. Most early products honestly land somewhere between 99.5% and 99.9%. That is fine for a lot of customers, as long as the contract says so.

### Define the terms before you change the number

Much of the risk is in the definitions, not the percentage. A reasonable SLA usually:

- Excludes scheduled maintenance with notice.
- Excludes outages caused by the customer or by upstream internet problems.
- Defines downtime as the core service being unavailable, not a single slow page.
- Measures monthly, not per incident.
- Caps the remedy at service credits, with the credits as the sole remedy.

Have counsel review the final wording. This is not legal advice, but those five points come up in nearly every negotiation I sit in on.

### Offer tiers instead of one promise

If an enterprise customer truly needs 99.95% or better, price it as a separate tier that funds the work: redundant database, multiple availability zones, on-call rotation, tested failover. Then the promise and the architecture move together, and the customer paying for it is funding it.

### Renegotiate at renewal, not in a crisis

For contracts already signed, the natural moment is renewal. Bring the measured number, the proposed definitions, and a clear explanation. Most procurement teams accept a realistic SLA with clear definitions over a heroic one that the vendor cannot keep.

### Keep one list

Put every technical commitment from every contract in one place: uptime, response times, recovery times, data residency, deletion windows. Have an engineer mark each as met, at risk, or not met. That list is the thing a reviewer will build anyway. It is better if you built it first. If you are preparing for a raise, it belongs in your [technical memo for investors](/post-tech-memo-investors).

## FAQ

### What uptime should an early-stage SaaS promise?

Most seed to Series A products can defend 99.5% to 99.9% with clear exclusions. Only promise more if you have redundancy, monitoring, and on-call to back it up.

### Does my cloud provider's SLA cover my customer credits?

No. Provider credits usually reduce your own bill with that provider, typically after you file a claim. They do not pay the credits you owe your customers.

### Is a missed SLA a diligence deal-breaker?

Rarely on its own. It becomes a problem when it shows unpaid credits, termination rights, or a pattern of commitments nobody tracked.

### Who should read the SLA before we sign?

Someone who can say whether the system can deliver it. If you do not have that person, a short [review call](/book-a-call) before a large contract is cheaper than a year of credits.
