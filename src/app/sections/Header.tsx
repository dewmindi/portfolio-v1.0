import React from 'react'

const HeaderSection = () => {
  return (
    <div className='flex justify-center items-center relative top-10 w-full'>
        <nav className='flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur'>
            <a href="#" className="nav-item">Home</a>
            <a href="#" className="nav-item">About Me</a>
            <a href="#" className="nav-item">Projects</a>
            <a href="#" className="nav-item bg-white text-gray-900">Let's Talk</a>
        </nav>
    </div>
  )
}

export default HeaderSection