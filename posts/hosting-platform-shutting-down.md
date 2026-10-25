---
title: Your hosting platform is shutting down. A four-week migration plan
slug: hosting-platform-shutting-down
date: '2026-10-25T15:27:28.962Z'
category: Decisions
excerpt: >-
  When a hosting provider announces a shutdown, the first date that breaks
  matters more than the last. A week-by-week plan to move without losing data.
description: >-
  Hosting platform shutting down? Back up first, pick the closest destination,
  rotate secrets, and cut over before the first deadline. A 4-week plan.
author: The founder of Fraction
readTime: 7
draft: false
---

If your hosting platform announces it is shutting down, treat the announced end date as the latest possible date, not the plan. Back up every database and file store this week, before anything else. Then pick the closest equivalent destination, not the ideal one, move one non-critical service first to learn the path, and cut over production with fresh secrets and lowered DNS times well before the provider's first shutdown step. Most small teams can do this in two to four weeks if they start now. The teams that get hurt are the ones that wait for the final deadline.

This is not hypothetical this month. On 17 October 2026, Zeabur, a deployment platform popular with small teams and AI-built apps, [announced it is winding down](https://zeabur.com/blogs/zeabur-is-shutting-down). Its post says new dedicated servers and domains can no longer be bought, dedicated servers stop renewing from 1 December and shut down on their own expiry dates, services on shared clusters are paused on 1 December (they can be restarted manually to back up data), and everything stops by 31 December. The data deletion date and the final export deadline were listed as still to be announced. The company cited two security incidents, one in late August and one on 14 October, alongside the cost and complexity of keeping the platform running.

I am not writing about Zeabur specifically. Small hosting platforms, managed databases, low-code backends and AI app builders all carry the same risk, and every one of them can make this announcement. What matters is what a startup does in the weeks after.

## Read the timeline the way an engineer would

Founders tend to read a shutdown post and remember the last date. Engineers should read it for the first date on which something breaks.

In the Zeabur case that is 1 December for anything on shared infrastructure, not 31 December, because that is when running services are paused. For dedicated servers it is each server's own expiry date, which could be the first week of December. The post itself warns that the final date does not mean every service will keep running until then.

Two other things in an announcement like this deserve attention.

### Deadlines that are not set yet

When a provider says the data deletion date is "to be announced", plan as if it could be the same day as the shutdown. Never assume you will get a grace period to export.

### A breach on top of a shutdown

If the shutdown follows a security incident, your migration is also a credential rotation. Anything stored on the old platform, such as database passwords, API keys and payment provider keys, should be treated as known to someone else. Do not copy the old secrets to the new host. Generate new ones as part of the move, then revoke the old ones once the cutover is done. I wrote about the order to rotate in when [your host says your secrets may be exposed](/post-platform-env-variables-exposed).

## Week one: get your data out

Before you choose a new provider, make sure you could survive the old one disappearing tomorrow.

1. **List every service** you run on the platform: web apps, background workers, cron jobs, databases, caches, object storage, domains and email settings.
2. **Back up every database** with the native dump tool, store the dumps somewhere you control, and test-restore at least one to a local machine. A backup you have never restored is a hope, not a backup. This is the same discipline I describe in [keeping backups outside your cloud provider](/post-backups-outside-your-cloud-provider).
3. **Copy file storage and uploads**, including user uploads that might live on a disk attached to the app rather than in proper object storage.
4. **Export environment variables and configuration** into a secure place, so you know what the new environment needs. You will replace the secret values later.
5. **Move domains** you bought through the platform to a registrar you control. Domain transfers can take days, and a domain stuck at a closing provider is a serious problem.

At the end of week one you should be able to say: if the platform vanished tonight, we would lose time, but not data.

## Week two: choose the closest destination, not the perfect one

A forced migration is the worst time to redesign your infrastructure. The goal is to land somewhere stable that runs your current application with the fewest changes.

For most small teams that means another managed platform with a similar model: you push code, it builds a container, it runs it, and it offers a managed database. If your app already runs in a container with a Dockerfile, almost any modern platform will take it. If it relies on the old platform's own build system or proprietary features, list those dependencies now, because they are where the time will go.

Avoid two tempting mistakes. The first is moving straight to a large cloud provider with a hand-built setup because "we will need it eventually". That may be right later, but it turns a two-week move into a two-month project. The second is choosing whichever platform an AI coding tool suggests by default without checking its pricing, region support and track record. I covered how to weigh [a slow-moving platform you might need to leave](/post-heroku-sustaining-mode-stay-or-move), and the same questions apply here, just faster.

## Week three: rehearse, then cut over

Move one low-risk service first, such as an internal tool or a staging environment. It will surface the surprises: a missing environment variable, a build step that behaved differently, an outbound IP address a partner had allowlisted.

Then plan the production cutover.

- **Lower DNS TTLs** a few days before the switch, so changes take effect quickly.
- **Restore a fresh database dump** into the new environment and test the application against it.
- **Generate new secrets** for the new environment rather than reusing old ones.
- **Pick a quiet window**, announce a short maintenance period if you need one, freeze writes, take a final dump, restore it, switch DNS, and watch error rates closely.
- **Keep the old environment read-only** for a few days in case you need to roll back or recover a record, as long as the provider's timeline allows it.

Rotate and revoke every old credential afterwards. Update webhook URLs with payment providers and other partners, and check that email sending still works from the new location, because those are the things that fail silently.

## Week four: clean up and write down what you learned

Once production is stable, remove the old services, confirm that no traffic is still reaching the old platform, and request any refund or credit you are owed. Then spend an hour on the uncomfortable question: how exposed were we, and what would we do differently?

## Choosing platforms so the next one hurts less

Shutdowns cannot be predicted, but you can reduce how much one costs you. The habits I push early teams towards:

- **Package the app in a standard container**, so you can run it on any provider.
- **Use standard databases** such as Postgres or MySQL, rather than proprietary data stores, unless the proprietary feature is worth the lock-in.
- **Keep domains, DNS and backups with providers you control**, separate from your hosting.
- **Keep infrastructure settings in your repository**, not only in a web dashboard.
- **Rehearse a restore once a quarter.** It doubles as practice for a forced move.

None of this means avoiding small platforms. They are often the right choice for a seed-stage company, and the developer experience is worth paying for. The point is to know your exit before you need it. I made a similar argument about [cloud services that get retired](/post-cloud-provider-retires-service), and [whether a tool is worth the cost of leaving](/post-migrate-or-stay-tool).

If you are facing a forced move right now and want a second view on the plan, you can [book a call](/book-a-call) and we can go through your setup. A [technical teardown](/teardown) is the right fit if you want an outside check on where your stack is exposed to a single vendor before it becomes urgent.

## FAQ

### How long does it take to move a small app off a closing platform?

For a typical early-stage app with a web service, a worker and a Postgres database, two to four weeks of part-time work is realistic, with most of the time spent on testing and edge cases rather than the move itself. Proprietary features or large databases make it longer.

### Should we move to AWS, Google Cloud or Azure instead?

Only if you have someone who can run it and a reason beyond "we will need it eventually". Under deadline, a similar managed platform is usually the safer move. You can plan a larger migration later, without the clock running.

### What if the provider has not set a data export deadline?

Assume it could arrive with little notice. Take full backups now, and take them again just before cutover, so you are not depending on the provider's timeline.

### Do we need to tell customers we are moving hosts?

If there will be downtime, or if the old provider had a security incident that may have exposed customer data, yes. Check your contracts and your data protection obligations, and get legal advice if personal data may have been affected.
