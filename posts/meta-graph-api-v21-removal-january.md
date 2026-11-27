---
title: Meta removes Graph API v21 on January 21. Check your calls
slug: meta-graph-api-v21-removal-january
date: '2026-11-27T02:41:07.666Z'
category: Vendors
excerpt: >-
  Meta removes Graph and Marketing API v21.0 on January 21, 2027. Where versions
  hide in a startup, and why some calls change silently.
description: >-
  Meta removes Graph API and Marketing API v21.0 on Jan 21, 2027. Where versions
  hide in your stack and how to upgrade without surprises.
author: The founder of Fraction
readTime: 5
draft: false
---

Meta removes version 21.0 of its Graph API and Marketing API on January 21, 2027. If your product uses Facebook Login, posts to Pages or Instagram, reads Meta lead ads, or sends events through the Conversions API, check which version each integration is pinned to. The trap is that a removed Graph API version does not always fail loudly: Meta's own docs say plain Graph API calls get routed to the oldest version still available, so behaviour can change without an error. Marketing API calls may simply fail. Either way, the time to look is before the date, not after a dashboard goes flat.

Meta confirmed the date in its [Graph API v26 announcement](https://developers.facebook.com/blog/post/2026/07/29/introducing-graph-api-v26-and-marketing-api-v26/). Version 20.0 was removed on September 24, 2026, and version 22.0 is reported to follow in May 2027. This is a rolling schedule, which is the real point: you will be here again in six months.

## Why this one is easy to miss

Most API shutdowns are a single date and a clear error. Meta's versioning is different. Every integration states a version in its request URL or its SDK setting, each version lives for roughly two years, and then it goes away. If the person who set up the integration hard-coded a version three years ago, nobody has looked at it since.

The behaviour after removal differs by product, and Meta's documentation is not fully consistent on it:

- For the Graph API, the [platform versioning guide](https://developers.facebook.com/docs/graph-api/guides/versioning/) describes calls to a version that is no longer usable being handled by the next oldest version that is. Your code keeps working, but against a newer version whose fields and defaults may differ from what you built against. Auto-upgraded responses carry a header saying so, which almost nobody logs.
- For the Marketing API, including the Conversions API, older Meta changelogs said deprecated versions throw an exception instead of upgrading. Newer pages describe calls that "may fail or be upgraded." I would not bet production on either reading. Assume a Marketing API call on version 21 can fail on January 21 and test it before then.

The quiet case is the dangerous one. A login flow that suddenly returns one field fewer, or a lead sync that starts dropping a value, can run for weeks before anyone notices.

## Where Meta versions hide in a typical startup

Founders often think "we do not integrate with Meta" and are wrong. Look in these places:

### Your own product code

Search your repositories for "graph.facebook.com" and for version strings like "v21.0". Check the configuration for any Facebook SDK in your web or mobile apps, because the SDK often sets the version for you, and an old SDK means an old version. Mobile apps are the slow ones: an app version in users' hands keeps calling whatever it shipped with until they update.

### Your marketing and data tools

The Conversions API connection, lead ads sync into your CRM, and ad reporting connectors are usually set up by growth, through a tool or an agency, not by engineering. Each one has a version somewhere. For third-party tools, ask the vendor which Meta API version they call and when they upgrade. If you are already [vetting vendors that hold your customer data](/post-vet-vendors-customer-data), add this question to the list.

### Scripts nobody owns

The scheduled job that pulls ad spend into a finance sheet. The webhook that posts new blog entries to a Facebook Page. The notebook someone in growth runs every Monday. These are the integrations that break silently, because they have no owner to notice.

## What the upgrade involves

For most startups the change from version 21 to a current version is small, but it is not zero. Meta publishes a changelog for every version, and each one lists fields that were removed, permissions that changed, and defaults that moved. The work, as a rule of thumb:

- Read the changelogs between your version and the target version for the endpoints you actually call. Skip the rest
- Bump the version in one place, ideally an environment variable, not scattered through code
- Run your login, posting, lead, and conversion flows in a test app or with a test account
- Compare a day of conversion and lead counts against Meta's own Events Manager and Ads Manager numbers

If the integration is a single login flow, that is an afternoon. If it is a full ads reporting pipeline with no tests, it is a week, mostly in checking that the numbers still match. My advice is to jump to a recent version rather than the next one up, so you are not doing this again in May.

## Make it boring next time

The fix that pays off is not the upgrade itself. It is making the version a single setting someone owns, with a calendar reminder each time Meta announces a removal date. Meta publishes those dates well ahead. The founders who get caught are the ones whose version number lives in five files and three vendors, with no list.

Treat Meta the way you would treat any [platform you depend on that changes its terms](/post-platform-closing-free-api): know what you call, know who owns it, and check twice a year. If one vendor's API can take down your login or your attribution, that is also a [vendor concentration question](/post-vendor-concentration-diligence) an investor may ask.

## FAQ

### Will Facebook Login stop working on January 21?

Not necessarily. For Graph API calls, Meta's versioning guide says requests to a removed version are handled by the oldest available version. Login should keep working, but the fields and behaviour may change. Test it before the date.

### Does the Conversions API upgrade automatically too?

Do not assume so. Meta's documentation has described Marketing API calls, including the Conversions API, both as failing and as upgrading after removal. Test your conversion events against a current version before January 21.

### How do I know which version we use?

Search your code and app configuration for "graph.facebook.com" and version strings, check the Facebook SDK version in your apps, and ask each tool or agency that connects to Meta which version it calls.

### Should we upgrade to v22 or the latest?

The latest stable version, in most cases. Version 22 is reported to be removed in May 2027, so stepping one version at a time just schedules the next fire drill.

If you want help finding every third-party API your product quietly depends on, that is part of a [Fraction teardown](/teardown), or you can [book a call](/book-a-call) and we can go through your list together.
