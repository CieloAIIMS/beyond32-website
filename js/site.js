/* Beyond 32 Dental — shared chrome + behaviours for inner pages */
(function () {
  document.documentElement.classList.add("js");

  const PRACTICE = {
    phone: "(02) 9158 6334",
    tel: "tel:+61291586334",
    email: "hello@beyond32dental.com.au", // placeholder — confirm with practice
    address: "1st Floor, 114 Yarrara Rd, Pennant Hills NSW 2120",
    maps: "https://www.google.com/maps/dir/?api=1&destination=114+Yarrara+Rd+Pennant+Hills+NSW+2120",
    book: "contact.html#enquire",
    // [open, close] in 24h, index 0 = Sunday
    hours: [null, [9, 18], [9, 18], [9, 18], [9, 18], [9, 18], [9, 15]],
  };
  window.B32 = PRACTICE;

  /* ---------- Icons: one stroke family, 1.6px, round joins ---------- */
  const I = {
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 3.5h3.2l1.6 4.2-2.1 1.4a11.5 11.5 0 0 0 7.2 7.2l1.4-2.1 4.2 1.6V19a1.8 1.8 0 0 1-1.9 1.8C10.4 20.3 3.7 13.6 3.2 5.4A1.8 1.8 0 0 1 5 3.5Z"/></svg>',
    chev: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M4 8h16M4 16h16"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>',
    star: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2.8 2.8 6 6.5.7-4.9 4.4 1.4 6.4L12 17l-5.8 3.3 1.4-6.4-4.9-4.4 6.5-.7z"/></svg>',
  };
  window.B32.icons = I;

  const page = document.body.dataset.page || "";
  const cur = (p) => (page === p ? ' aria-current="page"' : "");

  /* ---------- Header: TLC structure, Avira finish ---------- */
  const svg = (d) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  const SERVICES = [
    {
      id: "general", href: "general-dentistry-check-up-and-clean.html", name: "General Dentistry", desc: "Everyday care that keeps small problems small.",
      img: "assets/first-visit-opt.jpg", pos: "50% 30%",
      icon: svg('<path d="M8.2 3.5c-2.6 0-4.4 2-4.4 4.7 0 2.3.9 3.6 1.5 5.6.7 2.5.8 6.7 2.6 6.7 1.6 0 1.4-4.4 4.1-4.4s2.5 4.4 4.1 4.4c1.8 0 1.9-4.2 2.6-6.7.6-2 1.5-3.3 1.5-5.6 0-2.7-1.8-4.7-4.4-4.7-1.6 0-2.5.9-3.8.9s-2.2-.9-3.8-.9Z"/>'),
      items: ["Check-ups & Cleaning", "Crowns & Bridges", "Root Canal Treatment", "In-House Sedation", "Toothache"],
    },
    {
      id: "cosmetic", href: "cosmetic-dentistry.html", name: "Cosmetic Dentistry", desc: "For patients who want to feel as good as they look.",
      img: "assets/kid-mirror-opt.jpg", pos: "45% 40%",
      icon: svg('<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.5 6.5l2 2M15.5 15.5l2 2M17.5 6.5l-2 2M8.5 15.5l-2 2"/>'),
      items: ["Veneers", "Teeth Whitening", "Zoom Whitening", "Fixing My Smile"],
    },
    {
      id: "straight", href: "crooked-teeth.html", name: "Teeth Straightening", desc: "Options for every age and every lifestyle.",
      img: "assets/girl-smile-opt.jpg", pos: "50% 35%",
      icon: svg('<path d="M3 10c3-3 6-3 9 0s6 3 9 0M3 15c3-3 6-3 9 0s6 3 9 0"/>'),
      items: ["Invisalign", "Damon Braces", "Inman Aligner", "Early Interceptive Orthodontics", "Crooked Teeth"],
    },
    {
      id: "implants", href: "dental-implant.html", name: "Implants & All-on-X", desc: "Permanent, natural-feeling replacement teeth.",
      img: "assets/family.png", pos: "50% 25%",
      icon: svg('<path d="M7 4h10l-1 5H8L7 4ZM9 9v2h6V9M10 11l.5 9h3l.5-9M10.2 14h3.6M10.4 17h3.2"/>'),
      items: ["Dental Implants", "Crowns & Bridges"],
    },
  ];
  // Treatment pages that exist so far
  const LINKS = {
    "Check-ups & Cleaning": "general-dentistry-check-up-and-clean.html", "Crowns & Bridges": "crown-and-bridges.html",
    "Root Canal Treatment": "root-canal-therapy.html", "In-House Sedation": "in-house-sedation.html", "Toothache": "toothache.html",
    "Veneers": "veneers.html", "Teeth Whitening": "teeth-whitening.html", "Zoom Whitening": "zoom-teeth-whitening.html",
    "Fixing My Smile": "fixing-my-smile.html",
    "Invisalign": "invisalign.html", "Damon Braces": "damon-braces.html", "Inman Aligner": "inman-aligner.html",
    "Early Interceptive Orthodontics": "early-interceptive-orthodontics.html", "Crooked Teeth": "crooked-teeth.html",
    "Dental Implants": "dental-implant.html", "Missing Teeth": "dental-implant.html", "Dental Anxiety": "in-house-sedation.html",
    "Broken Teeth": "broken-teeth.html",
  };
  const CONCERNS = ["Toothache", "Broken Teeth", "Dental Anxiety", "Missing Teeth", "Crooked Teeth"];
  const ABOUT = [
    { href: "about.html", name: "Our Story", desc: "A family practice in Pennant Hills since 2013", key: "about" },
    { href: "about.html#team", name: "Meet the Team", desc: "Five dentists who’ll get to know you" },
    { href: "gallery.html", name: "Smile Gallery", desc: "Real before & after results", key: "gallery" },
    { href: "blog.html", name: "Blog", desc: "Plain-English advice for healthy smiles", key: "blog" },
  ];
  const here = location.pathname.split("/").pop() || "index.html";
  const notService = /^(first-visit|special-offers|blog|[a-z]+-dentist|dentist-[a-z]+)/.test(here);
  const aboutActive = page === "about" || page === "gallery" || /^blog/.test(here);

  const header = document.querySelector("[data-site-header]");
  if (header) {
    header.className = "site-header";
    header.innerHTML = `
      <nav class="nav" aria-label="Main">
        <a class="nav__logo" href="index.html" aria-label="Beyond 32 Dental home"><img src="assets/logo.svg" alt="Beyond 32 Dental" width="150" height="32"></a>

        <ul class="nav__links" role="list">
          <li class="nav__item" data-menu>
            <button class="nav__link" type="button" aria-expanded="false" aria-controls="menu-services"${(page === "emergency" || page === "service") && !notService ? " data-current" : ""}>Services ${I.chev}</button>
            <div class="panel-menu mega" id="menu-services">
              <div class="mega__cats">
                <h2>Services</h2>
                ${SERVICES.map((s, i) => `
                  <a class="cat" href="${s.href || "#"}" data-cat="${s.id}"${i === 0 ? " data-active" : ""}>
                    <span class="cat__icon">${s.icon}</span>
                    <span><b>${s.name}</b><span>${s.desc}</span></span>
                  </a>`).join("")}
                <a class="text-link mega__all" href="index.html#h-svc">Explore all services <span>→</span></a>
              </div>
              <div class="mega__side">
                <div class="mega__img"><img src="${SERVICES[0].img}" alt="" style="object-position:${SERVICES[0].pos}" loading="lazy"></div>
                ${SERVICES.map((s, i) => `
                  <div class="mega__list" data-list="${s.id}"${i === 0 ? " data-active" : ""}>
                    ${s.items.map((t) => `<a href="${LINKS[t] || "#"}"${LINKS[t] && LINKS[t] === location.pathname.split("/").pop() ? ' aria-current="page"' : ""}>${t}</a>`).join("")}
                  </div>`).join("")}
              </div>
              <div class="mega__help">
                <p>I need help with</p>
                <a class="is-urgent" href="emergency-dental-care.html">Emergency Dental Care</a>
                ${CONCERNS.map((c) => `<a href="${LINKS[c] || "#"}">${c}</a>`).join("")}
              </div>
            </div>
          </li>
          <li class="nav__item"><a class="nav__link" href="first-visit.html"${here === "first-visit.html" ? ' aria-current="page"' : ""}>New Patients <span class="nav__dot" aria-hidden="true"></span></a></li>
          <li class="nav__item"><a class="nav__link" href="special-offers.html"${here === "special-offers.html" ? ' aria-current="page"' : ""}>Special Offers</a></li>
          <li class="nav__item" data-menu>
            <button class="nav__link" type="button" aria-expanded="false" aria-controls="menu-about"${aboutActive ? " data-current" : ""}>About ${I.chev}</button>
            <div class="panel-menu mini" id="menu-about">
              ${ABOUT.map((a) => `<a href="${a.href}"${a.key && a.key === page ? ' aria-current="page"' : ""}><b>${a.name}</b><span>${a.desc}</span></a>`).join("")}
            </div>
          </li>
          <li class="nav__item"><a class="nav__link" href="contact.html"${cur("contact")}>Contact</a></li>
        </ul>

        <div class="nav__actions">
          <a class="btn btn--ink" href="${PRACTICE.tel}">${I.phone}<span class="label">${PRACTICE.phone}</span></a>
          <a class="btn btn--gold" href="${PRACTICE.book}">Book Online</a>
          <a class="nav__burger nav__call-icon" href="${PRACTICE.tel}" aria-label="Call ${PRACTICE.phone}">${I.phone}</a>
          <button class="nav__burger" type="button" aria-expanded="false" aria-controls="mobile-sheet" aria-label="Open menu" data-burger>${I.menu}</button>
        </div>
      </nav>

      <div class="sheet" id="mobile-sheet">
        <details${page === "emergency" ? " open" : ""}>
          <summary>Services ${I.chev}</summary>
          <div class="sheet__group">
            ${SERVICES.map((s) => `<div class="sheet__cat"><a class="sheet__cat-head" href="${s.href || "#"}"><span class="cat__icon">${s.icon}</span><b>${s.name}</b></a><div class="sheet__subs">${s.items.map((t) => `<a href="${LINKS[t] || "#"}">${t}</a>`).join("")}</div></div>`).join("")}
            <div class="sheet__chips">
              <a class="is-urgent" href="emergency-dental-care.html">Emergency Dental Care</a>
              ${CONCERNS.map((c) => `<a href="${LINKS[c] || "#"}">${c}</a>`).join("")}
            </div>
          </div>
        </details>
        <a href="first-visit.html">New Patients</a>
        <a href="special-offers.html">Special Offers</a>
        <details${aboutActive ? " open" : ""}>
          <summary>About ${I.chev}</summary>
          <div class="sheet__group">
            ${ABOUT.map((a) => `<a href="${a.href}" style="grid-template-columns:1fr"><span><b>${a.name}</b><span>${a.desc}</span></span></a>`).join("")}
          </div>
        </details>
        <a href="contact.html"${cur("contact")}>Contact</a>
        <div class="sheet__cta">
          <a class="btn btn--ink" href="${PRACTICE.tel}">${I.phone} Call us</a>
          <a class="btn btn--gold" href="${PRACTICE.book}">Book Online</a>
        </div>
      </div>`;

    // Scrolled state: hairline + soft shadow once the page moves
    const onScroll = () => header.toggleAttribute("data-scrolled", window.scrollY > 4);
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Mobile sheet
    const burger = header.querySelector("[data-burger]");
    const setSheet = (open) => {
      header.toggleAttribute("data-menu-open", open);
      document.body.toggleAttribute("data-menu-open", open);
      burger.setAttribute("aria-expanded", String(open));
      burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      burger.innerHTML = open ? I.close : I.menu;
    };
    burger.addEventListener("click", () => setSheet(!header.hasAttribute("data-menu-open")));
    header.querySelectorAll(".sheet a").forEach((a) => a.addEventListener("click", () => setSheet(false)));
    matchMedia("(min-width: 1081px)").addEventListener("change", (e) => { if (e.matches) setSheet(false); });

    // Desktop panels: hover with a short close delay, click and keyboard too
    const items = [...header.querySelectorAll("[data-menu]")];
    const setOpen = (item, open) => {
      item.toggleAttribute("data-open", open);
      item.querySelector(":scope > button").setAttribute("aria-expanded", String(open));
    };
    const closeAll = (except) => items.forEach((it) => it !== except && setOpen(it, false));
    items.forEach((item) => {
      const btn = item.querySelector(":scope > button");
      let t;
      item.addEventListener("mouseenter", () => { clearTimeout(t); closeAll(item); if (!item.hasAttribute("data-open")) { setOpen(item, true); item.dataset.hoverAt = Date.now(); } });
      item.addEventListener("mouseleave", () => { t = setTimeout(() => setOpen(item, false), 160); });
      btn.addEventListener("click", () => {
        // A click right after hover-open confirms the panel rather than closing it
        const justHovered = Date.now() - Number(item.dataset.hoverAt || 0) < 600;
        const o = justHovered || !item.hasAttribute("data-open");
        item.dataset.hoverAt = 0; closeAll(item); setOpen(item, o);
      });
      item.addEventListener("focusout", (e) => { if (!item.contains(e.relatedTarget)) setOpen(item, false); });
    });
    document.addEventListener("keydown", (e) => {
      if (e.key !== "Escape") return;
      const open = items.find((it) => it.hasAttribute("data-open"));
      if (open) { setOpen(open, false); open.querySelector("button").focus(); }
      if (header.hasAttribute("data-menu-open")) { setSheet(false); burger.focus(); }
    });
    document.addEventListener("click", (e) => { if (!header.contains(e.target)) closeAll(); });

    // Mega menu: hovering or focusing a category swaps the treatment list and photo
    const mega = header.querySelector(".mega");
    const img = mega.querySelector(".mega__img img");
    mega.querySelectorAll(".cat").forEach((cat) => {
      const activate = () => {
        const s = SERVICES.find((x) => x.id === cat.dataset.cat);
        mega.querySelectorAll(".cat").forEach((c) => c.toggleAttribute("data-active", c === cat));
        mega.querySelectorAll(".mega__list").forEach((l) => l.toggleAttribute("data-active", l.dataset.list === s.id));
        if (!img.src.endsWith(s.img)) { img.style.opacity = 0; setTimeout(() => { img.src = s.img; img.style.objectPosition = s.pos; img.style.opacity = 1; }, 150); }
      };
      cat.addEventListener("mouseenter", activate);
      cat.addEventListener("focus", activate);
    });
  }

  /* ---------- Opening hours (Sydney time) ---------- */
  function sydneyNow() {
    const parts = new Intl.DateTimeFormat("en-AU", { timeZone: "Australia/Sydney", weekday: "short", hour: "numeric", minute: "numeric", hour12: false }).formatToParts(new Date());
    const get = (t) => parts.find((p) => p.type === t)?.value;
    const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
    return { day, hour: Number(get("hour")) % 24 + Number(get("minute")) / 60 };
  }
  const fmt = (h) => (h === 12 ? "12pm" : h > 12 ? `${h - 12}pm` : `${h}am`);
  const DAY = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  function openStatus() {
    const { day, hour } = sydneyNow();
    const today = PRACTICE.hours[day];
    if (today && hour >= today[0] && hour < today[1]) {
      return { open: true, text: `Open now · until ${fmt(today[1])} today`, short: `Open until ${fmt(today[1])}` };
    }
    if (today && hour < today[0]) return { open: false, text: `Closed · opens ${fmt(today[0])} today`, short: `Opens ${fmt(today[0])} today` };
    for (let i = 1; i <= 7; i++) {
      const d = (day + i) % 7, h = PRACTICE.hours[d];
      if (h) {
        const when = i === 1 ? "tomorrow" : DAY[d];
        return { open: false, text: `Closed · opens ${fmt(h[0])} ${when}`, short: `Opens ${fmt(h[0])} ${when}` };
      }
    }
  }
  window.B32.status = openStatus;
  window.B32.today = () => sydneyNow().day;

  document.querySelectorAll("[data-open-status]").forEach((el) => {
    const s = openStatus();
    el.dataset.state = s.open ? "open" : "closed";
    el.querySelector("[data-status-text]").textContent = el.hasAttribute("data-short") ? s.short : s.text;
  });
  document.querySelectorAll("[data-hours]").forEach((dl) => {
    const today = sydneyNow().day;
    dl.querySelectorAll("[data-day]").forEach((n) => {
      if (n.dataset.day.split(",").map(Number).includes(today)) n.classList.add("is-today");
    });
  });

  /* ---------- Footer ---------- */
  const footer = document.querySelector("[data-site-footer]");
  if (footer) {
    const variant = document.body.dataset.footer || "full";
    const ctas = {
      checkup: {
        h: 'Book your <span class="it">check up and clean</span>',
        p: "Whether you are due for your six month visit or it has been longer than you would like to admit, book in and we will take a look. No lecture, no pressure, and a clear picture of where things stand.",
        a: `<a class="btn btn--gold" href="${PRACTICE.book}">Book Online Now</a><a class="btn btn--ghost" href="${PRACTICE.tel}">Call ${PRACTICE.phone}</a>`,
      },
      full: {
        h: 'Ready for a dentist that feels like <span class="it">part of the family?</span>',
        a: `<a class="btn btn--gold" href="${PRACTICE.book}">Book Online →</a><a class="btn btn--ghost" href="${PRACTICE.tel}">Call ${PRACTICE.phone}</a>`,
      },
      emergency: {
        h: 'Don’t wait it out. <span class="it">Call us now.</span>',
        a: `<a class="btn btn--gold" href="${PRACTICE.tel}">Call ${PRACTICE.phone} Now</a><a class="btn btn--ghost" href="${PRACTICE.maps}" target="_blank" rel="noopener">Get Directions</a>`,
      },
    };
    const cta = ctas[variant];
    const hoursRows = `
      <dt data-day="1,2,3,4,5">Monday – Friday</dt><dd data-day="1,2,3,4,5">9am–6pm</dd>
      <dt data-day="6">Saturday</dt><dd data-day="6">9am–3pm</dd>
      <dt data-day="0">Sunday</dt><dd data-day="0">Closed</dd>`;

    footer.innerHTML = `
      ${cta ? `
      <section class="footer-cta" aria-labelledby="footer-cta-h">
        <div class="container">
          <div class="footer-cta__top">
            <div><h2 class="h2" id="footer-cta-h">${cta.h}</h2>${cta.p ? `<p class="footer-cta__p">${cta.p}</p>` : ""}</div>
            <div class="btn-row">${cta.a}</div>
          </div>
          <div class="footer-cta__grid">
            <a class="footer-map" href="${PRACTICE.maps}" target="_blank" rel="noopener" aria-label="Open directions to Beyond 32 Dental in Google Maps">
              <img src="assets/map-opt.jpg" alt="" loading="lazy">
              <span class="footer-map__pin"><span>Beyond 32 Dental</span><i></i></span>
            </a>
            <div class="footer-side">
              <div class="rating-chip">
                <img src="assets/google.svg" alt="Google">
                <b>5.0 ${I.star}</b><span class="sep"></span><b>360+</b>
                <small>Happy Customers</small>
              </div>
              <div class="info-card">
                <div class="info-card__img"><img src="assets/practice-opt.jpg" alt="Reception at Beyond 32 Dental, with the mint feature wall and brass-front desk" loading="lazy"></div>
                <h3>Beyond 32 Dental</h3>
                <address>1st Floor/114 Yarrara Rd, Pennant Hills NSW 2120</address>
                <hr>
                <dl class="hours" data-hours>${hoursRows}</dl>
              </div>
            </div>
          </div>
        </div>
      </section>` : `<div class="footer-cta" style="padding:0;height:60px" aria-hidden="true"></div>`}
      <div class="trust-bar">
        <div class="container trust-bar__inner">
          <div class="rating-chip" style="flex-direction:row">
            <img src="assets/google.svg" alt="Google">
            <div><b>5.0 ${I.star}</b> <b style="margin-left:8px">360+</b><br><small>Happy Customers</small></div>
          </div>
          <div class="trust-item"><img src="assets/award-sbca-crop.png" alt="" width="40" height="66"><p>Australian small business champion awards<b>2026 Finalist</b></p></div>
          <span class="vsep"></span>
          <div class="trust-item"><img src="assets/invisalign.png" alt="" width="58" height="69"><p>Gold+ Invisalign provider<b>2022 Award</b></p></div>
          <span class="vsep"></span>
          <div class="trust-item"><img src="assets/award-local.png" alt="" width="62" height="62" style="border-radius:50%"><p>Local business awards, Hornsby &amp; Ku-ring-gai<b>2025 Finalist</b></p></div>
        </div>
      </div>
      <footer class="site-footer">
        <div class="site-footer__rule"></div>
        <div class="container site-footer__main">
          <div>
            <img class="site-footer__logo" src="assets/logo.svg" alt="Beyond 32 Dental">
            <div class="socials">
              <a href="#" aria-label="Facebook"><img src="assets/social-1.svg" alt=""></a>
              <a href="#" aria-label="Instagram"><img src="assets/social-2.svg" alt=""></a>
              <a href="https://www.google.com/search?q=Beyond+32+Dental+Pennant+Hills+reviews" target="_blank" rel="noopener" aria-label="Google reviews"><img src="assets/social-3.svg" alt=""></a>
            </div>
          </div>
          <p class="site-footer__tag">A confident smile starts with <span class="it">true comfort &amp; care</span></p>
          <ul class="site-footer__info">
            <li><img src="assets/ic-location.svg" alt="">Level 1/114 Yarrara Road, Pennant Hills</li>
            <li><img src="assets/ic-calendar.svg" alt="">Mon–Fri 9am–6pm &nbsp;·&nbsp; Sat 9am–3pm</li>
            <li><img src="assets/ic-car.svg" alt="">Convenient free parking</li>
          </ul>
        </div>
        <div class="site-footer__rule"></div>
        <div class="container site-footer__areas"><span>Your local dentist for</span><a href="beecroft-dentist.html">Beecroft</a><a href="cherrybrook-dentist.html">Cherrybrook</a><a href="dentist-glenhaven.html">Glenhaven</a><a href="dural-dentist.html">Dural</a><a href="westleigh-dentist.html">Westleigh</a></div>
        <div class="site-footer__rule"></div>
        <div class="container site-footer__bottom">
          <p>© Beyond 32 Dental. All rights reserved.</p>
          <nav aria-label="Footer"><a href="first-visit.html">New Patients</a><a href="special-offers.html">Special Offers</a><a href="blog.html">Blog</a><a href="about.html">About</a><a href="gallery.html">Smile Gallery</a><a href="emergency-dental-care.html">Emergencies</a><a href="contact.html">Contact</a><a href="https://beyond32dental.com.au/privacy-policy/">Privacy</a></nav>
          <div class="aiims">Empowered by<img src="assets/aiims.svg" alt="aiims"></div>
        </div>
      </footer>
      <div class="callbar" data-callbar>
        <a class="btn btn--gold" href="${PRACTICE.tel}">${I.phone} Call now</a>
        <a class="btn btn--ink" href="${variant === "emergency" ? PRACTICE.maps : PRACTICE.book}">${variant === "emergency" ? "Directions" : "Book online"}</a>
      </div>`;

    // re-run hours highlight for injected footer
    const today = sydneyNow().day;
    footer.querySelectorAll("[data-day]").forEach((n) => {
      if (n.dataset.day.split(",").map(Number).includes(today)) n.classList.add("is-today");
    });

    // Mobile call bar: appears once the hero has scrolled away
    const bar = footer.querySelector("[data-callbar]");
    const hero = document.querySelector(".ihero, [data-hero]");
    document.body.classList.add("has-callbar");
    if (hero && "IntersectionObserver" in window) {
      new IntersectionObserver(([e]) => bar.toggleAttribute("data-show", !e.isIntersecting), { threshold: 0.15 }).observe(hero);
    } else bar.setAttribute("data-show", "");
  }

  /* ---------- Reveal (used sparingly) ---------- */
  const rev = document.querySelectorAll("[data-reveal]");
  if (rev.length && "IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -10% 0px" });
    rev.forEach((el) => io.observe(el));
  } else rev.forEach((el) => el.classList.add("is-in"));

  /* ---------- Motion layer ---------- */
  const calm = matchMedia("(prefers-reduced-motion: reduce)");
  const hh = () => (document.querySelector("[data-site-header]") || {}).offsetHeight || 80;

  // Reading progress along the bottom of the sticky header
  const siteHeader = document.querySelector("[data-site-header]");
  if (siteHeader) {
    const bar = document.createElement("span");
    bar.className = "scroll-progress";
    bar.setAttribute("aria-hidden", "true");
    siteHeader.appendChild(bar);
    const setP = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      bar.style.setProperty("--p", max > 0 ? Math.min(1, scrollY / max).toFixed(4) : 0);
    };
    addEventListener("scroll", setP, { passive: true });
    addEventListener("resize", setP);
    setP();
  }

  // Pinned rails: on desktop the section holds still and vertical scrolling
  // walks the cards sideways, then the page carries on below.
  const pinMQ = matchMedia("(min-width: 900px) and (hover: hover) and (pointer: fine)");
  const pins = [];
  document.querySelectorAll("[data-rail], [data-pin-rail]").forEach((rail) => {
    const section = rail.closest("section");
    // Never pin the opening hero, or a section holding more than one rail
    if (!section || section === document.querySelector("main section") || section.querySelectorAll("[data-rail], [data-pin-rail]").length > 1) return;
    const stage = document.createElement("div");
    stage.className = "pin__stage";
    while (section.firstChild) stage.appendChild(section.firstChild);
    const spacer = document.createElement("div");
    spacer.setAttribute("aria-hidden", "true");
    section.append(stage, spacer);
    pins.push({ section, stage, rail, spacer, on: false, dist: 0, top: 0, h: 0 });
  });

  const layoutPins = () => {
    pins.forEach((p) => {
      p.on = false; p.section.classList.remove("pin"); p.spacer.style.height = "";
      p.rail.style.overflowX = "";
      if (!pinMQ.matches || calm.matches) return;
      const dist = p.rail.scrollWidth - p.rail.clientWidth;
      const h = p.stage.offsetHeight, avail = innerHeight - hh();
      if (dist < 40 || h > avail) return;
      p.on = true; p.dist = dist; p.h = h;
      p.top = hh() + Math.max(0, (avail - h) / 2);
      p.section.classList.add("pin");
      p.stage.style.setProperty("--pin-top", `${p.top}px`);
      p.spacer.style.height = `${dist}px`;
      p.rail.style.overflowX = "hidden";
    });
    drivePins();
  };
  const drivePins = () => {
    pins.forEach((p) => {
      if (!p.on) return;
      const spacerTop = p.spacer.getBoundingClientRect().top;
      const t = Math.min(1, Math.max(0, (p.top + p.h - spacerTop) / p.dist));
      p.rail.scrollLeft = t * p.dist;
    });
  };
  if (pins.length) {
    addEventListener("scroll", drivePins, { passive: true });
    let rt; addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(layoutPins, 120); });
    pinMQ.addEventListener("change", layoutPins);
    calm.addEventListener("change", layoutPins);
    addEventListener("load", layoutPins);
    layoutPins();

    // Arrow buttons and keyboard focus move the page, which moves the rail
    const pageOffsetFor = (p, left) => {
      const spacerDocTop = p.spacer.getBoundingClientRect().top + scrollY;
      return spacerDocTop - p.top - p.h + Math.min(p.dist, Math.max(0, left));
    };
    document.addEventListener("click", (e) => {
      const b = e.target.closest("[data-rail-prev],[data-rail-next],[data-scroll]");
      if (!b) return;
      const key = b.dataset.railPrev || b.dataset.railNext;
      const p = pins.find((x) => x.on && (key ? x.rail.dataset.rail === key : x.section.contains(b)));
      if (!p) return;
      e.stopImmediatePropagation();
      const step = (p.rail.firstElementChild?.offsetWidth || 300) + 16;
      const dir = b.dataset.railPrev || b.dataset.scroll === "-1" ? -1 : 1;
      scrollTo({ top: pageOffsetFor(p, p.rail.scrollLeft + dir * step), behavior: "smooth" });
    }, true);
    pins.forEach((p) => p.rail.addEventListener("focusin", (e) => {
      if (!p.on) return;
      const card = [...p.rail.children].find((c) => c.contains(e.target));
      if (card) scrollTo({ top: pageOffsetFor(p, card.offsetLeft - p.rail.firstElementChild.offsetLeft) });
    }));
  }

  // Staggered reveals for headings, leads, cards and feature images
  if (!calm.matches && "IntersectionObserver" in window) {
    const main = document.querySelector("main") || document.body;
    const firstSection = main.querySelector("section");
    const textSel = "h2, .lead, .section-head > p, .rail-head > div > p";
    const cardSel = [
      ".why-card", ".fv__step", ".nerv__cards > div", ".svc-card", ".ba-card", ".rv-feat > *", ".doc", ".fund", ".stat",
      ".lp-team article", ".member", ".tip", ".np > *", ".answers > *", ".ticks > li", ".cost-grid > *", ".prog > *",
      ".hsteps > *", ".know > div", ".case", ".faq details", ".gum-cards > *", ".order > *", ".tips > *", ".cases > *",
    ].join(",");
    const imgSel = ".intro2__img, .fv__img, main figure.photo";
    const vis = (el) => el.getBoundingClientRect().top < innerHeight * 0.95;
    // A scroll check rather than IntersectionObserver: a fast jump (anchor link,
    // End key) can skip straight past an element, which must never leave it hidden.
    let pending = [];
    const check = () => {
      pending = pending.filter((el) => {
        if (el.getBoundingClientRect().top < innerHeight * 0.92) { el.classList.add("is-in"); return false; }
        return true;
      });
      if (!pending.length) removeEventListener("scroll", onRevealScroll);
    };
    const onRevealScroll = () => check();
    const mark = (el, cls, delay) => {
      if (!el || el.closest("[data-reveal], .pin__stage .rail, header, .home-hero, .ihero, [data-hero]") || (firstSection && firstSection.contains(el)) || vis(el)) return;
      el.classList.add(cls);
      if (delay) el.style.setProperty("--d", `${delay}ms`);
      pending.push(el);
    };
    main.querySelectorAll(textSel).forEach((el) => mark(el, "rvl", 0));
    main.querySelectorAll(cardSel).forEach((el) => {
      const sibs = [...el.parentElement.children].filter((s) => s.matches(cardSel));
      mark(el, "rvl", Math.min(sibs.indexOf(el), 5) * 70);
    });
    main.querySelectorAll(imgSel).forEach((el) => mark(el, "rv-img", 0));
    if (pending.length) { addEventListener("scroll", onRevealScroll, { passive: true }); addEventListener("resize", onRevealScroll); }
  }

  // Scroll-led steps: the step nearest the middle of the screen lights up
  document.querySelectorAll("[data-mz-steps]").forEach((wrap) => {
    const steps = [...wrap.querySelectorAll(".mz-step")];
    if (!steps.length) return;
    wrap.setAttribute("data-live", "");
    const pick = () => {
      const mid = innerHeight * 0.45;
      let best = steps[0], bestD = Infinity;
      steps.forEach((s) => {
        const r = s.getBoundingClientRect(), d = Math.abs(r.top + r.height / 2 - mid);
        if (d < bestD) { bestD = d; best = s; }
      });
      steps.forEach((s) => s.classList.toggle("is-active", s === best));
    };
    addEventListener("scroll", pick, { passive: true });
    addEventListener("resize", pick);
    pick();
  });

  // Count-up on the stat strip ("360+", "13+", "5")
  if (!calm.matches && "IntersectionObserver" in window) {
    const nums = document.querySelectorAll(".stat__num, [data-count]");
    const cio = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (!e.isIntersecting) return;
      cio.unobserve(e.target);
      const el = e.target, m = el.textContent.trim().match(/^(\d+)(.*)$/);
      if (!m || el.children.length) return; // leave icon-bearing numbers alone
      const end = Number(m[1]), tail = m[2], t0 = performance.now(), dur = 1400;
      const tick = (now) => {
        const k = Math.min(1, (now - t0) / dur), eased = 1 - Math.pow(1 - k, 3);
        el.textContent = Math.round(end * eased) + tail;
        if (k < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }), { threshold: 0.6 });
    nums.forEach((n) => cio.observe(n));
  }
})();
