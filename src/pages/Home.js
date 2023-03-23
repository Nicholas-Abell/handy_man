import React from 'react';
import Hero from '../components/Hero';
import deck2 from '../assets/images/deck_2.jpg';
import awning1 from '../assets/images/awning.jpg';
import pathWay1 from '../assets/images/pathway_1.jpg';
import bench from '../assets/images/bench.jpg';
import patio from '../assets/images/patio.jpg';

const Home = () => {
    return (
        <>
            <Hero />
            <div className='grid grid-rows-6 grid-cols-2 lg:grid-cols-3 gap-4 h-[80vh] p-4'>
                <img src={deck2} className='row-span-3 object-cover w-full h-full' />
                <img src={bench} className='row-span-4 object-cover w-full h-full' />
                <img src={pathWay1} className='row-span-5 object-cover w-full h-full' />
                <img src={patio} className='row-span-4 object-cover w-full h-full' />
            </div>

        </>
    )
}

export default Home