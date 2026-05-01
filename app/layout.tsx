import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MKT MOVES",
  description: "Follow the Smart Money. SEC filing intelligence, structured and searchable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}