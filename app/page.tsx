"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!EMAIL_REGEX.test(email)) {
      setStatus("error");
      setErrorMessage("Enter a valid email address.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "landing_page" }),
      });

      if (res.ok) {
        setStatus("success");
        return;
      }

      const data = await res.json();

      if (res.status === 409) {
        setStatus("error");
        setErrorMessage(data.error || "This email is already on the list.");
      } else if (res.status === 400) {
        setStatus("error");
        setErrorMessage(data.error || "Enter a valid email address.");
      } else {
        setStatus("error");
        setErrorMessage(
          data.error || "Something went wrong. Please try again."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        position: "relative",
        zIndex: 1,
      }}
    >
      <main
        style={{
          maxWidth: 600,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Wordmark */}
        <div
          style={{
            fontFamily: "'Sora', sans-serif",
            fontWeight: 700,
            fontSize: "1.4rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <span style={{ color: "var(--color-text)" }}>MKT</span>{" "}
          <span style={{ color: "var(--color-accent)" }}>MOVES</span>
        </div>

        {/* Tagline */}
        <h1
          style={{
            fontFamily: "'Sora', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
            color: "var(--color-text)",
            marginTop: "2.5rem",
            lineHeight: 1.15,
          }}
        >
          Follow the Smart Money.
        </h1>

        {/* Supporting line */}
        <p
          style={{
            fontFamily: "'IBM Plex Sans', sans-serif",
            fontWeight: 400,
            fontSize: "1rem",
            color: "var(--color-text-muted)",
            lineHeight: 1.7,
            maxWidth: 420,
            marginTop: "1rem",
          }}
        >
          Every quarter, big funds report exactly what they own.
          <br />
          We make that data easy to read.
        </p>

        {/* Form or Success */}
        {status === "success" ? (
          <div
            className="fade-in"
            style={{
              marginTop: "2.5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span
              style={{
                fontSize: "2rem",
                color: "var(--color-accent)",
              }}
            >
              ✓
            </span>
            <p
              style={{
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontWeight: 400,
                fontSize: "1rem",
                color: "var(--color-text)",
                lineHeight: 1.6,
              }}
            >
              You&apos;re on the list. We&apos;ll reach out when we launch.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              marginTop: "2.5rem",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="form-row">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading"}
                style={{
                  flex: 1,
                  width: "100%",
                  background: "var(--color-surface)",
                  border: "0.5px solid var(--color-border)",
                  borderRadius: 8,
                  padding: "12px 16px",
                  fontFamily: "'IBM Plex Sans', sans-serif",
                  fontSize: 14,
                  color: "var(--color-text)",
                  outline: "none",
                  transition: "border-color 0.15s ease",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-accent)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-border)";
                }}
              />
              <button
                type="submit"
                disabled={status === "loading"}
                style={{
                  background: "var(--color-accent)",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: 8,
                  padding: "12px 20px",
                  fontFamily: "'IBM Plex Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  cursor: status === "loading" ? "not-allowed" : "pointer",
                  whiteSpace: "nowrap",
                  transition: "background 0.15s ease",
                  opacity: status === "loading" ? 0.6 : 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  minWidth: 120,
                }}
                onMouseEnter={(e) => {
                  if (status !== "loading") {
                    e.currentTarget.style.background =
                      "var(--color-accent-hover)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--color-accent)";
                }}
              >
                {status === "loading" ? (
                  <span className="spinner" />
                ) : (
                  "Join Waitlist"
                )}
              </button>
            </div>

            {/* Error message */}
            {status === "error" && errorMessage && (
              <p
                style={{
                  fontFamily: "'IBM Plex Sans', sans-serif",
                  fontSize: 13,
                  color: "#EF4444",
                  marginTop: 8,
                }}
              >
                {errorMessage}
              </p>
            )}

            {/* Footnote */}
            <p
              style={{
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontWeight: 400,
                fontSize: 12,
                color: "var(--color-text-muted)",
                marginTop: 10,
              }}
            >
              No spam. Just a launch notification.
            </p>
          </form>
        )}
      </main>
    </div>
  );
}
