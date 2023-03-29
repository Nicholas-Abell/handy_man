import React, { useRef, useState, useEffect } from 'react';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import CardHolder from '../components/CardHolder';
import IconBanner from '../components/IconBanner';
import images from '../assets/images/images.js';

const Home = () => {
    const { pipe, after } = images;
    const [isInView1, setIsInView1] = useState(false);
    const [isInView2, setIsInView2] = useState(false);
    const ref1 = useRef(null);
    const ref2 = useRef(null);

    useEffect(() => {
        const observer1 = new IntersectionObserver(
            ([entry]) => {
                setIsInView1(entry.isIntersecting);
            },
            { threshold: 0.5 }
        );
        observer1.observe(ref1.current);

        const observer2 = new IntersectionObserver(
            ([entry]) => {
                setIsInView2(entry.isIntersecting);
            },
            { threshold: 0.5 }
        );
        observer2.observe(ref2.current);
    }, []);

    return (
        <main className='overflow-hidden'>
            <Hero />
            <AboutUs />
            <CardHolder />
            <IconBanner />
            <div className='w-full flex bg-red-800'>
                <div className='flex justify-center items-center w-full'>
                    <h1 ref={ref1} className={`text-white text-4xl md:text-6xl ${isInView1 ? "slide-in-bottom" : "invisible"
                        } transition-all duration-1000 ease-out opacity-0 translate-x-[-80px]`}>Exterior</h1>
                </div>
                <div className='flex flex-col justify-center items-center w-full'>
                    <img src={pipe} className='h-full object-cover' />
                </div>
            </div>
            <div className='w-full flex bg-red-800'>
                <div className='flex flex-col justify-center items-center w-full'>
                    <img src={after} className='h-full object-fit' />
                </div>
                <div className='flex justify-center items-center w-full'>
                    <h1 ref={ref2} className={`text-white text-4xl md:text-6xl ${isInView2 ? "slide-in-bottom" : "invisible"
                        } transition-all duration-1000 ease-out opacity-0 translate-x-[80px]`}>Interior</h1>
                </div>
            </div>
            <div className='text-center flex flex-col gap-4 justify-center items-center py-24 px-4 md:px-48 text-black bg-white'>
                <h1 className='text-4xl text-red-800 font-bold'>Contact Us Today</h1>
                <p className='text-2xl'>For a free estimate.</p>
            </div>
        </main>
    )
}

export default Home