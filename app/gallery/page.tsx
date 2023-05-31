import React from "react";
import Image from "next/image.js";
import images from "../assets/images/images.js";
import afterLocal from "../assets/images/after.jpg";
import deck2Local from "../assets/images/deck_2.jpg";
import cabinentLocal from "../assets/images/shelving_1.jpg";
import machineryLocal from "../assets/images/machinery.jpg";
import pipeLocal from "../assets/images/pipe.jpg";
import awning2Local from "../assets/images/awning_2.jpg";
import awningLocal from "../assets/images/awning.jpg";
import patioLocal from "../assets/images/patio.jpg";
import pathWay1Local from "../assets/images/pathway_1.jpg";
import benchLocal from "../assets/images/bench.jpg";
import cabinent2Local from "../assets/images/shelving_2.jpg";
import railingLocal from "../assets/images/railing.jpg";

const Gallery = () => {
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
        {afterLocal ? (
          <Image
            src={afterLocal}
            alt="interior"
            width={0}
            height={0}
            className="w-full h-auto object-cover rounded-lg border-4 border-black"
          />
        ) : (
          <img
            src={after}
            alt="interior design"
            className="w-full h-auto object-cover rounded-lg border-4 border-black"
          />
        )}
        {benchLocal ? (
          <Image
            src={benchLocal}
            alt="bench"
            width={0}
            height={0}
            className="w-full h-auto object-cover rounded-lg border-4 border-black"
          />
        ) : (
          <img
            src={bench}
            alt="bench"
            className="w-full h-auto object-cover rounded-lg border-4 border-black"
          />
        )}
        {pathWay1Local ? (
          <Image
            src={pathWay1Local}
            alt="pathway"
            width={0}
            height={0}
            className="w-full h-auto object-cover rounded-lg border-4 border-black"
          />
        ) : (
          <img
            src={pathWay1}
            alt="pathway1"
            className="w-full h-auto object-cover rounded-lg border-4 border-black"
          />
        )}
        {patioLocal ? (
          <Image
            src={patioLocal}
            alt="patio"
            width={0}
            height={0}
            className="w-full h-auto object-cover rounded-lg border-4 border-black"
          />
        ) : (
          <img
            src={patio}
            alt="patio"
            className="w-full h-auto object-cover rounded-lg border-4 border-black"
          />
        )}
        {cabinentLocal ? (
          <Image
            src={cabinentLocal}
            alt="shelving"
            width={0}
            height={0}
            className="w-full h-auto object-cover rounded-lg border-4 border-black"
          />
        ) : (
          <img
            src={shelving}
            alt="shelving"
            className="w-full h-auto object-cover rounded-lg border-4 border-black"
          />
        )}
        {railingLocal ? (
          <Image
            src={railingLocal}
            alt="railing"
            width={0}
            height={0}
            className="w-full h-auto object-cover rounded-lg border-4 border-black"
          />
        ) : (
          <img
            src={railing}
            alt="railing"
            className="w-full h-auto object-cover rounded-lg border-4 border-black"
          />
        )}
        {cabinent2Local ? (
          <Image
            src={cabinent2Local}
            alt="cabinent"
            width={0}
            height={0}
            className="w-full h-auto object-cover rounded-lg border-4 border-black"
          />
        ) : (
          <img
            src={cabinet}
            alt="cabinent"
            className="w-full h-auto object-cover rounded-lg border-4 border-black"
          />
        )}
        {machineryLocal ? (
          <Image
            src={machineryLocal}
            alt="machinery"
            width={0}
            height={0}
            className="w-full h-auto object-cover rounded-lg border-4 border-black"
          />
        ) : (
          <img
            src={machinery}
            alt="machinery"
            className="w-full h-auto object-cover rounded-lg border-4 border-black"
          />
        )}
        {pipeLocal ? (
          <Image
            src={pipeLocal}
            alt="pipe"
            className="w-full h-auto object-cover rounded-lg border-4 border-black"
          />
        ) : (
          <img
            src={pipe}
            alt="landscaping"
            className="w-full h-auto object-cover rounded-lg border-4 border-black"
          />
        )}
        {awning2Local ? (
          <Image src={awning2Local} alt="awning 2" width={0} height={0} />
        ) : (
          <img
            src={awning2}
            alt="awning2"
            className="w-full h-auto object-cover rounded-lg border-4 border-black"
          />
        )}
        {deck2Local ? (
          <Image
            src={deck2Local}
            alt="deck 2"
            width={0}
            height={0}
            className="w-full h-auto object-cover rounded-lg row-span-1 col-span-1 border-4 border-black"
          />
        ) : (
          <img
            src={deck2}
            alt="deck2"
            className="w-full h-auto object-cover rounded-lg row-span-1 col-span-1 border-4 border-black"
          />
        )}
        {awningLocal ? (
          <Image
            src={awningLocal}
            alt="awning"
            width={0}
            height={0}
            className="w-full h-auto object-cover rounded-lg row-span-1 col-span-1 border-4 border-black"
          />
        ) : (
          <img
            src={awning1}
            alt="awning1"
            className="w-full h-auto object-cover rounded-lg row-span-1 col-span-1 border-4 border-black"
          />
        )}
      </div>
    </>
  );
};

export default Gallery;
