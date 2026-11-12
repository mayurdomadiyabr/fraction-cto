---
title: PHP 8.2 loses security fixes on 31 December. Is your app on it?
slug: php-8-2-end-of-life-december
date: '2026-11-12T04:40:28.014Z'
category: Vendors
excerpt: >-
  PHP 8.2 reaches end of life on 31 December 2026. How a non-technical founder
  can check the version, size the upgrade, and get it done.
description: >-
  PHP 8.2 security support ends 31 Dec 2026. How to check your version, what the
  upgrade to 8.3 or 8.4 involves, and what to ask your agency.
author: The founder of Fraction
readTime: 7
draft: false
---

If your product, marketing site or internal tool runs on PHP 8.2, it stops receiving security fixes on 31 December 2026. After that date, a newly discovered flaw in the language itself will not be patched for your version. The practical answer for most startups is to find out this week which PHP version each of your systems runs, and move anything on 8.2 or older to 8.3 or 8.4 before the end of the year or soon after. For a maintained application this is usually days of work, not a rewrite.

The date comes from the PHP project's own [supported versions page](https://www.php.net/supported-versions.php), which lists security support for the 8.2 branch as ending on 31 December 2026.

## What is actually ending

PHP is the programming language behind a large share of the web: WordPress, Laravel applications, Magento and WooCommerce stores, Drupal sites, and many custom products built by agencies.

The PHP project supports each release branch for four years. For the first two years it gets bug fixes and security fixes. For the next two it gets fixes for critical security issues only. Then it reaches end of life and gets nothing.

According to the supported versions page, the state of play is:

- **PHP 8.1:** already end of life. Its support ended on 31 December 2025.
- **PHP 8.2:** security fixes only, ending 31 December 2026.
- **PHP 8.3:** security fixes only, until 31 December 2027.
- **PHP 8.4:** active support until 31 December 2026, then security fixes until 31 December 2028.
- **PHP 8.5:** active support until 31 December 2027, then security fixes until 31 December 2029.

Nothing switches off on 1 January. Your site will load exactly as it did the day before. That is what makes this easy to ignore, and it is why so many products are still running versions that went out of support years ago.

## Why a founder should care

Three reasons, in order of how often they bite.

**Unpatched vulnerabilities.** When a flaw is found in PHP after your version's end of life, the fix ships for supported versions and the details become public. Your version has the same flaw and no fix.

**Everything else moves on.** Frameworks, plugins and libraries drop support for old PHP versions. Over time you cannot install security updates for those either, because the new releases require a PHP version you do not have. One stale layer blocks the layers above it.

**Diligence and security questionnaires.** An end-of-life runtime is among the first things a technical reviewer finds, because it takes one command to check. Enterprise customers ask about it in security questionnaires. It is rarely a deal-breaker on its own, but it tells the reviewer how the rest of the system has been maintained.

Some hosting companies and Linux distributions keep patching older PHP versions for longer, sometimes as a paid extra. If your host says it does, ask until what date and for which kinds of fixes, and get the answer in writing. Treat it as borrowed time, not a plan.

## How to check which version you run

You do not need to read code. Send this to whoever maintains each system:

> Which PHP version is each of our production systems running, including the marketing site, the app, any staging servers and any scheduled jobs? Please send the exact version number for each.

Ask for the exact number, such as 8.2.29, not "the latest" or "PHP 8".

If you want to look yourself:

- **WordPress:** in the admin area, Tools, then Site Health, then the Info tab, under Server.
- **Managed hosting:** the control panel normally shows the PHP version per site, with a dropdown to change it.
- **Custom applications:** the version is declared in the project's configuration and set on the server. Your engineer can answer in under a minute.

Count every system. The usual surprise is not the main product. It is the old marketing site, the admin tool an agency built three years ago, or a server nobody remembers. That last category is its own problem, which I wrote about in [the server nobody can rebuild](/post-server-nobody-can-rebuild).

## What the upgrade involves

Moving from 8.2 to 8.3 or 8.4 is a minor-version upgrade. The language changes between them are modest. What takes the time is everything around the language.

1. **Check dependencies.** Every framework, plugin and library must support the target version. Well-maintained ones already do. Abandoned ones are where the work is.
2. **Upgrade in a staging copy first.** Never switch the version on the live site to see what happens.
3. **Run the tests, then click through the product.** Sign-up, login, payment, the main workflows, emails, scheduled jobs, file uploads.
4. **Read the warnings.** Each PHP release marks some older features as deprecated. They still work but produce warnings, and they tell you what will break in a later version.
5. **Switch production at a quiet time, with a rollback ready.** On most hosts, rolling back is changing the version setting back.

### Which version to move to

My judgment, not an official recommendation: 8.4 is the sensible target for most teams today, because it is supported until the end of 2028 and has had two years of point releases. Move to 8.3 if a dependency you cannot replace does not yet support 8.4, knowing you will do this again within a year. Wait on 8.5 unless your framework and libraries explicitly support it.

### How long it takes

These are rough ranges from experience, not benchmarks:

- A maintained Laravel or WordPress product with current dependencies and some tests: one to three days, including testing.
- A product with outdated dependencies and no tests: one to three weeks, mostly spent on the dependencies and on manual testing.
- A system on PHP 7 or older, or on an abandoned framework: this is a project, and the PHP version is a symptom. Get it scoped before anyone quotes.

If you are still on 8.1 or below, you are already past the deadline. Do not stop at 8.2. Go directly to a version with years of support left.

## If an agency maintains your product

Ask whether runtime upgrades are covered by your maintenance agreement. Often they are not written down either way, and the first you hear of it is a change request.

Reasonable expectations:

- Keeping the runtime on a supported version is ordinary maintenance. If you pay a monthly retainer for maintenance, this belongs inside it. I set out what such a retainer should cover in [what an agency maintenance retainer should include](/post-agency-maintenance-retainer).
- If they quote separately, ask for the dependency list that drives the estimate. A quote of several weeks with no list attached is a guess.
- Ask why it was not raised earlier. The date has been public for years. An agency that flagged it months ago is managing your system. One that learns the date from you is not.

## Make it routine

The fix for this particular date is a few days of work. The fix for the pattern is a short list of every runtime, framework and database version you depend on, with its end-of-life date, reviewed twice a year. Then upgrades are planned in quiet weeks instead of found in December. How to decide which upgrades to do now and which to defer is in [upgrade the dependency or defer it](/post-dependency-upgrade-or-defer).

## FAQ

### Will my site stop working on 1 January 2027?

No. PHP 8.2 will keep running. What stops is the supply of security fixes for that version from the PHP project.

### Is it safe to stay on PHP 8.2 for a few more months?

The risk does not jump on day one. It grows with each vulnerability found afterwards. A planned upgrade in January is a reasonable position. No plan at all is not.

### We are on WordPress. Is this different?

The check is easier and the switch is often a dropdown in your hosting panel. The risk is plugins and themes that have not been updated for newer PHP. Test on a staging copy and replace abandoned plugins first.

### Does this affect investor diligence?

A reviewer will note an end-of-life runtime. A dated plan to upgrade is a fine answer. Not knowing which version you run is a worse finding than the version itself.

If you do not know what your product runs on or who is responsible for keeping it current, a [technical teardown](/teardown) will give you the full list with dates. Or [book a call](/book-a-call) and we will start with the version check.
