---
title: The take-home test stopped working. Do this instead.
slug: engineer-work-sample-test
date: '2026-07-02T11:58:29.485Z'
category: Hiring
excerpt: >-
  AI rebuilt the floor of what a take-home proves, and 71% of engineering
  leaders now say technical skills are harder to assess. A short paid work
  sample gives you the signal back.
description: >-
  Why take-home coding tests stopped giving signal in 2026, and how a short paid
  work sample tells you who can actually ship.
author: The founder of Fraction
readTime: 5
draft: false
---

The take-home coding test used to be the fair option. Instead of grilling someone at a whiteboard, you gave them a small realistic task, they did it on their own time, and you read the result. It rewarded people who build over people who perform. That logic held right up until anyone could paste the prompt into a model and get a clean, idiomatic, well-commented solution back in thirty seconds.

Karat's 2026 survey of engineering leaders puts a number on it: 71% say AI has made technical skills meaningfully harder to assess, and the take-home format took the biggest hit of any interview stage. When I read a take-home now, I genuinely cannot tell whether I am looking at the candidate's judgment or a model's. The floor of what a competent-looking submission requires has been rebuilt, and a rebuilt floor means the test no longer separates anyone from anyone.

## Why the take-home lost its signal

A hiring test only tells you something if a weaker candidate would produce a visibly weaker result. That gap is exactly what modern coding assistants closed. The syntax is clean, the structure is conventional, the edge cases are handled, because the model handles them. What you cannot see from the artifact is whether the person understood the trade-offs they made, would have caught the subtle bug the model introduced, or could have explained why they structured it that way. The output looks the same whether it came from deep understanding or from good prompting.

That is not an argument to ban AI from your process. Your engineers will use these tools every day on the job, so testing them in an AI-free bubble measures a world that no longer exists. It is an argument to stop treating the finished artifact as the evidence. The evidence you actually need is how someone works, decides, and reasons under real conditions, and a static take-home cannot show you that anymore.

## The paid work sample instead

The format that survived is a short, scoped, paid piece of real work. Not a puzzle. A slice of something you actually need built, small enough to finish in a few focused hours, done with a short conversation before and after so you can watch how the person thinks. In Karat's data, a handful of companies have already replaced take-homes with paid work trials for exactly this reason. It is more work to run than dropping a PDF in someone's inbox, and it is worth it, because it is the only format that still tells you something an AI cannot fake for the candidate.

Pay for it, and not as a courtesy. Under the Fair Labor Standards Act, anyone doing real work that benefits your company has to be paid at least minimum wage, even during a trial. Beyond the legal floor, paying is a filter that works in your favor. The best engineers have options and will not spend two unpaid days proving themselves to you when three other companies are ready to talk. A wave of multi-day unpaid "trials" spread in 2026 as employers got nervous about mis-hires, and the predictable result is that the strongest candidates, the ones with leverage, walk away first. Unpaid trials do not filter for quality, they filter for desperation.

## How to design one that gives signal

Keep it under about four hours of actual work, and pay a fair rate for that time. Pick a task that resembles the job: a small feature, a bug in a realistic codebase, a review of an existing pull request. Let them use whatever tools they use daily, AI included. Then structure the two conversations that bracket the work, because that is where the signal lives.

Before they start, watch how they scope it. Do they ask what matters, or charge in? After they finish, walk the code together and ask why. Why this structure, what would break at ten times the load, what did you decide to skip and why, where are you least confident. A candidate who leaned on a model without understanding falls apart at the second question every time, and the one with real judgment gets more interesting the deeper you push. The artifact is just the prompt for that conversation now. It is no longer the answer.

If you cannot personally read the code well enough to run that walkthrough, that is a normal situation for a non-technical founder and a fixable one. I have written separately about [interviewing a senior engineer when you cannot read code](/post-interview-engineer-non-technical), and pairing a paid work sample with a borrowed technical read is a strong combination. The [reference check questions that actually tell you something](/post-engineer-reference-checks) round out the picture once the work sample gives you a candidate you like.

## What this costs you, and why it is cheap

A paid work sample costs you a few hundred dollars per serious candidate and a couple hours of your attention. A mis-hire on your first engineer costs you months of runway, a codebase you may have to partly rewrite, and the second search you now have to run from a worse position. The math is not close. The reason founders resist the paid work sample is that it is more effort than emailing a take-home, not that it is more expensive in any way that matters.

The through-line is simple. The take-home worked when the artifact was the evidence. AI made the artifact worthless as evidence, so move the evidence to the part AI cannot do for the candidate: the thinking, out loud, about real work. If you want help designing a work sample that fits your stack and actually predicts on-the-job performance, [book a call](/book-a-call).

### FAQ

### Should I ban AI tools during the assessment?
No. Your engineers will use them on the job, so an AI-free test measures a fictional job. Let candidates use their normal tools, and put your evaluation on the reasoning and decisions around the work, which is the part the tools cannot supply for them.

### How much should I pay for a work sample?
Pay a fair market rate for the hours involved, typically a few hundred dollars for a half-day of work. It keeps you on the right side of labor law and, more usefully, keeps strong candidates in your process instead of driving them to competitors who respect their time.

### Isn't a live coding interview simpler than a paid work sample?
Live coding is a reasonable complement and it does show real-time thinking. It also tests performance under artificial pressure, which some excellent engineers handle badly. A short paid work sample plus a structured walkthrough gives you closer-to-real conditions, which is why I lean on it for a first hire.

### What if a candidate refuses a paid work sample?
That is information. A senior engineer with options may decline a multi-day commitment, which is why you keep it short. A refusal of a well-scoped, paid, few-hour task usually means either the timing is wrong for them or they are uncomfortable being observed working, and both are worth knowing before you hire.
