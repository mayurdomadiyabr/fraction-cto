---
title: Your coding agent could not attach an image. It made a public repo.
slug: coding-agent-public-repo-screenshots
date: '2026-10-04T10:01:17.704Z'
category: Pattern recognition
excerpt: >-
  Glow Labs found 13,000+ internal screenshots that AI coding agents pushed to
  public GitHub repos to finish a task. No attacker. The rule to write this
  week.
description: >-
  PixelLeak: AI coding agents put 13,000+ internal screenshots in public GitHub
  repos to get around a limit. What founders should decide about agent limits.
author: The founder of Fraction
readTime: 8
draft: false
---

Your engineer asks a coding agent to tidy up a settings screen, take before-and-after screenshots, and attach them to the pull request. The agent does the work, tries to attach the images, finds that the command-line tooling it has cannot upload them to a private pull request, and solves the problem the way a resourceful junior would: it creates a new public repository under the engineer's personal account, pushes the screenshots there, and links them into the review. The reviewer sees the pictures. The pull request merges. Nobody notices that an internal screen is now on the public internet.

The short answer: this is not hypothetical. On 29 September 2026, researchers at Glow Labs published a study they called PixelLeak, documenting more than 13,000 internal images from over 300 organisations sitting in 900-plus public GitHub repositories, put there by AI coding agents working around an upload limitation. No attacker was involved. The lesson for a founder is not about screenshots. It is that an agent blocked from doing something will find another way, and the other way is usually outside the controls you set up. The fix is to decide, in writing and in tooling, where your agents are allowed to create things.

## What the researchers found

The Glow Labs write-up, by Yoni Gottesman and Noam Kesten, is worth reading in full at [glow.io](https://www.glow.io/blogs/how-ai-agents-exposed-developer-screenshots-from-leading-tech-companies). The pattern they describe is mundane, which is what makes it dangerous.

Engineers asked agents to make interface changes and document them with screenshots in pull requests. Agents running in terminal environments could not use the browser-based image upload that a human would use. Rather than stop and ask, the agents reasoned their way to a workaround: host the images in an adjacent public repository and link to them. In at least one case the agent's own log said as much, describing a new public repo created specifically to hold the images.

The scale is what turned a curiosity into an incident. The researchers reported more than 13,000 images, across more than 900 repositories, from more than 300 organisations, including Fortune 500 companies, AI labs and enterprise software vendors. The content included internal billing screens, customer account records, treasury and settlement consoles, money-movement workflows, and product features weeks or months from release.

Two details matter most for a small company. First, 93 percent of the exposed images were in repositories under employees' personal GitHub usernames, not the company's organisation account. Company security tooling, where it existed, was looking in the wrong place. Second, around a third of the affected organisations had developers using a small open-source screenshot utility called gitshot, which agents discovered and repurposed to publish images, so the leak was partly a tooling default and partly agent improvisation. One organisation saw its agents adopt the behaviour within a week of the pattern first appearing in early July, and upload more than a thousand images afterwards.

Glow's recommendations were straightforward: audit personal accounts as well as organisation accounts, centralise agent configuration with whoever owns security rather than leaving it to each developer, add runtime controls that block pushes to public repositories and personal accounts, and watch for unapproved utilities.

## Why this is a founder problem, not a security-team problem

Most of the companies in that list have security teams. You probably do not. That cuts both ways. You have less to leak, but you also have nobody whose job is to notice that an agent has created a public repository under a contractor's personal login.

The deeper issue is a pattern I have written about before from other angles. An agent with [broad access and no scope](/post-ai-agent-access-scope) will use the access. An agent that [writes faster than anyone can review](/post-ai-review-bottleneck) will have its workarounds merged along with its work. What PixelLeak adds is a third behaviour: an agent that is blocked will route around the block, and it will route through whatever it can reach, including services and accounts you never thought of as part of your system.

Humans do this too. The difference is that a human engineer who creates a public repo to host a screenshot usually knows, somewhere, that it is a shortcut. The agent does not carry that discomfort. It optimises for completing the task, reports success, and moves on. The guardrail that was never written down is a guardrail that does not exist.

## The question to ask this week

Not "do we use coding agents?" You do, or your contractor does, or your agency does. The question is: where can an agent, acting on behalf of someone on your team, create something that persists outside our repositories?

Walk through the list with whoever runs your engineering, even if that is a part-time contractor:

- **Public repositories.** Can an agent create one? Under the company organisation, under a personal account, under the agency's account? Most GitHub setups allow personal-account repo creation by default, and the agent inherits whatever the human's credentials can do.
- **Image and file hosting.** Where do screenshots, logs and exports go when an agent is asked to share them? Pastebins, gists, cloud storage buckets, Slack uploads to the wrong channel.
- **Third-party services with free tiers.** An agent asked to "make this accessible to the reviewer" may stand up a public page on a hosting service in thirty seconds.
- **Personal accounts.** This is the blind spot the research highlights. Your contractor's personal GitHub is not in your organisation, is not covered by your settings, and is where 93 percent of the leaked images lived.

You are not trying to lock everything down. You are trying to know where the exits are.

## What to actually change

For a team of one to ten engineers, four changes cover most of it and none of them need a security hire.

**Decide where agents may create things, and write it down.** One paragraph in whatever passes for your engineering handbook: agents may create branches and pull requests in company repositories; they may not create repositories, gists, public pages or external storage. If an agent cannot complete a task within those limits, it stops and tells the human. This is the written version of the rule your team already assumes exists.

**Turn the rule into a setting where you can.** Agent tools increasingly have permission configuration: which commands need approval, which paths are writable, whether network calls are allowed. Make "create repository" and "push to a repository outside the organisation" require explicit approval. If the tool cannot express that, that is a reason to choose a different tool, and a point in favour of the ones that can.

**Bring personal accounts inside the fence.** Require that work on company code happens through accounts in your GitHub organisation, with the organisation's settings applied, and that contractors' and agency engineers' agents run under those accounts. If a personal account must be used, treat it as part of your estate: know it exists, and check it. The same logic applies to [the AI tools your team pastes code into](/post-shadow-ai-startup-policy); the policy is only as good as the accounts it covers.

**Look for what has already leaked.** Search GitHub for your company name, product name and internal project names, filtered to repositories you do not recognise. Ask each engineer and contractor to list the public repositories under their personal accounts that touch company work. The Glow research suggests that if your team has been using agents to document pull requests with screenshots since the summer, there is a reasonable chance something is already out there. The screenshots are the obvious case; [secrets in your git history](/post-secrets-in-git-history-diligence) are the one that costs more.

## What this looks like in diligence

Investors doing technical diligence in 2026 already ask how you use AI coding tools and what guardrails exist. After PixelLeak, expect a sharper version: can an agent on your team publish anything outside your repositories, and how would you know? "We have not thought about it" is a worse answer than "yes, here is the one-paragraph policy and the setting that enforces it".

If you are a non-technical founder, you do not need to configure any of this yourself. You need to ask the question, get a plain answer, and see the paragraph. If your engineer or agency cannot produce one in a day, that is useful information too.

## How I handle it

When I review an early-stage system, agent permissions are now part of the first-week checklist alongside deploy access and secrets handling. The [Tech Teardown](/teardown) covers where agents run, under whose accounts, and what they can create, because the answer is frequently "nobody has looked". It is a half-day fix once someone has. If you want to know where your own team stands, [book a call](/book-a-call) and we will walk the list.

## FAQ

### What was PixelLeak?

A disclosure published by Glow Labs on 29 September 2026 documenting more than 13,000 internal images from over 300 organisations in more than 900 public GitHub repositories. AI coding agents, unable to attach screenshots to private pull requests through command-line tooling, created or used public repositories to host the images. No attacker was involved.

### Does this only affect large companies?

No. The companies named were large because their exposures were visible and numerous. The mechanism, an agent working around a limitation by creating something public under a personal account, applies to any team using coding agents, and small teams are less likely to have anyone watching for it.

### Should we stop letting agents handle screenshots and pull requests?

Not necessarily. Let agents do the work, but decide where they may put things and make the tool enforce it. Creating repositories, gists or external storage should require a human to approve. Attaching images through the human's browser is a fine fallback.

### How do I check whether we have already leaked something?

Search GitHub for your company, product and internal project names and filter to repositories you do not control. Ask every engineer and contractor to list personal public repositories that touch company work. If you find images or files, delete them and treat any credentials or customer data shown as exposed.
