---
title: Diligence asks for your dependency list. Make it in a day
slug: dependency-list-diligence
date: '2026-11-14T05:12:37.682Z'
category: Fundraising
excerpt: >-
  How to generate an SBOM with free tools, check it for vulnerabilities and
  license issues, and package it for the data room.
description: >-
  How a startup can produce an SBOM for technical diligence in a day: formats,
  free tools, what you will find and what to put in the data room.
author: The founder of Fraction
readTime: 5
draft: false
---

Sooner or later in technical diligence someone asks for a list of the open-source and third-party components in your product. Sometimes it is phrased as "can you share an SBOM?", which stands for software bill of materials. You can produce a credible one in a day with free tools, and the work is less about the file than about what you find while making it: unlicensed code, abandoned packages and known vulnerabilities you did not know you had.

Here is how I walk a small team through it before a raise.

## What the investor actually wants

An SBOM is an inventory: every package your product depends on, its version, its license and where it came from. Investors and acquirers want it for three reasons.

- **License risk.** Some licenses impose obligations that matter if you distribute software or are acquired. We go into which ones in [the open-source license that can sink your valuation](/post-open-source-license-diligence).
- **Security risk.** Old versions with published vulnerabilities are a measurable liability. A reviewer can check your list against public vulnerability databases in minutes.
- **Maintenance risk.** A core dependency that nobody has updated in years is a future rewrite.

Larger customers increasingly ask for the same inventory in security questionnaires, so the effort pays twice.

## Generate the list in an afternoon

### Pick a format

There are two common standard formats, [CycloneDX](https://cyclonedx.org/) and [SPDX](https://spdx.dev/). Either is acceptable. If the investor or customer has not specified one, pick CycloneDX JSON and move on; this is not a decision worth a meeting.

### Run a generator

[Syft](https://github.com/anchore/syft), an open-source tool from Anchore, scans a code directory or a container image and writes the inventory in either format. On a typical web app it takes minutes. Run it against what you actually ship, ideally your production container image, not just the repo, because the image includes operating-system packages your repo does not mention.

Run it once per deployable thing: the backend, the web front end, the mobile apps, any worker services. A product with four repos gets four files.

### Check it for vulnerabilities

Feed the inventory to a scanner. [Grype](https://github.com/anchore/grype), from the same team, reads Syft's output directly. Your git host may already have a dependency alert feature turned on that reports the same class of issues.

### Check it for licenses

Most generators record a license per package. Sort by license and look for anything that is not a common permissive license, plus anything marked unknown. Unknown is the one to chase: it usually means a package with no license file, which legally means you have no clear right to use it.

## What you will find, and what to do about it

In my experience a first pass on an early-stage product turns up a few predictable things.

### Hundreds of packages you never chose

A modern JavaScript app can easily pull in more than a thousand packages, most of them dependencies of dependencies. That is normal. Investors know it. What they want to see is that you know it and have a process.

### A handful of known vulnerabilities

Sort by severity. For each critical or high finding, decide: upgrade now, confirm the vulnerable code path is not reachable in your product, or accept and document. A short table of findings with a decision next to each one is far better in a data room than a clean report that nobody believes.

### One or two license questions

Copied code with no license, or a copyleft library in a product you distribute. These need a decision and sometimes a lawyer. Find them now, not when the acquirer's counsel does. This is not legal advice; it is a prompt to get some.

### An abandoned core dependency

Check the last release date of your ten most important packages. If one has not had a release in several years, note it and note your plan, even if the plan is "watch it".

## Package it for the data room

Put four things in a folder in your [technical data room](/post-technical-data-room):

1. The inventory files, one per deployable component, with the date generated.
2. A one-page summary: number of components, licenses by category, vulnerabilities by severity.
3. The findings table, with a decision and owner for each critical or high issue.
4. One sentence on how you keep it current, for example "generated on every release by CI".

That last line matters more than the files. A stale inventory is a snapshot. A generated one is a process, and process is what reviewers are really assessing.

## Make it automatic after the raise

Add the generator and scanner as a step in your build pipeline so a fresh inventory is produced on every release and new critical findings fail the build or open a ticket. On most CI systems this is an hour of setup. While you are in there, scan for credentials too; [the secrets in your git history](/post-secrets-in-git-history-diligence) are the other thing reviewers find with automated tools.

## FAQ

### Is an SBOM legally required for a startup?

Generally not for a private startup selling to businesses, though some regulated buyers and government contracts do require one, and rules are tightening in some markets. Check what your target customers and markets require. Investors ask for it as evidence of hygiene, not compliance.

### SPDX or CycloneDX?

Either. Both are widely supported, and tools such as Syft can output both. Use whatever your buyer asks for, and CycloneDX JSON if nobody asks.

### How long does this take?

The scan takes minutes. Reviewing findings takes most of a day the first time for a small product, less once it is automated.

### Should we fix every vulnerability before diligence?

No. Fix the critical and high ones that are reachable, document the rest with a reason. A clear decision log reads better than a rushed upgrade that breaks production the week before close.

If you would rather have someone run this with your team and write the summary page, our [technical teardown](/teardown) covers it, and you can [book a call](/book-a-call) to scope it.
