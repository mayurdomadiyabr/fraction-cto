---
title: Zendesk cuts third-party Incremental API access on Dec 2. Migrate
slug: zendesk-incremental-api-third-party-cutoff
date: '2026-11-23T04:18:59.333Z'
category: Vendors
excerpt: >-
  Zendesk is removing Incremental API access for third-party integrations from 2
  December. What breaks, the holiday gap, and a two-week plan.
description: >-
  Zendesk ends Incremental API access for third-party apps from 2 Dec 2026 to 19
  Jan 2027. What breaks, the 60-day extension, and how to migrate.
author: The founder of Fraction
readTime: 7
draft: false
---

Zendesk is cutting off its Incremental APIs for third-party apps and integrations. The rollout starts on 2 December 2026, pauses from 17 December to 4 January, and is due to finish by 19 January 2027. If your product syncs tickets, users, or help center articles out of your customers' Zendesk accounts, and it uses any `/incremental/` endpoint, you need to move to the standard APIs before your customers' accounts are switched over.

The source for all of this is Zendesk's own [announcement](https://support.zendesk.com/hc/en-us/articles/11275429993498-Announcing-end-of-availability-of-Incremental-APIs-for-third-party-developers) and its [developer migration guide](https://developer.zendesk.com/documentation/marketplace/building-a-marketplace-app/incremental-third-party/). Read both before you plan, because the guide lists which endpoints have alternatives and which do not.

## Who this hits

Zendesk's stated reason is security: bulk export endpoints let a compromised third-party credential pull a customer's whole dataset quickly, and AI workflows have made that riskier. The change applies to third-party integrations whether or not they are listed in the Zendesk Marketplace.

### Startups that sell into Zendesk customers

This is the group that should be worried. If you sell any of the following, there is a good chance you call an incremental endpoint somewhere:

- **AI support agents and copilots** that ingest a customer's ticket history to train or ground answers.
- **Support analytics and QA tools** that pull every ticket and metric event to compute dashboards.
- **Knowledge base and search tools** that sync help center articles.
- **Data connectors** that move Zendesk data into a warehouse for your customers.

The incremental endpoints were the natural choice for all of these. They let you ask "give me everything that changed since my last checkpoint" and get a clean stream back. That is exactly the capability Zendesk is removing for third parties.

### Companies using Zendesk for their own support

If you only use Zendesk for your own customer support and your own scripts pull your own data, Zendesk says internal use cases need no action. The question to check is whether any tool you bought pulls your data through these endpoints. If it does, that vendor has to migrate, and their sync may break or slow down during the rollout.

## What actually changes

The announcement and the guide list the affected endpoints and their suggested alternatives. The main ones for most products:

- `/api/v2/incremental/tickets` and `/tickets/cursor` move to `/api/v2/tickets`.
- `/api/v2/incremental/ticket_events` moves to `/api/v2/ticket_audits`.
- `/api/v2/incremental/ticket_metric_events` moves to `/api/v2/tickets?include=metric_events`.
- `/api/v2/incremental/users` and `/organizations` move to the standard users and organizations endpoints.
- `/api/v2/help_center/incremental/articles` moves to `/api/v2/help_center/articles`.

Two Talk (voice) stats endpoints, for incremental calls and call legs, have no alternative listed at all. If your product depends on those, you have a product decision to make, not just a migration.

### Why this is not a find-and-replace

Zendesk's guide says plainly that the alternatives are not one-to-one replacements. The incremental endpoints gave you change tracking, ordered events, and deleted records in one stream. The standard endpoints are built for fetching specific records. When you swap them, check how your sync handles:

- **Change detection.** How do you find what changed since your last run without an incremental cursor?
- **Deleted records.** Incremental exports told you when something was deleted. Will you still find out?
- **Ordering and duplicates.** If events arrive in a different order or more than once, does your checkpoint logic still work?
- **Rate limits.** Pulling the same data through transactional endpoints usually means more requests. On a large customer account, a sync that took minutes could take hours.
- **Backfills.** Onboarding a new customer with years of tickets is the hardest case. Plan how you will do it on the standard APIs.

## The holiday timing problem

The rollout window is short and broken in the middle. It starts on 2 December, pauses for the holidays, and resumes in January. In practice your engineering team has about two working weeks in December before most people take time off, and the same is true of your customers' Zendesk admins.

That matters for two reasons. First, you cannot predict which of your customers' accounts will be switched in the first phase, so a working sync can fail on any day from 2 December. Second, if you need customers to do anything, like approve an extension or re-authorize your app, December is the worst month to ask.

If an agency built or maintains your integration, check now whether they are working through December. The pattern from [agency holiday shutdowns](/post-agency-holiday-shutdown) applies: the fix needs to ship before the people who can ship it leave.

## The extension, and why not to rely on it

Zendesk lets a customer's account admin request a 60-day extension for specific partners. Per the announcement, this starts in November 2026 and is done in Admin Center under Apps and integrations, then APIs, then API Configuration.

That is useful, but it is your customer's action, not yours. You would need every affected customer's admin to log in and request it on your behalf, which is a support campaign in itself. Use it as a safety net for your largest accounts if your migration slips, not as the plan.

## A plan for the next two weeks

For a startup with one Zendesk integration, this is roughly the order I would run it.

### This week: find every call

Search your code, workers, and connector configuration for `/incremental/` and for the specific endpoint paths above. Check background jobs and data pipelines, not just the main app. Then check logs for which endpoints are actually being hit in production; there is often a forgotten nightly backfill.

### Next: design the new sync

For each affected call, read the alternative endpoint's documentation and decide how you will detect changes, handle deletions, and checkpoint. Write it down in a short design note. This is usually a day of senior engineering time, and it is the step where most of the risk sits.

### Then: build, test on real data, and ship before the pause

Test against a real, large Zendesk account, not a sandbox with ten tickets. Measure how long a full sync and an incremental-style update take under rate limits. Ship behind a flag so you can switch accounts over one at a time.

### In parallel: tell your customers

Send a short note to customers who use the integration: what is changing, that you are on it, and what, if anything, you need from them. If you think you will miss the window for some accounts, ask those admins to request the 60-day extension early, before the holidays.

## The pattern behind this

Zendesk's own reasoning names AI workflows as the reason for the change, and that is the part worth noticing. The general lesson, covered in [when a platform closes its free API](/post-platform-closing-free-api), is that any integration whose core value is bulk-pulling data out of someone else's platform has a policy risk, not just a technical one. The more valuable that data becomes for training and grounding AI, the more protective platforms are likely to be about bulk access.

For founders, the practical step is to keep a list of every external API your product depends on, who owns each integration, and how you would hear about a change. Many teams discover these notices from a customer's support ticket, weeks after the email went to an engineer who has since left.

If you want help scoping the migration or a second opinion on your sync design, [book a call](/book-a-call). If you want a broader look at where else your product depends on a platform that could change the rules, a [teardown](/teardown) covers that.

## FAQ

### Does this affect companies that only use Zendesk internally?

According to Zendesk, internal use cases need no action and can keep using the Incremental APIs. The change targets third-party apps and integrations. Check whether any vendor tool you use pulls your data through these endpoints.

### When exactly will my integration stop working?

Zendesk gives a rollout window, not a single date: it starts 2 December 2026, pauses from 17 December to 4 January 2027, and is due to complete by 19 January 2027. Any given customer account could be switched at any point in that window, so plan to be migrated before 2 December where you can.

### Can I just swap the endpoint URLs?

No. Zendesk says the alternatives are not one-to-one replacements. You will likely need to change how you track changes, paginate, handle deletions, and stay under rate limits.

### What if there is no alternative endpoint for what we use?

Two Talk stats endpoints have no listed alternative. If you depend on them, contact Zendesk through its partner channels, and decide what your product does without that data. That is a product decision as much as an engineering one.
