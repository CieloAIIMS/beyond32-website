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
