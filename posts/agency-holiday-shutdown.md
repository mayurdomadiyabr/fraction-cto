---
title: Your agency goes quiet over the holidays. Plan cover now
slug: agency-holiday-shutdown
date: '2026-11-20T03:08:57.859Z'
category: Vendors
excerpt: >-
  Most agencies thin out from late December. A one-page holiday plan: named
  on-call, emergency rate, change freeze, access and renewals.
description: >-
  Your agency or offshore team will be thin over the holidays. The one-page plan
  to agree now: on-call, freeze date, access, renewals.
author: The founder of Fraction
readTime: 6
draft: false
---

If your product is built and run by an agency or an offshore team, find out this week exactly who is working between December 20 and January 5, and who can touch production if something breaks. Most agencies take some version of a year-end break, and many founders only learn the details when a payment provider changes an API or a certificate expires on December 27. A one-page holiday plan, agreed in writing before December, costs an hour and removes most of the risk.

I see the same story every January. The product was fine in mid-December. Something small went wrong over the break: a failed renewal, a third-party outage, a spike from a holiday promotion. The one person who could fix it was on a beach with no laptop, and the founder spent four days refreshing a status page.

## Why year-end is riskier than it looks

The risk is not that the agency goes on holiday. Of course they do, and they should. The risk is three things lining up at once.

First, coverage is thinner than it sounds. An agency will often say "we have someone available." In practice that can mean one junior developer who has never deployed your app, on call for twelve clients.

Second, the calendar is not one calendar. If your team is spread across countries, the gaps do not line up. A team in Western Europe or the US may be out from Christmas Eve to New Year's Day. Parts of Eastern Europe also mark Orthodox Christmas on January 7. Teams in China, Vietnam or Taiwan take their longest break around Lunar New Year, which falls on February 6 in 2027. India-based teams may work through late December but took leave around Diwali in November. Ask about your team's actual dates, not the dates you assume.

Third, your business may peak exactly when they are away. If you sell to consumers, late November through December is when traffic, promotions and payment volume are highest. A checkout bug on December 22 costs more than the same bug in March.

## The one-page holiday plan

Ask the agency for this in writing by the first week of December. If they cannot produce it, that tells you something about how they run your account the rest of the year too.

### Who is on call, and what that means

Get a name, not a role. "Priya, from December 21 to January 3, reachable on WhatsApp and phone, responds within two hours between 9am and 9pm her time." Also ask whether that person has deployed your app in the last 60 days. If not, have them do a supervised deploy before the break.

Agree what counts as an emergency. A simple rule I use: an emergency is anything that stops users signing in, stops payments, or exposes data. Everything else waits for January. Without that line, you will either page them for a typo or hesitate to page them when payments are failing.

### What the emergency rate is

Many agencies charge more for holiday call-outs. That is fair. Agree the number now, for example "time and a half, minimum two hours", so you are not negotiating price at 11pm on December 26 while customers are emailing you.

### The change freeze

Agree a date after which nothing ships to production except emergency fixes, usually around December 15 to 18. The last release before the freeze should go out early enough that the full team is around for a few days afterwards to catch problems. Shipping a big feature on the last working day before a break is the most common self-inflicted holiday incident I see. I wrote more about [when a feature freeze actually helps reliability](/post-feature-freeze-reliability).

### Access you hold yourself

Confirm that you, not only the agency, can log in to the hosting account, the domain registrar, the app store accounts and the payment provider. If the agency holds the only admin login, the holiday is when you discover it. The [shared admin logins problem](/post-shared-admin-logins) is worth fixing anyway; December just makes it urgent.

### What expires over the break

Ask for a list of anything that renews or expires between December 15 and January 15: domain names, TLS certificates that are not auto-renewed, API keys with expiry dates, Apple push certificates, paid plans on monthly billing with a card that might expire. One look at this list in early December prevents most of the "it just stopped working" calls. See [what to do when a domain or certificate expires](/post-domain-or-certificate-expired) if one gets through anyway.

## What to do if they say there is no cover

Some small agencies genuinely close for two weeks. That is not automatically a reason to leave them, but you then need your own plan.

- **Reduce the blast radius.** Pause risky experiments, turn off non-essential integrations, and avoid launching promotions that depend on new code.
- **Write a two-page runbook.** How to check if the site is up, how to restart the app, how to roll back the last deploy, who to call at the hosting company. The agency can write this in a day before they leave.
- **Line up a backup.** A freelancer or a fractional CTO who has had a read-only walkthrough of the system can handle a real emergency much better than someone seeing it cold. Do the walkthrough in December, not during the outage.

If you depend entirely on one developer, this is also a good moment to look at [key-person risk in your codebase](/post-key-person-codebase-risk). The holiday is a short preview of what happens if that person leaves.

## What good looks like

A well-run agency will send you the holiday plan before you ask. It will name the on-call person, give their hours, state the emergency rate, list the freeze date, and include a short list of renewals. It will take them about an hour. When I review an agency relationship during a [teardown](/teardown), the presence or absence of this kind of document is one of the quickest signals of how mature the vendor is.

If the plan you get back is vague, push once. If it is still vague, assume there is no real coverage and plan for that.

## FAQ

### Is it reasonable to ask an agency for holiday on-call?

Yes. You are asking for a named contact and an agreed response time for real emergencies, not for the team to work through their holiday. Expect to pay a premium rate for call-outs, and expect them to define "emergency" narrowly. Both are fair.

### When should the code freeze start?

For most early-stage products, three to five working days before the team starts leave. That gives time to catch problems from the last release while everyone is still around. If you have a big seasonal sales period, consider freezing before it starts, not before the holiday.

### Our team is in a country with different holidays. Does this still apply?

Yes, but the dates move. Ask for the team's own calendar for the next three months and mark every day when fewer than half of them are working. Lunar New Year, Diwali, Eid and Orthodox Christmas can each cause a longer gap than December 25 does.

### What if we are mid-build and the deadline falls in January?

Then the holiday is already part of your schedule, whether the plan says so or not. Ask the agency to show the working days they are counting between now and the deadline. If the plan assumes full-speed work through late December, treat the date as optimistic. If you want a second opinion on a schedule like that, you can [book a call](/book-a-call).
