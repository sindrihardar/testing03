import type { Metadata } from "next";
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
  title: "Basement",
  description: "BASEMENT ehf.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Basement Events" />
        <meta
          property="og:description"
          content="Experience live events with Basement."
        />
        <meta property="og:image" content="./logo/BasementLogoWhite.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="./favicon.ico" />
        {/* Removed manual stylesheet inclusion as per Next.js guidelines */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#131314] text-[#adadba]`}>{children}</body>
    </html>
  );
}