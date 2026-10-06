---
title: A customer deleted their data by mistake. Can you undo it?
slug: customer-deleted-data-no-undo
date: '2026-10-06T03:16:52.347Z'
category: Pattern recognition
excerpt: >-
  When the only way to undo a customer's accidental delete is a backup restore,
  you need soft delete on the objects that matter.
description: >-
  Why accidental customer deletes turn into day-long backup restores, and how
  soft delete with a retention window fixes it.
author: The founder of Fraction
readTime: 6
draft: false
---

Sooner or later a customer emails support in a panic. Someone on their team deleted a project, a workspace or a few hundred records by mistake, and they want it back. In a lot of early products, the honest answer from engineering is: we can, but only by restoring the whole database from last night's backup, which would also wipe out everything every other customer did today.

So the team does something painful instead. An engineer restores the backup to a separate server, finds the deleted rows by hand, works out which related records went with them, and copies them back into production with hand-written SQL. It takes a day, it is risky, and it is the same engineer who was supposed to be shipping the feature your biggest prospect asked for.

The short answer: if your product lets customers delete things that matter to them, you need a way to undo that delete without touching a backup. For most early products that means soft delete with a retention window for the important objects, plus a real hard-delete path for when the data genuinely has to go.

## Why this keeps catching teams out

Delete is usually one of the first features built and one of the least thought about. The framework makes it a one-liner. The row disappears, the foreign keys cascade, the UI refreshes. It works perfectly, which is the problem: nobody notices it is a one-way door until a customer walks through it by accident.

Three things make it worse as the product grows:

- **Cascades.** Deleting a project also deletes its tasks, comments, files and history. What looked like one row is now hundreds across six tables.
- **More users per account.** Once a customer has ten people in a workspace, the odds that one of them deletes something they should not have go up sharply. The person deleting is rarely the person who will complain.
- **Backups are built for disasters, not for one customer.** Your backup protects against losing the database. It is not designed to hand back one customer's project from Tuesday without affecting anyone else. I covered the whole-database case in [what happens when your database dies at 2am](/post-disaster-recovery-diligence); this is the smaller, far more frequent cousin.

## How soft delete works, in plain terms

Instead of removing the row, you mark it. A column such as deleted_at gets a timestamp, and the application treats any marked row as gone. The customer sees it disappear. Support, or the customer themselves through a trash view, can clear the mark and it comes back with everything attached.

Then, after a retention window, typically 14 to 30 days, a scheduled job removes the marked rows for real.

That is the whole idea. The details are where teams go wrong.

### Where soft delete goes wrong

**Forgetting the filter.** Every query that lists or counts records now has to exclude deleted ones. Miss one and deleted items reappear in an export, a report or a search result. Most frameworks have a default scope or a global filter for this; use it rather than relying on each engineer to remember.

**Unique constraints.** If a customer deletes a project called "Q3 Plan" and then creates a new one with the same name, a unique index on name will reject it because the old row still exists. Make constraints conditional on not being deleted.

**Treating soft delete as erasure.** It is not. If a user asks you to delete their personal data under GDPR or a similar law, a deleted_at timestamp does not satisfy that. Guidance on [the right to erasure](https://sota.io/blog/schufa-shadow-database-gdpr-article-17-right-to-erasure-soft-delete-vs-hard-delete-developer-guide-2026) and soft delete is consistent on this: you need a path that actually removes or anonymises personal data. This is not legal advice; have counsel confirm what applies to you.

**Doing it everywhere.** Not every table needs it. Soft-deleting log lines or session records just fills your database. Apply it to the objects customers create and care about.

## What to protect first

You do not have to retrofit every table. Rank your objects by how much a customer would hurt if they lost one by accident:

1. The top-level containers: workspaces, projects, accounts. Losing one of these takes everything inside with it.
2. Anything that took the customer real effort to create: documents, configurations, imported data.
3. Anything with money attached: invoices, orders, subscriptions.

Start with the first group. Soft delete on the container, with the cascade turned into a "mark everything inside" operation, covers most of the panic emails you will ever get.

### Give the customer the undo, not just support

If you can, expose it. A trash view with a restore button, and a clear note that items are removed for good after 30 days, turns a support ticket into a two-click fix the customer does themselves. It is also a small, visible signal of maturity that comes up in enterprise evaluations and [security questionnaires](/post-security-questionnaire-deal), which increasingly ask how you handle deletion and retention.

## What it costs

For a typical early product, soft delete on the three or four most important objects is a few days to a week of work, mostly in finding every query that needs the filter and writing tests for it. The ongoing cost is small: a purge job and the discipline to use the default scope.

Compare that with the alternative. Each manual restore from backup costs an engineer most of a day and carries the risk of corrupting live data. After the second or third, the soft-delete project has paid for itself, before you count the customer goodwill.

## When you can skip it

If your product holds little that customers create, or deletion is rare and low-stakes, a confirmation dialog and a decent backup may be enough for now. The trigger to act is the first time support has to ask engineering to dig something out of a backup. Treat that as the signal, not a one-off.

If you are unsure where your product sits, this is the kind of question a [technical teardown](/teardown) answers quickly, alongside the other gaps that tend to appear at the same stage.

## FAQ

### What is the difference between soft delete and hard delete?

A hard delete removes the record from the database permanently. A soft delete marks it as deleted so the application hides it, while the data stays in place and can be restored. Most products that use soft delete also hard-delete marked records after a retention window.

### Can't we just restore from a backup when a customer deletes something?

You can, but backups restore the whole database to a point in time. Getting one customer's data back without rolling back everyone else means restoring to a separate server and copying records over by hand, which is slow and risky. Soft delete makes it a single update.

### Does soft delete break GDPR or other privacy rules?

It can if it is your only deletion path. When someone exercises a right to erasure, you need to actually remove or anonymise their personal data. Keep soft delete for accidental deletes and build a separate, real erasure process. Check the specifics with a lawyer.

### How long should deleted items be kept?

Fourteen to thirty days is common and long enough for most customers to notice a mistake. Pick a number, state it in the product and your terms, and make sure the purge job actually runs and is monitored.

If your team is still restoring customer data from backups by hand, [book a call](/book-a-call) and we can work out the smallest fix that stops it.
