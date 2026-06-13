import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About — MktMoves",
  description:
    "Learn about MktMoves, the project, and the data behind it.",
};

/**
 * About page — static server component.
 * Renders a profile block and three content sections about the project.
 * Nav and Footer are provided by the root layout.
 */
export default function AboutPage() {
  return (
    <div
      style={{
        maxWidth: 860,
        margin: "0 auto",
        padding: "32px 32px",
        fontFamily: "var(--font-sans)",
      }}
    >
      {/* Profile block */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
          paddingBottom: 24,
          borderBottom: "1px solid var(--border-default)",
        }}
      >
        <Image
          src="/images/sanket_photo.JPG"
          alt="Sanket Chavan"
          width={80}
          height={80}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            flexShrink: 0,
          }}
        />
        <div>
          <div
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: "var(--text-primary)",
            }}
          >
            Sanket Chavan
          </div>
          <div
            style={{
              fontSize: 14,
              color: "var(--text-secondary)",
            }}
          >
            Data Engineer
          </div>
          <div
            style={{
              display: "flex",
              gap: 16,
              marginTop: 8,
            }}
          >
            <a
              href="https://www.linkedin.com/in/sanketchavan08/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--accent)",
                fontSize: 13,
                textDecoration: "none",
              }}
            >
              LinkedIn
            </a>
            <a
              href="https://www.sanketchavan.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--accent)",
                fontSize: 13,
                textDecoration: "none",
              }}
            >
              sanketchavan.com
            </a>
          </div>
        </div>
      </div>

      {/* Page title */}
      <h1
        style={{
          fontSize: 22,
          fontWeight: 600,
          color: "var(--text-primary)",
          letterSpacing: "-0.3px",
          marginBottom: 8,
          marginTop: 24,
        }}
      >
        About MktMoves
      </h1>

      {/* Last updated */}
      <p
        style={{
          fontSize: 13,
          color: "var(--text-muted)",
          marginBottom: 32,
        }}
      >
        Last updated June 2026
      </p>

      {/* Section: The Project */}
      <section
        style={{
          borderTop: "1px solid var(--border-default)",
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
          The Project
        </h2>
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.6,
            color: "var(--text-secondary)",
          }}
        >
          MktMoves is an independent project that makes SEC EDGAR institutional
          filing data more accessible to retail investors. Our goal is to present
          this data with clarity and precision — clean representation, up-to-date
          filings, and intuitive navigation. As the platform grows, we plan to
          introduce new metrics and analytical tools to help users better
          understand institutional positioning.
        </p>
      </section>

      {/* Section: The Data */}
      <section
        style={{
          borderTop: "1px solid var(--border-default)",
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
          The Data
        </h2>
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.6,
            color: "var(--text-secondary)",
          }}
        >
          All holdings data is sourced directly from Form 13F filings submitted
          to the U.S. Securities and Exchange Commission. No data is fabricated
          or estimated — everything displayed reflects what institutions formally
          reported to regulators. Filings are updated as new submissions become
          available on SEC EDGAR.
        </p>
      </section>

      {/* Section: The Builder */}
      <section
        style={{
          borderTop: "1px solid var(--border-default)",
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
          The Builder
        </h2>
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.6,
            color: "var(--text-secondary)",
          }}
        >
          MktMoves is built and maintained by Sanket Chavan, a data engineer.
          This is a self-funded, independent project.
        </p>
      </section>
    </div>
  );
}
