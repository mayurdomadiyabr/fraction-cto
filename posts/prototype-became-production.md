---
title: The prototype that quietly became your production system
slug: prototype-became-production
date: '2026-07-07T14:18:09.928Z'
category: Pattern recognition
excerpt: >-
  The most load-bearing code in many startups was a weekend prototype nobody
  meant to ship. How that promotion happens and what it costs you later.
description: >-
  How a validation prototype becomes your production system by default, the tax
  it puts on every later feature, and how to prevent it.
author: The founder of Fraction
readTime: 6
draft: false
---

The most load-bearing code in a lot of early startups was never meant to run in production. It was a prototype. Someone built it in a weekend to prove an idea or win a demo, it worked, a customer saw it, and it quietly never got rebuilt. Two years later it is the core of the product, nobody wants to touch it, and every new feature routes around it.

This is one of the most common early architecture smells I find, and it is almost never a decision anyone remembers making. The prototype became production by default, one "we will clean it up later" at a time.

## Why prototypes are built to be thrown away

A prototype earns its speed by cutting exactly the corners that production cannot afford. That is the point of it. The developer skips edge cases, hard-codes values, leaves error handling out, ignores security, and does not worry about what happens under load, because the goal is to validate an assumption fast, not to build something durable.

Industry write-ups on this put it bluntly: building the proof of concept is roughly the first 20 percent of the journey, and the remaining 80 percent is the real engineering that turns a convincing demo into something reliable and scalable. A prototype that ships to production has skipped that 80 percent, and the debt does not disappear. It waits.

The trouble is that a good prototype is convincing precisely because it hides how much is missing. It demos beautifully. It handles the happy path a founder walks through in a sales call flawlessly. And that success is what gets it promoted to production without anyone deciding to promote it.

## How the promotion happens without a decision

No one stands up and says "let us ship the prototype as our production system." It happens through a sequence of individually reasonable steps.

A customer sees the demo and wants it now. Rebuilding it properly would take six weeks; the prototype already works, so the team wires it up to a real database and ships. The plan is to rewrite it after the deal closes. The deal closes, and there are three new priorities, so the rewrite slips. A second customer arrives, then a third, each adding a small feature on top of the prototype's foundation. Now the thing is in the critical path, it has real users, and rewriting it means risking their data and their uptime. So it stays.

By the time anyone looks closely, the prototype has accumulated exactly the debt it was designed to skip: no tests, hard-coded assumptions that are now wrong, error handling bolted on in a panic after the first outage, and a security model that was never really a model. It slows every new feature down because everything has to work around its shortcuts.

I see the AI-assisted version of this constantly now, where a founder ships something a coding agent generated over a weekend and mistakes it for a finished product. I wrote about that specific case in [your AI-built MVP is a draft, not a product](/post-ai-mvp-draft), but the underlying pattern long predates AI. The tool that produced the prototype does not matter. The mistake is treating a validation artifact as a foundation.

## The real cost, and where it lands

The cost of a promoted prototype does not show up as a line item. It shows up as a tax on everything that comes after.

- Every new feature takes longer because it has to accommodate the prototype's shortcuts.
- The prototype produces the outages, and outages produce the panic fixes that make it worse.
- Onboarding a new engineer takes longer because the core of the system has no tests and no documentation, and the only person who understands it is whoever wrote it in a weekend.
- The eventual rewrite, when it comes, is far more expensive than building it right would have been, because now it has real users and real data to migrate without breaking.

That last point is the trap. The longer a prototype runs in production, the more expensive it is to replace, which is exactly why it keeps not getting replaced. It is the same dynamic behind [the refactor you keep promising that never arrives](/post-refactor-that-never-comes): the right time to fix it was before it had users, and it never had a convenient moment after.

## How to keep a prototype from becoming your product

The fix is not to stop building prototypes. Prototypes are the right tool for validating an idea cheaply. The fix is to be explicit about what a prototype is and to put a decision point between the prototype and production.

Concretely:

- Name it a prototype out loud, and agree up front that it is disposable. Naming changes how people treat it.
- Before a prototype goes to real users, make the promotion an explicit decision, not a default. Either rebuild the production version, or knowingly accept the debt with a real, scheduled date to pay it down.
- If you ship the prototype under deadline pressure, write down what corners were cut and what breaks first, so the rebuild is a known task and not an archaeological dig.
- Treat "we will clean it up later" as a red flag phrase. Later has to be a date on a calendar, or it is never.

If you are not sure whether the thing at the center of your product is a solid foundation or a promoted prototype quietly accruing risk, that is exactly what a short [teardown](/teardown) is for: an outside engineer looking at the real code and telling you where the weekend prototype is now load-bearing and what it will cost to fix.

### FAQ

### Is it ever right to ship a prototype to production?

Yes, as a deliberate, temporary bridge with a scheduled rebuild, and with eyes open about what breaks first. The mistake is shipping it by default and then never rebuilding it because there is always a more urgent priority. The difference is whether the promotion was a decision or an accident.

### How do I tell if my product is built on a promoted prototype?

Look for the parts of the codebase everyone avoids touching, that have no tests, that produce most of the outages, and that only one person understands. If the core of your product fits that description and was originally built fast to prove an idea or win a demo, you are probably running a prototype in production.

### We shipped the prototype and it is working fine. Do we still need to rebuild?

"Working fine" until it does not is the nature of skipped edge cases and absent error handling. If the prototype is not yet slowing down new features or causing outages, you have time, but treat that as a window to rebuild deliberately rather than evidence that the debt is not there. It compounds quietly.

### How expensive is the rebuild?

Far more than building it right the first time, and it grows with every month of real users and real data. A rebuild that would have taken six weeks before launch can take months once it has customers whose data and uptime you cannot risk. That escalating cost is exactly why promoted prototypes tend to survive far longer than they should.
