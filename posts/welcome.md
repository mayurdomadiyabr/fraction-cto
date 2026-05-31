---
title: "Welcome to the new writing setup"
slug: welcome
date: 2026-05-31T05:00:00Z
category: Notes
excerpt: "A short note on how this site is now published — and why I'd rather press 'Publish' than commit HTML."
description: "A short note on how this site is now published — and why I'd rather press 'Publish' than commit HTML."
author: "The founder of Fraction"
readTime: 2
draft: false
---

This post was written in a web editor, saved to Git, and shipped to production
without me ever touching a terminal. That's the whole point.

## Why the change

I was hand-editing HTML for every essay. It worked, but the friction made me
think twice about quick notes — and "thinking twice" is a tax on small ideas.

## How it works now

- Drafts live as Markdown in `posts/` on GitHub.
- The CMS at `/admin` commits a new file when I hit **Publish**.
- A tiny build script wraps the Markdown in the site's post template.
- Vercel rebuilds, and the post is live in under a minute.

Nothing about the visible site changed. The substance is still the writing.
