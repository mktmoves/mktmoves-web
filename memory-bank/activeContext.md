# MktMoves Web — Active Context

## Current Status

Homepage is COMPLETE. All files built and verified.

---

## What Was Built This Session

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
