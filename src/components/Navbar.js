import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { BsTelephone } from 'react-icons/bs';


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [showNumber, setShowNumber] = useState(false);

    const handleCopyClick = () => {
        navigator.clipboard.writeText('812-525-1307');
    };

    return (
        <>
            <div className='fixed w-full flex justify-between items-center p-4 z-[999] bg-gradient-to-b from-black to-black/20 text-white md:hidden'>
                <div className='flex items-center justify-center gap-4'>
                    <a href="tel:8125251307"><BsTelephone size={25} className='cursor-pointer hover:text-green-400' /></a>
                    <div className='relative text-center rounded-full bg-red-800 p-4 w-[20px] h-[20px] border border-black'>
                        <div className='rounded-full w-[5px] h-[5px] bg-red-500 absolute left-2 top-2 z-10'></div>
                        <h1 className='absolute bottom-[-1] left-0'>SMS</h1>
                    </div>
                </div>
                <HiMenuAlt3 onClick={() => setNav(!nav)} size={25} className='z-50 cursor-pointer' />
                <div className={nav ? 'fixed w-full h-screen left-0 top-0 flex flex-col z-10 duration-500 ease-in-out' : 'absolute top-0 h-screen left-[-100%] ease-in-out duration-500'}>
                    <ul className='flex w-full h-full bg-black/90 flex-col z-10 items-center justify-center gap-12'>
                        <li className='font-bold text-gray-400 text-3xl cursor-pointer hover:text-white'><a href='/'>Home</a></li>
                        <li className='font-bold text-gray-400 text-3xl cursor-pointer hover:text-white'><a href='/services'>Services</a></li>
                        <li className='font-bold text-gray-400 text-3xl cursor-pointer hover:text-white'><a href='/gallery'>Gallery</a></li>
                        <li className='font-bold text-gray-400 text-3xl cursor-pointer hover:text-white'><a href='/contact'>Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className='fixed w-full justify-between items-center p-4 z-[999] bg-gradient-to-b from-black to-black/20 text-white hidden md:flex'>
                <div className='relative text-center rounded-full bg-red-800 p-4 w-[20px] h-[20px] border border-black'>
                    <div className='rounded-full w-[5px] h-[5px] bg-red-500 absolute left-2 top-2 z-10'></div>
                    <h1 className='absolute bottom-[-1] left-0'>SMS</h1>
                </div>
                <ul className='flex w-full z-10 items-center justify-center gap-12'>
                    <li className='font-bold text-gray-400 text-3xl cursor-pointer hover:text-white'><a href='/'>Home</a></li>
                    <li className='font-bold text-gray-400 text-3xl cursor-pointer hover:text-white'><a href='/services'>Services</a></li>
                    <li className='font-bold text-gray-400 text-3xl cursor-pointer hover:text-white'><a href='/gallery'>Gallery</a></li>
                    <li className='font-bold text-gray-400 text-3xl cursor-pointer hover:text-white'><a href='/contact'>Contact</a></li>
                </ul>
                {!showNumber
                    ? <BsTelephone size={25} onClick={() => setShowNumber(true)} className='cursor-pointer hover:text-green-400' />
                    : <h2 onClick={handleCopyClick} className='whitespace-nowrap cursor-pointer hover:text-green-400'>812-525-1307</h2>
                }
            </div>
        </>
    )
}

export default Navbar;