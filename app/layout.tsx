import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f2f2ef",
};
export const metadata: Metadata = {
  metadataBase: new URL("https://www.lowhp.studio"),
  title: "Low HP Studio — Independent games & crafted websites",
  description:
    "A small independent studio by Ayush Rameja. Explore Burnhop, Greytrace, and Templio: games to play and carefully made corners of the web.",
  authors: [{ name: "Ayush Rameja", url: "https://ayush.im" }],
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Low HP Studio — Low health. High spirit.",
    description:
      "Independent games and carefully made websites, built by Ayush Rameja.",
    type: "website",
    url: "/",
    siteName: "Low HP Studio",
    images: [
      {
        url: "/social-preview.png",
        width: 1200,
        height: 630,
        alt: "Low HP Studio — Independent games and crafted websites",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Low HP Studio — Low health. High spirit.",
    description:
      "Independent games and carefully made websites, built by Ayush Rameja.",
    images: ["/social-preview.png"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={geist.variable}>{children}</body>
    </html>
  );
}
