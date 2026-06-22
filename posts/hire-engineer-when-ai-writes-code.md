---
title: 'If AI writes the code, what do you hire an engineer for?'
slug: hire-engineer-when-ai-writes-code
date: '2026-06-22'
category: Hiring
excerpt: >-
  AI made writing code cheap. It did not make judgment, review, or ownership
  cheap. Here is what your first senior engineer is actually for now, and how to
  interview for it.
description: >-
  AI writes the code now, so stop hiring engineers for typing speed. Hire for
  judgment, review, and ownership, and interview for the skill that got scarce.
author: The founder of Fraction
readTime: 9
draft: false
---

Short version: when AI writes the code, you are no longer hiring an engineer to produce code faster, because that part got cheap. You are hiring someone to be accountable for what ships - to decide what is worth building, to review what the machine generated, and to own the system when it breaks at 2 a.m. If your interview still tests typing speed and algorithm trivia, you are screening for the one skill that just lost most of its value. Screen instead for judgment under ambiguity, the ability to debug code they did not write, and the willingness to say no.

I get a version of this question almost every week now, usually from a non-technical founder who has shipped something real with AI coding tools and is suddenly unsure what to do next. It comes out as: "If Claude can write the feature in an afternoon, why am I about to pay someone 180k a year to do the same thing slower?" It is a fair question, and the honest answer is that you are not paying them to do the same thing. The job changed underneath the title, and most founders are still hiring against the old version of it.

## The part of the job that got cheap is not the part that mattered

For most of the last twenty years, the bottleneck in building software was producing the code. Typing it, wiring it together, getting it to compile and pass tests. That work was slow and expensive, so it dominated how we evaluated engineers. We asked people to reverse a linked list on a whiteboard because writing correct code under pressure was a decent proxy for the thing we needed most.

That proxy is now broken. The production of code is the part AI does well, fast, and almost for free. What it does not do is decide whether the feature should exist, notice that the quick implementation will quietly corrupt data under load, or take the 6 a.m. call when checkout starts failing for a specific country. Those have always been the expensive parts of engineering. They were just hidden inside the same person who was also doing the typing, so we never priced them separately.

Now they are separated, and you can see them clearly. The typing is a commodity. The judgment is not. When you hire an engineer in 2026, you are buying the judgment and getting the typing thrown in, not the other way around.

## What the role actually is now

In the founders I work with, the early senior engineer has quietly turned into three jobs that have nothing to do with how fast they type.

The first is deciding what to build and what to refuse. AI tools are infinitely willing. Ask for a feature and you get a feature, with no pushback about whether it is worth the maintenance it will cost you for the next two years. A good engineer is the friction that a code generator does not have. Half of what I do in a founder's codebase is talk them out of things, and the savings from one avoided feature usually dwarfs the cost of the conversation.

The second is review. Someone has to be accountable for the code that goes to production, regardless of who or what wrote it. Reviewing AI-generated code is genuinely harder than reviewing a junior's pull request, because the output looks confident and finished even when it is subtly wrong. It compiles, it passes the happy-path test, and it has a plausible structure. The failure modes hide in the seams: the auth check that is almost right, the database query that works at 100 rows and falls over at 100,000, the error that gets swallowed instead of surfaced. You need a person who reads code adversarially, assuming it is wrong until proven otherwise. That skill is rarer than it used to be, and it is now the core of the job.

The third is owning the system when it breaks. AI will help you write the code. It will not be accountable at 2 a.m. when the thing it wrote takes down your product. Ownership - the willingness to be the person whose problem it is when things go wrong - cannot be generated. It has to be hired, and it is most of what seniority actually means.

## Why this matters more for a small company, not less

There is a comforting story going around that says AI tools let founders delay hiring engineers, because the founder plus a code generator can go further alone. I wrote about the timing version of this in [whether AI coding agents change when you hire your first engineer](/post-ai-agents-first-engineer-timeline), and the short answer is that they change less than the hype suggests. Here is the part that gets missed: the more code you generate, the more you need someone whose job is judgment and review, not less.

A founder generating features at high speed with no senior review is not moving fast. They are accumulating a kind of debt that does not show up until it is expensive. I was pulled into a seed-stage company earlier this year that had shipped an impressive amount in three months with two non-technical founders and a stack of AI tools. The product demoed beautifully. Underneath, the same authentication logic had been reimplemented four slightly different ways in four parts of the app, because each was generated in a separate session with no one holding the whole picture in their head. None of them were individually wrong. Together they were a security incident waiting for a quiet weekend. That is not a code-production problem. No amount of faster typing would have prevented it. It is a judgment-and-coherence problem, and it is exactly the thing you hire a senior person to hold.

## How to interview for the job that exists now

If the value moved from production to judgment, your interview has to move with it. Most founders are still running the old screen, testing for the skill that got cheap, and then wondering why the hire who aced the coding test cannot keep the system coherent.

Stop asking people to write code from scratch under a timer. Instead, hand them something broken and watch how they think. Give a candidate a small system with a real bug - ideally one generated by an AI tool, with the confident-but-wrong quality those bugs have - and ask them to find it and explain it. You learn more from fifteen minutes of someone debugging code they did not write than from an hour of them solving a puzzle you already know the answer to.

Ask them to review a pull request, not author one. Put a plausible, AI-generated diff in front of them and ask what they would block and why. The strong candidates immediately start probing the edges: what happens when this input is empty, where does this fail under load, who owns this when it breaks. The weak ones say it looks fine. That single exercise sorts more accurately than anything else I have used.

And ask them about a time they argued against building something and turned out to be right. You are listening for whether they have the instinct to refuse, because that instinct is now load-bearing. This connects to a point I make constantly about [what senior engineering judgment is actually worth](/post-paying-for-judgment): you are not paying for output, you are paying for the decisions that keep you from drowning in output. The interview should test the thing you are buying.

## The trap of hiring for speed

The failure I see most often is a founder who, having tasted how fast AI tools let them move, goes looking for an engineer who will move at that same speed. They optimize the hire for velocity and end up with someone who generates even more code, even faster, with the same absence of judgment they had before, now with a salary attached. The codebase gets bigger and less coherent at the same time.

The first senior engineer is still a bet, and the way to stop guessing is to bet on judgment rather than throughput - the same logic I laid out in [how to de-risk your first senior engineer hire](/post-first-hire). The candidate who asks slow, uncomfortable questions about why you are building a thing is usually worth more than the one who promises to ship it by Friday. Friday is no longer the constraint. Whether the thing should exist, and whether it will still work in six months, is the constraint.

This is also why a fractional senior set of eyes works so well at this stage. You often do not need the judgment full-time yet. You need it on the decisions that matter and on the review of what is shipping, which is a few days a month, not five days a week. If you have shipped fast with AI tools and want someone to tell you honestly which 20 percent of it is dangerous, that is exactly what a [codebase teardown](/teardown) is for, and it is a much smaller commitment than a full-time hire you are not sure how to evaluate. When you want to talk through what your first engineering hire should actually be screened for, [book a call](/book-a-call) and we will work through it against your specific situation.

## Frequently asked questions

### If AI writes most of my code, do I still need to hire an engineer at all?

Eventually, yes, but for a different reason than before. You are not hiring someone to produce code, since that is the part AI handles. You are hiring someone to be accountable for what ships: to decide what is worth building, to review the generated code adversarially, and to own the system when it breaks. The more you generate, the more that accountability matters.

### What should I test for in an engineering interview now?

Test judgment, not typing. Hand the candidate a broken system and watch them debug code they did not write. Give them an AI-generated pull request and ask what they would block and why. Ask about a time they argued against building something and were right. These reveal the judgment you are actually paying for, which a from-scratch coding test does not.

### Is it cheaper to hire a junior engineer plus AI tools instead of a senior?

Usually not, and often the opposite. AI tools amplify whoever is using them, including their blind spots. A junior with a code generator produces more code without the judgment to know which of it is dangerous, and you end up paying later to untangle it. The expensive, rare skill is reviewing and refusing, which is what seniority buys.

### How do I review AI-generated code if I am not technical?

You do not, and you should not try to. The point of this hire, or of a fractional senior reviewer, is that someone with judgment is accountable for what reaches production. Your job as a non-technical founder is to make sure that accountability exists and sits with a specific person, rather than assuming the tool handled it because the demo worked.

### Does this mean engineering salaries are going down?

For routine code production, the market pressure is real. For senior judgment, the opposite is happening, because it is now the scarce input. The split is widening: the value of typing fell, and the value of deciding, reviewing, and owning rose. Hire and pay against the part that got scarce, not the part that got cheap.
