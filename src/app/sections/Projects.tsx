import React from 'react'
import Image from 'next/image';

const HighwayBus = '/assets/HighwayBus.png';
const PetPal = '/assets/PetPal.png';
const TaxiTrack = '/assets/TaxiTrack.png';


const portfolioProjects =[
    {
        comapany: "Umeshika Dewmindi",
        year: "2024",
        title: "E-Book Highway Bus Reservation System",
        results: [
            {title:"Seamless E-ticketing"},
            {title:"Facilitate Real-Time Seat Status"},
            {title:"Manage bookings efficiently"}
        ],
        link: "https://github.com/dewmindi/Highway-Bus-Reservation-System",
        image: HighwayBus,
    },
    {
        comapany: "Umeshika Dewmindi",
        year: "2024",
        title: "Pet-Pal Mobile Application",
        results: [
            {title:"Streamline PetCare in a Finger tip"},
            {title:"Track pets' Status"},
            {title:"Set Reminders for Medications,foods"}
        ],
        link: "https://youtu.https://github.com/dewmindi/pet-app/4kIdSLxh6w",
        image: PetPal,
    },
    {
        comapany: "Umeshika Dewmindi",
        year: "2024",
        title: "Taxi-Track| Manage Your Business",
        results: [
            {title:"Track Routes of Every Trips"},
            {title:"Manage Trips,Drivers & Requests Efficiently"},
            {title:"View Income Graphically"}
        ],
        link: "https://youtu.be/4kIdSLxh6w",
        image: TaxiTrack,
    }
];

const ProjectsSection = () => {
  return (
    <section id='projects' className='pb-20'>
        <div>
            <div className='text-white container'>
                <div className='flex justify-center'> 
                    <p className='upper font-semibold font-sans tracking-widest bg-gradient-to-r 
                 from-fuchsia-500 to-blue-700 text-center text-2xl md:text-3xl max-w-x bg-clip-text text-transparent'>
                    Real Client Projects
                    </p>
                </div>
                <h2 className='font-serif text-3xl text-center mt-6'>Featured Projects</h2>
                <p className='text-center md:text-lg text-white/60 mt-4 max-w-md mx-auto '>Dive into see how I create concepts into web & mobile applications</p>
            <div className='flex flex-col gap-20 mt-10 md:mt-15'>
                {portfolioProjects.map((project, projectIndex)=>(
                        <div key={project.title} className='bg-gray-800 rounded-3xl z-0 overflow-hidden after:z-10
                            after:content-[\] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 
                            after:rounded-3xl after:outline-white/50 px-8 pt-8 md:px-10 md:pt-12 lg:pt-16 lg:px-20 after:pointer-events-none sticky'
                            style={{top:`calc(64px + ${projectIndex*40}px)`}}>
                            <div className='absolute inset-0 -z-10 opacity-5'>
                                <img className='h-full w-full' src='/assets/grain1.jpg'></img>
                            </div>
                            <div className='lg:grid lg:grid-cols-2 lg:gap-16'>
                                <div className='lg:pb-16'>   
                                    <div>
                                        <div className='tracking-widest bg-gradient-to-r from-fuchsia-500
                                             to-blue-700 inline-flex gap-2 font-semibold text-center text-sm bg-clip-text text-transparent'>
                                                <span>{project.comapany}</span>
                                                <span>&bull;</span>
                                                <span>{project.year}</span>
                                        </div>
                                    </div>
                                    <h3 className='font-serif text-2xl mt-2 md:mt-5 md:text-4xl'>{project.title}</h3>
                                    <hr className='border-t-2 border-white/15 mt-4 md:mt-5'/>
                                    <ul className='flex flex-col gap-4 mt-4'>
                                            {project.results.map((result, resultIndex)=>(
                                                <span className='inline-flex gap-2 font-mono text-sm md:text-base
                                                     text-white/65' key={resultIndex} >
                                                    <span>&bull;</span>
                                                    <span><li>{result.title}</li></span>
                                                </span>
                                            ))}
                                    </ul>
                                    <a href="{project.link}">
                                            <button className='bg-white h-12 w-full md:w-auto px-6 rounded-xl
                                                 text-black font-semibold mt-8'>
                                                    View Code
                                            </button>
                                    </a>    
                                </div>
                                <div className='relative'>
                                    <Image src={project.image} alt={project.title} width={500} height={300} 
                                    className='mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:w-auto lg:h-full lg:max-w-none'/>
                                </div>
                            </div>
                    </div>
                ))}
            </div>
         </div>
        </div>
    </section>
  )
};
export default ProjectsSection