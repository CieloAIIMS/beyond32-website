# Beyond 32 Dental: design language

Extracted from the homepage Figma frame (`Website (2026)`, node 4379:179). The inner pages use this system and add nothing new to the brand. All tokens live in `css/site.css`.

## Personality
Warm, unhurried, family-run. The site should feel like a calm living room, not a clinic. Confidence comes from real faces, real reviews and plain English, never from hard selling.

## Colour
| Token | Hex | Use |
|---|---|---|
| `--ink` | #14403E | Headings, primary text, dark sections, ink pills |
| `--teal` | #3D7774 | Secondary text, nav links, lead copy |
| `--cream` | #FFF7F2 | Default page surface |
| `--mint` | #D8EEED | Alternating section surface, cards on cream |
| `--mint-2` | #BFE0DF | Cards placed on mint |
| `--mint-line` | #B8E8E6 | Card borders on mint |
| Gold gradient | #BCAB80 → #DECBA1 → #F0DBB0 → #A39266 | Primary CTA fill (border #9D781B, text #785600) |
| `--brand` | #F5412C | Figma "Branding/Color". Used only for urgency and safety signals |
| `--star` | #F4A24B | Review stars |

Sections alternate cream → mint → white. Dark ink is reserved for the footer block.

## Type
- **Host Grotesk** for everything. H1 72px medium, −2px tracking. H2 44px regular, −1.5px. Card titles 25–30px medium. Body 17px / 1.55. Lead 20px teal.
- **Natural Comforts Italic** for one accent phrase per heading ("Let your smile *shine*"). Not on Google Fonts, so it falls back to Instrument Serif Italic. Self-host Natural Comforts in production and the stack picks it up automatically.
- A bold teal subtitle sits above the H1 in heroes only, matching the homepage.

## Shape and depth
- Radius: 8px (step cards), 12px (cards, images), 20px (panels, spotlight), 60px (footer top corners), 999px (all buttons and chips).
- Shadows are soft, offset downward and tinted ink. No hard or coloured halos.

## Buttons
Every button is a pill with 12px × 24px padding and 17px bold text.
- **Gold:** primary action (Book Online, Call Now).
- **Ink:** secondary solid (Meet The Team, filters).
- **Outline ink:** tertiary.
- **Phone:** translucent with a 40% ink border, used in the nav.
- **Ghost / glass:** used on photos and dark backgrounds.

## Layout
- 1200px container with a 120px gutter at 1440px wide. Floating cream nav pill is 1268px wide, 72px tall, and sits 33px from the top.
- Sections use about 96px vertical padding.
- Headings are left-aligned with the action on the right (`.section-head`), or centred for closing moments.

## Navigation (client direction: TLC Dentist structure, Avira aesthetic)
- **Structure:** Services ▾ · New Patients • · Prices · About ▾ · Contact, then a Call pill (ink) and Book Online (gold).
- **Where the homepage's old items went:** "I Need Help With" is a row of concern chips in the Services panel, led by Emergency Dental Care. Special Offers is folded into Prices. Smile Gallery and Blog sit under About.
- **Bar:** full-width, cream, sticks to the top as you scroll (80px tall, 68px on mobile). It gains a hairline and a soft shadow once you scroll. Links are 16px regular weight, grouped right beside the pills, with a soft hover background.
- **Services panel:** 22px radius on cream. Left: four categories, each with a mint icon tile and a one-line description. Right: a photo plus the treatment list, both swapping as you hover a category. Bottom: "I need help with" chips.
- **About panel:** four described links.
- **Mobile:** logo, Book Online, call icon and menu button. The menu opens full screen with expandable sections and Call/Book buttons pinned to the bottom.
- This replaces the homepage's floating nav pill, so the homepage header in Figma needs updating to match.

## Recurring components
Tooth-outline stat strip · suburb marquee · mint cards · glass caption pills on photos · white FAQ panel with the heading on the left and the accordion on the right · dark footer block (CTA + map + info card → trust bar → footer).

## Imagery
Real practice photography first: the founders, the reception (mint wall and brass desk), treatment rooms. Warm, natural-light lifestyle images second. Dentist portraits are cut-outs on a white-to-cream gradient. Before and after photos sit in mint cards.

## Inner-page additions (built from the same parts)
- **Inner hero:** mint-to-cream gradient under the floating nav, with page-specific composition.
- **Compare slider:** gold knob, glass Before/After tags, keyboard-accessible range input.
- **Action tiles (Contact):** ink for Call, gold for Book, white for Email and Directions.
- **Triage tabs (Emergency):** ink selected state. Urgency dots use brand red (now), gold (today) and teal (soon).
- **Live open/closed status:** calculated from Sydney time.

## Service (treatment) pages — editorial system
Long SEO copy is laid out across full-width sections, not one long column (`css/service.css`, `js/service.js`).
- **Pacing:** section backgrounds cycle cream → white → mint → ink, with one full-width photo section in the middle of each page. Sections have 80–136px of vertical padding.
- **Sticky "On this page" bar** sits under the header and highlights the section being read.
- **Measure:** body copy is 18px / 1.7 line height, max 62 characters per line. Each section opens with a larger first sentence.
- **Layouts:**
  - split with a sticky left column;
  - heading on the left with the opening sentence on the right;
  - horizontal steps;
  - dark timeline;
  - half-photo local section;
  - big-number section;
  - card grids.
- **Pull quotes:** an existing sentence from the brief, lifted out in Natural Comforts italic. Never new copy.
- **Accordions** hold secondary Q&As (sensitivity, kits, CDBS, permanence). The text stays in the page HTML, so it's still indexed.
- **Rule:** brief copy is never cut. It is only re-paced.
