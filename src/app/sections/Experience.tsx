import React from 'react'
import { TextGenerateEffect } from '../components/ui/text-generate-effect';

const ExperienceSection = () => {
  return (
    <section>
        <div>
            <div className='text-white'>
                <div className='flex justify-center'> 
                    <p className='upper font-semibold font-sans tracking-widest bg-gradient-to-r 
                 from-fuchsia-500 to-blue-700 text-center text-2xl md:text-3xl max-w-x bg-clip-text text-transparent'>
                    Experience
                    </p>
                </div>
                <TextGenerateEffect words={'Journey Through My Professional Growth'}>
                </TextGenerateEffect>
            </div>
        </div>
    </section>
  )
};

export default ExperienceSection