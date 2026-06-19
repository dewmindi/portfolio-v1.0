import type { Metadata } from "next";
import WebDevClient from "./WebDevClient";

const siteUrl = "https://dewmindi.com";
const pageUrl = `${siteUrl}/web-development-service-srilanka`;

export const metadata: Metadata = {
  title: "Web Development Service in Sri Lanka - Projects",
  description:
    "Explore real web development and mobile app projects built by Dewmindi, a freelance web developer in Sri Lanka — including e-commerce platforms and business websites.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Web Development Projects in Sri Lanka | Dewmindi",
    description:
      "Real web development and mobile app projects built by a freelance developer in Sri Lanka.",
    url: pageUrl,
  },
};

export default function AllProjectsPage() {
  return <WebDevClient />;
}
