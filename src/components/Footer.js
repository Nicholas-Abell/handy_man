import React from 'react';
import { BsTelephone } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';


const Footer = () => {
    return (
        <div className='w-full bg-black border-t-4 border-black flex flex-col items-center justify-center gap-12 px-16 min-h-[20vh] text-gray-400 py-12'>
            <div className='flex items-center justify-center gap-8'>
                <a className='flex items-center justify-center gap-4 hover:text-white cursor-pointer'><BsTelephone size={25} /><h1> Call Us</h1></a>
                <a className='flex items-center justify-center gap-4 hover:text-white cursor-pointer'><FiMail size={25} /><h1> Email Us</h1></a>
            </div>
            <div className='flex items-center justify-center gap-8'>
                <h1>About Us</h1>
                <h1>Our Services</h1>
                <h1>Gallery</h1>
            </div>

        </div>
    )
}

export default Footer