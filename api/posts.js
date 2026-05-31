// Vercel serverless function — Blog Posts API
// ----------------------------------------------------------------
// Auth:    Authorization: Bearer <BLOG_API_KEY>
// Storage: Commits posts/{slug}.md to GitHub via the Contents API
// Deploy:  GitHub push triggers Vercel auto-deploy (~30s to live)
// ----------------------------------------------------------------
//
// POST   /api/posts            -> create a post
// PATCH  /api/posts?slug=xxx   -> update an existing post
// DELETE /api/posts?slug=xxx   -> delete a post
// GET    /api/posts            -> list posts
//
// Required env vars (set in Vercel project settings):
//   BLOG_API_KEY         random long string used as Bearer token
//   GITHUB_TOKEN         GitHub PAT (classic with `repo` OR fine-grained
//                        with Contents: read & write on this repo)
//   GITHUB_REPO_OWNER    e.g. mayurdomadiyabr   (default fallback hard-coded)
//   GITHUB_REPO          e.g. fraction-cto      (default fallback hard-coded)
//   GITHUB_BRANCH        e.g. development       (default fallback hard-coded)

const DEFAULTS = {
  owner: "mayurdomadiyabr",
  repo: "fraction-cto",
  branch: "development",
};

const HEADERS_GH = (token) => ({
  Authorization: `Bearer ${token}`,
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
  "User-Agent": "fraction-cto-posts-api",
});

function slugify(s) {
  return String(s)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function isoNow() {
  return new Date().toISOString();
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    if (req.body && typeof req.body === "object") return resolve(req.body);
    let raw = "";
    req.on("data", (chunk) => (raw += chunk));
    req.on("end", () => {
      if (!raw) return resolve({});
      try {
        resolve(JSON.parse(raw));
      } catch (e) {
        reject(new Error("Invalid JSON body"));
      }
    });
    req.on("error", reject);
  });
}

function buildMarkdown(input) {
  const fm = {
    title: input.title,
    slug: input.slug,
    date: input.date || isoNow(),
    category: input.category || "Notes",
    excerpt: input.excerpt || "",
    description: input.description || input.excerpt || "",
    author: input.author || "The founder of Fraction",
    readTime: input.readTime || undefined,
    draft: input.draft === true || false,
  };

  const yamlLines = Object.entries(fm)
    .filter(([, v]) => v !== undefined && v !== null && v !== "")
    .map(([k, v]) => {
      if (typeof v === "boolean" || typeof v === "number") return `${k}: ${v}`;
      // YAML-safe double-quoted scalar
      const escaped = String(v).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
      return `${k}: "${escaped}"`;
    });

  return `---\n${yamlLines.join("\n")}\n---\n\n${input.body || ""}\n`;
}

function b64(s) {
  return Buffer.from(s, "utf8").toString("base64");
}

function unauthorized(res, msg = "Unauthorized") {
  res.status(401).json({ ok: false, error: msg });
}

function ghContext() {
  return {
    owner: process.env.GITHUB_REPO_OWNER || DEFAULTS.owner,
    repo: process.env.GITHUB_REPO || DEFAULTS.repo,
    branch: process.env.GITHUB_BRANCH || DEFAULTS.branch,
    token: process.env.GITHUB_TOKEN,
  };
}

async function ghGetFile({ owner, repo, branch, token }, path) {
  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${encodeURIComponent(
    path
  )}?ref=${encodeURIComponent(branch)}`;
  const r = await fetch(url, { headers: HEADERS_GH(token) });
  if (r.status === 404) return null;
  if (!r.ok) throw new Error(`GitHub GET ${path}: ${r.status} ${await r.text()}`);
  return r.json();
}

async function ghPutFile({ owner, repo, branch, token }, path, contentBase64, message, sha) {
  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${encodeURIComponent(path)}`;
  const body = { message, content: contentBase64, branch };
  if (sha) body.sha = sha;
  const r = await fetch(url, {
    method: "PUT",
    headers: { ...HEADERS_GH(token), "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!r.ok) throw new Error(`GitHub PUT ${path}: ${r.status} ${await r.text()}`);
  return r.json();
}

async function ghDeleteFile({ owner, repo, branch, token }, path, message, sha) {
  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${encodeURIComponent(path)}`;
  const r = await fetch(url, {
    method: "DELETE",
    headers: { ...HEADERS_GH(token), "Content-Type": "application/json" },
    body: JSON.stringify({ message, branch, sha }),
  });
  if (!r.ok) throw new Error(`GitHub DELETE ${path}: ${r.status} ${await r.text()}`);
  return r.json();
}

async function ghListPosts(ctx) {
  const url = `https://api.github.com/repos/${ctx.owner}/${ctx.repo}/contents/posts?ref=${encodeURIComponent(ctx.branch)}`;
  const r = await fetch(url, { headers: HEADERS_GH(ctx.token) });
  if (r.status === 404) return [];
  if (!r.ok) throw new Error(`GitHub LIST posts: ${r.status} ${await r.text()}`);
  const data = await r.json();
  return data
    .filter((e) => e.type === "file" && e.name.endsWith(".md"))
    .map((e) => ({
      slug: e.name.replace(/\.md$/, ""),
      path: e.path,
      size: e.size,
      sha: e.sha,
      url: `https://getfractioncto.com/post-${e.name.replace(/\.md$/, "")}`,
    }));
}

export default async function handler(req, res) {
  // Auth check
  const apiKey = process.env.BLOG_API_KEY;
  if (!apiKey) return res.status(500).json({ ok: false, error: "BLOG_API_KEY env var not set" });

  const ctx = ghContext();
  if (!ctx.token) return res.status(500).json({ ok: false, error: "GITHUB_TOKEN env var not set" });

  const auth = req.headers.authorization || "";
  const provided = auth.startsWith("Bearer ") ? auth.slice(7) : "";
  if (!provided || provided !== apiKey) return unauthorized(res, "Invalid or missing Bearer token");

  const method = req.method?.toUpperCase();
  const url = new URL(req.url, `https://${req.headers.host}`);
  const slugParam = url.searchParams.get("slug");

  try {
    // --- LIST ---
    if (method === "GET") {
      const posts = await ghListPosts(ctx);
      return res.status(200).json({ ok: true, count: posts.length, posts });
    }

    // --- CREATE ---
    if (method === "POST") {
      const body = await readBody(req);
      if (!body.title) return res.status(400).json({ ok: false, error: "Missing required field: title" });
      const slug = body.slug ? slugify(body.slug) : slugify(body.title);
      if (!slug) return res.status(400).json({ ok: false, error: "Could not derive a usable slug" });

      const path = `posts/${slug}.md`;
      const existing = await ghGetFile(ctx, path);
      if (existing) {
        return res.status(409).json({
          ok: false,
          error: `Post already exists at ${path}. Use PATCH to update.`,
          slug,
        });
      }

      const md = buildMarkdown({ ...body, slug });
      const commit = await ghPutFile(
        ctx,
        path,
        b64(md),
        `Create post: ${body.title}`,
        undefined
      );
      return res.status(201).json({
        ok: true,
        slug,
        path,
        url: `https://getfractioncto.com/post-${slug}`,
        commit: commit.commit?.sha?.slice(0, 7) || null,
        message: "Post created. Vercel will deploy in ~30 seconds.",
      });
    }

    // --- UPDATE ---
    if (method === "PATCH" || method === "PUT") {
      if (!slugParam) return res.status(400).json({ ok: false, error: "Missing ?slug=… query param" });
      const slug = slugify(slugParam);
      const path = `posts/${slug}.md`;
      const existing = await ghGetFile(ctx, path);
      if (!existing) return res.status(404).json({ ok: false, error: `No post found at ${path}` });

      const body = await readBody(req);
      // Re-merge: parse existing frontmatter? simpler — accept full new body
      const md = buildMarkdown({ ...body, slug });
      const commit = await ghPutFile(
        ctx,
        path,
        b64(md),
        `Update post: ${body.title || slug}`,
        existing.sha
      );
      return res.status(200).json({
        ok: true,
        slug,
        path,
        url: `https://getfractioncto.com/post-${slug}`,
        commit: commit.commit?.sha?.slice(0, 7) || null,
      });
    }

    // --- DELETE ---
    if (method === "DELETE") {
      if (!slugParam) return res.status(400).json({ ok: false, error: "Missing ?slug=… query param" });
      const slug = slugify(slugParam);
      const path = `posts/${slug}.md`;
      const existing = await ghGetFile(ctx, path);
      if (!existing) return res.status(404).json({ ok: false, error: `No post found at ${path}` });
      const result = await ghDeleteFile(ctx, path, `Delete post: ${slug}`, existing.sha);
      return res.status(200).json({ ok: true, slug, path, commit: result.commit?.sha?.slice(0, 7) || null });
    }

    res.setHeader("Allow", "GET, POST, PATCH, DELETE");
    return res.status(405).json({ ok: false, error: `Method ${method} not allowed` });
  } catch (err) {
    console.error("posts API error:", err);
    return res.status(500).json({ ok: false, error: err.message });
  }
}
