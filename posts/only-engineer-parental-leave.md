---
title: Your only engineer is going on parental leave. Plan it now.
slug: only-engineer-parental-leave
date: '2026-11-12T04:18:59.403Z'
category: Hiring
excerpt: >-
  When your only engineer takes parental leave, the product still has to run. A
  coverage plan for a tiny team, and what the leave rules usually mean for you.
description: >-
  Your only engineer is taking parental leave. How to plan coverage, what a
  handover needs, and which leave rules apply to a small startup.
author: The founder of Fraction
readTime: 6
draft: false
---

If your only engineer tells you they are expecting a child, congratulate them, then start planning the same week. You typically have months of warning, which is more than you get for any other absence. Use it for three things: find out which leave rules apply in their state, decide what the product will and will not do while they are away, and arrange named cover for the things that cannot wait. Done early, this is a manageable project. Done in the last two weeks, it is a crisis.

A note before the detail: leave law varies by state and changes often. This post is not legal advice. Confirm the specifics with your payroll provider or an employment lawyer.

## Which leave rules apply to a small startup

Founders often assume that being small means no rules apply. That is half right.

The federal Family and Medical Leave Act generally covers private employers with 50 or more employees, and an employee has to have worked for the employer for 12 months and 1,250 hours, at a site with 50 employees within 75 miles. The [Department of Labor's FMLA page](https://www.dol.gov/agencies/whd/fmla) sets this out. Most seed-stage startups are below that line, so federal FMLA usually does not apply.

State law is a different matter. A growing number of states, including California, New York, New Jersey, Washington and Massachusetts, run paid family leave programs funded through payroll contributions, and several of them cover small employers. In those states your engineer may be entitled to partial wage replacement from the state program, and in some to job protection, regardless of your headcount. The rules follow the state where the employee works, not where you are incorporated, which is the same principle I covered in [your first engineer lives in another state](/post-first-engineer-lives-in-another-state).

Then there is your own policy. If you have none, write a short one now, and write it as a policy for the company rather than a deal for one person. Whatever you give this engineer is the precedent for the next one.

## Decide what the product does while they are away

This is the decision most founders skip. They try to keep the roadmap and find a substitute. A substitute who can carry a full roadmap on an unfamiliar codebase for three months is, in practice, a second senior hire.

The more honest plan has three tiers.

- **Must keep working:** the product stays up, customers can log in and pay, data is backed up, security patches go out, urgent bugs get fixed.
- **Nice to continue:** small, well-specified improvements that a contractor can do without deep context.
- **Paused:** anything that needs architectural judgment, large new features, migrations.

Tell customers and your board about the third tier before the leave starts. A planned slow quarter is fine. A surprise one is not.

## Arrange named cover for the first tier

"We will figure it out" is not cover. You need a named person who has the access and has practiced the job.

Options, roughly in order of cost:

1. **A contractor on a small retainer** who shadows your engineer for the last few weeks, then handles urgent fixes and patches. This is the usual answer.
2. **The agency or freelancer who built an earlier version**, if the relationship is good and they still know the code.
3. **A fractional CTO** who holds the keys, triages what comes in, and directs a contractor. This suits founders who cannot judge whether an issue is urgent.
4. **A technical cofounder or advisor** as emergency contact only. Fine as a backstop, not as the plan.

Whoever it is, they should do at least one real deploy and one real fix while your engineer is still around to watch.

## The handover your engineer should write

Ask for this early. A written handover is useful to the company on any day, not just this one. It should cover:

- How to deploy, and how to roll back.
- Where every credential lives, with access moved to a shared password manager and company-owned accounts.
- What runs on a schedule, and what happens if it fails.
- The known fragile parts, in plain language.
- Who the vendors are, what is on auto-renew, and which bills are on whose card.
- What to do in the three most likely emergencies.

If a server or pipeline exists that only this person can rebuild, the months before leave are the time to fix that. I wrote about that specific risk in [the server nobody can rebuild](/post-server-nobody-can-rebuild), and the wider version in [one engineer is a key-person risk](/post-one-engineer-key-person-risk).

## A rough timeline

These intervals are my judgment, not a standard.

- **As soon as you know:** check state rules, write the leave policy, agree dates in writing while accepting they may move.
- **Three months out:** agree the three tiers, start the handover document, start looking for cover.
- **Six weeks out:** cover person has access and begins shadowing. Feature work narrows to things that will be finished.
- **Two weeks out:** no new large work starts. Cover person does a deploy alone.
- **During leave:** do not contact your engineer about work. If you find you must, the handover had a hole. Note it and fix the document when they return.
- **Return:** plan a gradual first two weeks. Ask what broke and update the handover.

Babies do not follow project plans. Have the cover ready a few weeks before the expected date.

## What not to do

Do not ask them to "just be reachable." In states with protected leave, that can create legal exposure. Everywhere, it damages trust with the one person your product depends on.

Do not treat the news as a reason to rethink their role, pay, or equity. Apart from being wrong, discriminating over pregnancy or parental status is unlawful in ways that do apply to small employers.

Do not hire a permanent replacement quietly. If the leave shows that you need a second engineer, that is a real finding. Make that hire openly, as an addition.

## FAQ

### Does a five-person startup legally have to offer parental leave?

Federal FMLA generally does not reach a company that small. State paid family leave programs may, depending on where the employee works. Check that state's rules rather than assuming.

### Who pays the engineer during leave?

In states with a paid family leave program, the state program typically pays partial wage replacement, funded by payroll contributions. Anything above that is your policy. Your payroll provider can tell you what is already being deducted.

### Should I hire a contractor or a temporary full-time replacement?

For a leave of a few months, a part-time contractor covering the must-keep-working tier is usually enough and far cheaper. A full-time temporary engineer spends most of the leave learning the codebase.

### What if my engineer decides not to come back?

It happens. The handover document and the trained cover person are exactly what you would want in that case too, which is one more reason to do them properly. The steps from there are in [your only engineer just resigned](/post-only-engineer-resigned).

If you want someone to hold the keys and triage while your engineer is out, [book a call](/book-a-call). It is a common short engagement, and [pricing](/pricing) is published.
