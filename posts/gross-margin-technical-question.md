---
title: Your gross margin is a technical question in diligence
slug: gross-margin-technical-question
date: '2026-07-11T04:42:59.904Z'
category: Fundraising
excerpt: >-
  Investors read your gross margin as a verdict on your architecture. Below 75%,
  they dig into your infrastructure bill. Here is what they find.
description: >-
  Investors read gross margin as a verdict on your architecture. Below 75%, they
  dig into your infra bill.
author: The founder of Fraction
readTime: 5
draft: false
---

Founders think of gross margin as a finance number. Investors treat it as a technical one. When a reviewer sees a SaaS company below 75% gross margin, the next questions are not about pricing. They are about your infrastructure: what you run, how efficiently you run it, and whether the low margin is a structural property of your architecture or a fixable one.

That distinction decides how the number gets read. A low margin that comes from a design choice you can change is a project. A low margin baked into how the product fundamentally works is a valuation problem. Diligence exists partly to tell those two apart, and the answer lives in your engineering, not your spreadsheet.

## Why margin is an architecture verdict

Most buyers expect software gross margin above 75% before they treat your revenue as clean SaaS ARR. Best-in-class subscription software runs above 85%. Below 70%, reviewers dig harder into cost of goods sold: cloud compute, storage, bandwidth, CDN, and database infrastructure tied directly to production. Every one of those line items is an engineering decision that shows up as a margin.

### The infrastructure bill hiding in COGS

When a reviewer opens your cloud bill, they are looking for the shape of your costs, not just the total. Is spend growing linearly with revenue, or faster? Are you paying for idle capacity, over-provisioned instances, or a database tier three sizes too large for your load? A margin that improves as you grow tells a good story. A margin that erodes as you add customers is a structural warning, and the reviewer will want to know why before they price the round. Understanding this is the same discipline as [running the real cost math on self-hosting versus managed services](/post-self-host-or-managed): the architecture choice and the bill are the same decision.

### AI-native companies live in a different band

If your product runs on model inference, the rules shift. AI-first SaaS companies commonly run gross margins of 50 to 65% because inference and infrastructure costs are structurally higher. Several public SaaS companies began disclosing inference-cost ratios separately in early 2026, typically 4 to 9% of revenue. A sophisticated reviewer knows this and will not punish an AI company for a 60% margin the way they would a traditional one. What they will punish is not knowing your own inference cost per customer. [Your AI feature might be losing money on every user](/post-ai-feature-unit-economics), and diligence is where that becomes visible whether you tracked it or not.

## How to prepare your margin story

The goal is to walk into the review already knowing what the reviewer will find, and to have the explanation and the plan ready.

### Attribute your cloud spend to COGS correctly

Many early companies lump all infrastructure into one bucket and never separate production COGS from development, internal tools, and experiments. A reviewer who cannot see clean COGS assumes the worst version of your margin. Before diligence, split your cloud spend so that the production cost of serving customers is isolated. Sometimes this exercise alone reveals your real margin is better than your books suggested, because half the bill was never COGS in the first place.

### Know your cost to serve one customer

The single most useful number here is the marginal infrastructure cost of one more customer. If you can say "each customer costs us roughly 40 dollars a month to serve and pays us 400," the margin conversation is over in a sentence. If you cannot produce that number, the reviewer will build their own estimate, and it will be conservative. This is the same thinking that belongs in [how you price the work itself](/pricing): you cannot price or defend a margin you have not measured.

### Have the efficiency plan ready

If your margin is genuinely low, do not hide it. Name the two or three biggest cost drivers and the plan for each: reserved capacity instead of on-demand, a caching layer to cut database load, moving a heavy workload off a premium managed service. A costed efficiency plan turns a margin weakness into a growth lever, and reviewers respond to "here is how margin improves as we scale" far better than to silence.

## The number that ends the conversation

A founder who opens the diligence call with clean COGS, a per-customer cost to serve, and a one-page efficiency plan takes the margin question off the table. A founder who treats gross margin as purely a finance metric, and cannot connect it to the architecture underneath, invites the reviewer to keep pulling the thread until they find something worse than the margin itself.

If you want to understand what your infrastructure is really costing you per customer before an investor's advisor works it out for you, [a focused technical and cost review](/book-a-call) can produce that number and the plan to improve it while you still control the story.

## FAQ

### Is a low gross margin always a problem in diligence?

No. A low margin with a clear, architectural explanation and a credible efficiency plan is manageable, especially for AI-native products where 50 to 65% is normal. The problem is a low margin you cannot explain or improve, because that reads as a structural ceiling on the business.

### How do I separate production COGS from other cloud spend?

Tag or split your cloud resources by purpose: production serving, development, internal tooling, and experiments. Most cloud providers support cost allocation tags. The exercise often takes a day and frequently reveals your true serving margin is higher than your unsplit bill implied.

### Do investors expect AI companies to hit 75% margin?

Sophisticated ones do not. They know inference costs put AI-native margins in the 50 to 65% band and read the number in that context. What they expect is that you know your inference cost per customer and have a plan for it, not that you match traditional SaaS margins.
