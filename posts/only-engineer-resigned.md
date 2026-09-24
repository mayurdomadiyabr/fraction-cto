---
title: Your only engineer just resigned. Use the notice period well
slug: only-engineer-resigned
date: '2026-09-24T02:44:53.332Z'
category: Hiring
excerpt: >-
  Treat the notice period as a handover project: access, deploys, incidents and
  half-finished work, in that order.
description: >-
  Your only engineer gave notice. A practical two-week handover plan: access,
  deploys, runbooks, open work, and what to hire next.
author: The founder of Fraction
readTime: 6
draft: false
---

Your only engineer just told you they are leaving, and you have two weeks, maybe four. The instinct is to spend that time trying to change their mind or rushing to hire a replacement. Both are usually the wrong first move.

The short answer: treat the notice period as a handover project with one goal, which is that on their last day someone else can deploy, fix a production bug, and get into every system. Recruiting a replacement matters, but it takes months. The handover is the part that only this person can do, and the window closes on a known date.

## First 24 hours: stabilize, do not bargain

Thank them, ask what the timeline looks like, and ask one honest question: is there anything that would make you stay? If the answer is a specific, fixable thing, like a title, a scope change, or a reasonable raise, consider it. If it is "I have accepted another offer" or "I want something different", accept it gracefully. A counteroffer to someone who has already decided usually buys you a few unhappy months and the same resignation later.

Then do three things the same day:

- Agree the last working day in writing, and whether they are open to paid part-time help after it.
- Get a list of every system they have admin access to. Do not revoke anything yet, but know what exists.
- Tell your co-founders or board. Not the whole company yet, but the people who need to plan around it.

In the US, two weeks is customary rather than required for most employees, so the goodwill you keep in these first conversations directly affects how good the handover is. People who feel respected on the way out tend to answer the phone three months later.

## The handover checklist that actually matters

Most handover documents are long and useless: a tour of the code, written for nobody in particular. Instead, organize the notice period around four questions, and do not stop until each one has a yes.

### Can someone else get in?

Every account, credential, and domain needs a second owner who is a company person, ideally a founder. That covers the cloud account root and admin users, the domain registrar and DNS, the code host organization, the app store developer accounts, payment and email providers, and any third-party API keys. Move secrets into a shared password manager or secrets store the company owns. If there are shared logins, this is the time to replace them with named accounts, the problem described in [shared admin logins](/post-shared-admin-logins).

### Can someone else ship?

Ask the engineer to write down, step by step, how a change goes from a laptop to production. Then have them watch someone else do it, ideally a contractor or the person you plan to rely on next, while they only answer questions. If the deploy depends on one machine, one script that lives on their laptop, or steps that exist only in their memory, fix it now. A written deploy you have never seen executed is not a handover.

### Can someone else fix it at 2am?

Get a one-page runbook for the five most likely incidents: the site is down, the database is full, payments are failing, an integration broke, a customer's data looks wrong. For each: where to look, what the usual cause is, and who to call. Also get the list of alerts and where they go, then change the destination to someone who is staying.

### Does anyone know what is half-finished?

Ask for a short list of work in progress, known bugs they have been putting off, and anything that will break on a date, such as expiring certificates, an API version being retired, or a contract renewal. Those dated items are the ones that surprise you in month two.

A useful way to run this: a 30-minute check-in every day of the notice period against these four questions, with the answers written into one document the company owns.

## Get a second set of eyes before the last day

The founder usually cannot tell whether a handover is complete, because they do not know what is missing. Before the last day, bring in someone technical, a trusted contractor, an advisor, or a fractional CTO, to spend a few hours with the departing engineer. Their job is to ask the questions you would not think to ask and to confirm they can actually log in and deploy. This is also a good moment for an honest look at the codebase you are inheriting, which is what a [technical teardown](/teardown) is for.

If this resignation made you realize how much lived in one person's head, that is a structural problem, not bad luck. The longer version is in [when your whole codebase lives in one person's head](/post-key-person-codebase-risk).

## Then decide what to hire, not just who

A resignation is a forced review of what you need next. Before copying the old job description, ask:

- Is the next phase more of the same, or different? A product that needs scaling and reliability work needs a different person than one still searching for fit.
- Should the next hire be a contractor first? A contractor who can start next week reduces the gap while you run a proper search. We cover that tradeoff in [your first engineer does not have to be an employee](/post-contractor-vs-employee-first-engineer).
- Do you need judgment above the next hire? If nobody on the team can review the new engineer's work, you will repeat this dependency with a different name.

Plan for the search to take longer than the notice period. Realistic timelines for a senior hire are in [the first engineer hiring timeline](/post-first-engineer-hiring-timeline).

## A composite example

A B2B SaaS company with one engineer and a contractor got a two-week notice in the middle of a customer rollout. The founder spent the first week interviewing replacements. On the last day, they discovered the production database credentials were only in the engineer's personal password manager and the deploy relied on a script on their laptop. The engineer helped out afterwards as a favor, but it took three weeks of evenings and an emergency contractor to rebuild access. The fix would have been the first two questions above, answered in the first three days.

## Keep the door open

Offer a short paid arrangement after the last day: a few hours a month for three months at a fair hourly rate, for questions only. Most departing engineers accept, it is cheap insurance, and it keeps the relationship good. Some of the best later hires and references come from people who left well.

If you are in the middle of this now and want help running the handover or scoping the replacement, you can [book a call](/book-a-call).

## FAQ

### Should I cut their access immediately after they resign?

Not usually. For an employee leaving on good terms, you need their access to run the handover. Add second owners to everything now, then revoke on the last day. If they are going to a direct competitor or you have reason to distrust them, change that plan and get advice.

### Should I make a counteroffer?

Only when the reason for leaving is specific and fixable. If they have decided, a counteroffer tends to delay the problem rather than solve it.

### How long should the handover take?

Plan the four questions to be answered in the first half of the notice period, leaving the rest for practice runs and gaps. Two weeks is tight but workable if you start on day one.

### Can I ask them to extend their notice?

You can ask, and pay for it. Some will agree to a longer part-time overlap, especially if their new job starts later. Put any arrangement in writing.
