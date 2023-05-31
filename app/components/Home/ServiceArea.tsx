import React from "react";
import logoLocal from "../../assets/images/logo.jpg";
import Image from "next/image";

const ServiceArea: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-24 w-full">
      <h2 className="text-4xl text-red-800 font-bold pb-4">Service Area</h2>
      <div className="flex flex-col md:flex-row items-center gap-4 justify-center pt-4 w-full">
        <div className="flex-col w-full justify-center items-center text-center">
          <ul className="font-bold text-4xl">
            <li className="pt-4">
              <h2>JENNINGS</h2>
            </li>
            <li className="pt-4 md:pt-8">
              <h2>JACKSON</h2>
            </li>
            <li className="pt-4 md:pt-8">
              <h2>BARTHOLOMEW</h2>
            </li>
            <li className="pt-4 md:pt-8">
              <h2>MONROE</h2>
            </li>
            <li className="pt-4 md:pt-8">
              <h2>SURROUNDING COUNTIES</h2>
            </li>
          </ul>
        </div>
        {logoLocal && (
          <div className="w-full flex justify-center items-center">
            <Image
              src={logoLocal}
              alt="logo"
              width={0}
              height={0}
              className="w-auto h-[480px] rounded border-2 border-black"
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default ServiceArea;
