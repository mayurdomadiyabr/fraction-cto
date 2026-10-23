---
title: Your dev agency might be in trouble. Secure these first
slug: agency-in-financial-trouble
date: '2026-10-23T11:40:04.138Z'
category: Vendors
excerpt: >-
  Key people leaving, sudden prepayment requests, unpaid tool bills. If your
  agency looks shaky, secure code, accounts, knowledge and money now.
description: >-
  Warning signs your development agency is struggling, and the four things to
  secure first: code, accounts, deploy knowledge and payment records.
author: The founder of Fraction
readTime: 5
draft: false
---

If your development agency looks like it is in financial trouble, secure four things before you do anything else: the code in a repository you own, admin access to every account your product runs on, the credentials and documentation needed to deploy it, and a written record of what you have paid for and what has been delivered. Do this quietly and quickly. If the agency fails, these are the things that become hard or impossible to get.

Agencies close more often than founders expect. Most are small firms with thin margins, a handful of clients, and payroll due every month. When two clients leave in the same quarter, the agency you rely on can go from fine to gone in weeks.

## The early warning signs

None of these on its own means much. Three or four together, especially within the same month, should change how you act.

- **Key people leave.** The account lead or the most senior developer on your project leaves, and the replacement is vague or junior.
- **Payment terms change.** You are suddenly asked to pay earlier, to prepay a larger block, or to move from monthly invoices to upfront. Read this alongside our notes on [how much to pay an agency upfront](/post-agency-upfront-payment).
- **Discounts appear out of nowhere.** An unprompted offer of a big discount for prepayment is often a cash-flow problem, not generosity.
- **Third-party bills go unpaid.** A cloud account, domain or SaaS tool the agency pays for on your behalf gets a payment-failure notice, or an account is suspended.
- **Communication thins.** Standups get skipped, replies slow down, and the people you speak to are more and more senior, which usually means fewer people are left.
- **Your developer is "temporarily" on another project.** Agencies under pressure move people to whoever pays fastest.

## Step one: get the code into your hands

If the code lives only in the agency's repository, that is your biggest exposure. Ask, today, for one of two things: transfer of the repository to an organisation you own, or your own copy with full history, updated at least weekly. Frame it as normal hygiene, because it is. If you have been putting this off, our piece on [agencies that keep the repo during the build](/post-agency-repo-access-during-build) explains why it should have been there from day one.

Check that what you receive is complete. A repository without the infrastructure configuration, database migrations, or build scripts is not something another team can run. Ask someone technical to clone it and confirm it builds from scratch on a clean machine. If nobody can do that, you do not actually have your product yet.

## Step two: own the accounts

List every account the product depends on: cloud hosting, domain registrar, DNS, email sending, payments, app store developer accounts, analytics, error tracking, and any AI provider keys. For each one, note who the owner is and who pays.

Anything in the agency's name is at risk. If the agency is struck off or the card on file is cancelled, the provider may suspend the account, and recovering it can take weeks of support tickets with no guarantee. Move ownership to your company, or at minimum make sure you have an admin login under your own company email. If your product [runs on the agency's own servers](/post-your-agency-hosts-your-product-on-their-servers) or [your app is published under their developer account](/post-agency-owns-app-store-account), treat those transfers as urgent.

## Step three: capture the knowledge

Code and accounts are not enough if nobody knows how to run them. Ask for a short handover document now, while the people who know the system are still there: how to deploy, how to roll back, where the secrets are kept, what runs on a schedule, what usually breaks and how they fix it.

Ask for it as a normal deliverable, not as a crisis measure. You will get a better document from a team that does not feel accused. Our [agency handoff plan](/post-agency-handoff-plan) has a fuller checklist.

## Step four: protect your money

Stop prepaying beyond the current period. If you are asked to pay three months in advance during a period of obvious strain, decline politely and keep paying monthly in arrears for delivered work. If the agency becomes insolvent, money you prepaid may be very hard to recover, and in many jurisdictions you would rank behind secured creditors.

Keep a clean record: signed contracts, invoices, payment receipts, and a list of what each payment covered. Check that your contract assigns intellectual property to you on payment, and that you have actually paid for what you rely on. If an IP assignment depends on payment and you are behind, fix that first. Our piece on [who owns your code](/post-who-owns-your-code) covers the clauses that matter.

## What about source code escrow?

Escrow puts a copy of the code with a third party, to be released on agreed events such as the vendor's insolvency. It makes sense when you license a product from a vendor that keeps ownership. For a custom product you are paying to have built, it is usually the wrong tool: you should own the code and hold the repository outright, updated at every delivery. Escrow is a fallback for when you cannot have that, not a substitute for it.

## Plan B before you need it

You do not have to leave a struggling agency. Many recover, and moving mid-build is expensive. But you should know what moving would take. Ask yourself: if the agency disappeared on Friday, who would deploy a fix on Monday? If the honest answer is nobody, that is the risk to close first.

The fastest way to find out is an outside review of what you would be inheriting: is the code buildable, documented, and understandable by another team? A short [technical teardown](/teardown) answers that in days, and if a transition does become necessary, you will have a plan rather than a scramble. Our notes on [replacing an agency mid-build](/post-fire-dev-agency-mid-build) cover the transition itself.

## FAQ

### Should I tell the agency I am worried?

Yes, plainly and without accusation. Most of what you need is good practice anyway, and a healthy agency will hand it over without fuss. Resistance to giving you your own code or accounts is itself an important signal.

### Can I hire the developers if the agency closes?

Possibly. If the agency has closed, a non-solicit clause in your contract may no longer be a practical concern, but check with a lawyer before you act, since it depends on your contract and jurisdiction. Before that point, read our notes on [hiring your agency's developer](/post-hire-agency-developer).

### How long does a transfer like this take?

With a cooperative agency, a few days for code and accounts, and a week or two for a usable handover document. If it takes longer than that, find out why.

### What if the agency has already gone dark?

Start with the accounts you can recover through the provider directly, using proof of company ownership and payment. Then [book a call](/book-a-call); recovering a product from a vanished vendor is a situation we have worked through before.
