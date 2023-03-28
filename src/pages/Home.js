import React, { useRef, useState, useEffect } from 'react';
import Hero from '../components/Hero';
//images
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';
import CardHolder from '../components/CardHolder';
import deck2 from '../assets/images/deck_1.jpg';
//icons
import { TfiRulerPencil } from 'react-icons/tfi';
import { FaPeopleCarry } from 'react-icons/fa';
import { MdOutlineFamilyRestroom } from 'react-icons/md';
import { IoIosConstruct } from 'react-icons/io';

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
            <AboutUs />
            <CardHolder />
            <div className='bg-white w-full flex flex-col justify-center items-center py-24 gap-24'>
                <div className='text-center'>
                    <h1 className='font-bold text-3xl p-4'>Any Project for Your Home</h1>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam est ipsa</p>
                </div>
                <div className='flex flex-col md:flex-row gap-24 items-center justify-center w-full'>
                    <div className='flex flex-col justify-between items-center gap-24 w-full'>
                        <div className='w-full flex flex-wrap pl-[25%] md:p-0 md:justify-center items-center gap-4'>
                            <TfiRulerPencil size={50} />
                            <div>
                                <h2 className='font-bold text-2xl'>Custom Designs</h2>
                                <p>For your home, lawn, or garden.</p>
                            </div>
                        </div>
                        <div className='w-full flex flex-wrap pl-[25%] md:p-0 md:justify-center items-center gap-4'>
                            <FaPeopleCarry size={50} />
                            <div>
                                <h2 className='font-bold text-2xl'>Custom Designs</h2>
                                <p>For your home, lawn, or garden</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-col justify-between items-center gap-24'>
                        <div className='w-full flex flex-wrap pl-[25%] md:p-0 md:mr-16 md:justify-center items-center gap-4'>
                            <MdOutlineFamilyRestroom size={50} />
                            <div>
                                <h2 className='font-bold text-2xl'>Family Owned</h2>
                                <p>Husband & Wife duo</p>
                            </div>
                        </div>
                        <div className='w-full flex flex-wrap pl-[25%] md:p-0 md:justify-center items-center gap-4'>
                            <IoIosConstruct size={50} />
                            <div>
                                <h2 className='font-bold text-2xl'>Quality</h2>
                                <p>That lasts</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex' >
                <div className='flex justify-center items-center w-[50%]'>
                    <h1 ref={ref1} className={`${isInView1 ? "slide-in-bottom" : "invisible"
                        } transition-all duration-1000 ease-out opacity-0 translate-x-[-80px]`}>Exterior</h1>
                </div>
                <div className='flex flex-col justify-center items-center w-[50%]'>
                    <img src={deck2} className='h-full object-cover' />
                </div>
            </div>
            <div className='w-full flex bg-[#BFBFBF]'>
                <div className='flex flex-col justify-center items-center w-[50%]'>
                    <img src={deck2} className='h-full object-cover' />
                </div>
                <div className='flex justify-center items-center w-[50%]'>
                    <h1 ref={ref2} className={`${isInView2 ? "slide-in-bottom" : "invisible"
                        } transition-all duration-1000 ease-out opacity-0 translate-x-[80px]`}>Interior</h1>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home