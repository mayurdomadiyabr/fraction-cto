---
title: Your cloud provider gets hit. Are your backups somewhere else?
slug: backups-outside-your-cloud-provider
date: '2026-10-14T03:49:08.846Z'
category: Decisions
excerpt: >-
  A ransomware attack on a Japanese cloud left customers restoring from their
  own copies. Why one backup should live outside your cloud account.
description: >-
  Backups in the same cloud account as production will not save you from a
  provider incident or stolen admin keys. A cheap seed-stage setup.
author: The founder of Fraction
readTime: 6
draft: false
---

If your only backups live inside the same cloud account as your production data, they are not protecting you from the failure that would hurt most: losing that account or that provider. Keep at least one recent, tested copy of your critical data in a separate account, ideally with a different provider, that your production credentials cannot delete. For most seed-stage startups that is a few days of work and a small monthly bill.

The reason this is worth writing about this week is a real event. On 7 October 2026, a ransomware attack on IDC Frontier, a SoftBank subsidiary, shut down virtual servers across four zones of its IDCF Cloud East Japan Region 1. According to [the provider's statements as reported by ASCII](https://ascii.jp/en/elem/000/004/441/4441355/), 495 companies and local governments were affected, recovering customer data in those zones was described as difficult, and customers were told to restore from their own backups. The management console was also taken offline while the investigation ran.

Read that last part again from the point of view of a ten-person startup. The provider's snapshots, the provider's console and the provider's region were all part of the incident. The customers who could recover quickly were the ones holding a copy somewhere else.

## The backup most startups actually have

When I review a young company's infrastructure, the backup setup usually looks like this:

- The managed database has automated snapshots turned on, kept for 7 days, in the same account and region.
- File storage is in a bucket in the same account, sometimes with versioning, often without.
- Someone once set up a nightly dump to another bucket. In the same account.
- Nobody has restored any of it in the last six months.

This is fine for the most common failures: a bad migration, a deleted table, a corrupted record. It does nothing for the less common, much more damaging ones:

- **An attacker gets admin credentials to your cloud account.** Whatever can delete production can usually delete the snapshots too. Ransomware groups go after backups first for exactly this reason.
- **The provider itself has a serious incident**, as IDCF customers just found out.
- **Your account is suspended or locked**, whether through a billing failure, a fraud flag or a policy dispute. Your data is fine, and you cannot reach it.
- **A well-meaning engineer runs a teardown script against the wrong environment** with credentials that cover everything.

These are rare. They are also the ones that end companies, because the recovery time is not hours, it is "rebuild from whatever we can find".

## What good enough looks like at seed stage

You do not need an enterprise disaster-recovery programme. You need one copy that survives the loss of your main account, and proof that you can use it.

### One copy outside the blast radius

Send a regular copy of your database and critical files to storage that sits outside your production account. Best is another provider entirely. Second best is a separate account at the same provider, with no shared administrators and no standing access from production. The key test: if every credential in your production environment were stolen tonight, could the attacker delete this copy? If yes, it is not outside the blast radius.

### Make it hard to delete

Most object storage services offer some form of write-once retention or object lock, which stops anyone, including you, from deleting a copy before its retention period ends. Use it for at least a short window. The production system should be able to write new backups but not delete old ones.

### Decide what "critical" means

You do not need to copy everything. Production database, customer-uploaded files, and the secrets and configuration needed to stand the service back up are usually enough. Logs, caches and build artifacts can be regenerated. Your infrastructure-as-code repository, if you have one, already holds most of the rest, as long as it lives somewhere other than the account it describes.

### Write down how to rebuild

A backup is only half the answer. The other half is a short runbook: where the copies are, who has access, the order to restore things, and which DNS, email and payment settings need changing to point at a new environment. Keep it somewhere you can reach if your cloud account and your company email are both down.

### Restore it, for real, twice a year

Pick a quiet afternoon, spin up an empty environment from the outside copy only, and time how long it takes to get a working product. The first time usually reveals a missing secret, a forgotten bucket or a dump that has been failing for weeks. That is the point. I have made the general case for tested restores before in [what happens when your database dies at 2am](/post-disaster-recovery-diligence); the provider-level version is the same discipline with a bigger blast radius.

## What it costs

For a typical seed-stage SaaS with a database of tens of gigabytes and a modest amount of file storage, an off-account, immutable copy usually costs tens of dollars a month in storage, plus a few days of engineering to set up and a day twice a year to test. Egress charges for copying data out of your main provider are the cost people forget, so check them before choosing how often to copy.

Compare that with the alternative. A week of downtime for a B2B product is often the end of several customer relationships, and for some, a breach of contract. The asymmetry is enormous, which is why this is one of the first things I check in a [technical teardown](/teardown).

## Questions to ask your team this week

These take a few minutes and tell you where you stand:

1. Where is our most recent backup that is not in our production account, and how old is it?
2. Which credentials can delete it?
3. When did we last restore from it, and how long did it take?
4. If our cloud console were unavailable for a week, what would we do on day one?
5. Who besides the founders knows how to do it?

If the answers are "there isn't one", "the same ones as production", "never", "not sure" and "nobody", you are in the same position as most startups. It is also among the cheapest real risks to fix.

## The diligence angle

Investors and acquirers increasingly ask about this, and not only the large ones. "Show me your last restore test" is a simple question that separates teams that have a plan from teams that have a setting turned on. Having an off-account copy, a written runbook and a dated restore log turns a nervous conversation into a two-minute answer.

If you want a second pair of eyes on whether your setup would survive a provider-level incident, [book a call](/book-a-call) and we will walk through it with your actual architecture.

## FAQ

### Are my cloud provider's automated snapshots enough?

They are enough for everyday mistakes like a bad migration or a deleted table. They are not enough for losing access to the account, a compromised admin, or a provider-level incident, because they usually live in the same place as the data they protect.

### Do I need a second cloud provider for my whole stack?

No. Running production on two providers is expensive and complex. Keeping backups with a second provider is cheap and covers most of the risk.

### How often should the outside copy be updated?

Match it to how much data you can afford to lose. Daily is a reasonable starting point for most early products; more frequent if losing a day of customer data would be serious.

### What about ransomware that encrypts data before it is backed up?

That is why retention matters. Keep several older copies under write-once retention so you can roll back to a point before the encryption started.
