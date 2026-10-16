---
title: Your agency swapped your developer again. Who pays for ramp-up?
slug: agency-developer-rotation
date: '2026-10-16T09:44:00.043Z'
category: Vendors
excerpt: >-
  Agency developer rotations cost you weeks of lost context. What a swap really
  costs and the four contract clauses that stop you paying for it.
description: >-
  What an agency developer rotation costs you, how to spot a pattern, and the
  continuity clauses that stop you paying for ramp-up.
author: The founder of Fraction
readTime: 6
draft: false
---

When your agency rotates a developer off your project, you lose more than a name in Slack. You lose the context that person built up about your product, and someone has to pay for the new developer to rebuild it. Unless your contract says otherwise, that someone is you. The fix is a short continuity clause: named key people, notice before any change, an overlap period, and no billing for ramp-up time caused by the agency's own staffing decisions.

This is a different problem from the classic pitch-team switch, where the seniors who sold you the work never show up; I covered that in [the senior team that pitched you is not building your product](/post-agency-bait-and-switch). This one happens later. The project is running, the developer you have is good, and then one Monday a new face appears and the old one has "moved to another account."

## What a rotation actually costs you

Agencies move people for ordinary reasons. Someone resigns, a bigger client needs help, a developer asks for a change. None of that is bad faith. But the cost lands on your project in ways that are easy to miss.

**Ramp-up hours.** A new developer on an unfamiliar codebase is slow for weeks. In my experience it takes two to four weeks before someone is roughly as productive as the person they replaced, longer if the code is messy or undocumented. If you pay hourly or for a dedicated person, you are paying full rate for partial output during that time.

**Lost context.** The previous developer knew why the payment retry logic is weird, which customer asked for the odd export format, and which test is flaky for a known reason. Most of that lived in their head. Some of it walks out the door no matter how good the handover is.

**Rework.** New developers often "clean up" code they do not yet understand, and reintroduce bugs the last person already fixed. I see this pattern most in the first month after a swap.

**Your time.** You re-explain the product, re-answer old questions, and re-review work. For a non-technical founder this is the hidden cost, because it comes out of the hours you should spend on customers and fundraising.

Add it up and a single rotation on a small team can easily cost the equivalent of two to four weeks of one developer's time. If it happens twice in a six-month engagement, that is a meaningful share of your budget spent on standing still.

## How to tell if it is becoming a pattern

One change in a long project is normal. A pattern is a warning sign about the agency's staffing, not just bad luck. Watch for:

- More than one change in the core team in six months.
- New people arriving without an overlap period with the person leaving.
- Commit history where an author disappears and a new one appears the same week. You can see this yourself if you have [access to the repository during the build](/post-agency-repo-access-during-build).
- Velocity that drops after each change and never quite recovers.
- Status updates that get vaguer, which often means nobody on the current team fully understands the earlier work. I wrote about that in [status report theater](/post-agency-status-report-theater).

## What to put in the contract

Most agency contracts say nothing about continuity, which means the agency can staff your project however suits them. Four clauses fix most of the problem. They are reasonable, and a good agency will usually accept them.

### Name the key people

List the lead developer and any other role you consider critical by name in the statement of work. State that they will not be removed from the project without your written agreement except for resignation, illness, or termination of their employment.

### Require notice and an overlap

If a key person has to leave the project, the agency gives you notice, typically two to four weeks where possible, and the outgoing and incoming developers overlap for at least a week or two. The overlap is where most context actually transfers.

### Do not pay for ramp-up the agency caused

When the agency chooses to move someone, ramp-up time for the replacement is not billable, or is billed at a discount for a fixed period. A common, fair version: the first two weeks of the replacement's time are free or half rate. This one clause changes the agency's incentives more than anything else, because rotations stop being free for them.

### Give you a say in the replacement

You get to interview or at least review the replacement before they start, and you can reject someone who is clearly less senior than the person leaving.

These sit naturally alongside the other clauses in [SOW red flags](/post-sow-red-flags). If the agency refuses all four, that tells you how they expect to staff your work.

## What to do when it happens anyway

Sometimes the contract is already signed and the swap has already happened. You can still limit the damage.

1. **Ask for the overlap even if the contract does not require it.** Most agencies will agree to a few days if you ask directly and early.
2. **Get a written handover.** A one-to-two-page note covering what is in progress, known issues, unusual decisions and why, and where credentials and environments live. Ask the outgoing developer to write it, not the account manager.
3. **Record a walkthrough.** A 60-minute recorded call where the outgoing developer walks through the codebase is worth more than most documentation.
4. **Negotiate the ramp-up.** Point to the lost productivity and ask for a credit. Many agencies will offer one rather than risk the account.
5. **Reduce your single points of failure.** If one agency developer is the only person who understands a critical part of your system, that is a [key person risk](/post-key-person-codebase-risk) whether they work for you or for a vendor.

## The bigger question

If rotations keep happening, it may be a sign that you are a small client the agency uses as a training ground, or that the agency has high staff turnover. Either way, it is worth stepping back and asking whether this is still the right vendor, or whether it is time to [bring development in house](/post-when-to-bring-development-in-house).

If you are not sure whether what you are seeing is normal, a short [call with us](/book-a-call) is often enough to tell. We look at the commit history, the invoices, and the staffing changes, and give you a straight answer.

## FAQ

### Is it unreasonable to ask an agency to name individuals in the contract?

No. Many agencies resist at first, but naming one or two key roles is a common request. If they will not name anyone, ask for the continuity terms (notice, overlap, no billing for ramp-up) instead.

### How long should an overlap between developers be?

One to two weeks is a practical minimum for a small product. For a complex system or a developer who has been on the project for more than a year, longer is better.

### Should I pay for the replacement developer's learning time?

Not if the agency chose to make the change. If you asked for the change, or the developer left the agency, a shared cost is fair. Put the rule in writing before it happens.

### Can I stop a rotation I do not want?

Only if your contract gives you that right. Without a key-person clause, the most you can do is object and negotiate. That is the main reason to add the clause before you sign.
