"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface ContactOverlayProps {
  onClose: () => void;
}

const ContactOverlay = ({ onClose }: ContactOverlayProps) => {
  return (
    <AnimatePresence>
<motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 bg-black flex flex-col"
          >
            <div className="absolute inset-0 -z-10">
              <Image
                src="/portfolio-hero.jpeg"
                alt="Hero Background"
                fill
                className="object-cover opacity-40 grayscale"
              />
            </div>

            <div className="flex justify-between items-start p-6 md:p-10 z-10 w-full">
               <div className="text-[10px] md:text-sm font-bold">CONTACT</div>
               <button
                onClick={onClose}
                className="text-[10px] md:text-sm font-bold hover:opacity-50 transition-opacity"
              >
                CLOSE
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center items-center p-6 md:p-10 relative">
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.3 }}
                 className="flex flex-col items-center"
               >
                 <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-4 text-center">GET IN TOUCH</h2>
                 <p className="text-orange-600 font-bold mb-12 tracking-widest">AVAILABLE FOR NEW PROJECTS</p>
               </motion.div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-4xl">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-8"
                  >
                    <div>
                      <h4 className="text-[10px] tracking-widest opacity-50 mb-2 font-bold">EMAIL ME</h4>
                      <a href="mailto:udewmindi.ud@gmail.com" className="text-xl md:text-3xl font-bold hover:text-orange-600 transition-colors">UDEWMINDI.UD@GMAIL.COM</a>
                    </div>
                    <div>
                      <h4 className="text-[10px] tracking-widest opacity-50 mb-2 font-bold">CALL US</h4>
                      <p className="text-xl md:text-3xl font-bold">+94 76 793 1405</p>
                    </div>
                    <div>
                      <h4 className="text-[10px] tracking-widest opacity-50 mb-2 font-bold">VISIT US</h4>
                      <p className="text-xl md:text-3xl font-bold">AMBALANGODA,<br/>SRI LANKA</p>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="space-y-8"
                  >
                    <div>
                      <h4 className="text-[10px] tracking-widest opacity-50 mb-2 font-bold">SOCIALS</h4>
                      <div className="flex flex-col gap-4 font-bold text-xl md:text-3xl">
                        <a href="#" className="hover:text-orange-600 transition-colors">INSTAGRAM</a>
                        <a href="#" className="hover:text-orange-600 transition-colors">LINKEDIN</a>
                        <a href="#" className="hover:text-orange-600 transition-colors">DRIBBBLE</a>
                        <a href="#" className="hover:text-orange-600 transition-colors">GITHUB</a>
                      </div>
                    </div>
                  </motion.div>
               </div>
            </div>

            <div className="w-full p-6 md:p-10 z-10 mt-auto">
              <div className="flex justify-between items-baseline border-t border-white/20 pt-4">
                <h1 className="text-3xl md:text-5xl font-black tracking-tighter">DewMindi</h1>
                <p className="text-xs opacity-50">© {new Date().getFullYear()}  DewMindi</p>
              </div>
            </div>
          </motion.div>
    </AnimatePresence>
  )
}

export default ContactOverlay