---
title: Hiring an engineer who still has a day job
slug: hire-moonlighting-engineer
date: '2026-09-24T02:44:53.542Z'
category: Hiring
excerpt: >-
  A nights-and-weekends engineer can work for bounded projects. The real risks
  are employer IP claims and availability.
description: >-
  Hiring a moonlighting engineer: the invention-assignment IP risk, the
  availability limits, and when a part-timer is the right call.
author: The founder of Fraction
readTime: 5
draft: false
---

You found a strong engineer who wants to help, but they already have a full-time job. They offer nights and weekends, maybe 15 hours a week, for a lower rate or some equity. For a founder with no budget for a senior salary, it sounds perfect.

The short answer: it can work for a narrow, well-defined piece of work, but it is a poor fit for the person who owns your core product. The two real risks are not the hours. They are that the engineer's current employer may be able to claim what they build for you, and that your product's progress depends on someone whose first priority is always somewhere else.

This is not legal advice. It is how I think about the setup from the technical side, and where I would bring in a lawyer.

## The IP problem most founders never ask about

Almost every engineer at a real company has signed an invention assignment agreement. Many of those agreements are broad: the employer owns inventions the employee creates during employment that relate to the employer's business, and some go further. If your moonlighter builds your product while bound by one of those, their employer may have a claim on it.

Some US states limit how far those agreements can reach. California Labor Code section 2870 is the best-known: an employer generally cannot claim an invention the employee developed entirely on their own time, without the employer's equipment, supplies, facilities, or trade secrets, unless it relates to the employer's business or actual or demonstrably anticipated research, or results from work the employee did for the employer. Washington, Illinois, Minnesota, Delaware, and a handful of other states have similar statutes. Outside those states, and outside the US, the contract language usually decides.

Notice the exceptions. If your startup is in the same space as their employer, or they use their work laptop even once, the protection can disappear. We cover the reverse situation, a candidate who wants to keep their own side project, in [your engineer candidate wants to keep a side project](/post-engineer-side-project-ip). The same logic applies here, pointing the other way.

This matters most at fundraising. Investors doing diligence will ask who wrote the code and whether every contributor assigned their rights to the company. A gap here shows up in [who owns your code](/post-who-owns-your-code) and can delay a round.

### What to check before they write a line

- Ask to see, or have them summarize with their lawyer, the invention assignment and moonlighting clauses in their current employment agreement.
- Confirm your product does not overlap with their employer's business.
- Agree in writing that no employer equipment, accounts, or time will be used. That includes their work laptop, work GitHub account, and AI tools paid for by the employer.
- Have them sign your own IP assignment and confidentiality agreement before they start, not after the first release.
- If there is any doubt, ask them to get written permission from their employer. Many employers grant it for non-competing work.

## The availability problem

Even with the IP clean, a moonlighter has structural limits.

### Their day job always wins

When their employer has a launch or an incident, your work stops. That is the correct priority for them, but it means your roadmap has an unpredictable dependency you cannot manage.

### Fifteen hours is less than it sounds

Evening hours after a full workday are lower quality, and a big share goes to context switching. In practice, a nights-and-weekends engineer ships closer to a quarter of a full-time engineer's output, sometimes less. It varies, but plan around a fraction, not the raw hours.

### Nobody is on call

Production issues happen during business hours, when your moonlighter is in meetings at their other job. If customers depend on your product, someone has to be reachable. That is covered in more depth in [when do you need on-call](/post-when-do-you-need-on-call).

## When a moonlighter is the right call

It works well when the work is:

- Bounded, with a clear deliverable, such as a prototype, an integration, a data migration, or a specific feature.
- Not on the critical path of a customer commitment or a fundraising milestone.
- Reviewed by someone else, so the knowledge does not live in one part-time head.
- Clearly separate from the engineer's day job in subject matter.

It works badly when the moonlighter is effectively your CTO: making architecture calls, owning production, and being the only one who understands the system. That is a full-time job wearing a part-time label, and it tends to end with a half-finished product and an engineer who burns out.

## Paying for it

Keep the arrangement simple and explicit. A fixed monthly fee for defined deliverables beats equity-for-hours, which invites disagreement later about who contributed what. If you do offer equity, use a standard advisor or contributor agreement with vesting, and make sure the IP assignment is in place first.

## A composite example

A pre-seed marketplace founder had a senior engineer from a large payments company building the MVP on weekends. Six months in, a seed investor's diligence asked about contributor agreements. The engineer's employment agreement claimed inventions "related to the business of the company or its affiliates", and the marketplace included a payments flow. Nothing was ever contested, but the lawyers needed a written release from the employer before the round closed, and it took five weeks to get it. Two hours of checking at the start would have raised the question when it was cheap to answer.

## A better structure for many founders

If what you really need is senior judgment a few hours a week, a moonlighting engineer is the wrong tool. You are asking one person to both decide and build, part-time, while working somewhere else. The more common fix is to split the roles: a fractional CTO for architecture, hiring, and review, plus a contractor or first hire who builds full-time. The cost comparison is in [fractional CTO vs senior engineer](/post-fractional-cto-vs-senior-engineer), and our rates are on the [pricing page](/pricing).

If you are weighing a moonlighter right now and want a quick sanity check on the setup, [book a call](/book-a-call).

## FAQ

### Can I hire an engineer who is employed at a competitor?

For anything in the same space, avoid it. The IP and trade-secret risk is high for both of you, and state protections usually do not cover work related to the employer's business.

### Does it matter if they only work on weekends?

Time is only one factor. Under statutes like California's, the invention also must not relate to the employer's business and must not use employer resources. Weekends alone do not make it safe.

### Should the moonlighter be a contractor or an employee?

Usually a contractor under a written agreement with a clear IP assignment. Check classification rules where they live, since some places look at the substance of the relationship rather than the label.

### What if they built the first version before we signed anything?

Get an IP assignment signed now that covers past work, and have a lawyer review whether their employer agreement creates any claim. Fixing it before a raise is far easier than during one.
