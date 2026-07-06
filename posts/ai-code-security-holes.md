---
title: The security holes hiding in your AI-written code
slug: ai-code-security-holes
date: '2026-07-06T14:04:27.923Z'
category: Pattern recognition
excerpt: >-
  AI coding tools ship insecure code by default. If nobody with security
  judgment has read yours, assume there are holes, and here is how to find them.
description: >-
  AI coding tools ship insecure code by default. How a non-technical founder
  finds and fixes the security holes before a customer or attacker does.
author: The founder of Fraction
readTime: 7
draft: false
---

A founder showed me a product last month that three people had built in six weeks using AI coding tools. It worked. It looked good. It had paying users. Then I asked one question: who has read this code for security? The room went quiet. Nobody had. And when I spent an afternoon looking, the holes were exactly where I expected them.

Here is the direct answer. AI coding tools ship insecure code by default, and the studies coming out in 2026 all point the same direction: a large share of AI-generated code carries at least one known security flaw, whether you put the number at a quarter of samples or the vast majority of codebases. If you built with these tools and nobody with security judgment has reviewed the output, assume there are holes. The fix is not to stop using the tools. It is to get someone who can read the code to hunt for the predictable failure patterns and close them before a customer, an auditor, or an attacker finds them first.

## Why AI writes insecure code by default

The tools are trained on the public internet, and the public internet is full of code that was written to work, not to be safe. A tutorial that shows you how to query a database rarely stops to sanitize the input. A code sample that connects to a third-party service usually hardcodes the key right there in the file. The model learned from millions of these examples, so it reproduces the same shortcuts, confidently and at speed.

Speed is the part founders underestimate. A developer using AI assistance ships several times more code than they would by hand. That is the selling point. But if the same person introduces security problems at a much higher rate per line, the volume works against you. You are not just getting more features. You are getting more surface area for things to go wrong, produced faster than anyone is checking it.

The deeper issue is that the model has no memory of your threat model. It does not know that this endpoint is public and that one is internal. It does not know that this field comes from a user you cannot trust. It generates the most statistically likely code for the prompt, and the most likely code is usually the insecure convenient version. A senior engineer carries that context in their head and corrects for it without thinking. The tool does not carry it at all.

## The holes I find most often

When I do a security-minded read of an AI-built product, I am not hunting for exotic attacks. I am looking for the same five or six patterns, because they show up almost every time.

### Secrets sitting in the code

API keys, database passwords, and tokens written directly into files, often then committed to the repository. The tool put them there because that was the fastest way to make the example run. Now they live in your git history forever, and anyone who gets a copy of the code gets the keys.

### Missing checks on who is allowed to do what

The classic version: an endpoint that returns a user's data based on an ID in the URL, with no check that the person asking is actually that user. Change the number, see someone else's account. AI generates the happy path perfectly and skips the authorization check almost every time, because the prompt rarely mentions it.

### Trusting input that came from a user

Data from a form or a URL gets passed straight into a database query or a system command without being cleaned. This is the oldest category of web vulnerability, and AI tools reintroduce it constantly because the naive version is shorter and looks like it works.

### Dependencies nobody is watching

AI-assisted builds pull in a lot of third-party packages, quickly. Each one is code you did not write and are not tracking. Some are outdated with known vulnerabilities. A few, occasionally, are packages the model invented that do not exist, which is its own kind of supply-chain risk when an attacker registers that name.

### Error messages that tell an attacker too much

When something breaks, the default AI-generated handler often dumps the full internal error to the screen: file paths, query structure, sometimes credentials. It is helpful during development and a gift to anyone probing your system.

None of these require a genius to find. They require someone who knows to look, and who has the judgment to tell a real problem from a harmless one. That is the gap. The tools removed the need to write the code. They did not remove the need to understand it.

## What a non-technical founder can actually do

You cannot read the code yourself, and you should not try to become a security expert overnight. But you are not helpless. Three moves cover most of the risk.

First, get an independent read. Have someone with security judgment go through the codebase specifically looking for the patterns above. This is not a six-month audit. A focused review of an early-stage product is usually a few days of work, and it tells you the difference between "a handful of fixable issues" and "this needs to be substantially rebuilt before you take another customer." A short, honest [technical teardown of what you have built](/teardown) is exactly the kind of thing that surfaces these holes before they surface themselves.

Second, fix the leverage points first. You will not close every finding at once, and you do not need to. Rotating exposed secrets, adding the missing authorization checks, and cleaning up user input handling covers the issues most likely to actually hurt you. A good reviewer will rank the list by real risk, not by count, so you spend your limited engineering time where it matters.

Third, put a floor under future code. Once the current holes are closed, the goal is to stop generating new ones at the same rate. That means automated security scanning in the pipeline so obvious problems get caught before they ship, and a person who reviews the risky changes even when the AI wrote them. This is the same discipline that keeps [AI agents from writing faster than anyone can safely review](/post-ai-review-bottleneck), applied to security specifically.

The founders who get burned are not the ones who used AI to build. Almost everyone is doing that now, and it is the right call for getting to a working product fast. The ones who get burned are the ones who mistook "it works and looks finished" for "it is safe to run in front of real users and real data." Those are different claims, and only one of them is visible from the outside.

If you are about to raise, sell to a larger customer, or handle anything sensitive, this moves from important to urgent. The security questions do not stay hidden. They surface in [the security questionnaire that stalls your biggest deal](/post-security-questionnaire-deal), or in diligence, or in an incident. Finding them yourself first, on your own timeline, is the cheapest version of this story by a wide margin. If you want a straight answer on where your code actually stands, you can [book a call](/book-a-call) and I will tell you.

## Frequently asked questions

### Does using AI to write code mean my product is insecure?

Not automatically, but the odds are not in your favor without a review. AI tools generate insecure patterns by default, so an AI-built product that no one with security judgment has read should be treated as if it has holes until proven otherwise. The tool is not the problem. The missing review is.

### Can I just ask the AI tool to make the code secure?

You can, and it helps at the margin, but it is not a substitute for a human read. The model does not know your threat model, cannot see your whole system at once, and often reintroduces problems it just fixed elsewhere. Asking it to "add security" produces code that looks more secure without reliably being more secure.

### How much does a security review of an early-stage product cost?

Far less than the incident it prevents. A focused review of a small codebase is usually a few days of senior time, not a drawn-out enterprise audit. The output is a ranked list of real issues and a fix plan, which is a fraction of the cost of rotating leaked credentials after a breach or losing a deal to a failed security questionnaire.

### Is this the same thing as a full technical due diligence?

Related but narrower. Security is one slice of what diligence covers, and the broader question of whether [AI-written code can survive diligence](/post-ai-code-diligence) includes maintainability, ownership, and architecture as well. A security read is the piece you want done first, because it is the one with an attacker on the other side of it.

### We have not been breached, so is this really urgent?

Not being breached yet is not evidence of being safe. It is evidence that no one has looked, or no one has told you. The holes described here are quiet until they are not, and the moment they stop being quiet is usually the worst possible time to find out about them. Doing the review on your own schedule is the only cheap version.
