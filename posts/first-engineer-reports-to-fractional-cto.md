---
title: Who does your first engineer report to with a fractional CTO?
slug: first-engineer-reports-to-fractional-cto
date: '2026-10-15T03:53:53.639Z'
category: Hiring
excerpt: >-
  Split the job: the founder owns priorities, the fractional CTO owns technical
  direction. A reporting setup that works for a first engineer.
description: >-
  Your first engineer and a part-time CTO: who sets priorities, who reviews
  code, who owns performance, and the weekly cadence that works.
author: The founder of Fraction
readTime: 5
draft: false
---

When your only technical leader works a few days a month, your first full-time engineer should usually report to the founder for day-to-day priorities, with the fractional CTO responsible for technical direction, code quality, and their growth as an engineer. Write that split down before the engineer starts. Most problems in this setup come from leaving it vague: the engineer gets conflicting instructions, nobody runs the one-on-ones, and the fractional CTO slowly becomes either a bottleneck or a bystander.

## Why this is harder than it looks

In a normal company, an engineer has one manager who sets priorities, reviews their work, and handles their career. With a fractional CTO, those responsibilities are split between two people with very different amounts of time:

- **The founder** is always there, knows the customers, and decides what the business needs next. But they may not be able to judge technical work.
- **The fractional CTO** can judge technical work, but is present perhaps one or two days a week, or less.

If you try to make the fractional CTO the full manager, the engineer waits days for answers. If you make the founder the full manager, nobody is checking whether the code will hold up. Neither works on its own.

## A split that works

Here is the arrangement I recommend for most early teams. Adjust it, but agree on something explicit.

### The founder owns what and when

- Sets weekly priorities based on customers, sales, and the roadmap.
- Unblocks business questions the same day.
- Runs the weekly one-on-one, focused on workload, morale, and anything the engineer needs.
- Makes final calls on scope trade-offs, with input from the fractional CTO.

### The fractional CTO owns how and how well

- Sets technical direction: architecture, major tools, and the standards the code should meet.
- Reviews significant changes, design documents, and anything risky, such as data migrations, authentication, or billing.
- Coaches the engineer: feedback on their work, what to learn next, how to grow toward senior or lead responsibilities.
- Gives the founder an honest read on the engineer's performance.
- Escalates when technical risk is building that the founder may not see.

### The engineer owns execution and flags conflicts

- Plans their own week within the founder's priorities.
- Makes routine technical decisions without waiting for approval.
- Raises a conflict immediately when the founder's priority and the fractional CTO's guidance pull in different directions.

That last point matters. Conflicts will happen. The engineer should not be the one resolving them silently.

## The cadence

A simple rhythm keeps everyone aligned without consuming the fractional CTO's limited time:

- **Weekly, founder and engineer:** priorities and blockers, 30 minutes.
- **Weekly, fractional CTO and engineer:** technical review and coaching, 30 to 60 minutes. This is the most valuable time in the engagement; protect it.
- **Every two weeks, all three:** what shipped, what is risky, what is coming. This is where conflicts get resolved.
- **Asynchronous code review:** the fractional CTO reviews larger or riskier pull requests within an agreed turnaround, such as one or two business days.

If your fractional CTO cannot commit to that cadence, the engineer will feel unsupported. It is worth checking [how many days of fractional CTO time](/post-how-many-days-fractional-cto) your stage actually needs.

## Common failure modes

### The fractional CTO becomes a bottleneck

Every decision waits for the next session. The fix: be explicit about which decisions the engineer makes alone. A good rule is that the engineer decides anything that is easy to reverse, and checks in on anything that is hard to reverse, such as database schema changes, new external dependencies, or security-sensitive code.

### The founder overrides technical decisions

Under deadline pressure, the founder tells the engineer to skip tests or take a shortcut the fractional CTO advised against. Sometimes that is the right trade-off. But it should be an explicit decision, made with the fractional CTO in the loop, not something the engineer discovers they have to absorb alone.

### Nobody owns performance

The founder assumes the fractional CTO is evaluating the engineer. The fractional CTO assumes the founder is. Six months later, there is a problem nobody raised. Decide who writes the performance review; usually it should be joint, with the fractional CTO covering technical quality and the founder covering everything else. Our post on [performance reviews for a small engineering team](/post-engineering-performance-reviews-small-team) has a lightweight format.

### The engineer feels they have no real manager

This is the quiet one. A senior engineer may be fine with it. A less experienced engineer may feel lost. If your first hire needs a lot of guidance, the fractional model may give them less than they need; a stronger, more independent first hire is usually the better fit. See [what to look for in a first senior engineer](/post-find-first-senior-engineer).

## When the setup needs to change

This arrangement works well for one to three engineers. Signs it is time to change:

- The engineer is regularly waiting on the fractional CTO.
- You are hiring your third or fourth engineer, and someone needs to coordinate their work daily.
- The engineer is ready to lead and wants the responsibility.

At that point, the usual next step is promoting your strongest engineer into a lead role, or hiring an engineering lead, with the fractional CTO stepping back to an advisory role. Our post on [when to hire an engineering lead](/post-when-to-hire-engineering-lead) covers that transition.

## Making it clear to candidates

Explain the reporting structure in the interview process, not on day one. Strong engineers will ask, and an honest, specific answer helps you hire people who will thrive in it. Something like: "You will work with our founder on priorities every day and with our fractional CTO on technical direction weekly, with code review in between." If you want to see how a Fraction engagement supports a first engineering hire, [pricing](/pricing) lays out the options.

## FAQ

### Can a fractional CTO be someone's direct manager?

They can, but it works best when the engineer is senior and independent. For most first hires, a split where the founder handles day-to-day priorities and the fractional CTO handles technical direction and coaching works better.

### Who should run the first engineer's one-on-ones?

Usually both: a weekly founder one-on-one on priorities and workload, and a weekly technical session with the fractional CTO. Merging them into one often means the technical side gets squeezed.

### What if the founder and fractional CTO disagree?

Raise it in the joint meeting, not through the engineer. The founder generally has the final say on business priorities; the fractional CTO should have a strong voice on technical risk. Write down the trade-off when you make it.

### How much fractional CTO time does a first engineer need?

Enough for a weekly technical session and timely review of significant changes. For many teams that is a few hours a week, plus some asynchronous review time. It depends on the engineer's seniority and the complexity of the product.

If you are about to hire your first engineer alongside a fractional CTO and want to set up the reporting line properly, [book a call](/book-a-call).
