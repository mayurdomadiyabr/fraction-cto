---
title: Your engineers answer support tickets. When should that stop?
slug: engineers-answering-support
date: '2026-10-05T08:18:57.045Z'
category: Knowing when
excerpt: >-
  Engineers should keep hearing from customers, but not be the first line of
  support. The signs it is time to change, and the cheap fix.
description: >-
  When should engineers stop handling customer support at a startup? The warning
  signs, a simple triage and rotation setup, and when to hire support.
author: The founder of Fraction
readTime: 5
draft: false
---

At three engineers, everyone answers support. A customer writes in, the founder forwards it to the team channel, and whoever is free looks at it. It feels responsive, and early on it is the right call: engineers who read customer complaints build better products. Then one week you notice that nothing on the roadmap shipped, and every engineer spent half their time on "quick questions" that were not quick.

The short answer: engineers should keep seeing customer problems for as long as you exist, but they should stop being the first line of support well before it eats a quarter of their week. The usual trigger is when support interrupts engineering every day, when the same questions repeat, or when roadmap work slips and nobody can say why. The fix at most seed-stage companies is not a support team. It is a rotation, a triage step in front of engineering, and a short list of what actually needs an engineer.

## Why engineers answering support works at first

In the first year it has real value. Engineers hear the problem in the customer's words, not filtered through three people. Bugs get fixed fast because the person who wrote the code sees the report. And with ten customers, the volume is small enough that it does not matter much.

The trouble is that the habit survives long after those conditions change. Customers grow from ten to a hundred. The product grows from three features to fifteen. The interrupts grow with both, and because each one is small, nobody adds them up.

## Signs it is time to change the setup

### Engineers cannot name a day without a support interruption

Ask each engineer how many days last week they had a full morning without being pulled into a customer issue. If the answer is zero or one, focus has gone. Context switching is expensive for engineering work: a 10-minute question can cost an hour of the work it interrupted.

### The same five questions keep coming back

If engineers are answering how to reset a password, why an export is slow, or where a setting lives, those are documentation, product or support problems. An engineer answering them is the most expensive possible way to handle them.

### Roadmap dates slip and the retro blames "unplanned work"

When "unplanned work" shows up in every review and nobody can quantify it, support is often the largest unmeasured piece. Count it for two weeks before you argue about it.

### Your most senior engineer has become the support desk

Customers learn who answers fastest. If one person, often the most experienced, is quietly handling most escalations, you have a hidden single point of failure and a burnout risk. I wrote about this kind of concentration in [when the codebase lives in one person's head](/post-key-person-codebase-risk).

## What to do instead

### 1. Put a triage step in front of engineering

Someone who is not an engineer reads every inbound issue first: a founder, an operations person, a customer success hire. Their job is to answer what they can, reproduce what they cannot, and pass along only issues that need code. Even a founder doing this for 30 minutes a day removes most of the noise.

### 2. Run a weekly support rotation

One engineer per week is on support duty. They handle everything triage passes along. Everyone else is protected. The rotation keeps every engineer close to customers, which is the part worth keeping, while giving most of the team most of their week back. If you already have an on-call setup, these can be the same rotation or separate ones; I covered the on-call side in [when your startup needs on-call](/post-when-do-you-need-on-call).

### 3. Write down severity levels

Three levels are enough: broken for many customers now, broken for one customer now, annoying. Only the first interrupts anyone outside the rotation. Without written levels, every customer issue is urgent because the customer said so.

### 4. Turn repeat questions into fixes

Have the rotation engineer end each week with a short list: the three most repeated issues and what would make them go away. Some are documentation. Some are product changes. A few are bugs. This is how support work turns into roadmap input instead of a drain on it.

## When to hire a dedicated support person

A rotation carries a small team a long way. A dedicated support or customer success hire starts to make sense when triage alone takes more than a few hours a day, when customers need answers outside your team's working hours, or when your biggest accounts expect a named contact. That person is not a replacement for engineers seeing problems; they are the filter that lets engineers see the right ones.

A technical support engineer, someone who can read logs, query the database safely and reproduce bugs, is a middle step worth considering once support volume is steady and mostly technical. It is often a better hire than another product engineer if your engineers are losing a third of their week to investigation.

## The numbers to check this week

You do not need a tool to decide. For two weeks, ask each engineer to note every support interruption with a rough time. Then add it up.

- Under 10% of engineering time: leave it alone, but add severity levels.
- Between 10% and 25%: set up triage and a rotation now.
- Over 25%: you are paying engineers to do support. Fix the repeat issues and plan a support hire.

Those bands are my rule of thumb from the teams I have worked with, not an industry standard. The point is to measure before deciding.

If the support load is a symptom of deeper problems, like a fragile release process or an undocumented system only one person understands, that is worth a closer look. A [technical teardown](/teardown) usually surfaces it in the first week, and a [call](/book-a-call) is a fast way to tell which problem you have.

## FAQ

### Should engineers ever stop talking to customers?

No. They should stop being the first line of support, not stop hearing from customers. A rotation and regular review of support themes keep engineers close to real problems without letting support eat the week.

### Who should do support triage at a 5-person startup?

Usually a founder or an operations generalist. The job is to answer simple questions, reproduce issues and route the rest. It does not need to be technical, but it needs to be someone who will write clear bug reports.

### Is a support rotation fair to engineers?

It is fairer than the default, where the most responsive person absorbs everything. A rotation spreads the load, makes it visible, and gives everyone protected weeks.

### How does this affect hiring plans?

Measuring support load often changes the next hire. Sometimes the answer is a support person rather than another engineer. If you are weighing that tradeoff, our [pricing](/pricing) page shows how a short engagement for that kind of decision works.
