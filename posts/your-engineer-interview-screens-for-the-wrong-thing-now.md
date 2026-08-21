---
title: Your engineer interview screens for the wrong thing now
slug: your-engineer-interview-screens-for-the-wrong-thing-now
date: '2026-08-21T04:16:01.482Z'
category: Hiring
excerpt: >-
  The code gets written by an agent now. If your interview is still a
  from-scratch coding test, you are ranking candidates on the cheap half of the
  job. What to test instead.
description: >-
  Coding agents made raw coding cheap. What to actually screen for in a senior
  engineer now: code review, eval literacy, and scope judgment.
author: The founder of Fraction
readTime: 7
draft: false
---

You are hiring your first senior engineer, and your interview is a coding test: give them a problem, watch them solve it, hire the one who wrote the cleanest solution fastest. In 2026 that interview measures a skill your best hire will barely use. The code gets written by an agent now. What you actually need to test is whether the person can direct that agent, catch it when it is confidently wrong, and know which of its output is safe to ship. Screen for judgment over the machine, not speed at the keyboard.

This is not a prediction. It is already how good engineers work. Coding agents like the current generation of autonomous tools have moved past autocomplete into writing whole features, and the daily job of a strong engineer has shifted from typing implementation to steering and auditing what the agent produces. If your interview has not moved with it, you are ranking candidates on the part of the work that got cheap and ignoring the part that got valuable.

## What the old interview was really testing

The classic coding interview was a proxy. You could not observe judgment directly in an hour, so you tested a correlated thing: can this person hold a problem in their head and produce correct code quickly. For years that proxy worked, because someone who could do that reliably had usually also built the deeper judgment you actually wanted.

The proxy is breaking because the correlated skill is now automated. An agent produces correct-looking code for a well-specified problem in seconds. So a candidate who is fast at the whiteboard is demonstrating a skill your team will mostly delegate, while a candidate who is slow at raw coding but sharp at spotting where an agent's output is subtly wrong is demonstrating exactly the skill your team will live on. The interview inverts the ranking you want.

I have watched this play out in hiring for early-stage teams. The engineer who looks strongest in a traditional coding round is not reliably the one who ships safe systems six months in. The reliable signal is different, and most founders are not testing for it because their interview format predates the thing that changed.

## The three things worth testing now

If you strip the interview down to what predicts a good hire in an agent-heavy team, three signals do most of the work.

The first is code review under adversarial conditions. Hand the candidate a chunk of plausible, AI-generated code with a real but non-obvious flaw buried in it: a security hole, a broken edge case, a subtle data-loss bug. Ask them to find what is wrong and tell you why. This is the single most useful test you can run now, because reviewing and auditing machine output is the actual job. A great engineer reads that code with suspicion in the right places. A weak one skims it, sees that it looks reasonable, and approves it. The difference is visible in minutes and it is very hard to fake.

The second is what people in the field are calling eval literacy: does the candidate know how to tell whether a system is actually good, rather than whether it looks good? Ask them how they would know an AI feature they built was working, or how they would catch it silently degrading in production. Strong candidates talk about measuring real outcomes, building checks, and defining what correct even means before shipping. Weak candidates talk about how impressive the demo was. This maps directly to a problem I write about often, that [shipping an AI feature and knowing it is good](/post-ai-feature-evals) are two completely different skills, and the second is the rarer one.

The third is specification and judgment about scope. An agent does what you tell it, which means the bottleneck moves to knowing what to tell it and what not to build. Give the candidate a vague product request and watch what they do. Do they interrogate the requirement, surface the ambiguity, and propose the smallest thing that solves the real problem? Or do they take the request at face value and start designing a cathedral? The engineer who manages agents well is the one who was already good at deciding what deserves to be built, because that judgment is now the scarce input.

## Why this matters more for a non-technical founder

If you can read code, you can adapt your own interview. If you cannot, the shift is harder and higher stakes, because the old interview at least gave you a crisp-looking score to hide behind, and the new signals are more qualitative. It is genuinely difficult to judge whether a candidate found the right bug in the AI-generated code when you cannot read the code yourself.

There are still things you can assess without being technical. You can watch how a candidate reasons out loud. You can notice whether they are appropriately skeptical or reflexively confident. You can ask them to explain, in plain language, how they would know their work was safe to ship, and judge whether the answer is concrete or hand-wavy. Those are judgment signals, and judgment is legible even when code is not. Many of the techniques for [interviewing a senior engineer when you cannot read code](/post-interview-engineer-non-technical) still apply; they just point at slightly different questions now.

Where it gets genuinely hard is the technical verification, and that is worth getting help on rather than guessing. Bringing in someone technical to design the code-review exercise and sit in on the round is one of the highest-leverage uses of outside help in early hiring, because a wrong first senior engineer is one of the most expensive mistakes a young company makes. A short [book a call](/book-a-call) to build the interview and score the hard parts costs a fraction of a bad hire's first month, let alone the quarter you lose unwinding it.

## What not to overcorrect into

A caution, because the pendulum swings too far. The answer is not to stop testing engineering fundamentals entirely and hire whoever is most fluent with AI tools. An engineer who can drive an agent but does not understand what the agent is doing is not auditing anything; they are laundering the machine's confidence into yours. The point is not to replace fundamentals with tool-fluency. It is to test fundamentals through the lens of judgment and review, which is how those fundamentals actually get used now, rather than through raw coding speed, which is the part that no longer distinguishes anyone.

There is also a related trap on the candidate's side: you now genuinely cannot always tell whether you are evaluating the person or the tool sitting next to them, which is a separate problem worth handling deliberately when you [cannot tell if you are interviewing the engineer or their AI](/post-candidate-using-ai-in-interview). The two problems compound. The defense against both is the same: test for judgment you can watch happen live, in conversation, where the tool cannot do the thinking for them.

## The bottom line

The coding interview is not useless, but it is now testing the cheap half of the job. The valuable half, directing autonomous tools, auditing their output, and deciding what is worth building, is what separates a senior engineer who will keep your product safe from one who will quietly approve the machine's mistakes. Rebuild your interview around those signals, and if the technical parts are beyond what you can score yourself, get a second read rather than falling back on a coding test that no longer measures what you need.

## FAQ

### Should I stop giving coding tests entirely?

No, but change what they test. Instead of a from-scratch coding problem, use a review exercise: give the candidate AI-generated code with a real flaw and ask them to find it. That tests the skill they will actually use every day, which is auditing machine output, rather than the skill that is now automated.

### What is eval literacy and why does it matter for hiring?

Eval literacy is knowing how to measure whether a system is genuinely working, not just whether it looks good in a demo. It matters because an agent can produce output that appears correct and is subtly wrong, and the engineers who protect you are the ones who instinctively ask how they would catch that. It is one of the strongest signals that someone has really built with these tools.

### I am not technical. How do I run this kind of interview?

Focus on the judgment signals you can read: skepticism, how they reason out loud, whether they can explain in plain language how they would know their work is safe to ship. For the technical verification, such as whether they found the right bug, bring in a technical person to design the exercise and score it. Getting the first senior hire right is worth that outside help.

### Does this change who I should be hiring, not just how I interview?

It sharpens it. The most valuable engineers now combine solid fundamentals with strong judgment about what to build and a habit of auditing rather than trusting output. That has always been valuable, but agents have made it the decisive difference rather than a nice-to-have, which is why the interview needs to surface it directly.
