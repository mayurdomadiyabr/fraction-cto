---
title: A customer wants to self-host. Should you let them?
slug: customer-wants-self-host
date: '2026-07-15T13:14:55.310Z'
category: Decisions
excerpt: >-
  A big customer says the product must run in their own cloud. Self-hosted,
  single-tenant, and BYOC are not the same, and the wrong yes can reshape your
  roadmap for years.
description: >-
  Self-hosted, single-tenant, and BYOC compared: how to decide when a big
  customer wants your product in their own cloud.
author: The founder of Fraction
readTime: 6
draft: false
---

A big customer gets to the end of the sales cycle and their security team says the product has to run inside their own cloud, not yours. The deal is real, the number is real, and suddenly you are staring at a decision that will shape your engineering roadmap for years. Say yes too fast and you sign up for an operational burden that grows with every customer. Say no and you may walk away from the contract that would have made the quarter. This is one of the hardest decisions an early-stage company faces, and most founders make it under deal pressure with no framework at all.

The first thing to get straight is that "let them host it" is not one option. It is three, and they are not the same.

## Three models people confuse for each other

When a customer asks to run your software themselves, they usually cannot tell you which of these they actually need. You have to.

Single-tenant SaaS still runs in your cloud, on infrastructure dedicated to that one customer. You keep full control of operations, deployment, and updates. The customer gets isolation but their data still sits in your account. This is the lightest lift and often satisfies a "we need isolation" requirement without any of the pain of the other two.

Self-hosted means the software runs in the customer's environment and the customer is responsible for running it. You ship them a package and a manual. This looks appealing because it seems to push the work onto them, but it creates a support and versioning nightmare: every customer ends up on a different version, and when something breaks you are debugging an environment you cannot see.

Bring your own cloud, or BYOC, means the software runs inside the customer's cloud account but you still operate it through a control plane. The data never leaves their perimeter, but you handle updates, scaling, and monitoring. Done well it feels like SaaS to the customer and keeps you in control of the software. Done badly it becomes an engineering tax that scales linearly with your customer count.

Most enterprise "self-host" requests are actually satisfied by single-tenant or BYOC. The customer wants control of the data and the perimeter, not the job of operating your software. Find out which before you commit to anything.

## What you can charge, and what it costs you

The reason this decision is tempting is that the pricing is genuinely different. A product you sell for 50,000 dollars a year as multi-tenant SaaS can command 150,000 to 250,000 dollars a year in a BYOC deployment. Same functionality. What the customer is paying for is the right to run it inside their own environment, under their own compliance posture. A three-to-five-times multiple is not unusual, and for a company in a regulated industry it can be the only way they are allowed to buy at all.

But the cost side is where founders underestimate badly. You are now supporting deployment into an environment you do not control. You need infrastructure-as-code so a deployment is repeatable, a control plane so updates do not require a human in the customer's account, and monitoring that works across boundaries you cannot see through. The first BYOC customer is not a feature, it is a second product. If you build it as a one-off to close one deal, you will pay for that shortcut with every deal after it.

The trap is doing it manually for the first customer because the contract is worth it, then discovering the second and third customers each need the same manual work, and now a third of your engineering time is deployment plumbing instead of product.

## How to make the call

Here is the decision I walk founders through when this lands on their desk.

### Is this one customer or a market?

If a single large customer wants on-prem and no one else is asking, that is a custom services engagement, and you should price it like one: high enough that it is worth the distraction, with a scope that does not quietly commit you to a product line. If the requirement is showing up across your enterprise pipeline, that is a signal the market needs it, and it is worth building properly. One deal does not justify a platform. A pattern does. Telling those two apart is the same discipline as noticing when [your biggest customer is quietly writing your roadmap](/post-biggest-customer-roadmap).

### Can you afford to build it right?

If you decide to do it, budget for the real version: automated, repeatable deployment and a control plane, not a hand-built install for one account. If you cannot afford that engineering investment right now, you are not ready to offer self-hosting, and taking the deal will cost you more than it brings in. It is better to say "not yet" than to say yes and drown.

### What is the requirement really about?

Most self-host requests trace back to data residency, security, or compliance rules: HIPAA, PCI, data location laws, or an internal policy that vendor software cannot hold their data. Once you know the actual requirement, you can often meet it a cheaper way. A single-tenant deployment, a data-residency guarantee, or the right answers on a security review sometimes closes the deal without any self-hosting at all. This is the same dynamic behind [the security questionnaire that stalls a big deal](/post-security-questionnaire-deal): the blocker is a requirement, and requirements have more than one solution.

The worst outcome is committing to full self-hosting to satisfy a requirement that single-tenant would have met, and inheriting all the operational pain for none of the necessary reason.

## The decision in one line

Offer the lightest deployment model that satisfies the customer's actual requirement, price the heavy models like the product commitment they are, and only build self-hosting for real when the demand is a pattern and you can afford to automate it. If you are staring at this decision right now with a term sheet or a contract on the table, it is worth a second opinion before you sign. That is the sort of call founders [book with me](/book-a-call) when a single deal is about to reshape the roadmap.

## FAQ

### A customer is offering a big contract if we self-host. Should we just take it?
Not before you know which deployment model they actually need and what building it properly will cost you. A single large check that commits you to an unfunded second product can be more expensive than the revenue it brings. Price it to cover the real cost, or find a lighter model that meets the requirement.

### What is the difference between single-tenant and BYOC in plain terms?
Single-tenant runs in your cloud on infrastructure dedicated to one customer, so you keep operating it and their data stays in your account. BYOC runs inside the customer's own cloud account, so the data stays in their perimeter, but you still operate the software through a control plane. Single-tenant is easier for you; BYOC is what customers with strict data-residency or compliance rules usually require.

### Why do customers pay so much more for self-hosted or BYOC?
They are not paying for more features. They are paying for the right to run the software inside their own environment, under their own security and compliance controls. For a regulated buyer that can be the difference between being allowed to purchase and not, which is why a three-to-five-times price multiple over standard SaaS is common.

### How do I avoid self-hosting becoming an engineering tax?
Automate it before you scale it. Repeatable infrastructure-as-code deployments and a control plane that handles updates without a human in the customer's account are what keep the cost flat as you add customers. If every new self-hosted customer needs manual setup and hand-managed upgrades, your operational cost grows in a straight line with your customer count, and it will eat your roadmap.
