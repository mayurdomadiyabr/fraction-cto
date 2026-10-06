---
title: Your error tracker has thousands of errors nobody reads
slug: error-tracker-nobody-reads
date: '2026-10-06T03:16:52.726Z'
category: Pattern recognition
excerpt: >-
  An error tracker full of old noise hides the bugs customers hit today. A short
  cleanup and a weekly habit fix it.
description: >-
  Why startup error trackers fill with noise until nobody reads them, and the
  cleanup plus weekly habit that makes them useful again.
author: The founder of Fraction
readTime: 5
draft: false
---

Open your error tracker and look at the count of unresolved issues. In many early-stage products I review, it is in the hundreds or thousands. Then ask who looked at it this week. Usually the answer is nobody, or the one engineer who set it up and has since given up.

The tool is installed, it is collecting every exception, and the team pays for it. But it has stopped being a tool for finding problems. It has become a place where errors go to be ignored, and real bugs that customers are hitting right now are buried under a pile of old noise.

The short answer: an error tracker nobody reads is worse than it looks, because the team believes it is covered. Fixing it is not about more alerts. It is a one-time cleanup to get the list to something a human can read, and a small weekly habit to keep it there.

## How a team ends up here

It happens the same way almost every time.

Someone adds an error tracker early on, which is a good decision. For a few months the list is short and every new error gets attention. Then the product grows and the noise arrives:

- Errors from browser extensions and bots that have nothing to do with your code.
- A known third-party timeout that fires dozens of times a day and is harmless.
- Errors from an old version of the mobile app that a few users never update.
- A real bug nobody had time to fix this sprint, which keeps firing.

Each one is reasonable to ignore on its own. Together they push the count up until a new, serious error looks exactly like the hundreds of old ones. Once that happens, nobody opens the tool unless a customer has already complained.

This is not just a startup problem. The GOV.UK team [described](https://technology.blog.gov.uk/2021/06/28/how-we-reduced-errors-on-gov-uk/) logging 100,000 to 200,000 errors a week before a deliberate cleanup, and GitLab's own handbook notes that one of its error-tracking projects became functionally unused for triage because the loudest issues were not bugs. If teams with that much engineering capacity drift there, a five-person team certainly will.

## Why it matters

The obvious cost is bugs that reach customers and stay there. Someone hits an error on checkout or signup, it gets recorded with a full stack trace, and nobody sees it. Customers rarely report errors; they just leave.

The less obvious cost is false confidence. Founders tell investors and customers they have error monitoring, and technically they do. But it is the same pattern as [tests everyone has learned to ignore](/post-flaky-tests-everyone-ignores): the safety net exists on paper and has holes in practice. It also shows up when someone looks closely, for instance when your [incident history](/post-incident-history-diligence) gets reviewed and it turns out most incidents were reported by customers, not caught by the tools you were paying for.

## The cleanup: get it to a list a human can read

Set aside two or three days for one engineer. The goal is not zero errors. The goal is a list short enough that anything new stands out.

### 1. Filter out what is not yours

Most trackers let you drop events from browser extensions, known bots and unsupported old app versions before they are recorded. This alone often removes a large share of the volume. Turn down sampling for very high-volume, low-value events too.

### 2. Sort what is left into three piles

Go through the remaining issues, highest volume first:

- **Fix now.** Anything touching signup, login, payments or data loss. Create a ticket and assign it.
- **Known and accepted.** Harmless noise you have decided to live with, such as a third-party timeout that retries successfully. Mark it as ignored with a note explaining why, so the next person does not re-investigate it.
- **Old and unclear.** Issues with no events in the last 30 days. Resolve them. If one comes back, the tracker will reopen it, which is exactly what you want.

### 3. Merge duplicates

The same root cause often appears as several issues with slightly different messages. Merging them makes the true size of each problem visible.

At the end, you should have a short list of real, assigned problems and an empty inbox for new ones.

## The habit: keep it readable

The cleanup decays in a few months without a habit behind it. Keep the habit small.

### One owner per week

Rotate one engineer each week as the person who looks at new errors daily, takes ten minutes, and either creates a ticket, marks it as known, or fixes it. In a team of two or three, it can be the same person, but name them.

### Alert only on what is new or spiking

Configure alerts for new issue types and for sudden spikes in existing ones, and route them to a channel the owner actually watches. Do not alert on every event. The aim is a few meaningful messages a week.

### Review it with releases

After each deploy, the person who shipped glances at new errors for an hour or so. Most regressions show up quickly, and catching them while the change is fresh is much cheaper. This fits naturally with making [deploys routine rather than an event](/post-deploys-are-an-event).

## What it costs

The cleanup is a few engineer-days. The weekly habit is perhaps an hour in total across the team. Some teams are now experimenting with AI agents to group and draft tickets for new errors, which can cut the time further, but the decision about what matters should still sit with a person.

Compared with losing customers to errors you had already recorded, this is one of the cheapest reliability improvements available. It is also a common quick win in a [technical teardown](/teardown).

## FAQ

### How many unresolved errors is too many?

There is no magic number. The test is whether a new, serious error would stand out. If an engineer cannot scan the unresolved list in a few minutes and tell what is important, there are too many.

### Should we aim for zero errors?

No. Some errors are harmless and not worth the cost of fixing. Aim for zero unknown errors: every issue in the list is either assigned, deliberately accepted with a note, or new and about to be looked at.

### Is it safe to resolve old errors in bulk?

Generally yes, for issues with no recent events. Most error trackers reopen an issue automatically if it occurs again, so anything still real will come back with fresh data.

### Who should own the error tracker in a small startup?

A rotating weekly owner works best once you have three or more engineers. Before that, name one person explicitly. Shared ownership in a small team usually means nobody looks.

If you are not confident your monitoring would catch the next serious bug before a customer does, [book a call](/book-a-call) and we can walk through what you have.
