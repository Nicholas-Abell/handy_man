import React from "react";
import Card from "../Card";
import images from "@/app/assets/images/images";

const CardHolder = () => {
  const { patio, awning1, deck2, cabinet, parallax } = images;
  return (
    <div
      className="w-full relative border-black border-t-4 border-b-4 bg-black py-8 px-[20px] lg:px-4 flex flex-wrap items-center justify-center gap-4 lg:gap-12 lg:bg-fixed bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${parallax})`,
      }}
    >
      <img
        src={parallax}
        alt="parallax"
        className="object-cover bg-no-repeat lg:bg-fixed"
      />
      <Card title={"PATIOS"} img={patio} />
      <Card title={"AWNINGS"} img={awning1} />
      <Card title={"DECKS"} img={deck2} />
      <Card title={"CABINENTS"} img={cabinet} />
    </div>
  );
};

export default CardHolder;
