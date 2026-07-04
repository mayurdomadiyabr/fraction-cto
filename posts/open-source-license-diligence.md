---
title: The open-source license that can sink your valuation
slug: open-source-license-diligence
date: '2026-07-04T14:39:41.825Z'
category: Fundraising
excerpt: >-
  Modern apps pull in hundreds of dependencies, and one copyleft license buried
  three levels deep can become a diligence problem that costs you leverage. Find
  yours first.
description: >-
  How open-source licenses like GPL and AGPL surface in technical diligence, why
  they threaten valuation, and how to audit your dependency tree first.
author: The founder of Fraction
readTime: 5
draft: false
---

A diligence team runs a scan on your codebase and finds an AGPL-licensed library sitting three levels deep in your dependency tree. Nobody on your team chose it. Nobody knew it was there. And now you are explaining to an investor's technical advisor why your proprietary SaaS might carry an obligation to publish its source code. That conversation costs you leverage at exactly the moment you have the least to spare.

License risk is one of the few diligence problems that is almost entirely preventable and almost always ignored until it is urgent. Founders track their cap table and their contracts. They rarely track the licenses of the open-source code their product is built on, even though that code often outnumbers the code their own team wrote by a wide margin.

## Why licenses show up in diligence at all

When a buyer or investor does technical diligence, one of the standard checks is: what third-party code is in this product, and what obligations come with it? This is not paranoia. Every open-source dependency ships with a license, and licenses are contracts. Some are permissive and ask almost nothing. Others are copyleft and can attach conditions to the code you built around them.

A serious diligence process runs an automated scan, called software composition analysis, across your whole dependency tree. It produces a list of every package and its license. Then a human reads it looking for the licenses that create obligations. If your team has never run that scan, the diligence team is seeing your license exposure before you are, and that is the wrong order. It is the same principle as the rest of your data room: you never want an investor discovering something structural about your codebase before you have. If the [technical half of your data room is empty](/post-technical-data-room), this is one of the first things to put in it.

## The licenses that actually cause problems

Not all open-source licenses are equal, and the difference is the whole game.

Permissive licenses, like MIT and Apache 2.0, let you use the code in proprietary software with minimal conditions, usually just attribution. The vast majority of your dependencies are probably these, and they are fine.

Copyleft licenses are where the risk lives. GPL requires that if you distribute software that includes GPL code, you make your corresponding source available under the same terms. For a long time SaaS companies assumed this did not touch them because they do not distribute binaries; customers use the product over a network.

The AGPL closes exactly that loophole, and it is the one to watch. The Affero GPL triggers its source-disclosure requirement when users interact with the software over a network, not only when you ship a binary. For a SaaS company that is the normal way customers use your product. A single AGPL component in your stack can, in principle, create an obligation to disclose your source or to buy a commercial license from the maintainer.

This is not theoretical. In 2024, in SFC v. Vizio, a court let a GPL enforcement case survive summary judgment, ruling that consumers can enforce the GPL as third-party beneficiaries. Enforcement of these licenses is real, and diligence teams know it.

## How AGPL closes the SaaS loophole

The reason AGPL deserves its own paragraph is that it defeats the assumption most founders operate on. "We are SaaS, we do not distribute anything, so copyleft does not apply to us." That reasoning holds for plain GPL. It does not hold for AGPL.

Under AGPL, letting a user interact with the software over a network counts as the triggering event. So if you built a feature on top of an AGPL library and users touch that feature through your web app, you may have triggered the source-disclosure obligation without ever shipping a file to anyone. The fix is usually to rip out the AGPL component and replace it, or to buy a commercial license from the vendor who dual-licenses it. Both are cheaper to do calmly, months before a raise, than under a diligence clock.

## How to find your exposure before an investor does

The good news is this is a solved problem if you spend a day on it.

Run a software composition analysis tool across your codebase. There are several open-source and commercial scanners built for exactly this. It will inventory every dependency and flag the license of each. Sort by license type and look specifically for GPL, AGPL, LGPL, and other copyleft terms. Pay attention to transitive dependencies, the ones your direct dependencies pull in, because that is where the buried AGPL library hides three levels down.

For anything flagged, decide: keep it and comply, replace it with a permissively licensed equivalent, or buy a commercial license. Write down what you found and what you did. That short document is exactly what a diligence team wants to see, and handing it to them proactively flips the story from "they found a problem" to "the team is on top of its supply chain."

This is the same discipline that separates a clean AI diligence from a messy one. If AI wrote a chunk of your code, the provenance and licensing of what it pulled in matters even more, which is its own reason to get ahead of [whether your AI-written code survives diligence](/post-ai-code-diligence). And it belongs on the same list as the other [technical red flags that quietly kill a round](/post-diligence-red-flags).

### FAQ

**Is using open source a problem for fundraising by itself?**
No. Nearly every startup is built on open source and investors expect it. The problem is specific copyleft licenses used in ways that create disclosure obligations, and not knowing which ones you have.

**Which licenses should I worry about most?**
AGPL first, because it triggers on network use and hits SaaS directly. Then GPL and other strong copyleft licenses. Permissive licenses like MIT and Apache are almost never an issue.

**How do I find what licenses I am using?**
Run a software composition analysis scan. It inventories your full dependency tree, including transitive dependencies, and labels each license so you can spot copyleft components.

**What if I find an AGPL dependency?**
Replace it with a permissive alternative, or buy a commercial license from the maintainer. Do it before diligence, not during. If you are unsure how exposed you are, [book a call](/book-a-call) and we can scope a quick license audit.
