import type { Metadata } from "next";
import WebDevClient from "./WebDevClient";

const siteUrl = "https://dewmindi.com";
const pageUrl = `${siteUrl}/web-development-projects`;

export const metadata: Metadata = {
  title: "Web Development Projects in Sri Lanka",
  description:
    "Explore real web development and mobile app projects built by Dewmindi, a freelance web developer in Sri Lanka — including e-commerce platforms and business websites.",
  keywords: [
    "web development projects sri lanka",
    "freelance web developer portfolio sri lanka",
    "e-commerce website projects sri lanka",
    "next.js project portfolio",
    "web design portfolio sri lanka",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    title: "Web Development Projects in Sri Lanka | Dewmindi",
    description:
      "Real web development and mobile app projects built by a freelance developer in Sri Lanka.",
    url: pageUrl,
  },
};

export default function AllProjectsPage() {
  return <WebDevClient />;
}
