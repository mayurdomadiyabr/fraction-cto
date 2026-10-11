---
title: Your fractional CTO's advice cost you money. Who pays?
slug: fractional-cto-liability-cap
date: '2026-10-11T03:01:11.483Z'
category: Pricing the work
excerpt: >-
  Most contracts cap liability at fees paid. That is normal. A cap with no
  insurance, carve-outs or decision record behind it is not.
description: >-
  Is a fractional CTO liable for bad advice? How liability caps, carve-outs,
  insurance and a decision log work, and what to ask for. Not legal advice.
author: The founder of Fraction
readTime: 6
draft: false
---

Your fractional CTO told you to move to a particular database, or sign with a particular agency, or skip a security control for now. Six months later it has cost you real money: a migration you have to redo, an agency that failed, a breach you have to disclose. The question every founder eventually asks is whether the person who gave the advice carries any of the cost.

The short answer: usually very little, and that is by design. Most fractional CTO contracts cap liability at the fees paid over some period, often the last 3 to 12 months, and exclude indirect losses like lost revenue. That is normal and mostly fair. What is not fair is a cap with nothing behind it: no professional indemnity insurance, no clear scope of who decided what, and no carve-outs for the things that should never be capped.

This is not legal advice, and the law on liability caps varies by country and state. Have your own lawyer read the clause. What follows is how the clause works in practice and what I would ask for as a founder.

## Why advice is priced the way it is

A fractional CTO might earn a few thousand dollars a month from you. The decisions they influence can be worth hundreds of thousands. If every recommendation carried unlimited liability, nobody would give advice at those rates, or they would hedge everything into uselessness: "it depends, here are four options, you choose." You would be paying senior rates for a menu.

So the market settles on a trade. The advisor accepts responsibility for doing the work competently and honestly, and the client accepts that judgment calls under uncertainty sometimes turn out wrong without that being negligence. A recommendation that was reasonable given what was known at the time is not a liability event, even if it ends badly.

That distinction, between a reasonable call that went wrong and a careless one, is where most of the real disputes live.

## What a typical clause looks like

A fairly standard shape:

- **A cap.** Total liability limited to the fees paid in the 6 or 12 months before the claim. Sometimes a fixed sum, sometimes a multiple of fees.
- **An exclusion of consequential loss.** No liability for lost profits, lost revenue, or lost opportunity, only for direct loss.
- **Carve-outs.** The cap does not apply to fraud, willful misconduct, breach of confidentiality, or IP infringement. In some places, certain liabilities cannot be capped by law at all.
- **A time limit for claims.** Sometimes a shorter window than the default statute.

If your contract has the cap but not the carve-outs, that is the first thing to fix. A fractional CTO who leaks your investor deck or copies another client's code into your repo should not be protected by a cap set at three months of fees.

## Insurance is what makes the cap real

A cap tells you the maximum you could recover. Insurance tells you whether you could actually recover it. A sole practitioner with no professional indemnity or errors-and-omissions cover may simply not have the money, and a judgment you cannot collect is worth nothing.

So ask: do you carry professional indemnity or E&O cover, at what limit, and does it cover the kind of work you are doing for us? It is a normal question and an experienced fractional CTO will answer it without fuss.

Two subtleties are worth knowing. Courts in some jurisdictions have refused to uphold caps that were set far below the insurance the client required, so the cap and the insurance level are best set together, not independently. And many policies exclude liability you take on purely by contract, such as a broad indemnity regardless of fault, so a sweeping indemnity in your paper may not be backed by anything.

## Who decided, in writing

The most useful protection is not the clause. It is a record. When a fractional CTO recommends something material, the decision should be written down: the options considered, the recommendation, the risks named, and who approved it. I keep a decision log on every engagement for this reason, and I would want the same from anyone you hire.

That record does two things. It makes careless advice visible, because the risk that was not considered is missing from the page. And it protects a good advisor from hindsight, because the risk that was considered and accepted by the founder is on the page too. Most disputes I have seen were really arguments about who decided, not about what the contract said.

## When the fractional CTO genuinely is responsible

Three patterns go beyond a judgment call:

- **Undisclosed conflicts.** They recommended a vendor that pays them a referral fee, or an agency they have an interest in, and did not tell you. That is not advice going wrong. It is a breach of trust, and it should sit outside any cap.
- **Work outside their competence, presented as expertise.** Advising confidently on a regulated area, say payments compliance or health data, with no background in it and no warning.
- **Not doing the work you paid for.** The security review that was billed but never actually happened, or the code review that was a rubber stamp.

These are worth naming in the contract: disclosure of any financial interest in a recommended vendor, and a clear scope of what they are and are not accountable for. It is worth raising at the proposal stage, alongside the other terms covered in [comparing two fractional CTO proposals](/post-compare-fractional-cto-proposals).

## What I would ask for

A cap at 12 months of fees rather than 3, with carve-outs for confidentiality, IP, fraud, and undisclosed conflicts. Confirmation of professional indemnity cover at a level that matches the cap. A written decision log as a deliverable, not a courtesy. And a mutual clause, because you are capping your liability to them too.

None of this should be adversarial. A good fractional CTO wants the same clarity, because it is what lets them give a straight recommendation instead of a hedge. If you are unsure whether the advice you have been getting is sound, a [one-off technical teardown](/teardown) is a cheap way to get a second view. My own terms are on the [pricing page](/pricing), and if you want to talk through a clause or a decision that went wrong, [book a call](/book-a-call).

## FAQ

### Can I sue my fractional CTO for bad advice?

You can bring a claim if the advice was negligent, meaning below the standard a competent professional would meet, not merely wrong in hindsight. Any recovery is usually limited by the contract's liability cap. Talk to a lawyer about your specific case.

### Is a liability cap equal to fees paid normal?

Yes. Caps tied to fees paid over the previous 6 to 12 months are common in consulting contracts. The important parts are the carve-outs and whether insurance backs the cap.

### Should a fractional CTO have insurance?

Ideally yes, professional indemnity or errors-and-omissions cover. Ask the limit and whether it covers the work they are doing for you.

### What is a decision log and why does it matter?

A short written record of each material decision: options, recommendation, risks, and who approved it. It is the best evidence of whether advice was careful, and it protects both sides.
