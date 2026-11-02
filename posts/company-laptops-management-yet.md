---
title: Do you need to manage your team's laptops yet?
slug: company-laptops-management-yet
date: '2026-11-02T04:30:10.717Z'
category: Knowing when
excerpt: >-
  Device management feels like big-company IT. The triggers that make it
  worthwhile, what to do before then, and what to do about contractors.
description: >-
  When a startup needs device management: what to do before MDM, the triggers
  that justify it, and how to handle contractors and personal laptops.
author: The founder of Fraction
readTime: 6
draft: false
---

You need device management when your laptops hold access worth stealing and you can no longer answer simple questions about them: who has which machine, whether its disk is encrypted and what happens if it is lost. In practice that usually arrives with your first enterprise security review, your first SOC 2 effort or your first few hires beyond the founding team. Before that point, a one-page list and a handful of rules are enough.

Mobile device management, or MDM, is software that lets a company see and enforce settings on its computers. It tends to sound like something for a company with an IT department, so startups put it off. Often that is the right choice, up to a point. The trouble is that an engineer's laptop often holds more power than any server, including production credentials, source code, signed-in admin sessions and now [AI agents with broad access](/post-ai-agent-access-scope).

## What to do before you need any tool

For a team of a few people, write this down and spend an hour on it:

- **An inventory.** A spreadsheet listing each laptop, who has it, its serial number and who owns it, the company or the individual.
- **Disk encryption turned on.** FileVault on a Mac and BitLocker on Windows are built in. Ask for a screenshot as confirmation. It feels silly, but it takes only a minute and gives you a record.
- **Screen lock and automatic updates.** A short timeout and updates turned on will stop a good share of everyday problems.
- **A password manager and multi-factor authentication.** These matter more than anything on this page, and they should come first. [Shared admin logins](/post-shared-admin-logins) are a more common failure than an unmanaged laptop.
- **No production data on laptops.** Most of the damage from a lost laptop comes down to what is on it, so [keep customer data off local machines](/post-production-data-on-laptops).
- **A departure and lost-device checklist.** Know what gets revoked, in what order and who does it. Your identity provider and code host matter more here than the laptop.

This baseline is not a security program. It is what you can do this week at almost no cost, and it covers the most obvious gaps.

## The triggers that make it worth paying for

Tooling starts to make sense when one of these shows up:

- **A customer asks.** Enterprise [security questionnaires](/post-security-questionnaire-deal) commonly ask how you enforce encryption, patching and screen locks on devices. "We asked people to do it" is a weak answer, and a screenshot from a management console is a strong one.
- **You begin SOC 2.** SOC 2 does not prescribe a specific product, but you have to show that your controls work consistently over time. Collecting manual evidence from each machine becomes tedious quickly, and device management makes it far easier. Before you commit, check that [SOC 2 is something you need](/post-soc2-to-raise) right now.
- **The team grows beyond people you can check on yourself.** A rough line is somewhere around ten to fifteen people, which is my judgment and not a standard. At that size, the spreadsheet starts going stale, and a new hire may not know the rules.
- **You hire remotely across locations.** Shipping, setting up and recovering laptops by hand takes real time when people are spread out. Automated setup means a machine can be shipped directly to someone and configure itself when it is first turned on.
- **You handle sensitive data.** Health, financial or other regulated data can bring the date forward, whatever the team size.
- **You have an incident.** A lost laptop with no way of knowing what was on it or whether it was encrypted is a very persuasive argument.

## What the tool should actually do

You do not need a large platform. For a small team, the useful list is short:

1. Enforce encryption, screen lock and OS updates, and report which machines comply.
2. Let you lock or erase a lost device remotely.
3. Set up new machines automatically, which on Macs generally means buying through or enrolling in Apple Business Manager.
4. Produce evidence that you can hand to an auditor or customer.

Pricing is generally per device per month, and it varies enough that you should check current quotes rather than trust any figure in a blog post. As a sanity check, compare that yearly total with the engineer time spent gathering evidence by hand, along with a single deal that stalled on security. Vendor choice is a [reversible decision](/post-reversible-decisions) for the most part, so a short trial is better than a long evaluation. If your team is entirely on one operating system, your choices become simpler.

## The contractor and personal laptop problem

Here is where small teams get stuck. Contractors and agency developers typically use their own machines, and many early employees do as well. You generally cannot, and should not, put company management software on a machine you do not own without clear agreement, since it can reach into personal data and may be a legal question in some countries.

There are three workable routes:

- **Issue a company laptop** to anybody with production access. Clean, but not cheap.
- **Give access only through a controlled environment,** such as a cloud development environment or a virtual desktop, so that code and credentials stay away from the personal machine.
- **Limit access.** Many contractors do not need production at all. Tight [access to your repositories](/post-agency-repo-access-during-build) and to systems reduces the risk from any machine.

Write down what you decide, and have it in the contract. A policy which covers only employees leaves out the people you know the least. If you work with an agency, that gap could be larger than everything else on this list.

## One new reason this matters more now

Engineers now run coding agents and install extensions and [agent skills](/post-ai-agent-skills-your-team-installs) that run with the laptop's full access. Larger companies have started controlling this with device policies and approved-software lists. You may not need that yet, but the laptop is no longer simply where someone types. It is often where credentials and automated tools meet, which is one more reason to know what is on it.

## Who should own this

Make it one named person, usually whoever runs your infrastructure, with an hour or two a month. It does not call for an [IT or security hire](/post-first-security-hire-yet) at this stage. If a security review has already landed and you are unsure how much to do, [book a call](/book-a-call) or look at [what a technical review covers](/teardown). It is easy to underdo this and just as easy to buy far more than you need.

## FAQ

### Does a three-person startup need MDM?
Usually not. A written inventory, disk encryption, screen locks, a password manager and multi-factor authentication are enough, unless a customer or regulator specifically requires more.

### Is device management required for SOC 2?
SOC 2 does not require any particular tool. You need to show your controls are in place and operating, and for most teams a management tool is the simplest way to show that for laptops.

### Can we erase a laptop when someone leaves?
If it is a company machine that is enrolled, generally yes, though you should recover it and handle any legal hold first. On personal machines you normally revoke access to accounts rather than erase anything, and you should get legal advice before attempting more.

### What comes first, single sign-on or device management?
For most small teams, the identity side comes first: a password manager, multi-factor authentication and, once it is affordable, single sign-on. Most of what an attacker wants sits behind a login, and it is also the fastest thing to revoke.
