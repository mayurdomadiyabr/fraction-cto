---
title: The server nobody on your team knows how to rebuild
slug: server-nobody-can-rebuild
date: '2026-09-29T14:27:19.564Z'
category: Pattern recognition
excerpt: >-
  A hand-built server that only works as long as nobody touches it. Why it
  happens, what it costs, and a one-week plan to make it rebuildable.
description: >-
  Why hand-configured servers become a startup risk for recovery, upgrades and
  diligence, and a one-week plan a small team can use to fix it.
author: The founder of Fraction
readTime: 7
draft: false
---

There is a server in a lot of seed-stage companies that everyone is slightly afraid of. It was set up by hand two years ago, usually by the first engineer or a contractor. It runs the app, or the background jobs, or the thing that sends invoices. Nobody has logged into it in months, and nobody wants to, because nobody is sure what is on it or what would break if they touched it.

If that machine died tonight, could your team build a working replacement by tomorrow? In most of the companies I review, the honest answer is no. Not because the team is weak, but because the knowledge of how that server was built never left the server. That is the pattern: infrastructure that exists only as its current state, with no written or scripted way to recreate it.

## How a normal server turns into a fragile one

Nobody sets out to build a fragile server. It happens through a series of reasonable decisions made under time pressure.

### It starts as the fastest path

Early on, the fastest way to get something live is to rent a virtual machine, SSH in, install what you need, and start the app. That is a fine call in week two. You have no users and speed matters more than repeatability.

### Then the small fixes pile up

Over the next year, the machine collects changes. Someone bumps a memory limit in a config file to stop a crash. Someone installs a system library a new feature needed. Someone adds a cron entry for a nightly export and a firewall rule for a partner's IP address. Each change takes five minutes and solves a real problem. None of them are written down anywhere except on the machine itself.

### Then the person who knew leaves

The first engineer moves on, or the contractor's engagement ends. Now the server is a black box that works. The team treats it with superstition: do not restart it on a weekday, do not upgrade the operating system, do not touch the cron jobs. It keeps running, which makes it easy to ignore, right up until the disk fills, the provider retires the instance type, or a security patch forces a reboot and the app does not come back.

## Why this is more expensive than it looks

The cost of a hand-built server is not the server. It is what the server does to every decision around it.

### Recovery is measured in days, not minutes

When a well-described machine fails, you create a new one from the description and restore data. When a hand-built machine fails, someone has to rediscover every package, setting, and scheduled task by trial and error, often while customers are waiting. I have watched a team spend most of three days rebuilding a box that ran a single nightly billing job, because the job depended on a specific version of a PDF library that had been installed by hand and never recorded. This is the same failure that sits behind a bad [disaster recovery answer in diligence](/post-disaster-recovery-diligence): the data might be backed up, but the thing that uses the data is not reproducible.

### Upgrades stop happening

If you cannot rebuild the machine, you cannot safely upgrade it, so you do not. The operating system falls out of support. The language runtime gets two major versions behind. Each skipped upgrade makes the next one bigger and scarier. This is how a company ends up running an end-of-life operating system in production without anyone deciding to.

### It becomes a person, not a system

Often one engineer is the only one who is comfortable touching the box. That turns an infrastructure problem into a [key-person risk](/post-key-person-codebase-risk). Their vacation becomes a risk window. Their resignation becomes an emergency.

### Diligence notices

A technical reviewer will ask how a new environment gets created and how long it takes. "We would have to figure it out" is not a fatal answer at seed, but it tells the investor that operational risk is being carried by memory. At Series A it reads as a gap in engineering maturity.

## What good enough looks like for a small team

You do not need a platform team, Kubernetes, or a multi-week infrastructure project. For a company with a handful of engineers, the bar is simple: a new person, using only what is in the repository and the password manager, can stand up a working copy of production. There are a few ways to get there, and the cheapest one that works is the right one.

### Option 1: move it onto a managed platform

For many early products, the best fix is to stop owning the server at all. If the app can run on a managed platform where you describe it in a config file, the platform becomes the recipe. This is the same trade-off I walk through in [self-host versus managed](/post-self-host-or-managed): you pay a little more per month and stop paying in fear and weekend incidents.

### Option 2: write the recipe as a script

If you need to keep your own machines, turn the setup into code. That can be a container definition plus a short provisioning script, or an infrastructure-as-code tool if your team already knows one. The point is not the tool. The point is that the recipe lives in version control, gets reviewed like code, and is the only way changes reach the server. Hand edits on the box become something you stop doing, not something you document afterwards.

### Option 3: at minimum, write it down honestly

If neither of those is possible this quarter, write a plain runbook: every package and version, every config file that was changed and why, every cron entry, every firewall rule, every secret the machine needs and where it lives. It is the weakest option because documents drift, but it turns a black box into a checklist.

## A one-week plan to defuse it

Here is the order I usually recommend, sized for a team that cannot stop shipping.

1. **Day 1: inventory.** List every machine you run, what it does, and who last touched it. Most teams find at least one they forgot.
2. **Day 2: capture the state.** On the fragile box, record installed packages, running services, scheduled jobs, open ports, environment variables, and edited config files. Commit that output to a private repo.
3. **Day 3: decide the target.** Managed platform, scripted server, or runbook. Pick the cheapest option that lets a new person rebuild it.
4. **Days 4 and 5: build the replacement next to the old one.** Do not fix the old box in place. Build a second one from the recipe and see what breaks. Every failure is a missing line in the recipe.
5. **Later: cut over and practice.** Move traffic, keep the old box for a week, then turn it off. Put a rebuild drill on the calendar every six months.

The replacement is not the real deliverable. The real deliverable is the proof that you can create the machine from nothing, because that proof is what lets you upgrade, recover, and hand the system to someone new.

## How to check where you stand in ten minutes

Ask your team three questions:

- If our main server disappeared right now, what are the exact steps to get a working one, and where are they written?
- When was the last time we built a server from scratch using those steps?
- Is there any machine that only one person is comfortable logging into?

If the answers are vague, you have found the pattern. It is cheap to fix while the company is small and gets harder every month, which is why it is one of the first things I check in a [technical teardown](/teardown). If you want a second opinion on which of your systems are carrying this risk, you can [book a call](/book-a-call).

## FAQ

### We are pre-product-market fit. Is this worth the time yet?

If the fragile machine runs something customers or revenue depend on, yes. If it runs an internal experiment you could lose without anyone noticing, it can wait. The test is the cost of a three-day outage, not the stage of the company.

### Do we need infrastructure-as-code tools like Terraform?

Not necessarily. A managed platform config, a container file, or a short script can all serve as the recipe. Use the tool your team already knows. A recipe nobody on the team can read is its own fragile server.

### Our hosting provider takes snapshots. Isn't that enough?

Snapshots help you roll back, but they copy the mess rather than explain it. You still cannot upgrade safely or move providers, and a snapshot of a misconfigured machine restores a misconfigured machine. Keep the snapshots and still write the recipe.

### How long should a rebuild take once this is fixed?

For a small product, getting a working environment should take well under a day, and ideally under an hour of hands-on work. If it takes longer, the recipe is still missing steps.
