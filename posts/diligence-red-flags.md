---
title: The technical diligence red flags that kill a round
slug: diligence-red-flags
date: '2026-06-27T14:20:12.022Z'
category: Fundraising
excerpt: >-
  Most rounds do not die over messy code. They die over a handful of specific,
  findable problems. Here are the ones to fix first.
description: >-
  The technical due diligence red flags that quietly kill funding rounds, and
  how to fix each one before you open the raise.
author: The founder of Fraction
readTime: 5
draft: false
---

Technical diligence rarely kills a round because the code is ugly. Reviewers expect early-stage code to be rough. Rounds die over a small set of specific, findable problems that signal something worse than messy code: that the company does not actually control its own foundation. The good news is that the list is short and most of it is fixable before you open the raise.

Here are the red flags I see end deals, and what to do about each one while you still have time.

## You do not own your own code

This is the quiet deal-killer, and it is more common than founders think. When an agency, a freelancer, or a contractor builds your product and the contract does not contain a present assignment of intellectual property, the law in many jurisdictions treats the creator as the first owner. You paid for the work, but you may not own it.

It stays invisible until an investor's lawyer asks for proof during diligence, and then it can reduce your valuation or stop the round outright. Investors treat unclear IP as an immediate red flag, because they are buying an asset and you cannot cleanly demonstrate you hold it.

The fix is paperwork, and it is cheaper now than later. Get signed IP assignment agreements from everyone who has touched the code: agencies, contractors, and yes, early employees. The clause needs a present grant ("hereby assigns"), not a promise to assign someday. If you outsourced your build, [who actually owns your code](/post-who-owns-your-code) walks through how to check before a reviewer does it for you.

## Your moat is one API call deep

If your entire product is a thin wrapper around a single third-party API with no proprietary layer underneath, a reviewer will note that anyone with a weekend and the same API key can rebuild it. That is not automatically fatal, but you need an answer for what you own that a competitor cannot trivially copy: the data, the workflow, the distribution, the fine-tuning, something.

The same applies to dependency on a single vendor for anything load-bearing. One database you cannot migrate off, one infrastructure provider with no exit plan, one model provider whose price change would erase your margin. Reviewers map your single points of failure, and "we would be in serious trouble if this one vendor changed terms" is a flag you want to have answered, not discovered.

## Dead weight on the cap table

This is not strictly a technical flag, but it surfaces during the same diligence and it kills rounds. An ex-co-founder who left early still holding 25 or 30 percent, a former contractor with an equity handshake and no paperwork, vesting that was never set up properly. Investors see an inactive person holding a large stake and they hesitate, because it signals future governance pain and a misaligned team.

Clean it up before the raise. Confirm everyone's equity is documented, vested or vesting on a real schedule, and that no one outside the active team holds a block large enough to make the next investor nervous.

## License and compliance landmines

Open-source license conflicts are a real and rising cause of delay. A copyleft license buried in a dependency, used in a way the license does not permit, can force you to open-source your own code or rip out the component. License issues have held up a meaningful share of Series A closings, and the founder is almost always surprised, because nobody tracked what came in through the dependency tree.

Run a license scan before diligence does. If you train models on data, be ready to show it was licensed or collected lawfully; scraped or unlicensed training data is becoming its own category of red flag as regulation tightens. These are not problems you want a reviewer to find first.

## A data room that contradicts itself

Sometimes the technical red flag is not technical at all. It is a disordered data room: missing documents, an out-of-date cap table, contracts that do not match what the founder said on the call. Reviewers read disorder as concealment. If the obvious documents are inconsistent, they assume risk is hidden in the places they cannot see, and they price that assumption into the deal or walk.

The remedy is unglamorous and effective. Assemble the room before you need it, make the numbers in your [technical memo](/post-diligence) match the numbers in your financials, and have one person who can answer for every document. Coherence reads as control.

## The pattern under all of them

Every flag on this list is a version of the same thing: the company does not fully control its own foundation, or cannot prove that it does. Reviewers are not hunting for perfection. They are testing whether you know your own risks and have them in hand. Find these yourself, fix what is cheap, and frame what is not, and diligence becomes a confirmation instead of an excavation. If you are not sure which of these apply to you, an outside read before the round is far cheaper than a re-trade after the term sheet, and a good time to [book a call](/book-a-call).

## FAQ

### How early should I check for these?
Before you open the round. IP assignments, cap-table cleanup, and license scans all take time and sometimes require chasing people who have left. Discovering them mid-diligence is the expensive version.

### Will one red flag kill the deal?
Usually not by itself if you surface it with a plan. What kills deals is the reviewer finding it first, because then every other thing you said is suspect. Disclosure plus a fix beats discovery every time.

### I bought code from an agency years ago. Am I exposed?
Possibly. Check the contract for a present IP assignment now, not during diligence. If it is missing, you can often still get it signed retroactively, but it is far easier before money and lawyers are involved.

### Do reviewers really care about open-source licenses at seed?
Increasingly yes, and almost always by Series A. A single mislicensed dependency can force a rewrite. A one-time scan is cheap insurance against a problem that is expensive to fix under deal pressure.
