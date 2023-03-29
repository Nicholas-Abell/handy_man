import React from 'react';
import Card from '../components/Card';
import cabinet from '../assets/images/shelving_1.jpg';
import awning1 from '../assets/images/awning.jpg';
import patio from '../assets/images/patio.jpg';
import parallax from '../assets/images/parallax.jpg';
import deck2 from '../assets/images/deck_1.jpg';

const CardHolder = () => {
    return (
        <div className='w-full relative border-black border-t-4 border-b-4 bg-black py-8 px-[20px] lg:px-4 flex flex-wrap items-center justify-center gap-4 lg:gap-12 lg:bg-fixed bg-center bg-no-repeat bg-cover'
            style={{
                backgroundImage: `url(${parallax})`,
            }}>
            <Card title={'PATIOS'} img={patio} />
            <Card title={'AWNINGS'} img={awning1} />
            <Card title={'DECKS'} img={deck2} />
            <Card title={'CABINENTS'} img={cabinet} />
        </div>
    )
}

export default CardHolder