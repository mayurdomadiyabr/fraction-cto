---
title: Your engineer wants to adopt a new tool. Say yes?
slug: engineer-wants-new-tool
date: '2026-07-15T13:14:55.582Z'
category: Decisions
excerpt: >-
  Your engineer wants a new database, framework, or Kubernetes. Five
  plain-language questions to tell a real need from resume-driven development,
  no code required.
description: >-
  How a non-technical founder can evaluate an engineer request for a new tool
  and spot resume-driven development.
author: The founder of Fraction
readTime: 6
draft: false
---

Your engineer wants to introduce a new tool. A different database, a new framework, a queue, Kubernetes, a rewrite of the service that "has gotten messy." They are enthusiastic, they have reasons, and the reasons sound technical enough that you, as a non-technical founder, do not feel qualified to push back. So you say yes, and three months later a chunk of your runway has gone into infrastructure that does the same job the old thing did, only now nobody else on the team fully understands it.

This is one of the most common and least discussed decisions a founder makes, and you can make it well without being able to read the code. You just need the right questions.

## The incentive you are quietly fighting

There is a name for the pattern worth knowing about: resume-driven development. Engineers, especially early in their careers and especially eager ones, are drawn to the newest and most impressive tools, partly because those tools are genuinely interesting and partly because experience with them is worth something on the job market. That is not villainy, it is a normal human incentive, but it is not always aligned with what your company needs.

The tell is that the engineer benefits from adopting the shiny thing whether or not the startup does. They learn Kubernetes, or the trendy framework, and that knowledge follows them to their next job. Your company, meanwhile, pays for it twice: once in the cloud bill and the build time, and again in the ongoing operational complexity of running something more sophisticated than the problem required. A stack that would impress at a meetup can quietly drain a bank account.

The specific failure I see most is a small team copying the architecture of a company a thousand times its size. Someone reads how a hyperscaler runs its systems and applies those patterns to a product serving a few thousand users. The patterns are not wrong for the company they came from. They are wildly wrong for yours, and they come with a cost structure and a staffing requirement you cannot support.

## Five questions that cut through it

You do not need to evaluate the technology. You need to evaluate the decision, and these questions do that in plain language.

### What breaks today if we do nothing?

The most important question, and the one that exposes resume-driven choices fastest. If the honest answer is "nothing breaks, but this would be better," you are looking at a preference, not a need. Real problems have symptoms you can name: the site falls over at peak, a class of bug keeps recurring, a task takes days it should not. "It is not the modern way to do it" is not a symptom. Make the engineer point at the specific pain the current setup is causing right now.

### What does it cost to run, not just to build?

New tools have two price tags and founders only see the first. The build is the visible cost. The hidden one is what it takes to operate the thing every month afterward: the infrastructure spend, the time to maintain it, the fact that now every deploy and every incident touches a system with more moving parts. Ask specifically what the monthly operational cost and complexity look like a year from now, with the team you will actually have.

### Who else can run this if you are out for a week?

A new tool that only its champion understands is a key-person risk you are choosing to create. If the engineer who wants it is the only one who can operate it, you have made your whole team more fragile in exchange for a technical preference. This is the same trap as letting your [whole codebase live in one person's head](/post-key-person-codebase-risk), except here you are walking into it on purpose.

### Is this reversible if we are wrong?

Some tool choices are easy to walk back and some lock you in for years. Adopting a library you can swap out later is a two-way door; migrating your core database or committing to an orchestration platform is much closer to a one-way door. The more irreversible the choice, the higher the bar of evidence it should have to clear. Spend your scrutiny in proportion to how hard the decision is to undo.

### Does this serve the next year, or the next hire?

Ask directly, without accusation: is this the right call for the company over the next twelve months, or is it mostly a good thing to have built. A good engineer can answer that honestly, and often will, because the best engineers are the ones who have watched resume-driven decisions blow up a codebase and do not want to repeat it.

## Saying no without losing your engineer

The goal is not to reflexively reject every new tool. Sometimes the new thing is genuinely the right call, the current setup really is failing, and holding the line out of stinginess costs you a good engineer and a real improvement. The goal is to make the decision on the company's merits instead of on enthusiasm.

A useful default is to say yes to reversible, low-cost adoption quickly and reserve the scrutiny for the expensive, hard-to-undo choices. Another is to ask for the smallest version first: prove the new tool solves a real problem in one contained place before it spreads across the whole system. And when you do say no, say why, in terms of company priorities, not "we cannot afford it." Engineers respect "here is what we are optimizing for right now" far more than a flat refusal. This connects to a broader call about [when to force your team onto one shared stack](/post-standardize-team-stack) versus letting tools proliferate, which is the same tension viewed from the other side.

If you find yourself facing one of these requests and genuinely cannot tell whether it is a real need or an expensive preference, that is a good moment for an outside read from someone who has watched the pattern play out many times. It is one of the more common reasons founders [book a call](/book-a-call).

## FAQ

### I am not technical. How can I possibly evaluate this?
You are not evaluating the technology, you are evaluating the decision, and that you can do. Ask what breaks today if you change nothing, what it costs to run for a year, who else can operate it, and how hard it is to undo. Those questions surface a resume-driven choice without a line of code, because a genuine need survives them and a preference does not.

### Isn't it demoralizing to say no to my engineers' ideas?
Saying no badly is. Saying no with a reason tied to company priorities is not, and good engineers respect it. What actually demoralizes a team is watching the company adopt something expensive and unnecessary, then struggle under the complexity. Being a thoughtful steward of those decisions builds more trust than rubber-stamping them.

### How do I tell a real need from resume-driven development?
Look for named symptoms. A real need points at a specific failure happening now: outages, recurring bugs, a task that takes far too long. Resume-driven development points at how things should be done, or how a much larger company does them. If nothing is actually broken and the argument is about modernity or best practice, treat it as a preference until proven otherwise.

### What if I say no and the engineer is right?
That is why the questions matter more than the answer. If the engineer can name the concrete problem, quantify the ongoing cost, and show the change is worth the risk, you should probably say yes, and you will have a well-reasoned decision instead of a guess either way. The point is not to always refuse. It is to never approve an expensive, hard-to-reverse choice on enthusiasm alone.
