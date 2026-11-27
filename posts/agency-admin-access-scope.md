---
title: Your agency has admin on everything. Scope it down
slug: agency-admin-access-scope
date: '2026-11-27T02:41:07.167Z'
category: Vendors
excerpt: >-
  Most agencies hold more access than the job needs. How to give each developer
  a named, scoped account with an end date, without slowing the build.
description: >-
  Your agency holds owner rights and shared logins. Four rules to scope vendor
  access to the job, with end dates, without slowing the build.
author: The founder of Fraction
readTime: 7
draft: false
---

Most agencies I review have more access than the work needs. Owner on the cloud account, admin on the code host, a shared login to the payment dashboard, and the production database password sitting in a chat thread from month one. The fix is not to trust them less. It is to give each person a named account, scope it to the job they are doing this month, and write down when it ends. A founder can do the first pass in an afternoon, without slowing the build down.

This matters for two reasons. First, the agency is a company with its own laptops, its own staff turnover, and its own security habits, and you inherit all of them. Second, the day you part ways, every broad, shared credential becomes a job you have to do under pressure. Scoping access now is cheap. Unwinding it during a dispute is not.

## Why agencies end up with admin on everything

It is rarely malicious. It happens in the first week, when the agency asks for access and the founder, who wants the work to start, hands over the highest level available because it is the fastest way to stop the requests. Owner on AWS. Admin on GitHub. The founder's own login to Stripe, because creating a second user felt like a chore.

Then nothing gets revisited. The engagement grows, developers rotate in and out, and the access granted on day one stays exactly where it was. I have seen agencies still holding owner rights on a client's cloud account a year after the last invoice, simply because nobody on either side remembered.

The pattern I look for in a [teardown](/teardown) is not "the agency has access." Of course it does. It is "the agency has access that nobody can list, that nobody owns, and that has no end date."

## Start with an inventory, not a policy

Before you change anything, write down what exists. A simple table is enough: system, who has access, what level, how they log in, and who on your side approved it. The systems that matter for most early-stage products are:

- The cloud account (AWS, Google Cloud, Azure, or a platform like Vercel or Render)
- The code host (GitHub, GitLab, Bitbucket)
- The production database, including any direct connection strings
- The domain registrar and DNS
- Payments (Stripe or similar), email sending, and the app store accounts
- Analytics, error tracking, and any admin panel built into your own product
- Shared secrets: API keys, environment variables, and the deploy pipeline that holds them

The most common surprise is the last one. Even when the people are scoped properly, the deploy pipeline often holds a key with full rights, and anyone who can edit the pipeline can use it. Treat the pipeline as a person with access, because in practice it is one.

If this list is hard to fill in, that is the finding. You cannot scope what you cannot see. [Your personal accounts holding company assets](/post-founder-personal-accounts-company-assets) is the related problem on your own side, and it usually shows up in the same afternoon.

## The four rules I apply to every vendor

### One named account per person

No shared logins. Each developer at the agency gets their own account in each system, tied to their own email, ideally through your single sign-on if you have one. Shared accounts make it impossible to tell who did what, and impossible to remove one person without changing the password for everyone.

If the agency pushes back because it is "more admin," that is a small cost for them and a large one for you if something goes wrong. Most tools let you invite a user in under a minute.

### Scope to the job, not the title

A developer building the front end does not need to delete your database. A contractor fixing a payment bug needs access to the payment sandbox, not the live account. Most cloud and code tools have a role between "nothing" and "owner." Use it.

A reasonable default for an agency team during an active build:

- Code host: write access to the product repositories, not organisation admin
- Cloud: a role that can deploy and read logs in the environments they work on; production changes go through the pipeline, not the console
- Database: no standing direct access to production; read access to a staging copy, and a time-limited, logged way to reach production when an incident needs it
- Payments, registrar, app stores: none, or read-only. These stay with you

Your company should hold the owner role on every system. One or two people on your side, never the agency. If you do not have a technical person in-house, that owner can still be you, with the agency working under you.

### Every grant gets an end date

Access should end when the reason for it ends. Write the date down when you grant it, even if it is just "end of the current SOW." When a developer rotates off your project, their access goes the same day. If you have read about [agencies rotating developers](/post-agency-developer-rotation), you know how often that happens, and every rotation leaves a stale account behind if nobody checks.

A monthly ten-minute review is enough at this size: open the user list in each system, compare it to the agency's current team, and remove anyone who is not on it.

### Secrets live in one place you control

Production passwords and API keys should not live in chat, email, or a document. Put them in a secrets manager or the platform's environment settings, owned by your company, and give the agency access to use them, not to copy them out. When someone leaves, you rotate the keys they could see. That is only practical if you know which keys those are.

## Doing this without slowing the build

The worry founders raise is speed: "If I lock things down, every deploy will need me." It does not have to. The point is not to approve every action. It is to move the agency from standing, unlimited access to scoped access that covers their normal work, plus a clear way to ask for more.

In practice, I tell the agency what is changing and why, a week ahead. I create the new named accounts with the right roles, let them confirm everything still works, and only then remove the old shared logins and owner rights. Their day-to-day work is unchanged. What changes is that production database access and account ownership now go through you.

Good agencies welcome this. It protects them too: if something goes wrong, the logs show exactly which account did what. If an agency resists named accounts or insists it needs owner rights on your cloud for normal work, ask what specifically they need it for. The answer usually points to a narrower role.

## The exit test

The cleanest check is to imagine the engagement ended today. Could you remove the agency's access everywhere in an hour, without breaking production? If removing one account would take down the deploy pipeline, or the only person who knows the database password works for them, you have a dependency, not a vendor.

That is also the question an investor's diligence team will ask. Shared credentials and agency-owned accounts show up in every [technical diligence](/post-agency-built-diligence) review I have been part of, and they are much easier to fix before someone else finds them. [The agency handoff plan](/post-agency-handoff-plan) covers what else needs to be in place before the last invoice.

## FAQ

### Is it rude to reduce an agency's access mid-project?

Not if you explain it and keep their work unblocked. Frame it as standard hygiene, change one system at a time, and let them test the new roles before you remove the old ones.

### Should the agency ever be owner on our cloud account?

No. Your company should own every account. The agency can have a role that lets it deploy and operate the product, but ownership, billing, and the power to delete the account stay with you.

### What if the agency set up the accounts under its own email?

Then the first job is moving ownership to an address your company controls. Do it while the relationship is good. It is much harder to do once it is not.

### How often should we review vendor access?

Monthly is enough for most early-stage teams, plus a same-day removal whenever a developer leaves your project or the engagement ends.

If you want a second pair of eyes on who can reach what in your product, that is a normal part of a [Fraction teardown](/teardown), or you can [book a call](/book-a-call) and we can walk your access list together.
