"use client";
import React, { useEffect, useState } from "react";
import { GiWoodBeam, GiGreenhouse } from "react-icons/gi";
import { BsLightbulb } from "react-icons/bs";
import { AiOutlineFormatPainter } from "react-icons/ai";
import images from "../assets/images/images";
import LoadingSkeleton from "../components/Gallery/LoadingSkeleton";
import { setTimeout } from "timers/promises";

const Services = () => {
  const [useLocalImages, setUseLocalImages] = useState(true);
  const [loading, setLoading] = useState(true);
  const [selectedCard, setSelectedCard] = useState("Carpentry");

  const { cabinet, pathWay1, shelving, pipe, after } = images;

  const HandleCardClick = (args: string) => {
    setSelectedCard(args);
    setLoading(true);
  };

  const timedLoad = async () => {
    await setTimeout(200, setLoading(false));
  };

  useEffect(() => {
    timedLoad;
  }, [loading]);

  return (
    <div className="bg-red-800 w-full">
      <div className="w-full h-[40vh] flex justify-center items-center text-white">
        <h1 className="text-5xl lg:text-8xl underline">Our Services</h1>
      </div>
      <div className="bg-red-800 w-full pb-2 flex justify-center items-center gap-8 flex-wrap">
        <div
          onClick={() => HandleCardClick("Carpentry")}
          className={`w-[200px] h-[200px] rounded-lg flex flex-col items-center justify-center p-4 gap-4 cursor-pointer hover:bg-gray-300 
          ${selectedCard === "Carpentry" ? "bg-gray-300" : "bg-white"}`}
        >
          <div className="flex flex-col items-center justify-center">
            <GiWoodBeam
              size={80}
              className="text-white bg-red-800 rounded-full p-2 border-black border-4"
            />
            <h2 className="text-3xl font-bold">Carpentry</h2>
          </div>
        </div>
        <div
          onClick={() => HandleCardClick("Interior")}
          className={`w-[200px] h-[200px] rounded-lg flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-gray-300  ${
            selectedCard === "Interior" ? "bg-gray-300" : "bg-white"
          }`}
        >
          <div className="flex flex-col items-center justify-center">
            <AiOutlineFormatPainter
              size={80}
              className="text-white bg-red-800 rounded-full p-2 border-black border-4"
            />
            <h2 className="text-3xl font-bold">Interior</h2>
          </div>
        </div>
        <div
          onClick={() => HandleCardClick("Exterior")}
          className={`w-[200px] h-[200px] rounded-lg flex flex-col items-center justify-center pt-8 cursor-pointer hover:bg-gray-300  ${
            selectedCard === "Exterior" ? "bg-gray-300" : "bg-white"
          }`}
        >
          <div className="flex flex-col items-center justify-center">
            <GiGreenhouse
              size={80}
              className="text-white bg-red-800 rounded-full p-2 border-black border-4"
            />
            <h2 className="text-3xl font-bold">Exterior</h2>
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
            <h2 className="text-3xl font-bold">Appliances</h2>
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
              <div className="flex w-full md:w-[50%] gap-2 justify-center md:pl-4 overflow-hidden">
                {useLocalImages ? (
                  <>
                    {loading && (
                      <>
                        <LoadingSkeleton />
                        <LoadingSkeleton hideOnMobile />
                      </>
                    )}
                    <img
                      className={`${
                        loading ? "hidden" : "block"
                      } w-[50%] md:w-full h-[400px] rounded border-red-800 border-4`}
                      src={"/shelving_1.jpg"}
                      alt="shelving"
                      onError={() => setUseLocalImages(false)}
                      onLoad={() => setLoading(false)}
                    />
                    <img
                      src={"/shelving_2.jpg"}
                      alt="cabinent"
                      onError={() => setUseLocalImages(false)}
                      onLoad={() => setLoading(false)}
                      className={`${
                        loading ? "lg:hidden" : "lg:block"
                      } hidden lg:block w-full h-[400px] rounded border-red-800 border-4`}
                    />
                  </>
                ) : (
                  <>
                    {loading && (
                      <>
                        <LoadingSkeleton />
                        <LoadingSkeleton hideOnMobile />
                      </>
                    )}
                    <img
                      alt={selectedCard}
                      src={shelving}
                      onError={() => setUseLocalImages(false)}
                      onLoad={() => setLoading(false)}
                      className={`${
                        loading ? "hidden" : "block"
                      } w-[50%] md:w-full h-[400px] rounded border-red-800 border-4`}
                    />
                    <img
                      alt={selectedCard}
                      src={cabinet}
                      onError={() => setUseLocalImages(false)}
                      onLoad={() => setLoading(false)}
                      className={`${
                        loading ? "lg:hidden" : "lg:block"
                      } hidden lg:block w-full h-[400px] rounded border-red-800 border-4`}
                    />
                  </>
                )}
              </div>
              <div className="w-full lg:w-[50%] text-center flex flex-col items-center justify-center">
                <ul className="w-full text-3xl uppercase font-bold text-white">
                  <li>
                    <h2 className="w-full bg-red-800 py-2">FURNITURE</h2>
                  </li>
                  <li>
                    <h2 className="w-full text-red-800 py-2">FENCES</h2>
                  </li>
                  <li>
                    <h2 className="w-full bg-red-800 py-2">DECKS</h2>
                  </li>
                  <li>
                    <h2 className="w-full text-red-800 py-2">TABLES</h2>
                  </li>
                  <li>
                    <h2 className="w-full bg-red-800 py-2">SHELVES</h2>
                  </li>
                  <li>
                    <h2 className="w-full text-red-800 py-2">CABINENTS</h2>
                  </li>
                  <li>
                    <h2 className="w-full bg-red-800 py-2">BENCHES</h2>
                  </li>
                  <li>
                    <h2 className="w-full text-red-800 py-2">FLOORING</h2>
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
                {useLocalImages ? (
                  <>
                    {loading && <LoadingSkeleton />}
                    <img
                      src={"/after.jpg"}
                      alt="interior"
                      className={`${
                        loading ? "hidden" : "block"
                      } w-[50%] md:w-full h-[400px] rounded border-red-800 border-4`}
                      onError={() => setUseLocalImages(false)}
                      onLoad={() => setLoading(false)}
                    />
                  </>
                ) : (
                  <>
                    {loading && (
                      <>
                        <LoadingSkeleton />
                      </>
                    )}
                    <img
                      alt={selectedCard}
                      src={after}
                      className={`${
                        loading ? "hidden" : "block"
                      } w-[50%] md:w-full h-[400px] rounded border-red-800 border-4`}
                      onError={() => setUseLocalImages(false)}
                      onLoad={() => setLoading(false)}
                    />
                  </>
                )}
              </div>
              <div className="w-full text-center flex flex-col items-center justify-center">
                <ul className="w-full text-3xl uppercase font-bold text-white">
                  <li>
                    <h2 className="w-full bg-red-800 py-2">LIGHT PAINTING</h2>
                  </li>
                  <li>
                    <h2 className="w-full text-red-800 py-2">FLOORS</h2>
                  </li>
                  <li>
                    <h2 className="w-full bg-red-800 py-2">WALLS</h2>
                  </li>
                  <li>
                    <h2 className="w-full text-red-800 py-2">DOORS</h2>
                  </li>
                  <li>
                    <h2 className="w-full bg-red-800 py-2">WINDOWS</h2>
                  </li>
                  <li>
                    <h2 className="w-full text-red-800 py-2">LOCKS</h2>
                  </li>
                  <li>
                    <h2 className="w-full bg-red-800 py-2">TABLES</h2>
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
                {useLocalImages ? (
                  <>
                    {loading && (
                      <>
                        <LoadingSkeleton />
                        <LoadingSkeleton hideOnMobile />
                      </>
                    )}
                    <img
                      src={"/pathway_1.jpg"}
                      alt={selectedCard}
                      className="w-[50%] md:w-full h-[400px] rounded border-red-800 border-4"
                      onError={() => setUseLocalImages(false)}
                    />
                    <img
                      src={"/pipe.jpg"}
                      alt={selectedCard}
                      className="hidden lg:block w-full h-[400px] rounded border-red-800 border-4"
                    />
                  </>
                ) : (
                  <>
                    <img
                      alt={selectedCard}
                      src={pathWay1}
                      className="w-[50%] md:w-full h-[400px] rounded border-red-800 border-4"
                    />
                    <img
                      alt={selectedCard}
                      src={pipe}
                      className="hidden lg:block w-full h-[400px] rounded border-red-800 border-4"
                    />
                  </>
                )}
              </div>
              <div className="w-full text-center flex flex-col items-center justify-center">
                <ul className="w-full text-3xl uppercase font-bold text-white">
                  <li>
                    <h2 className="w-full bg-red-800 py-2">LANDSCAPING</h2>
                  </li>
                  <li>
                    <h2 className="w-full text-red-800 py-2">
                      GUTTER CLEANING
                    </h2>
                  </li>
                  <li>
                    <h2 className="w-full bg-red-800 py-2">WEED REMOVAL</h2>
                  </li>
                  <li>
                    <div className="w-full text-red-800 py-2">
                      PRESSURE WASHING
                    </div>
                  </li>
                  <li>
                    <h2 className="w-full bg-red-800 py-2">MOWING</h2>
                  </li>
                  <li>
                    <h2 className="w-full text-red-800 py-2">TREE REMOVAL</h2>
                  </li>
                  <li>
                    <h2 className="w-full bg-red-800 py-2">PATHWAYS</h2>
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}
        {selectedCard === "Appliances" && (
          <>
            <div className="w-full flex-col-reverse md:flex-row gap-4 flex justify-between items-center py-4">
              <div className="w-full text-center flex flex-col items-center justify-center">
                <ul className="w-full text-3xl uppercase font-bold text-white">
                  <li>
                    <h2 className="w-full bg-red-800 py-2">
                      LIGHT BULB REPLACEMENT
                    </h2>
                  </li>
                  <li>
                    <h2 className="w-full text-red-800 py-2">
                      BASIC HVAC MAINTENANCE
                    </h2>
                  </li>
                  <li>
                    <h2 className="w-full bg-red-800 py-2">T.V. MOUNTING</h2>
                  </li>
                  <li>
                    <h2 className="w-full text-red-800 py-2">
                      SMART HOME INSTALLATION
                    </h2>
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
