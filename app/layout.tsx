import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Providers } from "@/components/providers/Providers";
import { siteConfig } from "@/content/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.role}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: `${siteConfig.bio} ${siteConfig.tagline}`,
  keywords: [
    "AI Engineer",
    "MLOps",
    "Machine Learning",
    "Deep Learning",
    "LLMs",
    "RAG",
    "Python",
    "FastAPI",
    "AWS",
    "Sheeza Rafique",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.tagline,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: siteConfig.name,
      jobTitle: siteConfig.role,
      email: siteConfig.email,
      url: siteConfig.url,
      sameAs: [
        siteConfig.social.github,
        siteConfig.social.linkedin,
        siteConfig.social.dagshub,
      ],
      knowsAbout: siteConfig.interests,
    },
    {
      "@type": "WebSite",
      name: `${siteConfig.name} Portfolio`,
      url: siteConfig.url,
      description: siteConfig.tagline,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} min-h-screen antialiased`}
      >
        <Providers>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <div className="dot-grid min-h-screen">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
