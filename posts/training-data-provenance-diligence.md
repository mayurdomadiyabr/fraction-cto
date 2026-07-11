---
title: Where did your training data come from? Diligence asks now
slug: training-data-provenance-diligence
date: '2026-07-11T16:48:51.184Z'
category: Fundraising
excerpt: >-
  The first question a technical reviewer asks an AI startup in 2026 is not
  about your model. It is where your training and eval data came from, and
  whether you can prove it.
description: >-
  Why data provenance is now the opening question in AI technical diligence, and
  how to answer it before it stalls your round.
author: The founder of Fraction
readTime: 5
draft: false
---

A year ago, technical diligence for an AI startup opened with the model. How does it perform, what is the architecture, what is the moat. In 2026 the first question moved. Now the reviewer asks where your data came from, and they ask it before they ask anything about the product.

I sit on the other side of these calls, and the shift is not subtle. A reviewer who used to spend the first hour on benchmarks now spends it on provenance. The reason is money. In September 2025 the Bartz v. Anthropic case settled for roughly 1.5 billion dollars over books used in training, and every publisher and image library with a legal budget noticed. Investors read that number as a line item that could land on a company they own. So they check.

## What the reviewer is actually pricing

A diligence reviewer is not grading your data pipeline. They are estimating one thing: the probability that a dataset you used becomes a lawsuit, an injunction, or a forced retraining after they wire the money. That risk is now large enough to kill a round on its own, so it gets priced first.

There are three buckets they sort your data into. Licensed data you paid for and can show a contract for is clean. Data you generated or collected from your own users, with consent that actually covers model training, is mostly clean. Everything else, scraped web data, a dataset a contractor "found," a Hugging Face download with an unclear license, a competitor's outputs used to fine-tune, is the pile that stalls the deal. The reviewer's job is to figure out how much of your model's value sits in that third bucket.

The uncomfortable part is that most early AI companies have more in the third bucket than they think, because the person who assembled the first training set was moving fast and did not write anything down. This is the same pattern I describe in [do you have an AI moat, or are you just renting one](/post-ai-moat-diligence): the thing that made the demo impressive is often the thing you cannot defend.

## The questions, and what a good answer sounds like

Here is what actually gets asked, and the shape of an answer that moves the conversation forward instead of freezing it.

Where did each dataset come from? A good answer is a short table: dataset name, source, license, date acquired, and what it is used for. Not prose. A reviewer who gets a table assumes you have the receipts. A reviewer who gets "mostly public sources" assumes you do not.

Do you have the right to use it for commercial model training specifically? This trips people up. A dataset can be free to download and still prohibit commercial use or training. Terms of service that allow scraping for research do not allow scraping to build a product you sell. The license has to permit the exact thing you did.

Can you reproduce your eval set, and is it clean of the training data? Investors care about eval integrity now because a model that looks great on a contaminated eval is a mispriced asset. If your test set leaked into training, your benchmarks are fiction.

What happens if a source is pulled? If 30 percent of your data suddenly becomes legally radioactive, can you retrain without it, and what does the model look like then? The company that can answer this has done the thinking. The company that cannot is selling a model with an unpriced dependency, which is the same failure mode as [the AI model your product runs on being retired](/post-ai-model-deprecation-risk), except the trigger is a court instead of a vendor.

## What to do before the call

Build a data inventory before anyone asks for one. One row per dataset: name, source, license or contract link, acquisition date, consent basis if it is user data, and where it is used. This is a half day of work that a founder keeps postponing because nothing forces it, and then a diligence request forces it in the worst possible week.

Rotate anything in the third bucket out of the critical path now, while it is cheap. If a model's performance secretly depends on data you cannot license, you want to know that six months before a raise, not during it. Retraining on clean data takes time and usually costs some accuracy, and both are survivable early and expensive late.

Get indemnity where you can. Several commercial data providers and foundation-model vendors now offer contractual indemnification for IP claims tied to their data or outputs. A reviewer who sees that you deliberately chose indemnified sources for the load-bearing parts of your stack reads it as adult risk management, and it can be the difference between a note in the memo and a condition on the term sheet.

None of this makes the underlying question go away. It just means you are the founder who brought the answer instead of the one who got surprised by the question. That difference sets the tone for the rest of diligence, which is the same reason a written technical memo works better than a defensive scramble.

If you are heading into a raise and are not sure which bucket your data actually sits in, that is exactly the kind of thing worth pressure-testing before an investor does it for you. You can [book a call](/book-a-call) and we can go through it.

### FAQ

### Does this only matter for companies training their own models?
No. Even if you only fine-tune or call an API, reviewers ask what data you send, what you retain, and whether your fine-tuning data is clean. Renting a model does not remove the question, it just moves it to your own data.

### We are pre-seed. Is this really being checked yet?
Lighter, but yes. At pre-seed a reviewer may just ask you to describe your data sources on a call. The point is that a confident, specific answer is a positive signal that early, and a vague one plants a doubt that grows as you raise more.

### What if we already trained on questionable data?
Say so internally and plan the remediation before diligence, not during it. The worst outcome is a reviewer discovering it and concluding you either did not know or did not disclose. A known, planned fix is a manageable risk. A surprise is a broken deal.
