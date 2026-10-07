---
title: AWS Proton shuts down today. Is your stack on a niche service?
slug: cloud-provider-retires-service
date: '2026-10-07T02:45:58.062Z'
category: Decisions
excerpt: >-
  AWS ends Proton support on 7 October 2026. Cloud providers retire services
  too. What founders should check this week.
description: >-
  AWS Proton support ends 7 Oct 2026. Why cloud services get retired, and a
  four-step check so a retirement never stops your team shipping.
author: The founder of Fraction
readTime: 6
draft: false
---

Today, 7 October 2026, AWS ends support for AWS Proton, its managed service for platform teams to publish infrastructure templates and deployment pipelines that developers could self-serve. Infrastructure already deployed through it keeps running. The console, the Proton resources, and the pipelines that managed them do not.

Short answer for founders: your cloud provider can retire a managed service just like any smaller vendor can, usually with about a year of notice. The risk is not the outage, it is the part of your delivery process nobody remembers depends on that service. Keep a one-page list of every cloud service you use, prefer widely used building blocks for anything critical, and make sure you can rebuild your infrastructure from code you own.

## What actually happened with Proton

The timeline is a useful template for how these retirements tend to run. According to AWS's own deprecation guide, new customers could not sign up after 7 October 2025. Existing customers kept full use, with security patches and support, for one more year. From 7 October 2026 the console and Proton resources are gone. AWS's guidance is that deployed CloudFormation stacks and the resources they manage stay intact, and it points teams to CloudFormation Git Sync as an alternative way to let developers deploy from templates in a git repository.

Two details matter for anyone building on a cloud platform.

First, the running infrastructure survives, but the way you change it does not. A team that still relied on Proton pipelines this morning can see its servers running and still be unable to ship a change through the path it used yesterday.

Second, the warning came a year early, and a year is plenty of time if somebody reads it. It is not enough if the person who set the service up has left and nobody else knows it is in the path.

Proton is not unusual. All the large clouds publish deprecation notices for services and features from time to time. Retiring smaller, less used services is a normal part of how big providers manage their catalogues. It is not a sign of a provider in trouble.

## Why this is a startup problem, not just an enterprise one

Founders often assume "it is AWS" or "it is Google" means permanent. The core services almost certainly are. Compute, object storage, managed databases, and queues have huge customer bases and long lives. The risk sits in the long tail: the niche managed service that solved a specific problem neatly when an engineer or agency picked it three years ago.

In early-stage companies I see the same pattern repeatedly:

- An agency or early contractor chose a convenient managed service for deploys, builds, or environments.
- It worked, so nobody touched it.
- That person left. The service now sits in the critical path with nobody who understands it.
- The deprecation email went to an address nobody reads, often the agency's or a former employee's.

This is the same failure as [the server nobody can rebuild](/post-server-nobody-can-rebuild), with a deadline attached. And it shows up in diligence: investors increasingly ask about [vendor concentration](/post-vendor-concentration-diligence) and whether the team could rebuild its environment from scratch.

## What to do this week

### 1. List every cloud service you use

Not just the big ones. Pull the billing breakdown by service for the last three months; it lists everything you pay for, including the small line items that hint at forgotten services. For each, write one line: what it does for us, who owns it, and what breaks if it disappears.

Most early-stage companies end up with ten to thirty lines. Doing this takes an hour or two and is worth repeating every six months.

### 2. Mark anything niche in a critical path

For each service, ask two questions. Is it in the path of deploying, running, or recovering the product? Is it a widely used core service, or something with a small user base? Anything that is both critical and niche goes on a short watch list.

Deployment and pipeline tooling deserves special attention, because it is exactly what Proton was. When it goes, the product keeps running and the team loses the ability to change it safely.

### 3. Route the deprecation notices to a person

Check which email addresses receive your cloud account notifications and health alerts. Make sure at least one is a real person on the current team, ideally a shared engineering inbox that more than one person reads. On AWS, the Health Dashboard shows notices about services affecting your account; somebody should actually look at it.

### 4. Make sure your infrastructure is described in code you own

The strongest protection against any service retirement is infrastructure as code in your own repository. If your environment is defined in Terraform, CloudFormation, Pulumi, or similar, then replacing one managed service is a contained change. If it was built by clicking through consoles, every retirement becomes an archaeology project.

## How to choose services so this hurts less next time

None of this means avoiding managed services. Managed services are usually the right call for a small team; we make that case in [self-host or managed](/post-self-host-or-managed). The aim is to pick them with an exit in mind.

A few rules of thumb I use with founders:

- **Prefer boring for critical paths.** For anything that deploys, runs, or recovers the product, favour services with large user bases and long track records. Save the novel service for places where losing it is an inconvenience, not an outage.
- **Ask what it would take to leave.** Before adopting a service, write down in two sentences how you would replace it. If you cannot, that is a dependency worth discussing as a team.
- **Keep wrappers thin.** You do not need an abstraction layer over every cloud service, which brings its own costs (see [the case against over-wrapping vendors](/post-vendor-abstraction-layer)). You do need the knowledge of which services you use and how they connect.
- **Read the notices you get.** The year of warning only helps if someone reads it in month one, not month eleven.

## How this connects to the other vendor risks

This is one of several ways dependencies change under you. A platform can close free access, as Reddit is doing with its public API and RSS; we covered that in [when a platform closes the free API you depend on](/post-platform-closing-free-api). An AI provider can retire the model your product is tuned for. A critical vendor can be acquired. The response is the same each time: know what you depend on, know who owns it, and know your way out before you need it.

If you inherited infrastructure from an agency or early contractor and are not sure what it depends on, mapping it is part of what we do in a [technical teardown](/teardown). If you want to talk through a specific migration, [book a call](/book-a-call).

## FAQ

### Does AWS Proton ending support take down my running application?

According to AWS's deprecation guide, deployed CloudFormation stacks and the resources they manage remain intact. What goes away is the Proton console, Proton resources, and its delivery pipelines, so you lose the Proton way of changing that infrastructure, not the infrastructure itself. Check the guide for your specific setup.

### How much notice do cloud providers usually give?

It varies by provider and service. Proton had a year between closing to new customers and ending support. Do not rely on any particular length; route notices to a real person so you see them on day one.

### Should we avoid managed services to be safe?

No. For a small team, managed services are usually cheaper than running the same thing yourself. Prefer widely used services for critical paths, and keep your infrastructure defined in code so any single service can be replaced.

### How often should we review our cloud dependencies?

Every six months is a reasonable rhythm for an early-stage company, plus whenever an engineer who set up infrastructure leaves. It is a short exercise once the first list exists.
