---
title: 'Firing your dev agency mid-build: do it in this order'
slug: fire-dev-agency-mid-build
date: '2026-09-18T04:42:03.008Z'
category: Vendors
excerpt: >-
  Secure the repo, cloud, domain and data before you give notice. Then run the
  exit like a project, not a fight.
description: >-
  How to fire a software agency mid-project without losing your code: what to
  secure first, what to read in the contract, and how to run the handover.
author: The founder of Fraction
readTime: 6
draft: false
---

You have decided the agency has to go. Maybe deadlines have slipped three times in a row, maybe the demos look nothing like the product you are paying for, maybe you finally opened the repository and did not like what you found. The decision is usually right by the time a founder gets here. What goes wrong is the order of operations. Founders announce the decision first and secure their assets second, and the four weeks between those two things are where products get held hostage.

Firing an agency mid-build is not the same as ending a finished engagement. A planned ending has goodwill, a final milestone, and time. A firing has none of those. The agency knows the revenue is leaving, the team is already being reassigned in their heads, and the person who understands your deployment is about to be put on another client. Your job is to get everything you need before that happens, without starting a fight you do not need.

## Secure first, announce second

The single most important rule: do not tell the agency you are leaving until you control the things you cannot rebuild. That is not about being sneaky. It is about removing the leverage that turns an ordinary exit into a negotiation over access.

Before the conversation, check that you, personally, hold owner-level access to each of these:

- The source code repository, as an owner of the organization, not a guest on the agency's account
- The cloud hosting account (AWS, Google Cloud, Azure, Vercel, whatever runs production), with billing in your company's name
- The domain registrar and DNS
- The production database, including a backup you have downloaded and stored somewhere the agency cannot reach
- App store accounts (Apple Developer, Google Play) if you ship mobile apps
- Payment, email and analytics accounts: Stripe, your transactional email provider, error tracking

If any of these live under the agency's name, move them now while the relationship is still normal. A request to "put the Apple account under our company for the investors" is routine and rarely questioned. The same request the day after you give notice can take weeks. If your product is running on the agency's own servers, that is the hardest case, and it is worth reading [what to do when your agency hosts your product](/post-your-agency-hosts-your-product-on-their-servers) before you do anything else.

Take a full snapshot the week before the conversation: tag the current state of the main branch, export the database, and write down every environment variable and third-party service the app uses. That snapshot is your floor. Whatever happens next, you can restart from it.

## Read the contract before the conversation

Most founders have not read the agency agreement since they signed it. Read it now, specifically for four things.

### Termination notice and fees

Many agency contracts require 30 days notice for termination without cause, and some add a fee equal to a month of the retainer. Know the number before you walk in. If there is a notice period, you are paying for that month anyway, so plan to use it for handover, not for new features.

### When IP transfers

The most dangerous clause is the one that says intellectual property transfers "upon full payment." If you are disputing an invoice, the agency can argue that the code you have been using is still theirs. If you see that language, pay undisputed invoices promptly and dispute specific line items in writing, rather than withholding everything. [Who owns your code](/post-who-owns-your-code) covers why assignment wording matters more than possession.

### Handover obligations

Check whether the contract obliges the agency to provide documentation, a handover session, or transition support. If it does, name those obligations in your notice letter. If it does not, you will be buying handover time at their hourly rate, and it is worth every dollar.

### Non-solicitation

If you are hoping to keep one of their developers, look for the non-solicitation clause and its fee before you mention it to anyone.

## Run the notice period like a project

Once assets are secure, give notice in writing, calmly, without a list of grievances. The grievances do not change the outcome and they make the handover worse. State the end date, what you need delivered before it, and who on your side receives it.

Then freeze feature work. Every new feature the outgoing team ships during notice is code the incoming team has to learn from people who are leaving. Limit the agency to critical bug fixes and handover tasks for the remaining weeks.

A useful handover package includes:

- A written map of the system: services, where each runs, how they talk to each other
- The deployment process, performed live once by your side while the agency watches, not the other way round
- Known bugs, workarounds, and anything "temporary" that is still in production
- Every credential and API key the system uses, followed by rotation of each one after the handover
- Recorded walkthrough sessions of the tricky parts of the codebase

The deployment test matters most. Until someone outside the agency has shipped a change to production end to end, you do not actually control the product. [A proper handover plan](/post-agency-handoff-plan) goes deeper on what that package should contain.

## Hold back a final payment, fairly

It is reasonable to tie the last payment to handover completion: code in your repository, the documented deploy performed by your side, credentials handed over. Put that in writing at the start of the notice period so it is an agreement, not an ambush. What is not reasonable is withholding payment for work already delivered because you are unhappy with the overall result. That hands the agency a legitimate grievance and, depending on the IP clause, possibly your code.

## Plan for the gap

Expect a gap between the old team leaving and the new team being productive. Takeover work is different from greenfield work: the new team spends its first weeks reading, not building. If documentation is thin, reconstructing it can take one to three months. Budget for that, and do not promise your board or your customers a feature date inside the transition window.

Choose the next team partly on whether they have taken over someone else's code before. Ask them how they would spend the first two weeks. A good answer involves reading the code, running it locally, and writing down what they find. A bad answer is a proposal to rewrite it, delivered before they have looked. [Is a rewrite advice or a sale](/post-agency-recommends-rewrite) is worth reading before that conversation.

## FAQ

### Should I tell the agency why I am leaving?

Briefly, yes, and once. One or two sentences on the main reason is professional and occasionally useful to them. A detailed list of failures during notice mostly produces a defensive team and a slower handover.

### What if the agency refuses to hand over the code?

If the repository is already in an organization you own, this cannot happen, which is why you move it first. If it is not, check the IP clause, pay undisputed invoices, and make a written request that cites the contract. A letter from a lawyer is usually enough; lawsuits rarely are needed and rarely fast.

### Can I bring in the new team before the old one leaves?

Yes, and it is often the best option if the budget allows two to four weeks of overlap. The new team reads code and asks questions while the people who wrote it are still reachable.

If you are about to make this call and want a second opinion on what you actually own and what the transition should cost, a [technical teardown](/teardown) is built for exactly that moment, or you can [book a call](/book-a-call).
