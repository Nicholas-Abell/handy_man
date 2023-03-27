import React, { useRef, useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Card from '../components/Card';

//images
import deck2 from '../assets/images/deck_1.jpg';
import cabinet from '../assets/images/shelving_1.jpg';
import awning1 from '../assets/images/awning.jpg';
import patio from '../assets/images/patio.jpg';
import Footer from '../components/Footer';
import parallax from '../assets/images/parallax.jpg';
import AboutUs from '../components/AboutUs';

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
            <div className='w-full relative border-black border-t-4 border-b-4 bg-black py-8 px-[20px] lg:px-4 flex flex-wrap items-center justify-center gap-4'
                style={{
                    backgroundImage: `url(${parallax})`,
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}>
                <Card title={'PATIO'} img={patio} />
                <Card title={'AWNINGS'} img={awning1} />
                <Card title={'DECKS'} img={deck2} />
                <Card title={'CABINENTS'} img={cabinet} />
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