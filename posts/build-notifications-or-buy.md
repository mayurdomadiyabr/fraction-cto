---
title: 'Build your notification system, or buy one?'
slug: build-notifications-or-buy
date: '2026-10-07T02:44:11.930Z'
category: Decisions
excerpt: >-
  Ten notification types is a function. Preferences, digests, and an in-app
  inbox are a product. When to buy instead of build.
description: >-
  Build notifications in-house or buy a platform like Knock or Novu? The three
  signals that tell an early-stage startup it is time to buy.
author: The founder of Fraction
readTime: 6
draft: false
---

Every product starts with one notification. A password reset, a "you have a new comment" email, a receipt. Somebody writes a function that sends it, and it works. Eighteen months later there are forty of those functions spread across the codebase, three channels, no way for a user to turn any of them off, and a customer success lead forwarding complaints from people who got the same alert six times in an hour.

Short answer: build the first handful of notifications yourself, directly on top of an email or push provider. Buy a notification platform once you need user preferences across channels, digests or batching, or an in-app inbox. Those three features are where the homegrown version quietly turns into a product of its own.

## What "notifications" actually means

Founders tend to picture notifications as "sending an email." That part is solved. You already rent delivery from an email provider, and if you have not, read [why you should buy email sending instead of running it](/post-build-email-sending-or-buy). The notification layer sits one level above delivery. It decides who gets told, on which channel, how often, and whether they asked not to be.

Once you list it out, the layer contains a lot:

- Templates for each event, per channel, often per language.
- Routing rules: email for this, push for that, Slack for admins.
- User preferences, so someone can mute marketing nudges but keep billing alerts.
- Batching and digests, so ten comments become one message instead of ten.
- An in-app inbox with read and unread state that stays in sync with what was emailed.
- Retries, failover between providers, and a log of what was sent to whom.

None of these is hard alone. Together they are a small product, with its own bugs, its own on-call pages, and its own roadmap that nobody budgeted for.

## When building it yourself is correct

If you have fewer than about ten notification types, one or two channels, and no user-facing preferences beyond "unsubscribe from marketing," build it. A table of event types, a template per event, and a call to your email or push provider is a few days of work and easy to reason about. Adding a vendor at this stage means another dashboard, another bill, and another place where templates live, for very little gain.

The build path stays sensible as long as you do two cheap things from day one:

1. Send every notification through one internal function, not forty scattered calls to the email SDK. That single choke point is what makes a later migration a week instead of a quarter.
2. Write a row for every send: user, event, channel, timestamp, provider message id. When a customer says "I never got the invite," you can answer in a minute instead of opening a support ticket with your email provider.

## The three signals that it is time to buy

### Users are asking for preferences

The first time a customer asks to mute one kind of alert without muting everything, you are building a preferences model. It needs a settings screen, a data model that covers every event and channel combination, defaults for new event types, and checks in every send path. Teams routinely get this subtly wrong, and the failure is visible: a user who opted out gets the message anyway and screenshots it.

### You need digests or batching

"Send one summary instead of twenty pings" sounds like a small feature. It means holding events in a window, grouping them per user, deciding when to flush, and handling the case where the user reads the item in the app before the digest goes out. That is scheduling and state, the same territory that makes [background jobs fail silently](/post-background-jobs-fail-silently) when nobody watches them.

### You want an in-app inbox

A notification feed inside the product, with read state, badges, and real-time updates, is a front-end component plus a backend service plus a sync problem with your other channels. Platforms in this space, such as Knock, Courier, and the open-source Novu, sell exactly this bundle: a workflow engine, preferences, digests, and drop-in inbox components. You still bring your own email and push providers underneath.

If two of these three are on your roadmap for the next two quarters, buying is almost always cheaper than the engineer-months it takes to build and then maintain them.

## What buying does not solve

A platform does not decide what is worth notifying. The most common notification problem I see in early-stage products is not infrastructure. It is that every event fires a message because adding one was easy, and users train themselves to ignore all of them. Before you buy anything, list every notification you send, who receives it, and what action you expect them to take. Delete the ones with no action. That exercise often removes a third of the list and makes the build-or-buy question smaller.

Buying also does not remove your delivery problems. If your emails land in spam, a notification platform sitting on top of the same sender reputation will land in spam too.

## How to pick without locking yourself in

Keep the choke point. Your code should call `notify(user, event, data)` and nothing else; the vendor sits behind that function. This is the same reasoning as a [thin vendor abstraction layer](/post-vendor-abstraction-layer): not a grand framework, just one place to change if the vendor raises prices or disappoints you.

Then check four things during a trial:

- Can you export your templates and preference data in a usable format?
- How does pricing scale: per message, per monthly active user, or per seat? Model it at ten times your current volume.
- Does it support the channels you will need in the next year, not just today?
- If the vendor is down, what happens to your password resets? Critical transactional messages often deserve a direct path to the email provider that does not depend on the notification platform.

That last point matters more than it looks. A sign-up flow that cannot send a verification email because a third layer of infrastructure is having a bad afternoon is a revenue problem, not a notification problem.

## What it costs to get wrong

Getting this wrong rarely makes headlines. It looks like an engineer spending a fifth of their time on notification edge cases, a growing pile of "too many emails" churn reasons in exit surveys, and a migration nobody wants to start because sends are scattered across the codebase. The cost is slow and real.

If you are unsure whether your notification setup is a quiet tax on the team, it is one of the things we look at in a [technical teardown](/teardown). And if you want a second opinion on a specific build-or-buy call before committing engineer time, [book a call](/book-a-call).

## FAQ

### How many notification types justify a platform?

There is no magic number, but in my experience the count matters less than the features. Ten notification types with per-user preferences and digests is more work than thirty fire-and-forget emails. Buy when preferences, batching, or an in-app inbox show up on the roadmap.

### Can we start with a platform from day one?

You can, and some teams do to get an in-app inbox early. The cost is another vendor and another bill before you know which notifications matter. For most pre-seed products, a single internal send function on top of an email provider is enough.

### Should password resets go through the notification platform?

I prefer to keep authentication emails on a direct path to the email provider, so a platform outage cannot block sign-in. Everything else can go through the platform.

### Is the open-source option cheaper?

Self-hosting removes the license fee and adds hosting, upgrades, and on-call for one more service. It is cheaper only if someone on the team already runs similar infrastructure comfortably.
