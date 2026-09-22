---
title: 'Money stored as a float, time stored without a zone'
slug: money-and-time-data-types
date: '2026-09-22T04:31:13.860Z'
category: Pattern recognition
excerpt: >-
  Two first-week database choices quietly corrupt revenue numbers and schedules
  for years. What to store instead, and how to check your product.
description: >-
  Why floats break invoices and naive timestamps break schedules, and the
  storage rules that keep money and time correct as you grow.
author: The founder of Fraction
readTime: 6
draft: false
---

Two decisions get made in the first week of almost every product, usually by whoever wrote the first database migration, and almost nobody revisits them: how you store money, and how you store time. Both look trivial. Both quietly corrupt your numbers for years if they are wrong, and both get harder to fix with every row you write.

The short answer: store money as an integer count of the smallest currency unit (or an exact decimal type), always alongside a currency code. Store timestamps as a zone-aware instant in UTC, and store the customer's time zone separately when local time matters. If your product does neither, fix it before your data gets much bigger.

## The money problem

Most programming languages represent decimal numbers as binary floating point. Floating point cannot represent most decimal fractions exactly. The classic demonstration: in JavaScript, `0.1 + 0.2` evaluates to `0.30000000000000004`, not `0.3`.

That tiny error does not matter for a physics simulation. It matters a lot for money, because money is added up, split, discounted, taxed, and reconciled. Small errors accumulate, and rounding in different places gives different answers. The symptoms founders actually see look like this:

- An invoice total is one cent different from the sum of its line items.
- The revenue number in your dashboard does not match the number from your payment processor, and nobody can explain the gap.
- A customer on a 33 percent discount gets billed a slightly different amount each month.
- Your accountant spends hours at quarter-end reconciling differences that come from rounding, not from real transactions.

None of these is a crisis alone. Together they create a slow tax on finance, support, and trust. And the day you raise, someone will compare your internal revenue figures to your processor and bank statements. You want those to reconcile cleanly, which is part of why [the deck number diligence will make you prove](/post-prove-the-technical-claim) should come from a system you trust.

### What to do instead

There are two sound options:

1. Store integer minor units. Store $49.99 as `4999` cents. This is the approach Stripe's API uses: amounts are integers in the smallest currency unit. Note that not every currency has two decimal places. The Japanese yen has none, so 500 yen is `500`, and a few currencies use three. Stripe documents these as [zero-decimal and three-decimal currencies](https://docs.stripe.com/currencies).
2. Use an exact decimal type. Postgres `numeric`, and decimal libraries in most languages, do exact base-10 arithmetic. This is useful when you need fractional units, such as per-token AI pricing.

Either way, store the currency code next to every amount. "4999" with no currency is a bug waiting for your first international customer. And decide where rounding happens, once, in one place, rather than letting every calculation round on its own.

## The time problem

Time is worse, because it fails silently and only for some users.

The common mistake is storing a timestamp with no time zone information, often called a "naive" timestamp. In Postgres, that is the plain `timestamp` type, as opposed to `timestamptz`. The database stores "2026-03-08 02:30" and has no idea whether that means 2:30 in London, New York, or Mumbai. Whatever the application server's clock setting happened to be becomes the implicit zone, until someone moves the server, changes a container image, or runs a job from a laptop.

The symptoms:

- "Daily" reports that include the wrong hours for customers in other time zones.
- Scheduled emails or reminders that fire an hour early or late around daylight saving changes, or not at all on the night the clock skips forward.
- A subscription that renews on the wrong day for a customer on the other side of the date line.
- Audit logs whose order you cannot trust, which is a problem the day you need to reconstruct an incident.

Daylight saving is the one that catches teams. In zones that observe it, one local hour a year does not exist and another happens twice. Any logic that stores or computes in local wall-clock time will eventually hit one of those hours.

### What to do instead

The rule I give teams:

- Store instants in UTC, in a zone-aware type. In Postgres that means `timestamptz`, which normalizes values to UTC internally. The [Postgres date and time documentation](https://www.postgresql.org/docs/current/datatype-datetime.html) explains the difference.
- Store the user's or account's time zone as a named zone, such as `America/New_York`, not a fixed offset like `-05:00`. Offsets change with daylight saving. Named zones do not.
- Convert to local time only at the edges: when you display, when you decide what "today" means for a report, or when you schedule something a human expects at a local hour.
- Keep dates that are genuinely dates, like a birthday or a contract start, as a date type, not a midnight timestamp.

## Why this is a pattern and not just a bug

Both problems share the same shape. A default that seems harmless on day one gets copied into every table, every API, and every report. By the time anyone notices, the fix is no longer a code change. It is a data migration across millions of rows, plus finding every place that reads the old format.

That is why I treat these as architecture decisions, even though they feel like implementation details. They belong on the same list as [the early tech decisions you cannot cheaply undo](/post-reversible-decisions), and they are often part of why a [billing system becomes harder to own than expected](/post-build-billing-or-use-stripe).

The good news is that the fix is cheap early. A two-person team with a few thousand rows can switch to integer cents and `timestamptz` in a day or two. A twenty-person team with years of history needs a planned migration, a period of writing both formats, and a careful backfill.

## How to check your own product

If you are not technical, ask your lead engineer three questions:

1. "What type do we use to store prices and invoice amounts, and do we store a currency with each one?" You want to hear integers in minor units or an exact decimal, plus a currency code. "Float" or "double" is the answer to worry about.
2. "Are our timestamps stored in UTC with a zone-aware type?" You want a clear yes, not "the server is set to UTC, so it is fine".
3. "Does our revenue number reconcile exactly with our payment processor each month?" If there is a small unexplained gap, rounding is a likely suspect.

If the answers are shaky, the fix is usually a small, well-scoped project, not a rewrite. It is also a good example of the kind of thing a senior outside reviewer catches in an hour, which is part of what a [one-time technical teardown](/teardown) is for.

## FAQ

### Is it ever fine to store money as a float?

For display-only estimates or analytics where a fraction of a cent does not matter, it can be tolerable. For anything that is billed, paid, refunded, or reconciled, use integer minor units or an exact decimal type.

### We use Stripe. Doesn't that solve the money problem?

It solves it inside Stripe, because Stripe uses integer minor units. The problem reappears if your own database converts those amounts to floats for invoices, dashboards, or discounts.

### Should I store everything in the user's local time instead?

No. Store the instant in UTC and store the user's named time zone separately. Local time is for display and for scheduling logic, not for storage.

### How long does a migration take once the data is large?

It depends on volume and how many places read the fields, but it usually means weeks of careful work rather than days. That cost is the main argument for fixing it early.

If you want a second opinion on decisions like these before they harden, [book a call](/book-a-call).
