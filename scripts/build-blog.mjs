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
    });
  }

  // Sort newest first
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Update blog.html grid section between markers (insert markers if missing)
  let blog = await readFile(BLOG_HTML_PATH, "utf8");
  const generated = posts.map(renderPostCard).join("\n");
  const block = `${POSTS_START}\n${generated}\n      ${POSTS_END}`;

  if (blog.includes(POSTS_START) && blog.includes(POSTS_END)) {
    const re = new RegExp(`${POSTS_START}[\\s\\S]*?${POSTS_END}`, "m");
    blog = blog.replace(re, block);
  } else {
    // First-time: insert before the closing </div> of the blog-grid
    blog = blog.replace(
      /<div class="blog-grid">/,
      `<div class="blog-grid">\n      ${block}`
    );
  }

  await writeFile(BLOG_HTML_PATH, blog, "utf8");
  console.log(`  ✓ blog.html updated (${posts.length} posts)`);
  console.log("✓ build-blog.mjs complete");
}

main().catch((err) => {
  console.error("✗ build-blog.mjs failed:", err);
  process.exit(1);
});
