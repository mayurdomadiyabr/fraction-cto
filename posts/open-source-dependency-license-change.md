---
title: An open-source tool you run on changed its license. Now what?
slug: open-source-dependency-license-change
date: '2026-10-09T03:30:34.334Z'
category: Vendors
excerpt: >-
  A license change on a dependency is a vendor event. When it affects you, when
  it does not, and how to choose between staying, forking and pinning.
description: >-
  An open-source dependency changed its license. How to tell if it affects your
  startup and choose between staying, the fork, or pinning.
author: The founder of Fraction
readTime: 6
draft: false
---

An open-source tool you depend on announces a new license. The code is still on GitHub, the docs still say "open", and your engineer says nothing has broken. Most of the time that is true for you specifically. But a license change is a vendor event, and it deserves the same ten-minute review you would give a price change from a paid supplier.

This has happened to tools that sit underneath a lot of startup stacks. HashiCorp moved Terraform and its other products from the Mozilla Public License 2.0 to the Business Source License 1.1 in August 2023, and the community forked Terraform into OpenTofu under the Linux Foundation. Redis Ltd. moved Redis from the BSD license to a dual RSALv2 / SSPLv1 model in March 2024; the Linux Foundation, backed by AWS, Google, Oracle and others, forked it as Valkey under BSD 3-Clause. Then in May 2025 Redis 8 added AGPLv3 as a third option. If you ran either tool, you lived through a license change whether you noticed or not.

## What a license change actually changes for you

The first thing to understand is who these changes are usually aimed at. The source-available licenses that companies switch to, like BSL, RSAL and SSPL, are mostly written to stop other companies from offering the software as a competing hosted service. If you run Redis as a cache behind your own product, or you use Terraform to provision your own infrastructure, you are almost never the target.

"Almost never" is doing work in that sentence, so here is where it bites:

- **You resell the tool as a feature.** If your product lets customers spin up their own instance of the thing, or exposes it as a managed service, read the new terms with a lawyer. That is exactly the use these licenses restrict.
- **You ship the code to customers.** On-premise or self-hosted distributions of your product that bundle the dependency raise different questions than running it on your own servers.
- **The new license is copyleft.** AGPL is an approved open-source license, but its network clause means that if you modify the software and let users interact with it over a network, you may owe them your modifications. Many companies have a blanket policy against AGPL code for that reason. Check whether yours does, or whether an acquirer's will.
- **The old version stops getting fixes.** Even if you can keep running the last permissively licensed release forever, security patches eventually land only in the new-license line or in a fork.

That last point is the one that catches founders. The license question is usually fine. The maintenance question is not.

## The three options, and when each is right

When a dependency relicenses, you have three real choices. None is free.

### Stay on the vendor's new line

If your use is clearly allowed under the new terms and the vendor's product is still the best one, staying is often correct. You keep getting fixes from the people who know the code best. Write down why your use is allowed, in two sentences, and put it where a future diligence team will find it. That note is worth more than it looks: investors and acquirers increasingly run license scans, and "we checked, here is why we are fine" closes the question in a minute.

### Move to the community fork

Forks like OpenTofu and Valkey were built to be drop-in at the moment of the fork. OpenTofu 1.6 shipped in January 2024 as compatible with Terraform 1.6, and Valkey speaks the same wire protocol as Redis, so existing clients generally work. The catch is that "drop-in" decays. Every release after the fork, the two lines drift. A move that takes an afternoon in year one can take a sprint in year three. If you are going to switch, the cheapest time is soon after the fork, not after you have adopted features only one side has.

Also check who is behind the fork. A fork with a foundation, multiple large companies and a release cadence is a different bet from a fork maintained by two volunteers.

### Pin and wait

Staying on the last permissive version and doing nothing is a legitimate short-term choice. It is a bad long-term one. Set a review date, usually six months out, and a trigger: the first serious security advisory that only the new line patches. When either arrives, you decide again with more information about which line is winning.

## A ten-minute review you can actually run

You do not need a legal department for most of these. You need someone to answer five questions and write the answers down:

1. Which of our services use this dependency, and which version?
2. Do we run it only for ourselves, or do customers get it, host it, or touch it directly?
3. Does the new license restrict anything we actually do today or plan to do this year?
4. Is there a credible fork, and how far has it drifted?
5. When does our current version stop getting security fixes?

If questions 2 and 3 come back clean, you are usually staying or pinning, and the decision is about maintenance, not law. If either comes back messy, that is when you pay for an hour of a lawyer who knows open-source licensing.

The same discipline applies to paid vendors. A license change is a cousin of [a critical vendor getting acquired](/post-critical-vendor-acquired): the product works the same today, and the risk is in what the new owner or new terms do next year. And if one dependency sits under everything, read about [vendor concentration in diligence](/post-vendor-concentration-diligence), because that is how an investor will look at it.

## What not to do

Do not rip out a working dependency in a panic the week a license change is announced. I have seen a team spend three weeks migrating off a tool whose new license did not apply to them, while their actual roadmap slipped. The announcement week is when information is worst: the fork has no track record and the vendor has not clarified its terms.

Equally, do not ignore it. The failure mode I see more often is the reverse: nobody owns the question, the team stays pinned to an old version for two years, and the first person to notice is a diligence reviewer asking why the cache layer has unpatched advisories. That costs more than the migration would have.

And do not build a wrapper around the dependency just to feel safe. An abstraction layer you build for lock-in protection is code you now maintain on top of the code you were worried about, and it rarely makes the eventual switch as cheap as promised. I wrote about that trade in [wrapping your vendor to avoid lock-in](/post-vendor-abstraction-layer).

## FAQ

### Does a license change affect versions I already downloaded?

Generally no. A release you obtained under a permissive license stays under that license. What changes is the license on new releases. The practical problem is that fixes eventually stop landing on the old line.

### Is AGPL a problem for a typical SaaS startup?

It depends on whether you modify the software and expose it to users over a network. Using an unmodified AGPL database behind your app is a different situation from shipping a modified version to users. Many companies set a policy anyway because acquirers ask. If you are unsure, get a short legal opinion; this post is not legal advice.

### How do I know which of my dependencies changed license?

Run a software composition or license-scanning tool in CI, or ask your engineer for a dependency list with licenses once a quarter. For a small stack, the handful of infrastructure tools you run yourself (databases, caches, provisioning, search) carry most of the risk.

### Should I switch to the fork on principle?

Only if it is the better maintained line for your needs. Choose on maintenance, compatibility and who is behind each side, not on how you feel about the license change.

If you want a second pair of eyes on your stack's license and vendor risk before a raise, that is part of a [technical teardown](/teardown), or you can [book a call](/book-a-call) and walk me through it.
