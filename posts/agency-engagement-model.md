---
title: 'Fixed bid, dedicated team, or staff aug: picking wrong'
slug: agency-engagement-model
date: '2026-07-17T11:59:57.102Z'
category: Vendors
excerpt: >-
  Founders shop agencies on price and portfolio, then accept whatever engagement
  model is put in front of them. That model decides how the next nine months go.
description: >-
  Fixed bid, dedicated team, and staff aug each fail in a predictable way on the
  wrong work. The one question that picks the right model before you sign.
author: The founder of Fraction
readTime: 8
draft: false
---

Most founders shop agencies on two variables: price and portfolio. Who is cheapest, and have they built something that looks like my thing.

Then they take whatever engagement model the agency puts in front of them, because that part feels like paperwork. Fixed bid, dedicated team, staff augmentation. It reads like a billing preference. It is not. It is the single decision that determines whether the next nine months are productive or a slow argument, and it is usually made by default.

I have watched the same three failures often enough to name them.

## The three models and what each one is actually for

Strip the sales language and there are three ways to buy engineering from a firm.

**Fixed bid.** You define the thing, they quote a number, they deliver it. You are buying an outcome and they are carrying the delivery risk.

**Dedicated team.** You rent N engineers for M months. They work on whatever you point them at. You are buying capacity and you are carrying the utilization risk.

**Staff augmentation.** Individual engineers slot into your team and take direction from you. You are buying hands and you are carrying the management risk.

Each one is correct somewhere. The trouble is that each one fails in a specific, predictable way when applied to the wrong shape of work, and the failure never looks like a model problem at the time. It looks like a people problem, which is why founders fire the agency and re-sign the same mistake with the next one.

### The three predictable failures

**Fixed bid on evolving scope.** This is the most common and the most expensive. You do not fully know what you are building. Nobody at your stage does. But fixed bid requires a frozen definition, so the agency prices the ambiguity by padding, then defends the frozen scope with change orders, because that is the only rational way to run a fixed-bid business. Every discovery you make becomes an invoice and a negotiation. Six months in, you are not building a product, you are managing a contract. I have written about [how a fixed bid quietly becomes 60% more](/post-fixed-bid-trap), and the mechanism is exactly this.

**Dedicated team on tightly scoped work.** You needed one integration built. You bought four engineers for six months because that was the package. Now four engineers need something to do, and idle engineers on your dime do not sit idle, they build. They build abstractions you did not ask for, an admin panel nobody requested, a configuration system for a thing configured once. The bill is honest. The work is real. And you are paying $150,000 for a $30,000 problem plus a maintenance burden you will carry for years.

**Staff augmentation on work that needs ownership.** This one is the quietest and it hurts the most. You hired three contractors to build the product. But staff aug engineers wait for direction. That is the deal, it is what you bought, and it is the correct behavior for the model. So they sit in your Slack asking what to build next, and the answer has to come from someone who understands both the product and the code. If you are non-technical and that person does not exist, three good engineers will produce three months of activity and no coherent system, and everyone will be confused about why. That is the [leadership gap wearing a vendor costume](/post-shipping-wrong-thing-leadership-gap).

## The question that picks the model

Ignore price for a minute. Ask one thing: how much of this work do I already know the answer to?

Not "do I know what I want." Everyone knows what they want. The question is whether the path is known.

If you can describe the deliverable to a stranger in a paragraph and they could tell you whether it exists yet, that is defined work. Fixed bid is a good fit. Migrate the billing system to Stripe. Build a SOC 2 audit log. Port the mobile app to a new SDK version. Known destination, known route, and the agency should carry the risk of getting there because they have done it before.

If you have a direction but the specifics will change based on what you learn, that is exploratory work, and fixed bid is poison. Every learning is a change order. Use a dedicated team, or better, use less team than you think and go slower, because exploratory work is bottlenecked on decisions, not on hands. Adding engineers to an undecided problem does not speed it up. It multiplies the number of decisions someone has to make per week, and that someone is you.

If you know exactly what to build and just need throughput, and you have a technical person to direct it, staff aug is efficient and cheap. If you do not have that person, staff aug is a way to convert money into a codebase nobody understands.

### The mixed reality

Most real products are all three at once, which is why picking one model for the whole engagement is where founders go wrong.

The auth system, the payments integration, the admin CRUD: defined. Fixed bid or milestone that. The core product loop, the thing that makes you different, the part you are still learning about: exploratory. Never fixed-bid it.

The best agency contract I have read in the last two years did exactly this. Milestone pricing for a defined list of infrastructure work, with real acceptance criteria attached. A separate T&M line, capped monthly, for product work. One clause letting either side move work between the two by mutual agreement. That founder was not smarter than his peers. He had someone technical read the SOW before he signed it, and it took about an hour.

## What the model tells you about the agency

There is a diagnostic in here, and it is free.

Describe your work honestly to the agency, including the parts you have not figured out. Then watch which model they reach for.

An agency that hears "we are still learning what this needs to be" and offers you a fixed bid anyway is either not listening or is pricing the change orders in advance. Both are bad, and it does not matter which one it is.

An agency that pushes a four-person dedicated team at a problem you described in two sentences is selling capacity, not judgment. Ask them what four people will do in month three. The quality of that answer is most of what you need to know.

An agency that says "your defined work is about $40,000 fixed, but the product piece is genuinely unclear and we should run it T&M with a monthly cap until it firms up" is being straight with you. That is a partner. That answer costs them margin and money to give, which is exactly why it is worth so much. The same instinct is why I keep telling founders to [run a pilot before signing the big contract](/post-agency-pilot). The model reveals itself in ten weeks, not in the proposal.

## The part that has nothing to do with contracts

None of the three models supplies judgment. That is the thing I most want founders to hear, because all three sales pitches imply otherwise.

Fixed bid gives you delivery of a decision you already made. Dedicated team gives you capacity to execute decisions you will make. Staff aug gives you hands to implement decisions you will make. In every case, the deciding is yours. If you cannot decide, no model saves you, and the more you spend the faster the confusion compounds. Four engineers will build the wrong thing four times faster than one will.

That is why the model conversation and the technical leadership conversation are the same conversation. Pick the model that matches your work, then be honest about who is going to steer it. If the answer is nobody, fix that before you sign anything, because it is a cheaper problem today than it will be in month seven. [What that costs, compared to the alternatives](/comparison), is usually less than one month of the four-person team you were about to buy.

### FAQ

**Which model is cheapest?**

Wrong question, but: fixed bid has the highest sticker and the lowest variance, staff aug has the lowest sticker and the highest variance, dedicated team sits between. The cheapest is whichever one matches your work, because mismatch costs are far larger than rate differences. A 20% rate saving on the wrong model is not a saving.

**Can I start fixed bid and switch to T&M later?**

Yes, and this is often the right sequence. Fixed-bid a small defined chunk to test the relationship, then move to T&M or a dedicated team for the ongoing product work once you trust them. Write the transition into the original SOW so it is not a renegotiation later.

**My agency only offers one model. Is that a red flag?**

Not necessarily. Plenty of good shops specialize. It is a red flag if they offer one model and tell you it is right for every kind of work, because that is not a specialization, it is a sales script.

**We are non-technical and want a dedicated team. Bad idea?**

Not automatically, but you need someone on your side who can tell whether the team is doing the right thing. Otherwise you are trusting the vendor to grade their own homework, and you will find out how that went during your next raise or your first outage.

**What if the work is 90% defined but 10% unknown?**

Fixed-bid the 90%, carve the 10% out explicitly, and agree a mechanism for pricing it when it firms up. The mistake is folding the unknown 10% into the fixed bid, because that 10% is where all the risk lives and neither of you priced it honestly.

If you are staring at a proposal and cannot tell whether the model fits your work, [bring it to a call](/book-a-call). This is a thirty-minute conversation that regularly saves six figures.
