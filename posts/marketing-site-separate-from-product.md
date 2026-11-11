---
title: Should your marketing site live in your product codebase?
slug: marketing-site-separate-from-product
date: '2026-11-11T04:03:57.000Z'
category: Decisions
excerpt: >-
  Why most early teams should keep the marketing site separate from the product,
  and when one codebase makes sense.
description: >-
  Marketing site in the product repo or separate? Ownership, risk, SEO and the
  cases where one codebase wins.
author: The founder of Fraction
readTime: 5
draft: false
---

Should your marketing website live in the same codebase as your product? For most early startups, no. Put the marketing site on a separate site builder or a separate small repository that marketing can edit without an engineer, and keep the product app focused on the product. Merge them only when there is a concrete reason, such as shared pricing logic or heavy programmatic SEO that needs your product data.

This sounds like a minor tooling choice. It is actually a decision about who can change what, how fast, and what breaks when they do.

## How the two get tangled

The usual story: the first engineer builds the product in a modern framework and adds the landing page as one more route because it is quick. Then come a pricing page, a blog, a few landing pages for campaigns, a careers page. Each needs an engineer, a pull request and a deploy. Marketing waits days for a headline change. Engineers resent being a content management system. Eventually someone proposes a rebuild.

The reverse also happens. A no-code site builder hosts the marketing pages, then someone embeds a signup form, a pricing calculator and a dashboard preview into it with custom scripts, and the marketing site becomes an undocumented part of the product.

## Why separate is the default

### Different owners, different speed

Marketing pages change weekly. Product code should change through review and testing. Putting both through the same pipeline either slows marketing down or loosens controls on the product. Separate systems let each move at its natural speed.

### Different failure modes

A broken marketing page costs you some signups for an hour. A broken product deploy can cost you customers. When the two share a deploy, a typo fix on the homepage carries the risk of the whole app. Separating them removes that coupling.

### Hosted site builders are good now

Visual builders handle responsive layout, forms, basic SEO fields, hosting and a CMS for blog content. For a team without a dedicated web developer, that is usually more polish per hour than hand-built pages in the product repo. Your engineer's time is better spent on the product.

### Cleaner security boundary

Marketing sites tend to collect third-party scripts: analytics, chat widgets, ad pixels, heatmaps. Keeping them off the domain and origin where your logged-in app runs reduces what a compromised script could reach. A common split is the marketing site on the main domain and the product on an app subdomain.

## When one codebase makes sense

### Pricing and plans must match exactly

If your pricing page reads plans and prices from the same source the billing system uses, keeping them together avoids drift. A separate site can still do this by reading from an API, but some teams find one codebase simpler.

### Programmatic SEO from product data

If your growth plan involves thousands of pages generated from product data, such as public templates, directories or integration pages, those pages need your data model and are effectively product features. That work belongs with engineering.

### You have a web team

Once you have someone whose job is the website, they may prefer a code-based setup with a headless CMS. That is a good choice when the person maintaining it is a developer, not a founder squeezing it in at night.

## Four questions that decide it

Ask these, in order:

1. **Who will edit the site most weeks?** If the answer is a non-engineer, separate it.
2. **Does any page need live product data?** If only pricing, serve it from an API or update it by hand. If thousands of pages, keep that part with engineering.
3. **Does the marketing site need logged-in state?** Usually not beyond "Log in" and "Start trial" links. If it does, keep that piece in the app.
4. **Who owns the domain, DNS and certificates?** Write it down. Split setups fail at the seams, and a lapsed domain or certificate takes both sites down together; see [what happens when the domain expires](/post-domain-or-certificate-expired).

## Making a split setup work

A separate marketing site is not free of engineering. A few things need care:

- **Domain layout.** Main domain for marketing, app subdomain for the product, with redirects tested. Decide early; moving later costs SEO effort.
- **Analytics across both.** Signups start on the marketing site and finish in the app. Configure your analytics so a visitor is followed across the boundary, or you will not know which pages drive signups. If you are weighing analytics tools, my notes on [building or buying product analytics](/post-build-product-analytics-or-buy) apply here.
- **Consistent design.** Share a small set of colors, fonts and button styles so the jump from site to app does not feel like a different company.
- **Export and ownership.** Make sure the site builder account is owned by the company, not a contractor's personal account, and that you can export content if you ever leave.

## The cost of getting it wrong

Neither choice is fatal, and both are reversible. The real cost is time. A marketing site inside the product repo can quietly consume a day or two of engineering a month on copy edits and campaign pages. Across a year, that is weeks of product work for changes a site builder lets marketing do in minutes. Conversely, a no-code site hacked into a product front end can become a migration project you never planned for.

If you are early and have one or two engineers, protect their time. Separate the marketing site, keep the boundary clean, and revisit when the website has its own owner. If you are unsure where your engineering hours are going, that is a question a fractional CTO answers quickly; see [how it compares to hiring](/comparison).

## FAQ

### Is a site builder bad for SEO?

Not inherently. Modern builders output crawlable pages and let you set titles, descriptions and redirects. Content quality and site structure matter far more than whether pages came from a builder or a framework.

### Should the blog live on the marketing site or a subdomain?

On the main domain, usually as a subfolder, alongside the marketing pages. It is content, owned by marketing, and benefits from the same domain authority.

### Our landing page is already in the app. Should we move it now?

Only if engineers are spending real time on marketing edits or deploys are being blocked by content changes. Otherwise move it when you next redesign the site.

### Can the pricing page stay accurate on a separate site?

Yes. Either update it by hand with a checklist whenever billing changes, or have the site read plan data from a small public endpoint. For most early teams, a checklist is enough.

If you want help deciding what your engineers should and should not be spending time on, [book a call](/book-a-call).
