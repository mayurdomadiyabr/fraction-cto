---
title: Your biggest customer's list page loads every row and times out
slug: list-page-loads-every-row
date: '2026-10-20T06:24:23.840Z'
category: Pattern recognition
excerpt: >-
  Unbounded list endpoints work for a year, then a large customer breaks them.
  How to spot the problem and paginate properly.
description: >-
  Why list endpoints that return every row cause outages as customers grow, and
  how to fix them with limits and pagination.
author: The founder of Fraction
readTime: 5
draft: false
---

The orders page loaded instantly for the first year. Then a large customer signed, imported their history, and the same page started taking 20 seconds, then timing out, then knocking over the server for everyone else whenever that customer opened it. The code had not changed. The data had.

The cause is almost always the same line of code: an endpoint that returns every matching row. `SELECT * FROM orders WHERE account_id = ?` with no limit, serialized to JSON, sent to the browser, rendered as one giant table. At 300 rows it is fine. At 300,000 it is an outage. This is one of the most predictable failures in early-stage products, and it hides well because every test and every demo uses small accounts.

## Why it ships

Nobody writes "load everything" on purpose. It is the default path of least resistance.

- **Frameworks make it easy.** `Order.all`, `findMany()`, or a generated API scaffold returns everything unless you ask otherwise.
- **The UI was designed with sample data.** A table with 40 rows looks great. Nobody mocked up 40,000.
- **Development databases are small.** Engineers test against seeded data or their own account. Performance is never visible locally.
- **It works for a long time.** The failure appears only when one customer crosses a size threshold, which can be a year or more after the code was written. By then nobody remembers which endpoints are unbounded.

## How it fails

The failure is rarely a clean error. It degrades in stages, which is why teams misdiagnose it.

### Slow pages for one customer

First, only the biggest account notices. The page is slow, support tickets mention "loading", and the team assumes it is the customer's network.

### Memory spikes on the server

Then the server starts building huge responses in memory. A single request for a very large list can use hundreds of megabytes while the rows are loaded and serialized. Run a few at once and the process runs out of memory and restarts, taking everyone's requests with it.

### Database pressure

Large unbounded queries hold resources, read far more data than needed, and compete with every other query. Other customers see slowness that has nothing to do with their own data.

### Browser crashes

Even if the server survives, rendering tens of thousands of rows in a table can freeze the browser tab. The customer experiences this as "your app crashes".

Teams often reach for a cache or a bigger server at this point. Neither fixes it. A cache stores the giant response; a bigger server delays the crash. The question of [whether to add a cache or fix the query](/post-your-app-is-slow-add-a-cache-or-fix-the-query) usually has the same answer here: fix the query.

## The fix

### 1. Find every unbounded endpoint

Search the codebase for list endpoints and queries without a limit. Then check which ones are reachable by customers. Your largest account is the best test case: load each main list page as that customer in a staging copy and time it. Database monitoring that shows the slowest and largest queries points to the rest.

### 2. Add a hard default limit

Every list endpoint should have a default page size and a maximum, for example 50 by default and 200 at most, enforced on the server even if the client asks for more. This one change stops the worst outages, even before the UI is improved.

### 3. Choose the right pagination style

There are two common approaches.

- **Offset pagination** (`LIMIT 50 OFFSET 1000`) is simple and supports "jump to page 20". It gets slower on deep pages because the database still walks past all the skipped rows, and results can shift if rows are added while someone is paging.
- **Cursor or keyset pagination** (`WHERE created_at < last_seen ORDER BY created_at DESC LIMIT 50`) stays fast at any depth and is stable while data changes. It does not support jumping to an arbitrary page number, which most users never need anyway.

For tables that will grow large, such as orders, events, messages, and logs, use cursor pagination. For small admin lists, offset is fine.

### 4. Index for the sort order

Pagination is only fast if the database can read rows in the order you sort them. If you sort by `created_at` within an account, an index on `(account_id, created_at)` is typically what you need. Without it, the database still sorts the full set before returning the first 50. Our overview of [indexes, replicas and sharding](/post-database-index-replica-shard) covers when indexes are enough, which for most early products is a long time.

### 5. Move exports and totals out of the list

The reason many endpoints return everything is that someone needed an export or a total. Give those their own paths: a count query for totals, and a background job that builds a CSV export and emails a link. Then the list page never needs the whole data set.

### 6. Test with a big account

Seed a staging account with realistic volume, ideally larger than your biggest customer today. Make it part of how you check new list pages before release.

## How this shows up in a sales process

Large customers are exactly the ones who will hit this first, and usually during onboarding, when the impression matters most. If a prospect says they have five years of history to import, ask your team which pages will show that history and whether they have been tested at that size. Questions like "can it handle 10x" are worth answering with numbers; [what "can it handle 10x" really asks](/post-can-it-handle-10x) goes deeper on that conversation.

## FAQ

### How do I know if our product has this problem?

Open your main list pages while logged in as your largest customer and time them. If any take more than a couple of seconds, or the response is several megabytes, you likely have an unbounded query. Your engineer can confirm by checking for queries without a limit.

### Is infinite scroll a fix?

Only if it loads data in pages behind the scenes. Infinite scroll that fetches everything at once and reveals it gradually has the same problem. The server-side limit is what matters.

### Will adding pagination break our API for customers who integrate with it?

It can, if they expect every record in one response. Introduce pagination with a generous limit and clear documentation, keep it backward compatible for a period where possible, and tell integrating customers before tightening the limit.

### How long does this take to fix?

A default server-side limit on the worst endpoints can usually ship in a day. Proper cursor pagination, indexes, and moving exports to background jobs across a whole product is typically one to three weeks of focused work, depending on how many list views you have.

If your biggest customer is already hitting this and you need a plan you can defend, [book a call](/book-a-call) and we will walk through it.
