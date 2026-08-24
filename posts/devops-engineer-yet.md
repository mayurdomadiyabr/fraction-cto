---
title: 'Do you need a DevOps engineer yet, or better defaults?'
slug: devops-engineer-yet
date: '2026-08-24T02:37:54.337Z'
category: Knowing when
excerpt: >-
  A DevOps hire is not a fix for scary deploys. It is a fix for a measurable
  drain on your engineers, and here is the trigger that justifies it.
description: >-
  When your startup actually needs a DevOps or platform engineer, the real
  triggers, and what to buy before you hire one.
author: The founder of Fraction
readTime: 5
draft: false
---

Most founders ask me for a DevOps engineer about a year before they need one, and for the wrong reason. Deploys feel scary, something broke last week, and hiring a specialist feels like the adult thing to do. But a DevOps hire is not a fix for fear. It is a fix for a specific, measurable drain on your existing engineers, and until that drain shows up, the money is better spent elsewhere.

Here is the short answer. You need a DevOps or platform engineer when your product engineers are spending a real, recurring chunk of their week on infrastructure toil that a specialist would erase, when you have external customers with uptime expectations you cannot currently meet, and when the operational work has grown past what one person can hold in their head between features. Before that, you buy defaults, not a person.

## What DevOps actually means at your size

The title hides three different jobs, and founders conflate them. A DevOps engineer smooths the path from code to production: build pipelines, deploy tooling, environments. A site reliability engineer owns uptime, error budgets, and the pager. A platform engineer builds self-service tooling so other engineers move faster. At a company of five to fifteen people, one person tends to wear all three hats, and the industry benchmark most guides land on is that dedicated help makes sense once your team spends more than roughly 30 percent of its time on operational toil instead of shipping features.

That number matters because it is measurable. You do not need a gut feel. Ask your engineers to track, for two weeks, how many hours go to deploys breaking, environments drifting, on-call interruptions, and infra firefighting versus building product. If it is a day a week per engineer, you have your answer. If it is two hours, you have a tooling problem, not a headcount problem.

### The signs that are real

A few triggers are genuine, not vanity. Deploys require a specific person to be awake, so releases stall when they are on vacation. Your staging environment no longer resembles production, so bugs only appear after you ship. You are adding your second or third production service and nobody owns how they talk to each other. Customers with contracts are starting to ask about uptime, and you have no honest answer. These are load-bearing problems. They cost you shipped features every week.

### The signs that are not

Then there are the false alarms. One bad outage does not justify a hire; it justifies a runbook and a backup check. A single scary deploy means you need a deploy script and a rollback button, not a salary. Wanting to look like a real engineering org is not a reason. Neither is a competitor who just posted a platform role. Hiring against anxiety gives you an expensive person maintaining infrastructure that a managed service would have run for a fraction of the cost.

## Buy defaults before you buy a person

Most early infrastructure pain is self-inflicted and cheaply solved. A managed platform, a hosted database, a container service, and a decent CI pipeline cover the first eighteen months of most startups. These are the automation platforms the DevOps guides quietly recommend before you hire: they let another product engineer contribute directly to the roadmap instead of babysitting servers.

Spend a week hardening the boring things first. One-command deploys with an obvious rollback. Staging that mirrors production closely enough to catch real bugs. Alerting that pages a human only when a customer is actually affected. Backups you have restored at least once, not backups you assume work. If those exist and your engineers are still drowning in toil, the hire is justified. If they do not exist yet, a new hire will spend their first quarter building them anyway, so you may as well learn what you actually need first.

When you do bring someone in, hire for judgment over tool trivia. The person who can tell you what not to build is worth more than the person who knows the newest orchestration flavor. A common early mistake is hiring a platform specialist who builds a beautiful internal platform for a team of six that did not need one. That is premature scaling wearing an ops hat.

If you are unsure whether your pain is a tooling gap or a headcount gap, that is exactly the call worth getting a second opinion on before you commit a salary. A short outside review of your deploy and reliability setup usually costs less than a month of the wrong hire. You can [book a call to talk through your infrastructure setup](/book-a-call) or start with a [free teardown of where your current stack is leaking time](/teardown).

## How this connects to your other timing calls

The DevOps question rarely arrives alone. It usually shows up next to the on-call question and the observability question, because they are the same underlying shift: your product now has users who notice when it breaks. If you are weighing whether to formalize a pager rotation, read [when your startup actually needs on-call](/post-when-do-you-need-on-call). If you cannot tell what is happening in production during an incident, the prior problem is visibility, covered in [when to pay for observability instead of flying blind](/post-flying-blind-in-prod-when-to-pay-for-observability). Solve those, and the DevOps hire either becomes obviously necessary or obviously early.

## FAQ

### Can a fractional CTO cover DevOps needs early on?
For setting the right defaults, yes. A fractional technical leader can choose your platform, stand up sane deploys and alerting, and tell you honestly when the toil has crossed the threshold that warrants a full-time specialist. What they will not do is sit on your pager forever, which is exactly why the trigger to hire is a sustained load, not a one-time setup.

### Should my first infrastructure hire be DevOps, SRE, or platform?
At under fifteen people, hire a generalist who can do all three and lean toward the reliability end if you have paying customers. Titles matter less than the person's instinct to automate the recurring pain and to resist building infrastructure you will not use for a year.

### What if we are fully on a managed platform already?
Then you may not need the hire at all yet. Managed platforms exist precisely to defer this role. Revisit the question when your bill, your service count, or your customer commitments outgrow what the platform handles for you, and measure the toil before you conclude the platform is the limit.

### How much operational toil is normal?
Some is unavoidable; zero is not the target. The rough line most teams use is 30 percent of engineering time. Below that, invest in tooling and let product engineers absorb it. Consistently above it, and you are paying for a specialist in lost roadmap whether you hire one or not.
