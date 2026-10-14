---
title: 'Should you translate your product yet? Build so you can, later'
slug: should-you-translate-your-product-yet
date: '2026-10-14T03:47:12.391Z'
category: Decisions
excerpt: >-
  Most early products should not translate yet, but should be ready to. The few
  days of i18n work now that save months when a market asks.
description: >-
  When to localize your product, what being translation-ready means, and what it
  costs to retrofit i18n into a codebase later.
author: The founder of Fraction
readTime: 5
draft: false
---

Most early products do not need translating yet, but almost all of them should be built so that translating later is cheap. The difference costs a few days now: keep user-facing text out of the code, store times in UTC, and format dates, numbers and money with the locale tools your framework already has. Skip that, and adding a second language later becomes a slow project that touches every screen.

Founders bring me this question at two moments. One is early, when someone on the team suggests "doing i18n properly from the start" and the founder wonders if it is gold-plating. The other is late, when a big prospect in Germany, Brazil or Japan asks whether the product comes in their language, and the engineering estimate comes back as months. The second conversation is far more expensive than the first.

## What "ready to translate" means

Internationalization (i18n) is the engineering work that makes translation possible. Localization (l10n) is the actual translation and cultural adaptation for one market. You can do the first without the second, and that is usually the right call early on.

Being ready, in practice, means four things.

**Text lives in message files, not in components.** Every label, button, error and email subject is looked up by a key, even if English is the only file you have. Most web and mobile frameworks have a standard library for this. Using it from day one costs a little friction per screen. Retrofitting it means opening every file in the product and hunting for hard-coded strings, including the ones built by gluing pieces together.

**Sentences are not assembled from fragments.** "You have " + count + " new messages" breaks in nearly every other language, because word order and plural rules differ. Some languages have more than two plural forms. Use the message format your library supports, which handles plurals and variables inside one translatable sentence.

**Dates, times, numbers and money go through locale-aware formatting.** Store timestamps in UTC and convert at display time. Format "1,234.50" and "14/10/2026" with the platform's built-in formatting instead of writing it by hand. Store money as an integer amount plus a currency code, never as a float with an implied dollar sign.

**The layout survives longer text.** Translated text is often noticeably longer than English, and German is the classic example. Buttons with fixed widths and labels that truncate are the first things to break. If you might ever support Arabic or Hebrew, right-to-left layout is a bigger job, and worth knowing about before you design the whole interface around left-to-right assumptions.

None of these require choosing languages, hiring translators or buying a translation platform. They are habits, and they are cheapest when the codebase is small.

## When you should actually localize

Translating the product is a business decision, not an engineering one. I look for at least one of these signals before recommending it.

### A specific deal or market needs it

A named customer or channel partner needs the product in their language and the revenue covers the work. This is the cleanest case. Ask exactly what needs translating: often it is the end-user screens and emails, not the admin panel or the docs.

### Your traffic is already there

Your analytics show meaningful signups or usage from a non-English market, and those users convert or retain worse than English-speaking users. If they do just as well in English, translation may not be your bottleneck.

### The market will not buy in English

Some government, education, healthcare and consumer buyers require the local language by policy or by habit. If you are targeting them, localization is part of the product, not an add-on.

If none of these apply, the honest answer is: be ready, and wait.

## What it costs to retrofit

The retrofit is the part that surprises people. In a typical seed-stage web app I have seen it break down roughly like this:

- Finding and extracting strings: every component, template, validation message, email and push notification. In a codebase that has never done it, this is the bulk of the work, and it is tedious enough that strings get missed.
- Fixing concatenated sentences and plurals, which needs a developer to rewrite logic, not just move text.
- Dates, currencies and time zones, which often reveals real bugs that were already hurting your own users.
- Layout fixes once the first translation lands and buttons overflow.
- Text that lives outside the app: emails sent from your backend, PDF invoices, error messages from your API, onboarding copy stored in the database, the marketing site.

None of it is difficult engineering. It is wide engineering. It touches everything, which means it competes with every other priority for weeks, and it lands just when a big deal is waiting on it. That is why the cheap version, done early, pays for itself.

## A practical plan by stage

**Pre-product or MVP.** Use your framework's standard i18n library from the first screen, with English as the only language. Store times in UTC, money as integer plus currency. That is it.

**Early customers, one language.** Add a check in code review or linting that flags hard-coded user-facing strings. Keep emails and notifications in the same message system as the app.

**First localization.** Pick one language driven by a real customer or market. Translate the screens end users touch first. Have a native speaker who knows your product review the result in context; machine translation is a reasonable first draft, but a mistranslated button in a checkout flow costs more than the review.

**More than two languages.** This is when a translation management tool and a defined workflow for new strings start to pay off, so a release does not ship with half its new text untranslated.

If you are planning a market expansion and want to know what your codebase will actually need, a [technical teardown](/teardown) will tell you where the hard-coded assumptions are before you promise a launch date. For a broader view of where engineering effort is best spent this year, [book a call](/book-a-call).

## FAQ

### Is it overkill to set up i18n before we have international customers?

Setting up the library and keeping text out of components is not overkill. It costs little when the codebase is small. Buying translation tools and translating into several languages before anyone asks is usually premature.

### Can we just use machine translation for the whole app?

As a first draft, often yes. For checkout, billing, legal text and anything a customer could misunderstand in a costly way, have a fluent speaker review it in the live product.

### How long does adding a second language take?

It depends almost entirely on whether the codebase was ready. A product with strings already in message files can add a language mostly as translation work. One that was never prepared can spend weeks just extracting and fixing text before translation starts.

### Should we translate the marketing site first?

Often, yes. A translated landing page is a cheap way to test whether a market responds before you localize the product itself.
