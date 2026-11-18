---
title: Your .NET 8 or 9 app lost security patches on 10 November
slug: dotnet-8-end-of-support
date: '2026-11-18T04:37:32.666Z'
category: Vendors
excerpt: >-
  .NET 8 and .NET 9 both reached end of support on 10 Nov 2026. What it means,
  how to check your stack, and what the move to .NET 10 takes.
description: >-
  .NET 8 and 9 lost Microsoft security patches on 10 Nov 2026. How to check your
  version and plan a .NET 10 upgrade, with effort ranges.
author: The founder of Fraction
readTime: 6
draft: false
---

If your product runs on .NET 8 or .NET 9, it stopped receiving security patches from Microsoft on 10 November 2026. The app still runs, but every new vulnerability found from now on stays open. The usual fix is to move to .NET 10, the current long-term support release, which Microsoft supports until November 2028. For a typical small web product this is a two-to-six week job, mostly testing, and it is worth scheduling now rather than after the next security questionnaire asks.

This one matters more than most end-of-support dates because two versions ended on the same day. Many teams that chose .NET 9 to "stay current" assumed they had until 2026 to think about it, and they did. That time is now up for both camps at once.

## What actually changed on 10 November

Microsoft announced in 2025 that standard term support (STS) releases would be supported for 24 months instead of 18. That moved .NET 9's end date from May 2026 to 10 November 2026, the same day as .NET 8, which was a long-term support (LTS) release. Microsoft's own [.NET Blog announcement](https://devblogs.microsoft.com/dotnet/dotnet-8-9-end-of-support/) and the [.NET support policy page](https://dotnet.microsoft.com/en-us/platform/support/policy/dotnet-core) are the sources to trust here.

End of support means:

- **No more security fixes.** Monthly patch releases for 8 and 9 have stopped. When the next serious ASP.NET Core or runtime vulnerability is disclosed, there will be no patched 8.x or 9.x version.
- **No Microsoft technical support** for issues on those versions.
- **Base images and hosting runtimes go stale.** Container images for those versions stop getting the monthly patched builds, and cloud platforms will eventually deprecate the runtimes on their own schedules. Check your provider's current runtime table rather than assuming.

Nothing switches off. That is exactly why it gets ignored. Unlike some platforms, Microsoft does not sell an extended security update programme for modern .NET, so there is no official way to buy more time.

## Who this really affects

In my experience, early-stage products end up on .NET in a few common ways:

- An agency or offshore team built the first version, often on the stack they know best. The founder may not know which version the product runs on.
- A technical cofounder came from an enterprise background and chose the stack they trust.
- The product grew out of an internal tool at a larger company.

The first case is where the risk is highest. If an agency built the product and then moved to a light maintenance retainer, upgrades like this are often not included unless someone asks. I wrote about what a maintenance retainer should cover in [the agency maintenance retainer post](/post-agency-maintenance-retainer). Ask the question directly: "Which .NET version are we on, and when is the upgrade scheduled?"

## How to check where you stand in ten minutes

You do not need to read code to answer this. Ask whoever has access to the repository to check:

1. **The target framework** in each project file. Look for `net8.0` or `net9.0` in the `.csproj` files.
2. **The SDK pinned in `global.json`**, if there is one.
3. **The Docker base image tags**, for example `aspnet:8.0`, in any Dockerfile.
4. **The runtime selected in your hosting platform**, such as the stack setting on Azure App Service or the runtime on any serverless functions.

If the answer anywhere is 8 or 9, you have the work ahead of you. Also check for anything older, such as .NET 6 or .NET Framework 4.x. Those are separate, usually bigger problems.

## What the upgrade to .NET 10 involves

For most web products, moving to .NET 10 is an upgrade, not a rewrite. The work usually breaks down like this:

### Change the target and update packages

Change the target framework to `net10.0`, update the SDK, and update NuGet packages, especially Entity Framework Core and ASP.NET Core packages, which track the runtime version. Some third-party packages will need newer versions, and occasionally one is abandoned with no .NET 10 support. That is the item most likely to cause delay, so find out early.

### Read the breaking changes for every version you skip

Teams on .NET 8 are skipping .NET 9, so they need to read the official breaking-change lists for both 9 and 10. Microsoft publishes these per version in its documentation. Most items will not apply to you, but the few that do are usually in authentication, serialisation and hosting configuration. Those are the areas I ask teams to test hardest.

### Test like it matters

This is where most of the time goes. If you have good automated tests, the upgrade is mostly running them and fixing what breaks. If you have few tests, which is common in agency-built products, you need a manual test pass of the key flows: sign-up, login, payments, core workflows, emails, background jobs and file handling. Do it on a staging environment, not production.

### Update the deployment pipeline

Change the base images, the CI build image and the hosting runtime setting. Deploy to staging first, run the test pass, then production with a clear rollback plan. Keep the previous build ready to redeploy for at least a week.

## A rough effort guide

These are rules of thumb from upgrades I have seen, not quotes:

- **Small API or web app on .NET 8, decent tests, mainstream packages:** one to two weeks for one engineer, including testing.
- **Larger product, several projects, few tests or older packages:** three to six weeks, most of it testing and replacing packages.
- **Still on .NET Framework 4.x, not modern .NET:** a different project entirely, often months. Treat it as a planned migration, not a version bump.

If an agency quotes far more than this for a straightforward app, ask for a breakdown. If they quote far less, ask what testing is included.

## Should you move to .NET 10 or wait for the next release?

Move to .NET 10. It is an LTS release with support into November 2028, which gives a small team two years without repeating this exercise. STS releases are now supported for 24 months, which helps, but for a startup with limited engineering time the predictable LTS rhythm is usually the better fit: upgrade every two years, on a schedule you plan, instead of reacting to dates. I explain how I think about timing upgrades in general in [upgrade now or defer](/post-dependency-upgrade-or-defer).

## Why this matters beyond security

Running an unsupported runtime is the kind of finding that shows up in places founders care about:

- **Enterprise security reviews** ask whether you run supported versions of your platform. "No" is a hard answer to give in procurement.
- **Technical due diligence** before a raise or acquisition flags it as a known, dated risk. It is easy to fix before diligence and awkward to explain during it.
- **Cyber insurance and pentests** increasingly note end-of-life software.

The same pattern is playing out across stacks this year. [Python 3.10](/post-python-3-10-end-of-life), [Node.js 20](/post-node-js-26-lts-upgrade) and [PostgreSQL 14](/post-postgres-14-end-of-life-rds-bill) have all reached or are reaching their end dates. If your product has more than one of these, plan the upgrades together rather than one emergency at a time.

## FAQ

### Will my .NET 8 app stop working?

No. It keeps running exactly as before. The risk is that new security vulnerabilities will not be fixed, and the gap grows every month.

### Can we pay Microsoft for extended support on .NET 8?

Microsoft does not offer an extended security update programme for modern .NET versions. Some third-party companies sell their own patches for end-of-life frameworks, but most startups are better served by upgrading.

### We are on .NET 9. Is our upgrade easier than for .NET 8?

Usually yes, because you only need to cover one version of breaking changes. The deadline is the same, so do not let the easier job slip.

### How do I know the agency did the upgrade properly?

Ask for the updated target framework, the list of packages changed, the test results, and confirmation that production runs .NET 10. If you want an independent check, a [technical teardown](/teardown) covers runtime versions, dependencies and deployment risk in one pass, or you can [book a call](/book-a-call) and we will look at your situation together.
