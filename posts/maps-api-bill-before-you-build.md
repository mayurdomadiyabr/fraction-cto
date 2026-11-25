---
title: Your app needs maps and addresses. Model the bill first
slug: maps-api-bill-before-you-build
date: '2026-11-25T02:44:30.492Z'
category: Decisions
excerpt: >-
  Google Maps dropped its flat monthly credit in 2025. How to count the calls
  your location features make before the first bill arrives.
description: >-
  How Google Maps Platform billing works since March 2025, where location API
  costs come from, and a 30-minute cost model before you build.
author: The founder of Fraction
readTime: 5
draft: false
---

If your product shows maps, autocompletes addresses or calculates distances, the bill depends on which calls you make, not on how many users you have. Since 1 March 2025, Google Maps Platform no longer gives a flat 200 dollar monthly credit; each product now has its own free monthly allowance, and you pay per call above it. Before you build location features, count the calls each screen makes, check them against the free tiers, and decide which features truly need Google.

I see the same story in delivery, field service, real estate and local marketplaces. The map works in the demo, nobody models the cost, and then the first month with real traffic brings a bill nobody can explain. It is rarely the map itself. It is address autocomplete firing on every keystroke, or a distance calculation run for every row of a list.

## What changed in 2025

Google replaced the old flat credit with free usage per product, grouped into tiers. Per Google's own FAQ, Essentials products get 10,000 free billable events a month, Pro products 5,000 and Enterprise products 1,000, and the allowance resets on the first of each month ([Google Maps Platform March 2025 changes](https://developers.google.com/maps/billing-and-pricing/march-2025) and [billing FAQ](https://developers.google.com/maps/billing-and-pricing/faq)). Which tier a call falls into depends on the product and on which fields you ask for.

That last part matters. Asking for more data about a place, such as opening hours or ratings, can move a request into a more expensive tier with a smaller free allowance. Teams often request every field because it was in the example code.

Prices and tiers change; check the current pricing sheet before you rely on any number, including the ones above.

## Where the money actually goes

When I review a location-heavy app, the cost usually comes from three places.

### Address autocomplete

A typical autocomplete box sends a request as the user types, then another to fetch the details of the chosen address. Without care, one checkout can be a dozen billable requests. Google's autocomplete supports session tokens that group the typing and the final selection; use them, start suggesting only after a few characters, and wait a fraction of a second after the last keystroke before sending.

### Distances and routes for lists

"Show the 50 nearest providers with drive time" is 50 route calculations every time the page loads. Most of that can be replaced with straight-line distance computed in your own database for the list, and a real drive-time call only when someone opens a single result.

### Geocoding the same address again

Turning an address into coordinates is something you rarely need to do twice. Store the result with the record. Check the provider's terms on how long you may keep their results, because some limit caching; where they do, store what you are allowed to and design around the rest.

## Do you need Google at all?

Often for some features and not for others. Split it by job:

- **Showing a map.** Plenty of providers serve map tiles, many built on OpenStreetMap data. Note that the public OpenStreetMap tile servers are run by volunteers and their usage policy does not allow heavy production use, so you still need a paid provider or your own tile hosting for a real product.
- **Address autocomplete and geocoding.** This is where data quality matters most, especially outside the US and Western Europe. Test the providers you are considering on 100 real addresses from your own customers before choosing. The winner varies by country.
- **Routing and drive times.** Quality differs by region and by vehicle type. If drive time is central to your pricing or promises, test it as carefully as you test autocomplete.

Using different providers for different jobs is fine, as long as each one sits behind a small interface of your own. That is the same discipline I recommend for any [usage-priced vendor](/post-vendor-abstraction-layer), and it means a later switch is a week, not a quarter.

## The 30-minute cost model

Before you build or launch, do this once.

1. **List every screen that touches location** and the calls it makes: map load, autocomplete, place details, geocode, route.
2. **Estimate calls per user action**, from your own logs if the feature exists, or by clicking through it with the browser's network panel open.
3. **Multiply by your expected monthly actions** at today's volume and at 10x.
4. **Compare against the free allowance** for each product and the paid rate above it.
5. **Set a budget alert and a quota cap** in your cloud console, so a bug or a scraper cannot run up the bill overnight. I cover the first two days of a runaway bill in [what to do about a surprise usage bill](/post-surprise-usage-bill-first-48-hours).

Also restrict your API keys to your own domains and apps. A browser map key with no restrictions is easy for others to copy and spend.

## Build, buy, or skip

Nobody should build their own geocoder or routing engine early. The real decision is which provider for which job, and whether a feature needs live calls at all. A store finder with 40 locations can use a static list and straight-line distance. A delivery app pricing by drive time needs a good routing provider and should pay for it. If you are weighing several decisions like this at once, my general approach is in [build, buy, or wait](/post-build-buy).

## FAQ

### Is the Google Maps free tier enough for an early startup?

Often, yes, for a basic map and modest autocomplete use, because each product has its own monthly allowance. It runs out fastest on autocomplete, place details and route calculations. Model your calls per user action before assuming it is free.

### Why did our Maps bill jump when traffic did not?

The usual causes are a new feature requesting more place fields, autocomplete without session tokens, a list page calculating routes for every row, or an unrestricted key being used by someone else. Check usage by product in your cloud console to see which one moved.

### Can we cache geocoding results?

Storing coordinates for your own records is usually expected, but each provider sets its own terms on caching and storage. Read them before you design around a cache, and keep the provider calls in one place so you can adapt.

### Should we use OpenStreetMap to avoid the bill?

The data is free; serving it is not. You will need a paid tile or geocoding provider built on it, or your own hosting. It can be cheaper at volume, but test address quality in your own markets first.

If location features are about to go live and nobody has costed them, a [short call](/book-a-call) can settle it before the first bill. For a full review of where your product spends money on third-party APIs, see the [technical teardown](/teardown) and our [pricing](/pricing).
