---
title: Your search box is a LIKE query and customers can tell
slug: search-box-is-a-like-query
date: '2026-11-24T02:37:51.584Z'
category: Pattern recognition
excerpt: >-
  Why the first search feature gets slow and misses obvious results, and when to
  fix it in your database before paying for a search service.
description: >-
  Why a LIKE-query search box gets slow and misses results, and how to fix it in
  Postgres before paying for a separate search service.
author: The founder of Fraction
readTime: 5
draft: false
---

Most first search boxes are a single database query that looks for the typed text anywhere inside a column, written as LIKE or ILIKE with a wildcard on both sides. It works in the demo and fails two ways as you grow: it gets slow, because the database checks every row, and it misses obvious results, because it only finds exact strings. You can usually fix both inside the database you already run before paying for a separate search service.

I see this in many teardowns, and the first sign is rarely a performance alert. It is a customer saying "search is broken" because they typed "invoice 2026" and got nothing, even though "Invoice - Nov 2026" is right there.

## Why the simple version breaks

The query behind the box looks something like: find rows where the name contains this text, ignoring case. That is a perfectly good start. It breaks on two separate axes.

### It gets slow as the table grows

A normal database index helps when the search text is at the start of the value. A wildcard at the start ("contains") means the index cannot be used, so the database reads every row and checks each one. On 10,000 rows that is instant. On a few million rows, combined with many customers searching at once, it becomes the slowest query in the app. It is the search-box cousin of [the list page that loads every row](/post-list-page-loads-every-row).

### It misses what people mean

"Contains this exact string" is not how people search. The simple version fails on:

- **Word order and extra words.** "invoice 2026" does not appear as a string inside "Invoice - Nov 2026".
- **Word forms.** Searching "billing" does not find "billed".
- **Typos.** "Jonh" finds nothing.
- **Several fields.** Customers expect one box to search name, email and company together, and the simple query often checks one column.
- **Ranking.** Results come back in whatever order the database likes, so the exact match can be on page three.

## The fix, in the order I would try it

If your app runs on PostgreSQL, which most early products I review do, you have more search than you are using.

### Step 1: make "contains" fast with a trigram index

PostgreSQL ships an extension called pg_trgm that breaks text into three-character pieces and indexes them. With a GIN trigram index on the column, the same "contains" query can use the index instead of scanning every row, and the search text does not need to be at the start ([PostgreSQL pg_trgm docs](https://www.postgresql.org/docs/current/pgtrgm.html)). The same extension also gives you similarity matching, which handles many typos. This is often an hour of work and fixes the speed problem outright. Very short search terms of one or two characters give the index little to work with, so set a minimum length in the box.

### Step 2: use full-text search for words, not strings

For searching text by meaning of words, PostgreSQL's built-in full-text search splits text into words, reduces them to base forms (so "billed" and "billing" match), ignores common words, and can rank results by relevance ([PostgreSQL full-text search docs](https://www.postgresql.org/docs/current/textsearch.html)). You can combine several columns into one searchable value, weight the name higher than the notes, and index it. For most B2B products with up to a few million records, this is enough for years.

### Step 3: only then consider a dedicated search service

Dedicated search engines earn their cost when you need things a database does poorly: typo tolerance and instant results as people type across large catalogues, faceted filters on many fields at scale, multiple languages, or search across data that lives in several systems. The trade is real: a second system to run, data to keep in sync, and a new class of bug where search shows a record that was deleted an hour ago. That sync problem is a close relative of [customers saving a change and still seeing the old data](/post-customers-see-old-data-after-saving).

My rule of thumb: if search is not your product's core experience and your data fits in one database, steps 1 and 2 come first. If customers choose you because of how well they can find things, budget for step 3 earlier.

## What to ask your engineer

Three questions get you most of the way:

1. **What query runs when someone searches, and does it use an index?** Ask them to show you the query plan for a real search. "Sequential scan" on a large table is the answer you do not want.
2. **What are the five searches customers make most, and do they return the right first result?** Pull these from logs if you can. This is a product test, and founders are often better at judging it than engineers.
3. **What happens if a customer searches for something with a typo?** Try it yourself on your own product. It takes a minute.

## Tenant safety matters more than speed

One warning that applies to every step: search queries are a common place for data from one customer to leak to another, because they get written in a hurry and sometimes skip the filter that limits results to the current account. Whatever you build, every search must include that account filter, and it should be tested. If your customers share one database, [what keeps their data apart](/post-tenant-isolation-by-memory) is worth reading alongside this.

## FAQ

### Is ILIKE always bad?

No. On small tables it is fine, and with a trigram index it can be fast on large ones too. The problem is relying on it alone for search quality once customers expect more than exact matches.

### We use MySQL, not Postgres. Does this apply?

The pattern does. MySQL has its own full-text indexes with different behaviour and limits. The principle is the same: use the database's built-in search before adding a second system.

### How long does fixing this usually take?

A trigram index is often under a day including testing. Moving to full-text search with ranking across a few fields is typically a few days for one engineer. A dedicated search service is weeks once you include syncing and monitoring.

### Can you review our search before we buy a search product?

Yes, that is a common short engagement. A [technical teardown](/teardown) looks at the queries and the data, and you can [book a call](/book-a-call) to talk it through first.
