---
title: The EU's 24-hour vulnerability clock started. Does it cover you?
slug: eu-cra-24-hour-reporting
date: '2026-09-18T04:44:26.582Z'
category: Knowing when
excerpt: >-
  Since 11 September 2026 the EU Cyber Resilience Act can require a 24-hour
  report of an exploited flaw. Here is who it covers and how to prepare.
description: >-
  EU Cyber Resilience Act reporting started 11 Sep 2026: whether your app or
  SaaS is in scope and the minimum process a small team needs.
author: The founder of Fraction
readTime: 7
draft: false
---

Since 11 September 2026, if you sell software or connected hardware into the EU, you may have a legal duty to report an actively exploited vulnerability in your product within 24 hours of finding out about it. That is the first part of the EU Cyber Resilience Act (CRA) to take effect. Pure web SaaS is mostly outside it, but mobile apps, desktop software, SDKs, firmware and the backends those products depend on are often inside it, including products you shipped years ago.

Most seed-stage founders I talk to have either never heard of the CRA or assume it is a 2027 problem. The full rulebook does apply from 11 December 2027. The reporting clock started this month. This post explains what changed, how to tell whether it touches your product, and the small amount of preparation that makes a 24-hour deadline survivable for a team of five. It is a founder's practical reading, not legal advice; for a definite answer on your product, ask counsel who works on EU product regulation.

## What actually started on 11 September

The CRA is an EU regulation covering "products with digital elements": essentially any hardware or software product that connects to a device or a network. Most of its obligations, such as security by design, a support period and conformity assessment, apply from December 2027. The reporting obligations in Article 14 came first.

From 11 September 2026, manufacturers must notify two kinds of event through ENISA's new Single Reporting Platform:

- **Actively exploited vulnerabilities**, meaning there is reliable evidence someone malicious has used a flaw in your product without the owner's permission
- **Severe incidents** that affect the security of your product

The deadlines are tight, and they are the same for a 5-person startup as for a multinational:

- An early warning within **24 hours** of becoming aware
- A fuller notification within **72 hours**
- A final report within **14 days** of a fix or mitigation being available for a vulnerability, or within **one month** of the notification for a severe incident

You are also expected to inform affected users, and where appropriate all users, about the problem and what they can do to protect themselves. The European Commission's [CRA reporting page](https://digital-strategy.ec.europa.eu/en/policies/cra-reporting) sets out the timelines, and law-firm summaries such as [Freshfields'](https://www.freshfields.com/en/our-thinking/blogs/technology-quotient/cyber-resilience-act-reporting-obligations-take-effect-on-11-september-2026-102nzmk) note that the duty covers products already on the EU market, not only new ones.

The penalty ceiling for the regulation as a whole is up to 15 million euros or 2.5% of worldwide annual turnover, whichever is higher. Nobody expects regulators to start with seed-stage startups. That is not the point. The point is that enterprise customers, distributors and investors are now asking about CRA readiness, and "we had not heard of it" is a bad answer in a procurement review.

## Does it apply to your product?

This is where founders get it wrong in both directions. Some assume anything with a login is in scope. Others assume that because they are "a SaaS company" they are out. The honest answer depends on what you ship.

### Probably out of scope: pure SaaS

A web application that customers use in a browser, with nothing installed on their side, is generally not a product with digital elements under the CRA. Cloud and SaaS providers are dealt with under a different EU law, NIS2, which has its own thresholds and mostly catches medium and large companies. If you are a pure browser-based B2B SaaS below those thresholds, the CRA reporting duty is unlikely to apply to you directly.

### Probably in scope: anything you ship to the customer

- A mobile app on the App Store or Google Play that is available in the EU
- Desktop software, browser extensions, command-line tools, and agents customers install
- SDKs and libraries you sell or distribute commercially
- Firmware and any connected hardware

### The grey zone: the backend behind the thing you ship

The CRA also covers "remote data processing solutions": backend services without which the product cannot perform its functions. Legal commentary, for example [DLA Piper's analysis of the SaaS boundary](https://www.dlapiper.com/en/insights/publications/2026/02/cyber-resilience-act-the-fine-line-between-saas-and-digital-products), points out that if your mobile app is useless without your API, that API can be treated as part of the product. So a company that thinks of itself as SaaS but also ships a companion mobile app may be in scope for both.

A quick self-test: list every artifact a customer installs, downloads or embeds. If that list is empty, you are probably outside the CRA. If it is not, assume you are in scope until someone qualified tells you otherwise.

## Why a 24-hour clock is hard for a small team

Consider a composite example drawn from the kind of teams I work with: a 7-person startup with a consumer mobile app, around 30% of users in Europe, one backend engineer and a founder who handles security "when needed." On a Friday evening, a researcher emails the support inbox saying an API endpoint leaks other users' order history, and that they have seen the data offered for sale.

Under the CRA, the clock may have started when that email arrived, not when an engineer read it on Monday. In most small teams, the support inbox is checked by whoever is free, security reports have no owner, and nobody knows what "reliable evidence of exploitation" means or who decides. Three days later the team is still debating whether it counts.

The deadlines do not require a big security function. They require three things most startups do not have: a front door for reports, a named owner, and a pre-agreed decision about what triggers a report.

## The minimum viable CRA readiness

You can get most of the way in a week of part-time work. None of this needs a security hire.

### 1. Give researchers a front door

Publish a `security.txt` file on your domain and a short vulnerability disclosure page with a dedicated address, such as security@ your domain. Route it somewhere that is watched daily, not the general support queue. The CRA also expects manufacturers to have a coordinated vulnerability disclosure policy from December 2027, so this is work you would need anyway.

### 2. Name an owner and a backup

One person owns security reports, and one person covers holidays and weekends. Write both names down. The owner's job is not to fix the bug; it is to decide within hours whether this might be an actively exploited vulnerability or a severe incident, and to start the clock.

### 3. Pre-write the decision rule

Agree in advance, in one paragraph, what you will treat as reportable: for instance, any credible evidence that a flaw in a shipped product has been used against a real user or system. When in doubt, submit the early warning. A 24-hour early warning is brief by design, and it is far easier to explain a cautious report than a late one.

### 4. Register and rehearse

Find out which national authority coordinates your reporting, get access to the Single Reporting Platform before you need it, and run a 30-minute tabletop exercise: a fake report arrives on a Friday at 6 p.m., who does what? Most teams discover in that half hour that nobody can find the list of which app versions are live.

### 5. Know what is inside your product

When a vulnerability is announced in a popular open-source library, you need to answer "are we affected?" in hours. That requires a software bill of materials, or at least an up-to-date dependency list, for every product you ship. Most modern build tools can generate one automatically. The CRA will require an SBOM from December 2027; generating it now costs very little.

## What to tell customers and investors

Enterprise buyers with EU operations are adding CRA questions to their security questionnaires, usually alongside existing questions on incident response. A short, honest answer beats a long, vague one: whether your products are in scope, what your disclosure process is, your internal response times, and that you are working toward the December 2027 requirements. [The security questionnaire that stalls your biggest deal](/post-security-questionnaire-deal) covers how to answer these without overclaiming.

For fundraising, the CRA is unlikely to kill a deal at seed. At Series A, especially for hardware, mobile-first or developer-tool companies selling into Europe, expect a diligence question. The answer investors want is not a certificate. It is evidence that someone owns the issue and has a plan.

## FAQ

### We are a US company. Does an EU law apply to us?

If you make your product available on the EU market, yes. Where your company is incorporated does not decide it. A mobile app downloadable in EU app stores counts as available there.

### Do we need to hire a security person now?

Usually not. The reporting duty needs an owner and a process, not a department. [When you need your first security hire](/post-first-security-hire-yet) walks through the signals that actually justify that role.

### Our product is open source. Are we covered?

Non-commercial open-source projects are treated differently, and open-source stewards have their own lighter regime. If you commercialise an open-source product, for example by selling a hosted or enterprise edition, you are likely a manufacturer for that product. Get specific advice.

### What if we miss the 24-hour window?

Report as soon as you realise, and document why you were late. Regulators generally treat a late but honest report better than silence. Then fix the process that caused the delay.

If you ship an app, SDK or device into Europe and are not sure where your product falls, a [technical teardown](/teardown) will map what is in scope and what the minimum process should be, or you can [book a call](/book-a-call) and we can work through it in 30 minutes.
