---
title: Do you need a public status page yet?
slug: do-you-need-a-status-page-yet
date: '2026-11-09T04:11:21.938Z'
category: Knowing when
excerpt: >-
  When a status page earns its place at an early startup, what to set up first,
  and the mistakes that make one worse than none.
description: >-
  When an early startup needs a public status page, what to put on it, and the
  cheap setup that works before you have one.
author: The founder of Fraction
readTime: 7
draft: false
---

Short answer: you need a public status page once paying customers depend on your product during their working day and an outage would make more than a handful of them email you at once. Before that, a pinned message and a fast personal reply do the job better. What you need on day one is not the page, it is the habit of telling customers what is broken before they tell you.

I get asked this most often right after a bad outage. A founder spent two hours answering the same "is it down?" email forty times, and now they want a status page by Friday. That instinct is right, but the page is the last and least important part of the fix. The useful question is what problem you are solving, and whether a page is the cheapest way to solve it at your stage.

## What a status page actually does for you

A status page does three jobs, and they matter at different times.

The first job is deflection. When something breaks, customers want to know if it is them or you. A page they can check answers that question without anyone on your team typing a reply. This is worth real money once your support inbox would otherwise flood during an incident, and it is worth almost nothing when you have twelve customers who all have your phone number.

The second job is trust over time. A public history of incidents, written plainly, tells a prospect that you notice problems and own them. Enterprise buyers and their security reviewers often ask where your status page is. If the answer is "we do not have one", it is rarely a deal-breaker on its own, but it is one more small sign that the company is early.

The third job is discipline. Writing a status update forces someone on your team to say, in public, what is affected and when the next update comes. That is a useful forcing function for a team that tends to go quiet while it debugs.

Notice that none of these jobs needs a paid tool on day one. All three need a person who owns communication during an incident.

## The stages, and what each one needs

### Pre-launch and private beta

You do not need a public page. You have a small number of users, you probably know most of them by name, and your product will break often while you are still learning what it is. A public page full of red during this stage helps nobody. What you need is a channel you can post to in one minute: a pinned note in your app, a shared Slack channel with design partners, or a short email list. Decide now who sends the message and what it says.

### First paying customers

This is where most founders either overbuild or do nothing. The right move is usually a simple page you can update by hand, plus basic uptime monitoring that tells you about an outage before a customer does. Many status page tools have a free tier that covers a small team, and a manually updated page is completely fine at this size. The monitoring matters more than the page. If you are learning about outages from customer emails, fix that first. I wrote about when monitoring starts paying for itself in [when to pay for observability](/post-flying-blind-in-prod-when-to-pay-for-observability).

### Customers who run their business on you

Once customers rely on you during their working hours, and especially once you sign a contract with an uptime commitment, a public page stops being optional. At this stage the page should be linked from your app and your help docs, and incident updates should go out on a predictable rhythm. If your contracts promise a number, read [your SLA promise vs your architecture](/post-sla-promise-vs-architecture) before you publish uptime history, because the page will show exactly how close you are to that promise.

## Signs you need one now

- The same "is it down?" question arrives from five or more customers within an hour of an incident.
- A customer or prospect has asked for your status page during a security review or procurement.
- You have a contract that names an uptime percentage or a response time.
- Your team goes silent during incidents because everyone is debugging and nobody owns updates.
- You have customers in time zones where nobody on your team is awake during their working day.

If two or more of these are true, set up a page this month. If none are true, you are early, and a pinned message is enough.

## What to put on the page, and what to leave off

Keep it about customer impact. "Login is failing for some users. We are investigating. Next update in 30 minutes." is a good update. It names what is affected, states what you are doing, and commits to the next message.

Leave off the internals. Stack traces, internal hostnames, the name of the vendor you think is at fault, and speculation about root cause all belong in your internal channel. Publishing a guess and then correcting it costs more trust than saying "we are investigating" for another twenty minutes.

List components the way customers see your product, not the way your architecture is drawn. Customers understand "Dashboard", "API", and "Email notifications". They do not understand "worker-queue-2".

Write a short closing note after each real incident: what happened, how long, and what you changed. Two or three sentences is plenty for a small company.

## Mistakes I see founders make

### Automating it before anyone owns it

A page that flips to green automatically while customers are still seeing errors is worse than no page. Automated checks are useful, but early on a human should confirm every public status change. The common failure is a health check that pings your homepage, which stays up while the part of the product customers actually use is broken.

### Hosting the status page on the same thing that goes down

If your status page runs on the same servers, the same domain setup, or the same cloud account as your product, it can disappear in exactly the outage it exists for. Use a separate provider or at least a separate host. The same logic applies to your domain and DNS, which I covered in [the domain that expired and took everything with it](/post-domain-or-certificate-expired).

### Treating the page as the incident process

The page is the visible end of a process. Behind it you need someone who is on point, a way to reach them, and a rule for when to post. If you do not have that yet, start with [when your startup actually needs on-call](/post-when-do-you-need-on-call). A status page with nobody behind it is a page that goes stale.

## How I would set this up in a week

1. Name one person who owns customer communication during incidents, and a backup.
2. Add external uptime checks on the two or three things customers actually do, such as logging in and loading the main screen.
3. Set up a simple hosted status page on a separate provider, with components named the way customers see them.
4. Write three template updates: investigating, identified, resolved.
5. Link the page from your app footer and help docs, and tell your largest customers it exists.

That is a few hours of work and close to zero cost at early stage. The hard part is the habit, not the tool.

## FAQ

### Is a status page a sign of an unreliable product?

No. Buyers read a status page with a few honest incidents as a sign that you notice problems. A product with no page and no incident history usually just means nobody is looking.

### Should the page be public or private?

Public for customer-facing products with paying users. A private page, shared only with design partners or one big customer, is a reasonable middle step before launch.

### Do we need to report every small blip?

Report anything a customer would notice. Short internal hiccups that nobody outside your team saw do not need a public post, but keep a record of them internally.

### Can a non-technical founder run this?

Yes. Writing clear updates is a communication job. You need an engineer to tell you what is affected, and you can own the words.

If you want a second opinion on whether your monitoring and incident setup matches your stage, a [technical teardown](/teardown) covers exactly this, or you can [book a call](/book-a-call) and we can walk through it together.
