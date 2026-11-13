---
title: Your vendor broke its uptime SLA. How to claim the credit
slug: claim-vendor-sla-credits
date: '2026-11-13T02:48:38.245Z'
category: Vendors
excerpt: >-
  Cloud and SaaS SLA credits are rarely automatic. When a claim is worth filing,
  the deadlines to watch, and how to use it at renewal.
description: >-
  Vendor missed its uptime SLA? How service credits work, AWS-style claim
  deadlines, when a claim is worth it, and how to file one that sticks.
author: The founder of Fraction
readTime: 5
draft: false
---

If a cloud provider or SaaS vendor breaks its uptime promise, you are usually owed a service credit, but almost no vendor pays it automatically. You have to file a claim, inside a deadline, with evidence, and the credit comes off a future bill rather than back to your bank. For a startup the money is often small. The bigger value is the record it creates for your next renewal negotiation.

Most founders discover their vendor's service level agreement for the first time on the day of an outage. Here is how to read one, when a claim is worth the effort, and what to do with it.

## What an SLA actually promises

A vendor SLA is a promise about one measurable thing, usually monthly uptime for a specific service, plus a remedy if it misses. The remedy is almost always a credit: a percentage of what you paid for that service in the affected month, on a sliding scale. Miss 99.9 percent and you might get 10 percent back; miss 99 percent and the credit steps up.

Read three parts closely:

- **What counts as downtime.** Many SLAs only count errors measured a certain way, over a certain window, in a certain region. A slow service is often not "down".
- **What is excluded.** Scheduled maintenance, problems caused by your own setup, beta features and free tiers are commonly excluded.
- **How to claim.** This is the part people skip, and it is the part that decides whether you get anything.

## The deadline is real

Take AWS as an example. Each AWS service has its own SLA page, and SLA pages for services such as [Amazon Cognito](https://aws.amazon.com/cognito/sla/) and [Amazon API Gateway](https://aws.amazon.com/api-gateway/sla/), state that a credit request must be received by the end of the second billing cycle after the incident, opened as a case in the AWS Support Center, with specific details about the affected resources and times. Miss that, or leave out the required information, and you are disqualified.

Other vendors differ. Some give you 30 days, some ask for the request to come from the account owner, some only offer credits on paid enterprise plans. Do not assume; open the SLA page for each service you depend on and note the window. Terms change, so check the live page, not a summary.

## When a claim is worth filing

Be honest about the arithmetic. A 10 percent credit on a 400 dollar monthly database bill is 40 dollars. If filing it takes an engineer two hours, you lost money.

I suggest filing when any of these are true:

- **The service is a large line item.** Credits are a percentage, so they only matter on big bills.
- **The outage hit customers.** Even a small credit gives you a written, vendor-acknowledged record that the problem was theirs. That is useful when you explain the incident to customers or to your board.
- **Renewal is coming.** A pattern of filed, accepted claims is the best evidence you have when asking for a discount, a better tier or exit terms. If you are preparing for that, our notes on [renegotiating agency and vendor spend](/post-renegotiate-agency-spend) and on [contracts that auto-renewed](/post-saas-contract-auto-renewed) apply directly.
- **You promised your own customers an SLA.** If your contract owes them credits for downtime caused by your vendor, you want to recover what you can. Better still, do not promise more than your setup can hold; [the SLA you promise vs the architecture you have](/post-sla-promise-vs-architecture) covers that gap.

## How to file a claim that gets accepted

1. **Write down the timeline during the incident.** Start and end times in UTC, which features failed, which region, and the error messages you saw. Screenshots of your own monitoring help.
2. **Save the vendor's status page entry.** If the vendor posts an incident, copy the link and text. Status pages get edited.
3. **Match the SLA's definition.** Quote the SLA wording and show how your evidence meets it. Claims that just say "you were down" get rejected or bounced back with questions.
4. **Use the exact process.** Correct channel, correct subject line if one is required, correct account.
5. **Set a calendar reminder** a week before the deadline the moment an incident ends. This is the single habit that makes the difference.

## The credit is not the point

A credit will never cover what an outage costs you in lost sales, support time and customer trust. Most SLAs say clearly that credits are the only remedy, which means you cannot usually claim for your actual losses. So treat the SLA as a floor on vendor accountability, not as insurance.

The real protection is your own design: knowing which vendors are single points of failure, having a fallback for the ones that matter most, and knowing what you would do in the first hour. For AI providers specifically, our post on [planning for an AI provider outage](/post-ai-provider-outage-fallback) goes further.

## Where a fractional CTO helps

When I join a company, I build a short list of the vendors the product cannot run without, what each one promises, and how long a claim window is. It takes a couple of hours and it changes how outages and renewals are handled. If that would help you, [book a call](/book-a-call), or see [pricing](/pricing) for how engagements work.

## FAQ

### Do vendors ever pay SLA credits automatically?

Some do for specific products, but most require a claim. Assume you must file unless the SLA clearly says otherwise.

### Can I get cash instead of a credit?

Usually not. Credits are normally applied to future invoices for the same service. If you are about to leave the vendor, a credit may be worth little, which is worth raising during renewal talks.

### Our outage was partial. Does it still count?

It depends on how the SLA defines downtime. Many measure error rates over short intervals, so a partial outage can count if enough requests failed. Read the definition and compare it with your logs.

### Is a 99.9 percent uptime SLA good?

It allows roughly 43 minutes of downtime in a 30-day month. Whether that is good depends on what you have promised your own customers and how much of your product depends on that one service.
