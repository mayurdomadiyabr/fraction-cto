---
title: Your commit history is a diligence document too
slug: commit-history-diligence
date: '2026-08-15T09:30:00.000Z'
category: Fundraising
excerpt: >-
  Diligence does not just read your code. It reads how your team writes it: who
  commits, how often, and what the history says about bus factor and real
  velocity.
description: >-
  What a technical diligence reviewer learns from your git commit history:
  velocity, bus factor, review discipline, and the story your code cannot hide.
author: The founder of Fraction
readTime: 5
draft: false
---

Most founders think a technical reviewer reads their code. Reviewers do, but they read something else first that founders never think about: the commit history. Every merge, every author name, every gap and every 3am force-push is a record of how your team actually works, written by the team itself, impossible to dress up for the meeting. A reviewer can learn more from a month of git log than from an hour of you describing your process.

I look at commit history early in any teardown because it is the one artifact nobody curated. The deck is polished, the architecture diagram is clean, and the git history is the truth underneath both.

## What the history reveals that a call cannot

A diligence call is a performance. The commit log is behavior. Reviewers use it to check whether what you said on the call matches what the team actually did.

### Who really writes the code

The author distribution answers the question investors care about most quietly: bus factor. If ninety percent of meaningful commits come from one person, the reviewer now knows your entire product lives in one head, no matter what the team slide claims. That is not a small note in the report. It is the [key-person codebase risk](/post-key-person-codebase-risk) that funds price into the deal or make a condition of it. The fix is not to rewrite history. It is to have spread real ownership months earlier, so the log shows more than one person who can carry the system.

### Whether code review actually happens

Investors ask how a team ships software as a proxy for engineering culture, and the commit history answers it without anyone speaking. Do changes merge through pull requests with a second name approving, or does everything land straight on main from one account? A history of reviewed merges signals a team that catches its own mistakes. A history of direct pushes to main signals a team that does not, and a reviewer will assume the code quality reflects that. The pattern of how work lands is itself the finding.

### Real velocity, not the velocity you claimed

Commit cadence tells the reviewer whether your pace is steady or a series of heroic all-nighters before demos. A flat, consistent rhythm of small merges reads as a sustainable team. Long silences punctuated by enormous single commits read as a team that either stalled or is squashing away evidence of chaos. Reviewers have seen both and they can tell the difference. If your real story is that you slowed down for a good reason, say so in your memo rather than letting the log imply you stalled.

## How to make the history tell the right story

You cannot and should not fake a commit history. You can make sure the true one is legible, and you can fix the things that will read badly before anyone looks.

### Clean the history that is safe to clean

The one part of history worth actively cleaning is secrets. A credential committed two years ago is still in the log, and a reviewer running a basic scan will find it. Purge them and rotate the keys before you grant access, because a live secret in the history is a finding that travels straight to the security section of the report. That is the specific work in dealing with [secrets in your git history before diligence](/post-secrets-in-git-history-diligence), and it is a different job from rewriting who did what, which you should not touch.

### Spread ownership before the log gets read

If the history shows a single author, the honest fix takes months, not days. Pair people on the critical systems, route work through review, and let real second and third contributors accumulate in the log. A reviewer looking at six months of shared ownership sees a resilient team. There is no shortcut for this the week before diligence, which is the argument for treating bus factor as a standing problem, not a diligence problem.

### Explain the gaps before they are inferred

If there is a three-month silence because you pivoted, or a giant migration commit because you moved off a framework, write that into your technical narrative. A reviewer who has the explanation reads the log with it. A reviewer who does not fills the gap with the worst plausible story. Getting ahead of it is the same discipline as walking into a diligence call having already surfaced your own weak spots, which keeps your engineer from getting cornered and [contradicting you in the diligence call](/post-engineer-contradicts-founder-diligence).

The commit history is the one diligence document you have been writing every day without thinking of it as one. The founders who come through clean are the ones who made it legible and spread the ownership long before a reviewer ever ran git log. If you want to know what your history will say about your team before a fund reads it, that is part of what a [technical teardown](/teardown) surfaces.

## FAQ

### Should I rewrite my git history before diligence?

Only to remove secrets, and even then you rotate the exposed keys as well. Do not rewrite authorship or squash away the real timeline. Reviewers can often tell, and a history that looks scrubbed raises more suspicion than an honest messy one.

### What if one person really did write everything?

Then the bus factor finding is real, and the answer is to start fixing it now by spreading ownership, not to hide it. In the meantime, name it in your memo with a concrete plan to distribute knowledge. A known, addressed risk is far weaker as a finding than one the reviewer discovers.

### Does a messy commit history kill a deal?

Rarely on its own. Reviewers expect early-stage repos to be imperfect. What hurts is a history that contradicts your story, shows no review discipline, or exposes a single point of failure you never mentioned. Consistency between what you say and what the log shows matters more than tidiness.
