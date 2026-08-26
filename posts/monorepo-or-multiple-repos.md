---
title: Monorepo or multiple repos for a small team?
slug: monorepo-or-multiple-repos
date: '2026-08-26T02:37:11.182Z'
category: Decisions
excerpt: >-
  Splitting your code across repos too early buys coordination pain you do not
  need. When one repo wins, and when a split finally earns its cost.
description: >-
  Monorepo or multiple repos for an early-stage team? Where the coordination
  cost lands, and when splitting a service out is finally worth it.
author: The founder of Fraction
readTime: 5
draft: false
---

A founder with four engineers asked me last month whether they should move everything into a monorepo because a big company they admire uses one. This is the wrong reason, but it is a real decision, and getting it wrong early creates friction that compounds. Here is how I actually think about monorepo versus multiple repositories for a small team.

The honest answer for most early-stage companies: start with one repository, because you have one product and one small team. That is technically a monorepo, but you should not think of it as adopting a heavyweight monorepo strategy. You are just not splitting yet. The interesting decision comes later, when you have several deployable services or apps, and you have to choose whether they live together or apart.

## What the decision is really about

Monorepo versus polyrepo is not a religious question about tooling. It is a question about where you want your coordination cost to land.

In a single repository holding many projects, a change that spans the frontend, the API, and a shared library can go in one atomic commit and one pull request. Everyone sees the same version of everything. The cost is that your build and test tooling has to get smarter as the repo grows, and without discipline, anyone can reach into anyone else's code and create tangles.

In separate repositories, each service has a clean boundary and its own lifecycle. The cost moves to coordination: a change that touches two services now needs two pull requests, versioned interfaces between them, and a plan for what happens when one is deployed before the other. You have traded internal tangles for cross-repo choreography.

Neither is free. You are choosing which pain you would rather manage.

### For a small team, the monorepo usually wins

At pre-seed to Series A, with a handful of engineers, one repository for everything is usually the right call. The reasons are practical:

- Atomic changes across the stack. When your API and web app move together, one commit keeps them consistent. No "which version of the API does this frontend expect" archaeology.
- One place to set up CI, linting, and formatting. You configure the toolchain once instead of copying it into every new repo and letting them drift.
- Easier refactoring. Renaming a shared function and updating every caller happens in a single change, so the compiler and tests catch what you missed.
- Less onboarding friction. A new engineer clones one thing and has the whole picture.

The failure mode of a small-team monorepo is not the structure, it is letting the boundaries rot. If your services share a database schema and import each other's internals freely, you have not built a monorepo, you have built a distributed monolith with none of the benefits. I wrote about that specific trap in [why a shared database couples your services](/post-shared-database-coupling); the same discipline applies whether the code lives in one repo or ten.

## When splitting into multiple repos earns its cost

Separate repositories start to pay off under specific conditions, not as a default:

- Independent teams with independent release cadences. When one team ships daily and another ships monthly, sharing a repo and a CI pipeline creates contention. Separate repos let each move at its own speed.
- Genuinely separate lifecycles. A public SDK, an open-source component, or a service with a different security and access boundary often deserves its own repo and its own permissions.
- Different languages or ecosystems that share almost nothing. If two projects have no common code and no shared tooling, forcing them together buys you little.
- The monorepo tooling cost has become real. Once your test suite takes so long that people avoid running it, you either invest in build tooling that only tests what changed, or you split. For most early teams, that day is further off than they think.

Notice that every one of these is about scale and organizational structure, not about what is fashionable. If you are two engineers, none of them apply yet.

## Do not over-engineer the tooling

The mistake I see is teams adopting a heavy monorepo build system on day one because that is what large engineering orgs use. You do not need distributed build caching and a graph-aware task runner to manage three projects. Start with the simplest thing your language ecosystem gives you, and add sophistication only when the pain is real. Reaching for big-company tooling before you have big-company problems is a form of [premature scaling](/post-premature-scaling): you pay the complexity cost now for a benefit you will not need for a year, if ever.

## A simple default

If you are choosing today: put it in one repository. Keep clean internal boundaries so services do not reach into each other's guts. Split a service out only when a concrete, repeated pain shows up: a team that needs its own release cadence, a component with a different access boundary, or a build that has genuinely outgrown the single-repo setup. Let the pain justify the split, not the aspiration.

## FAQ

### Should a startup use a monorepo or multiple repos?
Most early-stage startups should keep everything in one repository until a concrete pain forces a split. It gives you atomic cross-stack changes, one toolchain, and easy refactoring. Split out a service only when a team needs an independent release cadence or a component needs a different boundary.

### Is a monorepo the same as a monolith?
No. A monolith is one deployable application. A monorepo is one repository that can hold many separately deployable services or apps. You can have a monorepo full of microservices, or a single monolith in its own repo. If you are weighing the deployable-unit question, that is the monolith versus microservices decision.

### What goes wrong with a small-team monorepo?
The main failure is letting boundaries rot: services importing each other's internals or sharing a database schema, which creates a distributed monolith. The structure is fine; the discipline of clean interfaces is what keeps it healthy.

### When is it finally worth splitting repos?
When you have independent teams with different release cadences, a component with a distinct security or access boundary, or build tooling that has genuinely outgrown a single repo. Until one of those is a real, recurring problem, splitting mostly adds coordination overhead.

Deciding how to structure your codebase as the team grows is one of those calls that is cheap to get right early and expensive to unwind late. If you want a second set of eyes before you commit, you can [book a call](/book-a-call).
