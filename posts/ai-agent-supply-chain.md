---
title: Your AI coding agent is choosing your supply chain
slug: ai-agent-supply-chain
date: '2026-07-20T00:00:00.000Z'
category: Pattern recognition
excerpt: >-
  An AI coding agent does not just write your code. It picks your dependencies,
  and it skips the check a careful engineer would run. Here is the risk, and the
  fix.
description: >-
  Your AI coding agent installs packages nobody vetted. How the supply-chain
  risk happens, and what a non-technical founder can do about it.
author: The founder of Fraction
readTime: 7
draft: false
---

If an AI coding agent is building your product, it is not just writing your code. It is choosing your supply chain: every open-source package it pulls in on your behalf, without the sanity check a careful engineer would run first. The risk that matters here is not the code the agent writes. It is the code the agent imports from a stranger, because a single unvetted package can drop a credential stealer straight into an environment that holds your keys. The fix is not to stop the agent from adding dependencies. It is to make adding one a decision a human still owns.

I get called in after the product is already running, when a founder wants a second read on something an agent shipped weeks ago. One of the first things I look at is the dependency list, and the honest answer to "who chose these?" is almost always "nobody." The agent needed something, typed install, and moved on. That is fine right up until it is not.

## What choosing your supply chain actually means

Most modern software is other people's code. Your product might be a thin layer of your own logic sitting on top of dozens, then hundreds, of open-source packages that handle the boring parts: parsing dates, talking to a database, sending an email. That has been true for years, and it is not the problem. The problem is who decides which stranger's code lands in your product, and how carefully.

When a person builds the app, that decision has a small amount of friction baked in. A developer pauses before adding a package, even for a second, and asks the obvious questions: is this real, is it popular, is it still maintained, is it the one I actually meant. An AI agent removes that friction on purpose. It needs a package, it installs it, and it does that several times in a single session while you watch a progress log scroll by. Speed is the whole point of the tool, and the pause is the first thing it optimizes away.

So two quiet checks a human used to do get skipped. The agent does not stop to confirm the package is the one it meant. And it does not stop to ask whether that package should be allowed to run with the keys sitting in the room.

## The two ways this goes wrong

### The package that never existed

An AI model will, with total confidence, reference a package that sounds exactly right and does not exist. It mashes together two real names, or invents a plausible one, and writes an import line as if it were fact. On its own that just breaks the build, which you would catch.

The dangerous version is what happens next. The same models tend to hallucinate the same plausible names over and over, so someone can register one of those invented names first, put real-looking code behind it, and wait. Now the agent's confident mistake resolves to a real package, the install succeeds, and a small script that runs automatically on install quietly reads whatever secrets are in the environment and mails them out. Nobody typed a wrong name. The agent guessed a name, and a stranger had already made the guess come true.

### The real package that turned

The second path uses a genuine, widely trusted dependency, one your product already relies on, that gets hijacked or poisoned for a short window. An attacker gets into a popular package and pushes a version with an extra payload buried in it. For a few hours, before maintainers notice and pull it, the newest version is the malicious one.

A human on a normal week probably would not upgrade during that window. An agent installing fresh grabs the latest version because latest is the default, and the default just happened to be the bad one. The package was real, well known, and something you would have approved. The timing is what got you.

## Why the agent makes this worse, not better

You might assume an automated tool is more careful than a tired founder. In this specific way it is less careful, for two reasons.

First, an agent runs with more power than a human coding session usually does. To actually ship, it holds cloud tokens, database connection strings, and deploy keys, all sitting in its environment. A malicious install script in a developer's laptop is bad. The same script in an environment wired to your production keys is a much larger blast radius. This is the same reason it is worth being deliberate about [what credentials your agents are allowed to hold in the first place](/post-ai-agent-access-scope).

Second, the only clean defense, approving every install by hand, defeats the speed you bought the agent for. Agents run dozens of installs a session. Ask a founder to click approve on each one and they will turn approvals off by the end of the first day. So the honest default most teams drift into is to approve nothing and hope, which is exactly the gap an attacker is counting on.

## What a non-technical founder can actually do

You do not need to read the code to close most of this gap. You need to put a small amount of the missing friction back, in the few places it matters.

Make a new dependency a decision someone signs off on. The agent can propose a package; a person confirms it is real, widely used, actively maintained, and the one that was meant, before it becomes permanent. You are not reviewing every line. You are answering "should this stranger's code be in our product," which is a business question, not a technical one.

Keep the agent's environment boring. The credentials it holds should be the minimum it needs to do the job in front of it, not your full production keyring. If a bad install runs, you want it to find as little as possible worth stealing.

Do not auto-upgrade blindly. Lock the versions your product uses so a fresh install pulls the exact package you already vetted, not whatever shipped in the last hour. Upgrading is a thing you choose to do, on a day you are watching, not a thing that happens by default.

Keep a plain list of what is actually in your product. Not a formal document, just an honest inventory of the packages you depend on and, ideally, why. The point is that "what are we running and who chose it" has an answer you can produce in an afternoon, instead of a shrug.

And treat "the agent added a package" as a change worth noticing, the same way you would notice it adding a feature. A new dependency is a new supplier. You would not let a new vendor into your company without anyone deciding. This is the same event, wearing a smaller costume.

## What this costs you later

None of this shows up while things are working. It shows up at the two moments that matter most. The first is an incident: keys leak, and you spend a bad week trying to reconstruct which package could have taken them and when it got in, from records nobody kept. The second is a raise or an enterprise sale, when someone technical asks what is in your product and who decided it, and an unowned supply chain reads as an unowned product. It sits right next to [the security holes hiding in AI-written code](/post-ai-code-security-holes) and [the integration sprawl that nobody actually chose](/post-integration-sprawl) as the kind of quiet risk that a careful buyer or investor is specifically trained to find.

The speed of an agent building your product is real, and worth having. The mistake is assuming speed came free. It moved a decision you used to make, one package at a time, into a place where nobody is standing. Put one person back at that spot and most of this risk goes away.

If an agent has been building your product and you have never looked at what it pulled in, that is worth a look before it becomes an incident or a diligence finding. It is one of the things founders bring me in for. If you want a second set of eyes on what your agent shipped, [book a call](/book-a-call), or start with a [teardown of what you already have](/teardown).

## FAQ

### Should I stop my agent from installing packages on its own?
No, and you probably cannot without crippling the tool. The goal is not to block installs; it is to make a new, previously-unseen dependency something a person confirms before it becomes permanent, while letting the agent freely reuse packages you have already approved. Friction on the first appearance of a package, not on every install.

### How is this different from a normal dependency vulnerability?
A normal vulnerability is a flaw in a package you deliberately chose. This is about the choosing itself being automated and unwatched: a package you never decided to trust, added by a tool moving faster than anyone can review, sometimes a package that only exists because an attacker guessed the agent would ask for it. The bug is upstream of the code, in who picked it.

### Do I need special security tooling to handle this?
Eventually, tooling that scans your dependencies helps, and it is cheap insurance once you have a product worth protecting. But the first and most valuable fix is not a tool. It is a rule: new dependencies get a human yes, the agent runs with limited keys, and versions are locked. A founder can put all three in place this week without buying anything.
