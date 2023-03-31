import React from 'react';
import { GiWoodBeam, GiGreenhouse } from 'react-icons/gi';
import { BsLightbulb } from 'react-icons/bs';
import { AiOutlineFormatPainter } from 'react-icons/ai';

const Services = () => {
  return (
    <div className='bg-red-800 w-full'>
      <div className='w-full h-[40vh] flex justify-center items-center text-white'>
        <h1 className='text-5xl lg:text-8xl'>Our Services</h1>
      </div>
      <div className='bg-red-800 w-full pb-24 flex justify-center items-center gap-8 flex-wrap'>
        <div className='bg-white w-[350px] h-[350px] rounded-lg flex flex-col items-center justify-center p-4 gap-4'>
          <div className='flex flex-col items-center justify-center'>
            <GiWoodBeam size={80} className='text-white bg-red-800 rounded-full p-2 border-black border-4' />
            <h1 className='text-3xl font-bold'>Carpentry</h1>
          </div>
          <div className='w-full flex items-center justify-between text-lg whitespace-nowrap list-disc px-8'>
            <ul className=' list-disc'>
              <li>Furniture</li>
              <li>Fences</li>
              <li>Decks</li>
              <li>Tables</li>
            </ul>
            <ul className=' list-disc'>
              <li>Shelves</li>
              <li>Cabinents</li>
              <li>Benches</li>
              <li>Flooring</li>
            </ul>
          </div>
        </div>
        <div className='bg-white w-[350px] h-[350px] rounded-lg flex flex-col items-center justify-center gap-4'>
          <div className='flex flex-col items-center justify-center'>
            <AiOutlineFormatPainter size={80} className='text-white bg-red-800 rounded-full p-2 border-black border-4' />
            <h1 className='text-3xl font-bold'>Interior</h1>
          </div>
          <div className='w-full flex items-center justify-between text-lg whitespace-nowrap list-disc px-8'>
            <ul className=' list-disc'>
              <li>Light Painting</li>
              <li>Floors</li>
              <li>Walls</li>
              <li>Doors</li>
            </ul>
            <ul className=' list-disc'>
              <li>Windows</li>
              <li>Locks</li>
              <li>Tables</li>
            </ul>
          </div>
        </div>
        <div className='bg-white w-[350px] h-[350px] rounded-lg flex flex-col items-center justify-center pt-8'>
          <div className='flex flex-col items-center justify-center'>
            <GiGreenhouse size={80} className='text-white bg-red-800 rounded-full p-2 border-black border-4' />
            <h1 className='text-3xl font-bold'>Exterior</h1>
          </div>
          <div className='w-full flex items-center justify-center text-lg whitespace-nowrap list-disc px-8'>
            <ul className=' list-disc space-y-[-5px]'>
              <li>Landscaping</li>
              <li>Gutter Cleaning</li>
              <li>Weed Removal</li>
              <li>Pressure Washing</li>
              <li>Mowing</li>
              <li>Tree Removal</li>
              <li>Pathways</li>
            </ul>
          </div>
        </div>
        <div className='bg-white w-[350px] h-[350px] rounded-lg flex flex-col items-center justify-center gap-4'>
          <div className='flex flex-col items-center justify-center'>
            <BsLightbulb size={80} className='text-white bg-red-800 rounded-full p-2 border-black border-4' />
            <h1 className='text-3xl font-bold'>Appliances</h1>
          </div>
          <div className='w-full flex items-center justify-center text-lg whitespace-nowrap list-disc px-8'>
            <ul className=' list-disc'>
              <li>Light Bulb Replacement</li>
              <li>Basic HVAC Maintenance </li>
              <li>T.V. Mounting</li>
              <li>Smart Home Installations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services