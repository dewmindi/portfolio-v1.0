"use client"
import React from 'react';
import { VortexDemo } from '../components/ui/vortexdemo';
import { TextGenerateEffect } from '../components/ui/text-generate-effect';

const HeroSection = () => {
  return (
    <div id='home' className='mt-3 py-32 snap-start'> 
      <VortexDemo/>
      <div className='flex justify-center items-center font-serif'><TextGenerateEffect words={'Let\'s Discuss Your Next Project'}>
      </TextGenerateEffect>
        {/* <p className="text-white text-sm md:text-2xl max-w-xl text-center font-serif">Let's Discuss Your Next Project</p> */}
      </div>
      <div className='flex justify-center items-center'>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-3">
          <a href="#contact">
            <button className="px-4 py-2 bg-gradient-to-r 
               from-fuchsia-500 to-blue-700 hover:bg-gradient-to-l 
              from-fuchsia-500 to-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
              Contact Now
            </button>
          </a>
          <a href="#projects"><button className="px-4 py-2  text-white ">Explore Projects</button></a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
