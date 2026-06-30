---
title: The integration sprawl nobody decided to build
slug: integration-sprawl
date: '2026-06-30T12:00:44.414Z'
category: Pattern recognition
excerpt: >-
  No one chose to run fifteen SaaS tools stitched together with webhooks and
  glue code. It accrued one reasonable decision at a time, and is now the most
  fragile part of the company.
description: >-
  How integration sprawl accumulates one tool at a time until the glue between
  systems becomes a startup's most fragile dependency.
author: The founder of Fraction
readTime: 5
draft: false
---

Open the settings of almost any two-year-old startup and you will find the same thing: fifteen or twenty SaaS tools, connected to each other by webhooks, Zapier flows, a few cron jobs, and some glue code one engineer wrote on a Friday. No one sat down and designed this. Each piece arrived as a reasonable decision. Together they form the most fragile, least understood, and most expensive-to-change part of the company, and nobody owns it.

This is integration sprawl, and it is a pattern worth catching early, because the cost of it is invisible right up until something breaks and no one can tell you why.

## How the sprawl accumulates

Every individual decision was defensible. That is exactly why it is dangerous.

### Each tool solved a real problem on the day you added it

You needed email, so you added an email tool. You needed billing, so you added a billing provider. You needed the billing events in your analytics, so you wired a webhook. You needed the analytics in a spreadsheet, so you added a sync. Each step was the fastest way to solve a real problem that day. None of them was wrong in isolation. The cost is in the accumulation, which no single decision is responsible for.

### The glue is written once and never revisited

The webhook that moves data between two systems gets written under deadline, works in the demo, and is never looked at again. It has no tests, no monitoring, no documentation, and no owner. When it silently fails at 2am, nobody finds out until a customer reports that their data is wrong, and then an engineer spends a day archaeology-ing through systems they did not build to find the break.

### Nobody can see the whole map

The person who added the email tool is not the person who wired the billing webhook is not the person who built the analytics sync. No one holds the full picture of what depends on what. This is the same risk as when [critical knowledge lives in one person's head](/post-key-person-codebase-risk), except worse, because here it lives in nobody's head at all. The map exists only as the emergent behavior of a dozen disconnected pieces.

## Why it is more expensive than it looks

The bill for sprawl is paid in places that are hard to connect back to the cause.

### Data integrity erodes quietly

When data flows through five hops between systems, every hop is a chance for it to drift. A field maps wrong, a sync runs twice, a webhook drops a message. The result is that your billing system and your analytics and your CRM all quietly disagree about basic facts, and you do not find out until you are trying to close the books or raise a round and the numbers do not tie.

### Debugging crosses boundaries you do not control

When something breaks inside one application, you can read the code. When something breaks in the space between applications, you are debugging across systems you cannot see into, owned by vendors who will not return your call this week. The mean time to even understand the problem goes up by an order of magnitude.

### The spend adds up where no one is watching

Fifteen tools at a few hundred dollars a month each is real money, and the per-seat pricing grows with the team. More to the point, much of it overlaps: three tools that all do part of what one could, kept because nobody owns the question of consolidation. This is the same blindness as [the agency invoice nobody reads line by line](/post-agency-invoice), applied to your own stack.

## How to get ahead of it

You do not fix sprawl by banning tools. You fix it by making the system visible and owned.

### Draw the actual map, once

Spend an afternoon and write down every external tool, what data flows into it, what flows out, and who or what moves that data. Most teams have never seen this on one page, and the act of drawing it surfaces the load-bearing glue nobody knew was load-bearing. You cannot manage a dependency graph you have never looked at.

### Give the integration layer an owner

The glue between systems needs someone responsible for it the same way your application code does. Not necessarily a full-time hire, but a named owner who knows the map, monitors the critical flows, and is the person you call when data disagrees. Unowned infrastructure is infrastructure that fails silently.

### Treat consolidation as a real decision, not a someday

Periodically ask whether three tools could be two, whether a fragile Zapier chain should become a small piece of real code with monitoring, whether a sync that breaks monthly is worth its trouble. This is a [build, buy, or consolidate judgment](/post-migrate-or-stay-tool) about the cost of leaving a tool versus the cost of keeping the glue alive, and it deserves the same scrutiny as any other engineering decision.

### Put monitoring on the flows that matter

The billing webhook that silently fails should page someone, not wait for a customer to notice. The flows that touch money and customer-facing data are the ones to instrument first. A failed integration you find out about in five minutes is an annoyance; one you find out about in five days is an incident.

If your stack has quietly become a web of integrations nobody fully understands, that is exactly the kind of thing a fractional technical leader maps and de-risks. [Book a call](/book-a-call) and we will draw the map together.

## FAQ

### Is adding lots of tools just a normal part of growing?
Adding tools is normal. Letting the connections between them go unmapped, unmonitored, and unowned is the part that turns normal growth into fragility. The tools are fine; the invisible glue is the risk.

### When does integration sprawl actually become a problem?
Usually around the point where no single person can draw the data flow from memory, or where a data discrepancy takes more than a day to trace. If finding why two systems disagree is an investigation rather than a lookup, you are already there.

### Should I just build everything in-house to avoid this?
No. Buying tools is usually the right call, and rebuilding them rarely is. The fix is not fewer vendors; it is owning, mapping, and monitoring the integration layer so the glue is as visible and maintained as the rest of your system.
