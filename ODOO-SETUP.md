# Odoo Lead Capture — Fraction CTO

Forms on the site (Book-a-call, Newsletter subscribe) POST to `/api/leads`
which creates a `crm.lead` record in your Odoo CRM with a `"CTO"` tag.

```
Form on site
   ↓ POST /api/leads (JSON)
Vercel serverless function
   ↓ JSON-RPC authenticate
   ↓ ensure crm.tag named "CTO" exists (create if not)
   ↓ create crm.lead with tag_ids = [CTO tag id]
Odoo CRM → Pipeline → tagged "CTO"
```

---

## One-time setup (≈3 minutes)

### Step 1 — Generate an Odoo API key
1. Log in to your Odoo instance
2. Click your avatar (top right) → **My Profile**
3. Open the **Account Security** tab
4. Click **New API Key** → name it `getfractioncto-leads`
5. Copy the key (it's only shown once)

### Step 2 — Find your database name
Open your Odoo URL. The database name is in the URL when you log in
(e.g. `https://braincuber.odoo.com/web/database/manager` shows it).
On Odoo Online (`*.odoo.com`) the database name is usually the subdomain
(e.g. `braincuber`).

### Step 3 — Set the env vars in Vercel
From the project root:
```bash
cd /Users/mayur/fraction-cto

vercel env add ODOO_URL production       # e.g. https://braincuber.odoo.com
vercel env add ODOO_DB production        # e.g. braincuber
vercel env add ODOO_USERNAME production  # your Odoo login email
vercel env add ODOO_API_KEY production   # paste the API key from step 1

# Optional:
vercel env add ODOO_TAG_NAME production  # default "CTO"
vercel env add ODOO_TEAM_ID production   # numeric sales team id
vercel env add ODOO_USER_ID production   # numeric salesperson user id

# Redeploy so the new env vars take effect
vercel --prod
```

### Step 4 — Test it
```bash
curl -X POST https://getfractioncto.com/api/leads \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Lead",
    "email": "test@example.com",
    "phone": "+1 555 0100",
    "message": "Testing /api/leads pipeline",
    "source": "manual-test"
  }'
```

Expected response:
```json
{ "ok": true, "lead_id": 1234, "tag": "CTO", "message": "Lead created in Odoo CRM." }
```

In Odoo CRM you should see a new lead in **Pipeline → New** tagged **CTO**.

---

## Where the forms send leads

| Form | Source label | Title |
|---|---|---|
| `/book-a-call` (date/time picker) | `book-a-call` | "Fit-call request — {day} {time}" |
| `/blog` subscribe box | `blog-subscribe` | "Newsletter subscriber" |

Both include UTM parameters (utm_source, utm_medium, utm_campaign) from the
URL and the page they were submitted from, so attribution flows into Odoo.

---

## Adding the same backend to other forms

Any future form just needs to POST JSON to `/api/leads` with at least an
`email` or `phone`. Optional fields:

| Field | Purpose |
|---|---|
| `name` | Contact name |
| `email` | Email (recommended) |
| `phone` | Phone number |
| `company` | Company name → `partner_name` in Odoo |
| `message` | Free-text message body |
| `title` | Lead title (defaults to "Lead from getfractioncto.com") |
| `source` | Label for which form/page submitted (book-a-call, blog-subscribe, …) |
| `utm_source`, `utm_medium`, `utm_campaign` | Standard UTM params |
| `referrer` | document.referrer at submission time |
| `page` | window.location.pathname |
| `website` / `hp` / `honeypot` | Honeypot — any value drops as silent spam |

---

## Troubleshooting

**"Odoo authentication failed"**
→ Wrong DB name, username, or API key. Test the API key by logging in to
Odoo with it (Settings → Users → your user → Account Security → keys).

**Lead created but no tag**
→ Check `ODOO_TAG_NAME` env var. The function auto-creates the tag the
first time it's used; verify under **CRM → Configuration → Tags**.

**CORS error in browser console**
→ The function only accepts requests from `getfractioncto.com` or
`*.vercel.app`. If you're testing from a different domain, update the
regex in `api/leads.js`.

**Form silently submits but no Odoo lead appears**
→ Check Vercel function logs:
```bash
vercel logs https://fraction-cto.vercel.app | grep "leads"
```
