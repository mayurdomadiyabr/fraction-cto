---
title: Your agency won't give you the code while they build
slug: agency-repo-access-during-build
date: '2026-08-14T09:15:00.000Z'
category: Vendors
excerpt: >-
  Three months and a large deposit into the build, you have never seen the
  repository. You get demos, not commits. That gap is where the two worst agency
  outcomes hide.
description: >-
  Why you should have commit-level access to your codebase from day one of an
  agency build, what the lack of it hides, and how to insist on it.
author: The founder of Fraction
readTime: 5
draft: false
---

A founder tells me the build is going well. Three months in, a large deposit paid, weekly demos that look promising. I ask a simple question: can you log into the repository right now and see the code? There is a pause. No. The agency shows them progress in demos, but the actual codebase lives in the agency's accounts, and the founder has never had access to it. That gap sounds like a formality. It is not. It is where the two most expensive agency failures hide, and both of them are invisible from a demo.

You should have read access to your codebase from the first week, and ownership of the repository from the first commit. Not at handoff. Not when the invoice clears. From the start. An agency that resists this is either disorganized or is keeping something a demo cannot show you, and neither is a reason to wait.

## A demo shows you the surface. The repo shows you the truth

A demo is a performance. It shows the happy path, on the agency's schedule, framed to look finished. It cannot show you whether the code behind it is maintainable, whether tests exist, whether the git history reflects steady work or a panic the night before, or whether a real team is building your product or a subcontractor you were never told about. All of those live in the repository, and all of them are things you are paying for whether or not you can see them.

The subcontracting case is the one I have watched burn founders hardest. You hire a shop, and the commits are authored by names you do not recognize, working from time zones the agency never mentioned, because the work was quietly passed to a cheaper third party. From a demo you would never know. From the commit history you would know in five minutes. I wrote about how that arrangement stays hidden in [your agency subcontracted your product and you would not know](/post-agency-subcontracting), and the single thing that exposes it is exactly the access you are being denied.

The other case is slower and just as costly. Steady, reassuring demos can sit on top of a codebase that is quietly rotting, and the gap between how done a product looks and how done it actually is only reveals itself when you finally get the keys. That is the same illusion I described in [your agency sends busy status reports, but is anything shipping](/post-agency-status-report-theater). Demos and status reports are what an agency chooses to show you. The repository is what is actually there.

## What real-time access protects that a handoff does not

The common counterargument is that you will get everything at the end, so why fight for it during the build. Because at the end the leverage is gone and the damage is done. Access during the build is not about reading code you cannot evaluate. It is about four protections that only work if they happen continuously.

It protects continuity, because if code lands in your repository every week, then the day the relationship ends, for any reason, you already have everything, and a handoff is a formality rather than a negotiation. That is the difference between a clean exit and the scramble I described in [can your team take over the code when the agency is done](/post-agency-handoff-plan). It protects against lock-in, because a codebase that lives only in the agency's accounts is leverage they hold over you, and a billing dispute becomes a hostage situation over your own product. It lets an independent engineer glance at the work while it is being built, when problems are cheap to fix, instead of after launch when they are not. And it keeps the agency honest, because people build differently when they know the actual code, not just the demo, is being watched.

## How to insist on it without wrecking the relationship

You do not need to micromanage commits to get the protection. You need ownership and visibility, and you can ask for both without implying distrust. Own the accounts from day one. The version control organization, the cloud hosting, and the domain should be created under your company's ownership, with the agency added as collaborators, not the other way around. This is cheap to do at the start and painful to unwind later, and it is the operational side of the ownership problem I covered in [you paid for the code, you might not own it](/post-who-owns-your-code).

Require that work lands in your repository continuously, not in a private one that gets transferred at the end. Ask for read access for yourself and for any technical advisor you bring in. Frame it plainly: this is standard practice, it protects both sides, and a professional shop expects it. The reaction tells you a great deal. A confident, well-run agency says yes without friction because they have nothing to hide and they would rather you own the accounts anyway. Resistance, stalling, or a lecture about how it is easier for everyone if they hold the keys is itself the finding. The agencies most reluctant to let you see the code during the build are, in my experience, the ones you most need to be able to see. If you are being kept at demo distance and are not sure how hard to push, that is worth a short conversation before you pay the next milestone, which is what a [call before your next milestone](/book-a-call) is for.

## FAQ

### Isn't it normal for an agency to hold the code until final payment?

It is common, but common is not the same as good, and it is not in your interest. IP assignment tied to full payment is reasonable. Withholding all visibility and account ownership during the build is a different thing, and it converts a payment dispute into a situation where the agency controls your product. Own the accounts from the start and tie the legal assignment to payment separately.

### I can't read code. What good is repository access to me?

You do not have to read it to benefit. Access lets a technical advisor review the work while fixes are cheap, ensures you already hold everything if the relationship ends, and lets anyone check whether the commit authors match the team you hired. The value is ownership and the option to have someone look, not you personally reading every line.

### What is the single most important thing to own from day one?

The accounts. Create the version control organization, the cloud hosting, and the domain under your own company and add the agency as collaborators. Doing this on day one costs nothing. Reversing it after a build is done under the agency's accounts is slow, undignified, and occasionally leaves you negotiating for access to your own product.
