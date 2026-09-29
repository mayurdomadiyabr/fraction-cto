---
title: '16,326 Supabase databases were left readable. Is yours one?'
slug: supabase-apps-readable-data
date: '2026-09-29T14:30:57.637Z'
category: Pattern recognition
excerpt: >-
  UpGuard found 16,326 Supabase databases with tables anyone could read. How to
  check yours in under an hour, and what to fix first.
description: >-
  UpGuard found 16,326 Supabase databases readable by strangers. Why RLS and key
  mistakes cause it, and a five-step check founders can run today.
author: The founder of Fraction
readTime: 8
draft: false
---

If your product runs on Supabase and was built quickly, especially with an AI coding agent, check today whether a stranger can read your tables using only the public key in your website's code. On 25 September 2026, UpGuard reported finding 16,326 Supabase databases with tables readable from the open web. The usual causes are row-level security that was never turned on, or policies that allow everyone. The check takes an engineer under an hour, and the fix is usually a few lines of SQL per table.

That is the short version. The rest of this post explains why this keeps happening, how to tell if you are affected even if you are not technical, and what to do in what order.

## What UpGuard actually found

UpGuard's research team looked at roughly 300,000 domains that showed signs of using Supabase, then tested whether user tables on those sites could be read from outside. They found [16,326 databases exposing readable tables](https://www.upguard.com/blog/everything-everywhere-systemic-data-exposure-in-supabase-apps). More than half showed signs of personal information, and a smaller share appeared to include passwords or authentication tokens.

Two details matter for founders. First, the study deliberately looked at standalone sites on their own domains, including products built with general coding agents, not only apps made on one vibe-coding platform. This is not a problem with one tool. Second, UpGuard judged what was exposed mostly from table names and structure rather than reading every record, so it does not say how many individual records leaked or for how long. Treat the headline number as a sign of how common the misconfiguration is, not as a count of victims.

This is also not new. Similar smaller scans in 2025 and early 2026 found the same pattern. What changed is scale: far more products now go from idea to production in a weekend, and the people shipping them often do not know how their database is exposed.

## Why this happens: the public key is supposed to be public

To understand the risk, you need one idea about how Supabase works.

### Your frontend talks to your database directly

In a traditional app, the browser talks to your server, and only your server talks to the database. Supabase lets the browser query the database through an automatic API. That is a big part of why it is fast to build with. It also means your database is reachable from the internet by design.

### The key in your code is not a secret

Your frontend ships with a public key, often called the anon or publishable key. Anyone can find it by opening the browser's developer tools. Supabase's own documentation is clear that this is fine only if row-level security is doing its job: the key identifies the project, and the database policies decide what each visitor may read or write ([Supabase: securing your API](https://supabase.com/docs/guides/api/securing-your-api)).

### Row-level security is the lock, and it is easy to leave off

Row-level security (RLS) is a Postgres feature that checks every query against rules you write, such as "a user can only read their own orders". In Postgres, a new table has RLS off until someone enables it. Supabase's own advisor documentation spells out the consequence: if RLS is not enabled on a table in the public schema, anyone with the project URL can create, read, update, and delete its rows ([Supabase: database advisors](https://supabase.com/docs/guides/database/database-advisors)). Coding agents usually create tables with SQL migrations, where nothing reminds you. If nobody adds the policy step, the table is open to anyone holding the public key, which is everyone.

### The other three ways it goes wrong

In the apps I review, the exposure usually comes from one of four mistakes:

1. **RLS disabled** on one or more tables, often a table added later than the rest.
2. **A policy that allows everything**, for example a rule that returns true for every row. Agents sometimes write these to make an error go away.
3. **The service role or secret key in the frontend.** This key bypasses RLS completely, and Supabase says never to use it in the browser ([Supabase: securing your data](https://supabase.com/docs/guides/database/secure-data)). It belongs only on a server. If it is in your browser code, your whole database is open no matter what policies you wrote.
4. **Public storage buckets or database functions** that return more than intended, such as a function that looks up any user by email.

## An illustrative example

Here is a composite of what this looks like in practice. A two-founder company builds a scheduling product for clinics with an AI coding agent. The first version has three tables with careful RLS policies, because the founders asked the agent about security at the start. Two months later, they add a notes feature. The agent creates a `patient_notes` table through a migration and wires it up. Everything works in testing, because the founders are logged in. Nobody asks about policies for the new table. It is readable by anyone with the public key, and it holds exactly the data that would be most damaging to leak.

Nothing about this is exotic. The team did the right thing once and then shipped quickly, which is what early teams should do. The gap is that no one checks security again when the schema changes.

## How to check your app, in order

If you are not technical, forward this section to whoever maintains your product. It should take less than an hour.

### Step 1: run Supabase's security advisor

In the Supabase dashboard, open the advisors and look at the security findings. Its Security Advisor raises an error-level warning for any public table with RLS disabled, among other checks ([Supabase: database advisors](https://supabase.com/docs/guides/database/database-advisors)). Any table flagged there is the first thing to fix.

### Step 2: search the frontend for the service role key

Search your frontend code and your deployed site's JavaScript for the service role key or any variable that holds it. If it is there, move every operation that needs it to a server function, then rotate the key in the dashboard. Rotating is not optional; assume it has been copied.

### Step 3: test as a stranger

Using only the public key, and not logged in, try to read every table and call every exposed function, the way an outsider would. Then log in as an ordinary test user and try to read another test user's rows. Anything you can see that you should not is a finding. Do this on your own project only.

### Step 4: read every policy that says "everyone"

List your policies and look for any that apply to all users or return true. Each one should have a written reason. Public product catalogs are fine. Anything with personal data is not.

### Step 5: make it part of shipping

Add a rule to your workflow: every new table gets RLS enabled and a policy in the same migration, and the security advisor must be clean before release. If your team uses a coding agent, put that rule in the agent's project instructions so it is applied every time, not only when someone remembers.

## If you find an exposure

Fix it first, then work out what happened. Enable RLS and correct the policies, rotate any key that was exposed, and check your logs for unusual reads, where your plan keeps them. If personal data was readable, talk to a lawyer about whether you have notification duties; depending on where your users are, rules like the GDPR can require notifying regulators within tight deadlines. This is not legal advice, and the right answer depends on what data it was and who it belongs to.

Then write a short internal note: what was exposed, since when as far as you can tell, what you changed. You will want it for customers who ask, and for [investors doing technical diligence](/post-diligence-red-flags), where "we found it, fixed it, and changed the process" is a perfectly good answer.

## The bigger pattern

This is not a Supabase problem so much as a speed problem. Backend-as-a-service tools move the security boundary from your server to your database rules, and AI coding agents make it very easy to add tables faster than anyone reviews them. The same thing shows up as weak multi-tenant separation, which I cover in [what keeps your customers' data apart](/post-tenant-isolation-by-memory), and in the wider set of [security holes in AI-written code](/post-ai-code-security-holes).

The fix is not to stop using these tools. It is to have one person who owns the question "who can read this?" every time the data model changes. At an early company that is often the most senior engineer. If you do not have one yet, this is exactly the kind of check a [technical teardown](/teardown) covers, and it is cheap compared with explaining a leak to your customers. If you want a second pair of eyes on your setup, [book a call](/book-a-call).

## FAQ

### Is Supabase unsafe to use?

No. Supabase gives you the tools to lock data down, and the documentation explains them. The problem is configuration: the database is reachable from the internet by design, so the policies have to be right. Used carefully, it is a reasonable choice for an early product.

### Our app was built on a vibe-coding platform. Are we covered?

Do not assume so. Some platforms add security scans, but UpGuard's study focused on standalone sites, and the same mistakes appear in apps built with general coding agents. Run the checks above on your own project regardless of how it was built.

### Is the anon or publishable key a secret we need to hide?

No. It is designed to be in your frontend. The security comes from row-level security policies. The key that must stay secret is the service role key, which bypasses those policies entirely.

### How often should we repeat this check?

Every time you add a table, a storage bucket, or a database function, and as a quick review before any fundraise or large customer security questionnaire. Making the security advisor part of your release checklist covers most of it.

### We found nothing. Are we done?

For now. Most exposures are introduced later, when a new feature adds a table. The durable fix is the rule in step 5, so the check happens every time the schema changes.
