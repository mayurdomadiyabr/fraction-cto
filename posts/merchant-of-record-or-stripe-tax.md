---
title: Merchant of record or Stripe Tax? Who should own your sales tax
slug: merchant-of-record-or-stripe-tax
date: '2026-10-14T03:47:12.197Z'
category: Decisions
excerpt: >-
  Paddle-style merchants of record cost more per sale but take on VAT and sales
  tax filing. How to decide based on your customers and markets.
description: >-
  Merchant of record vs Stripe plus a tax engine: what each costs, who files VAT
  and sales tax, and how to choose for your startup.
author: The founder of Fraction
readTime: 6
draft: false
---

If you sell software to customers in more than a handful of countries or US states, you have two real options for sales tax and VAT. Use Stripe (or another processor) plus a tax engine and stay the legal seller, or use a merchant of record such as Paddle that resells your product and takes on the tax filing. The merchant of record costs more per sale. Stripe plus a tax tool is cheaper but leaves registrations and returns with you.

I get asked this most often around the first international customer, or the first time an accountant mentions "nexus". The founder usually thinks it is a payments question. It is a question about who carries tax and compliance work for the next three years, and it is much easier to answer before you have a thousand subscriptions on one setup.

This is not tax advice. Tax rules depend on where you are incorporated, where your customers are, and whether they are businesses or consumers. Use what follows to frame the conversation with your accountant, not to replace it.

## What a merchant of record actually does

A merchant of record (MoR) is the legal seller in the transaction. When a customer in Germany buys your product through Paddle, Paddle sells to the customer and you sell to Paddle. Paddle charges the right VAT, files the returns, handles refunds and chargebacks, and pays you the net amount.

With Stripe on its own, you are the seller. Stripe moves the money. Stripe Tax can calculate the right tax on each invoice and tell you when you have crossed a registration threshold somewhere, but it does not register your company in that place or file the return. That work is still yours, or your accountant's, or a filing service you pay for separately.

That is the whole difference. Everything else follows from who is legally on the hook.

## The price gap, roughly

Check current pricing pages before you decide, because several providers changed their fees in 2026. As of this writing:

- Paddle lists an all-in rate of 5% plus 50 cents per transaction.
- Stripe's standard US card rate is 2.9% plus 30 cents, and Stripe Tax adds a percentage on top of transactions where tax is calculated. Billing, fraud tools and international cards add more.
- Lemon Squeezy, which Stripe acquired in 2024, also sits at 5% plus 50 cents, and Stripe now has its own merchant-of-record offering.

On a 49 dollar monthly plan, the gap between a 5% plus 50 cents MoR and a Stripe setup around 3.5% all in is roughly a dollar a transaction. At 200 customers that is about 200 dollars a month. At 2,000 customers it is about 2,000 dollars a month, or 24,000 dollars a year. That is the number to compare against the cost of doing the compliance work yourself.

## What the compliance work looks like if you stay the seller

Founders underestimate this side because nothing happens until it suddenly does.

**EU VAT.** If your company is outside the EU and you sell digital services to EU consumers, there is generally no minimum threshold. The 10,000 euro cross-border threshold you may have read about applies to sellers established in the EU. A non-EU seller can register once under the non-Union One Stop Shop scheme and file a single quarterly return covering all member states, but that is still a registration, a return every quarter, and records to keep. Sales to EU businesses usually fall under reverse charge, which means collecting and validating VAT numbers properly.

**UK VAT.** A separate registration from the EU since Brexit, with its own rules for digital services sold to UK consumers.

**US sales tax.** Since the 2018 Wayfair decision, states can require you to collect tax once you pass an economic threshold, often 100,000 dollars of sales into that state per year, with some large states setting higher figures. Whether SaaS is taxable at all varies by state. You need to track sales per state, register where you cross, and file on each state's schedule.

None of this is hard on its own. Together it is a recurring workload that grows with every new market, and the cost of getting it wrong is back taxes plus penalties, which tend to surface at the worst moment: during diligence, when an acquirer or investor asks for proof that you collected tax where you should have. I have seen that question add weeks to a deal. It is one of the items in [what an acquirer checks in technical diligence](/post-acquirer-technical-diligence), even though it starts as a billing choice.

## How I would decide

These are the questions I walk founders through.

### Who are your customers?

If you sell mainly to businesses in your own country, a merchant of record buys you little. Reverse charge and B2B exemptions remove much of the consumer VAT burden, and your accountant can probably handle the rest. If you sell to consumers or small teams worldwide through a self-serve checkout, the MoR does far more for you.

### How many jurisdictions, realistically, in two years?

Not the pitch-deck answer. Look at where your trial signups came from last quarter. If 90% are in one country, you have one tax problem. If they are spread over 40 countries, you have 40.

### Who in the company would own filings?

At pre-seed this is usually the founder, which means it competes with sales. If nobody would own it, paying a merchant of record is often cheaper than the founder's time, and much cheaper than penalties.

### What does your billing model need?

Merchants of record are built for standard subscriptions and one-off digital purchases. If you need invoiced annual contracts with custom terms, usage-based billing, or purchase orders, check carefully what the MoR supports. Some enterprise buyers will not accept an invoice from a third party they have never heard of, which matters as you move upmarket. We covered the wider build-or-buy side in [whether to build billing or use Stripe](/post-build-billing-or-use-stripe).

### How hard will it be to leave?

This is the one most founders skip. Card details stored with one provider do not always move cleanly to another. Ask any provider in writing how a migration out works, whether they will export payment tokens to a new processor, and how long it takes. If the answer is vague, assume part of your base will need to re-enter card details when you switch.

## A sensible default

For a self-serve product with customers in many countries and no dedicated finance person, I usually recommend starting with a merchant of record and putting a review on the calendar at a revenue level where the fee gap clearly exceeds the cost of a good accountant plus a tax tool. For a sales-led B2B product selling mainly into one or two countries, I usually recommend Stripe plus a tax engine from day one, with an accountant who already handles multi-state filings.

Whichever you choose, keep your own records of customer location and VAT status, and keep billing logic behind a thin layer in your code so a later switch is a project, not a rewrite.

If you are about to make this choice and want a second opinion on your mix of customers and markets, [book a call](/book-a-call) and we will work through it with your actual numbers.

## FAQ

### Is a merchant of record worth it for a US-only SaaS?

Usually less so. If all your customers are in the US, a tax engine plus an accountant who tracks state thresholds is often enough, and cheaper. The case for an MoR gets stronger once you have meaningful consumer sales abroad.

### Does Stripe Tax file my returns?

Stripe Tax calculates tax and monitors thresholds. Registration and filing remain your responsibility unless you add a filing service. Check Stripe's current product pages, because what is offered has been changing.

### Can I switch from a merchant of record to Stripe later?

Yes, and many companies do once revenue grows. The hard parts are moving saved payment methods and changing who appears on customer invoices. Ask about exporting payment data before you sign, not when you want to leave.

### Do I need to charge VAT on my first EU sale?

If your company is outside the EU and the buyer is an EU consumer, generally yes. There is no minimum threshold for non-EU sellers of digital services. Confirm the details for your situation with a tax adviser.
