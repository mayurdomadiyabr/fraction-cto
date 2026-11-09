---
title: Do you need a bug bounty yet? Start with a disclosure policy
slug: bug-bounty-or-disclosure-policy-yet
date: '2026-11-09T04:11:22.402Z'
category: Knowing when
excerpt: >-
  Most early startups do not need a paid bug bounty. They need a security.txt
  file, a short disclosure policy, and an owner.
description: >-
  Why early startups should publish a vulnerability disclosure policy and
  security.txt before paying for a bug bounty.
author: The founder of Fraction
readTime: 6
draft: false
---

Short answer: most early-stage startups do not need a paid bug bounty yet. What you do need, as soon as you have a public product, is a simple vulnerability disclosure page and a security.txt file that tell a researcher how to report a problem and promise a human reply. A bounty only makes sense once you can fix reported issues quickly and have already cleaned up the obvious ones.

Founders usually ask about bug bounties after one of two things happens. Either a stranger emails support with "I found a security issue, what is your bounty?", or a customer's security questionnaire asks whether they have a vulnerability disclosure program. Both are good reasons to act. Neither is a reason to launch a paid program next week.

## The difference between disclosure and a bounty

A vulnerability disclosure policy is a public statement of how to report a security problem to you, what you will do with the report, and that you will not take legal action against people who report in good faith within the rules. It costs nothing but a page and an inbox someone actually reads.

A bug bounty adds payment. You publish a scope, a reward table, and rules, and researchers compete to find issues for money. It can be run yourself or through a platform. It works well for companies that can triage a steady stream of reports and fix the valid ones fast.

The order matters. A disclosure policy is the floor. A bounty is something you add on top when you are ready.

## Why a bounty is usually premature

### You will pay for the obvious findings

An early product almost always has a backlog of known weaknesses: missing security headers, verbose error messages, weak rate limits, an admin page that leaks too much. Opening a bounty before fixing these means paying strangers to tell you what a one-day internal review would have found. Run a basic review first. I covered what that looks like before a raise in [do you need a pen test before you raise](/post-pentest-before-raise).

### The report volume can swamp a small team

Public bounties attract a lot of low-quality and automated submissions alongside the real ones. Someone has to read each one, reproduce it, decide if it is valid, and reply. On a team of three engineers, that can eat a meaningful slice of a week. If nobody owns triage, reports pile up, researchers get frustrated, and you get the worst of both worlds.

### Fixing is the real cost

A bounty is only worth it if valid findings get fixed. If your team cannot ship a security fix within days, a stream of findings becomes a list of known holes sitting in an inbox. That is worse than not knowing, because now there is a record that you knew.

## What to set up now

### A security.txt file

RFC 9116 defines a small text file at /.well-known/security.txt on your domain. It tells researchers where to send reports. It has two required fields: Contact, which is an email address or web form, and Expires, a date after which the file should be treated as stale. Optional fields include a link to your policy and preferred languages. It takes ten minutes to publish. Put a calendar reminder to update the Expires date before it lapses.

### A short disclosure policy page

Keep it to one screen. It should say:

- How to report: a dedicated address such as a security alias, not general support.
- What is in scope: your main app and API, and anything you want excluded, such as third-party services you do not run.
- What is not allowed: accessing other customers' data beyond what is needed to show the issue, denial-of-service testing, social engineering of staff.
- What you promise: an acknowledgement within a stated number of business days, and that you will not pursue legal action against good-faith research that follows the rules.
- That you do not currently pay rewards, if that is true. Saying so up front avoids awkward negotiations later.

Public templates exist for this, including one published by the US cybersecurity agency CISA for government bodies, which is a reasonable starting point to adapt with your counsel.

### One owner and one inbox

Route the security alias to at least two people, one of them technical. Decide who replies and how fast. A researcher who gets a human reply in two days usually stays cooperative. One who hears nothing for a month may publish.

## When a bounty starts to make sense

- You have fixed the findings from at least one internal or external review.
- You have someone who can triage reports every week without it displacing core work.
- You can ship a security fix within a few days of confirming it.
- You are getting a steady trickle of good-faith reports through your disclosure page and want to encourage more.
- Your customers or market expect it. Some security-conscious buyers look for one.

A sensible middle step is a private program, invited researchers only, often run through a platform, before going public. It keeps volume manageable while you learn how to handle reports.

## How to handle "what is your bounty?" emails today

These arrive at almost every company with a public website. Many are low-effort scanner output sent to hundreds of companies in the hope of payment. Some are real.

Reply politely, point to your disclosure policy, say you do not run a paid program, and ask for the details and steps to reproduce. Then actually check the report. Do not pay for findings under pressure, and do not ignore a report because the first message was pushy. If it turns out to be real and serious, fix it, thank the person, and consider a modest thank-you payment at your discretion if your policy allows.

If it involves customer data being exposed, treat it as an incident, not a support ticket. A one-page incident plan helps here, see [diligence asks for your incident response plan](/post-incident-response-plan-diligence). If you sell into the EU, also check whether the new reporting duties under the Cyber Resilience Act apply to you, covered in [the EU's 24-hour vulnerability clock](/post-eu-cra-24-hour-reporting).

## FAQ

### Does having a disclosure policy invite attacks?

No. People already probe public products. A policy gives the good-faith ones a way to tell you, instead of posting it publicly or giving up.

### Will security questionnaires accept a policy without a bounty?

In my experience most early-stage reviews ask whether you have a disclosure process, not whether you pay. A published policy and security.txt usually satisfy that question. The broader questionnaire problem is in [the security questionnaire that stalls your biggest deal](/post-security-questionnaire-deal).

### Should we use a bug bounty platform?

Only once you are ready for a bounty. Platforms help with triage and payments, but they do not fix the underlying need for an owner and fast fixes.

### Can we add a bounty later without changing the policy?

Yes. Write the policy so rewards are a separate section you can add when you are ready.

If you want help deciding what your security setup should look like for your stage, a [technical teardown](/teardown) covers it, or [book a call](/book-a-call).
