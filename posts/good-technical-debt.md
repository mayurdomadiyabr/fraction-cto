---
title: 'Good technical debt: when the shortcut is the right call'
slug: good-technical-debt
date: '2026-06-18T14:29:15.993Z'
category: Decisions
excerpt: >-
  Not all technical debt is a mistake. The best early teams take it on
  deliberately, write down the terms, and repay it before it compounds.
description: >-
  Not all technical debt is a mistake. How to take on deliberate debt, write
  down the terms, and repay it before it compounds.
author: The founder of Fraction
readTime: 4
draft: false
---

Every founder has been warned about technical debt like it is a moral failing. Take shortcuts and the codebase rots, the team slows, the rewrite looms. That story is half true. The other half, the half nobody tells early founders, is that the best teams take on debt deliberately, on purpose, as a financing decision, and they are right to.

## Debt is a tool, not a sin

Borrowing against the future is how you move fast enough to have a future. A startup that refuses all technical debt is a startup polishing infrastructure for a product the market has not validated. That is not discipline. It is a quieter way to run out of money.

The distinction that matters is not debt versus no debt. It is deliberate debt versus accidental debt. Deliberate debt is a choice you made with eyes open: we are hardcoding this, skipping that test, copy-pasting this service, because shipping this week is worth more than the cleanliness, and we know what we are trading. Accidental debt is the mess you did not decide to take on and cannot see, the kind that surprises you in an outage or a diligence room.

Deliberate debt is cheap because you can pay it back. You know where it is. You wrote down the terms. Accidental debt is expensive because you find it at the worst possible moment, at full price.

## Write down the terms of the loan

A real loan has a principal, an interest rate, and a repayment trigger. Treat technical debt the same way.

- The principal is the shortcut: what you are doing instead of the right thing.
- The interest is what it costs you every week you carry it, the slower changes, the workarounds, the onboarding friction.
- The repayment trigger is the condition that says pay this back now: a user threshold, a second customer, a fundraise, a feature that finally depends on it.

Put those three things in a comment, a ticket, or a one-line debt register. The act of writing them down converts invisible accidental debt into visible deliberate debt, which is the entire game. A team that can list its debts and their triggers is in control. A team that cannot is just hoping.

## High-interest debt to refuse

Not all shortcuts are equal. Some debt is cheap and some is usurious, and the usurious kind is worth refusing even under deadline pressure.

Refuse debt in anything that is hard to reverse later: your data model, your auth and permissions, anything that handles money, anything that touches customer data you cannot un-leak. Shortcuts here compound at a brutal rate, because reversing them means migrations, audits, and trust you may not get back.

Take debt freely in things that are easy to throw away: the admin panel, the internal script, the first version of a feature you are not sure anyone wants. If it is cheap to delete, it is cheap to do badly on purpose.

This is the same instinct behind build, buy, or wait. Most of the value is in knowing which decisions are reversible and which are not. I laid out that framework in [build, buy, or wait](/post-build-buy), and deliberate debt is the same muscle applied to your own code.

## Pay it back before it compounds

The danger is not taking on debt. It is forgetting you did. Deliberate debt becomes accidental the moment the person who took it leaves, the comment gets buried, or the trigger passes unnoticed. Then it is just rot with a backstory.

So review the register on a cadence. Monthly is plenty early on. And actually act on the triggers. If you are not sure whether a particular shortcut is the cheap kind or the dangerous kind, that is exactly the judgment a short technical review buys you. A [Teardown](/teardown) is a fast way to get a blunt read on which of your debts are fine and which are quietly setting fire to your runway.

## FAQ

### Isn't all technical debt bad?

No. Debt you took deliberately, wrote down, and can repay is a financing tool that lets you ship before you are sure. Debt you took accidentally and cannot see is the bad kind. The label is the same; the risk is opposite.

### How much technical debt is too much?

When the interest, the weekly drag of carrying it, starts to exceed the value of moving fast, you are over-leveraged. In practice you feel it as changes that should take a day taking a week. That is the signal to repay, not borrow more.

### Who decides what debt to take on?

Someone with the judgment to tell reversible from irreversible. That is a leadership call, not a junior one, because the cost of getting it wrong lands quarters later. If no one in the room can make that call confidently, borrowing one day a week of senior judgment is cheaper than the wrong shortcut.

## A quick test before you borrow

Before you take a shortcut, ask one question: if this turns out wrong, what does it cost to undo? If the answer is an afternoon, take the debt and move on. If the answer is a data migration, a security review, or an apology to your customers, slow down and do it properly the first time. That single question sorts almost every shortcut into cheap or dangerous faster than any architecture diagram. The teams that stay fast are not the ones who avoid debt entirely. They are the ones who only ever borrow the kind they can repay in an afternoon, and who keep a short list of what they owe.
