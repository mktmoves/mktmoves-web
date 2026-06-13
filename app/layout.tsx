import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

/* ── Font Loading ──────────────────────────────────────────────── */

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

/* ── Metadata ──────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "MktMoves — Track the Smart Money",
  description:
    "See what Berkshire Hathaway, Bridgewater, and 60,000+ institutional investors are buying and selling — straight from SEC filings.",
};

/* ── Nav (server component) ────────────────────────────────────── */

/** Top navigation bar with logo and page links. */
function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <span className="nav-logo">
          Mkt<span className="nav-logo-accent">Moves</span>
        </span>
        <div className="nav-links">
          <a href="/" className="nav-link nav-link-active">
            Home
          </a>
          <a href="#" className="nav-link">
            About
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ── Footer (server component) ─────────────────────────────────── */

/** Site-wide footer with link columns and legal text. */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          {/* Brand column */}
          <div>
            <div className="footer-logo">
              Mkt<span className="footer-logo-accent">Moves</span>
            </div>
            <p className="footer-tagline">
              Institutional portfolio data from SEC EDGAR filings.
            </p>
          </div>

          {/* Product column */}
          <div>
            <div className="footer-col-heading">Product</div>
            <a href="#" className="footer-link">Super Investors</a>
            <a href="#" className="footer-link">Funds</a>
            <a href="#" className="footer-link">Stocks</a>
            <a href="#" className="footer-link">How It Works</a>
          </div>

          {/* Company column */}
          <div>
            <div className="footer-col-heading">Company</div>
            <a href="#" className="footer-link">About</a>
            <a href="#" className="footer-link">Contact</a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span>© 2026 MktMoves. All rights reserved.</span>
          <span className="footer-bottom-center">
            SEC data sourced from EDGAR. Not investment advice.
          </span>
          <span className="footer-bottom-right">
            <a href="#">Privacy Policy</a> · <a href="#">Terms of Service</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

/* ── Root Layout ───────────────────────────────────────────────── */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plexSans.variable} ${plexMono.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
