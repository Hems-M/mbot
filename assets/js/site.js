/* MBot website script. No libraries.
   Theme switch, mobile menu, search, copy buttons, "On this page" list,
   image viewer and firmware picker. */
(function () {
  "use strict";
  var root = document.documentElement;
  var BASE = window.MBOT_BASEURL || "";

  function store(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* storage blocked: ignore */ }
  }

  /* ---------- Theme ---------- */
  document.querySelectorAll("[data-theme-toggle]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      store("mbot-theme", next);
    });
  });

  /* ---------- Mobile menu ---------- */
  var menuBtn = document.querySelector("[data-menu-toggle]");
  function setMenu(open) {
    root.classList.toggle("menu-open", open);
    if (menuBtn) {
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    }
  }
  if (menuBtn) menuBtn.addEventListener("click", function () { setMenu(!root.classList.contains("menu-open")); });
  document.querySelectorAll("[data-menu-close]").forEach(function (el) {
    el.addEventListener("click", function () { setMenu(false); });
  });

  /* ---------- Copy buttons on code blocks ---------- */
  var copyIcon = '<svg class="icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"/></svg>';
  function copyText(text, done) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text, done); });
    } else {
      fallbackCopy(text, done);
    }
  }
  function fallbackCopy(text, done) {
    var ta = document.createElement("textarea");
    ta.value = text; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); done(); } catch (e) { /* nothing */ }
    document.body.removeChild(ta);
  }
  document.querySelectorAll(".doc-body pre").forEach(function (pre) {
    if (pre.classList.contains("no-copy") || pre.closest(".no-copy")) return;
    var btn = document.createElement("button");
    btn.type = "button"; btn.className = "copy-btn"; btn.innerHTML = copyIcon + "<span>Copy</span>";
    btn.setAttribute("aria-label", "Copy code");
    btn.addEventListener("click", function () {
      var code = pre.querySelector("code") || pre;
      var text = code.innerText.replace(/\n$/, "");
      copyText(text, function () {
        btn.classList.add("is-done"); btn.querySelector("span").textContent = "Copied";
        setTimeout(function () { btn.classList.remove("is-done"); btn.querySelector("span").textContent = "Copy"; }, 1600);
      });
    });
    pre.appendChild(btn);
  });

  /* ---------- Heading links and "On this page" ---------- */
  var body = document.querySelector("[data-doc-body]");
  var toc = document.querySelector("[data-toc]");
  if (body) {
    var heads = body.querySelectorAll("h2[id], h3[id]");
    heads.forEach(function (h) {
      var a = document.createElement("a");
      a.href = "#" + h.id; a.className = "heading-anchor"; a.textContent = "#";
      a.setAttribute("aria-label", "Link to this section");
      h.appendChild(a);
    });
    var h2count = body.querySelectorAll("h2[id]").length;
    if (toc && h2count >= 2) {
      var list = toc.querySelector("[data-toc-list]");
      var links = [];
      heads.forEach(function (h) {
        var li = document.createElement("li");
        li.className = "lvl-" + h.tagName.charAt(1);
        var a = document.createElement("a");
        a.href = "#" + h.id;
        a.textContent = h.firstChild && h.firstChild.nodeType === 3 ? h.firstChild.textContent.trim() : h.textContent.replace(/#$/, "").trim();
        li.appendChild(a); list.appendChild(li); links.push({ a: a, h: h });
      });
      toc.hidden = false;
      var onScroll = function () {
        var cur = null;
        for (var i = 0; i < links.length; i++) {
          if (links[i].h.getBoundingClientRect().top < 120) cur = links[i];
        }
        links.forEach(function (l) { l.a.classList.toggle("is-active", l === cur); });
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }
  }

  /* ---------- Image viewer ---------- */
  var lb = document.querySelector("[data-lightbox]");
  if (lb) {
    var lbImg = lb.querySelector("[data-lightbox-img]");
    var lbCap = lb.querySelector("[data-lightbox-caption]");
    var lastFocus = null;
    var closeLb = function () { lb.hidden = true; lbImg.removeAttribute("src"); if (lastFocus) lastFocus.focus(); };
    document.addEventListener("click", function (e) {
      var z = e.target.closest("[data-zoom]");
      if (!z) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey) return;
      e.preventDefault();
      lastFocus = z;
      var img = z.querySelector("img");
      var fig = z.closest("figure");
      var cap = fig && fig.querySelector("figcaption");
      lbImg.src = z.getAttribute("href");
      lbImg.alt = img ? img.alt : "";
      lbCap.textContent = cap ? cap.textContent : (img ? img.alt : "");
      lb.hidden = false;
      lb.querySelector("[data-lightbox-close]").focus();
    });
    lb.addEventListener("click", function (e) { if (e.target === lb || e.target.closest("[data-lightbox-close]")) closeLb(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !lb.hidden) closeLb(); });
  }

  /* ---------- Search ---------- */
  var modal = document.querySelector("[data-search-modal]");
  var input = modal && modal.querySelector("[data-search-input]");
  var results = modal && modal.querySelector("[data-search-results]");
  var hint = modal && modal.querySelector("[data-search-hint]");
  var index = null, loading = false, selected = -1;

  function loadIndex(cb) {
    if (index) return cb();
    if (loading) return;
    loading = true;
    fetch(BASE + "/search.json").then(function (r) { return r.json(); }).then(function (data) {
      index = data.map(function (d) {
        d._t = (d.title || "").toLowerCase();
        d._c = (d.content || "").toLowerCase();
        d._s = (d.section || "").toLowerCase();
        return d;
      });
      loading = false; cb();
    }).catch(function () {
      loading = false;
      hint.textContent = "Search could not load. If you opened the file directly, run serve.py and use the address it prints.";
    });
  }
  function esc(s) { return s.replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function snippet(d, words) {
    var c = d.content || "";
    var low = d._c, pos = -1;
    for (var i = 0; i < words.length && pos < 0; i++) pos = low.indexOf(words[i]);
    var start = Math.max(0, pos - 50);
    var s = (start > 0 ? "..." : "") + c.substr(start, 160) + "...";
    s = esc(s);
    words.forEach(function (w) {
      if (w.length < 2) return;
      s = s.replace(new RegExp("(" + w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig"), "<mark>$1</mark>");
    });
    return s;
  }
  function runSearch() {
    var q = input.value.trim().toLowerCase();
    results.innerHTML = ""; selected = -1;
    if (q.length < 2) { hint.textContent = "Type at least 2 letters. Press Esc to close."; return; }
    var words = q.split(/\s+/).filter(Boolean);
    var scored = [];
    index.forEach(function (d) {
      var score = 0, all = true;
      words.forEach(function (w) {
        var hit = false;
        if (d._t.indexOf(w) >= 0) { score += 10; hit = true; }
        if (d._s.indexOf(w) >= 0) { score += 2; hit = true; }
        var n = d._c.split(w).length - 1;
        if (n > 0) { score += Math.min(n, 8); hit = true; }
        if (!hit) all = false;
      });
      if (all && score > 0) scored.push({ d: d, s: score });
    });
    scored.sort(function (a, b) { return b.s - a.s; });
    scored.slice(0, 12).forEach(function (r) {
      var li = document.createElement("li");
      li.innerHTML = '<a href="' + BASE + r.d.url + '"><span class="sr-section">' + esc(r.d.section || "") + '</span><span class="sr-title">' + esc(r.d.title) + '</span><span class="sr-snippet">' + snippet(r.d, words) + "</span></a>";
      results.appendChild(li);
    });
    hint.textContent = scored.length ? scored.length + " result" + (scored.length === 1 ? "" : "s") + ". Use the arrow keys and Enter." : "No results. Try a different word.";
  }
  function openSearch() {
    if (!modal) return;
    modal.hidden = false; input.value = ""; results.innerHTML = "";
    hint.textContent = "Type at least 2 letters. Press Esc to close.";
    input.focus();
    loadIndex(function () { if (input.value) runSearch(); });
  }
  function closeSearch() { if (modal) modal.hidden = true; }
  document.querySelectorAll("[data-search-open]").forEach(function (b) { b.addEventListener("click", openSearch); });
  if (modal) {
    modal.querySelectorAll("[data-search-close]").forEach(function (b) { b.addEventListener("click", closeSearch); });
    input.addEventListener("input", function () { loadIndex(runSearch); });
    input.addEventListener("keydown", function (e) {
      var items = results.querySelectorAll("a");
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        if (!items.length) return;
        selected = e.key === "ArrowDown" ? Math.min(selected + 1, items.length - 1) : Math.max(selected - 1, 0);
        items.forEach(function (a, i) { a.classList.toggle("is-selected", i === selected); });
        items[selected].scrollIntoView({ block: "nearest" });
      } else if (e.key === "Enter") {
        var target = items[selected >= 0 ? selected : 0];
        if (target) window.location.href = target.href;
      }
    });
  }
  document.addEventListener("keydown", function (e) {
    var tag = (e.target.tagName || "").toLowerCase();
    var typing = tag === "input" || tag === "textarea" || e.target.isContentEditable;
    if (e.key === "/" && !typing && modal && modal.hidden) { e.preventDefault(); openSearch(); }
    else if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) { e.preventDefault(); openSearch(); }
    else if (e.key === "Escape") { closeSearch(); setMenu(false); }
  });

  /* ---------- Firmware picker ---------- */
  document.querySelectorAll("[data-fw-picker]").forEach(function (picker) {
    var ver = picker.getAttribute("data-version");
    var rootUrl = picker.getAttribute("data-root");
    var fixed = picker.getAttribute("data-robot");
    var status = picker.querySelector("[data-fw-status]");
    var omniRow = picker.querySelector("[data-omni-only]");
    var scope = picker.closest("[data-doc-body]") || document;

    function val(prefix) {
      var el = picker.querySelector('input[name^="' + prefix + '"]:checked');
      return el ? el.value : "";
    }
    function setText(key, text) {
      scope.querySelectorAll('[data-fw-text="' + key + '"]').forEach(function (el) { el.textContent = text; });
    }
    function setLink(key, url) {
      scope.querySelectorAll('[data-fw-href="' + key + '"]').forEach(function (a) {
        if (url) { a.href = url; a.classList.remove("is-disabled"); a.removeAttribute("aria-disabled"); }
        else { a.removeAttribute("href"); a.classList.add("is-disabled"); a.setAttribute("aria-disabled", "true"); }
      });
    }
    function clearFiles() {
      setLink("calib", ""); setLink("main", "");
      setText("calib", "mbot_calibrate_<your-robot>.uf2");
      setText("main", "mbot_<your-robot>.uf2");
      setText("wget-main", "# Choose your options in the firmware picker first");
      setText("flash-calib", "sudo mbot-upload-firmware flash mbot_calibrate_<your-robot>.uf2");
      setText("flash-main", "sudo mbot-upload-firmware flash mbot_<your-robot>.uf2");
    }
    function update() {
      var type = fixed || val("fw-type");
      var enc = val("fw-enc");
      var wheel = val("fw-wheel");
      if (omniRow) omniRow.hidden = type !== "omni";
      status.classList.remove("is-ready", "is-error");

      var motor = type ? "mbot_" + type + "_motor_test.uf2" : "";
      setLink("motor", motor ? rootUrl + motor : "");
      setText("motor", motor || "mbot_<type>_motor_test.uf2");
      setText("wget-tests", "wget " + rootUrl + "mbot_encoder_test.uf2" + (motor ? "\nwget " + rootUrl + motor : ""));

      var ready = type && enc && (type === "classic" || wheel);
      // Firmware v1.2.0 has no Omni files for the 40 resolution encoder.
      if (type === "omni" && enc === "40" && ver === "v1.2.0") {
        status.textContent = "There is no " + ver + " firmware for the Omni with the 40 resolution encoder. Ask course staff which firmware to use.";
        status.classList.add("is-error");
        clearFiles();
        return;
      }
      if (!ready) {
        status.textContent = "Choose the options above to get your files.";
        clearFiles();
        return;
      }
      var suffix = type === "classic" ? "enc" + enc : "enc" + enc + "_w" + wheel + "mm";
      var calib = "mbot_calibrate_" + type + "_" + ver + "_" + suffix + ".uf2";
      var main = "mbot_" + type + "_" + ver + "_" + suffix + ".uf2";
      setLink("calib", rootUrl + calib); setLink("main", rootUrl + main);
      setText("calib", calib); setText("main", main);
      setText("wget-main", "wget " + rootUrl + calib + "\nwget " + rootUrl + main);
      setText("flash-calib", "sudo mbot-upload-firmware flash " + calib);
      setText("flash-main", "sudo mbot-upload-firmware flash " + main);
      status.textContent = "Ready. Your files are " + calib + " and " + main + ". The commands below are updated.";
      status.classList.add("is-ready");
    }
    picker.addEventListener("change", update);
    update();
  });
})();
