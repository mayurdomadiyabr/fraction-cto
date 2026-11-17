---
title: Hundreds of small charges hit your Stripe account overnight
slug: card-testing-on-your-checkout
date: '2026-11-17T04:51:19.315Z'
category: Pattern recognition
excerpt: >-
  A burst of tiny charges and declines from strangers is usually card testing.
  How to spot it, stop it and harden your checkout.
description: >-
  Card testing on your checkout: how to recognise it, why it costs more than it
  looks, and the fixes that stop it, in order.
author: The founder of Fraction
readTime: 5
draft: false
---

If you wake up to hundreds of small charges or failed payments on your Stripe account, most from customers you have never heard of, you are almost certainly being used for card testing: fraudsters running stolen card numbers through your checkout to find out which ones still work. The fix is to make your payment flow expensive to automate (rate limits, a challenge on suspicious attempts, no payment without an account or session), refund any successful fraudulent charges, and alert on decline rates so you catch the next wave in minutes rather than at breakfast.

I see this most often at startups with a cheap or free-trial plan, a donation or "pay what you want" form, or a sign-up flow that saves a card before anything else. To an attacker those look the same: a cheap way to ask a bank "is this card live?"

## How to recognise it

Card testing has a distinctive shape once you know what to look for.

- **A burst of activity at odd hours.** Dozens or hundreds of attempts in a short window, often overnight in your timezone.
- **Mostly declines.** Stolen card lists are full of dead numbers, so the decline rate spikes far above normal.
- **Small amounts.** The lowest plan, a one-dollar authorisation, or the minimum your form allows.
- **Throwaway identities.** Random-looking emails, mismatched names and billing addresses, many cards from one IP range or one browser fingerprint.
- **New customer records with no usage.** The accounts that were created never log in again.

Stripe's own guide to [protecting yourself from card testing](https://docs.stripe.com/disputes/prevention/card-testing) describes the same pattern and says plainly that stopping it usually needs code changes in your integration, which is why it lands on the engineering team rather than finance.

## Why it is more than a nuisance

It is tempting to shrug, because most of the attempts failed and the money that went through was small. The costs are elsewhere.

### Disputes and fees

The successful charges were made on stolen cards. When the real cardholders see them, some will dispute. Each dispute costs a fee on top of the refund, and dispute rates are something card networks and payment providers watch closely. Stripe recommends refunding fraudulent payments quickly to get ahead of disputes.

### Your payment account's health

A sustained spike in declines and disputes is a signal to your payment provider that something on your side is broken. You do not want to be explaining your integration to a risk team while your real customers' payments are on the line.

### Polluted metrics and side costs

Hundreds of fake sign-ups distort your conversion numbers, trigger welcome emails that bounce (hurting your email reputation), and can fire SMS verification messages you pay for. This is a cousin of [SMS pumping, where a sign-up spike that looks great is really fraud](/post-sms-bill-tripled-overnight). The same "too good to be true" growth instinct applies.

## Why your checkout was the target

Attackers pick integrations that let them try a card cheaply, quickly and anonymously. The common weaknesses I find:

- The payment or "add card" endpoint can be called without a logged-in session.
- There is no limit on how many attempts one IP, account or browser can make.
- The amount is user-controlled (donations, tips, custom pricing).
- The front end creates a payment directly from a public key with nothing server-side checking the request.
- Nobody is alerted when declines jump, so the attack runs for hours.

None of these are exotic. They are what an MVP looks like when the payment flow was built to work, and nobody yet had a reason to build it to resist abuse.

## The fix, in order

### 1. Stop the current wave

Turn on or tighten fraud rules in your payment provider (Stripe Radar has rules for blocking or reviewing by velocity, IP and card country). Temporarily require a challenge such as a CAPTCHA on the payment step. If the attack is on a free trial that saves a card, consider pausing that path for a day.

### 2. Clean up

Refund the successful fraudulent charges, mark the fake customers, and exclude them from your growth numbers. Note the time window so you can explain the blip later, including to investors who ask about that week's sign-ups.

### 3. Make attempts expensive

Require a session or account before any payment attempt. Rate-limit card attempts per IP, per account and per device. Send the provider the extra data it uses to score risk, such as customer email, name and billing address. Make sure the amount and the product are set on your server, not trusted from the browser.

### 4. Alert on the shape, not the total

Add an alert on decline rate and on payment attempts per hour, compared with your normal baseline. Card testing is obvious in those two charts. Revenue charts barely move, which is why founders miss it. If your monitoring already pages people for every error, fix that first; an alert in a channel [full of errors nobody reads](/post-error-tracker-nobody-reads) will not help.

## What this costs to fix

For a typical seed-stage product, stopping an active attack is an afternoon. Hardening the flow properly is a few days of work. That is small next to a week of dispute fees and a payment account under review. If you are not sure how exposed your checkout is, this is a standard part of a [technical teardown](/teardown).

## FAQ

### Is card testing my fault?

You did not steal the cards, but an integration that lets anyone try cards anonymously and endlessly is what attackers look for. Stripe describes prevention as a responsibility shared by merchants, card networks and Stripe.

### Will a CAPTCHA alone stop it?

It helps, especially as an emergency measure, but determined attackers can get past challenges. Combine it with rate limits, requiring a session, and provider fraud rules.

### Should I refund the fraudulent charges that succeeded?

Generally yes. Stripe's guidance is to refund them to reduce disputes. The real cardholders did not authorise them.

### Do I need a fraud vendor?

At seed stage, usually not. The tools built into your payment provider plus basic rate limiting cover most cases. Revisit it if fraud keeps coming back after you have hardened the flow. If you want help deciding, [book a call](/book-a-call).
