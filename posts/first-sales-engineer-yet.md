---
title: Engineers on every sales call? Do you need a sales engineer yet?
slug: first-sales-engineer-yet
date: '2026-11-02T04:30:10.286Z'
category: Knowing when
excerpt: >-
  If your engineers keep getting pulled into demos and security reviews, a sales
  engineer may help. Often the cheaper fix comes first.
description: >-
  Engineers stuck on sales calls? How to measure the real cost, what to fix
  first, and when a first sales engineer actually pays for itself.
author: The founder of Fraction
readTime: 5
draft: false
---

You probably need a first sales engineer when technical questions are holding back deals you could otherwise win, when those questions repeat and when your deal sizes can carry the cost. If your engineers are on calls because the product is hard to explain or the same five questions lack written answers, fix that first. An early sales engineer hired into chaos becomes an expensive person who keeps asking your engineers the same things.

There is no reliable revenue number for this. General guidance on [building a sales team](https://www.launchrock.com/library/expert-advice/how-to-build-a-sales-team) treats a sales engineer as a later layer, added if the product requires technical deep-dives during the sale, and that condition is the useful part. A simple product with a large annual revenue may never need one. A complicated infrastructure product might need one at much smaller revenue.

## Measure what the calls actually cost

Founders usually feel this problem before they measure it. For four weeks, have engineers log each time they join a sales conversation or answer a sales question, with the time spent and the deal it was for. Add the time spent on security questionnaires and proof-of-concept setup. Then look at three things:

- **Hours per week.** Include the time to get back into the work afterward. A 30-minute call in the middle of the afternoon can cost a good part of the afternoon.
- **Repetition.** What share of questions have been asked before? High repetition points to documentation, not a hire.
- **Depth.** Which questions truly need someone who understands the architecture or the customer's systems?

As an illustration, take two engineers who together spend ten hours a week on sales. At a fully loaded cost of $200,000 per year each, or roughly $100 per hour, that is about $1,000 a week and around $50,000 a year in direct cost. That does not justify a hire by itself, since a sales engineer may cost several times that. The bigger cost is the roadmap work those hours displaced, and any deals lost because the right person could not get on the call that week.

## Fix these before you hire

Most of the early pain can be reduced for very little money.

**Write the answers down.** Build one living document with your architecture overview, data flow, integrations, security posture and limits. Most security questions come in slightly different words each time, so a good answer library pays back quickly. If this is already costing you deals, the [security questionnaire walkthrough](/post-security-questionnaire-deal) is the place to start.

**Build a demo that does not need an engineer.** A stable demo environment with clean sample data and a reset button lets a founder or an account executive run the call alone. Demo breakage is a common reason engineers get invited, and [the investor demo problem](/post-investor-demo-breaks) has much the same fixes.

**Set a rule for when engineers join.** For instance, an engineer joins only after the prospect has qualified on budget and need, and only for questions that the shared document cannot answer. Give the team set time slots each week. Sales gets predictable access, and engineers keep their long working blocks.

**Rotate the duty.** If one engineer becomes the default sales expert, you have a [key-person risk](/post-key-person-codebase-risk) in the making and possibly an unhappy engineer. A weekly rotation spreads the knowledge around and brings customer language back to the whole team.

## Signs it is time

Once those basics are in place, these are the signals that a person is justified:

- **Technical evaluations are a regular part of your deals.** Customers want a proof of concept, integration planning or architecture reviews, and that work takes more than a meeting.
- **Deal value supports it.** Run the math on your own numbers: a first sales engineer has to help close enough additional revenue, or speed up enough deals, to cover the cost. Low-priced self-serve deals rarely do. Larger contracts with long evaluations often do.
- **You have more than one seller.** A founder selling alone can often hold the technical story personally. Once account executives who cannot answer technical questions are selling, the gap gets wider.
- **Deals are waiting on engineering.** If qualified prospects sit for a week waiting on a technical answer, you can put a cost on the delay.
- **Your roadmap is visibly slipping because of it.** Your four-week log will show this if it is real.

## Who to hire first

The first person needs range. Look for someone who has built or supported software and who enjoys customers: a former engineer, a solutions architect or a support engineer who has grown into pre-sales. Ask candidates to explain a technical trade-off to a non-technical buyer and then to a skeptical senior engineer. You want both conversations to go well. To judge the technical half properly, get someone qualified to [screen for judgment](/post-screen-engineer-for-judgment), not only for familiarity with your stack.

Watch out for one thing. A sales engineer's most dangerous habit is saying yes on a call to something the product cannot do. Those promises become [custom work for a single customer](/post-customer-specific-code), so give them a direct line to engineering and a clear rule on what can be promised. Sometimes what looks like a sales engineer need is in fact a deployment need, where the work continues after the contract is signed. [Forward-deployed engineers](/post-forward-deployed-engineer-hire) are a different hire for that different problem.

## Where technical leadership comes in

Three decisions in this sequence are hard to get right without an experienced technical view: what can honestly be promised to a customer, how the demo and proof-of-concept environments are built, and whether a pile of sales requests reflects a real product gap. A part-time technical leader can set those rules and often removes a good deal of the load before you take on a new salary. [Pricing for that kind of help](/pricing) is on the site, or [book a call](/book-a-call) and bring your four-week log.

## FAQ

### Can a founder keep doing this instead?
Yes, often for longer than you would think, especially when the founder is technical and the deal count is low. The limit is usually time. When founder availability starts delaying deals, it is worth revisiting.

### Should my sales engineer report to sales or engineering?
Usually to sales, because their goal is revenue, with a strong informal line into engineering. The important thing is that promises get checked with someone who owns the roadmap before they reach a contract.

### What about using AI to answer technical sales questions?
It can help draft answers from your own approved documents. Have a person check anything that goes into a security questionnaire or a contract, because a confident wrong answer there can become a commitment.

### Should engineers ever join sales calls?
Yes, occasionally. Hearing customers directly is valuable for engineers. The goal is to make this a choice with a purpose, not the default for every technical question.
