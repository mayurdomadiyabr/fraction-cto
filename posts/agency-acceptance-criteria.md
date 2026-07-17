---
title: Your agency says it is done. Done by whose definition?
slug: agency-acceptance-criteria
date: '2026-07-17T11:59:56.979Z'
category: Vendors
excerpt: >-
  Vague scope drives most outsourcing disputes. Not because agencies are
  dishonest, but because nobody wrote down how anyone would know the work was
  finished.
description: >-
  Most agency disputes come from undefined done, not bad vendors. The four
  things to specify per milestone and how to fix a vague SOW mid-engagement.
author: The founder of Fraction
readTime: 8
draft: false
---

The agency emails you on a Thursday. "Milestone 3 is complete, invoice attached." You open the staging link, click around for fifteen minutes, and everything you try seems to work. You pay.

Six weeks later the feature falls over in production the first time two people use it at once. You go back to the agency. They point at the SOW: milestone 3, user authentication and profile management, delivered and accepted. You point at the outage. They point at the change order form.

Neither of you is lying. You just never agreed on what "complete" meant, and by the time you found out, you had already signed off on it.

Industry surveys keep landing on the same finding: vague scope is behind the majority of outsourcing disputes, and roughly half of engagements start with no defined success metrics at all. That matches what I see. Almost every ugly agency fight I have been pulled into was not caused by a bad agency. It was caused by a document that described what would be built and never described how anyone would know it was done.

## "Working" is not a definition of done

The word doing the damage in most SOWs is "functional." Or "working." Or "complete." These feel specific when you read them and evaporate the moment there is money on the table.

Consider a real milestone line I was handed last year: "Implement CSV import for customer records." Ten thousand dollars. The agency delivered a CSV import. It worked. It also fell over on a 40,000-row file, silently skipped rows with unusual characters, had no way to see what failed, and locked the table for the duration so the app froze for everyone else while an import ran.

Was that milestone complete? The agency said yes and they had a defensible case. The founder said no and he had one too. The honest answer is that the question was unanswerable, because the SOW never said whether a 40,000-row file was in scope, what should happen to a bad row, or whether anyone else could use the app during an import.

That is not an edge case. That is what "implement CSV import" means in the absence of criteria: a thing that imports CSVs on a good day.

### The gap is where your money goes

Here is the pattern, and once you see it you cannot unsee it.

Vague scope does not just create disputes. It creates a structural advantage for the vendor, and it does so without anyone acting in bad faith. When "done" is undefined, the agency gets to define it at delivery time, and they will define it at whatever they built. Everything you thought was included but did not write down becomes a change order. Change orders are priced without competition, mid-project, when your leverage is at its lowest and switching costs are at their highest. This is the same mechanism that turns [a fixed bid into 60% more](/post-fixed-bid-trap), and it runs on ambiguity rather than malice.

The fix is not a tougher contract. It is a more specific one.

## Write criteria a stranger could check

The test I use: could a competent person who was not in any of your meetings read this line, look at the software, and tell you yes or no without asking a question? If not, it is not a criterion. It is a hope.

Rewriting the CSV example against that test:

Import accepts files up to 50,000 rows. A file of 50,000 rows completes in under 90 seconds. Rows that fail validation are reported individually with row number and reason, and the valid rows still import. The application remains responsive for other users during an import. A partially failed import can be re-run without duplicating already-imported records.

That is five sentences. Every one of them is checkable by someone with no context. And notice what happened: writing them down surfaced two decisions the founder had never made. Should a bad row kill the whole import or just itself? Is re-import idempotent? Those are product decisions, they belong to the founder, and the SOW was quietly delegating them to whoever happened to write the function.

That is the real value here. The criteria are not a legal shield. They are a forcing function that drags decisions out of the code and back to the person who should be making them.

### The four things to specify

You do not need a hundred-page spec. You need four things per milestone.

**Volume.** What is the largest realistic input? Rows, concurrent users, file size, records. Pick a number. Any reasoned number beats none, because "it should scale" is not testable and everyone reads it differently.

**Failure behavior.** What happens when the input is wrong, the network drops, the third party is down? This is where most of the disputes live, because happy-path software is easy and error handling is where the hours actually go. An agency that priced only the happy path will discover this at your expense.

**Observability.** How does anyone find out it broke? If a failed import produces no log, no alert, and no user-visible message, you will learn about it from a customer, and the agency will be right that the SOW never asked for otherwise.

**Who checks, and how.** Name the person and the method. "Founder clicks around staging" is a real acceptance method and it is fine for some milestones, but say so. If acceptance means an automated test suite passing against defined criteria, say that. Undefined acceptance defaults to whoever has more energy that week.

## The uncomfortable part: you may not be able to write these

Here is the thing I have to be straight about. Everything above assumes you can tell the difference between a real criterion and a plausible-sounding one. If you are non-technical, you often cannot, and no amount of good intent fixes that.

I have watched founders write acceptance criteria that read beautifully and specified nothing, because they described the interface rather than the behavior. "The dashboard loads quickly and shows accurate data" has the shape of a criterion and the substance of a wish. Quickly on what connection, with how many records, and accurate against what source of truth?

This is not an argument for hiring someone to write your SOW. It is an argument for having one technical person, on your side of the table, read the milestone list before you sign it. An hour of that is worth more than any clause your lawyer adds, because your lawyer will make the contract enforceable without making it specific, and specificity is the whole game. If you want a read on where an existing SOW leaves you exposed, [that is what a teardown does](/teardown), and it is a great deal cheaper than the change orders it prevents.

The other thing that helps: shrink the milestones. A milestone you can check in an afternoon is a milestone you will actually check. Thirty-day milestones get rubber-stamped because nobody has the appetite to open a six-week-old disagreement. Two-week milestones get inspected. That alone catches most of what criteria are for, which is one reason I keep telling founders to [run a small pilot before signing the big contract](/post-agency-pilot).

## What to do if you already signed

Most people reading this are mid-engagement with a vague SOW. You are not going to reopen it, and you should not try.

Do this instead. Before the next milestone starts, send an email: "Here is my understanding of what done looks like for milestone 4," followed by the four things above, written as plainly as you can manage. Ask them to confirm or correct it.

That email is not a contract amendment. It does not need to be. It is a dated, written, mutual understanding that arrived before the work started, and it changes the conversation at delivery time completely. Every good agency will confirm it, often with useful corrections. An agency that will not put a definition of done in writing before starting the work is telling you exactly what their delivery is going to look like, and it costs you nothing to find that out now.

### FAQ

**Is this not just waterfall with extra steps?**

No. Waterfall specifies the solution up front. Acceptance criteria specify the outcome and leave the solution to the builder. You can run two-week agile milestones and still say "50,000 rows, under 90 seconds, bad rows reported individually." That is not a design document. It is a definition of done.

**My agency says criteria this detailed will slow us down and cost more.**

Half right. It will cost more up front, because they were pricing the happy path and now they are pricing the real thing. That is not a surcharge, it is the actual price surfacing early. If the number goes up a lot when you specify failure behavior, you just learned what the original bid was quietly excluding, which is one of the more useful things [comparing bids](/post-compare-agency-bids) can teach you.

**Who writes them, me or the agency?**

They draft, you approve, but you must be able to tell whether the draft is real. An agency drafting its own acceptance criteria without an informed reader on your side will produce criteria their build already meets.

**We are two weeks from launch and everything is vague. What is the highest-value thing right now?**

Failure behavior on your top three flows: signup, payment, and whatever your core action is. What happens when each one breaks, and how do you find out? Skip the rest. That is a two-hour exercise and it catches the outages that actually kill early companies.

**What if the agency delivers something that meets the criteria but is still bad?**

Then your criteria were wrong, and that is worth knowing. Criteria do not substitute for judgment, they just make the gap visible early enough to do something about it. If that keeps happening, the problem is not the document. It is that nobody technical is representing your interests, which is a [different problem](/book-a-call) with a different fix.
