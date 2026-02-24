import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  DM_Serif_Display,
  Cormorant_Garamond,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

// Accent font for small section kickers (logo-like feel)
const accent = Cormorant_Garamond({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SMP Revive - Homepage Concept",
  description:
    "Modern homepage redesign concept for SMP Revive (scar & stretch mark revision).",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={[
          geistSans.variable,
          geistMono.variable,
          dmSerif.variable,
          accent.variable,
          "antialiased",
          "min-h-screen",
          "bg-[var(--background)]",
          "text-[var(--foreground)]",
          "selection:bg-[var(--brand-accent)]/30",
        ].join(" ")}
      >
        {children}
      </body>
    </html>
  );
}