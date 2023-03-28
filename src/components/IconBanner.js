import React from 'react';

//icons
import { TfiRulerPencil } from 'react-icons/tfi';
import { FaPeopleCarry } from 'react-icons/fa';
import { MdOutlineFamilyRestroom } from 'react-icons/md';
import { IoIosConstruct } from 'react-icons/io';

const IconBanner = () => {
    return (
        <div className='bg-white w-full flex flex-col justify-center items-center lg:px-48 py-24 gap-24'>
            <div className='text-center'>
                <h1 className='font-bold text-3xl p-4'>Any Project for Your Home</h1>
                <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam est ipsa</p>
            </div>
            <div className='flex flex-col md:flex-row gap-24 md:gap-0 items-center justify-center w-full'>
                <div className='flex flex-col gap-24 w-full'>
                    <div className='w-full flex flex-wrap pl-[25%] md:p-0 md:justify-center items-center gap-4'>
                        <TfiRulerPencil size={50} className='text-red-800' />
                        <div>
                            <h2 className='font-bold text-2xl'>Custom Designs</h2>
                            <p>For your home, lawn, or garden.</p>
                        </div>
                    </div>
                    <div className='w-full flex flex-wrap pl-[25%] md:p-0 md:justify-center items-center gap-4'>
                        <FaPeopleCarry size={50} className='text-red-800' />
                        <div>
                            <h2 className='font-bold text-2xl'>No Job Too Small</h2>
                            <p>Job not listed? Just ask</p>
                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-col gap-24'>
                    <div className='w-full flex flex-wrap pl-[25%] md:p-0 md:justify-center items-center gap-4'>
                        <MdOutlineFamilyRestroom size={50} className='text-red-800' />
                        <div>
                            <h2 className='font-bold text-2xl'>Family Owned</h2>
                            <p>Husband & Wife duo</p>
                        </div>
                    </div>
                    <div className='w-full flex pl-[25%] md:p-0 md:justify-center items-center gap-4'>
                        <IoIosConstruct size={50} className='text-red-800' />
                        <div>
                            <h2 className='font-bold text-2xl'>Quality</h2>
                            <p>That lasts a lifetime.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default IconBanner