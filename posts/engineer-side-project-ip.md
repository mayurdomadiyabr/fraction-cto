---
title: Your engineer candidate wants to keep a side project
slug: engineer-side-project-ip
date: '2026-09-17T11:22:51.432Z'
category: Hiring
excerpt: >-
  Refusing every side project can cost you a strong hire. Unclear ownership
  costs more. How to list prior inventions and set clear boundaries.
description: >-
  A senior engineer wants to keep a side project. What the law generally allows,
  the questions to ask, and how to keep your IP clean for diligence.
author: The founder of Fraction
readTime: 6
draft: false
---

Short answer: letting a senior engineer keep a side project is usually fine, and refusing outright can cost you the candidate. The risk is not the side project itself. It is unclear ownership. Before the offer, get the project listed as a prior invention, agree in writing on what is off limits, and make sure your invention assignment agreement is signed and correct for your state. Twenty minutes of paperwork now prevents a fight about who owns what later, often during due diligence.

This question comes up constantly with strong candidates. Good engineers build things. Many have an open-source library, a small paid app, a newsletter with tooling behind it, or a weekend prototype they hope becomes a company. When you make an offer, they ask: "Can I keep working on this?"

Founders tend to react in one of two ways. Some say "sure" without thinking. Others say "no, we need full focus." Both answers skip the part that actually matters.

## Why this matters more at a startup

At a large company, a side project is mostly a policy question. At a startup, it is an ownership question with money attached.

Investors check that the company owns its code. If an engineer later claims that part of your product came from their personal project, or that their side project is not covered by their agreement, that can slow or complicate a funding round. I wrote about how [missing IP paperwork can stall a term sheet](/post-ip-assignment-raise), and side projects are one of the most common sources of that mess.

The reverse risk is real too. If your agreement is so broad that it claims everything the engineer ever builds, a good candidate may walk away, and in some states that part of the agreement may not be enforceable anyway.

## What the law generally says

This varies by jurisdiction, so treat this section as orientation, not legal advice, and have a lawyer check your documents.

In California, [Labor Code section 2870](https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=LAB&sectionNum=2870.) limits what an employer can require an employee to assign. An employer cannot claim an invention the employee developed entirely on their own time, without the employer's equipment, supplies, facilities, or trade secret information, unless the invention relates to the employer's business or its actual or demonstrably anticipated research and development, or results from work the employee did for the employer. California also requires employers to give written notice of this limit, which is why many assignment agreements include the statute text as an attachment.

Several other states, including Washington, Illinois, and Minnesota, have similar statutes. Other states and many countries have no such protection, and the agreement itself does most of the work. If you hire people outside the United States, check local rules separately.

The practical point: in most places, the question is not "may they have a side project," but "does this particular project relate to your business, and did they use company resources on it."

## The questions to ask before the offer

Ask the candidate to describe the project plainly. You are trying to answer four things:

1. What does it do, and who uses it? A game engine and your B2B billing product do not compete. A scheduling tool and your scheduling startup obviously do.
2. Does it make money, and how much time does it take? A library with a few hundred stars is different from a product with paying customers and a support inbox.
3. Could it reasonably become related to your business? Think about your roadmap for the next two years, not just today.
4. Is it open source, and under which license? If they maintain an open-source project, they may want to use it inside your product too. That can be fine, but you need to understand the license terms first; the post on [open-source licenses in diligence](/post-open-source-license-diligence) explains why.

## How to structure the agreement

Most standard employment packages already include an invention assignment agreement. The practical steps are:

### List the side project as a prior invention

Most assignment agreements have a schedule where the employee lists inventions they made before joining. Ask the candidate to describe the side project there, specifically. This protects both sides: it is clear the company does not own it, and clear the engineer cannot later claim company work belongs to it.

### Write down the boundaries

A short side letter or a clause in the offer can say:

- No company laptop, cloud account, paid tools, or code in the side project.
- No work on it during agreed working hours.
- No features that compete with the company's product or planned roadmap.
- The engineer tells you before the project moves into a related area.

### Decide what happens with overlap

If the side project is an open-source library your product will use, agree how that works. The company can use it under its public license like anyone else, and contributions made on company time for company needs may belong to the company or be released under that same license. Put the rule in writing.

### Keep it proportionate

Do not ask for their commit logs or monitor their weekends. The goal is clarity, not control.

## When to say no

Some cases are genuine conflicts:

- The project is in your market or clearly on your roadmap.
- It has paying customers and needs real support time that will pull focus.
- The candidate plans to raise money for it soon.

In those cases, be direct. Say it is not compatible with the role and let them choose. Losing a candidate now is better than a dispute later.

## Practical tips for founders

- Use a standard, lawyer-reviewed assignment agreement rather than writing your own.
- Make sure every engineer, contractor, and advisor who touches code signs one before starting. Contractors especially: [paying for code does not always mean you own it](/post-who-owns-your-code).
- Keep all company code in company-owned accounts from day one.
- Review the prior inventions list during your pre-fundraise cleanup, not the week diligence starts.

If you want a quick review of your hiring paperwork and repository ownership before a raise, a [technical teardown](/teardown) covers it, or you can [book a call](/book-a-call).

## FAQ

### Can I ban all side projects in the employment agreement?

In some places you can restrict outside work more broadly, but in states like California an overly broad clause may be unenforceable for unrelated projects built on the employee's own time. A broad ban may also cost you strong candidates. Ask a lawyer about your jurisdiction.

### What if my engineer used their work laptop for their side project?

That weakens their protection in states like California, because the statute excludes inventions made with employer equipment. The fix is prevention: agree up front that the side project stays on personal equipment and accounts.

### Does this apply to contractors?

Contractors are governed mainly by their contract, not employee invention statutes. Make sure the contract clearly assigns work product to the company and lists any pre-existing tools they bring.

### Should I check side projects during due diligence prep?

Yes. Confirm every engineer has a signed assignment agreement, review the prior inventions listed, and make sure nothing in the product depends on code the company does not own.
