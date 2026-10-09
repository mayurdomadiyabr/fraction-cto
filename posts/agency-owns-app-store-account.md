---
title: Your app is published under your agency's developer account
slug: agency-owns-app-store-account
date: '2026-10-09T03:30:34.553Z'
category: Vendors
excerpt: >-
  If your agency published your app from its own Apple or Google account, move
  it while the relationship is friendly. Here is how.
description: >-
  Your app lives in your agency's App Store or Google Play account. Why it
  matters and how to transfer it to your own account safely.
author: The founder of Fraction
readTime: 6
draft: false
---

Your app is live in the App Store and Google Play. Customers download it, reviews come in, and the listing says your product name. Then you look at the line under the app name and it says the agency's company name. The app was published from the agency's developer account, not yours.

This is one of the most common ownership gaps I find in agency-built products, and one of the most fixable, as long as you fix it while the relationship is still friendly. Moving an app between developer accounts is a routine process on both stores. It just has requirements that take time to meet, and it needs the agency's cooperation, because only the account holder that currently owns the app can start the move.

## Why it matters more than it looks

While everything is working, the agency's account is invisible. The app updates, money arrives, nobody cares whose name is on the listing. The problem shows up at the worst moments:

- **You change agencies.** The new team cannot ship an update without access to the old team's account. You are now asking a vendor you just let go for a favour.
- **The agency has a dispute with you, or with Apple or Google.** An account suspension or a lapsed membership on their side can take your app with it.
- **You raise or sell.** A diligence reviewer will ask who owns the distribution channel. "Our former vendor" is a finding, not an answer.
- **Revenue and data.** If you sell in-app purchases or subscriptions, payouts, tax settings and sales reports are tied to the account that publishes the app.

It belongs on the same list as the domain, the cloud account and the code repository. If you are thinking about [firing your agency mid-build](/post-fire-dev-agency-mid-build), app store accounts are one of the things to move first, before you give notice.

## What you need on your side first

You cannot receive an app until you have your own developer accounts, and those take longer to set up than founders expect.

### Apple

To publish as a company rather than as an individual, you enrol in the Apple Developer Program as an organization. Apple verifies organizations with a D-U-N-S number, and requires a legal entity such as a corporation or LLC; trade names and DBAs are not accepted. If your company does not already have a D-U-N-S number, Apple's own guidance is to allow up to five business days for Dun and Bradstreet to issue one, and enrolment review takes additional time after that. Start this step first.

### Google Play

You need your own Google Play developer account, which carries a one-time 25 US dollar registration fee. Google also does not allow two accounts to use the same developer name at once, so if you want your listing to show your company name and the agency's account currently uses it, someone has to rename an account first.

## How the transfer works

The two stores handle this differently.

On Apple, the account holder on the agency's account starts the transfer from App Store Connect and enters your account's Apple ID and Team ID; your account holder then accepts it. The app stays live through the process, and ratings and reviews come along. There are eligibility conditions: the app needs at least one approved version and no version pending review, agreements and tax details must be current on both sides, and certain capabilities can block a transfer or need extra handling. Third-party guides list things like some iCloud and Wallet capabilities and auto-renewing subscriptions among the items to check. App Store Connect shows the current checklist when you start, and that list is the one to trust.

On Google Play, there is usually no self-serve button. The current owner submits a transfer request to Google support with the app's package name and details from both accounts. Users, ratings, reviews and the store listing carry over; historical earnings and payout reports do not, so download them first. Providers who do this regularly report it taking about a week.

On both stores, ask the agency to export sales, download and earnings reports before the move. Once the app leaves their account, that history usually leaves their dashboard too.

## The things that break if you are not careful

The transfer moves the listing. It does not automatically move everything the app depends on.

- **Signing keys.** On Android, check whether the app uses Play App Signing and who holds the upload key. If the agency holds the only copy of a signing key, get it, or get it reset through Google, before anything else.
- **Push notifications and sign-in.** Apple push certificates, Sign in with Apple, and similar services are tied to the team that owns the app. They usually need to be reconfigured under your account, and that usually means a release.
- **Third-party services.** Analytics, crash reporting, Firebase projects and in-app purchase backends are often created inside the agency's own accounts. Move those separately.
- **Build pipeline.** If the agency's CI signs and uploads builds with their credentials, your next release fails until the pipeline is pointed at your account.

Make a list before the transfer and walk through it with your engineer. The goal is that the first release after the move ships from your account, by your team, with no call to the agency.

## How to ask without starting a fight

Agencies publish under their own account for innocent reasons: it was faster on day one, the founder had no developer account, nobody thought about it. Most will move the app without argument if you ask early and frame it as housekeeping. "Our investors want company assets under the company before the raise" is a true and boring reason that nobody pushes back on.

Put it in writing. Ask for a date, name the person on their side who holds the account, and ask them to confirm the export of historical reports. If the contract already says the client owns all deliverables, quote that line. If it does not, fix the contract for the next vendor. The same logic applies when [your agency hosts your product on their servers](/post-your-agency-hosts-your-product-on-their-servers): ownership is easy to move while everyone is friendly and hard to move after.

## FAQ

### Will my app go offline during the transfer?

On Apple, the app stays available during a transfer. On Google Play, it generally stays live, though a change in default currency between accounts can force a re-check of pricing before it republishes. Plan the move outside a major launch.

### Do I lose my ratings and reviews?

No. On both stores, ratings and reviews travel with the app. Historical financial reports are the part that usually does not.

### What if the agency refuses or stalls?

Check your contract for ownership and assignment of deliverables, then escalate in writing. If they hold the only signing key, that becomes the urgent item. At that point it is worth a lawyer, and it is the kind of exit plan I help founders sequence.

### Should I let the agency keep admin access after the move?

Give them the narrowest role they need to keep shipping, under your account. Access you can revoke is very different from an account you do not own.

If you are not sure what else your agency holds on your behalf, a [technical teardown](/teardown) lists it, or [book a call](/book-a-call) and we can go through it together.
