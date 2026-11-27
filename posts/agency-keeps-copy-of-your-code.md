---
title: Your agency still has a copy of your code. Ask for it back
slug: agency-keeps-copy-of-your-code
date: '2026-11-27T02:41:07.909Z'
category: Vendors
excerpt: >-
  Owning the IP does not delete the agency's copies. The return-or-destroy
  clause, the copies people forget, and a clean exit sequence.
description: >-
  Owning your IP does not delete the agency's copies. What a return-or-destroy
  clause should say and the copies founders forget at exit.
author: The founder of Fraction
readTime: 5
draft: false
---

When an agency engagement ends, the agency usually still has your code. It is on their developers' laptops, in their backups, in their own Git server, and sometimes in the AI tools they used. Owning the IP does not make those copies go away. What you want is a return-or-destroy clause in the contract, a written confirmation when the engagement ends, and a short list of the copies that will legitimately remain. It costs nothing to ask for while you are signing, and it is awkward to ask for later.

Most founders I work with have checked that their company owns the code. Fewer have asked where the other copies are. They are different questions. [Who owns your code](/post-who-owns-your-code) is about the legal right. This post is about the physical copies.

## Why the copies matter

A copy of your source code at a former vendor is not usually a disaster. Most agencies have no interest in using it. But there are three real risks.

### Security

Your repository often contains more than code. Configuration files, test data, old environment files, and sometimes real credentials committed by mistake. A copy on a former contractor's laptop is a copy you can no longer secure, patch, or audit. If one of those laptops is stolen or compromised two years later, it is your keys and your customers' data in someone else's incident.

### Competition and reuse

Agencies build similar products for similar clients. Most respect the line between reusable know-how and a client's code. Some reuse more than they should, especially when a later client wants something that looks like yours. A contract that says the code is yours, plus a clause that says copies must be returned or destroyed, makes that line much clearer.

### Diligence

An acquirer or a later-stage investor may ask who else holds copies of your source code. "We do not know" is a weak answer. "They confirmed deletion in writing on this date, and the only remaining copy is in their encrypted backups, which roll off in 90 days" is a strong one. [What an acquirer's diligence looks for](/post-acquirer-technical-diligence) goes further on this.

## What the clause should say

You do not need clever drafting. You need four things in plain words. I am not a lawyer and this is not legal advice; have yours check the wording, but bring them this list.

### Return or destroy on request and at the end

At the end of the engagement, or when you ask, the agency returns all your materials and deletes its copies, including source code, designs, documents, data, and credentials. Give them a reasonable window, such as 30 days.

### Written confirmation

The agency confirms in writing that it has done so, signed by someone senior. This is often called a certificate of destruction. It is a short letter, not an audit, but it creates a clear record and makes people actually do the work.

### A named, limited exception for backups

Honest agencies will tell you they cannot surgically delete your code from every backup tape. That is fine. The clause should allow copies that remain in routine backups, on the condition that they are not restored or accessed, stay covered by confidentiality, and are deleted when the backups expire on their normal schedule. Ask what that schedule is.

### Confidentiality that survives

Whatever copies remain, the confidentiality obligation should survive the end of the contract. Most contracts already have this. Check it does, and that it covers your code and data, not only "business information."

## The copies people forget

When you ask an agency to delete your code, they will think of the repository. These are the other places I ask about:

- Developer laptops, including those of people who have since left the agency
- The agency's own Git server, if they mirrored your repository there for their own pipeline
- Shared drives and chat tools where code snippets, database exports, and screenshots were passed around
- Their project management tool, which often holds attachments, logs, and credentials pasted into tickets
- Test and staging environments they hosted, including copies of your production database
- Any AI coding tools they used, and whether those tools retained prompts or code under the agency's account settings ([who owns AI-written code](/post-agency-ai-code-ownership) covers the ownership side of that)
- Subcontractors. If the agency used freelancers or another firm, the copies are there too. [Agency subcontracting](/post-agency-subcontracting) is why you should ask

You do not need proof for each one. You need the agency to have thought about each one before they sign the confirmation.

## The exit sequence I use

When an agency engagement ends well, this takes a week and nobody minds:

1. Confirm you have a complete, working copy of everything: code, history, designs, infrastructure, documentation. Do this first, before asking for deletion. A clean handover is in [the agency handoff plan](/post-agency-handoff-plan)
2. Remove the agency's access to every system and rotate any credential they could have seen
3. Send a short written request for return or destruction under the contract, listing the places above
4. Receive the signed confirmation and file it with the contract
5. Note the backup expiry date and leave it at that

When an engagement ends badly, the same sequence applies, but step one matters even more. Never ask an agency to delete anything until you are certain you have the only copy you need. In a dispute, deletion is easy to demand and impossible to undo.

## What if your contract does not have this clause

Plenty of signed contracts do not. You can still ask. Most agencies will agree to delete your materials and confirm it in writing at the end of a good engagement, because it costs them little and protects them too. If the relationship is ongoing, add the clause at the next renewal or change order. If an agency refuses outright to delete client code after the engagement, that tells you something about how they think of it.

## FAQ

### If we own the IP, does the agency have to delete its copies?

Not automatically. Owning the IP limits what they can legally do with the code, but deleting copies is a separate obligation that usually needs to be written into the contract or agreed at exit.

### Is a certificate of destruction worth anything?

It is not proof, but it is a signed record. It makes the agency actually go and delete things, and it gives you a clear answer when an investor or acquirer asks who still holds your code.

### Can we ask an agency to delete code from backups?

You can ask, but it is rarely practical. A better clause allows copies in routine backups, forbids restoring or using them, and requires deletion when the backups expire on schedule.

### Should we ask for deletion while a dispute is ongoing?

Only after you have a complete working copy of everything. Secure your own copy first, then ask.

If you are ending an agency engagement and want someone to check the handover and exit steps, that is what a [Fraction teardown](/teardown) covers, or you can [book a call](/book-a-call).
