---
title: 'Your SMS bill tripled and signups look great: SMS pumping'
slug: sms-bill-tripled-overnight
date: '2026-10-13T15:30:07.141Z'
category: Pattern recognition
excerpt: >-
  Bots trigger login texts to numbers that pay someone else. How SMS pumping
  works, how to spot it in a day, and the controls that stop it.
description: >-
  How SMS pumping fraud inflates your verification bill, how to spot it fast,
  and the controls that stop it from coming back.
author: The founder of Fraction
readTime: 5
draft: false
---

The founder noticed it on the card statement. The SMS bill, normally a small line item for login codes, had tripled in a month. Signups looked up too, which felt like good news until someone checked: most of the new phone numbers belonged to a handful of countries the company did not sell in, and almost none of them ever entered the code they were sent.

This is SMS pumping, sometimes called SMS traffic pumping or toll fraud, and it is a predictable pattern for any startup that sends a text message to a phone number a stranger can type into a form. It needs no account, no stolen data, and no breach. It only needs a public endpoint that sends an SMS on request.

## How the scheme works

Sending an SMS costs you money, and in some countries the price per message is high. Fraudsters work with, or are, parties in the telecom chain who earn a share of that per-message fee. Their bots find a form that sends a one-time code, a download link, or a verification message, and submit phone numbers in ranges they profit from, again and again. You pay your SMS provider for every message. Part of that money ends up with them.

To your system, it looks like signups or login attempts. That is why it often runs for weeks: a rise in verification texts reads as growth, and the bill lands at the end of the month.

## Why startups are an easy target

Large companies get hit too, but early-stage products tend to have all the gaps at once:

- **SMS sent before any friction.** Phone number first, code second, no check in between.
- **No rate limits** on the send-code endpoint, by IP, by phone number, or by number prefix.
- **Every country enabled,** because the provider default allowed it and nobody restricted it.
- **No spend alert** on the SMS account, so the first signal is the invoice.
- **No conversion metric** comparing codes sent with codes entered, which is the number that would show the problem in a day.

None of these are exotic. They are the defaults when someone builds phone verification quickly to get a login working, and they sit in the same family as the [missing circuit breaker](/post-ai-agent-no-circuit-breaker) problem with AI agents: something that costs money per call, with nothing to stop it calling too often.

## What to do in the first 48 hours

If you suspect it is happening now:

1. **Check conversion by country.** Compare messages sent with codes successfully verified, grouped by destination country. Real users verify most of the time. Pumped traffic almost never does.
2. **Turn off the countries you do not serve.** Most SMS providers let you restrict which destination countries you can send to. This alone often stops it.
3. **Add a rate limit** on the send-code endpoint: per IP, per phone number, and per number prefix.
4. **Put a challenge in front of the send,** such as a bot check, for new or suspicious sessions.
5. **Contact your SMS provider.** Ask whether they can review the traffic and whether any credit is possible. Do not count on it; providers generally treat messages you requested as billable.
6. **Set a spend alert or cap** on the account so the next spike gets noticed in hours, not weeks.

The general playbook for unexpected usage charges, including how to talk to the vendor, is in [surprise usage bill: the first 48 hours](/post-surprise-usage-bill-first-48-hours).

## What to build so it does not come back

### Keep a country allowlist

Send SMS only to countries where you have customers. Add countries when you expand. This is the highest value control and takes minutes.

### Rate limit the send, not just the verify

Teams often rate limit wrong-code attempts, which protects against guessing, and forget to limit how often a code can be sent. The send is where the money goes.

### Make SMS the second step, not the first

Where you can, ask for an email or another low-cost signal first, and only send SMS later in the flow. Or offer email and authenticator apps as the default and keep SMS for the users who need it. If you are deciding how much of your login stack to build at all, [building your own auth](/post-build-your-own-auth) covers the trade-off.

### Watch the one metric that shows it

Track verification conversion: codes verified divided by codes sent, per day and per country. Put it on a dashboard someone looks at, with an alert if it falls sharply. That one number would have caught the fraud in the opening example in its first day.

### Consider your provider's fraud features

Some SMS providers sell fraud-detection features for exactly this. Twilio, for example, offers one in its Verify product. They can help, but they are a layer, not a replacement for the allowlist, the rate limits, and the alert. Read the terms of any guarantee before relying on it.

## Who should have caught it

Usually nobody, because nobody owned the cost. Engineering built the login, finance paid the bill, and neither looked at messages sent per verified user. This is a common shape for early-stage cost problems: the person who can fix it cannot see the bill, and the person who sees the bill cannot see the cause.

A good rule is that every service billed per call should have a named owner, a spend alert, and one usage metric someone reviews monthly. That review is part of what a fractional CTO does in practice, and it is cheaper than one bad month of pumped traffic. You can see how that work is scoped on the [pricing page](/pricing).

## FAQ

### Is SMS pumping a security breach?

Not in the usual sense. No data is stolen and no account is taken over. It is abuse of a feature that costs you money every time it runs. You still need to treat it with urgency, because the cost keeps adding up until you close the gap.

### Will a CAPTCHA alone stop it?

It raises the cost for attackers and helps, but it is not enough on its own. Combine it with a country allowlist, rate limits on the send endpoint, and a spend alert.

### Should we drop SMS verification entirely?

Not necessarily. Some markets and user groups rely on it. But many products can make email or an authenticator app the default and use SMS only as a fallback, which cuts both cost and exposure.

### How do we know if we are affected right now?

Pull the last 30 days of SMS sends, grouped by destination country, next to successful verifications. If some countries show many sends and almost no verifications, you have your answer.

If you want help reviewing per-call costs and abuse gaps across your stack, a [technical teardown](/teardown) covers it, or [book a call](/book-a-call).
