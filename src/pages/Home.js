import React, { useRef, useState, useEffect } from 'react';
import Hero from '../components/Hero';
import deck2 from '../assets/images/deck_1.jpg';
import awning1 from '../assets/images/awning.jpg';
import pathWay1 from '../assets/images/pathway_1.jpg';
import bench from '../assets/images/bench.jpg';
import patio from '../assets/images/patio.jpg';
import BeforeAfter from '../components/BeforeAfter';

const Home = () => {
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
        <>
            <Hero />
            <div className='w-full flex bg-slate-300'>
                <div className='flex justify-center items-center w-[50%]'>
                    <h1 ref={ref1} className={`${isInView1 ? "slide-in-bottom" : "invisible"
                        } transition-all duration-1000 ease-out opacity-0 translate-x-[-80px]`}>Interior</h1>
                </div>
                <div className='flex flex-col justify-center items-center w-[50%]'>
                    <img src={deck2} className='h-full object-cover' />
                </div>
            </div>
            <div className='w-full flex bg-slate-300'>
                <div className='flex flex-col justify-center items-center w-[50%]'>
                    <img src={deck2} className='h-full object-cover' />
                </div>
                <div className='flex justify-center items-center w-[50%]'>
                    <h1 ref={ref2} className={`${isInView2 ? "slide-in-bottom" : "invisible"
                        } transition-all duration-1000 ease-out opacity-0 translate-x-[80px]`}>Exterior</h1>
                </div>
            </div>

            <BeforeAfter />
            <div className='grid grid-rows-6 lg:grid-rows-7 grid-cols-2 lg:grid-cols-3 gap-4 h-[80vh] p-4'>
                <img src={deck2} className='row-span-3 lg:row-span-2 object-cover w-full h-full' />
                <img src={bench} className='row-span-4 object-cover w-full h-full' />
                <img src={pathWay1} className='row-span-5 lg:row-span-6 object-cover w-full h-full' />
                <img src={patio} className='row-span-4 object-cover w-full h-full' />
                <img src={awning1} className='row-span-2 hidden lg:block object-cover w-full h-full' />
            </div>
        </>
    )
}

export default Home