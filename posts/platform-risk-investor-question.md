---
title: Built on someone else's platform? How to answer the investor
slug: platform-risk-investor-question
date: '2026-11-28T04:36:45.528Z'
category: Fundraising
excerpt: >-
  Investors ask what happens if the platform changes the rules. The four kinds
  of dependency and what a credible answer contains.
description: >-
  How to answer investor questions about platform risk when your startup depends
  on an app store, API, or AI provider.
author: The founder of Fraction
readTime: 5
draft: false
---

"What happens if they change the rules?" is the question every founder building on someone else's platform eventually hears from an investor. If your product is a Shopify app, a Salesforce add-on, a layer over one AI model provider, or a client for another company's API, the investor is asking whether one decision made in someone else's boardroom can end your business. The answer they want is not "that won't happen." It is a clear picture of how exposed you are, what it would cost to move, and what you have already done to reduce the blast radius.

## Why investors ask it now

They have watched it happen. In June 2023, Reddit announced paid API pricing of $0.24 per 1,000 calls with about 30 days' notice. Apollo, one of the most popular third-party Reddit clients, shut down on June 30 because its developer estimated the new rates would cost roughly $20 million a year, as [TechCrunch reported at the time](https://techcrunch.com/2023/06/08/popular-third-party-reddit-app-apollo-is-shutting-down-as-a-result-of-reddits-new-api-pricing/). The app was well built and well loved. None of that mattered once the platform changed its terms.

Investors do not expect you to be immune to that. They expect you to know where you stand.

## The four kinds of platform dependency

When I review a startup for this, I sort the dependencies into four buckets, because each one needs a different answer:

1. **Distribution dependency.** The platform is where your customers find you: an app marketplace, an app store, a plugin directory. If you are delisted or demoted, acquisition stops even if the product still works.
2. **Data dependency.** Your product reads or writes data you do not own through someone else's API. If access is priced, rate-limited, or revoked, the product stops working.
3. **Capability dependency.** A core feature is a third-party model or service. If the price changes or quality shifts, your margin or your output changes with it.
4. **Commercial dependency.** The platform takes a cut of your revenue or controls billing. A change in their fee is a direct change in your gross margin, which is why the [gross margin question](/post-gross-margin-technical-question) often leads straight here.

Most startups have one dominant bucket and two minor ones. Name the dominant one out loud. Founders who pretend they have no dependency lose credibility fast, because the investor can see it on the first slide.

## What a good answer sounds like

A credible answer has three parts.

**Exposure, in numbers.** What share of revenue or new customers comes through the platform? Which features break if the API goes away tomorrow? "80% of signups come from the marketplace, and the core sync feature depends on their orders API" is a better answer than any reassurance.

**Cost to move.** If you had to reduce the dependency, what would it take? For a capability dependency on one AI model provider, that might be a provider abstraction and an evaluation suite, a few weeks of work. For a distribution dependency on an app store, it is a second acquisition channel, which takes quarters. Be honest about which one you have.

**What you have already done.** The strongest signal is evidence that you started before anyone asked:

- Your own customer relationships: emails, contracts, and billing you control rather than only a platform handle.
- A thin adapter layer between your code and the platform API, so a change touches one module instead of the whole codebase.
- A second channel or provider, even a small one, that proves the product can live elsewhere.
- Monitoring of the platform's changelog and deprecation notices, with an owner. API sunsets are usually announced months ahead; the companies that get hurt are the ones who were not reading.

## The architecture part investors will check

If the round includes [technical diligence](/post-diligence-depth-seed-series-a), the reviewer will look for the dependency in the code, not just the deck. The things that read badly:

- Platform API calls scattered across dozens of files, with no single place to swap them.
- Business logic that only exists as platform configuration, such as workflows built inside the platform's own tool, with no copy you control.
- Customer data that lives only on the platform side, so you could not migrate customers even if you wanted to.
- No record of past breaking changes and how long they took to absorb.

The things that read well are the inverse: one integration module, your own copy of the data you are allowed to keep, and a short note on the last time the platform changed something and what it cost you. That note is underrated. A founder who says "their API version change last spring took us six engineer-days, here is the ticket" sounds like someone who can absorb the next one.

## When the dependency is the business

Some companies are, by design, a feature on someone else's platform, and that can still be a fine business. The honest framing is: "We are a bet that this platform keeps growing and keeps needing what we do. Here is why the platform benefits from us existing, and here is our plan to own the customer relationship over time." Investors fund that story regularly. What they do not fund is a founder who has not noticed the risk.

## FAQ

### Will investors pass because we are built on one platform?

Rarely on that alone. They pass when the dependency is large, the founder cannot quantify it, and there is no plan to reduce it. Quantify it and show the first steps.

### How much should we spend reducing platform risk before raising?

Usually a little, aimed at the cheapest high-leverage moves: an adapter layer, your own copy of customer contact data, and changelog monitoring. Full multi-platform support is a post-raise project.

### Is depending on one AI model provider the same risk?

It is a capability dependency, and usually the cheapest kind to reduce, because you can build a provider abstraction and an evaluation set without changing your go-to-market.

### Should we mention the risk before the investor asks?

Yes. Naming it first, with numbers and a plan, reads as judgment. Being caught out by it reads as the opposite.

If you want an outside read on how exposed your architecture actually is before an investor looks, a [technical teardown](/teardown) maps every platform dependency and the cost to move, or you can [book a call](/book-a-call) to talk it through.
