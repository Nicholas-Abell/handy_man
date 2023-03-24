import React, { useRef, useEffect, useState } from 'react';
import ReactCompareImage from 'react-compare-image';
import before from '../assets/images/before_greyscale.jpeg';
import after from '../assets/images/after.jpg';

const BeforeAfter = () => {
  return (
    <>
      <div className='relative w-full lg:w-[50%] h-[80vh] overflow-hidden border border-red-500 object-cover'>
        <div className='bg-slate-400/50 absolute top-0 left-0 z-50 py-2 px-4 font-bold'>
          <h1 className='text-2xl'>BEFORE</h1>
        </div>
        <ReactCompareImage
          leftImage={before}
          rightImage={after}
          rightImageCss={{ height: '100vh', objectFit: 'cover' }}
          leftImageCss={{ height: '100vh', objectFit: 'cover' }}
          hover={true}
        />;
        <div className='bg-slate-400/50 absolute top-0 right-0 z-50 py-2 px-4 font-bold'>
          <h1 className='text-2xl'>AFTER</h1>
        </div>
      </div>
    </>
  )
}

export default BeforeAfter;

