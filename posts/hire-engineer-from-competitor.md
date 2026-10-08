---
title: 'Hiring an engineer from a competitor: the real legal risk'
slug: hire-engineer-from-competitor
date: '2026-10-08T02:43:58.835Z'
category: Hiring
excerpt: >-
  The non-compete is rarely what hurts. Trade secrets and non-solicits are.
  Cheap guardrails before you hire from a competitor.
description: >-
  Hiring a senior engineer from a competitor? Where non-competes stand, why
  trade secrets are the bigger risk, and guardrails for day one.
author: The founder of Fraction
readTime: 6
draft: false
---

You have found a strong senior engineer, and the reason they are so good is that they spent four years building almost exactly what you are building, at a competitor. Your first worry is their non-compete. It probably should not be.

Short answer: in many US states a non-compete for an ordinary engineer is hard to enforce, and the federal ban that was meant to end them never took effect. The bigger and more common risk is trade secrets: the candidate bringing code, documents, customer lists, or detailed confidential knowledge from the old employer into your company. That can cost you far more than a non-compete dispute. Have a lawyer read their agreements, and put a few cheap, specific guardrails in place before day one. This post is practical guidance from the hiring side, not legal advice.

## Where non-competes stand

The Federal Trade Commission finalised a rule in April 2024 that would have banned most non-compete agreements. A federal court in Texas set it aside in August 2024, and in September 2025 the FTC dropped its appeals. So there is no federal ban. Non-competes are governed by state law, and that law varies a lot.

California has refused to enforce employee non-competes for a very long time, under Business and Professions Code section 16600, and in 2024 extended that to agreements signed outside the state. Minnesota banned new non-competes from July 2023. Several other states, including Colorado, Illinois, Massachusetts, Oregon, and Washington, restrict them through salary thresholds, notice requirements, or limits on duration. Others enforce reasonable ones.

What this means in practice: whether your candidate's non-compete matters depends on which state's law applies, what the agreement actually says, and whether the old employer is the kind that sues. That is a question for an employment lawyer, and it usually takes them an hour, not a week.

## The risk that actually hurts startups

Most disputes I have seen around a hire from a competitor were not about the non-compete. They were about what the engineer brought with them.

**Code and documents.** An engineer copies a folder of their old work "for reference." Months later it shows up in discovery, and your company is now arguing about whether its product contains someone else's code.

**Customer and pricing data.** A spreadsheet of accounts or a pricing model from the old employer, used to build your pipeline.

**Detailed confidential know-how.** The exact thresholds of a fraud model, a proprietary algorithm, internal architecture decisions that were specific to the old company. General skill and experience belong to the engineer. Specific confidential details do not.

**Non-solicitation.** Separate from non-competes, many agreements stop the engineer recruiting former colleagues or approaching former customers for a period. These are often more enforceable than the non-compete itself, and a startup hiring a whole team from one competitor is exactly the situation they were written for. If you are thinking of [having your engineer hire their former colleagues](/post-hire-from-engineer-network), check this first.

The reason trade-secret problems are worse than non-compete problems: a non-compete dispute is about one person's job. A trade-secret dispute can be about your product. It can stall a fundraise, because investors running [technical diligence](/teardown) ask about IP provenance, and "we might have a competitor's code" is not an answer anyone wants to give.

## What to do before you make the offer

**Ask for the agreements early.** Ask the candidate, politely and as a standard step, to share any non-compete, non-solicit, confidentiality, and invention assignment agreements they signed. Good candidates expect this. Hesitation is worth noticing.

**Pay for an hour of employment-law review.** Give the lawyer the agreements and the role description. Ask three questions: is the non-compete likely enforceable for this role, what does the non-solicit cover, and what should the offer letter say.

**Write the offer letter with a clean-hands clause.** The candidate confirms they will not bring or use any confidential information or materials from a previous employer, and that they are not bound by anything that stops them doing this job. This protects you and makes the expectation unambiguous.

**Shape the role if needed.** If the agreement has a narrow restriction, say a specific product line for twelve months, you may be able to keep the engineer away from that area for that window. That is often cheaper than a fight.

## What to do on day one

These are boring, cheap, and they work:

- **No old materials on company systems.** Say it in onboarding, in writing. No old repos, no documents, no "templates."
- **Build from first principles.** When they design something similar to what they built before, they write it fresh, in your codebase, from your requirements. Their experience shapes the design. Their old code does not appear in it.
- **Keep an IP trail.** Your code review history and design docs already show that work was created at your company. Make sure every engineer has signed your own invention assignment agreement, which is standard and something diligence will check. Our post on [engineers with side projects](/post-engineer-side-project-ip) covers the same agreement from another angle.
- **Do not ask about the competitor's internals.** Founders sometimes do this casually in a one-to-one: "how did they handle X?" Do not. It creates exactly the record you do not want.

## Is it still worth hiring from a competitor?

Usually yes. An engineer who has already solved your problem once will make better decisions faster, and that is legitimate experience they are entitled to use. Most hires like this go fine, because most engineers are honest and most former employers do not litigate over a single individual contributor.

Where I would slow down:

- The candidate was very senior at the competitor, with deep access to strategy or customer data.
- You are hiring several people from the same company in a short period.
- The competitor has a history of suing over departures.
- The candidate offers you something from the old job. That is not a hire, that is a liability.

## FAQ

### Can a former employer sue my startup, not just the engineer?

Yes. Trade-secret claims can name the new employer, especially if it benefited from the information. That is why the guardrails above are written for the company, not just the candidate.

### Is a non-compete signed in another state enforceable against a California hire?

California law makes most employee non-competes void and, since 2024, says they cannot be enforced against California employees regardless of where they were signed. Other states have different rules. Ask a lawyer about your specific case.

### What if the candidate does not remember what they signed?

Ask them to request copies from the old employer's HR. It is a routine request. If they cannot get them, have your lawyer advise on the risk before the offer.

### Should we just avoid hiring from competitors?

No. You would be cutting yourself off from the best-qualified people. Hire them, and put the process in place so their experience comes with them and their old employer's property does not.

If you are planning a senior hire from a competitor and want help structuring the role and onboarding so it holds up in diligence later, [book a call](/book-a-call). You can see how we work on hiring and diligence on our [how it compares](/comparison) page.
