---
title: The AI code debt that stays invisible until year two
slug: ai-code-debt-year-two
date: '2026-08-24T02:41:07.082Z'
category: Pattern recognition
excerpt: >-
  AI makes the first draft almost free and year two expensive. Here is the
  metric that predicts the bill, and how to catch the debt while it is cheap.
description: >-
  Why AI-generated code looks healthy in year one and gets costly in year two,
  the churn metric that predicts it, and how to catch the debt early.
author: The founder of Fraction
readTime: 6
draft: false
---

If your product was built fast with AI coding tools and it feels healthy right now, that feeling is the trap, not the reward. The bill for AI-generated code does not arrive when you write it. It arrives in year two, when the code you never fully understood needs to change, and the cost to change it has quietly multiplied. The short version: AI makes the first draft almost free and the second year expensive, and the gap between those two moments is where most founders get blindsided. The fix is not to stop using AI. It is to measure the right thing early and to keep senior judgment in the loop before the debt compounds past the point of cheap repair.

I see this pattern in nearly every diligence and code review I do now. The demo is clean, the velocity charts look great, tests pass. Then I ask the founder to walk me through why a particular module works the way it does, and nobody in the room can answer. That silence is the debt. It has a market rate, and it goes up every quarter you ignore it.

## Why year one lies to you

AI coding tools are extraordinarily good at producing code that runs. They are much weaker at producing code that is easy to change six months later by someone who did not write it. In year one those two qualities look identical, because you are still shipping features and the original context is fresh. The founder or the one engineer who prompted the tool still remembers roughly what it does.

The distortion is that all your visible signals stay green. Features ship. Tests pass. The team feels fast, and I have written before about how [a team that feels fast is not the same as a team that is actually shipping faster](/post-ai-team-feels-fast). Velocity as measured by output looks healthy precisely because the cost has been deferred, not avoided. You are borrowing against your future ability to change the product, and the loan is interest-only until the first serious change request lands.

What makes AI debt different from ordinary technical debt is volume and comprehension. A large share of new code in 2026 is now machine-generated, and industry code-analysis studies this year have flagged two uncomfortable findings: AI-heavy codebases show a sharp rise in churn, meaning code that gets rewritten or reverted within days of being committed, and a majority of developers admit they regularly ship AI-written code they do not fully understand. Ordinary debt is a shortcut someone chose on purpose. This debt is code nobody consciously decided to accept, spread across the whole product.

## The one metric to watch before it compounds

Most teams measure the wrong thing. They watch features shipped and bugs closed, both of which look fine while the debt builds. The metric that actually predicts your year-two pain is code churn: the percentage of recently written code that gets torn out or rewritten within a week or two. High churn in an AI-heavy codebase is the tell that the tool is guessing and your team is not catching it before it lands.

Churn is cheap to track and honest in a way velocity is not. If a large fraction of what you shipped last sprint was already rewritten this sprint, you are not moving fast. You are moving in circles, and paying for the loops in engineer attention. When I do a [teardown of an AI-built codebase](/teardown), churn and comprehension are the first two things I look at, because they predict the maintenance bill far better than any feature count.

The reason this matters economically is that the cost is not linear. In year one the debt is a few awkward modules. By year two, when the product needs real changes and the original context is gone, every change touches code nobody understands, so every change is slow and risky. The maintenance cost of an unmanaged AI codebase can climb to several times what a disciplined one costs, and it compounds because each poorly understood change adds more poorly understood code on top.

## What senior judgment actually changes

The instinct when you hear all this is to slow down or to stop using AI. That is the wrong lesson. AI coding tools are a genuine advantage for a small team, and giving them up to avoid debt is like refusing to borrow money to avoid interest. The right move is to treat AI output the way a good editor treats a first draft: useful, fast, and not shippable until a human who understands the whole system has read it and asked why, not just whether it works.

That is a leadership problem before it is a tooling problem. The teams that stay out of trouble have someone senior who sets architectural guardrails before the AI touches the codebase, insists that every meaningful change be understood by a human, and watches churn as a standing metric rather than a surprise. Without that, AI simply lets a small team generate debt faster than it can review, which is the exact failure mode I covered in [when your AI agents write faster than anyone can review](/post-ai-review-bottleneck).

You do not need a full-time CTO to install this discipline, and most pre-seed to Series A companies cannot justify one. You need senior judgment applied at the right moments: setting the guardrails, reviewing the risky changes, and calling out the debt while it is still cheap to fix. That is a well-scoped fractional engagement, and it is far cheaper than the year-two cleanup. If your product was built quickly with AI and you want an honest read on how much deferred cost is sitting in it, [book a call and we can look at it together](/book-a-call), or see how ongoing oversight is priced on our [pricing page](/pricing).

## The honest founder question

The useful question is not "did we use too much AI." It is "if the person who prompted this code left tomorrow, could anyone else safely change it." If the answer is no, you have AI debt, regardless of how green your dashboards look. The good news is that caught early, it is ordinary work: document the load-bearing parts, review the churny modules, and set the rule that no AI output ships unreviewed. Caught in year two, it is a rewrite conversation. The difference between those two outcomes is a few hours of senior attention now.

## FAQ

### Does this mean we should stop using AI coding tools?
No. The tools are a real advantage for a small team and giving them up costs you speed you cannot afford to lose. The point is to pair them with senior review and architectural guardrails so the first-draft output does not become permanent unreviewed debt. Use the tools; do not ship their output unread.

### How do I know if we already have an AI debt problem?
Two quick checks. Ask whether anyone can explain why the load-bearing parts of your code work the way they do, and look at how much recently written code is being rewritten within a week or two. High churn plus low comprehension is the signature. If both are present, the debt is already accruing.

### Is AI-generated technical debt different from normal technical debt?
Yes, in two ways. It tends to be higher in volume because so much code is now machine-generated, and it is often accepted unconsciously rather than as a deliberate shortcut. Normal debt is a choice you can point to; AI debt is spread quietly across the codebase in code nobody fully decided to keep.

### When is the cheapest time to deal with it?
Now, in year one, while the context is fresh and the debt is a few modules rather than the whole product. The cost of understanding and cleaning up AI code rises sharply once the original context is gone, which is why a small amount of senior review early beats a large rewrite later.
