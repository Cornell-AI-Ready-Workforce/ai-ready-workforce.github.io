import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import { cn } from "@/lib/utils";
import { withSiteBasePath } from "@/lib/site-path";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const metaPixelId = "1555351836077246";

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
      <body>
        <Script id="meta-pixel" strategy="beforeInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${metaPixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            height="1"
            src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
            style={{ display: "none" }}
            width="1"
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
