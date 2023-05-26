import React from 'react';
import images from '../assets/images/images.js';

const Gallery = () => {
  const { deck2, cabinet, awning1, pathWay1, bench, patio, shelving, railing, pipe, machinery, awning2, after } = images;
  return (
    <>
      <div className='w-full min-h-[40vh] bg-red-800 text-white flex justify-center items-center'>
        <h1 className='text-5xl lg:text-8xl'>Gallery</h1>
      </div>
      <div className='w-full grid grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
        <img src={after} alt='interior design' className='w-full h-auto object-cover rounded-lg border-4 border-black' />
        <img sharp src={bench} alt='bench' className='w-full h-auto object-cover rounded-lg border-4 border-black' />
        <img sharp src={pathWay1} alt='pathway1' className='w-full h-auto object-cover rounded-lg border-4 border-black' />
        <img sharp src={patio} alt='patio' className='w-full h-auto object-cover rounded-lg border-4 border-black' />
        <img sharp src={shelving} alt='shelving' className='w-full h-auto object-cover rounded-lg border-4 border-black' />
        <img sharp src={railing} alt='railing' className='w-full h-auto object-cover rounded-lg border-4 border-black' />
        <img sharp src={cabinet} alt='cabinent' className='w-full h-auto object-cover rounded-lg border-4 border-black' />
        <img sharp src={machinery} alt='machinery' className='w-full h-auto object-cover rounded-lg border-4 border-black' />
        <img sharp src={pipe} alt='landscaping' className='w-full h-auto object-cover rounded-lg border-4 border-black' />
        <img sharp src={awning2} alt='awning2' className='w-full h-auto object-cover rounded-lg border-4 border-black' />
        <img sharp src={deck2} alt='deck2' className='w-full h-auto object-cover rounded-lg row-span-1 col-span-1 border-4 border-black' />
        <img sharp src={awning1} alt='awning1' className='w-full h-auto object-cover rounded-lg row-span-1 col-span-1 border-4 border-black' />
      </div>
    </>
  );
};

export default Gallery;
