"use client";
import React, { useState } from "react";
import { GiWoodBeam, GiGreenhouse } from "react-icons/gi";
import { BsLightbulb } from "react-icons/bs";
import { AiOutlineFormatPainter } from "react-icons/ai";
import images from "../assets/images/images";
import Image from "next/image";

const Services = () => {
  const {
    before,
    deck2,
    cabinet,
    awning1,
    pathWay1,
    bench,
    patio,
    shelving,
    railing,
    pipe,
    machinery,
    awning2,
    after,
  } = images;

  const [selectedCard, setSelectedCard] = useState("Carpentry");

  return (
    <div className="bg-red-800 w-full">
      <div className="w-full h-[40vh] flex justify-center items-center text-white">
        <h1 className="text-5xl lg:text-8xl underline">Our Services</h1>
      </div>
      <div className="bg-red-800 w-full pb-2 flex justify-center items-center gap-8 flex-wrap">
        <div
          onClick={() => setSelectedCard("Carpentry")}
          className={`w-[200px] h-[200px] rounded-lg flex flex-col items-center justify-center p-4 gap-4 cursor-pointer hover:bg-gray-300 
          ${selectedCard === "Carpentry" ? "bg-gray-300" : "bg-white"}`}
        >
          <div className="flex flex-col items-center justify-center">
            <GiWoodBeam
              size={80}
              className="text-white bg-red-800 rounded-full p-2 border-black border-4"
            />
            <h1 className="text-3xl font-bold">Carpentry</h1>
          </div>
        </div>
        <div
          onClick={() => setSelectedCard("Interior")}
          className={`w-[200px] h-[200px] rounded-lg flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-gray-300  ${
            selectedCard === "Interior" ? "bg-gray-300" : "bg-white"
          }`}
        >
          <div className="flex flex-col items-center justify-center">
            <AiOutlineFormatPainter
              size={80}
              className="text-white bg-red-800 rounded-full p-2 border-black border-4"
            />
            <h1 className="text-3xl font-bold">Interior</h1>
          </div>
        </div>
        <div
          onClick={() => setSelectedCard("Exterior")}
          className={`w-[200px] h-[200px] rounded-lg flex flex-col items-center justify-center pt-8 cursor-pointer hover:bg-gray-300  ${
            selectedCard === "Exterior" ? "bg-gray-300" : "bg-white"
          }`}
        >
          <div className="flex flex-col items-center justify-center">
            <GiGreenhouse
              size={80}
              className="text-white bg-red-800 rounded-full p-2 border-black border-4"
            />
            <h1 className="text-3xl font-bold">Exterior</h1>
          </div>
        </div>
        <div
          onClick={() => setSelectedCard("Appliances")}
          className={`w-[200px] h-[200px] rounded-lg flex flex-col items-center justify-center gap-4 border-black cursor-pointer hover:bg-gray-300  ${
            selectedCard === "Appliances" ? "bg-gray-300" : "bg-white"
          }`}
        >
          <div className="flex flex-col items-center justify-center">
            <BsLightbulb
              size={80}
              className="text-white bg-red-800 rounded-full p-2 border-black border-4"
            />
            <h1 className="text-3xl font-bold">Appliances</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-white">
        <h2 className="text-5xl lg:text-8xl font-extrabold py-8 w-full text-center text-red-800">
          {selectedCard}
        </h2>
        {selectedCard === "Carpentry" && (
          <>
            <div className="w-full flex-col-reverse md:flex-row gap-4 flex justify-between items-center py-4">
              <div className="flex w-full gap-2 justify-center md:pl-4 overflow-hidden">
                <img
                  alt={selectedCard}
                  src={shelving}
                  className="w-full h-[400px] rounded border-red-800 border-4"
                />
                <img
                  alt={selectedCard}
                  src={cabinet}
                  className="hidden lg:block w-full h-[400px] rounded border-red-800 border-4"
                />
              </div>
              <div className="w-full text-center flex flex-col items-center justify-center">
                <ul className="w-full text-3xl uppercase font-bold text-white">
                  <li>
                    <div className="w-full bg-red-800 py-2">FURNITURE</div>
                  </li>
                  <li>
                    <div className="w-full text-red-800 py-2">FENCES</div>
                  </li>
                  <li>
                    <div className="w-full bg-red-800 py-2">DECKS</div>
                  </li>
                  <li>
                    <div className="w-full text-red-800 py-2">TABLES</div>
                  </li>
                  <li>
                    <div className="w-full bg-red-800 py-2">SHELVES</div>
                  </li>
                  <li>
                    <div className="w-full text-red-800 py-2">CABINENTS</div>
                  </li>
                  <li>
                    <div className="w-full bg-red-800 py-2">BENCHES</div>
                  </li>
                  <li>
                    <div className="w-full text-red-800 py-2">FLOORING</div>
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}
        {selectedCard === "Interior" && (
          <>
            <div className="w-full flex-col-reverse md:flex-row gap-4 flex justify-between items-center py-4">
              <div className="flex w-full md:w-[50%] gap-2 justify-center md:pl-4 overflow-hidden">
                <img
                  alt={selectedCard}
                  src={after}
                  className="w-full h-[400px] rounded border-red-800 border-4"
                />
              </div>
              <div className="w-full text-center flex flex-col items-center justify-center">
                <ul className="w-full text-3xl uppercase font-bold text-white">
                  <li>
                    <div className="w-full bg-red-800 py-2">LIGHT PAINTING</div>
                  </li>
                  <li>
                    <div className="w-full text-red-800 py-2">FLOORS</div>
                  </li>
                  <li>
                    <div className="w-full bg-red-800 py-2">WALLS</div>
                  </li>
                  <li>
                    <div className="w-full text-red-800 py-2">DOORS</div>
                  </li>
                  <li>
                    <div className="w-full bg-red-800 py-2">WINDOWS</div>
                  </li>
                  <li>
                    <div className="w-full text-red-800 py-2">LOCKS</div>
                  </li>
                  <li>
                    <div className="w-full bg-red-800 py-2">TABLES</div>
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}
        {selectedCard === "Exterior" && (
          <>
            <div className="w-full flex-col-reverse md:flex-row gap-4 flex justify-between items-center py-4">
              <div className="flex w-full gap-2 justify-center md:pl-4 overflow-hidden">
                <img
                  alt={selectedCard}
                  src={pathWay1}
                  className="w-full h-[400px] rounded border-red-800 border-4"
                />
                <img
                  alt={selectedCard}
                  src={pipe}
                  className="hidden lg:block w-full h-[400px] rounded border-red-800 border-4"
                />
              </div>
              <div className="w-full text-center flex flex-col items-center justify-center">
                <ul className="w-full text-3xl uppercase font-bold text-white">
                  <li>
                    <div className="w-full bg-red-800 py-2">LANDSCAPING</div>
                  </li>
                  <li>
                    <div className="w-full text-red-800 py-2">
                      GUTTER CLEANING
                    </div>
                  </li>
                  <li>
                    <div className="w-full bg-red-800 py-2">WEED REMOVAL</div>
                  </li>
                  <li>
                    <div className="w-full text-red-800 py-2">
                      PRESSURE WASHING
                    </div>
                  </li>
                  <li>
                    <div className="w-full bg-red-800 py-2">MOWING</div>
                  </li>
                  <li>
                    <div className="w-full text-red-800 py-2">TREE REMOVAL</div>
                  </li>
                  <li>
                    <div className="w-full bg-red-800 py-2">PATHWAYS</div>
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}
        {selectedCard === "Appliances" && (
          <>
            <div className="w-full flex-col-reverse md:flex-row gap-4 flex justify-between items-center py-4">
              {/* <div className="flex w-full gap-2 justify-center md:pl-4 overflow-hidden">
                <img
                  alt={selectedCard}
                  src={after}
                  className="w-full h-[400px] rounded border-red-800 border-4"
                />
              </div> */}
              <div className="w-full text-center flex flex-col items-center justify-center">
                <ul className="w-full text-3xl uppercase font-bold text-white">
                  <li>
                    <div className="w-full bg-red-800 py-2">
                      LIGHT BULB REPLACEMENT
                    </div>
                  </li>
                  <li>
                    <div className="w-full text-red-800 py-2">
                      BASIC HVAC MAINTENANCE
                    </div>
                  </li>
                  <li>
                    <div className="w-full bg-red-800 py-2">T.V. MOUNTING</div>
                  </li>
                  <li>
                    <div className="w-full text-red-800 py-2">
                      SMART HOME INSTALLATION
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Services;
