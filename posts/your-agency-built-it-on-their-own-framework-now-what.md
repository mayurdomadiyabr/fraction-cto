---
title: Your agency built it on their own framework. Now what?
slug: your-agency-built-it-on-their-own-framework-now-what
date: '2026-08-21T04:12:03.354Z'
category: Vendors
excerpt: >-
  You can own every line of code an agency wrote and still be unable to run the
  product without them. How proprietary-framework lock-in happens and how to
  catch it early.
description: >-
  Owning the code is not the same as being able to run it. How agency
  proprietary frameworks create lock-in, and what to require before you sign.
author: The founder of Fraction
readTime: 6
draft: false
---

You own the code. You have the repository, the commit history, every file the agency wrote for you. Then you hire a developer to make a small change, they open the project, and a few hours later they tell you the login system, the admin panel, and half the data layer come from a package called something like `@agency/core` that you do not have the source for. You own your code. You do not own the thing your code sits on top of.

This is the quieter version of the ownership problem, and it is the one that actually strands founders. The legal question of [who owns the code](/post-who-owns-your-code) gets the attention, and it matters. But an IP assignment clause does not help you if the running software depends on a proprietary framework that only the agency can maintain. You can hold copyright on every line they typed for you and still be unable to deploy, change, or hire around the product without going back to them.

## How the lock-in actually happens

No agency sells you lock-in on the tin. It arrives as a reasonable-sounding efficiency. An agency that has built forty products has, sensibly, extracted the parts it rebuilds every time into a shared internal toolkit: authentication, role-based permissions, an admin scaffold, a deployment pipeline, a set of UI components. Reusing that toolkit is why they can quote you twelve weeks instead of twenty. It is a genuine cost saving, and early on it is one of the reasons an agency is cheaper than starting from scratch.

The problem is what that toolkit is made of and who is allowed to hold it. There are two flavors, and they behave very differently.

The benign flavor is a thin layer of glue on top of open, standard tools: your app is a normal React or Django or Rails project, and the agency's contribution is some configuration and a handful of helper libraries whose source ships inside your repository. Any competent developer can read it, and if you never speak to the agency again the product keeps running. This is fine. This is what good reuse looks like.

The trapping flavor is a framework the agency treats as its own product. The source lives in a private package registry you do not control. The documentation is internal. The only people who understand the abstractions are the people who built them. Your application is not really a Rails app that happens to use some helpers; it is an app written in the agency's dialect, and that dialect is only spoken in one building.

## The tells, before and after you sign

You can usually see this coming if you know where to look. Before you sign, ask a blunt question: when this is done, can any competent developer I hire clone the repo, run one documented setup command, and have the whole thing running locally with no access to your systems? A confident yes, in writing, is the answer you want. Hedging, or a yes that quietly depends on their package server or their build service, is the tell.

Ask what open-source frameworks the product is built on by name. If the honest answer is a well-known stack, good. If the answer is the name of something only the agency ships, ask to see its license and its source, and ask what happens to your access to both if the relationship ends.

After delivery, the test is mechanical. Have someone who was not on the build clone the repository onto a clean machine and try to run it using only what is in the repo and the written instructions. Every external thing they have to request, every private credential they need, every package that will not install without the agency's registry is a thread that still ties you to the vendor. This is the same clone-and-run test that belongs in any real [agency handoff plan](/post-agency-handoff-plan), and it is the one most founders skip until the day they need it.

## What to require instead

You do not have to ban reuse. You want the agency's efficiency; you just want it in a form you can keep. Three requirements get you most of the way.

First, source escrow or outright inclusion. Any framework, library, or component the product depends on must either ship its full source inside your repository or be a public open-source project. Nothing your app needs to run should live only on infrastructure the agency controls. If they insist on keeping a shared library private, that library cannot be load-bearing for your product.

Second, a perpetual, irrevocable license to whatever proprietary pieces remain, in writing, that survives the end of the engagement. Owning your code is not enough if the code calls into something you are only licensed to use while you keep paying them.

Third, a runbook and the clone-and-run test as an acceptance criterion, not a favor. The deliverable is not just working software; it is working software a stranger can stand up from the repository alone. Make that part of what you are paying for, and check it before the final invoice clears rather than after.

The cost of getting this wrong is not abstract. Rebuilding an authentication and permissions layer that you thought you owned is commonly weeks of a senior engineer's time, and it lands exactly when you can least afford it, usually because the agency raised its rate or went quiet and you finally decided to bring the work in-house. Spending an hour on these questions before you sign is the cheapest insurance you will buy on the whole engagement.

## When to get a second opinion

If you cannot read code yourself, the framework question is genuinely hard to police, because the reassuring answers and the trapping answers sound identical to a non-technical ear. This is a good place to spend an hour of senior technical judgment before you commit six figures of build budget. A short [technical teardown](/teardown) of the proposed stack, or a review of the contract's IP and dependency terms, catches the load-bearing proprietary framework while it is still a clause you can negotiate rather than a rebuild you have to fund.

## FAQ

### Is it bad for an agency to reuse its own code across clients?

No, reuse is normal and it is part of why agencies are cost-effective. What matters is whether the reused pieces ship as source you own or license perpetually, versus living only on the agency's private infrastructure. Reuse you can keep is fine; reuse you can only rent is the trap.

### I already have this problem. What do I do?

Start by mapping exactly which parts of the running product depend on the agency's proprietary framework, because it is often less than it feels like. Negotiate a perpetual license and a source handoff for those specific pieces while the relationship is still functional. Replacing them is possible but it is real engineering work, so scope it deliberately rather than in a panic.

### How is this different from owning the code?

Owning the code is a legal question about copyright and IP assignment. Being able to run the code is a practical question about dependencies, licenses, and access. You can win the first and lose the second, which is why both belong in the contract, not just the one everyone remembers to ask about.

### Does this apply to no-code and low-code builds too?

Yes, and often more severely, because the platform itself is the proprietary framework. If an agency builds you a product on a low-code tool, the lock-in is the tool, and leaving it usually means a rebuild rather than a migration. Weigh that against the speed you are buying before you commit.
