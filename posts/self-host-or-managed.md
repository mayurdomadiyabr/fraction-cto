---
title: Self-host it or pay for managed? Run the real cost math
slug: self-host-or-managed
date: '2026-07-08T14:47:51.151Z'
category: Decisions
excerpt: >-
  The managed database looks 10x more expensive than a $30 server. Then you
  count the engineering hours self-hosting quietly eats.
description: >-
  Self-host or managed? The $30-vs-$300 comparison ignores 15-30 hours a month
  of hidden ops labor. How to make the call.
author: The founder of Fraction
readTime: 5
draft: false
---

Most founders ask me the self-host question backwards. They compare the sticker price of a managed database at $300 a month against a $30 virtual machine and conclude they are overpaying by 10x. Then they self-host, and six months later a junior engineer is spending two days a week on backups, upgrades, and the 2am page when disk fills up.

The bill did not go down. It moved from a line item you can see to one you cannot.

## The number founders forget to count

Managed hosting is priced in dollars. Self-hosting is priced in dollars plus engineering hours, and the hours are the part nobody budgets for.

Industry estimates for 2026 put the operational load of self-hosting core infrastructure at 15 to 30 hours of engineering time per month. At a blended cost of $100 an hour, that is $1,500 to $4,500 a month in labor spent on infrastructure that delivers zero user-facing value. Your customers do not care who runs your Postgres. They care whether the app works.

So the real comparison is not $30 versus $300. It is:

- Self-hosted: $30 in servers plus $1,500 to $4,500 in hidden labor
- Managed: $300 and your engineers stay on the product

For a team of two or three engineers, the managed option is almost always cheaper once you count the hours honestly. The self-hosting cost advantage only shows up at scale, roughly north of 200 engineers, and only if you can run the infrastructure well. Most seed-stage startups are nowhere near that line.

### When self-hosting actually wins

There are real cases where self-hosting is the right call, and they are narrower than founders think:

- A single Postgres instance with modest traffic. A managed VM at $25 to $40 a month genuinely beats a managed database at $100 to $300, and the ops burden of one small database is low.
- A hard data-residency or compliance requirement that managed providers cannot meet.
- A workload so specific that no managed product fits, and you have someone on the team who has run it in production before.

Notice what these have in common. The workload is either tiny enough that the ops tax is near zero, or specific enough that there is no managed alternative. If neither is true, you are paying the ops tax for nothing.

## How to actually make the call

I walk founders through the same three questions every time.

### Who carries the pager?

Name the specific person who will get paged when the self-hosted thing breaks at 2am on a Saturday. If that person is your only senior engineer, self-hosting is a tax on your most expensive and most scarce resource. If that person is you, and you are the non-technical founder, self-hosting is not an option at all, no matter what the spreadsheet says.

Managed services are, in large part, a way to buy your way out of the pager. That is worth real money at a stage when every engineering hour is a bet on the roadmap.

### What breaks if you are wrong?

Self-hosting is not always a one-way door, but some versions of it are. A self-managed database with no tested backups is a decision you can only undo once, badly. Before you self-host anything, ask whether the failure mode is a bad afternoon or a company-ending data loss event. This is the same reasoning I use for any early architecture choice you cannot cheaply reverse, and it deserves the same caution.

### What is the trend line, not the snapshot?

The cost curves cross. At low traffic, self-hosting a single database is cheaper. As you grow, the ops tax compounds faster than the managed bill, and around $800 to $1,200 a month of managed spend, fully managed usually becomes the rational default because the labor you would spend self-hosting outweighs the savings.

Do not optimize for the bill you have today if you expect 3x growth this year. Optimize for the team you will be in twelve months. Most modern teams have stopped treating this as binary anyway. They run customer-facing workloads on managed services and keep analytics, staging, or regulated data self-hosted where the tradeoff flips.

## The pattern I see most

The expensive mistake is not choosing wrong once. It is self-hosting by default because the monthly invoice looks smaller, then never counting the hours, then wondering why the roadmap keeps slipping while the team is "heads down." The infrastructure is eating the time and nobody wrote it down.

This is the same trap founders hit with a cheap cloud commit or an underpriced agency: the visible number looks like a win and the real cost hides in labor and lock-in. If you want a framework for the broader version of this question, my [build, buy, or wait decision tree](/post-build-buy) covers how to weigh building anything in-house against paying someone else to run it, and [the login example](/post-build-your-own-auth) shows how the same math plays out for a single component.

## FAQ

### Is managed always the safe default for an early-stage startup?

For core infrastructure like your primary database and authentication, yes, managed is the safe default until you have a specific reason and a specific person to justify self-hosting. The exception is a genuinely tiny, low-traffic workload where a $30 VM beats a $300 managed plan and the ops burden is a few minutes a month.

### How do I estimate the hidden labor cost?

Track it for one month. Have whoever touches infrastructure log the hours they spend on backups, upgrades, patching, monitoring, and incidents. Multiply by their fully loaded hourly cost. Most teams are shocked to find it is 15 to 30 hours a month, which usually dwarfs the managed price difference.

### Does self-hosting ever save money for a small team?

Rarely, and only for tiny workloads or hard compliance needs. The cost advantage of self-hosting is real but it shows up at large engineering headcount, not at three people. If you are self-hosting to save $270 a month and spending 20 hours a month to do it, you are losing money.

### We already self-host. Should we migrate to managed?

Do the honest math first. If your team is spending meaningful engineering time on infrastructure and you are under a few hundred engineers, migrating to managed usually pays for itself quickly. If a review would help you decide, a [30-minute technical teardown](/teardown) can size the ops tax you are carrying, or you can [book a call](/book-a-call) to talk it through before you commit either way.
