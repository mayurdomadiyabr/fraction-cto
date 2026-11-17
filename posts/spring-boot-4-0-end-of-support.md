---
title: Spring Boot 4.0 loses free support on 31 December. Plan the jump
slug: spring-boot-4-0-end-of-support
date: '2026-11-17T04:53:41.414Z'
category: Vendors
excerpt: >-
  Spring Boot 3.5 is already off free support and 4.0 follows on 31 Dec 2026.
  The dates, what the 4.x upgrade involves, and a plan.
description: >-
  Spring Boot 4.0 free support ends 31 Dec 2026; 3.5 ended June 2026. Support
  dates, what changes in 4.x, and a six-week upgrade plan.
author: The founder of Fraction
readTime: 6
draft: false
---

Free (open source) support for Spring Boot 4.0.x ends on 31 December 2026, and Spring Boot 3.5.x, the last 3.x line, already lost free support on 30 June 2026. If your backend is on any 3.x version or on 4.0, you are either already off free security patches or will be in about six weeks. The practical move for most startups is to plan an upgrade to 4.1 (free support until 31 July 2027) or the 4.2 line due at the end of November, going through 3.5 first if you are on an older 3.x.

I am writing this because Java and Kotlin backends are common in the startups I work with, especially ones built by agencies, and framework support dates are exactly the kind of deadline nobody on a small team is watching. The dates below are from Spring's own [support generations table](https://spring.io/projects/generations/), checked on 17 November 2026.

## Where each Spring Boot line stands today

| Spring Boot line | Free (OSS) support ends | Paid commercial support ends |
|---|---|---|
| 3.3.x | 30 June 2025 | 30 June 2026 |
| 3.4.x | 31 December 2025 | 31 December 2026 |
| 3.5.x | 30 June 2026 | 30 June 2032 |
| 4.0.x | 31 December 2026 | 31 December 2027 |
| 4.1.x | 31 July 2027 | 31 July 2028 |
| 4.2.x (due 30 November 2026) | 31 December 2027 | 31 December 2028 |

Two things stand out. First, 3.5 has an unusually long paid tail, to 2032, which is the option for companies that truly cannot move. Second, the free window on each line is short, roughly a year or so. Spring Framework itself follows a similar pattern: 6.2.x lost free support on 30 June 2026 and 7.0.x keeps it until 31 July 2027.

"End of free support" means the open source project stops publishing fixes for that line, including security fixes. Your app keeps running. What changes is that the next serious vulnerability in Spring or one of its managed dependencies will be fixed in a version you are not on.

## Why this matters more than a version number

### Security questions get harder to answer

Enterprise customers' security questionnaires and investors' technical diligence increasingly ask whether your core framework is on a supported version. "We are on 3.4, which lost free support in December 2025" is not a fatal answer, but it is a finding, and it tends to lead to more questions. I have written before about how to decide [when a dependency upgrade can wait and when it cannot](/post-dependency-upgrade-or-defer); a web framework that handles every request is in the cannot-wait group.

### Your managed dependencies age with it

Spring Boot pins the versions of dozens of libraries: the web server, JSON handling, database drivers, logging. Staying on an unsupported Boot line usually means staying on old versions of all of those too, or overriding them one by one, which is how teams end up with a build nobody fully understands.

### Agency-built apps are the most exposed

If an agency built your backend and the contract ended, nobody is watching these dates for you. If they are still on a retainer, this is precisely what [a maintenance retainer should be covering](/post-agency-maintenance-retainer), and it is a fair question to ask them this week.

## What changes in the 4.x jump

Spring Boot 4.0 is a major release built on Spring Framework 7. The official [4.0 migration guide](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.0-Migration-Guide) is long, but the changes that usually cost time on a startup codebase are these.

### Upgrade to 3.5 first

The 4.0 release notes strongly recommend moving to 3.5 before going to 4.0. That is good advice. Each step surfaces its own deprecation warnings, and fixing them on 3.5 keeps the 4.0 change smaller.

### Java 17 minimum

Spring Boot 4.0 requires Java 17 or later, and the guide recommends the latest Java LTS. If you are still on Java 11, that is its own upgrade, and it touches your build images and deployment environment too.

### Jackson 3

JSON handling moves to Jackson 3, whose group IDs and packages change from `com.fasterxml.jackson` to `tools.jackson` (annotations keep the old package). Jackson 2 is still available through a deprecated module, which is a useful bridge, but every custom serializer and every `ObjectMapper` configuration needs a look.

### Starters and removed features

Starters are now smaller and more focused, with "classic" starters available to ease the move. Several things deprecated in 3.x are gone, including Undertow as an embedded server and the `@MockBean` / `@SpyBean` test annotations, which are replaced by `@MockitoBean` and `@MockitoSpyBean`. If your tests use the old annotations heavily, expect a mechanical but real chunk of work there.

## How much work it is

My judgment from upgrades like this, not a benchmark:

- **A small, conventional service** (one app, standard web and database starters, decent tests, already on 3.5): a few days to a week for one experienced engineer, including testing.
- **A typical seed-stage backend on 3.2 to 3.4** with some custom JSON handling and patchy tests: two to four weeks of calendar time, because each step needs a deploy and a period of watching production.
- **An agency-built codebase with little test coverage**, Java 11, or several services: plan it as a project, with a test-writing phase before the upgrade itself.

The biggest variable is not Spring. It is whether you have tests that tell you the upgrade broke something. If you do not, the first week of the project is writing them around your most important flows.

## A plan for the next six weeks

### 1. Find out what you are running

Check the Spring Boot version in every service's build file and the Java version in every runtime image. Many teams discover one forgotten service, often an admin tool or a job runner, several versions behind the rest.

### 2. Decide: upgrade, or pay for time

For most startups the answer is to upgrade to 4.1, or to 4.2 once it is out and has had its first patch release. If you have a genuine reason you cannot move soon, paid commercial support on 3.5 runs to 2032; price it honestly against the cost of the upgrade and remember it only delays the work.

### 3. Do it in steps, with deploys between them

Java version, then 3.5, then 4.x. Each step goes to production and runs for a while before the next. Big-bang upgrades of a framework and a language at the same time are how a routine job turns into an outage.

### 4. Put the next date in the calendar

Whatever line you land on will lose free support in roughly a year. Add the date now, and make "framework within support" a standing item in your quarterly engineering review. This is the same discipline I recommended for [Node.js release lines](/post-node-js-26-lts-upgrade) and [Postgres major versions](/post-postgres-14-end-of-life-rds-bill).

If you want a second opinion on the upgrade plan, or on what else in the stack is about to age out, a [technical teardown](/teardown) covers it.

## FAQ

### Does my app stop working on 1 January 2027 if I am on Spring Boot 4.0?

No. Nothing switches off. The 4.0 line simply stops receiving free fixes, including security fixes, so you take on more risk every month you stay.

### Should we go straight to 4.2?

If you are starting the upgrade in December, targeting 4.2 makes sense because it has the longest free support window, to 31 December 2027. Many teams wait for the first patch release after a new line comes out before moving production.

### We are on Spring Boot 2.7. What now?

2.7 lost free support in 2023. You are looking at the Jakarta EE namespace change from 3.0 as well as everything above, which is a larger project. Plan it with tests first, and consider whether a paid support bridge is needed while you do it.

### Can a fractional CTO run this upgrade?

A fractional CTO usually plans it, sets the order, reviews the risky parts and makes sure it lands, while your engineers or agency do the hands-on work. If that would help, [book a call](/book-a-call).
