---
title: Your team pastes your code into ChatGPT. Who wrote the rule?
slug: shadow-ai-startup-policy
date: '2026-07-22T14:10:00.000Z'
category: Pattern recognition
excerpt: >-
  Your team already pastes code, customer data, and contracts into personal AI
  accounts with no rule for it. Banning the tools fails. Here is the one-page
  rule that holds.
description: >-
  Your team pastes company code and customer data into personal AI tools with no
  policy. The one-page rule that fixes it, and where it surfaces if you wait.
author: The founder of Fraction
readTime: 7
draft: false
---

Nobody wrote the rule, and that is the whole problem. At most pre-seed to Series A startups, engineers, designers, and founders are already pasting source code, customer records, and half-finished contracts into personal AI accounts, and no line anywhere says what is allowed. You do not fix this by banning the tools, because the productivity is real and a ban only pushes the habit out of sight. You fix it with a one-page rule that names which tools are approved and which data must never leave, and you write it before a customer security review or an investor asks whether one exists.

I usually get pulled into this after the fact, in the week a founder is filling out a prospect's security questionnaire and hits a question they cannot answer honestly.

## The habit nobody approved

There was never a meeting where your team agreed to send company data to a third party. It happened one paste at a time. An engineer drops a failing function into a chat window to debug it. Someone pastes a customer's support thread to draft a warmer reply. A founder uploads the full draft of an investor agreement to get a plain-English summary before a call. Each of those is a small, sensible act by a person trying to move faster on a day that had no slack in it.

Added up across a five-person team over a year, those small acts are a steady stream of your most sensitive material flowing into accounts you do not own, cannot audit, and did not configure. The reason it stays invisible is that it works. The code compiles, the email lands, the summary is genuinely useful. Nothing breaks, so nothing ever forces a decision. It is the quiet drift that fills the gap where a policy should be, and by the time anyone looks, the habit is a year deep and woven into how the team gets its work done.

## What actually leaves the building

When I ask a team to walk me through a normal week, three kinds of data turn out to be walking out the door, and they carry different risks.

The first is source code. A snippet pasted for debugging often arrives with a hardcoded key, a connection string, or an internal endpoint still in it, because the engineer grabbed the whole block, not a sanitized version. That is the same class of exposure as [the secrets sitting in your git history](/post-secrets-in-git-history-diligence), except it lands somewhere you have no ability to scrub. It is also a quiet question about ownership: when your code becomes training input or sits in a vendor's logs, the neat story you tell about [who owns your code](/post-who-owns-your-code) gets a footnote you did not write.

The second is customer data. Support emails, user records, and account exports pasted in to summarize or triage almost always contain names, addresses, or account details you promised to protect. If you signed a data processing agreement with a customer, or your own privacy policy says customer data stays inside named systems, every one of those pastes is a small breach of a promise you made in writing. That is exactly the trap in [a privacy policy that promises what your code does not do](/post-privacy-policy-code-mismatch): the words say one thing and the daily practice says another, and the gap is invisible until someone audits it.

The third is legal and financial material. Draft contracts, cap tables, and board decks get pasted in for summaries and rewrites. This is often the founder's own habit, which is precisely why it never gets flagged. The person who would set the rule is the person breaking it.

## Why banning the tools does not work

The reflex, once a founder sees the exposure, is to ban the tools outright. It never holds. The productivity is real, the pressure to ship is higher, and the tools are one browser tab away on personal accounts you cannot see. A ban does not stop the behavior. It stops the behavior you can observe and drives the rest underground, which is strictly worse, because now people hide it and you have lost even the ability to ask.

There is a cleaner way to think about it. Using AI to do the work is fine and, in 2026, expected. The problem is not that your team uses these tools. The problem is that the same free consumer account that helps an engineer debug is also, by default, allowed to retain and learn from whatever gets pasted into it, and nobody chose that setting on purpose. The fix is not abstinence. It is moving the same work onto tools that are configured to keep your data, and writing down the short list of things that must never be pasted anywhere.

## The one-page rule that actually holds

You do not need a policy document a lawyer drafts over three weeks. You need one page a new hire can read in two minutes and actually follow. Three parts carry almost all of the value.

Name the approved tools. Pick the AI tools your team is allowed to use for company work and pay for the business or team tier, not the free personal one. The paid tiers of the major providers contractually do not train on your inputs and give you an admin view. That single switch, from personal free accounts to a paid team plan, converts most of your exposure from unmanaged to merely managed. It costs less per person than a lunch and it is the highest-leverage move on the list.

Write the never-paste list. Three or four concrete lines beat a page of principles. Customer names and records go on it. Secrets, keys, and credentials go on it. Signed contracts and financials go on it. Keep it specific enough that someone can glance at what they are about to paste and know the answer without a meeting.

Set the default for everything else. Most day-to-day work is neither obviously fine nor obviously forbidden. Give people a default they can act on alone: when unsure, strip the identifying details first, or ask in a shared channel. A default of asking only works if asking is fast and nobody gets punished for it, so say that out loud too.

Assign one owner. On a small team this is usually the most technical founder or the first engineering lead. Their job is not to police pastes. It is to keep the approved list current, answer the edge cases, and revisit the page once a quarter, because the tools change faster than any policy you write today.

## Where this surfaces if you wait

The reason to do this now, rather than the quarter you feel like it, is that the bill for waiting arrives at the worst possible time and someone else picks when.

It surfaces in a sales cycle. A mid-market prospect sends [the security questionnaire that stalls your biggest deal](/post-security-questionnaire-deal), and one line asks how employee use of AI tools is governed. "It is not" is a real answer that real buyers walk away from, and you will be writing it at the exact moment you most need the deal.

It surfaces in a raise. Technical diligence has caught up to this. An investor's advisor now asks how your team uses AI internally and what stops customer data from leaking into consumer tools, and a blank stare reads as an unmanaged company, not a fast one.

And it surfaces in an incident. A vendor changes a data setting, an account is compromised, or a customer notices their records showing up somewhere they should not, and you are reconstructing a year of pastes with no log to reconstruct from. Every one of these is cheaper to prevent with a one-page rule than to explain after the fact.

None of this requires slowing your team down or turning into the company that says no. It requires making one deliberate decision, on one page, before the pressure of a deal or a round makes it for you.

## FAQ

### Is it really that risky if we are only using ChatGPT to help write code?

The risk is not the help, it is the default settings and the data that rides along with the paste. Debugging snippets routinely carry secrets and internal details, and a free consumer account may retain and learn from them. Move the same work to a paid team tier that does not train on your inputs, keep credentials out of the window, and most of the exposure goes away while the productivity stays.

### We are five people and pre-revenue. Isn't a policy overkill?

Five people is exactly when the habits set, and habits are far cheaper to shape now than to unwind at thirty people with signed customer contracts. A one-page rule at this size is not bureaucracy, it is one decision written down. Skipping it does not save you the work, it just moves the work to your first enterprise deal or your first raise, where it costs more and you have less time.

### How do I get the team to follow it without playing cop?

Make the compliant path the easy one. If the approved tool is already paid for and set up, and asking about an edge case gets a fast answer with no blame, people use it, because it is genuinely less friction than hiding a workaround. Policing pastes does not scale and breeds concealment. Removing the reason to hide does. If you want a read on where your real exposure sits and what a right-sized rule looks like for your stage, [book a technical call](/book-a-call) and walk me through a normal week.
