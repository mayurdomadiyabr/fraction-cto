---
title: Your offshore engineers are not deductible like your US team
slug: offshore-engineers-research-tax-amortization
date: '2026-11-28T04:36:45.787Z'
category: Fundraising
excerpt: >-
  US research costs are deductible again under Section 174A, but foreign
  research still amortizes over 15 years. What that means for your model.
description: >-
  Domestic R&E is deductible again under Section 174A; foreign research still
  amortizes over 15 years. What offshore-heavy startups should model.
author: The founder of Fraction
readTime: 5
draft: false
---

If you are a US company with engineers outside the US, their salaries are probably not deductible the way your US engineers' salaries now are, and that gap belongs in your financial model before an investor finds it. Since the 2025 tax law, domestic research and experimental costs can be deducted immediately again under a new Section 174A, but foreign research costs still have to be capitalized and spread over 15 years. For a startup with a large offshore team, that difference changes taxable income, cash taxes once you are profitable, and the comparison between hiring locally and hiring abroad.

This is not tax advice. The rules have elections, transition options, and procedures that depend on your specific facts. Take this to your accountant. What follows is why it matters to a technical founder and what to ask.

## What changed, in plain terms

From 2022 through 2024, US companies had to capitalize research and experimental expenditures, including most software development, and amortize them: over 5 years for domestic work and 15 years for foreign work. That rule surprised a lot of startups, because it could create taxable income in a year when the company was barely profitable on paper.

The One Big Beautiful Bill Act, signed in July 2025, created Section 174A. For tax years beginning after December 31, 2024, domestic research costs can again be deducted in the year they are incurred. Foreign research costs did not get that treatment. They stay on the 15-year schedule. Eligible small businesses, generally those passing the Section 448(c) gross receipts test with average gross receipts of $31 million or less, can also elect to apply the new domestic treatment retroactively to earlier years. Summaries from [Eide Bailly](https://www.eidebailly.com/insights/alerts/2025/congress-approves-expensing-fix-for-rd-costs-under-new-tax-bill) and [BDO's note on the IRS procedural guidance](https://www.bdo.com/insights/tax/irs-issues-procedural-guidance-on-obbba-treatment-of-r-and-e-expenditures) cover the details and the elections.

The short version for a founder: US engineering spend is back to being a current deduction. Offshore engineering spend that counts as research is not.

## Why a technical founder should care

Three reasons, in order of when they bite.

**The hiring comparison is skewed.** Founders usually compare an offshore engineer to a US engineer on salary alone. Once you are profitable, or close to it, the after-tax cost of a foreign research dollar is higher than its sticker price relative to a domestic dollar, because you deduct only a sliver of it each year. That does not make offshore teams a bad choice; a large salary gap still usually wins. It means the gap is smaller than the spreadsheet says. I cover the operational side of that choice in [managing an offshore team](/post-managing-offshore-team).

**Contract structure matters.** Whether work counts as foreign research, and who bears the cost, can depend on how the engagement is structured: your own foreign subsidiary, an employer-of-record arrangement, or an agency that delivers work product. Your accountant will want to see the contracts. If your agency contract is vague about what is being delivered and who owns it, that is a problem for [code ownership](/post-who-owns-your-code) as well as for tax.

**Diligence will ask.** Investors and their accountants look at tax exposure in financial diligence. A model that assumes all engineering spend is immediately deductible, when 60% of it is offshore, is the kind of thing that gets marked down and makes the rest of the model look less careful.

## How it plays out with real numbers

Take a simplified example, with round numbers chosen only to show the shape. A company spends $600,000 a year on engineering: $200,000 on a US team and $400,000 on an offshore team, all of it qualifying research.

- The $200,000 domestic spend is deductible in the year incurred.
- The $400,000 foreign spend is amortized over 15 years. With the midpoint convention for the first year, only a small fraction, on the order of a few percent, is deductible in year one.

If the company is loss-making, this mostly changes the size of tax losses carried forward. If the company is profitable, it can turn a year with small book profit into a year with real taxable income. Either way, your accountant should model it, not your engineering lead.

## What to do about it

You do not need to restructure your team because of a tax rule. You do need to stop being surprised by it.

1. **Tag engineering spend by location.** Your finance stack should know which engineering costs are domestic and which are foreign. If today it is one line called "development," split it.
2. **Keep the documentation.** The same records that support the research tax credit, which I wrote about in [the R&D tax credit and fractional CTO costs](/post-fractional-cto-rd-tax-credit), support the domestic versus foreign split: who did the work, where, on what project.
3. **Ask your accountant three questions.** Does any of our foreign spend count as research under these rules? Are we eligible for the small business retroactive election for earlier domestic costs? How does our offshore contract structure affect the treatment?
4. **Put it in the model before the raise.** One line, with a note, beats a diligence finding.

## FAQ

### Does this mean offshore engineering is more expensive than US engineering?

Not usually. The salary difference is often large enough that offshore still costs less. The tax treatment narrows the gap for profitable companies; it rarely reverses it.

### Does it matter if we are not profitable yet?

Less, but it still shapes your tax losses and becomes real the year you turn profitable. Getting the records right now is cheap.

### Does a contractor in another country count as foreign research?

It can, depending on where the work is performed and how the contract is structured. That is a question for your tax advisor with the contract in hand.

### Is the research tax credit affected the same way?

The credit and the deduction rules are separate, and the credit has its own rules about where research is performed. Your accountant can tell you how both apply to your team.

If you are weighing a US hire against an offshore team and want the technical side of that decision pressure-tested, see [how Fraction prices the work](/pricing) or [book a call](/book-a-call).
