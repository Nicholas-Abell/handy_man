import React, { useState, useRef, useEffect } from 'react';
import images from '../assets/images/images.js';

const ExteriorInterior = () => {
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
        <>
            <div className='w-full flex bg-red-800'>
                <div className='flex justify-center items-center w-full'>
                    <h2 ref={ref1} className={`text-white text-3xl sm::text-4xl md:text-6xl ${isInView1 ? "slide-in-bottom" : "invisible"
                        } transition-all duration-1000 ease-out opacity-0 translate-x-[-80px]`}>EXTERIOR</h2>
                </div>
                <div className='flex flex-col justify-center items-center w-full'>
                    <img src={pipe} className='h-full w-auto object-cover' alt='pipe' />
                </div>
            </div>
            <div className='w-full flex bg-red-800'>
                <div className='flex flex-col justify-center items-center w-full'>
                    <img src={after} className='h-full w-auto object-fit' alt='interior' />
                </div>
                <div className='flex justify-center items-center w-full'>
                    <h2 ref={ref2} className={`text-white text-3xl sm::text-4xl md:text-6xl ${isInView2 ? "slide-in-bottom" : "invisible"
                        } transition-all duration-1000 ease-out opacity-0 translate-x-[80px]`}>INTERIOR</h2>
                </div>
            </div>
            <div className='text-center flex flex-col gap-4 justify-center items-center py-24 px-4 md:px-48 text-black bg-white'>
                <h2 className='text-4xl text-red-800 font-bold'>Contact Us Today</h2>
                <p className='text-2xl'>For a free estimate.</p>
            </div>
        </>
    )
}

export default ExteriorInterior