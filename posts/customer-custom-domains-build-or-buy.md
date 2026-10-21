---
title: Customers want their own domain on your app. Build or buy?
slug: customer-custom-domains-build-or-buy
date: '2026-10-21T11:48:10.539Z'
category: Decisions
excerpt: >-
  Custom domains for customers mean DNS you do not control, certificates for
  domains you do not own, and tenant routing. Where to build and where to buy.
description: >-
  Custom domains look like a settings field but involve DNS, TLS certificates
  and tenant routing. When to build it, use a host API, or buy it.
author: The founder of Fraction
readTime: 7
draft: false
---

A customer asks to run your product on their own domain: portal.theirbrand.com instead of theirbrand.yourapp.com. It sounds like a settings field. It is actually three systems: DNS your customer controls, TLS certificates you have to issue and renew for domains you do not own, and routing that maps an incoming hostname to the right tenant. For most early-stage teams, the right answer is to buy the certificate and edge layer from a provider and build only the small piece that maps domains to tenants.

The decision is not "can we do it". Almost any team can get one custom domain working in an afternoon. The decision is whether you want to own what happens at domain number 300, when a customer's DNS is half-configured, a certificate fails to renew at 2am, and another customer cancels but leaves their DNS pointing at you.

## What a custom domain actually involves

Before comparing options, it helps to see the moving parts. Founders tend to underestimate this feature because the first demo hides most of them.

### DNS that you do not control

Your customer has to point their hostname at you, usually with a CNAME record. You cannot do this for them, and you cannot fix it when they get it wrong. A meaningful share of your support load for this feature will be "I added the record and it still does not work", where the answer is a typo, a proxy setting on their side, or DNS that has not propagated yet.

Apex domains make this harder. The DNS standard does not allow a CNAME at the root of a domain, so a customer who wants theirbrand.com (not a subdomain) needs their DNS provider's ALIAS or ANAME feature, or an A record pointing at a stable IP address you guarantee will not change. If your hosting cannot offer a stable IP, tell customers to use a subdomain. Most will accept that.

### Certificates for domains you do not own

Every custom domain needs a valid TLS certificate, or browsers show a full-page warning. You have to issue a certificate for each customer hostname, renew it before it expires, and handle the cases where renewal fails because the customer changed their DNS.

If you do this yourself with Let's Encrypt, read its published rate limits before you design anything. At the time of writing they include 300 new orders per account every 3 hours and 5 failed validations per hostname per account per hour. One bulk migration or one bug that retries failed validations in a loop can lock you out for a while. Certificate lifetimes are also getting shorter across the industry, which means more renewals, not fewer. We covered why expiry is a recurring outage pattern in [the domain or certificate that quietly expired](/post-domain-or-certificate-expired).

### Routing a hostname to the right tenant

Once traffic arrives with the customer's hostname, your app has to look it up and serve the right account. This part is genuinely yours: it touches your data model, your caching, and your security model. If a lookup falls through to a default tenant, you can show one customer's login page under another customer's brand. That class of bug is closely related to [tenant isolation that lives only in someone's memory](/post-tenant-isolation-by-memory).

### Verification and cleanup

Two security issues come with this feature. First, you must verify that the person adding a domain controls it, usually with a TXT record, or someone can claim a domain they do not own. Second, when a customer leaves, their DNS often keeps pointing at you. If you release that hostname and someone else can claim it on your platform, you have created a subdomain takeover risk for your former customer. You need a lifecycle for domains, not just a form to add one.

## The three ways to ship it

### Option 1: build it on your own servers

You run a reverse proxy that can issue certificates on demand, such as Caddy's on-demand TLS, or you write the ACME integration yourself. This is the cheapest option in direct cost and the most expensive in attention.

It is a reasonable choice if you already operate your own servers, have someone who enjoys this layer, and expect a small number of custom domains. If you use on-demand issuance, protect it with an "ask" check so the proxy only requests certificates for hostnames that exist in your database. Without that check, anyone can point a random domain at you and burn your rate limits.

### Option 2: use your host's domain API

If you deploy on a platform that already manages certificates for your own domains, check whether it offers an API to add customer domains to your project. Several hosting platforms do. This is often the fastest path: you call an API when a customer adds a domain, show them the DNS record to create, and poll for status.

The catch is limits and pricing. Check how many domains a project can hold, whether there are per-domain fees at your plan level, and what happens to customer domains if you ever move hosts. Moving 400 customer domains is a migration project, because every one of them needs DNS that your customers control.

### Option 3: use a dedicated custom-hostname product

Edge providers sell this as a product. Cloudflare's version, Cloudflare for SaaS, lists 100 custom hostnames included on its self-serve plans and $0.10 per additional hostname per month at the time of writing, with enterprise pricing above that. Other providers offer similar services. You get certificate issuance and renewal, verification flows, and an edge in front of your app.

For a B2B product charging even a modest monthly fee per customer, a cost measured in cents per domain is noise. What you are buying is not the certificate. It is not having to think about certificates.

## How to decide

Use three questions.

**How many custom domains in 18 months?** If the honest answer is under 20, any option works, including manual setup. If it is hundreds, pick something with an API and good status reporting, because you will need to automate onboarding and support.

**Who carries the pager?** If nobody on the team would notice a failed renewal until a customer emailed, do not build this layer yourself. Buy it.

**Is the domain the product?** For a website builder or a hosting platform, custom domains are core and deserve real investment. For a customer portal or a white-label dashboard, they are a checkbox in the enterprise tier. Spend accordingly. This is the same reasoning as our general [build, buy, or wait decision tree](/post-build-buy).

A common pattern that works well for early-stage teams: buy the certificate and edge layer, build the domain-to-tenant mapping and the onboarding screen, and write down the lifecycle (add, verify, active, failed, removed) as an explicit status on the domain record.

## What to build regardless of the option

- A domain record per tenant with a status field, not a free-text column.
- A clear onboarding screen that shows the exact DNS record to create and a "check again" button.
- An alert when any domain moves from active to failed, routed to a person, not a log.
- A removal step when an account closes that detaches the hostname and stops serving it.
- A short help article for apex domains that recommends a subdomain.

### Price it like the work it is

Custom domains add support load and some ongoing cost. Many B2B products put them in a higher tier or charge a small add-on. That is not greed. It reflects real work, and it keeps the feature with the customers who value it.

## FAQ

### Can I just ask customers to set up their own certificate?

You can, but almost nobody should. Customers would have to upload certificates and renew them on time. Some will forget, and their portal will show a security warning with your product behind it. Issue and renew the certificates yourself or through a provider.

### Do custom domains help my customers' SEO?

Possibly, if the content on that domain is public and indexable, because it builds their domain rather than yours. For logged-in portals it mostly matters for brand and trust, not search.

### What breaks most often in production?

Renewals that fail because a customer changed DNS, apex domains that cannot use a CNAME, and old domains still pointing at you after a customer leaves. Design for those three and you avoid most incidents.

### When should I bring in outside help?

If an enterprise deal depends on custom domains and SSO in the same quarter, get someone to review the architecture before you commit to dates. A [teardown](/teardown) of your current setup is a quick way to find the weak points. If you want to talk it through, [book a call](/book-a-call).
