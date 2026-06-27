"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePageTransition } from "../components/PageTransition";
import { useState } from "react";
import Image from "next/image";
import { useHoverSound } from "../components/useHoverSound";

const siteUrl = "https://dewmindi.com";
const pageUrl = `${siteUrl}/web-development-service-srilanka`;

const services = [
  {
    id: "01",
    title: "Web Design / Development",
    description: "Fast, beautiful, and responsive websites tailored to your brand.",
    longDescription:
      "Custom web development in Sri Lanka built with Next.js and React — fast-loading, mobile-friendly, and SEO-optimized business websites that turn visitors into customers.",
    image: "/assets/saas1.jpg",
  },
  {
    id: "02",
    title: "Mobile App Development",
    description: "Native & cross-platform apps for iOS and Android.",
    longDescription:
      "Cross-platform mobile app development for iOS and Android using React Native, giving startups and businesses in Sri Lanka one codebase and a native experience on every device.",
    image: "/assets/DreamCoach.png",
  },
  {
    id: "03",
    title: "Brand / Visual Identity",
    description: "Logos, color systems, typography, and brand guidelines.",
    longDescription:
      "Brand and visual identity design — logos, colour systems, typography, and brand guidelines that give your business a consistent, professional presence online and offline.",
    image: "/assets/Hakeem-Portfolio.png",
  },
  {
    id: "04",
    title: "SEO",
    description: "Search engine optimization to maximize your online visibility.",
    longDescription:
      "Technical and on-page SEO services in Sri Lanka that improve your Google ranking, Core Web Vitals, and visibility in AI answer engines so the right customers find you.",
    image: "/assets/grain1.jpg",
  },
];

const faqs = [
  {
    question: "How much does web development cost in Sri Lanka?",
    answer:
      "The cost of web development in Sri Lanka depends on the size and complexity of the project. A simple business website typically costs less than a custom e-commerce platform or mobile app. As a freelance web developer, Dewmindi offers affordable, transparent pricing — contact for a free quote tailored to your requirements.",
  },
  {
    question: "Do you build e-commerce websites?",
    answer:
      "Yes. Dewmindi builds fast, secure e-commerce websites with product catalogues, shopping carts, online payments, and inventory management — designed to convert visitors into customers and rank well on Google.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "Websites are built with modern technologies including Next.js, React, and TypeScript for performance and SEO, while mobile apps are built with React Native for both iOS and Android. This stack delivers fast, scalable, and maintainable products.",
  },
  {
    question: "Do you offer SEO services?",
    answer:
      "Yes. Every website is built SEO-friendly from the ground up — clean semantic HTML, structured data, fast load times, and mobile-first design — and dedicated SEO services are available to improve your Google ranking and online visibility.",
  },
  {
    question: "Can you build mobile apps for iOS and Android?",
    answer:
      "Yes. Using React Native, Dewmindi builds cross-platform mobile apps that run natively on both iOS and Android from a single codebase, reducing cost and development time for businesses in Sri Lanka.",
  },
];

export default function ServicesClient() {
  const { navigate } = usePageTransition();
  const [activeId, setActiveId] = useState<string>("01");
  const playHover = useHoverSound("/keypress.mp3");

  const activeService = services.find((s) => s.id === activeId)!;

  return (
    <>
      <main className="min-h-screen w-full bg-black text-white font-sans flex flex-col">
        {/* Hero — full screen, visual unchanged */}
        <section className="min-h-screen flex flex-col px-6 md:px-12 py-8">
          {/* Top bar */}
          <div className="flex justify-between items-start shrink-0">
            <div className="flex items-baseline gap-2">
              <h1 className="text-2xl md:text-4xl font-bold tracking-tight">
                Web Development Service in Sri Lanka
              </h1>
              <span className="text-sm md:text-base font-light text-white/50">
                ({services.length})
              </span>
            </div>
            <button
              onClick={() => navigate("/")}
              className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase hover:opacity-50 transition-opacity select-none"
            >
              Close
            </button>
          </div>

          {/* Keyword-rich intro */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-4 max-w-7xl text-sm md:text-base text-white/60 leading-relaxed"
          >
            Dewmindi is a <strong className="text-white/80">freelance web developer in Sri Lanka</strong>{" "}
            offering professional web development,<br /> web design, e-commerce, and mobile
            app development services for startups and <br />businesses — fast, responsive,
            SEO-optimized websites built with Next.js and React.
          </motion.p>

          {/* Main content */}
          <div className="flex-1 flex flex-col md:flex-row gap-8 md:gap-16 items-center py-8">
            {/* Service list */}
            <div className="w-full md:w-1/2 flex flex-col justify-center gap-1 max-w-xl">
              {services.map((service, i) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.5 + i * 0.1,
                    duration: 0.5,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                >
                  <div
                    onMouseEnter={() => {
                      setActiveId(service.id);
                      playHover();
                    }}
                    className="flex gap-3 w-full text-left border-b border-white/20 pb-3 p-2 cursor-pointer group hover:bg-white/5 transition-colors"
                  >
                    <span
                      className={`w-8 h-8 shrink-0 flex items-center justify-center text-xs border rounded transition-all duration-300 select-none ${
                        activeId === service.id
                          ? "border-white text-white"
                          : "border-white/20 text-white/40 group-hover:border-white/60 group-hover:text-white"
                      }`}
                    >
                      {service.id}
                    </span>
                    <div>
                      <h2
                        className={`text-xl md:text-2xl font-bold transition-colors duration-200 ${
                          activeId === service.id ? "text-white" : "text-white/60"
                        }`}
                      >
                        {service.title}
                      </h2>
                      <p className="text-sm text-white/40 mt-0.5">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Image preview — right side, desktop only */}
            <div className="hidden md:block flex-1 relative h-[70vh] items-center justify-center w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, y: 16, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -16, scale: 0.97 }}
                  transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                  className="absolute inset-0 overflow-hidden"
                >
                  <Image
                    src={activeService.image}
                    alt={`${activeService.title} — web development service in Sri Lanka by Dewmindi`}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-xs tracking-[0.25em] uppercase font-bold text-white/60 select-none">
                      {activeService.title}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* What's included — keyword-rich service detail */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="px-6 md:px-12 py-16 md:py-24 border-t border-white/10"
        >
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Web Development Services Included
            </h2>
            <p className="mt-3 text-sm md:text-base text-white/50 leading-relaxed">
              From the first wireframe to launch and beyond, here is what is included
              when you hire a web developer in Sri Lanka for your next project.
            </p>
            <div className="mt-10 flex flex-col gap-8">
              {services.map((service) => (
                <article key={service.id} className="flex gap-4">
                  <span className="text-xs font-bold text-white/30 pt-1 select-none">
                    {service.id}
                  </span>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-sm md:text-base text-white/60 leading-relaxed">
                      {service.longDescription}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Why hire — value / GEO + LLM content */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="px-6 md:px-12 py-16 md:py-24 border-t border-white/10"
        >
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Why Hire a Freelance Web Developer in Sri Lanka
            </h2>
            <p className="mt-4 text-sm md:text-base text-white/60 leading-relaxed">
              Hiring a freelance web developer in Sri Lanka gives you world-class web
              development at affordable rates, with direct communication and no agency
              overhead. Every website is built mobile-first and fully responsive, so it
              looks and performs perfectly on phones, tablets, and desktops.
            </p>
            <p className="mt-4 text-sm md:text-base text-white/60 leading-relaxed">
              Performance and SEO are built in from day one — clean semantic HTML, fast
              Core Web Vitals, structured data, and accessible markup that ranks well on
              Google and is easy for AI answer engines to understand and cite. Whether
              you need a business website, an e-commerce store, or a cross-platform
              mobile app, Dewmindi delivers fast, modern products built with Next.js,
              React, and React Native.
            </p>
          </div>
        </motion.section>

        {/* FAQ — AEO / GEO core */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="px-6 md:px-12 py-16 md:py-24 border-t border-white/10"
        >
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
            <div className="mt-10 flex flex-col divide-y divide-white/10 border-t border-white/10">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 select-none">
                    <h3 className="text-base md:text-lg font-bold text-white/90">
                      {faq.question}
                    </h3>
                    <span className="text-white/40 transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm md:text-base text-white/60 leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="px-6 md:px-12 py-16 md:py-24 border-t border-white/10"
        >
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Ready to Start Your Project?
            </h2>
            <p className="mt-4 text-sm md:text-base text-white/60 leading-relaxed">
              Looking for a reliable web development service in Sri Lanka? Get in touch
              for a free consultation and a quote tailored to your business. Let&apos;s
              build a fast, beautiful website or mobile app that grows your brand.
            </p>
            <button
              onClick={() => navigate("/about")}
              className="mt-8 inline-flex items-center gap-2 border border-white/30 px-6 py-3 text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors select-none"
            >
              Get in Touch
            </button>
          </div>
        </motion.section>

        {/* Bottom strip */}
        <div className="px-6 md:px-12 py-4 border-t border-white/10 flex justify-between items-center">
          <p className="text-[10px] md:text-xs tracking-widest uppercase text-white/30 font-bold select-none">
            DEWMINDI
          </p>
          <p className="text-[10px] md:text-xs text-white/30 select-none">
            © {new Date().getFullYear()}
          </p>
        </div>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": pageUrl,
                url: pageUrl,
                name: "Web Development Service in Sri Lanka",
                description:
                  "Professional web development, web design, e-commerce, and mobile app development services in Sri Lanka by freelance developer Dewmindi.",
                isPartOf: { "@id": `${siteUrl}/#website` },
                about: { "@id": `${siteUrl}/#person` },
                breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
              },
              {
                "@type": "BreadcrumbList",
                "@id": `${pageUrl}#breadcrumb`,
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: siteUrl,
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Web Development Service in Sri Lanka",
                    item: pageUrl,
                  },
                ],
              },
              {
                "@type": "Service",
                "@id": `${pageUrl}#service`,
                serviceType: "Web Development",
                name: "Web Development Services in Sri Lanka",
                description:
                  "Custom web development, web design, e-commerce, mobile app development, and SEO services in Sri Lanka.",
                provider: { "@id": `${siteUrl}/#person` },
                areaServed: { "@type": "Country", name: "Sri Lanka" },
                url: pageUrl,
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Web & Mobile Development Services",
                  itemListElement: services.map((s) => ({
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: s.title,
                      description: s.longDescription,
                    },
                  })),
                },
              },
              {
                "@type": "FAQPage",
                "@id": `${pageUrl}#faq`,
                mainEntity: faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                  },
                })),
              },
            ],
          }),
        }}
      />
    </>
  );
}
