// Vercel serverless function — GitHub OAuth start
// Redirects the Decap CMS popup to GitHub's authorize endpoint.
import crypto from "node:crypto";

export default function handler(req, res) {
  const clientId = process.env.GITHUB_CLIENT_ID;
  if (!clientId) {
    res.status(500).send(
      "Missing GITHUB_CLIENT_ID env var. Add it via `vercel env add GITHUB_CLIENT_ID`."
    );
    return;
  }

  // CSRF state — verified in /api/callback
  const state = crypto.randomBytes(16).toString("hex");

  // Build the callback URL based on the incoming host so this works both
  // on the production domain and on Vercel preview URLs.
  const proto = req.headers["x-forwarded-proto"] || "https";
  const host = req.headers["x-forwarded-host"] || req.headers.host;
  const redirectUri = `${proto}://${host}/api/callback`;

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    scope: "repo,user",
    state,
    allow_signup: "false",
  });

  res.setHeader(
    "Set-Cookie",
    `decap_csrf=${state}; HttpOnly; Secure; Path=/; SameSite=Lax; Max-Age=600`
  );
  res.writeHead(302, {
    Location: `https://github.com/login/oauth/authorize?${params}`,
  });
  res.end();
}
