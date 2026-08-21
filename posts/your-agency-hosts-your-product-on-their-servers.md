---
title: Your agency hosts your product on their servers
slug: your-agency-hosts-your-product-on-their-servers
date: '2026-08-21T04:12:03.677Z'
category: Vendors
excerpt: >-
  If your app runs on the agency's cloud account, their domain, and their
  credentials, you do not fully control your own product. What to own yourself
  and how to take it back.
description: >-
  When an agency hosts your product on their infrastructure, they hold a switch
  to your business. What to own yourself and how to move it.
author: The founder of Fraction
readTime: 6
draft: false
---

Here is a question worth asking your agency today: whose name is on the cloud account my product runs on? If the answer is theirs, you have a dependency that is easy to miss and expensive to discover late. Your code can be perfect, your contract can be airtight, and you can still wake up one morning locked out of your own live product because the servers, the domain, and the keys all belong to a vendor you are no longer getting along with.

Hosting on the agency's infrastructure is common because early on it is the path of least resistance. The agency already has an AWS or Google Cloud account, they already have a deployment setup, and standing up your app inside their environment is faster than creating fresh accounts in your company's name. It saves a week at the start. It can cost you far more than a week later.

## What you are actually handing over

When the agency hosts you, several distinct kinds of control quietly sit with them, and it is worth separating them because they fail in different ways.

The cloud account itself is the big one. If your production database, your servers, and your file storage live in the agency's account, then the person holding that account's root login can see everything, change everything, and, if the relationship sours, switch it off. Root access to a cloud account is total access. No contract clause moves as fast as someone with the root credentials.

The domain and DNS are the second. If the agency registered your domain or controls its DNS, they control where your website and email point. Losing that is not just downtime; it can mean your email stops working and your customers land on a page you no longer control.

The deployment pipeline and secrets are the third. If only the agency can deploy, and the API keys, database passwords, and third-party credentials live only in their systems, then even with the code in hand you cannot ship a change or rotate a leaked key without them.

There is also a cost dimension that catches people off guard. Cloud billing is pay-as-you-go, and when it runs through the agency's account you usually see it as a marked-up line item, not the real usage. You cannot spot an idle server burning money, an over-provisioned database, or a data-transfer bill that has quietly tripled, because you never see the underlying meter. Founders who move hosting into their own account routinely find the true bill is meaningfully different from what they were being charged, in one direction or the other.

## The three things you should own from day one

You do not need to run your own servers to fix this. You need to own the accounts, and let the agency operate inside them. Three things belong in your company's name, not the vendor's.

The cloud account. Create it under your company, with your email as the root owner and your billing attached. Give the agency scoped access to work inside it, the kind you can revoke in one click, and keep the root credentials yourself. This single change turns a potential lockout into a permissions setting you control.

The domain and DNS. Register the domain yourself, in your company's account, and keep the registrar login. If the agency needs to point records at their servers, they can, but the record of where your business lives on the internet stays with you.

The credentials and the ability to deploy. Your third-party API keys and production secrets should be issued by you and stored where you can reach them. At least one person on your side should be able to deploy, or at minimum be able to grant deploy access to a new developer without the agency's cooperation. This is the same access question that decides whether a [handoff to your own team](/post-agency-handoff-plan) is a smooth afternoon or a standoff.

None of this requires you to be technical. It requires you to be the account owner. The agency does the work; you hold the keys.

## If you are already hosted on their infrastructure

Most founders read this and realize they are already in the situation. That is fixable, and it is better done calmly now than in a crisis later.

Start by making an inventory of what runs where and who holds each account, because it is usually more tangled than anyone remembers. Then migrate while the relationship is still good, not after it breaks. Moving a running product from one cloud account to your own is real work, typically somewhere between a few days and a couple of weeks of engineering depending on how much is running, but it is routine work when the agency is cooperating and a nightmare when they are not. The whole point is to do it while cooperation is cheap.

At the same time, get the two fast wins immediately: move the domain registration and DNS into your own account, and make sure at least one credential set is stored on your side. Those two changes alone remove the worst-case scenario, where a vendor dispute takes your live site and your email down at once.

## When to bring in an outside read

If you cannot tell from the outside what you own and what the agency owns, that ambiguity is itself the risk. A short review of your hosting setup, the accounts, the domain, the deploy path, and the billing, tells you exactly where the single points of failure sit and what it would take to move them. A [technical teardown](/teardown) or a focused [book a call](/book-a-call) is a cheap way to turn a vague unease about lock-in into a concrete, ordered list of what to move and in what order. It is far cheaper than discovering the answer during a dispute.

## FAQ

### Is it always wrong to let an agency host my product?

At the very start, for a prototype nobody depends on yet, it can be a reasonable shortcut. It becomes a real risk the moment the product has customers, revenue, or data you cannot afford to lose. The rule of thumb is that once the product matters, the accounts should be in your name even if the agency does the operating.

### The agency says hosting with them is more convenient. Are they wrong?

Not about the convenience. It genuinely is easier for them, and sometimes for you at the start. The convenience just comes bundled with control you may not want to give up. You can keep most of the convenience by owning the accounts and granting the agency access, rather than the other way around.

### How risky is moving hosting to my own account later?

With a cooperative agency it is routine engineering work, usually days to a couple of weeks. The risk is not the technical migration; it is doing it during a dispute, when the people who know the setup have no incentive to help. Move while things are friendly and the risk is low.

### What is the single most important thing to control?

The domain and DNS, followed closely by the root of the cloud account. Those two are the difference between a bad breakup that costs you some engineering time and one that takes your live product and your email offline at the worst possible moment.
