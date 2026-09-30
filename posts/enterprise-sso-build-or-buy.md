---
title: An enterprise customer wants SSO. Build SAML or buy it?
slug: enterprise-sso-build-or-buy
date: '2026-09-30T04:28:26.682Z'
category: Decisions
excerpt: >-
  Your first enterprise deal needs SAML SSO. When to buy it from a provider,
  when building makes sense, and how to price it so it pays for itself.
description: >-
  Build SAML SSO yourself or buy WorkOS or Auth0? What enterprise SSO requires,
  what it costs per connection, and a decision rule for startups.
author: The founder of Fraction
readTime: 5
draft: false
---

The first enterprise deal usually arrives with a line in the security review that says "SAML SSO required." Your product has email and password, maybe Google sign-in. The customer is large enough to matter, the contract is worth more than your last three combined, and procurement will not sign until their employees can log in through Okta or Microsoft Entra ID. Now you have to decide, quickly, whether to build it or buy it.

The short answer: for your first handful of enterprise customers, buy SSO from a provider and ship it in days, not weeks. Building SAML yourself is possible, but the protocol is old, the edge cases are specific to each identity provider, and a mistake is a security hole in the exact place your biggest customer is looking hardest. Revisit the decision when the per-connection bill becomes a meaningful share of what those customers pay you.

## What the customer is actually asking for

"SSO" in an enterprise contract usually means more than one thing, and it helps to separate them before you price anything.

- **SAML or OIDC single sign-on.** Their employees log in through the company identity provider instead of a password you store. This is the must-have.
- **Directory sync, usually via SCIM.** When someone joins or leaves the company, their account in your product is created or disabled automatically. Security teams care a lot about the leaving part.
- **Enforced SSO.** Once SSO is on for their domain, password login is blocked for those users.
- **Audit logs.** A record of who logged in and changed what, exportable on request.

Read the security questionnaire carefully. Many first deals only require the first item and ask about the others as "roadmap." Knowing which is which changes the scope from a quarter to a week. I wrote more about getting through that document in [the security questionnaire that stalls your biggest deal](/post-security-questionnaire-deal).

## Why building SAML is harder than it looks

SAML is an XML-based standard from the mid-2000s. A basic integration against one identity provider is a few days of work with a good library. The trouble is everything after the first one.

Each customer's identity provider is configured by their IT team, and they configure it differently. Attribute names vary. Some send email in the NameID, some in a custom attribute. Certificates rotate on their schedule, not yours, and when one expires the customer's whole company is locked out of your product until someone notices. Clock skew between servers causes intermittent login failures that are painful to debug remotely.

Then there is security. XML signature validation has a long history of subtle vulnerabilities, including signature-wrapping attacks where a crafted response passes validation but asserts a different user. Well-maintained libraries handle this, but you are now responsible for keeping them patched and configured correctly. This is the same reasoning I use for [whether to build your own login at all](/post-build-your-own-auth): authentication is a place where "mostly works" is not good enough.

Finally, there is the support tail. Every new enterprise customer means a setup call with their IT admin, exchanging metadata, testing, and troubleshooting. If you build, your engineers run those calls. If you buy, most providers give the customer's admin a self-serve setup flow.

## What buying costs

The per-connection model is the norm. WorkOS, one of the common choices for startups, lists SSO at $125 per connection per month for the first 15 connections on its [public pricing](https://workos.com/pricing), with volume discounts after that. Directory sync is priced as a separate product on the same kind of table, so a customer that needs both costs roughly double. Auth0, Clerk, Stytch and others bundle SSO in different ways, often gated to higher plans, so compare the total for your expected first ten customers rather than the headline rate.

Now do the arithmetic that actually matters. If an enterprise customer pays you $30,000 a year and SSO plus directory sync costs you $250 a month, that is $3,000 a year, 10% of the contract. That is worth paying to close the deal in a week. If your enterprise tier is priced at $5,000 a year, the same bill is 60% of revenue, and you have a pricing problem, not an SSO problem.

## A decision rule that holds up

### Buy when

- You have fewer than about 20 enterprise customers who need SSO.
- Your enterprise contracts are large relative to the per-connection cost.
- You do not have an engineer who has shipped and operated SAML before.
- The deal has a deadline measured in weeks.

### Consider building when

- You have dozens of SSO customers and the provider bill is a real line in your gross margin.
- You have in-house identity experience and someone who will own it long term.
- Your product is itself in the identity or security space, where owning this is part of your credibility.

Even then, many teams keep the provider for new customers and only move the largest accounts. There is no prize for owning SAML.

## Charge for it

The most common mistake I see is not build versus buy. It is giving SSO away on every plan. SSO is a feature enterprises expect to pay for, and gating it to an enterprise tier is standard across the industry. If it costs you per connection, price it into the tier that includes it, so each new SSO customer improves your margin instead of eroding it. If you are unsure how to structure that tier, it is a good question for a [short call](/book-a-call), and the same thinking applies to how we [price our own work](/pricing): charge for the value, not the hours.

## FAQ

### Can we just offer Google and Microsoft sign-in instead of SAML?

Sometimes. Some mid-sized companies accept OIDC login through Google Workspace or Microsoft Entra ID. Larger ones typically want SAML through their identity provider, plus enforced SSO and deprovisioning. Ask the customer what their policy requires before you assume.

### How long does it take to add SSO with a provider?

For a team with a clean auth layer, a basic integration is usually days, not weeks. Most of the time goes into your own account model: how organizations, domains and roles map to the identity provider's users.

### What happens if we switch providers later?

Each customer's IT admin will likely need to update their configuration, which is a coordination cost. Keep the provider behind a thin interface in your code so the engineering side of a switch stays small.

### Is SSO required for SOC 2?

No. SOC 2 is about your controls, not a checklist of product features. But customers who ask for SOC 2 usually also ask for SSO, so the two tend to arrive together.

If a deal is waiting on SSO and you are unsure which parts of the questionnaire are real requirements, a [technical teardown](/teardown) will sort the must-haves from the roadmap items before you commit engineering time.
