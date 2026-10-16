---
title: Your AWS account sits inside someone else's organization
slug: cloud-account-in-reseller-organization
date: '2026-10-16T09:44:00.270Z'
category: Vendors
excerpt: >-
  If an agency or reseller set up your AWS account, it may sit in their AWS
  Organization. What they control, and how to get out cleanly.
description: >-
  Is your AWS account inside an agency or reseller organization? What they can
  control, what leaving involves, and a one-hour check.
author: The founder of Fraction
readTime: 5
draft: false
---

If your AWS account was set up by an agency, a managed service provider, or a reseller that offered a discount or consolidated billing, check one thing today: is your account a member of their AWS Organization? If it is, the company that owns that organization can see your bills, can restrict what your own administrators are allowed to do, and has a say in how and when you leave. That is not a reason to panic. It is a reason to know where you stand before you need to move, raise money, or end the relationship.

I find this in a surprising number of early-stage reviews. The founder believes they "own the AWS account" because they log into it every day. Technically they do have an account. But the account sits inside someone else's organization, under someone else's billing, and nobody on the founding team has ever looked at what that means.

## How this happens

There are a few common routes.

- **An agency or freelancer set it up.** They created your account from inside their own organization because it was faster, and their invoices include the hosting.
- **A reseller or managed service provider offered a deal.** Many cloud partners resell AWS, sometimes with a discount, support, or simpler invoicing in local currency. A common way to do this is to place your account inside an organization the partner controls, with the partner paying AWS and billing you.
- **A previous employer or sister company.** Your startup was spun out of another business and your account never left its parent organization.

None of these are scams. Reselling and managed services are legitimate, and some partners add real value. The issue is control, and most founders never read the terms that decide it.

## What the organization owner can do

AWS Organizations lets one management account govern many member accounts. If your account is a member of an organization you do not control, the management account can, depending on how it is configured:

- **See your billing and usage.** Consolidated billing means the management account pays AWS and sees the costs of every member account.
- **Restrict your administrators.** With all features enabled, the management account can apply service control policies that limit what anyone in your account can do, including your own root and admin users. AWS documents that these policies can even prevent a member account from leaving the organization.
- **Control your invoice.** You pay the partner, not AWS. If the partner's billing goes wrong, or the relationship sours, the payment path to AWS runs through them.

Again, a reputable partner will not abuse this. But you are relying on their goodwill for something your business cannot run without.

## What leaving actually involves

The good news is that leaving is possible and usually not technically difficult. According to [AWS's documentation on leaving an organization as a member account](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_leave-as-member.html), the account must first be set up to stand on its own: it needs a support plan selected, verified contact information, and its own payment method. Accounts created inside an organization often never had these filled in, so expect to complete them by hand.

A few details catch people out:

- **You may need the partner's cooperation.** If a service control policy blocks leaving, the partner has to remove it, or remove your account from the organization themselves.
- **Your billing history stays behind.** AWS notes that once an account leaves, it loses access to the cost and usage data from the period when it was a member. Export what you need for finance and diligence before you go.
- **Organization-wide agreements stop applying.** Anything that was accepted on your behalf at the organization level no longer covers you.
- **Credits and discounts may change.** If you received a discount through the partner, it ends when you leave. If you have credits from a startup program, confirm with AWS or the partner how they apply before and after the move.

Other cloud providers have similar patterns with billing accounts and partner-managed resources. The names differ, the question is the same: who controls the account your product runs on?

## Why this matters more than it looks

There are three moments when this stops being an abstract issue.

**When you end the relationship with the agency or partner.** If the account is in their organization, ending the contract becomes a negotiation about your infrastructure, not just about invoices. I covered the wider version of this in [your agency hosts your product on their servers](/post-your-agency-hosts-your-product-on-their-servers).

**When you raise money or get acquired.** Technical diligence will ask who controls production, who can access customer data, and who pays the cloud bill. "Our former agency's organization" is not a comfortable answer, and it can slow a round while you fix it.

**When something goes wrong at the partner.** If the partner has a billing dispute with AWS, is acquired, or goes out of business, your account is caught up in it.

## A one-hour check you can do now

You do not need to be technical to start.

1. **Ask your engineer or agency directly:** "Is our AWS account a member of an AWS Organization, and if so, who owns the management account?" In the AWS console this is visible on the Organizations page or in account settings.
2. **Check who pays.** Is your invoice from AWS, or from someone else?
3. **Check the root account email.** It should be an address your company controls, not a personal or agency mailbox. This overlaps with [shared admin logins](/post-shared-admin-logins), which is worth reading next.
4. **Read your contract with the partner** for what happens to the account at termination, and how much notice is required.
5. **Decide whether it matters now.** If you are happy with the partner, you may choose to stay. Just write down the exit steps so they are ready.

If the answers are unclear, or you are about to start a fundraise, a short review is cheap insurance. Our [teardown](/teardown) covers ownership of infrastructure as part of a broader review, and you can [book a call](/book-a-call) if you want help planning the move.

## FAQ

### Is it bad to buy AWS through a reseller?

No. Many resellers offer useful support, local invoicing, or discounts. The risk is only in not knowing what control you have given up, and not having a clear exit plan.

### Can the partner delete my account or data?

A member account's resources belong to that account, but an organization owner has significant control over it, including policies that restrict actions. Do not rely on assumptions here. Keep independent backups and read the contract, as covered in [backups outside your cloud provider](/post-backups-outside-your-cloud-provider).

### How long does it take to move out?

The AWS side is often a few hours of setup once you have payment details and the partner's cooperation. The slower parts are usually negotiating with the partner and updating billing, credits, and any integrations tied to the old setup.

### Do investors actually check this?

Increasingly, yes. Questions about who controls production infrastructure and customer data are common in technical diligence, especially when an agency built the product.
