---
title: 'Roles and permissions: build them, or adopt an engine?'
slug: build-permissions-or-buy
date: '2026-10-07T02:44:12.571Z'
category: Decisions
excerpt: >-
  Admin and member is a function. Sharing, custom roles, and hierarchies are a
  system. When homegrown permission checks become a risk.
description: >-
  Build authorization in-house or adopt an engine like OpenFGA? When simple role
  checks are enough and when they become a security risk.
author: The founder of Fraction
readTime: 5
draft: false
---

Most B2B products launch with two roles: admin and member. Then a large customer asks for a "viewer" role. Then someone wants to share one project with a contractor but not the rest of the account. Then sales promises a prospect "custom roles" to close a deal. A year later, permission checks are `if user.is_admin or user.id == project.owner_id or ...` scattered across two hundred files, and nobody can say for sure who can see what.

Short answer: build simple role checks yourself, but build them in one place from day one. Consider an authorization engine or service only when customers need resource-level sharing, custom roles, or permissions that follow a hierarchy such as organisation, team, project, document. Those are the points where homegrown checks stop being simple and start being a security risk.

## What you are deciding

Authentication answers "who is this user." Authorization answers "what is this user allowed to do to this thing." Founders usually buy authentication, and should; see [why building your own auth is rarely worth it](/post-build-your-own-auth). Authorization feels more like business logic, so teams build it by default. Often that is fine. The trouble is that it grows one exception at a time, and every exception is a place where a customer could see another customer's data.

There are roughly three levels of complexity:

1. **Fixed roles.** Admin, member, maybe viewer. Each role has a set list of actions. A small table and a helper function handle this well.
2. **Roles scoped to resources.** A user is an editor on project A and a viewer on project B. Permissions now depend on the relationship between a user and a specific object.
3. **Relationships and hierarchy.** Access flows down from organisation to folder to file, through groups and shared links, with custom roles defined by the customer. This is the problem Google described in its 2019 Zanzibar paper, and it is what engines such as OpenFGA, an open-source project now hosted by the CNCF, and SpiceDB were built to model.

Level one is a build. Level three is almost always a buy or adopt. Level two is the judgment call.

## Build the first version properly

Even at level one, two habits separate a cheap migration later from a painful one.

### Put every check behind one function

Write a single `can(user, action, resource)` function and call it everywhere. Never check `user.role == "admin"` inline in a controller. When requirements change, you change one function, and you can test it exhaustively. Inline checks are how products end up with an admin page protected and its API endpoint not.

### Check on the server, every time

Hiding a button in the UI is not authorization. Every API endpoint and every background job that touches customer data must ask the same function. I still regularly find early products where the front end hides an action and the API happily performs it for anyone who calls it directly. AI-written code makes this more common, not less; see [the security holes AI code tends to leave](/post-ai-code-security-holes).

## Signals it is time to adopt an engine

### Customers want to share individual objects

The moment a user can share one document with someone outside their team, you have per-object relationships. You need to answer "list everything this user can see" quickly, which is a different and harder query than "can this user see this one thing."

### Sales wants custom roles

Custom roles mean customers define permission sets you did not anticipate. Hard-coded role checks cannot express that. You need permissions as data, with a model your code evaluates.

### Enterprise buyers ask how access works

Security questionnaires increasingly ask about least privilege, access reviews, and audit logs of permission changes. If the honest answer is "it is spread through the code," you will lose time in every [security questionnaire](/post-security-questionnaire-deal) and possibly the deal.

### Bugs keep showing up in permission logic

Two or three incidents where a user saw or changed something they should not have is the clearest signal. Each one is a trust problem with a customer, and some are reportable.

## Adopt, buy, or keep building

When you hit level two or three, there are three paths:

- **Adopt an open-source engine** such as OpenFGA or SpiceDB and run it yourself. You get a proven model and no license fee, and you take on running another stateful service.
- **Buy a managed authorization service.** Several vendors sell hosted fine-grained authorization, some built on the same open-source engines. You pay for not running it.
- **Keep building**, but deliberately: write a proper policy model, a relationship table, and tests for every role and action combination. This can be right if your rules are unusual and stable.

What I steer founders away from is the fourth, unspoken path: adding one more `or` clause each sprint until nobody understands the rules.

The migration cost from your homegrown checks to any engine is driven almost entirely by how scattered your current checks are. That is why the single `can()` function matters so much. With it, migration is mostly writing a model and swapping the function body. Without it, it is an audit of every file.

## A practical sequence

1. Today: route every permission check through one function and add tests for it.
2. When the first resource-level sharing request appears: sketch the model on paper, objects, relationships, and inheritance, before writing code.
3. If the model has more than two levels of inheritance or customer-defined roles, run a short trial of an engine against your real model.
4. Decide on cost of running versus cost of buying, not on which is more interesting to build.

If your permission logic has grown into something nobody fully trusts, a [technical teardown](/teardown) maps where the checks live and where they leak. If you are weighing an engine against a rebuild, [book a call](/book-a-call) and we will walk through your model.

## FAQ

### Should a seed-stage startup use an authorization service?

Usually not on day one. Fixed roles behind one well-tested function are enough for most seed products. Adopt an engine when resource sharing, custom roles, or hierarchies arrive.

### Is role-based access control enough for enterprise customers?

Often for the first few. Enterprise buyers mainly want clear roles, least privilege, and an audit trail of changes. Custom roles and fine-grained sharing come later, typically when a customer has many teams inside one account.

### Can we just use our identity provider's roles?

Identity providers are good at who belongs to which group. They are not designed to decide whether a user can edit a specific record in your product. Use their groups as input to your own authorization, not as a replacement for it.

### How do we test permission logic?

Write a table of roles, actions, and resources with the expected allow or deny result, and run every combination against your `can()` function in automated tests. It is tedious once and saves you from the worst class of bugs.
