import { Metadata } from "next";
import Hero from "./sections/Hero";



export const metadata: Metadata = {
  title: "Freelance Web Developer in Sri Lanka",
  description:
    "Freelance web developer in Sri Lanka. Dewmindi builds fast, responsive websites and mobile apps for startups and businesses. View projects and get a free quote.",
  alternates: { canonical: "https://dewmindi.com" },
  openGraph: {
    title: "Dewmindi | Freelance Web Developer in Sri Lanka",
    description:
      "Fast, modern websites and mobile apps built by a freelance developer in Sri Lanka.",
    url: "https://dewmindi.com",
  },
};

export default function Home() {
  return (
    <div>
      <Hero/>
    </div>
  );
}
