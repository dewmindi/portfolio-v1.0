import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

const siteUrl = "https://dewmindi.com";
const pageUrl = `${siteUrl}/web-development-service-srilanka`;

export const metadata: Metadata = {
  title: "Web Development Service in Sri Lanka",
  description:
    "Professional web development service in Sri Lanka by Dewmindi — a freelance web developer building fast, responsive, SEO-optimized websites, e-commerce platforms, and mobile apps with Next.js and React.",
  keywords: [
    "web development service sri lanka",
    "freelance web developer sri lanka",
    "web design sri lanka",
    "e-commerce website development sri lanka",
    "mobile app developer sri lanka",
    "next.js developer sri lanka",
    "seo services sri lanka",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Web Development Service in Sri Lanka | Dewmindi",
    description:
      "Real web development and mobile app projects built by a freelance developer in Sri Lanka.",
    url: pageUrl,
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
