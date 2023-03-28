import React from 'react';

//images
import deck2 from '../assets/images/deck_1.jpg';
import cabinet from '../assets/images/shelving_1.jpg';
import awning1 from '../assets/images/awning.jpg';
import pathWay1 from '../assets/images/pathway_1.jpg';
import bench from '../assets/images/bench.jpg';
import patio from '../assets/images/patio.jpg';
import shelving from '../assets/images/shelving_2.jpg';
import railing from '../assets/images/railing.jpg';
import pipe from '../assets/images/pipe.jpg';
import machinery from '../assets/images/machinery.jpg';
import awning2 from '../assets/images/awning_2.jpg';
import after from '../assets/images/after.jpg';


const Gallery = () => {
  return (
    <>
      <div className='w-full min-h-[40vh] bg-red-800 text-white flex justify-center items-center'>
        <h1 className='text-5xl lg:text-8xl'>Gallery</h1>
      </div>
      <div className='w-full grid grid-cols-2 lg:grid-cols-3 gap-4 pt-4 px-4'>
        <img src={after} className='w-full h-auto object-cover rounded-lg' />
        <img src={bench} className='w-full h-auto object-cover rounded-lg' />
        <img src={pathWay1} className='w-full h-auto object-cover rounded-lg' />
        <img src={patio} className='w-full h-auto object-cover rounded-lg' />
        <img src={shelving} className='w-full h-auto object-cover rounded-lg' />
        <img src={railing} className='w-full h-auto object-cover rounded-lg' />
        <img src={cabinet} className='w-full h-auto object-cover rounded-lg' />
        <img src={machinery} className='w-full h-auto object-cover rounded-lg' />
        <img src={pipe} className='w-full h-auto object-cover rounded-lg' />
        <img src={awning2} className='w-full h-auto object-cover rounded-lg' />
        <img src={awning1} className='w-full h-auto object-cover rounded-lg row-span-1 col-span-1' />
        <img src={deck2} className='w-full h-auto object-cover rounded-lg row-span-1 col-span-1' />
      </div>
    </>
  );
};

export default Gallery;
