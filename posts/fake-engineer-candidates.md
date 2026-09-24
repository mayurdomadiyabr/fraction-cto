---
title: Your remote engineer candidate may not be who they say
slug: fake-engineer-candidates
date: '2026-09-24T02:44:53.158Z'
category: Hiring
excerpt: >-
  Fake and proxy candidates are now common in remote engineering hiring. Three
  cheap checks catch most of them.
description: >-
  How founders spot fake and proxy remote engineering candidates: the warning
  signs and three cheap identity checks to run before the offer.
author: The founder of Fraction
readTime: 7
draft: false
---

If you are hiring a remote engineer in 2026, some of the people in your pipeline are not who they say they are. That is no longer a paranoid take. In July 2025 Gartner predicted that by 2028 one in four candidate profiles worldwide will be fake, and in a survey of 3,000 job seekers, 6% admitted to interview fraud, either posing as someone else or having someone else pose as them ([HR Dive summary of the Gartner research](https://www.hrdive.com/news/fake-job-candidates-ai/757126/)).

The short answer for a founder hiring their first or second engineer: you do not need an enterprise identity platform. You need three cheap checks placed at the right moments, and the discipline to run them on the candidate you like, not just the one who feels off. The candidate you like is the one the fraud is designed to produce.

## Why a small startup is an easy target

Most of the public reporting is about North Korean IT workers. In June 2025 the US Department of Justice announced coordinated actions against these schemes, including searches of suspected "laptop farms" across more than a dozen states, and said the workers had obtained jobs at more than 100 US companies ([DOJ press release](https://www.justice.gov/opa/pr/justice-department-announces-coordinated-nationwide-actions-combat-north-korean-remote)). The model is simple: a stolen or borrowed identity gets the job, the company ships a laptop to a US address, and someone overseas logs into it.

But the more common case I see is plainer and less dramatic:

- A strong engineer does the interview, and a weaker one shows up to do the work.
- A contractor sub-lets your job to two or three other people and keeps the margin.
- The resume and LinkedIn are real, but belong to someone else.

A seed-stage company is attractive for all of these for the same reasons. There is no recruiting team, no background-check vendor, the founder is the only interviewer, everything is remote, and the new hire gets production access in week one because there is nobody else to do the work. A big company's fraud risk is one bad hire among thousands. Yours is one bad hire with the keys to everything.

## The signals worth taking seriously

No single signal proves fraud. Plenty of honest candidates have thin profiles or bad webcams. What matters is a cluster, and whether the story holds together when you pull on it.

### Before the first call

- A LinkedIn profile that is years old but has almost no activity, few real connections, and a generic headshot.
- A work history full of companies that are hard to verify, or that match your job description almost word for word.
- An email or phone number that does not match the name or the stated location.
- A GitHub account with a long commit history that turns out to be forks and copied repos rather than their own work.

### During interviews

- Camera off "because of bandwidth" for every call, or a video feed that looks slightly wrong around the edges of the face when they turn their head.
- A noticeable delay before every answer, including simple ones, as if the question is being relayed.
- Strong prepared answers but confusion when you ask about a detail on their own resume: what the team size was, what they would change about the system they built, who they reported to.
- A different voice or accent from one round to the next.

### After the offer

- A request to ship the laptop to an address that is not where they said they live.
- Pushback on any identity step, or a sudden need to be paid through a third party.
- A second person's name on the bank account.

The last group is the most reliable, and it is also the latest. That is why the checks below are front-loaded.

## Three checks that cost almost nothing

### 1. Make one interview a conversation about their own past work

Pick a project from their resume and go deep for 20 minutes. What broke in production, who was involved, what they would do differently, what the codebase looked like. Someone who did the work can talk about it for an hour with texture and mild annoyance. Someone reading a script or relaying answers runs out of material fast. This is the same move I recommend for screening judgment generally, covered in [how to screen an engineer for judgment](/post-screen-engineer-for-judgment).

### 2. Verify identity before the offer, not after

Ask for a government ID and match it to the person on camera, live, with the camera on. Then do a short, unannounced video call a few days later to talk through something small. If you can, meet once in person, even for coffee, before or shortly after the start date. For a remote hire in another country, a paid trip or a local co-working meeting costs less than one month of the risk. The FBI's public guidance on these schemes points in the same direction: verify identity during the process and be wary when the person who interviews may not be the person who works.

### 3. Pay and ship to the same identity

Payroll goes to an account in the employee's own name. The laptop ships to the address on their ID, or to a verified address you have confirmed on camera. If you use an employer of record or a contractor platform, ask them what identity verification they actually perform. Many do less than founders assume, which is the subject of [who vets your engineer when you have no engineers](/post-who-vets-your-engineer).

## What to do in week one, regardless

Even with good screening, set up the first two weeks so that a bad hire cannot do much damage:

- Give access in steps. Repo and staging first, production and customer data after a few weeks of real work.
- Use named accounts with multi-factor auth, never shared logins. If you still have shared admin accounts, fix that before the hire, not after. The reasons are in [shared admin logins](/post-shared-admin-logins).
- Watch the pattern of work, not just the output. Commits at hours that do not match their time zone, or code that changes style dramatically from day to day, are worth a direct question.
- Pair on something live in the first week. A 30-minute screen share on a real bug tells you more than any interview.

None of this is hostile. Good engineers expect it, and most appreciate working somewhere that takes access seriously.

## A composite example

A seed-stage fintech hired a senior backend contractor, fully remote, after three video interviews with a candidate who was excellent on system design. The founder was delighted. Within a month the pull requests were fine but oddly uneven, standups were camera-off, and the contractor could not explain a decision in their own code from the previous week. A surprise pairing session made it obvious: the person on the call was not the person who had interviewed. The cost was about six weeks of fees, a full credential rotation, and a week of the founder's time reviewing every commit. It would have been prevented by one deep conversation about past work and one in-person meeting.

## Where a fractional CTO helps

If you are non-technical, running these checks is hard because you cannot tell a scripted technical answer from a real one. This is one of the places where borrowed judgment pays for itself. A fractional CTO can run the technical rounds, do the deep past-work interview, and set up staged access before day one. If you want a second opinion on a candidate or on your hiring process, you can [book a call](/book-a-call), or see how we structure engagements on the [pricing page](/pricing).

## FAQ

### Is it legal to ask for ID during the interview process?

In most places, verifying identity is normal and expected, and in the US you must verify work eligibility after hire anyway. Be consistent: ask every finalist, not only the ones who seem unusual, and check local rules with counsel if you are hiring across borders.

### Will these checks scare off good candidates?

Rarely. Strong engineers have seen worse. What scares them off is a slow, disorganized process, not a live ID check and a coffee meeting.

### Do I need a paid identity verification tool?

At one or two hires a year, usually not. The three checks above catch most cases. Consider a tool once you are hiring several remote people a quarter or using a platform you do not control.

### What if I already suspect a current hire?

Do not confront first. Quietly reduce their access, rotate shared credentials, then run a live pairing session. If the doubts hold, end the engagement and get legal advice, especially if sanctions or data exposure might be involved.
