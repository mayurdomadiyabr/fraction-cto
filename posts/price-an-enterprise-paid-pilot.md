---
title: How to price an enterprise paid pilot without funding their roadmap
slug: price-an-enterprise-paid-pilot
date: '2026-10-25T15:25:16.208Z'
category: Pricing the work
excerpt: >-
  Most paid pilots lose money through engineering hours nobody priced. How to
  set the fee, scope it, and spot a pilot that is really free consulting.
description: >-
  How to price an enterprise paid pilot: set the fee, credit it to the contract,
  write success criteria and exclusions, and protect engineering time.
author: The founder of Fraction
readTime: 7
draft: false
---

A paid pilot should cost the customer enough that someone senior had to approve it, be credited against the annual contract if they convert, and be scoped so tightly that your engineers are not quietly building a custom product for one logo. In practice that usually means a fee somewhere around a tenth to a third of the expected first-year contract, a fixed end date of 60 to 90 days, three or four written success criteria, and a hard list of what the pilot does not include. The price matters less than the scope. Most pilots that lose money do it through engineering hours nobody priced.

I see the same sequence in early B2B startups again and again. A large company says it is interested. Someone on their side asks for a pilot. The founder, thrilled, says yes, agrees a number in the meeting, and then hands the engineering team a list of requests that were never in the pricing conversation. Three months later the pilot is "successful", the champion has moved teams, and the company has spent a quarter of its engineering capacity on integrations that only this customer will ever use.

## Why a paid pilot is mostly an engineering decision

Founders tend to treat pilot pricing as a sales question: what will they pay, what will it take to get the signature. The real cost is on the build side, and it shows up in three places.

### Integration work you would not otherwise do

Enterprise pilots almost always come with a request to connect to something: their identity provider, their data warehouse, an internal system with a SOAP API from 2011. Some of this is reusable. Single sign-on, for example, you will need for every customer of this size, and I have written about [when to build or buy enterprise SSO](/post-enterprise-sso-build-or-buy). A bespoke connector to one customer's internal tool is not reusable, and it becomes maintenance you carry for as long as they are a customer.

### Security and procurement overhead

Before a large company lets you touch real data, you will usually face a security questionnaire, a data processing agreement, sometimes a penetration test request, and a procurement portal with its own registration. None of this is engineering in the narrow sense, but someone technical has to answer the questions truthfully, and that is often the most senior person you have.

### Support at a different standard

A pilot customer expects a named contact who answers quickly, because their champion is spending political capital on you. That is real time from whoever is on point, usually the founder or your one senior engineer.

Add these up before you name a price. On a typical early team I would expect a serious enterprise pilot to absorb somewhere between a quarter and a half of one engineer for its duration, more if the integration list is long. If your engineers cost you, fully loaded, the numbers I walk through in [what a senior engineer really costs your runway](/post-senior-engineer-cost-runway), you can turn that fraction into a monthly cost quickly. That is the floor you are subsidising if the pilot is free.

## How to set the number

There is no standard formula, and anyone who quotes one with confidence is guessing. What I use with founders is a short sequence of checks.

### Start from the annual contract you expect

Agree the likely first-year contract value before the pilot starts, at least as a range. If the customer will not discuss what a full deployment would cost, that is a signal the pilot is research for them, not a buying process. Many founders and investors describe pilot fees in the range of 10 to 30 percent of that annual figure. Treat that as a starting point, not a rule.

### Check it against your cost of delivery

Take the engineering fraction you estimated above, multiply by the pilot length, and compare. If the pilot fee does not cover at least your direct cost of delivering it, you are paying to be evaluated. That can still be the right call for a logo that will change your fundraising story, but make it a conscious decision with a budget, not something you discover later.

### Make it big enough to need a signature

A fee small enough to go on someone's corporate card is a fee nobody had to defend. The point of charging is partly to find out whether there is a budget holder. If a director or VP had to approve the spend, you have learned something real about the deal.

### Credit it against the contract

Offering to credit the pilot fee against the first year if they convert within a defined window removes the "paying twice" objection without lowering your price. Put the window in writing, for example conversion signed within 30 days of the pilot end date.

## Write down what the pilot is and is not

The single most useful document in a pilot is a one-page scope with two lists.

The first is the success criteria: three or four measurable outcomes, agreed with the customer's champion and ideally their budget holder, with the measurement method next to each. "Users like it" is not a criterion. "Reconciliation time for the finance team drops from two days to half a day across the March close" is.

The second is the exclusions: the integrations, features and environments that are explicitly out of scope. When a new request arrives mid-pilot, and it will, the exclusions list turns an awkward argument into a simple question: do we add this as a paid change, or park it for the full contract?

I would also add an engineering rule internally: anything built for the pilot goes into the main product behind a setting, never into a fork. A pilot branch that diverges from the main codebase is how you end up with the problem I describe in [customer-specific code](/post-customer-specific-code), and it is very hard to unwind once the customer is live.

## Signs the pilot is not really a pilot

Some requests look like pilots and behave like free consulting. The patterns I watch for:

- No annual price discussed, and resistance when you raise it.
- Success criteria that keep moving, or that nobody on their side will sign.
- The champion has no budget and cannot name who does.
- Integration requests that grow every week, each described as "small".
- A request for your source code, a custom deployment in their environment, or exclusivity, all before any contract.

Any one of these is negotiable. Three of them together usually means the pilot will end in a polite "we learned a lot", and you should price it as paid research or decline it.

## When a free pilot is still the right call

Sometimes giving the pilot away is defensible. A first reference customer in a market where nobody has heard of you, a design partner who will genuinely shape the product, or a logo that a specific investor has told you would change their decision. If you go this way, cap it: a fixed number of weeks, a fixed integration list, and a written conversion price agreed up front. Free with no edges is how a quarter of your roadmap disappears.

If you are weighing a pilot like this and want a second opinion on the scope before you commit your team, that is a common reason founders [book a call](/book-a-call) with me. The [pricing page](/pricing) shows how a short engagement works if the question is bigger than one deal.

## FAQ

### How long should an enterprise paid pilot last?

Long enough to measure the success criteria once, and no longer. For most B2B software that is 60 to 90 days. If the outcome you are measuring only happens quarterly, such as a financial close, plan the pilot around one real cycle rather than an arbitrary length.

### Should the pilot fee be refundable?

I would not make it refundable. A credit against the annual contract if they convert is the cleaner incentive. A money-back offer tied to clearly missed success criteria can work for a small fee, but it invites arguments about whether the criteria were met.

### Who on my side should own the pilot?

One named person with authority to say no to scope additions. At an early company that is usually the founder for the commercial side and your most senior engineer for delivery, with a weekly check on hours spent against the estimate.

### What if they ask for a custom feature during the pilot?

Check it against the exclusions list. If it is out of scope, quote it as a paid change or schedule it for after conversion. If it is something every customer of this type will need, it may belong on your roadmap anyway, which is a product decision rather than a pilot concession.
