import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { AiFillPhone } from "react-icons/ai";

const Break: React.FC = () => {
  return (
    <div className="flex md:text-xl lg:text-2xl gap-2 items-center justify-center bg-red-800 py-4 text-gray-200 w-full text-center font-bold">
      <div className="flex gap-1 items-center border-r-2 border-gray-200 px-2">
        <h2>SMS Construction & Remodeling</h2>
      </div>
      <div className="flex gap-1 items-center border-r-2 border-gray-200 px-2">
        <IoLocationSharp size={20} className="hidden md:block" />
        <h2>Brownstown, IN</h2>
      </div>
      <div className="flex gap-1 items-center px-2">
        <AiFillPhone size={20} className="hidden md:block" />
        <p>812-525-1307</p>
      </div>
    </div>
  );
};
export default Break;
