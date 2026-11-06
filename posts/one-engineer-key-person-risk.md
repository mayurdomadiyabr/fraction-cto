---
title: One engineer runs everything. Diligence calls it key-person risk
slug: one-engineer-key-person-risk
date: '2026-11-06T21:14:45.643Z'
category: Fundraising
excerpt: >-
  Investors will ask what happens if your only engineer leaves. A three-week
  plan makes the answer credible without a new hire.
description: >-
  How to reduce key-person risk before a raise when one engineer runs your
  product: account ownership, a runbook, and a tested recovery.
author: The founder of Fraction
readTime: 5
draft: false
---

If one engineer is the only person who can deploy, fix, or explain your product, investors will treat that as key-person risk, and at seed and Series A it is one of the most common technical findings. You do not need to hire a second engineer to answer it. You need to show that the knowledge, the access, and the ability to recover the system do not live only in one head. That is mostly documentation and access hygiene, and it usually takes a few weeks.

The question shows up in different forms. "What happens if your lead engineer gets hit by a bus?" is the blunt version. The polite versions are "who else can deploy?" or "how long would it take a new engineer to become productive?" They all mean the same thing: if this person left tomorrow, would the company still have a product?

## Why investors care so much about this one

Early companies are small, so concentration is normal. Investors know that. What they are assessing is not whether you have redundancy, but how bad the failure would be and whether you have reduced it where it is cheap to do so.

A single engineer leaving is survivable when the code is in a repository the company controls, credentials are in a company-owned password manager, deployment is written down, and a competent new engineer could get the system running within a couple of weeks. It is a crisis when the cloud account is in the engineer's personal name, the deploy process is a sequence of commands only they know, and nobody else has ever restored a backup.

I have seen founders lose months after a departure that should have cost them weeks, for exactly these reasons. If it already happened to you mid-raise, I wrote about that situation in [your technical cofounder left and you are raising](/post-technical-cofounder-left-raise). This post is about preventing it.

## What a reviewer will check

### Ownership of accounts

Who owns the cloud account, the domain, the code repository, the app store listings, and the payment provider? These should all belong to company accounts, with at least two people, usually a founder and an engineer, able to sign in as an administrator. An account registered to an engineer's personal email is a finding even if the engineer is loyal and staying.

### Who can deploy

Can anyone other than the main engineer ship a change to production? If deployment runs through an automated pipeline, the answer is usually yes in principle. If it is a manual process, write it down and have a second person do it once.

### Who can recover

If the main database were lost, could someone other than the main engineer restore it from backup? Has anyone tried? A backup that has never been restored is a hope, not a plan, and reviewers know the difference.

### What is written down

Not full documentation. A short README that explains how to run the system locally, how it is deployed, where the secrets live, and what the main components do. The [question of when you need documentation](/post-when-do-you-need-documentation) has a simple answer here: you need at least this much before diligence.

### How the engineer feels about it

Reviewers often interview engineers directly, as covered in [diligence wants to interview your engineers](/post-diligence-interviews-your-engineers). If your engineer says "honestly, nobody else could run this," the reviewer will write that down. It is better that your engineer can say "I am the main person, but here is the runbook, and our founder deployed last month."

## A three-week plan to reduce the risk

This is the sequence I give founders who have one engineer and a raise coming up.

### Week one: move the keys

Move every critical account to company ownership. Set up a company password manager if you do not have one. Make sure at least two people have admin access to the cloud account, the repository, the domain registrar, and the payment provider. Turn on two-factor authentication for all of them.

### Week two: write the runbook

Ask your engineer to write a short runbook: how to deploy, how to roll back, how to restore the database, where logs live, and the five things that break most often and how to fix them. Two to four pages is enough. Then have someone else follow it, ideally a founder or a contractor, and fix every step where they got stuck.

### Week three: prove recovery

Restore a backup into a separate environment and confirm the product runs. Have a second person do a production deploy with the engineer watching. Write down what happened. Now you can tell an investor, truthfully, that the system has been recovered and deployed by someone other than its main author.

None of this is expensive. It is mostly the engineer's time, and it makes the engineer's own life easier because they stop being the only person anyone can call.

## What to say in the diligence conversation

Be direct. "We have one senior engineer who built most of the system. Here is what we have done to reduce key-person risk: company-owned accounts with two admins, a runbook that a second person has used, a tested backup restore, and a plan to hire a second engineer after the round." That answer turns a red flag into a sign that you think about operational risk.

If you are also bringing in outside help, say so. A fractional CTO or a trusted contractor who knows the codebase is a credible backstop. That is one of the reasons founders use us before a raise; you can see how it compares to other options on our [comparison page](/comparison).

## FAQ

### Is having one engineer a deal-breaker for investors?

Almost never at seed, and rarely at Series A, as long as you have reduced the risk where it is cheap and have a hiring plan. What hurts is an unmanaged dependency, such as a personal cloud account or an untested backup.

### Should we buy key-person insurance?

Some companies do for founders, but it pays money, not knowledge. It does not restore your system. Handle the operational side first; insurance is a separate decision for your board and advisers.

### How do we raise this with our engineer without making them feel replaceable?

Frame it as protecting them from being on call forever. Most engineers who are the only person who can fix things are tired of it. A runbook and a second admin make their job better, and it is a normal step before any raise.

### What if our code is held by an agency rather than an engineer?

Then the same risk sits with the agency. Make sure the repository and every account are owned by your company, not the agency. If you want help checking that before a raise, a [technical teardown](/teardown) covers it, or you can [book a call](/book-a-call).
