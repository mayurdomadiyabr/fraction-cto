---
title: A tool holding your AI API key got breached. Who pays?
slug: ai-api-key-in-third-party-tool
date: '2026-10-22T13:58:26.255Z'
category: Pattern recognition
excerpt: >-
  The OpenCode Console breach ran up charges on linked AI accounts. One key per
  tool, a cap on each, and production kept separate limits the damage.
description: >-
  After the OpenCode breach: how to limit the damage when a third-party tool
  holding your AI provider key is hacked. Scoped keys, caps, rotation.
author: The founder of Fraction
readTime: 7
draft: false
---

On Saturday, 17 October 2026, the team behind OpenCode, an open-source AI coding agent, told some users that API keys they had linked to its hosted Console had been exposed. Within hours, developers reported overnight charges on their OpenAI, Anthropic and Google accounts, some of them over $1,000, and some Google Cloud projects were suspended for activity consistent with hijacked resources. If your team pastes AI provider keys into third-party tools, the lesson is simple: every tool that holds your key can spend your money, and in the worst case can get the cloud project behind that key suspended. The fix is a few hours of work: one key per tool, a spending cap on each, and nothing that touches production in a project you lend to outside tools.

## What happened at OpenCode

The facts, as reported by [TechCrunch](https://techcrunch.com/2026/10/19/hackers-hit-ai-coding-tool-opencode-running-up-charges-on-users-ai-accounts/) and [BleepingComputer](https://bleepingcomputer.com/news/security/opencode-hack-exposes-api-keys-amid-ai-distillation-attacks):

- Attackers got into an older system behind OpenCode Console, the hosted service where some users link their own AI provider keys. The company said the incident affected 1.4% of Console users, and it emailed those users directly.
- The exposed keys were for external providers, including Anthropic, OpenAI and Google. OpenCode said the open-source app and command-line tool were not affected, because those keys never pass through its servers.
- Affected users saw unauthorized API usage overnight. Some Google Cloud projects were suspended. Anthropic and Google blocked keys they believed were exposed, and OpenAI worked on restoring access and refunding credits. OpenCode said refunds were underway.
- OpenCode called it a large-scale distillation attack, meaning the stolen keys were used to query large models at scale, possibly to train other models on the answers. Some observers questioned that framing. Either way, the victims paid for the queries until the keys were cut off.

OpenCode had not said how the attackers got in or how the keys were stored at the time of writing. That matters less to a founder than the pattern, which is not unique to one tool.

## Why this is a pattern, not a one-off

### Bring-your-own-key is everywhere now

A lot of AI tooling asks you to bring your own key. Coding agents, prompt playgrounds, evaluation tools, no-code builders, browser extensions, internal dashboards someone built in a weekend. Each one is reasonable on its own. The tool gets to avoid reselling model access, and you get to use your own pricing and model choice.

The side effect is that your provider key ends up stored in a dozen places you do not control, each with its own security practices. In most of the small teams I look at, nobody has a list of those places.

### A key is a credit card with no limit by default

An AI provider key is not just access. It is a payment instrument. Anyone holding it can run queries and you get the bill. An attacker does not need your data or your code to profit from it. They need throughput, and your account gives them throughput at your expense. We walked through the first days after a surprise bill in [your cloud or API bill tripled](/post-surprise-usage-bill-first-48-hours). Prevention is much cheaper than that week.

### The blast radius is wider than the bill

The part of this incident that worries me most is the project suspensions. A Google API key lives in a Google Cloud project. If the key a developer gave to an outside tool sits in the same project as your production services, a provider suspending that project for abuse can take down things that have nothing to do with the tool. Your product stops because a side tool was breached.

This is the same idea as the [npm worms that steal your keys](/post-npm-worm-credential-blast-radius): the damage depends less on the breach and more on what the stolen credential can reach.

## What a small team should do this week

None of this needs a security hire. It needs one engineer and an afternoon.

### 1. Find every place your AI keys live

Ask the team one question: which tools, extensions, scripts and services have one of our AI provider keys? Include personal accounts people have been expensing. Write the answers in one list. Expect it to be longer than you think.

If you used OpenCode Console, check for the company's email and your provider dashboards for usage you do not recognize. Revoke and replace the keys directly with each provider either way.

### 2. One key per tool, per person

Never share a single company key across tools. Create a separate key for each tool and, where possible, each person. When one tool is breached, you revoke one key and nothing else stops working. You can also see in the provider's usage view which key ran up the charges, which tells you where the leak was.

### 3. Put a ceiling on each key

The major AI providers let you organize keys into projects or workspaces and set budgets, spending limits or usage alerts on them. Exact options differ by provider and change often, so check the current console. Set a monthly limit on each tool's project that is close to its real usage, plus a usage alert below that. A breached key with a $200 cap is an annoyance. A breached key on an account with no limit is a weekend you will not get back.

### 4. Keep production keys out of outside tools

Production keys, the ones your product uses to serve customers, should live only in your secrets manager and your running services. Developer tools get separate keys in separate projects or workspaces with lower limits. For Google, that means a separate Cloud project for developer experiments, so a suspension cannot reach production.

The same principle applies to AI agents themselves. If your agents call providers or internal tools, the scoping rules in [you gave your AI agents the keys](/post-ai-agent-access-scope) apply directly.

### 5. Practice the rotation once

Pick a non-critical key and rotate it end to end: create the new key, update the tool, revoke the old one, confirm nothing broke. Time it. If it takes more than fifteen minutes, find out why. During a real incident you will be doing this under pressure for several keys at once, and you want it to be routine.

### 6. Add AI tools to vendor review

Before someone links a company key to a new hosted tool, ask three quick questions. Does the tool store our key on its servers, or does it stay on our machine? Can we use a key with a spending cap? Who at the company approved it? That is a lighter version of the checks we describe in [vetting vendors that hold customer data](/post-vet-vendors-customer-data). It takes five minutes and catches most of the risk.

## A composite example

A seed-stage team of four, typical of what I see. One engineer used a hosted coding tool with the company's main OpenAI key. Another used the same key in an evaluation dashboard and a browser extension. The same key powered the product's AI feature in production. No usage limit was set, because the founder did not want the product to stop if usage spiked.

If any of those three side tools leaked the key, the company would be paying an attacker's bill with no cap. Revoking the key to stop it would also break the product's AI feature for every customer, at the same moment. Splitting into four keys across two projects, with caps on the three developer keys and an alert on the production one, takes less than an hour and removes both problems.

## When to get help

If your team has grown to the point where nobody knows which tools hold which credentials, that is usually a sign that technical ownership has not kept up with the number of tools. A short outside review can map where your keys, tokens and admin accounts live and what each one can reach. That is part of what a [technical teardown](/teardown) covers, and if you want to talk through your setup, you can [book a call](/book-a-call).

## FAQ

### Was the OpenCode app itself compromised?

According to OpenCode, no. The company said the breach affected its hosted Console, where some users linked provider keys, and that the open-source app and command-line tool do not send keys to its servers.

### Should we stop using third-party AI tools that ask for our key?

No. Many are useful and well run. Use them with keys that are scoped, capped and easy to rotate, and prefer tools that keep the key on your machine when you have the choice.

### Will the provider refund fraudulent charges?

Sometimes. In this case providers blocked keys and OpenAI and OpenCode said refunds were in progress. Do not plan around a refund. A spending cap is a guarantee. A refund is a request.

### How often should we rotate AI provider keys?

Rotate immediately after any suspected exposure and whenever someone with access leaves. Beyond that, a regular schedule matters less than having one key per tool and a rotation you have actually practiced.
