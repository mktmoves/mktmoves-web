"use client";

import { useState } from "react";
import type { Fund } from "@/lib/api";

/* ── Formatting Helpers ────────────────────────────────────────── */

/**
 * Abbreviate AUM to human-readable form: $X.XT, $X.XB, or $X.XM.
 * Always 1 decimal place.
 */
function formatAUM(value: number): string {
  if (value >= 1_000_000_000_000) {
    return `$${(value / 1_000_000_000_000).toFixed(1)}T`;
  }
  if (value >= 1_000_000_000) {
    return `$${(value / 1_000_000_000).toFixed(1)}B`;
  }
  if (value >= 1_000_000) {
    return `$${(value / 1_000_000).toFixed(1)}M`;
  }
  return `$${value.toLocaleString()}`;
}

/**
 * Format quarter-over-quarter change with directional arrow and color.
 * Positive → green ▲, negative → red ▼, zero/null → neutral dash.
 */
function formatQoQ(value: number | null): { text: string; color: string } {
  if (value === null || value === 0) {
    return { text: "— 0.0%", color: "var(--signal-neutral)" };
  }
  if (value > 0) {
    return { text: `▲ ${value.toFixed(1)}%`, color: "var(--signal-positive)" };
  }
  return { text: `▼ ${Math.abs(value).toFixed(1)}%`, color: "var(--signal-negative)" };
}

/* ── Component Props ───────────────────────────────────────────── */

interface SearchableTableProps {
  funds: Fund[];
  /** True when the API fetch failed — shows error message instead of "no results" */
  fetchFailed: boolean;
}

/* ── SearchableTable ───────────────────────────────────────────── */

/**
 * Client component that renders the search bar and the superinvestors table.
 * Receives pre-fetched Fund[] data as a prop — never fetches directly.
 */
export default function SearchableTable({ funds, fetchFailed }: SearchableTableProps) {
  const [query, setQuery] = useState("");

  /* Case-insensitive filter by fund name or CIK */
  const filtered = funds.filter((fund) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      fund.name.toLowerCase().includes(q) || fund.cik.includes(q)
    );
  });

  return (
    <>
      {/* Search bar — constrained to match hero and table section widths */}
      <div className="search-section">
        <div className="search-bar">
          <span className="search-icon">
            {/* Magnifying glass SVG icon */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
          <input
            type="text"
            className="search-input"
            placeholder="Search funds by name or CIK... e.g. Berkshire, 0001067983"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <span className="search-kbd">⌘</span>
        </div>
      </div>

      {/* Table section */}
      <div className="table-section">
        <h2 className="table-section-heading">Superinvestors</h2>

        {/* Error state — API failed, no data at all */}
        {fetchFailed && funds.length === 0 ? (
          <div className="table-container">
            <div className="error-state">
              Unable to load funds. Please try again later.
            </div>
          </div>
        ) : filtered.length === 0 ? (
          /* Empty search results */
          <div className="table-container">
            <div className="empty-state">No funds found</div>
          </div>
        ) : (
          <div className="table-container">
            <table className="funds-table">
              <thead>
                <tr>
                  <th className="align-left">Fund</th>
                  <th className="align-left">CIK</th>
                  <th className="align-right">AUM</th>
                  <th className="align-right">QoQ</th>
                  <th className="align-right">Holdings</th>
                  <th className="align-left">Top 5</th>
                  <th className="align-right">Latest Filing</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((fund) => {
                  const qoq = formatQoQ(fund.qoq_change);
                  return (
                    <tr key={fund.cik}>
                      <td className="col-fund-name">{fund.name}</td>
                      <td className="col-cik">{fund.cik}</td>
                      <td className="col-aum">{formatAUM(fund.aum)}</td>
                      <td className="col-qoq" style={{ color: qoq.color }}>
                        {qoq.text}
                      </td>
                      <td className="col-holdings">
                        {fund.holdings_count.toLocaleString()}
                      </td>
                      <td>
                        {fund.top_5_tickers && fund.top_5_tickers.length > 0 ? (
                          <div className="ticker-pills">
                            {fund.top_5_tickers.map((ticker) => (
                              <span key={ticker} className="ticker-pill">
                                {ticker}
                              </span>
                            ))}
                          </div>
                        ) : null}
                      </td>
                      <td className="col-latest-filing">
                        {fund.latest_filing_quarter}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
