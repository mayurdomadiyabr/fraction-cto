---
title: A customer typed an emoji and your database rejected it
slug: emoji-broke-the-database
date: '2026-11-17T04:51:20.135Z'
category: Pattern recognition
excerpt: >-
  Emoji errors, garbled names and rejected apostrophes come from text handling
  that assumed English. The causes and the fix.
description: >-
  Emoji errors, garbled names, rejected apostrophes: why MySQL utf8, length
  counting and name validation break, and how to fix them.
author: The founder of Fraction
readTime: 5
draft: false
---

When a customer types an emoji, an accented name or an apostrophe and your app errors, saves it as question marks or cuts the text off, the cause is almost always text handling that assumed plain English: a MySQL column using the old 3-byte utf8 character set, code that counts characters wrong, or validation that rejects real names. The fix is to use utf8mb4 (or Postgres UTF8) end to end, treat length limits as characters rather than bytes, and test with real-world text before customers do.

This sounds like a small bug class, and individually each instance is. But I keep finding it in products that are selling internationally, collecting names, or storing user-generated content, and it erodes trust in a way that is hard to see from the inside. A customer whose name is rejected by your sign-up form does not file a bug. They leave.

## The symptoms

- **"Incorrect string value" errors** in your logs when someone saves a message, a product review or a bio with an emoji in it.
- **Question marks or garbled characters** in names, addresses or comments, especially for customers in Europe, Latin America and Asia.
- **Truncated text** that ends mid-word, or with a broken character, because a limit was enforced in bytes.
- **"Please enter a valid name"** for people called O'Brien, Nguyen-Smith, Zoe with an accent, or anyone with one name.
- **SMS costs that jump** when one emoji or non-Latin character goes into a templated text.

## Why it happens

### MySQL's "utf8" is not full UTF-8

In MySQL, the character set historically called `utf8` is really `utf8mb3`: it stores up to three bytes per character and only covers what Unicode calls the Basic Multilingual Plane. Emoji and some other characters need four bytes. The MySQL manual says [utf8mb3 is deprecated and recommends utf8mb4 for all new applications](https://dev.mysql.com/doc/refman/8.4/en/charset-unicode-utf8.html). Plenty of databases, and the frameworks and tutorials that created them, still default to the old one, especially on schemas that started on MySQL 5.x.

With strict SQL mode on, MySQL rejects the insert and you see the error. With it off, the data can be silently mangled. I am not sure which is worse.

### "Length" means different things in different places

A database column might limit bytes or characters depending on the engine and type. JavaScript's `.length` counts UTF-16 code units, so a single emoji often counts as two, and some emoji built from several code points count as more. A form that says "50 characters max" can disagree with the database about what 50 means, and the user sees an error or a cut-off.

### Validation written from the developer's own name

A regular expression that only allows A to Z for names looks tidy and rejects a large share of the world. Hyphens, apostrophes, spaces, accents and single-word names are normal. The W3C's guidance on [personal names around the world](https://www.w3.org/International/questions/qa-personal-names) is the clearest short read on this.

An apostrophe that breaks a save deserves a closer look for a different reason: if a name like O'Brien causes a database error, the query may be built by string concatenation rather than parameters, which is the shape of a SQL injection risk. That belongs in the [security holes I look for in AI-written code](/post-ai-code-security-holes) and in human-written code too.

### SMS encoding changes the price

A standard SMS segment holds 160 characters in the GSM-7 alphabet. Include one character outside it, such as an emoji or many non-Latin letters, and the message switches to UCS-2 encoding, where a single segment holds 70 characters. A templated reminder with a customer's name in it can quietly cost two or three times as much to send. Twilio's documentation on [message encoding and segments](https://www.twilio.com/docs/glossary/what-is-ucs-2-character-encoding) explains the mechanics.

## The fix

### 1. Find out what you actually have

Check the character set and collation of your database, every table and every text column, plus the connection setting your application uses. A database can be utf8mb4 while one old table, or the client connection, is not. On Postgres, check that the database encoding is UTF8; it nearly always is, and then the remaining issues are in the application.

### 2. Convert to utf8mb4, carefully

Converting a large MySQL table rewrites it, so plan it like any [migration that can take production down](/post-one-line-migration-took-production-down): test on a copy, measure the time, and run it in a quiet window or with an online schema-change tool. Watch for index length limits. A VARCHAR(255) index that fit under 3-byte characters can exceed the index size limit at 4 bytes on older row formats, so some indexes need a shorter prefix or a newer row format.

### 3. Make lengths and validation honest

Decide whether limits are about display or storage, and count them the same way in the front end, the API and the database. Loosen name validation to allow letters from any script, spaces, hyphens and apostrophes, and use a single "full name" field unless you truly need separate parts. Make sure every query uses parameters.

### 4. Test with real-world text

Add a small set of test strings to your automated tests: an emoji, an accented name, a right-to-left name, a name with an apostrophe, a very long name. It takes an hour to add and catches regressions forever. This sits alongside the other data-type traps I see often, such as [money stored as a float and time stored without a zone](/post-money-and-time-data-types).

## What this costs to fix

For a young product the audit is an afternoon. Converting the database is a day to a few days depending on table size and how careful the migration needs to be. Validation and tests are another day. Compared with losing international sign-ups you never knew about, it is cheap. If you want this checked along with the rest of the stack, it is part of a [technical teardown](/teardown).

## FAQ

### We use Postgres. Are we safe?

From the storage problem, usually yes, since Postgres UTF8 stores four-byte characters fine. The length counting, validation and SMS issues are in your application and apply regardless of database.

### Should we just block emoji?

Only where there is a real reason, such as a field that feeds a system that cannot handle them. Blocking them everywhere frustrates users and does not fix the underlying assumption that text is ASCII.

### Is the utf8mb4 conversion risky?

It is a schema change on every text column, so treat it with care: back up, rehearse on a copy, and watch indexes. It is routine work when planned, and painful when done live on a Friday.

### How do I know if this is costing us customers?

Search your error logs for "Incorrect string value" and look at validation failures on name and address fields by country. If those numbers are not zero, it is. If you want help reading them, [book a call](/book-a-call).
