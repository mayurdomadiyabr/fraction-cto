// Vercel serverless function — Lead capture → Odoo CRM
// --------------------------------------------------------------
// Public endpoint (no auth) used by the contact forms on the site.
// Creates a `crm.lead` record in Odoo and applies a "CTO" tag so every
// lead from this site is tagged for filtering / automation in Odoo.
//
// Required env vars (set via `vercel env add`):
//   ODOO_URL       e.g. https://braincuber.odoo.com
//   ODOO_DB        the Odoo database name
//   ODOO_USERNAME  e.g. mayur@braincuber.com
//   ODOO_API_KEY   API key generated in Odoo (Profile → Account Security)
//   ODOO_TAG_NAME  optional, defaults to "CTO"
//   ODOO_TEAM_ID   optional, sales team id to assign the lead to
//   ODOO_USER_ID   optional, salesperson user id to assign the lead to
//   ODOO_SOURCE    optional, source label (default "getfractioncto.com")
//
// CORS: same-origin only (called from getfractioncto.com pages).

const DEFAULT_TAG = "CTO";
const DEFAULT_SOURCE = "getfractioncto.com";

// Simple in-memory cache for the authenticated uid (warm per-lambda)
let cachedUid = null;
let cachedAt = 0;
const UID_TTL_MS = 10 * 60 * 1000; // 10 min

function readJson(req) {
  return new Promise((resolve, reject) => {
    if (req.body && typeof req.body === "object") return resolve(req.body);
    let raw = "";
    req.on("data", (c) => (raw += c));
    req.on("end", () => {
      try {
        resolve(raw ? JSON.parse(raw) : {});
      } catch {
        reject(new Error("Invalid JSON body"));
      }
    });
    req.on("error", reject);
  });
}

async function odooRpc(url, params) {
  const r = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "call",
      params,
      id: Date.now(),
    }),
  });
  const text = await r.text();
  if (!r.ok) throw new Error(`Odoo HTTP ${r.status}: ${text.slice(0, 200)}`);
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error(`Odoo non-JSON response: ${text.slice(0, 200)}`);
  }
  if (data.error) {
    const msg =
      data.error.data?.message || data.error.message || JSON.stringify(data.error);
    throw new Error(`Odoo error: ${msg}`);
  }
  return data.result;
}

async function authenticate(cfg) {
  if (cachedUid && Date.now() - cachedAt < UID_TTL_MS) return cachedUid;
  const uid = await odooRpc(`${cfg.url}/jsonrpc`, {
    service: "common",
    method: "authenticate",
    args: [cfg.db, cfg.username, cfg.apiKey, {}],
  });
  if (!uid) throw new Error("Odoo authentication failed — check username / API key / db");
  cachedUid = uid;
  cachedAt = Date.now();
  return uid;
}

async function executeKw(cfg, uid, model, method, args, kwargs = {}) {
  return odooRpc(`${cfg.url}/jsonrpc`, {
    service: "object",
    method: "execute_kw",
    args: [cfg.db, uid, cfg.apiKey, model, method, args, kwargs],
  });
}

async function ensureTag(cfg, uid, tagName) {
  // Look up existing tag by name (crm.tag)
  const existing = await executeKw(
    cfg,
    uid,
    "crm.tag",
    "search_read",
    [[["name", "=", tagName]]],
    { fields: ["id", "name"], limit: 1 }
  );
  if (existing && existing.length) return existing[0].id;
  // Create the tag if it doesn't exist
  return executeKw(cfg, uid, "crm.tag", "create", [{ name: tagName }]);
}

function buildLeadValues(input, tagId, cfg) {
  // Combine all the form fields into a useful description body
  const meta = [
    input.day ? `Preferred day: ${input.day}` : "",
    input.time ? `Preferred time: ${input.time}` : "",
    input.source ? `Form source: ${input.source}` : "",
    input.utm_source ? `utm_source: ${input.utm_source}` : "",
    input.utm_medium ? `utm_medium: ${input.utm_medium}` : "",
    input.utm_campaign ? `utm_campaign: ${input.utm_campaign}` : "",
    input.referrer ? `Referrer: ${input.referrer}` : "",
    input.page ? `Submitted from: ${input.page}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const description = [input.message || input.stage || input.note || "", meta]
    .filter(Boolean)
    .join("\n\n---\n");

  const name = input.name || input.firstName || input.lastName || input.email || "Website lead";
  const title =
    input.title ||
    (input.day && input.time
      ? `Fit-call request — ${input.day} ${input.time}`
      : `Lead from ${cfg.source}`);

  const values = {
    name: title.slice(0, 240),
    contact_name: name.slice(0, 120),
    email_from: input.email || false,
    phone: input.phone || false,
    description,
    type: "lead",
    tag_ids: [[6, 0, [tagId]]], // Replace tag list with [tagId]
    source_id: false,
  };
  if (input.company) values.partner_name = input.company.slice(0, 120);
  if (cfg.teamId) values.team_id = cfg.teamId;
  if (cfg.userId) values.user_id = cfg.userId;
  return values;
}

function cfgFromEnv() {
  const url = (process.env.ODOO_URL || "").replace(/\/+$/, "");
  const db = process.env.ODOO_DB;
  const username = process.env.ODOO_USERNAME;
  const apiKey = process.env.ODOO_API_KEY;
  const teamId = process.env.ODOO_TEAM_ID ? Number(process.env.ODOO_TEAM_ID) : null;
  const userId = process.env.ODOO_USER_ID ? Number(process.env.ODOO_USER_ID) : null;
  const tagName = process.env.ODOO_TAG_NAME || DEFAULT_TAG;
  const source = process.env.ODOO_SOURCE || DEFAULT_SOURCE;
  const ok = url && db && username && apiKey;
  return { url, db, username, apiKey, teamId, userId, tagName, source, ok };
}

export default async function handler(req, res) {
  // CORS — only allow our own domains
  const origin = req.headers.origin || "";
  if (/getfractioncto\.com$|vercel\.app$/i.test(new URL(origin || "http://x", "http://x").hostname || "")) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Vary", "Origin");
  }
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST, OPTIONS");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const cfg = cfgFromEnv();
  if (!cfg.ok) {
    return res.status(500).json({
      ok: false,
      error:
        "Odoo not configured. Set ODOO_URL, ODOO_DB, ODOO_USERNAME, ODOO_API_KEY in Vercel env vars.",
    });
  }

  let body;
  try {
    body = await readJson(req);
  } catch (e) {
    return res.status(400).json({ ok: false, error: e.message });
  }

  // Minimal validation: we need at least an email OR a phone to follow up
  if (!body.email && !body.phone) {
    return res
      .status(400)
      .json({ ok: false, error: "Missing email or phone — at least one is required." });
  }
  if (body.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    return res.status(400).json({ ok: false, error: "Invalid email." });
  }

  // Honeypot — drop spam silently
  if (body.website || body.hp || body.honeypot) {
    return res.status(200).json({ ok: true, dropped: true });
  }

  try {
    const uid = await authenticate(cfg);
    const tagId = await ensureTag(cfg, uid, cfg.tagName);
    const values = buildLeadValues({ ...body, source: body.source || cfg.source }, tagId, cfg);
    const leadId = await executeKw(cfg, uid, "crm.lead", "create", [values]);

    return res.status(201).json({
      ok: true,
      lead_id: leadId,
      tag: cfg.tagName,
      message: "Lead created in Odoo CRM.",
    });
  } catch (err) {
    console.error("leads API error:", err);
    return res.status(502).json({ ok: false, error: err.message });
  }
}
