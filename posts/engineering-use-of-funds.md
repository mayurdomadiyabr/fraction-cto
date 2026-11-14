---
title: "Your use of funds says half is engineering. Show the math"
slug: engineering-use-of-funds
date: '2026-11-14T05:12:37.154Z'
category: Fundraising
excerpt: >-
  A bottom-up worksheet for the engineering slice of your raise: loaded hires by
  month, non-people costs and milestones on one page.
description: >-
  How to build the engineering line of a seed or Series A use of funds: loaded
  hiring costs, cloud and agency spend, and the milestones investors check.
author: The founder of Fraction
readTime: 6
draft: false
---

Most seed and Series A decks have a use-of-funds slide with a pie chart, and the biggest slice is usually engineering. Investors do not argue with the size of that slice. They argue with whether you can explain it. If you say 55 percent of the round goes to engineering, you should be able to show, on one page, which people and costs make up that number, what they will ship, and when the money runs out.

This post is the worksheet I walk founders through before a raise. It takes about two hours if you already know your current burn.

## Why a percentage is not a plan

A percentage tells an investor how you feel about engineering. It does not tell them how you will spend it. The questions that follow a pie chart are predictable:

- How many engineers, at what seniority, hired in which months?
- What does each one cost fully loaded, not just salary?
- What else sits in the engineering line: cloud, tools, contractors, an agency?
- What will this team have shipped by the time you raise again?

If the answers live only in your head, the partner meeting turns into an improvised spreadsheet session. That rarely goes well. A founder who answers in one breath with a short table looks like someone who has run a budget before, which is part of what the investor is buying.

## Build the engineering line from the bottom up

Start from people, because people are almost always 70 to 85 percent of an early engineering budget in my experience. Then add the non-people costs. Then check the total against your runway target.

### Step 1: list every hire by month

Write each planned role as a row: role, seniority, start month, base salary, and location. Be honest about start months. A senior engineer you want in month two often starts in month four once you count sourcing, interviews, notice periods and offer back-and-forth. A plan that assumes everyone starts on day one overstates what you will ship and understates your runway.

We cover how to sequence these roles in [the engineering hiring plan investors actually read](/post-engineering-hiring-plan-investors).

### Step 2: load each salary

Salary is not cost. Add employer payroll taxes, benefits, equipment, software seats and recruiting fees. A common planning rule is to multiply base salary by 1.2 to 1.4 for a US employee, depending on benefits and state. That range is a rule of thumb, not a benchmark, so use your payroll provider's real numbers if you have them. If you plan to use a recruiter, their fee is often a percentage of first-year salary, and it lands in the month of the hire, which makes month four of your plan lumpier than the average suggests.

For a worked example of what one senior hire really does to runway, see [what a senior engineer costs in runway](/post-senior-engineer-cost-runway).

### Step 3: add the non-people costs

List these as monthly lines, with a note on what drives each one up:

- **Cloud and hosting.** Your current bill, plus a growth assumption tied to customers or usage, not to time.
- **Third-party services.** Auth, email, monitoring, error tracking, AI model APIs. AI API spend in particular scales with usage and surprises people.
- **Developer tools.** Per-seat, so they grow with headcount.
- **Contractors or an agency.** Name the scope and the end date. An open-ended agency line is the single most common thing investors push on.
- **Security and compliance.** A pen test, a SOC 2 readiness tool or an audit, if a customer has asked for one.
- **Senior oversight.** If you are using a fractional CTO instead of hiring one full-time, it belongs here. Our own [pricing page](/pricing) shows what that line looks like as a fixed monthly retainer.

### Step 4: tie the money to milestones

This is the part most plans skip. For each quarter, write what the engineering team will have shipped. Not features in general: the two or three things that move the metrics your next round will be judged on. If the round is meant to get you from 400k to 2M in annual recurring revenue, the engineering milestones should explain which product work makes that revenue possible.

A useful test: cover the cost columns and read only the milestones. Would an investor believe this team could deliver them? Then cover the milestones and read only the costs. Would they believe these costs produce a team that size?

## A one-page example

Here is the shape I aim for. The numbers are illustrative, a composite rather than one company.

| Line | Months 1-6 | Months 7-18 | Notes |
|---|---|---|---|
| Existing team (2 engineers) | 180k | 360k | Loaded at about 1.3x base |
| Senior backend hire | 60k | 195k | Starts month 3 |
| Two mid-level hires | 0 | 270k | Start months 7 and 9 |
| Cloud and services | 30k | 90k | Grows with paying accounts |
| Agency (mobile app, fixed scope) | 80k | 0 | Ends month 6, handoff to team |
| Tools, security, oversight | 45k | 110k | Includes one pen test |
| **Engineering total** | **395k** | **1,025k** | About 52 percent of a 2.7M round |

Below the table, three lines of milestones per period. That is the whole artifact. It fits on one slide in the appendix and answers most of the follow-up questions before they are asked.

## The pushback you should expect

### "Why so much agency spend?"

Have the answer ready: what the agency is building, why your team should not build it, and the date the work comes in-house. If you cannot name the handoff date, investors will assume the agency becomes permanent.

### "What happens if hiring is slow?"

Slow hiring extends runway and delays milestones. Say which milestone slips first and whether a contractor covers the gap. Showing you have thought about this is worth more than pretending it will not happen.

### "What if revenue is slower than plan?"

Show the version of the plan where you stop hiring after the senior backend engineer. If you have never modelled cutting engineering spend, [our post on cutting engineering to extend runway](/post-cut-engineering-to-extend-runway) covers which cuts hurt least.

## Common mistakes I see

- **Engineering at 70 percent with no product milestones.** It reads as building in the dark.
- **Salary-only costs.** The plan runs out of money three or four months early, and a careful investor will notice.
- **AI API costs as a flat line.** If your product calls a model on every user action, that cost grows with usage. Model it per active user.
- **No line for senior judgment.** A team of four mid-level engineers with nobody setting direction is a risk investors will name, even if you do not.

## FAQ

### What percentage of a seed round should go to engineering?

There is no correct number. For a software product before product-market fit, engineering is often the largest single line, frequently around half or more. What matters is that the number falls out of a bottom-up plan rather than being chosen first.

### Should the use-of-funds slide show headcount?

Show headcount at the start and end of the period on the main slide, and keep the month-by-month table in the appendix or the data room. Investors who want detail will ask for it.

### Do investors check these numbers in diligence?

Often, yes, against your actual payroll and cloud bills. Keep the plan consistent with what is in your [technical data room](/post-technical-data-room).

### How often should I update the plan after the raise?

Compare plan to actual monthly and send the variance in your investor update each quarter. Boards trust a plan that is visibly maintained.

If you want a second pair of eyes on the engineering half of your raise before the partner meeting, [book a call](/book-a-call) and bring the spreadsheet.
