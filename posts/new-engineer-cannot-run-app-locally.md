---
title: A new engineer needs a week to run your app. That is a smell
slug: new-engineer-cannot-run-app-locally
date: '2026-11-10T02:45:12.656Z'
category: Pattern recognition
excerpt: >-
  A slow local setup is not an onboarding problem. It points at hidden
  dependencies, gated access and recovery risk.
description: >-
  Why a slow local setup signals hidden risk, what good looks like at startup
  scale, and the first-day test that keeps setup working.
author: The founder of Fraction
readTime: 6
draft: false
---

If a new engineer needs more than a day or two to get your app running on their own laptop, that delay is not an onboarding problem. It is a symptom. The setup steps live in someone's head, the app depends on things nobody wrote down, and the same gaps that slow a new hire will slow a rebuild, an outage recovery, and a diligence review. The fix is cheap: make one command (or one short page) take a clean laptop to a running app, and test it on every new hire.

I see this pattern in most early-stage codebases I review. The founder thinks the new engineer is slow. The new engineer thinks the codebase is a mess. Both are partly right, and neither is talking about the real issue.

## What the slow setup is actually telling you

When a capable engineer spends four days trying to boot your product, the time goes into a few predictable places. Each one points at a different risk.

### Hidden dependencies nobody listed

The app quietly needs a specific database version, a message queue, a background worker, a local copy of some third-party service, or a particular version of the language runtime. The person who set it up two years ago installed those once and forgot. Nothing in the repository says they exist.

This is the same problem as the [server nobody on your team knows how to rebuild](/post-server-nobody-can-rebuild), just on a laptop instead of in production. If nobody can list what the app needs to run locally, there is a good chance nobody can list what it needs to run in the cloud either.

### Secrets and access that only one person can grant

The new engineer cannot start because they need API keys, a copy of an environment file, access to a cloud account, or credentials for a payment sandbox. Those live in one person's password manager or, worse, in a message thread from 2024. Every request waits for that person to be free.

This is a small version of key-person risk. If one engineer is the gate for every new laptop, they are also the gate for every incident. Diligence teams notice this, and it is worth reading [what investors call key-person risk](/post-one-engineer-key-person-risk) before they do.

### Seed data that does not exist

The app boots, but every page is empty or crashes because it expects real records. The team has been developing against a copy of production data, which is its own problem: customer data on developer laptops is a privacy and security exposure most small teams underestimate.

### Steps that exist only as tribal knowledge

"Oh, you have to run the migration twice." "Comment out that line until the queue is up." "Ask Priya, she has the script." Each of these is a small undocumented fix that someone discovered once. Together they are the difference between a one-hour setup and a one-week setup.

## Why this matters more than a lost week

A slow setup looks like a one-time cost per hire. In a startup hiring three engineers a year, that is a few weeks of salary, which is annoying but survivable. The real cost is elsewhere.

- **Recovery time.** The same undocumented steps are what you need when a laptop dies, an engineer leaves, or you have to stand the app up somewhere new. Slow local setup predicts slow disaster recovery.
- **Agency and contractor exits.** If an outside team built the product, a slow setup is often the first sign that the handover will be painful. You cannot judge a codebase you cannot run.
- **Diligence.** Technical reviewers often ask a simple question: can a new engineer run this today? A "no" tells them more about engineering maturity than any architecture diagram.
- **Quiet quality loss.** When setup is painful, engineers stop running the full app locally. They test against shared staging instead, step on each other, and ship changes they never saw working end to end.

## What good looks like, at startup scale

You do not need a platform team or an internal developer portal. You need a short, boring target. Here is the one I set for early-stage teams:

1. **A clean laptop to a running app in under a day.** Ideally under an hour. Practitioner guidance commonly treats more than two days as a red flag.
2. **One entry point.** A single setup script, a container setup, or a development container definition. Which tool you pick matters much less than having exactly one documented path.
3. **A short README that a stranger can follow.** Prerequisites, the one command, how to log in locally, and the three most common errors with their fixes.
4. **Fake seed data.** A script that creates a few realistic test accounts and records, so nobody needs production data to work.
5. **Secrets from a shared vault, not from a person.** A team password manager or secrets store with a documented "request access" step.

None of this is advanced. Most teams can get there in two to five engineering days, and the work pays for itself the first time someone new joins or something breaks.

## The test that keeps it honest

Documentation rots. The way to keep setup working is to make every new person the test.

On their first day, the new engineer follows the README exactly, without asking anyone for help for the first few hours. Every place they get stuck, they fix the README or the script and include that fix in their first pull request. If a step needs a person, it gets written down or automated.

This does two things. It turns the most annoying part of onboarding into a useful first contribution. And it gives you, the founder, a cheap health metric: how many hours did it take this time compared with last time?

If you are non-technical, you can ask exactly that question at the end of a new hire's first week: "How long did it take you to run the app, and what did you fix along the way?" A vague answer is a signal worth following up.

## When it is a bigger problem than a README

Sometimes the slow setup is the visible tip of something structural. Signs that it is more than missing documentation:

- The app cannot run locally at all, only on a shared server.
- Different engineers have different, incompatible ways of running it.
- Setup requires production credentials.
- The engineer who knows how to run it is the only one who has ever done it.

In those cases the problem is less about onboarding and more about whether the system is understood and reproducible. That is the kind of thing a short outside review can size quickly. Our [technical teardown](/teardown) starts with exactly this test: can someone with no context get it running, and what breaks on the way.

## FAQ

### How long should local setup take for a new engineer?

For a typical early-stage web product, a few hours is achievable and under a day is a reasonable target. More than two days usually means hidden dependencies, missing seed data, or access that only one person can grant. Treat this as a rule of thumb, not an industry standard.

### Do we need Docker or dev containers to fix this?

No. Containers help when the app depends on several services, but a clear script and a short README can be enough for a simple stack. Pick one documented path and keep it working.

### Is it fine for engineers to use a copy of production data locally?

It is common and it is risky. Production data on laptops is customer data outside your controls. Fake seed data that covers the main cases is safer and usually good enough for daily work.

### I am a non-technical founder. How do I check this?

Ask each new engineer how long it took to get the app running and what they had to fix. If the answer is "most of the week" or "I had to ask the same person for everything," budget a few days to fix setup before hiring the next person. If you want a second opinion on what you find, [book a call](/book-a-call) and we will walk through it.
