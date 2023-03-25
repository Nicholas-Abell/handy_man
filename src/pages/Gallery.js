import React from 'react'

import deck2 from '../assets/images/deck_1.jpg';
import cabinet from '../assets/images/shelving_1.jpg';
import awning1 from '../assets/images/awning.jpg';
import pathWay1 from '../assets/images/pathway_1.jpg';
import bench from '../assets/images/bench.jpg';
import patio from '../assets/images/patio.jpg';
import BeforeAfter from '../components/BeforeAfter';

const Gallery = () => {
  return (
    <>
      <div className='grid grid-rows-6 lg:grid-rows-12 grid-cols-2 lg:grid-cols-3 gap-4 h-[80vh] p-4'>
        <img src={deck2} className='row-span-3 lg:row-span-4 object-cover w-full h-full' />
        <img src={bench} className='row-span-4 object-cover w-full h-full' />
        <img src={pathWay1} className='row-span-5 lg:row-span-6 object-cover w-full h-full' />
        <img src={patio} className='row-span-6 object-cover w-full h-full' />
        <img src={awning1} className='row-span-5 hidden lg:block object-cover w-full h-full' />
      </div>
    </>
  )
}

export default Gallery