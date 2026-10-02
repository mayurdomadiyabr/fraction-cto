---
title: A critical vendor just got acquired. Should you migrate?
slug: critical-vendor-acquired
date: '2026-10-02T15:01:58.276Z'
category: Vendors
excerpt: >-
  Do not migrate on the news alone. A two-week checklist, the signals that mean
  leave, and how to make the next one cheaper.
description: >-
  What to do when a key software vendor is acquired: contract checks, a data
  export test, an exit plan, and the signals that mean migrate.
author: The founder of Fraction
readTime: 5
draft: false
---

You open your inbox to a cheerful announcement: the small vendor that runs a key part of your product has been "joining forces" with a much larger company. The note promises nothing will change. Your engineer asks whether it is time to start migrating. Your finance lead asks whether the price is about to double.

The short answer: do not migrate on the news alone, and do not ignore it either. In the first two weeks, read your contract, confirm you can get your data out, and write down what you would do if the product were discontinued or repriced. Most acquisitions change nothing for a year. The ones that hurt usually give you warning signs, and the founders who get burned are the ones who were not watching.

## What usually happens after a vendor is acquired

There are roughly four outcomes, and the announcement rarely tells you which one you are in.

**Business as usual.** The acquirer wanted the revenue and the team, and leaves the product alone. This is common for the first months.

**Repricing.** The product moves onto the acquirer's price list, often with new tiers, minimums, or bundling into a larger suite. Small customers on legacy plans tend to feel this first, usually at renewal.

**Slow decline.** The product keeps running but the roadmap stops. Fewer releases, slower support, the original team drifting away. You find out when a bug you reported stays open for months.

**Sunset.** The acquirer announces an end-of-life date and a "migration path" to its own product, which may or may not fit how you use it.

You cannot control which one you get. You can control how expensive each one is for you.

## The first two weeks: a short checklist

### Read the contract you actually signed

Look for three things. First, the term and renewal date, because pricing changes usually land at renewal. Second, any price protection, such as a cap on increases at renewal. Third, the assignment clause. Contracts often let the vendor assign the agreement to a successor in a merger or sale, and whether you have any right to object or terminate depends on the wording. Assignment restrictions and change-of-control rights are separate clauses and work differently, so have a lawyer read them if the vendor is critical ([AcquisitionStars on assignment and change of control](https://acquisitionstars.com/blog/saas-customer-contracts-ma-assignment)). For most startups on a click-through agreement, the honest answer is that you have few rights and should plan accordingly.

### Confirm you can get your data out

Do an actual export, not a theoretical one. Can you pull all your data in a usable format? Does the export include history, attachments, and configuration, or only the current records? How long does it take? If the export is weak, that is the most important thing you learned this week.

### Check what the acquisition means for your customers' data

A new owner may move data to different infrastructure, regions, or sub-processors. If you have made commitments to customers about where their data lives or who processes it, you need to know. Our post on [vetting vendors who touch customer data](/post-vet-vendors-customer-data) covers what to ask.

### Write a one-page exit plan

Not a migration. A plan. Which two or three alternatives exist, roughly how long a migration would take, which parts of your code talk to this vendor, and what would trigger you to start. This takes an engineer half a day and turns a future emergency into a known project.

## Signals that it is time to move

Do not leave because of the announcement. Leave because of evidence. The signals worth acting on:

- An end-of-life date or a "recommended migration" to the acquirer's product
- A renewal quote with a material increase and no room to negotiate
- Support response times that have clearly slowed, or tickets closed without fixes
- Key features you depend on marked as deprecated or "legacy"
- The original engineering and support people you knew gone from the company

One signal is noise. Two or three together are a trend. At that point, start the migration on your own timeline, before a deadline forces it. Our post on [whether to migrate or stay on a tool](/post-migrate-or-stay-tool) walks through how to size that decision.

## Make the next acquisition cheaper

The real lesson is structural. Every critical vendor is one acquisition away from changing its terms. You reduce that risk in advance:

**Isolate the integration.** Keep calls to the vendor behind one module in your code instead of scattered everywhere. That makes a future switch a contained project. See [when a vendor abstraction layer is worth it](/post-vendor-abstraction-layer), because it is not always.

**Keep a regular export.** A scheduled export of your data to your own storage costs little and removes the worst-case scenario.

**Know your concentration.** If one small vendor sits under your core workflow, investors will ask about it. Our post on [vendor concentration in diligence](/post-vendor-concentration-diligence) explains how they read it.

**Prefer standards.** Vendors that use common formats and protocols are easier to leave than ones with proprietary everything.

## Where outside judgment helps

Founders tend to either panic and start a rushed migration, or shrug and get caught by a sunset date six months later. The middle path needs someone who can read your contract, your code, and the vendor's roadmap signals together and say how exposed you really are. That is a typical short engagement for a fractional CTO. If a critical vendor just changed hands, [book a call](/book-a-call) and bring the announcement.

## Frequently asked questions

### Should I migrate as soon as my vendor is acquired?

Usually no. Most products keep running unchanged for months. Read your contract, test your data export, and write an exit plan, then migrate only if real signals appear, such as a sunset date or a sharp renewal increase.

### Can a vendor transfer my contract to the company that bought it?

Often yes. Many contracts allow assignment to a successor in a merger or acquisition. Whether you can object or terminate depends on the specific clauses, so have a lawyer review them for critical vendors.

### Will my price go up after the acquisition?

It may, most often at renewal. Check whether your contract has price protection, and if not, start renewal conversations early with your exit plan in hand.

### What is the most important thing to check first?

That you can export all your data in a usable form. If the export is incomplete, everything else becomes harder.
