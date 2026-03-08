import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Masia Wisdom | Fat Mac Portfolio",
  description: "Interactive portfolio inspired by the Macintosh 512K desktop GUI.",
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