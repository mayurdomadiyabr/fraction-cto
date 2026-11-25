---
title: Your product needs booking. Build calendar sync or buy it?
slug: build-booking-calendar-sync-or-buy
date: '2026-11-25T02:44:29.982Z'
category: Decisions
excerpt: >-
  The slot picker is easy. Keeping your bookings in step with Google and Outlook
  calendars is where booking projects stall.
description: >-
  Build booking yourself or buy scheduling and calendar sync? The three kinds of
  booking, why sync is hard, and the time zone rules to follow.
author: The founder of Fraction
readTime: 5
draft: false
---

If your product needs customers to book time, the slot picker is the easy part and calendar sync is the hard part. Build the booking flow yourself if you only need slots from your own database. Buy a scheduling or calendar-sync service the moment bookings must check, and write to, people's Google or Microsoft calendars, because keeping two calendars in agreement is where these projects stall.

I see this in clinics, tutoring marketplaces, field services and B2B demo tools. The founder sketches a grid of times, a confirm button and a confirmation email, and estimates two weeks. Two months later the team is debugging why a slot showed as free when the provider had a meeting there.

## The three products hiding inside "booking"

When a founder says "we need booking", they usually mean one of three different things. They have very different costs.

### 1. Slots from your own data

A provider sets weekly hours in your app, customers pick an open slot, and your database is the only source of truth. This is a normal feature. Build it. The real work is time zones and daylight saving changes, which I come back to below.

### 2. Slots that respect an outside calendar

The provider also lives in Google Calendar or Outlook, and a dentist appointment they added on their phone must block a slot in your app. Now you are reading someone else's calendar, continuously, and acting on what you find.

### 3. Two-way sync

Bookings made in your app must appear on the provider's calendar, and changes on either side must flow to the other. A cancellation in Outlook should free the slot in your app. This is a distributed systems problem dressed up as a feature.

Most of the projects I review that ran late started as type 1, got promised as type 3 in a sales call, and were never re-estimated.

## Why calendar sync is hard

The calendar providers give you good APIs. What they cannot give you is a guarantee that your copy matches theirs.

- **Changes arrive as hints, not data.** Google Calendar's push notifications tell you that something changed, with no message body; you then have to call the API to find out what ([Google Calendar push notifications](https://developers.google.com/calendar/api/guides/push)). Notification channels also expire and must be renewed.
- **Incremental sync can be reset on you.** Google's sync guide says the server can invalidate a sync token, for example when it expires, and answers your next incremental request with a 410 error; the documented response is to wipe your local copy and do a full sync ([Synchronize resources efficiently](https://developers.google.com/calendar/api/guides/sync)). Your code has to handle that path well, at 3am, for every connected calendar.
- **Permissions break silently.** A provider changes their password, leaves the company, or revokes access. Their calendar quietly stops updating and your app keeps offering slots they cannot take. I covered this class of failure in [the OAuth token risk in SaaS integrations](/post-saas-integration-oauth-token-risk).
- **Two systems, two providers.** Google and Microsoft behave differently, and many customers need both.
- **Duplicate and out-of-order events.** The same change can be reported twice or arrive after a later one. Treat every incoming change the way you would treat [a webhook that arrives twice](/post-webhook-arrived-twice).

None of this is exotic. It is a few months of careful work, followed by permanent on-call for a feature customers notice instantly when it is wrong. A double-booked appointment is the kind of bug that loses a customer in one go.

## Time zones are the part everyone gets wrong

Even type 1 bookings break here. The rules I give every team:

- **Store the instant and the zone.** Save the booking as a point in time plus the provider's time zone name (for example "America/New_York"), not as a local time string. I go deeper on this in [the data types for money and time](/post-money-and-time-data-types).
- **Store recurring hours as local rules.** "Mondays 9 to 5 in New York" must stay 9 to 5 after the clocks change. If you save it as UTC times, every daylight saving change shifts every provider by an hour.
- **Show times in the viewer's zone, and say which zone it is.** "10:00 (your time, London)" prevents most support tickets.
- **Test the two daylight saving weekends** in the zones your customers use before you launch, not after.

## When to buy, and what to buy

Buy when you are in type 2 or 3. There are two broad options:

- **An embedded scheduling product.** You drop a booking widget or use a scheduling API, and the vendor owns availability, calendar connections and reminders. Fastest to launch; least control over the experience.
- **A calendar-sync API.** You keep your own booking logic and UI, and a vendor handles the connections to Google and Microsoft and gives you one consistent interface. More work, more control, and the hard sync problems stay with the vendor.

Before you sign either, check the same things I check for any infrastructure vendor: price per connected calendar at 10x your current users, what happens to bookings if their API is down, and whether you can export everything. Keep their calls behind your own small interface so switching later is a project, not a rewrite. If you are making several of these calls at once, the general method is in [build, buy, or wait](/post-build-buy).

## When building sync is justified

Build two-way sync yourself only if scheduling is your core product, you have an engineer who has done it before, and you are willing to own it permanently. A scheduling company should own its sync engine. A physiotherapy marketplace should not.

## FAQ

### How long does it take to build a booking system?

A booking flow on your own data, with time zones handled properly, is typically two to four weeks for one experienced engineer. Reliable two-way sync with Google and Microsoft calendars is usually measured in months and needs ongoing maintenance. These are rules of thumb from projects I have reviewed, not benchmarks.

### Can we start with one-way sync and add two-way later?

Yes, and it is a good staging plan. Reading busy times from a provider's calendar to block slots is much simpler than writing bookings back and reconciling edits. Ship read-only first, then decide whether two-way is worth it based on real requests.

### Do we need to support both Google and Microsoft calendars?

Look at your customers. Consumer-facing providers lean Google; many businesses run on Microsoft 365. If your buyers are companies, assume you need both, which is a strong argument for a sync vendor.

### What is the most common booking bug you see?

Recurring availability stored in UTC, so every provider's hours shift by an hour after a daylight saving change. It is easy to prevent and painful to clean up once bookings exist.

If booking is on your roadmap and the estimate feels too small, a [short call](/book-a-call) is a cheap way to size it properly. If you already have a calendar integration that keeps drifting, a [technical teardown](/teardown) will show where it is losing changes.
