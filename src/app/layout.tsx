import type { Metadata } from "next";
import { Noto_Sans_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import NavBar from "./components/navbar";

const inter = Noto_Sans_Mono({ subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "Jeremy Sebring",
  description: "Generated by Jeremy, GPT, and Stack Overflow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <header className="container mx-auto pb-3">
        <NavBar />
      </header>

      <main className="container mx-auto">
        {children}
        <Analytics />
        <SpeedInsights />
      </main>
    </html>
  );
}
