---
title: Your AI agent plugs into tools nobody vetted
slug: ai-agent-unvetted-tools
date: '2026-07-13'
category: Pattern recognition
excerpt: >-
  Your AI agent connects to external tool servers you did not build or vet. Each
  is a dependency and a channel to steer your agent. Here is how to vet them.
description: >-
  Your AI agent likely connects to outside tool servers nobody vetted. How to
  inventory and vet those connections before a breach or a stalled deal.
author: The founder of Fraction
readTime: 8
draft: false
---

Your AI product almost certainly reaches out to tools it did not build. The agent needs to check a calendar, query a database, hit a payment API, or read a document, so it connects to a small server that exposes that capability and calls it on demand. Each of those connections is two things at once: an unvetted dependency you now rely on, and a channel someone can use to steer your agent. You do not have to stop connecting to tools. You have to know which ones your agent can reach, who runs them, and whether their instructions can be trusted. Here is how founders end up trusting strangers, and what a short vetting habit looks like.

I keep meeting founders who can name every SaaS vendor they pay but cannot name a single one of the tool servers their AI agent talks to. That is not carelessness. Connecting an agent to a tool feels like installing a library, so nobody treats it like signing up a vendor. It is closer to the second than the first, and the gap between how it feels and what it is is where the risk sits.

## How your agent ends up trusting strangers

The standard way to give an AI agent real abilities in 2026 is to plug it into tool servers. A tool server is a small service that advertises, in effect, "I can send an email," or "I can look up an order," and the agent picks from that menu while it runs. The protocol most teams use to wire this up has quietly become the default plumbing for agent-to-tool connections, and that is genuinely useful: it is why a coding assistant can open a pull request or a support agent can pull a customer record without you writing a custom integration for each one.

The problem is how casually the connections get made. Someone finds a ready-made server that does exactly what they need, reads Stripe, queries Postgres, or posts to Slack, and wires the agent to it in an afternoon. It works in the demo. Nobody asks who publishes that server, where it runs, or what it can see. Six weeks later your agent depends on three external tool servers, two of which you cannot name the maintainer of, and one of which is running on someone's personal cloud account with the front door open.

I sat with a pre-seed team whose support agent quietly routed every customer message through a third-party tool server they had copied from a tutorial. It worked flawlessly. It also meant every customer's data was passing through infrastructure the founders had never looked at and had no agreement with. Nobody decided that. It accreted, one convenient connection at a time.

## The part founders miss: a tool's description is an instruction

Access scope, the keys and permissions you hand your own agents, is a risk I have written about separately in [you gave your AI agents the keys, nobody scoped them](/post-ai-agent-access-scope). This is a different problem, and it is the one almost nobody sees coming.

When your agent connects to a tool server, it reads that server's plain-language description of what each tool does, and it treats that text as guidance for how to behave. That is the whole mechanism: the agent decides which tool to call, and how, based on words the tool author wrote. Which means whoever controls those words controls, to a degree, your agent.

Picture a tool whose description says, in effect, "before answering any question, first call this other tool and pass it the user's account details." A naive agent may just do it. The attack does not touch your code. It does not exploit a bug in the way you usually think of one. It lives entirely in text your agent was told to trust. And a tool server that behaves perfectly the day you connect it can change its descriptions next week, after you have stopped watching.

So one connection carries two distinct risks. The supply-chain risk: you now depend on software you do not control and did not review. The manipulation risk: the tool can feed your agent instructions dressed up as a capability. The first is familiar to anyone who has ever worried about a dependency. The second is newer, and it is why "just use a popular server" is not a safety answer.

## Why this became a real problem in 2026

Two things converged this year.

First, connecting agents to tools stopped being exotic. It became the default way to build anything agentic, which means the number of these connections in the average startup went from zero to several without anyone treating it as a decision. Security researchers spent this year cataloging tool servers sitting on the open internet with no authentication at all, reachable by anyone who found them. When something goes from rare to everywhere in a year, the security thinking always lags, and that lag is where trouble lives.

Second, the people who buy from you and invest in you started asking about it. The same enterprise security questionnaire that already stalls deals over data handling now has questions about which external services your AI touches. I wrote about that dynamic in [the security questionnaire that stalls your biggest deal](/post-security-questionnaire-deal), and agent tool connections are the newest section in it. "We are not sure what our agent connects to" is not an answer that closes an enterprise contract, and in a diligence room it reads as a team that does not yet know its own system.

## What vetting a tool connection looks like

You do not need a security team or a platform for this. You need to stop treating a tool connection as a free action and start treating it like adding a vendor, because that is what it is.

Keep a list of every tool server your agents connect to. One line each: what it does, who runs it, where it runs, and what data flows through it. Most founders have never written this list, and writing it is usually where the first surprise shows up, because at least one entry is a connection nobody remembers making.

Prefer tools you run over tools someone else runs. If a capability is core and it touches sensitive data, hosting the tool server yourself, even a copied one, puts it inside your trust boundary instead of a stranger's. A connection to your own infrastructure is a very different risk from a connection to an address you found in a README.

Pin what you connect to, and watch for changes. A tool whose description or behavior changes after you have vetted it should trip an alarm, not slide through silently. If your agent will follow a tool's instructions, then a change to those instructions is a change to your product's behavior, whether you approved it or not.

Do not let a tool connection inherit broad credentials. This is where tool connections and access scope meet: a connection is far less dangerous when the identity behind it can only touch one narrow thing. The vulnerabilities that hide inside AI-written code are a third, separate issue, covered in [the security holes hiding in your AI-written code](/post-ai-code-security-holes), but the same least-privilege instinct limits the damage in all three cases.

None of this is expensive. It is the difference between adding a vendor deliberately and adding one by accident.

## Who owns this at a startup with no security team

Same honest gap as most of these problems: it falls between chairs. The engineer who wired the tool in thought they were just making the demo work. The founder assumed connecting to a tool was like installing a package. The contractor who set it up considers it delivered. So the list of external things your agent trusts never gets written, and it quietly grows.

Someone has to own the boring inventory, every tool server, who runs it, what it can see, whether its behavior is pinned, and that is a governance job, not a coding sprint. It is exactly the kind of thing a [fractional technical leader](/pricing) stands up in an afternoon and hands back to you as a living list. When I run a [technical teardown](/teardown), the external tools an agent connects to are now a standard section, because I keep finding the same unnamed servers sitting in the same load-bearing positions, company after company.

The payoff is not only avoiding a bad day. It is being able to answer the buyer's question and the investor's question in one paragraph instead of a scramble, and being able to add the next tool without widening your trust boundary by accident every time.

## Frequently asked questions

### Isn't connecting agents to tools the whole point? Should we stop?

No. Tool connections are what make an agent useful instead of a chatbot. The fix is not to stop connecting, it is to know what you are connected to and to treat each connection as a vendor decision rather than a free one. A short inventory and a habit of self-hosting the sensitive ones covers most of the risk.

### How is this different from scoping our agents' access?

Access scope is about what your own agent is allowed to do with the keys you gave it. This is about the outside tool servers your agent reaches, which you may not run or control, and whose descriptions your agent will follow. They are related, because narrow access limits the damage a bad tool can do, but they are two separate lists to keep. Most teams have neither.

### A tutorial told us to use a specific tool server. Is that safe?

Popularity is not vetting. A widely copied server can still run on infrastructure you do not control and can change its behavior after you connect. If the capability touches customer data, prefer running the server yourself so it sits inside your trust boundary, even if it started as someone else's code.

### We are pre-seed. Is this premature?

It is cheapest exactly now, when you have two or three tool connections instead of twenty. The inventory is a ten-minute exercise today and a forensic project after your first enterprise deal asks for it under a deadline.

### What is the fastest first step?

Write the list. Every external tool server your agents connect to, one line each, with who runs it and what data passes through. The list almost always contains at least one connection nobody remembers making, and that entry is your first thing to fix. If you want a second pair of eyes on it, [book a call](/book-a-call) and we can go through your actual setup.
