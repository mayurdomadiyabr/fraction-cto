---
title: Customers save a change and still see the old data
slug: customers-see-old-data-after-saving
date: '2026-11-10T02:45:13.264Z'
category: Pattern recognition
excerpt: >-
  When saves seem to vanish or flip back, caching or a lagging replica is
  usually serving a stale copy. Here is the fix.
description: >-
  Why stale caches and replica lag make saves look lost, why it hurts trust more
  than slowness, and the fixes in order.
author: The founder of Fraction
readTime: 5
draft: false
---

If customers save a change and still see the old value, refresh and see it flip back, or see different answers on different pages, the cause is almost always caching or reading from a database copy that has not caught up yet. It is a correctness bug, not a speed bug, and it erodes trust faster than slowness does. The fix is to make sure a user always sees their own writes, invalidate caches after the database commit rather than before, and keep cache lifetimes short for anything a user can edit.

I see this pattern most often a few months after a team added caching to fix performance. The app got faster. Then the support tickets changed from "it is slow" to "it did not save."

## Why it happens

Caching and read replicas both work by keeping a copy of data somewhere faster than the main database. Every copy can go stale. The bug is not that copies exist. It is that nothing guarantees the copy is updated before someone reads it.

### The cache was never told

The code updates the database but forgets to clear or update the cached copy on one of the paths that writes. The main edit screen clears it. The bulk-update endpoint, the admin panel or the background job does not. Users see the old value until the cache entry expires.

### The cache was told too early

A subtle race: one request deletes the cached value and then writes to the database. In the small gap between those steps, another request misses the cache, reads the old value from the database, and puts it back in the cache. The database now has the new value and the cache has the old one, and nothing is going to fix it until it expires. This is a well-documented pattern; Redis has a clear [write-up of cache consistency strategies](https://redis.io/blog/cache-consistency-strategies) if your engineer wants the details.

### Long expiry times on editable data

The cache entry lives for an hour because someone wanted a high hit rate. That is fine for a list of countries. It is not fine for a user's settings, a price, or an order status.

### Reads from a replica that is behind

To take load off the main database, the team sends reads to a replica. Replicas usually lag a little behind the primary, sometimes by much more under load. A user saves, the next page reads from the replica, and the change is not there yet.

### More than one cache layer

A browser cache, a CDN, an application cache and the database's own cache. Clearing one while another still holds the old value produces exactly the inconsistency users report.

## Why this matters more than it looks

Slowness is annoying. Wrong data is worse, because users stop trusting the product.

- **Users repeat actions.** They save again, click pay again, or resubmit a form, which can create duplicates.
- **Support cannot reproduce it.** By the time anyone looks, the cache has expired and everything looks fine. Tickets get closed as "could not reproduce" and the bug stays.
- **Wrong decisions downstream.** Stale prices, stock levels or permissions are not just display bugs. They can mean selling at the wrong price or showing data to someone whose access was removed.

If the slowdown that started all this has not been fixed at the source, it is worth revisiting [whether a cache or a query fix was the right call](/post-your-app-is-slow-add-a-cache-or-fix-the-query) in the first place.

## The fixes, in order

### 1. Users must always see their own writes

This is the rule that removes most complaints. After a user changes something, their next reads of that data should come from the primary database or a freshly updated cache, not from a copy that might be behind. Common ways to do it: read from the primary for a short window after a write, or update the cache with the new value directly as part of the save.

### 2. Invalidate after the commit, on every write path

Clear or update cached values only after the database write has succeeded, and do it on every code path that changes that data, including admin tools, imports and background jobs. A simple search for every place that writes a given table usually finds the missing path.

### 3. Shorten expiry for editable data

Long cache lifetimes are for data that rarely changes. For anything a user can edit, keep them short so that even a missed invalidation heals quickly. Measure the effect on hit rate rather than guessing.

### 4. Do not cache what must be exact

Balances, permissions, stock counts at checkout and anything legally or financially significant should be read from the source of truth at the moment it matters. A cache can still show an approximate value elsewhere.

### 5. Make staleness visible

Log cache hits and misses with the key, and track replica lag. When a ticket says "it did not save," your engineer should be able to check within minutes whether the value was served from a stale copy.

## What it costs to fix

For a typical early-stage app, finding the missing invalidation paths and adding read-your-own-writes behavior is a few days of work for an engineer who knows the codebase. A broader cleanup of a caching layer that grew without rules can take a couple of weeks. These are judgment-based ranges, not benchmarks.

## When it points at something bigger

If nobody can list what is cached, for how long, and what clears it, the issue is not one bug. It is a caching layer that grew without a design. That is worth a short outside look before it becomes the thing a customer escalates. A [technical teardown](/teardown) maps exactly this: where data is copied, how it is kept fresh, and which paths are missing.

## FAQ

### Why do users see old data after saving?

Usually because the app served a cached copy or read from a database replica that had not caught up with the change. The save worked, but the read came from a stale copy.

### Should we turn off caching to fix it?

Not usually. Keep caching for data that rarely changes, make sure users always see their own writes, and shorten or remove caching for data that users edit often or that must be exact.

### How do we reproduce a stale-cache bug?

Note the exact time and record of the complaint, then check cache and replica logs around that time. Reproducing it live is hard because the stale copy often expires before anyone looks.

### Is this something a non-technical founder can check?

Yes, at the symptom level. Ask your team how many "it did not save" or "it changed back" tickets arrived last month and what caused them. If the answer is "could not reproduce," that is the signal. [Book a call](/book-a-call) if you want a second opinion on what you hear.
