---
title: 'Build your internal admin panel, or buy Retool?'
slug: build-or-buy-internal-admin
date: '2026-08-12T09:20:00.000Z'
category: Decisions
excerpt: >-
  Every startup builds an admin panel eventually. The real question is whether
  it should cost engineering weeks or a few dollars a seat, and where the line
  sits.
description: >-
  Build your internal admin tool or buy Retool? The real cost of each, the
  lock-in nobody prices, and when building is worth the engineering weeks.
author: The founder of Fraction
readTime: 5
draft: false
---

Every company reaches the day it needs a screen where support can look up a customer, refund a charge, or flip a feature flag without asking an engineer to run a database query. That is an internal admin tool, and the decision to build it or buy it gets made badly more often than almost any other early technical choice, because both sides look cheap from a distance and are not.

I have seen founders sink a month of engineering into an admin panel that a tool would have produced in an afternoon, and I have seen teams trapped inside a low-code platform they could not export. Here is how I keep both from happening.

## What building actually costs

An admin panel is not hard engineering, which is exactly why it is dangerous. It is easy enough that an engineer will happily build it, and boring enough that it never gets the polish it needs, so it grows into a pile of half-finished screens that only its author understands. A custom internal tool of real usefulness runs 25,000 to 70,000 dollars to build and carries ongoing maintenance somewhere between a few hundred and a couple thousand dollars a month once you count the engineer time it quietly consumes.

The sharper cost is opportunity. Every week spent on the internal CRUD screen is a week not spent on the product customers pay for. A typical admin panel that would take 80 hours to build by hand is often a few hours of work in a low-code tool that hands you tables, forms, and database connectors out of the box. When the tool is not a competitive advantage, and an internal admin panel almost never is, paying engineering salary to rebuild those components is a poor trade. This is the same discipline as [the build, buy, or wait decision tree](/post-build-buy): build where you are differentiated, buy where you are not.

## What buying actually costs

The buy side is not free either, and its costs show up later. A low-code platform like Retool starts around 10 dollars per user per month on its team tier and climbs to roughly 50 dollars per user per month on business, so a 50-person team that all touch internal tools is looking at around 30,000 dollars a year for the platform alone. Per-seat pricing is cheap when five people use it and expensive when fifty do, and the bill grows with headcount whether or not the tools got more valuable.

The cost that surprises people is lock-in. On many of these platforms the apps you build are stored as the vendor's own non-exportable format, so if you stop paying, you do not walk away with your admin tools; you lose access to them. You are renting the screens, not owning them. That is a fine trade for speed early on, but it is a trade, and it belongs in the decision out loud rather than discovered the day you try to leave. It is the same dependency question I raised in [when one vendor can take your whole product down](/post-vendor-concentration-diligence), scaled down to your back office.

## Where the line actually sits

Buy the admin tool when the work is standard CRUD over your database, the team using it is small, speed matters more than polish, and the tool is not something your customers ever see. That covers the overwhelming majority of early internal tooling, and choosing to buy here is the mature call, not the lazy one.

Build it when the internal tool has heavy, product-specific business logic that a generic form cannot express, when the number of seats has grown large enough that per-user pricing exceeds an engineer's part-time attention, or when the internal tool is close enough to your actual product that owning it is owning your edge. A support tool that encodes complex, proprietary workflow logic can justify a build. A screen that lists users and lets you edit a field almost never does.

There is also a clean middle path many teams miss: buy now, plan to build later. Use a low-code tool to get the admin surface up in days while the company is small, and keep the underlying data model and access controls in your own system so that if you outgrow the tool, you are replacing a front end rather than untangling your whole back office. Standing up that access layer cleanly is worth doing regardless of which tool sits on top, and it is closely related to [buying your login instead of building it](/post-build-your-own-auth).

## How to decide this week

Answer four questions honestly. Is this tool standard CRUD, or does it carry real product-specific logic? How many people will actually use it in a year, and what does per-seat pricing total at that headcount? If the vendor disappeared or doubled its price, what would it take to leave? And is this tool anywhere near your competitive edge, or is it pure back office?

Standard CRUD, small team, easy exit, pure back office means buy it today and get back to the product. Heavy logic, large seat count, painful lock-in, or edge-adjacent means the build may pay for itself. The honest failure I see most is a team that built the admin panel to avoid a subscription, then spent a quarter of engineering time maintaining screens nobody outside the company will ever value. Spend your build budget where customers can see it. If you cannot tell which category your internal tool falls into, that is a quick conversation worth having before the sprint, and it is what a [call to sanity-check the build](/book-a-call) is for.

## FAQ

### Is a low-code tool secure enough for admin access?

The reputable platforms support single sign-on, role-based permissions, and audit logs on their paid tiers, which is often better access control than a hand-rolled admin panel gets. The real risk is not the platform; it is granting broad database access through it without scoping who can do what. Lock down permissions on day one either way.

### When does per-seat pricing tip toward building?

Roughly when the annual platform bill approaches the cost of the engineer time you would spend building and maintaining the equivalent, and the seat count is still growing. For most teams that crossover is well past 50 seats. Do the multiplication before you assume you have passed it.

### How do I avoid getting locked in?

Keep your data model, permissions, and business logic in your own systems, and use the tool only as the interface on top. If the tool stores logic you cannot export, treat that logic as disposable and keep the parts you cannot afford to lose outside it.
