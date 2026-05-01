"use client";
import { DUMMY_FUNDS } from "@/lib/dummyData";
import FundCard from "@/components/FundCard/FundCard";

export default function Home() {
  return (
    <>
      <style>{`
        .mm-nav {
          width: 100%;
          background: var(--bg-surface);
          border-bottom: 1px solid var(--border-default);
        }
        .mm-nav-inner {
          max-width: var(--max-width);
          margin: 0 auto;
          padding: 0 32px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .mm-logo {
          font-size: 16px;
          font-weight: 600;
          color: var(--text-primary);
          letter-spacing: -0.3px;
        }
        .mm-logo-accent {
          color: var(--accent);
        }
        .mm-nav-links {
          display: flex;
          gap: 24px;
        }
        .mm-nav-link {
          font-size: 13px;
          color: var(--text-muted);
          text-decoration: none;
          cursor: pointer;
        }
        .mm-nav-link-active {
          color: var(--text-primary);
          font-weight: 500;
        }
        .mm-body {
          padding-top: 40px;
          padding-bottom: 64px;
        }
        .mm-header {
          margin-bottom: 24px;
        }
        .mm-title {
          font-size: 22px;
          font-weight: 600;
          color: var(--text-primary);
          letter-spacing: -0.3px;
        }
        .mm-subtitle {
          font-size: 14px;
          color: var(--text-muted);
          margin-top: 4px;
        }
        .mm-cards {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
      `}</style>

      <nav className="mm-nav">
        <div className="mm-nav-inner">
          <span className="mm-logo">
            Mkt<span className="mm-logo-accent">Moves</span>
          </span>
          <div className="mm-nav-links">
            <a className="mm-nav-link mm-nav-link-active">Funds</a>
            <a className="mm-nav-link">About</a>
          </div>
        </div>
      </nav>

      <div className="page-container mm-body">
        <div className="mm-header">
          <h1 className="mm-title">Superinvestors</h1>
          <p className="mm-subtitle">
            Tracking 70 institutional managers · Updated quarterly from SEC 13F filings
          </p>
        </div>
        <div className="mm-cards">
          {DUMMY_FUNDS.map((fund) => (
            <FundCard
              key={fund.cik}
              fund={fund}
              onClick={() => console.log(fund.cik)}
            />
          ))}
        </div>
      </div>
    </>
  );
}