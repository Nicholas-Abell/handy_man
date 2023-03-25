import React, { useEffect, useState } from 'react';
import after from '../assets/images/after.jpg';
import before from '../assets/images/before_greyscale.jpeg';

const Hero = () => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        setFadeOut(true)
    }, []);

    return (
        <div className='w-full h-screen relative text-white'>
            <img src={before} className='top-0 left-0 w-full h-screen object-cover absolute z-10 ease-in opacity-100 duration-[3s]' style={fadeOut ? { opacity: '0', transitionDelay: '1s' } : { opacity: '100' }} />
            <img src={after} className='top-0 left-0 w-full h-screen object-cover absolute' />
            <div className='bg-black/10 absolute top-0 w-full h-screen'></div>
            <div className='absolute top-0 w-full h-full flex flex-col justify-center items-center z-20'>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <h1 className='text-white text-5xl'>Renovate Your Home</h1>
                    <p className='text-gray-400 text-lg'>Handyman</p>
                    <button className='bg-slate-200/30 text-black hover:bg-white ease-in duration-300'>Call for Estimates</button>
                </div>
            </div>
        </div>
    )
}

export default Hero