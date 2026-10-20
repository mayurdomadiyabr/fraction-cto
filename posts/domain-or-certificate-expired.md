---
title: Your domain expired and took the website and email with it
slug: domain-or-certificate-expired
date: '2026-10-20T06:24:23.474Z'
category: Pattern recognition
excerpt: >-
  Domain and TLS certificate renewals fail quietly at small companies. Why it
  happens, what breaks, and the one-afternoon fix.
description: >-
  Why domain and TLS certificate expiry outages keep hitting startups, what
  breaks, and the one-afternoon fix.
author: The founder of Fraction
readTime: 6
draft: false
---

The site is down, email is bouncing, and nobody touched anything. An hour later someone finds it: the domain expired. The renewal notice went to the inbox of a contractor who left two years ago, and the card on file was cancelled when the company switched banks. Or it is the cousin of that incident: the domain is fine, but the TLS certificate expired at 2am and every browser now shows a full-page security warning.

Neither of these is a hard engineering problem. That is exactly why they keep happening. They are calendar problems owned by nobody, and they tend to land on a Friday night or the morning of a launch. I see one or the other in a meaningful share of early-stage teams I review, and the fix costs an afternoon.

## Why renewals fail at small companies

Renewals fail for boring reasons, and the boring reasons stack.

### The account belongs to a person, not the company

The domain was registered by a founder on a personal account, or by the agency that built the first website, or by an early engineer using their work email. When that person leaves, the renewal reminders keep going to an address nobody reads. The same applies to the DNS provider and to whoever set up certificate issuance. If you have not looked at who actually owns these logins, our piece on [shared admin logins and owner accounts](/post-shared-admin-logins) walks through the inventory.

### Auto-renew is on, but the payment method is dead

Auto-renew is not a guarantee. It is an instruction to charge a card. Cards expire, get replaced after a fraud alert, or belong to a founder who has since left. The registrar tries, fails, sends an email to the dead address, and the clock keeps running.

### Certificates renew by a job nobody watches

Most teams now use automated certificates, often from Let's Encrypt via a tool like certbot, a load balancer, or the hosting platform. That is the right choice. But the automation is a scheduled job, and scheduled jobs fail quietly. A DNS change, a firewall rule that blocks the validation request, a server rebuilt without the renewal timer, or an expired API token for the DNS provider, and the job stops working. Nobody notices until the old certificate runs out. This is the same failure shape as other [background jobs that fail silently](/post-background-jobs-fail-silently).

## Certificate lifetimes are getting shorter

This is the part that makes the problem worse every year. In 2025 the CA/Browser Forum, the body of certificate authorities and browser makers that sets the rules for public TLS certificates, approved ballot SC-081. It cuts the maximum lifetime of a public certificate in steps: 200 days for certificates issued from March 15, 2026, 100 days from March 15, 2027, and 47 days from March 15, 2029. The limits apply at issuance, so an older certificate stays valid until its original expiry.

The practical effect: if any part of your stack still relies on a person buying a certificate once a year and pasting it into a server, that process is already broken. A once-a-year manual task becomes a twice-a-year task now, and roughly every six weeks by 2029. Manual renewal at that cadence will fail. The only sane answer is automation plus monitoring of the automation.

## What an expired domain actually breaks

People think of the domain as the website. It is much more than that.

- **Email.** Your MX records live on that domain. When it lapses, inbound mail bounces and outbound mail starts failing authentication checks. Password resets, invoices, and customer replies all stop.
- **Your app and API.** Mobile apps and integrations call your API by hostname. If the domain stops resolving, the app looks broken to every user at once.
- **Sign-in.** Single sign-on, OAuth callbacks, and magic links all depend on the domain.
- **Trust.** A domain that lapses can, depending on the registrar and the timing, become available to someone else. Anyone who registers it can receive email sent to your old addresses.

On the timing: for generic top-level domains like .com, ICANN rules give a window after expiry. Registrars may offer a renewal grace period of up to about 45 days, often at an extra fee, and ICANN's Expired Registration Recovery Policy requires registries to offer a 30-day Redemption Grace Period after deletion, during which only the previous registrant can recover the name, usually for a redemption fee. Country-code domains (.io, .co, .in and so on) follow their own registry rules, which can be stricter. Check your own registrar's terms rather than assuming the window exists. Plenty of sites break the moment the domain expires, even if you can get it back later.

## The one-afternoon fix

### 1. Inventory every domain and certificate

List every domain the company uses: the main one, marketing domains, the one the app is served from, old product names you still redirect, and any domain used for sending email. For each, write down the registrar, the account owner email, the payment method, the expiry date, and whether auto-renew is on. Do the same for certificates: where each one is issued, by what, and when it expires.

### 2. Move ownership to company accounts

Every registrar and DNS account should sit under a company-controlled address, ideally a shared role mailbox that more than one person reads, with strong MFA. Transfer anything still held by an agency or a former employee. This is far easier now than during a crisis, and it is a common [technical diligence](/post-diligence-red-flags) finding when it is not done.

### 3. Renew for longer and lock the domain

For your primary domain, renew for several years at a time. It costs little and removes most of the risk. Turn on registrar lock (transfer lock) so the domain cannot be moved without deliberate action.

### 4. Put a card that will not vanish on file

Use a company card, and add a backup payment method if the registrar allows it. Put the card expiry date in the same calendar as everything else.

### 5. Monitor from outside

Add an external check that alerts if any certificate is within 14 days of expiry, and if any domain is within 30 or 60 days. Many uptime monitoring tools include certificate expiry checks, and they will also catch the renewal job breaking. Point those alerts at a channel people actually watch, not one engineer's inbox. If you have no monitoring at all yet, this is a good first piece of the [observability you will need anyway](/post-flying-blind-in-prod-when-to-pay-for-observability).

## How to tell where you stand this week

Ask your engineer, or check yourself, three questions:

1. Who receives the renewal emails for our main domain, and is that person still here?
2. When does each of our TLS certificates expire, and what renews it?
3. If renewal fails, how would we find out before customers do?

If any answer is "I am not sure", you have found your afternoon of work. If you would like a second pair of eyes on the rest of the single points of failure in your setup, a [technical teardown](/teardown) covers this alongside the less boring risks.

## FAQ

### Is auto-renew enough to protect our domain?

No. Auto-renew only works if the payment method is valid and someone reads the failure emails. Pair it with a multi-year renewal, a company card, and an external expiry alert.

### We use a hosting platform that handles certificates. Do we still need to monitor them?

Yes, but lightly. Managed platforms are usually reliable, yet custom domains still depend on your DNS records staying correct. An external expiry check is cheap insurance and catches DNS changes that break validation.

### What should we do if our domain already expired?

Log in to the registrar immediately and renew. Most generic domains can still be renewed during a grace period, sometimes for an extra fee. If the name has entered redemption, you can usually recover it through the same registrar for a higher fee. Then do the inventory above so it does not happen twice.

### How often will certificates need renewing under the new rules?

Public certificates issued from March 15, 2026 can last at most 200 days, dropping to 100 days in 2027 and 47 days in 2029. Automated renewal tools typically renew well before expiry, so the change matters most for anything still renewed by hand.
