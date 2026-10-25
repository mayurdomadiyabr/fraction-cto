---
title: Should your startup charge an implementation fee?
slug: should-you-charge-an-implementation-fee
date: '2026-10-25T15:25:16.397Z'
category: Pricing the work
excerpt: >-
  Onboarding hours are a hidden engineering cost. When an implementation fee
  makes sense, when it hurts sales, and how to price it from real data.
description: >-
  When to charge customers an implementation fee, when it backfires, and how to
  price it from measured onboarding hours instead of guesswork.
author: The founder of Fraction
readTime: 5
draft: false
---

Charge an implementation fee when getting a new customer live takes real, repeatable work from your team that is not covered by the subscription, such as data migration, configuration, integrations or training. Do not charge one when onboarding is self-serve or takes an hour of a founder's time, because the fee will cost you more in sales friction than it brings in. The more useful question is usually not whether to charge, but whether your onboarding work is measured at all. Most early teams have no idea what a new customer costs them in engineering hours until someone counts.

The pattern I see is predictable. The first five customers are onboarded by the founders personally, on calls, with spreadsheets imported by hand. Nobody tracks it because it feels like selling. By customer twenty, a developer is spending two days a week on imports and configuration, the roadmap has slipped, and the founders are surprised that velocity dropped. The implementation work was always there. It just was not priced or visible.

## First, measure what onboarding actually costs

Before deciding on a fee, spend one month logging every hour your team spends getting new customers live. Include:

- Data imports and clean-up, especially from spreadsheets or a previous tool.
- Configuration: roles, permissions, workflows, templates.
- Integrations with the customer's other systems.
- Training sessions and follow-up questions in the first 30 days.
- Fixes for bugs that only appeared because of their data.

Split the hours by who did them. An hour from a support person and an hour from your only senior engineer are not the same cost, because the second one also delays everything else on the roadmap.

If the total per customer is small and shrinking, you probably do not need a fee. If it is large, or growing with each customer, you have a pricing problem and a product problem at the same time.

## When an implementation fee makes sense

A separate fee is easiest to justify in a few situations.

### Onboarding is genuinely bespoke

If each customer brings different data, different integrations and different processes, the work is closer to a small project than a setup step. Charging for it is normal in B2B software, and larger buyers often expect a line item for it.

### The contract is large and long

On an annual or multi-year contract, a one-off fee to cover the first months of heavy work is easy for a buyer to understand. It also protects you if the customer churns early, because you have at least recovered the cost of getting them live.

### You need a commitment signal

A fee, even a modest one, tells you the buyer has a budget and intends to use the product. Customers who pay for implementation tend to show up to their training sessions.

## When it hurts more than it helps

There are also clear cases where a fee is a mistake.

If your product is sold to small teams who sign up on a card, an implementation fee adds a second decision to a purchase that should take five minutes. You will lose more revenue in abandoned signups than the fee brings in.

If the onboarding work is mostly caused by gaps in your own product, such as a missing import tool or confusing settings, charging customers for it hides the problem. You are getting paid to work around something you should fix. I have written separately about [whether to build or buy a spreadsheet importer](/post-customer-spreadsheet-import-build-or-buy), which is often the single largest source of manual onboarding hours.

If competitors in your segment do not charge one, you need a reason a buyer will accept, such as a migration service they cannot get elsewhere.

## How to price it

There is no standard percentage. What matters is that the number connects to the work.

### Price from your measured hours

Take the median hours from your logging month, multiply by a blended internal cost per hour, and add a margin for the customers that go badly. That is your floor. If the market will not pay it, the answer is to reduce the work, not to charge less and absorb the loss.

### Offer tiers, not a custom quote every time

A standard package (for example, one data import, standard configuration, two training sessions) at a fixed price, plus a premium package with integrations, keeps sales from inventing a new scope on every call. Anything outside the packages is quoted as a separate piece of work.

### Be willing to waive it, deliberately

Waiving the fee to close a strategic customer is fine, as long as the waiver is recorded and the hours are still tracked. Otherwise, a year later, nobody remembers why the largest customer costs twice as much to support.

## The engineering side of the decision

An implementation fee is not just revenue. It funds a choice about where your engineering time goes.

If you charge for implementation, decide who does it. Having your product engineers do customer setup is the most expensive option you have, because every hour comes out of roadmap time. Many early companies are better off with a technical support or solutions person who owns onboarding, with engineering only pulled in for real bugs.

Then use the hours log to decide what to automate. The three most repeated onboarding tasks are usually worth turning into product features: a self-serve importer, sensible default configuration, and in-app guidance. Each one reduces the fee you need to charge and the time you need to spend. This is the same thinking that sits behind [checking your gross margin as a technical question](/post-gross-margin-technical-question): the cost of serving a customer is partly an engineering design choice.

If you are not sure whether your onboarding cost is a pricing issue or a product issue, an outside review of the actual hours usually settles it quickly. That is the kind of question I look at in a [technical teardown](/teardown), and you can [book a call](/book-a-call) if you want to talk it through with your own numbers.

## FAQ

### Should implementation fees be paid upfront?

For most B2B contracts, yes, or at least split into an upfront portion and a portion on go-live. Paying everything at the end means you carry the cost of the work and the risk of a stalled project.

### Is an implementation fee the same as a setup fee?

Mostly. "Setup fee" usually describes a small, fixed charge for standard configuration. "Implementation fee" suggests a larger piece of work with data migration or integrations. Use the term that matches what the customer actually receives.

### Does charging for implementation slow down sales?

It can add a step to the conversation, especially for smaller buyers. For larger buyers it often does the opposite, because a clear implementation plan and price makes the project look lower risk to the people approving it.

### What if a customer refuses to pay it?

Ask which part of the work they expect to be included. Sometimes the right answer is a smaller package where they do more of the setup themselves. Sometimes the right answer is that the customer is not a fit at that price.
