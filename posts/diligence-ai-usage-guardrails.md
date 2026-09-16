---
title: Diligence stopped asking if you use AI. Now it asks how.
slug: diligence-ai-usage-guardrails
date: '2026-09-16T02:50:01.020Z'
category: Fundraising
excerpt: >-
  Investors assume AI wrote part of your product. The 2026 question is where it
  sits in your process, what guardrails hold, and what your scanning found.
description: >-
  Technical diligence now asks how you use AI, not whether. The three documents
  that answer it, and the confident reply that sinks the call.
author: The founder of Fraction
readTime: 6
draft: false
---

Short answer: investors have stopped asking whether you used AI to build your product, because they assume you did. The question in diligence now is how you use it -- where it sits in your development process, what guardrails sit around what it produces, and how you find and fix the problems it introduces. You answer that with evidence, not with a position, and the evidence takes weeks to assemble, so it has to exist before the call.

I have watched this question change shape twice in eighteen months. First it was "did an AI write this?", asked with suspicion. Then it was "can you explain what got built?", which is a fair question and the one I wrote about in [defending an AI-built stack to an investor](/post-defend-ai-stack-to-investor). Now it has moved again, and the new version is harder, because it is about your process rather than your product.

## What changed, and why it changed now

Two things happened at once. AI-assisted development stopped being a differentiator and became the default, so "we use AI" carries no information. And enough AI-built code has now reached production age that the failure patterns are documented rather than theoretical.

The security data is the part that moved the conversation. Veracode's [2026 GenAI Code Security Report](https://www.veracode.com/blog/2026-genai-code-security-report-ai-risk/) found an average security pass rate of 56 percent across the models it tested, essentially unchanged from 55 percent in its first report, which means roughly 44 percent of generation tasks introduced a risky vulnerability. The important part is not the headline number, it is the flatness: model capability improved substantially over that period and security output did not follow. Anyone doing diligence in 2026 has read a version of this, and they have drawn the obvious conclusion. If the model is not getting safer and your team is shipping more model output than ever, the thing that protects the company is your process.

So the question became a process question. And process questions are answered with artifacts.

## The three things they are actually asking

Underneath the polite phrasing there are three specific asks, and they map to three documents you either have or do not.

The first is where AI sits in your development workflow. Not "we use Copilot," but which parts of the system were substantially generated, which were hand-written, which tools have write access to your repository, and whether anyone can tell the difference after the fact. A founder who says "most of the frontend and the integrations, almost none of the billing logic" is giving a real answer. A founder who says "we use it everywhere" is giving none.

The second is what the guardrails are in practice. The phrase in practice is doing the work. Every company says code is reviewed. The question is what review means when the author is a model: does a human read the diff, is there a rule about which parts of the system cannot be merged without a second pair of eyes, does anything automated run before merge, and can you show that it ran. A policy nobody follows is worse than no policy, because it establishes that your documentation does not describe your company.

The third is how you find and fix what gets through. Dependency scanning, secret scanning, static analysis, and a record of what those tools found and what happened next. The record matters more than the tooling. Finding twelve issues and fixing eleven with a dated note on the twelfth reads as a company in control. Finding nothing reads as a company that is not looking.

## What good evidence looks like at pre-seed to Series A

None of this requires enterprise process, and pretending otherwise is how founders talk themselves out of doing any of it. At your stage the whole package is three short documents and some tool output.

A one-page map of where AI is used. Components, roughly what proportion was generated, which of those touch customer data or money, and which tools have repository access. This takes an afternoon and it is the document investors most often find missing.

A one-page rule for how AI output gets merged. Which data may never be pasted into a model, which parts of the system require human review regardless, what runs automatically before merge. If you have not written this yet, the [one-page rule for AI tool use](/post-shadow-ai-startup-policy) is the same document, and it does double duty in customer security reviews.

A short record of what your scanning has found and what you did. Three months of history is enough to show a pattern. The absence of history is the finding.

That is it. Perhaps two days of work in total, and it converts the hardest question in the room into a document you hand over.

## The answer that sinks the call

There is one response I have watched go badly more than once, and it is delivered confidently: "our engineers review everything."

It fails because it is unverifiable and because the person asking knows what review looks like under delivery pressure. A team shipping fast with generated code is approving large diffs quickly, and everyone in the conversation knows it. The claim invites exactly the follow-up you do not want, which is a request to walk through the last few merges.

The better answer is narrower and true. Something closer to: these three areas require a human reviewer and always have, everything else gets automated checks plus a lighter review, here is what the checks caught last quarter, and here is the part we know is weak and what we are doing about it. Naming a weakness is not a concession in this room. It is the single strongest signal that the rest of what you said is accurate.

## Where the cost lands if you skip it

The near-term cost is a slower diligence process, because unanswered process questions turn into a code review you did not plan for, and those stretch timelines at exactly the wrong moment.

The longer cost is worse and arrives later. Code that nobody deliberately owned accumulates quietly and gets expensive in year two, which is a pattern I have described in [the AI code debt that stays invisible until year two](/post-ai-code-debt-year-two). The diligence question is, in effect, an investor checking whether you are already paying that bill down or still deferring it. They are not asking because they dislike AI. They are asking because they are underwriting your judgment for the next three years, and this is a cheap way to test it.

The founders who handle this well are not the ones with the most restrictive policy. They are the ones who can describe their own process accurately, including the parts that are thin. If you are raising in the next two quarters and cannot currently produce those three documents, that is a small, dated piece of work rather than a crisis -- a [teardown of what you have built and how it gets built](/teardown) produces most of it as a by-product. If you would rather just talk it through first, you can [book a call](/book-a-call).

## FAQ

### Do investors penalise startups for using AI to write code?
No. By 2026 it is assumed, and a team not using AI tooling raises its own questions about speed. What gets penalised is being unable to describe where it is used and what controls exist around it.

### What if we have no AI policy at all right now?
Write the one-page version this week rather than a formal one later. Name the approved tools, the data that must never leave, and the parts of the system that require human review. A short rule that matches reality beats a long one that does not.

### How much does this matter for a pre-seed round?
Less than at Series A, but the documents are cheap and they compound. The same pages answer enterprise customer security questionnaires, which usually arrive before your next round does.

### Should we tell investors which parts of the codebase are AI-generated?
Yes, and in proportion rather than in absolutes. Saying which components are substantially generated, and which of those touch money or customer data, is specific enough to be credible and is the answer the question was designed to get.
