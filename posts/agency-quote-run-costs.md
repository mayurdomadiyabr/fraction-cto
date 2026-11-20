---
title: The agency quote covers the build. What does it cost to run?
slug: agency-quote-run-costs
date: '2026-11-20T03:08:58.298Z'
category: Vendors
excerpt: >-
  Build quotes leave out hosting, APIs, app store fees, updates and monitoring.
  The run-cost list to get from your agency before you sign.
description: >-
  Agency quotes price the build, not the running cost. The recurring costs to
  list before you sign, and a rule of thumb for sizing them.
author: The founder of Fraction
readTime: 5
draft: false
---

An agency quote tells you what it costs to build the product. It almost never tells you what it costs to keep it running for the first year. Before you sign, ask the agency to list every recurring cost the finished product will have: hosting, third-party services, app store accounts, monitoring, security updates and the people who answer support. In my experience the first-year running cost of a typical early-stage product is a real line in the budget, and founders who do not plan for it end up cutting features or switching vendors in a panic six months after launch.

The quote is not dishonest when it leaves these out. The agency is pricing the work it does. But you are buying a product, not a project, and the product keeps costing money after the last invoice.

## Why build quotes leave out run costs

There are three reasons, and none of them are sinister.

First, the agency does not know your usage. Hosting and many API costs scale with users, and nobody can predict that precisely before launch.

Second, many run costs are paid directly by you, to the provider, on your card. They never pass through the agency, so they do not appear on its paperwork.

Third, it makes the quote look smaller. In a competitive bid, the agency that lists every future cost looks more expensive than the one that does not, even though the product costs the same to run. This is one reason [two bids for the same brief can look wildly different](/post-compare-agency-bids).

## The run-cost list to ask for

Ask the agency to fill in a simple table before you sign: item, provider, who pays, expected monthly cost at launch, and expected cost at ten times the launch usage. The items below are the ones I check for.

### Hosting and infrastructure

Servers or a platform service, the database, file storage, backups, a content delivery network, and separate staging and production environments. Ask whether the estimate includes the staging environment; it is often forgotten. If you are on startup cloud credits, ask what the bill looks like when they run out. I wrote about [planning for the end of cloud credits](/post-cloud-credits-running-out).

### Third-party services built into the product

Email sending, SMS, maps, search, payments, authentication, analytics, error tracking, AI model APIs. Each one may have a free tier at launch and a paid tier soon after. AI APIs in particular are usage-based and can grow faster than revenue if nobody is watching. A product with eight integrations can have eight separate bills.

### App store and developer accounts

For a mobile app, the Apple Developer Program is 99 USD a year and Google Play charges a one-time 25 USD registration fee, according to the published fees at the time of writing. Small, but make sure the accounts are in your company's name. If the agency registered them, read [what happens when the agency owns the app store account](/post-agency-owns-app-store-account).

### Domains, certificates and email

The domain itself, any paid certificates, and the business email accounts used to send transactional mail. Cheap, but the cost of letting one lapse is high.

### Security and platform updates

This is the cost founders most often miss. Frameworks, libraries and operating systems release security fixes all year, and mobile platforms release new OS versions every year that can break older apps. Someone has to apply those updates and test the result. That is people time, not a subscription. On recent posts I have covered framework end-of-support dates for exactly this reason; the upgrade work is a predictable recurring cost.

### Monitoring and someone to respond

Uptime monitoring and error tracking tools are cheap. Someone to look at the alerts is not. Decide before launch who gets told when the product is down, and what they are paid to do about it. For when this becomes a formal rota, see [when a startup needs on-call](/post-when-do-you-need-on-call).

### Maintenance and small changes

Even with no new features, you will want small fixes and tweaks. Many agencies offer a monthly retainer for this. Whether it is good value depends on what it includes; see [how to judge an agency maintenance retainer](/post-agency-maintenance-retainer).

## A rough way to size it

I do not have a reliable formula for every product, and anyone who gives you a single percentage is guessing. Here is the rule of thumb I use with founders, based on what I have seen rather than on any published benchmark.

- **Direct services** (hosting, third-party APIs, tools): get the agency's estimate at launch usage, then multiply by three for your planning number. Estimates made before launch are almost always low.
- **People time for upkeep** (updates, monitoring, small fixes): plan for a few days of a competent developer's time every month, even in a quiet month. For a product with mobile apps and several integrations, plan for more.

Put both numbers into your runway model next to the build cost. If the total changes your decision, you have learned something useful before signing rather than after.

## What to do with the list

Once you have the table, three things are worth doing.

**Check who owns each account.** Every recurring service should be registered to your company, with billing on your card and admin access in your hands, with the agency added as a user. This is the single most useful step for avoiding future lock-in.

**Look for avoidable cost.** Sometimes the list shows that the agency chose a paid service where a simpler option would do, or a heavy infrastructure setup for a product with a few hundred users. Ask why. There may be a good reason, and there may not. The [self-host versus managed](/post-self-host-or-managed) tradeoff is often where this shows up.

**Set a spending alert.** On every usage-based service, set a billing alert at a level you would want to know about. It takes minutes and prevents the worst surprises. If one gets through, here is [what to do in the first 48 hours of a surprise bill](/post-surprise-usage-bill-first-48-hours).

## FAQ

### Should the agency include run costs in its quote?

It does not need to price them as its own work, but it should list them. A good agency will tell you what the product will cost to run, even if those costs are paid to other providers. If an agency cannot or will not produce that list, it may not have thought about how the product runs after launch.

### Why do run costs matter if they are small at launch?

Because they grow with usage, and some of them, especially upkeep time, do not shrink when you stop building features. A product that is cheap to run at 100 users can be expensive at 10,000 if it was not designed with cost in mind.

### Can a fractional CTO estimate this for us?

Yes, and it is one of the quicker useful things to do before signing a build contract. Reviewing the architecture, the integrations and the account setup gives a realistic run-cost range and flags lock-in risks. You can see how that fits into a [teardown](/teardown) or [book a call](/book-a-call) to talk it through.
