---
title: You have to cut engineering to extend runway. Cut it once.
slug: cut-engineering-to-extend-runway
date: '2026-11-05T14:51:00.066Z'
category: Hiring
excerpt: >-
  When runway forces a cut to the engineering team, the order you decide in
  matters more than the number. One deep cut, made from the roadmap backward.
description: >-
  How a seed-stage founder should cut engineering to extend runway: decide scope
  first, then people, make one cut, and protect what keeps the product alive.
author: The founder of Fraction
readTime: 7
draft: false
---

If you have to cut engineering spend to buy runway, decide what the company will stop building before you decide who leaves. Then make one cut deep enough that you will not need a second one in three months. A small team survives one hard round. It rarely survives two, because the people you kept start updating their CVs the day the second round happens.

This is not the same problem as an engineer who is not performing. That is a judgment about one person, and I covered it in [what to do when your first engineer isn't working out](/post-first-engineer-not-working-out). A runway cut is a judgment about the plan. Good people leave in a runway cut, and the people who stay need to understand why the plan now needs fewer of them.

## Start with the roadmap, not the org chart

The common mistake is to open a spreadsheet of salaries and start removing rows until the burn number looks right. That produces a smaller team still pointed at the old plan, which means the same scope with fewer hands, which means missed dates, burnout, and a second cut.

Work in this order instead:

1. **Write down the new runway target.** Pick a date, not a percentage. "We need to reach March 2028 with at least six months of cash left" is a target. "Cut 30 percent" is not.
2. **Name the one or two outcomes the company must hit before that date.** Usually it is a revenue number, a usage milestone that makes the next raise possible, or a single enterprise customer going live.
3. **List what engineering is working on and mark each item keep, pause, or kill.** Be harsh. Paused work does not keep anyone employed; it just sits.
4. **Estimate the team the kept work needs.** Skills first, headcount second.
5. **Only now look at people.** Match the people to the team you just designed.

When founders do this honestly, the answer is sometimes surprising. A five-person team with a mobile app, a web app, an integrations layer and an internal admin tool might find that the mobile app has 4 percent of usage and can be frozen. That one decision may remove a whole role without touching anything customers depend on.

## Cut non-people spend first, but do not pretend it is enough

Before anyone loses a job, look at the spend that does not have a name attached:

- Cloud resources nobody has looked at since launch: idle staging environments, oversized databases, logs kept forever.
- Tool seats for people who left, and overlapping tools that do the same job.
- Agency or contractor hours on work you just marked pause or kill.

On most seed-stage teams I review, this is worth something, but it is rarely the size of a salary. If your monthly cloud and tool bill is $6,000 and you cut a third of it, you saved $2,000 a month. A senior engineer in the US costs well over $15,000 a month fully loaded. Do the non-people cuts because they are right, then be honest that they do not replace the hard decision. If you want a second pair of eyes on where the money goes, that is exactly what a [one-off technical teardown](/teardown) covers.

Contractors are usually the first place to look among people costs. They were brought in for flexible capacity, and the contract normally lets you end it with short notice. Ending a contractor still deserves a proper handover, but it is a different conversation from laying off an employee.

## Decide who stays by what the next twelve months need

Once you know the work, pick people by three questions:

- **Who can own the systems that keep paying customers running?** Someone has to be able to fix production at 2 a.m. without help. That person stays, even if they are not the fastest feature builder.
- **Who has range across the kept work?** On a team of three, a strong generalist is worth more than two specialists in areas you just paused.
- **Where does knowledge live in only one head?** If the only person who understands billing is on the cut list, either keep them or schedule a real handover before their last day, with written notes and a recorded walkthrough.

Avoid two traps. Do not cut by seniority alone; the most expensive engineer is often the one holding the architecture together. And do not cut the newest hire by default because it feels fairer. Tenure is not the question. The plan is.

## Make one cut, and make it deep enough

A cut that is too small is the most expensive outcome. You pay the emotional cost, you lose trust, and three months later you are back in the same meeting. Model the new burn against the runway target with a margin: if the numbers only work when revenue grows as forecast, they do not work.

Then tell the remaining team clearly that this is the cut. Say what the company is now focused on, what was stopped, and what would have to happen for any further change. People can work through bad news. Uncertainty is what makes your best engineer take the recruiter call.

## The legal and practical basics (not legal advice)

Small startups are usually outside the big layoff notice laws. The federal WARN Act applies to employers with 100 or more employees, and California's version applies at 75, so a ten-person company is normally not covered. That does not mean there is nothing to get right:

- **Final pay timing varies by state.** California, for example, requires final wages, including accrued unused vacation, to be paid at the time of termination, and late payment builds daily penalties. Check the rule for each state where your people work.
- **Health coverage continuation.** Federal COBRA applies at 20 or more employees, but many states, including California, have their own continuation rules that reach smaller employers.
- **Severance in exchange for a release.** It is common to offer a few weeks of pay in exchange for a signed release of claims. Have an employment lawyer draft it; release rules differ for employees over 40 in the US.
- **Equity.** Unvested options stop vesting. Vested options usually have a 90-day exercise window, which many people cannot afford. Extending it costs the company little and is often the kindest thing you can offer. I wrote about the tradeoffs in [extending the exercise window when an engineer leaves](/post-option-exercise-window-engineer-leaves).
- **Access.** Remove production, code, cloud and admin access on the last day, planned in advance, not discovered a week later.

## Run the day properly

Tell the people leaving first, one by one, in person or on a call, with the founder doing it. Then tell the rest of the team the same day, with the reasoning. Do not let anyone find out from a revoked Slack login.

Give the people who leave something useful: a reference, an introduction to two investors' portfolio job boards, permission to keep their laptop if that is cheap for you. The engineering community is small, and how you handle this is visible to the next senior engineer you try to hire.

## Rebuild the plan with the team you kept

The week after a cut, sit down with the remaining engineers and rebuild the roadmap together against the new capacity. Expect less to ship than before, and say so to the board. A smaller team on a clear, short list of priorities often ships more of what matters than the larger team did on a crowded one.

If you are the non-technical founder making this call without a technical leader in the room, get one for this decision. Deciding what can safely be frozen, and who can keep production alive, is a judgment that is hard to make from a salary spreadsheet. A short engagement is enough; see [pricing](/pricing) or [book a call](/book-a-call) to talk it through.

## FAQ

### Should we cut salaries across the board instead of letting people go?

It can work for a short, defined period when the whole team agrees and the cut is small. It rarely works as a long-term fix, because your strongest engineers have the most options and are the first to leave when pay drops. If the plan needs fewer people, a salary cut usually delays the decision rather than replacing it.

### How much severance should a seed-stage startup offer an engineer?

There is no fixed rule. Two to four weeks of pay is common at small companies, sometimes scaled by tenure, and it is normally paired with a release of claims. Ask an employment lawyer what is usual in the states involved and what the release must include.

### Should we replace laid-off engineers with an offshore agency to save money?

Only if the work you kept is well defined and someone senior can manage the agency. Replacing an in-house engineer who understood the system with a cheaper team that does not is a common way to save on salary and lose on speed and quality.

### How do we keep the remaining engineers from leaving?

Make one cut, explain it clearly, show the new plan, and keep your word that there is no second round unless the stated conditions change. Retention after a layoff comes from clarity more than from bonuses.
