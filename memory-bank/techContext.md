# MktMoves Web — Tech Context

## Stack

- **Framework:** Next.js App Router (TypeScript)
- **Styling:** Plain CSS in app/globals.css. No Tailwind, no CSS modules,
  no styled-components. All colors via CSS variables.
- **Fonts:** IBM Plex Sans (400, 500, 600) + IBM Plex Mono (400, 500).
  Loaded via next/font/google in app/layout.tsx.
- **No UI libraries.** No icon libraries. Unicode characters for symbols.

## Backend API

Base URL: https://mktmoves-api-production.up.railway.app

Endpoints currently live:
- GET /api/v1/health/holdings-count → { count: number }
- GET /api/v1/funds → Fund[] (see designSystem.md for type)

All data fetching in page.tsx is server-side. Add
{ next: { revalidate: 3600 } } to all fetch calls — fund data
changes at most quarterly, no need to fetch on every request.

## Deployment

- Vercel (Hobby tier). Repo must stay public.
- Environment variables set in Vercel dashboard.
- No CI/CD config needed beyond Vercel's automatic deploys on push.

## What NOT to Connect Directly

lib/supabase.ts exists only for the waitlist route. The homepage and
all future data pages must go through the FastAPI backend, NOT
Supabase directly.

## TypeScript

Strict mode. All interfaces live in lib/api.ts and are imported where
needed. No `any` types.

## Component Architecture Pattern

- app/page.tsx and all route pages: async server components.
  They fetch data and pass it as props.
- Interactive UI (search, filters, tabs): "use client" components
  in app/components/. They receive data as props, never fetch directly.
- Keep client component surface area minimal to maximise what ships
  as static HTML.
