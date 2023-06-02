"use client";
import React, { useState } from "react";
import Card from "../Card";
import images from "@/app/assets/images/images";

const CardHolder = () => {
  const [useLocalImages, setUseLocalImages] = useState(true);
  const { patio, awning1, deck2, cabinet, parallax } = images;
  return (
    <div
      className="w-full relative border-black border-t-4 border-b-4 bg-black py-24 lg:px-4 flex flex-wrap items-center justify-center gap-4 lg:gap-12 lg:bg-fixed bg-center bg-no-repeat bg-cover"
      style={
        useLocalImages
          ? { backgroundImage: "url(/parallax.jpg)" }
          : {
              backgroundImage: `url(${parallax})`,
            }
      }
    >
      {useLocalImages ? (
        <>
          <Card
            title={"PATIOS"}
            img={"/patio.jpg"}
            setUseLocalImages={setUseLocalImages}
          />
          <Card title={"AWNINGS"} img={"/awning.jpg"} />
          <Card title={"DECKS"} img={"/deck_1.jpg"} />
          <Card title={"CABINENTS"} img={"/shelving_1.jpg"} />
        </>
      ) : (
        <>
          <Card title={"PATIOS"} img={patio} />
          <Card title={"AWNINGS"} img={awning1} />
          <Card title={"DECKS"} img={deck2} />
          <Card title={"CABINENTS"} img={cabinet} />
        </>
      )}
    </div>
  );
};

export default CardHolder;
