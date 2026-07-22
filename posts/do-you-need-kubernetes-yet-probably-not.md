---
title: Do you need Kubernetes yet? Probably not
slug: do-you-need-kubernetes-yet-probably-not
date: '2026-07-22T11:58:07.909Z'
category: Decisions
excerpt: >-
  Most early teams adopt Kubernetes for a scaling problem they do not have. The
  signals that mean you actually need it, and what to run first.
description: >-
  Do you need Kubernetes yet? The signals that mean you actually need it, and
  cheaper container options to run first.
author: The founder of Fraction
readTime: 4
draft: false
---

"The team wants to move to Kubernetes." I hear this from founders who have three services, four engineers, and no scaling problem anyone can name. The request almost never traces back to a bottleneck in the product. It traces back to an engineer who wants Kubernetes on their resume, or a conference talk that made it sound like the professional default. Neither is a reason to spend a quarter learning to operate a distributed system you do not need.

Here is the pattern I see across early-stage teams, and the questions I ask before I sign off on the migration.

## The cost is operational, not the cluster

Founders price Kubernetes as a line item. They look at a managed control plane, see something like 70 dollars a month, and decide it is cheap. That number is a rounding error next to the real bill, which is paid in engineering hours and in production incidents caused by a stack nobody on the team has run before.

A case I watched closely this year: an eight-engineer SaaS company moved to a managed Kubernetes service. Their monthly infrastructure cost went from 153 dollars to 783 dollars almost overnight, because the cluster demanded always-on nodes, load balancers, and observability they did not have before. Four months later they migrated back to a plain container service and the bill dropped to 168 dollars. The cash was not the worst part. The worst part was the two engineers who spent those four months debugging networking and ingress instead of shipping product.

Kubernetes is a solution to a coordination problem: many services, many teams, independent deploy and scale cycles. If you do not have that problem, you are buying the cure for a disease you have not caught.

## The questions I ask before signing off

### Do you have a scaling problem, or a resume problem?

If you cannot point at a specific bottleneck a container orchestrator would remove, the answer is no. "We might need it later" is not a bottleneck. Wanting to learn Kubernetes is legitimate, but it is professional development, not infrastructure strategy, and it should not run on your production critical path.

### How many services actually need independent scaling?

Kubernetes starts to pay for itself around five or more services that talk to each other and need to scale on separate curves. Below that, service discovery and horizontal autoscaling are features you will barely touch. Most teams I see have a web app, a worker, and a database. That is a Dockerfile and a deploy script, not a cluster.

### Who operates it at 2am?

A managed control plane does not manage your workloads. Someone still owns upgrades, node pools, resource limits, and the pager when a pod crash-loops. If that someone is your only senior engineer, Kubernetes has just made your most expensive person your infrastructure operator. That is rarely the trade you want this early. The same reasoning shows up whenever you weigh running something yourself against paying someone else to run it.

## What to run instead

For almost every startup under roughly 30 engineers on a single cloud, the boring path wins. Your cloud provider's native container service gives you most of what you need with a fraction of the operational surface: managed deploys, health checks, and autoscaling without a control plane to babysit. Serverless container platforms are even simpler and scale to zero when traffic is quiet, which matters when your usage is spiky and small.

The rule of thumb I use: if you can articulate, in one sentence, the concrete problem Kubernetes solves for your team this quarter, consider it. If you cannot, run a container on managed infrastructure and revisit the question when you actually feel the pain. Adopting heavyweight infrastructure before you need it is the same mistake as [scaling anything else too early](/post-premature-scaling).

## When Kubernetes earns its place

There are real triggers. You are deploying the same software into a customer's own cloud account, and they expect a standard artifact. You have grown past a handful of engineers and teams are stepping on each other's deploys. You genuinely run many services with different scaling profiles and the manual glue has become its own full-time job. When one of those is true, the complexity buys you something. Adopt it deliberately, with someone who has operated it before, not as a default you drifted into.

The goal is not to avoid Kubernetes forever. The goal is to reach for it when the problem it solves is the problem you actually have.

## FAQ

### Isn't Kubernetes the industry standard now?

It is the standard for organizations with the coordination problem it solves. Standard does not mean mandatory. Plenty of profitable companies run tens of thousands of requests a second on managed container services and have never touched a cluster.

### We are deploying into a customer's cloud. Does that change the answer?

Yes. Shipping software into environments you do not control is one of the clearest legitimate reasons to standardize on Kubernetes, because your customers may already run it and expect a portable artifact. That is a business requirement, not a resume line, and it is worth the operational cost.

### What about future-proofing?

Future-proofing infrastructure you do not need yet usually means paying today for flexibility you cannot use. Containers are already portable. If you build on a Dockerfile, moving to Kubernetes later is a migration you can do in weeks, once the need is real, with far more information than you have now. If you want a second opinion on where your infrastructure spend should actually go, [book a technical call](/book-a-call) and we can look at it together. And if the pressure is coming from a cloud vendor pushing a commitment, read the note on [whether to sign a cloud commit](/post-cloud-commitment-decision) first.
