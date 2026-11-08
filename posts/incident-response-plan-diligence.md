---
title: Diligence asks for your incident response plan. Write one page
slug: incident-response-plan-diligence
date: '2026-11-07T07:42:19.573Z'
category: Fundraising
excerpt: >-
  A startup incident response plan fits on one page: who leads, how to reach
  them, severity, who you must notify and by when, and the review after.
description: >-
  What a seed or Series A startup incident response plan needs for diligence:
  one page, five parts, and one tabletop exercise.
author: The founder of Fraction
readTime: 5
draft: false
---

The diligence request list has a line that reads "incident response plan", and you do not have one. You have a Slack channel called #incidents, an engineer who usually knows what to do, and a vague memory of an outage last spring. That is not nothing, but it is not a plan, and a reviewer can tell the difference.

The short answer: write one page. A startup incident response plan needs five things: who is in charge when something breaks, how you get hold of them, how you decide severity, who you are legally or contractually required to tell and by when, and what you write down afterward. A clear page you have actually used beats a 30-page template nobody has read, and reviewers at seed and Series A know that.

## Why diligence asks for it now

Investors and enterprise customers ask the same question for the same reason: they want to know whether one bad day turns into a crisis. Past incidents show how you behaved. A plan shows whether that behaviour is repeatable or depended on one person being awake. We covered the backward-looking half in [why your incident history is a diligence document](/post-incident-history-diligence). The plan is the forward-looking half.

It also shows up outside fundraising. Enterprise security questionnaires almost always ask whether you have a documented incident response process, and a "no" can stall a deal for weeks; see [the security questionnaire that stalls your biggest deal](/post-security-questionnaire-deal). Cyber insurance applications ask too. Writing the page once answers all three.

## What goes on the one page

### Who is in charge

Name an incident lead for each severity level, plus a backup. At five engineers this is usually your most senior engineer and, for anything involving customer data, a founder. The incident lead does not have to fix the problem; their job is to coordinate, decide and communicate. Separating "person fixing" from "person deciding" is the single biggest improvement most small teams can make.

### How to reach them

Phone numbers, not just Slack handles. Slack might be the thing that is down, or the incident might be a compromised account. Keep a copy of the page somewhere outside your main tools, even a shared document on a personal device of two founders.

### Severity in three levels

Keep it simple:

- **Sev 1:** customers cannot use the product, or customer data may be exposed. Everyone relevant drops what they are doing. A founder is informed immediately.
- **Sev 2:** a major feature is broken or degraded for many customers. The on-call engineer handles it in working hours with the incident lead informed.
- **Sev 3:** something is wrong but has a workaround. It goes in the normal queue.

The main value of severity levels is speed. Nobody wastes twenty minutes debating whether to wake the CTO.

### Who you must tell, and by when

This is the part reviewers check most closely, because it is where startups get hurt. If you handle personal data of people in the EU or UK, GDPR generally requires notifying the supervisory authority of a personal data breach without undue delay and, where feasible, within 72 hours of becoming aware of it. Every US state has its own breach notification law with different triggers and timelines. Your enterprise contracts may promise customers notice within a set window, sometimes 24 to 72 hours. If you make products with digital elements sold in the EU, the Cyber Resilience Act adds its own reporting clock; we covered it in [the EU's 24-hour vulnerability clock](/post-eu-cra-24-hour-reporting).

You do not need to become a privacy lawyer. You need a list: which laws and contracts apply to you, the deadline in each, and who makes the call to notify. Get your lawyer to check the list once. Then put the shortest deadline at the top of the page, because that is the one you will miss.

### What happens afterward

One line: every Sev 1 and Sev 2 gets a short written review within a week, covering what happened, how you found out, the impact and what you changed. That habit produces the incident history diligence wants to see, and it is the part of the plan that actually reduces future incidents.

## Test it once

A plan nobody has rehearsed is a guess. Spend one hour running a tabletop exercise: pick a realistic scenario, such as an engineer's laptop stolen with production credentials on it, or a customer emailing that they can see another customer's data, and walk through the page out loud. Who gets called? Who decides whether it is a breach? Which deadline starts, and when?

Every team that does this finds a gap, usually that nobody knows who can rotate a particular credential, or that the customer contract promises notice faster than anyone realised. Fix the gap, note the date of the exercise on the page, and you now have something a reviewer will take seriously. "We tested this in September" is worth more than any amount of formatting.

## What reviewers do not expect at your stage

You do not need a security operations center, a 24/7 rotation, a retained forensics firm or a formal SOC 2 program to pass this part of diligence at seed or Series A. If you are pursuing SOC 2 later, an incident response process is one of the things it expects, and this page becomes the starting draft. Reviewers mainly want to see that you have thought about it, that the obvious legal obligations are covered, and that the plan matches how you actually operate.

What does lose points: a downloaded template with another company's name still in it, a plan that names people who left, or a plan that says "the security team" when there is no security team.

If you want help writing the page or running the first exercise, it is a short, contained engagement; a [technical teardown](/teardown) usually surfaces the gaps in an afternoon, and you can [book a call](/book-a-call) to talk through your situation.

## FAQ

### How long should a startup incident response plan be?

One to two pages. Long enough to name people, severity levels, notification deadlines and the post-incident review. Anything longer at a small company tends to go unread when it matters.

### Who should own the incident response plan?

Whoever leads engineering, with a founder co-owning anything that touches customer data or legal notification. Review it every six months and whenever someone on it leaves.

### Do I need a lawyer to write it?

You need a lawyer to confirm which notification laws and contract terms apply to you. You do not need one to write the operational parts. Most of the page is about people and process, not legal language.

### What if we have never had an incident?

Write the plan anyway and run a tabletop exercise. "We have never had an incident" is not reassuring to a reviewer; it usually means you would not have noticed.
