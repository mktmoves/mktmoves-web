# MktMoves Web — Project Brief

## What Is This

MktMoves (mktmoves.com) is a financial data platform that surfaces SEC
EDGAR institutional filing data (13F) to retail investors. The core
product lets users see what major institutional investors (Berkshire
Hathaway, Bridgewater, etc.) are buying and selling each quarter,
sourced directly from SEC 13F filings.

## This Repository

`mktmoves-web` is the Next.js frontend. It is a public repo hosted on
Vercel (required by Hobby tier). It serves the user-facing UI.

It does NOT connect to the database directly. All data comes through
the FastAPI backend.

## Dual Purpose

1. A real product for retail investors
2. A portfolio piece demonstrating full-stack data engineering

## What Is Live Right Now

- mktmoves.com serves a waitlist page
- The app/api/waitlist/route.ts handles waitlist signups via Supabase
- The Superinvestors homepage table is the first real data-facing page
  being built

## Pages Planned (V1)

1. Homepage — hero + superinvestors table (IN PROGRESS)
2. Fund detail page — holdings table for a single fund (NOT STARTED)

## Key Constraint

Solo developer, self-funded. Every solution must be simple to build
and maintain. Prefer shipping a working version quickly over perfecting.
