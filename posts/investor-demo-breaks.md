---
title: Your product demo broke in the investor meeting. Prevent it
slug: investor-demo-breaks
date: '2026-10-10T02:54:18.766Z'
category: Fundraising
excerpt: >-
  Demos break because they run on environments never meant to be shown. A
  dedicated demo setup is a few days of work, done once.
description: >-
  Stop your product demo breaking in front of investors: a demo environment,
  seeded data, a reset script and a morning-of checklist.
author: The founder of Fraction
readTime: 5
draft: false
---

You are twenty minutes into a partner meeting. You click the button that shows the product's best moment, and a spinner sits there. Or a test record called "asdf asdf" appears in the list. Or a real customer's name shows up on screen. What should a startup do to stop the product demo breaking in front of investors?

Give the demo its own environment, with its own seeded data, a script that rebuilds it in minutes, a check the morning of each meeting, and a recording to fall back to. That is a few days of engineering work, done once, and it is one of the cheapest fixes I recommend to founders before a raise.

## Why demos break during raises

Demos rarely break because the product is bad. They break because the demo is run against an environment that was never designed to be shown.

The usual setups, in rough order of how often I see them:

- **Production, with a founder's account.** Real customer data can appear on a shared screen. A deploy that morning can break the flow. A rate limit you have never hit in testing gets hit by your own clicking.
- **Staging.** Engineers are actively changing it. Data gets wiped or mangled by tests. Last night's half-merged feature is live.
- **A developer's laptop.** Works perfectly until the hotel wifi drops or the laptop decides to update.

None of these is wrong for its original purpose. They are wrong for a forty-minute meeting where one stall costs you the room's attention. If you are still deploying straight to production and have no staging at all, read [do you need staging yet](/post-staging-environment-yet) first; the answer before a raise is often yes.

## What a reliable demo setup looks like

### A dedicated demo environment

A separate deployment of the product, with its own database, that only exists to be shown. It does not receive the nightly test run. Engineers do not use it for development. It is deployed on purpose, from a known-good version, not automatically from the main branch.

For most early products this is cheap. It is often the same infrastructure as staging, a second copy, and a small hosting cost per month.

### Seed data that tells the story

The data in the demo environment is the demo. Write it deliberately:

- **Realistic but clearly fictional.** Plausible company names, sensible numbers, dates that look current. Never a real customer's name or logo without permission.
- **Shaped to the story.** If your best moment is a dashboard showing a trend, the seed data should produce that trend. If the pitch talks about a team of fifty, the demo account should look like a team of fifty, not three test users.
- **No junk.** No "test test", no lorem ipsum, no records created by an engineer at 2am.

### A one-command reset

Keep the seed script in version control and make it possible to wipe and rebuild the demo environment with one command. After every meeting where someone clicked around, reset it. If something looks wrong the morning of a pitch, reset it.

This is the part founders skip, and it is the part that makes the setup actually work. A demo environment that drifts becomes staging again within a month.

## The morning-of checklist

Before every investor meeting where you plan to show the product:

1. Run the exact demo path end to end on the device you will present from.
2. Check the network you will use, or plan for the worst one you might get.
3. Close notifications, chat apps and anything that might pop up on a shared screen.
4. Have the key screens open in tabs so you can jump to them if a page is slow.
5. Have a screen recording of the full demo, saved locally, ready to play.

This takes fifteen minutes. Founders who do it rarely have a demo disaster. Founders who do not usually have one eventually.

## When it breaks anyway

Something will go wrong at some point. What you do next matters more than the failure.

Acknowledge it in one sentence, switch to the recording or screenshots, and keep going. Do not debug live. Do not apologise for three minutes. Investors have seen hundreds of demos stall; what they are watching is whether you stay composed and whether you know your product well enough to narrate it without the live version.

Afterwards, find out why it broke. If the answer is "a deploy went out to the demo environment that morning", that is a process fix. If the answer is "the product falls over when two people use it at once", that is a much more important thing to know before diligence finds it.

## Do not fake it

There is a line here worth stating plainly. A demo environment with curated data is fine; every serious company uses one. Showing investors pre-recorded output and implying it is live, or showing a feature that does not exist in the product as if it does, is not fine.

It also does not survive diligence. A technical reviewer will compare what was shown with what is in the code, and any gap between the two becomes a trust problem, not a technical one. I wrote about how that check works in [the deck number diligence will make you prove](/post-prove-the-technical-claim). If a feature is not ready, say so and show the mockup as a mockup.

## How the demo connects to diligence

Investors who like the demo often ask for access to try the product themselves. Give them their own account in the demo environment, seeded with the same story, not access to production. That keeps customer data out of the process and gives them a stable experience, which matters more than most founders expect. For how to handle deeper access requests later, see [diligence wants into your production](/post-diligence-production-access).

A product that demos reliably is also usually a product that is reasonably well operated. If your demo keeps breaking for reasons nobody can explain, that is a signal worth investigating before an outside reviewer does. A [technical teardown](/teardown) will tell you where the fragile parts are.

## FAQ

### How long does setting up a demo environment take?

For a typical early web product, a few days of an engineer's time: a second deployment, a seed script and a reset command. It is a small task with a large payoff during a raise.

### Can I demo from production if I am careful?

You can, but you carry the risk of showing customer data and of a deploy breaking the flow mid-meeting. A separate environment removes both.

### Should I demo live or show a recording?

Live is more persuasive when it works. Lead with live, and keep a recording ready as the fallback rather than the plan.

### Who should own the demo environment?

One named engineer. If nobody owns it, it drifts back into a second staging environment within weeks.

If you are preparing for a raise and want someone to check the product and the story hold up together, [book a call](/book-a-call).
