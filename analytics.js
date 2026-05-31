/* Fraction CTO — analytics + conversion tracking
 * ---------------------------------------------------------------
 *  Loaded with <script src="/analytics.js" defer></script> in <head>
 *  Tracks every signal that helps maximise "Book a call" conversions.
 *
 *  Stack:
 *    - GA4 (gtag.js)          → primary analytics, conversions
 *    - Microsoft Clarity      → session replay + heatmaps
 *    - Meta Pixel (optional)  → activates when window.META_PIXEL_ID set
 *    - LinkedIn Insight (opt) → activates when window.LINKEDIN_PARTNER_ID set
 *
 *  Conversion event:  book_a_call_submit  (marked as key event in GA4)
 *  Supporting events: book_a_call_cta_click, book_a_call_form_start,
 *                     scroll_25/50/75/100, outbound_click, blog_engaged
 */
(function () {
  "use strict";
  if (window.__fctoAnalyticsLoaded) return;
  window.__fctoAnalyticsLoaded = true;

  // ---------- CONFIG (edit if IDs change) ----------
  var GA4_ID        = "G-MG61W3XJ1M";
  var CLARITY_ID    = "tw1lt7c0wd";     // Microsoft Clarity Project ID — replace if different
  // (Meta + LinkedIn auto-load if window.META_PIXEL_ID / window.LINKEDIN_PARTNER_ID are set)

  // ---------- Utility: persistent visitor + session ids ----------
  function cookie(name, value, days) {
    if (value === undefined) {
      var m = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
      return m ? decodeURIComponent(m[1]) : null;
    }
    var exp = "";
    if (days) {
      var d = new Date(); d.setTime(d.getTime() + days * 864e5);
      exp = "; expires=" + d.toUTCString();
    }
    document.cookie = name + "=" + encodeURIComponent(value) + exp +
      "; path=/; SameSite=Lax; Secure";
  }
  function uuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0;
      return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }
  var visitorId = cookie("fcto_vid") || uuid();
  cookie("fcto_vid", visitorId, 365);

  // ---------- Pull UTMs once and persist (last-touch) ----------
  var params = new URLSearchParams(location.search);
  ["utm_source","utm_medium","utm_campaign","utm_content","utm_term","gclid","fbclid","msclkid"].forEach(function (k) {
    var v = params.get(k);
    if (v) cookie("fcto_" + k, v, 90);
  });
  function utms() {
    var out = {};
    ["utm_source","utm_medium","utm_campaign","utm_content","utm_term","gclid","fbclid","msclkid"].forEach(function (k) {
      var v = cookie("fcto_" + k);
      if (v) out[k] = v;
    });
    return out;
  }

  // ---------- GA4 gtag.js loader ----------
  window.dataLayer = window.dataLayer || [];
  function gtag(){ window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("set", { user_id: visitorId });
  gtag("config", GA4_ID, {
    send_page_view: true,
    page_referrer: document.referrer || undefined,
    user_properties: { visitor_id: visitorId }
  });
  var gtagScript = document.createElement("script");
  gtagScript.async = true;
  gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=" + GA4_ID;
  document.head.appendChild(gtagScript);

  // ---------- Microsoft Clarity (session replay + heatmaps) ----------
  if (CLARITY_ID) {
    (function (c, l, a, r, i) {
      c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
      var t = l.createElement(r);
      t.async = true;
      t.src = "https://www.clarity.ms/tag/" + i;
      var y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", CLARITY_ID);
    // Tag the visitor in Clarity too so you can correlate sessions with leads
    window.clarity && window.clarity("set", "visitor_id", visitorId);
  }

  // ---------- Meta Pixel (optional, activates if PIXEL_ID set) ----------
  if (window.META_PIXEL_ID) {
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = "2.0"; n.queue = [];
      t = b.createElement(e); t.async = !0; t.src = v;
      s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
    }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    fbq("init", window.META_PIXEL_ID);
    fbq("track", "PageView");
  }

  // ---------- LinkedIn Insight Tag (optional) ----------
  if (window.LINKEDIN_PARTNER_ID) {
    window._linkedin_partner_id = window.LINKEDIN_PARTNER_ID;
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(window.LINKEDIN_PARTNER_ID);
    (function (l) {
      if (!l) { window.lintrk = function (a, b) { window.lintrk.q.push([a, b]) }; window.lintrk.q = []; }
      var s = document.getElementsByTagName("script")[0];
      var b = document.createElement("script");
      b.type = "text/javascript"; b.async = true;
      b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
      s.parentNode.insertBefore(b, s);
    })(window.lintrk);
  }

  // ---------- Unified event helper ----------
  function track(eventName, params) {
    var payload = Object.assign({
      visitor_id: visitorId,
      page_path: location.pathname,
    }, utms(), params || {});
    try { gtag("event", eventName, payload); } catch (e) {}
    try { window.fbq && fbq("trackCustom", eventName, payload); } catch (e) {}
    try { window.lintrk && lintrk("track", { conversion_id: payload.conversion_id }); } catch (e) {}
    try { window.clarity && clarity("event", eventName); } catch (e) {}
  }

  // ---------- "Book a call" CTA tracking (any link to /book-a-call) ----------
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a, button");
    if (!a) return;
    var href = a.getAttribute("href") || "";
    var text = (a.innerText || a.textContent || "").trim().slice(0, 80);

    if (/book-a-call/i.test(href) || /book a (fit )?call/i.test(text) || /fit call/i.test(text)) {
      track("book_a_call_cta_click", {
        cta_text: text,
        cta_href: href,
        location: location.pathname,
      });
    } else if (/teardown/i.test(href)) {
      track("teardown_cta_click", { cta_text: text, cta_href: href });
    } else if (a.tagName === "A" && href.startsWith("http") && !href.includes(location.host)) {
      track("outbound_click", { href: href, text: text });
    }
  }, true);

  // ---------- Book-a-call form: focus = "started", submit = conversion ----------
  function instrumentBookForm() {
    var form = document.getElementById("bookForm");
    if (!form || form.__instrumented) return;
    form.__instrumented = true;

    var started = false;
    form.addEventListener("focusin", function () {
      if (started) return;
      started = true;
      track("book_a_call_form_start", { location: location.pathname });
    });

    form.addEventListener("submit", function () {
      // submission validation happens in the page's own handler;
      // we fire the conversion event regardless of success — GA4 dedupes by visitor.
      // For higher fidelity, hook into a global resolve() in the form code.
      var name = (document.getElementById("name") || {}).value || "";
      var email = (document.getElementById("email") || {}).value || "";
      track("book_a_call_submit", {
        // GA4 conversion event
        currency: "USD",
        value: 250,                         // est. lead value, tune over time
        method: "website-form",
        has_name: !!name,
        has_email: !!email,
      });
      // Also fire the official Meta Lead event if Pixel is loaded
      try { window.fbq && fbq("track", "Lead", { content_name: "fit-call" }); } catch (e) {}
    });
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", instrumentBookForm);
  } else {
    instrumentBookForm();
  }

  // ---------- Scroll depth (25 / 50 / 75 / 100) ----------
  var marks = { 25: false, 50: false, 75: false, 100: false };
  function onScroll() {
    var h = document.documentElement;
    var pct = Math.round(((window.scrollY + window.innerHeight) / h.scrollHeight) * 100);
    [25, 50, 75, 100].forEach(function (m) {
      if (!marks[m] && pct >= m) {
        marks[m] = true;
        track("scroll", { percent: m });
      }
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });

  // ---------- Blog engagement (≥ 30 s on a /post-* page = engaged) ----------
  if (/^\/post-/.test(location.pathname)) {
    setTimeout(function () { track("blog_engaged", { duration_seconds: 30 }); }, 30000);
  }

  // ---------- Subscribe form (on /blog) ----------
  function instrumentSubscribeForm() {
    var f = document.getElementById("subForm");
    if (!f || f.__instrumented) return;
    f.__instrumented = true;
    f.addEventListener("submit", function () {
      var email = (document.getElementById("subEmail") || {}).value || "";
      track("newsletter_subscribe", { has_email: !!email, value: 50 });
    });
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", instrumentSubscribeForm);
  } else {
    instrumentSubscribeForm();
  }
})();
