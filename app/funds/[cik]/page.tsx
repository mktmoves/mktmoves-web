"use client";

import { useParams, useRouter } from "next/navigation";
import { DUMMY_FUNDS, Fund, TopHolding } from "@/lib/dummyData";
import styles from "./page.module.css";

/* ────────────────────────────────────────────────────────────
   Helper functions — formatting utilities for display values
   ──────────────────────────────────────────────────────────── */

/**
 * Abbreviates a raw dollar value into a compact string (e.g. $298.4B).
 * Always uses 1 decimal place.
 */
function formatValue(raw: number): string {
  if (raw >= 1_000_000_000_000) return `$${(raw / 1_000_000_000_000).toFixed(1)}T`;
  if (raw >= 1_000_000_000) return `$${(raw / 1_000_000_000).toFixed(1)}B`;
  if (raw >= 1_000_000) return `$${(raw / 1_000_000).toFixed(1)}M`;
  if (raw >= 1_000) return `$${(raw / 1_000).toFixed(1)}K`;
  return `$${raw}`;
}

/**
 * Formats a raw dollar value as a full comma-separated string (e.g. $87,200,000,000).
 */
function formatFullValue(raw: number): string {
  return `$${raw.toLocaleString("en-US")}`;
}

/**
 * Formats a raw share count as a full comma-separated string (e.g. 400,000,000).
 */
function formatFullShares(raw: number): string {
  return raw.toLocaleString("en-US");
}

/**
 * Formats a percentage change with sign and 1 decimal (e.g. +5.8%, -3.1%, 0.0%).
 */
function formatChange(pct: number): string {
  if (pct > 0) return `+${pct.toFixed(1)}%`;
  if (pct < 0) return `${pct.toFixed(1)}%`;
  return "0.0%";
}

/**
 * Returns the appropriate CSS variable string for a change percentage's color.
 */
function getChangeColor(pct: number): string {
  if (pct > 0) return "var(--signal-positive)";
  if (pct < 0) return "var(--signal-negative)";
  return "var(--signal-neutral)";
}

/* ────────────────────────────────────────────────────────────
   Fund Detail Page — displays full holdings for a single fund
   ──────────────────────────────────────────────────────────── */

export default function FundDetailPage() {
  const params = useParams();
  const router = useRouter();
  const cik = params.cik as string;
  const fund = DUMMY_FUNDS.find((f) => f.cik === cik);

  if (!fund) {
    return (
      <div className="page-container" style={{ paddingTop: "64px" }}>
        <p style={{ color: "var(--text-muted)", fontSize: "16px" }}>
          Fund not found.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* ── Top Navigation ── */}
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <span className={styles.logo} onClick={() => router.push("/")}>
            Mkt<span className={styles.logoAccent}>Moves</span>
          </span>
          <div className={styles.navLinks}>
            <a
              className={`${styles.navLink} ${styles.navLinkActive}`}
              onClick={() => router.push("/")}
            >
              Funds
            </a>
            <a className={styles.navLink}>About</a>
          </div>
        </div>
      </nav>

      {/* ── Page Body ── */}
      <div className={`page-container ${styles.body}`}>
        {/* Back button */}
        <div className={styles.backBtn} onClick={() => router.push("/")}>
          ← Superinvestors
        </div>

        {/* Fund header */}
        <h1 className={styles.fundName}>{fund.name}</h1>
        <p className={styles.fundMeta}>
          CIK {fund.cik} · Filed {fund.filingDate} · Report date{" "}
          {fund.reportDate}
        </p>

        {/* Hero stats row */}
        <div className={styles.heroStats}>
          <div className={styles.statBlock}>
            <span className={styles.statLabel}>Portfolio Value</span>
            <span
              className={styles.statValue}
              style={{ color: "var(--text-primary)" }}
            >
              {formatValue(fund.portfolioValueRaw)}
            </span>
          </div>

          <div className={styles.statBlock}>
            <span className={styles.statLabel}>QoQ Change</span>
            <span
              className={styles.statValue}
              style={{ color: getChangeColor(fund.qoqChangePercent) }}
            >
              {formatChange(fund.qoqChangePercent)}
            </span>
          </div>

          <div className={styles.statBlock}>
            <span className={styles.statLabel}>Holdings</span>
            <span
              className={styles.statValue}
              style={{ color: "var(--text-primary)" }}
            >
              {fund.holdingsCount}
            </span>
          </div>

          <div className={styles.statBlock}>
            <span className={styles.statLabel}>New Positions</span>
            <span
              className={styles.statValue}
              style={{ color: "var(--signal-positive)" }}
            >
              {fund.newPositions}
            </span>
          </div>

          <div className={styles.statBlock}>
            <span className={styles.statLabel}>Exited</span>
            <span
              className={styles.statValue}
              style={{ color: "var(--signal-negative)" }}
            >
              {fund.exitedPositions}
            </span>
          </div>
        </div>

        {/* Section title */}
        <h2 className={styles.sectionTitle}>All Holdings</h2>

        {/* Holdings table */}
        <div className={`table-container ${styles.tableWrap}`}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.thRight}>#</th>
                <th className={styles.th}>Issuer</th>
                <th className={styles.thRight}>Value</th>
                <th className={styles.thRight}>Shares</th>
                <th className={styles.thRight}>Weight</th>
                <th className={styles.thRight}>Change</th>
              </tr>
            </thead>
            <tbody>
              {fund.topHoldings.map((holding: TopHolding, index: number) => (
                <tr
                  key={holding.ticker}
                  className={styles.row}
                  style={
                    index > 0
                      ? { borderTop: "1px solid rgba(255,255,255,0.04)" }
                      : undefined
                  }
                >
                  {/* Rank */}
                  <td className={styles.tdRank}>{index + 1}</td>

                  {/* Issuer */}
                  <td className={styles.td}>{holding.issuer}</td>

                  {/* Value */}
                  <td className={`${styles.tdRight} ${styles.tdMono}`}>
                    {formatFullValue(holding.valueRaw)}
                  </td>

                  {/* Shares */}
                  <td className={`${styles.tdRight} ${styles.tdMono}`}>
                    {formatFullShares(holding.sharesRaw)}
                  </td>

                  {/* Weight */}
                  <td
                    className={`${styles.tdRight} ${styles.tdMono} ${styles.tdMuted}`}
                    style={{ fontSize: "13px" }}
                  >
                    {holding.weightPercent.toFixed(1)}%
                  </td>

                  {/* Change */}
                  <td
                    className={`${styles.tdRight} ${styles.tdMono}`}
                    style={{ color: getChangeColor(holding.qoqChangePercent) }}
                  >
                    {formatChange(holding.qoqChangePercent)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
