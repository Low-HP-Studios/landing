import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const chillax = localFont({
  variable: "--font-logo",
  src: "../assets/fonts/Chillax-Semibold.woff2",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${chillax.variable} antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
