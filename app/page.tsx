import { getFunds } from "@/lib/api";
import SearchableTable from "@/app/components/SearchableTable";

/**
 * Homepage — async server component.
 * Fetches funds server-side and renders the hero section + searchable table.
 */
export default async function Home() {
  let fetchFailed = false;
  const funds = await getFunds();

  /* If getFunds() returned [] it could be an empty DB or an error.
     We treat an empty response as a fetch failure for the UI message. */
  if (funds.length === 0) {
    fetchFailed = true;
  }

  return (
    <>
      {/* ── Hero Section ──────────────────────────────────────── */}
      <section className="hero">
        <h1 className="hero-title">
          Track the <span className="hero-title-accent">Smart Money</span>
        </h1>
        <p className="hero-subtitle">
          See what Berkshire Hathaway, Bridgewater, and 60,000+ institutional
          investors are buying and selling — straight from SEC filings.
        </p>

        {/* Stats row — hardcoded values */}
        <div className="stats-row">
          <div className="stat-block">
            <div className="stat-label">Investors Tracked</div>
            <div className="stat-value">63,000+</div>
          </div>
          <div className="stat-divider" />
          <div className="stat-block">
            <div className="stat-label">Holdings on File</div>
            <div className="stat-value">12.4M+</div>
          </div>
          <div className="stat-divider" />
          <div className="stat-block">
            <div className="stat-label">Latest Quarter</div>
            <div className="stat-value">Q1 2026</div>
          </div>
          <div className="stat-divider" />
          <div className="stat-block">
            <div className="stat-label">Total AUM Tracked</div>
            <div className="stat-value">$48.2T</div>
          </div>
        </div>

        {/* Search bar + table rendered by client component */}
        <SearchableTable funds={funds} fetchFailed={fetchFailed} />
      </section>
    </>
  );
}
