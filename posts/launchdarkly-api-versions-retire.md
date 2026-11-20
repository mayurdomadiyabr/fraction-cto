---
title: LaunchDarkly retires old API versions Dec 31. Find your callers
slug: launchdarkly-api-versions-retire
date: '2026-11-20T03:10:41.744Z'
category: Vendors
excerpt: >-
  LaunchDarkly retires every REST API version except 20240415 on Dec 31, 2026.
  Flags keep working; your scripts and CI may not.
description: >-
  LaunchDarkly retires old REST API versions on Dec 31, 2026. What breaks, a
  30-minute check for scripts and CI, and realistic effort.
author: The founder of Fraction
readTime: 6
draft: false
---

If your team uses LaunchDarkly, check before December 31, 2026 whether anything you run calls its REST API with an old API version. According to LaunchDarkly's [status notice](https://status.launchdarkly.com/incidents/9f1j7jp01j93), every REST API version except 20240415 will be retired on that date, and requests to the retired versions will fail. Your feature flags in production are not the risk here. The risk is the scripts, CI jobs and internal tools that create, change or report on flags, which nobody has looked at since an engineer wrote them two years ago.

I am writing about this because it is a small, well-documented change that will still catch a lot of small teams. It lands on New Year's Eve, when most teams are on leave. And it is a clean example of a wider problem: the integrations your product depends on that nobody owns.

## What is changing, in plain terms

LaunchDarkly has two sides that founders often blur together.

### The SDKs inside your product

These are the libraries your app uses to ask "is this flag on for this user?" This change is about the REST API, not flag evaluation through the SDKs. LaunchDarkly retires old SDK versions on its own separate schedule, published on its [supported versions page](https://launchdarkly.com/docs/sdk/concepts/supported-versions), and that is worth checking too, but it is a different deadline.

### The REST API

This is what your team, or your tools, use to manage LaunchDarkly itself: create flags, change targeting rules, list stale flags, export audit data, sync environments. Every request carries an API version, usually in a header called LD-API-Version. A request that does not set the header still resolves to some version, so a missing header is not proof that you are safe.

LaunchDarkly's notice says older versions reached end of life on April 30, 2025 and have stayed available in a grace period that ends on December 31, 2026. After that, only 20240415 is supported. Its [migration guide](https://launchdarkly.com/docs/guides/api/api-migration-guide) covers moving from 20220603 to 20240415. For calls you make directly, the required change is setting the header to 20240415. If you use LaunchDarkly's generated API client libraries, the guide says they need to be on version 21.x or later. Some response formats changed between versions, so code that reads the responses may also need small fixes.

## Who should care

Most early-stage teams that use LaunchDarkly only use the SDKs and the web dashboard. If that is you, there may be nothing to do. But in the codebases I review, at least one of these usually turns up.

- **A CI step** that creates a flag for each new feature branch, or checks that every flag in the code exists in LaunchDarkly before deploying.
- **A cleanup script** that lists flags not changed in 90 days. If you followed the advice in [stale feature flags become debt](/post-stale-feature-flags), you may have written one.
- **A sync job** that copies flag settings between environments, or between LaunchDarkly projects.
- **An internal admin tool or Slack bot** that lets non-engineers turn flags on and off.
- **Infrastructure-as-code** that manages flags, projects or environments.
- **A reporting script** that pulls audit log or flag data into a spreadsheet or data warehouse.

None of these break your app on January 1. They break the tooling around it. The failure is usually quiet: a CI step starts erroring and someone disables it to unblock a deploy, or a nightly sync stops and nobody notices for weeks.

## The 30-minute check

This is something a founder can ask an engineer, an agency or a fractional CTO to do in under an hour.

### Search the code

Search every repository, including old internal tools and the CI configuration, for the LaunchDarkly API host (app.launchdarkly.com/api), the string LD-API-Version, and any LaunchDarkly API client library in your dependency files. Each hit is either fine (already on 20240415), easy (change one header) or needs a closer look (an old client library).

### Check the access tokens

In LaunchDarkly, look at the list of API access tokens. Each one exists because something uses it. A token with a name like "ci-bot" or "sync-script" points to code you need to find. A token nobody can explain is a security question as well as a migration one; consider revoking it after the check. The broader problem of credentials that outlive the people who set them up is covered in [shared admin logins](/post-shared-admin-logins).

### Check the tools you did not write

If a third-party tool or an agency-built integration talks to LaunchDarkly on your behalf, ask its owner which API version it uses. If an agency built it, this is a normal request under a maintenance arrangement. See [what an agency maintenance retainer should include](/post-agency-maintenance-retainer).

### Fix, test, and do it before mid-December

Change the version header, upgrade any client library, and run each script once against a test project. Do this before your holiday change freeze, not on December 30. If your team or agency will be thin over the break, read [planning holiday cover with your agency](/post-agency-holiday-shutdown).

## How long it takes

For a typical seed-stage team, this is small work. My rough estimates, from experience rather than any benchmark:

- **No REST API usage found:** under an hour to confirm, then done.
- **One or two scripts calling the API directly:** half a day including testing.
- **An old generated client library, several tools, or infrastructure-as-code:** one to three days, mostly spent testing response-format changes.

The cost goes up sharply if you leave it until a CI job fails in January and the person who wrote the script has left.

## The wider lesson: integrations nobody owns

The LaunchDarkly change is easy to handle. The pattern behind it is not.

Every SaaS tool your team uses has an API, and most of them version and retire those APIs on their own schedules. Payment providers, email services, analytics tools, CRMs and AI model providers all do this. Each one is a small deadline. Together, they are a steady stream of maintenance work that does not appear in any roadmap.

What I recommend to founders is simple: keep a one-page list of every external service your product or your tooling calls, with an owner and a link to that vendor's deprecation or changelog page. Review it once a quarter. I describe the general version of this in [what to do when a cloud provider retires a service](/post-cloud-provider-retires-service), and the decision of when to take upgrades in [upgrade now or defer](/post-dependency-upgrade-or-defer).

When I review a codebase in a [teardown](/teardown), this list almost never exists. Building it typically takes an afternoon and surfaces at least one integration nobody knew was still running.

## FAQ

### Will my feature flags stop working on January 1, 2027?

Based on LaunchDarkly's notice, this retirement covers REST API versions, which are used to manage LaunchDarkly. Flag evaluation inside your app goes through the SDKs, which have their own supported-version schedule. Check your SDK versions against LaunchDarkly's supported versions page separately.

### How do I know which API version we use?

Look for the LD-API-Version header in any code that calls the LaunchDarkly REST API, and check the version of any LaunchDarkly API client library in your dependencies. If you cannot find any REST API calls in your code or CI configuration, you probably only use the SDKs and dashboard.

### We use a different feature flag tool. Does this apply?

Not this specific date. But the same check is worth doing for any vendor whose API your scripts call. Most publish a deprecation or changelog page; put it on your quarterly list.

### Is this worth a fractional CTO's time?

The fix itself usually is not; any competent engineer can do it. What is worth senior time is building the list of external dependencies and owners, so the next ten of these deadlines do not each become a surprise. If you want help setting that up, [book a call](/book-a-call), or see [what a fractional engagement costs](/pricing).

### Do we need feature flags at all?

If you are asking that, read [do you need feature flags yet, or just a deploy](/post-do-you-need-feature-flags-yet-or-just-a-deploy) first. Fewer tools mean fewer deadlines like this one.
