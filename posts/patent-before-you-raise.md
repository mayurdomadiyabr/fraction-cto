---
title: Should you file a patent before you raise your seed round?
slug: patent-before-you-raise
date: '2026-11-28T04:36:45.288Z'
category: Fundraising
excerpt: >-
  Investors asking about IP usually mean ownership, liabilities, and
  defensibility. When a patent helps a seed raise, and when it is wasted money.
description: >-
  When software founders should and should not file a patent before a seed
  round, what it costs, and what investors mean by IP.
author: The founder of Fraction
readTime: 5
draft: false
---

A founder asked me last month whether they should file a patent before their seed round, because an angel had asked "what's your IP?" and they froze. The short answer: for most software startups raising pre-seed to Series A, a patent is not what the investor is really asking about, and filing one to look defensible usually costs more than it returns. What investors want to know is that the company owns what it built, that nobody else can claim it, and that the product has an advantage a competitor cannot copy in a quarter. A patent is one way to show the last part, and rarely the best one.

This is not legal advice. If you have a genuine invention, talk to a patent attorney before you show it publicly. What follows is how the question plays out in the room.

## What "what's your IP?" usually means

When an early-stage investor asks about IP, they are almost always asking three narrower questions, in this order:

1. **Does the company own the code?** Every founder, employee, and contractor who wrote it has signed an assignment to the company. This is the one that kills deals, and it is covered in detail in [the IP assignment checklist before you raise](/post-ip-assignment-raise) and [why paying for code does not mean you own it](/post-who-owns-your-code).
2. **Is anything in the product a liability?** Open-source licenses that force you to publish your code, data you had no right to use, a former employer's work that walked in with a co-founder.
3. **What stops a competitor from copying this?** This is where patents come up, and where most founders answer the wrong question.

If you cannot answer the first two cleanly, a patent filing will not help you. I have seen a provisional patent sitting in a data room next to a codebase where half the commits came from an agency with no assignment clause. The patent did nothing for the round. The missing assignment nearly ended it.

## What a patent actually costs at this stage

The filing fee itself is small. As of the USPTO fee schedule effective January 19, 2025, a provisional application costs $325, or $130 for a small entity and $65 for a micro entity. You can check the current numbers on the [USPTO fee schedule](https://www.uspto.gov/learning-and-resources/fees-and-payment/uspto-fee-schedule).

The fee is not the cost. The costs that matter are:

- **Attorney time.** A provisional that will actually hold up later needs to describe the invention properly. A thin provisional written in an afternoon often protects nothing, because the later full application can only claim priority for what the provisional described.
- **The 12-month clock.** A provisional expires after 12 months. If you want protection you must file a non-provisional application by then, which is a much larger legal bill and the start of a multi-year examination process.
- **Founder attention.** Every week spent on a patent strategy in the months before a raise is a week not spent on customers, which is what the investor is actually underwriting.

My rule of thumb: if the patent work would cost more than two months of a senior engineer, it needs to protect something a competitor genuinely could not route around.

## When a patent is worth it before a raise

There are cases where filing makes sense, and they share a pattern: the advantage lives in a specific, novel method rather than in execution.

- **Deep tech and hardware.** A new sensor design, a novel chemical process, a specific signal-processing method. Investors in these spaces do look at patents, and a filing can matter.
- **A genuinely new technique you are about to disclose.** If you are about to publish a paper, demo at a conference, or open-source part of the system, talk to an attorney first. Public disclosure starts clocks and can close doors in some countries.
- **An acquirer-driven market.** In some sectors, large incumbents buy patents as much as products. If your exit thesis depends on that, it changes the math.

## When it is not

For the typical software startup, the advantage is distribution, speed, data, workflow depth, and customer relationships. None of those are patentable, and investors know it. Software patents are also harder to obtain and enforce than founders assume, and a seed-stage company rarely has the money to enforce one anyway. An investor who hears "we have a patent pending" on a CRUD workflow product does not hear defensibility. They hear a founder spending money on the wrong thing.

What I tell founders to say instead is something like: "We own all our code, with signed assignments from everyone who has touched it. Our open-source licenses are clean. Our advantage is X, and here is why it takes a competitor a year to replicate it." Then show the evidence. If the advantage is AI-based, be honest about what you own versus what you rent; [the AI moat question](/post-ai-moat-diligence) is the one investors push hardest on right now.

## What to put in the data room instead

If you want the IP section of your [technical data room](/post-technical-data-room) to read as strong, include:

- Signed invention-assignment agreements for every founder, employee, and contractor, with dates that cover the work.
- An open-source license inventory with anything copyleft flagged and explained.
- A one-paragraph statement of where the defensibility comes from, with the evidence behind it.
- Trademarks, if you have filed them. A trademark for the product name is cheap and often more useful at this stage than a patent.
- Any patent filings, if they exist, with a short note on what they cover.

## FAQ

### Do seed investors expect a patent?

Not for software. They expect clean ownership of the code and a credible reason a competitor cannot catch up quickly. In deep tech and hardware the expectation is different, and filings can matter.

### Is a provisional patent a cheap way to look defensible?

The filing fee is low, but a provisional only protects what it describes well, and it lapses after 12 months unless you file the full application. A thin provisional mostly signals that you were worried about the question.

### Should I file before demoing at a conference?

If you genuinely believe you have a novel, patentable method, speak to a patent attorney before any public disclosure. That is the one case where timing matters a lot.

### What kills deals more often than missing patents?

Missing IP assignments, especially from agencies and early contractors. Fix those first.

If you want a second opinion on what an investor will see in your IP and code before you raise, a [technical teardown](/teardown) covers ownership, licenses, and defensibility in one pass, or you can [book a call](/book-a-call) and walk through it.
