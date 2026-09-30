---
title: 'ChatGPT, Claude and Grok went down the same morning. Were you ready?'
slug: ai-provider-outage-fallback
date: '2026-09-30T04:30:42.529Z'
category: Decisions
excerpt: >-
  Three AI providers failed within hours on September 3. What your AI features
  should do when the model is down, and when a second provider is worth it.
description: >-
  After the September 2026 AI outages: timeouts, degraded modes, and when a
  fallback model provider is worth the cost for a startup.
author: The founder of Fraction
readTime: 7
draft: false
---

On the morning of September 3, 2026, ChatGPT, Claude and Grok all had outages within the same few hours. OpenAI blamed a routing error, Anthropic an infrastructure issue, and [The Register's write-up](https://www.theregister.com/ai-and-ml/2026/09/03/chatgpt-claude-and-grok-all-had-outages-at-the-same-time/5294322) notes Claude's lasted just over three hours, with the API affected as well as the chat app. If your product has an AI feature, that morning was a free fire drill. The question is what your customers saw.

The short answer: most seed-stage products do not need a second model provider wired in and running. They do need a decided, tested answer to "what happens when the model is down," and for the features customers depend on, that answer should be a graceful degraded mode, not an error page. A second provider is worth the cost only for features where an outage stops the customer's work, and only if you actually test the switch.

## What an AI outage actually does to your product

When a model API fails, your product does not fail in one clean way. It fails in several messy ones at once, and it helps to know which ones you have.

- **Hard errors.** The request returns a 5xx or times out, and your UI shows a generic error, or worse, a spinner that never ends.
- **Slow failures.** The provider is degraded rather than down. Requests take 60 seconds and then fail, holding your server's request threads the whole time and slowing unrelated pages.
- **Retry storms.** Your code retries on failure, every client retries at once, and you burn rate limits and money the moment the provider recovers.
- **Silent corruption.** A background job that summarizes, tags or classifies records fails halfway, and nobody notices that a batch of records now has empty fields.
- **Broken core flows.** The worst case: the AI step sits in the middle of something the customer must finish, like onboarding, checkout, or submitting a document, and the whole flow stops.

The first three are engineering hygiene. The last two are product decisions, and they are the ones founders should own.

## Sort your AI features by what an outage costs

Before anyone writes failover code, list every place your product calls a model and put each one in one of three buckets.

### Nice to have

Suggestions, auto-generated titles, a "summarize this" button. If the model is down, hide the button or show a short message. Nobody's work stops. The fix is a timeout and a clean empty state, which is an afternoon of work.

### Important but deferrable

Background enrichment, tagging, search indexing, drafting emails a human reviews later. If the model is down, queue the work and process it when the provider recovers. The fix is a job queue with retries and backoff, which many teams already have. If you do not, I wrote about [when cron stops being enough](/post-do-you-need-a-job-queue-yet).

### Blocking

The AI step is on the critical path of something the customer is paying you to do right now: a support agent that answers your customers' customers, a document pipeline with an SLA, a voice agent on live calls. Here an outage is your outage, and this is the only bucket where a second provider starts to earn its cost.

Most products I review have one blocking feature at most. Many have none, and discover on a day like September 3 that they have been treating a nice-to-have as if it were critical, or the reverse.

## The cheap fixes every team should have

Whatever bucket a feature is in, these are low-cost and high-value, and they are what I check first in a [technical teardown](/teardown) of any AI product.

1. **Timeouts on every model call.** Pick a number based on the feature, often 20 to 30 seconds for generation and less for classification, and fail fast after it. A call without a timeout is a slow failure waiting to happen.
2. **Bounded retries with backoff and jitter.** Two or three attempts, spaced out and randomized, then stop. Unbounded retries turn a provider outage into your own.
3. **A circuit breaker.** After a run of failures, stop calling the provider for a minute and serve the degraded mode directly. This protects your servers and your bill.
4. **A written degraded mode for each feature.** Hide it, queue it, or fall back to a non-AI path. Decide in advance, not during the incident.
5. **An alert that fires on model error rate.** You should learn about the outage from your monitoring, not from a customer email.
6. **A status line in your product.** One sentence saying the AI feature is temporarily unavailable beats a broken spinner every time.

None of these require a second vendor. Together they turn a provider outage from an incident into an inconvenience.

## When a second provider is worth it

A multi-provider setup sounds like simple insurance. In practice it is a second product surface you maintain. Prompts tuned for one model often behave differently on another. Output formats, tool-calling behavior, context limits and safety filters all differ. If your feature depends on structured output, the fallback model may return something your parser rejects, which means the fallback fails exactly when you need it.

So the bar for a live second provider is specific:

- **The feature is blocking** and an hour of downtime has a real cost you can name: lost revenue, SLA credits, or a customer who churns.
- **You have evals** that let you check the fallback model produces acceptable output for your actual prompts. Without them you are guessing. I covered [how to know if an AI feature is good](/post-ai-feature-evals).
- **You test the switch regularly.** A fallback path that has never carried production traffic should be assumed broken.
- **Your contracts promise uptime** that your single provider does not promise you. If they do, the gap is the same one I described in [the uptime promise your architecture cannot keep](/post-sla-promise-vs-architecture).

If you meet that bar, the practical shape is modest: one thin routing layer in your code, a primary and a secondary model per blocking feature, prompts maintained for both, and a switch that is either automatic on error rate or a flag an engineer can flip in seconds. Keep the layer thin. The trap of building an elaborate abstraction to avoid lock-in is its own problem, covered in [wrapping your vendor to avoid lock-in](/post-vendor-abstraction-layer).

## Correlated risk is the new part

The lesson of September 3 is not that providers go down. They always have. It is that several went down on the same morning, for causes the companies described differently. If your plan was "we use Provider A, and if it fails we switch to Provider B," it is worth checking whether A and B share a cloud region, a hosting partner, or a gateway service in front of both. Many teams route every model call through a single third-party gateway or proxy for convenience, which quietly turns two providers into one point of failure.

The same thinking applies to self-hosting an open-weight model as a fallback. It removes one dependency and adds GPU capacity you now have to run, patch and pay for during the 99% of hours when it sits idle. For most early teams that trade does not pencil out, though the cost math has shifted, and I looked at it in [switching to an open-weight model](/post-switch-to-open-weight-model).

## What investors will ask

Diligence on AI products increasingly includes a resilience question: what happens to the product when the model provider is unavailable? A clear answer is short. "These two features degrade to a hidden state, this one queues, and this one fails over to a second provider we test monthly." That answer signals a team that has thought about operations, not just prompts. A vague answer, or discovering the question during the call, is the kind of gap a [short call](/book-a-call) beforehand can close.

## FAQ

### Should we switch providers because ours went down?

Not on the strength of one outage. Every major provider has had incidents, and September 3 showed several can fail on the same day. Choose on quality, cost and fit for your use case, and invest in degraded modes rather than chasing whichever vendor had the most recent good month.

### How long should our AI call timeout be?

It depends on the feature and how long a normal response takes. Measure your typical latency, set the timeout comfortably above your slow-but-healthy responses, and fail fast beyond it. A timeout set at several times your normal latency is usually a reasonable start.

### Do we need to tell customers when the AI provider is down?

Tell them what they need to know: that a feature is temporarily unavailable and whether their work is safe. Naming your vendor is optional. What matters is that the product explains itself instead of failing silently.

### Is a model gateway a good idea?

Gateways are useful for logging, cost tracking and switching models. Just treat the gateway as a dependency in its own right, with its own uptime, and make sure your fallback path does not run through the same single point.

### How often should we test a fallback provider?

If a feature depends on it, at least monthly, with real traffic or a realistic replay. A fallback that has not been exercised recently is a plan on paper, not a working system.
