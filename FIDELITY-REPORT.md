# Fidelity Report — node 2268:1725

## Matched exactly
- Section order, copy, and hierarchy from Figma metadata + design context
- Design tokens: `#0c0e11`, `#d14d3f`, `#e42527`, `#262626`, `#066b33`, `#f8f9fc`, `#262626` warehouse block, spacing 8/16/24/32px
- Typography sizes/weights/line-heights per `get_design_context` (44px hero, 40px section titles, 20px body, 24px card titles, 16px card body, 18px buttons)
- All raster/vector assets exported from Figma at 2× where applicable — no CSS redraws of photos, illustrations, icons, logos, or screenshots
- Logo marquee: infinite horizontal loop (jQuery + `requestAnimationFrame`)
- Security cards: horizontal scroll with wheel-to-scroll mapping
- Hidden Figma layers excluded (Buttons/Button instances, hidden BI FABRIC rectangles/legend rows)

## Substitutions / assumptions
- **Zoho Puvi font** — proprietary; CSS uses `"Zoho Puvi"` with system sans fallback. Load `@font-face` for pixel-perfect type if you have the font files.
- **Lato** appears inside hero BI mockup — baked into `hero-illustration-cluster.png` export.
- **Hero illustration** — exported as single 2× PNG composite (`11960:4018`) instead of 80+ individual vector layers (visually identical, per Phase 3 export rules).
- **Security section background** (`11869:4270`) — no fill in metadata; implemented as light gradient approximating the frame area.
- **Ask Zia stacked borders** (blue/pink/orange frames) — simplified to primary gradient shell + screenshot; triple-offset borders omitted to avoid CSS invention.
- **Feature tab blur ellipses** — decorative blurs baked into `feature-tab-illustration.png` export frame.
- **Viewport** — `width=1720` meta tag locks desktop artboard width; not responsive (not in Figma scope).

## Needs your decision
- Provide **Zoho Puvi webfont files** (or CDN URL) for exact typography?
- Confirm **logo-extra.png** (10th marquee logo) — Figma `get_design_context` mapped `image 16` to the same asset as `image 14`; replace if you have the correct 10th logo export.
- Open `index.html` via a local server (e.g. `npx serve .`) — jQuery `.get()` for components requires HTTP, not `file://`.
