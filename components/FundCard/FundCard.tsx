/**
 * FundCard — clickable summary card for a single fund.
 * Displays fund name, quarter, key stats, and top-5 holding pills.
 */

import type { Fund } from '@/lib/dummyData'
import styles from './FundCard.module.css'

/* ── Helper functions (not exported) ─────────────────────── */

/**
 * Converts a raw dollar value to an abbreviated string.
 * e.g. 298_400_000_000 → "$298.4B"
 */
function formatValue(raw: number): string {
  if (raw >= 1_000_000_000_000) {
    return `$${(raw / 1_000_000_000_000).toFixed(1)}T`
  }
  if (raw >= 1_000_000_000) {
    return `$${(raw / 1_000_000_000).toFixed(1)}B`
  }
  if (raw >= 1_000_000) {
    return `$${(raw / 1_000_000).toFixed(1)}M`
  }
  if (raw >= 1_000) {
    return `$${(raw / 1_000).toFixed(1)}K`
  }
  return `$${raw}`
}

/**
 * Formats a QoQ change percentage with sign and 1 decimal place.
 * e.g. 2.1 → "+2.1%", -1.8 → "-1.8%", 0 → "0.0%"
 */
function formatChange(pct: number): string {
  if (pct > 0) return `+${pct.toFixed(1)}%`
  if (pct < 0) return `${pct.toFixed(1)}%`
  return '0.0%'
}

/**
 * Returns the appropriate CSS variable string for a QoQ change value.
 * Positive → green, negative → red, zero → neutral grey.
 */
function getChangeColor(pct: number): string {
  if (pct > 0) return 'var(--signal-positive)'
  if (pct < 0) return 'var(--signal-negative)'
  return 'var(--signal-neutral)'
}

/* ── Component ───────────────────────────────────────────── */

interface FundCardProps {
  fund: Fund
  onClick?: () => void
}

export default function FundCard({ fund, onClick }: FundCardProps) {
  return (
    <div className={styles.card} onClick={onClick} role="button" tabIndex={0}>
      {/* 1. Top row — name + quarter */}
      <div className={styles.topRow}>
        <span className={styles.fundName}>{fund.name}</span>
        <span className={styles.quarter}>{fund.quarter}</span>
      </div>

      {/* 2. Stats row — value, QoQ change, holdings count */}
      <div className={styles.statsRow}>
        <div className={styles.statBlock}>
          <span className={styles.statLabel}>Value</span>
          <span className={styles.statValue} style={{ color: 'var(--text-primary)' }}>
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
          <span className={styles.statValue} style={{ color: 'var(--text-primary)' }}>
            {fund.holdingsCount}
          </span>
        </div>
      </div>

      {/* 3. Holding pills — first 5 top holdings */}
      <div className={styles.pillsRow}>
        {fund.topHoldings.slice(0, 5).map((holding) => (
          <span key={holding.ticker} className={styles.pill}>
            <span className={styles.pillTicker}>{holding.ticker}</span>{' '}
            {holding.weightPercent.toFixed(1)}%
          </span>
        ))}
      </div>
    </div>
  )
}
