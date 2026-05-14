import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI-Ready Workforce",
  description:
    "A research-backed assessment project for measuring how people plan, prompt, produce, verify, and exercise judgment with AI.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
