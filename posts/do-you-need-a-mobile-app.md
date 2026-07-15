---
title: Do you actually need a native mobile app?
slug: do-you-need-a-mobile-app
date: '2026-07-15T13:14:55.163Z'
category: Decisions
excerpt: >-
  Most founders put a native mobile app on the roadmap too early. A good web
  experience covers most of the need at a fraction of the cost. When native is
  actually worth it.
description: >-
  When a native mobile app is worth the cost and when a web app or PWA is the
  smarter early call, with real 2026 numbers.
author: The founder of Fraction
readTime: 6
draft: false
---

Almost every founder I meet has a native mobile app on the roadmap, and most of them do not need one yet. The instinct is understandable. Your competitors have apps, your customers live on their phones, and a spot on the home screen feels like a real business. But a native app is one of the most expensive commitments an early team can make, and for most products the honest answer in 2026 is that a good mobile web experience gets you 90 percent of the way there for a fraction of the cost and time.

This is a build-versus-wait decision dressed up as a technology choice. Treating it that way is how founders end up maintaining two extra codebases before they have proven anyone wants the product at all.

## What a native app actually costs

The sticker price is only the start. A single-platform native MVP starts around 30,000 dollars and a more complex build runs past 150,000. But the number that catches founders off guard is the one after launch. Plan on 15 to 20 percent of the build cost every year just to keep it alive, because a native app is never done. Apple and Google ship new OS versions on their schedule, not yours, and an app that worked fine in June can break in September because the platform moved underneath it.

Then there is the multiplication problem. iOS and Android are two different platforms with two different languages, two different review processes, and two different sets of bugs. Unless you go cross-platform, you are not building an app, you are building two, and every feature you ship afterward gets built and tested twice. There is also a gatekeeper you do not have on the web: the app store review queue. A critical fix on your website goes live in minutes. The same fix in a native app waits for review, and that delay is not yours to control.

Compare that to a web app or a progressive web app at roughly 20,000 to 30,000 dollars, on one codebase, deployed the moment you push. A PWA can cut your combined web-and-mobile build cost by half or more, and it installs to the home screen, works offline, and sends push notifications. The capability gap that made native the default a decade ago has mostly closed.

## When native is genuinely the right call

None of this means native is wrong. It means native is a decision you should be able to justify with a specific reason, not a default you reach for because everyone else has an app.

### Your core feature needs the hardware

If the product genuinely depends on something the browser cannot do well, native earns its cost. Continuous background location for a delivery or fitness product. Heavy on-device processing, camera or AR work, tight Bluetooth or hardware integration. Reliable background sync that has to run whether the app is open or not. When the thing that makes your product valuable is one of these, a web app will feel like a compromise your users notice, and native stops being a luxury.

### The phone is where the usage actually lives

Some products are only used on a phone, in the moment, many times a day. If your honest usage pattern is a customer opening the product a dozen times a day on the street, the friction of a browser tab is real and a home-screen app changes the behavior. But be strict with yourself here. "Users are on mobile" is not the same as "users need a native app." A responsive website is on mobile too.

### You have proven the demand and need retention

An app icon on the home screen and a push notification channel are retention tools. They are worth paying for once you have something worth retaining. Before product-market fit, you are paying for retention on a product people have not decided to keep yet. This is the same premature-scaling trap I have watched sink otherwise healthy startups: [spending on scale before you have demand](/post-premature-scaling) is how you run out of money proving the wrong thing.

## The sequence that keeps your options open

The move that has served the founders I work with best is almost always the same. Start with a responsive web app or a PWA. Get it in front of real users. Watch what they actually do on their phones. If the mobile-web experience is holding you back in a way you can point to, and the demand is real, then build native, funded by evidence instead of anxiety.

This keeps the expensive decision reversible for as long as possible. You are not locked into two native codebases you cannot afford to maintain, and you have real usage data to tell you which platform and which features to build first. The founders who get burned are the ones who commit to native on day one, spend six months and a chunk of the seed round building it, and then discover the product idea needed to change anyway. The web version would have let them find that out in three weeks.

If you want help running this as an actual decision rather than a gut call, this is exactly the kind of thing a [build, buy, or wait decision tree](/post-build-buy) is for, and it is a common first question when founders [book a call](/book-a-call) to pressure-test a roadmap before they spend on it.

## FAQ

### Isn't a web app just a worse version of a native app?
Not anymore, for most products. Progressive web apps can access the camera, GPS, and biometrics, work offline, install to the home screen, and send push notifications. The remaining gaps are real but narrow: heavy background processing, deep hardware integration, and the raw performance ceiling for graphics-intensive work. If your product does not live in those gaps, a web app is not a worse app, it is a cheaper and faster one.

### What about cross-platform tools that build both apps from one codebase?
They are a reasonable middle path and cut the two-codebases problem down considerably. But they do not remove the native tax entirely. You still ship to two app stores, wait on two review queues, chase platform-specific bugs, and pay the annual maintenance. Cross-platform lowers the cost of native, it does not turn native into web.

### How do I know if my usage really needs the home screen?
Look at frequency and context, not preference. A product opened many times a day, on the move, in short bursts, benefits from being one tap away. A product opened a few times a week, mostly at a desk, does not. If you cannot point to a concrete moment where a browser tab is losing you a user, you are probably buying an app icon for how it feels, not for what it does.

### We already have paying customers asking for an app. Does that change it?
It is a strong signal, and worth listening to, but dig into what they are actually asking for. Often "we want an app" means "the mobile experience is clunky" or "we want notifications," both of which a PWA solves without a native build. Sometimes it genuinely means native. The point is to build native because you confirmed the need, not because a few requests made it feel urgent.
