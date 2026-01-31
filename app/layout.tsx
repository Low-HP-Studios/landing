import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const chillax = localFont({
  variable: "--font-logo",
  src: "../assets/fonts/Chillax-Semibold.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Low HP Studios | Developer-Friendly Career Tools",
  description:
    "Building developer-friendly career tools that combine visual editing, AI intelligence, and code-level control.",
  keywords: [
    "resume builder",
    "career tools",
    "developer",
    "AI resume",
    "portfolio",
  ],
  authors: [{ name: "Low HP Studios" }],
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    title: "Low HP Studios",
    description: "Developer-friendly career tools. Building in the open.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${chillax.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
