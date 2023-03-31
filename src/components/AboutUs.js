import React from 'react';
import { ReactComponent as Logo } from '../assets/logo/logo.svg';

const AboutUs = () => {
    return (
        <div className='text-center flex flex-col lg:flex-row gap-4 justify-center items-center py-24 px-4 md:px-48 text-black bg-white'>
            <div className='flex flex-col justify-center items-center gap-4'>
                <h1 className='text-4xl text-red-800 font-bold'>About Us</h1>
                <p className='text-2xl'>A small town handyman. Locally Owned and operated. Serving Brownstown, Seymour, Columbus, and surrounding area.</p>
            </div>
            <Logo className='p-8 md:p-0' />
        </div>
    )
}

export default AboutUs