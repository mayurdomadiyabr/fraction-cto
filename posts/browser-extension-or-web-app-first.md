---
title: Build a browser extension or a web app first?
slug: browser-extension-or-web-app-first
date: '2026-11-11T04:03:56.263Z'
category: Decisions
excerpt: >-
  When an extension should be your first product, when it should not, and how to
  keep platform risk contained.
description: >-
  Extension or web app first: when in-page value justifies an extension, the
  platform risks, and a thin-client architecture.
author: The founder of Fraction
readTime: 6
draft: false
---

If your product could live as a browser extension, the question is usually not "extension or web app" but "which one do I build first, and how much of the product should depend on it". My default answer: build the extension first only when the value happens inside someone else's page, and keep the core logic, data and accounts in a normal web backend so the extension is a thin client you could replace.

Founders get pulled toward extensions because they look cheap. A small JavaScript bundle, no app store fees worth mentioning, instant distribution through one store. That picture is half right. The build is often cheap. The dependency is not.

## When an extension is the right first product

An extension earns its place when the user's work happens on pages you do not control. If your product reads, annotates, fills in or augments something inside Gmail, LinkedIn, a CRM, a support desk or a code review tool, a standalone web app forces the user to copy and paste between tabs. That friction kills adoption faster than any missing feature.

### The job is "in the flow" of another tool

Good extension products shorten a loop the user already runs dozens of times a day. Pull data about the person whose profile I am viewing. Draft a reply inside the support ticket. Flag a risky clause in the contract I have open. If your pitch contains the words "without leaving", you probably need an extension somewhere in the product.

### You need a low-friction trial

Installing an extension is one click and a permission prompt. For a bottom-up product sold to individuals inside companies, that can be the difference between a trial and a bounce. It is also a natural wedge: the extension proves value, and the web app is where the team plan, billing and admin live later.

## When it is the wrong first product

### The value is a workflow, not a moment

If users need to set up projects, invite teammates, manage records and see history, you are building an application. Cramming that into an extension popup or side panel produces a cramped, fragile product. Build the web app and add an extension later as an entry point.

### Your buyer is IT, not the user

Many companies restrict which extensions employees may install, and Chrome lets administrators allow-list or block extensions through policy. If you sell to regulated or security-conscious companies, the extension that sailed through your design-partner pilot may be blocked on day one of the real rollout. Ask your first three enterprise prospects how they manage extensions before you bet the product on one.

### The page you depend on changes without notice

An extension that reads another product's page is coupled to that product's markup. When the host site ships a redesign, your selectors break, often on a Tuesday afternoon with no warning. I have seen teams spend a third of their engineering time keeping up with one host site. If the host offers an API, building on the API is usually more stable than scraping its page, even when the extension is the front end.

## The platform risk is real, not theoretical

Browser extensions run under rules set by the browser vendor, and those rules change. The clearest recent example is Chrome's move from Manifest V2 to Manifest V3. Per [Google's own timeline](https://developer.chrome.com/docs/extensions/develop/migrate/mv2-deprecation-timeline), Manifest V2 extensions were disabled by default in 2025, Chrome 138 was the last version that could run them at all, and the remaining Manifest V2 extensions were scheduled for removal from the Chrome Web Store on 31 August 2026. Teams that had built on background pages and blocking web requests had to rework real parts of their products on the browser's schedule, not their own.

You cannot avoid this class of risk with an extension. You can contain it:

- **Keep business logic on your server.** The extension collects context and shows results. Decisions, data and models live in your backend, where you control the runtime.
- **Request the narrowest permissions you need.** Broad permissions such as access to all sites slow store review, scare security teams and make you a bigger target. Ask for host permissions only on the sites you actually support.
- **Treat store review as a release dependency.** Updates go through review, and review time varies. Do not plan a launch that depends on an extension update going live the same day.
- **Plan for more than one browser early, but ship one first.** Most of the market is Chromium-based, and Firefox and Safari have their own packaging and review. Pick one, prove the product, then port.

## A sensible architecture for a first version

The pattern I recommend for most early teams:

1. **A normal web backend with accounts and an API.** Users sign in once. The extension calls the same API a future web app would call. If you are unsure how much API you need, my notes on [whether to build an API](/post-should-you-build-an-api) cover the trade-off.
2. **A thin extension.** Content scripts read only what they need from the page, send it to your backend, and render the response in a side panel or inline element. No secrets in the extension bundle; anything shipped to the browser can be read by anyone who installs it.
3. **A small web app from day one, even if it is only settings and billing.** You will need it for account management, payments, and the admin view a team buyer asks for. Having it early also gives you a fallback channel if the extension is blocked or broken.
4. **Monitoring on the host-page integration.** A simple synthetic check that loads the host page and confirms your selectors still match will catch breakages before customers report them.

This shape keeps the expensive, durable work in code you control, and keeps the extension cheap to rewrite when the browser or the host site changes the rules.

## Cost and team implications

An extension does not need a specialist, but it does need someone who understands browser security models, permission scopes and the store's policies. A generalist full-stack engineer can build a solid first version in a few weeks if the backend already exists. The ongoing cost is maintenance against host-site changes and browser updates, which is easy to underestimate in a plan that only budgets for the build.

If an agency is quoting you, ask them where the business logic will live and how they will handle host-site breakage. An answer that puts everything inside the extension is a warning sign. A [second opinion on the plan](/teardown) before you sign is usually cheaper than reworking an extension-only architecture six months in.

## FAQ

### Is a browser extension cheaper to build than a web app?

The first version often is, because the surface is small. The total cost is not necessarily lower, because you take on maintenance against another site's markup and the browser vendor's policy changes. Budget for that ongoing work, not just the build.

### Can an extension be the whole product?

For narrow, individual-user tools, sometimes. For anything sold to teams, you will need a web app for accounts, billing and administration. Build the backend so both can exist.

### Should we support Firefox and Safari at launch?

Usually not. Prove the product on one browser, most often Chrome, then port. Porting is much easier when the logic sits on your server and the extension is thin.

### How do we reduce the risk of being blocked by enterprise IT?

Ask for minimal permissions, publish a clear security and data-handling page, and offer a web-app path that works without the extension. Ask prospects about their extension policy during the sales process, not after the contract.

If you are deciding whether your product should start as an extension and want someone to pressure-test the architecture, [book a call](/book-a-call) and we will go through it together.
