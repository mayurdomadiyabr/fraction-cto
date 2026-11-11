---
title: A customer asks for all their data. Build export before they do
slug: customer-data-export-build-before-asked
date: '2026-11-11T04:03:56.782Z'
category: Decisions
excerpt: >-
  Why a self-serve full data export is cheap to build early, what a good one
  includes, and the rules pushing it.
description: >-
  Why to build a full customer data export early: GDPR portability, EU Data Act
  switching, what to include, and cost.
author: The founder of Fraction
readTime: 5
draft: false
---

Sooner or later a customer asks for all of their data. Sometimes they are leaving, sometimes their own auditor wants it, sometimes a larger buyer will not sign without knowing they can get out. The right move for most early B2B products is to build a plain, self-serve full export before the first request arrives: one button, standard formats, complete data. It is cheap to build early, expensive to improvise under deadline, and increasingly a legal expectation rather than a courtesy.

This is not legal advice; check your obligations with a lawyer for your markets. But the engineering decision is clear enough to make now.

## Why the first request is always a fire drill

Without an export feature, the first request lands on an engineer as a one-off job. They write queries against production, discover that half the data lives in a different service, that file attachments are in object storage with no customer mapping, and that some fields only make sense with lookups to other tables. A week later the customer gets a zip of CSVs with internal IDs nobody can interpret.

Then the second customer asks, and the script no longer matches the schema.

A one-off export also creates risk. A hurried query that joins on the wrong tenant column can send one customer another customer's records. If your isolation depends on every query remembering a filter, my notes on [how tenant data stays apart](/post-tenant-isolation-by-memory) are worth reading before anyone writes that script.

## The legal pressure is growing

Two sets of rules matter for many startups selling into Europe:

- **GDPR data portability.** Article 20 gives individuals the right to receive personal data they provided in a structured, commonly used and machine-readable format. Article 12 expects a response without undue delay and in any event within one month, extendable in some cases. If your users are individuals, or your customers' end users are, you need a way to produce this.
- **The EU Data Act and switching.** The Data Act has applied since 12 September 2025 and includes rules on switching between data processing services, which commentators read as covering a wide range of cloud and SaaS offerings. Providers must support customers moving their data and digital assets to another provider, and per law-firm summaries such as [Pinsent Masons' guide](https://www.pinsentmasons.com/out-law/guides/switching-porting-rules-eu-data-act), switching charges are capped at cost until 12 January 2027 and then generally prohibited.

Whether and how these apply to you depends on what you sell and to whom. The practical takeaway does not: a customer's ability to take their data out is becoming a product requirement, and contracts with larger buyers increasingly ask for it in writing.

## What a good export looks like

### Complete

Every object a customer created or uploaded: records, comments, history where it matters, settings, user lists, and files. If you leave out attachments because they are harder, the export fails the one test that matters: could the customer actually move to another tool with it?

### Readable without your code

Use standard formats. CSV for tabular data, JSON for nested structures, original files for attachments. Replace internal IDs with readable references where you can, or include the lookup tables. Add a short README in the export explaining each file.

### Self-serve, with sensible limits

An admin should be able to start an export from settings and get a download link by email when it is ready. Generate it as a background job, not a request that times out. Rate-limit it, log who requested it, and expire download links after a set period.

### Secure

A full export is the most sensitive file your product produces. Restrict it to admins, require a recent sign-in, notify other admins when an export is requested, and store generated files encrypted with short retention. Your [data retention rules](/post-data-retention-policy-yet) should cover export files too.

## How much it costs to build

For a typical early B2B product with one main database and object storage, a first full export is usually a small project: a background job that walks each table by tenant, writes files, zips them with attachments, and emails a link. In my experience, a competent engineer can ship a solid first version in one to two weeks; that is a judgment from projects I have seen, not a benchmark. The cost rises sharply if your data is spread across several services with no consistent tenant key, which is itself a finding worth knowing about.

Two design choices keep it cheap long term:

1. **Generate the export from the same data model your app uses**, not a hand-written list of tables. New tables should show up in the export by default, or fail a test if they are not mapped.
2. **Test it.** Add an automated test that creates a sample tenant, runs an export, and checks the output contains every object type. Exports rot quietly when nobody uses them for months.

## Export is also a sales and diligence asset

Enterprise buyers ask about exit in security questionnaires and contract negotiations. Saying "admins can export everything, in standard formats, from settings" closes that question in one line. Investors doing diligence ask similar questions about [where customer data lives](/post-customer-data-location-diligence) and how it can be retrieved. A working export is evidence of a data model you understand.

There is a counterintuitive commercial effect too. Making it easy to leave reduces the fear of signing. Founders worry an export button increases churn. In practice customers who want to leave will leave anyway; the export decides whether they leave angry and tell people.

## What to skip in the first version

- **Scheduled exports and direct pushes to warehouses.** Useful later, not needed now.
- **Import from your own export format.** Nice for round-tripping, rarely requested early.
- **Per-field selection.** Export everything; let the customer filter.

## FAQ

### Do we legally have to offer a data export?

It depends on your markets, customers and the data involved. GDPR portability and the EU Data Act switching rules apply to many businesses serving Europe. Get legal advice for your situation, but plan to have an export regardless.

### Can we charge for exports?

Charging for routine access to a customer's own data is increasingly restricted in Europe and damages trust everywhere. Charging for genuinely custom migration work is a different conversation. Keep the standard export free.

### What format should we use?

CSV for tables, JSON for nested data, original files for uploads, plus a README. Avoid proprietary formats or database dumps the customer cannot open.

### How do we stop exports being used to steal data?

Restrict to admins, require re-authentication, notify other admins, log every request, and expire links. Treat export as a privileged action, not a convenience.

If you want a quick review of whether your data model supports a clean export, a [technical teardown](/teardown) covers it, or you can [book a call](/book-a-call).
