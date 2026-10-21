---
title: Building a marketplace? Decide who holds the money first
slug: marketplace-payments-who-holds-the-money
date: '2026-10-21T11:48:10.744Z'
category: Decisions
excerpt: >-
  Marketplace payments are a three-party problem: funds, seller verification,
  disputes and tax forms. Why most early teams should use a platform product.
description: >-
  Marketplace payments start with who holds the money. Why most early teams
  should use a platform product like Stripe Connect, and what to decide first.
author: The founder of Fraction
readTime: 6
draft: false
---

If you are building a marketplace, a platform where one group of users pays another and you take a cut, the first payments decision is not which checkout button to use. It is who legally holds the money between the buyer paying and the seller getting paid. For most early-stage teams the answer should be a payments provider's platform product, such as Stripe Connect, configured so the provider handles seller verification and payouts. Building your own flow of funds, where money lands in your bank account and you pay sellers out, is the option that looks simple and turns into a compliance problem.

This is one of the decisions founders make in a week and then live with for years. Changing how funds flow after you have thousands of sellers means re-onboarding every one of them.

## Why marketplace payments are different from normal billing

Charging a customer for your own subscription is a two-party transaction: they pay you. Our earlier post on whether to [build billing or let Stripe run it](/post-build-billing-or-use-stripe) covers that case. A marketplace adds a third party, and with it four problems that ordinary billing does not have.

### You are moving other people's money

When a buyer pays $200 for a service and you keep $30, the other $170 belongs to the seller. If that money passes through your own bank account, you are holding funds on behalf of others. In the US, holding and transmitting money for others can fall under money transmission rules that vary by state. Founders are routinely surprised by this. Using a licensed provider's platform product, where the provider moves the funds, is a large part of why these products exist. Get legal advice before you design anything where funds sit in your account.

### You have to verify sellers

Paying out to someone requires knowing who they are. Providers require identity and bank verification (know-your-customer checks) for anyone receiving payouts. If you build it yourself, you own that process. If you use a platform product, the provider runs it, and your job is to make onboarding smooth enough that sellers finish it.

### Refunds, disputes and negative balances

When a buyer disputes a charge after the seller has already been paid, someone has to cover it. Decide up front whether the seller or your platform absorbs disputes, and whether you hold back part of each payout as a reserve. Many marketplaces discover this question only after their first chargeback, when the seller's balance is already zero.

### Tax reporting for sellers

Depending on the country, platforms may need to issue tax forms to sellers or report their earnings. In the US, payment platforms issue Form 1099-K to sellers above the reporting threshold, and the threshold has changed more than once in recent years. Check the current rules with your accountant; this is not tax advice. Platform products usually offer tax reporting as an add-on, which is far cheaper than building it.

## How the provider route works

Using Stripe Connect as the example because it is the one founders ask about most, the setup comes down to a few choices.

### Who owns the seller relationship

Stripe has long described connected accounts in three classic types. Standard accounts give sellers a full Stripe dashboard and relationship with Stripe. Express accounts give them a lighter dashboard with your platform in the middle. Custom accounts make Stripe invisible and put all onboarding and support on you. Stripe now also describes these setups in terms of who handles pricing, onboarding and dashboards, but the trade-off is the same: the more you control, the more you support.

For most early marketplaces, a lighter, provider-hosted onboarding is the right start. Fully custom onboarding is a project for when you have a clear reason, such as a regulated vertical or a seller experience that is core to your product.

### Who pays the fees

The pricing structure differs depending on whether the provider bills your sellers directly or you set the pricing. When Stripe handles pricing for connected accounts, its pricing page says there are no added platform fees. When you handle pricing, the US list price at the time of writing is $2 per monthly active account plus 0.25% and 25 cents per payout, on top of card processing. Check the current page for your country, since rates and structures change.

That second model is more expensive in direct fees, but it lets you set your own rates and margin. For a marketplace taking a 10 to 20 percent cut, the per-payout cost is usually small compared with the margin. For a marketplace with thin take rates and many small payouts, it matters a lot. Model it with your real average order size before you choose.

### How the money moves

You will choose between charging on behalf of a seller (the seller's account is the merchant) and charging on your platform and then transferring to sellers. The first keeps you further from the funds. The second gives you flexibility, such as splitting one order across several sellers, at the cost of more responsibility for disputes and refunds. Pick the simplest flow that supports how your orders actually work today.

## When building your own makes sense

Rarely, at this stage. Cases where it can be justified:

- You operate in a market or payment method a platform product does not support.
- Your volume is large enough that a direct processor relationship and dedicated finance staff pay for themselves.
- You have legal counsel and a compliance plan for the licensing question, not just an engineering plan.

If none of those apply, building your own flow of funds is a distraction from the marketplace problem you are actually solving, which is liquidity: getting enough buyers and sellers to trade. Our [build, buy, or wait decision tree](/post-build-buy) applies here with extra force, because the downside is regulatory, not just technical.

## The decisions to write down before you code

1. Whether the seller or the platform is the merchant of record on each sale. Our post on [merchant of record vs Stripe Tax](/post-merchant-of-record-or-stripe-tax) covers the tax side of that choice.
2. Who absorbs refunds and disputes, and whether you hold a reserve.
3. Payout timing: instant, daily, weekly, or after delivery is confirmed.
4. How your take rate is calculated, including on refunds.
5. What happens to a seller's balance when you suspend them.

These are business decisions with engineering consequences. Writing them down first prevents the common failure where an engineer picks a flow of funds based on what was easiest in the documentation.

## FAQ

### Can I start by collecting payments myself and paying sellers by bank transfer?

Some marketplaces start this way at tiny volume. It puts the funds in your account and the verification on you, which is exactly the risk described above. If you do it for a pilot, get legal advice first and plan the move to a platform product before volume grows.

### Is Stripe Connect the only option?

No. Other providers offer marketplace and platform products, and some specialize in particular regions or industries. Compare them on supported countries, payout methods, onboarding experience and fee structure, not just the headline card rate.

### How long does a typical integration take?

With provider-hosted onboarding and a simple flow of funds, a small team can usually ship a working version in a few weeks. Custom onboarding, split payments across sellers, and reserves add meaningfully to that.

### Who should review this before we launch?

Someone who has run a marketplace payment flow before, plus your lawyer and accountant for the funds and tax questions. If you want a technical second opinion on your plan, [book a call](/book-a-call) or see [how a fractional CTO engagement works](/how-it-works).
