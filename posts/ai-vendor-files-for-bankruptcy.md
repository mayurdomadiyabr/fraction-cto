---
title: Your AI vendor files for bankruptcy. What happens to you?
slug: ai-vendor-files-for-bankruptcy
date: '2026-10-18T13:29:22.367Z'
category: Vendors
excerpt: >-
  When a young AI vendor in your stack files for Chapter 11, the service often
  keeps running. What changes, and the checks to run now.
description: >-
  What happens to your contract, prepaid fees and data when a SaaS or AI vendor
  files for Chapter 11, and the five checks to run before it happens.
author: The founder of Fraction
readTime: 8
draft: false
---

On 13 October 2026, [TechCrunch reported](https://techcrunch.com/2026/10/13/just-5-years-in-interactive-chatbot-platform-character-ai-files-for-bankruptcy/) that Character.AI had filed for Chapter 11 bankruptcy five years after it was founded, with a court-supervised sale under way and the platform to be wound down if no buyer emerges to keep it running. It is a consumer product, but the pattern matters to any startup that has built a feature on top of a young AI company. Many of the model, voice, agent, and data vendors in a typical 2026 stack are a few years old and funded by rounds that may not repeat.

The short answer: when a vendor files for Chapter 11, the service usually keeps running for a while, your contract usually stays in force, and your termination-for-insolvency clause generally cannot be enforced against them. What changes is that your vendor's future is decided by a sale process you do not control. The useful work is done before that day: know which vendors you depend on, keep your data exportable, keep a tested fallback for anything critical, and do not prepay a fragile vendor a year in advance.

## What actually happens when a vendor files

Founders tend to picture bankruptcy as the lights going off. In a US Chapter 11 case that is rarely day one. The company keeps operating while it looks for a buyer or a restructuring, because a running service is worth far more than a dead one. In the Character.AI case, operations were reported to continue through a sale process expected to close in late November or early December.

For a customer, the next few weeks look like this:

- **The service probably stays up.** Staff may leave, support may slow, and the roadmap stops, but the API keeps answering.
- **Your contract is now an asset or a liability in the case.** The vendor can generally choose to keep (assume) or reject contracts like yours, and can often assign them to a buyer even if your contract says it cannot be assigned.
- **Your termination clause may not help.** Many contracts let you terminate if the vendor becomes insolvent. In US bankruptcy, clauses that trigger only on the filing itself are generally unenforceable against the debtor. You may still be able to leave for other reasons, such as ordinary notice terms, so check with a lawyer.
- **Prepaid fees become a claim.** If you paid a year upfront and the service ends, the unused part is typically an unsecured claim in the case, which often recovers cents on the dollar, if anything.
- **Your data may be part of the sale.** Customer data is often among the assets a buyer wants. US bankruptcy courts look at the debtor's privacy commitments when personal data is sold, but your company's own data and prompts can still end up with a buyer you did not choose.

This is different from an acquisition announced in good times, which is covered in [what to do when a critical vendor gets acquired](/post-critical-vendor-acquired). In bankruptcy, the buyer is chosen for the creditors' benefit, not yours, and the outcome may be a shutdown.

## Why AI vendors deserve extra attention right now

Three things make AI vendors riskier than the average SaaS tool for an early-stage company.

First, many are young and expensive to run. Inference costs are real, and a vendor pricing below cost to win customers depends on raising again. If the round does not come, the product does not either. [Why your AI vendor's repricing hits your margin](/post-ai-vendor-repricing-margin) covers the softer version of this, a price rise; bankruptcy is the hard version.

Second, they sit deep in the product. A voice provider, a retrieval service, or an agent platform is often wired into the core user flow, with prompts, fine-tuning, or evaluation data tuned to that one vendor. Replacing it is not a configuration change.

Third, they often hold data you cannot easily recreate: conversation history, embeddings, tuned prompts, labelled examples. If it only exists inside the vendor, it disappears with them.

## The checks to run this week

You do not need a legal review of every tool. You need one honest list.

### 1. List the vendors your product cannot work without

Go through the product's core flows and write down every third party in the request path. For each one, ask: if this API returned errors for a week, what would customers see? Anything where the answer is "the product stops" goes to the top. [Vendor concentration in technical diligence](/post-vendor-concentration-diligence) explains why investors ask the same question.

### 2. Check the vendor's health signals

You cannot see their bank account, but you can see signals: when they last raised and how much, whether hiring has stopped, whether senior people have left, whether support response times have changed, and whether pricing suddenly shifted toward annual prepayment. None is proof. Two or three together are a reason to move faster on a fallback.

### 3. Make sure your data comes out

For each critical vendor, confirm that you can export everything you would need to rebuild elsewhere, in a usable format, and actually do it once. Prompts and configuration belong in your own repository, not only in the vendor's dashboard. If they store embeddings or history, schedule a regular export to your own storage.

### 4. Have a tested fallback for anything critical

A fallback does not need to be equal in quality. It needs to keep the product working while you migrate. For model APIs that may mean a second provider behind a thin interface, as described in [when a vendor abstraction layer is worth it](/post-vendor-abstraction-layer). The key word is tested: a fallback nobody has run in production is a plan, not a fallback.

### 5. Stop prepaying fragile vendors

An annual prepayment discount of 15 or 20 percent looks good on a vendor you trust to be there in a year. On a vendor you are unsure about, monthly billing is cheap insurance. If you are already prepaid, note the renewal date and decide before it, not after.

## Contract terms worth asking for next time

When you sign or renew with a vendor that is critical and young, these are reasonable asks, especially if you are paying meaningful money:

- **Data export on demand and on termination,** in a documented format, at no extra charge.
- **Notice of a change of control or a material change to the service,** with a right to terminate and get a refund of unused prepaid fees on a change of control. This does not override bankruptcy law, but it helps in the more common case of a sale outside court.
- **A wind-down period** of at least 60 to 90 days of continued service if they discontinue the product.
- **Source code or model escrow** for software you license and could run yourself. Where a contract is a true license of intellectual property, US bankruptcy law gives licensees some protection if the vendor rejects the license, and escrow agreements tied to such licenses can stay enforceable. Pure hosted services get much less protection. [When a customer asks for source code escrow](/post-customer-wants-source-code-escrow) covers how escrow works from the other side.

A small startup will not get all of these from a large vendor. From a young vendor that wants your logo, you often can.

## If one of your vendors has already filed

1. Read the vendor's announcement and any customer notice carefully for the expected timeline.
2. Export your data now, while the service and staff are still there.
3. Start the migration to your fallback, or start building one, on the assumption that the service ends.
4. Hold off on new prepayments or long renewals.
5. If you have prepaid fees or a significant contract, ask a lawyer whether to file a claim and how the sale process affects your contract.
6. Tell your own customers only what is true and what you are doing, if the vendor is visible in your product.

The worst position is to wait for the sale outcome before acting. If a buyer keeps the service, you have lost nothing by preparing. If they do not, the preparation is the difference between a migration and an outage.

## How I approach it

In an engagement, the vendor list is one of the first things I build, with a column for "what breaks if this disappears" and another for "how we would replace it." It takes an afternoon and it changes what gets prioritised. If you want that review done on your stack, the [technical teardown](/teardown) includes it, or you can [book a call](/book-a-call) and we can go through your critical vendors together.

## FAQ

### What happens to my contract if a SaaS vendor files for Chapter 11?

The vendor generally keeps operating and can choose to keep, reject, or assign your contract to a buyer. Clauses that let you terminate just because the vendor filed for bankruptcy are generally unenforceable in the US. Ask a lawyer about your specific contract.

### Will I get my prepaid annual fees back if my vendor goes bankrupt?

Usually not in full. Unused prepaid fees typically become an unsecured claim in the bankruptcy case, which often recovers only a fraction. Monthly billing is safer for vendors whose future is uncertain.

### How can I tell if an AI vendor is at risk of failing?

Watch for signals: no recent funding, a hiring freeze, departures of senior staff, slower support, and sudden pushes toward annual prepayment. None is proof alone; several together are a reason to prepare a fallback.

### Does source code escrow protect me if a vendor goes bankrupt?

It can for software you license and could run yourself, because US bankruptcy law gives intellectual property licensees some protection and escrow tied to the license can remain enforceable. It does much less for a purely hosted service you could not run without the vendor.
