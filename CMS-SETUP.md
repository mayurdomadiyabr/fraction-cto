# Decap CMS Setup — Fraction CTO

A web admin at **https://getfractioncto.com/admin** lets you write blog posts
in Markdown and publish them straight to production via a single GitHub commit.

```
You open /admin → write Markdown → click Publish
   ↓
Decap CMS commits posts/{slug}.md to GitHub (development branch)
   ↓
Vercel detects push → runs `npm run build`
   ↓
build-blog.mjs compiles Markdown → post-{slug}.html and updates blog.html
   ↓
Site live in ~30 seconds at /post-{slug}
```

---

## One-time setup (≈3 minutes)

### Step 1 — Create a GitHub OAuth App

1. Go to **https://github.com/settings/applications/new**
2. Fill in:
   - **Application name**: `Fraction CTO Admin`
   - **Homepage URL**: `https://getfractioncto.com`
   - **Authorization callback URL**: `https://getfractioncto.com/api/callback`
3. Click **Register application**
4. On the next page, click **Generate a new client secret**
5. Copy the **Client ID** and **Client Secret** — you'll need them in Step 2

### Step 2 — Add the secrets to Vercel

Run these from the project root (you'll be prompted to paste each value):

```bash
cd /Users/mayur/fraction-cto

vercel env add GITHUB_CLIENT_ID production
# (paste Client ID, hit enter)

vercel env add GITHUB_CLIENT_SECRET production
# (paste Client Secret, hit enter)

# Redeploy so the new env vars take effect
vercel --prod
```

### Step 3 — Log in to the CMS

1. Visit **https://getfractioncto.com/admin**
2. Click **Login with GitHub**
3. Authorize the app
4. You're in. Click **New Blog Post** to write your first one.

---

## Daily workflow — adding a new post

1. Open https://getfractioncto.com/admin
2. Click **New Blog Post**
3. Fill in title, category, excerpt, and write the body in the Markdown editor
4. Click **Publish** in the top-right
5. Done — the post is live in ~30 seconds

The `Drafts` filter shows posts marked `draft: true` — flip the toggle in the
editor when you're ready to publish.

---

## File layout

```
fraction-cto/
├── admin/              # Decap CMS UI (static)
│   ├── index.html      # Loads the Decap CMS bundle from CDN
│   └── config.yml      # Schema for the Posts collection
├── api/                # Vercel serverless functions
│   ├── auth.js         # Starts GitHub OAuth flow
│   └── callback.js     # Finishes OAuth, returns token to CMS
├── posts/              # Markdown source (edited by the CMS)
│   └── welcome.md
├── templates/
│   └── _post-template.html
├── scripts/
│   └── build-blog.mjs  # Markdown → HTML compiler
└── ...existing site files unchanged
```

---

## Editing an existing post manually (without the CMS)

Just edit the `.md` file in `posts/` and push. The build script handles the rest.

```bash
vim posts/welcome.md
git add posts/welcome.md
git commit -m "Update welcome post"
git push
```

---

## Migrating the 6 existing HTML posts

The original `post-*.html` files are still served as-is. To bring them into
the CMS, create a matching `posts/{slug}.md` file with the article body
in Markdown, then delete the original HTML file. The build script will
regenerate it from the Markdown source.

---

## Troubleshooting

**"Missing GITHUB_CLIENT_ID" error on /api/auth**
→ You haven't run Step 2 yet, or didn't redeploy after adding the env var.

**Login window closes but CMS doesn't load**
→ Open browser DevTools console. Most common cause: callback URL in the GitHub
OAuth App doesn't match exactly. It must be `https://getfractioncto.com/api/callback`.

**Posts not appearing on the site**
→ Check the Vercel deploy log for build script output. Each `posts/*.md` file
should show `✓ post-{slug}.html` during build.

**"Invalid OAuth state" error**
→ Cookie was cleared between starting and finishing OAuth. Just retry.
