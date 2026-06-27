---
title: The 3-page tech memo that gets you through diligence
slug: tech-memo-investors
date: '2026-06-27T14:20:11.110Z'
category: Fundraising
excerpt: >-
  Write a short technical memo before anyone asks for one. It changes the tone
  of diligence from interrogation to a guided tour.
description: >-
  How to write a 3-page technical memo that carries you through investor due
  diligence instead of getting interrogated.
author: The founder of Fraction
readTime: 5
draft: false
---

Most founders prepare for technical diligence the way they prepare for a dentist appointment. They hope it will be quick and they brace for bad news. Then a partner forwards your deck to a technical advisor, the advisor asks for "a quick overview of the architecture," and you spend four days assembling something defensive and sprawling that raises more questions than it answers.

There is a better artifact. Before anyone asks, write a three-page technical memo and hand it over on the first diligence call. It changes the tone of the entire conversation, because you become the person who brought the map instead of the person being interrogated.

## What the memo is actually for

A technical diligence reviewer has one job: estimate the probability that your technology becomes the reason the company misses the plan the financial model promises. They are not grading your code. They are pricing risk.

That reframing matters. A reviewer who cannot quickly understand your system assumes the worst, because unexplained complexity is where the expensive surprises hide. The memo exists to remove that fog. A clear three pages tells the reviewer you think about your own system the way they do, and that signal alone shortens the process.

I have watched the same fund take two weeks on one company and three days on another at the same stage. The difference was not code quality. It was that the second founder handed over a document that answered the obvious questions before they were asked.

## What goes on each page

Keep it to three pages on purpose. The constraint forces you to lead with what matters.

Page one is the system in plain language. One architecture diagram, the three or four major components, what each one does, and where the data lives. Name the languages and the main frameworks. State what is hosted where. A reviewer should be able to redraw your system from memory after reading this page. If they cannot, it is too complicated or too vague.

Page two is the honest risk section, and it is the page that earns trust. List the three or four things you would fix with more time and money, and say what you are doing about each. Single points of failure. Tech debt you took on deliberately and why. Anything held together with one contractor or one undocumented service. Naming your own risks is counterintuitive, but it is exactly what makes the reviewer believe the rest of the document. The architecture smells they would otherwise spend a week hunting for, you have already mapped. If you want a sense of what they look for, [the smells I check in a 20-minute review](/post-architecture-smells) is the same list a good reviewer runs.

Page three is the numbers and the team. Uptime over the last quarter. Deployment frequency. Test coverage if you have it, and an honest "we do not measure this yet" if you do not. Monthly infrastructure cost. Who wrote the core system and whether they still work here. This is also where you address the question every Series A reviewer asks: can this architecture handle ten times the current load, and what breaks first when it cannot.

## The numbers that make a reviewer relax

Vague answers read as hidden problems. Specific numbers read as control, even when the numbers are imperfect.

"We deploy a few times a week" is weaker than "we deployed 14 times last week, and a deploy takes 9 minutes." "Pretty reliable" is weaker than "99.4 percent uptime last quarter, with one 40-minute outage from a database failover we have since automated." The second version of each tells the reviewer you measure the thing, and a team that measures a thing usually controls it.

You do not need impressive numbers. You need real ones, stated plainly, with the gaps named. A reviewer who catches you rounding up loses trust in every other figure in the document, and that is how a recoverable round turns into a dead one.

## What to leave out

No marketing language. The reviewer is technical, or talking to someone who is, and "cutting-edge scalable architecture" reads as a tell that you cannot describe the system in real terms.

No code. No 30-page appendix. No defensive walls of text explaining why a past decision was reasonable. If a decision needs defending, name it in the risk section in two sentences and move on. The memo is a map, not a legal brief.

And do not invent rigor you do not have. If you do not run automated tests, say so and say what you do instead. Diligence reviewers have seen every stage of company. They are not shocked by a seed-stage codebase with gaps. They are shocked by a founder who pretends the gaps are not there, because it makes them wonder what else is being hidden.

The memo is also a forcing function for you. Most founders who sit down to write it discover one or two things they did not want to know about their own system. Better to find them at your desk than across the table from a reviewer. If the writing surfaces something you cannot evaluate on your own, that is a reasonable moment to [book a call](/book-a-call) and get a second read before the round opens. And once the memo exists, it doubles as the briefing you give your own board, so you are not rebuilding it every quarter.

## FAQ

### When should I write the memo?
Before you open the round, not after a term sheet. The act of writing it surfaces problems while you still have time to fix or frame them. Walking into diligence with it already done sets the tone.

### Who should write it, the founder or an engineer?
Draft it with whoever knows the system best, but the founder must understand every line. If a reviewer asks a follow-up and you cannot answer your own memo, the document hurts you instead of helping.

### What if my architecture genuinely is messy?
Then the memo is more valuable, not less. A reviewer will find the mess regardless. A founder who maps it first and shows a plan reads as competent; one who is surprised by it on the call reads as a risk.

### Is three pages really enough at Series A?
Three pages is the front door, not the whole house. It earns you a focused, calm follow-up conversation instead of a fishing expedition. The detail comes out in that conversation, on your terms.
