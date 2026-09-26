---
title: The EU Accessibility Act is now a diligence question
slug: eu-accessibility-act-diligence
date: '2026-09-26T03:59:11.699Z'
category: Fundraising
excerpt: >-
  The European Accessibility Act has applied since June 2025. Who is in scope,
  why investors now ask, and the smallest credible preparation.
description: >-
  The European Accessibility Act applies since June 2025. Who is in scope, how
  it reaches B2B SaaS, and how to prepare before diligence asks.
author: The founder of Fraction
readTime: 5
draft: false
---

If your product sells to consumers in the EU, the European Accessibility Act has applied since 28 June 2025, and accessibility is now a question investors and acquirers can ask about, alongside security and privacy. Whether it applies to you depends on what you sell, who you sell it to, and your size. If it does apply, the diligence question is simple: do you know where your product stands against the standard, and do you have a plan? A known gap with a plan is a normal finding. Not knowing is the problem.

This post covers who is actually in scope, why it now shows up in diligence, and the smallest credible preparation for a seed or Series A company. It is practical planning, not legal advice. For your specific situation, ask counsel who works on EU consumer law.

## What the law covers, briefly

The European Accessibility Act is [Directive (EU) 2019/882](https://eur-lex.europa.eu/eli/dir/2019/882/oj). Each EU member state implemented it into its own national law, and the requirements apply from 28 June 2025. It covers a defined list of products and services, not every piece of software.

### Services in scope

The services most relevant to startups are:

- **E-commerce services**, meaning selling products or services to consumers online, including through websites and mobile apps.
- **Consumer banking services.**
- **E-books** and the software used to read them.
- **Electronic communications** services and parts of **passenger transport** services, such as booking and ticketing.
- Services giving access to **audiovisual media**.

It also covers certain hardware products such as computers and operating systems, smartphones, e-readers, and self-service terminals like ticket machines and ATMs.

### Where it reaches non-EU companies

The law is about serving consumers in the EU, not where you are incorporated. A US company selling to EU consumers through its website or app can be in scope in the same way an EU company is.

### The small-company exemption

Microenterprises that provide services are exempt from the service requirements. A microenterprise is one with fewer than 10 employees and annual turnover or balance sheet total of no more than 2 million euros. Both limits matter. The exemption covers services, not products.

That exemption matters for diligence in a specific way: many seed companies qualify today, and they will not qualify after the round that pays for their next hires. The investor is funding exactly the growth that takes you out of the exemption.

## B2B software: usually not directly, often indirectly

Most business-to-business SaaS is not directly in the list above. But if your customers are in scope and your software is part of how they serve consumers, the requirement flows down to you by contract.

Some common examples:

- A **checkout, storefront, or booking** product used by retailers or travel companies.
- An **embedded widget** such as chat, payments, or reviews that appears inside a consumer-facing site.
- A **white-label app** or banking front end.

Your customers are the ones exposed to enforcement. They respond by adding accessibility clauses to vendor contracts and security-style questionnaires. If you have been through [the security questionnaire that stalls a deal](/post-security-questionnaire-deal), expect a similar set of questions about accessibility conformance.

## Why diligence asks about it

A technical reviewer is looking for obligations the company carries but is not tracking. Accessibility has become one of them for three reasons.

**It is enforceable.** Enforcement and penalties are set by each member state, and national market surveillance authorities are responsible. The exact risk varies by country, but it is no longer a future question.

**It affects revenue, not just risk.** For B2B companies selling into e-commerce, banking, or travel, accessibility conformance is increasingly a condition of the deal. A product that cannot pass a customer's accessibility review loses enterprise deals quietly.

**Fixing it later is expensive.** Accessibility problems live in shared components: buttons, forms, modals, navigation, color choices. A product built on a component library with good accessibility defaults is cheap to bring up to standard. A product with hundreds of custom components that were never tested with a keyboard or screen reader is a real project.

## What the standard actually asks for

The Act sets functional requirements. In practice, the European harmonized standard EN 301 549 is the usual way to show conformance, and for web content and mobile apps it incorporates WCAG 2.1 at level AA. If you have heard engineers talk about WCAG AA, that is the working target.

For a typical web product, the gaps usually cluster in a few places:

- Forms without proper labels or clear error messages.
- Actions that only work with a mouse, not a keyboard.
- Text and background color contrast below the required ratio.
- Images and icons without text alternatives.
- Custom dropdowns, modals, and date pickers that screen readers cannot use.

None of this is exotic. It is mostly engineering discipline applied consistently.

## The smallest credible preparation

You do not need a perfect score to get through diligence. You need to show you know where you stand.

1. **Decide whether you are in scope.** Consumer-facing in the EU, one of the listed services, over the microenterprise limits, or selling to customers who are. Write the answer down with your reasoning.
2. **Run an audit on your core flows.** Automated tools catch a meaningful share of issues quickly. Add a manual pass on sign-up, checkout or the main task, and account settings, using only a keyboard and then a screen reader.
3. **Fix shared components first.** One fix to a form component can close dozens of issues across the product.
4. **Publish an accessibility statement** describing your conformance level and known gaps. The Act expects information about how the service meets the requirements.
5. **Add accessibility checks to your definition of done** so new work does not add new gaps.
6. **Put the results in your data room** with the audit date and the plan for open items. See [what belongs in a technical data room](/post-technical-data-room).

If you are unsure how big the gap is, a short [technical teardown](/teardown) can size it alongside the other things a reviewer will look at.

## FAQ

### Does the European Accessibility Act apply to US startups?

It can. It applies to in-scope products and services offered to consumers in the EU, wherever the company is based.

### Is my B2B SaaS in scope?

Usually not directly. But if your customers provide in-scope consumer services using your product, they will pass the requirements to you through contracts.

### What standard should we build to?

EN 301 549 is the usual route to show conformance, and for web and mobile it incorporates WCAG 2.1 level AA. Many teams target WCAG 2.2 AA to stay ahead.

### Will investors walk away over accessibility gaps?

Unlikely on their own. They care whether you know the gap, have a plan, and have priced the work. See [what happens when diligence finds a problem](/post-diligence-found-a-problem).
