import React, { useState } from 'react';

const Contact = () => {
    return (
        <div className='bg-red-800 w-full'>
            <div className='w-full h-[40vh] flex justify-center items-center text-white'>
                <h1 className='text-5xl lg:text-8xl'>Contact Us</h1>
            </div>
            <div className="px-4 pb-24 max-w-[800px] mx-auto min-h-[500px]">
                <form action="https://formsubmit.co/your@email.com" method="POST">
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-2 font-bold text-white">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 font-bold text-white">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block mb-2 font-bold text-white">
                            Phone
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block mb-2 font-bold text-white">
                            Message
                        </label>
                        <textarea
                            id="message"
                            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            rows="5"
                            required
                        ></textarea>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className='px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-blue-500 focus:ring-offset-blue-200'>
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
