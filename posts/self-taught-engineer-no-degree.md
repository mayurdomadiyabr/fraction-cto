---
title: 'No degree, no famous employer: hire the self-taught engineer?'
slug: self-taught-engineer-no-degree
date: '2026-11-12T04:18:56.416Z'
category: Hiring
excerpt: >-
  A self-taught or bootcamp engineer can be a strong early hire. What the
  missing degree does and does not tell you, and how to test for the gaps.
description: >-
  Should a startup hire a self-taught or bootcamp engineer? What a missing
  degree really signals, the gaps to test for, and how to check them.
author: The founder of Fraction
readTime: 5
draft: false
---

Yes, you can hire a self-taught or bootcamp-trained engineer as an early hire, and the missing degree should not be the reason you say no. What matters is evidence of shipped work, how they reason about a problem they have not seen before, and whether there is someone senior enough around them to catch the gaps. The degree is a weak signal either way. The work is a strong one.

The real risk is not that they lack a credential. It is that a non-technical founder has no way to tell a self-taught engineer with five years of real production experience from one with five years of tutorials. Those two people can have very similar resumes.

## What a degree does and does not tell you

A computer science degree tells you someone sat through data structures, algorithms, operating systems and probably a database course. It tells you almost nothing about whether they can ship a feature, read someone else's code, debug a production incident at night, or tell you honestly that an estimate was wrong.

A big-name employer on the resume tells you they passed a hard interview once and worked inside mature systems built by other people. That is useful, and it comes with its own trap, which I covered in [hiring a senior engineer who only worked at big companies](/post-senior-engineer-from-big-company).

So when neither is present, you have lost two weak signals. You have not lost the strong ones. You just have to go and collect them yourself.

## Where self-taught engineers are often stronger

These are patterns, not rules, and they are my judgment rather than a survey result.

- **They finish things.** Someone who learned by building usually has a habit of getting to a working product, because that was the only feedback loop they had.
- **They are comfortable not knowing.** They have spent years looking things up without a teacher. At a startup, where nobody has the answer, that is most of the job.
- **They tend to be practical about tools.** They pick what works and move on, rather than what is elegant.

## Where the gaps usually are

The gaps are specific and testable. That is the good news.

### Fundamentals that only show up at scale

Why a query gets slow when a table grows. What happens when two requests update the same record at once. How memory and network calls actually cost time. Many self-taught engineers know these well because production taught them. Some have never hit them because their projects never had real traffic.

### Working in a shared codebase

A person who has only built solo projects may never have had their code reviewed, never reviewed anyone else's, and never had to write code a stranger must maintain. Bootcamp graduates in particular often have polished portfolio projects that were built from a template with heavy guidance.

### Security and data handling

This is the gap that costs the most. Storing passwords properly, checking that a user is allowed to see the record they asked for, not putting secrets in the repository. Tutorials routinely skip all of it.

## How to test for it without reading code

You do not need to be technical to run most of this.

1. **Ask what they have shipped that real people used.** Not what they built. What ran in production, who used it, and what broke. Someone with real experience tells you about the failures in detail. Someone with tutorial experience describes features.
2. **Ask them to explain a decision they would now reverse.** Experience produces regret. If every past choice was correct, they have not operated anything for long.
3. **Use a paid work sample on your real problem.** A small, real task from your backlog, paid, with a conversation afterwards about the trade-offs. I described the format in [the take-home test stopped working](/post-engineer-work-sample-test).
4. **Have someone senior look at the result.** This is the part you cannot skip. If you have no engineers, borrow one: an advisor, a fractional CTO, a trusted engineer friend. See [who vets your engineer when you have no engineers](/post-who-vets-your-engineer).
5. **Check references on the specific gaps.** Ask a former colleague how their code held up after they left it, and how they took review feedback. More on that in [the reference check questions that actually tell you something](/post-engineer-reference-checks).

## The question that matters more than the degree

Will this person be the most senior engineer in the company?

If yes, the bar is different. Your first engineer makes decisions nobody reviews: the database, the hosting, how customer data is separated, how deploys work. A self-taught engineer with eight years of running production systems can do that job well. A bootcamp graduate with one year cannot, and neither can a new computer science graduate. The issue there is experience, not education.

If no, and there is a senior engineer or a fractional CTO reviewing their work, a talented self-taught engineer with less experience is often an excellent hire. The gaps get caught in review, they learn fast, and they usually cost less than a candidate with a famous logo on the resume.

So the rule I use is simple. Unreviewed seat: hire for years of production judgment, with or without a degree. Reviewed seat: hire for slope and evidence of finished work.

## What to pay

Pay for the level of the work, not the credential. If two engineers can do the same job, a lower offer to the one without a degree is a good way to lose them in a year, once they find out. Set the band for the role first, then place the candidate in it by what they have shown. The band logic is in [what to pay your first engineer](/post-first-engineer-compensation).

## FAQ

### Should my job post require a computer science degree?

For an early startup hire, I would leave it out and write "or equivalent experience" only if you mean it. A degree requirement removes good candidates and does not remove bad ones. Describe the work and the evidence you want to see instead.

### Is a bootcamp graduate ready to be a first engineer?

Usually not straight out of the bootcamp, because the first engineer works unreviewed. A bootcamp graduate with several years of production work since then is a different candidate, and the bootcamp is no longer the relevant fact about them.

### How do I check a portfolio I cannot read?

Ask the candidate to change something in it live while explaining what they are doing, and have a senior engineer watch. A person who built it can modify it. A person who assembled it from a guide usually cannot.

### Does being self-taught matter to investors in diligence?

Investors look at the system and the team's judgment, not diplomas. What they do notice is a codebase nobody senior has ever reviewed. If that is your situation, a [technical teardown](/teardown) before the round is cheaper than finding out during it.

If you are about to make an offer and nobody technical has looked at the candidate's work, [book a call](/book-a-call) and we can sit in on the final interview.
