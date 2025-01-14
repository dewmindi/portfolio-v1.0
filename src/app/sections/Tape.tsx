import React, { Fragment } from 'react'
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';

const words = [
  "React.js",
  "Next.js",
  "PHP",
  "Flutter",
  "Swift",
  "Kotlin",
  "Firebase",
  "MongoDB",
  "Docker",
];

const TapeSection = () => {
  return (
    <div className='py-16 lg:py-24 overflow-x-clip'>
      <div className='bg-gradient-to-r  from-fuchsia-500 to-blue-700 -rotate-3 -mx-1'>
        <div className='flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
          <div className='flex flex-none gap-4 py-3 pr-4 animate-move-left [animation-duration:30s]'>
            {[...new Array(2)].fill(0).map((_, idx) =>(
            <Fragment key={idx}>
            {words.map(word => (
              <div key={word} className='inline-flex gap-4 items-center'>
                <span> <BoltOutlinedIcon className='size-6' style={{ fontSize: '30px' }} /></span>
                <span className='text-white uppercase font-extrabold text-sm'>{word}</span>
              </div>
            ))}  
            </Fragment>              
            ))}  
          </div>
        </div>
      </div>
    </div>
  )
};

export default TapeSection