---
title: Your engineers install AI agent skills. Some are malicious.
slug: ai-agent-skills-your-team-installs
date: '2026-10-29T16:30:41.119Z'
category: Pattern recognition
excerpt: >-
  Researchers confirmed malicious skills in public AI agent registries. A
  one-page policy for small teams whose engineers install them.
description: >-
  Malicious AI agent skills target developer credentials. What the research
  found and a simple install policy for small startup teams.
author: The founder of Fraction
readTime: 6
draft: false
---

If your engineers use AI coding agents, they are probably installing "skills" or plugins for them from public registries, and some of those are malicious. Researchers who analyzed close to 100,000 published agent skills confirmed 157 that were deliberately harmful, most aimed at stealing credentials or quietly steering the agent. Treat a skill like any other code that runs on a laptop with production access: allow a short reviewed list, read before you install, keep secrets off developer machines, and know who installed what.

This matters to founders because these tools run with the same access as the engineer using them. An agent that can read your repository, run shell commands and call your cloud account is a very privileged piece of software. A skill changes what that agent does. Very few small teams have any rule about it.

## What an agent skill actually is

Most coding agents now let you extend them with packaged instructions and tools. Different products use different names: skills, plugins, extensions, MCP servers, custom commands. The common pattern is a small package, often a Markdown file plus optional scripts, that tells the agent how to do a task and sometimes gives it new commands to run.

That design is convenient. It is also why the problem is hard to spot. A skill may contain almost no executable code. It can simply instruct the agent, or the human, to run a command, download a file or send data somewhere. Traditional antivirus looks for malicious binaries. A paragraph of instructions does not look like one.

## What the research found

Two pieces of public work make the risk concrete.

In February 2026, VirusTotal reported scanning 3,016 skills from the marketplace of one popular open agent platform and finding hundreds with malicious traits, as [summarized by Socket](https://socket.dev/blog/openclaw-skill-marketplace-emerges-as-active-malware-vector). The patterns included instructions to paste encoded shell commands into a terminal, download password-protected archives, and run programs from outside hosts. One cluster of 314 came from a single publisher, disguised as ordinary automation tools. The marketplace then started scanning every skill, while saying scanning alone is not a complete answer.

A larger academic study, [accepted to USENIX Security 2026](https://arxiv.org/abs/2602.06547), analyzed 98,380 skills from two community registries and confirmed 157 as malicious, with 632 vulnerabilities across 13 attack techniques. The two main strategies were stealing credentials through code execution, and manipulating the agent with hidden instructions in the skill's documentation. More than half of the confirmed cases came from one actor impersonating well-known brands. The registries removed all the reported skills after disclosure.

The rate is low as a share of all skills. That is not reassuring. Your team does not install 100,000 skills; it installs ten, often chosen because they had a familiar brand name. That is exactly the bait the main actor used.

## Why this is a bigger deal at a startup

Large companies have device management, approved-software lists and a security team that reviews new tools. A seed-stage startup usually has none of that, and the engineers usually have more access, not less.

Look at what a typical early engineer's laptop holds. Cloud credentials with admin rights. A production database connection string in a local env file. A GitHub token that can push to main. Possibly a payments or email provider API key. If any skill or agent session can read those files and make a network request, it can take them. We covered the same exposure from a different angle in [your AI API key is sitting in a third-party tool](/post-ai-api-key-in-third-party-tool).

There is also the agent itself. An agent that has been told by a skill to "also run this setup script" will often just do it, especially if the engineer has turned on automatic approval to move faster. The post on [AI agent actions nobody reviews](/post-ai-agent-actions-nobody-reviews) describes how quickly approval prompts turn into rubber stamps.

## A one-page policy for a small team

You do not need a security team to get most of the benefit. You need a few clear rules, written down, that engineers actually follow. Here is the version I give founders.

### Keep a short allowed list

Pick the skills and plugins your team actually needs and put them in a shared list, ideally in the repository, so they are versioned and visible. Prefer ones published by the agent vendor or by companies whose product you already use, installed from their official source rather than a look-alike listing. Anything else needs a second person to look at it first.

### Read it before you install it

Most skills are short. Reading one takes five minutes. Look for instructions to run encoded commands, download archives or binaries, send data to unfamiliar domains, or "not mention" something to the user. Any of those is a reason to stop. If a skill includes scripts, read them the way you would read a pull request.

### Pin versions and watch for changes

A skill that was safe when you installed it can be updated later. Where the tool allows it, pin a version or commit and review updates before accepting them. This is the same discipline as any dependency, and the reasoning in [should you upgrade that dependency now or later](/post-dependency-upgrade-or-defer) applies.

### Get production secrets off laptops

This is the change that limits the damage from every other mistake. Use short-lived credentials, single sign-on to the cloud console, and a secrets manager instead of long-lived keys in local files. Developers should work against a staging environment with fake data by default. If a laptop is compromised, the attacker should get very little.

### Turn off blanket auto-approve for risky actions

Let the agent edit files freely if you like, but require a human to approve shell commands that touch the network, install packages or access credentials. Most agent tools support this distinction. Speed is not worth giving a stranger's instructions direct access to your terminal.

### Know who installed what

Ask each engineer to list the skills, plugins and connectors they use, and repeat it every quarter. It takes ten minutes and gives you an inventory. You will need that inventory the day a popular skill turns out to be compromised. It is also the kind of thing investors now ask about; see [diligence now asks how you use AI](/post-diligence-ai-usage-guardrails).

## If you think a bad skill already ran

Do not wait for proof. Remove the skill, rotate every credential that machine could reach, starting with cloud, source control and payment keys, and check your cloud and source control audit logs for unfamiliar access since it was installed. Then check whether other engineers installed the same skill. Write down what happened and what you changed; it will help if a customer or investor asks later.

If your team has no clear picture of which tools have access to what, that is the bigger problem to fix. Our post on [apps with company-wide access](/post-apps-with-company-wide-access) is a good place to start.

## Frequently asked questions

### Are official marketplaces safe?

Safer, not safe. Registries have started scanning submissions, and that removes the obvious cases. Scanning cannot reliably catch instructions written to manipulate an agent. Keep reviewing what you install.

### Should we ban agent skills entirely?

Usually no. Good skills make engineers faster, and a ban tends to push usage out of sight. An allowed list with review gets you most of the safety and keeps the benefit.

### Does this apply to non-engineers using AI agents?

Yes. Anyone running an agent with access to company email, documents or customer data faces the same risk. The rules above apply to them too.

### How long does setting this up take?

For a team of five to fifteen, about a day: write the policy, build the allowed list, and move the worst secrets off laptops. Getting credentials fully off developer machines can take longer. If you want someone to set it up with you, Fraction does this kind of work. See [pricing](/pricing), or [book a call](/book-a-call).
