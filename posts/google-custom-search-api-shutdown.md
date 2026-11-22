---
title: Google's Custom Search API shuts off on Jan 1. Find your callers
slug: google-custom-search-api-shutdown
date: '2026-11-22T04:31:06.572Z'
category: Vendors
excerpt: >-
  Google's Custom Search JSON API stops on 1 January 2027. How to find every
  caller, including AI agents, and pick a replacement in time.
description: >-
  Google's Custom Search JSON API shuts down 1 Jan 2027. Find every caller,
  including AI agents, choose a replacement and ship before the holidays.
author: The founder of Fraction
readTime: 7
draft: false
---

Google's Custom Search JSON API stops working on 1 January 2027. If your product, an internal tool, or an AI agent calls it, you have about five weeks to find out where, decide what replaces it, and ship the change before the holiday freeze eats most of that time. Google's suggested route is Vertex AI Search for searching up to 50 of your own domains. For open-web search there is no self-serve Google replacement, so most teams will move to another search provider.

The dates come from Google's own [Custom Search JSON API overview](https://developers.google.com/custom-search/v1/overview), which says the API is closed to new customers and that existing customers have until 1 January 2027 to transition. Check that page before planning, because details like product names and options in this area have shifted over the past year.

## Why this one catches startups out

Most API retirements hit a team that knows it uses the API. This one is different, because the Custom Search API was often wired in quietly.

### It was the easy option for years

Plenty of early products used it as a quick way to add search: a site search box, a "related articles" feature, a lookup step in an onboarding flow. It was cheap, documented, and took an afternoon. Then the engineer who added it moved on, and nobody thinks of it as a dependency.

### AI agents made it popular again

A lot of the newer usage is not a search box at all. It is an AI agent or retrieval step that calls web search to ground its answers. Those calls often live inside a prompt pipeline or a third-party framework config, not in the code most people read. When the API stops answering, the symptom may not be an error page. It may be an assistant that quietly starts giving worse, ungrounded answers.

### Some of it is outside your code

Internal scripts, a marketing team's spreadsheet automation, a no-code workflow, or an agency-built admin tool can all hold an API key. If you only search your main repository, you will miss them.

## Step one: find every caller this week

Before you choose a replacement, find out what you are replacing. This is usually a few hours of work for one engineer.

### Search code and config

Search every repository you own for `customsearch`, `googleapis.com/customsearch` and `cx=`, the parameter that identifies a search engine. Include infrastructure config, environment files, and agent or prompt configuration, not just application code.

### Check the Google Cloud console

Look at which projects have the Custom Search API enabled and whether it has recent traffic. Usage graphs will show callers your code search missed. Note which API keys are used, because a key that appears in no repository is a sign something outside your codebase depends on it.

### Ask the people who build things around engineering

Ask marketing, operations, and any agency you work with whether they set up anything that uses Google search programmatically. It is a five-minute message and it saves a surprise in January.

## Step two: decide what each caller actually needs

The right replacement depends on the job each caller does. I sort them into three groups.

### Search over your own content

If the caller searches your own site, docs, or help centre, Google points to Vertex AI Search, which it describes as an alternative for searching up to 50 domains. You might also find this is the moment to use the search built into your docs or help-centre platform, or to revisit whether you should [build your own search or pay for a hosted one](/post-build-search-or-buy). For a small content set, a hosted search product or your database's full-text search may be simpler than any web-search API.

### Search over the open web

If the caller needs general web results, for example an AI agent researching a topic, the Google docs say to contact Google about its full web search solution. In practice, for most seed-stage teams, that means evaluating third-party web search APIs. Several exist and their pricing, quality, and terms change often, so compare them on your own queries rather than trusting a comparison article.

### Calls you can simply remove

Some callers will turn out to be features nobody uses, or a script that ran once. Delete them. Every API you do not depend on is one less retirement notice to handle later.

## Step three: evaluate a replacement properly

A web search API is not a drop-in swap, even if the request format looks similar. Check four things.

### Result quality on your real queries

Take 20 to 50 real queries from your logs and compare results side by side. For an AI agent, compare the final answers, not just the result lists. A provider that is slightly worse on your queries can make an assistant noticeably worse.

### Terms of use

Read what you are allowed to do with results. Some providers restrict storing results, showing them without attribution, or using them to train models. If results feed an AI feature, check this before you build on it.

### Cost at your volume

Model the cost at today's call volume and at the volume you expect next year. Search calls made by agents can multiply quickly, because one user question may trigger several searches. The [post on the hidden costs of AI agent tools](/post-ai-agent-tool-tax) covers how that adds up.

### Failure behaviour

Decide what your product does when search is slow or unavailable. A clear message or a fallback is better than an agent that answers confidently from no sources.

## Step four: plan around the calendar

Five weeks sounds like enough, but late December is not normal working time for most teams.

A realistic plan for a small team:

- **This week:** find every caller and decide which group each is in.
- **Next week:** pick a replacement for each caller that stays, and test it on real queries.
- **First half of December:** ship the change behind a flag, run old and new side by side where you can, then switch.
- **Before the holidays:** remove the old API key and code path, and confirm traffic to the old API is zero.

If an agency maintains the affected code, tell them now and ask for a date. Their holiday schedule may be shorter than yours, and a retainer may not cover unplanned migration work. It is worth checking what your [maintenance retainer](/post-agency-maintenance-retainer) actually includes.

## What this says about your other dependencies

This is one deadline among several this winter. Model retirements are another, covered in the [post on OpenAI shutting off GPT-4o](/post-openai-gpt-4o-api-shutdown-january). The pattern is the same each time: a dependency that was easy to add, nobody owns, and the retirement notice went to an inbox nobody reads.

The fix is cheap. Keep a short list of every external API your product relies on, who owns each one, and which email address receives the vendor's notices. Review it once a quarter. If you do not have that list, building it is a good first task for whoever leads engineering, and it is one of the things a [teardown](/teardown) produces.

## FAQ

### When does the Google Custom Search JSON API shut down?

Google's documentation says existing customers have until 1 January 2027 to move to an alternative. The API is already closed to new customers.

### What does Google recommend instead?

For searching up to 50 domains, Google points to Vertex AI Search. For full web search, it asks customers to contact Google about its full web search offering.

### Is the Programmable Search Engine search box affected too?

The embeddable search box and the JSON API are different products. Check Google's current documentation for the specific product you use, and test it rather than assuming.

### Our AI agent uses web search through a framework. Are we affected?

Possibly. Check which search provider the framework is configured to use and which API key it holds. If it uses Google's Custom Search API, it will stop returning results after the shutdown.

### How long does a migration like this take?

For a single caller with a clear replacement, a few days of engineering time including testing is typical in my experience. AI features take longer, because you need to check answer quality, not just whether the call works. That is a rough estimate, not a guarantee.

If you are not sure what else in your stack is close to a deadline like this, [book a call](/book-a-call) and we can go through it together, or see [pricing](/pricing) for how ongoing technical leadership works.
