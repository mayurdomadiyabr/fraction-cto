---
title: Adding engineers to a late project makes it later
slug: adding-engineers-late-project
date: '2026-06-30T12:00:43.905Z'
category: Pattern recognition
excerpt: >-
  When a deadline slips, the instinct is to add people. In the short term it
  almost always pushes the date further out. Here is why, and what to do
  instead.
description: >-
  Why adding engineers to a late project makes it later, and what actually pulls
  a slipping deadline back in.
author: The founder of Fraction
readTime: 5
draft: false
---

A deadline is slipping. The launch was promised to a customer, or a board, or an investor, and the build is two weeks behind with no sign of catching up. The instinct that follows is almost universal: add people. Pull an engineer off another team. Bring in a contractor for a month. Get more hands on it.

I have watched this play out in enough rooms to know the shape of what happens next. For the first month, the late project gets later. Then, if you are lucky, it recovers to roughly where it would have been anyway. The extra people rarely buy back the time you thought they would, and they cost real money while they fail to.

Fred Brooks named this in 1975: adding manpower to a late software project makes it later. Fifty years on, founders still reach for the lever that makes the problem worse. It is worth understanding why, because the reasons tell you what to do instead.

## Why more hands slows a late project down

Three forces work against you, and they compound.

### New people are not productive on day one

Someone joining a codebase they have never seen needs to learn the domain, the architecture, the deployment story, and the unwritten rules about what is fragile. On a mature system that ramp is six to twelve weeks before they are net positive. On a startup with no documentation and a lot of cleverness in the code, it is longer. If your deadline is four weeks out, a new hire will not contribute meaningfully to it. They will contribute to the launch after it.

### The people who onboard them stop shipping

This is the part founders miss. To bring a new engineer up to speed, your most knowledgeable people stop building and start explaining. They answer questions, review unfamiliar code more carefully, and unpick the bugs the newcomer introduces while learning. The exact people you needed heads-down on the critical path are now running a training program. I have seen a team of four lose more than a third of its output for six weeks because two new contractors needed steering.

### Communication cost grows faster than the team

A team of three has three lines of communication. A team of six has fifteen. Every person you add multiplies the coordination tax: more standups, more handoffs, more places for two people to build the same thing or assume the other one did. The work that needs one clear head making decisions does not get faster when five people are in the channel.

## What actually pulls a deadline back in

If adding people is the wrong lever, here are the ones that work.

### Cut scope, out loud

The fastest way to hit a date is to ship less by that date. Most "must-have" launch features are not. Sit with the list and separate what the first customer genuinely needs from what the team assumed they needed. A launch that does three things well beats one that does seven things at 80 percent and is two weeks late. This is the same muscle as deciding which debt to clean up first and which to leave; it is about [triaging what actually matters](/post-triage-technical-debt) rather than treating everything as load-bearing.

### Protect the people who know the system

The engineers who built the thing are your scarce resource near a deadline. Take meetings off their calendars. Have someone else field the customer questions. Do not, under any circumstances, assign them to babysit new hires this week. Their job until launch is to build and to make decisions, and everything else is a distraction you can absorb on their behalf.

### Find the one real bottleneck

Late projects usually have a single constraint, not a general shortage of labor. One unfinished integration that everything else waits on. One person who is the only one who understands the payments flow. One review queue where work piles up. Adding generalists does nothing for a specific bottleneck. Naming it and clearing it does. This is a judgment call about where the system is actually stuck, and it is exactly the kind of call [senior engineering judgment is worth paying for](/post-paying-for-judgment).

## The narrow case where adding people helps

There is one. If the remaining work is genuinely parallel, sits on a separate surface, and needs little context from the existing system, a new person can take it without dragging your core team into onboarding. A standalone marketing page. A self-contained data export. A piece nobody has touched yet that does not interleave with the critical path.

That is the test: does this work require the new person to understand the rest of the system, or can they own a clean corner of it? If it is a clean corner, go. If it threads through everything, you are adding cost and coordination, not speed.

## What to do before the next deadline slips

The deeper fix is upstream. Projects do not slip on the last day; they slip a little every day while everyone reports green. If you cannot see a deadline drifting until it is two weeks gone, that is a leadership gap, not a staffing one, and it is a sign your [team may need its first lead](/post-when-to-hire-engineering-lead) rather than more builders. Knowing when to add capacity, and resisting the urge to do it in a panic, is one of the calls I help founders make. If you are staring at a slipping date right now, [book a call](/book-a-call) before you sign a contractor.

## FAQ

### Does Brooks's law mean I should never grow the team?
No. It is specifically about adding people to a project that is already late. Growing the team during calm periods, when there is time to onboard properly, is how you build capacity. The mistake is using hiring as an emergency brake.

### How many weeks of lost output should I expect when onboarding into a crunch?
Plan for your senior people to lose 20 to 40 percent of their effective output for four to six weeks per new person they onboard. Near a deadline that is a loss you cannot afford, which is the whole point.

### What if the customer will not accept a smaller launch?
Then the honest move is to renegotiate the date, not to pretend more bodies will hold the line. A slipped date you commit to and hit rebuilds trust. A date you miss after promising to "throw resources at it" destroys it twice.
