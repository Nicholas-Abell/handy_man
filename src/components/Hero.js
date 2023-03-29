import React, { useEffect, useState } from 'react';
import after from '../assets/images/after.jpg';
import before from '../assets/images/before_greyscale.jpeg';

const Hero = () => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        setFadeOut(true)
    }, []);

    return (
        <div className='w-full h-screen relative text-white lg:bg-fixed bg-center bg-no-repeat bg-cover'
            style={{
                backgroundImage: `url(${after})`,
            }}>
            <img src={before} className='top-0 left-0 w-full h-screen object-cover absolute z-10 ease-in opacity-100 duration-[3s]' style={fadeOut ? { opacity: '0', transitionDelay: '1s' } : { opacity: '100' }} />
            <div className='bg-black/10 absolute top-0 w-full h-screen'></div>
            <div className='absolute top-0 w-full h-full flex flex-col justify-center items-center z-20'>
                <div className='flex flex-col items-center justify-center gap-8 bg-red-900/70 p-4 md:p-12 rounded-3xl min-w-[250px] md:min-w-[500px] lg::min-w-[600px]'>
                    <h1 className='text-white text-lg md:text-3xl lg:text-7xl'>Transform Your Home</h1>
                    <button className='bg-white/30 text-black hover:bg-white hover:text-red-800 ease-in duration-300'>Contact us Today</button>
                </div>
            </div>
        </div>
    )
}

export default Hero