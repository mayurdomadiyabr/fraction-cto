---
title: Meta bought Conductor. Where does your agent work actually live?
slug: coding-agent-tool-shutdown-where-work-lives
date: '2026-11-09T04:12:55.750Z'
category: Vendors
excerpt: >-
  An AI coding tool can shut down in sixteen days. The code survives. The
  decisions, automations and access inside the tool may not.
description: >-
  Conductor's cloud shuts down Nov 20 after Meta's deal. What lives only inside
  agent tools, a 16-day exit plan, and the rule that prevents it.
author: The founder of Fraction
readTime: 7
draft: false
---

If an AI coding tool you depend on shuts down, the code is rarely what you lose. You lose what lived only inside the tool: agent conversations that explain why something was built, scheduled routines, webhook triggers, and the access you granted it. The fix is a simple rule: your repository and your own systems are the record, and the agent tool is a workbench you can replace in a week.

This became concrete on November 4, 2026, when Conductor, a startup that runs several AI coding agents in parallel, announced it had been acquired by Meta. According to [InfoWorld's coverage](https://www.infoworld.com/article/4245065/meta-acquires-conductor-as-ai-coding-shifts-toward-multi-agent-development.html) and the company's own notice, new sign-ups stopped that day, cloud workspaces go read-only on November 13, and the cloud service shuts down on November 20, when user data starts being deleted. The local desktop app stays available until early 2027. That is a sixteen-day window from announcement to deletion for the cloud product.

I am not writing this because Conductor did anything unusual. Acquisitions that end with a product being wound down are normal, and a clear timeline with an export path is the better version of this story. I am writing it because most small teams I talk to could not tell you, today, what they would lose if their agent tool disappeared in two weeks.

## What actually lives inside an agent tool

When founders think about vendor risk, they think about the code. With modern coding agents, the code is usually the safe part, because the agent commits it to your Git repository like any other contributor. The risk sits in everything around the code.

### Conversations that are your only design record

A lot of decisions now happen in agent chats. An engineer asks the agent to compare two approaches, the agent explains the tradeoff, the engineer picks one, and the code lands. The commit says "add retry logic". The reason it was built that way lives in a chat history hosted by a vendor. I covered the general version of this in [your AI wrote the code and nobody wrote down why](/post-ai-code-no-paper-trail). A shutdown turns that slow problem into a deadline.

### Automations nobody wrote down

Agent platforms increasingly run things on their own: routines on a schedule, jobs triggered by a webhook when a ticket is created, agents that open pull requests overnight. These are real pieces of your engineering process, but they are configured in a vendor dashboard, not in your repo. When the service stops, they stop silently, and nobody notices until the work they used to do piles up. The same failure shows up with ordinary jobs, as in [background jobs that fail and nobody finds out](/post-background-jobs-fail-silently).

### Access you granted and forgot

To be useful, an agent tool usually holds tokens: write access to your repositories, maybe your issue tracker, maybe a cloud account or an AI provider key. When the tool goes away, those grants do not revoke themselves. A shutdown or an acquisition is exactly when you should know where every token is. The broader version is in [every AI agent you add is a hire you never offboard](/post-ai-agent-offboarding) and [you gave your AI agents the keys and nobody scoped them](/post-ai-agent-access-scope).

### Workspace state and configuration

Prompts, project instructions, custom rules, and setup scripts that make the agent work well for your codebase often live in the tool. Rebuilding them from memory is slow and loses the small lessons your team learned the hard way.

## A 16-day exit plan, if you are in one now

If you use a tool that has announced a shutdown, here is the order I would work in. It applies to Conductor users this week and to whatever tool is next.

1. **Day 1: inventory.** List every workspace, routine, webhook, and integration in the tool, and who owns each. Write it down outside the tool.
2. **Day 1: revoke and re-scope.** List every token the tool holds. Plan to revoke all of them on the last day, and revoke anything unused right now.
3. **Days 2 to 4: export.** Use the vendor's export or local-app path for anything you need. Do not wait for the read-only date; exports get slower and buggier as deadlines approach.
4. **Days 2 to 5: rescue the decisions.** Skim the agent conversations for the last few months of significant work. Where a chat holds the reason for an architectural choice, copy a short summary into the repository, a decision log, or the pull request description.
5. **Days 5 to 10: replace automations.** For each routine or webhook, decide whether to rebuild it in another tool, move it into your own CI, or drop it. Some will turn out to be unnecessary, which is a useful finding.
6. **Days 10 to 14: run the replacement in parallel.** Make sure the new setup does the jobs the old one did, and that someone is alerted if it does not.
7. **Final days: revoke everything** the old tool held, and confirm in each connected service that the grants are gone.

For a small team, this is a few days of work spread over two weeks. It is a lot more painful if it starts on day fourteen.

## The rule that prevents most of this

The underlying problem is not this vendor or this acquisition. It is that agent tools quietly became systems of record for things that should live with you. The fix is to decide, as a team, what the record is.

My rule for early teams is short:

- **Code, tests, and configuration live in your repository.** That includes agent instructions, prompt files, and rules files. If the agent needs them to work well, they are part of your codebase.
- **Decisions live in your repository or your docs.** Any decision worth remembering gets a two-line note in the pull request or a decision log. The agent chat is a scratchpad.
- **Automations live in systems you control.** If a routine matters, define it in your own CI or scheduler, or at minimum keep its definition in the repo so it can be rebuilt.
- **Access is listed in one place.** Keep a short list of every tool that holds a token to your systems, what scope it has, and who added it.

With that in place, switching agent tools is an inconvenience, not an incident. That matters because the market is moving fast and you will switch, as I argued in [your AI coding tool will change within a year](/post-ai-coding-tool-churn).

## What to ask before you adopt the next agent tool

None of this means avoiding newer tools. Some of the most useful ones come from small companies. It means asking a few questions up front:

- Where does our data live, and can we export all of it in a usable format?
- Can the tool run with our repository as the source of truth, rather than keeping its own copy of state?
- What tokens does it need, and can they be scoped to the minimum?
- If the company is acquired or shuts down, what notice and export path do they commit to?
- Can we define its automations in files we keep?

These are the same questions you would ask about any critical vendor, covered more generally in [a critical vendor just got acquired](/post-critical-vendor-acquired). Agent tools deserve them because they increasingly hold write access to your most important asset.

## Is this a diligence issue?

It can be. Investors and acquirers increasingly ask how a team uses AI in development and what guardrails exist. A team that can say "our agent instructions, decisions, and automations are in the repo, and here is the list of tools with access" gives a much better answer than one whose process lives in a dashboard. If you are preparing for a raise, this fits naturally in [the technical half of your data room](/post-technical-data-room).

## FAQ

### Will we lose our code if an agent tool shuts down?

Usually not, if the agent committed to your Git repository. Check for work that was never pushed, such as open branches or uncommitted workspace changes inside the tool, and push or export it first.

### Should we avoid tools from small startups?

No. Small vendors are often where the best ideas are. Adopt them with an exit path: repo as source of truth, scoped access, and automations you can rebuild.

### How do we keep decisions without copying every chat?

Only save the reasons for choices someone will ask about later, in two or three lines, in the pull request or a decision log. Most chat history has no lasting value.

### Who should own this on a small team?

Whoever leads engineering, even part-time. If that is nobody yet, it is one of the first things a fractional CTO should set up.

If you want a review of where your engineering process actually lives and what a tool shutdown would cost you, a [technical teardown](/teardown) covers it. You can also see how we work on [pricing](/pricing) or [book a call](/book-a-call).
