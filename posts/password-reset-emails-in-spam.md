---
title: Your password reset emails land in spam. Here is why
slug: password-reset-emails-in-spam
date: '2026-11-17T04:51:17.498Z'
category: Pattern recognition
excerpt: >-
  Password resets and invites going to junk usually means missing SPF, DKIM or
  DMARC, or product mail sharing a reputation with marketing.
description: >-
  Password reset or invite emails in spam? The three usual causes, Google's 2024
  sender rules, and the fix in the right order.
author: The founder of Fraction
readTime: 5
draft: false
---

If your password reset, invite or receipt emails are landing in spam, the cause is almost always one of three things: your domain is not properly authenticated (SPF, DKIM and DMARC), your product email shares a sending reputation with marketing email, or the sending address does not match the domain the mail claims to come from. All three are fixable in a day or two, and none of them needs a new email vendor.

This is one of the most common things I find in early products, and it is easy to miss because the founders' own test emails arrive fine. The people who do not get the email rarely tell you. They just do not finish signing up.

## How you find out you have this problem

Nobody files a ticket that says "your DKIM record is missing." The signals look like other problems.

- **Sign-up drop-off at the verify-email step.** People create an account and never confirm it. You assume they lost interest.
- **"I never got the invite."** A customer adds three teammates and one never shows up. The admin blames the teammate.
- **Support tickets that end with "found it in junk."** One of these is a sign that many more people never looked.
- **A sudden change after a provider policy update.** Mail that used to arrive starts going to spam or bouncing without any change on your side.

That last one is real. Since 1 February 2024, Google's [email sender guidelines](https://support.google.com/a/answer/81126) require every sender to Gmail accounts to set up SPF or DKIM, keep spam rates reported in Postmaster Tools below 0.3%, and send over TLS. Anyone sending around 5,000 or more messages a day to Gmail addresses also needs SPF and DKIM and a DMARC record, with the From domain aligned, and marketing mail needs one-click unsubscribe. Yahoo announced similar rules at the same time. A lot of startups set up email years earlier, when none of this was enforced, and never revisited it.

## Why it happens at small startups

### Nobody owned the DNS records

Email authentication lives in DNS, and DNS usually belongs to whoever bought the domain. The developer who wired up the email provider added the records the provider asked for at the time, or added half of them, or added them to a staging domain. Later, someone moved DNS to a new registrar or to Cloudflare and copied over the records they recognised. The DKIM key did not make the trip.

This is the same ownership gap that leads to [a domain or certificate expiring and taking the website and email with it](/post-domain-or-certificate-expired). Infrastructure that is set once and never looked at again decays quietly.

### Product mail and marketing mail share one reputation

The most damaging pattern I see: the password reset email and the monthly newsletter go out from the same domain, through the same account, sometimes from the same address. Marketing email gets far more spam complaints than transactional email, because people forget they subscribed. When the shared reputation drops, the reset emails suffer with it.

### The From address does not match the sender

Your app sends as hello@yourcompany.com, but the mail actually leaves through a provider's shared domain, and nothing ties the two together. To a receiving server that is exactly what spoofing looks like. DMARC alignment is the check that the domain in the From line matches a domain that passed SPF or DKIM.

## The fix, in the order I do it

### 1. Look at what you actually have

Send a reset email to a Gmail account, open it, and use "Show original." Gmail shows whether SPF, DKIM and DMARC passed. Do the same with an Outlook account. This takes ten minutes and tells you more than any audit tool.

### 2. Authenticate the sending domain properly

In your email provider, set up domain authentication for the domain you actually send from. That means the provider's DKIM records, an SPF record that includes the provider (and only one SPF record per domain, since two is itself an error), and a DMARC record. Start DMARC at `p=none` with a reporting address so you can see who is sending as you before you tighten it. Most teams find at least one tool they forgot about, such as a CRM or a helpdesk, sending as the main domain.

### 3. Split transactional and marketing streams

Send product email (resets, invites, receipts, alerts) from a subdomain such as mail.yourcompany.com or through a separate stream in your provider, and marketing from a different one. Most providers support this directly. The goal is simple: a bad newsletter should never be able to break log-in. If you are still deciding how to send at all, I wrote about [whether to build email sending or buy it](/post-build-email-sending-or-buy); the short version is buy, but configure it.

### 4. Watch it like any other production system

Register your domain in Google Postmaster Tools so you can see spam rate and authentication results. Set up an alert on bounce rate in your provider. Track the share of new sign-ups that confirm their email within an hour. If that number drops, treat it as an incident, not a marketing problem.

### 5. Give people a fallback

Add a visible "did not get it? resend" link, tell people to check spam on the confirmation screen, and let support trigger a reset manually. These do not fix deliverability, but they stop a deliverability problem from silently costing you customers.

## What this costs to fix

For most early-stage products this is a day of focused work for one engineer who knows DNS, plus a few days of watching DMARC reports before moving the policy from `none` toward `quarantine`. It is one of the cheapest fixes on any list I hand a founder, and it often lifts sign-up completion without touching the product. If you want a second pair of eyes on your setup and the rest of the stack, a [technical teardown](/teardown) covers this kind of thing in the first hour.

## FAQ

### Do I need DMARC if I send fewer than 5,000 emails a day?

Under Google's current guidelines, DMARC is required for bulk senders and recommended for everyone else. I set it up for every client regardless of volume. It costs nothing, stops others spoofing your domain, and the reports show you every service sending as you.

### Will switching email providers fix it?

Usually not. A new provider with the same missing records and the same shared marketing stream produces the same result. Fix authentication and separation first, then decide whether the provider is the problem.

### Should marketing and product email really be on different domains?

A separate subdomain or a separate stream is enough. The point is that complaints about marketing email should not drag down the reputation that your log-in emails depend on.

### How do I know it is fixed?

Authentication passes in "Show original" at Gmail and Outlook, Postmaster Tools shows a low spam rate, and your email-confirmation rate on new sign-ups returns to where it should be. If you want help reading the results, [book a call](/book-a-call).
