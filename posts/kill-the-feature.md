---
title: 'The feature you should kill, not maintain'
slug: kill-the-feature
date: '2026-07-01T11:58:10.352Z'
category: Decisions
excerpt: >-
  Not every broken feature deserves a fix. Some deserve a funeral. Deleting the
  right feature is one of the highest-leverage technical decisions a small team
  can make.
description: >-
  How to decide when to kill a feature instead of maintaining it, and why
  deletion is often the cheapest fix a small team has.
author: The founder of Fraction
readTime: 4
draft: false
---

Every backlog has a feature that costs more than it earns. It breaks in a new way each quarter, three customers depend on it, nobody remembers why it works the way it does, and every engineer who touches it loses a day. The team keeps patching it because killing it feels like admitting failure. It is usually the opposite. Deleting the right feature is one of the highest-leverage decisions a small team can make, and it is the one founders reach for last.

The instinct to preserve everything you have shipped is understandable and expensive. Code is not an asset by default. Code you have to maintain, that touches a database migration you are afraid of, that nobody understands, is a liability wearing the costume of an asset.

## Why teams maintain what they should delete

The bias toward keeping features is emotional and organizational, not technical.

### Sunk cost wears a lab coat

"We already built it" is the single worst reason to keep a feature, and it is the most common one. The months you spent building it are gone whether you keep it or kill it. The only question that matters is forward-looking: does the next year of maintenance, bug reports, and blocked refactors cost more than the value the feature still delivers? For a surprising number of features, the honest answer is that you are paying rent on something nobody uses.

### The maintenance cost is invisible on the roadmap

A feature you keep does not show up as a line item. Its cost is smeared across every sprint: the extra branch in the code that slows the next change, the test that flakes, the edge case that eats a support ticket, the migration you cannot run because this one feature depends on the old schema. Because the cost is diffuse, it never gets counted, and the feature survives reviews it should not.

### Killing feels riskier than it is

Deleting code feels irreversible and scary. In practice it is one of the more reversible moves you have, if you do it with a little care. You can dark-launch the removal, keep the code in version control, and watch what breaks. The fear is out of proportion to the actual risk, which is why this decision is a good one to pressure-test the way you would in a [20-minute architecture review](/post-architecture-smells), where dead weight is the first thing worth naming.

## How to tell a kill from a keep

The decision comes down to usage, cost, and strategic fit. Get those on the table and the answer is usually obvious.

### Look at real usage, not the loudest voice

Pull the numbers. How many active accounts touched this feature in the last 90 days? Founders routinely discover that a feature they were terrified to remove is used by four accounts, two of which are internal. Usage data turns a political argument into an arithmetic one.

### Price the maintenance honestly

Add up what this feature actually costs you: engineering time per quarter, support load, and the refactors it blocks. That last one is the sneaky cost. A single legacy feature can hold an entire codebase on an old pattern because it is the one thing nobody wants to migrate. This is closely related to how you [triage technical debt that actually matters](/post-triage-technical-debt): the debt worth paying down first is often attached to a feature not worth keeping.

### Separate strategic from incidental

Some features are load-bearing for the story you are selling even if usage is thin, and some are just barnacles. A feature that three enterprise deals depend on is strategic even if only three accounts use it. A feature that exists because a former employee liked it is incidental. Be honest about which is which, and do not let a strategic-sounding excuse protect an incidental barnacle.

## Killing a feature without breaking trust

Deletion done carelessly burns customers. Done well, it barely registers.

### Announce, deprecate, then remove

For anything customer-facing, give notice, offer a path off it, and remove it on a schedule. The engineering is the easy part. The customer communication is what determines whether a kill reads as decisive or as neglect.

### Delete the code, not just the button

Hiding a feature behind a flag while leaving the code in place gets you the worst of both worlds: users cannot see it, but your team still maintains it, still trips over it, still cannot run the migration it blocks. If you are killing it, kill it all the way down. Half-deletions are how a codebase accumulates the exact kind of drag that makes [the refactor you keep promising never arrive](/post-refactor-that-never-comes).

## FAQ

### How do I kill a feature a paying customer still uses?
Talk to them first, and separate the feature from the outcome they hired it for. Often a customer using a barely maintained feature can be moved to a better path, and is relieved to be. If a single account genuinely blocks the kill, that is a pricing and contract conversation, not a permanent engineering tax on everyone else.

### Isn't deleting code just going to mean rebuilding it later?
Occasionally, and that is fine. Rebuilding a clean version later, with what you have learned, is usually cheaper than carrying a bad version for two years in case you need it. Version control means nothing is truly gone; you can always resurrect the old approach if the need returns.

### Who should make the kill decision?
It needs both a product view and a technical view in the room, because the cost is technical and the value is strategic. If you do not have someone who can weigh both, that judgment call is precisely the kind of thing a [short call](/book-a-call) can unblock before you spend another quarter maintaining something you should retire.
