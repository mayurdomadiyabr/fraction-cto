---
title: Your AI tools may refuse to help during a breach. Plan for it.
slug: ai-refuses-during-security-incident
date: '2026-11-02T04:31:26.493Z'
category: Pattern recognition
excerpt: >-
  During the OpenCode breach, AI models reportedly stopped helping once
  malicious code tripped their filters. How a small team should prepare.
description: >-
  AI safety filters can block malware analysis mid-incident, as OpenCode
  reported. How a small startup can test, plan and keep working without them.
author: The founder of Fraction
readTime: 7
draft: false
---

If your team now reaches for an AI assistant for most technical work, assume it may stop helping at the moment you need it most. Safety filters can block analysis of malicious code, so a breach is a bad time to find that out. The fix is cheap: decide today which AI tools you would use during an incident, test them on a harmless sample, and make sure that your team can still do the core work without them.

This stopped being a hypothetical last month. When attackers went after the AI coding tool OpenCode in October 2026, its co-founder [told TechCrunch](https://techcrunch.com/2026/10/19/hackers-hit-ai-coding-tool-opencode-running-up-charges-on-users-ai-accounts/) that the models the team used for analysis helped at first and then refused to continue once the malicious code tripped safety filters. The team later got access to a program for vetted defenders and said that improved the investigation. [BleepingComputer reported the same account](https://www.bleepingcomputer.com/news/security/opencode-hack-exposes-api-keys-amid-ai-distillation-attacks/) of models declining investigative requests.

That report is one company's account, and how attackers got in has not been explained. The breach itself and its effect on API keys is a separate topic that I covered in [what to do when a tool holding your AI key is breached](/post-ai-api-key-in-third-party-tool). The part worth your attention here is narrower: a team under attack lost part of its tooling because of what the attack looked like.

## Why the refusal happens at the worst time

Safety systems look at the content of a request. Defending against malicious code and writing it can look similar at that level. A request like "explain what this obfuscated script does and how it steals credentials" can come from a defender or from someone improving an attack, and a filter has limited ability to tell which is which.

So refusals are not random. They get more likely as your situation gets more serious, which means the tool works during your calm test on Tuesday and balks during the real thing on Saturday. Three kinds of request are most exposed:

- Pasting in malware or attacker scripts for analysis.
- Asking how a specific exploit works so that you can check whether it was used on you.
- Writing detection or reproduction code that closely resembles the attack.

Ordinary incident work, like summarizing logs or writing customer updates, is less likely to be blocked. I cannot give you a refusal rate, and neither can most vendors, because it varies by model, wording and version. Treat it as a risk to plan for instead of a number to estimate.

## The dependency nobody wrote down

Most startups have a plan for their cloud or their database going down, even if it is a short one. Few have considered that an AI tool has become a critical dependency for their engineers' ability to think through a problem at speed. If your team is young, or your senior people have spent the last two years working mainly through agents, this deserves an honest look. The risk of [skills fading on a team that feels fast](/post-ai-team-feels-fast) is easy to ignore until a bad day.

An outage is one version of this, and [your AI provider going down](/post-ai-provider-outage-fallback) is well worth planning for. A refusal is sneakier. The service is up and everything looks normal, but you are given a polite no, or worse, a vague partial answer that wastes twenty minutes while you are also trying to rotate credentials.

There is one more trap. In a real incident, people under pressure paste things in fast. That can include customer data, secrets or evidence you may need to preserve, and it may go to a vendor that you have not cleared for that data. Refusals push people to try other tools, and the tool someone tries next at 2am, on a personal account, is the one you never reviewed.

## What to set up this month

None of this needs a security team. It needs one owner and an afternoon.

### Name your incident tools in advance

Pick which AI tools are approved for incident work, on which accounts, and what may be pasted into them. One paragraph is enough. Keep customer data and live secrets out by default, and strip them from logs first. If you already have a [shadow AI policy](/post-shadow-ai-startup-policy), add this as a section.

### Run a refusal test

Take a known, already published malicious sample or a public write-up of an old attack, handled safely and without running it. Ask your approved tools to explain it, and to help write a detection rule. Write down what they do and try it again after major model changes. You will end up knowing the shape of the limits before you are on the clock. Do this for defense only, and within each vendor's terms.

Vendors also run programs for vetted defenders, like the one OpenCode reportedly joined. Find out whether such a program exists for your provider and what it takes to qualify. Applying during an incident is slow, and a small company may not qualify at all, so do not make it your only plan.

### Make sure the basics work without AI

Pick the five tasks you would need in an incident, such as finding who accessed what from your logs, revoking access, rotating secrets, restoring a backup and pushing a fix. Have someone do each without assistance, once. If nobody can, you have found your actual gap. This pairs with knowing that [your backups live outside your provider](/post-backups-outside-your-cloud-provider) and that [someone can rebuild your server](/post-server-nobody-can-rebuild).

### Know who you would call

Refusals are one more reason not to rely on your own team alone. Find a human incident response firm or an experienced security consultant before you need them, and keep their contact details somewhere that does not depend on your own systems. Check your cyber insurance too, if you have it, because many policies have rules about who you use and when you must notify them. Read yours rather than assuming.

### Keep evidence separate from analysis

Save the original logs and files in a protected location before anyone begins experimenting. If a tool refuses or gives you a wrong answer, you can switch approaches without having changed or lost the evidence. Customers, investors and regulators may later ask what happened, and [your record of past incidents](/post-incident-history-diligence) is something diligence can ask about.

## Does this mean you should stop using AI for security work?

No. AI is often very useful here, particularly for reading long logs, explaining unfamiliar code, drafting a timeline and writing communications. In the OpenCode account, the same models helped before they stopped. The point is to treat AI as a fast colleague who may leave the room with no warning, and to arrange your plan so that this costs you minutes rather than the whole response.

Small teams feel this most, because they have the fewest people to fall back on. It is also where a part-time technical leader earns the fee: writing the one-page plan, running the test with your team and deciding who is on point when something breaks. If you want to know how your team would actually hold up, a [technical teardown](/teardown) will look at this directly. To talk through your own setup, [book a call](/book-a-call), or see [how an engagement is priced](/pricing).

## FAQ

### Why would an AI tool refuse to help me defend my own company?
The filter usually cannot verify who you are or your intent. Analysis of malicious code can look like work on malicious code, so some tools err toward refusing. Providing clear defensive context may help, but it is no guarantee.

### Would a self-hosted or open-weight model solve this?
It can reduce refusals and keep sensitive data inside your own environment, but you would then have to run it, and a less capable model can give confident wrong answers on hard analysis. See [whether switching to an open-weight model makes sense](/post-switch-to-open-weight-model) before setting one up just for this purpose. A tested fallback is more useful than an untested one.

### Is it safe to paste attacker code or logs into an AI tool?
Only under rules you have set in advance. Logs often contain customer data and secrets, and an upload may go against your contracts or policies. Remove sensitive values first, use accounts you have approved and keep unaltered originals elsewhere.

### How often should we run the refusal test?
A rough guide is once or twice a year, and whenever you change your main AI tool or model. It takes less than an hour, and models change their behavior between versions without much notice.

### We have three engineers. Is this overkill?
The full version might be, but the small one is not. One paragraph on approved tools, one test and one phone number can be finished in an afternoon.
