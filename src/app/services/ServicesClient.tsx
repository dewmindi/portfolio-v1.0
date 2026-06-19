"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePageTransition } from "../components/PageTransition";
import { useState } from "react";
import Image from "next/image";
import { useHoverSound } from "../components/useHoverSound";

const siteUrl = "https://dewmindi.com";

const services = [
  {
    id: "01",
    title: "Web Design / Development",
    description: "Fast, beautiful, and responsive websites tailored to your brand.",
    image: "/assets/saas1.jpg",
  },
  {
    id: "02",
    title: "Mobile App Development",
    description: "Native & cross-platform apps for iOS and Android.",
    image: "/assets/DreamCoach.png",
  },
  {
    id: "03",
    title: "Brand / Visual Identity",
    description: "Logos, color systems, typography, and brand guidelines.",
    image: "/assets/Hakeem-Portfolio.png",
  },
  {
    id: "04",
    title: "SEO",
    description: "Search engine optimization to maximize your online visibility.",
    image: "/assets/grain1.jpg",
  },
];

export default function ServicesClient() {
  const { navigate } = usePageTransition();
  const [activeId, setActiveId] = useState<string>("01");
  const playHover = useHoverSound("/keypress.mp3");

  const activeService = services.find((s) => s.id === activeId)!;

  return (
    <>
      <div className="min-h-screen w-full bg-black text-white font-sans flex flex-col px-6 md:px-12 py-8 select-none">
      {/* Top bar */}
      <div className="flex justify-between items-start shrink-0">
        <div className="flex items-baseline gap-2">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight uppercase">
            Services
          </h2>
          <span className="text-sm md:text-base font-light text-white/50">
            ({services.length})
          </span>
        </div>
        <button
          onClick={() => navigate("/")}
          className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase hover:opacity-50 transition-opacity"
        >
          Close
        </button>
      </div>

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
                  className={`w-8 h-8 shrink-0 flex items-center justify-center text-xs border rounded transition-all duration-300 ${
                    activeId === service.id
                      ? "border-white text-white"
                      : "border-white/20 text-white/40 group-hover:border-white/60 group-hover:text-white"
                  }`}
                >
                  {service.id}
                </span>
                <div>
                  <h3
                    className={`text-xl md:text-2xl font-bold transition-colors duration-200 ${
                      activeId === service.id ? "text-white" : "text-white/60"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/40 mt-0.5">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image preview — right side, desktop only */}
        <div className="hidden md:block flex-1  relative h-[70vh] items-center justify-center w-full">
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
                alt={activeService.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-xs tracking-[0.25em] uppercase font-bold text-white/60">
                  {activeService.title}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="shrink-0 border-t border-white/10 pt-4 flex justify-between items-center"
      >
        <p className="text-[10px] md:text-xs tracking-widest uppercase text-white/30 font-bold">
          DEWMINDI
        </p>
        <p className="text-[10px] md:text-xs text-white/30">
          © {new Date().getFullYear()}
        </p>
      </motion.div>
    </div>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                serviceType: "Web Development",
                name: "Web Development Services in Sri Lanka",
                provider: { "@id": `${siteUrl}/#person` },
                areaServed: { "@type": "Country", name: "Sri Lanka" },
                url: `${siteUrl}/services`,
              },
              {
                "@type": "Service",
                serviceType: "Web Design",
                name: "Web Design Services in Sri Lanka",
                provider: { "@id": `${siteUrl}/#person` },
                areaServed: { "@type": "Country", name: "Sri Lanka" },
                url: `${siteUrl}/services`,
              },
              {
                "@type": "Service",
                serviceType: "Mobile App Development",
                name: "Mobile App Development Services in Sri Lanka",
                provider: { "@id": `${siteUrl}/#person` },
                areaServed: { "@type": "Country", name: "Sri Lanka" },
                url: `${siteUrl}/services`,
              },
            ],
          }),
        }}
      />
    </>
  );
}
