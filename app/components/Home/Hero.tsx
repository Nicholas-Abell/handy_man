"use client";
import React, { useEffect, useState } from "react";
import images from "../../assets/images/images";

const Hero = () => {
  const [useLocalImages, setUseLocalImages] = useState(true);
  const { before, after } = images;
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setFadeOut(true);
  }, []);

  return (
    <div
      className="w-full h-screen relative text-white lg:bg-fixed bg-center bg-no-repeat bg-cover"
      style={
        useLocalImages
          ? {
              backgroundImage: `url(/after.jpg)`,
            }
          : { backgroundImage: `url(${after})` }
      }
    >
      {useLocalImages ? (
        <img
          src={"/before_greyscale.jpeg"}
          alt="before"
          className="top-0 left-0 w-full h-screen object-cover absolute z-10 ease-in opacity-100 duration-[3s]"
          onError={() => setUseLocalImages(false)}
          style={
            fadeOut
              ? { opacity: "0", transitionDelay: "1s" }
              : { opacity: "100" }
          }
        />
      ) : (
        <img
          src={before}
          alt="before"
          className="top-0 left-0 w-full h-screen object-cover absolute z-10 ease-in opacity-100 duration-[3s]"
          style={
            fadeOut
              ? { opacity: "0", transitionDelay: "1s" }
              : { opacity: "100" }
          }
        />
      )}
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
