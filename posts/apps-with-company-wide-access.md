---
title: The apps you approved into Microsoft 365 can read everything
slug: apps-with-company-wide-access
date: '2026-10-21T11:50:16.133Z'
category: Pattern recognition
excerpt: >-
  A backup vendor breach let attackers into Microsoft 365 tenants without MFA.
  How to find and shrink the app access you granted.
description: >-
  A backup vendor breach showed how approved apps reach your mail and files
  without MFA. How founders can audit and limit app access in M365 and
  Workspace.
author: The founder of Fraction
readTime: 6
draft: false
---

Every app someone approved into your company's Microsoft 365 or Google Workspace with organization-wide permissions is a key to your email, files and chats. Many of those keys work without any person logging in, which means multi-factor authentication never gets a say. If a vendor behind one of those apps is breached, the attacker can use the app's own credentials to read your data. The fix is not to stop using apps. It is to know which ones hold company-wide access, cut that access to what each one needs, and watch for changes.

This stopped being theoretical last week.

## What happened with ConnectWise Cloud Backup

On October 17, 2026, ConnectWise shut down customer access to its Cloud Backup service, formerly SkyKick Cloud Backup, a product many managed service providers use to back up their clients' Microsoft 365 and Google Workspace data. According to [BleepingComputer's report](https://www.bleepingcomputer.com/news/security/hackers-breach-microsoft-365-tenants-via-connectwise-supply-chain-attack/), the attacker authenticated as the backup application itself, using its secret, through automated scripts. No user signed in, so MFA did not apply.

The permissions the app already held were broad, because a backup tool needs to read everything: mail and attachments, OneDrive and SharePoint files, Teams chats. Security firms reported seeing related applications assign themselves admin roles inside customer tenants, and one firm said it had identified at least 162 compromised tenants in the environments it monitors. As of October 18, ConnectWise said scheduled backups were not running and restores were unavailable, while stating that the backup archives themselves remained encrypted and showed no sign of compromise.

Two separate lessons are packed into that story. One is about access. The other is about what happens to your backups when the vendor goes dark.

## Why app access is different from user access

Most founders have spent effort on user security: MFA for everyone, offboarding when people leave, maybe single sign-on. Apps sit outside most of that.

### Two kinds of app permission

When an app connects to Microsoft 365 or Google Workspace, it gets one of two broad kinds of access.

- **Delegated access** lets the app act as a signed-in user, limited to what that user can see. If the user leaves, the access usually goes with them.
- **Application access** (on Google, often through domain-wide delegation for a service account) lets the app act on its own, across the whole organization, with no user present. Backup tools, email security tools, archiving and compliance tools commonly need this.

Application access is the dangerous kind. It authenticates with a secret or certificate that the vendor holds. If that secret leaks from the vendor's systems, your MFA, your password policy and your login alerts are not in the path.

### Nobody remembers approving them

In a typical seed or Series A company, these approvals happened one at a time over years. A founder connected a backup tool in the first month. An early ops hire approved a signature manager. Someone tried an AI meeting assistant that asked for calendar and mail access across the domain. The trial ended; the permission did not. We have written about how this accumulates in [the integration sprawl nobody decided to build](/post-integration-sprawl).

## What to do this week

None of this needs a security team. It needs an admin login and about two hours.

### 1. List every app with organization-wide access

In Microsoft 365, the Entra admin center shows enterprise applications and the permissions each has been granted, including which ones are application permissions with admin consent. In Google Workspace, the Admin console lists connected third-party apps under API controls, and domain-wide delegation entries are listed separately. Export both lists into a sheet with four columns: app, vendor, what it can access, who owns the relationship.

### 2. Remove what nobody uses

Anything from a finished trial, a former employee's experiment, or a tool you replaced should go. When small companies run this review for the first time, it is common to find more apps with broad access than anyone on the team can name. Every one you remove is one fewer vendor whose breach becomes yours.

### 3. Shrink what stays

For each remaining app, ask whether it needs to read everything or only something. A signature tool does not need to read mail content. A calendar scheduler does not need files. Many vendors offer narrower permission options if you ask, or let you limit the app to specific mailboxes or groups. Where the platform supports scoping an app to a subset of users, use it.

### 4. Turn off casual consent

Change your settings so ordinary users cannot grant apps broad access to company data without an admin. Microsoft 365 lets you restrict user consent; Google Workspace lets you mark apps as trusted, limited or blocked. This is the single setting that stops the list from growing back.

### 5. Watch for credential and role changes

The early signs in the ConnectWise incident were changes, not data access: apps adding credentials and assigning themselves roles. Set alerts for new credentials added to applications, new admin role assignments, and new admin-consented apps. These events should be rare in a small company, so every alert is worth a look. Admin accounts that are shared or poorly controlled make all of this harder, which is why [shared admin logins](/post-shared-admin-logins) are worth fixing at the same time.

### 6. Know the kill switch before you need it

Write down, for your highest-access apps, how to disable each one and revoke its credentials. Note that disabling an app may stop it from getting new tokens while existing tokens stay valid until they expire. Know how long that window is for your platform, and what else you would need to revoke.

## The backup lesson

The second half of this story is about recovery. Many companies treat their SaaS backup vendor as the backup. When that vendor shut down access, its customers could not restore anything, regardless of whether their own data had been touched.

A backup you cannot reach during an incident is not doing its job. For most startups the answer is not a second commercial backup product. It is a periodic export of the data you could not live without, stored somewhere the primary backup vendor cannot reach, and a restore you have actually tested. We cover the same principle for infrastructure in [whether your backups live somewhere other than your cloud provider](/post-backups-outside-your-cloud-provider).

Ask two questions of any backup vendor: if your service is offline for a week, how do I get my data, and can I export it on a schedule to storage I control?

## If you are the vendor

If your own product asks customers for organization-wide access, this incident is what their security reviews will now ask about: how you store application secrets, how quickly you can rotate them, whether you request only the permissions you need, and how you would tell them about a compromise. Our post on [integrations that hold your customers' OAuth tokens](/post-saas-integration-oauth-token-risk) covers that side of the table.

## FAQ

### We are a 10-person startup. Is this really our problem?

Yes, possibly more than for a large company. Small companies tend to grant broad access freely and rarely review it, and one founder's mailbox often contains contracts, investor updates and customer data.

### Does MFA protect us from this?

Not against application access. MFA protects user sign-ins. An app using its own secret or certificate does not sign in as a user, which is exactly why the attacker in this case could get in without one.

### Should we stop using third-party backup for Microsoft 365 or Google Workspace?

No. Backup is still worth having. The point is to review its permissions, alert on changes, and keep an independent export of your most important data so a vendor outage does not leave you with nothing.

### How often should we review connected apps?

Quarterly is reasonable for most early-stage companies, plus a review whenever someone leaves who had admin rights. If an outside review would help, a [technical teardown](/teardown) includes access and vendor risk, or you can [book a call](/book-a-call) to talk through your setup.
