import React from 'react'
import { HoverEffect } from '../components/ui/card-hover-effect';

const AboutSection = () => {
  const items = [
    {
      title: 'Next.Js',
    },
    {
      title: 'React.Js',
    },
    {
      title: 'Javascript',
      
    },
    {
      title: 'PHP',
      
    },
    {
      title: 'Kotlin',
    },
    {
      title: 'Swift',
    },
    {
      title: 'Flutter',
    },
    {
      title: 'React Native',
    },
    {
      title: 'Firebase',
    },
    {
      title: 'MongoDB',
    },
    {
      title: 'Docker',
    },
    {
      title: 'Github',
    },
  ];
  return (
    <section id='about-me' className='py-16'>
     <div className='container'> 
      <div className='md:grid md:grid-cols-2 md:gap-16'>
        <div className=' text-white sm:mb-10'>
          <div className='flex justify-center'>
              <p className='upper font-semibold font-sans tracking-widest bg-gradient-to-r 
                 from-fuchsia-500 to-blue-700 text-center text-2xl md:text-3xl max-w-x bg-clip-text text-transparent'>
                About Me
              </p>
          </div>
          <p className='text-center md:text-lg text-white/60 mt-4 max-w-md mx-auto text-lg'>
          Passionate Frontend Web and Mobile Application Developer with a strong passion for AI & ML. As an undergraduate student, 
          I have honed my skills in building both sleek, responsive websites and intuitive mobile applications that offer seamless user experiences across platforms.
          </p>
          <p className='text-center md:text-lg text-white/60 mt-4 max-w-md mx-auto text-lg'>
          My journey in Web Development involves crafting dynamic and engaging interfaces, 
          while my Mobile Development expertise focuses on creating apps that users love. Additionally, 
          my enthusiasm for Artificial Intelligence and Machine Learning drives me to explore innovative 
          solutions and merge technology with real-world applications.
          </p>
          <p className='text-center md:text-lg text-white/60 mt-4 max-w-md mx-auto text-lg'>
          I enjoy tackling complex problems, learning new technologies, and creating impactful digital experiences that make a difference.
          </p>
        </div>
        <div className=''>
          <div className='flex justify-center'>
              <p className='upper font-semibold font-sans tracking-widest bg-gradient-to-r 
                 from-fuchsia-500 to-blue-700 text-center text-2xl md:text-3xl max-w-x bg-clip-text text-transparent'>
                Skills
              </p>
          </div>
          <div>
              <HoverEffect items={items}/>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
};

export default AboutSection