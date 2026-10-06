---
title: Your engineers keep production data on their laptops
slug: production-data-on-laptops
date: '2026-10-06T03:16:52.526Z'
category: Pattern recognition
excerpt: >-
  Production dumps on laptops and staging are a quiet, common risk. How to
  replace the habit with a faster safe path.
description: >-
  Why copies of production data spread to laptops and staging in early startups,
  and a four-step plan to stop it without slowing debugging.
author: The founder of Fraction
readTime: 5
draft: false
---

Ask your engineers a simple question: how do you reproduce a bug a customer reported? In a lot of early teams the honest answer is that someone pulls a copy of the production database onto their laptop, because that is the fastest way to see exactly what the customer saw.

It works. It also means real customer names, emails, addresses and sometimes payment or health details are sitting on several laptops, in old dump files in Downloads folders, and on a staging server that was set up in a hurry two years ago. Nobody decided this. It just became the way debugging is done.

The short answer: production data copied into development is one of the most common and least visible risks in an early startup. You do not fix it by banning access overnight. You fix it by giving engineers a faster safe path, usually realistic seed data plus a scrubbed snapshot, and then closing the old one.

## How it starts

Nobody sets out to spread customer data around. It happens in three predictable steps.

First, the team is small and the seed data is thin. A few fake users and a couple of test records. Bugs that depend on real-world mess, odd characters, huge accounts, years of history, cannot be reproduced locally.

Second, someone has production database access, usually because there are only three engineers and everyone does everything. They take a dump to chase one nasty bug. It solves the problem in an hour instead of a day.

Third, it becomes normal. The dump gets refreshed every few weeks. New hires are told to "grab the latest snapshot" in their first week. A contractor gets a copy. An AI coding tool is pointed at the local database to help write a migration. Now customer data lives in places you cannot list.

## Why it matters more than it feels

Production has your best security: access controls, encryption, logging, a cloud provider's protection. Laptops and staging servers have much less. Data-masking vendors like [Tonic](https://www.tonic.ai/blog/how-to-mitigate-data-breach) make the obvious commercial case for their products, but the underlying point stands regardless of what you buy: non-production copies get far less scrutiny than production and are a well-known route for leaks.

The concrete failure modes I see:

- **A lost or stolen laptop.** If the disk is not encrypted, the dump is readable. Even if it is, you now have to work out whether you must notify customers.
- **A staging server left open.** Staging gets a public URL for a demo, weak or shared credentials, and a full copy of production. This is a version of the exposure I wrote about in [readable Supabase databases](/post-supabase-apps-readable-data).
- **An engineer leaves.** Their laptop is returned, maybe wiped, maybe not. Their personal backup of it is never checked.
- **Tools that read local files.** Coding agents and assistants can read whatever is in the working directory. A dump file there is now part of what they can see and, depending on the tool, send.

Then there is the customer conversation. Enterprise [security questionnaires](/post-security-questionnaire-deal) ask directly whether production data is used in development or test environments. "Yes, unmasked, on laptops" is an answer that stalls deals, and an untrue "no" is worse.

## The fix, in the order I would do it

### 1. Find out where the copies are

Ask every engineer and contractor to list any production dumps or snapshots they hold, and where. Check staging and any other non-production databases. This is not a blame exercise; it is an inventory. Most teams are surprised by the count.

### 2. Make the safe path faster than the unsafe one

Engineers copy production because it is the quickest way to get realistic data. If you take that away without a replacement, they will find a workaround. So build the replacement first:

- **Better seed data.** A script that generates a realistic dataset: large accounts, edge-case characters, long histories. This covers most local development.
- **A scrubbed snapshot.** For bugs that truly need production shape, a scheduled job that copies production and replaces names, emails, phone numbers, addresses and free-text fields with fake values before anyone can download it. Open-source tools exist for common databases, or it can be a few hundred lines of your own code.

### 3. Narrow who can take a raw copy

Once the safe path exists, raw production access becomes the exception: one or two named people, logged, with a reason. That fits with getting rid of [shared admin logins](/post-shared-admin-logins) generally.

### 4. Delete the old copies

Ask everyone to delete their existing dumps and confirm it. Wipe or rebuild staging with scrubbed data. Make laptop disk encryption mandatory if it is not already.

## What this costs

For a small team, a decent seed script is a few days. A scrubbed snapshot pipeline is one to two weeks depending on how much free text and how many tables hold personal data. The ongoing cost is keeping the scrubbing rules updated when new personal fields are added, which is a line in your code review checklist.

That is cheap compared with one incident notification, or one enterprise deal held up by a questionnaire answer you cannot change.

## When raw production access is still fine

There will be rare cases where only real data will do, such as a corruption bug affecting one specific account. That is acceptable when it is deliberate: done on a controlled server rather than a laptop, by a named person, logged, and cleaned up afterwards. The pattern to break is not "production data was ever used for debugging". It is "production data is everywhere and nobody can say where".

If you want to know how exposed you are today, data handling is one of the first things checked in a [technical teardown](/teardown).

## FAQ

### Is it ever acceptable to use production data in development?

Occasionally, for a specific bug that cannot be reproduced any other way, if it is done on a controlled machine, logged, limited to a named person and deleted afterwards. As a routine way of working, no.

### What is the difference between masked and synthetic data?

Masked data starts as a copy of production with personal fields replaced by fake values, so it keeps the real shape and volume. Synthetic data is generated from scratch. Most small teams use synthetic seed data for everyday work and a masked snapshot for harder bugs.

### Do we need to tell customers if a laptop with a production dump is lost?

Possibly. It depends on what data was on it, whether the disk was encrypted, where your customers are, and your contracts. Treat it as a potential incident and get legal advice quickly; this is exactly why reducing the number of copies matters.

### How do we stop AI coding tools seeing customer data?

Keep production dumps out of working directories entirely, use scrubbed or synthetic data locally, and check what files and databases each tool is allowed to read. If the data is not on the machine, the tool cannot see it.

If you are not sure how many copies of your customer data exist outside production, [book a call](/book-a-call) and we can scope the cleanup.
