# CRBRO Artist Site — Implementation Spec for Claude Code

Build a Next.js 15 (App Router) artist site using Tailwind v4 + shadcn/ui.

## Project structure
```
/Users/karanclaw/crbro-site/
├── src/
│   ├── app/
│   │   ├── globals.css     ← Already set up with brand tokens
│   │   ├── layout.tsx      ← Update this (remove Geist fonts)
│   │   ├── page.tsx        ← Home page (/)
│   │   ├── favicon.ico     ← Replace with isotype
│   │   ├── credits/
│   │   │   └── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   └── contact/
│   │       └── page.tsx
│   └── components/
│       ├── site-header.tsx
│       ├── site-footer.tsx
│       └── credit-card.tsx
├── public/
│   ├── images/
│   │   ├── wordmark.svg    ← Already copied (optimized 4.7KB)
│   │   └── isotype.svg     ← Already copied
│   └── fonts/
│       ├── Gobold Regular.otf    ← Already downloaded
│       └── Gobold High Bold.otf  ← Already downloaded
```

## Brand tokens (already in globals.css)
- Dark base: #2F170E (bg-crbro-dark)
- Medium accent: #704214 (bg-crbro-medium / text-crbro-medium)
- Gold/camel: #AA7444 (bg-crbro-gold / text-crbro-gold)
- White: #FFFFFF

## Fonts (already set up in globals.css)
- Display/headlines: Gobold (font-heading)
- Body: Assistant (font-sans)

## Navigation — exactly 3 links: Credits / About / Contact
- Isotype mark on the left
- Minimal text links
- Single accent CTA button (gold outline)

## Pages

### / (Home) — ≤2 viewports
- Nav (site-header)
- Hero: wordmark.svg centered, one-line identity ("Panamanian producer. Heard worldwide.")
- Two CTAs: "Listen" (links to Spotify artist profile) / "Work with me" (links to /contact)
- One proof beat: 2-3 major credit cards with recognizable cover art (use placeholder images or dark cards with text for now — we'll add real art later). These should link out to Spotify tracks.
- Footer (site-footer) with socials, © CRBRO, contact
- Background: solid #2F170E dark base

### /credits — the most important page
- Top 2-3 verified majors get hero treatment — full-size cards with cover art
- Each card shows: track title, artist name, role (Producer / Co-producer / Writer / Mix), Spotify embed button
- Remaining credits in compact grid below
- Every credit links to a playable/verifiable source (Spotify)
- Roles are explicit and honest per track

### /about
- One tight identity paragraph (Panamanian producer/DJ)
- Services as a clean list: Production, DJ Sets, Studio Sessions, Creative Direction
- One CTA to /contact

### /contact
- Form with fields:
  - Name (required)
  - Email (required)
  - Inquiry type dropdown: [Booking / Session] · [Sync / Licensing] · [Sound Packs / Support] · [Press / Other]
  - Message (required)
- Submit via server action (POST to API route that logs/emails)
- Don't wire real email yet — stub the server action so it logs to console
- Social links as secondary

## Design rules
- Mobile-first (primary traffic is Instagram bio link on phone)
- No stat grids, no agency CTAs, no "START A PROJECT"
- No store, no sound-packs section, no placeholder for either
- Artist voice, not company voice
- All links open in new tab with rel="noopener noreferrer" where appropriate

## Implementation notes
- Use Next.js App Router conventions
- Pages must be server components by default
- Use Tailwind classes for styling — the brand colors are available as `text-crbro-gold`, `bg-crbro-dark`, `border-crbro-gold/20`, etc.
- The isotype should also be used as the favicon — update the layout
- The wordmark SVG is at /images/wordmark.svg
- The isotype SVG is at /images/isotype.svg
- CRBRO's Spotify: use https://open.spotify.com/artist/0s2j6EGfhS7T1HvEnTbrBZ as the link (placeholder for now)
- For credit cards with cover art, use placeholder divs with bg-crbro-medium and the track info

## After building
- Run `npm run build` and fix any build errors
- Verify the dev server starts with `npm run dev`
