import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sydtech Digital Industries - Empowering Growth Through Innovation",
  description: "Transforming ideas into scalable powerful solutions that drive exponential business growth. Expert mobile app development, system development, and tech consultation services.",
  keywords: ["mobile app development", "system development", "tech consultation", "digital transformation", "business solutions", "Malaysia"],
  authors: [{ name: "Sydtech Digital Industries" }],
  openGraph: {
    title: "Sydtech Digital Industries - Empowering Growth Through Innovation",
    description: "Transforming ideas into scalable powerful solutions that drive exponential business growth.",
    url: "https://sydtechindustries.io",
    siteName: "Sydtech Digital Industries",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sydtech Digital Industries",
    description: "Empowering Growth Through Innovation",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
