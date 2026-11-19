---
title: Next.js 15 security fixes end January 31. Plan the upgrade now
slug: nextjs-15-end-of-support
date: '2026-11-19T05:17:17.367Z'
category: Vendors
excerpt: >-
  Next.js 15 gets security releases only through January 31, 2027. What changes
  in 16, how long the upgrade takes, and a plan that fits.
description: >-
  Next.js 15 security support ends Jan 31, 2027. What changes in Next.js 16,
  realistic upgrade effort, and a plan for early-stage teams.
author: The founder of Fraction
readTime: 7
draft: false
---

If your product runs on Next.js 15, plan the move to Next.js 16 now. According to the [official Next.js support policy](https://nextjs.org/support-policy), Next.js 15 is in Maintenance LTS and its security releases continue only through January 31, 2027, after an extension past the original October 21, 2026 end date. After that, a security bug in the framework that serves your whole front end may not get a patch. For most early-stage apps the upgrade is one to three weeks of focused work, and the cost goes up the longer you wait.

I am writing this because Next.js is the most common front-end framework I see in seed-stage codebases, often chosen by an agency or a first engineer two years ago and not touched since. The extension has given teams a little room. It has also made it easy to forget.

## What the dates actually mean

Next.js has a simple policy. A major version is in Active LTS until the next major ships, then moves to Maintenance LTS, which covers only critical bug fixes and security updates. Maintenance normally lasts two years from the major's original release.

Next.js 15 was released on October 21, 2024, so its two years ran out on October 21, 2026. The Next.js team extended security releases for 15 to January 31, 2027, and opened a public discussion asking what is blocking teams from upgrading. Next.js 16 was released on October 21, 2025, and is the current Active LTS; the latest minor as I write is 16.4. Next.js 14 and older are already outside the policy.

Two things make this deadline more serious than a typical library update:

- **Next.js is your public attack surface.** It renders your pages, runs your server actions, and often handles authentication redirects. A framework vulnerability is a vulnerability in every page.
- **Security releases are frequent.** The Next.js blog has published several security releases this autumn, including a November 2026 security release, and a post on why advisories have increased. Being on a version that receives those patches matters more now, not less.

If you are on Next.js 14 or earlier, you are already in the position 15 users will be in from February. The rest of this post applies to you, with more urgency.

## How to find out where you stand

You do not need to read code to answer this. Ask your engineer or agency for three facts, or check yourself:

1. **The Next.js version.** It is in `package.json` under `next`. Anything starting with 15 or lower needs a plan.
2. **The Node.js version in production.** Next.js 16 needs Node.js 20.9 or later. If you are still on Node 18, that upgrade comes first, and I covered the wider Node picture in [the Node.js 26 LTS upgrade post](/post-node-js-26-lts-upgrade).
3. **Who owns upgrades.** If the answer is "the agency, under the maintenance retainer," check whether the retainer actually includes major framework upgrades. Many do not. The questions to ask are in [reading an agency maintenance retainer](/post-agency-maintenance-retainer).

## What changes between 15 and 16

The [official version 16 upgrade guide](https://nextjs.org/docs/app/guides/upgrading/version-16) lists the full set. For a founder, the changes fall into three groups: things the codemod mostly handles, things that need an engineer's judgment, and things that can quietly change behavior.

### Mostly handled by the codemod

Next.js ships an upgrade codemod that rewrites much of the mechanical work: moving Turbopack config to its new top-level option, migrating from `next lint` to the ESLint CLI, renaming `middleware` to `proxy`, and dropping `unstable_` prefixes from APIs that became stable. Your engineer runs it, reviews the diff, and fixes what it missed.

### Needs judgment

- **Request APIs must be awaited.** Next.js 15 started making `cookies`, `headers`, `params`, and `searchParams` asynchronous with a compatibility period. In 16, synchronous access is gone. A dedicated codemod covers most cases, but code that passed these values around in unusual ways needs a person to look at it.
- **Turbopack is now the default bundler.** If your project has a custom webpack configuration, `next build` will fail until it is migrated or you explicitly opt back into webpack. Agency-built projects often have webpack tweaks nobody remembers adding.
- **Middleware becomes proxy, and runs on Node.js only.** If your middleware relies on the edge runtime, the guide says to keep using middleware for now. Someone has to decide which case you are in.
- **Removed features.** AMP support, `next lint`, and the old `serverRuntimeConfig` and `publicRuntimeConfig` are removed. If you use any of them, there is real migration work.

### Can quietly change behavior

- **Image defaults changed.** The default image cache time went from 60 seconds to four hours, the default allowed quality list is now just 75, and local images with query strings need explicit config. Usually fine, occasionally surprising for teams that change images often.
- **Caching calls changed shape.** `revalidateTag` now expects a second argument. Old calls are deprecated, so they may still run while behaving differently from what the original author intended.
- **Parallel routes need a default file.** Builds fail without one, which is loud, not quiet, but it catches teams off guard.

None of this is exotic. It is the kind of change list that takes a competent engineer a few days on a clean codebase, and much longer on one with no tests.

## How long it really takes

My rough estimates, from upgrades I have scoped and reviewed, not a benchmark:

- **Small app, App Router, decent tests, no custom webpack:** two to five engineering days, including review and a careful deploy.
- **Medium app, some custom config, few tests:** one to three weeks, most of it spent finding what broke because nothing would have told you.
- **Old Pages Router app on Next.js 13 or 14, agency-built, no tests:** treat it as a small project. Budget a month and consider upgrading in two steps.

The biggest variable is not the framework. It is whether you have tests and a staging environment that looks like production. If you have neither, add a handful of smoke tests on your critical paths (signup, login, checkout, the main dashboard) before you start. That work pays for itself on this upgrade and every one after it. I wrote about how to make that call in general in [upgrade a dependency now or defer it](/post-dependency-upgrade-or-defer).

## A plan that fits before February

Here is the sequence I would give an early-stage team today:

1. **This week:** confirm the Next.js and Node.js versions in production, and who is responsible for the upgrade.
2. **Next two weeks:** upgrade Node.js if needed, add smoke tests for critical paths, and run the codemod on a branch to see the real size of the diff.
3. **December:** finish the manual fixes, test on staging, and ship behind a quiet deploy window, not the week of a launch.
4. **Early January:** leave a buffer. If anything goes wrong, you still have weeks of security coverage on 15 to fall back on.

Do not wait for the last week of January. The extension is a buffer, not a plan.

### If you cannot upgrade in time

Sometimes the honest answer is that the codebase is too fragile or the team too stretched. Then make the risk explicit instead of ignoring it: know which version you are on, watch the Next.js security advisories, put a web application firewall in front of the app, and schedule the upgrade as a named project with a date. Running an unsupported framework for a month with eyes open is a different decision from running it for a year by accident. It is also something an investor's technical diligence will notice.

If you are not sure what state your front end is in, or your agency has gone quiet about upgrades, a [teardown](/teardown) will tell you the version, the size of the migration, and where the risk sits. If you would rather talk it through, [book a call](/book-a-call).

## FAQ

### Is Next.js 15 unsafe to use right now?

No. It still receives security releases through January 31, 2027. The risk starts after that date, when new vulnerabilities may not be patched. Use the time you have to upgrade calmly.

### Can we skip 16 and wait for the next major?

Not safely. There is no Next.js 17 announced, and when one ships, 16 will still be the version with the longest remaining support. Skipping 16 means running 15 unsupported for an unknown period.

### Does Vercel hosting upgrade Next.js for us?

No. Hosting on Vercel does not change the framework version in your code. Your team or agency has to make the upgrade and deploy it, wherever you host.

### Our agency says the upgrade is a full rebuild. Is that true?

Rarely. Moving from 15 to 16 is a migration, not a rewrite. A quote for a full rebuild deserves a second opinion, especially if the app is under a few years old.
