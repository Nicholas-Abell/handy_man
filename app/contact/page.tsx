"use client";
import React from "react";

//iconsgit a
import { BsMailbox } from "react-icons/bs";
import { HiDevicePhoneMobile } from "react-icons/hi2";

//phone#@vtext.com verizon
//phone#@txt.att.net at&t

const Contact = () => {
  return (
    <div className="bg-red-800 w-full">
      <div className="w-full h-[40vh] flex justify-center items-center text-white">
        <h1 className="text-5xl lg:text-8xl">Contact Us</h1>
      </div>
      <div className="text-center w-full flex flex-col md:flex-row justify-between items-center py-24 px-4 md:px-48 text-black bg-white">
        <div className="text-center flex flex-col items-center justify-center gap-4 mb-12 md:m-0">
          <HiDevicePhoneMobile
            size={60}
            className="bg-red-800 rounded-full text-white p-1 border-4 border-black"
          />
          <h1 className="text-4xl text-red-800 font-bold whitespace-nowrap mb-4">
            Call or Text
          </h1>
          <a href="tel:8125251307">
            <p className="text-2xl cursor-pointer hover:text-green-400 font-bold">
              812-525-1307
            </p>
          </a>
        </div>
        <div className="w-[5px] h-[240px] mx-8 bg-red-800 hidden md:block"></div>
        <div className="text-center flex flex-col items-center justify-center gap-4">
          <BsMailbox
            size={60}
            className="bg-red-800 rounded-full text-white p-1 border-4 border-black"
          />
          <h1 className="text-4xl text-red-800 font-bold whitespace-nowrap mb-4">
            Email
          </h1>
          <p className="text-2xl">
            Down Below or at
            <br />
            <em className="text-sm font-bold">
              smsconstructionandremodeling@gmail.com
            </em>
          </p>
        </div>
      </div>
      <div className="px-4 py-24 max-w-[800px] mx-auto min-h-[500px]">
        <form
          action="https://formsubmit.co/smsconstructionandremodeling@gmail.com"
          method="POST"
        >
          <div className="mb-4">
            <label className="block mb-2 font-bold text-white">Name</label>
            <input
              type="text"
              name="name"
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
              name="email"
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
              name="phone"
              id="phone"
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block mb-2 font-bold text-white"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows={5}
              required
            ></textarea>
          </div>
          <input
            type="hidden"
            name="_next"
            value="http://smsconstructionandremodeling.com/"
          />
          <input
            type="hidden"
            name="_autoresponse"
            value="Thank you for choosing SMS Construction & Remodeling. We will get in touch soon."
          />
          <div>
            <button
              type="submit"
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-blue-500 focus:ring-offset-blue-200"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
