---
title: Your enterprise customer wants source code escrow. Now what?
slug: customer-wants-source-code-escrow
date: '2026-10-02T15:01:58.108Z'
category: Vendors
excerpt: >-
  Escrow is a normal enterprise ask. What a SaaS deposit should contain, release
  terms to negotiate, and who pays.
description: >-
  What source code escrow means for a SaaS startup: what to deposit, release
  conditions to negotiate, use rights, verification and who pays.
author: The founder of Fraction
readTime: 6
draft: false
---

A large prospect is ready to sign. Then procurement sends one more line: "Vendor will deposit source code with an independent escrow agent." You are a twelve-person SaaS company. You have never heard of an escrow agent, your lawyer has opinions, and your engineer is worried about handing the codebase to anyone.

The short answer: source code escrow is a normal enterprise request, and saying yes is usually cheaper than losing the deal. What matters is what you agree to deposit, what events release it, and whether you can keep the deposit current without it becoming a second job. Negotiate those three things and escrow becomes a line item, not a risk.

## Why enterprise buyers ask for escrow

The buyer is not trying to steal your code. They are managing one specific fear: that they build a business process on your product, and then you disappear. Startups fail, get acquired, or quietly stop maintaining a product. A bank, insurer, or hospital system that depends on you has to show its own risk committee a plan for that day.

Escrow is that plan. An independent third party holds a copy of the materials needed to keep the product running. If an agreed event happens, such as insolvency, ceasing to trade, or failing to support the product as contracted, the agent releases the materials to the customer. Until then, nobody sees anything.

It shows up most often in regulated industries and in deals where your product sits in the middle of a critical workflow. If you are selling a small add-on tool, push back. If you are becoming the system of record for a large customer, expect it.

## Why plain source code escrow does not work for SaaS

The traditional model came from on-premise software: the customer already ran the binaries, so the source code alone let them maintain it. SaaS is different. If you vanish, your customer does not have your servers, your cloud account, your deployment pipeline, or your data. A zip file of source code would not give them a running service. Specialist escrow providers say this openly, and many now offer SaaS-specific arrangements that include deployment scripts, infrastructure configuration, and recovery documentation, not just code ([Escode on SaaS escrow](https://www.escode.com/saas-escrow/)).

So the useful question is not "will we deposit code?" It is "what would someone need to rebuild and run this service without us?" That usually means:

- Source code for every service the customer relies on, plus any internal libraries
- Infrastructure as code, or written build and deployment instructions if you do not have it
- A list of third-party services and how to replace your accounts with theirs
- Database schema and a description of how their data is stored
- Enough documentation for a competent engineering team to stand it up

If writing that list makes you nervous, that is information. Our post on [the server nobody can rebuild](/post-server-nobody-can-rebuild) covers why a startup should be able to do this anyway, escrow or not.

## The three terms that matter in negotiation

### Release conditions

This is the clause that decides whether escrow is harmless or dangerous for you. Good release conditions are objective and narrow: bankruptcy or insolvency, ceasing to trade, or failing to fix a serious support failure within a defined cure period after written notice. Avoid vague triggers such as "vendor fails to perform" or "customer reasonably believes support is inadequate." Legal guidance on escrow notes that ambiguous triggers are one of the most common reasons these arrangements fail in practice ([Oziel Law on escrow in SaaS agreements](https://oziellaw.ca/escrow-saas-agreements/)).

Watch for an acquisition trigger. Some buyers want release if you are acquired. A narrower version, release only if the acquirer discontinues the product or support, is usually acceptable. A trigger on any change of control can complicate a future sale, so get legal advice before agreeing to it.

### Use rights after release

If materials are released, what can the customer do with them? The reasonable answer is: use and maintain the software for their own internal operations, for the remaining term of the contract or a defined period. Not resell it, not offer it as a service to others. Write that down.

### Deposit frequency and verification

Escrow providers offer levels of verification, from simply confirming that a deposit arrived to fully building the code and testing that it runs. Higher verification costs more and takes more of your engineers' time. For an early company, agree a sensible cadence, such as a deposit each quarter or after each major release, and the lightest verification the customer will accept. Automate the deposit from your repository if the provider supports it, so it does not depend on someone remembering.

## Who pays, and how to price it

Escrow has real costs: the agent's annual fee, any verification fees, and engineering time to prepare and maintain deposits. Fees vary by provider and verification level, so get quotes rather than guessing. The common pattern is that the customer who asks for it pays, either directly or through a line in your pricing. If you are offering escrow to several enterprise customers, a multi-beneficiary arrangement where one deposit serves many customers is usually cheaper than one agreement per customer.

Do not absorb the cost silently. A customer that demands escrow is a customer whose deal size should carry it.

## What escrow tells you about your own house

Preparing a first escrow deposit is an excellent forcing function. Founders often discover that the deploy depends on one engineer's laptop, that a critical service lives in a personal cloud account, or that nobody can say which third-party keys the product needs. Those are business risks whether or not anyone ever opens the escrow.

The same gaps come up in a [security questionnaire for a big deal](/post-security-questionnaire-deal) and in technical diligence when you raise. Fixing them once pays off three times.

## Where a senior technical voice helps

The legal terms belong to your lawyer. The technical scope, what goes in the deposit, what "able to run" really means for your stack, and how much verification your team can sustain, needs someone who can read both the contract and the codebase. A [technical teardown](/teardown) will tell you how far you are from a deposit that would actually work. If a deal is waiting on this clause, [book a call](/book-a-call) and we will go through the escrow schedule with you.

## Frequently asked questions

### Does source code escrow mean the customer sees our code?

No. The escrow agent holds the materials. The customer only receives them if an agreed release condition happens, such as insolvency or a sustained failure to support the product.

### Should a startup agree to source code escrow?

For a large enterprise deal where your product is critical to the customer, usually yes, on narrow and objective release conditions with limited use rights after release. For small deals, it is reasonable to decline or to ask the customer to cover the cost.

### What should a SaaS escrow deposit include?

Enough for a competent team to rebuild and run the service: source code, infrastructure configuration or build instructions, a list of third-party dependencies, the database schema, and operating documentation.

### Who pays for software escrow?

Commonly the customer who requests it, either directly or through pricing. Costs depend on the provider and how much verification is required, so get quotes before you agree to absorb it.

### Is this legal advice?

No. Escrow agreements are contracts with real consequences. Use this to prepare the technical side, and have a lawyer review the terms.
