"use client";
import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { usePageTransition } from './PageTransition';

const menuLinks = [
  { label: "Home", href: "/" },
  { label: "Works", href: "/projects/all" },
  { label: "Studio", href: "/#about-me" },
  { label: "Process", href: "/#about-me" },
  { label: "Gallery", href: "/projects/all" },
];

const MenuOverlay = () => {
      // Active slide state for the left pagination indicator
      const [activeSlide, setActiveSlide] = useState<string>("");
      // Full-screen navigation overlay
      const [menuOpen, setMenuOpen] = useState(false);
      // Route through the shared curtain transition
      const { navigate } = usePageTransition();
  return (
    <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 bg-black text-white flex flex-col px-6 md:px-12 py-8"
          >
            {/* Top bar: brand + close */}
            <div className="flex justify-between items-start">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
                DEWMINDI
              </h2>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase hover:opacity-50 transition-opacity"
              >
                Close
              </button>
            </div>

            {/* Primary navigation links */}
            <nav className="flex-1 flex flex-col justify-center gap-1 md:gap-2">
              {menuLinks.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{
                    delay: 0.35 + i * 0.07,
                    duration: 0.6,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                >
                  <button
                    onClick={() => navigate(item.href)}
                    className="block text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight leading-[0.95] text-white/90 hover:text-white transition-colors w-fit text-left"
                  >
                    {item.label}
                  </button>
                </motion.div>
              ))}
            </nav>

            {/* Footer links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col gap-3 text-xs md:text-sm font-bold tracking-[0.15em] uppercase"
            >
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit hover:opacity-50 transition-opacity"
              >
                Instagram
              </a>
              <div className="flex flex-col gap-1 text-white/70">
                <a href="#" className="w-fit hover:opacity-100 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="w-fit hover:opacity-100 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
  )
}

export default MenuOverlay