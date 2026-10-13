---
title: Old app versions you cannot switch off
slug: old-app-versions-you-cannot-retire
date: '2026-10-13T15:30:05.936Z'
category: Pattern recognition
excerpt: >-
  Your backend still serves app builds from a year ago because nobody built a
  forced-update path. How to add a version gate and retire old code.
description: >-
  Old mobile app versions keep calling your backend. How a version gate and
  support window let you retire them safely.
author: The founder of Fraction
readTime: 6
draft: false
---

The mobile app shipped eighteen months ago. Since then the team has released forty versions. The backend now has to keep answering requests from all forty, because some users never update, and nobody built a way to tell an old app "you need to update before you can continue."

This is one of the most predictable patterns I see in startups with a mobile product. It does not hurt in month one. It hurts the first time you need to change an API, fix a security bug in the client, or stop paying for an old integration, and you discover you cannot, because version 1.3 is still on a few thousand phones and it still calls the old endpoint.

The fix is small and cheap if you do it before launch. It is slow and awkward if you do it after.

## Why old versions never go away

On the web, you deploy and every user gets the new code on their next page load. Mobile does not work like that. A release goes through store review, then sits in the store until each user's phone installs it. Plenty of people have automatic updates turned off, are low on storage, or simply never open the store. Some of your users will run a build from a year ago, and nothing in the platform forces them to move.

That is fine until the old build depends on something you want to change. Typical examples from engagements:

- The team renamed a field in an API response. The new app reads the new name. Old apps crash on launch because the field they expect is missing.
- A payments flow had a bug in the client that charged twice on a slow network. The fix shipped, but the old builds still have the bug.
- An auth library in the old app has a known vulnerability. You cannot patch an app that is already installed.
- The company wants to retire an old third-party SDK, and the bill for it keeps arriving because old installs still call it.

In each case the backend team ends up carrying permanent compatibility code, usually as a growing pile of `if version < X` branches nobody wants to touch.

## The pattern: no version gate

The root cause is almost always the same. The first version of the app had no mechanism to ask the server "is this version still allowed?" Once that first version ships without it, you can never add the check to that version. The best you can do is add it now and wait for the old installs to age out.

So the single most useful thing to build before your first mobile release is a version gate. It is a few hours of work.

### What a version gate looks like

The app sends its version with every API request, or calls a small config endpoint when it starts. The server answers with one of three states:

1. **OK.** Carry on.
2. **Update recommended.** Show a dismissible prompt with a link to the store.
3. **Update required.** Show a blocking screen with a link to the store and nothing else.

The thresholds live on the server or in a remote config service, not in the app, so you can raise them without shipping a build. Firebase Remote Config documents exactly this setup, with separate minimum and latest version values per platform. On Android, Google Play's In-App Updates API can download and install the update without the user leaving the app. On iOS, you send the user to the App Store listing.

### The server side matters too

A blocking screen in the client is not enough on its own. A modified client, or an old build with a bug in the gate, can still call your API. So the server should also refuse writes from versions below the floor, with a clear error the app can turn into an "update required" message. That is what lets you actually delete the old code path, not just hope nobody uses it.

## How to run it once it exists

Having the gate is half of it. The other half is a policy, otherwise nobody ever raises the floor and you are back where you started.

What I usually set with teams:

- **Support window.** Decide how many versions or months back you support. Something like "the last six months of releases" is common and easy to explain to support staff.
- **Soft before hard.** Raise the recommended version first and watch how many users move in a week or two. Raise the required version after that.
- **Check before you block.** Look at how many active users sit below the new floor before you raise it. Blocking a large share of active users at once is a support event, so do it in steps.
- **Security exceptions.** For a real security or payments bug, skip the soft step and raise the floor immediately. This is the case the gate exists for.
- **Backend cleanup ticket.** Every time the floor goes up, open a ticket to delete the compatibility code for versions now below it. That is where the payoff is.

### Design APIs for slow clients anyway

The gate is the safety net. The habit that prevents most of the pain is designing API changes to be additive: add new fields instead of renaming old ones, add a new endpoint instead of changing the meaning of an existing one, and only remove the old shape after the floor has passed it. If you are deciding whether to expose a public API at all, the same discipline applies, which I covered in [whether you should build an API](/post-should-you-build-an-api).

## What it costs to fix late

If you already have a mobile app in the stores without a gate, here is the realistic path:

1. Add the gate in the next release. From this release on, you can control things.
2. Keep the old compatibility code until the share of active users on gateless versions is small enough to accept.
3. For the stragglers, decide what you can do server-side: reject writes from very old builds with an error that at least shows text, or accept that those users will see a broken app and handle it through support and email.

This takes months, not days, because you are waiting for real people to update. That waiting time is the real cost, and it is why I raise this in every [technical teardown](/teardown) of a company that is about to launch a mobile app.

## Who should own this

Not the most junior mobile engineer, and not a ticket in the backlog that keeps getting pushed. The version gate touches mobile, backend, and support, so someone senior has to decide the support window and own raising the floor. In a small team that is usually the CTO or tech lead. If nobody in the company plays that role yet, this is one of the decisions a fractional CTO settles in the first month, along with the other release-safety habits in [making deploys boring](/post-deploys-are-an-event).

## FAQ

### When should we add a forced update mechanism?

Before the first public release of the app. Any version that ships without the check can never be forced to update, so every week of delay adds versions you will have to support until their users drift away on their own.

### Will forcing updates annoy users?

A blocking screen for a minor change will. Use the recommended state for most releases and keep the required state for breaking API changes and security or payment fixes. Most users never see the hard block if you raise the floor slowly.

### Can we just keep supporting every old version?

You can, but the cost grows with every release. Each supported version is another set of code paths to test and another reason a backend change is risky. A clear support window is cheaper than permanent compatibility.

### Does this apply to web apps?

Much less. A web app gets new code on the next page load. The exception is a long-lived single-page app tab, where a simple "new version available, please refresh" banner covers the same need.

If you have a mobile app in the stores and are not sure what versions are still calling your backend, that is a quick thing to check together on a [call](/book-a-call).
