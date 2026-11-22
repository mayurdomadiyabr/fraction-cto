---
title: Your fractional CTO bills extra for a 2am outage. Fair?
slug: fractional-cto-emergency-rate
date: '2026-11-22T04:29:37.085Z'
category: Pricing the work
excerpt: >-
  Most fractional CTO retainers say nothing about emergencies. How to price
  out-of-hours cover before the outage, not after.
description: >-
  Should a fractional CTO charge extra for out-of-hours outages? Three ways to
  price emergency cover and the five contract lines that prevent disputes.
author: The founder of Fraction
readTime: 6
draft: false
---

If your fractional CTO charges extra for a 2am outage, that is usually fair, as long as the contract said so before the outage happened. Most fractional retainers cover planned work in business hours and say nothing about emergencies. The fix is not to argue about the invoice afterwards. It is to decide, in writing, what counts as an emergency, how fast they will respond, and what that cover costs, while nothing is on fire.

I have been on both sides of this. I have been the person paged at night by a client whose payments stopped, and I have been the person reading a surprise invoice from an advisor after a bad weekend. Both conversations go better when the terms were agreed in a calm month.

## Why emergency work is priced differently

A retainer buys a share of someone's attention on a schedule. An emergency buys the right to interrupt them. Those are different products, and pricing them the same way tends to go wrong for one side.

### Interruption has a real cost to the advisor

A fractional CTO usually works with several companies. When your database falls over at 11pm on a Saturday, they drop whatever else they had, sometimes another client's work, sometimes their family. If that is unpaid, two things happen over time. Either they stop answering quickly, or they quietly raise the base retainer for everyone to cover the risk. Neither is good for you.

### Availability is the expensive part, not the hours

The hours spent on an incident are often small. A typical early-stage outage I see takes one to three hours of senior time to diagnose and talk the team through. What costs money is being reachable at all hours. That is why a standby fee, a monthly charge for the promise to answer, is often the honest way to price it. The actual incident hours are then billed on top, or included up to a cap.

## Three ways to structure emergency cover

There is no market standard here. These are the three shapes I see work, roughly from cheapest to most expensive.

### Best effort, billed at the normal rate

The contract says the advisor will try to help outside hours but makes no promise about response time. Any time spent is billed at the usual hourly or day-rate equivalent. This suits companies with low traffic, no paying enterprise customers, and an engineering team that can handle most incidents alone. It costs nothing until something breaks, and you accept that "something breaks" might mean waiting until Monday.

### Best effort with an out-of-hours multiplier

Same as above, but out-of-hours time is billed at a premium. In my experience 1.5x is common, and 2x for weekends and public holidays is not unusual. Treat those as rules of thumb, not a market survey. The multiplier is fair if the definition of "out of hours" is clear, including whose time zone. I have seen disputes where the advisor billed a 6pm call at the premium rate because it was 6pm for them and 1pm for the client.

### Paid standby with a response target

You pay a fixed monthly amount, on top of the retainer, for a committed response time, for example a reply within 30 or 60 minutes for a defined severity of incident. Incident hours are included up to a cap, say four hours a month, then billed. This is the right shape once downtime costs you real revenue or you have customers with uptime commitments in their contracts. It is also the only one of the three where you can plan around the advisor being there.

## What the contract should actually say

Whichever shape you pick, five lines in the agreement prevent almost every argument I have seen.

### A definition of an emergency

Write it down. "Production is down or customers cannot pay, log in, or access their data" is a reasonable start. "The CEO is worried about a bug" is not an emergency, and if it is billed as one the relationship sours quickly. A short severity list, two or three levels, is enough at seed stage.

### Who can trigger it

Name one or two people who can call the emergency line. If anyone on the team can page the fractional CTO, you will pay for avoidable calls, and the advisor will start treating the line as noise.

### Response time, not resolution time

A fractional CTO can promise to respond. They usually cannot promise to fix, because the fix might need an engineer, a vendor, or a cloud provider. Contracts that promise resolution times invite disputes nobody can win.

### The rate and the cap

State the out-of-hours rate or multiplier, and a monthly cap above which they must ask before continuing. This mirrors how a normal [retainer overage](/post-fractional-cto-retainer-overage) should work: no surprise bills, and a clear point where you decide whether to keep spending.

### What happens after

Agree that a bad incident ends with a short written review. If you do not run [incident postmortems](/post-do-you-need-postmortems-yet) yet, this is the cheapest way to start. Paying for the 2am call and getting nothing written down afterwards is how the same outage happens again in six weeks.

## When you should not buy emergency cover from your fractional CTO

Sometimes the honest answer is that your advisor is the wrong person to hold the pager.

If incidents are frequent, the problem is not cover, it is reliability, and you are paying senior rates to keep a fragile system alive. Spend the money fixing the causes instead. If you have two or more engineers, they should own first response, with the fractional CTO as escalation only. Paying your engineers fairly for that is its own decision, covered in [whether to pay engineers extra for on-call](/post-should-you-pay-engineers-for-on-call). And if what you really need is round-the-clock operations, a managed hosting or operations provider is a better fit than any individual.

A fractional CTO is best used in an emergency for judgment: deciding whether to roll back, whether to tell customers, whether to wake the vendor. They are an expensive way to restart servers.

## A worked example

Here is a pattern from a seed-stage B2B company I advised, with numbers rounded. The retainer covered about four days a month. They had one serious outage a quarter and one enterprise customer with a 99.5 percent uptime commitment.

We agreed a standby fee of roughly 15 percent of the monthly retainer, a 60-minute response target for "customers cannot use the product", two named people who could call, three included incident hours a month, and 1.5x for anything above that with approval required past six hours. Over a year they used the line four times. The standby cost more than the incident hours would have, and they were fine with that, because the enterprise customer asked about response arrangements during renewal and the answer was in writing.

Would that structure suit you? Only if downtime has a real price. If not, best effort at the normal rate is the sensible default.

## FAQ

### Is it normal for a fractional CTO retainer to exclude emergencies?

Yes. Most retainers are written around planned, business-hours work. If the contract is silent, assume emergencies are best effort at most, and raise it before you need it. It belongs in the same conversation as [what the retainer actually includes](/post-fractional-cto-retainer-includes).

### How much more should out-of-hours work cost?

There is no fixed rule. A 1.5x multiplier for evenings and 2x for weekends and holidays are common starting points in my experience. What matters more is a clear definition of out of hours, including the time zone.

### Should I pay a standby fee if we rarely have incidents?

Usually not. A standby fee makes sense when downtime costs you revenue or breaks a customer commitment. If outages are rare and cheap, best effort billed at the normal rate is cheaper and honest.

### What if my fractional CTO bills an emergency we never agreed on?

Pay for the time at the normal rate if they genuinely helped, then agree terms for next time. Fighting over one invoice usually costs more trust than it saves money.

If you want to see what a standard engagement covers before adding emergency terms, the [pricing page](/pricing) sets it out, and you can [book a call](/book-a-call) to talk through your own situation.
