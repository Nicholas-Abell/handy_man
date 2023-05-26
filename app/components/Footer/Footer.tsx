import Link from "next/link";
import React from "react";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="w-full bg-black border-t-4 border-black flex flex-col items-center justify-center gap-24 sm:gap-12 px-16 min-h-[20vh] text-gray-400 py-20">
      <div className="flex flex-col sm:flex-row items-center justify-center text-3xl gap-8">
        <a
          href={"tel:8125251307"}
          className="flex items-center justify-center gap-4 hover:text-white cursor-pointer"
        >
          <BsTelephone size={25} />
          <h2> Call Us</h2>
        </a>
        <Link
          href="/contact"
          className="flex items-center justify-center gap-4 hover:text-white cursor-pointer"
        >
          <FiMail size={25} />
          <h2> Email Us</h2>
        </Link>
      </div>
      <div className="flex flex-col sm:flex-row items-center text-3xl justify-center gap-8">
        <Link href="/" className="hover:text-white">
          <h2>About Us</h2>
        </Link>
        <Link href="/services" className="hover:text-white ">
          <h2>Our Services</h2>
        </Link>
        <Link href="/gallery" className="hover:text-white">
          <h2>Gallery</h2>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
