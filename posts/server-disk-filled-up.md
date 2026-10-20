---
title: The server disk filled up and the database stopped writing
slug: server-disk-filled-up
date: '2026-10-20T06:24:24.024Z'
category: Pattern recognition
excerpt: >-
  Disk-full outages are a cleanup problem nobody owns. What fills the disk, why
  it is worse than it looks, and the fix.
description: >-
  What fills startup server disks, why a full disk takes the database down, and
  the alerts and cleanup that prevent it.
author: The founder of Fraction
readTime: 5
draft: false
---

The app goes down on a Sunday. Pages return errors, signups fail, and the database refuses to write. The engineer logs in, runs `df -h`, and sees the root disk at 100%. Nothing was attacked and no code shipped. A log file grew for eight months until there was no space left, and when the disk filled, the database stopped writing.

Disk-full outages are one of the most predictable incidents in a young product that runs on its own servers or virtual machines. They are almost never a capacity problem. They are a cleanup problem that nobody owns, plus no alert to say the cleanup is not happening.

## What actually fills the disk

In the reviews I do, it is usually one of a short list.

### Container and application logs

Docker's default logging driver, json-file, keeps logs without rotation unless you configure it. Docker's own documentation says this default is kept mainly for backward compatibility and recommends the local driver, which rotates by default. A chatty container writing debug output can produce gigabytes a week. The same goes for application log files written straight to disk with no rotation.

### Old images and build artifacts

Every deploy that pulls a new container image leaves the old one behind unless something prunes it. Build caches, old release folders, and package caches pile up the same way.

### Database growth you did not plan for

Tables grow, and some grow much faster than expected: an events table, an audit log, a sessions table nobody cleans, a queue table that never deletes finished jobs. Database write-ahead logs can also grow sharply if replication or archiving falls behind, because the database keeps the files until they are safely handled.

### Backups stored on the same disk

A nightly backup script that writes a compressed dump to the same server, and never deletes old ones, is a slow-motion outage. It also means your backups die with the server, which is a separate problem covered in [keeping backups outside your cloud provider](/post-backups-outside-your-cloud-provider).

### Uploads stored locally

User uploads written to the server's disk instead of object storage grow with your customer base, quietly and forever.

## Why a full disk is worse than it sounds

When the disk fills, failures spread in ways that make diagnosis slower.

- **The database stops.** Databases need disk space to write. When they cannot write, they refuse writes or shut down to protect data. Every feature that saves anything fails at once.
- **Logs stop too.** The logs that would explain the problem cannot be written, so the error trail ends exactly when things broke.
- **Recovery can be messy.** Deleting the wrong file to free space, such as an active database file or a write-ahead log the database still needs, can turn an outage into data loss. Deleting a log file that a running process still has open may not even free the space until the process restarts.
- **Deploys fail.** New container images cannot be pulled, so even a fix cannot ship until space is cleared.

## The fix, in priority order

### 1. Alert at 80%, not 100%

Set an alert on disk usage for every server and volume, at around 80% and again at 90%, routed to a channel people watch. Most cloud providers and monitoring tools offer this in minutes. A full disk is almost always visible days or weeks in advance on a usage graph. If you have no monitoring yet, this is one of the first checks worth adding, alongside the basics in [knowing when to pay for observability](/post-flying-blind-in-prod-when-to-pay-for-observability).

### 2. Rotate every log

Configure log rotation for containers (for Docker, `max-size` and `max-file` options, or the local driver) and for any log files on disk. Note that Docker applies new logging settings only to containers created after the change, so existing containers need recreating. Better still, ship logs to a logging service and keep only a small local buffer.

### 3. Prune on a schedule

Add a scheduled cleanup for old container images, build artifacts, and caches. Make it a job you can see run, not a command someone remembers to type. And give it a heartbeat, because [background jobs fail silently](/post-background-jobs-fail-silently) unless something checks they ran.

### 4. Move data off the server's disk

Put uploads in object storage. Put backups in a separate storage account or provider, with a retention policy that deletes old copies. Consider a managed database, which handles storage growth and alerts for you, if the operational load of running your own is not earning anything. The trade-off is laid out in [self-host or managed](/post-self-host-or-managed).

### 5. Give fast-growing tables a retention rule

For event, audit, session, and job tables, decide how long you need the data and add a cleanup job, or move older data to cheaper storage. Do this before the table is huge; deleting hundreds of millions of rows later is its own project.

### 6. Write the recovery runbook

Write down, for your setup, what is safe to delete in an emergency and what is not, and how to grow the volume if you need to. Many cloud volumes can be resized while running. The worst time to learn which files the database still needs is at 100% with customers waiting.

## How long this takes

For a typical early product on a handful of servers, alerts and log rotation take an afternoon. Pruning jobs, moving uploads and backups, and retention rules take a few days spread over a couple of weeks. That is small compared with one weekend outage, and it removes a whole category of incident.

It is also a good test of a wider question: could anyone else on your team rebuild or recover a server they did not set up? If the honest answer is no, read [the server nobody can rebuild](/post-server-nobody-can-rebuild) next.

## FAQ

### We are on a platform like Heroku, Vercel, or Render. Can our disk fill up?

On fully managed platforms with ephemeral file systems, mostly no, because local disk is not where your data lives. Your managed database still has a storage limit, though, so check its plan size and alerts. Disk-full outages mainly hit teams running their own virtual machines or servers.

### What is a safe threshold for disk alerts?

Around 80% for a warning and 90% for an urgent alert is a common starting point. What matters more is that someone receives it and that you look at the growth rate, since a disk filling at 1% a day gives you very different time than one filling at 1% an hour.

### What should we delete first in an emergency?

Rotated or archived log files, old container images, and build caches are usually safe. Never delete database data files or write-ahead logs by hand. If in doubt, grow the volume first, then clean up calmly.

### Is a bigger disk a fix?

It buys time. Without rotation, pruning, and alerts, a bigger disk just moves the outage later. Fix the growth, then size the disk.

If you want a quick read on which of these risks apply to your setup, a [technical teardown](/teardown) covers disk, backups, and recovery in one pass.
