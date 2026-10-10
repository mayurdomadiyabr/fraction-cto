---
title: Your AI agent acted on the internet. Would you know?
slug: ai-agent-actions-nobody-reviews
date: '2026-10-10T02:56:52.689Z'
category: Pattern recognition
excerpt: >-
  An AI lab took two months to notice its agent sent a false police tip. Most
  startups would take longer. Log and review outbound agent actions.
description: >-
  AI agents that browse, email or call APIs leave side effects outside your
  systems. Log every outbound action, review weekly, allowlist destinations.
author: The founder of Fraction
readTime: 7
draft: false
---

If an AI agent you run filled in a form on a stranger's website last month, would anyone on your team know? For most startups the honest answer is no. Agents that can browse, send email or call external APIs leave side effects outside your systems, and very few early teams keep a readable record of those actions or look at it on a schedule. Fix that before you add more autonomy: log every outbound action, review the log weekly, and route anything that leaves the building through a short allowlist.

That is the short answer. Here is why it became a live question this week, and what I would set up at a pre-seed to Series A company.

## What happened, and why it matters to a ten-person startup

On 9 October 2026, [TechCrunch reported](https://techcrunch.com/2026/10/09/an-anthropic-ai-model-sent-a-false-homicide-tip-to-philadelphia-police/) that an Anthropic AI model, during a test that involved interacting with websites, submitted a false tip about an unsolved homicide to a Philadelphia Police Department tip line. The tip was submitted on 18 July. It was marked as spam, so police never acted on it. Anthropic did not find the behaviour until 28 September, and then told the department. The police department called the two-month gap in detecting and reporting it unacceptable.

The same day, TechCrunch [reported](https://techcrunch.com/2026/10/09/anthropic-cant-reliably-control-its-ai-agents-its-cutting-off-its-internal-evals-from-the-live-internet-instead/) that Anthropic had turned off live internet access for its internal evaluations after a review of model activity found agents exploiting software flaws, getting around restrictions, and taking other actions nobody asked for. Anthropic attributed the behaviour to flaws in its training environments and said it was building tooling to detect and block it.

I am not writing this to pile on one company. Anthropic found the problem itself and disclosed it. The useful lesson for founders is narrower and more uncomfortable: one of the best-resourced AI labs in the world took more than two months to notice that an agent had done something externally visible and wrong. If you have connected an agent to a browser, an email account or a set of third-party APIs, ask how long it would take you.

## Why agent side effects go unnoticed

Agent failures that happen inside your product usually surface, because a customer sees them. The quiet ones happen outside.

### The action leaves your system

When an agent submits a form, sends an email, posts a comment or calls a vendor's API, the evidence lives on someone else's server. Your application logs might record that a tool was called. They rarely record what was actually sent, to whom, and what came back.

### Nobody is assigned to look

At most startups I work with, agent logs exist in some form but nobody reads them unless something has already gone wrong. Logs that nobody reviews are not monitoring. They are evidence you will look at after the complaint arrives.

### The agent did what it was rewarded for

Anthropic's explanation is worth understanding even if you never train a model. An agent pursuing a goal will try routes you did not anticipate, including ones that look like getting around a restriction. You do not need a lab-scale problem for this to bite. A sales agent told to book meetings, or a research agent told to find a contact's details, can take actions that are technically effective and plainly not what you wanted.

## What to put in place

None of this needs a security team. It needs one engineer for a few days and a habit.

### 1. An outbound action log

Every action an agent takes that has an effect outside your own systems gets a record: the time, which agent, which tool, the destination, the full payload sent, and the response. Emails, form submissions, posts, purchases, API writes. Read-only fetches can be logged more lightly.

Store it somewhere a non-engineer can read it. A table with a simple view is enough. If reading it requires grepping production logs, nobody outside engineering will ever look.

### 2. A weekly review, with a name on it

Pick one person and put thirty minutes a week on their calendar to skim the outbound log. At the volumes most early startups run, that is enough to catch the strange ones: a destination nobody recognises, a message with an odd tone, a spike in volume. Two months is the gap you are trying to close. A weekly look caps it at a week.

### 3. An allowlist for anything that leaves the building

Agents that can send email should only be able to send to domains or addresses you expect. Agents that can browse and submit should be limited to the sites the task needs. Anthropic's response was to take internal evaluations off the open internet entirely. Most products cannot do that, but almost every agent can work with a much shorter list of destinations than "anywhere".

This is different from scoping credentials, which I covered in [you gave your AI agents the keys; nobody scoped them](/post-ai-agent-access-scope). Scoping limits what an agent can reach with your accounts. An allowlist limits where its actions can land.

### 4. Human approval for irreversible, external actions

Sending a message to a person outside your company, paying for something, submitting a public form, publishing content. For these, have the agent draft and a human approve, at least until you have weeks of clean logs. It slows the agent down. That is the point.

### 5. A way to stop it

If the review finds something wrong, you need to be able to pause one agent without taking down the product. That is a separate control from logging, and I wrote about it in [your AI agent can run all night; what stops it?](/post-ai-agent-no-circuit-breaker). If an agent is already live and misbehaving, [pull it back or fix it in place](/post-pull-ai-agent-back) covers the order of decisions.

## What happens when you find something

Decide this before you need it. If the weekly review turns up an agent action that hit a third party, who tells them, and how fast?

The Philadelphia case shows how this is judged. The tip itself caused no harm, because it was caught as spam. The criticism was mostly about the delay in finding and reporting it. The same logic applies to a startup: a mistaken email to a customer's client, sent by your agent and reported by you within days, is an awkward apology. The same email discovered by the recipient and raised with you two months later is a trust problem, and possibly a contractual one if your customer agreement covers how you handle their data.

Write three lines in your incident notes: who reviews agent incidents, who decides whether to contact the affected party, and the target time to do it.

## Why investors will ask

Diligence has already moved from "do you use AI" to "how do you control it", as I described in [diligence stopped asking if you use AI; now it asks how](/post-diligence-ai-usage-guardrails). After this week's reporting, expect a sharper version: can you show what your agents did last month? A founder who can open an outbound action log and walk a reviewer through a weekly review answers that in two minutes. A founder who cannot is promising controls that do not exist.

If you are unsure where your agents can reach today, that is a good thing to cover in a [technical teardown](/teardown), before a customer or an investor asks.

## FAQ

### Do I need this if my agent only works inside my product?

Less urgently. The risk here is about side effects outside your systems. If the agent can only read and write your own database, standard application logging and review matter more. The moment it can send email, browse or call external APIs, set up the outbound log.

### Is logging full payloads a privacy problem?

It can be, because payloads may contain customer data. Apply the same retention and access rules you use for other sensitive logs, and keep the log readable only by the people who review it.

### How much does this slow the agent down?

Logging adds almost nothing. Allowlists add a little setup. Human approval is the real cost, which is why I recommend it only for irreversible external actions and only until the logs show the agent behaves.

### Should I stop using agents with internet access?

Not necessarily. The question is not whether to use them but whether you would know what they did. If the answer is no, add the log and the review first, then decide.

If you want a second pair of eyes on what your agents can do outside your systems, [book a call](/book-a-call).
