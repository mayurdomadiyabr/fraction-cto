---
title: 'Build your own product analytics, or pay for PostHog?'
slug: build-product-analytics-or-buy
date: '2026-09-30T04:28:26.505Z'
category: Decisions
excerpt: >-
  The events table takes an afternoon. Funnels, retention and identity take
  months. Why early teams should buy analytics and own the tracking plan.
description: >-
  Should a startup build product analytics or buy PostHog, Amplitude or
  Mixpanel? Costs, when building makes sense, and the tracking plan that
  matters.
author: The founder of Fraction
readTime: 6
draft: false
---

Somewhere around the first hundred active users, a founder asks the team a simple question: which features do people actually use? The honest answer is usually "we don't know," and the engineer's instinct is to fix that by writing an events table, a little logging helper, and a dashboard. It feels cheap. It is one of the more reliably expensive small decisions I see at seed stage.

The short answer: for almost every startup before Series A, buy product analytics and spend your engineering time on deciding what to track. The free tiers of the hosted tools cover far more volume than most early products generate, and the part that is hard is not storing events. It is funnels, retention cohorts, identity merging, and a schema that still makes sense a year from now.

## Why the homemade version looks cheap

The first version really is cheap. An `events` table with a user id, an event name, a timestamp and a JSON blob of properties takes an afternoon. Counting signups per day is one SQL query. For a week, the founder has numbers and the engineer has a win.

Then the questions get better, which is the point of having numbers at all:

- What percentage of people who start onboarding finish it, and where do the rest drop?
- Of the users who signed up in March, how many are still active in June?
- Did the new pricing page change conversion, or did the traffic mix change?
- Is this the same person on their phone and their laptop?

Each of these is a real feature, not a query. Funnels need ordered event sequences per user with time windows. Retention needs cohort math that is easy to get subtly wrong. Identity merging, stitching the anonymous visitor to the logged-in account, is a small data-engineering problem of its own. None of it is impossible. All of it is time your one or two engineers are not spending on the product customers pay for.

## What buying costs in 2026

The pricing of hosted analytics has moved firmly in the founder's favor. PostHog, as one example, gives the first one million events per month free on its [published pricing](https://posthog.com/pricing), with per-event rates that start at fractions of a cent above that. Most seed-stage products with a few thousand active users sit comfortably inside that allowance if they track deliberately rather than logging every click.

Amplitude and Mixpanel also have free plans aimed at early teams. The exact limits change, so check the current page before you commit, but the pattern holds: at your stage, the software bill for analytics is close to zero. The real cost of buying is an afternoon of integration and the discipline to name events consistently.

Compare that to the build. Even a modest homemade setup, the events table, a funnel view, a retention chart and identity stitching, is a few weeks of a senior engineer's time up front and a slow drip of maintenance afterwards. At a loaded cost of a senior engineer, that is real money, and more importantly it is weeks of roadmap. I use the same test here as in any [build, buy, or wait decision](/post-build-buy): is this capability what customers choose you for? Analytics almost never is.

## When building is the right call

There are three situations where I will back a team that wants to own the pipeline.

### The data cannot leave your infrastructure

Healthcare, some fintech, and contracts with strict data-residency clauses can make sending behavioral data to a third party a non-starter. Even then, check first whether a self-hosted or region-pinned option from an existing vendor solves it before writing your own. Often it does.

### Analytics is the product

If you are shipping usage dashboards to your customers, the events are a product surface, not an internal tool. That is core, and you should build it with the same care as anything else customers see. Even here, keep your internal product analytics on a bought tool so the two concerns do not tangle.

### Your volume has made the bill absurd

At tens or hundreds of millions of events a month, per-event pricing can become a line item worth an engineer's attention. By then you should have the team, and possibly the warehouse, to do it properly. Before that point, it is a problem you are lucky to have, not one to solve in advance. If you are wondering whether you need a warehouse at all, I wrote about [when Postgres stops being enough](/post-do-you-need-a-data-warehouse-yet).

## The part you cannot buy: a tracking plan

The failure I see more often than a bad build-or-buy call is buying the tool and then tracking chaos. Autocapture turns on, every button click becomes an event, three engineers name the same action `signup`, `sign_up` and `user_registered`, and six months later nobody trusts the numbers. The tool was never the problem.

A tracking plan fixes this and it fits on one page:

1. **Pick the 10 to 20 events that map to your business questions.** Signup started, signup completed, first key action, invite sent, upgrade, cancel. Not every click.
2. **Name them in one convention and write it down.** Object then action, past tense, lowercase: `project_created`, `invite_sent`. Put the list in the repo.
3. **Define the properties that matter.** Plan tier, acquisition source, company size. Keep them stable once chosen.
4. **Identify users the same way everywhere.** One user id, set at login, on web and mobile.
5. **Review it monthly.** Delete events nobody looked at. Add the one the founder keeps asking about.

This is an hour of thinking and it is the difference between analytics that answer questions and analytics that generate arguments. It is also the kind of thing a [fractional CTO](/how-it-works) sets up in the first few weeks, because every later decision leans on it.

## A pattern from the room

The version I see most is not a team that built analytics badly. It is a team that built it well enough to keep, and then kept paying for it. A homegrown events table becomes the source for a board metric, the board metric gets questioned in a raise, and suddenly an engineer spends two weeks reconciling the homemade funnel with Stripe revenue. In diligence, "we rolled our own analytics" is not a red flag by itself, but numbers that do not tie out are. If you want a second opinion on whether your current setup would survive that conversation, a [technical teardown](/teardown) covers it.

## FAQ

### Is Google Analytics enough for product analytics?

For a marketing site, often yes. For a logged-in product, usually not. Web analytics is built around sessions and pages, while product questions are about users and actions over weeks. Most teams end up running one for the site and a product analytics tool inside the app.

### Should we self-host an open-source analytics tool to save money?

Only if data residency forces it. Self-hosting trades a small or zero bill for operational work: upgrades, backups, scaling the database behind it. At seed stage that is usually a worse trade than it looks.

### Can we switch tools later if we buy now?

Yes, and it is much easier if you route events through one thin wrapper in your code and keep a written tracking plan. Switching then means changing one destination, not hunting down tracking calls across the codebase.

### How many events should we track at the start?

Fewer than you think. Ten to twenty well-named events that answer real questions beat two hundred that nobody reads. You can always add events; cleaning up a polluted history is much harder.

If you are about to assign an engineer to build an analytics system, it is worth a [short call first](/book-a-call) to check whether that is the best use of the next month.
