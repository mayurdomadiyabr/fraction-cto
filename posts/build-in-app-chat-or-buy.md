---
title: Users need to message each other in your app. Build chat or buy?
slug: build-in-app-chat-or-buy
date: '2026-11-25T02:44:29.730Z'
category: Decisions
excerpt: >-
  Why in-app chat looks like a sprint and becomes a product, and the four cases
  where building it yourself is the right call.
description: >-
  When to build in-app chat yourself and when to buy a chat API: hidden costs,
  vendor checks, and the four cases where building wins.
author: The founder of Fraction
readTime: 6
draft: false
---

If your users need to message each other inside your product, buy the chat layer unless messaging is the product itself. A basic send-and-receive box takes days to build. Read receipts, unread counts, offline sync, push notifications, attachments and moderation take months, and they are the part users judge you on. Build only when chat is your core value, your data rules forbid a vendor, or your volume makes the vendor bill larger than a small team.

I get this question most from marketplace and services founders: a buyer needs to talk to a seller, a client to a coach, a patient to a clinic. The founder sees a text box and a list of messages and assumes it is a sprint. The first version usually is. The second year is where the cost lives.

## Why chat looks small and is not

The demo version of chat is a table of messages, a form that inserts a row, and a screen that polls for new rows. That really is a few days of work, and for an internal tool it can be enough. What turns it into a project is the list of things users now expect because every chat app on their phone does them:

- **Real-time delivery.** Messages appear without a refresh, which usually means a persistent connection. If you have not needed one yet, read [whether you need WebSockets or polling will do](/post-do-you-need-websockets-yet) first, because chat is often the feature that forces the answer.
- **Unread counts and read receipts.** Counting unread messages per user per conversation sounds trivial until a user is in 300 conversations across three devices.
- **Offline and multi-device sync.** A message sent from a phone on a train should arrive once, in order, and show up on the laptop too.
- **Push notifications.** Mobile push, email fallback when the app is closed, and quiet hours. This is its own system; I covered it in [build your notification system or buy one](/post-build-notifications-or-buy).
- **Attachments.** Images, PDFs, previews, virus scanning, size limits, storage costs.
- **Search across message history.** Users expect to find "the address you sent me in March".
- **Moderation and reporting.** Blocking, reporting, spam filtering, and someone to read the reports.

None of these is hard alone. Together they are a product, and a team building them is not building the thing customers pay you for.

## The case for buying

Hosted chat vendors sell exactly that list as SDKs and APIs. You keep your users and your UI; they run the message store, the connections, the delivery guarantees and usually the moderation tools. Most of the public build-versus-buy writing comes from those vendors, so treat their cost comparisons as sales material. The direction is still right in my experience: the integration is measured in weeks and the in-house version in quarters, and the in-house version keeps costing after launch.

The pattern I see in teardowns is a homegrown chat that worked fine at 200 users, then started losing messages or double-counting unreads at 5,000, and an engineer who now spends a third of every sprint on it. That engineer was hired to build the marketplace.

### What you give up

- **A per-user bill.** Most vendors price on monthly active users or message volume. Model it at today's numbers and at 10x before you sign, the same way you would for any [usage-based bill that can surprise you](/post-surprise-usage-bill-first-48-hours).
- **Your users' messages on someone else's servers.** If you handle health, legal or financial conversations, check where the data lives, whether the vendor will sign the agreements your customers need, and whether you can export everything.
- **Some lock-in.** The SDK ends up in your mobile and web code. Keep vendor calls behind a thin layer of your own so a later switch is a contained project; I explain how much abstraction is worth it in [the vendor abstraction layer](/post-vendor-abstraction-layer).

## When building is the right call

Build when one of these is true, and be honest about which:

1. **Messaging is the product.** If you are building a communication tool, a community platform or anything where conversations are the core value, the chat layer is your differentiation. Own it.
2. **Your data rules rule out a vendor.** Some regulated buyers will not accept customer messages stored with a third party, or need them in a region no vendor covers. Confirm this with a real customer contract, not a guess.
3. **Your volume flips the math.** At very high active-user counts, a vendor bill can exceed the cost of two or three engineers. Most early startups are nowhere near this, and by the time you are, you will know.
4. **You need something narrower than chat.** A comment thread on an order, a single message to a support team, or an async note on a booking is not chat. A table, an email notification and a page refresh may be all it needs.

That fourth case is the most common one I find. Founders reach for "chat" when what users need is a message thread attached to a transaction, with no presence, no typing indicators and no group conversations. Scope the smallest thing that solves the problem before choosing a tool.

## How I would decide in an afternoon

### Write down what conversations happen

Who talks to whom, how often, and does a slow reply cost anyone money? A seller missing a buyer question for two hours may lose a sale. A client note to a coach can wait a day.

### Pick the smallest shape that fits

- **Async thread on a record**, with email notification: build it, it is a small feature.
- **Real-time one-to-one chat** with read receipts and push: buy, unless one of the four build reasons applies.
- **Group chat, communities, voice or video**: buy, and budget for moderation from day one.

### Check the three vendor questions

Before signing, get answers on price at 10x your current active users, full message export in a documented format, and where data is stored. If any answer is vague, that is your answer about the vendor.

### Plan for moderation either way

The first abusive message is not a technical problem. Someone needs to own reports, decide what gets removed, and respond within a set time. Buying the tooling does not buy the person.

## FAQ

### How long does it take to build basic in-app chat?

A simple send-and-receive thread with polling is a few days for one engineer. Real-time delivery, unread counts, read receipts, push notifications, attachments and moderation together are usually several months, plus ongoing maintenance. These are rules of thumb from projects I have reviewed, not benchmarks.

### Is a chat vendor too expensive for an early startup?

Usually not at early volume. Most price on monthly active users, so the bill is small while you are small. Model the cost at 10x your current users before you commit so a growth spurt does not turn into a margin problem.

### Can we start with a vendor and build our own later?

Yes, if you plan for it. Keep vendor calls behind your own interface, make sure you can export all message history, and store your own copy of who is in which conversation. Then a move is a migration, not a rewrite.

### Do we need moderation if our users are verified businesses?

You need less, but not none. Verified users still send spam, share contact details to avoid your fees, and occasionally harass each other. At minimum have a report button, a block feature and a named person who handles reports.

If you are weighing chat against the rest of your roadmap and want a second opinion on scope, a [short call](/book-a-call) is usually enough to settle it. If you already built chat and it is eating your sprints, a [technical teardown](/teardown) will show what to keep and what to replace.
