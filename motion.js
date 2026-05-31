/* ============================================================
   FRACTION — shared motion
   ============================================================ */
(function () {
  "use strict";

  /* ---- Sticky nav shadow on scroll ---- */
  var nav = document.querySelector(".nav");
  function onScrollNav() {
    if (!nav) return;
    if (window.scrollY > 12) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  }
  onScrollNav();
  window.addEventListener("scroll", onScrollNav, { passive: true });

  /* ---- Scroll reveal (rect-based — robust across preview contexts) ---- */
  var reveals = [].slice.call(document.querySelectorAll(".reveal"));
  function checkReveals() {
    var vh = window.innerHeight || document.documentElement.clientHeight;
    for (var i = reveals.length - 1; i >= 0; i--) {
      var el = reveals[i];
      var r = el.getBoundingClientRect();
      if (r.top < vh * 0.92 && r.bottom > 0) {
        el.classList.add("in");
        reveals.splice(i, 1);
      }
    }
  }
  checkReveals();
  window.addEventListener("scroll", checkReveals, { passive: true });
  window.addEventListener("resize", checkReveals, { passive: true });
  // safety: ensure everything shows even if something goes sideways
  window.addEventListener("load", checkReveals);

  /* ---- Hero headline word stagger (node-aware, preserves inline tags) ---- */
  document.querySelectorAll("[data-words]").forEach(function (el) {
    var counter = { i: 0 };
    function wrapWord(word, accent) {
      var d = (counter.i * 0.07 + 0.1).toFixed(2);
      counter.i++;
      return '<span class="word"><span class="word-i' + (accent ? " accent" : "") +
        '" style="transition-delay:' + d + 's">' + word + "</span></span> ";
    }
    var out = "";
    [].slice.call(el.childNodes).forEach(function (node) {
      if (node.nodeType === 3) {
        node.nodeValue.split(/\s+/).forEach(function (w) { if (w) out += wrapWord(w, false); });
      } else if (node.nodeName.toLowerCase() === "br") {
        out += "<br/>";
      } else {
        // inline element (e.g. <span class="accent">) — keep its text as one styled word
        var accent = node.classList && node.classList.contains("accent");
        node.textContent.split(/\s+/).forEach(function (w) { if (w) out += wrapWord(w, accent); });
      }
    });
    el.innerHTML = out;
    // trigger transition (setTimeout is reliable even when rAF is throttled)
    setTimeout(function () {
      [].slice.call(el.querySelectorAll(".word-i")).forEach(function (w) { w.classList.add("go"); });
    }, 60);
  });

  /* ---- Hero card fan reveal + parallax + float ---- */
  var fan = document.querySelector("[data-fan]");
  if (fan) {
    var cards = fan.querySelectorAll(".fan-card");
    cards.forEach(function (c, idx) {
      c.style.setProperty("--i", idx);
      setTimeout(function () { c.classList.add("dealt"); }, 220 + idx * 95);
    });
    // floating tags pop
    fan.querySelectorAll(".float-tag").forEach(function (t, idx) {
      setTimeout(function () { t.classList.add("pop"); }, 900 + idx * 220);
    });

    // parallax on scroll + mouse
    var ticking = false;
    function parallax() {
      var sc = window.scrollY;
      cards.forEach(function (c) {
        var depth = parseFloat(c.dataset.depth || "0");
        c.style.setProperty("--py", (sc * depth * -0.06).toFixed(2) + "px");
      });
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { window.requestAnimationFrame(parallax); ticking = true; }
    }, { passive: true });

    var mq = window.matchMedia("(min-width: 760px)");
    if (mq.matches) {
      fan.addEventListener("mousemove", function (e) {
        var r = fan.getBoundingClientRect();
        var mx = (e.clientX - r.left) / r.width - 0.5;
        var my = (e.clientY - r.top) / r.height - 0.5;
        cards.forEach(function (c) {
          var depth = parseFloat(c.dataset.depth || "0");
          c.style.setProperty("--mx", (mx * depth * 14).toFixed(2) + "px");
          c.style.setProperty("--my", (my * depth * 14).toFixed(2) + "px");
        });
      });
      fan.addEventListener("mouseleave", function () {
        cards.forEach(function (c) { c.style.setProperty("--mx", "0px"); c.style.setProperty("--my", "0px"); });
      });
    }
  }

  /* ---- Mobile menu ---- */
  var menuBtn = document.querySelector(".menu-btn");
  var mobileMenu = document.querySelector(".mobile-menu");
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", function () {
      var open = mobileMenu.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    });
    mobileMenu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        mobileMenu.classList.remove("open");
        document.body.style.overflow = "";
      });
    });
  }

  /* ---- Count-up for stats (rect-based) ---- */
  var counters = [].slice.call(document.querySelectorAll("[data-count]"));
  function runCounter(el) {
    var target = parseFloat(el.dataset.count);
    var prefix = el.dataset.prefix || "";
    var suffix = el.dataset.suffix || "";
    var start = performance.now();
    var dur = 1300;
    (function tick(now) {
      var p = Math.min((now - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = target * eased;
      el.textContent = prefix + Math.round(val) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    })(start);
    // safety: guarantee the final value lands even if rAF is throttled
    setTimeout(function () { el.textContent = prefix + Math.round(target) + suffix; }, dur + 200);
  }
  function checkCounters() {
    var vh = window.innerHeight || document.documentElement.clientHeight;
    for (var i = counters.length - 1; i >= 0; i--) {
      var el = counters[i];
      var r = el.getBoundingClientRect();
      if (r.top < vh * 0.85 && r.bottom > 0) {
        runCounter(el);
        counters.splice(i, 1);
      }
    }
  }
  checkCounters();
  window.addEventListener("scroll", checkCounters, { passive: true });
  window.addEventListener("load", checkCounters);
})();
