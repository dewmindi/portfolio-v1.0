import React from 'react'

const BackgroundCircle = () => {
  return (
    <div className='absolute justify-center items-center'>
        <div className='absolute border border-white rounded-full opacity-60 h-[200px] w-[200px] animate-ping'/>
        <div className='absolute border border-white rounded-full opacity-40 h-[200px] w-[200px] animate-ping'/>
        <div className='absolute border border-white rounded-full opacity-50 h-[200px] w-[200px] animate-ping'/>
        <div className='absolute border border-white rounded-full opacity-40 h-[400px] w-[400px] animate-ping'/>
        <div className='absolute border border-white rounded-full opacity-30 h-[550px] w-[550px] animate-ping'/>
    </div>
  )
}

export default BackgroundCircle