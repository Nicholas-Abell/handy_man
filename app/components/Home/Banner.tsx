import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { AiFillPhone } from "react-icons/ai";

const Break: React.FC = () => {
  return (
    <div className="flex text-xs sm:text-sm md:text-xl lg:text-2xl gap-2 items-center justify-center bg-red-800 py-4 text-white w-full text-center font-bold">
      <div className="flex gap-1 items-center px-2">
        <h2>SMS Construction & Remodeling</h2>
      </div>
      <div className="flex gap-1 items-center border-r-2 border-l-2 border-white px-4">
        <IoLocationSharp size={20} className="hidden md:block" />
        <h2>Brownstown, IN</h2>
      </div>
      <a className="flex gap-1 items-center px-2 hover:text-green-400">
        <AiFillPhone size={20} className="hidden md:block" />
        <p className="cursor-pointer font-bold">812-525-1307</p>
      </a>
    </div>
  );
};
export default Break;
