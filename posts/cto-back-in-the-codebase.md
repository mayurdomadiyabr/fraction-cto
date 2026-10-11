---
title: AI turned your CTO back into a coder. Who is leading?
slug: cto-back-in-the-codebase
date: '2026-10-11T03:03:04.430Z'
category: Pattern recognition
excerpt: >-
  AI tools make it easy for technical leaders to ship code again. When the
  leader becomes the top coder, decisions, review and hiring quietly slip.
description: >-
  Engineering leaders are coding again with AI tools. When it helps, what
  quietly stops happening, and four questions to tell if your CTO has gone too
  far.
author: The founder of Fraction
readTime: 6
draft: false
---

Your technical leader has started shipping code again. With an AI coding agent open all day, they are closing tickets faster than some of the engineers, and the commit graph looks great. Meanwhile the hiring plan has not moved in six weeks, the agency has stopped getting reviews, and two engineers are waiting on a decision about the data model that nobody has made.

The short answer: AI tools have made it cheap and satisfying for CTOs and engineering leads to write code again, and some hands-on work is healthy. But a leader who becomes the most productive engineer on the team has usually stopped doing the job only they can do. The test is not how much code they write. It is whether decisions, hiring, and review are still happening on time.

## The trend is real, and it is not only at your company

LeadDev's [Engineering Leadership Report 2026](https://leaddev.com/management/engineering-managers-are-back-in-the-codebase) found that 37 percent of engineering leaders were doing more hands-on technical work than a year earlier, and that the share of engineering managers doing hands-on work rose from 20 percent in 2025 to 35 percent in 2026. Among CTOs or equivalent, 44 percent said they were spending more time on coding and code review than the year before.

None of that is surprising if you have watched a technical leader use an agent for a week. The friction that used to stop a manager from coding, finding an hour of uninterrupted focus to remember how the build works, has mostly gone. You can describe a change between two meetings and review the result after the third. For someone who got into the field because they liked building things, it is hard to resist.

## Why it feels like a good thing

At an early-stage startup, it often is a good thing, at first. A CTO who is close to the code makes better architecture calls, catches bad estimates, and earns credibility with the engineers. On a team of two or three, the CTO probably should be writing a meaningful share of the code. If you are pre-product, that is the job.

The trouble starts when the team grows past the point where the leader's output is the constraint. Somewhere around four to six engineers, the bottleneck moves. It is no longer how fast code gets written. It is how fast the right things get decided, reviewed, and unblocked. A leader who keeps optimising their own output after that point is working on the wrong constraint, and AI makes the wrong constraint feel very productive.

## What quietly stops happening

In the companies I work with, the pattern is consistent. When a technical leader drifts back into full-time building, these are the things that slip, roughly in this order.

### Decisions get deferred

Architecture and vendor decisions need uninterrupted thought and a conversation with the people affected. Those are exactly the hours that disappear into the editor. The team works around the missing decision, usually by each engineer making a local choice, and you end up with three ways of doing the same thing.

### Review becomes a rubber stamp

AI-assisted engineers produce more code than before, and the leader who should be reviewing the risky parts is now producing code too. Review turns into a quick scan. [AI agents write faster than anyone can review](/post-ai-review-bottleneck) is the general version of this problem, and it gets worse when the reviewer is also a high-volume author.

### Hiring stalls

Hiring is slow, interrupt-driven, and emotionally draining. Coding is fast and rewarding. Given the choice, most technical leaders will pick the second, and the open role stays open for another month.

### The leader becomes a key-person risk in a new way

The leader's AI-assisted code is often the least reviewed code in the repository, because nobody feels comfortable blocking the boss. If they leave, or are simply on holiday, the team inherits a fast-moving area they never really looked at. [Key-person risk in your codebase](/post-key-person-codebase-risk) usually describes an engineer, but it applies to a coding CTO just as much.

### The founder loses their technical translator

The board update gets thinner, the investor question about security goes unanswered for a week, and the founder starts making technical calls alone because the CTO is heads-down. This is the most expensive slip, because it is invisible until diligence or a customer escalation exposes it.

## How to tell whether it has gone too far

You do not need to measure commits. Ask four questions every few weeks.

1. **What decisions are pending, and how long have they been pending?** If a material decision has waited more than two weeks, leadership time is short.
2. **Who reviewed the leader's last ten changes, and did anyone push back?** If nobody has ever blocked one, the review is not real.
3. **Where is the open hire?** If the pipeline has not moved, the hours went somewhere else.
4. **Could the team ship for two weeks without the leader?** If the honest answer is no because only the leader understands recent work, the coding has created dependency rather than speed.

If two or more of those answers are uncomfortable, the hands-on work has stopped being a credibility habit and become a substitute for the job.

## A healthier split

The goal is not to ban the leader from the codebase. Staying close to the code keeps their judgment sharp, and the best technical leaders I know still build something every week. The goal is to choose what they build.

### Keep the leader off the critical path

Prototypes, spikes, internal tools, and investigations are good leader work. They inform decisions without making the team wait on the leader's output. Core product features with deadlines are not, because the first week the leader is pulled into a board meeting, the feature stalls.

### Protect decision time explicitly

Put the architecture review, the hiring loop, and the vendor check-ins in the calendar first and code in what is left, not the other way round. A simple rule that works: no feature work until the week's pending decisions are written down and made.

### Review the leader's code like anyone else's

Make it normal for an engineer to block the CTO's change. If that feels awkward, the team has a bigger problem than code quality.

### Decide whether you need a builder or a leader

Sometimes the honest answer is that your technical cofounder is a superb builder and does not want to manage. That is fine, and it is common. It means the leadership work needs another owner, whether that is a lead engineer, a VP of Engineering, or part-time senior help. [CTO or VP of Engineering](/post-cto-or-vp-engineering) and [when your dev team needs its first lead](/post-when-to-hire-engineering-lead) cover that choice in more depth.

## Where outside help fits

When a CTO wants to keep building, a fractional CTO can take the slices of leadership that are slipping, the decision log, the hiring loop, vendor oversight, the board's technical questions, without trying to replace the builder. I have done this alongside technical cofounders who are better coders than I am. They kept the code; I took the parts of the job they were happy to let go of. If you are not sure which parts are slipping, a [technical teardown](/teardown) is a quick way to see the state of decisions, review, and risk from outside. My terms are on the [pricing page](/pricing), and if this pattern sounds familiar, [book a call](/book-a-call).

## FAQ

### Should a startup CTO still write code?

Yes, especially on small teams. Up to roughly four to six engineers, a hands-on CTO is often the right shape. Beyond that, the CTO should code selectively, off the critical path, while protecting time for decisions, hiring, and review.

### Why are engineering leaders coding more in 2026?

AI coding tools have removed most of the friction that used to stop leaders from coding between meetings. LeadDev's 2026 report found 37 percent of engineering leaders doing more hands-on work than the year before.

### How do I know if my CTO is coding too much?

Look at pending decisions, the depth of review on their changes, the state of open hires, and whether the team could ship without them for two weeks. Commit counts tell you little.

### What if my technical cofounder does not want to manage?

That is common and workable. Keep them building and give the leadership work an explicit owner, such as a lead engineer, a VP of Engineering, or a fractional CTO.
