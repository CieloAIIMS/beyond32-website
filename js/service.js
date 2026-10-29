/* Service pages: sticky chapter bar follows the section you are reading */
(function () {
  const bar = document.querySelector("[data-chapters]");
  if (!bar) return;
  const links = [...bar.querySelectorAll('a[href^="#"]')];
  const map = new Map(links.map((a) => [a.getAttribute("href").slice(1), a]));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      links.forEach((a) => a.removeAttribute("aria-current"));
      const a = map.get(e.target.id);
      if (!a) return;
      a.setAttribute("aria-current", "true");
      // keep the active chip visible inside the horizontally scrolling bar
      bar.scrollTo({ left: a.offsetLeft - bar.clientWidth / 2 + a.clientWidth / 2, behavior: "smooth" });
    });
  }, { rootMargin: "-35% 0px -60% 0px" });
  map.forEach((_, id) => { const s = document.getElementById(id); if (s) io.observe(s); });
})();

/* Before/after sliders */
document.querySelectorAll("[data-compare]").forEach((el) => {
  const input = el.querySelector("input");
  const set = () => el.style.setProperty("--pos", input.value + "%");
  input.addEventListener("input", set); set();
});

/* Tooth-window hero: scale the art canvas so its window sits on the slot */
document.querySelectorAll("[data-hx]").forEach((hero) => {
  const canvas = hero.querySelector(".hx__canvas");
  const slot = hero.querySelector("[data-hx-slot]");
  const MX = 552.4, MY = 187.4, MW = 344.7;
  const place = () => {
    const h = hero.getBoundingClientRect(), r = slot.getBoundingClientRect();
    const s = r.width / MW;
    canvas.style.transform = `translate(${r.left - h.left - MX * s}px, ${r.top - h.top - MY * s}px) scale(${s})`;
    hero.classList.add("is-placed");
  };
  if ("ResizeObserver" in window) new ResizeObserver(place).observe(hero);
  addEventListener("load", place);
  document.fonts && document.fonts.ready.then(place);
  place();
});

/* Chapters hide on scroll down, come back on a small scroll up */
(function () {
  const nav = document.querySelector(".chapters");
  if (!nav) return;
  const side = nav.hasAttribute("data-side") && matchMedia("(min-width: 1200px)");
  const isSide = () => !!(side && side.matches);
  const start = () => (document.querySelector("[data-hero]") || nav).getBoundingClientRect().bottom + scrollY;
  let lastY = scrollY, acc = 0, hovering = false;
  // Side menu introduces itself after the hero and stays for 3 more downward scrolls (the first counted gesture is the one that leaves the hero)
  let intro = 0, lastDown = 0;
  const update = () => {
    const y = scrollY, dy = y - lastY; lastY = y;
    if (hovering) return;
    if (y < start() - 80) { nav.classList.toggle("is-hidden", isSide()); acc = 0; intro = 0; return; }
    if (isSide() && intro < 4) {
      nav.classList.remove("is-hidden");
      const now = Date.now();
      if (dy > 0 && now - lastDown > 250) intro++; // a new scroll gesture
      if (dy > 0) lastDown = now;
      if (intro < 4) { acc = 0; return; }
    }
    acc = Math.sign(dy) === Math.sign(acc) ? acc + dy : dy;
    if (acc > 24) nav.classList.add("is-hidden");
    else if (acc < -12) nav.classList.remove("is-hidden");
  };
  addEventListener("scroll", update, { passive: true }); update();
  // Side menu: bring it back when the pointer reaches the far left edge
  addEventListener("mousemove", (e) => {
    if (isSide() && e.clientX <= 24 && e.clientY > 80) nav.classList.remove("is-hidden");
  }, { passive: true });
  nav.addEventListener("mouseenter", () => { hovering = true; nav.classList.remove("is-hidden"); });
  nav.addEventListener("mouseleave", () => { hovering = false; acc = 0; });
})();
