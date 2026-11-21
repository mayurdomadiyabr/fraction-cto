---
title: OpenAI shuts off GPT-4o and GPT-4.1 on Jan 14. Plan the switch
slug: openai-gpt-4o-api-shutdown-january
date: '2026-11-21T04:37:24.845Z'
category: Vendors
excerpt: >-
  OpenAI's API stops serving GPT-4o, GPT-4o mini, GPT-4.1 and GPT-4.1 mini on
  January 14, 2027. How to find your calls, test a replacement and switch
  safely.
description: >-
  GPT-4o and GPT-4.1 leave the OpenAI API on Jan 14, 2027. Find every call, test
  the replacement on real inputs, and switch before the holidays.
author: The founder of Fraction
readTime: 6
draft: false
---

If your product calls OpenAI's API with GPT-4o, GPT-4o mini, GPT-4.1 or GPT-4.1 mini, those calls stop working on January 14, 2027. OpenAI's [deprecations page](https://developers.openai.com/api/docs/deprecations) lists all four model families for shutdown on that date, with notice dated October 14, 2026. You have under eight weeks, and two of them are the holidays. Find every place you call these models now, test a replacement on your own real inputs, and switch before the end of December so January is for cleanup, not firefighting.

This matters more for small teams than the headline suggests. GPT-4o mini in particular became the default cheap model in a lot of early-stage products. It is often called from places nobody remembers: a classification step in a background job, a summary in a weekly email, a support-ticket tagger a contractor wrote last year.

## What is actually changing

Precision first, because founders tend to mix up two separate things.

### The API, not ChatGPT

OpenAI already removed GPT-4o and GPT-4.1 from the ChatGPT app earlier this year, according to its [help centre](https://help.openai.com/en/articles/20001051-retiring-gpt-4o-and-other-chatgpt-models). That did not affect developers; the models stayed in the API. This is the API shutdown. After January 14, requests that name these models will fail rather than quietly fall back to something else.

### Which models

At the time of writing, the deprecations page lists dated snapshots of GPT-4o (including gpt-4o-2024-08-06 and gpt-4o-2024-11-20), GPT-4o mini (gpt-4o-mini-2024-07-18), GPT-4.1 (gpt-4.1-2025-04-14) and GPT-4.1 mini (gpt-4.1-mini-2025-04-14). If your code uses a short alias like "gpt-4o" rather than a dated snapshot, treat it as affected too. Check the page yourself for the exact list, and for the recommended replacement it names (gpt-6-luna at the time of writing).

### Nearby dates worth knowing

Some related models have their own dates. At the time of writing the same page lists the gpt-4o transcription models for shutdown in late February 2027, and developers have reported separate notices about OpenAI's text-to-speech models. If you use voice features, check those dates separately rather than assuming they match.

## Why "just change the model name" is not the plan

Swapping a string in a config file takes five minutes. Knowing the product still works afterwards is the actual job.

### Outputs change shape

A newer model may write longer answers, format lists differently, handle JSON slightly differently, or refuse things the old one allowed. If any code parses the output, such as pulling a category label out of a sentence, a small change in phrasing can break it silently.

### Costs and speed change

The replacement may be priced differently per token, use more tokens per answer, or respond faster or slower. Your unit economics for AI features can move in either direction. I would not assume it is cheaper or more expensive; measure it on your own traffic. Our piece on [the Gemini Flash price change](/post-gemini-flash-price-doubles-january) walks through how to estimate this for a real feature.

### Prompts were tuned to the old model

Most teams adjusted their prompts by trial and error until the old model behaved. Those adjustments may now be unnecessary, or actively unhelpful. Expect to retune some of them.

## A plan for the next six weeks

This is the order I would work in. For a typical seed-stage product with a handful of AI features, it is one to two weeks of a single engineer's time, spread out. Treat that as a rule of thumb; it grows quickly if AI calls are scattered across many services.

### Week one: find every call

Search the codebase, infrastructure config and environment variables for every model name above, including aliases. Then check OpenAI's usage dashboard, which shows usage by model, for traffic you cannot account for in the code. That usually turns up the forgotten script or the no-code automation someone connected to your API key. Do not forget third-party tools that use your OpenAI key on your behalf.

Make a simple list: where each call lives, what it does for the user, who owns it, and how bad it is if it breaks.

### Week two: build a small test set

For each feature, collect twenty to fifty real inputs with the outputs you consider good. Strip personal data. This is your test set. It does not need to be fancy; a spreadsheet is fine. Without it, "the new model seems fine" just means someone tried three examples.

### Weeks three and four: run the replacement side by side

Run the test set through the recommended replacement, and through one or two alternatives if you want options. Compare quality, output format, latency and cost per call. Fix prompts and parsing where needed. If a feature depends on very specific behaviour, this is where you find out.

### Week five: switch, with a way back

Put the model name behind a single config setting if it is not already, so switching is a one-line change and reverting is too. Roll out feature by feature, highest value last. Watch error rates and a few real outputs for each feature for a day or two before moving on.

### Week six: buffer

Keep the week before January 14 free. Something will turn up late: an old mobile app version, a scheduled job that only runs monthly, a partner integration. Note that "revert to the old model" stops being an option on the 14th, so the fallback after that date has to be another current model.

## The decision behind the deadline

Every forced migration is a chance to ask a better question than "which model replaces this one".

### Should this feature use a smaller or different model?

Many features that were built on GPT-4o would run perfectly well on a smaller, cheaper model. Some would be better on a different provider entirely. If you are reconsidering providers, our post on [switching to an open-weight model](/post-switch-to-open-weight-model) covers the tradeoffs.

### Should you depend on one provider at all?

This is the second or third forced migration many teams have done in two years. If every AI feature is wired directly to one vendor, each deprecation becomes a project. A thin internal layer that names models in one place, plus a tested fallback, makes the next one routine. We wrote about the broader pattern in [the AI model your product runs on will be retired](/post-ai-model-deprecation-risk) and about outages in [planning a provider fallback](/post-ai-provider-outage-fallback). Do not over-build it, though. A config file and a test set get you most of the value.

## A short example

A composite of what I have seen: a seed-stage B2B tool with three AI features. A summary feature in the main product, a ticket classifier in the support queue, and a weekly digest email. The team knew about the first two. The usage dashboard showed a fourth caller: an internal script that tagged new leads in the CRM, written by a contractor who had left. The summary and digest switched cleanly. The classifier needed its output parsing fixed because the new model added an explanation after the label. The lead tagger was simply switched off, because nobody had used its tags in months. Total effort was about six engineer-days. Finding the fourth caller in December rather than on January 14 was the whole point.

## FAQ

### Will my GPT-4o calls fall back to a newer model automatically?

Do not count on it. Plan for requests to these models to fail after January 14, 2027, and switch explicitly before then. Check OpenAI's deprecations page for the official behaviour.

### What about models we fine-tuned on GPT-4o or GPT-4.1?

Check the deprecations page and your OpenAI account for the specific status of fine-tuned models, and plan to retrain or replace them on a supported base model. Budget time for collecting training data again if you did not keep it.

### Is it safe to switch on the last day?

No. If the replacement behaves differently, you need time to fix it, and after the 14th you cannot roll back to the old model. Aim to finish by the end of December.

### Can a fractional CTO help with this?

Yes, mostly with the inventory and the test set, which are where small teams cut corners. If you would like a second pair of eyes, [book a call](/book-a-call), or start with a [technical teardown](/teardown) that maps every external dependency in your product. The [pricing page](/pricing) explains both.
