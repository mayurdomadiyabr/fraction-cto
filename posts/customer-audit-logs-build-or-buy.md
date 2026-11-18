---
title: A customer asked for audit logs. Build now or later?
slug: customer-audit-logs-build-or-buy
date: '2026-11-18T04:35:41.577Z'
category: Decisions
excerpt: >-
  Enterprise buyers ask for audit logs early. What to capture now, what can
  wait, and when to build or buy the customer-facing part.
description: >-
  What enterprise customers mean by audit logs, which events to capture first,
  and when to build or buy the customer-facing view.
author: The founder of Fraction
readTime: 6
draft: false
---

If an enterprise prospect asks for audit logs, you usually need two things, not one: an internal record of who did what that you start capturing now, and a customer-facing view or export you can add later. Start writing audit events to a separate, append-only table this month, even if no customer can see them yet, because logs cannot be backfilled. Then decide whether to build the customer-facing screen yourself or use a hosted audit-log service, based on how many enterprise deals depend on it.

The question usually arrives inside a security questionnaire or a procurement call. "Does your product provide audit logs for administrators?" The founder says yes, or "on the roadmap", and then asks me what that actually means and how big the job is.

## What the customer is really asking for

An audit log answers one question for the customer's admin: who did what, to which thing, and when. It is not your application logs, and it is not product analytics. Mixing them up is the most common mistake I see.

- **Application logs** are for your engineers. They are noisy, change format often, and are deleted after days or weeks.
- **Analytics events** are for your product team. They are sampled, aggregated and often sent to third parties.
- **Audit events** are for the customer. They must be complete, stable in format, kept for an agreed period, and show only that customer's data.

When a prospect's security team asks for audit logs, they usually want to answer questions like: who changed this user's role, who exported the customer list last Tuesday, who turned off two-factor login, and did anyone from the vendor's support team access our account.

## The events that matter first

You do not need to log everything on day one. In my experience the first version should cover these groups, because they are what security reviewers ask about:

- **Sign-in and identity:** successful and failed logins, password resets, two-factor changes, SSO configuration changes.
- **People and permissions:** user invited, removed, role changed, API key created or revoked.
- **Sensitive data actions:** bulk exports, deletions, changes to billing or account settings.
- **Your own staff:** any time someone from your company accesses a customer account, including "log in as" support tools. Customers ask about this more than founders expect.

Each event should record the actor (user, API key or staff member), the action, the target object, the account it belongs to, the time in UTC, and the source IP or client where you have it. Keep the format boring and stable. You will regret clever schemas when a customer wants a CSV.

Whether to log reads, meaning every time someone views a record, is a real decision. It multiplies volume and storage. Most products skip it at first and add it only for genuinely sensitive data, such as health or financial records, where customers explicitly need it.

## Why you should start capturing now

This is the part founders get wrong. They treat audit logs as a feature to build when the first big deal asks. But the first thing the customer's admin will do is look at last month, and if you only started logging yesterday, there is nothing to show.

So even if the customer-facing screen is months away, I recommend teams do the cheap part now:

1. Create an `audit_events` table (or a separate store) that is append-only. Application code can insert, never update or delete.
2. Write events from the places that matter, ideally in the same database transaction as the change, so you never record an action that did not happen or miss one that did.
3. Agree a retention period and write it down, so you are not surprised by storage costs or by a customer asking for two years of history.

For a small team this is usually a few days of work, not weeks. That is a rule of thumb from projects I have seen, and it depends on how scattered your permission logic is.

## Build the customer-facing part or buy it

Once you capture events, the customer-facing part is a searchable, filterable screen for admins plus an export. Larger customers will also ask to stream events into their own security tools (a SIEM such as Splunk or Datadog). That streaming request is where the work grows quickly.

Hosted audit-log services exist for exactly this: you send them events through an API, and they provide the viewer, the export and the SIEM streaming. WorkOS is one well-known example, and several identity platforms offer something similar. Pricing varies and changes, so check current terms yourself.

I lean towards building it yourself when:

- You have a handful of enterprise customers and they mostly want a simple list and a CSV export.
- Your events live naturally in your own database and you want full control over retention and residency.
- You already have the admin UI patterns to reuse.

I lean towards a hosted service when:

- Several deals in the pipeline are explicitly blocked on SIEM streaming.
- You are already using the same vendor for [enterprise SSO](/post-enterprise-sso-build-or-buy), so the integration cost is small.
- Your team is two or three engineers and every week spent on enterprise plumbing is a week not spent on the core product.

Either way, keep writing events to your own store as well. It protects you if you change vendors, and it is what your own support team will use during an incident.

## How this fits a security review

Audit logs rarely win a deal by themselves, but missing them can stall one. In a security questionnaire, an honest answer that you capture these events, keep them for a stated period, and can provide an export on request is often enough for a first enterprise customer. I wrote more about getting through these reviews without derailing the roadmap in [the security questionnaire post](/post-security-questionnaire-deal). Never claim a capability you do not have; reviewers ask for screenshots.

## FAQ

### Does SOC 2 require customer-facing audit logs?

SOC 2 expects you to log and monitor activity in your own systems, but it does not by itself require a screen where customers see their audit history. That demand usually comes from individual enterprise buyers. This is general guidance, not compliance or legal advice; your auditor has the final word.

### Can we just use our application logs?

Not for long. Application logs are noisy, mix all customers together and are usually deleted quickly. You can derive a first version from them in an emergency, but a separate, stable audit store is far easier to trust and to show a customer.

### How long should we keep audit logs?

There is no single right number. One year is a common starting point for B2B products, and some customers will ask for longer in their contract. Pick a default, state it clearly, and price longer retention if it costs you real money.

### What is the cheapest first step?

An append-only table and events written from your permission, login and export code paths. It costs days, not weeks, and it means that when a big customer asks, you already have history. If you want help scoping it against a live deal, [book a call](/book-a-call) or see how our [pricing](/pricing) works for short engagements like this.
