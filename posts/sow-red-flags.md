---
title: The SOW clauses that cost you six months later
slug: sow-red-flags
date: '2026-07-17T09:10:00.000Z'
category: Vendors
excerpt: >-
  A statement of work decides, in advance, who eats the cost when a project goes
  sideways. The expensive clauses are never hidden. They sit in the sections you
  skip.
description: >-
  The statement of work clauses that quietly move risk onto you, and how to read
  an agency SOW in an afternoon.
author: The founder of Fraction
readTime: 5
draft: false
---

A statement of work is where an agency decides, in advance, who eats the cost when a project goes sideways. Most founders read it once, skim for the total price and the delivery date, and sign. Six months later the same document is what the agency points to when you ask why a feature you assumed was included now costs another 18,000 dollars. The SOW did its job. It protected the agency. It was just never written to protect you.

I read these documents for a living now, and the expensive clauses are almost never hidden. They sit in plain sight, in the sections founders skip because they read like boilerplate. Here is what I look for before anyone signs.

## The clauses that quietly move risk onto you

A fixed price attached to a vague scope is the most common trap, and it is worse than an hourly rate, not better. A fixed price feels safe because the number cannot move. But the number is only as real as the scope it is bound to, and if the scope is three bullet points, the agency has every incentive to interpret those bullets as narrowly as possible and bill everything else as new work. The protection you thought you bought is the thing that gets used against you. A fixed bid without a line-by-line specification is not a fixed bid; it is an invitation to argue, which is the exact dynamic I described in [why the fixed bid quietly becomes 60 percent more](/post-fixed-bid-trap).

Look at the payment schedule next. The standard structures are 25 to 33 percent up front with the rest tied to milestones, or 50 up front and 50 on delivery when the contract is genuinely tight. When an agency asks for 50 percent or more up front and gives you nothing but a start date in return, treat it as a warning about their cash position, not their confidence. A shop that cannot fund the first month of your work without your deposit is a shop that will feel pressure to start the next client's project with your money.

Then find the acceptance clause, because this is where founders lose the most leverage without noticing. Watch for language that says a deliverable is "deemed accepted" if you do not formally reject it within some short window, often five business days. That clause sounds procedural. What it actually does is transfer the burden of catching problems onto a non-technical founder who has five days to evaluate work they cannot fully read. If you go quiet because you are busy raising or selling, the work is accepted, defects and all.

Two more clauses decide how much a mid-project surprise costs you. Change orders should reference the same rate and the same review process as the original scope, and a good SOW distinguishes between a change, which affects budget and timeline, and a clarification, which does not. If change orders are billed at an open-ended hourly rate with no cap and no definition of what counts as a change, every question you ask during the build can be reclassified as billable scope. And check whether IP assignment is conditional on full payment. Many SOWs say you do not own the code until the final invoice clears. That is not unusual, but you need to know it is there, because it means a billing dispute becomes a hostage situation over your own product.

## The clauses that decide who owns the result

Ownership is broader than the code, and the SOW is where it gets settled. The question is not only who owns the repository. It is who owns the domain, the cloud hosting account, the payment processor account, the DNS, and the third-party service accounts created during the build. If the agency spun those up under their own logins, you do not fully own your product even if you own every line of code, and untangling it later is slow and undignified. I have watched a clean handoff stall for weeks over a cloud account nobody could log into. This is the operational cousin of the legal problem I wrote about in [you paid for the code, you might not own it](/post-who-owns-your-code).

Find the warranty and support terms too. A serious SOW commits to fixing defects in delivered work for some period at no charge, usually 30 to 90 days, and defines a defect as a deviation from the agreed specification. If there is no warranty, every bug found after delivery is a new paid engagement, and you will discover this the week after the agency's team has rolled off to another client.

## How to read one in an afternoon

You do not need a lawyer to catch most of this. Read the SOW with four questions in hand. First, is the scope specific enough that a stranger could tell whether a given feature is included? If not, the price is fiction. Second, is my money released against outcomes I can verify, or against dates? Third, if this relationship ends badly next month, what do I walk away owning, and what is locked behind a final payment? Fourth, who decides when something is done, and how much time do I really have to say no?

Every unanswered question is a clause you are agreeing to on the agency's terms. The best time to negotiate all of it is before signing, when you still have the leverage of not having paid. The worst time is the day you discover the answer by accident. If you cannot evaluate the technical scope yourself, that is exactly the kind of thing a short review pays for itself on -- it is what a [teardown of the proposal](/teardown) or a quick [call before you sign](/book-a-call) is for.

### Is a detailed SOW worth slowing the project down for?

Yes. A week spent making the scope specific is the cheapest insurance you will buy on the whole engagement. The disputes that blow up budgets almost always trace back to a sentence that could have been read two ways, and the time to fix that sentence is before anyone has been paid.

### The agency says their standard contract is non-negotiable. Now what?

Every clause in a standard contract was negotiated by someone at some point; "non-negotiable" usually means "no client has pushed." Push on the three that matter most: acceptance windows, change-order rates, and IP assignment. An agency that will not move on any of them is telling you how the whole relationship will go.

### Do I really need a lawyer to review it?

For a small first project, the four-question read above catches most of the damage. For anything six figures or longer than a quarter, a lawyer who has seen software contracts is worth the few hundred dollars, mostly for the IP and termination language. What a lawyer will not catch is a vague technical scope; that is on you or your technical advisor.
