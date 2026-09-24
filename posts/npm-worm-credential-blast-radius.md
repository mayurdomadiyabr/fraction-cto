---
title: 'The npm worms steal your keys, not your code'
slug: npm-worm-credential-blast-radius
date: '2026-09-24T02:47:07.267Z'
category: Pattern recognition
excerpt: >-
  The 2026 npm worms run at install time and steal credentials. Shrink what an
  install can reach in one afternoon.
description: >-
  The npm worm wave steals cloud keys and tokens at install time. How a small
  startup checks exposure and shrinks the blast radius in an afternoon.
author: The founder of Fraction
readTime: 7
draft: false
---

The npm worms of 2026 are not really a code problem. They are a credential problem. The latest wave, a Shai-Hulud variant that Datadog named ChainDrop, runs the moment a poisoned package is installed and steals whatever secrets are on the machine: cloud keys, GitHub and npm tokens, SSH keys. The fix that matters most for a small startup is not a scanner. It is making sure that the laptop or CI runner doing the install has almost nothing worth stealing.

If your team installed JavaScript packages in early August, check whether you were exposed. Either way, spend one afternoon shrinking what an install can reach, because this will happen again.

## What happened, in plain terms

In early August 2026, attackers pushed malicious versions of widely used caching libraries, including keyv and several related packages. Singapore's Cyber Security Agency counted more than 1,300 compromised package versions with around 2 billion combined monthly downloads ([CSA advisory AD-2026-009](https://www.csa.gov.sg/alerts-and-advisories/advisories/ad-2026-009/)). [Datadog's analysis](https://securitylabs.datadoghq.com/articles/npm-worm-compromises-popular-npm-packages/) describes the important detail: the malicious code runs from a preinstall script. You do not have to import the package or run your app. Running `npm install` is enough.

Once it runs, it collects environment variables, cloud credentials, SSH keys, GitHub and npm tokens, and secrets reachable from CI. Then it uses stolen npm tokens to publish infected versions of other packages, which is what makes it a worm. It also tried to plant files in repositories it could write to, including editor task files and AI coding-agent hook folders, so the next developer who opens the project runs it too.

This was not the first time. The original Shai-Hulud wave hit npm in September 2025, and there have been several large incidents since. A package ecosystem where one hijacked maintainer account can reach billions of installs is the normal environment now, not an exception.

## Why small teams are hit harder than they think

At a big company, a developer laptop is one of thousands, with limited permissions and a security team watching. At a seed-stage startup, the picture is usually the opposite:

- The founder's or lead engineer's laptop has production cloud admin keys sitting in a `.env` file or a shell profile.
- The CI pipeline has one long-lived cloud key with full access, because it was the fastest way to make deploys work.
- The same GitHub token can push to every repository and change settings.
- Nobody has a list of which secrets exist or where they live.

So one bad install on one laptop can hand an attacker the whole company: production database, customer data, the code, and the ability to publish under your name. That is the blast radius. I see the same pattern behind [shared admin logins](/post-shared-admin-logins), where one leaked credential opens everything.

## If you might have been exposed

If anyone on the team installed JavaScript dependencies between early and mid August, do this now, in order:

1. Check lockfiles and CI logs for the affected package versions listed in the advisories. Your package manager's lockfile tells you exactly what was installed.
2. If there is any match, treat the machine and the pipeline as compromised. Rebuild the laptop or runner rather than trying to clean it.
3. Rotate every secret that machine or pipeline could reach: cloud keys, GitHub and npm tokens, SSH keys, database passwords, third-party API keys. Rotating only the obvious one is how incidents come back.
4. Review your cloud account and GitHub organization for anything created or changed in that window: new users, new access keys, new deploy keys, unfamiliar branches, and changes to workflow files.
5. Search your repositories for unexpected files in editor configuration and agent hook folders.

If customer data may have been touched, you may also have notification duties. Get advice early. If you sell in the EU, the reporting rules described in [the EU Cyber Resilience Act 24-hour reporting post](/post-eu-cra-24-hour-reporting) may apply depending on what you ship.

## Shrink the blast radius: the afternoon of work

None of these require a security team or a paid tool. They take a competent engineer a few hours.

### Get long-lived production keys off laptops

Developers should not have standing production admin credentials on their machines. Use short-lived credentials from your cloud provider's single sign-on, which expire in hours, and keep production access behind a separate login. If a laptop is compromised, the attacker gets a key that is already dying.

### Give CI short-lived, narrow credentials

Most CI systems, including GitHub Actions, can get temporary cloud credentials through OpenID Connect instead of a stored secret. Scope them to what the pipeline actually does. A build step does not need permission to delete your database. The same applies to the GitHub token your workflows receive: default it to read-only and grant write only to the jobs that need it.

### Stop running install scripts you did not ask for

Most packages do not need lifecycle scripts. pnpm version 10 stopped running dependency install scripts by default and lets you allowlist the few that need them. With npm you can use `--ignore-scripts` in CI and allow exceptions deliberately. This single change would have stopped this worm at install time.

### Wait a day before taking new versions

Malicious releases are usually detected within hours to a couple of days. A short delay before new versions can be installed gives the ecosystem time to catch them. pnpm supports a minimum release age setting, and tools like Renovate and Dependabot can be configured to wait before proposing updates. Combine this with a committed lockfile and installs that respect it, like `npm ci`, so nothing new sneaks in during a deploy. This is a narrow exception to the general advice in [upgrade the dependency now or pay later](/post-dependency-upgrade-or-defer): keep upgrading, just not in the first 24 hours.

### Protect your own publishing

If you publish any packages, turn on two-factor authentication for the registry and move to trusted publishing from CI so there is no long-lived npm token to steal.

### Know where your secrets are

Write down every secret the company has, where it lives, and who can read it. A one-page list is enough. Without it, rotation after an incident turns into guesswork, and you will miss one.

## The AI coding agent angle

This wave specifically tried to plant files in AI coding-agent hook folders and editor task files. That is a sign of where attackers are heading: tools that execute commands automatically when a project is opened. If your team uses coding agents, review which hooks and tasks are configured in each repository, and treat changes to those files like changes to your deploy pipeline. The broader problem of agents pulling in packages nobody vetted is covered in [your AI coding agent is choosing your supply chain](/post-ai-agent-supply-chain).

## A composite example

A seed-stage B2B company with four engineers ran a routine dependency update in August. One of the packages pulled in a compromised caching library. The install ran on the lead engineer's laptop, which had a full-admin cloud key in a shell profile, and on CI, which used a stored key with the same permissions. By the time they saw the advisory, the attacker had used the cloud key to list their storage buckets. The response took three days: rebuilding two machines, rotating around 30 secrets they had to find first, and auditing the cloud account. No customer data left, largely by luck. After the incident they moved to single sign-on with short-lived credentials, OIDC in CI, and pnpm with scripts off by default. The next similar incident, a few weeks later, did not affect them at all.

## What investors will ask

Technical due diligence increasingly asks how you manage secrets and dependencies, and whether you had any incidents. "We were hit, here is what we rotated, here is what we changed" is a fine answer. "We did not check" is not. Having the list of secrets, the lockfile discipline, and short-lived credentials in place makes that conversation short. How we look at this during a review is in the [technical teardown](/teardown).

If you want someone to check your exposure and set up the afternoon of fixes with your team, you can [book a call](/book-a-call).

## FAQ

### We do not use keyv directly. Are we safe?

Not necessarily. Most exposure came through indirect dependencies. Check your lockfile, which lists every package actually installed, not just the ones you chose.

### Is this only a JavaScript problem?

npm is the most targeted registry, but the same attack pattern has hit Python packages, editor extensions, and other ecosystems. The defenses, short-lived credentials, fewer install-time scripts, and delayed updates, apply everywhere.

### Do we need a paid supply-chain security tool?

Not to start. The changes above remove most of the risk for a small team. A tool helps once you have many repositories or need alerts on known-bad versions.

### How often should we rotate secrets?

After any possible exposure, immediately. Beyond that, moving to short-lived credentials matters more than a rotation schedule, because a key that expires in an hour does not need rotating.
