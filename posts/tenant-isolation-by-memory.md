---
title: Your customers share one database. What keeps their data apart?
slug: tenant-isolation-by-memory
date: '2026-09-22T04:31:13.651Z'
category: Pattern recognition
excerpt: >-
  Most early SaaS products isolate customers with a WHERE clause someone has to
  remember. How that breaks, and three ways to enforce isolation instead.
description: >-
  Shared tables are fine. Relying on every query to filter by account is not.
  How to enforce tenant isolation before a leak does it for you.
author: The founder of Fraction
readTime: 7
draft: false
---

Here is a pattern I see in almost every early B2B product I review. Every customer's data lives in the same database, in the same tables, and the only thing keeping Customer A from seeing Customer B's invoices is a `WHERE account_id = ?` clause that a developer has to remember to type. Hundreds of queries. Every one of them hand-written or generated, every one of them a chance to forget.

Nobody decided this was the security model. It just happened, one endpoint at a time. And it holds right up until the day a new engineer ships a reporting endpoint on a Friday, forgets the filter, and a customer emails you a screenshot of another company's data.

The short answer: shared tables are fine and usually the right call early on. What is not fine is leaving tenant isolation to memory. Make the database, or one enforced layer of your code, refuse to return rows from the wrong account, and test that refusal like it is a feature.

## Why this pattern is so common

Almost every SaaS product starts as a single-customer app. The first version had one pilot customer, maybe two, and nobody thought of "tenant" as a concept. Then a second customer signed, someone added an `account_id` column to the users table, and the team started filtering by it wherever it seemed to matter.

The problem is the phrase "wherever it seemed to matter". Isolation that depends on judgment at every call site degrades as the codebase grows, for predictable reasons:

- New engineers do not know which tables are tenant-scoped and which are global.
- Admin and reporting endpoints are written quickly, often by the founder, often late.
- Background jobs and exports run outside the request context that normally carries the account.
- AI coding tools will happily generate a query that fetches a record by ID alone, because the prompt said "get invoice by ID".

That last one matters more every quarter. Fetching a record by its ID without checking who owns it is the textbook insecure direct object reference, and broken access control has sat at number one on the [OWASP Top 10](https://owasp.org/Top10/2025/) in both the 2021 and 2025 editions. It is the most common serious flaw in web applications, not an exotic one.

## What it costs when it breaks

A cross-tenant leak is not an ordinary bug. It is a disclosure. Depending on what leaked and where your customers are, you may have contractual notification duties, privacy-law obligations, and a customer whose own security team now wants a call with yours.

The commercial cost is usually bigger than the technical one. I have watched an anonymized version of this play out more than once: a mid-sized customer finds another company's records in an export, their procurement team pauses renewal pending a security review, and the enterprise deal you were counting on for the quarter goes quiet while their security team reads your answers. The fix took an afternoon. The trust took two quarters.

It also shows up in diligence. A reviewer who spends twenty minutes in your codebase will check how tenant isolation works, because it is one of the fastest ways to tell whether the team thinks about security structurally or by habit. It is on my own list of [architecture smells I look for in a short review](/post-architecture-smells), and it is one of the [diligence red flags that slow a round](/post-diligence-red-flags).

## Three ways to enforce isolation, from cheapest to strongest

You do not need to re-platform to fix this. You need to move isolation from "every developer remembers" to "the system enforces it". Pick the lightest option that actually enforces.

### 1. One scoped data-access layer

Route every tenant-scoped query through one layer that injects the account filter automatically. Most ORMs support this with default scopes, query hooks, or a repository pattern. Developers stop writing `WHERE account_id` because the layer does it, and raw queries that bypass the layer get flagged in code review or by a lint rule.

This is cheap and it removes most of the risk. Its weakness is that it is still application code, so a raw SQL query in a background job can walk right around it.

### 2. Database row-level security

If you are on Postgres, row-level security (RLS) lets the database itself decide which rows a session can see. You enable it per table, write a policy that compares `account_id` to a session setting, and set that setting at the start of every request. A query that forgets the filter returns nothing from other tenants instead of everything.

Two practical traps to know before you start. First, table owners and superusers bypass RLS by default, so your application should connect as a separate, non-owner role, or you should use `FORCE ROW LEVEL SECURITY`. Second, if you use a connection pool, set the tenant with a transaction-scoped setting, so the next request on that pooled connection does not inherit the previous tenant's context. The [Postgres documentation on row security](https://www.postgresql.org/docs/current/ddl-rowsecurity.html) covers the mechanics.

RLS is the option I recommend most often for B2B products on Postgres with sensitive data, because it keeps working when someone makes a mistake.

### 3. Separate databases or schemas per tenant

Some customers, usually large ones in regulated industries, will ask for physical isolation. Separate databases give you that and make per-customer backup, restore, and deletion easy. They also multiply your migration, monitoring, and cost overhead with every tenant. For most seed-stage products this is a sales accommodation for a handful of accounts, not a default architecture. If a customer asks for it, treat it like [a request to self-host](/post-customer-wants-self-host): price the operational cost before you say yes.

## How to find out where you stand this week

You can assess this without being technical. Ask your lead engineer these four questions and listen for specifics:

1. "If a developer writes a new query and forgets the account filter, what stops it?" A good answer names a mechanism. "We review carefully" is not a mechanism.
2. "Which tables are tenant-scoped, and where is that written down?"
3. "Do our background jobs, exports, and admin screens use the same protection as the main app?"
4. "Is there an automated test that logs in as one account and tries to read another account's records?"

That fourth question is the one that separates teams. A cross-tenant test suite is simple to write: create two accounts, and for every endpoint that takes an ID, confirm Account A gets a 404 or 403 for Account B's record. Once it exists, it runs on every deploy and catches the Friday-afternoon mistake before a customer does.

## What a sensible fix looks like in practice

For a typical seed-stage team with one Postgres database and a few dozen tables, the path I usually recommend is:

- Week one: inventory tenant-scoped tables and write the cross-tenant test for the highest-risk endpoints, meaning anything that returns files, invoices, messages, or personal data.
- Week two: move queries onto one scoped access layer and add a lint or review rule against bypassing it.
- Next: turn on row-level security for the most sensitive tables, then expand table by table.

None of this requires a rewrite, and none of it needs to stop feature work for long. It is exactly the kind of change that is cheap now and painful later, which puts it firmly in the list of [early decisions you cannot cheaply undo](/post-reversible-decisions) if you wait.

## FAQ

### Is a shared database with an account_id column a bad architecture?

No. Shared tables are the most common and usually the most sensible model for early SaaS. The risk is not the shared database. It is relying on every developer to remember the filter on every query.

### Does row-level security slow down my database?

It adds a condition to every query, so you need an index that leads with `account_id` on large tenant tables. With that index in place, the overhead is usually small. Without it, performance can suffer badly.

### Will investors actually check this?

A technical reviewer often will, because it is a fast signal of how the team handles security. Having a clear answer and a test suite turns a potential red flag into a strength.

### We already had a leak. What do we do first?

Contain it, find the root cause, and check your contractual and legal notification duties with counsel before you talk to customers. Then fix the class of bug, not just the one endpoint.

If you want an outside read on how your product isolates customer data, a [technical teardown](/teardown) covers exactly this, or you can [book a call](/book-a-call) and we can talk it through.
