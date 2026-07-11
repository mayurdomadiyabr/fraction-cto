---
title: Your privacy policy promises what your code does not do
slug: privacy-policy-code-mismatch
date: '2026-07-11T16:48:51.767Z'
category: Fundraising
excerpt: >-
  Your privacy policy says one thing about customer data. Your actual data flows
  do another. In diligence and in a breach, that gap is the liability, not the
  code.
description: >-
  When your privacy policy and your real data handling disagree, the gap becomes
  a diligence and legal liability. How to find and close it.
author: The founder of Fraction
readTime: 5
draft: false
---

Most startups write a privacy policy once, early, by copying a template or letting a lawyer fill in a standard form. Then the product evolves for two years. New integrations get added, analytics tools get wired in, customer data starts flowing to places the policy never mentioned, and a feature quietly starts using customer data to improve a model. The policy stays frozen. The code keeps moving. The gap between them grows, and nobody is watching it.

That gap is a liability, and it surfaces at the two worst moments: during diligence, when a reviewer maps your real data flows against your stated policy, and during a breach, when a regulator does the same thing with subpoena power.

## Why the mismatch is the risk, not the code

Founders think of privacy risk as "did we get hacked." The more common and more preventable risk is "does what we do match what we said we do." A reviewer or regulator does not need a breach to find a problem. They just need your privacy policy in one hand and your actual data handling in the other, and a discrepancy between them.

The discrepancies are specific and common. Your policy lists three subprocessors, your code sends data to eight. Your policy says you do not share data with third parties, but your analytics and session-replay tools receive it. Your policy promises data is deleted on request, but it lives on in backups and a data warehouse nobody wired into the deletion path. Your policy predates the feature that now uses customer content to fine-tune a model, and says nothing about it. Each of these is a place where your stated commitment and your real behavior diverge, and each is enforceable against you.

In diligence, this reads as a governance failure, and governance failures spread the same way other red flags do, once a reviewer finds one gap between your claims and your reality, they re-examine every other claim. It sits in the same family as the [red flags that kill a round](/post-diligence-red-flags): individually survivable, collectively a pattern that says the company does not know its own state.

## Where the gaps actually come from

This is rarely deception. It is drift, and it comes from a few predictable places.

The policy was written before the product existed. A template written at incorporation cannot describe data flows that were built eighteen months later. Nobody went back to update it because nothing forced them to, there is no test that fails when your privacy policy goes stale.

Third-party tools were added without a data review. Every analytics SDK, support widget, session-replay tool, and marketing pixel is a data flow. They get added by whoever needed them, for good reasons, and each one quietly receives customer data. The policy's list of who touches your data falls behind reality one integration at a time. This is the same [integration sprawl](/post-integration-sprawl) that couples your systems, except here the cost shows up as a compliance gap instead of an engineering one.

Deletion and retention were never really built. "We delete your data on request" is easy to write and hard to implement, because data hides in backups, logs, analytics platforms, and warehouses. Many teams promise deletion they cannot actually perform end to end.

And the AI feature changed the deal. The moment you start using customer data to train or fine-tune, you have created a new data use that almost certainly is not covered by a policy written before that feature existed. This is now one of the first things sophisticated reviewers check.

## How to close the gap before someone else finds it

The fix is a data map, and it is less work than it sounds. The point is to make your real behavior and your stated policy agree.

Map where customer data actually flows. List every place customer data is collected, stored, processed, and sent: your database, your backups, every third-party tool that receives it, your analytics, your warehouse, any model you train or fine-tune. This is the document your policy is supposed to be describing, and most companies have never written it down.

Compare the map to the policy, line by line. Every real data flow should be reflected in the policy, and every promise in the policy should be something the code actually does. Where they disagree, you either fix the code to match the promise or fix the policy to match reality, and which one depends on what you actually want to be true.

Build the capabilities you claim. If you promise deletion, make sure deletion actually reaches backups and downstream systems. If you name your subprocessors, keep that list current as tools change. The gap between promise and capability is exactly what a customer's security review or a regulator will probe.

Put the AI data use in writing. If customer data trains or improves a model, say so explicitly, with the controls and opt-outs that regulation in your markets requires. Reviewers in 2026 treat vague AI data language as a flag, not a nicety.

Keep the map alive. The reason this drifted in the first place is that nothing forced an update. Review the data map when you add a major integration or ship a feature that touches customer data. A living map is also half of what you need when a big customer sends a [security questionnaire](/post-security-questionnaire-deal) or when a raise turns into a real data-handling review. Doing it before either of those is cheaper than doing it under their deadline.

### FAQ

### Is this a legal problem or an engineering problem?
Both, which is why it falls through the cracks. The lawyer wrote a policy without seeing the data flows, and the engineers built data flows without reading the policy. Closing the gap needs both to look at the same data map. The map is the shared artifact.

### We are early. Do investors really check this?
At seed it is a light check, at Series A and for enterprise customers it is a real one. But the cheapest time to build a data map is now, while your data flows are simple. It gets harder every integration you add, so early is an advantage, not a reason to skip it.

### Does SOC 2 cover this?
Not exactly. SOC 2 checks that you follow your own stated controls, it does not guarantee your privacy policy matches your data flows. You can be SOC 2 compliant and still promise deletion you cannot perform. The data map is a separate, more basic exercise, and worth doing before you decide whether you even [need SOC 2 yet](/post-soc2-to-raise).
