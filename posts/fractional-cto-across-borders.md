---
title: 'Hiring a fractional CTO abroad: what the rate hides'
slug: fractional-cto-across-borders
date: '2026-09-21T03:39:59.436Z'
category: Pricing the work
excerpt: >-
  The international rate is lower and the saving is real, but four costs sit
  outside it. How to price FX, compliance, employer-of-record, and the one that
  matters most: overlap.
description: >-
  A cheaper international fractional CTO rate is not the whole cost. How to
  price FX, misclassification risk, and time zone overlap.
author: The founder of Fraction
readTime: 7
draft: false
---

You found a fractional CTO you like. They are in Lisbon, or Bangalore, or Toronto, and you are in the US. The rate is $9,000 a month against the $15,000 you were quoted locally, and on the spreadsheet that is a $72,000 saving over six months.

The rate is real. The saving usually is not the number on the spreadsheet, because a cross-border engagement carries four costs that a domestic one does not, and only one of them is money. Here is how to price the whole thing so you are comparing like with like.

## The four costs the rate does not include

**Payment mechanics.** International wires cost $25 to $50 a transfer, plus whatever your bank takes on the exchange rate, which is typically one to three percent and is not itemised anywhere. Platforms like Wise or Deel are cheaper on FX but add their own fee layer. On $9,000 a month, two percent of hidden FX spread is $180 a month, $2,160 a year. Not decisive, but it is real, and it is the part founders forget to model entirely.

**Currency drift.** If you agree a rate in their local currency, your cost moves with the exchange rate for the life of the engagement. A six percent move over a year is unremarkable and would take a $9,000 engagement to $9,540 without anyone renegotiating. The fix is to denominate the contract in your currency and let them carry the FX risk, which most experienced international contractors expect and price in. If they insist on their own currency, ask for a band: rates adjust only if the rate moves more than five percent, reviewed every six months.

**Compliance.** This is the one that actually bites. Engaging a contractor abroad is straightforward in most jurisdictions when the relationship is genuinely a contractor relationship. It becomes expensive when a tax authority decides the relationship was really employment. The tests vary by country but they cluster around the same signals: do they work fixed hours you set, do they have other clients, do they use their own equipment, can they subcontract, is there a notice period that looks like a job. A fractional CTO with four clients and their own tools is a clean contractor almost everywhere. A fractional CTO who is functionally full-time on your company, five days a week, for eighteen months, is a misclassification risk regardless of what the contract says.

An employer-of-record service removes that risk and costs roughly $500 to $700 per person per month. If you are engaging someone at four days a week or more, budget for it rather than hoping.

**Time zone.** Not a cost on any invoice, and usually the largest one. Which brings us to the part that decides whether this works.

## Overlap hours are the real price

A fractional CTO is not delivering a spec. They are making decisions with you, in conversation, usually in response to something that just happened. That work degrades badly when the loop takes a day.

The threshold I use is four hours of genuine overlap. Under four, every decision costs a day of latency, and a week's worth of small decisions becomes a fortnight. At four or more, it works fine, and past about six it makes no practical difference whether they are in your city or not.

US East Coast to Western Europe is five to six hours of overlap and works well. US West Coast to Western Europe is one or two hours and does not, unless someone permanently shifts their day. US to India is roughly two to three hours if one side stretches, and that stretch is a real cost borne by a person, which means it degrades over months even when everyone is willing at the start.

There is a version of this that works at low overlap, but it requires changing how you operate: written decisions rather than verbal ones, an architecture decision record habit, longer and fewer meetings, and a rule that anything blocking gets written down before end of day on either side. That is a healthier way to run a company anyway. It is also a change you have to actually make rather than intend to make. The full version of that trade-off is in [how much time zone overlap an offshore team actually needs](/post-offshore-time-zone-overlap), and the same arithmetic applies to one person as to a team.

## Doing the comparison honestly

Take the local quote and the international quote and put both through the same model for a twelve-month engagement.

Start with the fee. Add payment and FX costs, call it two percent if you are not using a low-spread platform. Add employer-of-record if the engagement is four days a week or more. Add a contract review by someone who knows the jurisdiction, which is a one-time $1,000 to $3,000 and is worth it once, not annually. Then add your own time: if the overlap is under four hours, add the cost of decisions taking a day longer, which is not a line item but is the one that shows up in your roadmap.

On a $9,000 versus $15,000 comparison at two days a week, the international option usually still wins clearly, because employer-of-record does not apply at that intensity and the compliance risk is low. On a four-day-a-week engagement the gap narrows a lot once EOR is in. And if the overlap is under three hours, I would take the local option at the higher price nearly every time, because what you are buying from a fractional CTO is responsiveness under uncertainty, and that is exactly what low overlap destroys.

None of this means hire locally. I have worked with excellent operators across several time zones. It means price the whole arrangement rather than the headline rate, the same way you would when comparing any two proposals that are not structured identically. The general method for that is in [how to compare two fractional CTO quotes fairly](/post-compare-fractional-cto-quotes).

## The contract clauses that matter more across a border

Four things to get right that you might be relaxed about domestically.

**IP assignment that works in their jurisdiction.** A US-style present assignment of all work product does not automatically have full effect everywhere. Some jurisdictions require specific language, or treat moral rights separately, or need the assignment to name consideration. This is the clause that gets discovered during diligence, eighteen months later, when it is expensive to fix. One local-counsel review, once, at the start.

**Governing law and a realistic dispute forum.** Naming your home courts is standard and usually fine, but be honest that enforcing a judgment across a border for a sum this size is not practical. The real protection is payment structure, not litigation. Pay monthly in arrears, keep the exposure to one month.

**Data protection.** If they will touch customer data, the transfer needs a lawful basis and you need them on your subprocessor list. Under GDPR this means standard contractual clauses for transfers out of the EEA. It is paperwork rather than difficulty, but it is paperwork investors and enterprise customers will ask to see.

**Notice and handover.** Distance makes a bad ending worse. Specify thirty days notice, a written handover document, and confirmed transfer of every account and credential before the final payment. Hold the final invoice against the handover, not against the last day worked.

If you are weighing an international proposal against a local one right now and want a second read on the total cost rather than the rate, that is a good use of an hour. Our own structure is on the [Fraction pricing page](/pricing), or [book a call](/book-a-call) and bring both quotes.

## Common questions

### Should I pay a foreign contractor in my currency or theirs?

Yours, in almost every case. It gives you a predictable cost and moves the FX risk to the party who deals in that currency daily. Expect them to price a small buffer in for taking the risk, which is fair and will cost you less than an unhedged rate that moves.

### At what point do I need an employer-of-record?

When the engagement looks like employment in practice rather than on paper: four or more days a week, sustained over many months, with no other clients, and you directing the working pattern. Below about three days a week with a genuinely multi-client operator, a straightforward contractor agreement is normally appropriate. If you are unsure, ask local counsel in their country, once. It is a cheap question and an expensive assumption.

### Is a lower international rate a sign of lower quality?

No. Rates track local market cost, not capability. What it can signal is a different working culture around availability and escalation, so test that during a paid trial rather than assuming it. The thing to probe is not skill, it is how they behave when something is on fire outside their working hours.

### What is the minimum viable overlap for a fractional CTO?

Four hours of genuine overlap is where the relationship stops costing you extra. Two to three hours is workable if you commit to written decision-making and accept slower loops. Under two hours, I would not do it for a role whose value is responsiveness, no matter how good the person is.

### How do I handle withholding tax?

Ask their accountant and yours before the first invoice, because the answer depends on the treaty between the two countries and on the type of service. Some jurisdictions require you to withhold a percentage and remit it; some exempt professional services under treaty if the contractor provides a residency certificate. It is a fifteen-minute question at the start and a mess to unwind after nine months of payments.
