import React from 'react';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
// import before from '../assets/images/before.jpg';
// import after from '../assets/images/after.jpg';

const BeforeAfter = () => {
  return (
    <>
      <div className='w-full h-[800px]'>
        <ReactBeforeSliderComponent
          firstImage={'https://ibb.co/0JCsLT2.jpg'}
          secondImage={'https://ibb.co/0JCsLT2.jpg'}
          className='w-full h-36'
        />
      </div>
    </>
  )
}

export default BeforeAfter;

