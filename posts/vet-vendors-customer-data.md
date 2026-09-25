---
title: Your vendors hold your customer data. Did anyone check?
slug: vet-vendors-customer-data
date: '2026-09-25T02:44:35.438Z'
category: Vendors
excerpt: >-
  Five questions to ask before a new vendor gets customer data, and the simple
  subprocessor list your first enterprise customer will ask for.
description: >-
  A five-question vendor check and subprocessor list for early startups: DPAs,
  SOC 2 Type II, data location, and deletion, before a customer asks.
author: The founder of Fraction
readTime: 6
draft: false
---

Every early startup plugs in vendors that touch customer data: an email provider, a support desk, an analytics tool, an AI API, a data enrichment service. Most of them are signed up with a credit card by whoever needed the tool that week. Nobody checks what the vendor does with the data, and nobody finds out until an enterprise customer's security team asks for your subprocessor list and you realize you do not have one.

You do not need a procurement department to fix this. You need a short, repeatable check you run before a new vendor gets real customer data, and a list of who already has it. This post is the version I set up with early-stage clients.

## Why this matters earlier than founders think

There are three reasons, and none of them requires you to be big.

First, the law. If you handle personal data of people in the EU or UK, GDPR Article 28 requires a written contract with any processor that handles that data on your behalf, and the processor needs your authorization before bringing in its own subprocessors. Many US state privacy laws, such as California's, have similar requirements for service provider contracts. Most serious vendors offer a standard data processing agreement (DPA). The failure is not that one is unavailable. It is that nobody at the startup ever accepted or filed it.

Second, your customers. The first larger customer will send a security questionnaire, and one of the standard questions is a list of your subprocessors and how you vet them. I wrote about how those questionnaires stall deals in [the security questionnaire that stalls your biggest deal](/post-security-questionnaire-deal). Vendor vetting is one of the sections founders most often have nothing for.

Third, your own risk. A vendor breach is your breach as far as your customers are concerned. You cannot prevent it, but you can limit what each vendor holds and know who to call.

## The five questions I ask before a vendor gets customer data

This is deliberately short. A 200-question vendor assessment will not get done at a ten-person company. Five questions will.

### 1. What data will it actually receive?

Write down the specific fields: email addresses, names, payment details, support conversations, product usage events, uploaded files. Then ask whether it needs all of them. Analytics tools rarely need names. Enrichment tools rarely need anything beyond a work email. Sending less is the cheapest control you have.

### 2. Is there a DPA, and have we accepted it?

For most SaaS vendors the DPA is a page on their site or a click-through in account settings. Accept it, save a copy with the date, and note it. If a vendor handling personal data has no DPA at all, that tells you how seriously it takes the rest.

### 3. What independent evidence of security exists?

Look for a SOC 2 Type II report or an ISO 27001 certificate. A Type II report covers how controls worked over a period, usually six to twelve months; a Type I only describes controls at a point in time. Neither proves a vendor is safe, and neither replaces the contract. They are evidence that someone outside the vendor has looked. For a small vendor without either, ask for their security page and a short written answer on encryption, access control, and breach notification.

### 4. Where is the data stored, and who else touches it?

Ask for the vendor's own subprocessor list. Most mature vendors publish one. If your customers care about data location, check the regions. If the vendor uses an AI model provider underneath, that provider is now in your chain too.

### 5. How do we get the data out, and deleted?

Check you can export your data and that deletion on account closure is documented. This is also your exit plan if the vendor is acquired, changes pricing, or shuts down. The reliability side of that risk is covered in [one vendor can take your whole product down](/post-vendor-concentration-diligence).

## The subprocessor list you should already have

The output of all this is one simple document, a spreadsheet is fine, with a row per vendor that touches personal data:

- Vendor name and what it is used for
- Data it receives
- DPA accepted (yes, date, link to saved copy)
- Security evidence (SOC 2 Type II, ISO 27001, or notes)
- Data location
- Internal owner

Keep it current when someone adds a tool. That list is what an enterprise customer asks for, what an investor's diligence team asks for, and what your privacy policy should match. If your policy promises things your vendor setup does not deliver, that gap is its own problem, covered in [your privacy policy promises what your code does not do](/post-privacy-policy-code-mismatch).

## Who should own this

At an early company, one named person, usually whoever runs engineering or operations, owns the list and the five-question check. The rule is simple: no new vendor gets production customer data until its row exists. Trials with fake or internal data can happen without the check; the gate is real customer data.

That one rule does most of the work. It stops the quiet sprawl where every team connects its own tools, which I described in [the integration sprawl nobody decided to build](/post-integration-sprawl).

## An illustrative example

A composite case: a 12-person B2B SaaS company is closing its first six-figure contract. The customer's questionnaire asks for a subprocessor list. The team finds 23 tools with some access to customer data. Nine have DPAs nobody accepted. Two, an old enrichment tool and a trial analytics product, are still receiving full customer records though nobody has logged into them in months.

The cleanup took about two days: remove the two dead tools and revoke their keys, accept the nine DPAs, trim the fields sent to analytics, and write the list. The questionnaire answer went from "we will get back to you" to a document. None of this needed a security hire. It needed someone to own it for two days.

## When to get help

If a large customer or an investor is about to ask about your vendors and you are not sure what you have, a short outside review finds the gaps faster than a questionnaire deadline will. That is part of what a [technical teardown](/teardown) looks at, and you can [book a call](/book-a-call) to talk through your setup.

This post is practical guidance, not legal advice. For contract terms in your jurisdiction, ask counsel.

## FAQ

### Do I need a DPA with every vendor?

You need one with every vendor that processes personal data on your behalf if GDPR or similar laws apply to you. Vendors that never touch personal data, such as a design tool used only with internal files, generally do not need one.

### Is a SOC 2 report enough to approve a vendor?

No. It is useful evidence about security controls, but it does not replace the DPA, and it does not tell you whether the vendor needs the data you are about to send.

### How often should we review the subprocessor list?

Update it whenever a vendor is added or removed, and do a quick full review every six months or before a fundraise or large customer deal.

### What if a key vendor has no SOC 2 report?

That is common for small vendors. Ask for a written summary of their security practices, limit the data they receive, and note the decision and the reason in your list.
