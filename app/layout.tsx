import { GeistSans } from "geist/font/sans";

import "./globals.css";

export const metadata = {
  title: "Blinko",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>{children}</body>
    </html>
  );
}