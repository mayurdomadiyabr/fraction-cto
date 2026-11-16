---
title: An enterprise prospect wants single-tenant. Do you need it?
slug: enterprise-wants-single-tenant
date: '2026-11-16T02:24:13.065Z'
category: Knowing when
excerpt: >-
  What enterprise buyers mean by single-tenant, cheaper ways to meet the need,
  and when a dedicated instance is worth it.
description: >-
  An enterprise wants single-tenant hosting: the isolation options, what a
  dedicated instance really costs, and when to say yes.
author: The founder of Fraction
readTime: 5
draft: false
---

When an enterprise prospect asks for single-tenant hosting, most early startups should not say yes to a fully separate copy of the product. Find out what the buyer actually needs, which is usually stronger data isolation, a specific region, their own encryption keys or a clearer audit scope, and meet that with targeted changes to your shared platform. A true dedicated instance makes sense when the deal is large enough to pay for running and upgrading a second product, and when you expect more customers like it.

The request often arrives late in a deal, phrased as a requirement in a security questionnaire or a redline. Founders feel they must answer yes or lose the contract. Usually there is a third option.

## What "single-tenant" can mean

Buyers use the term loosely, and so do vendors. It helps to separate the options, from lightest to heaviest.

### Logical isolation in a shared system

Everyone runs on the same application and database, but every query is scoped to a tenant and the boundary is enforced in code and tested. This is how most SaaS products work. If yours relies on developers remembering to add a filter, read [tenant isolation by memory](/post-tenant-isolation-by-memory) first; that is the gap buyers are really worried about.

### Separate database or schema per customer

The application is shared, but this customer's data lives in its own database or schema. This gives a clear data boundary, easier per-customer backup and deletion, and a simpler story for auditors, without running a second application.

### Customer-managed encryption keys

Data stays in your shared system but is encrypted with a key the customer controls through their cloud provider's key service. They can revoke access. Some cloud databases and storage services support this directly.

### Dedicated data plane

A shared control plane (sign-up, billing, admin) with this customer's compute and storage in a separate environment, sometimes in their chosen region or cloud account.

### Fully dedicated instance

A complete, separate copy of your product and infrastructure for one customer. Every deploy, migration and incident now happens twice.

Each step down this list adds cost. The last one adds the most, and the cost is permanent.

## Why the full version is expensive

The hosting bill is the smallest part. The real costs, in the products I have seen, are these:

- **Upgrades.** Every release must reach the dedicated instance too. If it falls behind, you are maintaining two versions of your product.
- **Migrations.** Database changes must run in each environment. A migration that fails in one is an incident nobody else has.
- **Monitoring and on-call.** Another set of alerts, dashboards and failure modes.
- **Support.** Bugs that only happen in one environment take longer to diagnose.
- **Sales precedent.** Once one customer has it, the next large prospect will ask too, and your price for it is now on record.

As a rough rule of thumb, not a benchmark, I would assume a dedicated instance takes a noticeable slice of one engineer's time ongoing, before any customization. If the contract does not cover that, the deal loses money no matter how good the logo is.

## The questions to ask before answering

Treat the request as a discovery conversation. Ask the buyer's security or procurement team:

1. **What risk are you trying to reduce?** Data mixing with other customers, regulatory location, access by your staff, or audit scope.
2. **Is this a hard requirement or a preference?** Many questionnaires list single-tenant as one acceptable way to meet a control, not the only one.
3. **Would a separate database, customer-managed keys or a specific region meet it?**
4. **Do you need it in your own cloud account, or in ours?**
5. **What certifications or documents would satisfy the same concern?** Sometimes a SOC 2 report, a pen test summary and a clear data-flow diagram resolve it.

The answers usually narrow the request to one or two concrete controls. Our post on [handling a security questionnaire that blocks a deal](/post-security-questionnaire-deal) covers the broader process.

## When saying yes is right

A dedicated deployment can be a good decision when:

- The contract value clearly covers the ongoing engineering cost, not just the setup.
- You expect several similar customers, such as regulated industries or government, so the work becomes a product line.
- Your deployment is already automated. If you can create a full environment from code in under a day, the marginal cost drops a lot. If your environment was built by hand, see [the server nobody can rebuild](/post-server-nobody-can-rebuild) before promising anything.
- The customer accepts your release schedule, so the instance does not fall behind.

## How to say yes without wrecking your roadmap

If you go ahead, set rules up front:

- **Same code, same version.** No customer-specific branches. Configuration only.
- **Charge for it explicitly.** A separate line item for dedicated hosting, priced to cover ongoing work, with a minimum term.
- **Automate before you deploy.** Infrastructure as code and automated migrations for both environments.
- **Write down what is different.** Which features, integrations or support terms change for this customer.

Pricing this kind of work is tricky early on. Our notes on [pricing an enterprise paid pilot](/post-price-an-enterprise-paid-pilot) apply here too.

## FAQ

### Is single-tenant more secure than multi-tenant?

Not automatically. It changes where the isolation boundary sits. A well-built multi-tenant system with enforced isolation can be safer than a poorly maintained dedicated instance that misses security updates.

### Can we start multi-tenant and add single-tenant later?

Yes, and it is the easier direction. Moving a product built for one customer per instance to a shared model is much harder than adding dedicated options to a shared one.

### What should we charge for a dedicated instance?

Enough to cover hosting plus the ongoing engineering time for upgrades, monitoring and support, with margin. Price it as a premium tier with a minimum contract length, not a one-time setup fee.

### Will saying no lose the deal?

Sometimes, but less often than founders fear. Offering a specific alternative control, with documentation, often satisfies the security team.

If a large deal hinges on a hosting or isolation question and you want an outside view on what to offer, [book a call](/book-a-call). For a broader look at whether your architecture is ready for enterprise buyers, see our [technical teardown](/teardown) or [pricing](/pricing).
