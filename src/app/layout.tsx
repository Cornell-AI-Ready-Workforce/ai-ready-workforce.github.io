import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { withSiteBasePath } from "@/lib/site-path";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "AI-Ready Workforce",
  description:
    "A Cornell research initiative building simulation-based assessments, evidence traces, and human review methods for AI-ready skills.",
  icons: {
    icon: [{ url: withSiteBasePath("/favicon.png"), type: "image/png" }],
    apple: [{ url: withSiteBasePath("/favicon.png"), type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body>{children}</body>
    </html>
  );
}
