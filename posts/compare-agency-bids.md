---
title: 'Two agency bids, one triple the other. Which is right?'
slug: compare-agency-bids
date: '2026-07-17T09:10:00.000Z'
category: Vendors
excerpt: >-
  One agency quotes 40,000 dollars, another 130,000 for the same brief. The
  spread is not a mistake. It is two shops reading your one-paragraph scope in
  different ways.
description: >-
  How to compare wildly different agency bids for the same project when you
  cannot evaluate the technical work yourself.
author: The founder of Fraction
readTime: 5
draft: false
---

You send the same one-paragraph brief to three agencies and get back quotes of 40,000, 75,000, and 130,000 dollars. The spread is more than triple, for what you described as the same project, and now you are stuck. The cheap one feels too cheap to trust and the expensive one feels like being taken. The instinct is to split the difference and pick the middle, which is how founders end up choosing a price instead of choosing a partner.

The spread is not a mistake and it is not simply greed. It is the clearest possible signal that your three bidders read your one paragraph in three completely different ways, and the gap between them is information about your project that you do not yet have. The job is not to find the right number. It is to figure out what each agency thinks it is building, because that is what actually differs.

## Why the same brief produces wildly different numbers

A vague brief is a Rorschach test. When you write "build our MVP" in a paragraph, each agency fills in the enormous unstated middle with its own assumptions, and those assumptions are the whole price. One shop assumes a rough prototype with hardcoded logic and no real infrastructure. Another assumes a production system with authentication, a real data model, tests, deployment, and the ability to handle actual users. Both are honestly quoting the project they imagined. The 40,000 dollar bid and the 130,000 dollar bid are not bidding on the same thing at all; they are bidding on the same paragraph.

This is why comparing the totals directly is meaningless, and why the fixed-price framing is so treacherous when the scope is thin. A low fixed bid on a vague scope is not a bargain; it is the front end of the dynamic I described in [the fixed bid that quietly becomes 60 percent more](/post-fixed-bid-trap), where everything the agency assumed out gets added back as billable change orders once you are committed. The cheap number wins the deal and the change orders win the margin.

The differences that actually drive the spread are knowable. They are scope, seniority, and what is being left out. A higher bid often includes work the lower bid silently deferred to "phase two": testing, security, error handling, the unglamorous production concerns that do not show up in a demo but decide whether the thing survives contact with real users.

## How to compare bids you cannot technically evaluate

Do not compare prices. Force the bids onto the same scope so the prices become comparable. The single most useful move is to make each agency tell you what they are assuming, in writing. Ask every bidder the same pointed questions: what is explicitly included, what is explicitly excluded, does this include automated tests, does it include deployment and the ability to handle real users, what happens when the scope changes, and who specifically will build it. The answers turn three incomparable numbers into three comparable proposals, and they usually collapse most of the spread on their own.

Watch what each bid reveals about the bidder. The agency that responds to a vague brief by asking you a lot of sharp questions before quoting is showing you how they work, and it is the behavior you want. The one that returns a confident low number against a paragraph is either planning to bill you back later or does not yet understand the project well enough for its number to mean anything. A precise bid on an imprecise brief is a warning, not a reassurance.

Be honest about what "cheap" is buying. A dramatically lower bid usually reflects one of three things: junior engineers billed at a rate that assumes seniority, a scope that quietly excludes the production concerns, or a shop that intends to make its margin on change orders. Sometimes cheap is simply a smaller, hungrier team that is genuinely efficient, but you confirm that by interrogating the scope, not by hoping. This same discipline of normalizing what is actually included is what makes [comparing two fractional CTO proposals](/post-compare-fractional-cto-proposals) tractable, and it is the same reason [an agency and a fractional CTO cost what they cost](/post-fractional-cto-vs-agency-cost) for genuinely different bundles of work.

The founders who choose well almost never choose on price. They choose on which agency demonstrated, through its questions and its written scope, that it understood the actual project. If you cannot evaluate the technical substance of what each is proposing, that gap is precisely where a short outside review earns its cost -- getting a second opinion on three proposals before you commit six figures is what a [call](/book-a-call) is for.

### Should I just pick the middle bid to be safe?

No. The middle number is not a signal of the right scope; it is an average of three different guesses about what you want built. Splitting the difference means choosing a price with no idea what it buys. Normalize the scope first, then the "middle" may turn out to be the most or the least complete of the three.

### The cheapest agency seems genuinely good. Am I overthinking it?

Maybe not, but confirm it against the scope rather than the vibe. Ask the cheap bidder exactly what is excluded and what happens when scope changes. If they include the production concerns the others do and are simply a lean, efficient team, that is a real bargain. If the low price depends on deferring tests, security, and deployment to a later phase, you have not found a bargain; you have found a smaller number attached to a smaller project.

### How much detail should I put in the brief before asking for bids?

Enough that the bids are comparable, which usually means more than a paragraph and less than a full specification. List the core features, the users, what the product must do on day one, and what is explicitly out of scope for this phase. You do not need to design the system; you need to remove enough ambiguity that three agencies are pricing roughly the same thing, so that the differences in their numbers mean something.
