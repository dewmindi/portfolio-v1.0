import React from "react";
import { Vortex } from "../ui/vortex";
import Header from "@/app/sections/Header";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import Image from "next/image";

export function VortexDemo() {
    const [text, count] = useTypewriter({
        words:[
            "< Web Developer />", 
            "< Mobile Developer />", 
            "< AI/ML Developer />"
        ],
        loop: true,
        delaySpeed: 3000,
    })
  return (
    <div className="w-full mx-auto rounded-md  h-[30rem] overflow-hidden py-32">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      > 
        <div>
            <BackgroundCircle/>
            <img 
                className="relative items-center rounded-full h-40 w-40 mx-auto opacity-75" 
                src="/assets/myImage.jpeg" 
                alt="My Image" 
            />
        </div>
        <p className="text-white text-2xl md:text-3xl max-w-xl mt-6 text-center font-serif">
          Umeshika Dewmindi
        </p>
        <div className="flex items-center">
       <h1>
        <span className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">{text}</span>
        <Cursor cursorColor='#FFFF'/>
       </h1>
    </div>
        
      </Vortex>
    </div>
  );
}
