# MktMoves Web — Design System

This file is the authoritative source for all design decisions.
Do NOT read references/homepage.html — everything from it is captured here.

---

## CSS Variables (define in app/globals.css :root)

```css
:root {
  /* Backgrounds */
  --bg-page: #080C14;
  --bg-surface: #0F1623;
  --bg-elevated: #1A2332;

  /* Borders */
  --border-default: #1E293B;

  /* Accent */
  --accent: #6B8AFF;
  --accent-hover: #8BA4FF;

  /* Signals — data meaning only, never decorative */
  --signal-positive: #4ADE80;
  --signal-negative: #F87171;
  --signal-neutral: #8896AB;

  /* Text */
  --text-primary: #E2E8F0;
  --text-secondary: #8896AB;
  --text-muted: #5E6D82;

  /* Fonts */
  --font-sans: 'IBM Plex Sans', sans-serif;
  --font-mono: 'IBM Plex Mono', monospace;

  /* Layout */
  --max-width: 1100px;
}
```

---

## Global Resets

```css
* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  background: var(--bg-page);
  font-family: var(--font-sans);
  color: var(--text-primary);
  -webkit-font-smoothing: antialiased;
}
```

---

## Typography Scale

| Element              | Font      | Size | Weight | Notes                              |
|----------------------|-----------|------|--------|------------------------------------|
| Page hero title      | Plex Sans | 48px | 700    | letter-spacing: -1px              |
| Section heading      | Plex Sans | 15px | 600    |                                    |
| Nav logo             | Plex Sans | 15px | 600    | "Mkt" = --text-primary, "Moves" = --accent |
| Body text            | Plex Sans | 14px | 400    |                                    |
| Labels / metadata    | Plex Sans | 12px | 400    | color: --text-secondary            |
| Timestamps / muted   | Plex Sans | 12px | 400    | color: --text-muted                |
| Table header         | Plex Sans | 11px | 500    | uppercase, letter-spacing: 0.5px, color: --text-muted |
| Table data (text)    | Plex Sans | 14px | 400    |                                    |
| Table data (numbers) | Plex Mono | 14px | 500    |                                    |
| Hero numbers (stats) | Plex Mono | 20px | 500    | letter-spacing: -0.5px             |
| Stat block labels    | Plex Sans | 11px | 500    | uppercase, letter-spacing: 0.5px   |
| Ticker pills         | Plex Sans | 12px | 400    | weight 500 for the ticker symbol   |

**Rule:** IBM Plex Mono is ONLY for numerical data. Never use it for labels or body text.

---

## Nav

```
Height: 52px
Background: var(--bg-page)
Border-bottom: 1px solid var(--border-default)
Content max-width: var(--max-width), centered, padding 0 32px

Left: Logo — "Mkt" in --text-primary, "Moves" in --accent, 15px weight 600
Right: Links — "Home" and "About"
  - Active (Home): color --text-primary, 2px bottom border --accent
  - Inactive (About): color --text-muted, no border
  - Link font-size: 13px
```

---

## Hero Section

```
Padding: 80px top, 60px bottom
Text alignment: center
Max-width: var(--max-width), centered

1. Headline: "Track the Smart Money"
   - "Track the " → color: --text-primary
   - "Smart Money" → color: --accent
   - 48px, weight 700, letter-spacing: -1px

2. Subtitle (margin-top: 16px):
   "See what Berkshire Hathaway, Bridgewater, and 60,000+ institutional
   investors are buying and selling — straight from SEC filings."
   - max-width: 600px, centered
   - color: --text-secondary, font-size: 16px, line-height: 1.6

3. Stats row (margin-top: 48px):
   4 stat blocks in a row, separated by 1px vertical dividers
   in var(--border-default).

   HARDCODED VALUES:
   | Label               | Value     |
   |---------------------|-----------|
   | INVESTORS TRACKED   | 63,000+   |
   | HOLDINGS ON FILE    | 12.4M+    |
   | LATEST QUARTER      | Q1 2026   |
   | TOTAL AUM TRACKED   | $48.2T    |

   Each block:
   - Label: 11px, uppercase, letter-spacing: 0.5px, --text-muted
   - Value: 20px, Plex Mono, --text-primary, letter-spacing: -0.5px
   - Padding: 0 32px

4. Search bar (margin-top: 40px):
   - max-width: 560px, centered
   - Background: var(--bg-surface)
   - Border: 1px solid var(--border-default), border-radius: 8px
   - Padding: 12px 16px
   - Display: flex, align-items: center, gap: 10px
   - On focus: border-color → var(--accent), transition: 0.15s
   - Left: search icon (SVG or &#x1F50D;) in --text-muted
   - Input: flex-grow, font 14px, transparent bg, no border/outline,
     color --text-primary
   - Placeholder: "Search funds by name or CIK... e.g. Berkshire, 0001067983"
     placeholder color: --text-muted
   - Right: keyboard shortcut badge "⌘" — border: 1px solid --border-default,
     border-radius: 4px, padding: 2px 6px, font-size: 11px, color: --text-muted
```

---

## Superinvestors Table Section

```
Section heading "Superinvestors":
  - 15px, weight 600, --text-primary
  - margin-bottom: 16px

Table container:
  - background: var(--bg-surface)
  - border: 1px solid var(--border-default)
  - border-radius: 8px
  - overflow: hidden
  - overflow-x: auto (horizontal scroll on mobile)

Table: width 100%, border-collapse: collapse

Column headers (thead tr):
  - background: var(--bg-surface)
  - border-bottom: 1px solid var(--border-default)
  - padding: 10px 16px per cell
  - font: 11px, weight 500, uppercase, letter-spacing: 0.5px
  - color: var(--text-muted)
```

### Column Definitions

| Column         | Align | Notes                                  |
|----------------|-------|----------------------------------------|
| FUND           | Left  | Fund name, 14px weight 600, --text-primary |
| CIK            | Left  | Plex Mono, 13px, --text-muted          |
| AUM            | Right | Abbreviated, Plex Mono, 14px weight 500 |
| QOQ            | Right | Colored + arrow, Plex Mono, 14px weight 500 |
| HOLDINGS       | Right | Integer, Plex Mono, 14px weight 500    |
| TOP 5          | Left  | Ticker pills, flexible width           |
| LATEST FILING  | Right | 12px, --text-muted                     |

### Table Row Styles

```css
tbody tr {
  border-bottom: 1px solid var(--border-default);
}
tbody tr:last-child {
  border-bottom: none;
}
tbody td {
  padding: 12px 16px;
  font-size: 14px;
}
tbody tr:hover {
  background: var(--bg-elevated);
  transition: background 0.15s;
}
```

---

## Data Formatting Functions

### formatAUM(value: number): string
```
>= 1_000_000_000_000  →  "$X.XT"
>= 1_000_000_000      →  "$X.XB"
>= 1_000_000          →  "$X.XM"
Always 1 decimal place.
Font: Plex Mono, --text-primary
```

### formatQoQ(value: number | null): { text: string, color: string }
```
> 0   →  text: "▲ X.X%", color: var(--signal-positive)
< 0   →  text: "▼ X.X%", color: var(--signal-negative)  (absolute value)
0/null→  text: "— 0.0%", color: var(--signal-neutral)
Always 1 decimal place.
```

### Ticker Pills
```
Each pill:
  background: var(--bg-elevated)
  border: 1px solid var(--border-default)
  border-radius: 4px
  padding: 3px 7px
  font-size: 12px
  font-weight: 500
  color: var(--text-secondary)
  display: inline-block

Container: display flex, flex-wrap: wrap, gap: 4px
Render ticker symbol only — no percentages.
If top_5_tickers is null or empty, render nothing.
```

---

## API Data Types

```typescript
export interface Fund {
  cik: string;
  name: string;
  aum: number;
  holdings_count: number;
  qoq_change: number | null;
  top_5_tickers: string[] | null;
  latest_filing_quarter: string;
}
```

---

## Footer

```
Background: var(--bg-page)
Border-top: 1px solid var(--border-default)
Padding: 48px 0 32px
Content max-width: var(--max-width), centered, padding 0 32px

Layout: 3-column grid

Left column:
  - Logo "MktMoves" (Mkt = --text-primary, Moves = --accent)
  - Tagline: "Institutional portfolio data from SEC EDGAR filings."
    13px, --text-muted, margin-top: 8px

Middle column — heading "PRODUCT":
  Links: Super Investors, Funds, Stocks, How It Works (href="#")

Right column — heading "COMPANY":
  Links: About, Contact (href="#")

Column heading style:
  11px, uppercase, letter-spacing: 0.5px, --text-muted, margin-bottom: 12px

Link style:
  13px, --text-secondary, no underline, display: block, margin-bottom: 8px
  Hover: color --text-primary

Bottom bar (margin-top: 48px, border-top: 1px solid var(--border-default), padding-top: 20px):
  3 sections in a row, 12px, --text-muted:
  Left:   "© 2026 MktMoves. All rights reserved."
  Center: "SEC data sourced from EDGAR. Not investment advice."
  Right:  "Privacy Policy · Terms of Service" (href="#")
```

---

## Interactive States (CSS only)

```css
/* Search bar focus */
.search-bar:focus-within {
  border-color: var(--accent);
}

/* Nav active link */
.nav-link.active {
  color: var(--text-primary);
  border-bottom: 2px solid var(--accent);
  padding-bottom: 2px;
}

/* Focus ring (keyboard only) */
:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
```

---

## Empty / Error States

Search no results:
```
Centered text "No funds found" in --text-secondary
Padding: 48px 0
```

API fetch failure:
```
Same centered treatment: "Unable to load funds. Please try again later."
Color: --text-muted
```
