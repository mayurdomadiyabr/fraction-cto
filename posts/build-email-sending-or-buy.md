---
title: 'Build email sending yourself, or buy a provider?'
slug: build-email-sending-or-buy
date: '2026-08-26T02:37:10.997Z'
category: Decisions
excerpt: >-
  Running your own SMTP looks cheap until your messages land in spam. Why buying
  a provider almost always wins, and how to pick one.
description: >-
  Build your own email sending or buy a provider like SES or Postmark? A
  practitioner build-vs-buy call for early-stage startups.
author: The founder of Fraction
readTime: 5
draft: false
---

Sending transactional email is one of those jobs that looks trivial until you are in it. A founder asks me every few months whether they should "just send email from our own server" to save money. The short answer: no. Buy a provider. Run your own SMTP only if email delivery is the actual product you sell. For everyone else, the cost of a provider is a rounding error next to the cost of your messages landing in spam.

This is a build-vs-buy call where the buy side wins by a wide margin, and it is worth understanding why so you also choose the right provider.

## What you are actually deciding

"Build email sending" does not mean writing a for-loop that opens an SMTP socket. That part is easy. The hard part is everything that makes the message arrive: warming up sending IPs, publishing and rotating SPF, DKIM, and DMARC records, handling bounces and complaints, staying off blocklists, and reacting when a mailbox provider quietly starts throttling you. Deliverability is an operational discipline, not a feature you ship once.

So the real decision is: do you want to own that discipline, or rent a team that already does it? For a pre-seed to Series A company, renting is almost always correct. Your engineers should be building the thing customers pay for, not babysitting IP reputation.

### The cost argument does not hold up

Founders reach for self-hosting because a provider looks like a recurring bill. Let us put real numbers on it. Amazon SES charges about $0.10 per 1,000 emails. Postmark runs roughly $15 a month for 10,000 emails and about $245 for 500,000. Even at half a million messages a month, you are talking a few hundred dollars.

Now price the alternative. One engineer spending two days setting up deliverability, plus a few hours a month firefighting, plus the revenue you lose every time a password-reset email does not arrive, dwarfs that bill. The "savings" from self-hosting are negative once you count the engineering time and the silent churn from missed messages. This is the same trap I wrote about in [building your own auth versus buying it](/post-build-your-own-auth) and [building billing versus using Stripe](/post-build-billing-or-use-stripe): the naive build looks cheaper because you are only pricing the visible 20 percent.

## Which provider to buy

Once you accept that you are buying, the choice narrows to a spectrum with cost on one end and out-of-the-box deliverability on the other.

Amazon SES is the cheapest by far and the most hands-off in terms of price, but it hands you the raw pipe. You still manage your own reputation, and its default inbox placement is weaker until you configure and warm it properly. In one 2026 placement test, SES landed around 77 percent in the inbox with a notably higher spam rate, while Postmark measured around 83 percent inbox with a spam rate near one percent. SES is excellent once you know what you are doing, or if you are sending high volume and have someone who owns email.

Providers like Postmark, Resend, or SendGrid cost more per message but do more of the deliverability work for you and give you better defaults, clearer analytics, and faster support when a domain gets flagged. For a small team, paying the premium buys back exactly the operational hours you did not want to spend.

### A simple rule

- Sending under a few hundred thousand messages a month and you have no email specialist: pick a managed provider with strong defaults. The premium is cheaper than the distraction.
- High volume, cost-sensitive, and you have someone who will own reputation: SES, configured properly, is hard to beat on price.
- You are a two-person team shipping your first product: pick the provider with the least setup and move on. You can migrate later; email providers are a reversible decision.

## Separate your streams early

One thing that is genuinely worth doing regardless of provider: keep transactional email (password resets, receipts, alerts) separate from marketing email (newsletters, promotions). Send them from different subdomains or different providers. Marketing mail has higher complaint rates, and if it shares reputation with your receipts, a bad campaign can start sending your password resets to spam. This costs almost nothing to set up on day one and is expensive to untangle later.

## When self-hosting is actually right

To be fair to the build side: there are cases. If email deliverability is a core part of what you sell, if you are running at a volume where per-message cost genuinely moves your margin, or if you have compliance constraints that forbid third parties from touching message content, then owning the stack can make sense. But notice the shape of those cases. They are about email being the product, or scale you do not have yet. If you are asking the question at pre-seed, you are not in them.

## FAQ

### Is it cheaper to run our own email server?
On the visible bill, yes. In total cost, no. You trade a few hundred dollars a month for engineering time, deliverability risk, and the revenue lost when messages do not arrive. For an early-stage team the provider is cheaper once you count everything.

### How do we avoid our emails going to spam?
Authenticate your domain with SPF, DKIM, and DMARC, warm up new sending domains gradually, keep bounce and complaint rates low, and separate marketing mail from transactional mail. A managed provider handles most of this for you, which is the main reason to buy one.

### SES or a managed provider like Postmark?
SES if you have high volume and someone who will own reputation and setup. A managed provider if you want strong deliverability defaults with minimal work. For most early teams, the managed option is worth the premium.

### Can we switch providers later?
Yes. Email sending is a reversible decision as long as you keep your sending behind a thin internal interface. Verify your domain with the new provider, warm it up, and cut over. Do not let fear of lock-in push you into building it yourself.

If you are weighing a stack of these build-versus-buy calls at once and want a second opinion on which ones are worth your team's time, that is exactly the kind of triage a fractional CTO does. You can [book a call](/book-a-call) to walk through your list.
