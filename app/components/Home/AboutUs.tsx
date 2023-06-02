import React from "react";

const AboutUs = () => {
  return (
    <div className="text-center w-full flex flex-col lg:flex-row gap-4 justify-center items-center py-24 text-black bg-white">
      <div className="w-full max-w-[800px] px-4 md:p-0 flex flex-col justify-center items-center gap-4">
        <h2 className="text-5xl md:text-7xl text-red-800 font-bold pb-4">
          About Us
        </h2>
        <p className="text-2xl md:text-3x">
          A small town handyman. Locally Owned and operated. Serving Brownstown,
          Seymour, Columbus, and surrounding area.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
