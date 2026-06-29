---
title: Your AI agents write faster than anyone can review
slug: ai-review-bottleneck
date: '2026-06-29T14:05:08.260Z'
category: Pattern recognition
excerpt: >-
  AI agents generate code faster than anyone can read and vouch for it. The
  bottleneck moved from writing code to reviewing it, and most teams optimize
  the wrong part.
description: >-
  Why AI coding agents move the bottleneck from writing code to reviewing it,
  and what founders should do when judgment becomes the scarce resource.
author: The founder of Fraction
readTime: 7
draft: false
---

If your team runs on AI coding agents, your bottleneck has moved and you may not have noticed. It used to be how fast you could write code. Now it is how fast someone with judgment can read what the agents produce, understand it, and vouch for it. The agents generate changes faster than any human can keep up with, so unreviewed work piles up and the risk hides in the part nobody had time to read. The fix is not more generation. It is treating review and judgment as the scarce resource they have quietly become.

I am seeing this in nearly every early-stage team I sit with now. The founder is thrilled at the velocity. The agents are shipping. And somewhere underneath, a slow problem is forming that none of the usual dashboards will show you.

## The constraint moved and most teams did not notice

For most of software's history, writing code was the expensive step. You hired engineers because producing working software was slow, and slow was the binding constraint on everything you wanted to do. Every tool, every process, every hire was aimed at making that one step faster.

Then the constraint went away. Not entirely, but enough to change the shape of the work.

### Writing code stopped being the hard part

A capable agent can now turn a clear instruction into a working change in minutes, including the boring parts that used to eat afternoons. A two-person team can produce the volume of code that recently took six engineers. That is real, and it is not hype -- I watch it happen weekly. The cost of making code exist has collapsed.

The trap is assuming that because production got cheap, everything downstream of production got cheap too. It did not. The agent can write the change. It cannot tell you whether the change is the right one, whether it quietly broke an assumption three modules away, or whether the shortcut it took is the kind you will pay for in six months. Those are judgment questions, and judgment did not get cheaper. If anything it got scarcer relative to the flood of code now arriving for it to judge.

### Reviewing it became the hard part

Review is the step where a human reads a change, understands what it does and what it touches, decides whether it should exist, and takes responsibility for it being in your product. That step has a hard ceiling: it runs at the speed of human attention, and you cannot prompt your way past it.

So picture the arithmetic. Generation got ten times faster. Review did not. The gap between how much code arrives and how much code gets genuinely understood widens every week. That gap is not empty -- it fills with code that is in your product and that nobody has actually read. This is the same dynamic I described in [the wall AI-built apps hit](/post-ai-built-app-wall), seen from upstream: the wall is what happens when the unread pile finally gets large enough to fall on you.

## What the bottleneck looks like from the founder's chair

You will not see this in your velocity numbers. By every output measure, the team is doing great. The signals are quieter and you have to know to look for them.

### The pull request pile nobody truly reads

The first symptom is a review queue that grows faster than it drains. Changes get approved, but "approved" starts to mean something thinner than it used to. A reviewer skims a 600-line agent-generated change, sees that the tests pass, and clicks approve because reading all of it carefully would take an hour they do not have and there are four more waiting. Multiply that by a few weeks. Now most of what is in your product was approved by someone who did not really read it. The review happened on paper. It did not happen in anyone's head.

### "Looks done" is carrying a lot of weight

The second symptom is linguistic. Listen for how the team talks about finished work. "It's done, the agent built it." "Looks good, tests are green." These are statements about output, not about understanding. There is a difference between a change someone built and a change someone can stand behind, and AI makes the first one cheap while leaving the second exactly as expensive as it always was. When "looks done" quietly replaces "I understand this and I'd defend it," the gap has reached your vocabulary.

### The one person who gets it falls behind

The third symptom is a person. On most small teams there is one individual -- often a technical founder -- who actually holds the shape of the system in their head. In the old world they could keep up, because code arrived at human speed. In the new world the agents are producing changes faster than that one person can absorb them, and their mental model of the system goes stale. They stop being the person who understands the codebase and become the person who used to. That is a dangerous moment, and it is closely related to [the codebase that lives in one person's head](/post-key-person-codebase-risk), except now even that person is losing the thread.

## What to do when review is the constraint

The instinct when something is the bottleneck is to do more of it. That is right, but the naive version -- review harder, stay later -- does not scale and burns out the one person you most need. The better moves are structural.

### Make the agents produce reviewable work

A lot of review pain is self-inflicted, because the agents are pointed at large, vague tasks and hand back large, tangled changes that are miserable to read. Tighten the inputs. Smaller, well-scoped changes with clear boundaries are dramatically faster to review, and the boundaries are something a human has to decide before the agent starts. The lever here is not the agent. It is the structure you give it, and that structure is engineering judgment applied upstream rather than downstream. A team that sets good boundaries before prompting spends far less time deciphering output after.

### Decide what actually needs deep review

Not all code carries equal risk, and treating it as if it does is how the queue overwhelms you. A change to an internal admin screen and a change to how you handle payments or store customer data are not the same kind of risk, and they should not get the same kind of review. The skill is sorting: waving through the low-risk volume quickly so you can spend real attention on the handful of changes where a mistake actually costs you. That sorting is itself a judgment call, and getting it right is most of what good review under load looks like.

### Buy judgment, not just throughput

Here is the part founders get backwards. When the team feels underwater, the reflex is to add more building capacity -- another engineer, another agent seat. But if review is the bottleneck, adding generation makes the bottleneck worse: you have increased the inflow to the step that was already overwhelmed. What you are short on is not hands to type, it is judgment to decide, and those are different purchases. This is the same point I make about [what senior judgment is actually worth](/post-paying-for-judgment) and about [what you are really hiring an engineer for once AI writes the code](/post-hire-engineer-when-ai-writes-code): the value moved from producing the code to being able to own it. Buy for the constraint you actually have.

The reason this matters is timing. The cost of an unread codebase is invisible right up until it is not, and by then the cheap fix -- a senior reviewer setting guardrails and clearing the backlog with judgment -- has turned into the expensive one. If you want a read on where your own review gap sits before it becomes a wall, a short [teardown of your setup](/teardown) will usually surface it in an afternoon.

## Frequently asked questions

### Isn't AI supposed to make engineering cheaper, not require more oversight?

It makes one part cheaper -- producing code -- and leaves the expensive part, deciding whether the code is right and owning it, exactly where it was. So your total cost does not vanish, it relocates. You spend less on typing and relatively more on judgment, and the teams that come out ahead are the ones that notice the shift and fund the part that is now scarce instead of pouring everything into the part that got cheap.

### Can't the AI review its own output?

Agents can catch some classes of issue and you should use them for that -- it clears low-value noise off the queue. But review is not only checking for bugs. It is deciding whether a change should exist, whether it fits the system's direction, and who is accountable for it in production. Those are ownership questions, and an agent cannot hold accountability for your product. A human has to stand behind what ships, which means a human has to understand it.

### How do I know if review is actually my bottleneck?

Look for the gap between output and understanding. If your team is shipping fast but no single person could confidently explain how a recently shipped feature works, or your review queue keeps growing, or "the agent built it" has quietly replaced "I understand this," review is your constraint. If you are not sure which problem you have, [book a call](/book-a-call) and we can work out whether you are short on building capacity or short on judgment, because the fixes point in opposite directions.
