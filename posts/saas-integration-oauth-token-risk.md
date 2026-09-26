---
title: Your integration holds your customers' OAuth tokens. Attackers know
slug: saas-integration-oauth-token-risk
date: '2026-09-26T04:01:13.817Z'
category: Pattern recognition
excerpt: >-
  SaaS breaches now start at the small vendor holding customer OAuth tokens.
  What changed and the six controls an integration startup needs.
description: >-
  Attackers now steal OAuth tokens from small SaaS integration vendors. Six
  controls to shrink scopes, protect storage, and revoke fast.
author: The founder of Fraction
readTime: 7
draft: false
---

If your product connects to your customers' Salesforce, Google Workspace, Slack, HubSpot, or GitHub, you are holding keys to their systems. The SaaS breaches of the last year show that attackers have noticed. They no longer need to break into a large company directly. They break into a small vendor that integrates with it, take the stored OAuth tokens, and walk in through the front door with valid credentials that skip MFA. For an early-stage integration company, the practical answer is to treat your token store as the most sensitive thing you own: hold fewer tokens, with narrower scopes, for less time, and make sure you can revoke all of them in an hour.

This post is for founders whose product integrates with other people's SaaS. It covers what changed, why small vendors are now the preferred target, and the controls I would put in place in the next month, in order.

## What happened, and why it keeps happening

Two incidents set the pattern.

In August 2025, an actor Google tracks as UNC6395 used stolen OAuth tokens belonging to the Salesloft Drift integration to pull data from a large number of corporate Salesforce instances. [Google's threat intelligence write-up](https://cloud.google.com/blog/topics/threat-intelligence/data-theft-salesforce-instances-via-salesloft-drift) describes the attacker querying objects such as Cases, Accounts, and Opportunities, then searching the stolen data for secrets like AWS access keys, passwords, and Snowflake tokens that people had pasted into support tickets and notes. The scope later widened to other Drift integrations.

In June 2026, the competitive-intelligence vendor Klue reported that attackers had used compromised legacy service-account credentials to get into its infrastructure, deployed code to harvest customer OAuth tokens, and used those tokens to query customers' Salesforce data through the API. Salesforce disabled Klue's app connections in response. [ThreatLocker's summary of the Klue incident](https://www.threatlocker.com/blog/klue-saas-supply-chain-compromise-through-long-lived-oauth-tokens) lists the recommended clean-up: revoke tokens, rotate service credentials, and audit connected instances.

The common thread is simple. A vendor holding long-lived tokens with broad access to many customers is a far better target than any one of those customers. One break-in, hundreds of doors.

## Why your startup is the easier target

Big platforms have large security teams. The vendor that integrates with them often has five engineers and a token table in the main application database. From an attacker's point of view:

- **Your tokens are valid.** They pass the platform's authentication and usually bypass the customer's MFA and login alerts, because the integration is expected to make API calls.
- **Your scopes are often broad.** It was easier during the build to request full read access than to work out the minimum set.
- **Your tokens rarely expire in practice.** Refresh tokens can keep working until someone revokes them, and nobody does.
- **Your old credentials are still around.** A service account from a 2022 prototype, a test integration an intern set up, a CI key nobody rotated. In the Klue case, the entry point was reported as legacy credentials.

None of this is unusual. It is what normal early engineering looks like when nobody has owned integration security yet. We covered the related pattern of unowned access in [the shared admin login problem](/post-shared-admin-logins) and in [scoping what AI agents can touch](/post-ai-agent-access-scope).

## What your customers will now ask

Expect this in security questionnaires and in enterprise procurement, often before you hear about it from an investor. Typical questions:

1. Which scopes does your integration request, and why each one?
2. Where are our tokens stored, and who can read them?
3. Are tokens encrypted with a key separate from the database?
4. How quickly can you revoke every token for every customer if you are compromised?
5. Do you log every API call you make on our behalf, and can we see it?
6. When did you last review service accounts and remove unused ones?

If you are preparing for a raise, technical diligence increasingly asks the same things, especially for companies whose whole product is an integration. See [the security questionnaire that stalls a deal](/post-security-questionnaire-deal) for how to handle these without derailing a sale.

## The controls, in the order I would do them

This is sized for a seed to Series A company with a small team. None of it requires a security hire, though it does need one named owner.

### 1. Inventory every credential that touches a customer system

List every OAuth app you have registered, every service account, every API key your product or your team uses to reach customer data. Include test and staging apps. Anything nobody can explain, disable it and see who complains. This is usually the week with the biggest risk reduction.

### 2. Cut scopes to the minimum

Go through each integration and compare the scopes you request with the API calls you actually make. Most teams find they asked for write access they never use, or organization-wide read when they only need a few objects. Narrower scopes limit what a stolen token can do. Re-consent is a small customer-facing cost for a large reduction in blast radius.

### 3. Move tokens out of the main database

Tokens should be encrypted with a key managed outside the application database, ideally in your cloud provider's key management service or a secrets manager, and decrypted only by the service that makes the API calls. Then a database dump, a leaked backup, or a SQL injection bug does not hand over usable tokens.

### 4. Make mass revocation a tested button

Write the script that revokes every customer's tokens, and run it in staging. Know how you would tell customers to reconnect. If the answer today is "we would figure it out," that is the gap. In both incidents above, the speed of revocation shaped how bad things got.

### 5. Log and alert on unusual API volume

You know what normal looks like for each customer: a sync every few minutes, a few hundred records. A token suddenly enumerating every object or exporting everything is visible if you log calls per token. A simple alert on volume or new object types catches the pattern these attackers used.

### 6. Rotate and expire what you control

Use short-lived access tokens where the platform supports them, rotate client secrets and service credentials on a schedule, and set a review date on every service account. Old credentials are where these breaches started.

## A note on the secrets inside your own tools

The Salesforce incidents had a second lesson that applies to every startup, integration or not. The attackers searched stolen CRM data for credentials that staff had pasted into support tickets and notes. If your team shares API keys with customers or each other through tickets, chat, or CRM fields, those tools are a credential store nobody inventoried. Pick a secrets tool, tell the team where secrets go, and search your support and CRM history for key patterns. The same logic applies to your codebase; see [the secrets diligence finds in git history](/post-secrets-in-git-history-diligence).

## An example

Here is a composite of what this looks like in practice. A seven-person company syncs sales data from customers' CRMs. Their integration requested full read and write access because the first version had a write-back feature that was later removed. Tokens lived in a column in Postgres, encrypted with a key stored in the same application's environment variables. There were three registered OAuth apps, one of which was a hackathon prototype still holding tokens for four early customers.

Two weeks of work changed the picture: the prototype app was deleted and its tokens revoked, scopes were reduced to read-only on the three objects actually used, tokens moved to a separate service with a managed key, a revocation script was tested, and per-token call volume went into their existing monitoring. The next enterprise questionnaire took a day instead of a month.

If you want help sizing this for your product, a [short technical teardown](/teardown) will find the old credentials and broad scopes before an attacker or a customer's security team does. Or [book a call](/book-a-call) and we will go through your integrations together.

## FAQ

### Are OAuth tokens safer than storing passwords?

Yes, because they can be scoped and revoked. But a stolen token works like a password with MFA already passed, so storage and scope still matter.

### Do we need a security hire to fix this?

Usually not at seed or Series A. You need one named owner, a few weeks of engineering time, and a checklist like the one above.

### How often should we review our integration scopes?

At least every quarter, and whenever you remove a feature. Scopes tend to outlive the features that needed them.

### What should we do first if we think a token was stolen?

Revoke the affected tokens, rotate the related client secrets and service credentials, check the logs for what was accessed, and tell affected customers promptly. Get counsel involved early on notification duties.
