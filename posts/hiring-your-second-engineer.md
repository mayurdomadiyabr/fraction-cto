---
title: Your second engineer should not be a copy of your first
slug: hiring-your-second-engineer
date: '2026-11-19T05:14:10.692Z'
category: Hiring
excerpt: >-
  Hire engineer two against the gaps your first engineer leaves, and plan how
  the hire changes your first engineer's job.
description: >-
  How to pick the profile for your second engineer: hire for gaps, choose the
  level, involve your first engineer, and plan onboarding.
author: The founder of Fraction
readTime: 6
draft: false
---

Your second engineer should cover what your first engineer cannot, not repeat what they already do well. Before writing the job post, list the work your first engineer avoids, does slowly, or is the only person who understands, and hire against that list. Then decide who runs the interview and who the new person learns from, because the second hire changes your first engineer's job as much as it changes your team size.

Most founders write the second job post by copying the first one. It feels safe: the first hire worked, so find another like them. The result is two people with the same strengths and the same blind spots, competing for the same work, while the parts of the product nobody likes doing keep piling up.

## Start with what the first engineer avoids

Spend thirty minutes with your first engineer and ask three questions:

- What work do you put off because you do not enjoy it or are not strong at it?
- What part of the system would be in trouble if you were out for a month?
- What would you build next if you had a second pair of hands?

The answers usually fall into a pattern. A backend-leaning first engineer has a front end that works but feels rough. A product-minded first engineer has thin tests and fragile deployments. A first engineer who came from infrastructure has a product that is solid but slow to change. Those gaps are your job description.

This is the same reasoning behind [hiring a generalist first](/post-generalist-first-engineer): the first hire covers breadth. The second hire is where some depth starts to pay off, aimed at the weakest part of what exists.

### The bus-factor gap

One gap deserves special attention: knowledge that only one person has. If your first engineer is the only one who knows how deploys work, how the billing integration behaves, or where the database credentials live, your second hire should be able to take over at least one of those within their first two months. That alone justifies a lot of the hiring cost, because it removes a risk that investors and acquirers will look for later.

## Senior, mid-level, or the same level?

The level question for hire two is different from hire one. Your first engineer was probably senior because there was nobody to learn from. Your second can be either.

Hire senior again when the gap is a hard technical area (security, data, performance at scale) or when your first engineer is overloaded with decisions and needs a peer to share them. Hire mid-level when the gaps are mostly execution and your first engineer has the time and interest to guide someone. I went through the cost side of that choice in [one senior engineer or two mid-level](/post-senior-engineer-or-two-mid-level).

One rule of thumb from what I have seen: do not hire a junior engineer as hire two unless your first engineer explicitly wants to mentor and has the slack to do it. A junior with nobody to learn from struggles, and the senior who has to teach without time for it gets frustrated. Both outcomes are common and both are avoidable.

## Your first engineer's job is changing

The second hire turns your first engineer from a solo builder into the senior person on a team. That shift is real and worth naming out loud.

They will now review code, explain decisions, and answer questions. Their own output will drop for a while. If nobody tells them that is expected, they will feel slower and you will wonder why velocity did not double.

Talk through a few things before the new person starts:

- **Who makes the final call on technical decisions?** If it is the first engineer, say so to both people. If it is a fractional CTO or a founder, say that instead. Ambiguity here causes most of the friction I see in two-person teams.
- **Does the first engineer get a title change?** Not always necessary, but if they will act as a lead, the conversation about [titles for early engineers](/post-engineer-titles-early-team) is worth having now, not after a recruiter calls them.
- **How much of their week goes to onboarding?** For the first month, budget a quarter to a third of their time. It drops after that.

## Should the first engineer run the hiring?

They should be heavily involved, but they should not be the only judge. Your first engineer knows the codebase and will work with this person every day, so their read on technical fit matters most. But they may also, without meaning to, prefer people who think like them, which works against the gap-filling goal.

A balance that works: the first engineer designs and runs the practical exercise, a founder runs the role and values conversation, and someone outside the pair (a fractional CTO, an advisor, or a trusted engineer from your network) takes part in the technical deep dive. Three different perspectives, no single veto.

If your first engineer wants to recruit a former colleague, that can be a great shortcut, with some care. I covered the tradeoffs in [whether your first engineer should hire their former colleagues](/post-hire-from-engineer-network).

## Onboarding hire two is easier, and still needs a plan

Your second engineer has an advantage your first did not: someone to ask. Use it, but do not rely on it alone. Write down the things your first engineer keeps explaining (how to run the project locally, how to deploy, where secrets live, how to roll back) and give the second engineer the job of improving that document in their first week. It gets the knowledge out of one head and gives the new person an early, useful task.

Set a small, real first project that touches the gap you hired for, and that they can ship in the first two weeks. The general checklist is in [your first engineer starts Monday](/post-onboarding-first-engineer); most of it applies to hire two as well.

If you are planning hire two and want an outside view on which gap to hire for, or someone to join the technical interview, [book a call](/book-a-call). For a quick check of your current codebase and where the single points of failure are, the [teardown](/teardown) is built for exactly that.

## FAQ

### When is the right time to hire a second engineer?

When your first engineer's backlog has work they cannot get to for months and that work blocks revenue or creates real risk. Hiring earlier for speed alone usually costs more than it returns. A clear gap is a better trigger than a funding milestone.

### Should my second engineer report to my first engineer?

Only if your first engineer wants the responsibility and you are prepared to support them in it. Otherwise both can report to the founder or a fractional CTO, with the first engineer acting as the technical lead on decisions.

### Can I hire a contractor as the second engineer?

Yes, especially for a well-defined gap like a mobile app or a data pipeline. The risk is that a contractor fills the gap without spreading the knowledge, so make documentation and handover part of the agreement.

### How do I keep my first engineer from feeling replaced?

Explain the hire as freeing them for the work only they can do, give them a real say in the hiring, and be explicit about their role on the team. Most first engineers welcome help once they know where they stand.
