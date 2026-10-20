---
title: Your app is logging customer passwords and nobody noticed
slug: passwords-in-your-logs
date: '2026-10-20T06:24:23.657Z'
category: Pattern recognition
excerpt: >-
  Request logging and error trackers quietly capture passwords, tokens and
  personal data. How to find it and stop it in a day or two.
description: >-
  How passwords, tokens and personal data end up in startup logs and error
  trackers, and a practical cleanup plan.
author: The founder of Fraction
readTime: 6
draft: false
---

A founder asks a simple question during a review: where do our customers' passwords live? The engineer says they are hashed in the database, which is true. Then we search the application logs for the word "password" and find thousands of lines like `POST /login body={"email":"...","password":"..."}`. Those logs are shipped to a third-party logging service, retained for 30 days, and readable by everyone on the team plus the agency that set it up.

Nobody decided to log passwords. A developer added "log every request body" while debugging a payment bug two years ago, and it was never removed. This is one of the most common findings I run into in early-stage codebases, and it is one of the cheapest to fix once someone looks.

## How sensitive data ends up in logs

It almost never comes from one bad decision. It comes from reasonable debugging habits that outlive the bug.

### Request and response logging

The single biggest source. Middleware that logs full request bodies captures login forms, signup forms, password resets, card details from any form that touches payment, and whatever customers type into support chat. Logging full responses captures API tokens and personal data on the way out.

### Error tracking with context

Error trackers are valuable precisely because they capture context: the request, local variables, headers, the user object. That context is where the session cookie, the Authorization header, and the user's address live. Most error trackers include default scrubbing for obvious field names, but custom field names like `pw`, `secret_answer` or `ssn_last4` slip through unless someone configures them.

### Third-party API calls

When your code calls a payment provider, an email service, or an AI model, it is common to log the outgoing request and the response for debugging. That outgoing request often contains your own API key in a header, or the customer's data in the body. AI features make this worse: prompts frequently include whole customer documents.

### Database query logs

Slow-query logs and ORM debug output can include the literal values in each query, including email addresses, tokens, and anything else being looked up.

## Why this matters more than it looks

The logs are often the least protected copy of your data.

- **Wider access.** The production database is usually locked down to a few people. The logging tool is shared with every engineer, contractors, and sometimes support staff.
- **More copies.** Logs get shipped to a log service, an error tracker, sometimes a data warehouse, and are kept in backups. Each is another place a breach can happen.
- **Retention you did not plan.** Log retention defaults are set by the vendor, not by your privacy policy. If your policy promises deletion on request, data sitting in logs and error reports may break that promise. This gap is covered in more depth in [when your privacy policy and your code disagree](/post-privacy-policy-code-mismatch).
- **Diligence and security reviews.** Enterprise security questionnaires ask directly whether credentials and personal data are excluded from logs. OWASP's Application Security Verification Standard includes the requirement that credentials and payment details are not logged. Saying yes without having checked is a risk of its own.

## The fix, in order

### 1. Search what you already have

Before changing any code, search the last week of logs and error reports for obvious strings: `password`, `token`, `authorization`, `secret`, `api_key`, `card`, `ssn`, and the field names your own forms use. Also search for patterns that look like email addresses or long random strings. This gives you a real list instead of a guess. In my experience the first search almost always finds something.

### 2. Stop logging bodies by default

Change request logging to record method, path, status code, duration, and a request ID. Not the body. If you genuinely need body logging for one endpoint, add it on purpose for that endpoint, with an allowlist of fields that are safe, and an expiry date in the code comment.

### 3. Add redaction at the logger, not in every call

Configure redaction once, in the logging library or a shared wrapper, so that known sensitive keys are replaced with `[REDACTED]` wherever they appear, including nested objects and headers. Most mainstream logging libraries support redaction paths. Relying on every developer to remember is how you got here.

### 4. Configure your error tracker's scrubbing

Turn on the error tracker's data scrubbing and add your custom field names to it. Exclude cookies and Authorization headers from captured requests. Check one real error report afterwards to confirm the fields show as filtered.

### 5. Rotate anything that leaked

If you found API keys, tokens, or credentials in logs, treat them as exposed: rotate the keys and invalidate the sessions. If you found user passwords in plain text, the conservative move is to force a password reset for affected accounts. This is the same logic as [secrets that sit in your git history](/post-secrets-in-git-history-diligence): removing the copy does not undo who could already see it.

### 6. Purge and shorten retention

Delete or expire the affected log data where your tools allow it, and set retention to the shortest period you actually use for debugging. For most early teams, 14 to 30 days of searchable logs is plenty.

### 7. Make it hard to regress

Add a test that sends a login request and asserts the captured log line does not contain the password value. It is a small test that catches the next person who adds verbose logging during a late-night bug hunt.

## What to log instead

Logs are for answering "what happened" without exposing "to whom, with what secret". Good defaults:

- A request ID that ties log lines together across services.
- A user ID or account ID, not the email address.
- The event, the outcome, and the duration.
- For failures, the error type and a safe message.

This gives engineers everything they need to debug, and keeps your logs boring if they ever leak. If your team already has an error tracker but nobody uses it well, [an error tracker nobody reads](/post-error-tracker-nobody-reads) is the companion problem worth fixing at the same time.

## FAQ

### Our passwords are hashed in the database. Are we fine?

Only if the plain-text password never gets written anywhere else on the way in. Request logging, error tracking, and proxies can all capture it before it is hashed. Search your logs to be sure.

### Does using a logging vendor make this their problem?

No. The vendor stores what you send. You decide what is sent, and you are still responsible for that personal data under most privacy laws. Vendors offer scrubbing and retention controls, but you have to configure them.

### How long does this cleanup take?

For a typical early-stage codebase, a focused day or two: an hour to search, a few hours to change logging defaults and add redaction, and time to rotate any exposed keys. Larger systems with many services take longer.

### Should we log anything about failed logins?

Yes. Log that a failed attempt happened, for which account ID, from which IP, and when. That is useful for spotting abuse. Never log the password that was tried.

If you want someone to run this search and the rest of a security sanity check on your stack, that is part of a [technical teardown](/teardown).
