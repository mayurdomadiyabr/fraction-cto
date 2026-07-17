---
title: Your agency AI-wrote your code. Who owns it?
slug: agency-ai-code-ownership
date: '2026-07-17T11:59:56.732Z'
category: Vendors
excerpt: >-
  Your MSA assigns work the agency creates. Nobody defined what creates means
  when a model writes the first draft and a contractor approves it in ninety
  seconds.
description: >-
  Agency contracts assign work product to you. Most never mention AI. Here is
  where the IP chain breaks and the five-clause amendment that fixes it.
author: The founder of Fraction
readTime: 7
draft: false
---

A founder forwarded me his agency's master services agreement last month. Twelve pages, signed eight months earlier, product about 70% built. He had one question: "Our agency mentioned they use Cursor and Claude for most of the code now. Does that change anything?"

I read the IP section. It said what most agency contracts say: all deliverables and work product created by the agency under this agreement shall be the exclusive property of the client upon full payment. Clean assignment language. Standard. Written in a world where a human being typed every line.

Then I read the rest of the document looking for the word "AI." It appeared zero times.

That is the situation most founders are in right now, and almost none of them know it. The contract you signed assigns ownership of work your agency creates. Nobody defined what "creates" means when a model produces the first draft of a file and a contractor reviews it in ninety seconds.

## The assignment chain has a new gap in it

Here is the mechanic that matters, and it is not complicated once you see it.

IP assignment works as a chain of title. Your agency employs or contracts a developer. That developer's employment agreement assigns their work to the agency. The MSA assigns the agency's work product to you. Each link transfers something the previous party actually owned. Pay for the whole chain, and you own the thing at the end of it.

Generative output strains the first link, because in most jurisdictions there may be nothing to assign. US copyright practice has been consistent on one point: material produced by a machine without sufficient human authorship is not copyrightable by the person who prompted it. It is not that the agency owns it and forgot to give it to you. It is that arguably nobody owns it. A developer cannot assign a copyright that never existed.

This does not mean your product is worthless or that a competitor can lift your repository. Most of what makes a codebase valuable is not the copyright on individual functions. But it does mean the clean, provable ownership story your MSA promises has holes in it that neither party has mapped.

### Why nobody has told you this

Your agency is probably not hiding it. In most cases they have not thought about it either. The lawyer who drafted their MSA drafted it years ago and has not revisited the IP section since. The account manager selling you the retainer knows the delivery pipeline, not copyright doctrine. And the contractor writing the code has little incentive to raise their hand about how much of it they typed.

I have looked at agency contracts for four different companies this year. None of them mentioned AI. All four agencies were using it heavily. That gap is the default, not the exception.

## The three questions that actually matter

Forget the philosophy. Here is what I ask, in the order I ask it, and what each answer is worth.

**One: what tools are running, and under what plan?** This is the cheapest question and the most useful. There is a real difference between a business-tier subscription with IP indemnification and zero-retention terms, and a contractor expensing a personal consumer account that may train on submitted content by default. The first is a vendor with a contractual commitment behind it. The second is your proprietary code sitting somewhere you did not choose. Ask for tool names, plan tiers, and whether the accounts are agency-managed or individual. If they cannot answer in a day, that itself is the answer.

**Two: who indemnifies you if the output infringes?** This is where it gets expensive. Many AI vendor agreements carve out IP indemnification for generated content entirely, or condition it on filters you cannot verify were switched on. So walk the chain backward: the model vendor may not indemnify the agency, the agency's MSA may cap total liability at fees paid in the last three months, and you are the last party standing. On a $180,000 engagement that cap can be $45,000 against a claim that costs multiples of it to defend. The number to look for is not whether an indemnity exists. It is what it is capped at, and whether AI output is excluded from it.

**Three: is there a provenance record?** If a dispute ever happens, someone has to reconstruct how a file came to exist. Commit history with real authorship, PR review records, and a policy on what gets flagged is the difference between a two-week answer and a two-month one. This matters most at your next raise, when a diligence team starts pulling threads. I have written before about [what diligence does when an agency built your product](/post-agency-built-diligence) and [how AI-written code changes what diligence looks for](/post-ai-code-diligence). The short version is that the questions arrive whether or not you are ready for them.

## What to actually put in the contract

You do not need a new MSA. You need an amendment, and it is short. Have your own counsel look at it, because I am a technologist and this is where the technical and the legal meet.

Add a definition that treats AI-assisted output as work product regardless of authorship, so the assignment language reaches it. Belt and braces: also take an unrestricted license to anything that turns out not to be assignable, so you are covered either way.

Add a disclosure obligation: the agency names the tools and plan tiers in use and notifies you before adding new ones. This is not surveillance. It is the same thing you would want if they subcontracted a module to a firm you had never heard of.

Add a confidentiality constraint that no client code or data goes into a service that retains it for training. Most business tiers already satisfy this. The clause exists so that the day someone downgrades to save money, they are breaching a contract instead of quietly making a procurement decision.

Add an indemnity that survives. Not capped at last quarter's fees. If the agency will not carry infringement risk on code they chose to generate, ask why you should carry it instead. Their answer is informative regardless of which way it goes.

And ask for the provenance record as a deliverable, not a favor. Commit history with genuine authorship attribution, retained through handoff.

If your agency pushes back on all five, that is not really a legal problem. That is a read on the relationship, and it is worth more than the amendment. The same instinct applies to [the clauses that cost you six months later](/post-sow-red-flags).

## The uncomfortable part

There is a version of this conversation where you go in hot. You demand a full audit, an uncapped indemnity, a tooling freeze. I have watched founders do it. It goes badly, because the agency is not the adversary and the ambiguity is not their invention. Nobody has a settled answer yet. The law is genuinely unresolved. What separates the founders who come out of this fine from the ones who do not is not aggression. It is that they asked in month two instead of month fourteen.

The cost of asking now is one uncomfortable call and a two-page amendment. The cost of asking during a Series A diligence process, with a term sheet on the table and an agency you stopped paying six months ago, is measured in weeks of delay and whatever the investor decides the uncertainty is worth to them.

### FAQ

**Does this mean I do not own my product?**

No. It means the assignment story is less clean than the contract implies. Most of the value in your codebase, meaning the architecture, the domain logic, the accumulated decisions, the data, is not affected by copyright status on individual generated blocks. The exposure is real but narrow, and it is fixable while the relationship is live.

**Should I ask my agency to stop using AI?**

No, and you would not get what you want anyway. You would get slower delivery at the same rate, and the tools would keep running quietly. The goal is disclosure and allocated risk, not abstinence.

**My agency says their contractors review everything, so there is human authorship.**

That may be right. Review that meaningfully shapes the output is a decent argument for authorship. Ninety seconds and an approve click is weaker. The claim is only as good as the evidence behind it, which is why the provenance record matters more than the assertion.

**We are pre-seed and the agency bill is $12k a month. Is this worth the effort?**

The amendment is worth it. It takes an afternoon and prevents a mess. The full audit is not, at that size. Do the cheap version now: tool disclosure, a no-training clause, and keep the commit history. Revisit before you raise.

**What if we already finished the engagement and the agency is gone?**

Then you are reconstructing rather than preventing. Pull the commit history while you still have repository access, get whatever tooling detail you can from the old contacts in writing, and document what you know. A [technical teardown](/teardown) will map where the real exposure sits before an investor's diligence team does it for you.

If you are mid-engagement and unsure how exposed you are, [a short call](/book-a-call) is usually enough to tell you whether this is a two-page amendment or something bigger.
