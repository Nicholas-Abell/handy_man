"use client";
import React, { useState } from "react";
import images from "../assets/images/images.js";
import ImageCard from "../components/Gallery/ImageCard";

const Gallery = () => {
  const [useLocalImages, setUseLocalImages] = useState(true);

  const localImages = [
    {
      src: "/after.jpg",
      alt: "interior",
    },
    {
      src: "/bench.jpg",
      alt: "bench",
    },
    {
      src: "pathway_1.jpg",
      alt: "pathway_1",
    },
    {
      src: "/patio.jpg",
      alt: "patio",
    },
    {
      src: "/shelving_1.jpg",
      alt: "shelving",
    },
    {
      src: "/railing.jpg",
      alt: "/railing",
    },
    {
      src: "/shelving_2.jpg",
      alt: "/shelving_2",
    },
    {
      src: "/pipe.jpg",
      alt: "pipe",
    },
    {
      src: "/deck_2.jpg",
      alt: "deck_2",
    },
    {
      src: "/awning_2.jpg",
      alt: "/awning_2",
    },
    {
      src: "/awning.jpg",
      alt: "/awning",
    },
  ];

  const {
    deck2,
    cabinet,
    pathWay1,
    bench,
    patio,
    shelving,
    railing,
    pipe,
    machinery,
    awning2,
    after,
    awning1,
  } = images;

  return (
    <>
      <div className="w-full min-h-[40vh] bg-red-800 text-white flex justify-center items-center">
        <h1 className="text-5xl lg:text-8xl">Gallery</h1>
      </div>
      <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {useLocalImages ? (
          <>
            {localImages.map((image) => (
                <ImageCard src={image.src} alt={image.src} />
            ))}
          </>
        ) : (
          <>
            <img
              src={after}
              alt="interior design"
              className="w-full h-auto object-cover rounded-lg border-4 border-black"
            />
            <img
              src={bench}
              alt="bench"
              className="w-full h-auto object-cover rounded-lg border-4 border-black"
            />
            <img
              src={pathWay1}
              alt="pathway1"
              className="w-full h-auto object-cover rounded-lg border-4 border-black"
            />
            <img
              src={patio}
              alt="patio"
              className="w-full h-auto object-cover rounded-lg border-4 border-black"
            />
            <img
              src={shelving}
              alt="shelving"
              className="w-full h-auto object-cover rounded-lg border-4 border-black"
            />
            <img
              src={railing}
              alt="railing"
              className="w-full h-auto object-cover rounded-lg border-4 border-black"
            />
            <img
              src={cabinet}
              alt="cabinent"
              className="w-full h-auto object-cover rounded-lg border-4 border-black"
            />
            <img
              src={machinery}
              alt="machinery"
              className="w-full h-auto object-cover rounded-lg border-4 border-black"
            />
            <img
              src={pipe}
              alt="landscaping"
              className="w-full h-auto object-cover rounded-lg border-4 border-black"
            />
            <img
              src={awning2}
              alt="awning2"
              className="w-full h-auto object-cover rounded-lg border-4 border-black"
            />
            <img
              src={deck2}
              alt="deck2"
              className="w-full h-auto object-cover rounded-lg row-span-1 col-span-1 border-4 border-black"
            />
            <img
              src={awning1}
              alt="awning1"
              className="w-full h-auto object-cover rounded-lg row-span-1 col-span-1 border-4 border-black"
            />
          </>
        )}
      </div>
    </>
  );
};

export default Gallery;
