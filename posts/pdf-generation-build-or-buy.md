---
title: 'Generating PDFs: build it, buy it, or render HTML?'
slug: pdf-generation-build-or-buy
date: '2026-11-18T04:35:48.693Z'
category: Decisions
excerpt: >-
  Invoices and reports as PDFs cause more support tickets than founders expect.
  The options, the trade-offs and the default I recommend.
description: >-
  Headless browser, PDF library or hosted API? How to choose a PDF generation
  approach for invoices and reports, and what to avoid.
author: The founder of Fraction
readTime: 5
draft: false
---

For most products that need to produce invoices, reports or certificates, the practical choice is to design the document as an HTML page and render it to PDF with a headless browser such as Chrome via Puppeteer or Playwright, running in a background job. Buy a hosted PDF API if you have little server capacity or need guaranteed output at volume. Avoid starting new work on wkhtmltopdf: its main repository was archived in January 2023 and it no longer receives fixes.

PDF generation sounds like a solved problem until a customer opens an invoice and the table runs off the page, the logo is missing, or the totals in the PDF do not match the screen. Then it becomes a recurring support ticket.

## Why PDFs are harder than they look

A PDF is a fixed-layout document. Web pages flow; PDFs do not. Most of the pain comes from that difference:

- **Page breaks.** Long tables split in the middle of a row, headers do not repeat, a signature block ends up alone on the last page.
- **Fonts.** The font on your server is not the font on your laptop. Characters from other languages, or currency symbols, render as empty boxes.
- **Images and assets.** The renderer cannot reach an image behind authentication, so the logo disappears.
- **Speed and memory.** Rendering a 40-page report can take seconds and a lot of memory, which is fine once and painful when 500 customers export at month end.
- **Accuracy.** If the PDF is built from a separate template with its own calculations, it drifts from what the app shows. For invoices that is a real problem.

## The main options

### Render HTML with a headless browser

You build the document as an HTML page with print-specific CSS, then load it in headless Chrome and print to PDF. Puppeteer and Playwright both support this ([Puppeteer's docs](https://pptr.dev/) show the basic call). This is my default recommendation for most teams because:

- Your engineers already know HTML and CSS, so templates are easy to change.
- You can preview the document in a normal browser while designing it.
- Modern print CSS handles page size, margins and page-break rules reasonably well.

The cost is that headless Chrome is heavy. It needs a few hundred megabytes of memory per instance, starts slowly, and does not fit comfortably inside some serverless limits. Run it in a background worker, not inside the web request, and limit how many renders run at once. If you do not have background jobs yet, [this post on job queues](/post-do-you-need-a-job-queue-yet) explains the decision.

### Generate the PDF directly with a library

Libraries such as PDFKit (Node), ReportLab (Python) or similar tools in other languages draw the PDF by placing text and shapes at coordinates. Output is fast, small and very predictable.

The trade-off is that layout is written in code. Every design change, such as moving a logo or adding a column, is an engineering task. I like this approach for simple, fixed documents produced at high volume, like shipping labels or tickets. For anything a designer or customer will want to customise, it gets expensive.

### Use a hosted PDF API

Several services take HTML or a template plus data and return a PDF. You avoid running browsers yourself and usually get good handling of fonts and page breaks. I lean towards this when:

- Your team is one or two engineers and nobody wants to operate headless browsers.
- You are on a hosting platform that makes heavy background processes awkward.
- Volume is moderate and predictable, so per-document pricing stays small.

Check how the service handles data. Invoices and reports often contain customer names, addresses and amounts, and you are now sending that to another processor. Some enterprise customers will ask about it, and it may need to appear in your list of sub-processors.

### What I would not start with

wkhtmltopdf was the standard tool for years, and many older systems still use it. But the [main repository](https://github.com/wkhtmltopdf/wkhtmltopdf) was archived in January 2023, and it relies on an old browser engine that does not understand much modern CSS. If you already depend on it, it is not an emergency, but plan a move to a maintained renderer when you next touch those documents. Do not add new documents on top of it.

## Make the numbers come from one place

The most important design rule is not about rendering at all. The PDF should be built from the same data and calculations the app uses, ideally a single function that returns the invoice or report as data, which both the screen and the PDF template display. If the PDF does its own maths, sooner or later a customer finds a difference between the two and asks which one is right.

For invoices, also decide whether you store the generated PDF or regenerate it on demand. I recommend storing the final PDF once an invoice is issued. If you change the template next year, old invoices should not silently change. Store the file in object storage with the record, as described in [the file uploads post](/post-file-uploads-build-or-buy).

If the documents are invoices, check first whether your billing provider already generates them. Teams sometimes build an invoice PDF system that Stripe or their accounting tool would have produced for free; see [build billing or use Stripe](/post-build-billing-or-use-stripe).

## A rough effort guide

Rules of thumb from projects I have seen, not quotes:

- One simple document (an invoice or certificate) rendered with headless Chrome in a background job: three to five days, including fonts and page breaks.
- A configurable report builder with charts and long tables: several weeks, mostly spent on layout edge cases.
- A hosted PDF API for the same simple document: one to two days to integrate.

## FAQ

### Can we generate PDFs in the browser instead?

You can, with client-side libraries or by using the browser's print dialog. It works for "save this page" use cases. It is unreliable for documents that must look identical for every user, such as invoices, because output depends on each user's browser and fonts.

### Why do our PDFs show empty boxes instead of characters?

The font on the rendering server does not contain those characters. Install or embed fonts that cover every language and currency symbol you use, and test with real customer data, not lorem ipsum.

### Should PDF generation run on the web server?

Not for anything beyond trivial documents. Rendering is slow and memory-hungry, and a burst of exports can slow the whole app. Put it in a background job and notify the user, or email the file, when it is ready.

### Is this worth a fractional CTO's time?

The decision takes an hour; getting it wrong costs weeks of support tickets. If documents are part of how you bill or report to customers, it is worth a short review of the plan. You can [book a call](/book-a-call) or see our [pricing](/pricing) for short engagements.
