---
title: Who can send a message to every one of your customers?
slug: who-can-message-all-your-customers
date: '2026-10-16T09:45:41.769Z'
category: Pattern recognition
excerpt: >-
  Push, email and SMS tools can speak to your whole user base in minutes. After
  the ASOS rogue-notification breach, an afternoon audit for founders.
description: >-
  Your push, email and SMS tools can message every customer at once. Who can log
  in, how to lock them down, and what to do if a rogue send goes out.
author: The founder of Fraction
readTime: 7
draft: false
---

Somewhere in your stack there is a tool that can send a message to every one of your customers at once: a push notification service, an email platform, an SMS provider, an in-app messaging tool. Whoever can log into that tool can speak in your name to your entire user base in minutes. Most early-stage teams have never written down who that is. The fix is small: list every tool that can broadcast, lock down who can log in, require multi-factor authentication and approval for large sends, and decide in advance what you will do if a rogue message goes out.

## Why this is on my mind this week

On 8 October 2026, the online retailer ASOS confirmed a breach of customer data after attackers sent an unauthorised notification through its own app. [According to TechCrunch](https://techcrunch.com/2026/10/08/asos-confirms-breach-of-customer-data-after-hackers-send-rogue-app-notification/), the company said attackers had accessed a third-party platform it uses to communicate with customers, and the message itself was an extortion note. TechCrunch also noted a similar incident earlier this year, when hackers used a third-party marketing platform to send scam messages to Betterment customers.

ASOS is a large public company, not a seed-stage startup. But the shape of the problem is the same at every size, and it is arguably worse at a small company. Big companies at least have a security team that can be paged. A ten-person startup usually has a marketing tool that three former contractors still have logins to.

## Why broadcast tools are a special kind of risk

Most security conversations at startups focus on the production database and the cloud account. Those matter. But a broadcast tool is dangerous in a different way.

**It speaks with your voice.** A message that arrives as a push notification from your app, or an email from your domain, carries your brand's trust. Customers act on it. A phishing link sent from your real sender is far more convincing than one from a lookalike domain.

**It reaches everyone at once.** A database breach is often discovered weeks later. A rogue broadcast is public in minutes, screenshotted, and posted online before anyone on your team has opened their laptop.

**It usually holds customer data anyway.** To send messages, these tools sync names, emails, phone numbers, device tokens, and often behavioural data like what people browsed or bought. So the same login that can send a message can often export the list.

**It is usually owned by marketing, not engineering.** Which means it often sits outside whatever access controls engineering has set up. Marketing tools get shared logins, agency access, and integrations added by whoever needed them that week.

## The tools to look for

When I do this exercise with founders, the list is usually longer than they expect. Typical items:

- Push notification services, either built into a customer engagement platform or a standalone provider.
- Email marketing and transactional email services.
- SMS and WhatsApp messaging providers.
- In-app messaging and support chat tools that can send proactive messages.
- Your own admin panel, if it has a "send to all users" feature someone built for a launch.
- Social accounts and community spaces where an announcement reaches all your users.
- Any agency or contractor login to one of the above.

The last item is where I most often find surprises. If an agency built your app, they may still hold the credentials for your push notification setup, and possibly the [app store account itself](/post-agency-owns-app-store-account).

## A short audit you can do this week

This takes an afternoon, not a project. A non-technical founder can lead it.

### 1. List every tool that can broadcast

Ask engineering, marketing, and support separately. Each team will name tools the others forgot. Write down the tool, what channel it controls, and roughly how many people it can reach.

### 2. List who can log in to each

Not who should, who can. Export the user list from each tool's settings. Look for former employees, agencies, freelancers, and shared logins like marketing@ that several people use. Remove anyone who no longer needs access. I covered the wider version of this in [shared admin logins](/post-shared-admin-logins).

### 3. Require multi-factor authentication everywhere

Turn on MFA for every account, and use single sign-on if the tool supports it and you already have it. If a tool does not support MFA at all, that tells you something about whether it should hold your customer list.

### 4. Separate the people who write from the people who send

Many platforms let you give some users the right to draft campaigns and others the right to send them, or to require approval above a certain audience size. Use it. A rule like "anything sent to more than a thousand people needs a second person to approve" stops most mistakes and slows down most attackers.

### 5. Check the API keys

Engineering often connects these tools with API keys that can send messages without any login at all. Find out where those keys live, who can see them, and whether they are narrower than full account access. Rotate any that have been shared widely or have not changed in years. The same discipline applies to every integration token, as I wrote in [the OAuth tokens your integrations hold](/post-saas-integration-oauth-token-risk).

### 6. Limit what data each tool holds

Does your push provider need customers' home addresses? Does your email tool need full browsing history? Every field you sync into a third-party tool is a field that can leak from it. Send what the tool needs to do its job and nothing more.

## Decide now what you will do if it happens

The worst time to work out your response is the twenty minutes after a rogue message goes out. Write a one-page plan with answers to these questions:

- **Who can stop a send?** Know which person can pause campaigns, disable an API key, or lock the account in each tool, and make sure at least two people can do it.
- **How do you tell customers it was not you?** Draft a short holding message in advance, and decide which channel you would use if the compromised channel cannot be trusted.
- **Who do you notify?** Depending on where you operate and what data was exposed, you may have legal obligations to notify regulators or customers within a fixed time. Find out what applies to you before you need it.
- **How do you find out what was taken?** Know where each tool's audit logs are and how long they are kept.

A plan like this is also exactly the kind of thing an investor or enterprise customer will ask about. It shows up in security questionnaires and in technical diligence, and having it written down is a cheap signal that someone is paying attention.

## What I would prioritise at each stage

**Pre-product-market fit.** Do the audit once, turn on MFA, and remove old logins. This is an afternoon.

**After a few thousand users.** Add send approval for large audiences, move to role-based access, and write the response plan. Review access every quarter.

**Selling to larger customers or raising a round.** Expect to be asked about this directly. Have an inventory of tools that hold customer data, who has access, and how it is reviewed.

None of this needs a security hire. It needs someone who owns the list and checks it. If you do not have that person, it is a reasonable thing to hand to a [fractional CTO](/how-it-works) for a few hours. Our [teardown](/teardown) covers customer data and access as part of a broader review, and you can [book a call](/book-a-call) if you want help working through it.

## FAQ

### Is this only a risk for large companies?

No. Large companies make the news because more people notice. Small companies are often easier targets, because their tools have more shared logins and fewer controls.

### Our engineer built our own notification system. Are we safer?

Not automatically. You avoid a third-party login, but whoever can reach the admin panel or the server that sends notifications can still broadcast. The same questions apply: who can send, how is it approved, and how would you stop it.

### What is the single most important step?

Turn on multi-factor authentication for every tool that can message customers, and remove every login that does not belong to a current team member. Those two steps close most of the easy routes in.

### Do we need to tell customers if a rogue message goes out?

Usually you should, quickly and plainly, so they do not act on it. Whether you also have a legal duty to notify depends on what data was exposed and where your customers are, so get advice early.
