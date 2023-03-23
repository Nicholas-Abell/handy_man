import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    return (
        //screenSmall ?
        <div className='absolute w-full flex justify-between items-center p-4 z-10 text-white'>
            <h1>SMS</h1>
            <HiMenuAlt3 onClick={() => setNav(!nav)} size={25} className='z-50 cursor-pointer' />
            <div className={nav ? 'fixed w-full h-screen left-0 top-0 flex flex-col z-10 duration-500 ease-in-out' : 'absolute top-0 h-screen left-[-100%] ease-in-out duration-500'}>
                <ul className='flex w-full h-full bg-black/80 flex-col z-10 items-center justify-center gap-12'>
                    <li className='font-bold text-gray-400 text-3xl cursor-pointer hover:text-white'>Home</li>
                    <li className='font-bold text-gray-400 text-3xl cursor-pointer hover:text-white'>Services</li>
                    <li className='font-bold text-gray-400 text-3xl cursor-pointer hover:text-white'>Contact</li>
                </ul>
            </div>
        </div>
        // :
        // <div className='absolute w-full flex justify-between items-center p-4 z-10 text-white'>
        //     <h1>SMS</h1>
        //         <ul className='flex w-full z-10 items-center justify-center gap-12'>
        //             <li className='font-bold text-gray-400 text-3xl cursor-pointer hover:text-white'>Home</li>
        //             <li className='font-bold text-gray-400 text-3xl cursor-pointer hover:text-white'>Services</li>
        //             <li className='font-bold text-gray-400 text-3xl cursor-pointer hover:text-white'>Contact</li>
        //         </ul>
        // </div>
    )
}

export default Navbar