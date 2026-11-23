---
title: Do you need architecture decision records yet?
slug: architecture-decision-records-yet
date: '2026-11-23T04:16:54.291Z'
category: Knowing when
excerpt: >-
  When a small team should start writing architecture decision records, what a
  useful one looks like, and the five to write first.
description: >-
  When to start architecture decision records (ADRs) in a startup, what goes in
  one, where to keep them, and which five to write first.
author: The founder of Fraction
readTime: 5
draft: false
---

You need architecture decision records once a decision will outlive the memory of the people who made it. In practice that is when your second or third engineer starts asking "why did we do it this way?" and nobody can answer in one sentence. Before that, a short note in the pull request is enough. After that, one page per real decision, kept in the repository, saves you weeks.

The format is not new. Michael Nygard proposed it in a [2011 blog post](https://www.cognitect.com/blog/2011/11/15/documenting-architecture-decisions), and the idea has been widely copied since: a short, numbered document for each significant decision, with the context, the decision, and its consequences. What founders want to know is when it is worth the effort.

## Why early teams lose decisions

Early decisions are made fast, in a call or a chat thread, by one or two people who hold the whole system in their heads. That works until one of three things happens.

### Someone new joins

A new engineer sees a strange choice, a queue where a cron job would do or a second database that looks redundant, and assumes it was a mistake. Without the reason written down, they either waste a week investigating or "fix" something that was deliberate.

### Someone leaves

When the technical founder or first engineer leaves, the reasons leave with them. I see this most when a founder [steps back from the CTO role](/post-technical-founder-stop-being-cto): the code is still there, but the reasoning behind it is gone.

### Someone outside asks

Investors doing diligence, a new fractional CTO, or an acquirer's engineers will ask why key choices were made. "It made sense at the time" is honest but not useful. A short record that shows you considered alternatives reads very differently.

## When to start

I do not recommend ADRs for a solo founder or a two-person team. The overhead is small, but the benefit is smaller. These are the signals that it is time.

### Your team reaches three or four engineers

That is roughly the size where not everyone is in every conversation. Decisions start happening in parallel, and people need a way to see what was settled without asking.

### You make a decision that is hard to reverse

Picking a database, a cloud provider, a multi-tenant model, an authentication approach, or a core framework. These are the [decisions that are expensive to undo](/post-reversible-decisions), and they are exactly the ones worth one page. Reversible choices, like a logging library, usually are not.

### You catch yourself re-debating something

If the same argument comes up for the third time, write it down. The record ends the debate, or makes it a better one, because the next person has to argue with the reasons, not with a memory.

### You are preparing for diligence or a handover

If a raise or a new technical leader is a few months away, writing up the five or six decisions that shaped the system is one of the cheapest preparation steps there is.

## What a useful record looks like

Keep it short. A record that takes more than half an hour to write will not get written.

### The four parts

- **Title and number.** "0007: Use Postgres row-level security for tenant isolation."
- **Context.** What problem, what constraints, what options were on the table. A few sentences.
- **Decision.** What you chose, stated plainly.
- **Consequences.** What gets easier, what gets harder, and what would make you revisit it.

The consequences section is where most of the value is. "We accept slower queries on the largest tenants; revisit if any tenant passes ten million rows" tells a future engineer exactly when the decision stops holding.

### Where to keep them

In the repository, next to the code, as plain Markdown files in a folder like `docs/decisions`. That way they are reviewed in pull requests, versioned with the code, and found by anyone who searches the repo. A wiki works too, but in my experience wiki pages drift faster because nobody reviews them.

### Superseding, not editing

When a decision changes, write a new record that replaces the old one and mark the old one as superseded. Do not rewrite history. The trail of "we chose X, then moved to Y because Z" is often the most useful thing a new engineer can read.

## What ADRs are not

They are not general documentation. Setup guides, runbooks, and API docs are a separate question, covered in [when a startup needs documentation](/post-when-do-you-need-documentation). They are not design specs either. A spec says how you will build something; a decision record says why you chose this approach over the others.

They are also not a process gate. If engineers need approval to write a record, they will stop writing them. Let anyone propose one in a pull request, and let the normal review decide.

## A starting point for this week

If you have none today, do not try to backfill everything. Write records for the five decisions that most shape your system right now: your main database, your hosting, how you handle tenants, how you authenticate users, and your biggest build-versus-buy choice. That is an afternoon of work for whoever knows the history, and it will be the most-read documentation you have.

If you want help deciding which decisions in your system deserve a record, or a review of the ones you have, a [teardown](/teardown) includes that. To talk about how this fits with the rest of your engineering practice, [book a call](/book-a-call).

## FAQ

### How long should an architecture decision record be?

One page or less. If it needs more, the extra detail probably belongs in a design document that the record links to.

### Who should write the records?

Whoever made or led the decision. In a small team that is often the technical founder or a senior engineer. A fractional CTO can write the first batch from interviews if the original authors are gone.

### Do we need a tool for ADRs?

No. A folder of Markdown files and a simple template is enough. Command-line helpers exist, but most early teams do not need them.

### Should we write records for small decisions?

Only if they are hard to reverse or keep getting re-argued. Most small choices are better captured in the pull request description.
