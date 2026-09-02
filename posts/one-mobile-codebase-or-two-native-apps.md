---
title: One mobile codebase or two native apps?
slug: one-mobile-codebase-or-two-native-apps
date: '2026-09-02T02:38:35.510Z'
category: Decisions
excerpt: >-
  React Native or two native apps for your first mobile build? The real question
  is not performance. It is how many engineers you can afford to feed.
description: >-
  How to decide between one cross-platform mobile codebase and two native apps
  at pre-seed to Series A, from a fractional CTO.
author: The founder of Fraction
readTime: 5
draft: false
---

Most founders ask me this question with the framing already wrong. They ask whether React Native is "good enough" or whether native is "worth it." That is a performance question, and for the first version of almost every product, performance is not the constraint. The constraint is your headcount.

A native build means two codebases: Swift for iOS, Kotlin for Android. Two codebases means either two specialists or one generalist context-switching between two languages, two build systems, and two app-store review queues. A cross-platform build with React Native or Flutter means one codebase and one skill set. At three engineers total, that difference decides whether you ship features or maintain plumbing.

## The decision is about your team, not the framework

Here is the test I actually use in the room. Count the engineers who will touch mobile in the next twelve months. If the answer is one or two, you cannot afford to split their attention across two native codebases, and cross-platform is the default. If you already have separate iOS and Android specialists on staff, native stops costing you extra and the calculus flips.

The second input is what your app does. If the core loop is forms, lists, content, checkout, dashboards, or chat, cross-platform handles it with no drama. That covers most SaaS, marketplace, and content apps. If the core loop is heavy camera work, real-time audio or video processing, Bluetooth or hardware integration, augmented reality, or anything that leans on the newest OS APIs the week they ship, native earns its keep. Be honest about which one you are. Founders routinely convince themselves they are the hardware-heavy exception when they are building a CRUD app with a login screen.

The third input is hiring. In most markets it is faster and cheaper to hire one strong React Native or Flutter engineer than to hire and retain both an iOS and an Android specialist. Cross-platform development is often quoted at meaningfully lower total cost, but the number that matters is not the day rate. It is that you are staffing one seat instead of two, and one seat is easier to fill, easier to cover when someone is out, and easier to keep busy.

## What the cross-platform choice actually costs you

Cross-platform is not free. You take on a framework dependency, which means you are exposed to that framework's release cadence, its breaking changes, and the day a critical native module you rely on stops being maintained. You will occasionally drop into native code anyway to bridge something the framework does not cover, so your team needs at least a reading knowledge of the platform underneath. And the newest platform features arrive in the framework on a delay, sometimes months, sometimes never.

None of that is disqualifying for an early-stage product. It is the tax you pay to run one codebase instead of two, and for a team of one to three engineers that tax is almost always worth paying. The failure mode I see is not teams regretting cross-platform. It is teams choosing native for prestige reasons, then shipping half as fast because their one mobile engineer is drowning in two build pipelines.

## The hybrid path most teams should plan for

The mature version of this decision is not either-or forever. Start cross-platform to validate the product and reach both stores with one team. If one specific surface becomes performance-critical later, a camera pipeline, a game-like interaction, a latency-sensitive feed, you rewrite that one screen or module in native and bridge it. You do not rewrite the whole app. This is the same principle as any [build versus buy decision](/post-build-buy): commit to the reversible option first, and only take on the expensive, specialized path where the evidence says you have to.

This matters most before you have proven anyone wants the app at all. Before you decide the framework, be honest about whether you even [need a native mobile app yet](/post-do-you-need-a-mobile-app) or whether a responsive web app gets you to the same learning faster and cheaper. Plenty of pre-seed products spend three months on a mobile build to discover the demand was never there.

## How I would decide today

If you have one or two engineers and a standard product surface, go cross-platform and do not overthink it. If you have dedicated iOS and Android specialists already, or a genuinely hardware-heavy core loop, go native. If you are anywhere in between, choose cross-platform and keep a written list of the specific screens you would peel off to native if performance data ever forces your hand. That list is your insurance, and writing it down keeps the decision reversible.

The wrong move is spending three weeks debating framerates for an app that renders lists and forms. Pick the option that lets your small team ship, and revisit it when you have real usage data instead of a spec.

## FAQ

### Is React Native fast enough for a production app?
For the vast majority of products, yes. Lists, forms, content, checkout, and chat run smoothly. The exceptions are apps built around heavy real-time media, hardware integration, or augmented reality, where native still holds a clear edge.

### Will investors care that we built cross-platform?
No competent investor penalizes a cross-platform choice at seed. They care whether you are shipping and learning fast. If anything, doing more with fewer engineers reads as capital efficiency.

### How much does the mobile stack choice affect our runway?
Indirectly but significantly. The cost is not the framework, it is the headcount. One cross-platform engineer versus two native specialists can be the difference between a comfortable and a tight runway. If you want a second opinion on how this maps to your burn, [book a call](/book-a-call).

### Can we start native and move to cross-platform later?
You can, but it is the expensive direction. Migrating two native codebases into one cross-platform codebase is a full rewrite. Starting cross-platform and peeling off individual native modules later is far cheaper, which is why I default new teams to cross-platform.
