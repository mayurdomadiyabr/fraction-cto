---
title: File uploads look like a day of work. They are not
slug: file-uploads-build-or-buy
date: '2026-11-18T04:35:41.816Z'
category: Decisions
excerpt: >-
  Why file uploads take weeks, not a day, and the direct-to-storage pattern that
  avoids most of the pain for early products.
description: >-
  Why file uploads break in production, the presigned-URL pattern most teams
  should use, and when a hosted upload service is worth it.
author: The founder of Fraction
readTime: 5
draft: false
---

File uploads look like a one-day feature and are usually a two-to-three week one once you handle large files, failed uploads, security and previews. For most early products the right answer is in the middle: upload directly from the browser to object storage such as Amazon S3 using short-lived presigned URLs, keep only metadata in your database, and buy a hosted upload service only if images, video or very large files are central to what you sell.

I see uploads underestimated in almost every early product I review. The first version is genuinely quick: a form field, a POST to the server, save the file somewhere. Then customers start uploading real files.

## Where the simple version breaks

The naive approach sends the file through your own server. That works in a demo and fails in predictable ways in production:

- **Large files time out.** Many hosting platforms cap request size or duration, and serverless functions are especially strict. A 400 MB video or a big CSV export just fails, often with an unhelpful error.
- **Your servers do the heavy lifting.** Every upload ties up a web process and memory while bytes trickle in over a slow mobile connection.
- **Failed uploads start from zero.** A dropped connection at 90% means the user starts again, and they blame your product.
- **Files land in the wrong place.** I still find uploads saved to a server's local disk, which disappear on the next deploy or when you add a second server.

None of these appear until real customers arrive, which is why the estimate is always wrong.

## The pattern I recommend for most teams

The standard approach is to let the browser upload straight to object storage, with your server only granting permission.

1. The browser asks your API for permission to upload a specific file. Your server checks the user, the file type and the size limit.
2. Your server returns a presigned URL: a link that allows exactly one upload to one location, for a short time.
3. The browser sends the file directly to storage using that URL. Your server never touches the bytes.
4. The browser tells your API the upload finished, and your server records the file's metadata (owner, account, size, type, storage key) in your database.

AWS documents this in its guide to [presigned URLs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-presigned-url.html). A presigned URL signed with long-lived credentials can be valid for up to seven days, but there is rarely a reason to use more than a few minutes for uploads. Cloudflare R2 and Google Cloud Storage support the same idea, so you are not tied to one provider.

For large files, use multipart uploads, which split a file into parts that can be retried individually. That is what gives you resumable uploads. Set a lifecycle rule on the bucket to clean up abandoned multipart uploads, otherwise the leftover parts quietly add to your storage bill.

## The parts founders forget

### Security

Uploads are one of the easiest ways to get attacked. The minimum I look for:

- Buckets are private by default. Files are served through short-lived signed download links or a controlled CDN, never a public bucket listing.
- Every file is tied to an account in your database, and download permission is checked against that account. Guessable file names in a shared folder are a data leak waiting to happen.
- File type is checked on the server, not just by the browser, and you never serve user uploads from your main domain in a way that lets an uploaded HTML or SVG file run scripts as your site.
- For products where customers share files with each other, consider malware scanning. Some enterprise customers will ask about it in a security review.

### Processing

Most products need something done after upload: image thumbnails, PDF previews, virus scans, parsing a spreadsheet. Do this in a background job, not during the upload request. If you do not have one yet, [this post on job queues](/post-do-you-need-a-job-queue-yet) explains when to add it. Uploads are often the feature that forces the decision.

### Deletion and retention

When a customer deletes a record or closes their account, their files must go too. Founders rarely plan this, and it surfaces later in privacy requests and enterprise contracts. Store the storage key with the record so deletion is a simple job, and decide how long deleted files stay recoverable.

## When to buy a hosted upload service

Hosted services such as Uploadcare, Cloudinary, Filestack or UploadThing give you an upload widget, resumable uploads, image and video transforms and a CDN, usually in an afternoon. I lean towards them when:

- Images or video are central to the product, and you need resizing, cropping and format conversion on the fly.
- Your users upload from phones on poor connections and you need resumable uploads to just work.
- You have one engineer and uploads are a supporting feature, not the product.

I lean towards building on raw object storage when files are mostly documents, when storage volume is large enough that per-gigabyte markup matters, or when customers require data to stay in a specific region or your own cloud account. Pricing for these services changes, so model it against your own expected storage and bandwidth. Either way, keep your file metadata in your own database. That is what lets you switch providers later without a painful migration.

## A rough effort guide

These are rules of thumb from projects I have seen, not quotes:

- Direct-to-storage uploads with presigned URLs, size limits and private buckets: two to four days for an engineer who has done it before.
- Adding multipart and resumable uploads, thumbnails in a background job and proper deletion: another one to two weeks.
- A hosted service for the upload widget and transforms: one to three days to integrate, plus an ongoing monthly bill.

The expensive outcome is not choosing the wrong vendor. It is shipping the naive version, discovering the problems with paying customers, and rebuilding under pressure.

## FAQ

### Should files ever go through our own server?

Rarely. Small files, such as an avatar, can be fine, but direct-to-storage is barely harder and avoids the whole class of timeout and memory problems. Make it the default.

### Is S3 the only option?

No. Cloudflare R2, Google Cloud Storage, Azure Blob Storage and others support similar presigned upload flows. Pick the one that sits closest to the rest of your stack, and remember that download bandwidth pricing differs a lot between them.

### Do we need virus scanning?

If customers only upload files for their own use, it is often a later addition. If files are shared between users or organisations, or you sell to regulated industries, plan for it. Enterprise security reviews sometimes ask directly.

### How do backups work for uploaded files?

Object storage is durable, but durability does not protect you from accidental deletion or a compromised account. Turn on versioning for important buckets and think about copies outside your main account, as covered in [backups outside your cloud provider](/post-backups-outside-your-cloud-provider). If you want someone to check how your current upload flow holds up, a [teardown](/teardown) covers exactly this kind of risk.
