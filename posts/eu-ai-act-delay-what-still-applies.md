---
title: The EU delayed its high-risk AI rules. Your AI duties did not move.
slug: eu-ai-act-delay-what-still-applies
date: '2026-09-22T04:33:00.701Z'
category: Knowing when
excerpt: >-
  The AI Omnibus pushed high-risk AI rules to December 2027. Transparency duties
  for chatbots and generated content started in August 2026.
description: >-
  The EU AI Act high-risk delay explained for startups: what moved to 2027, what
  applies now, and a one-week triage for your AI features.
author: The founder of Fraction
readTime: 7
draft: false
---

The EU has pushed back its rules for high-risk AI systems. The AI Omnibus amendment entered into force on 27 July 2026 and moved the high-risk deadline for stand-alone systems from 2 August 2026 to 2 December 2027. A lot of founders read the headline as "the AI Act is delayed". It is not. The transparency duties that touch most AI startups, such as telling people they are talking to an AI and marking AI-generated content, started applying on schedule on 2 August 2026.

So the honest answer for most pre-seed to Series A teams with EU users: the delay buys you time only if you are building something high-risk, like hiring, credit, or education tools. For everyone else, the part of the law that applies to you is already live, and the work is small if you do it now.

This is not legal advice. It is how I would triage it as the person responsible for the technical side of a small company, and where I would bring in a lawyer.

## What actually changed on 27 July 2026

The AI Omnibus was published in the EU's Official Journal on 24 July 2026 and entered into force three days later, just ahead of the original 2 August deadline. The changes that matter most for startups, as summarized by [Gibson Dunn](https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/) and the [Cloud Security Alliance](https://labs.cloudsecurityalliance.org/research/csa-research-note-eu-ai-act-high-risk-deadline-omnibus-20260/):

- High-risk AI systems listed in Annex III, the stand-alone categories such as recruitment and worker management, creditworthiness, education, and critical infrastructure, now face their obligations from 2 December 2027 instead of 2 August 2026.
- High-risk AI embedded in products that are already regulated, such as medical devices and machinery (Annex I), moves to 2 August 2028.
- The AI literacy duty in Article 4 was softened. Companies must support AI literacy among their staff rather than guarantee a particular level.
- Two new prohibited uses were added: systems that generate non-consensual intimate imagery or child sexual abuse material, with a transition period to 2 December 2026.

## What did not move

This is the part the headlines skipped.

- Transparency obligations under Article 50 apply from 2 August 2026. For systems already on the market, the requirement to mark synthetic output in a machine-readable way has a grace period to 2 December 2026.
- The prohibited practices in Article 5 have applied since 2 February 2025, with the highest penalty tier: up to 35 million euros or 7 percent of global annual turnover, whichever is higher.
- Obligations for general-purpose AI model providers have applied since 2 August 2025. If you build on a model from a major lab rather than training your own foundation model, those obligations mostly sit with your model provider, not with you.

## Which bucket is your product in?

Here is the triage I would run for a typical early-stage AI product. It takes about an hour with your product lead and your most senior engineer.

### Bucket 1: You build on a model and put it in front of users

This is most AI startups: a chat assistant, a copilot inside your SaaS, an AI that drafts emails or generates images for customers. You are probably not high-risk. But Article 50 likely applies to you now, in three ways worth checking:

1. If people interact directly with your AI, they need to be told they are dealing with an AI system, unless that is obvious from the context.
2. If your system generates synthetic audio, images, video, or text, the output should be marked in a machine-readable format so it can be detected as AI-generated. This duty sits with the provider of the generating system, which may be you, your model vendor, or both, depending on how your product is built.
3. If your users create deepfakes with your product, or you publish AI-generated text to inform the public on matters of public interest, disclosure duties can apply to the deployer.

For most products this is a few days of engineering: a clear notice in the chat interface, metadata or watermarking on generated media, and a check that your model provider already marks its output. Write down what you did and why. That short record is exactly what investors now ask for, which I covered in [what to say when investors ask how your AI is regulated](/post-ai-regulation-diligence-question).

### Bucket 2: Your AI makes or shapes decisions about people

If your product screens job candidates, scores creditworthiness, evaluates students, or does anything else on the Annex III list, you are the group the delay actually helps. You now have until 2 December 2027, not August 2026.

Do not spend that time waiting. High-risk obligations include risk management, data governance, technical documentation, logging, human oversight, and accuracy and robustness requirements. Those are engineering systems, not paperwork, and they are much cheaper to design in than to bolt on after two years of product decisions. A realistic plan for a seed-stage company:

- Now: confirm with counsel whether you are actually in Annex III, and whether any exception applies.
- Next two quarters: build decision logging and a human review path into the product, because both are useful anyway and hard to retrofit.
- 2027: technical documentation, conformity work, and whatever harmonized standards have been finalized by then.

The delay also changes a fundraising conversation. An investor looking at a hiring-tech or lending startup will ask whether the roadmap accounts for December 2027. Having a dated plan turns a risk into evidence that you understand your market. It belongs in the same place as the rest of your [three-page technical memo for investors](/post-tech-memo-investors).

### Bucket 3: You are close to a prohibited use

Some products drift toward prohibited territory without anyone deciding to: emotion recognition in workplaces or schools, scraping facial images to build recognition databases, or manipulative techniques that exploit vulnerabilities. These prohibitions have applied since February 2025 and carry the top penalty tier. If anything in your product is near this line, stop and get specialist legal advice before shipping more.

## A composite example

Picture a seed-stage startup selling an AI assistant to recruiting teams. It drafts job posts, summarizes candidate profiles, and, since last quarter, ranks applicants against the job description.

The first two features are Bucket 1. The assistant needs to make clear it is an AI, and generated text shown to candidates may need disclosure depending on use. That is live now.

The ranking feature is almost certainly Bucket 2, because recruitment and candidate evaluation are on the Annex III list. The founder read "AI Act delayed" and put the whole topic on hold. The right call was the opposite: ship the transparency changes this month, and use the extra fifteen months to build logging, human review, and bias testing into the ranking feature before the company has hundreds of customers depending on its current behavior.

## What I would do this month

If you have EU users and an AI feature, here is a short list that fits a small team:

1. Write a one-page inventory of every AI feature: what it does, which model it uses, and who sees its output.
2. Put each feature in a bucket above. Where you are unsure, mark it and ask counsel.
3. Ship the Article 50 basics for Bucket 1 features: AI interaction notice, output marking, and deepfake disclosure where relevant. Confirm what your model vendor already does so you do not duplicate it.
4. For any Bucket 2 feature, add decision logging and a human override path to the roadmap now.
5. Keep the inventory in your data room. It answers the diligence question before it is asked, and it fits alongside the rest of [the technical half of your data room](/post-technical-data-room).

None of this needs a compliance hire. It needs someone senior to own it for a week and then keep it current. That is the kind of scoped, time-boxed work a fractional CTO often picks up, and if you want a quick read on where your product lands, [book a call](/book-a-call).

## FAQ

### Did the EU delay the whole AI Act?

No. Only the high-risk obligations moved, to 2 December 2027 for stand-alone systems and 2 August 2028 for AI embedded in regulated products. Prohibited practices, general-purpose model obligations, and Article 50 transparency duties are already in effect.

### We only call an API from a major model provider. Do we have any obligations?

Possibly. The general-purpose model obligations mostly fall on the model provider. But if your product puts an AI in front of people or generates content for them, Article 50 transparency duties can apply to you as the provider or deployer of that system.

### Does this apply if we are a US startup?

It can. The AI Act applies based on where AI systems are placed on the market or used, and where their output is used, not only where the company is based. If you have EU users or customers, assume it may apply and check with counsel.

### When should we get a lawyer involved?

Before you rely on any conclusion that you are not high-risk for a feature that touches hiring, credit, education, or similar areas, and immediately if anything is close to a prohibited use. For the Bucket 1 transparency basics, engineering can usually start first and have counsel review.

### Is the watermarking deadline the same for new and existing products?

No. Machine-readable marking of synthetic output applies from 2 August 2026, with a grace period to 2 December 2026 for systems already on the market before then.
