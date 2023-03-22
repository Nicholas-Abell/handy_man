import React from 'react'

const Hero = () => {
    return (
        <div className='w-full h-screen'>
            <img src='' className='top-0 left-0 w-full h-screen object-cover' />
            <div className='bg-black/30 absolute top-0 w-full h-screen'></div>
            <div className='absolute top-0 w-full h-full flex flex-col justify-center items-center'>
                <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
                    <h1>Steve</h1>
                    <p>Handyman</p>
                    <button>Call for Estimates</button>
                </div>
            </div>
        </div>
    )
}

export default Hero