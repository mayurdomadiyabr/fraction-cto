---
title: Should you pay for an outside review of your agency's code?
slug: review-agency-code-mid-build
date: '2026-10-02T15:01:58.612Z'
category: Vendors
excerpt: >-
  Demos do not show what is underneath. When to get agency code reviewed, what a
  useful review checks, and how to raise it.
description: >-
  When and why to get an independent review of agency-built code mid-build:
  timing, what to check, and how to raise it with the agency.
author: The founder of Fraction
readTime: 4
draft: false
---

Your agency is three months into a six-month build. The demos look fine, the invoices arrive on time, and you have no way to know whether the code underneath is solid or a mess. A friend suggests paying someone independent to look at it. You worry it will cost money, insult the agency, and tell you nothing you can act on.

The short answer: yes, an outside review of agency code is worth doing, and the best moment is early, around the first major milestone, not at the end. A focused review takes a senior engineer a few days, answers a small number of specific questions, and is far cheaper than discovering problems after the final payment or during investor diligence. Tell the agency in advance and frame it as standard practice, because it is.

## Why demos are not enough

A demo shows that the happy path works on the agency's test data. It does not show:

- Whether the code is organised so another team could take it over
- Whether there are automated tests, or whether every change is a gamble
- How passwords, payments, and customer data are handled
- Whether the product will cope with ten times the users
- Whether the agency has built on its own proprietary framework that you cannot easily leave

These are exactly the things that cost you later. They show up when you hire your first engineer and they ask for a rewrite, or when an investor's technical advisor reads the repository. Our post on [what diligence finds in agency-built code](/post-agency-built-diligence) covers the investor version of this.

## When to do the review

### At the first real milestone

The most useful time is when there is enough code to judge, usually six to ten weeks in, but early enough that problems are cheap to fix. Architecture choices made in the first month shape everything after. Catching a bad one at week eight costs a conversation. Catching it at month six costs a rewrite.

### Before the final payment

If you only do one review, do it before the last milestone payment and before any warranty period runs out. Your leverage is highest while money is still owed. Our post on [agency defect warranties](/post-agency-defect-warranty) explains why the timing matters.

### Before handing the code to an in-house team

If you plan to bring development in-house, a review gives your first engineer a map instead of a mystery.

## What a useful review actually checks

A good review answers specific questions rather than producing a hundred-page report. The questions that matter most for a founder:

**Can someone else run and change this?** Is there a readme, can a new engineer set up the project in a day, and is deployment repeatable without the agency?

**Is it safe?** How are secrets, authentication, and customer data handled? Are there obvious security holes?

**Is it tested?** Are there automated tests on the parts that handle money and core workflows?

**Is it built to fit your stage?** Not over-engineered for scale you do not have, not so fragile it breaks at the next customer.

**Do you own it?** Is everything in your repository and your cloud accounts, under your control? See [repository access during the build](/post-agency-repo-access-during-build).

The output should be a short ranked list: what must be fixed now, what should be fixed before launch, and what can wait. Each item with a plain-English reason.

## How to raise it with the agency

Agencies that do good work expect reviews, and many welcome them because a clean review protects them in any later dispute. Tell them before it happens, give the reviewer read access, and invite the agency's lead developer to a call with the reviewer. Frame it as your normal practice for any major build.

If an agency resists a review, refuses read access to the code you are paying for, or becomes defensive about specific findings, that is useful information in itself.

When findings come back, share them and ask for a response plan. Most are fixable within the existing engagement. A few may change the scope or price, and it is better to have that conversation at month three than at month six.

## Be wary of the reviewer who wants the rewrite

One caution. A reviewer who is also hoping to win the build may find more problems than exist. Ask for findings ranked by business impact, ask how each one would actually hurt you, and be sceptical of any recommendation to start over. Our post on [when an agency recommends a rewrite](/post-agency-recommends-rewrite) applies just as much to a reviewer who recommends one.

## Where we fit

This is what our [technical teardown](/teardown) is for: a fixed-scope, independent read of your codebase that ends in a ranked list of what to fix, written for a founder rather than for engineers. We do not take over builds from the agencies we review. If you are approaching a milestone payment and cannot judge what you are paying for, [book a call](/book-a-call).

## Frequently asked questions

### Is it normal to get an independent review of agency code?

Yes. It is common practice for founders without in-house technical leadership, and good agencies expect it.

### When is the best time to review agency work?

At the first major milestone, while problems are cheap to fix, and again before the final payment while you still have leverage.

### Will the agency be offended?

Agencies that do good work usually are not, especially when you tell them in advance and include their lead developer. Resistance to a review is itself a warning sign.

### What should I do if the review finds serious problems?

Share the findings with the agency and ask for a response plan with timelines. Most issues can be fixed inside the existing engagement. Escalate only if they dispute well-evidenced findings or cannot fix them.
