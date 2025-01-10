"use client"
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

const HeroSection = () => {
    const [text, count] = useTypewriter({
        words:[
            "< Umeshika Dewmindi />",
            "< Web Developer />", 
            "< Mobile Developer />", 
            "< AI/ML Developer />"
        ],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div>
       <h1>
        <span>{text}</span>
        <Cursor cursorColor='#FFFF'/>
       </h1>
    </div>
  )
}

export default HeroSection