import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About - Freelance Web Developer in Sri Lanka",
  description:
    "Get to know Dewmindi, a freelance web developer in Sri Lanka with hands-on experience building e-commerce sites, business websites, and mobile apps for clients worldwide.",
  alternates: { canonical: "https://dewmindi.com/about" },
  openGraph: {
    title: "About Dewmindi | Freelance Web Developer in Sri Lanka",
    description:
      "Sri Lanka-based freelance developer building websites and mobile apps for clients worldwide.",
    url: "https://dewmindi.com/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
