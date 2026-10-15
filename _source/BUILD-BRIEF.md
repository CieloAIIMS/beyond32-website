# Build brief: Beyond 32 Dental inner pages (rebrand of live site pages)

You are a senior UX/UI designer and front-end developer extending an established design system to more pages of a dental practice website (Beyond 32 Dental, Pennant Hills, Sydney). Several pages already exist in this system. Your pages must look like they belong to the same site, while giving each page a layout that suits its content.

## Project
- Root: `C:/Users/CieloEscandor/Desktop/beyond32-inner-pages/`
- Static HTML/CSS/JS, no build step. Local server: `http://localhost:4317/` (already running; serves the root).
- Live copy for every page is extracted at `_source/live/<slug>.txt` (title, meta, content blocks in order, image URLs, internal links). The raw HTML is next to it (`<slug>.html`) if you need to check structure.

## Read first (required, before writing anything)
1. `DESIGN.md`: tokens, type, components, navigation, the service-page editorial system.
2. `css/site.css` and `css/service.css`: every class you can use. Reuse these before writing new CSS.
3. `js/service.js`: chapter bar, before/after compare slider, `.hx` hero positioning.
4. Reference pages, and study them closely:
   - `crooked-teeth.html`: **short live copy given a big visual upgrade** (spotlight hero, interactive explorer with an inline SVG illustration, trust band, closing photo "moment"). This is the model for short-copy pages.
   - `broken-teeth.html` and `general-dentistry-check-up-and-clean.html`: **long copy paced editorially** (alternating cream/white/mint/ink `.band`s, `.split` layouts, sticky chapter bar, pull quotes, accordions, hsteps, tip grids, local half-bleed band, FAQ panel).
   - `cosmetic-dentistry.html`: `.hx` tooth-window hero, options cards, compare slider, cost ladder.
   - `emergency-dental-care.html`: urgent-intent page pattern (triage tabs, call-first CTAs, `data-footer="emergency"`).

## Copy rules (important)
- **Use the live page's existing copy.** Keep its substance and wording. Do not invent claims, prices, statistics, awards, guarantees or clinical promises.
- You may fix obvious typos, broken sentence fragments, lowercase sentence starts, run-on extraction artefacts, and split or merge sentences for layout. **List every wording change in your report.**
- You may add **minimal** new UI text: short section headings, labels, button text, captions, alt text. Keep it in the brand voice: warm, plain English, unhurried, never salesy.
- Drop junk from the live pages: empty counters (`#teeth straightened`, `#SMILES CREATED`, `#IMPLANTS PLACED`, "Years of Experience" with no numbers), duplicated footer/about blurbs, "Before/After" headings with no images. An "OUR LEADING DENTAL OFFERINGS" cross-promo block can become a tasteful "Related treatments" strip if useful.
- Facts you may reuse anywhere (they come from the homepage): phone (02) 9158 6334 (`tel:+61291586334`); 1st Floor, 114 Yarrara Rd, Pennant Hills NSW 2120; Mon–Fri 9am–6pm, Sat 9am–3pm; founded 2013 by Dr Jeff Lin and Dr Jennifer Chung; 5.0 Google rating from 360+ reviews; 13+ years in the Hills District; 30+ years combined experience; 5 dentists; Gold+ Invisalign provider (2022); all health funds accepted with on-the-spot claiming (HICAPS); happy gas and in-house sedation available.
- Prices or offers may only appear if they are in that page's live copy (e.g. Special Offers).
- Keep the legally standard closing note on treatment pages: "Any surgical or invasive procedure carries risks. Before proceeding, you should seek a second opinion from an appropriately qualified health practitioner." Before/after images also need the consent and "results vary" line used on other pages.

## Design rules
- Same brand. Host Grotesk with one Natural Comforts italic accent per heading (`<span class="it">`), ink/teal/cream/mint palette, gold pill primary CTA, ink or outline secondary, 12px radius cards, 20px panels.
- **Short-copy pages (under ~400 words): "show it some love".** Give each one a memorable visual idea built from the content: an inline SVG illustration, an interactive comparison, a process visual, a photo-led hero composition, a statement typography moment. Spread the copy across 3–5 well-designed sections; never leave thin text sitting in a big empty column.
- **Long-copy pages: pace them.** Use full-width bands with alternating backgrounds, varied compositions (split, sticky column, card grids, hsteps, timelines, a full-bleed photo moment), a 62ch reading measure, pull quotes made from existing sentences, and accordions for secondary Q&A. Add the sticky chapter bar (`.chapters` + `data-chapters`) when a page has 5 or more sections.
- Avoid: eyebrow/kicker labels above headings, identical icon-card grids as the whole page, gradient text, coloured side-stripe borders, emoji as icons. Icons are inline SVG, stroke 1.6–2, round caps, matching the existing ones.
- Vary heroes across your pages (split photo hero `.s-hero` style, the spotlight `.ch` pattern, a full-bleed photo with a panel, a statement hero). Do not use the `.hx` tooth-window hero; it needs per-photo calibration.
- Responsive: must work at 1440px and 390px, with no horizontal page scroll. Tables wrap in `.scroll-x`. Touch targets at least 44px.
- Accessibility: one `h1`, logical headings, alt text on content images (empty alt for decorative), visible focus, ARIA tabs if you build tabs, `prefers-reduced-motion` respected.

## Images
- Prefer the practice's **own photos from the live page**: download them from the URLs in `_source/live/<slug>.txt` (the practice's own website) into `assets/live/<slug>/`, using `curl -sL -A "Mozilla/5.0"`. Use them where they suit; skip low-quality, text-baked promo banners unless the page is about that promo (e.g. Special Offers may use its offer artwork).
- You may also reuse anything in `assets/` (practice photos: `founders-opt.jpg`, `practice-opt.jpg`, `first-visit-opt.jpg`, `kid-mirror-opt.jpg`, `sedation-opt.jpg`, `emergency-opt.jpg`, `girl-smile-opt.jpg`, `hero-woman-opt.jpg`, `family.png`, dentist portraits `dr-*.png`, before/after `ba-*.jpg`, `invisalign.png`, `tooth-outline.svg`, `google.svg`, `map-opt.jpg`).
- Never hot-link the live site. Keep images reasonable in size (aim under ~400 KB each).

## Page skeleton (copy exactly, then fill)
```html
<!doctype html>
<html lang="en-AU">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- URL: <live URL> (existing URL kept) -->
  <title>…</title>  <!-- improve the live title if weak; keep the main keyword + "Beyond 32 Dental" -->
  <meta name="description" content="…"> <!-- live meta, fixed if truncated or broken -->
  <link rel="canonical" href="<live URL>">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Host+Grotesk:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/site.css">
  <link rel="stylesheet" href="css/service.css">
  <script type="application/ld+json">…Dentist + MedicalWebPage (+ FAQPage only if the page has Q&A) + BreadcrumbList…</script>
  <style>/* page-specific CSS only */</style>
</head>
<body data-page="service" data-footer="full" class="svc">   <!-- data-footer="emergency" for urgent pages -->
  <a class="skip-link" href="#main">Skip to content</a>
  <header data-site-header></header>
  <main id="main"> … </main>
  <div data-site-footer></div>
  <script src="js/site.js"></script>
  <script src="js/service.js"></script>
</body>
</html>
```
The header, footer, map and mobile call bar are injected by `js/site.js`. Do not hand-write them.

## Files: do NOT edit shared files
- Write only your own page files at the project root, named `<slug>.html` (live slug), plus images under `assets/live/<slug>/`.
- **Do not modify** `css/site.css`, `css/service.css`, `js/site.js`, `js/service.js`, `index.html`, `DESIGN.md` or other pages. Other designers are working in parallel. Put page-specific CSS in the page's `<style>` and page-specific JS in an inline `<script>` at the end of the body. If you think a shared component needs changing, say so in your report instead.

## Internal links
Link to local files where they exist; otherwise use the live URL `https://www.beyond32dental.com.au/<slug>/`.
Local map: about-us→`about.html` · contact-us→`contact.html` · smile-gallery→`gallery.html` · emergency-dental-care→`emergency-dental-care.html` · broken-teeth→`broken-teeth.html` · crooked-teeth→`crooked-teeth.html` · check up and clean→`general-dentistry-check-up-and-clean.html` · cosmetic dentistry→`cosmetic-dentistry.html` · and every page being built in this batch is `<slug>.html`: invisalign, damon-braces, inman-aligner, early-interceptive-orthodontics, dental-implant, crown-and-bridges, root-canal-therapy, toothache, veneers, teeth-whitening, zoom-teeth-whitening, fixing-my-smile, anti-wrinkle-treatment, first-visit, in-house-sedation, special-offers, blog, beecroft-dentist, cherrybrook-dentist, dentist-glenhaven, dural-dentist, westleigh-dentist. Booking CTAs go to `contact.html#enquire`; call CTAs to `tel:+61291586334`.

## Verify (one bounded pass per page)
Render with headless Edge at desktop and mobile, look at the screenshots, fix everything in one batch, re-check once, then stop. Use **your own** profile dir and harness file name (replace `X` with your helper letter) so you don't collide with parallel helpers:
```powershell
$E = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
$ud = Join-Path $env:TEMP "b32-edge-X"
# desktop
Start-Process -FilePath $E -ArgumentList @("--headless=new","--disable-gpu","--hide-scrollbars","--user-data-dir=$ud","--virtual-time-budget=8000","--window-size=1440,9000","--screenshot=<out>.png","http://localhost:4317/<page>.html") -Wait -NoNewWindow
# mobile: Edge has a ~500px minimum window, so load the page in a 390px iframe harness:
#   write <root>/.claude/m-X.html containing: <iframe src="/<page>.html" width="390" height="9000" style="border:0"></iframe>
#   then screenshot http://localhost:4317/.claude/m-X.html with --window-size=500,9000. Delete the harness when done.
```
Slice tall screenshots into tiles (System.Drawing in PowerShell) before viewing them. Save screenshots in your scratchpad or `%TEMP%`, never in the project.

## Report back (concise)
For each page: the file, its hero/visual idea, a list of copy changes (exact before → after), images used (and stand-ins), the nav label you'd suggest, and any open questions or claims the client should confirm. Mention any shared-component changes you'd recommend.
