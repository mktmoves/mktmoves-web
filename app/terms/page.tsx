import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — MktMoves",
  description:
    "MktMoves Terms of Service. Understand the terms governing your use of the platform.",
};

/**
 * Terms of Service page — static server component.
 * Renders the full terms of service with section headings and body text.
 * Nav and Footer are provided by the root layout.
 */
export default function TermsPage() {
  return (
    <div
      style={{
        maxWidth: 860,
        margin: "0 auto",
        padding: "32px 32px",
        fontFamily: "var(--font-sans)",
      }}
    >
      {/* Page title */}
      <h1
        style={{
          fontSize: 22,
          fontWeight: 600,
          color: "var(--text-primary)",
          letterSpacing: "-0.3px",
          marginBottom: 8,
        }}
      >
        Terms of Service
      </h1>

      {/* Effective date */}
      <p
        style={{
          fontSize: 13,
          color: "var(--text-muted)",
          marginBottom: 32,
        }}
      >
        Effective date: June 13, 2026
      </p>

      {/* Section 1 — Acceptance of Terms */}
      <section
        style={{
          borderBottom: "1px solid var(--border-default)",
          paddingBottom: 22,
        }}
      >
        <h2
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "var(--text-primary)",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            margin: "20px 0 8px",
          }}
        >
          Acceptance of Terms
        </h2>
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.6,
            color: "var(--text-secondary)",
          }}
        >
          By accessing or using MktMoves (&ldquo;the Service&rdquo;), you agree
          to be bound by these Terms of Service. If you do not agree, do not use
          the Service.
        </p>
      </section>

      {/* Section 2 — Informational Purpose Only */}
      <section
        style={{
          borderBottom: "1px solid var(--border-default)",
          paddingBottom: 22,
        }}
      >
        <h2
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "var(--text-primary)",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            margin: "20px 0 8px",
          }}
        >
          Informational Purpose Only
        </h2>
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.6,
            color: "var(--text-secondary)",
          }}
        >
          All data, analysis, and content provided by MktMoves is for general
          informational purposes only. Nothing on this site constitutes financial
          advice, investment advice, trading advice, or any other form of advice.
          MktMoves is not a registered investment advisor, broker-dealer, or
          financial planner. You should consult a qualified financial professional
          before making any investment decision.
        </p>
      </section>

      {/* Section 3 — Inherent Data Limitations */}
      <section
        style={{
          borderBottom: "1px solid var(--border-default)",
          paddingBottom: 22,
        }}
      >
        <h2
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "var(--text-primary)",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            margin: "20px 0 8px",
          }}
        >
          Inherent Data Limitations
        </h2>
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.6,
            color: "var(--text-secondary)",
          }}
        >
          Institutional holding data displayed on MktMoves is sourced from Form
          13F filings submitted to the U.S. Securities and Exchange Commission
          (SEC). By law, these filings are permitted to be submitted up to 45
          days after the end of each calendar quarter. As a result, all holdings
          data on this site reflects positions held in the past and may not
          represent current holdings of any institution. MktMoves makes no
          representation that any data displayed is current, complete, or
          accurate.
        </p>
      </section>

      {/* Section 4 — No Guarantee of Accuracy */}
      <section
        style={{
          borderBottom: "1px solid var(--border-default)",
          paddingBottom: 22,
        }}
      >
        <h2
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "var(--text-primary)",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            margin: "20px 0 8px",
          }}
        >
          No Guarantee of Accuracy
        </h2>
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.6,
            color: "var(--text-secondary)",
          }}
        >
          While MktMoves makes reasonable efforts to present SEC EDGAR data
          accurately, we do not guarantee the accuracy, completeness, timeliness,
          or reliability of any information on the Service. Data parsing,
          aggregation, and display errors may occur. Users rely on this data
          entirely at their own risk.
        </p>
      </section>

      {/* Section 5 — No Liability */}
      <section
        style={{
          borderBottom: "1px solid var(--border-default)",
          paddingBottom: 22,
        }}
      >
        <h2
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "var(--text-primary)",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            margin: "20px 0 8px",
          }}
        >
          No Liability
        </h2>
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.6,
            color: "var(--text-secondary)",
          }}
        >
          To the maximum extent permitted by applicable law, MktMoves and its
          operators shall not be liable for any direct, indirect, incidental,
          special, consequential, or punitive damages arising from your use of or
          reliance on the Service, including but not limited to financial losses
          resulting from investment decisions made based on data presented here.
        </p>
      </section>

      {/* Section 6 — SEC Data Attribution */}
      <section
        style={{
          borderBottom: "1px solid var(--border-default)",
          paddingBottom: 22,
        }}
      >
        <h2
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "var(--text-primary)",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            margin: "20px 0 8px",
          }}
        >
          SEC Data Attribution
        </h2>
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.6,
            color: "var(--text-secondary)",
          }}
        >
          The underlying filing data displayed on MktMoves is sourced from SEC
          EDGAR, a public database maintained by the U.S. Securities and Exchange
          Commission. MktMoves is not affiliated with or endorsed by the SEC.
        </p>
      </section>

      {/* Section 7 — Prohibited Use */}
      <section
        style={{
          borderBottom: "1px solid var(--border-default)",
          paddingBottom: 22,
        }}
      >
        <h2
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "var(--text-primary)",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            margin: "20px 0 8px",
          }}
        >
          Prohibited Use
        </h2>
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.6,
            color: "var(--text-secondary)",
          }}
        >
          You may not use the Service to: (a) systematically scrape, crawl, or
          extract data through automated means; (b) resell or redistribute
          MktMoves data or presentation in any commercial product without
          attribution; (c) use the Service in any manner that violates applicable
          law.
        </p>
      </section>

      {/* Section 8 — Intellectual Property */}
      <section
        style={{
          borderBottom: "1px solid var(--border-default)",
          paddingBottom: 22,
        }}
      >
        <h2
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "var(--text-primary)",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            margin: "20px 0 8px",
          }}
        >
          Intellectual Property
        </h2>
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.6,
            color: "var(--text-secondary)",
          }}
        >
          The SEC filing data underlying this Service is public domain. However,
          the design, aggregation logic, presentation layer, and all original
          content of MktMoves are the intellectual property of the operator.
          Unauthorized reproduction is prohibited.
        </p>
      </section>

      {/* Section 9 — Modifications */}
      <section
        style={{
          borderBottom: "1px solid var(--border-default)",
          paddingBottom: 22,
        }}
      >
        <h2
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "var(--text-primary)",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            margin: "20px 0 8px",
          }}
        >
          Modifications
        </h2>
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.6,
            color: "var(--text-secondary)",
          }}
        >
          MktMoves reserves the right to modify or discontinue the Service at any
          time without notice. These Terms may be updated at any time. Continued
          use of the Service constitutes acceptance of the updated Terms.
        </p>
      </section>

      {/* Section 10 — Governing Law */}
      <section>
        <h2
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "var(--text-primary)",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            margin: "20px 0 8px",
          }}
        >
          Governing Law
        </h2>
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.6,
            color: "var(--text-secondary)",
          }}
        >
          These Terms shall be governed by the laws of the State of Texas,
          without regard to its conflict of law provisions.
        </p>
      </section>
    </div>
  );
}
