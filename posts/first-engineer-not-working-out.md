---
title: Your first engineer isn't working out. What now?
slug: first-engineer-not-working-out
date: '2026-09-17T11:22:51.023Z'
category: Hiring
excerpt: >-
  A vague sense that your first hire is not working is not a decision. How to
  name the problem, run a fair reset, protect the company, and part ways
  cleanly.
description: >-
  Your first engineer is not working out. How to diagnose the real problem, run
  a short reset, secure your code and accounts, and part ways cleanly.
author: The founder of Fraction
readTime: 7
draft: false
---

Short answer: if your first engineer is not working out, you will usually know by day 60 and you will usually wait until month nine to act. Close that gap. Name the problem in writing, give a short and specific reset period, protect the codebase and the accounts before any hard conversation, and if the reset fails, part ways cleanly and quickly. The cost of waiting is not the salary. It is six more months of architecture built by someone you have already stopped trusting.

Most founders I talk to describe this situation the same way. The hire looked right. The interviews went well. The first few weeks felt productive. Then something went quiet, and the founder cannot say exactly what is wrong, only that it does not feel like it did in the pitch meeting. Because they are not technical, they doubt their own read, so they wait.

This post is about how to turn that vague feeling into a decision you can defend.

## First, figure out which problem you actually have

"Not working out" covers at least four different situations, and each one has a different fix. Before you talk to anyone, write down which one you are in.

### The output problem

Very little ships. Tasks that should take days take weeks. Demos are always "almost ready." This is the easiest to see and the hardest to diagnose, because slow output can come from a weak engineer, a bad codebase they inherited, unclear requirements from you, or a scope you keep changing. Check your own part first. If you changed priorities three times last month, the slowness may be yours.

### The judgment problem

Things ship, but they are the wrong things, or they are built in ways that create work later. A custom framework where a library would do. A rewrite nobody asked for. Infrastructure sized for a hundred times your traffic. I wrote about [screening for this before the hire](/post-screen-engineer-for-judgment); after the hire, it shows up as a pattern of decisions you only understand once they are expensive.

### The expectation problem

The engineer is competent but thinks they joined as a co-founder, or you think you hired one and they think they took a job. This mismatch is the most common failure I see in first hires. One side wants a partner who argues about direction. The other wants a clear role, a salary, and evenings off. Neither is wrong. They are just not in the same arrangement.

### The communication problem

Work might be fine, but you cannot tell. No updates, no written plans, no warning when something slips. For a non-technical founder this is almost as damaging as bad work, because you cannot manage what you cannot see.

Write down two or three concrete examples for whichever category fits. "The billing integration was estimated at one week on March 3 and shipped April 11 with no update in between" is useful. "It just feels slow" is not.

## Get an outside read before you decide

If you cannot read code, your biggest risk is being wrong in either direction. You might fire a good engineer who is fighting a bad codebase, or keep a weak one because they explain things confidently.

A one-time review from someone senior and independent fixes this. They look at the repository, the commit history, the pull requests, and the deployment setup, then tell you whether the work is reasonable for the time spent. This is exactly what a [technical teardown](/teardown) is for, and it costs far less than another quarter of uncertainty. If you do not have anyone to do this, the post on [who vets your engineer when you have no engineers](/post-who-vets-your-engineer) covers the options.

The outside read also gives you something specific to say. "An experienced reviewer thinks the payment module is three times more complex than it needs to be" is a conversation. "I feel like you are slow" is an argument.

## Run a real reset, not a silent countdown

Unless there is misconduct, the fair move is a direct conversation and a short, specific reset. In my experience, four to six weeks is enough to see whether things change.

The conversation should cover three things:

1. What you have observed, with the dated examples you wrote down.
2. What good looks like over the next few weeks, in terms they can check themselves. For example: a written plan every Monday, two named features in production by a specific date, and a heads-up the same day any estimate slips.
3. What happens if it does not change. Be honest that the role is at risk. People cannot fix a problem they do not know is serious.

Then actually hold the check-ins. A reset that nobody tracks is just a delay with extra guilt.

Some of these conversations fix the problem. Expectation mismatches in particular often clear up once someone says them out loud. An engineer who thought they were meant to design everything alone may do much better with a clear weekly priority list.

## Protect the company before any hard conversation

This is the part founders skip, and it is the part that causes real damage. Before you start a reset, and definitely before a separation, confirm that the company controls:

- The code repository, with the company as owner, not the engineer's personal account.
- The cloud account, the domain registrar, DNS, the app store accounts, and the payment provider.
- Every production credential, stored somewhere you can reach, such as a company password manager.
- Signed invention assignment paperwork. If this is missing, fix it now; [the IP gap can stall a funding round](/post-ip-assignment-raise) later.

None of this assumes bad intent. Most engineers leave cleanly. But if your first engineer is the only person with the root password, your entire product depends on one relationship going well. The post on [key-person codebase risk](/post-key-person-codebase-risk) goes further on this.

## If the reset fails, part ways quickly and decently

If the check-ins show no real change, make the decision and do not drag it out. A few practical points:

- Talk to an employment lawyer in your jurisdiction before the conversation. Notice periods, final pay timing, and what you can say differ a lot by location, and contractor relationships follow different rules from employees.
- Decide the equity position before the meeting. With standard four-year vesting and a one-year cliff, someone leaving before month twelve typically keeps nothing, which can feel harsh when they were close. Some founders accelerate a small amount as goodwill. Decide on purpose, not in the room.
- Ask for a handoff. A paid week or two to document the systems, walk someone through the deployment, and transfer access is usually worth far more than it costs.
- Revoke access the same day the decision is communicated, calmly and without drama.
- Be generous with severance where you can afford it. It buys goodwill and a cooperative handoff.

## Hire the next one differently

The second hire is where you use what you learned. Two changes help most. First, write down which kind of role you are hiring for, partner or employee, and match the equity and the pitch to it. Second, reduce the guesswork with a [short paid trial](/post-paid-trial-first-engineer) and an independent technical interviewer, so you are not relying on your own read of someone you cannot fully evaluate.

If you want a second opinion on your current engineer's work or help planning the next hire, you can [book a call](/book-a-call).

## FAQ

### How long should I give a first engineer before deciding?

The first 60 to 90 days tell you most of what you need to know. If month three looks like month one, with no improvement in output or communication, run a formal reset. Waiting past six months rarely changes the outcome and makes the codebase harder to hand over.

### Can I let my first engineer go before the vesting cliff?

Usually yes, subject to your employment agreement and local law, and unvested equity typically returns to the company. Check your specific grant documents with a lawyer, and decide in advance whether to offer any acceleration.

### What if I am the reason it is not working?

It happens. Changing priorities, vague requirements, and no written goals will make a good engineer look slow. An outside review of the work and the process will tell you which side needs to change.

### Should I hire a replacement before the current engineer leaves?

Only if you can do it openly. Overlap is useful for handoff, but a secret search tends to leak and damages trust. Securing access and documentation matters more than overlap.
