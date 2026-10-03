---
title: The code zip you were sent can hijack your AI coding agent
slug: code-zip-hijacks-ai-coding-agent
date: '2026-10-03T09:09:52.066Z'
category: Pattern recognition
excerpt: >-
  New research showed code folders sent as files could make AI coding agents run
  hidden programs. The handoff rule every startup should adopt.
description: >-
  GitSpawn showed a code zip could make AI coding agents run attacker code
  before approval. What founders should change in how code is handed off.
author: The founder of Fraction
readTime: 6
draft: false
---

Your agency finishes a milestone and sends the code as a zip file. A contractor shares a project folder on Google Drive. A candidate uploads their take-home exercise. Your engineer unzips it, opens the folder in an AI coding agent, and asks it to explain the codebase. Until recently, that felt like the safest possible thing to do: nothing gets run until someone approves it.

The short answer: that assumption broke in September. Security researchers showed that a code folder delivered as files, with its hidden git settings included, could make several popular AI coding agents run an attacker's program the moment the agent looked at the project, before any approval prompt. Most affected vendors have shipped fixes, but the lesson outlasts the patch. Treat code that arrives as a file the way you treat an email attachment: open it somewhere it cannot reach your keys, and only then let an agent loose on it.

## What the researchers found

On 1 September 2026, Manifold Security published research it calls GitSpawn, describing eight findings across seven AI coding agents, including Claude Code, OpenAI Codex, Cursor, and Goose ([Manifold Security](https://www.manifold.security/blog/ai-coding-agents-git-hijack)). The detail that matters for founders is the delivery route. The attack does not rely on cloning a repository from GitHub. It relies on receiving a project as plain files with its hidden `.git` folder already inside: a zip, a shared drive, a sync folder, a USB stick.

Inside that hidden folder sits a configuration file. Git supports settings that name a helper program to run during routine commands. When an agent ran an ordinary git command to understand the project, git honoured the folder's own settings and launched the helper. According to the researchers, this happened outside both the agent's sandbox and its approval step. At publication, some vendors had patched and others had not.

You do not need to follow the mechanics. You need to notice the pattern: the agent's safety prompt protects the commands the agent proposes, not the tools the agent quietly calls to gather context.

## Why startups are more exposed than they think

Large companies have security teams that already treat incoming code as untrusted. Early-stage startups pass code around informally all the time, and much of it arrives as files rather than through a shared repository.

Common routes I see in practice:

- **Agency or contractor deliveries** sent as a zip or shared folder, especially when the agency kept the repository on its own account. The [agency handoff plan](/post-agency-handoff-plan) should move you away from this anyway.
- **Take-home exercises** from engineering candidates, uploaded as archives. Most candidates are honest, but [fake engineer candidates](/post-fake-engineer-candidates) are a documented problem.
- **Customer bug reproductions**, where an enterprise customer sends a sample project.
- **Diligence on an acquisition or partner**, where the other side shares code in a data room.
- **Old projects from a previous team**, restored from someone's laptop backup.

In every case, the person opening the folder is often an engineer whose laptop holds production cloud credentials, an SSH key, a signed-in code host, and access tokens for half your SaaS tools. That is exactly what a credential thief wants. The [npm worm incidents](/post-npm-worm-credential-blast-radius) showed how much damage one stolen key on one laptop can do.

## The rule to adopt this week

You do not need a security team for this. You need one sentence in your engineering norms and a place to follow it.

**Code that arrives as files gets opened in a disposable environment first.** A cloud development environment, a throwaway virtual machine, or a container with no production credentials and no signed-in accounts. Inspect it there. Run agents on it there. Only move it into your real working setup once you trust it, ideally by pushing it to your own repository and cloning fresh, which drops the sender's hidden settings.

That last step is worth spelling out for non-technical founders. A fresh clone from your own code host does not carry over the sender's local git configuration. So "push it to our repository, then clone it" is a cheap, effective habit.

## Five cheap fixes

### 1. Update every AI coding tool your team uses

Ask each engineer which agents and editors they run, including ones they tried once. Update them all. Vendors patched at different speeds, and old versions linger on laptops for months.

### 2. Keep production credentials off development laptops

If a laptop holds no long-lived production keys, a compromised laptop is an incident, not a catastrophe. This is the same advice that protects you from supply-chain attacks, and it keeps paying off.

### 3. Make your own repository the only handoff format

Write into agency and contractor contracts that deliverables go to a repository you own, under your organization. No zips, no shared drives. It is good practice for ownership reasons as well as security.

### 4. Give agents the narrowest access you can

An agent that cannot reach your cloud console or customer database limits what an attacker gets even if something slips through. The [scoping your AI agents](/post-ai-agent-access-scope) guidance applies directly.

### 5. Say who owns tool approvals

Someone, even part-time, should keep the list of approved coding agents and check it monthly. Without an owner, every engineer installs whatever was trending on social media, and nobody notices when a tool on the list has an unpatched flaw.

## What this says about AI coding tools generally

None of this means you should stop using AI coding agents. They are a real productivity gain for small teams, and several vendors have already shipped fixes. The broader point is that these tools now sit in the most trusted spot on an engineer's machine, with the same access the engineer has, and the industry is still finding the edges of their safety model.

That is a familiar pattern. Every powerful developer tool goes through a period where its defaults assume a friendly world. The teams that come through it well are the ones that kept credentials separate, controlled where code comes from, and had someone paying attention. The same thinking shows up in [who chooses your supply chain when an agent picks packages](/post-ai-agent-supply-chain).

## How this shows up in diligence

Investors and enterprise buyers are starting to ask about AI tool usage in engineering. A short written policy that covers approved tools, where untrusted code gets opened, and how credentials are kept off laptops is an easy, credible answer. If you are not sure whether your setup would hold up, a [technical teardown](/teardown) covers developer-machine and credential hygiene alongside the code itself.

## FAQ

### Does this affect code we clone from GitHub?

The published attack relied on receiving a project with its `.git` folder already included, as files. A normal fresh clone from a code host does not import the sender's local git configuration in the same way. Pulling third-party code is still a supply-chain risk for other reasons.

### Our engineers use one of the affected tools. Are we compromised?

Not necessarily. Exposure required opening a malicious project delivered as files. Update the tools now, think about whether anyone opened code from an untrusted source recently, and rotate credentials on that machine if so.

### Is a disposable environment expensive?

No. Cloud development environments and throwaway virtual machines cost little for occasional use. The bigger cost is the habit, which takes one team conversation to set.

### Who should own this at a five-person startup?

Your most senior engineer, or whoever acts as technical lead. If no one fits, this is the kind of gap fractional technical leadership covers. See [pricing](/pricing) for how that works, or [book a call](/book-a-call) to talk through your setup.
