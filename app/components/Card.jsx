import React from "react";

// type CardProps = {
//   img: StaticImageData;
//   title: string;
// };

const Card = ({ img, title }) => {
  return (
    <div className="bg-red-800 text-white border-black border-4 rounded-lg min-w-[250px] h-[250px] w-[250px] hover:shadow-lg scrollbar-hide z-10">
      <div
        className=" rounded w-full h-[70%]"
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="w-full h-[30%] flex justify-center items-center">
        <h2 className="text-2xl font-bold ">{title}</h2>
      </div>
    </div>
  );
};

export default Card;
