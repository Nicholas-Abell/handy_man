import React, { useRef, useState, useEffect } from 'react';
import Hero from '../components/Hero';
//images
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';
import CardHolder from '../components/CardHolder';
import deck2 from '../assets/images/deck_1.jpg';
//icona
import { TfiRulerPencil } from 'react-icons/tfi';

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
            <div className='bg-white w-full flex flex-col justify-center items-center py-24 gap-32'>
                <div className='text-center'>
                    <h1 className='font-bold text-3xl p-4'>Any Project for Your Home</h1>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam est ipsa</p>
                </div>
                <div className='flex flex-col md:flex-row justify-between items-center gap-24 w-full md:w-[50%]'>
                    <div className=' flex flex-wrap justify-center items-center gap-4'>
                        <TfiRulerPencil size={50} />
                        <div>
                            <h2 className='font-bold'>Custom Designs</h2>
                            <p>For your home, lawn, or garden</p>
                        </div>
                    </div>
                    <div className=' flex flex-wrap justify-center items-center gap-4'>
                        <TfiRulerPencil size={50} />
                        <div>
                            <h2 className='font-bold'>Custom Designs</h2>
                            <p>For your home, lawn, or garden</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row justify-between items-center gap-24 w-full md:w-[50%]'>
                    <div className=' flex flex-wrap justify-center items-center gap-4'>
                        <TfiRulerPencil size={50} />
                        <div>
                            <h2 className='font-bold'>Custom Designs</h2>
                            <p>For your home, lawn, or garden</p>
                        </div>
                    </div>
                    <div className=' flex flex-wrap justify-center items-center gap-4'>
                        <TfiRulerPencil size={50} />
                        <div>
                            <h2 className='font-bold'>Custom Designs</h2>
                            <p>For your home, lawn, or garden</p>
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