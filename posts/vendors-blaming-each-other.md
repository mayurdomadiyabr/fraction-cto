---
title: 'Two vendors, one bug, and each blames the other'
slug: vendors-blaming-each-other
date: '2026-09-25T02:44:35.599Z'
category: Vendors
excerpt: >-
  When your agency, freelancer, and API provider all say the bug is someone
  else's, the problem is nobody owns the joins. Here is how to fix that.
description: >-
  How to end vendor finger-pointing: name one owner, trace one failing request
  end to end, settle cost later, and make integration someone's job.
author: The founder of Fraction
readTime: 6
draft: false
---

Checkout has been failing for about 4 percent of customers for two weeks. Your agency says the problem is the payment provider. The payment provider's support says their API is responding normally. The freelancer who built the mobile app says the backend is returning bad data. Everyone has a screenshot showing it is not them. You are paying all three, and the bug is still there.

This is one of the most common and most expensive patterns I see in startups that run on outside vendors. It is not usually dishonesty. Each vendor sees only its own piece, and from inside that piece it really does look like someone else's problem. The gap is that nobody owns the whole system. Here is how to close it.

## Why finger-pointing happens

Three things combine.

First, contracts define each vendor's scope and nothing else. Your agency is paid to build the backend. The mobile freelancer is paid to build the app. Nobody is paid to own the space where they connect, so nobody does.

Second, each vendor's evidence is honest but partial. The payment provider really does see successful API calls. The agency really does see its code returning a response. The failure is in how those pieces behave together, under real conditions, and that view does not live in any one vendor's logs.

Third, admitting fault has a cost. If the fix is billable, whoever owns the bug may not get paid for fixing it, and may face a warranty claim. That makes everyone slower to look hard at their own side.

## Name one owner for the whole problem

The single most useful move is to name one person who owns the bug end to end. Not the fix, necessarily. The investigation. This person's job is to collect evidence from every side, reconstruct what actually happens to one failing request, and decide who fixes what.

In an early startup with no engineering lead, that owner is often you by default, and you are poorly placed for it if you cannot read logs. The options are:

- Give it to the vendor with the widest view, usually the backend agency, and make it explicit that they are paid to investigate across boundaries, not just defend their code.
- Bring in someone independent for a few days, whose only job is the diagnosis. I explain why this gap exists in the first place in [when every technical decision waits on you](/post-non-technical-founder-bottleneck).

Either works. What does not work is three vendors in a group chat, each waiting for the others to find it.

## Get to one failing request

Arguments about "the system" go nowhere. Arguments about one specific failing transaction end quickly. Ask the owner to trace a single failure from start to finish:

1. A real failed attempt, with a timestamp and user or order ID.
2. What the app sent, from the app's logs.
3. What the backend received and returned, from the backend's logs.
4. What the backend sent to the provider, and what came back, from both sides.

Somewhere in that chain the story stops matching. That is where the bug lives, and once it is on the table, the finger-pointing usually stops on its own. In my experience the cause is most often in a boundary nobody specified: a timeout set differently on two sides, a retry that sends a duplicate, a field one side treats as optional and the other treats as required.

If a vendor cannot produce its part of that trace because it has no logging, that is a finding in itself. It is worth reading [flying blind in prod](/post-flying-blind-in-prod-when-to-pay-for-observability) on when basic observability pays for itself.

## Decide the money separately from the fix

Once the cause is clear, fix first and argue about cost second. Tell every vendor that up front: the goal this week is working checkout, and who pays will be settled from the trace, not from who shouts loudest.

Then settle it using your contracts. If the cause is a defect in work a vendor delivered, your warranty clause should cover it, see [who fixes the bugs after your agency delivers](/post-agency-defect-warranty). If the cause is a boundary nobody specified, it is usually fair to pay for the fix and treat it as a lesson for the next contract.

## Prevent the next round

The long-term fix is to make the boundaries someone's job before anything breaks.

### Write down the interfaces

For every place two vendors' work meets, a short written contract: what gets sent, in what format, what counts as an error, what the timeouts and retries are. It does not need to be formal. It needs to exist, and both sides need to have agreed to it.

### Give one vendor integration responsibility

If one vendor is clearly the center, usually the backend, add integration and end-to-end testing to their scope and pay for it. Owning the joins is real work and should be priced as such.

### Keep shared visibility

Error tracking and logs that every vendor can see, owned by you, not by any one of them. When everyone looks at the same dashboard, it is much harder for each side to see only its own clean picture.

### Keep the number of vendors small

Every extra vendor adds more boundaries. Three vendors have three pairwise joins; five have ten. Sometimes splitting work is right, but it has a coordination cost that nobody writes on the invoice. The broader case is in [the integration sprawl nobody decided to build](/post-integration-sprawl).

## An illustrative example

A composite case: a consumer app with a backend agency, a freelance mobile developer, and a third-party payment provider. Failed checkouts ran for three weeks with each party pointing elsewhere. An independent engineer spent two days tracing ten failing orders. All ten had the same shape: the mobile app timed out after 10 seconds, the backend waited up to 30 for the payment provider, and when the app retried, the backend created a duplicate order that the provider then declined as a duplicate charge.

No single vendor was wrong by its own spec. The app's timeout was reasonable. The backend's was reasonable. Nobody had matched them, and nobody had made the order creation safe to retry. The fix took the agency about a day. The three weeks before that were the real cost.

## When to get help

If you are paying several vendors and nobody owns how their work fits together, that is a leadership gap, not a vendor problem. A short independent review can map the boundaries and name the risks before the next outage does. Look at what a [teardown](/teardown) covers, or [book a call](/book-a-call) to talk it through.

## FAQ

### Who should own integration between vendors?

One named party. Either the vendor whose system sits in the middle, with integration explicitly in its paid scope, or someone on your side or an independent technical lead.

### How do I tell which vendor is at fault if I cannot read code?

Ask for a trace of one specific failing request through every system, with timestamps. You do not need to read the code to see where the stories stop matching.

### Should I withhold payment until the bug is fixed?

Usually not as an opening move. It hardens positions and slows the fix. Use your contract's warranty and acceptance terms once the cause is clear.

### Is it better to use one agency for everything?

It removes boundaries, which reduces finger-pointing, but it increases dependence on one vendor. For many early startups one primary vendor plus clear ownership of integration is the best balance.
