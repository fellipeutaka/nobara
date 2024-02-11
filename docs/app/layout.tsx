import { fonts } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import { RootProvider } from "fumadocs-ui/provider";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./global.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Nobara", "Zod", "Environment Variables", "Valibot"],
  authors: [{ name: "Fellipe Utaka", url: "https://fellipeutaka.vercel.app" }],
  creator: "Fellipe Utaka",
  publisher: "Fellipe Utaka",
  robots: "index, follow",
  applicationName: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en",
    siteName: siteConfig.name,
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@fellipeutaka",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      style={fonts.sans.style}
      className="motion-safe:scroll-smooth [scrollbar-gutter:stable]"
    >
      <body className="grid min-h-screen grid-rows-[4rem,1fr] bg-background text-foreground antialiased">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
