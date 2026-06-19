"use client"
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { TransitionLink } from '../components/PageTransition';
import ContactOverlay from '../components/ContactOverlay';

const HeroSection = () => {
  const [showContact, setShowContact] = useState(false);


  return (
    <div id='home' className='relative h-screen w-full overflow-hidden flex flex-col justify-between text-white uppercase font-sans tracking-tighter'>
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://res.cloudinary.com/dnbckmmju/image/upload/f_auto,q_auto/v1781894833/dewmindi-freelance-web-developer-near-colombo_rk0wha.webp"
          alt="Freelance Web Developer near colombo"
          fill
          className="object-cover"
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Top Section */}
      <div className="flex justify-between items-start p-6 md:p-10 z-10">
        <div className="flex gap-8 text-[10px] md:text-sm font-bold">
          <TransitionLink href="/projects" className="hover:opacity-50 transition-opacity">Web Development</TransitionLink>
          <TransitionLink href="/projects" className="hover:opacity-50 transition-opacity">Mobile App Development</TransitionLink>
        </div>

        <div className="flex gap-8 items-center text-[10px] md:text-sm font-bold">
          <TransitionLink href="/projects" className="flex items-center gap-1 hover:opacity-50 transition-opacity">
            <span>Projects</span>
            <span className="text-[8px] align-top">08</span>
          </TransitionLink>
          <div className="flex items-center gap-1">
            <span>Narrative</span>
            <span className="text-[8px] align-top">03</span>
          </div>
        </div>

        <div className="text-[10px] md:text-sm font-bold">
          <button
            onClick={() => setShowContact(true)}
            className="hover:opacity-50 transition-opacity"
          >
            CONTACT
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full p-6 md:p-10 z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-end border-t border-white/20 pt-4">
          <a href="#home" className="space-y-1 group">
            <h3 className="text-[10px] md:text-sm font-bold leading-tight uppercase group-hover:text-orange-600 transition-colors">Home</h3>
            <p className="text-[10px] md:text-xs opacity-60 normal-case">Main Landing</p>
          </a>
          <TransitionLink href="/projects" className="space-y-1 group">
            <h3 className="text-[10px] md:text-sm font-bold leading-tight uppercase group-hover:text-orange-600 transition-colors">Projects</h3>
            <p className="text-[10px] md:text-xs opacity-60 normal-case">Work Showcase</p>
          </TransitionLink>
          <TransitionLink href="/services" className="space-y-1 group">
            <h3 className="text-[10px] md:text-sm font-bold leading-tight uppercase group-hover:text-orange-600 transition-colors">Services</h3>
            <p className="text-[10px] md:text-xs opacity-60 normal-case">What I Offer</p>
          </TransitionLink>
          <a href="/about" className="space-y-1 group">
            <h3 className="text-[10px] md:text-sm font-bold leading-tight uppercase group-hover:text-orange-600 transition-colors">About Me</h3>
            <p className="text-[10px] md:text-xs opacity-60 normal-case">My Journey</p>
          </a>
          <a onClick={() => setShowContact(true)} className="space-y-1 relative group cursor-pointer">
            <div className="absolute top-0 left-0 w-full h-[1px] -translate-y-[17px]" />
            <h3 className="text-[10px] md:text-sm font-bold leading-tight uppercase text-orange-600">CONTACT ME</h3>
            <p className="text-[10px] md:text-xs opacity-60 normal-case">Get in touch</p>
            
          </a>
        </div>
        <div className="mt-8 flex justify-between items-baseline">
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter">DewMindi</h1>
        </div>
      </div>

      {/* Contact Overlay */}
      <AnimatePresence>
        {showContact && <ContactOverlay onClose={() => setShowContact(false)} />}
      </AnimatePresence>
    </div>
  );
};

export default HeroSection;
