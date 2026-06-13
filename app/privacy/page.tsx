import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — MktMoves",
  description:
    "MktMoves Privacy Policy. Learn what information we collect and how we use it.",
};

/**
 * Privacy Policy page — static server component.
 * Renders the full privacy policy with section headings and body text.
 * Nav and Footer are provided by the root layout.
 */
export default function PrivacyPage() {
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
        Privacy Policy
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

      {/* Section 1 — Overview */}
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
          Overview
        </h2>
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.6,
            color: "var(--text-secondary)",
          }}
        >
          MktMoves is committed to protecting your privacy. This Privacy Policy
          explains what information we collect, how we use it, and your rights
          with respect to it.
        </p>
      </section>

      {/* Section 2 — Information We Do Not Collect */}
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
          Information We Do Not Collect
        </h2>
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.6,
            color: "var(--text-secondary)",
          }}
        >
          MktMoves does not collect, store, or process any personally
          identifiable information. Specifically: we do not require account
          creation; we do not collect email addresses; we do not collect names,
          phone numbers, or physical addresses; we do not run advertising
          networks; and we do not sell user data to any third party.
        </p>
      </section>

      {/* Section 3 — Automatically Collected Technical Data */}
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
          Automatically Collected Technical Data
        </h2>
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.6,
            color: "var(--text-secondary)",
          }}
        >
          When you visit MktMoves, standard web server logs may capture your IP
          address and browser type as part of normal HTTP request handling. This
          data is not stored, analyzed, or associated with any individual user.
          We do not use cookies, tracking pixels, or fingerprinting technologies.
        </p>
      </section>

      {/* Section 4 — Analytics */}
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
          Analytics
        </h2>
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.6,
            color: "var(--text-secondary)",
          }}
        >
          MktMoves does not currently use any third-party analytics service. No
          behavioral tracking, session recording, or page-view analytics are
          active on this site.
        </p>
      </section>

      {/* Section 5 — Third-Party Data Sources */}
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
          Third-Party Data Sources
        </h2>
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.6,
            color: "var(--text-secondary)",
          }}
        >
          Data displayed on MktMoves is sourced from SEC EDGAR, a publicly
          available government database. Your use of MktMoves does not transmit
          any information to the SEC or any third party.
        </p>
      </section>

      {/* Section 6 — Children's Privacy */}
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
          Children&apos;s Privacy
        </h2>
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.6,
            color: "var(--text-secondary)",
          }}
        >
          MktMoves is not directed at children under the age of 13. We do not
          knowingly collect any information from children.
        </p>
      </section>

      {/* Section 7 — Changes to This Policy */}
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
          Changes to This Policy
        </h2>
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.6,
            color: "var(--text-secondary)",
          }}
        >
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page with an updated effective date. Continued use of
          the Service following any changes constitutes your acceptance of the
          updated Policy.
        </p>
      </section>

      {/* Section 8 — Contact */}
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
          Contact
        </h2>
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.6,
            color: "var(--text-secondary)",
          }}
        >
          For any privacy-related questions, contact us at:{" "}
          <a
            href="mailto:admin@mktmoves.com"
            style={{
              color: "var(--accent)",
              textDecoration: "none",
            }}
          >
            admin@mktmoves.com
          </a>
        </p>
      </section>
    </div>
  );
}
