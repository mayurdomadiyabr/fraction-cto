---
title: Your agency caps its liability at one month of fees
slug: agency-liability-cap
date: '2026-11-20T03:08:58.079Z'
category: Vendors
excerpt: >-
  How to read the liability cap in an agency contract: what is normal, which
  carve-outs matter for software, and why insurance decides it.
description: >-
  Agency contracts cap liability. What is normal, the carve-outs that matter for
  software (data, IP), and why insurance matters. Not legal advice.
author: The founder of Fraction
readTime: 6
draft: false
---

Most agency contracts limit what the agency owes you if its work causes damage, usually to the fees you paid over some recent period. That is normal and you should not expect an unlimited promise. What you should check is how low the cap is, what sits outside it, and whether the agency carries insurance that can actually pay. A cap of "one month of fees" with no carve-outs means a data leak caused by their code is, financially, mostly your problem.

This is not legal advice. Have a lawyer in your jurisdiction review the contract before you sign. What follows is how I read these clauses as a technical person who has seen what happens when they get tested.

## What the clause actually says

The limitation of liability clause is usually near the end of the master services agreement, after the warranty and indemnity sections, often in capital letters. It tends to do two things.

### The cap

A sentence like: "In no event shall Agency's total liability exceed the fees paid by Client in the [one / three / twelve] months preceding the claim." This sets the maximum the agency would pay you for any claim, however serious.

### The exclusions

A second sentence excluding "indirect, consequential, special or punitive damages, including lost profits, lost revenue and loss of data." This one matters more than founders expect. For a software product, most of the real harm from a serious failure is lost revenue, customer churn and the cost of dealing with lost or exposed data. If all of that is excluded, the cap may not matter much, because very little of your loss would be claimable anyway.

## What is normal, and what is a red flag

Practitioner guides on technology contracts often describe twelve months of fees as a common starting point, with certain claims moved outside the cap or to a higher one. That is market practice, not law, and it varies by country and by deal size. Here is how I sort what I see.

**Usually acceptable for an early-stage build:** a cap of twelve months of fees, or the total contract value for a fixed-bid project, with carve-outs for the items below.

**Worth pushing on:** a cap of three months or less of fees. On a project with uneven billing, a short look-back window can mean the cap is close to zero when a problem appears late, for example after launch when invoices have dropped to a small maintenance fee.

**A red flag:** a cap with no carve-outs at all, combined with a blanket exclusion of lost data. That combination means the agency has priced in almost no responsibility for the things most likely to hurt you.

## The carve-outs that matter for software

These are the claims that are commonly taken out of the general cap, either uncapped or given a separate, higher cap (sometimes called a super-cap).

### Intellectual property infringement

If the agency copies code it had no right to use, or ships something that infringes a third party's rights, you could face a claim from that third party. The agency should stand behind that with an IP indemnity that is not limited to one month of fees. This links directly to [who owns the code you paid for](/post-who-owns-your-code); ownership is worth little if the code itself is not clean.

### Confidentiality and data protection

If the agency's people mishandle your customer data, or their negligence causes a breach, the cost to you can include notification, forensics, regulatory exposure and lost customers. Buyer-side guides typically argue this should sit outside the general cap or under a higher super-cap, often expressed as a multiple of annual fees. If your product handles personal or financial data, this is the carve-out I push hardest on. Pair it with the checks in [vetting vendors who touch customer data](/post-vet-vendors-customer-data).

### Gross negligence, wilful misconduct and fraud

Many contracts exclude these from the cap. In some places the law may not let a party limit liability for them anyway. It is still worth having it written down.

### Your own payment obligations

Expect the agency to carve out your obligation to pay their invoices. That is standard and fair.

## Insurance is the part people skip

A carve-out is only worth what the agency can actually pay. A ten-person agency with an uncapped data-breach promise and no insurance is, in practice, offering a promise it cannot keep.

Ask two questions before you sign:

1. Do you carry professional indemnity (also called errors and omissions) insurance, and what is the limit?
2. Do you carry cyber liability insurance, and does it cover breaches caused by your work on client systems?

Ask for the certificate, not just a yes. If the cover is small, a sensible compromise is to tie the super-cap to the insurance limit. That gives you a number backed by real money, and the agency is not promising more than it can pay.

## How to negotiate it without souring the deal

Founders often avoid this clause because it feels adversarial. It does not have to be.

- **Raise it early.** Bring it up with the SOW, not at signature. Agencies negotiate these clauses all the time; [the rest of the SOW](/post-sow-red-flags) deserves the same attention.
- **Ask for the standard version.** Many agencies have a fallback position. "Can we move to twelve months of fees, with data and IP carved out to a super-cap matched to your insurance?" is a reasonable, specific request.
- **Trade, do not demand.** If they will not move the cap, ask for a longer defect warranty, tighter security obligations, or your own access to the repo and infrastructure. Lower legal recourse can be offset by better practical control. See [what an agency defect warranty should cover](/post-agency-defect-warranty).

When I review agency contracts in a [teardown](/teardown), the cap tells me how much risk the agency thinks it is taking. A sensible cap with clear carve-outs usually comes from a vendor that has thought about failure. A one-month cap with nothing carved out usually comes from a template nobody has read.

## FAQ

### Is a liability cap in an agency contract normal?

Yes. Almost every professional services contract has one, and asking for unlimited liability will usually end the conversation. The useful question is whether the cap is proportionate to the risk and whether the most serious claims, such as data breaches and IP infringement, sit outside it.

### What is a super-cap?

A separate, higher limit that applies to specific categories of claim, such as data protection or IP infringement, while everything else stays under the general cap. It is a common middle ground between a low cap and no cap.

### Our agency is offshore. Does the cap even matter?

It matters, but enforcement matters more. A good clause is hard to use if the contract is governed by a court you cannot practically reach. Look at the governing law and dispute resolution clauses together with the cap.

### Should a fractional CTO review this or a lawyer?

Both, for different reasons. A lawyer tells you what the clause means and whether it is enforceable. A technical reviewer tells you which failures are actually likely for your product, so you know which carve-outs to fight for. If you want help with the second part, [book a call](/book-a-call). For how this works on the advisory side, see [who pays when a fractional CTO's advice goes wrong](/post-fractional-cto-liability-cap).
