

# MetrixConvo.com — Updated Plan

This revision adds brand logo and favicon generation to the existing build plan.

## New: Brand Logo & Favicon

**Logo concept:** "MetrixConvo" — clean medical wordmark with a subtle matrix/grid motif integrated into the "M" letterform. Colors: medical blue (#1E40AF) + soft green (#10B981) on white.

**Approach:**
1. Use the Nano banana image generation API (`google/gemini-2.5-flash-image`) to generate a professional medical brand logo
2. Create a build-time script that calls the API, saves the logo as `public/logo.png`
3. Generate a simplified favicon version (icon-only, no text) as `public/favicon.png`
4. Update `index.html` with `<link rel="icon" href="/favicon.png" type="image/png">`
5. Use the logo in the site header/navbar and footer across all pages

**Logo usage across the site:**
- Navbar: Logo + "MetrixConvo" text
- Footer: Logo with tagline
- Consultation confirmation screen

## Existing Plan (unchanged)

All other pages and features remain as previously approved:
- **Pages:** Home, About, Services, Treatments (category + detail pages), Consultation (email notification), How It Works, Blog (dynamic CMS), Contact, Legal pages
- **Design:** White + blue + green medical palette, clean sans-serif typography, minimal premium style
- **Backend (Lovable Cloud):** Blog CRUD, consultation form → email notification, admin role for blog

### Technical Details

- Logo generation happens via `ai.gateway.lovable.dev` image generation endpoint during build
- The generated logo will be saved as a static asset in `public/`
- Favicon will be a 512×512 icon version of the logo mark
- Remove default `favicon.ico` if present

