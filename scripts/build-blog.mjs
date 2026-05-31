#!/usr/bin/env node
/**
 * Build script for Fraction CTO blog
 * --------------------------------------
 * Reads each Markdown file in `posts/`, applies the post HTML template,
 * writes `post-{slug}.html` in the project root, and regenerates the
 * cards section in `blog.html` between the POSTS_START / POSTS_END markers.
 *
 * Runs on every Vercel deploy via the `buildCommand` in vercel.json.
 */

import { readFile, writeFile, readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const POSTS_DIR = path.join(ROOT, "posts");
const TEMPLATE_PATH = path.join(ROOT, "templates", "_post-template.html");
const BLOG_HTML_PATH = path.join(ROOT, "blog.html");

const POSTS_START = "<!-- POSTS_START -->";
const POSTS_END = "<!-- POSTS_END -->";
const FEATURED_START = "<!-- FEATURED_START -->";
const FEATURED_END = "<!-- FEATURED_END -->";

const SITEMAP_PATH = path.join(ROOT, "sitemap.xml");
const SITE_ORIGIN = "https://getfractioncto.com";
const STATIC_PAGES = [
  { path: "/",              priority: "1.0", changefreq: "weekly"  },
  { path: "/how-it-works",  priority: "0.8", changefreq: "monthly" },
  { path: "/pricing",       priority: "0.8", changefreq: "monthly" },
  { path: "/comparison",    priority: "0.6", changefreq: "monthly" },
  { path: "/about",         priority: "0.6", changefreq: "monthly" },
  { path: "/teardown",      priority: "0.8", changefreq: "monthly" },
  { path: "/book-a-call",   priority: "0.7", changefreq: "monthly" },
  { path: "/blog",          priority: "0.9", changefreq: "weekly"  },
];

// Configure marked: GitHub-flavored, allow HTML pass-through
marked.setOptions({ gfm: true, breaks: false });

function htmlEscape(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatDate(dateInput) {
  if (!dateInput) return "";
  const d = new Date(dateInput);
  if (Number.isNaN(d.getTime())) return String(dateInput);
  const month = d.toLocaleString("en-US", { month: "short" });
  const year = d.getFullYear();
  return `${month} ${year}`;
}

function estimateReadTime(markdown) {
  const wordsPerMinute = 220;
  const words = markdown.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / wordsPerMinute));
}

function renderPostCard(post) {
  return `      <a href="post-${post.slug}.html" class="post-card reveal">
        <span class="post-cat">${htmlEscape(post.category || "Notes")}</span>
        <h3>${htmlEscape(post.title)}</h3>
        <p>${htmlEscape(post.excerpt || post.description || "")}</p>
        <div class="post-meta"><span>${htmlEscape(formatDate(post.date))}</span><span class="sep"></span><span>${post.readTime} min</span></div>
      </a>`;
}

function renderFeaturedCard(post) {
  const tag = post.featuredTag || post.category || "Featured";
  const glyph = post.featuredGlyph || "\u21ba"; // ↺
  return `    <a href="post-${post.slug}.html" class="blog-feature reveal">
      <div class="bf-art">
        <span class="bf-glyph">${glyph}</span>
        <span class="tag tag-accent">${htmlEscape(tag)}</span>
      </div>
      <div class="bf-body">
        <span class="post-cat">${htmlEscape(post.category || "Notes")}</span>
        <h2>${htmlEscape(post.title)}</h2>
        <p>${htmlEscape(post.excerpt || post.description || "")}</p>
        <div class="post-meta">
          <span>${htmlEscape(formatDate(post.date))}</span><span class="sep"></span><span>${post.readTime} min read</span><span class="sep"></span><span class="link-grow">Read <span class="arrow">\u2192</span></span>
        </div>
      </div>
    </a>`;
}

function renderSitemap(posts) {
  const now = new Date().toISOString().slice(0, 10);
  const lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap-0.9">',
  ];
  for (const p of STATIC_PAGES) {
    lines.push(
      "  <url>",
      `    <loc>${SITE_ORIGIN}${p.path}</loc>`,
      `    <lastmod>${now}</lastmod>`,
      `    <changefreq>${p.changefreq}</changefreq>`,
      `    <priority>${p.priority}</priority>`,
      "  </url>"
    );
  }
  for (const post of posts) {
    if (post.draft) continue;
    const lastmod = (post.date ? new Date(post.date) : new Date())
      .toISOString()
      .slice(0, 10);
    lines.push(
      "  <url>",
      `    <loc>${SITE_ORIGIN}/post-${post.slug}</loc>`,
      `    <lastmod>${lastmod}</lastmod>`,
      "    <changefreq>monthly</changefreq>",
      "    <priority>0.7</priority>",
      "  </url>"
    );
  }
  lines.push("</urlset>", "");
  return lines.join("\n");
}

async function main() {
  console.log("→ Compiling Markdown posts from", POSTS_DIR);

  const template = await readFile(TEMPLATE_PATH, "utf8");

  let entries = [];
  try {
    entries = await readdir(POSTS_DIR);
  } catch {
    console.log("  (no posts/ directory yet — nothing to build)");
    return;
  }

  const mdFiles = entries.filter((f) => f.endsWith(".md"));
  if (mdFiles.length === 0) {
    console.log("  (no .md files in posts/ — nothing to build)");
    return;
  }

  const posts = [];

  for (const filename of mdFiles) {
    const filePath = path.join(POSTS_DIR, filename);
    const raw = await readFile(filePath, "utf8");
    const { data: fm, content } = matter(raw);

    const slug = fm.slug || filename.replace(/\.md$/, "");
    const title = fm.title || slug;
    const description = fm.description || fm.excerpt || "";
    const category = fm.category || "Notes";
    const author = fm.author || "The founder of Fraction";
    const readTime = fm.readTime || estimateReadTime(content);
    const date = fm.date || new Date().toISOString();
    const dateDisplay = formatDate(date);

    // Convert markdown body → HTML
    const body = marked.parse(content);

    const html = template
      .replaceAll("{{TITLE}}", htmlEscape(title))
      .replaceAll("{{DESCRIPTION}}", htmlEscape(description))
      .replaceAll("{{SLUG}}", slug)
      .replaceAll("{{CATEGORY}}", htmlEscape(category))
      .replaceAll("{{AUTHOR}}", htmlEscape(author))
      .replaceAll("{{READ_TIME}}", String(readTime))
      .replaceAll("{{DATE_DISPLAY}}", htmlEscape(dateDisplay))
      .replace("{{BODY}}", body); // body once, unescaped

    const outFile = path.join(ROOT, `post-${slug}.html`);
    await writeFile(outFile, html, "utf8");
    console.log(`  ✓ post-${slug}.html`);

    posts.push({
      slug,
      title,
      excerpt: fm.excerpt || description,
      description,
      category,
      readTime,
      date,
      dateDisplay,
      draft: fm.draft === true,
      featured: fm.featured === true,
      featuredTag: fm.featuredTag,
      featuredGlyph: fm.featuredGlyph,
    });
  }

  // Sort newest first
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Pick the featured post: first one with featured:true, else newest non-draft
  const publishedPosts = posts.filter((p) => !p.draft);
  const featuredPost =
    publishedPosts.find((p) => p.featured) || publishedPosts[0] || null;
  // Posts shown in the grid — exclude draft AND the featured one (avoid duplication)
  const gridPosts = publishedPosts.filter(
    (p) => !featuredPost || p.slug !== featuredPost.slug
  );

  // Update blog.html sections between markers
  let blog = await readFile(BLOG_HTML_PATH, "utf8");

  // FEATURED block
  if (featuredPost && blog.includes(FEATURED_START) && blog.includes(FEATURED_END)) {
    const featuredBlock = `${FEATURED_START}\n${renderFeaturedCard(featuredPost)}\n    ${FEATURED_END}`;
    const re = new RegExp(`${FEATURED_START}[\\s\\S]*?${FEATURED_END}`, "m");
    blog = blog.replace(re, featuredBlock);
    console.log(`  ✓ featured: ${featuredPost.slug}`);
  }

  // GRID block
  const generated = gridPosts.map(renderPostCard).join("\n");
  const block = `${POSTS_START}\n${generated}\n      ${POSTS_END}`;
  if (blog.includes(POSTS_START) && blog.includes(POSTS_END)) {
    const re = new RegExp(`${POSTS_START}[\\s\\S]*?${POSTS_END}`, "m");
    blog = blog.replace(re, block);
  } else {
    blog = blog.replace(
      /<div class="blog-grid">/,
      `<div class="blog-grid">\n      ${block}`
    );
  }

  await writeFile(BLOG_HTML_PATH, blog, "utf8");
  console.log(
    `  ✓ blog.html updated (${gridPosts.length} cards in grid${featuredPost ? ", 1 featured" : ""})`
  );

  // Regenerate sitemap.xml
  await writeFile(SITEMAP_PATH, renderSitemap(posts), "utf8");
  const liveCount = STATIC_PAGES.length + publishedPosts.length;
  console.log(`  ✓ sitemap.xml updated (${liveCount} URLs)`);

  console.log("✓ build-blog.mjs complete");
}

main().catch((err) => {
  console.error("✗ build-blog.mjs failed:", err);
  process.exit(1);
});
