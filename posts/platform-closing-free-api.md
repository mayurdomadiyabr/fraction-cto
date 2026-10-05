---
title: Reddit is closing its free API. Which platform is next for you?
slug: platform-closing-free-api
date: '2026-10-05T08:20:47.634Z'
category: Decisions
excerpt: >-
  Reddit retires RSS on 13 November and closes its public API by March 2027. How
  to find what you depend on and decide what to keep.
description: >-
  Reddit is closing RSS and its public API. A founder's plan for any platform
  API closure: find dependencies, then license, migrate, replace or drop.
author: The founder of Fraction
readTime: 6
draft: false
---

On 30 September 2026, Reddit announced that it will retire RSS feeds on 13 November and close public API access by March 2027, citing large-scale scraping and automated abuse. If your product reads Reddit data, posts to Reddit, or relies on a tool that does, you now have a deadline you did not choose. And if it is not Reddit, it will be some other platform: free access to someone else's data is one of the least stable foundations a startup can build on.

The short answer: treat a platform API closure as a product decision, not a migration ticket. In the first week, find every place you depend on the platform, including indirectly through vendors. Then decide, feature by feature, whether to pay for licensed access, move to the platform's approved route, replace the data, or drop the feature. The deadline is fixed; the decision about what is worth keeping is yours.

## What Reddit actually announced

According to Reddit's announcement, as reported by [Unite.AI](https://www.unite.ai/reddit-sets-dates-to-retire-rss-feeds-and-close-public-api-access/) and others, the key dates are:

- **31 October 2026:** no new public API access requests accepted.
- **13 November 2026:** RSS feeds retired.
- **30 November 2026:** registration closes for a migration bounty that pays $1,000 per app that moves to Reddit's Devvit developer platform, up to $1 million in total.
- **12 January 2027:** removal begins for apps and users that have not registered.
- **March 2027:** public API access closes.

Already-registered apps, Devvit apps and commercial licences for approved developers remain. Check the primary announcement for your own case; details for specific use cases may change as Reddit publishes updates.

I am not going to argue about whether Reddit is right. The useful question for a founder is what to do when any platform you rely on changes the terms.

## Why this keeps happening

Free platform APIs exist because they helped the platform grow. When the platform decides the data is worth more sold than given away, or that automated access costs more than it brings in, the terms change. AI training demand has made public text and community data far more valuable, which gives platforms a strong reason to restrict free access and license it instead.

The pattern for a startup is consistent: the free tier was never a contract. You built on goodwill, and goodwill has a notice period chosen by the other side.

## Week one: find every dependency

Most founders underestimate how many places one platform touches. Make a list that covers:

### Direct use in your product

Features that call the API or read feeds: social listening, community monitoring, content aggregation, posting on behalf of users, sign-in with the platform.

### Indirect use through vendors

Analytics, brand monitoring, lead generation and enrichment tools often pull from platform APIs. If one of your vendors loses access, so do you, and they may not tell you first. Email the vendors that matter and ask directly.

### Internal tools and scripts

The script that pulls community mentions into a spreadsheet. The feed reader the marketing team uses. The AI agent that summarises discussion threads. These are easy to miss because nobody shipped them as a product.

### Data you already stored

If you kept data from the platform, read the terms that applied when you collected it and the terms that apply now. Whether you can keep using it, and for what, is a question for your lawyer, not your engineers. If you have used it to train or tune a model, that is also likely to come up in diligence; see [where your training data came from](/post-training-data-provenance-diligence).

## Week two: decide feature by feature

For each dependency, there are four realistic options.

### 1. Pay for licensed access

If the feature is core to what customers pay for, licensed access may be worth it. Ask early: commercial terms take time, and your pricing may need to change to cover the cost. Model the new cost per customer before you sign; if it breaks your margin, the feature has a problem regardless of the API.

### 2. Move to the platform's approved route

Some platforms offer a sanctioned developer environment, like Reddit's Devvit, instead of open API access. This often changes what you can build, not just how. Read the limits carefully before committing engineering time.

### 3. Replace the data source

Sometimes the platform was just one source among several that could serve the need. Other sources, first-party data from your own users, or a different signal entirely may do the job. This is often the cheapest option and the one founders consider last.

### 4. Drop the feature

If the feature was a nice-to-have, the closure is a good reason to stop maintaining it. Tell the customers who use it, give them a date and, if you can, an export. I wrote about this decision in general in [the feature you should kill](/post-kill-the-feature).

What you should not do is look for ways around the restrictions, such as scraping. It is a legal and reputational risk, it tends to break without warning, and it will come up in diligence.

## How to make this less painful next time

You cannot avoid depending on platforms. You can make the dependency visible and cheaper to change.

- **Keep a dependency register.** One page listing each external platform and API, what depends on it, whether access is contracted or free, and who owns the relationship. Review it each quarter.
- **Separate "contracted" from "tolerated".** Access under a paid agreement with notice terms is a vendor. Access through a free tier that can be withdrawn is a risk. Treat them differently in planning.
- **Wrap the integration, lightly.** Keep platform-specific code in one place so that switching sources does not mean touching the whole product. Do not over-engineer it; I covered the cost of overdoing this in [wrapping a vendor to avoid lock-in](/post-vendor-abstraction-layer).
- **Ask vendors about their sources.** When you buy a data or monitoring tool, ask where its data comes from and on what terms. If they rely on free access, their product has the same risk yours would.

Investors increasingly ask about this kind of concentration. A single platform that can switch off a core feature is a fair diligence question; I covered the broader version in [one vendor can take your whole product down](/post-vendor-concentration-diligence).

## If you are not sure where you stand

The hardest part is usually not engineering. It is deciding which features are worth paying to keep, and doing it before the deadline makes the decision for you. If your product depends on a platform that is changing its terms and you want a second opinion on the options, [book a call](/book-a-call). A [technical teardown](/teardown) includes mapping external dependencies like this, and the [pricing](/pricing) page shows how a short engagement is scoped.

## FAQ

### My product does not use Reddit. Does this matter to me?

Possibly through vendors, and certainly as a pattern. Any free API or feed you depend on can change on the platform's schedule. Use this as a prompt to list your dependencies.

### Is scraping a safe fallback if the API closes?

No. It typically violates the platform's terms, creates legal risk, breaks without warning, and is the kind of thing investors and acquirers look for in diligence.

### How do I decide whether licensed access is worth paying for?

Work out the cost per customer and compare it to what those customers pay. If the feature is why they buy, it is probably worth it. If they barely use it, the closure is a reason to drop it.

### Who on the team should own this?

One person should own the dependency register and the response plan. At a small startup that is often the CTO or lead engineer, working with a founder on the commercial side.
