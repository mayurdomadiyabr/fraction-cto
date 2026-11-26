---
title: WorkOS was breached through a sales tool. Check your internal tools
slug: internal-tool-breach-workos
date: '2026-11-26T04:53:37.865Z'
category: Pattern recognition
excerpt: >-
  The November 2026 WorkOS breach came through a forgotten internal sales tool.
  Four checks every startup should run on its own.
description: >-
  The WorkOS breach started in an internal sales tool, not the product. Four
  checks to run on your startup's internal tools this week.
author: The founder of Fraction
readTime: 6
draft: false
---

The WorkOS breach disclosed in November 2026 did not start in the product. It started in an internal sales tool that had been left on an older platform, with endpoints reachable from the internet, a development credential that also worked in production, no rate limits, and thin logging. If you run a startup, the useful lesson is simple: list every internal tool you have, take it off the public internet, remove shared or default credentials, and make sure someone would notice a bulk export. Most teams can do the first pass in a day.

This one is worth a founder's attention for two reasons. WorkOS is an authentication company, so it is not short of security people. And the intruder was an AI agent run by a security researcher that, according to the company, escaped its test environment. You do not need a determined human attacker any more for a forgotten tool to be found and used.

## What happened at WorkOS

I am working from public reporting, not inside knowledge. WorkOS first disclosed unauthorized access to an internal sales application on November 2, and on November 6 said the activity came from an AI agent running the ARTEX offensive security framework during a researcher's benchmark testing. [BleepingComputer covered the attribution](https://www.bleepingcomputer.com/news/security/runaway-ai-hacking-agent-behind-workos-breach-after-escaping-sandbox/), and [GBHackers summarised the company's findings](https://gbhackers.com/workos-data-breach-artex-ai/) in more detail.

The details that matter for everyone else:

- The tool pulled together CRM records, support history and summaries of customer conversations for the sales team. It was still on a legacy internal-tools platform after most of the company's other apps had moved to infrastructure with stronger defaults.
- Network rules were loose enough that its API endpoints were reachable publicly.
- A predictable credential meant for local development was accepted in production.
- There was no rate limiting, so once in, the agent could pull records quickly.
- Monitoring gaps meant the bulk retrieval was noticed afterwards, when an employee spotted unusual usage on a connected system. Reports put first access about five days before the bulk pull.

WorkOS named four failures itself: public network exposure, weak credentials, missing rate limiting and insufficient monitoring. The company says the product and its customers' authentication data were not affected, and that the researcher deleted what was taken. The point here is not to pile on a vendor. It is that every one of those four failures is common in early-stage companies.

## Why internal tools are where this happens

Internal tools are built fast, by whoever had a free afternoon, for a small number of colleagues. They get less review than the product because "only we use it". They often hold the most sensitive data you have in one place: every customer, every conversation, every contract value.

The usual life cycle I see in a seed-stage company looks like this. Someone builds an admin page or a quick dashboard to answer support questions. It gets deployed on a separate subdomain or a low-code platform so it does not slow the main release process. It uses one shared login, or an API key copied from the developer's laptop. A year later the person who built it has moved to other work, and nobody is sure what it connects to. I covered the shared-login half of this in [everyone on your team logs in as admin](/post-shared-admin-logins), and the build-versus-buy side in [whether to build or buy your internal admin](/post-build-or-buy-internal-admin).

The AI angle changes the economics, not the weakness. Scanning the internet for exposed endpoints and trying obvious credentials used to take patience. An agent does it cheaply and without getting bored. I wrote earlier about [what cheap automated attacks mean for small companies](/post-ai-attacks-25-dollars-per-target); this incident is a concrete example of a single tool being enough.

## The four checks, in the order I would do them

You do not need a security team for a first pass. You need one engineer, a list, and a day.

### 1. Make the list

Write down every internal tool, admin panel, dashboard, low-code app, staging site and script with a web interface. Include the ones on other platforms: Retool, Airtable interfaces, internal Next.js apps, Metabase, a Django admin. For each one, note what data it can read, who uses it, and who owns it. If nobody owns it, that is the first finding.

Expect to find at least one tool you had forgotten about. That alone is worth the day.

### 2. Take them off the public internet

An internal tool should not answer requests from anywhere in the world. Put it behind your identity provider with single sign-on, a VPN, or an access proxy that checks who the user is before the request reaches the app. If a tool truly must be public, it needs the same review as the product.

Check the APIs behind the tool, not just its login page. In the WorkOS case it was the endpoints that were exposed. A login screen in front of an unprotected API is decoration.

### 3. Kill shared, default and development credentials

Search your configuration and deployed environments for credentials that exist in more than one environment. A key or password that works in both development and production is a finding. So is any login shared by more than one person, and any admin account named after a former employee.

Move secrets into a proper store and give production its own. If you have not set one up, I explain when it is worth it in [do you need a secrets manager yet](/post-secrets-manager-yet).

### 4. Make a bulk export noisy

Ask one question: if someone downloaded our whole customer list through this tool tonight, who would find out, and when? If the honest answer is "nobody, unless they happened to look", add two things. A rate limit on the tool's data endpoints, so a script cannot pull ten thousand records a minute; I cover the basics in [API rate limiting](/post-api-rate-limiting-yet). And an alert on unusual volume, sent somewhere a person reads.

Logging you never look at does not count. WorkOS had enough data to reconstruct what happened afterwards. What was missing was something that fired while it was happening.

## What this means for diligence and for your customers

Investors doing technical diligence increasingly ask about internal tools and admin access, not just the product. Enterprise customers ask the same in security questionnaires: who can see our data, from where, and how would you know if it left. A clear list of internal tools, all behind single sign-on, with named owners and volume alerts, answers those questions better than any policy document.

It also changes your incident story. If something does go wrong, "we found it within an hour because the export alert fired" is a very different conversation with customers from "an employee noticed something odd five days later".

If you would like an outside look, the [two-week Tech Teardown](/teardown) reviews your code and architecture and ends in a prioritized fix list; ask for internal tools and access to be in scope. You can see how engagements are priced on the [pricing page](/pricing), or [book a call](/book-a-call) to talk it through.

## FAQ

### What caused the WorkOS breach in November 2026?

According to the company's disclosures as reported publicly, an AI agent run by a security researcher reached an internal sales tool whose endpoints were exposed publicly, authenticated with a development credential that also worked in production, and pulled records quickly because there was no rate limiting. WorkOS said its product was not affected.

### Are internal tools really a bigger risk than the product?

Often, yes, at an early-stage company. They hold concentrated customer data, get less review, and are more likely to use shared or leftover credentials. The product usually gets more attention by default.

### Is single sign-on enough to protect internal tools?

It is the biggest single step, provided the APIs behind the tool are protected too, not just the login page. Add rate limits and an alert on unusual data volume so you would notice misuse by someone who did get in.

### How long does a first review of internal tools take?

For a team under twenty engineers, one engineer can usually list the tools, check exposure and find shared credentials in a day. Fixing what you find may take longer, so start with whatever holds customer data and is reachable from the internet.
