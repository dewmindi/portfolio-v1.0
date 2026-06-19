import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

const siteUrl = "https://dewmindi.com";

export const metadata: Metadata = {
  title: "Web Design & Mobile App Development Services",
  description:
    "Dewmindi offers freelance web design, full-stack web development, and mobile app development services in Sri Lanka — responsive sites, e-commerce stores, and custom apps.",
  alternates: { canonical: `${siteUrl}/services` },
  openGraph: {
    title: "Web Design & Mobile App Development Services | Dewmindi",
    description:
      "Freelance web design, web development, and mobile app development services in Sri Lanka.",
    url: `${siteUrl}/services`,
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
