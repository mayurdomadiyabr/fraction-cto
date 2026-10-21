---
title: Customers want to import a spreadsheet. Build the importer or buy one?
slug: customer-spreadsheet-import-build-or-buy
date: '2026-10-21T11:48:11.149Z'
category: Decisions
excerpt: >-
  Spreadsheet imports are a data quality and support problem, not a parsing
  problem. When to build a strict importer, buy one, or do it by hand.
description: >-
  Customers want to upload a spreadsheet. When to build a strict importer, buy
  an embedded one, or load the first files by hand, and what to get right.
author: The founder of Fraction
readTime: 6
draft: false
---

Sooner or later every B2B product gets the same request: "Can we just upload our spreadsheet?" New customers have their contacts, products, employees or inventory in a CSV or Excel file, and typing it in by hand is a deal-breaker. The honest answer for most early-stage teams is to build a narrow importer for your one or two most important objects, keep it strict, and only buy an embedded import product when imports become a frequent, high-variety part of onboarding. The mistake is not building or buying. It is underestimating how messy real customer files are.

An importer looks like a parsing problem. It is really a data quality and support problem.

## Why imports are harder than they look

A demo importer takes a day: read the file, loop over rows, insert records. Then real files arrive.

### Files are messier than your test data

Expect every one of these in your first month:

- Encoding problems. A file saved from Excel on one machine may not be UTF-8, so names with accents turn into garbage characters.
- A byte-order mark at the start of the file that silently renames your first column.
- Dates in three formats in the same column, and no way to tell whether 03/04 means March 4 or April 3.
- Numbers with currency symbols, thousands separators, or a comma as the decimal point.
- Header rows that are not on line one, merged cells exported as blanks, and totals rows at the bottom.
- Column names that never match yours: "Email Address", "E-mail", "email_addr".

A parsing library, such as Papa Parse in JavaScript or the standard CSV modules in most languages, handles quoting and delimiters. It does not decide what a value means. That is your job.

### Mapping is a user interface, not a config file

Customers need to match their columns to your fields, see a preview, and fix problems before anything is saved. Good importers guess the mapping, show a sample of rows, and let the user correct it. Without this screen, your support team becomes the mapping screen.

### Partial failure is the default

In a 5,000-row file, some rows will be invalid. You need a policy: reject the whole file, import the good rows and report the bad ones, or let the user fix errors in place. Each choice has consequences. Importing partially without a clear report creates silent data gaps the customer finds weeks later.

### Duplicates and updates

Is the import creating new records or updating existing ones? What is the match key: email, SKU, an external ID? What happens when the same customer uploads the same file twice? Without an answer, you get duplicate records, and duplicates are hard to clean up once other data points at them.

### Large files and undo

A file of 200 rows can be processed in the request. A file of 200,000 rows cannot; it needs a background job, progress reporting and a way to resume. And customers will ask to undo an import that went wrong, which only works if you recorded which records came from which import. If you do not have a job system yet, our post on [whether you need a job queue yet](/post-do-you-need-a-job-queue-yet) is relevant.

## Build or buy

### When building makes sense

Build if most of these are true:

- Imports happen mainly during onboarding, for one or two object types.
- Files come from a small number of known sources, such as an export from the one tool customers usually switch from.
- Your data model has rules that a generic tool would struggle to express.
- Your team can afford a few weeks to do it properly and some ongoing maintenance.

A narrow, strict importer is a reasonable first version: publish a template file, accept only that format, validate every row, show a clear error report, and record an import ID on each record created. That covers a surprising share of real needs, and it is far better than a permissive importer that quietly saves bad data.

### When buying makes sense

Embedded import products give you a hosted upload, mapping and validation interface that you drop into your app, with your field definitions and rules plugged in. Buy if:

- Imports are frequent, not just at onboarding, and file formats vary a lot.
- Many object types need importing.
- Onboarding speed is a sales advantage and your engineers are needed elsewhere.

Pricing varies widely. Some vendors publish self-serve prices in the hundreds of dollars a month; others sell only through sales conversations with annual contracts. Vendor articles comparing the cost of building versus buying are useful prompts but are written by people selling the buy option, so do your own estimate. Price out a realistic build of four to eight engineer-weeks plus maintenance, and compare that with a year of the subscription.

Check the same things you would check for any embedded vendor: where the customer's file data is processed and stored, whether it meets your customers' security requirements, and how hard it would be to replace. Our general [build, buy, or wait decision tree](/post-build-buy) applies.

### The option teams forget: do it for them

At low volume, the cheapest importer is a person. For your first ten customers, have someone on your team take their spreadsheet, clean it, and load it with a script. You learn exactly which messes matter, onboarding feels white-glove, and you build the real importer later with real examples. This is often the right call before product-market fit.

## What to get right regardless

1. Validate before saving, and show errors per row with a reason.
2. Record an import ID on every created or updated record so you can audit and undo.
3. Decide the match key for updates and show the user what will be created versus updated.
4. Process large files in the background with progress and a final summary.
5. Keep the original uploaded file for a limited, stated period so support can investigate, then delete it.
6. Treat uploaded files as untrusted input. Spreadsheet values beginning with characters such as = or + can become formulas when your app later exports the data back to Excel, so escape them on export.

## FAQ

### Should we support Excel files or only CSV?

Many customers will try to upload an Excel file directly. Supporting it removes a step for them, but it adds a library and more edge cases. A common compromise is CSV first, with a clear instruction to "Save As CSV", then Excel support once you see how often people hit that wall.

### How do we handle imports from a competitor's export?

If many customers switch from the same tool, build a dedicated mapping for that tool's export format. It is a strong onboarding advantage and often worth more than a generic importer.

### Is an import API a substitute for an importer?

For technical customers, an API can be better. For most business users, no. They have a spreadsheet, not a script. Our post on [whether you should build an API](/post-should-you-build-an-api) covers that decision.

### When should we get outside advice?

If onboarding is stalling deals because data migration is slow, it is worth a second opinion on the plan. You can [book a call](/book-a-call) or start with a [technical teardown](/teardown) of where onboarding time actually goes.
