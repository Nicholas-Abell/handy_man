import React from 'react';
import after from '../assets/images/after.jpg';

const Hero = () => {
    return (
        <div className='w-full h-screen text-white'>
            <img src={after} className='top-0 left-0 w-full h-screen object-cover' />
            <div className='bg-black/50 absolute top-0 w-full h-screen'></div>
            <div className='absolute top-0 w-full h-full flex flex-col justify-center items-center'>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <h1 className='text-white text-5xl'>Steve Shelton</h1>
                    <p className='text-gray-400 text-lg'>Handyman</p>
                    <button className='bg-slate-200/30 text-black hover:bg-white ease-in duration-300'>Call for Estimates</button>
                </div>
            </div>
        </div>
    )
}

export default Hero