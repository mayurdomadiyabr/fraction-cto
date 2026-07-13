---
title: Your AI agent keeps guessing what you meant
slug: ai-agent-guessing-intent
date: '2026-07-13T14:06:24.019Z'
category: Pattern recognition
excerpt: >-
  Your AI agent builds the wrong thing because you left the decisions
  unspecified and it guessed. A short spec, written before it starts, is the
  fix.
description: >-
  Why AI coding agents build the wrong thing, and how a one-page spec written
  before the agent starts stops the guessing and outlives the prompt.
author: The founder of Fraction
readTime: 7
draft: false
---

Your AI agent is not building the wrong thing because it is dumb. It is building the wrong thing because you told it "add login" and left forty decisions unspecified, so it guessed. The fix is not a better prompt or a smarter model. It is a short written spec -- what the feature must do and what counts as done -- before the agent starts. Write intent down once and the agent stops guessing, your reviewer gets something to check against, and you leave behind an artifact a human engineer and an investor can actually read.

I watch founders run into this weekly now. The agent is fast, the demo looked right, and then the third feature quietly does something nobody asked for. The reflex is to blame the model and try a longer prompt. The real problem is upstream of the prompt.

## Why a capable agent still builds the wrong thing

There are three failure modes here, and they are not about model quality. They show up with the best tools on the market.

The first is intent drift. "Add login" is not a specification, it is a wish. Email and password, or a magic link? Social sign-in? How long does a session last? What happens on the fifth failed attempt? Is there password reset, and does it email or text? A capable agent answers all of those questions for you, quickly and reasonably, and its reasonable answers are almost never the ones you had in your head. You did not decide. It decided, and you find out later.

The second is context decay. Your codebase grows past what the agent can hold in view at once, and it starts forgetting decisions it made three sessions ago. It rebuilds a thing it already built, contradicts an earlier choice, wires the new feature to an assumption that is no longer true. The code looks confident on every screen and drifts as a whole.

The third is unverifiable output. Without a written definition of "correct," the only test the feature ever gets is you clicking through it a few times. "It works" comes to mean "it worked the three times I watched it." That is not the same claim, and the gap between them is where your production incidents live. This is the same motion-versus-progress trap I wrote about in [why an AI team can feel fast without shipping faster](/post-ai-team-feels-fast) -- speed you cannot verify is not progress you can bank.

## The spec is the missing layer, not more process

When I say "write a spec," founders picture a forty-page waterfall document and a two-week delay. That is not what this is. A founder-sized spec is a single page, and often less. It exists to answer the questions the agent would otherwise answer for you.

Here is what one costs to skip. A fintech founder I talked with told his agent to "add a payout flow" for their marketplace. The agent built clean, instant payouts -- a perfectly sensible reading of the request. The actual requirement, which lived only in the founder's head, was a two-day hold on every payout so the fraud team could review it. One sentence in a spec would have caught it. Instead it caught a week of rework, and it nearly caught a real fraud loss in production first, because the flow shipped to a staging environment that a few real users could reach.

The spec is not bureaucracy. It is the one place where the decisions that determine whether the feature is right actually get made by you instead of defaulted by the model. Skipping it does not save the decision. It just moves the decision to the agent and hides it from you until it is expensive.

## What a founder-sized spec looks like

You do not need a template or a tool. You need to answer three questions in plain sentences before the agent starts.

What should it do? Describe the behavior the way you would explain it to a new teammate. "A user signs in with email and a one-time code we text them. Sessions last seven days. After three failed codes we lock the account for an hour."

What should it never do? This is the part founders skip and regret. "Never allow sign-in with just a password. Never send the code by email. Never auto-create an account for an unknown number."

How will we know it is right? Two or three checks you can actually run. "A wrong code five times locks the account. A locked account cannot request a new code for an hour. A valid code signs in and the session survives a page refresh."

That is a complete spec for a login feature, and it took four sentences. Hand that to the agent instead of "add login" and you have removed almost every guess. Keep it in the repository next to the code, in the file your tools already read for context, so the next session inherits it and does not re-litigate the same decisions. The reviewer inherits it too, and now [reviewing the agent's output](/post-ai-review-bottleneck) is checking against a definition instead of squinting at a diff and hoping.

## The spec is also the artifact you will need later

Here is the part that makes this worth doing even when the feature is small. The spec outlives the prompt.

Your prompt is thrown away the moment the agent responds. The code remains, but code tells you what the system does, not what it was supposed to do -- and when those two things disagree, the code cannot tell you which one is the bug. A spec is the only record of intent. When your first engineer starts and inherits a codebase built by an agent, the difference between a good week and a bad month is whether there is any written statement of what these features are meant to do. Without it they are reverse-engineering your intentions from the agent's guesses.

Diligence cares about the same thing for a different reason. When an investor's technical reviewer opens your data room, the absence of any written intent is a signal, and not a good one. It reads as a team that does not know what it is building, only what it has generated. I have watched [the technical half of a data room](/post-technical-data-room) sit empty precisely because everything lived in throwaway prompts and one founder's memory. A few lightweight specs are cheap insurance against that conversation.

There is a neat symmetry worth naming. A spec defines what "right" means before the agent builds; [evals for an AI feature](/post-ai-feature-evals) measure whether it stays right after you ship. One guards the front of the pipeline, the other the back. Most founders have neither. The spec is the cheaper of the two to start, and it is the one that stops the wrong thing from ever getting built.

## Where founders overdo it

The failure mode in the other direction is real, so be honest about it. Do not write a spec for a throwaway prototype you are building to see if an idea feels right -- if the code is disposable, the guessing is free. Do not write a spec longer than the feature it describes. And do not let this calcify into a sign-off gate where nothing gets built until a document is approved, because then you have reinvented the process the AI was supposed to free you from.

The test is simple. A spec earns its place when a wrong guess would cost you real rework or a real incident. For the login flow and the payout hold, it pays for itself the first time. For a color change on a landing page, skip it. The point is to remove guessing where guessing is expensive, not to add paperwork everywhere.

This is judgment, and it is exactly the kind of judgment that is hard to hold consistently when you are also the person shipping. If you want a second set of eyes on where your AI-built product is quietly guessing, [book a call](/book-a-call) or start with a [teardown](/teardown) and we will find the places where a page of intent would have saved you a month.

## FAQ

### Isn't writing a spec just throwing away the speed I bought the AI for?
No. The spec is what makes the speed count. An agent that builds the wrong thing quickly cost you the build plus the rework plus the time to notice, which is slower than getting it right once. Four sentences of intent up front is the cheapest speed you will buy all week.

### How long should a spec be?
As short as it can be while still answering what it should do, what it must never do, and how you will know it is right. For most early-stage features that is a paragraph or a short bullet list. If it is running past a page, you are either specifying too much or the feature is genuinely complex and deserves it.

### Where do I keep the spec?
In the repository, next to the code, in whatever context file your AI tools already read. That way the next agent session inherits it automatically and the next human engineer finds it without asking. A spec that lives in a chat window or your head is a spec that decays the moment you close the tab.

### Isn't this the same as writing tests?
Related but earlier. A test checks a specific behavior after the code exists. A spec states the intended behavior before the code exists, in language you can read without being an engineer. The best outcome is that your spec's "how will we know it is right" checks become the agent's tests, so intent and verification are the same artifact.
