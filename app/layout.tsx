import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Phoo Pwint Zaw (Soo Min) | Portfolio",
  description:
    "Portfolio of Soo Min (Phoo Pwint Zaw) — International Tourism & Hospitality Management student with a Business Law background.",
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