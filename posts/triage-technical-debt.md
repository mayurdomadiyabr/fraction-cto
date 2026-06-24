---
title: Everything feels broken. How to triage technical debt that matters
slug: triage-technical-debt
date: '2026-06-24T11:58:00.585Z'
category: Decisions
excerpt: >-
  When the whole codebase feels like debt, founders freeze or overspend. Here is
  the triage I use to decide what to fix now, later, or never.
description: >-
  A risk-based way to triage technical debt so you pay down what slows the
  business and ignore the debt that costs you nothing.
author: The founder of Fraction
readTime: 5
draft: false
---

"The whole thing is technical debt" is something I hear from founders who are either about to freeze or about to overspend. Both reactions come from the same mistake: treating debt as one undifferentiated pile instead of a list with very different interest rates. Some of your debt is quietly compounding and will eventually take the company down. Most of it is harmless and you should never touch it.

The job is not to eliminate debt. It is to triage it. Here is how I do it.

## Score debt by business consequence, not by how ugly it is

Engineers naturally rank debt by how much it offends them. That ranking is almost useless for a founder, because the ugliest code is often in a stable corner that nobody changes and nobody will. The code that matters is the code that is slowing the business down right now.

So I score every piece of debt on two axes:

- **Interest rate:** how much friction it adds to the work you are actually doing. Does it slow down every feature, break in production, or block a hire from being productive? High interest. Does it sit in a module you touch twice a year? Low interest, regardless of how bad it looks.
- **Blast radius:** what happens if it fails. A security hole in dependency handling is not the same as a confusing variable name, even if both are "debt."

The debt worth paying down is the high-interest, high-blast-radius kind. That is usually a much shorter list than the team expects, and naming it out loud is most of the value. I wrote about the broader version of this in [the architecture smells I look for in a 20-minute review](/post-architecture-smells); triage is the same instinct applied to a backlog instead of a system.

### The one category that always jumps the queue

Outdated dependencies with known vulnerabilities go to the front, ahead of performance issues and ahead of code cleanliness. A messy function costs you developer time. A vulnerable, unpatched library costs you a breach. These are not the same severity, and they should never be in the same bucket on your board.

## Reserve capacity instead of running campaigns

The pattern that fails is the "debt sprint" or the "cleanup quarter," where the team stops feature work, burns two weeks, and then never does it again until the next crisis. Debt does not arrive in quarterly batches, so you cannot pay it down in quarterly batches.

What works is a standing allocation. Reserve roughly 15 to 25 percent of every sprint for debt reduction and treat it with the same seriousness as feature work. At that rate, a team naturally keeps the high-interest debt under control without ever stopping the roadmap. Below about 15 percent, debt outpaces repayment and you slowly grind to a halt. Above 25 percent on an early-stage product, you are usually polishing code that the market has not validated yet, which is its own kind of waste.

The number matters less than the consistency. A steady 15 percent beats a heroic 50 percent that happens twice a year and burns the team out both times.

## The three life stages of startup debt

The right posture changes as the company grows, and founders get into trouble by using the wrong posture for their stage.

**Early stage: disposable architecture.** Before product-market fit, most of your code should be cheap and replaceable, because you are going to throw a lot of it away when you learn what the product actually is. Taking on debt deliberately here is correct. Paying it down aggressively is premature optimization of code you are about to delete.

**Scaling stage: managed refactoring.** Once you have real customers and a real roadmap, the standing 15 to 25 percent allocation kicks in. This is where most of my clients are, and where the triage discipline pays for itself.

**Mature stage: governance.** Now debt is about reliability and enterprise readiness, and you can afford process around it. Almost no early-stage company is here, and acting like you are is a way to move slowly for no reason.

Knowing your stage keeps you from over-engineering, which is closely related to the [premature scaling pattern](/post-premature-scaling) that quietly kills startups by solving problems they do not have yet.

## A short word on AI-era debt

A newer wrinkle: AI-assisted development creates its own debt categories. Brittle prompts, model drift, and code generated faster than anyone can review it all accumulate quietly. Even a small, fast team can be piling up debt from day one now, because the tooling makes it so cheap to produce code that nobody fully understands. Treat AI-generated code as debt-on-arrival until it has been read by a human who can defend it.

## How to run the triage in practice

1. List the debt the team complains about. All of it.
2. Score each item by interest rate and blast radius. Be honest that ugly is not the same as expensive.
3. Move dependency and security debt to the top, automatically.
4. Pick the handful of high-interest, high-blast items. Ignore the rest on purpose.
5. Fund a standing 15 to 25 percent sprint allocation. Stop running cleanup campaigns.
6. Re-triage every quarter, because the interest rates change as the product changes.

If you want help separating the debt that is actually costing you from the debt that just looks bad, that is a good use of a [code teardown](/teardown), or you can [book a call](/book-a-call) and we will go through your backlog together.

### FAQ

### How much of my budget should go to paying down debt?

For a scaling startup, reserve 15 to 25 percent of each sprint. Lower than that and debt outpaces you. Higher than that, pre-product-market-fit, and you are usually polishing code the market has not validated.

### Should I ever take on technical debt on purpose?

Yes, early on, deliberately. Before product-market fit, cheap and replaceable code is the correct choice. The mistake is keeping that disposable posture after you have real customers and a real roadmap.

### Which debt should I fix first?

Security and dependency debt, every time, ahead of performance and cleanliness. A breach is a different severity class than slow code or a confusing name, and it should jump the queue automatically.

### Is AI-generated code technical debt?

Treat it as debt until a human has read and can defend it. AI produces code faster than teams can review it, which creates a quiet backlog of code nobody actually understands. The speed is real; so is the risk.
