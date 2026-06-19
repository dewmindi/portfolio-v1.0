"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePageTransition } from "../components/PageTransition";
import NavMenu from "../components/NavMenu";

const processSteps = [
  "Discovery & Strategy",
  "UI / UX Design",
  "Development",
  "Testing & QA",
  "Deployment",
  "Support & Maintenance",
];

const testimonials = [
  {
    quote:
      "From the initial meeting I was impressed by the genuine enthusiasm and willingness to engage with the ideas in my brief. The DewMindi team engendered confidence. They cared about the project; throughout the design process they listened and interacted in a positive and professional, but relaxed, way.",
    name: "Carmen",
    role: "Client, Sydney",
  },
  {
    quote:
      "As they explored design ideas, they welcomed my contributions and encouraged feedback. Consequently, I had no doubt that DewMindi would deliver a design to meet my dreams and also my budget. And in fact, the award-winning outcome eminently attests to their skill and achievement on both counts!",
    name: "Carmen",
    role: "Client, Sydney",
  },
];

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AboutClient() {
  const { navigate } = usePageTransition();

  return (
    <main className="min-h-screen w-full  text-black font-sans select-none">
      {/* Header (black) */}
      <header className="bg-black text-white px-6 md:px-12 pt-6 pb-12">
        <div className="flex justify-between items-start">
          <button
            onClick={() => navigate("/")}
            className="text-[10px] tracking-[0.2em] font-medium uppercase text-white/70 hover:text-white transition-colors"
          >
            Home
          </button>
          <NavMenu />
        </div>

        <h1 className="mt-8 text-6xl md:text-8xl font-medium tracking-tight leading-none flex items-center">
          <span className="text-5xl md:text-7xl font-light mr-1">©</span>About
        </h1>
      </header>

      {/* Section 1: approach + process list */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 px-6 md:px-12 py-12 md:py-20">
        {/* Left: image + numbered process */}
        <div className="flex flex-col gap-8">
          <Reveal>
            <div className="relative w-full aspect-[4/5] max-w-sm overflow-hidden">
              <Image
                src="/dewmindi.jpeg"
                alt="DewMindi workspace"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="flex flex-col">
            {processSteps.map((step, i) => (
              <Reveal key={step} delay={i * 0.05}>
                <div className="flex items-center gap-4 border-b border-black/10 py-2.5 text-sm md:text-base">
                  <span className="text-black/40 tabular-nums">
                    ({String(i + 1).padStart(2, "0")})
                  </span>
                  <span className="font-medium">{step}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Right: large statement */}
        <div className="space-y-8 text-white">
          <Reveal>
            <p className="text-3xl md:text-[2.6rem] font-bold leading-[1.12] tracking-tight">
              Dewmindi is a freelance web designer & developer based in Sri Lanka — building responsive websites, e-commerce stores, mobile apps, and brand identities for clients worldwide.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-3xl md:text-[2.6rem] font-bold leading-[1.12] tracking-tight">
              From web design and full-stack development to mobile apps and SEO, every project is crafted with clarity, precision, and your unique vision at the centre.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Section 2: testimonials + image */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 px-6 md:px-12 pb-20 md:pb-28">
        {/* Left: testimonials */}
        <div className="flex flex-col gap-10 max-w-md">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="space-y-4">
                <p className="text-sm md:text-base leading-relaxed text-white">
                  &ldquo;{t.quote}&rdquo;
                </p>
                {i === testimonials.length - 1 && (
                  <div className="text-[11px] font-bold tracking-[0.15em] uppercase">
                    <p>{t.name}</p>
                    <p className="text-black/50">{t.role}</p>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Right: large image */}
        <Reveal delay={0.1}>
          <div className="relative w-full aspect-[3/4] overflow-hidden">
            <Image
              src="/dewmindi.jpeg"
              alt="DewMindi project"
              fill
              className="object-cover"
            />
          </div>
        </Reveal>
      </section>
    </main>
  );
}
