---
title: 'Should you build your own login, or just buy it?'
slug: build-your-own-auth
date: '2026-07-01T11:58:10.231Z'
category: Decisions
excerpt: >-
  Almost every early team that rolls its own authentication regrets it by year
  two. Here is the short list of reasons to build, and the much longer list of
  reasons to buy.
description: >-
  When building your own authentication is worth it, when to buy it, and the
  hidden maintenance costs founders reliably underestimate.
author: The founder of Fraction
readTime: 5
draft: false
---

Every few months a founder tells me they are building their own login because it is "just an email and a password, how hard can it be." Then I ask what happens when a user forgets that password, when a bot tries the same one ten thousand times an hour, when a customer wants their whole team on one account, and when an enterprise buyer asks for a log of every login for the past year. The honest answer in 2026 is that authentication is not a feature you build once. It is a system you maintain forever, and the maintenance is the expensive part.

This is a build-vs-buy decision, and it is one of the few where the industry default has genuinely flipped. Ten years ago, rolling your own auth was normal. Today the burden of proof sits on the team that wants to build, not the team that wants to buy.

## What building auth actually costs

Founders estimate the part they can see and ignore the part that bills them for years.

### The visible part is maybe a tenth of the work

Signup, login, logout. A weekend, and it demos fine. The other nine tenths is password reset, email verification, rate limiting and abuse prevention, session and token management, account recovery when someone loses their phone, multi-device support, and the security patching that never stops. One widely cited estimate put full in-house passkey integration for a large platform at roughly 27 person-months: about fourteen months of development, eight of QA, and five of product work. You are not building a login box. You are quietly committing to staff a small permanent team.

### Security is a bill that never closes

Payment and identity code is where an attacker gets paid, so it is where the attention goes. Every framework update, every newly disclosed vulnerability, every change to how browsers handle cookies is now your problem, forever. Buy the same capability and that entire treadmill belongs to a vendor whose only product is staying ahead of it. Building means you inherit a security obligation that grows while your attention is needed on the actual product.

### The migrations you cannot see from here

The identity model you pick in week two hardens fast. Retrofitting team accounts, single sign-on for one enterprise customer, or an organization layer on top of a schema that assumed one person per account is one of the ugliest projects in software. It touches billing, permissions, and every security check you have. This is a textbook example of the kind of choice covered in [the early decisions you cannot cheaply undo](/post-reversible-decisions): cheap to get right now, brutal to change at scale.

## When buying is obviously the right call

For most startups the answer is buy, and the reasons are boring in the best way.

### You are not in the identity business

If auth is a means to your product rather than the product itself, every hour you spend on it is an hour stolen from the thing customers actually pay for. The market matured, the standards stabilized, and vendor pricing dropped far enough that the old "it is cheaper to build" argument rarely survives contact with a spreadsheet.

### Compliance arrives in the box

For anything touching regulated data, a mature auth provider hands you audit logs, session controls, and evidence collection as defaults rather than as a project. Reproducing that in-house is months of work that produces zero customer-visible value.

## The narrow cases where building makes sense

Building is defensible, occasionally. The bar is just far higher than founders assume.

### You have a requirement no vendor meets

A genuinely unusual cryptographic, federation, or data-residency requirement that every commercial platform fails can justify building. Note the word genuinely. "We might want something custom later" is not a requirement; it is anxiety.

### Auth is the product, or you already staff for it

If identity is what you sell, or you already run three to five dedicated security engineers, you have the standing to build and maintain it properly. Most seed-stage teams have neither, and pretending otherwise is how you end up maintaining a security-critical system with nobody who owns it.

## How to decide in an afternoon

You do not need a committee. You need two honest numbers.

### Write down what you will actually need in 24 months

Not what you need to demo next week. Teams, roles, SSO, audit logs, multi-region. Price the build against that list, including the maintenance tail, not just the first login screen. When founders do this exercise honestly, the build column balloons and the decision makes itself. If you want a second set of eyes on which requirements are real versus imagined, that sorting is exactly the kind of thing worth a short [call before you commit](/book-a-call).

### Default to buy, make build earn it

Treat buy as the default and force the build case to prove itself against the full cost, not the weekend version. This is the same discipline that runs through every [build, buy, or wait decision](/post-build-buy): the cheap-looking option is usually the one whose true cost shows up eighteen months later.

## FAQ

### Isn't a third-party auth provider a lock-in risk?
It is a real risk, and worth weighing, but compare it honestly against the alternative. Building your own is also lock-in; you are just locked into a system your own team has to maintain forever, with no vendor to call at 2am. Pick a provider with clean export and standard protocols, and the switching cost stays manageable.

### Can't I just use the auth built into my web framework?
Often, yes, and for a solo project that is fine. The trouble starts at the edges the framework does not cover: SSO, org hierarchies, enterprise audit requirements, abuse handling at scale. Framework auth is a reasonable start; just know which door you are walking through before a customer forces the upgrade.

### We already rolled our own. Should we rip it out?
Not reflexively. If it works and nobody is asking for SSO or team accounts, leave it and isolate it. The moment you face a migration you cannot cleanly do, or a security incident you cannot cover, that is the signal to move to a provider, and it is worth scoping that move deliberately rather than in a panic.
