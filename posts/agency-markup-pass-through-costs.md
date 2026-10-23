---
title: Your agency re-bills your cloud and tools. Check the markup
slug: agency-markup-pass-through-costs
date: '2026-10-23T11:40:04.326Z'
category: Vendors
excerpt: >-
  Hosting, tool seats and AI usage billed through your agency often carry a
  hidden markup. Own the accounts and pay a visible fee for management.
description: >-
  How to spot markups on cloud, SaaS and AI costs your agency re-bills, check
  them in an hour, and move accounts into your own name.
author: The founder of Fraction
readTime: 5
draft: false
---

If your agency pays for your cloud hosting, software licences or AI usage and then re-bills you, check the invoice for a markup or a "management fee" on those costs. A small, disclosed handling fee can be fair. An undisclosed markup is not, and either way you should usually move those accounts into your own name and pay the providers directly. That cuts the markup, and more importantly it gives you control of the accounts your product depends on.

This one hides in plain sight. The development hours get all the attention in the monthly invoice review, while a single line called "infrastructure and tools" quietly grows every month.

## What pass-through costs usually include

Pass-through costs are anything the agency buys from a third party for your project. The common ones:

- Cloud hosting and databases
- Domain names, DNS and certificates
- Email and SMS sending
- Error tracking, logging and monitoring tools
- Design tools, test devices and CI minutes
- AI model usage and coding-assistant seats
- Third-party APIs: maps, payments tooling, search

Early on, letting the agency handle these is convenient. You have no engineer, and nobody wants to set up ten billing accounts. The trouble starts when the convenience becomes permanent and nobody looks at the line again.

## How the markup shows up

There are three common shapes, from most to least transparent:

### A disclosed handling fee

The invoice shows the provider's cost and a separate fee, often a percentage, for managing it. This is honest, and for small amounts the fee may be reasonable compensation for the agency's admin and card float.

### A bundled rate

The invoice says "hosting: 1,200 dollars" with no breakdown. You do not know what the provider charged. Sometimes the bundled price is fair; sometimes it is double the real cost. You cannot tell without asking.

### Seat and usage resale

The agency buys tool seats or AI usage on its own plan, possibly at a volume price, and bills you per seat or per unit at a higher rate. Again, this can be fine if disclosed. It is a problem when you are paying for seats nobody uses or usage that belongs to other clients.

## How to check in under an hour

Ask the agency, in writing, for a list of every third-party service your project uses, with the provider's monthly charge and what they bill you for it. Frame it as a cost review, which it is.

Then check a couple of entries yourself. Cloud providers and most SaaS tools publish their prices, and for hosting you can ask for a read-only view of the billing console. If the hosting line on your invoice is 1,200 dollars and the console says 640, you have your answer.

While you are looking, compare usage against reality. I regularly see projects paying for staging environments nobody uses, oversized databases set up for a launch that never happened, and coding-assistant seats for developers who left the project months ago. Usage creep is often a bigger number than the markup itself; we have a separate piece on [tool bills that grow quietly](/post-engineering-tool-bill).

## Why ownership matters more than the markup

The markup costs money. The ownership costs control. If the cloud account is in the agency's name, then:

- You cannot see what is running or what it costs without asking.
- If the relationship ends badly, they control your production environment.
- If the agency has a payment problem, your product can be suspended for their unpaid bill.
- Diligence will flag it. An investor's technical review will ask who owns the production accounts, and "our agency" is a finding.

So the real fix is not negotiating the percentage. It is moving each account into your company's name, with your card, and giving the agency the access it needs to do the work. Most providers support transferring an account, a project or a domain to a new owner. For cloud hosting the simplest path is often a new account you own, with the agency migrating resources across in a planned window. If you are in the more tangled situation where [your product runs on the agency's own servers](/post-your-agency-hosts-your-product-on-their-servers), plan that move as a small project rather than a weekend task.

## What a fair arrangement looks like

There is nothing wrong with paying an agency to manage your infrastructure. It is real work. A fair arrangement has three parts:

1. **You own the accounts and pay providers directly.** The agency has admin access under named user logins, not shared credentials.
2. **Management is billed as time or a flat fee, openly.** If someone spends four hours a month on infrastructure, you pay for four hours, as a visible line.
3. **A monthly cost report.** One short table: each service, its cost this month and last month, and a note on anything that moved by more than 20 percent.

That arrangement is cheaper, cleaner for diligence, and it removes the incentive for anyone to let costs drift upward.

## How to raise it without a fight

Most agencies did not set out to hide margin. Re-billing started as a favour, and the markup crept in as a way to cover admin. Raise it as a structural change, not an accusation: "As we grow, we need the production accounts in our own name for investor diligence. Can we plan the transfer and agree a fee for your time managing them?"

A good agency agrees quickly. One that resists, or that suddenly finds reasons the transfer is technically impossible, is telling you something about how dependent on it they intend you to stay. That is worth knowing before your next negotiation; see [how to cut your agency bill without firing them](/post-renegotiate-agency-spend).

## FAQ

### Is any markup on pass-through costs acceptable?

A small, disclosed fee for handling purchases can be reasonable, especially for low amounts. What is not acceptable is a markup you did not agree to and cannot see. The test is disclosure, not the number.

### Should I move AI provider keys into my own account too?

Yes. Usage-billed services are where costs move fastest, and a key held in someone else's account is one you cannot cap, rotate or audit yourself.

### Will moving accounts disrupt the product?

Domains and SaaS tools usually move with no downtime. Cloud hosting may need a planned migration. Do it in stages, least risky first.

### I do not know what half of these services are. Where do I start?

Start with the list from the agency, then get someone technical to sort it into keep, cut and transfer. A [short teardown](/teardown) covers this, or [book a call](/book-a-call) and we will go through the invoice with you.
