---
title: Auth0 Rules and Hooks stop on 18 November. Is your login on them?
slug: auth0-rules-hooks-end-of-life-november
date: '2026-11-11T04:46:43.511Z'
category: Vendors
excerpt: >-
  Auth0 Rules and Hooks reach end of life on 18 November 2026. How to check your
  tenant and move to Actions in a week.
description: >-
  Auth0 Rules and Hooks reach end of life 18 Nov 2026. Check your tenant,
  rewrite as Actions, and test token claims first.
author: The founder of Fraction
readTime: 7
draft: false
---

If your product signs users in through Auth0 and your tenant is older than late 2023, there is a real chance some of your login logic still runs as Auth0 Rules or Hooks. Auth0's documentation sets the end-of-life date for Rules and Hooks at 18 November 2026. The safe move this week is to check whether you use them, move any that exist to Auth0 Actions, and test sign-in end to end before that date rather than after it.

This is a small job for most startups. It becomes a big one only when nobody knows the Rules exist, which is common when an agency or a departed engineer set up authentication years ago.

## What is actually changing

Auth0 offers three ways to run your own code during authentication. Rules ran during login. Hooks ran at other points, such as before or after a user registers. Actions is the newer system that replaces both, with versioning, a code editor with type hints, and support for npm packages.

According to [Auth0's Rules documentation](https://auth0.com/docs/customize/rules), Rules and Hooks have not been available to new tenants created from 16 October 2023, and their end-of-life date is 18 November 2026. Auth0 publishes separate guides for migrating Rules to Actions and Hooks to Actions. The documentation does not spell out every detail of what an affected tenant will experience after that date, so plan as if the code stops running, because that is what end of life means for anything you depend on.

If your tenant was created after October 2023, you cannot have Rules or Hooks, and you can stop reading here unless you want the checklist for future vendor deadlines.

## Why a founder should care about a login script

Rules usually look harmless. They are often ten or twenty lines of JavaScript. But they sit on the one path every user takes, and they tend to do things the rest of your product silently depends on.

### Common jobs Rules quietly do

In the setups I have reviewed, Rules typically:

- **Add custom claims to tokens**, such as a user's role, organization ID, plan or tenant. Your API may read those claims to decide what a user can see.
- **Block or flag unverified emails** before letting someone in.
- **Assign default roles** to new users.
- **Enrich profiles** by calling an external service, or copy data from your own database into the user record.
- **Sync new sign-ups** to a CRM, mailing list or analytics tool.
- **Enforce extra checks** for certain customers, like requiring multi-factor authentication for one enterprise account.

### Why the failure is dangerous, not just annoying

If a Rule that blocks something stops running, the block disappears. If a Rule that adds a role or organization claim stops running, your API may receive tokens without the claim it expects. Depending on how your authorization code handles a missing value, the result is either users locked out of features or, worse, users seeing data they should not. A defensive codebase denies access when a claim is missing. Not every codebase is defensive. If you are not sure how your app keeps one customer's data from another, my note on [what keeps tenant data apart](/post-tenant-isolation-by-memory) is worth reading alongside this.

## A one-week plan

Seven days is enough for a typical startup with a handful of Rules. It is tight if you have dozens or if nobody understands them, so start today.

### Day 1: inventory

Sign in to the Auth0 dashboard for every tenant you run, including development and staging. Look for the Rules and Hooks sections and list each item that is enabled: its name, what it does in one sentence, and who wrote it. Also check whether any deployment pipeline or infrastructure-as-code tool creates Rules automatically, because those can come back after you delete them by hand.

If you find nothing enabled in any tenant, you are done. Write that down so the next person does not repeat the check.

### Day 2: decide keep, rewrite or delete

For each Rule or Hook, decide whether it still matters. Old setups accumulate scripts for integrations you no longer use. Deleting a dead Rule is cheaper than migrating it. Be careful with anything that touches roles, claims or blocking, and confirm with whoever owns authorization before removing it.

### Days 3 to 4: rewrite as Actions

Most login Rules become a post-login Action. Hooks map to other triggers depending on when they ran, for example around user registration or machine-to-machine token exchange. Follow Auth0's migration guides rather than translating line by line from memory; the event and API objects are shaped differently, and secrets are configured differently.

Two practical rules while rewriting:

- **Keep each Action small and single-purpose.** One for claims, one for blocking, one for CRM sync. It makes testing and rollback easier.
- **Move secrets into the Action's secrets settings,** not hard-coded values. Migration is a good moment to rotate any API keys that lived inside old Rules for years.

### Day 5: test the real flows

In a development tenant, test every path a real user takes: password sign-in, social sign-in, single sign-on for enterprise customers, sign-up, password reset, and any machine-to-machine clients. For each, decode the token your app receives and compare its claims with what production issues today. A difference in one claim is exactly the kind of bug that ships quietly. If your enterprise customers use SSO connections, test those individually; my [SSO build-or-buy note](/post-enterprise-sso-build-or-buy) covers why those connections are often configured one customer at a time.

### Days 6 to 7: switch over and watch

Deploy the Actions to production, then disable the old Rules and Hooks one at a time, checking sign-in after each. Read Auth0's guidance on how Rules and Actions behave while both are active, so you do not run the same logic twice during the switch. Watch login logs and error rates for a day. Keep the old code exported somewhere so you can refer back to it, even though you cannot re-enable it after end of life.

## If someone else set up your auth

Many early products had authentication built by an agency or a contractor who is no longer around. Rules are one of the places their work hides, because the code lives in a vendor dashboard rather than your repository. If that is you, ask three questions now:

1. **Who has admin access to our Auth0 tenants?** Make sure at least one current employee does, using a company account rather than a personal one.
2. **Is any of our auth configuration in source control?** If not, this migration is the moment to start, so the next deadline is a code review rather than an archaeology project.
3. **Can the original builder explain each Rule?** If they are reachable, an hour of their time is worth paying for. If not, treat each Rule as unknown and test accordingly.

This pattern is broader than Auth0. Vendor deadlines keep arriving: model retirements, [cloud services that get shut down](/post-cloud-provider-retires-service), platforms moving to maintenance mode. The teams that handle them calmly are the ones that keep a short register of every external service they depend on, with an owner and the date of any announced change.

## What it costs

For a startup with a few Rules and a working development tenant, this is typically one to three days of an engineer's time; that is my judgment from similar migrations, not a benchmark. The cost climbs when nobody can explain what the Rules do, when there is no development tenant to test in, or when authorization logic in your API depends on claims in ways nobody documented. Those are findings worth having regardless of the deadline.

If you would like a second pair of eyes on your auth setup before the date, a [technical teardown](/teardown) covers it, or [book a call](/book-a-call) and we can walk through your tenant together.

## FAQ

### How do I know if my Auth0 tenant uses Rules or Hooks?

Open the Auth0 dashboard for each tenant and check the Rules and Hooks sections for enabled items. Tenants created from 16 October 2023 never had access to them. Check development and staging tenants too, and any tooling that creates Rules automatically.

### What happens if we miss the 18 November 2026 date?

Auth0 lists that date as end of life for Rules and Hooks. Plan as if they stop running. The practical risk is that sign-in still appears to work while blocks, roles or token claims your app relies on silently disappear.

### Can we migrate everything into one big Action?

You can, but small single-purpose Actions are easier to test, debug and roll back. Group by job: claims, access checks, profile enrichment, external sync.

### Do Actions cost more than Rules?

Check your current Auth0 plan and its limits on Actions. For most startups the migration does not change the bill, but confirm before assuming, especially if your Rules call external services on every login.

### Is this a reason to leave Auth0?

Not by itself. A forced migration is a fair moment to ask whether your identity provider still fits, but switching providers is a much larger project than moving Rules to Actions. Do the migration first, then decide calmly.
