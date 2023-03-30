import React from 'react';
import { BsTelephone } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
    const isScreenSmall = window.innerWidth < 768;

    return (
        <div className='w-full bg-black border-t-4 border-black flex flex-col items-center justify-center gap-24 sm:gap-12 px-16 min-h-[20vh] text-gray-400 py-20'>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-8'>
                <a href={isScreenSmall ? "tel:8125251307" : '/contact'} className='flex items-center justify-center gap-4 hover:text-white cursor-pointer'><BsTelephone size={25} /><h1> Call Us</h1></a>
                <a href='/contact' className='flex items-center justify-center gap-4 hover:text-white cursor-pointer'><FiMail size={25} /><h1> Email Us</h1></a>
            </div>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-8'>
                <a href='/' className='hover:text-white'><h1>About Us</h1></a>
                <a href='/services' className='hover:text-white'><h1>Our Services</h1></a>
                <a href='/gallery' className='hover:text-white'><h1>Gallery</h1></a>
            </div>
        </div>
    )
}

export default Footer