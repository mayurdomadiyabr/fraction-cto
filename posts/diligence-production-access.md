---
title: Diligence wants into your production. What do you give?
slug: diligence-production-access
date: '2026-08-15T09:30:00.000Z'
category: Fundraising
excerpt: >-
  The diligence team asks for repo access and a login to your cloud console. You
  do not have to say yes to all of it. Here is what to grant, in what order.
description: >-
  What access to grant a technical diligence team, in what order, and how to say
  no to production data without stalling the deal.
author: The founder of Fraction
readTime: 4
draft: false
---

The diligence team just asked for access to your production environment. Read access to the repository, a login to your cloud console, maybe a walkthrough of the running system. You are a few days from a term sheet and the instinct is to say yes to everything so nothing stalls. That instinct is how a founder ends up handing a stranger a path to customer data because a document was late.

I sit on the founder's side of these requests. The useful thing to know is that a competent technical reviewer does not need most of what they first ask for, and giving them less, structured well, reads as buttoned-up rather than obstructive.

## What diligence actually needs, in order

Repository access is the exception, not the default. A good reviewer works from documents first and only asks to see code when a document raises a question. So lead with the documents and you often never get to the part where anyone touches your systems.

### Start with the paper, not the keys

The first layer is an architecture overview, a dependency and license inventory, a security and data-handling summary, an infrastructure and cost summary, and a team map of who built what. Most of a seed or Series A technical review can be answered from those five artifacts. If you have kept your data room current, this is a folder you send, not a scramble. If you have not, the scramble itself becomes a finding, which is the whole argument for building [the technical half of your data room](/post-technical-data-room) before you need it.

### Grant repository access read-only, named, and time-boxed

When code access is genuinely required, grant it read-only, to a named reviewer under NDA, for a fixed window of five to ten business days, then revoke it. Do not add the reviewer to your live GitHub org with standing access. Create a scoped, read-only grant, note the start and end date in writing, and remove it when the window closes. This is normal and expected in 2026. Asking for these terms does not slow a real reviewer down; it is how they expect the process to run.

### Never give production data or write access

The line I do not let founders cross is live production data or any write path. A reviewer never needs to run your production system or read real customer records to assess your engineering. If they want to see the system work, give them a seeded staging environment or a screen-share walkthrough. Handing over a production console login to close a deal faster is the kind of shortcut that turns into a breach disclosure later, which is its own [diligence red flag](/post-diligence-red-flags).

## How to say no without sounding like you are hiding something

The fear is that pushing back on access looks like you have something to hide. In practice the opposite is true. A founder who says "here is the read-only grant for your named reviewer, active through Friday, and here is staging if you want to see it run" sounds like someone who has done this before. A founder who hands over admin to everything looks like someone who does not know what they are protecting.

### Match the access to the person

Different people in a deal need different things, and lumping them together is where over-sharing starts. The technical reviewer needs the code and the architecture. The investor's counsel needs the license inventory and the contributor IP assignments, and nothing else. The investment committee needs a summary they can act on, not a repository login. When you tailor access to the role, you naturally give each party the minimum they need, and the total exposure drops.

### Log what you shared and when

Keep a short record of what you granted, to whom, and for how long. It takes ten minutes and it does two things: it lets you revoke cleanly when the window closes, and if the same fund does confirmatory diligence after the term sheet, you are not re-litigating access from scratch. The work does not end at the term sheet either, which is why the [confirmatory diligence after a signed term sheet](/post-confirmatory-diligence-term-sheet) is easier when your first round of access was disciplined.

The founders who handle this well are not the most generous with access. They are the ones who lead with documents, grant code access narrowly when asked, and never let production data leave the building. If a diligence access request is on your desk right now and you are not sure where the line is, that is a short conversation worth having before you click accept, and it is exactly what a [call before you commit](/book-a-call) is for.

## FAQ

### Is it rude to refuse full repository access?

No. Read-only, named, time-boxed access is the industry norm, and a reviewer who insists on standing admin access to your live org is the one behaving unusually. Offer the documents first and code access second, and most reviewers never ask for more.

### What if the investor's technical advisor wants to run the code themselves?

Give them a seeded staging environment, not production. If they want to build and run it locally, read-only source access under NDA covers that. Running your actual production system is never a requirement for assessing your engineering.

### How long should access stay open?

Five to ten business days is typical for a technical review at seed or Series A. Set the end date up front, put it in writing, and revoke on schedule. Leaving access open indefinitely is how a closed deal becomes a standing security hole nobody remembers to close.
