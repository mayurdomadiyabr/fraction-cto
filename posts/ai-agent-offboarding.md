---
title: Every AI agent you add is a hire you never offboard
slug: ai-agent-offboarding
date: '2026-08-12T14:30:00.000Z'
category: Pattern recognition
excerpt: >-
  You offboard people when they leave. You spin up AI agents, hand them live
  keys, and never turn a single one off. A year later you cannot list who works
  for you.
description: >-
  AI agents get live access to your systems and never get offboarded. Where that
  missing roster hurts, and how to keep track of your digital workers.
author: The founder of Fraction
readTime: 8
draft: false
---

Every AI agent you wire into your business gets a login. It reaches into your code, your database, your payment provider, your email, maybe your cloud account. That login is a real credential with real reach. The problem is that, unlike a person you hire, nobody writes down that the agent exists, nobody rotates its key, and nobody removes it when the experiment that created it is over. A year into building this way, you are running a dozen or more of these digital workers, each with standing access to something that matters, and you cannot produce a list of who they are or what they can reach. The fix is not to stop using agents. It is to treat every one of them as a hire, with a name, an owner, and a date you turn it off.

I run into this the way I run into most quiet problems, which is late. A founder is filling out a security questionnaire for their first real enterprise customer, or getting ready for a raise, and one question stops them cold: list every account with access to production, and who owns it. They start writing, and the list will not end. There is the founder's own key, the one the first agent borrowed, the one a contractor set up for a tool nobody uses anymore, three or four service accounts named things like "temp" and "test-do-not-delete." None of it was decided. It accumulated, one agent at a time, and now it is a document they cannot honestly complete.

## The worker you onboarded and never took off the payroll

When you hire a person, there is a process, even at a five-person startup. Someone gets added to the tools, someone knows they are there, and when they leave, someone turns their access off. It is not always clean, but it has a shape: an identity, an owner, a start, and an end.

An AI agent skips all of that. You spin one up on a Tuesday to try something, you give it a key so it can actually do the work, and it starts running. There is no record, no start date, no manager. When the experiment ends, or you move on to a newer tool, the agent stops being used but its access does not stop existing. The key is still valid. The account is still there. You never decided to keep it, the same way you never decided to make it a standing part of your business. It just never got turned off, because turning it off was nobody's job.

Multiply that by every agent, every tool, and every "let me just give it access so it works" moment across a year, and you get a workforce you never hired on purpose. Some of these workers are doing real jobs. Some have not run in months but could, today, with the keys they still hold.

## Why an agent is worse than a forgotten contractor

Every startup has some version of this with people: the contractor whose access nobody revoked, the co-founder who left with a login still live. Agents make the same problem worse in three specific ways, and it is worth knowing why, so you take it more seriously than the human version.

First, there are far more of them, and they arrive faster. You would notice if you had hired forty people. You do not notice forty agents and service accounts, because each one felt like a small technical step, not a hire.

Second, they hold more than a person in the same role would. To be useful without a human clicking approve on every action, an agent usually gets broad, standing access to the exact systems that matter most: the database, the deploy pipeline, the money. A junior contractor would never get keys that wide. An agent gets them because narrow keys make it stop and ask, and the whole point was to not have to babysit it. That is the same tradeoff I wrote about in [scoping what each agent is allowed to touch](/post-ai-agent-access-scope), seen from the other end. This post is not about how wide one agent's access is. It is about how many of these access-holders exist, and whether anyone is keeping the list.

Third, an agent's credential does not age visibly. A person who leaves is gone, and you feel the absence. A dormant agent key sits in a config file or a secrets store looking exactly like an active one. There is nothing to remind you it is there. It is the quietest kind of open door, and it stays open until someone goes looking, which is usually after something has already gone wrong.

## Where the missing roster sends you the bill

None of this hurts while you are heads-down building and you are the only one who touches anything. It sends the bill at three predictable moments, and by then it is expensive.

The first is the enterprise sale. The moment you sell to a customer with a real security team, you get [a questionnaire that stalls the deal](/post-security-questionnaire-deal), and one of its plainest questions is who and what has access to the data. "We are not entirely sure" is not an answer that closes a contract. The work you skipped for a year gets compressed into a panicked weekend while a deal sits and waits.

The second is an incident. A key leaks, or an agent does something it should not have, and the first questions are what this identity could reach and whether you can shut it off without breaking the product. If you do not know which agents exist or what each one holds, you cannot answer quickly, and every minute of not-knowing is a minute the door stays open. This is the same family of exposure as [the live secrets sitting in your git history](/post-secrets-in-git-history-diligence): a working credential nobody is tracking, waiting for the wrong person to find it.

The third is diligence. A technical reviewer at your raise will ask how you manage access, and the honest state of a dozen unowned agent identities reads as exactly what it is: a team that has lost track of who can touch its own business. It does not sink a round by itself, but it adds to the picture of a product nobody is fully in control of, which is the picture a raise exists to disprove.

## What to actually do about it

You do not need a security team or a new tool for this at your stage. You need to treat agents like the hires they are. A few habits carry most of the weight.

Keep a roster. One plain list: every agent and service account, what it is for, what it can reach, and who owns it. If you cannot write that list today, that is the finding. It should take an afternoon, and it is the single most useful hour you will spend on this.

Give each agent its own identity. Do not hand agents your personal key or one shared master login. When each has its own, you can see what it did, and you can turn one off without turning everything off. A shared key is one you can never safely revoke, because you do not know what breaks when you do.

Set an end date when you create one. The moment you give an agent access, decide when that access expires or gets reviewed. Access that has to be renewed disappears on its own when the experiment ends. Access that lasts forever by default is exactly how you got here.

Offboard on a schedule. Once a quarter, walk the roster and turn off anything that has not earned its keep. This is the step everyone skips, and it is the whole game. A hire you never review is a hire you never really manage.

None of this slows you down in a way you will feel, and none of it requires you to be technical. It requires you to admit that every agent you turn on is a standing part of your business until you decide otherwise, and to keep a list of the ones you turned on. The teams that stay healthy through the next couple of years will not be the ones that used the fewest agents. They will be the ones who could always answer, on a moment's notice, exactly who was working for them.

## FAQ

### How is this different from just scoping what an agent can access?

Scoping is about how much power one agent has. This is about how many powered agents exist and whether anyone is tracking them. You can scope every agent perfectly and still end up with forty of them, half forgotten, each holding a live key nobody remembers issuing. Scoping limits the blast radius of a single identity. A roster is how you know the identity is there at all. You need both, and most early teams keep neither.

### We are pre-seed and it is just me. Is this premature?

The roster is cheapest to keep when the list is short, which is right now. The founders who get hurt are the ones who let a year of agents and keys pile up, then have to reconstruct the list under deal or incident pressure. Writing down each agent as you create it costs seconds. Reverse-engineering a year of undocumented access costs a weekend you will not have when the demand lands.

### How do I know if I already have this problem?

Try to write the list from memory right now: every agent, tool, and service account with access to anything that matters, and who owns each one. If you reach the end easily, you are fine. If you keep remembering one more, or you hit an account you cannot explain, you have found the gap while it is still cheap to close. If you want an outside read on where your access has sprawled, that is part of what a [teardown](/teardown) looks at, and it is a good reason to [book a call](/book-a-call) before a customer or an investor asks the question first.
