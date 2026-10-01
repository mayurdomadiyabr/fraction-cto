---
title: Heroku is in sustaining mode. Should your startup move?
slug: heroku-sustaining-mode-stay-or-move
date: '2026-10-01T04:16:30.077Z'
category: Decisions
excerpt: >-
  Heroku stopped adding features in 2026. For most startups the right move is
  not a migration yet, it is making sure you could leave in weeks.
description: >-
  Heroku moved to sustaining engineering in 2026. How founders should decide
  whether to stay or migrate, and how to make leaving cheap.
author: The founder of Fraction
readTime: 7
draft: false
---

If your product runs on Heroku, you have probably seen the headlines: Heroku is in "sustaining engineering" mode, and a stream of vendor blogs is telling you to migrate now. Before you put a migration on the roadmap, look at what was actually announced and what it means for a company your size.

The short answer: for most seed and Series A startups on Heroku, nothing has to move this quarter. Heroku said current customers see no change in pricing, billing or service, and that it is focusing on stability, security and support. What changed is the long-term bet. A platform that is no longer adding features is a platform you should be able to leave on your own schedule. So the right move today is not a migration. It is making sure you could migrate in weeks rather than months, and deciding the trigger that would make you do it.

## What Heroku actually said

On February 6, 2026, Heroku's chief product officer published [An Update on Heroku](https://www.heroku.com/blog/an-update-on-heroku/). The key points, from the post itself:

- Heroku is moving to a sustaining engineering model focused on stability, security, reliability and support, rather than new capabilities.
- Customers paying by credit card see no change to pricing, billing, service or day-to-day operations.
- New enterprise account contracts are no longer offered. Existing enterprise subscriptions and support contracts are honoured and can renew.
- Salesforce is directing product investment towards other areas, including enterprise AI.

That is a much narrower statement than "Heroku is shutting down," which is how some of the coverage reads. The platform is still running and still supported. What has ended is the expectation that it will keep getting better.

## Why "no change" is still a change

A platform in maintenance mode is not an emergency. It is a slow shift in risk, and founders tend to underreact to slow shifts until one becomes urgent.

Here is what that shift looks like in practice.

**The gap between you and the market widens.** New capabilities in hosting, such as better autoscaling, cheaper compute options, built-in observability or AI-related runtime features, will arrive on other platforms first, if not only there. Each year you stay, the distance between what you have and what you could have grows.

**Your negotiating position weakens if you are larger.** New enterprise contracts are no longer offered. If you were planning to graduate from a credit-card account to an enterprise agreement as you grew, that path is gone for new customers. Check what your current plan and contract actually say before assuming.

**Talent and tooling drift away.** Engineers you hire will increasingly have experience on other platforms. Third-party tools and integrations follow where the growth is. None of this breaks your app; it just makes everything around it slightly harder each year.

**A future announcement is more likely than it was.** We have no information about Heroku's future plans beyond the published post, and we are not predicting one. But a platform that has stopped investing is, by definition, closer to a pricing change or a sunset than one that is growing. The cheapest time to prepare is before any second announcement.

## The question that matters: how stuck are you?

The decision is not really "Heroku or not." It is "how long would it take us to leave, and is that acceptable?" You can answer that in an afternoon.

Walk through your setup and score each item as portable, moderate, or sticky.

**The app itself.** If your app runs from a standard buildpack or a Dockerfile, reads configuration from environment variables, and keeps no state on the dyno's filesystem, it is portable. Most twelve-factor apps move to another container platform with modest work.

**The database.** This is usually the biggest piece. A managed Postgres database can be moved, but you need a plan for the data copy, the cutover window and the connection changes. A few gigabytes is an evening; hundreds of gigabytes with tight downtime limits is a project.

**Add-ons.** List every add-on: Redis, queues, search, logging, email, scheduling. Each one needs a replacement and a migration. This list is often longer than founders expect, and each item carries its own configuration and credentials.

**Platform-specific features.** Review apps, pipelines, release phase commands, scheduler jobs, and any custom buildpacks are conveniences that need an equivalent elsewhere. None is hard alone; together they make up the long tail of a migration.

**Knowledge.** Who on the team knows how the deployment actually works? If the honest answer is "the contractor who set it up two years ago," you have a [server nobody can rebuild](/post-server-nobody-can-rebuild) problem, and that matters more than which platform you are on.

If most items are portable and your database is small, you are in a strong position: you can stay, and leave in a few weeks if you ever need to. If several items are sticky, your real risk is not Heroku. It is that you cannot move quickly from anywhere.

## Three reasonable paths

**Stay and prepare.** For most early-stage companies this is the right default. Keep running on Heroku, but spend a few days removing the sticky parts: containerise the app with a Dockerfile, document the deploy and every add-on, make sure database backups can be restored somewhere else, and write down the steps a migration would take. You get optionality for a small cost.

**Move on your own schedule.** If you were already outgrowing Heroku on cost or capability, the announcement is a good reason to stop deferring. Plan it so it does not become a [migration that stalls halfway](/post-stalled-migration-finish-or-roll-back): move one service first, run old and new in parallel, cut over the database last, and set a firm date to switch off the old setup so you do not end up running both.

**Move now.** Only when there is a concrete trigger: you need an enterprise contract you can no longer get, a compliance requirement the platform will not meet, a capability you need that is not coming, or a cost curve that already hurts. Moving because of a headline, in the middle of a fundraise or a big customer launch, is the expensive version.

Whichever path you choose, decide the destination by your team's skills and your workload, not by which vendor blog was most persuasive. A managed container platform, a different PaaS, or a cloud provider's own services can all be right. Our posts on [whether to self-host or pay for managed](/post-self-host-or-managed) and [when leaving a tool is worth the cost](/post-migrate-or-stay-tool) go deeper on the trade-offs.

## A composite example

A seed-stage SaaS company with two engineers ran on Heroku with Postgres, Redis, a scheduler and a logging add-on. After the announcement, the founder asked whether to migrate. We scored the setup: the app was already containerised, the database was around 20 GB, and the add-ons were standard. The verdict was "stay, and spend three days making it portable." The engineers documented the deploy, tested a database restore on another provider, and wrote a one-page migration plan with the trigger: migrate if the bill crosses a set monthly figure or if the company signs a customer that needs an enterprise hosting agreement. Total cost: under a week of engineering time, and the risk was no longer open-ended.

That is an illustrative composite, but the pattern is common. The value is in turning a vague worry into a written trigger.

## What to tell investors and customers

If the question comes up in diligence or a security review, answer it directly: you are on Heroku, the platform is in sustaining mode, you have assessed your portability, and here is your plan and trigger. That answer reads as competent. "We have not thought about it" reads as a risk, and so does an unplanned migration in the middle of a raise.

## Where outside help fits

If you are a non-technical founder, the hard part is judging how sticky your setup really is. A [technical teardown](/teardown) can score your hosting, database and add-ons, and give you a stay-or-move recommendation with a concrete trigger. If you want to talk it through, [book a call](/book-a-call).

## Frequently asked questions

### Is Heroku shutting down?
No. On February 6, 2026, Heroku announced a sustaining engineering model focused on stability, security, reliability and support. It said credit-card customers see no change, and existing enterprise contracts are honoured and can renew. New enterprise contracts are no longer offered.

### Do I need to migrate off Heroku right now?
Usually not. Most early-stage startups should stay, make their setup portable, and write down the trigger that would make them move. Migrate now only if you need something Heroku will no longer provide, such as a new enterprise contract.

### What is the hardest part of leaving Heroku?
For most apps it is the database cutover and the long tail of add-ons and platform features like scheduled jobs and review apps. The application code itself is usually the easiest part if it already runs in a container.

### How do I make my app easier to move later?
Containerise it with a Dockerfile, keep all configuration in environment variables, document every add-on, test restoring your database backups on another provider, and make sure more than one person knows how deploys work.
