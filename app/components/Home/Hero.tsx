"use client";
import React, { useEffect, useState } from "react";
import after from "../assets/images/after.jpg";
import before from "../assets/images/before_greyscale.jpeg";

const Hero = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setFadeOut(true);
  }, []);

  return (
    <div
      className="w-full h-screen relative text-white lg:bg-fixed bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${after})`,
      }}
    >
      <img
        src={before as any}
        alt="before"
        className="top-0 left-0 w-full h-screen object-cover absolute z-10 ease-in opacity-100 duration-[3s]"
        style={
          fadeOut ? { opacity: "0", transitionDelay: "1s" } : { opacity: "100" }
        }
      />
      <div className="bg-black/10 absolute top-0 w-full h-screen"></div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-4 justify-center items-center z-20 text-center">
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl xl:text-7xl">
          SMS Handyman <br /> Construction & Remodeling
        </h1>
        <a href="/contact">
          <button className="text-white bg-red-800 border-black hover:bg-gray-400 hover:shadow-xl ease-in duration-300 max-w-[200px]">
            Contact us Today
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
