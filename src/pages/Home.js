import React, { useRef, useState, useEffect } from 'react';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import CardHolder from '../components/CardHolder';
import IconBanner from '../components/IconBanner';
import ExteriorInterior from '../components/ExteriorInterior';

const Home = () => {
    return (
        <main className='overflow-hidden'>
            <Hero />
            <AboutUs />
            <CardHolder />
            <IconBanner />
            <ExteriorInterior />
        </main>
    )
}

export default Home