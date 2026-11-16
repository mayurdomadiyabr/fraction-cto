---
title: Postgres 14 support ended. Your RDS bill changes in March
slug: postgres-14-end-of-life-rds-bill
date: '2026-11-16T02:27:56.911Z'
category: Vendors
excerpt: >-
  PostgreSQL 14 hit community end of life on 12 November 2026. What it means on
  RDS, what Extended Support costs, and how to upgrade.
description: >-
  PostgreSQL 14 reached end of life on 12 Nov 2026. RDS Extended Support fees
  start 1 Mar 2027. Which version to pick and a practical upgrade plan.
author: The founder of Fraction
readTime: 7
draft: false
---

PostgreSQL 14 reached its scheduled community end of life on 12 November 2026, so the project no longer plans fixes for it, security fixes included. If you run it on Amazon RDS you have until 28 February 2027 before AWS starts charging Extended Support fees per vCPU-hour on top of your normal bill. For most startups the right move is to plan a major-version upgrade, to 17 or 18, this quarter, test it on a copy of production, and finish before March.

This is one of those deadlines that looks like housekeeping and turns into a surprise bill or a rushed weekend if nobody owns it. Here is how I would handle it at a seed or Series A company.

## What changed on 12 November

The PostgreSQL project supports each major version for five years. Its [versioning page](https://www.postgresql.org/support/versioning/) lists PostgreSQL 14 with a first release of 30 September 2021 and a final release of 12 November 2026. After the final minor release, the community does not plan further patches for that line.

Your database does not stop working. What stops is the stream of fixes. Any security or data-corruption bug found in 14 from here on is your problem unless a vendor patches it for you.

The supported lines now are 15 (final release November 2027), 16 (November 2028), 17 (November 2029) and 18 (November 2030), per the same page.

## What it means on AWS, Azure and Google Cloud

Managed database providers run their own calendars, and that is where the money is.

### Amazon RDS and Aurora

The AWS [RDS for PostgreSQL release calendar](https://docs.aws.amazon.com/AmazonRDS/latest/PostgreSQLReleaseNotes/postgresql-release-calendar.html) lists, for PostgreSQL 14:

- Community end of life: 12 November 2026.
- RDS end of standard support: 28 February 2027.
- Extended Support year 1 pricing from 1 March 2027.
- Extended Support year 3 pricing from 1 March 2029.
- End of Extended Support: 28 February 2030.

Extended Support is charged per vCPU-hour on top of what you already pay for the instance. The [RDS for PostgreSQL pricing page](https://aws.amazon.com/rds/postgresql/pricing/) gives an example rate of 0.100 USD per vCPU-hour in US East (Ohio) for years one and two, and 0.200 USD in year three. Rates vary by region, so check yours.

To make that concrete: an instance with 4 vCPUs running all month is about 730 hours, so 4 x 730 x 0.10 is roughly 290 USD a month, or about 3,500 USD a year, for that one instance, before year-three pricing doubles it. Add read replicas, staging copies and that forgotten analytics replica, and a small team can easily be paying for a version nobody chose to keep.

Whether a database is enrolled depends on how it was created. According to the [RDS Extended Support documentation](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/extended-support-creating-db-instance.html), the console leaves the option unticked, but the CLI and API default to enrolling when the setting is not specified, which covers most infrastructure-as-code setups. An enrolled database keeps running and gets billed. A database that is not enrolled is upgraded to a newer major version automatically after standard support ends, on AWS's schedule. Either way, it becomes a decision made for you unless someone makes it first.

### Azure and Google Cloud

Azure Database for PostgreSQL and Cloud SQL have their own support windows and extended-support policies for older major versions. I am not going to quote their dates or prices here because they differ by product tier and change; check your provider's version policy page directly. The planning approach below is the same.

### Self-hosted or a platform like Heroku or Render

If you run Postgres yourself, there is no extra fee, but there are also no more patches unless you buy them from a commercial vendor. Platform providers usually publish deprecation notices for old versions; look for them in your account and email.

## Should you pay for Extended Support or upgrade?

For almost every early-stage company, upgrade. Extended Support makes sense as a short bridge, not a plan.

Pay for a few months of it only if:

- You are in the middle of a fundraise, launch or migration and cannot take the risk of a database change right now.
- A dependency, such as an extension or an old ORM version, genuinely blocks the upgrade and needs time to replace.
- The database is tiny, so the fee is a rounding error, and you have a dated plan to upgrade anyway.

If none of those apply, every month on Extended Support is money spent on standing still. I wrote more generally about [when to upgrade and when to defer a dependency](/post-dependency-upgrade-or-defer); a database major version is the case where deferring is most expensive.

## Which version to upgrade to

My default advice, as judgment rather than a rule:

- **PostgreSQL 17** if you want the safest jump. It has been out since late 2024, is supported into 2029 by the community, and your provider, extensions and tools will all handle it.
- **PostgreSQL 18** if your managed provider supports it as a major-upgrade target, your extensions support it, and you want the longest runway. Check each extension you use before choosing.
- **Not 15 or 16** unless something blocks a bigger jump. You would be doing this again within one to two years.

Skipping several major versions at once is normal with Postgres; tools like `pg_upgrade` and the managed providers' major-version upgrade support it. What matters is testing.

## A practical upgrade plan

For a typical startup database under a few hundred gigabytes, this is a few days of focused engineering work spread over two to three weeks, in my experience. Larger databases or zero-downtime requirements take longer.

### 1. Inventory what you are running

List every PostgreSQL 14 instance: production, replicas, staging, preview environments, analytics copies, and anything a past agency set up. The forgotten ones are where surprise fees come from. If you are not sure who has access to all of it, see [cloud resources nobody owns](/post-cloud-resources-nobody-owns).

### 2. Check extensions and drivers

List installed extensions (`SELECT * FROM pg_extension;`) and confirm each supports your target version on your provider. Check your database drivers and ORM versions too.

### 3. Rehearse on a copy

Restore a recent snapshot to a new instance, run the major-version upgrade on it, and time it. Run your test suite and your heaviest real queries against the upgraded copy. Major versions can change query plans, so compare the slow-query log before and after.

### 4. Decide on downtime

An in-place major-version upgrade on RDS involves downtime that depends on database size; your rehearsal tells you roughly how long. If you cannot accept that, look at blue/green deployments or logical replication, which cost more effort but reduce the cut-over window.

### 5. Take a fresh backup and pick a quiet window

Confirm you can restore it. If your backups only live in one account, read [keeping backups outside your cloud provider](/post-backups-outside-your-cloud-provider) first.

### 6. Upgrade, then watch for a week

Run `ANALYZE` after the upgrade so the planner has fresh statistics, watch error rates and query latency, and keep the old snapshot until you are confident.

## If an agency or contractor runs your database

Ask them three questions this week: which instances are on 14, what their upgrade plan and date is, and whether the work is covered by your existing retainer. If the answer to the last one is unclear, our notes on [what an agency maintenance retainer should cover](/post-agency-maintenance-retainer) will help you frame the conversation.

## This is not the only deadline

PostgreSQL 14 is part of a run of end-of-life dates this season. We covered [Node.js 26 and the older Node lines](/post-node-js-26-lts-upgrade) and [Python 3.10 reaching end of life](/post-python-3-10-end-of-life) recently. The pattern is the same each time: inventory, test on a copy, upgrade before the provider starts charging or forcing it. If this keeps catching you out, the fix is an owner and a calendar, which is also what we look for in [a cloud provider retiring a service](/post-cloud-provider-retires-service).

## FAQ

### Will AWS force-upgrade my PostgreSQL 14 database?

Not if it is enrolled in Extended Support; you will be billed instead. If it is not enrolled, AWS upgrades it to a supported major version automatically after standard support ends, on its schedule rather than yours. Check each instance's Extended Support setting in the RDS console or CLI.

### Is it safe to stay on PostgreSQL 14 for a few months?

For a few months, usually yes, but you are now relying on no serious security bug being found. If your database is reachable only from your application and you upgrade before March, the risk is modest.

### How long does a major-version upgrade take?

Rehearse it to find out. Small databases often upgrade in minutes; large ones can take much longer, and the rehearsal is the only reliable estimate.

### Can we jump straight from 14 to 18?

Usually yes, if your provider supports that path and your extensions support 18. Test it on a copy first.

If you are not sure how many databases you are running or what a safe upgrade looks like for your setup, a [technical teardown](/teardown) will map it quickly, or you can [book a call](/book-a-call) and we will work out the plan together.
