# MktMoves Web — Codebase Structure

## Repo

`mktmoves/mktmoves-web` — public repo on GitHub, deployed to Vercel.

---

## File Map

```
app/
  api/
    waitlist/
      route.ts          — Waitlist signup POST handler. Uses Supabase.
                          DO NOT MODIFY.
  components/
    SearchableTable.tsx — "use client" component. Receives Fund[] as prop.
                          Handles search input + filtered table rendering.
  globals.css           — All CSS. Variables, resets, component styles.
                          No Tailwind. No CSS modules.
  layout.tsx            — Font loading (next/font/google), metadata, <Nav>,
                          <Footer>, wraps {children}.
  page.tsx              — Async server component. Fetches funds, renders
                          hero + stats + <SearchableTable funds={funds} />.
  favicon.ico

lib/
  api.ts                — Fund interface + getFunds() fetch function.
                          Includes { next: { revalidate: 3600 } }.
  supabase.ts           — Supabase client. Used only by waitlist route.
                          DO NOT USE in any page or data component.

references/
  homepage.html         — Original design export. DO NOT READ. All design
                          decisions extracted into memory-bank/designSystem.md.

public/                 — Static assets.

memory-bank/            — This directory. Read at session start.
  projectBrief.md
  techContext.md
  designSystem.md
  codebaseStructure.md
  activeContext.md

.env.local              — DO NOT MODIFY. Contains NEXT_PUBLIC_SUPABASE_URL,
                          NEXT_PUBLIC_SUPABASE_ANON_KEY.
.env.example            — DO NOT MODIFY.
```

---

## Key Patterns

### Server vs Client Split
- app/page.tsx fetches data server-side, passes Fund[] as prop
- app/components/SearchableTable.tsx is "use client" — only this component
  ships JavaScript for search interactivity
- Nav and Footer in layout.tsx are server components (no interactivity needed)

### Styling Pattern
- One CSS file: app/globals.css
- Classes are applied via className strings in JSX
- No CSS modules, no styled-components, no Tailwind
- Every color references a CSS variable — no hardcoded hex in JSX/TSX

### Data Flow
API (Railway FastAPI) → getFunds() in lib/api.ts → page.tsx (server) →
SearchableTable (client, receives pre-fetched data as prop)

---

## What Does NOT Exist Yet

- Fund detail page (app/funds/[cik]/page.tsx) — not started
- Any authentication — not planned for V1
- Dark/light mode toggle — dark only for V1
