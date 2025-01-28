import {GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import React from 'react';


const footerLinks = [
    {
        title: 'LinkedIn',
        href: 'https://www.linkedin.com/in/umeshika-dewmindi-3b6621312/',
        icon: <LinkedIn />
    },
    {
        title: 'Github',
        href: 'https://github.com/dewmindi',
        icon: <GitHub />
    },
    {
        title: 'Instagram',
        href: '',
        icon: <Instagram />
    },
];

const FooterSection = () => {
    return (
        <footer id='footer' className='relative flex justify-center w-full'>
            {/* Background element - use absolute positioning */}
            <div className='absolute inset-x-0 bottom-0 h-[400px] bg-fuchsia-500/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10'></div>
            <div className='container text-white'>
                <div className='border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8'>
                    <div className='text-white/40'>&copy; 2025 Umeshika Dewmindi | All rights reserved.</div>
                    <nav className='flex flex-col md:flex-row items-center gap-8'>
                        {footerLinks.map(link => (
                            <a
                                className='inline-flex items-center gap-1.5'
                                href={link.href}
                                key={link.title}
                                target='_blank'
                                rel='noopener noreferrer'>
                                <span className='font-semibold'>{link.title}</span>
                                <span>{link.icon}</span>
                            </a>
                        ))}
                    </nav>
                </div>  
            </div>
            {/* <div className='pr-12 pt-6'>
                <a href="#header">
                <button className='w-10 h-6 rounded bg-transparent text-white border border-white text-center text-lg'>
                   ^
                </button>
                </a>
            </div> */}
        </footer>
    );
};

export default FooterSection;


// import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';
// import React from 'react'


// const footerLinks = [
//     {
//         title: 'LinkedIn',
//         href: 'https://www.linkedin.com/in/umeshika-dewmindi-3b6621312/',
//         icon: <LinkedIn />
//     },
//     {
//         title: 'Github',
//         href: 'https://github.com/dewmindi',
//         icon: <GitHub />
//     },
//     {
//         title: 'Instagram',
//         href: '',
//         icon: <Instagram />
//     },
// ];

// const FooterSection = () => {
//     return (
//         <footer id='footer' className='relative flex justify-center'>
//             <div className='absolute h-[400px] w-[1600px] bottom-0 left-1/2
//             -translate-x-1/2 bg-fuchsia-500/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10'></div>
//             <div className='container text-white'>
//                 <div className='border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8'>
//                     <div className='text-white/40'>&copy; 2025. All rights reserved.</div>
//                     <nav className='flex flex-col md:flex-row items-center gap-8'>
//                         {footerLinks.map(link => (
//                             <a 
//                                 className='inline-flex items-center gap-1.5' 
//                                 href={link.href} 
//                                 key={link.title}
//                                 target='_blank'
//                                 rel='noopener noreferrer'>
//                                 <span className='font-semibold'>{link.title}</span>
//                                 <span>{link.icon}</span>
//                             </a>
//                         ))}
//                     </nav>  
//                 </div>
//             </div>
//         </footer>
//     )
// };

// export default FooterSection