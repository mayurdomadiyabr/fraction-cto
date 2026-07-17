---
title: Your agency subcontracted your product. You would not know.
slug: agency-subcontracting
date: '2026-07-17T11:59:57.223Z'
category: Vendors
excerpt: >-
  An agency can only assign IP it actually owns. If a shop you have never heard
  of wrote your payments module, the chain of title has a link nobody has
  checked.
description: >-
  Undisclosed subcontracting breaks your IP chain and your pricing assumptions.
  A ten-minute commit-history check and the clauses to add going forward.
author: The founder of Fraction
readTime: 7
draft: false
---

A founder asked his agency a routine question during a handoff: could he get the contact details for the engineer who had built most of the payments module, in case his new in-house team had questions?

The agency said they would check. Two days later the answer came back: that engineer was no longer available, but they would be happy to have someone else answer questions.

That engineer had never worked for the agency. He worked for a four-person shop in another country that the agency had been subcontracting to for eleven months. The founder had paid $118,000 for that module at a rate that assumed senior engineers on the agency's payroll. He had no idea a third company existed, and neither did his contract.

This is legal in most cases. It is also more common than founders imagine, and it creates a specific problem that has nothing to do with the quality of the work.

## The chain of title has a link you cannot see

Set aside quality for a moment, because subcontracted work is often fine. The structural issue is ownership, and it is mechanical.

Your MSA says the agency assigns all work product to you. Fine. But an agency can only assign what it owns. If the agency's contract with the subcontractor does not itself contain a clean IP assignment, then the agency never owned the code, which means it could not assign it to you, which means the chain from that engineer's keyboard to your cap table has a break in it that nobody has looked at.

This is the failure mode that shows up in diligence. Not at signing, not during the build, but eighteen months later when someone's lawyer asks who wrote the payments module and whether there is a signed assignment from that person. If the answer involves a firm you had never heard of, in a jurisdiction you did not choose, with a contract you have never seen, you are now reconstructing a chain of title under time pressure with a term sheet on the table. I have written about [what happens when diligence finds that an agency built your product](/post-agency-built-diligence). An undisclosed subcontractor is that problem with an extra link and less paperwork.

The good news is that most subcontractor agreements do contain assignment language, because agencies are not stupid and their lawyers thought about this. The bad news is that "most" is not a thing you want to discover during a raise.

### The other thing you bought without knowing

There is a second issue, and it is the one founders feel more viscerally.

You priced the engagement on a rate. Say $145 an hour blended. That number implies something about who is doing the work: employees, on payroll, with the agency's hiring bar applied to them, subject to the agency's code review, retained across projects.

If a meaningful share of that work is going out at $40 an hour to a shop the agency found on a marketplace, you are not paying $145 for senior engineering. You are paying $145 for $40 of engineering plus $105 of project management and margin. That can still be a fine deal if the management is real and the output is good. It is a bad deal if the management is a weekly status call, which is the version I see more often. The [status report that describes activity rather than shipping](/post-agency-status-report-theater) is frequently a symptom of exactly this: the person writing it is not close enough to the code to say anything sharper.

The point is not that subcontracting is fraud. It is that you cannot evaluate a price without knowing what is behind it, and the pitch deck showed you the agency's team page.

## How to find out, without an accusation

You do not need an investigation. You need three questions and about ten minutes.

**Look at the commit history.** This is the highest-signal, lowest-effort check available to you, and you can do it even if you are non-technical. Every commit has an author name and an email address. Pull the last few hundred and count the distinct domains. If the agency is agency.com and half your commits come from a domain you do not recognize, or from personal accounts, you have your answer in about ninety seconds. Ask a technical friend to run `git shortlog -sne` if you are not comfortable at a terminal. That is the entire investigation.

**Ask who is on the account, in writing.** Names, roles, and employment relationship. Employee, contractor, or subcontractor firm. This is a completely normal question and a good agency answers it in a paragraph. The reactions are diagnostic: straight answer, awkward-but-honest answer, or a pivot to why it should not matter to you. The third one is the answer.

**Ask for the assignment chain.** You do not need to see their subcontractor agreements in full. You need written confirmation that every person who has touched your code has a signed IP assignment flowing to the agency, and that the agency has the right to pass it to you. If that confirmation makes them uncomfortable, you have found the thing.

None of these are hostile. All of them are things you would want to know before a raise anyway, which is the framing I would use if you need one.

## What to actually do about it

Here is where I probably differ from what you expect.

If you find out your agency subcontracts, the answer is usually not to fire them. Subcontracting is a normal way to run a services business, capacity is lumpy, and some subcontracted shops are excellent. A blanket ban would eliminate a lot of good vendors along with the bad ones.

What you want is disclosure plus a clean chain. Concretely, three things in an amendment, reviewed by your own counsel:

Disclosure of any third party performing work, before they start. Not a veto, just knowledge. If they add a shop next month, you hear about it.

Written confirmation that all contributors, direct or subcontracted, have assigned their work to the agency, with the agency warranting its right to assign onward to you. This is the clause that matters most and it is the least controversial to ask for.

Confidentiality flowing through. Your code and data are covered by the same terms at the subcontractor as at the agency, including any constraints you have around tooling and data retention. Otherwise your NDA protects you against a party that never touches your code and not against the one that does.

Add a fourth if you can get it: contact continuity. If a subcontracted engineer wrote a system, you get access to that person for handoff questions for some period. This is the one agencies resist hardest, because the subcontractor relationship is their margin and they do not want you to have it. That resistance is understandable, and it is also precisely why [an agency handoff plan](/post-agency-handoff-plan) needs to be negotiated before you need it rather than during the week you are leaving.

## The signal underneath

The thing worth internalizing is not "watch out for subcontractors." It is that the gap between who sold you the work and who does the work is where most agency disappointment lives, in every one of its forms. Undisclosed subcontracting is one shape of it. [The senior team that pitched and then vanished](/post-agency-bait-and-switch) is another. Junior engineers billed at senior rates is a third.

Same underlying question every time: who is actually typing, and does the price make sense given the answer?

You are entitled to know. It is your product, your cap table, and your diligence process. An agency that treats that question as an insult has told you something more useful than the answer would have.

### FAQ

**Is subcontracting without telling me a breach of contract?**

Usually not, unless your MSA restricts it, and most do not. That is the point. The absence of a restriction is not permission you granted, it is a question nobody asked. Add the clause going forward rather than litigating backward.

**What if the subcontracted work is good?**

Then keep it and fix the paperwork. Quality and chain of title are separate problems. Good code with a broken assignment chain is still a diligence finding, and bad code with perfect paperwork is still bad code.

**How much does this actually matter at pre-seed?**

The IP chain matters more than founders think, because it never gets easier to fix and the cost of fixing it rises with every month of code written on top. The pricing question matters less at small volumes. If your bill is $9k a month, do the ten-minute commit-history check, get the assignment warranty in writing, and move on.

**The commit history all shows agency.com emails. Am I clear?**

Probably, but not certainly. Some agencies issue company email addresses to subcontractors, which is exactly what you would do if you wanted this to be invisible. If the domains look clean and the account list they give you matches, that is reasonable assurance. If you want more than reasonable, ask for the employment relationship in writing.

**We are mid-diligence and just discovered this. What now?**

Do not hide it. Investors have seen this before and it is survivable when disclosed and much worse when found. Get the agency to produce written confirmation of the assignment chain, fast, and put it in the data room with a plain explanation. If the agency will not produce it, tell your counsel today rather than next week. A [teardown](/teardown) can map how much of the codebase is affected so you are having a specific conversation instead of a vague one.

If you are unsure how to read what your commit history is telling you, [bring it to a call](/book-a-call). It is usually a fifteen-minute answer.
