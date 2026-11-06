---
title: Investors ask where your customer data lives. Answer in two lines
slug: customer-data-location-diligence
date: '2026-11-06T21:14:45.226Z'
category: Fundraising
excerpt: >-
  Data location is now a seed and Series A diligence question. A few days of
  inventory gives you a clear, honest answer.
description: >-
  How to answer the diligence question on where customer data is stored and
  which processors receive it, plus the gaps founders usually find.
author: The founder of Fraction
readTime: 6
draft: false
---

When an investor asks where your customer data lives, the right answer fits in two sentences: which cloud regions hold the data, and which outside services receive a copy of it. If you cannot say that without checking with your engineer, you are not ready for the question, and at seed and Series A the question now comes up more often than founders expect. The fix is usually a few days of inventory work, not a re-architecture.

Investors and their lawyers ask because data location drives legal exposure. If you sell to European customers, the GDPR restricts transfers of personal data outside the EU unless a recognised safeguard applies. If you sell to enterprises, their security reviews will ask the same thing, and a vague answer slows or kills deals. Diligence is simply asking the question before your customers do.

## What investors are actually trying to learn

Nobody at seed expects a formal data protection programme. What the question is really probing is whether you know your own system. A founder who answers "our primary database is in AWS Frankfurt, backups stay in the same region, and personal data goes to three processors: our email provider, our analytics tool, and our support desk" sounds like someone in control. A founder who answers "it's in the cloud, I think US" sounds like someone who will be surprised later.

There are three underlying concerns.

### Regulatory exposure

If you hold personal data about people in the EU or UK and move it to another country, you need a legal basis for the transfer. For the US, that is often the EU-US Data Privacy Framework, if the receiving company is certified under it, or Standard Contractual Clauses. Most large vendors have this paperwork in place. The risk is the small tool somebody connected one afternoon that quietly copies customer records to a server you never thought about.

### Customer contract risk

Enterprise customers often write data location into contracts: data stays in the EU, or in the customer's country, or is never used to train models. If your sales team agreed to that and your architecture does not support it, the investor is looking at a broken promise sitting inside your revenue. I covered the general version of this in [when your privacy policy promises what your code does not do](/post-privacy-policy-code-mismatch).

### Future cost

If your biggest prospects will require regional hosting and you built everything in one region with hardcoded assumptions, moving later is a project. Investors want to know whether that project is weeks or quarters away.

## How to build the answer in a few days

You do not need a consultant for the first version. You need one engineer, a spreadsheet, and access to your cloud console and billing.

### List every place customer data is stored

Start with the obvious: primary database, file storage, backups, caches, search indexes. For each, record the provider and region. Then check the less obvious places, which is where the surprises live: log files that capture request bodies, error tracking tools that store stack traces with user data, staging environments seeded with production copies, and data exports sitting on someone's laptop.

### List every service that receives customer data

Go through your vendor invoices, not just your architecture diagram. Every paid tool is a candidate. For each one that receives personal data, note what it receives, where it processes it, and whether you have a data processing agreement in place. AI model providers belong on this list now; if prompts include customer content, that content goes to the provider, and their retention and training terms matter.

### Write the one-paragraph summary

Turn the spreadsheet into a short paragraph for the data room: where data is stored, which processors receive it, how transfers outside the region are covered, and any known gaps with a date to close them. That paragraph, plus the spreadsheet as backup, answers most of what a seed or Series A reviewer will ask. It belongs in the [technical half of your data room](/post-technical-data-room).

## Gaps that come up most often

When founders do this inventory for the first time, the same findings show up.

- **Production data in staging.** A copy of real customer records used for testing, often with weaker access control than production.
- **Logs with personal data.** Request logging that captures email addresses, names, or worse, kept indefinitely in a third-party log tool.
- **An unlisted processor.** A chat widget, a session-recording tool, or an AI writing assistant receiving customer data with no agreement in place.
- **Backups in a different region.** The primary database is in the EU, but backups replicate to a US region by default.
- **No deletion path.** No reliable way to remove one customer's data across every system when they ask.

None of these is unusual at an early company, and none needs to block a round. What matters is that you found them before the investor did, and that each has an owner and a fix date. A known gap with a plan reads as maturity. An unknown gap found by a reviewer reads as a team that does not look closely.

## What not to do

Do not answer with more certainty than you have. "All data stays in the EU" is a claim a reviewer may test, and if one tool sends records to the US, you have turned a minor gap into a credibility problem. "Primary storage is in the EU; two processors are US-based and covered by their standard transfer terms; here is the list" is both safer and more impressive.

Do not start a large migration just because the question was asked. If your current customers are fine with your setup, document it and note what would change if an enterprise customer required regional hosting. That plan is enough at this stage.

## Where this fits in diligence

Data location is one slice of the security and compliance part of technical diligence, alongside access control, secrets handling, and incident history. At seed it is usually a short conversation. By Series A, and especially with enterprise revenue, expect the reviewer to want the processor list and to compare it against your privacy policy. If a large customer is also running a security review, the same material answers both, which is why I recommend preparing it once and keeping it current. The [security questionnaire that stalls your biggest deal](/post-security-questionnaire-deal) usually asks the same thing in more words.

If you want an outside pass over your data map before a raise, it is a standard part of a [technical teardown](/teardown), or [book a call](/book-a-call) and we can talk through what your reviewer is likely to ask.

## FAQ

### Do we need a formal data protection officer before we raise?

Usually not at seed. Under the GDPR, a data protection officer is required in specific cases, such as large-scale processing of sensitive data or systematic monitoring. Many early startups do not meet those conditions. Check your own situation with a lawyer, but do not assume it blocks a round.

### Is hosting in the US a problem for European customers?

Not automatically. Transfers can be covered by the EU-US Data Privacy Framework for certified recipients, or by Standard Contractual Clauses. The problem is not knowing which mechanism covers which vendor, or having a customer contract that requires EU-only storage.

### How often should we update the data inventory?

Whenever you add a tool that touches customer data, and as a quick review each quarter. The easiest control is making the inventory part of approving any new vendor.

### Does sending customer data to an AI model provider count?

Yes. If prompts or files include personal data, the provider is a processor. Check whether it retains the data, whether it uses it for training, and where it processes it, and add it to your list.
