---
title: The if-statement for one customer that became your product
slug: customer-specific-code
date: '2026-09-22T04:31:14.055Z'
category: Pattern recognition
excerpt: >-
  Hardcoded exceptions for one account feel harmless until there are forty. How
  to tell which are worth it and how to clean them up.
description: >-
  Customer-specific code branches slow every change and hide bugs. A test for
  when to allow them and a four-step cleanup plan.
author: The founder of Fraction
readTime: 6
draft: false
---

Search your codebase for a customer's name or account ID. In most early B2B products I review, you will find it. Something like `if account.id == 42: skip_approval_step()`, or a config flag called `acme_mode`, or a separate export format that exists because one customer's finance team asked for it in their second month.

Each of those lines made sense when it was written. A customer needed something, a deal depended on it, and a two-line branch was faster than a design discussion. The problem is not any single one. It is what happens when there are forty of them and nobody can say which customers depend on which behavior.

The short answer: customer-specific code is sometimes the right trade to win or keep a deal, but it needs a ceiling and a paper trail. Turn one-off branches into named, documented settings any customer could use, retire the ones nobody needs, and make adding a new one a deliberate decision with a cost attached.

## How the pattern grows

It usually starts with your best early customer. They are paying, they are patient, they give good feedback, and they occasionally need something slightly different. Saying yes feels like good customer development, and often it is.

Then the pattern compounds:

- Sales learns that engineering can accommodate special requests, so special requests become part of closing.
- Each branch is small, so none of them triggers a real design conversation.
- The engineer who wrote a branch leaves, and the knowledge of why it exists leaves with them.
- Nobody deletes branches, because nobody is sure whether the customer still relies on them.

This is the code-level cousin of a roadmap problem I have written about before: [when your biggest customer is writing your roadmap](/post-biggest-customer-roadmap). The roadmap version is visible in planning meetings. The code version is invisible until it starts slowing everything down.

## The costs show up in three places

### Every change gets slower

A developer changing the approval flow now has to reason about every customer-specific branch that touches it. Tests multiply, or more often do not exist for the rare paths. A change that should take a day takes a week, and the team starts to describe the codebase as "fragile" without being able to say exactly why. This is one of the quieter forms of [the technical debt that actually matters](/post-triage-technical-debt), because it taxes every future feature.

### Bugs hide in paths nobody runs

The main flow is exercised by every customer, every day, so its bugs surface fast. A branch used by one account might run once a month, during their billing cycle. When it breaks, you find out from an angry email, and the person who understands it is gone. Some of the worst incidents I have seen in small companies came from a rarely-run customer path after an unrelated refactor.

### You cannot price or sell the product cleanly

If every customer is running a slightly different product, you cannot say what you sell. Onboarding a new customer means deciding which of the special behaviors they get. Support cannot reproduce issues. And a diligence reviewer who finds a long list of hardcoded account IDs will reasonably ask whether you have a product or a set of custom projects, which affects how they think about your margins.

## Expensive necessity or expensive mistake

I do not tell founders to never do this. Early on, a custom accommodation that keeps a major logo, or wins the reference customer that unlocks your next five deals, can be exactly the right trade. The distinction is the one I use for most early spending decisions: [is this an expensive necessity or an expensive mistake](/post-expensive-mistake-or-necessity)?

A useful test for any new customer-specific request:

1. Would at least a few other customers plausibly want this within a year? If yes, build it as a general setting, not a branch.
2. Is the customer paying enough, or strategic enough, to carry the ongoing cost of maintaining it? If not, the answer is probably no, or a paid customization with a price that reflects the upkeep.
3. Is there a clear owner and a written reason? If you cannot name who maintains it and why it exists, do not add it.

## How to clean it up without breaking customers

You do not need to rip everything out at once. A steady approach works better.

### Step 1: Take inventory

Have an engineer list every place the code behaves differently for a specific customer, account, or plan: hardcoded IDs, customer-named flags, special-case config, and forked templates. For each one, record which customer, what it does, when it was added if the history shows it, and whether that customer is still active.

That list alone is usually eye-opening. Founders are often surprised to learn how many exist and how many belong to customers who churned.

### Step 2: Delete the dead ones

Branches for churned customers can usually go immediately. Branches whose behavior the customer no longer needs can go after a short confirmation with the account owner. This is often a third or more of the list, and removing it makes the rest easier to reason about.

### Step 3: Promote the useful ones into settings

Where a special behavior is genuinely useful, turn it into a named, documented account setting, such as "require manager approval over a threshold", that any customer could turn on. Now it is a feature. It can be tested, sold, and explained.

### Step 4: Put a gate on new ones

Agree on a simple rule: new customer-specific behavior needs a written reason, an owner, and a decision from whoever owns the product. Some teams also set a cap on how many can exist at once. The point is not bureaucracy. It is making the cost visible at the moment the decision is made.

## What to ask your team this week

If you are not technical, three questions will tell you a lot:

1. "How many places in the code behave differently for a specific customer?" If nobody knows, that is the first finding.
2. "Which of those belong to customers who have left?"
3. "If we signed a customer tomorrow who wanted the same thing as our top account, could we turn it on with a setting, or would it need code?"

The answers usually tell you whether this is a minor tidy-up or something that is quietly eating a large share of your engineering time.

## FAQ

### Is customer-specific code always technical debt?

Not always. It is a trade. It becomes debt when it is undocumented, unowned, and never revisited. A small number of well-documented accommodations is normal for early B2B.

### Should we charge for custom work?

Often, yes. If a customer needs behavior no one else wants, a paid customization priced to include ongoing maintenance is fairer to you and makes the trade explicit.

### How is this different from feature flags?

Feature flags are usually temporary switches for rolling out changes safely. Customer branches are usually permanent and tied to one account. Using a flag system to manage customer settings is fine, as long as the settings are named, documented, and tested like features.

### Who should own the decision to add a new one?

Whoever owns the product, with input from engineering on the cost. It should not be decided by sales alone or by a developer under deadline pressure.

If you want an outside view of how much custom code is slowing your team down, a [technical teardown](/teardown) will map it, or [book a call](/book-a-call) to talk it through.
