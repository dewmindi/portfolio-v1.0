import React from "react";
import { Vortex } from "../ui/vortex";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import Image from "next/image";

export function VortexDemo() {
    const [text] = useTypewriter({
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
        backgroundColor=""
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      > 
        <div>
            <BackgroundCircle/>
            <Image
                className="relative items-center rounded-full h-40 w-40 mx-auto opacity-90" 
                src="/assets/profileImgPortfolio.jpeg" 
                alt="My Image"
                width={500} // Replace with your desired width
                height={300} 
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
