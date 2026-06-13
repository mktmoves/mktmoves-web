import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — MktMoves",
  description:
    "Get in touch with MktMoves for questions, feedback, or data issues.",
};

/**
 * Contact page — static server component.
 * Renders a simple contact section with a mailto email link.
 * Nav and Footer are provided by the root layout.
 */
export default function ContactPage() {
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
        Contact
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

      {/* Get in Touch section */}
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
          Get in Touch
        </h2>
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.6,
            color: "var(--text-secondary)",
            marginBottom: 12,
          }}
        >
          For questions, feedback, or data issues, reach out directly:
        </p>
        <a
          href="mailto:admin@mktmoves.com"
          className="contact-link"
          style={{
            fontSize: 14,
            color: "var(--accent)",
            textDecoration: "none",
          }}
        >
          admin@mktmoves.com
        </a>
      </section>
    </div>
  );
}
