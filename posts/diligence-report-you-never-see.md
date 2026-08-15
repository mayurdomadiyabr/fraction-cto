---
title: 'The diligence report goes to the committee, not you'
slug: diligence-report-you-never-see
date: '2026-08-15T09:30:00.000Z'
category: Fundraising
excerpt: >-
  A technical reviewer spends two weeks in your codebase and writes a report you
  never read. It goes to the investment committee. Here is how to shape it
  anyway.
description: >-
  The technical diligence report goes to the investment committee, not the
  founder. What is in it, who reads it, and how to influence it before it lands.
author: The founder of Fraction
readTime: 4
draft: false
---

A fund's technical advisor spends two weeks in your codebase, sits on two calls with your team, and then writes a document you will probably never see. That document does not come back to you for comment. It goes up to the investment committee, and it helps decide whether the check gets written and at what price. Founders spend all their energy on the diligence calls and forget that the calls are not the deliverable. The report is.

I have written these reports from the reviewer's chair and I have coached founders through diligence from theirs. The gap between what founders think is being assessed and what actually lands on the page is where deals quietly get repriced.

## Who reads it, and what it is for

The report is not written for you. It is written for a non-technical investment committee that has to make a yes-or-no call and set a valuation without reading a line of code. That shapes everything about it.

### It is a summary that must be actionable by non-engineers

A good technical reviewer translates the codebase into a handful of judgments a general partner can act on: can this scale, is the team credible, what would it cost to fix the biggest problems, and is there anything here that kills the deal. The committee is not going to weigh your cyclomatic complexity. They are going to read a paragraph that says the architecture is sound but the team has real key-person risk, and then they are going to ask you about it. What lands in that paragraph is what matters, not the forty pages of detail underneath it.

### Different sections go to different people

The report rarely travels as one document. The technical reviewer gets everything. Counsel gets the license and IP section. The security lead gets the vulnerability findings. The committee gets the summary. Each reader acts on their slice. That means a single weak finding, like an unassigned open-source license or a founder who could not explain their own [AI-generated code under diligence](/post-ai-code-diligence), does not just sit in an appendix. It gets routed to the exact person whose job is to worry about it.

## How to shape a report you never see

You cannot edit the report, but you have more influence over its contents than founders assume. The reviewer forms most of their judgments in the first few days, from the documents and the first call. Everything after that is confirmation. So the leverage is early.

### Feed the reviewer the narrative in writing

Do not make the reviewer reconstruct your architecture and history from scattered evidence. Hand them a short written technical memo up front: what you built, the deliberate tradeoffs, what you know is weak and your plan for it. A reviewer who is handed a clear story tends to write a clear story. A reviewer left to infer one writes what they inferred, and you do not get to correct it. This is the whole reason [the three-page tech memo](/post-tech-memo-investors) exists, and it is the single highest-leverage document you can put in front of diligence.

### Name your own technical debt before they find it

The finding that damages you most is not that you have technical debt. Every startup does. It is that you did not seem to know about it. A team that can enumerate its own weak spots and show a realistic plan reads as in control of its system. A team surprised by its own problems reads as flying blind. So put your known issues in the memo, with a plan and a cost, and the report describes a team that understands its own product instead of one that got caught out.

### Fix the cheap things before the review starts

Some findings are trivial to prevent and expensive to explain after the fact: secrets committed to git history, an unassigned contributor's IP, a missing dependency license. Sweep for these before you grant access, because once they are in the report they are on the committee's desk and you are answering for them instead of the reviewer never having seen them. The [secrets sitting in your git history](/post-secrets-in-git-history-diligence) are the classic example of a five-minute fix that becomes a term-sheet conversation if it lands in the report.

The founders who come out of diligence at the price they wanted are not the ones who performed best on the calls. They are the ones who understood that a document they would never read was the actual product, and who did the early work to make it say what they needed it to say. If you want a read on what your report will likely say before a fund's reviewer writes it, that is what a [technical review or teardown](/teardown) is for.

## FAQ

### Can I ask to see the diligence report?

Usually not, and pushing for it looks defensive. What you can ask for is a debrief conversation where the reviewer or the partner walks you through the main concerns. Many funds will do that, especially if a finding is fixable and they want the deal to proceed.

### What if the report contains a mistake about my system?

The best defense is to prevent it by feeding the reviewer a clear written narrative early, so there is less to get wrong. If you learn about an error through the debrief, correct it in writing with evidence. A correction that arrives after the committee has already met is far weaker than a clear document that arrived before.

### How early do reviewers form their conclusions?

Earlier than most founders expect. The first documents and the first call set the frame, and the rest of the review mostly confirms or adjusts it. Treat the opening of diligence as the moment that matters most, not the final call.
