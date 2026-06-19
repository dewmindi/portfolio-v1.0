import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Calistoga } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import PageTransitionProvider from "./components/PageTransition";
import WhatsAppFloat from "./components/WhatsAppFloat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"]
});

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;
const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://dewmindi.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dewmindi | Freelance Web Developer & Mobile App Developer in Sri Lanka",
    template: "%s | Dewmindi",
  },
  description:
    "Freelance web developer in Sri Lanka. Dewmindi builds fast, responsive websites, e-commerce platforms, and mobile apps for startups and businesses.",
  keywords: [
    "web developer sri lanka",
    "freelance web developer sri lanka",
    "best web designer in sri lanka",
    "mobile app developer in sri lanka",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Dewmindi",
    title: "Dewmindi | Freelance Web Developer & Mobile App Developer in Sri Lanka",
    description:
      "Freelance web developer in Sri Lanka building modern websites, e-commerce platforms, and mobile apps.",
    images: [
      {
        url: "/og-image.jpg", // 1200x630
        width: 1200,
        height: 630,
        alt: "Dewmindi - Freelance Web Developer in Sri Lanka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dewmindi | Freelance Web Developer & Mobile App Developer in Sri Lanka",
    description:
      "Freelance web developer in Sri Lanka building modern websites, e-commerce platforms, and mobile apps.",
    images: ["/og-image.jpg"],
  },
};

const businessJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Dewmindi",
      url: siteUrl,
      jobTitle: "Freelance Web Developer & Mobile App Developer",
      description:
        "Freelance web developer and mobile app developer based in Sri Lanka.",
      address: { "@type": "PostalAddress", addressCountry: "LK" },
      knowsAbout: [
        "Web Development",
        "Web Design",
        "Mobile App Development",
        "Next.js",
        "React Native",
        "E-commerce Development",
      ],
      sameAs: [
        "https://github.com/dewmindi",
        "https://www.linkedin.com/in/umeshika-dewmindi/",
        "https://www.upwork.com/freelancers/~016d7ba494f660f468",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Dewmindi",
      publisher: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: "Dewmindi - Web & Mobile App Development",
      url: siteUrl,
      image: `${siteUrl}/og-image.jpg`,
      priceRange: "$$",
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      founder: { "@id": `${siteUrl}/#person` },
    },
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${calistoga.variable} antialiased font-sans`}
      >
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        <PageTransitionProvider>{children}</PageTransitionProvider>
        <WhatsAppFloat />
      </body>
    </html>
  );
}
