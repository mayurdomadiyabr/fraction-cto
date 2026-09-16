---
title: You wrapped your vendor to avoid lock-in. Now you own both.
slug: vendor-abstraction-layer
date: '2026-09-16T02:47:21.388Z'
category: Decisions
excerpt: >-
  The abstraction layer you write to keep a vendor swappable usually costs more
  than the switch it was meant to make cheap. Here is when it earns its keep.
description: >-
  Wrapping a vendor to avoid lock-in usually costs more than switching. When the
  abstraction is worth building, and what to do instead.
author: The founder of Fraction
readTime: 6
draft: false
---

Short answer: in most early-stage products, the wrapper you write to keep a vendor swappable costs more over two years than the switch it was meant to make cheap. Build the abstraction when you have a concrete, dated reason to expect a switch. Otherwise call the vendor directly, keep the call sites few and boring, and spend the saved time on the product.

I see this decision more than almost any other, and it usually arrives dressed as prudence. An engineer proposes a thin interface in front of the payments provider, the email provider, or the model API, so that "we are not locked in." Nobody argues against not being locked in. Six months later the wrapper has become its own small product with its own bugs, and the team has still never switched vendors.

## What the wrapper actually costs

The cost is rarely the first version. A thin interface over one vendor takes an afternoon. The cost is everything that happens after.

You now own a translation layer that must be correct for every case the vendor supports, which means your team has to understand the vendor's behavior *and* your own model of it. When the vendor ships a new capability, it does not exist in your product until someone extends the wrapper, so the abstraction becomes a queue. When something breaks in production, the debugging path gets one hop longer, and that hop is the least documented code in the repo because nobody owned it after the person who wrote it moved on.

Worse, the abstraction usually encodes the first vendor's shape. You wrote an interface that looks like Stripe, or looks like OpenAI, because that is the one you had in front of you. The day you genuinely want to switch, you find the interface does not fit the second vendor either, and you rewrite the wrapper as part of the migration. The insurance policy did not pay out.

## The case where it is clearly right

None of this means abstraction is always wrong. It is right when you can point at something real.

The strongest case is a switch you already expect on a date. If your contract renews in nine months and you have decided the price is not sustainable, you are not speculating, you are planning. Build the seam now, while the pressure is off.

The second case is when you are running two vendors at once on purpose. Anyone who has kept a fallback model provider, or split card processing across two acquirers for approval rates, needs a layer that speaks to both, because the alternative is branching logic scattered through the codebase. Here the abstraction is not insurance, it is a feature you are shipping today.

The third case is regulatory or customer-driven: an enterprise buyer requires that their data stay with a named provider, or a region requires a local one. That is a hard requirement with a signature attached, not a hypothetical.

What these have in common is that the switch is concrete. The weak case, and by far the most common one, is "someday we might want to move." Someday is not a requirement. It is a feeling.

## A cheaper way to stay swappable

You can keep most of the optionality without building a second product, and the trick is boring discipline rather than architecture.

Keep the number of call sites small. If your code calls the vendor from nine places, moving is a project; if it calls from two, moving is an afternoon. You get that by habit, not by an interface. Keep vendor-specific types out of your domain model, so a vendor identifier lives in one field rather than spreading through every function signature. Do not store the vendor's objects as your source of truth: store your own record and the vendor's id against it, so your data survives the vendor.

And keep a written note of what you actually depend on. Most teams that fear lock-in cannot say which vendor features they use. The honest list is usually short, and knowing it is worth more than any wrapper, because it turns "we are locked in" into a real estimate. This is the same instinct behind [naming the early decisions you cannot cheaply undo](/post-reversible-decisions) before they harden.

## How to run the decision in ten minutes

When someone proposes the abstraction, ask four questions and write the answers down.

First, what would trigger a switch, specifically? A price increase past a number, a reliability floor, a feature we need. If nobody can finish that sentence, there is no plan, only anxiety.

Second, what is the real exit cost today? Count the call sites, list the vendor features in use, and estimate honestly. Teams routinely guess weeks and find days, or guess days and find the data export is the hard part. That estimate is the actual decision input, and it is the same math as deciding whether [leaving a tool you have outgrown is worth the cost](/post-migrate-or-stay-tool).

Third, who maintains the layer for the next two years? Name the person. If the answer is "the team," it means nobody.

Fourth, what does this delay? Engineering time is the scarcest thing you have. An abstraction that pushes a customer-facing feature out by two weeks has a price, even if it never shows up on an invoice.

If the answers are vague, call the vendor directly and revisit in six months with real usage in front of you.

## The pattern underneath

The wrapper is usually not a technical decision at all. It is a founder or an engineer trying to buy certainty about a future they cannot see, using the only currency they control, which is code. The instinct is good; the instrument is wrong. Certainty about vendors comes from contracts, from knowing your usage, and from keeping your own data clean, not from a layer of indirection.

The teams I watch move fastest are not the ones with the most flexible architecture. They are the ones that made a small number of deliberate commitments and left the rest simple enough to change. If you are in the middle of this argument and cannot tell whether your case is the real one or the anxious one, that is a good hour to spend with someone who has watched both go wrong. You can [book a call](/book-a-call) and bring the actual code.

## FAQ

### Is vendor lock-in not a serious risk for a startup?
It is serious in a narrow way: lock-in that matters is about your data and your contract, not your call sites. A vendor holding data you cannot export, or a multi-year commitment you cannot exit, is real lock-in. Code that calls an API directly is usually a few days of work to change.

### When should I build the abstraction layer?
Build it when a switch is dated or already happening, when you are deliberately running two vendors at once, or when a customer or regulator requires a specific provider. Build it for a plan, not for a possibility.

### What if my engineers insist on the wrapper?
Ask them for the exit cost estimate and the trigger condition in writing. Good engineers will often come back and say the direct call is fine for now. If they come back with a specific, dated risk, they were right and you just got a better plan than the original proposal.
