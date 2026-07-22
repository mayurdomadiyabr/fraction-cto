---
title: 'Do you need feature flags yet, or just a deploy?'
slug: do-you-need-feature-flags-yet-or-just-a-deploy
date: '2026-07-22T11:59:11.856Z'
category: Decisions
excerpt: >-
  Feature flags are high leverage for small teams, but the version you need at
  five engineers is not the enterprise plan being sold to you.
description: >-
  Do you need feature flags yet? The signal you are ready and how to get them
  without overpaying.
author: The founder of Fraction
readTime: 4
draft: false
---

Someone on your team read that mature engineering orgs ship behind feature flags, and now there is a line item to adopt a flagging platform. The instinct is good. The timing and the tooling are where founders overspend. Feature flags are one of the highest-leverage practices a small team can adopt, but the version you need at five engineers is not the enterprise product the sales page is selling you.

Here is how I decide whether a team needs flags yet, and what they should actually buy.

## What problem flags actually solve

A feature flag is a switch in your code that turns a feature on or off without a deploy. That one capability solves several problems that hit hardest when you are small and cannot afford downtime.

### Deploy is decoupled from release

Without flags, the moment code merges it is live for everyone, so a risky feature forces you into a tense all-or-nothing deploy. With a flag, you ship the code dark, turn it on for yourself, then for 5 percent of users, then everyone. A bad release becomes a toggle you flip off in seconds instead of an emergency rollback and a redeploy at 11pm. For an early team, that alone can be worth it, and it pairs naturally with the discipline of [freezing features to fix reliability](/post-feature-freeze-reliability) when things get shaky.

### You can test with real users safely

Flags let you expose a feature to a single beta customer or an internal group before the whole base sees it. That is how you get real feedback without betting your reputation on an untested flow.

## The signal you are ready

You do not need flags on day one, when you have no users and a deploy affects nobody. You need them once a bad deploy has a real cost, meaning you have paying customers who will churn over a broken experience, and once more than one person is merging code so "just coordinate verbally" stops working.

If you deploy multiple times a week to real users and a single bad merge can take down a flow customers depend on, you are past the threshold. If you are still pre-launch with one engineer, you are not, and adding a flagging platform now is ceremony. This is the same "do you need it yet" judgment as deciding [whether you need a staging environment](/post-staging-environment-yet).

## Do not overpay for it

This is where money leaks. The premium hosted platforms charge per seat, commonly around 10 dollars per seat per month, which is 600 dollars a year for a five-engineer team and 1,200 dollars for ten. That is not crazy at scale, but most early teams do not need the enterprise targeting, audit trails, and governance those plans are priced for.

The cheaper paths are legitimate, not corner-cutting:

- The same premium vendors usually offer a free developer tier with unlimited flags and SDKs. For a small team that is often all you need, and it lets you prove the value before you pay.
- Open-source, self-hostable tools give you flags you run yourself with no per-seat fee, a good fit if you are cost-sensitive and comfortable operating one more service.
- For a handful of flags, a configuration table or environment variables checked in code is a perfectly respectable in-house start. Graduate to a real tool when you outgrow it.

The pattern to avoid is signing an enterprise contract for a capability you could get free this quarter. Match the spend to the number of flags and the targeting you actually use, and revisit it when that grows.

## A cheap first setup that works

If the threshold above is met and you are still cost-sensitive, here is the setup I hand early teams, and it costs nothing to start. Begin on a free developer tier from an established vendor, or a self-hosted open-source tool if you would rather own it. Wrap every flag behind a single small function in your code so the rest of the codebase never talks to the vendor directly. That one habit means switching tools later, or moving from environment variables to a real service, is a contained change instead of a rewrite.

Name flags for what they gate and when they should die, not just what they do. A flag called "new-checkout-rollout-2026q3" tells the next person it is temporary and roughly when to remove it. Keep a short list of live flags somewhere visible, and clear the dead ones every few weeks. The whole practice takes an afternoon to set up and pays for itself the first time you flip a broken feature off in ten seconds instead of scrambling through an emergency deploy.

## FAQ

### Are feature flags the same as A/B testing?

Related but not identical. Every A/B test needs a flag, but most flags are not experiments, they are operational switches for safe releases and kill switches. Start with flags for release safety. Add experimentation later if you have the traffic to reach statistical significance.

### Won't flags make my code messy?

They can, if you never remove them. A flag is meant to be temporary scaffolding for a rollout. Once a feature is fully live and stable, delete the flag and the dead branch. Treat leftover flags as debt to clean up, and they stay an asset instead of a mess.

### Can I just use environment variables instead of a tool?

For a few flags and no need to change them without a deploy, yes, that is a fine starting point. You outgrow it the moment you want to flip a flag for a subset of users, or change it instantly without shipping code. At that point a real tool, free tier or self-hosted, earns its keep. If you want help sizing what your team actually needs, [book a technical call](/book-a-call) and we can right-size it.
