import React from 'react'

const Card = ({ img, title }) => {
    return (
        <div className='bg-[#BFBFBF] border-black border-4 rounded-lg h-[250px] w-[250px] cursor-pointer hover:shadow-lg'>
            <div className=' rounded w-full h-[70%]'
                style={{
                    backgroundImage: `url(${img})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}>
            </div>
            <div className='w-full h-[30%] flex justify-center items-center'>
                <h2 className='text-2xl font-bold '>{title}</h2>
            </div>
        </div>
    )
}

export default Card;