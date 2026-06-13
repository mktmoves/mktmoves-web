# MktMoves Web — Active Context

## Current Status

Homepage is COMPLETE. Two CSS layout fixes applied (search bar width alignment + gap before Superinvestors heading).

---

## What Was Fixed This Session

### Layout Fix: Search bar width mismatch + missing gap (2026-05-21)

**Root cause:** `SearchableTable` was rendered inside `.hero`, so
the search bar inherited the hero's 32px padding, while `.table-section`
applied its own 32px padding on top — causing the table to be narrower
than the search bar (double-padded vs single-padded).

**Changes:**
1. **app/page.tsx** — Moved `<SearchableTable>` outside the `.hero`
   `<section>`, making it a sibling instead of a child.
2. **app/components/SearchableTable.tsx** — Wrapped the search bar
   `<div className="search-bar">` in a new `<div className="search-section">`
   to give it independent width constraints.
3. **app/globals.css** — Added `.search-section` rule
   (`max-width: var(--max-width); margin: 0 auto; padding: 0 32px`)
   matching the layout pattern used by `.hero`, `.table-section`, `.nav-inner`,
   and `.footer-inner`. Updated `.table-section` padding-top from `0` to `20px`
   for the gap between the search bar and the "Superinvestors" heading.
   Added `.search-section` to the mobile responsive breakpoint
   (`padding: 0 20px`).

---

## What Was Built Previously

### Files Created
- **lib/api.ts** — `Fund` interface + `getFunds()` with ISR revalidation (3600s)
- **app/components/SearchableTable.tsx** — "use client" component with search
  input, filtered table rendering, `formatAUM()`, `formatQoQ()`, ticker pills,
  empty/error states

### Files Rewritten
- **app/globals.css** — Full design system: CSS variables, resets, nav, hero,
  stats row, search bar, table, ticker pills, footer, responsive breakpoints
- **app/layout.tsx** — IBM Plex Sans + IBM Plex Mono via next/font/google,
  metadata, Nav component, Footer component, wraps children in `<main>`
- **app/page.tsx** — Async server component: fetches funds via `getFunds()`,
  renders hero (headline, subtitle, 4 hardcoded stat blocks), passes data
  to `<SearchableTable />`

### Files Deleted
- lib/dummyData.ts — replaced by live API fetch
- components/FundCard/FundCard.tsx — replaced by table design
- components/FundCard/FundCard.module.css — no longer needed

### Architecture
- **Server → Client split:** page.tsx (server) fetches data, passes Fund[]
  as prop to SearchableTable (client). Only the search interaction ships JS.
- **API:** GET /api/v1/funds from Railway FastAPI backend, cached 1 hour via
  Next.js ISR.
- **Error handling:** getFunds() returns [] on any failure; SearchableTable
  shows "Unable to load funds" error message.

---

## What Was Done This Session

### About, Contact pages + spacing tightening + nav/footer link fixes (2026-06-13)

**What:** Four changes in one session:

1. **Tightened spacing on `/privacy` and `/terms`** — Reduced container top
   padding (48px → 32px), effective date margin (48 → 32), section paddingBottom
   (32 → 22), h2 margin (32px 0 12px → 20px 0 8px), body paragraph fontSize
   (15 → 14) and lineHeight (1.7 → 1.6).

2. **Created `app/about/page.tsx`** — Static server component with profile
   block (circular photo via next/image, name "Sanket Chavan", title "Data
   Engineer", LinkedIn + sanketchavan.com links), followed by h1 "About
   MktMoves" and three content sections: The Project, The Data, The Builder.

3. **Created `app/contact/page.tsx`** — Static server component with h1
   "Contact", single "Get in Touch" section, and mailto link to
   admin@mktmoves.com using `.contact-link` class for hover state.

4. **Fixed nav and footer links in `app/layout.tsx`** — Nav "About" link
   changed from `href="#"` to `href="/about"`. Footer Company column "About"
   and "Contact" changed from `href="#"` to `/about` and `/contact`.

**Files created:** `app/about/page.tsx`, `app/contact/page.tsx`
**Files modified:** `app/privacy/page.tsx`, `app/terms/page.tsx`,
`app/layout.tsx`, `app/globals.css` (added `.contact-link:hover` rule)

**Build:** Verified via `next build` — all 4 routes (`/about`, `/contact`,
`/privacy`, `/terms`) compile and generate as static pages (○ marker).

---

### Static legal pages: Privacy Policy + Terms of Service (2026-06-13)

**What:** Created two new static pages at `/privacy` and `/terms`.

**Files created:**
1. **app/privacy/page.tsx** — Privacy Policy (8 sections). Pure static server
   component with inline styles using CSS variables. Includes mailto: link
   for admin@mktmoves.com in accent color.
2. **app/terms/page.tsx** — Terms of Service (10 sections). Same structure
   and styling approach as the privacy page.

**Files modified:**
3. **app/layout.tsx** — Updated footer bottom bar links from `href="#"` to
   `href="/privacy"` and `href="/terms"` so the existing footer links now
   point to the real pages.

**Design:** Both pages use the existing design system — CSS variables for all
colors, IBM Plex Sans font, dark theme. No Tailwind, no hardcoded hex values,
no client components, no API calls. Nav and Footer render automatically from
the root layout.

**Build:** Verified via `next build` — both routes compile and generate as
static pages (○ marker in build output).

---

### Security cleanup: Remove waitlist/Supabase functionality (2026-06-13)

**Why:** Waitlist feature is no longer needed. The Supabase client and waitlist
API route were the only files connecting to Supabase. Removing them eliminates
the service role key dependency from the codebase.

**Changes:**
1. **Deleted lib/supabase.ts** — Supabase client using service role key
2. **Deleted app/api/waitlist/route.ts** — POST endpoint for waitlist signups
3. **Deleted app/api/waitlist/ directory** — now empty
4. **Deleted app/api/ directory** — now empty (waitlist was the only API route)
5. **.env.example** — Removed `NEXT_PUBLIC_SUPABASE_ANON_KEY=` line (unused
   variable). Kept `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`.

**No other files were modified.** No remaining file imported from supabase.ts
or referenced the waitlist route.

**Note:** `@supabase/supabase-js` package remains in package.json as an unused
dependency — removal was out of scope for this task.

---

## What Comes Next

1. **Fund detail page** — app/funds/[cik]/page.tsx
   - Holdings table for a single fund
   - Quarter selector
   - QoQ change per holding
   - Requires new API endpoint: GET /api/v1/funds/[cik]/holdings (not yet
     built in mktmoves-api)

2. **mktmoves-api** — build /api/v1/funds/[cik]/holdings endpoint

---

## Last Known Working State

- GET /api/v1/funds returns real data (verified 2026-05)
- Response includes: cik, name, aum, holdings_count, qoq_change,
  top_5_tickers, latest_filing_quarter
- Homepage renders hero + stats + searchable table with live data
