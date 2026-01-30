import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const telma = localFont({
  variable: "--font-logo",
  src: "../assets/fonts/Telma-Bold.woff2",
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
        className={`${inter.variable} ${telma.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
