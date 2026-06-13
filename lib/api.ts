/**
 * Fund data interface and fetch function.
 * All data comes from the FastAPI backend on Railway — never from Supabase.
 */

const API_BASE = "https://mktmoves-api-production.up.railway.app";

/** Shape of a single fund returned by GET /api/v1/funds. */
export interface Fund {
  cik: string;
  name: string;
  aum: number;
  holdings_count: number;
  qoq_change: number | null;
  top_5_tickers: string[] | null;
  latest_filing_quarter: string;
}

/**
 * Fetch all funds from the API.
 * Uses ISR with a 1-hour revalidation window — fund data changes at most quarterly.
 * Returns an empty array on any error so the page can render gracefully.
 */
export async function getFunds(): Promise<Fund[]> {
  try {
    const res = await fetch(`${API_BASE}/api/v1/funds`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error(
        `[getFunds] API returned ${res.status} ${res.statusText}`
      );
      return [];
    }

    const data: Fund[] = await res.json();
    return data;
  } catch (error) {
    console.error("[getFunds] Failed to fetch funds:", error);
    return [];
  }
}
