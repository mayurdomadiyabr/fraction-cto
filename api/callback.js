// Vercel serverless function — GitHub OAuth callback
// Exchanges the auth code for an access token and posts it back to
// the Decap CMS opener window via postMessage.

export default async function handler(req, res) {
  try {
    const clientId = process.env.GITHUB_CLIENT_ID;
    const clientSecret = process.env.GITHUB_CLIENT_SECRET;

    if (!clientId || !clientSecret) {
      return res
        .status(500)
        .send(
          "Missing env vars. Set GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET in Vercel."
        );
    }

    const url = new URL(req.url, `https://${req.headers.host}`);
    const code = url.searchParams.get("code");
    const state = url.searchParams.get("state");

    if (!code) return res.status(400).send("Missing code parameter.");

    // Verify CSRF state cookie
    const cookie = req.headers.cookie || "";
    const csrf = (cookie.match(/decap_csrf=([^;]+)/) || [])[1];
    if (!csrf || csrf !== state) {
      return res.status(403).send("Invalid OAuth state (CSRF check failed).");
    }

    // Exchange code for access token
    const resp = await fetch(
      "https://github.com/login/oauth/access_token",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "User-Agent": "decap-cms-oauth-proxy",
        },
        body: JSON.stringify({
          client_id: clientId,
          client_secret: clientSecret,
          code,
        }),
      }
    );

    const data = await resp.json();
    if (!data.access_token) {
      return res
        .status(400)
        .send(`GitHub did not return a token: ${JSON.stringify(data)}`);
    }

    // Clear CSRF cookie
    res.setHeader(
      "Set-Cookie",
      "decap_csrf=; HttpOnly; Secure; Path=/; SameSite=Lax; Max-Age=0"
    );
    res.setHeader("Content-Type", "text/html; charset=utf-8");

    const payload = JSON.stringify({
      token: data.access_token,
      provider: "github",
    });

    // Send the token to Decap CMS via postMessage and close the popup.
    res.status(200).send(`<!doctype html>
<html><head><meta charset="utf-8"><title>Authorized</title></head>
<body>
<p style="font-family:system-ui;padding:24px">Authorization successful. Closing window…</p>
<script>
(function () {
  function receive(e) {
    if (e.data !== 'authorizing:github') return;
    window.removeEventListener('message', receive);
    window.opener.postMessage(
      'authorization:github:success:' + ${JSON.stringify(payload)},
      e.origin
    );
  }
  window.addEventListener('message', receive, false);
  // Initial handshake — Decap may have already posted, so reply immediately too
  window.opener && window.opener.postMessage(
    'authorization:github:success:' + ${JSON.stringify(payload)},
    '*'
  );
  setTimeout(function () { window.close(); }, 800);
})();
</script>
</body></html>`);
  } catch (err) {
    console.error("OAuth callback error:", err);
    res.status(500).send(`OAuth callback error: ${err.message}`);
  }
}
