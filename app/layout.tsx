import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FlashBack | DUEN Bing Chilling",
  description:
    "A showcase website for FlashBack, a compact 270-degree photo capture machine by DUEN Spring 2026 Cohort Bing Chilling.",
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
