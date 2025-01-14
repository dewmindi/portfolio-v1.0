import React from 'react'

const HeaderSection = () => {
  return (
    <div id='header' className='flex justify-center items-center w-full mt-1'>
        <nav className='flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur'>
            <a href="#home" className="nav-item">Home</a>
            <a href="#projects" className="nav-item">Projects</a>
            <a href="#about-me" className="nav-item">About Me</a>
            <a href="#contact" className="nav-item bg-white text-gray-900">Let's Talk</a>
        </nav>
    </div>
  )
}

export default HeaderSection