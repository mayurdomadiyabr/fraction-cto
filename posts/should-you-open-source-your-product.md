---
title: Should you open-source your product? Decide what you sell first
slug: should-you-open-source-your-product
date: '2026-10-21T11:48:10.949Z'
category: Decisions
excerpt: >-
  Open source is a distribution channel, not a business model. When it helps a
  startup, when it hurts, and how to pick a license you will not regret.
description: >-
  Open-sourcing your product is a business model decision. When it helps, when
  it hurts, and how to pick a license you will not have to change later.
author: The founder of Fraction
readTime: 5
draft: false
---

Founders ask whether they should open-source their product as if it were an engineering question. It is a business model question with a license attached. Open source can be an excellent distribution channel for developer-facing products, because engineers can try, inspect and adopt your code without talking to sales. It is a poor fit when your buyers are not technical, when your value is the code itself rather than running it, or when you have not decided what customers will pay for. Decide what you sell first, then pick the license that protects it.

The last few years gave founders a clear set of case studies on what happens when that order is reversed.

## What the license changes taught everyone

Several well-known companies built on permissive open source licenses later changed course when cloud providers or competitors offered their software as a service.

HashiCorp moved Terraform and other products from the Mozilla Public License to the Business Source License in August 2023. A group of companies and contributors forked the last open version as OpenTofu, now under the Linux Foundation. Redis moved from the BSD license to a dual source-available license in March 2024, and a fork called Valkey quickly gained backing from large cloud providers. In 2025, Redis added the AGPL as an option for Redis 8. Elastic, which had moved away from open source in 2021, added the AGPL as an option in 2024.

The lesson for a startup is not that open source fails. It is that changing your license later is expensive. You lose goodwill, you may get forked, and your customers' lawyers start asking questions. The license you pick on day one is much easier to keep than to change.

## When open source helps

### Your buyer is a developer

If the person evaluating your product writes code, being able to read the source, run it locally and fix a bug is a strong reason to choose you. Databases, developer tools, infrastructure components and SDKs fit this pattern. Open source shortens the evaluation and removes the "what if this vendor disappears" objection.

### You sell the operations, not the code

The cleanest open source businesses sell something the code alone does not give you: a hosted version, support with response times, enterprise features such as SSO and audit logs, or compliance work. If a customer could get everything you sell by running your repository on their own servers with modest effort, open source will cap your revenue.

### You need a community to reach coverage

Integrations, connectors and plugins are where community contributions really pay off. If your product needs 200 integrations and your team can write 20, open source is a practical way to get the rest.

## When it hurts

### Your buyers are not technical

A sales manager choosing a CRM does not care whether the source is public. You take on the costs of open source, such as public issue triage, security disclosures and contributor management, with none of the distribution benefit.

### Your differentiation is the algorithm

If what makes your product better is a model, a ranking method, or a pricing engine, publishing it gives competitors your advantage for free.

### You do not have time to maintain it in public

An open repository with stale issues and unanswered pull requests signals an abandoned project. Maintaining open source well takes real hours every week. Two engineers cannot run a product and a community at the same time without something slipping.

## The license choices, in plain terms

- **Permissive licenses (MIT, Apache 2.0):** anyone can use, modify and sell your code, including as a hosted service. Best for SDKs, libraries and anything you want adopted as widely as possible.
- **Copyleft (AGPL):** anyone can use it, but if they offer a modified version as a network service they must share their changes. Many companies will not use AGPL code internally, which limits adoption, and that is sometimes the point.
- **Source-available licenses (such as BSL or the Functional Source License):** the code is public, but use is restricted, often against offering a competing service, for a period of time before it converts to an open license. These are not open source under the Open Source Initiative's definition, and some developers will treat them accordingly.
- **Open core:** the core is open under one of the licenses above, and paid features live in a separate, proprietary codebase. This is the most common structure for commercial open source.

Whatever you pick, set up a contributor license agreement or a clear contribution policy early. Without one, every outside contribution adds a copyright holder, and changing your license later can require their permission. This is the kind of detail that [investors' license diligence](/post-open-source-license-diligence) will ask about.

## A decision checklist

Answer these before making the repository public.

1. Who is the buyer, and do they read code?
2. What exactly will customers pay for that the open code does not give them?
3. If a large cloud provider offered your code as a service tomorrow, what would you still have?
4. Who on the team will triage issues and review outside contributions each week?
5. Have you scanned the code for secrets, customer data and third-party code you cannot redistribute?
6. Which license, and is a contributor agreement in place?

If you cannot answer questions 2 and 3 clearly, do not open-source the core product yet. You can still open-source the parts that help adoption, such as SDKs, a CLI, or example integrations, under a permissive license. That captures much of the distribution benefit with little risk.

### What it changes for fundraising

Investors who back developer tools understand commercial open source and will ask about your conversion path from free users to paying customers. Investors outside that world may see public code as giving the product away. Either way, have a clear answer on what is paid and why. If an acquisition is ever on the table, licensing comes up again, as covered in [how an acquirer runs technical diligence](/post-acquirer-technical-diligence).

## FAQ

### Can I open-source later if I start closed?

Yes, and it is much easier than going the other way. Before you publish, review the history for secrets and make sure you own all of the code. Some teams publish a clean repository without old history for this reason.

### Does open source make my product less secure?

Not inherently. Public code gets more scrutiny, which finds bugs sooner, but you also need a security policy and a way to handle disclosures. Hidden code is not the same as secure code.

### Will competitors just copy us?

Some might. The question is whether copying the code gives them your business. If your value is hosting, support, integrations and speed of improvement, a copy of the code is a long way from a competing company.

### Can a fractional CTO help with this decision?

Yes. This is a judgment call that mixes licensing, architecture and go-to-market. If you want an outside view on your plan, [book a call](/book-a-call) or read [how an engagement works](/how-it-works).
