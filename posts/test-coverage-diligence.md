---
title: Diligence asks about test coverage. Which number?
slug: test-coverage-diligence
date: '2026-08-15T09:30:00.000Z'
category: Fundraising
excerpt: >-
  A reviewer asks for your test coverage number and you panic that it is too
  low. The percentage is the least interesting part of the answer. Here is what
  they mean.
description: >-
  What a technical diligence reviewer really wants when they ask about test
  coverage, why the percentage matters less than what is covered, and how to
  answer.
author: The founder of Fraction
readTime: 4
draft: false
---

A technical reviewer asks for your test coverage number and you feel the floor drop, because you know it is 40 percent and you are sure that fails. It probably does not. The percentage is the least interesting part of the question, and a founder who answers with a single number is answering the wrong question. What a reviewer wants to know is whether the parts of your system that would cost you money or customers if they broke are the parts you actually test.

I get asked to sanity-check testing before a raise, and the conversation is never really about hitting a number. It is about whether the team knows which code is dangerous and covered it accordingly.

## What the coverage question is really testing

Coverage percentage is a proxy, and a weak one. A team can hit 80 percent by testing getters and setters while the payment flow and the data-integrity logic run untested. A reviewer knows this, so the number is a starting point, not the answer.

### What is covered matters more than how much

The guidance reviewers actually apply in 2026 is that critical paths should sit above roughly 60 percent, and core business logic ideally above 70 percent, but the emphasis is on where the tests are. Tests need to exist where a bug is expensive: the revenue path, data integrity, the integrations that other systems depend on. A codebase at 45 percent overall with the payment flow, the billing math, and the auth boundary all well covered is in better shape than one at 75 percent that got there by testing the parts that never fail. When the reviewer asks for the number, follow it immediately with where that coverage sits.

### They are measuring maturity, not just tests

The deeper question behind coverage is whether testing is part of how the team ships or an afterthought bolted on for the demo. Reviewers look at whether tests run in your pipeline on every change, whether a failing test actually blocks a merge, and whether the suite spans unit tests through the end-to-end workflows that matter. A modest coverage number attached to a real pipeline that gates merges reads as a disciplined team. A high number attached to tests nobody runs reads as theater. The habit is the signal.

## How to answer without overpromising

The worst answer to the coverage question is a defensive one, or a made-up target you cannot back up. Reviewers verify. They will run static analysis and sample the code themselves.

### Lead with the critical paths

Say what you protect and why. "Coverage is around 45 percent overall. The payment flow, the billing calculations, and the auth layer are above 80 percent because those are the places a bug costs us real money or a customer. The marketing site and admin tooling are lightly tested on purpose." That answer tells a reviewer you made deliberate decisions about risk, which is exactly the judgment they are trying to assess. A bare "45 percent" tells them nothing except a number that sounds low.

### Name the gaps and the plan

If there is a critical area that is thin, say so and say what you are doing about it, the same way you would surface any known weakness before a reviewer finds it. A team that says "our integration tests are weaker than I want and here is the sprint that fixes it" reads as in control. A team that claims everything is covered and gets caught by a code sample reads as either careless or dishonest, and that lands in the report. Reviewers also cross-check against your incident record, so your testing story should line up with your [incident history as a diligence document](/post-incident-history-diligence).

### Know that the bar depends on your stage

How hard the reviewer leans on testing depends on where you are raising. A pre-seed team is not expected to have the coverage of a Series A company with paying enterprise customers, and reviewers calibrate accordingly. Understanding how the [depth of technical diligence differs between seed and Series A](/post-diligence-depth-seed-series-a) tells you how much this question will actually weigh, so you can invest in coverage at the level your round demands rather than chasing a number that does not fit your stage. Early on, the honest answer about [how much testing you need before you have users](/post-how-much-testing-early) is often less than founders fear.

The test coverage question is not a trap and the percentage is not the point. The founders who answer it well are the ones who tested the code that would hurt them if it broke, and can say exactly which code that is. If you are not sure whether your coverage sits where it should before a raise, that is a quick thing to check, and it is part of what a [technical review](/teardown) covers.

## FAQ

### Is there a coverage number that automatically fails diligence?

No single number fails on its own. A very low overall figure invites scrutiny, but a reviewer cares far more about whether your revenue path, data integrity, and integrations are tested. Strong coverage where it counts beats a high average spread thinly.

### Should I rush to raise coverage before a raise?

Only in the right places. Rushing to inflate the overall percentage by testing trivial code is wasted effort a reviewer will see through. If you have time, spend it hardening the critical paths and wiring tests into your pipeline so they actually gate merges. That is what moves the assessment.

### What if we have almost no automated tests?

Then be honest about it, explain how you currently catch regressions, and show a credible plan. At the earliest stages a light suite can be a reasonable tradeoff. What damages you is claiming coverage you do not have, because reviewers verify with their own tools and a caught overstatement colors the whole report.
