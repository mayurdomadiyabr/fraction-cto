---
title: The secrets in your git history diligence will find
slug: secrets-in-git-history-diligence
date: '2026-07-11T16:48:51.317Z'
category: Fundraising
excerpt: >-
  You deleted the API key from your code. It is still in your git history, and a
  technical reviewer runs one command that surfaces it. Here is how to clean up
  before they look.
description: >-
  Committed secrets in git history are a common diligence red flag. How
  reviewers find them and how to remediate before a raise.
author: The founder of Fraction
readTime: 5
draft: false
---

Every founder has a version of this moment. Someone pastes an AWS key straight into the code to get a feature working, ships it, and later a teammate says "you should not commit secrets" and moves it to an environment variable. The key disappears from the current code. Everyone relaxes. The key is still sitting in your git history, one command away from anyone with read access to the repo.

During a raise, that anyone is a technical diligence reviewer. And checking for committed secrets is one of the first things they do, because it is cheap, automatic, and tells them something real about how the company operates.

## Why this is the check reviewers run first

A reviewer has limited time and wants high-signal checks. Scanning git history for secrets is close to free, they run a tool, it either finds credentials or it does not, and the result predicts other things.

A repo with live secrets in its history tells the reviewer three things at once. First, credentials may be compromised right now, which is a live security incident, not a hypothetical. Second, nobody set up basic guardrails, no pre-commit hook, no secret scanning in CI, which means this is a habit and not a one-off. Third, if the team missed something this visible, the reviewer starts wondering what else they missed that is harder to see. One finding becomes a lens on everything.

This is why committed secrets show up on nearly every diligence red-flag list. It is not that a leaked key is always catastrophic. It is that it is a reliable proxy for engineering hygiene, and hygiene is what diligence is really measuring. It sits right next to the other quiet killers I covered in [the technical diligence red flags that kill a round](/post-diligence-red-flags).

## What actually hides in there

The obvious ones are cloud provider keys, AWS and GCP and Azure credentials that can run up a bill or expose customer data. But the list is longer than founders expect.

Database connection strings with the password in the URL. Stripe and payment processor secret keys. OAuth client secrets. Private signing keys and .pem files someone committed "just to test." Full .env files that got added before .gitignore caught them. Third-party API tokens for email, SMS, and analytics. Internal service credentials. Each one is both a security exposure and a signal.

The trap is that deleting the file does not delete the history. If a secret was ever committed, git log and git show can recover it from any prior commit, and so can any tool built to look. A public repo makes this trivial for anyone. A private repo just narrows the audience to people you are about to hand read access to, which during diligence is precisely the wrong audience.

## How to clean up before anyone looks

Do this in order, because the order matters.

Rotate first, rewrite second. The single most important step is to treat every secret that was ever committed as compromised and rotate it, new keys, new passwords, revoke the old ones. This is more important than scrubbing history, because a rotated key in your history is harmless while a scrubbed history with a still-live key is a false sense of safety. Attackers and scanners have almost certainly already indexed anything that was ever public.

Scan the full history. Run a secret scanner across every commit, not just the working tree. Tools like gitleaks and trufflehog are built for exactly this, they walk the entire history and flag credential patterns. Do this yourself before diligence so there are no surprises, because the reviewer is going to run the same class of tool.

Remove the secrets from history if the repo will change hands. If the repo is going to an acquirer or the history genuinely needs to be clean, rewrite it to purge the secrets, then force-push and have collaborators re-clone. This is disruptive, so weigh it against the cost, for a fundraise, rotation plus a documented cleanup plan is often enough, while for an acquisition where the buyer inherits the repo, actually purging matters more.

Put in the guardrail so it does not recur. Add secret scanning to CI and a pre-commit hook that blocks credentials before they land. This is the part that changes the reviewer's read from "they had a problem" to "they had a problem and fixed the process," which is a completely different signal. Move real secrets into a secrets manager or your platform's environment configuration, out of the codebase entirely.

The whole exercise is a day or two of work. The reason it is worth doing before a raise and not during one is the same reason behind most diligence prep: you want to be the team that already handled it, not the team explaining why it is still there. When a reviewer or a customer's [security questionnaire](/post-security-questionnaire-deal) asks how you manage secrets, "scanned, rotated, and blocked in CI" is an answer that ends the conversation instead of opening a new one.

### FAQ

### If the repo has always been private, do I still need to worry?
Yes, for two reasons. Diligence gives outsiders read access, so a private repo becomes semi-public during exactly the window you care about. And private repos leak, through forks, laptops, and former employees. Rotate anyway.

### Is rewriting git history always necessary?
No. Rotation is always necessary, history rewriting is situational. For a fundraise, rotating the secrets and documenting a cleanup plan usually satisfies a reviewer. For an acquisition where the buyer inherits your repository, purging history matters more.

### How long does a full remediation take?
Usually one to two days for a small codebase: run a scanner across history, rotate every credential it finds, add CI scanning and a pre-commit hook, and move secrets into a manager. The rotation is the slow part because you have to update every place the credential was used.
