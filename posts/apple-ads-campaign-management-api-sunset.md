---
title: Apple's old Ads API shuts off January 26. Is your tooling on it?
slug: apple-ads-campaign-management-api-sunset
date: '2026-11-27T02:41:07.436Z'
category: Vendors
excerpt: >-
  Apple retires the Ads Campaign Management API on January 26, 2027. How to find
  every script, tool and agency still calling it.
description: >-
  Apple sunsets the Ads Campaign Management API on Jan 26, 2027. Find every
  tool, script and agency still calling it before bids stop.
author: The founder of Fraction
readTime: 5
draft: false
---

Apple will switch off its Ads Campaign Management API (version 5) on January 26, 2027. Its replacement is the new Apple Ads Platform API. If your app startup runs Apple Ads through anything other than the Apple Ads web interface, such as an in-house bidding script, a reporting pipeline, a growth agency's tooling, or an attribution or ASO vendor, something in that chain is probably calling the old API. Find out who owns each caller now, because the fix is usually not yours to make, and the people who can make it are busy in January.

The date comes from Apple itself. The [Apple Ads Platform API changelog](https://developer.apple.com/documentation/apple-ads-platform-api/changelog-apple-ads-platform-api) says the new API supersedes the Campaign Management API, which will be sunset on that day, and the [9to5Mac write-up from April](https://9to5mac.com/2026/04/02/apple-details-plan-to-sunset-ads-campaign-management-api-in-2027/) covers the original announcement.

## What actually breaks

The sunset retires an interface, not your campaigns. The reasonable reading of Apple's notes, and what the third-party migration guides say, is that campaigns already running keep running on their last settings. What stops is everything that reads from or writes to them through the old API:

- Automated bid and budget changes made by a script or tool
- Daily reporting that feeds your dashboards, finance sheets, or blended CAC numbers
- Keyword harvesting and negative keyword automation
- Any alerting that watches spend and pauses campaigns when they go wrong

That last one is the risk founders underestimate. A campaign that keeps spending while the tool meant to cap it is quietly failing is worse than a campaign that stops. I have not seen anything from Apple describing a grace period or a read-only mode after the date, so plan as if every call to the old API fails on January 26.

## Find every caller this week

The hard part of a deadline like this is not the migration. It is the inventory. Ad tooling is usually set up by whoever ran growth at the time, and it outlives their tenure. Ask these questions in this order:

### Who has Apple Ads API credentials?

API access to Apple Ads is granted to users of your account. Open the account's user list and look for API users and any roles given to outside companies. Each one is a potential caller. Agencies and tools you stopped paying months ago sometimes still have access, which is its own problem.

### Which tools do you pay that touch Apple Ads?

Check the last six months of card and invoice spend for attribution platforms, mobile measurement partners, ASO and bidding tools, and reporting connectors. For each, ask the vendor one question in writing: "Are you on the Apple Ads Platform API yet, and what is your cutover date?" A vendor that cannot answer that clearly in late November is a vendor to watch.

### Does your own code call it?

Search your repositories for the old API host and for "campaign management" in any config or environment variable. One migration guide notes that the base URL moves to a new host under api.ads.apple.com, so a simple search for the old host name across your code, scripts, and scheduled jobs finds most of it. Do not forget the spreadsheet scripts and notebook jobs that someone in growth wrote and nobody in engineering knows about.

### Does your agency run it?

If a growth agency manages Apple Ads for you, the API calls are probably theirs. Ask whether they use their own tooling or a third-party platform, and get the migration plan in writing. If you are already thinking about [the run costs behind an agency quote](/post-agency-quote-run-costs), this is one of them.

## How much work is the migration

For a startup that uses an off-the-shelf tool, the migration is the vendor's job, and your work is chasing confirmation and checking the numbers after cutover. For a startup with its own scripts, it is real but bounded engineering work. Third-party guides describe the authentication as unchanged and the endpoints as new, and Apple has published client libraries for several languages. What I would budget for, as a rule of thumb rather than a measured number:

- A few days for a small reporting script that pulls campaign and keyword data
- One to two weeks for a bidding or automation tool that writes changes, mostly in testing, because a mistake there spends money
- Extra time if the old code has no tests and the person who wrote it has left

The new API is not a renamed copy of the old one. It also covers Apple Maps ads and adds data the old one lacked, so field names and report shapes may change. Treat the migration as a chance to check that your reports still reconcile with what Apple shows in its own interface. Numbers that drift by a few percent after a migration are a common, quiet failure.

## Do not leave it until January

The deadline lands at a bad time. December is short on engineering capacity, many agencies slow down over the holidays (we covered [planning cover for that](/post-agency-holiday-shutdown)), and January 26 is early enough in the year that "we will do it after the break" leaves very little room.

My suggested sequence:

1. This week: inventory every caller and name an owner for each
2. By mid-December: every vendor has confirmed a date in writing, and internal scripts are migrated in a test account or against a single low-spend campaign
3. Early January: switch production callers, then compare a week of reports against the Apple Ads interface
4. Before January 26: remove the old credentials and any API users you no longer need

This is the same playbook as any [vendor API shutdown](/post-google-custom-search-api-shutdown). The technical work is rarely the problem. The problem is that nobody knew the dependency existed.

## FAQ

### Will my Apple Ads campaigns stop on January 26?

Based on Apple's notes and the migration guides, no. Campaigns already running should continue. What stops is anything that manages or reports on them through the old API, which includes bid and budget automation.

### We only use the Apple Ads website. Do we need to do anything?

Probably not for your own team. Check whether any tool or agency has API access to your account, because they may still be calling the old API on your behalf.

### Is the new API a drop-in replacement?

No. The authentication approach is reported to be the same, but the base URL and the endpoints change, and the new API covers more ad placements. Plan for code changes and for checking that reports still match.

### What should we ask our agency?

Ask whether their tooling is already on the Apple Ads Platform API, the date they will cut over, and how they will confirm reporting numbers match afterwards. Get the answer in writing.

If you want help mapping which vendors and scripts your product depends on, that is the kind of dependency list a [Fraction teardown](/teardown) produces, or you can [book a call](/book-a-call) and we can go through it together.
