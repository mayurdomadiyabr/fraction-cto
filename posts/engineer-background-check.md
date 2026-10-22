---
title: Should you background check your first engineer?
slug: engineer-background-check
date: '2026-10-22T13:56:22.326Z'
category: Hiring
excerpt: >-
  A background check confirms identity and history, not ability. When it is
  worth running for an early engineer, and the FCRA steps you cannot skip.
description: >-
  When to background check your first engineer, what it can and cannot tell you,
  and the FCRA disclosure and adverse action steps to follow.
author: The founder of Fraction
readTime: 7
draft: false
---

You are about to make an offer to your first engineer, and someone on your board asks whether you ran a background check. You had not thought about it. Short answer: for most early engineering hires, a background check is a narrow tool. It confirms identity, employment history and, where the role needs it, a criminal record search. It does not tell you whether the person is good at the job. If you do run one in the US through a screening company, the Fair Credit Reporting Act sets steps you must follow in order, and skipping them is the expensive part.

This is a practical guide from the hiring side, not legal advice. State and city rules add to the federal ones, so check with an employment lawyer for your locations.

## What a background check actually tells you

Founders tend to imagine a background check as a verdict on a person. It is closer to a fact check on a few claims.

### The usual components

A typical package for a software role includes some mix of:

- Identity verification, matching the person to the name and documents they gave you.
- Employment verification, confirming past employers and dates.
- Education verification, if the degree matters to you or your customers.
- A criminal record search, at county, state or national database level depending on the package.

Credit checks and driving records are sometimes offered as add-ons. For a software engineer they are rarely relevant, and several states limit when employers can use credit history at all. Do not tick boxes because the vendor's form offers them.

### What it cannot tell you

A background check will not tell you whether the engineer can design a schema, whether they finish things, or how they behave when a deploy breaks at 11pm. That comes from the work sample, the conversations, and real references. If you only have budget and attention for one thing, spend it on [reference checks that actually tell you something](/post-engineer-reference-checks). A clean record and a confirmed job title are the floor, not the signal.

## When a check is worth running

### Remote hiring and identity

The strongest reason in 2026 is identity, not criminal history. Remote engineering hiring has a real problem with candidates who are not who they say they are, including proxy interviewers and fabricated work histories. We wrote about the warning signs in [your remote engineer candidate may not be who they say](/post-fake-engineer-candidates). Identity and employment verification are cheap insurance against that specific failure, and they are the parts of a check I would run for almost any remote senior hire.

### Customers who require it

If you sell to banks, healthcare, schools, or large enterprises, your contracts may require background checks for anyone with access to customer data. Security questionnaires often ask the question directly. Read your contracts before your first hire, not after your first enterprise deal asks for proof you have been doing it.

### Access to sensitive systems

Your first engineer will usually have admin access to everything: production database, cloud account, payment provider. That is a lot of trust in one person, and it is a fair reason to verify the basics. It is not a reason to run every available search.

### When to skip or keep it light

For a contractor on a two-week paid trial with no production access, a full check is overkill. Verify identity and keep access scoped. If the trial converts, run the check as a condition of the offer.

## The order of operations under the FCRA

When a US employer uses a third-party screening company, the report is a consumer report under the Fair Credit Reporting Act. The law sets a sequence. The [FTC's guidance for employers](https://www.ftc.gov/business-guidance/resources/using-consumer-reports-what-employers-need-know) is short and worth reading in full. The steps, in plain terms:

### 1. Disclose and get written permission first

Before ordering the report, tell the candidate in writing that you will get a background report, and get their written authorization. The disclosure has to be a standalone document. Do not bury it in the application, the offer letter, or a page with a liability waiver. Courts have treated extra language in the disclosure as a violation, and class actions over defective disclosure forms are common. Most reputable screening vendors provide a compliant form. Use theirs rather than writing your own.

### 2. Run the check after the offer, not before

Many states and cities have fair-chance or ban-the-box laws that stop employers from asking about criminal history until after a conditional offer. Making the offer contingent on the check, then running it, keeps you on the safe side in most places and is better for the candidate anyway.

### 3. If something concerns you, send a pre-adverse action notice

If the report contains something that might lead you to withdraw the offer, you do not just withdraw it. You first send the candidate a pre-adverse action notice with a copy of the report and the FTC document "A Summary of Your Rights Under the Fair Credit Reporting Act". Then you wait a reasonable period so they can respond. The law does not set a number of days. Five business days is a common practice, and some state or city rules set their own.

### 4. Then, if you decide not to hire, send the adverse action notice

If you still decide not to hire based on the report, send a final notice that includes the screening company's contact details, a statement that the company did not make the decision, and the candidate's right to dispute the report and get a free copy.

### Why the order matters

Reports are wrong more often than founders expect. Common names get mixed up. Old records attach to the wrong person. The pre-adverse step exists so that a person does not lose a job over someone else's record. Treat it as a real conversation, not a formality. In my experience the most common outcome of that conversation is "that is not me", followed by a corrected report.

## What a small company usually gets wrong

### Treating the check as the interview

A founder who skipped a work sample and leaned on a clean background check has verified the wrong thing. A clean record says nothing about judgment.

### Running checks unevenly

If you check one candidate and not another for the same role, you invite a discrimination claim. Decide the policy per role before you start, and apply it to everyone who gets an offer for that role.

### Asking for more than the job needs

A software engineer does not need a credit check or a motor vehicle record. Extra searches add cost, delay, and legal surface area, and they signal to a strong candidate that you do not know what you are doing.

### Hiring abroad with US assumptions

Outside the US, the rules are different and often stricter. In much of Europe, criminal record checks for ordinary roles are restricted, and data protection law limits what you can collect. If you hire through an employer of record, it will usually run what is lawful locally. We cover that route in [EOR or contractor for your first engineer abroad](/post-employer-of-record-first-international-engineer).

## A simple policy for your first five hires

Write this down in half a page:

1. Which roles get a check, and which components: for engineers, identity, employment history, and a criminal search only if a customer contract requires it.
2. When it runs: after a conditional offer, before the start date.
3. Who sees the report: one founder, not the whole team.
4. What would actually change a decision, decided in advance and related to the job.
5. The vendor you use, and that you use its FCRA-compliant disclosure form.

That is enough for a team of five. It answers the security questionnaire honestly and keeps the check in proportion. If you are setting up your first engineering hire and want a second pair of eyes on the whole process, from job post to offer, that is the kind of thing we do in a [call with Fraction](/book-a-call).

## FAQ

### Do I legally have to run a background check on my first engineer?

Generally no. There is no general US federal requirement for private employers to background check software engineers. Specific industries, customer contracts, or government work can require it. Check your contracts.

### Can I just Google the candidate instead?

You can look at public profiles and their published work, and most people do. Be careful about what you then act on. Rules on protected characteristics still apply, and once you pay a company to compile a report, the FCRA applies.

### How long does a background check take?

Identity and database searches are often back within a day or two. Employment verification and county-level criminal searches can take longer, sometimes a week or more if a past employer is slow to respond. Build that into the start date.

### Should I check contractors too?

Apply the same thinking to access, not to employment type. A contractor with admin access to production deserves the same identity verification as an employee. A contractor working in a scoped sandbox may need nothing more than a verified identity.
