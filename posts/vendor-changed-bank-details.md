---
title: Your agency emailed new bank details. Check before you pay
slug: vendor-changed-bank-details
date: '2026-11-13T02:48:37.809Z'
category: Vendors
excerpt: >-
  Payment-diversion fraud targets startups paying agencies by wire. A
  five-minute check that stops it, and what to do if you already paid.
description: >-
  Agency says its bank details changed? How to verify before paying, the fraud
  pattern to spot, and what to do fast if money went to the wrong account.
author: The founder of Fraction
readTime: 6
draft: false
---

If your agency, freelancer or contractor emails to say their bank details have changed, do not pay the next invoice to the new account until you have confirmed the change by phone, on a number you already had before that email arrived. That one rule stops most payment-diversion fraud. It costs five minutes, and it protects the largest outgoing payments a small startup makes.

This is not a theoretical risk. The FBI's [2024 Internet Crime Report](https://www.ic3.gov) put business email compromise losses at about 2.77 billion dollars from roughly 21,000 complaints, second only to investment fraud by dollar loss. A large share of those cases follow one script: a supplier you trust appears to send new payment instructions, and you pay a stranger.

## Why startups paying agencies are an easy target

Most founders I work with pay their development agency or offshore team between 10,000 and 80,000 dollars a month. The money goes out by wire or bank transfer, often to another country, and nobody on the finance side has ever met anyone on the agency side. That is the exact shape fraudsters look for.

Three things make it worse in an early-stage company:

- **One person approves and sends.** The founder reads the invoice, logs into the bank and pays it. Nobody else looks.
- **Invoices arrive by email as PDFs.** A PDF is trivial to edit. The amount, the invoice number and the logo can all be perfect while the account number is not.
- **Cross-border wires are hard to recall.** Once a payment lands in a foreign account and is moved on, the realistic chance of getting it back drops fast. Banks can try a recall, but they cannot promise one.

The fraud usually starts with a compromised mailbox, either yours or the vendor's. The attacker reads the thread for weeks, learns when invoices go out and how people write, then sends a message that looks like a normal part of the conversation. Sometimes it comes from the real vendor address because their account was taken over. Sometimes it comes from a lookalike domain that differs by one letter.

## What the fake request usually looks like

The details change, but the pattern is consistent enough that you can train yourself to spot it:

- A short note that the vendor has "changed banks" or that their usual account is "under audit" or "temporarily frozen".
- A new account in a different country or under a slightly different company name.
- Gentle urgency: the invoice is overdue, the team will be paused, payroll is at risk.
- A request to reply only by email because the contact is "travelling" or "in meetings".
- An updated invoice PDF that matches the old ones in every detail except the bank block.

None of these on its own proves fraud. Agencies do change banks. But any change to where money goes should trigger the same check every time, without exception and without embarrassment.

## The verification routine that actually works

Here is the routine I set up for founders in the first week of most engagements. It takes an afternoon to put in place and a few minutes each time it is used.

### 1. Record the vendor's bank details once, at onboarding

When you sign the agency, collect their bank details on a call or through a signed document, and store them somewhere other than your inbox: your accounting tool, your bank's saved payees, or a shared vendor sheet. From then on, the stored record is the truth, not whatever the latest email says.

### 2. Confirm every change by calling a known number

If an email asks you to change payment details, call the vendor on a phone number you already had: one in your contract, one you have called before, or one from their main website that you typed in yourself. Never use a number from the email asking for the change. Ask them to read the new account details back to you. If they cannot, you have your answer.

### 3. Send a small test payment for new accounts

For a genuine change, send a small amount first and have the vendor confirm receipt on that same known channel. Then pay the full invoice. It adds a day. That day is cheap compared to a lost month of agency fees.

### 4. Split approve from send, even with two people

If you have a co-founder, an ops lead or an outside bookkeeper, make it a rule that one person approves a payment to a new or changed account and a different person releases it. Most business banking apps support dual approval. Turn it on.

### 5. Lock down the mailbox the invoices come to

Turn on multi-factor authentication for every inbox that receives invoices, and check for mail forwarding rules you did not create, which is a common sign of a compromised account. If your team still shares logins for finance tools, fix that first; [shared admin logins](/post-shared-admin-logins) make it impossible to tell who changed what.

## If you have already paid the wrong account

Speed matters more than anything else here.

1. **Call your bank's fraud line immediately**, not the branch and not by email. Ask them to recall the payment and to contact the receiving bank. The first hours matter most.
2. **File a report.** In the US that is [IC3](https://www.ic3.gov), which can support recovery efforts when it is reported quickly. Other countries have their own police cyber-fraud channels.
3. **Tell the real vendor** on a known number. Their mailbox may be compromised too, and they need to know before it happens to their other clients.
4. **Check your own mailbox** for forwarding rules, unknown sign-ins and app passwords.
5. **Do not pay the invoice twice in a panic.** Agree with the vendor how the missed payment will be handled once the facts are clear. Whether the loss sits with you or them depends on your contract and local law, and this is the point to get proper legal and accounting advice rather than rely on a blog post.

## What to put in the agency contract

Your statement of work and master agreement should state where payments go and how changes are made. A simple clause works: bank details can only change by a signed notice from a named person, confirmed by phone. It sounds bureaucratic, but it gives both sides a clear process and it removes the awkwardness of calling to check. If you are already reviewing the contract, our list of [SOW red flags](/post-sow-red-flags) covers the other clauses worth tightening at the same time.

It also helps to understand what you are paying for each month. Founders who read their invoices line by line catch odd changes faster. Our guide to [reading an agency invoice](/post-agency-invoice) walks through what a normal one looks like.

## Where a fractional CTO fits

This is not glamorous technical leadership, but it is part of the job. When I take on a company, the vendor list, who has access to what, and how money leaves the business are among the first things I look at, because a single diverted payment can wipe out a quarter of runway. If you want a second pair of eyes on your vendor setup, a [vendor and code teardown](/teardown) covers it, or you can [book a call](/book-a-call) and we can go through it together.

## FAQ

### Is it rude to call my agency to confirm new bank details?

No. Any serious agency has seen this fraud before and will be glad you checked. If a vendor pushes back on a two-minute phone confirmation, treat that as a warning sign in itself.

### What if the email really came from the vendor's own address?

That does not prove it is genuine. Attackers often take over the real mailbox and send from it. Verification has to happen on a different channel, such as a phone number you already trusted.

### Can my bank reverse a wire that went to a fraudster?

Sometimes, if you act very quickly and the money has not been moved on. It is never guaranteed, especially across borders. Prevention is far more reliable than recovery.

### Do payment platforms remove this risk?

They reduce it when payee details are stored once and changes need approval inside the platform. They do not remove it if someone can still update payee details because of an email. The control is the process, not the tool.

This article is general guidance, not legal or financial advice.
