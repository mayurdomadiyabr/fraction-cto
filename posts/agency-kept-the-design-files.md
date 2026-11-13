---
title: The agency kept your Figma files. Who controls your designs?
slug: agency-kept-the-design-files
date: '2026-11-13T02:48:38.025Z'
category: Vendors
excerpt: >-
  Owning designs on paper is not the same as controlling the Figma files. How to
  get them moved into your own team before the agency leaves.
description: >-
  Your agency built designs in its own Figma? Why control matters, how file and
  project transfers work, and a handover checklist for founders.
author: The founder of Fraction
readTime: 5
draft: false
---

If your agency or freelance designer built your product designs in their own Figma account, you probably do not control them, even if your contract says you own the work. Ownership on paper and control in the tool are two different things. The fix is to get the files moved into a Figma team your company owns, ideally before the engagement ends and before anyone has a reason to drag their feet.

I see this often in agency-built products. The code is in the founder's GitHub, the cloud account is in the founder's name, and the designs sit in a workspace that belongs to the agency. Nobody did anything wrong. It is just the default, because the designer started the file in the account they already pay for.

## Why the design files matter more than founders expect

Founders tend to think of designs as finished once the screens are built. In practice the design file is a working tool you keep needing:

- **New features start from it.** Your next designer will want the existing components, colours, spacing and type styles, not screenshots of the live app.
- **The component library lives there.** If the agency set up a shared library, every future screen depends on it. In my judgment, rebuilding one from scratch costs a designer one to three weeks of paid time, depending on how big the product is.
- **Developers inspect it.** Engineers pull measurements, assets and copy from the file. Without it they guess, and the product slowly drifts.
- **Investors and acquirers ask.** In diligence, "do you control your design source files" sits next to "do you control your code and your domains". It is a small item, but a messy answer looks like a company that does not know what it owns.

## Contract ownership vs actual control

Most agency contracts assign intellectual property to the client once invoices are paid. That is the legal side, and it matters. But a clause does not give you edit access to a file. If the relationship ends badly, you would be asking a former vendor to do something on your timeline, with a legal letter as your only lever.

Control means the files sit in a team or organisation your company pays for, with at least one person from your company as owner or admin. If you check the [SOW red flags](/post-sow-red-flags) before signing, add one line: all design source files are created in, or transferred to, a workspace owned by the client.

## How the transfer works in Figma

The mechanics are not hard, but they have a few traps. According to Figma's own help pages on [transferring files and folders](https://help.figma.com/hc/en-us/articles/360038512093) and on [transferring projects and teams](https://help.figma.com/hc/en-us/articles/10250387712407):

- **Files have an owner**, usually the person who created them, and that owner can transfer ownership. A transfer cannot simply be undone; the new owner would have to transfer it back.
- **Whole projects can be moved** to another team or organisation, which brings all their files with them. This is usually the cleanest route for an agency handover, and it needs an admin on the receiving side.
- **Published libraries need care.** If a file holding a published component library moves, teams that relied on it can stop getting library updates. Move the library and the files that use it together.
- **If the original owner has left**, transfers get harder, and Figma support may need to be involved. This is why it is better to do this while the people who made the files are still around.

Plans and menus change, so follow Figma's current help pages on the day rather than trusting any screenshot, including mine.

## A simple handover checklist

Here is what I ask agencies to do in the last month of an engagement, as part of a wider [handoff plan](/post-agency-handoff-plan):

1. **Create your own Figma team** under a company email, not a personal one. One founder or operations lead should be the owner.
2. **List every design file and project** the agency made for you, including old explorations, the marketing site and any brand files.
3. **Ask the agency to move the projects** into your team, with libraries and the files that use them moved together.
4. **Open five or six key files and check** that components still link to the library and that styles look right.
5. **Export a backup.** Download local copies of the main files. A cloud tool is not a backup of itself.
6. **Collect fonts, icon sets and stock licences.** If any were bought on the agency's licence, you may need your own before you can keep using them.
7. **Remove agency access** once the move is confirmed, or downgrade it to view only if they still support you.

## When the agency will not hand them over

Usually this is slowness, not malice. A clear written request, a date and a reminder that the files are covered by the IP clause sort out most cases. If there is a dispute about unpaid invoices, expect the files to become part of that negotiation, which is one more reason to settle the transfer early rather than at the end. If you are already in a difficult exit, our notes on [firing a dev agency mid-build](/post-fire-dev-agency-mid-build) cover the sequence I use so that code, accounts and designs all come back to you.

If it truly goes nowhere, the live product is still yours. A designer can rebuild a working file from the live app, but budget for it; it is slower and you lose the history of decisions.

## Where a fractional CTO helps

Checking who holds the keys to code, cloud, domains and designs is one of the first things I do with a new company, because it is cheap to fix early and painful to fix in a hurry. A [teardown](/teardown) covers this along with the code itself, and you can [book a call](/book-a-call) if you want to go through your vendor setup.

## FAQ

### We paid for everything. Do we not already own the designs?

You may own them legally, depending on your contract. That is not the same as being able to open, edit and share them. Make sure both are true.

### Should we just ask for exported files instead of a transfer?

Exports are a useful backup, but they often lose the links between components and styles. A real transfer keeps the file working the way your next designer needs.

### Can the agency keep a copy for their portfolio?

That is a contract question. Many agencies ask to show the work. It is reasonable to allow screenshots after launch and to say no to them keeping editable source files.

### What about designs made in other tools?

The same principle applies to any design tool: the source files should live in an account your company owns, and you should have a recent local export.
