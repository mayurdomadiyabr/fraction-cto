---
title: Hacking your site now costs $25. Is small still safe?
slug: ai-attacks-25-dollars-per-target
date: '2026-10-06T03:19:15.421Z'
category: Decisions
excerpt: >-
  An AI-agent campaign hit retailers for about $25 a target in tokens. What that
  changes for startups that take payments.
description: >-
  A Sept 2026 AI-agent skimming campaign cost about $25 per target. Three
  questions founders with a checkout should ask this week.
author: The founder of Fraction
readTime: 7
draft: false
---

For years a lot of small companies have relied on a quiet assumption: we are too small to be worth a skilled attacker's time. A campaign reported in late September 2026 shows that assumption no longer holds. One attacker used open-source AI agent tools to scan and break into online retailers at an average model cost of about $25 per target, and walked away with more than 600,000 payment card records.

The short answer for founders: when attacking you costs $25 and runs unattended, being small is no longer a defence. If your product takes payments or holds data worth stealing, the questions to ask now are whether your checkout runs custom code you would have to patch yourself, whether you would notice a script changing on that page, and whether you could recover if an attacker also deleted things on the way out.

## What actually happened

The campaign was documented by [Gambit Security](https://gambit.security/blog-posts/autonomous-ai-agents-online-retailers-25-a-company) on 22 September 2026, with a follow-up research note from the [Cloud Security Alliance](https://labs.cloudsecurityalliance.org/research/csa-research-note-ai-agent-retail-skimming-campaign-20260924/) two days later and coverage in [BleepingComputer](https://www.bleepingcomputer.com/news/security/malicious-ai-agents-steal-600k-credit-cards-infect-100-plus-sites-with-skimmers/). The key facts, as reported:

- A single operator chained three open-source tools: one for scanning, one for autonomous exploitation, and one to orchestrate the whole campaign.
- The campaign ran from at least July into mid-September 2026. In one five-day window in September, 27 companies were compromised.
- Skimmers were confirmed on 19 websites, with more than 100 further sites carrying related skimmer code.
- More than 600,000 card records were taken from two companies. About 79% were US-issued cards.
- The operator's own records put the average model cost at roughly $25 per completed scan, with total campaign spend estimated at $12,000 to $18,000.
- Where the attack got in, Gambit reports it usually took less than a day, often a few hours.

The way in was not exotic. The reported techniques include unauthenticated SQL injection, bypassing one-time-password checks, arbitrary file uploads leading to code execution, and pulling credentials from secrets stores once inside. These are well-known bug classes. What changed is that an agent can try them across a hundred sites while the operator sleeps.

One more detail matters for founders. Gambit reports the operator filtered out major hosted commerce platforms and favoured sites running custom code. The victims named include very large companies, so this is not a story about small sites only. It is a story about who maintains the code that handles payments.

## Why the economics change the advice

Security advice for early-stage companies has always been a budget conversation. You cannot do everything, so you rank risks by likelihood and impact. For a small company, likelihood of a determined, skilled attacker was genuinely low, because skilled attacker time was expensive and better spent on bigger targets.

AI agents compress that cost. If a full scan-and-exploit attempt costs tens of dollars in tokens, the attacker no longer needs to choose targets carefully. They can try everyone with a reachable checkout and an old bug. Your likelihood moves from "someone would have to pick us" to "someone will run something at us".

That does not mean every startup needs a security team. It means a few specific weaknesses are now much more likely to be found, and those are worth fixing first.

## Three questions to ask this week

### 1. Does card data ever touch code you maintain?

This is the biggest lever and it is mostly an architecture decision. If your checkout uses your payment provider's hosted page or its embedded payment fields, the card number is typed into the provider's frame, not your page. A skimmer injected into your site has a much harder time reading it, and your compliance scope under PCI DSS shrinks.

If instead your own front end collects card numbers and passes them on, or you run a self-hosted commerce stack with plugins you rarely update, you are in the profile this campaign went after. Moving to hosted fields is usually days of work, not months, and I would prioritise it above almost anything else on this list. If you are weighing how much of billing to own at all, I cover that in [whether to build billing or use Stripe](/post-build-billing-or-use-stripe).

### 2. Would you notice if a script on your checkout changed?

Skimmers in this campaign were appended to existing JavaScript files, added as foreign script tags, injected into analytics snippets and even planted in storage buckets and page caches. None of that breaks the page, so nobody notices.

The practical defences are well understood:

- Keep an inventory of every script that loads on your payment pages and why it is there. Most teams are surprised how many marketing tags sit on checkout.
- Set a Content Security Policy that only allows scripts from the domains on that list.
- Monitor payment pages for changes in the scripts they load and alert a human when something new appears.

If you take card payments, PCI DSS version 4.0 already expects this. Requirements 6.4.3 and 11.6.1 cover managing scripts on payment pages and detecting unauthorised changes to them. Check with your payment provider or assessor which apply to your setup; hosted fields can change the answer.

### 3. Could you recover if the attacker also broke things?

Gambit describes at least one case where the attacker's cleanup dropped 180 database tables, including admin backups. Their recommendation is a resilience-first mindset: know which systems you need back first and prove you can bring them back under attack conditions, not just after a hardware failure.

For a small team that means backups an attacker with production credentials cannot delete, a restore you have actually tested, and a short list of what must come back first. If you have never run that test, [what happens when your database dies at 2am](/post-disaster-recovery-diligence) walks through it.

## The less obvious lessons

### Old bugs are now the main risk

Nothing in the reported chain needed a brand-new vulnerability. SQL injection and file upload flaws are decades old. The risk is the unpatched plugin, the admin endpoint nobody remembered, the code an agency wrote three years ago. That makes patch cadence and a list of what you actually run more valuable than any new tool. If AI-written code is part of your stack, the same applies to [the security holes it tends to leave](/post-ai-code-security-holes).

### Secrets inside the perimeter are part of the blast radius

Once inside, the attacker pulled credentials from a secrets store and used them to go further. Scope production credentials tightly and rotate the ones nobody can account for. The pattern is the same one I described for [credentials exposed by a package worm](/post-npm-worm-credential-blast-radius): assume one foothold leads to everything that host can reach, and limit what that is.

### Your customers will start asking

Enterprise buyers and their [security questionnaires](/post-security-questionnaire-deal) follow incidents like this. Expect more questions about payment page integrity, script management and recovery testing. Having good answers is cheaper than having to invent them under deal pressure.

## What I would do with one week

1. Confirm how card data flows. If your code touches card numbers, start moving to hosted payment fields.
2. List every script on payment pages and remove anything that does not need to be there.
3. Add a Content Security Policy and basic change monitoring on checkout.
4. Patch or remove any self-hosted commerce plugins and admin tools you are not actively maintaining.
5. Make one backup copy that production credentials cannot delete, and test a restore.

None of that needs a security hire. It needs someone senior to own it for a week. If you want help working out which of these apply to your stack, it is a typical scope for a [technical teardown](/teardown).

## FAQ

### Is my startup really a target if we are small?

Size matters less now. When an automated attempt costs tens of dollars, attackers can try every reachable site with a known weakness. What makes you a likely target is running custom or unpatched code that handles payments or valuable data, not your size.

### Does using Stripe or another payment provider protect us?

It helps a great deal if you use their hosted checkout or embedded payment fields, because card numbers are entered in the provider's frame rather than your page. If your own code collects card numbers before passing them on, a skimmer on your site can still capture them.

### What is a web skimmer?

A web skimmer is malicious JavaScript injected into a website, usually on the checkout page, that copies payment details as customers type them and sends them to the attacker. The page keeps working normally, which is why skimmers can run for weeks unnoticed.

### Do we need a security hire to deal with this?

Usually not at seed or Series A. The highest-value fixes, hosted payment fields, a script inventory with a Content Security Policy, patching and tested backups, are a week or two of senior engineering time. A dedicated hire makes sense later, as covered in [whether you need a first security hire yet](/post-first-security-hire-yet).

If you are not sure how your checkout would hold up against this kind of automated attack, [book a call](/book-a-call) and we can go through it.
