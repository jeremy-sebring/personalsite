import type { Metadata } from "next";
import { Noto_Sans_Mono } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

const inter = Noto_Sans_Mono({ subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "Jeremy Sebring",
  description: "Generated Jeremy, GPT, and Stack Overflow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>

    </html>
  );
}
