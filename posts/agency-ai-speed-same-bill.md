---
title: Your agency got faster with AI. Your bill did not move.
slug: agency-ai-speed-same-bill
date: '2026-07-17T11:59:56.855Z'
category: Vendors
excerpt: >-
  Time and materials assumes an hour is a decent proxy for an outcome. That
  assumption is under strain, and your contract never got the memo.
description: >-
  Your agency ships 30% faster with AI but bills the same hours. How to measure
  it, and the three repricing options to bring to the conversation.
author: The founder of Fraction
readTime: 7
draft: false
---

A founder I work with had the same agency for nineteen months. Time and materials, roughly $34,000 a month, four people billed at a blended $145 an hour. Solid work, no drama, product shipping.

In month fourteen he noticed something. The velocity had gone up. Noticeably. Features that used to take three weeks were landing in ten days. Two of the four engineers had started mentioning Cursor in standup. The agency's own marketing site had added a page about their AI-accelerated delivery process.

The invoice had not moved. Same four people, same hours, same $34,000.

He asked me whether he was being ripped off. That is the wrong question, and answering the wrong question is how these conversations go sideways. But there is a right question underneath it, and it is worth about $8,000 a month to him.

## Time and materials quietly stopped tracking value

Here is the thing nobody renegotiated. When you signed a time-and-materials contract, you and your agency made an implicit trade: they sell hours, you buy outcomes, and the hour is a reasonable proxy for the outcome. That proxy held for thirty years because human throughput per hour moved slowly. A good engineer in 2015 was maybe 20% more productive than a good engineer in 2010. Nobody needed to reprice anything.

That proxy is now under real strain. Not uniformly, not on everything, but on the work that makes up a large share of an agency bill. CRUD endpoints, test scaffolding, migrations, form validation, the third integration against an API shaped like the first two. This is where the tools are strongest, and this is where a lot of your billed hours go.

So the arithmetic underneath your contract changed and the contract did not. Your agency did not do anything wrong. They got better at their job. The problem is that in a T&M structure, getting better at the job reduces their revenue, which means the incentive now points the wrong way. You are asking a business to bill you less for the same result, voluntarily, forever.

Some agencies will do it. Most will not, and it is worth being honest that most of us would not either.

### What the numbers actually look like

Do not take a blog post's word for the multiplier. Take your own data.

Pull the last six months of tickets and the last six months before that. Look at cycle time for comparable work: a standard CRUD feature, an integration, a bug of the same severity class. If the same shape of work is landing in materially less calendar time with the same headcount billed, you have a number.

For the founder above, the honest read was about 30% faster on feature work overall. Not 3x. The tools are transformative on some tasks and roughly neutral on others, and any vendor pitching you a flat 3x is selling something. But 30% of $34,000 is roughly $10,000 a month, which is $120,000 a year, which was more than his entire infrastructure budget. That is the size of the thing.

Note the trap in that number, too. Faster feature delivery is not the same as faster product. If review is the bottleneck, generating code faster just deepens the queue. Measure what reaches production, not what reaches a pull request.

## The conversation that works

I have watched this go badly enough times to know what not to do. Do not open with the accusation. "You are using AI and not passing on the savings" puts the agency in a defensive crouch, and you will spend the next month arguing about whether the tools even help instead of talking about money.

Open with the structure instead. The line I like: "Our contract prices hours. I think we are both better off pricing outcomes now. Can we talk about what that looks like?"

That framing is true, it is not an attack, and it lets a good agency say yes without admitting anything. It also flushes out a bad one fast, because the only reason to defend hour-based pricing hard is that the hours are the product.

Then bring three options and let them pick.

**Option one: reprice the rate, keep the structure.** Simplest. The blended rate comes down 15 to 25% and everything else stays. Works when the relationship is good and neither side wants a project. It is also the one most agencies counter with, because it is the smallest change to their operating model.

**Option two: move to outcome or milestone pricing.** You pay for defined deliverables, not elapsed time. Their tooling gains become their margin, which is a real incentive to keep investing, and you stop caring how the work gets done. This is genuinely better for both sides on well-scoped work, and genuinely worse on exploratory work, where it turns into a change-order war. I have written about [why the fixed bid quietly becomes 60% more](/post-fixed-bid-trap), and every word of it still applies. Do not take this option on a discovery-shaped problem.

**Option three: shrink the team, hold the output.** If four people with tools now do what five did without them, bill four. This is the least confrontational version because it never mentions rates. It also has a way of surfacing whether the fifth person was doing anything.

Any of the three is fine. What is not fine is leaving a T&M contract in place and hoping the invoice drifts down on its own. It will not. I have never once seen it happen.

## Where founders get this wrong

Two failure modes, both common.

The first is treating the savings as a gotcha and trying to claw them back retroactively. You will not win that and you will burn a working relationship over money you were, frankly, contractually obligated to pay. The rate you agreed to was the rate. Look forward.

The second is the opposite: assuming that because the agency is delivering fine, the pricing does not matter. It matters more than almost anything else on your P&L at this stage. If your agency line is $34,000 a month and your runway is fourteen months, a 25% reduction buys you close to three additional months of company. Three months is the difference between raising on your terms and raising on someone else's. The pricing conversation is a survival conversation wearing an accounting costume, and [cutting the bill without firing them](/post-renegotiate-agency-spend) is the whole discipline.

There is also a third thing, subtler. Some founders take the productivity gain as a signal to expand scope rather than cut cost. Same $34,000, more features. That is a legitimate choice and sometimes the right one. Just make it deliberately. Absorbing a 30% efficiency gain into 30% more surface area, at a stage where you have not validated the surface area you already have, is a decision that should be made on purpose rather than by default.

## The version of this I would actually run

If I were sitting in your seat with a $34,000 monthly agency bill and a suspicion:

Week one, pull the cycle-time data. Get an actual number, not a feeling. If the number is small, stop. You just saved yourself an awkward call.

Week two, ask the structural question. Not the accusation. Listen to which of the three options they reach for, because that tells you what kind of vendor you have. An agency that proposes outcome pricing before you finish the sentence is a partner. One that explains at length why AI does not really help with software is managing you.

Week three, sign the amendment or start looking. A good agency, told plainly that the pricing model no longer matches reality, will meet you somewhere. If they will not meet you anywhere, you have learned something worth $120,000 a year.

### FAQ

**Is it fair to ask for a discount on work they are doing well?**

You are not asking for a discount. You are asking to reprice a contract whose central assumption changed. That happens in commercial relationships constantly. The framing matters, but the ask is normal.

**What if my agency denies using AI tools at all?**

Then you have either a slower vendor than the market or a vendor who is not being straight with you, and you should figure out which. Ask for tool names and plan tiers in writing. It is a reasonable question and the answer is diagnostic either way.

**How do I know the speedup is from AI and not from the team knowing our codebase better?**

You often cannot separate them cleanly, and it does not matter much. Familiarity compounds too. Either way, the same headcount is producing more than it did when you set the rate, and the rate should reflect that. Attribution is an interesting question for them, not for you.

**Should I just move everything to fixed price?**

No. Fixed price is excellent on defined work and corrosive on exploratory work. Most early products have both. A sane setup mixes them: milestones for the known build, T&M for discovery, and a rate that reflects the current decade.

**We are small, $8k a month. Worth the conversation?**

At $8k a month the absolute savings are maybe $1,500 to $2,000. The conversation still costs one call. That is a good trade, but it is not urgent. What matters more at your size is whether you are getting judgment or just throughput, which is a different question and usually a bigger one. [The comparison of what these engagements actually cost](/comparison) is the place to start.

If you want a read on whether your current agency spend is defensible before you open the conversation, [book a call](/book-a-call) and bring the last three invoices.
