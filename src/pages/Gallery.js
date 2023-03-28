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
        <img src={after} className='w-full h-auto object-cover rounded-lg border-4 border-black' />
        <img src={bench} className='w-full h-auto object-cover rounded-lg border-4 border-black' />
        <img src={pathWay1} className='w-full h-auto object-cover rounded-lg border-4 border-black' />
        <img src={patio} className='w-full h-auto object-cover rounded-lg border-4 border-black' />
        <img src={shelving} className='w-full h-auto object-cover rounded-lg border-4 border-black' />
        <img src={railing} className='w-full h-auto object-cover rounded-lg border-4 border-black' />
        <img src={cabinet} className='w-full h-auto object-cover rounded-lg border-4 border-black' />
        <img src={machinery} className='w-full h-auto object-cover rounded-lg border-4 border-black' />
        <img src={pipe} className='w-full h-auto object-cover rounded-lg border-4 border-black' />
        <img src={awning2} className='w-full h-auto object-cover rounded-lg border-4 border-black' />
        <img src={deck2} className='w-full h-auto object-cover rounded-lg row-span-1 col-span-1 border-4 border-black' />
        <img src={awning1} className='w-full h-auto object-cover rounded-lg row-span-1 col-span-1 border-4 border-black' />
      </div>
    </>
  );
};

export default Gallery;
