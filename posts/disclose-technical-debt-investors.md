---
title: Should you tell investors about your technical debt?
slug: disclose-technical-debt-investors
date: '2026-07-04T06:04:30.185Z'
category: Fundraising
excerpt: >-
  Every company has technical debt and investors know it. The question is not
  whether to disclose, but how to make it read as judgment.
description: >-
  Whether and how to disclose technical debt to investors, and why hiding it
  costs more than the debt itself during diligence.
author: The founder of Fraction
readTime: 5
draft: false
---

A founder asked me this before a Series A: we know our billing system is held together with tape and we are planning to rewrite it next quarter. Do we tell the investors, or do we keep quiet and hope diligence does not go there? The instinct to keep quiet is understandable. It is also the wrong call, and it usually backfires in a specific, predictable way.

Every company has technical debt. Investors know this. A reviewer who hears "we have no technical debt" does not think you are clean, they think you do not know where your problems are. The real question is not whether to disclose. It is how to disclose so that debt reads as judgment rather than as risk.

## Why hiding debt costs more than the debt itself

Technical diligence is, at heart, a test of whether the founding team has an accurate picture of its own system. When a reviewer finds a serious weakness the founder did not mention, two things happen at once. The specific problem gets logged, and, worse, the founder's credibility on everything else drops. Now the reviewer wonders what else was not mentioned, and starts digging harder.

That second cost is the expensive one. A disclosed weakness is a known quantity the investor can price. An undisclosed weakness that surfaces mid-diligence is a trust problem, and trust problems reprice the whole deal or end it.

### Reviewers expect gaps at your stage

Nobody funding a seed or Series A company expects pristine architecture. They expect a product that was built fast to find product-market fit, which means shortcuts, which means debt. The presence of debt is not the signal. The signal is whether you can tell the difference between the debt that is fine and the debt that is a fire. I have written about how [some technical debt is the right call](/post-good-technical-debt), and being able to explain which of yours is deliberate is exactly what a reviewer is listening for.

## How to disclose debt so it reads as strength

There is a large difference between "our system is a mess" and "here are the three areas of debt we carry, why we took each on, and what our plan is." The first is a confession. The second is a competent operator briefing an investor. Same facts, opposite impression.

### Name it, rank it, and show the plan

Make a short list of your real technical debt. For each item, say why it exists, what it costs you today, and what you intend to do about it and when. Rank them, so the reviewer sees you know which one would hurt most. A founder who says "the billing system is our biggest debt, it is fine at current volume but would strain past roughly ten times our load, and we have scoped a rewrite for after this raise" sounds like someone in control. That is a fundable answer.

The debt that scares investors is not the debt you name. It is the debt you clearly have not thought about. When you volunteer the list, you take that fear off the table.

### Separate debt from decay

Be honest with yourself about which is which. Deliberate debt is a shortcut you chose knowingly to move faster, with a plan to address it. Decay is debt that accumulated because nobody was watching, with no plan attached. Reviewers can smell the difference. If your list is all decay and no decisions, the problem is not the disclosure strategy, it is that no one has been steering the technical side. That is a fixable problem, but it is a different one, and it is often the moment a founder realizes they needed [senior technical judgment in the room](/post-tech-risk-board) earlier than they thought.

### Have the fix scoped, not just named

Naming a problem without a plan is only half the credibility. The founders who handle this best walk in with the rewrite scoped, the cost estimated, and the timeline tied to the capital they are raising. That turns a weakness into part of the use-of-funds story, which is a much stronger place for it to live than as a surprise in a diligence memo.

If you are heading into a raise and are not sure which of your shortcuts count as reasonable debt versus which are quietly a risk, that assessment is worth doing before an investor does it for you. You can [book a call](/book-a-call) and we can sort your list into the pile you disclose confidently and the pile you fix first.

## FAQ

### Should I tell investors about our technical debt during diligence?

Yes. Every company has debt and reviewers know it. Volunteering a ranked list with reasons and a plan reads as competent stewardship. The bigger risk is a serious weakness the reviewer finds that you did not mention, because that damages your credibility on everything else in the data room, not just that one item.

### Will disclosing technical debt lower our valuation?

Rarely, when it is disclosed well. A named, understood, planned-for weakness is something an investor can price and move past. An undisclosed weakness found mid-diligence is a trust problem that can reprice or kill the deal. The disclosure almost always costs less than the discovery.

### What technical debt do investors actually worry about?

The debt you have not thought about. Deliberate shortcuts with a plan are normal and expected. Accumulated decay with no owner and no plan signals that no one has been steering the technical side, which worries reviewers far more than any single system. Show them you know which of your debt is which.

### How should I present technical debt to a reviewer?

As a short ranked list. For each item give the reason it exists, its cost today, the load or condition under which it would become a problem, and your plan and timeline to address it. Tie the fixes to your use of funds where you can, so the debt becomes part of the raise story rather than a red flag inside it.
