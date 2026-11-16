---
title: 'Do you need a design system yet, or just a component library?'
slug: do-you-need-a-design-system-yet
date: '2026-11-16T02:24:11.767Z'
category: Knowing when
excerpt: >-
  When a startup needs a real design system, what to do instead before Series A,
  and the costs founders underestimate.
description: >-
  When an early startup needs a design system vs a themed component library: the
  signs, the stages, and the hidden costs.
author: The founder of Fraction
readTime: 6
draft: false
---

Most startups before Series A do not need a design system. They need a small, shared component library and a one-page style sheet: colors, type sizes, spacing and the five or six components every screen uses. A full design system, with its own documentation site, versioning and a person who owns it, starts to pay off when two or more teams build UI in parallel and inconsistency is costing you real time or real deals.

The question usually arrives after a designer joins, or after a founder clicks through the product and notices three different button styles on one page. Both are fair triggers to tidy up. Neither is a reason to fund a design-system project.

## What people mean by "design system"

The phrase covers three very different levels of investment, and most arguments about it happen because two people mean different levels.

### Level 1: tokens and a style sheet

A short list of named values: brand colors, a type scale, a spacing scale, border radius, shadows. In code these live in one file (CSS variables, a Tailwind config, a theme object). In design they live in one shared library file. Cost: a few days of a designer and an engineer agreeing on the values and replacing the hard-coded ones.

### Level 2: a shared component library

Buttons, inputs, selects, modals, tables, toasts and the layout shell, built once and reused everywhere. Many early teams get this almost for free by adopting an open-source library such as Radix, MUI or shadcn/ui and theming it with the tokens from level 1. Cost: one to three engineer-weeks to adopt and migrate the most-used screens, in my experience, then a little upkeep.

### Level 3: a design system as a product

Documentation site, usage guidelines, accessibility standards per component, versioned releases, a contribution process, and someone whose job includes owning it. This is what large companies mean. Cost: a meaningful slice of at least one person, permanently.

Levels 1 and 2 are cheap and pay back fast. Level 3 is a headcount decision dressed up as a design decision.

## The signs you need more than a style sheet

These are the patterns I look for before recommending anything beyond level 2.

- **Two or more teams ship UI at the same time.** With one team, consistency is a conversation. With two, it needs a shared artifact or it drifts within a quarter.
- **The same component exists three times in the codebase.** Search for "Modal" or "DatePicker". If you find three implementations with different bugs, you are already paying the cost of not having a library.
- **Enterprise buyers ask about accessibility.** Procurement teams increasingly send accessibility questionnaires or ask for a VPAT. Fixing contrast, focus states and keyboard navigation once in shared components is far cheaper than fixing them per screen.
- **You run more than one product surface.** A web app, a marketing site and a mobile app that should feel like one brand need shared tokens at minimum.
- **Designers hand off screens that engineers rebuild from scratch every time.** If each handoff includes custom spacing and one-off components, the gap is process plus a library, not a bigger system.

If none of these are true, a design system project is very likely polish, not progress. I have written before about the cost of [polishing instead of launching](/post-polishing-instead-of-launching), and an early design system is one of the most respectable-looking ways to do it.

## The signs you do not need it yet

- You have one product team of fewer than about six engineers.
- You are still changing the core workflow every few weeks because you have not found product-market fit.
- Customers complain about missing features, not about inconsistency.
- Your designer is part-time or contract.

In that situation, a design system freezes decisions you have not finished making. Every component you formalize becomes something you have to migrate when the product changes shape, and pre-PMF products change shape a lot.

## What I recommend at each stage

### Pre-seed and seed, one team

Pick an existing component library rather than building your own. Theme it with a small token file. Write a one-page "how our UI works" note: which library, where the tokens live, the rule that new components go in one shared folder. That is the whole system. Total effort is usually under two weeks, and it removes most of the inconsistency founders notice.

If you have not hired a designer yet, read [whether you need a product designer yet](/post-first-product-designer-yet) before spending on this at all. A library with sensible defaults gets a solo engineering team surprisingly far.

### Late seed to Series A, two teams

Keep the open-source base, but give the shared folder an owner, usually a senior frontend engineer spending perhaps 10 to 20 percent of their time on it. Add a review rule: new shared components need a second pair of eyes. Fix accessibility basics in the shared components. This is still level 2, just with ownership.

### Series A and beyond, three or more teams

Now level 3 can be worth it, especially with multiple surfaces or an enterprise sales motion. Even then, I would start with documentation inside the repo before building a separate documentation site, and fund it as a part-time responsibility before making it anyone's full-time job.

## The costs founders underestimate

**Migration.** A new component library is only valuable once old screens use it. Migrating a mature product can take longer than building the library. Plan to migrate the five most-used screens and let the rest move as they are touched.

**Opportunity cost.** Two engineer-months on a design system is two engineer-months not spent on the features in your pipeline. That trade is fine at Series A with ten engineers. It is rarely fine at seed with three.

**Lock-in to your own decisions.** A heavily customized in-house library becomes a thing new hires must learn and you must maintain. An open-source base with light theming ages better.

## How to tell if the work paid off

Pick two or three things to watch before you start, so you are not grading it on vibes:

- Time from approved design to shipped screen, on a few comparable features before and after.
- Number of duplicate components in the codebase, which you can count with a search.
- Accessibility issues found in a basic audit of your top screens.
- Designer and engineer complaints in retros, which sounds soft but is a reliable early signal.

If none of these move after a quarter, stop investing beyond upkeep.

## FAQ

### Is a Figma library the same as a design system?

No. A shared Figma library is the design half of level 1 or 2. It helps, but if engineers do not have matching components in code, the screens will still drift.

### Should we build our own component library from scratch?

Rarely, before Series A. Mature open-source libraries handle accessibility and edge cases that take a long time to get right. Theme one and spend your engineering time on what customers pay for.

### Who should own the design system at a small startup?

A senior frontend engineer with a designer as a partner, as a part-time responsibility. A dedicated owner makes sense once several teams depend on it.

### Does a design system help with fundraising or diligence?

Not directly. Investors look at velocity, quality and risk. A consistent, accessible UI helps sales and retention, which helps the story, but nobody funds a company because it has a documentation site for its buttons.

If you are trying to decide where your next engineering month should go, design system included, a [technical teardown](/teardown) gives you an outside view, or you can [book a call](/book-a-call) and talk it through.
