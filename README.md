# Beyond 32 Dental: inner pages

Static HTML/CSS/JS build of the Beyond 32 Dental inner pages, extending the homepage design system from Figma.

- `index.html` is the homepage (built from the Figma design). `pages.html` lists every page, grouped by section.
- Preview locally with `node .claude/serve.mjs`, then visit http://localhost:4317
- Design system notes: `DESIGN.md`. Shared styles: `css/site.css`, `css/service.css`. Header, footer and nav are injected by `js/site.js`.
- `_source/live/*.txt` holds the live-site copy each page was built from; `_source/BUILD-BRIEF.md` is the build brief.
