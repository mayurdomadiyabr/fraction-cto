---
title: An acquirer's technical diligence is not your investor's
slug: acquirer-technical-diligence
date: '2026-09-26T03:59:11.165Z'
category: Fundraising
excerpt: >-
  A buyer prices whether your product runs without you after close. What
  acquirer diligence checks, where founders get caught, and how to prepare.
description: >-
  Acquirer technical diligence checks ownership, IP, and operability, not just
  code. What buyers ask for and how to prepare before the LOI.
author: The founder of Fraction
readTime: 7
draft: false
---

If a company wants to buy yours, the technical diligence you are about to go through is not the one you survived at your seed or Series A. An investor was pricing whether your team could keep shipping until the next round. A buyer is pricing whether your product will still run, legally and operationally, two quarters after the people who built it have been absorbed or have left. Same word, different exam. Prepare for the one you are actually taking.

This post covers what changes when the reviewer works for an acquirer, where founders usually get caught, and the few weeks of preparation that make the process shorter and the price harder to chip away at.

## Why the buyer reads your code differently

A venture investor is buying a slice of a future. They accept that the code is messy because the company is young, and they mostly want to know whether the mess will stop you from growing. Their technical review is often a few calls, a look at the architecture, some questions about security and scale, and a judgment about the team.

An acquirer is buying the asset itself. After close, your code becomes their liability. That changes three things.

### They assume they will run it without you

Most acquisition plans quietly assume some of your team will leave within a year. So the reviewer asks whether the system can be operated, deployed, and fixed by strangers. Deploys that only one person knows how to run, a production database only the founder can access, or infrastructure created by hand in a console all become integration costs, and integration costs come off the price.

### They care about how it fits, not just how it works

A strategic buyer is thinking about connecting your product to theirs: single sign-on into their identity system, your data into their warehouse, your service behind their API gateway. An architecture that is perfectly fine on its own can still be expensive to integrate if tenant data, auth, and billing are tangled together.

### They have lawyers reading alongside the engineers

Investors ask about IP. Acquirers prove it. Expect a formal open-source scan, a review of every contributor's IP assignment, and questions about any code written by contractors or an agency. A strong copyleft dependency inside a product you distribute, or a contractor who never signed an assignment, does not kill an investment round very often. It can absolutely hold up a closing. We cover the licence side in more detail in [how open-source licences affect valuation](/post-open-source-license-diligence), and the paperwork side in [the IP assignment problem that stalls term sheets](/post-ip-assignment-raise).

## What acquirer diligence usually asks for

The exact list depends on the buyer, but the shape is consistent. Here is what I would expect a serious acquirer's technical team, or the outside firm they hire, to request.

- **Full repository access**, often including history, not a guided tour. Many buyers run automated tools over the code for licences, known vulnerabilities, and committed secrets.
- **A software bill of materials** or enough access for them to generate one.
- **An infrastructure inventory**: every cloud account, who owns it, what runs where, and what it costs per month.
- **Account ownership**: domain registrar, DNS, app store accounts, code hosting, email sending, payment processor. Buyers are looking for anything registered to a personal email.
- **Security history**: incidents, pen test reports, how you handle vulnerabilities, and any customer security commitments you made in contracts.
- **Customer-facing technical commitments**: uptime promises, data residency, data deletion, and anything unusual in your biggest contracts.
- **Key-person map**: who knows what, and what happens if they leave. See [the one-person codebase risk](/post-key-person-codebase-risk) for why this carries more weight in a sale than a raise.

Notice that most of this is not about code quality. Reviewers rarely reduce a price because the code is ugly. They reduce it because something is unowned, unlicensed, or unknown.

## Where founders get surprised

These are the patterns I see most when a founder has been through venture diligence and assumes the sale will feel similar.

### The personal-account problem

The production cloud account was opened on a co-founder's card in year one. The domain is registered to the founder's Gmail. The Apple developer account belongs to the first contractor. None of this mattered to an investor. To a buyer, each one is an asset that is not clearly owned by the company they are buying. Transferring them usually takes days to weeks, and some transfers, such as app store accounts, have their own process and waiting periods.

### The contractor code nobody papered

An agency or freelancer wrote the first version. The contract was a one-page statement of work with no clear IP assignment clause. In a raise, a founder can often explain this away. In an acquisition, the buyer's counsel may ask you to go back and get a signed assignment from someone you have not spoken to in three years. Start that early. We wrote about why [you might not own code you paid for](/post-who-owns-your-code).

### The knowledge that walks out at close

Your lead engineer has a retention package, but the second engineer, who actually understands billing, does not. The buyer notices. Expect questions about documentation, runbooks, and whether a new team could handle an incident.

### Promises in customer contracts

Sales signed a contract with a 99.99% uptime commitment or a data residency clause the architecture does not support. An investor rarely reads your customer contracts line by line. An acquirer's lawyers do, and they hand the technical claims to the engineers to verify.

## How to prepare in the four weeks before

You rarely get much warning before a buyer's diligence starts, so it helps to do this before a deal is live. If you already have a letter of intent, compress it.

1. **Run your own licence and secrets scan.** Use a standard open-source scanner and a secrets scanner over the full history. Fix or document what you find. Walking in with the report is better than having the buyer find it.
2. **Move every account to company ownership.** Company email, company payment method, at least two admins who are current employees.
3. **Collect IP assignments** from every employee, contractor, and agency who touched the code. Chase the missing ones now.
4. **Write the operator's guide.** One document: how to deploy, how to roll back, where the logs are, who to call. This is the single cheapest thing that reduces integration risk in the buyer's model.
5. **Pull your technical commitments** out of your top customer contracts into one list, and mark which ones the current system actually meets.
6. **Build the inventory**: services, cloud accounts, third-party vendors, monthly cost for each.

If you already put together a [technical data room for a raise](/post-technical-data-room), start from that. A buyer's version is the same folder with more depth and fewer things you can explain verbally.

## What this does to the deal

Technical findings in an acquisition rarely end the conversation outright. They show up as a lower price, a larger escrow or holdback, special indemnities for a specific risk, or conditions you must meet before closing. Every unknown the buyer has to price is priced pessimistically. The work above does not make your code better. It turns unknowns into known, bounded items, and bounded items are much cheaper.

If you want a second set of eyes before the buyer's team arrives, a short [technical teardown](/teardown) is built for exactly this: find what an outside reviewer will find, while you still have time to fix it.

## FAQ

### Is acquisition technical diligence always deeper than investor diligence?

Usually, because the buyer takes on the code and its liabilities. A small acqui-hire focused on the team may be lighter on the product, but will still check IP ownership closely.

### Do buyers read the code line by line?

Rarely. They sample critical paths, run automated scans for licences, vulnerabilities, and secrets, and spend more time on architecture, operations, and ownership than on style.

### Should I fix technical debt before a sale?

Fix what creates legal or operational risk: ownership, licences, secrets, single points of failure. Large refactors in the months before a sale usually add risk rather than remove it.

### Who should run the process on our side?

Someone technical who can answer quickly and honestly, plus your counsel for the IP questions. If you do not have a senior technical person, bring one in before the buyer's reviewers start. Slow or vague answers are priced as risk.
