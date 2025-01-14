"use client"
import React, { useRef, useState } from 'react'
import { FlipWords } from '../components/ui/flip-words';
import { HoverBorderGradient } from '../components/ui/hover-border-gradient';
import { EmailOutlined, LocationCityOutlined, LocationOn, PhoneAndroidOutlined } from '@mui/icons-material';
import { useForm, SubmitHandler } from "react-hook-form";


type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:udewmindi.ud@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    console.log(formData);
  };
  
  return (
    <section id='contact'>
      <div className='py-16'>
        <div className='container'>
          <div className='grid grid-cols-1 items-center justify-center pb-10 text-white'>
            <div className='flex  mx-auto'>
              <p className='upper font-semibold font-serif tracking-widest bg-gradient-to-r 
                 from-fuchsia-500 to-blue-700 text-center text-2xl md:text-3xl max-w-x bg-clip-text text-transparent'>
                Got a Project in Mind? Lets Connect!
              </p>
            </div>
            <div className='mt-4'>
              <span className='flex items-center justify-center'>
                <span className='text-center font-medium font-sans md:text-lg lg:text-2xl '>Whether you have a project idea, a question, or just want to connect,
                  I'm here to help. Let's bring your vision to
                  <span>
                    <FlipWords words={['life', 'reality']}></FlipWords>
                  </span>
                  <span className='font-semibold font-sans md:text-lg lg:text-2xl'>!</span>
                </span>
              </span>
              <div className='py-4  md:flex-row max-w-7xl justify-evenly mx-auto items-center text-white font-sans '>
                <div className='space-y-5 flex flex-col'>
                  <div className='flex items-center space-x-3  justify-center'>
                    <PhoneAndroidOutlined className='animate-pulse' />
                    <p>+94767931405</p>
                  </div>
                  <div className='flex items-center space-x-3 justify-center'>
                    <EmailOutlined className='animate-pulse' />
                    <p>udewmindi.ud@gmail.com</p>
                  </div>
                  <div className='flex items-center space-x-3 justify-center'>
                    <LocationOn className='animate-pulse' />
                    <p>Ambalangoda, Sri Lanka</p>
                  </div>
                </div>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2  w-fit mx-auto'>
                <div className='flex space-y-2 md:space-y-0 flex-col md:flex-row md:space-x-2'>
                  <input {...register("name")} placeholder='Name' className='contactInput' type="text" /> 
                  <input {...register("email")} placeholder='Email' className='contactInput' type="email" />
                </div>
                <input {...register("subject")} placeholder='Subject' className='contactInput' type="text" />
                <textarea {...register("message")} placeholder='Message' className='contactInput'/>
                {/* <span className='py-4 flex justify-center'>
                  <HoverBorderGradient
                    className=' md:text-lg md:font-semibold  lg:font-semibold lg:text-xl'
                    children={'Submit'}
                  />
                </span> */}
                <button type='submit' className='bg-gradient-to-r 
               from-fuchsia-500 to-blue-700 hover:bg-gradient-to-l 
              from-fuchsia-500 to-blue-700 transition duration-200 shadow-[0px_2px_0px_0px_#FFFFFF40_inset]
                py-5 px-10 rounded-md text-white font-bold text-lg'>Submit</button>
              </form>
            </div>  
            
            {/* <span className='py-4 flex justify-center'>
                  <HoverBorderGradient 
                  className=' md:text-lg md:font-semibold  lg:font-semibold lg:text-xl' 
                  children={'Say Hello'}
                  />
            </span> */}
          </div>
        </div>
      </div>
    </section>
  )
};

export default ContactSection