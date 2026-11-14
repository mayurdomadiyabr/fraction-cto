---
title: Node.js 26 is now LTS. Is your app two versions behind?
slug: node-js-26-lts-upgrade
date: '2026-11-14T05:14:51.015Z'
category: Vendors
excerpt: >-
  Node.js 20 lost security fixes in April and Node 26 is the new LTS. How to
  check your version, what the upgrade involves and which target to pick.
description: >-
  Node.js 26 became LTS on 28 Oct 2026 and Node 20 is end of life. How startups
  check their Node version, plan the upgrade and pick 24 or 26.
author: The founder of Fraction
readTime: 7
draft: false
---

Node.js 26 became the new long-term support (LTS) line on 28 October 2026, and Node.js 24 moved into maintenance a week earlier. That means a product still running Node.js 20 is now two LTS lines behind, on a version that stopped getting security fixes on 30 April 2026. If your backend, Next.js app or serverless functions run on Node, check the version this week. Moving off 20 is usually days of work, not a rewrite, and the right target for most startups today is Node.js 24 or 26.

Node sits under a large share of early-stage products: Express and NestJS APIs, Next.js front ends, background workers, build tooling and most serverless functions. Founders rarely know which version they are on, because nobody chose it on purpose. It was whatever was current when the first engineer or the agency started. Here is how to find out where you stand and what to ask.

## Where each Node.js version stands today

The Node.js project publishes its release schedule on [nodejs.org](https://nodejs.org/en/about/previous-releases), and the underlying [schedule file](https://github.com/nodejs/Release) gives exact dates. As of mid-November 2026:

| Version | Status | End of life |
|---|---|---|
| Node.js 18 | End of life | 30 April 2025 |
| Node.js 20 | End of life | 30 April 2026 |
| Node.js 22 | Maintenance LTS | 30 April 2027 |
| Node.js 24 | Maintenance LTS, since 20 October 2026 | 30 April 2028 |
| Node.js 26 | Active LTS, since 28 October 2026 | 30 April 2029 |

Odd-numbered versions such as 25 are short-lived "current" releases. Production apps should stay on even-numbered LTS lines.

The pattern is predictable: a new LTS line arrives every October, each one gets roughly 30 months of support, and the oldest one drops off every April. That predictability is the useful part. You can put the next upgrade in the plan a year ahead instead of discovering it.

## What end of life means in practice

Your app does not stop working on the end-of-life date. Three slower things happen instead.

- **Security fixes stop.** When a vulnerability is found in Node itself, the fix ships for supported lines only. Your version stays exposed.
- **Libraries move on.** Popular packages drop old Node versions from their supported range. You find out when a security update to a dependency refuses to install, which is the worst possible moment to discover a runtime upgrade.
- **Platforms push you.** Hosting and serverless providers retire old runtimes on their own timelines, which can be earlier or later than the upstream date.

AWS Lambda is a good example. Its [runtime table](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html) lists nodejs20.x as deprecated from 30 April 2026, with creating new functions blocked from 29 July 2027 and updating existing ones blocked from 31 August 2027. Deprecated means AWS stops applying security patches to that runtime, even though your functions keep running. Other platforms publish their own dates; check yours rather than assuming it matches.

There is also a diligence angle. Investors' technical reviewers, and enterprise customers' security questionnaires, increasingly ask whether your runtimes are supported. "Node 20, end of life since April" is an easy finding for them and an avoidable one for you.

## How to check which version you run

You do not need to read code. Ask whoever maintains the product to send you three things:

1. **The version in production**, not on their laptop. On a server, `node --version`. On a platform, the runtime setting in the dashboard or the deploy config.
2. **Where the version is pinned.** Usually an `engines` field in `package.json`, a `.nvmrc` file, a Dockerfile line such as `FROM node:20`, or a runtime setting in serverless config. Each component can be different, so ask for every service, function and build pipeline.
3. **The CI version.** Builds often run on a different Node version from production. That gap causes "works in CI, breaks in prod" bugs.

If the answer for any component is 20 or lower, put the upgrade on this quarter's plan.

## What the upgrade actually involves

For most small Node codebases, the jump from 20 to 24 is modest. The work is mostly in dependencies and tooling, not your own code.

### Step 1: update the pin in one place at a time

Start with CI. Change the Node version in the build, run the test suite and see what breaks. This tells you the size of the job before anything reaches production.

### Step 2: fix dependency breakage

The usual failures are packages with native add-ons that need rebuilding, old build tools that pin an older Node, and libraries several major versions behind. Upgrade the ones that fail. If a key library has no version that supports newer Node, that is a bigger finding: an abandoned dependency, and a decision to make about replacing it. We cover how to weigh that in [should you upgrade that dependency or defer it](/post-dependency-upgrade-or-defer).

### Step 3: read the breaking changes

Each major Node release publishes its breaking changes. Most will not touch a typical web app, but deprecated APIs being removed, changes to default behaviour and updated bundled tools occasionally do. Skim the release notes for each major version you are jumping.

### Step 4: deploy one service first

Move the lowest-risk service first, watch error rates and memory for a few days, then roll forward. A worker or internal tool is a better first candidate than your main API.

### How long it takes

My judgment, not a benchmark: a single Node API with decent tests is often one to three days. A product with several services, serverless functions and a Next.js front end is more like one to three weeks spread across normal work. If there are no tests, add a day or two of manual checking per service, and treat that as a sign you need some basic tests anyway.

## 24 or 26?

For most startups doing this upgrade now, either is reasonable. Node 24 has a year of real-world use and supported hosting everywhere, and is supported until April 2028. Node 26 buys another year of support but is only a few weeks into LTS, so a few libraries and platforms may lag. If you are on 20 today, going to 24 now and 26 next year is a sensible, low-drama path. If you are already on 22, you have until April 2027; plan the move to 24 or 26 for the first quarter.

What matters more than the target is writing the next upgrade date into the plan, so this is routine maintenance instead of an emergency every two years.

## Questions to ask your agency or contractor

If an agency built and maintains the product, these questions tell you quickly whether runtime upgrades are being handled:

- What Node version does each service run in production, and when does each go end of life?
- Is the upgrade included in our maintenance retainer, or billed separately?
- When did you last upgrade the runtime, and what broke?

Vague answers are common. If your retainer does not cover runtime upgrades, [our post on agency maintenance retainers](/post-agency-maintenance-retainer) explains what it should include. And if nobody can tell you how the server is configured, the Node version is the smaller problem; see [the server nobody can rebuild](/post-server-nobody-can-rebuild).

This is the same pattern as [Python 3.10 reaching end of life in October](/post-python-3-10-end-of-life): a dated, predictable deadline that is cheap to meet early and expensive to meet late.

## FAQ

### Is Node.js 20 still safe to run?

It still works, but it no longer gets security fixes from the Node.js project, so any new vulnerability in Node itself stays open. Treat it as technical debt with a growing risk.

### We are on Node 22. Do we need to act now?

Not urgently. Node 22 is supported until 30 April 2027. Plan the upgrade for the first quarter of 2027 so you are not doing it in the last week.

### Does the AWS Lambda deprecation mean our functions stop?

No. Existing nodejs20.x functions keep running, but AWS no longer patches that runtime and will block creating and later updating functions on it. Check the live AWS table for the current dates.

### Should we skip straight to Node.js 26?

You can, if your hosting platform and key libraries already support it. If anything you depend on does not, go to 24 now. It is supported until April 2028.

If you are not sure what versions your product runs on, or whether your agency is keeping up, a [technical teardown](/teardown) will tell you in a week, or you can [book a call](/book-a-call) and we will start with the three questions above.
