---
title: Should you pay engineers extra for being on call?
slug: should-you-pay-engineers-for-on-call
date: '2026-10-25T15:25:16.781Z'
category: Pricing the work
excerpt: >-
  Unpaid on-call is a fast way to lose your best engineers. What the law says,
  common stipend structures, and a simple first policy for a small team.
description: >-
  Should startups pay engineers for on-call? US FLSA basics, stipend and
  time-off models, and a starter on-call pay policy for a small engineering
  team.
author: The founder of Fraction
readTime: 6
draft: false
---

Yes, in most cases you should pay engineers something extra for being on call, even when the law does not require it. For salaried exempt engineers in the US, on-call duty usually does not change what you must legally pay, but a rotation with no compensation is one of the fastest ways to lose the senior people who carry it. A common shape is a flat weekly stipend for being on call plus either extra pay or time off when someone is actually paged out of hours. Equally important is keeping the rotation quiet enough that the stipend is a thank-you, not compensation for a broken system.

Founders usually reach this question in one of two ways. Either a senior engineer raises it directly, often after a bad weekend, or someone resigns and lists on-call as a reason in the exit conversation. By then the question is not really about money. It is about whether the company respects the time it is asking people to give up.

I have written about [when a startup actually needs on-call at all](/post-when-do-you-need-on-call). This post assumes you have crossed that line and are deciding how to pay for it.

## What the law says, briefly

This is not legal advice, and rules differ by country and by US state, so check with an employment lawyer for your situation.

In the US, the Fair Labor Standards Act distinguishes between employees who are "engaged to wait" and those "waiting to be engaged". Under the Department of Labor's rules in [29 CFR 785.17](https://www.ecfr.gov/current/title-29/section-785.17), an employee who can use the on-call time mostly for their own purposes is generally not working while they wait. Courts look at factors such as how quickly someone must respond, how often they are called, and how far they can go. Carrying a phone on its own usually does not make waiting time paid working time.

That analysis matters mainly for non-exempt, hourly staff. Most software engineers in the US are salaried and classified as exempt, so on-call duty generally does not change the minimum you are required to pay them. Outside the US, working-time and rest-period rules can be very different, especially in Europe, so do not copy a US policy to an engineer elsewhere without checking.

The legal floor is the wrong place to set this policy, though. The real risk is retention.

## Why unpaid on-call costs more than it saves

On-call takes something from an engineer even on quiet weeks. They cannot travel freely, they plan evenings around a laptop, and they sleep lighter. The engineers most likely to be on your rotation are the ones who know the system best, which also makes them the hardest to replace.

When on-call is unpaid, three things tend to happen. The senior people quietly take more shifts than they should, because they do not trust anyone else. Junior people avoid it. And within a year, your most important engineer has a recruiter offer from a company that pays a stipend and pages less. Replacing one senior engineer usually costs far more than a year of stipends for the whole team, before you count the knowledge that leaves with them.

## Common ways to structure it

There is no single right answer, but most policies are a combination of these pieces.

### A flat stipend for being on call

A fixed amount per week, or per day, for carrying the pager, regardless of whether anything happens. This is the simplest to administer and acknowledges the cost of being available. Set it at a level that feels meaningful to the people doing it. Ask them, and look at what comparable companies in your hiring market offer.

### Extra pay or time off for incidents

When someone is actually woken up or pulled away, compensate the time spent: either an hourly rate for out-of-hours work or time off in lieu. Time off works well at small companies, as long as people are actually allowed to take it. A rule like "if you were paged after midnight, start late the next day" costs very little and is noticed.

### Weekend and holiday premiums

Many teams pay more for weekends and public holidays, because those are the shifts nobody wants. Without a premium, they end up with whoever cannot say no.

### Equity or salary adjustments instead

Some founders prefer to raise base salaries for people on the rotation rather than paying a separate stipend. That can work, but it is less visible and harder to adjust as the rotation changes. A separate line keeps the cost obvious, which helps the next point.

## Make the cost visible so you fix the cause

The best reason to pay for on-call explicitly is that it turns a hidden cost into a number on a spreadsheet. Once you can see what pages cost, you have a reason to reduce them.

Track three things each month: the number of out-of-hours pages, how many were real incidents versus noise, and how much time was spent on them. If most pages are alerts nobody needed to act on, the first job is to fix the alerting, not to pay people more. If real incidents are frequent, the system has a reliability problem that deserves engineering time. I have written about [when observability stops being optional](/post-flying-blind-in-prod-when-to-pay-for-observability), and about [freezing features to fix reliability](/post-feature-freeze-reliability) when incidents keep repeating.

A quiet rotation with a modest stipend is a benefit people appreciate. A noisy rotation with a generous stipend is still a reason to leave.

## A simple starting policy

For a team of four to eight engineers, a reasonable first version looks like this:

1. A one-week rotation, with at least four people in it, so nobody is on more than one week a month.
2. A flat weekly stipend for being on call, set after asking the team.
3. Time off in lieu, or an hourly rate, for any page outside working hours.
4. A higher rate or extra time off for weekends and public holidays.
5. A monthly review of every page, with a goal of removing at least one noisy alert each month.

Write it down, apply it to everyone on the rotation, including founders if they carry the pager, and revisit it every six months.

If you are setting up your first rotation or trying to work out why your on-call is so noisy, that is a question I often help founders with. You can [book a call](/book-a-call), or see the [pricing page](/pricing) for how a short engagement works.

## FAQ

### Do I have to pay salaried engineers for on-call in the US?

For exempt salaried employees, on-call duty generally does not change the legal minimum you must pay, but state rules and individual circumstances vary. Paying something extra is mainly a retention and fairness decision. Check with an employment lawyer before writing a policy.

### Should founders be on the on-call rotation?

If they are technical and know the system, being on the rotation for a while is useful. It shows the team that the burden is shared and gives founders direct feedback on how noisy the system is. Apply the same rules to them.

### Is time off in lieu better than cash?

At a small company, time off is often more valued because it directly restores what was lost, which is rest. The risk is that nobody takes it when the team is busy. If you choose time off, track it and make sure it is used.

### How many people do I need before starting a rotation?

Four is a sensible minimum for a weekly rotation, so that each person is on call no more than about one week a month. With fewer people, consider limiting on-call to business-critical alerts only, or covering out-of-hours with a managed service.
