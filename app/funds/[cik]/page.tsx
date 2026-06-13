/**
 * Fund detail page — placeholder.
 * This page is NOT YET IMPLEMENTED. It will be built in a future task
 * once the /api/v1/funds/[cik]/holdings endpoint exists.
 */
export default function FundDetailPage({
  params,
}: {
  params: { cik: string };
}) {
  return (
    <div
      style={{
        maxWidth: "var(--max-width)",
        margin: "0 auto",
        padding: "80px 32px",
        textAlign: "center",
      }}
    >
      <p style={{ color: "var(--text-secondary)", fontSize: "16px" }}>
        Fund detail page for CIK {params.cik} is coming soon.
      </p>
    </div>
  );
}
