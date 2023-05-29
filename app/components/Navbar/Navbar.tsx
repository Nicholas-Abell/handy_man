"use client";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import Link from "next/link";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [showNumber, setShowNumber] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText("812-525-1307");
  };

  return (
    <>
      <div className="fixed w-full flex justify-between items-center p-4 z-[999] bg-gradient-to-b from-black to-black/20 text-white md:hidden">
        <div className="flex items-center justify-between w-[50%]">
          <a href="tel:8125251307">
            <BsTelephone
              size={25}
              className="cursor-pointer hover:text-green-400"
            />
          </a>
          <p className=" text-sm">SMS</p>
        </div>
        <HiMenuAlt3
          onClick={() => setNav(!nav)}
          size={25}
          className="z-50 cursor-pointer"
        />
        <div
          className={
            nav
              ? "fixed w-full h-screen left-0 top-0 flex flex-col z-10 duration-500 ease-in-out"
              : "absolute top-0 h-screen left-[-100%] ease-in-out duration-500"
          }
        >
          <ul className="flex w-full h-full bg-black/90 flex-col z-10 items-center justify-center gap-12">
            <li className="font-bold text-gray-400 text-3xl cursor-pointer hover:text-white">
              <Link onClick={() => setNav(false)} href="/">
                Home
              </Link>
            </li>
            <li className="font-bold text-gray-400 text-3xl cursor-pointer hover:text-white">
              <Link onClick={() => setNav(false)} href="/services">
                Services
              </Link>
            </li>
            <li className="font-bold text-gray-400 text-3xl cursor-pointer hover:text-white">
              <Link onClick={() => setNav(false)} href="/gallery">
                Gallery
              </Link>
            </li>
            <li className="font-bold text-gray-400 text-3xl cursor-pointer hover:text-white">
              <Link onClick={() => setNav(false)} href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="fixed w-full justify-between items-center p-4 z-[999] bg-gradient-to-b from-black to-black/20 text-white hidden md:flex">
        <div className="w-full flex justify-between items-center px-4 border-b-2 border-t-2 border-red">
          <ul className="flex w-full z-10 items-center justify-center gap-12">
            <li className="font-bold text-gray-400 text-3xl cursor-pointer hover:text-white">
              <Link href="/">Home</Link>
            </li>
            <li className="font-bold text-gray-400 text-3xl cursor-pointer hover:text-white">
              <Link href="/services">Services</Link>
            </li>
            <div className="border rounded-full py-4 px-8">
              <p className="text-2xl">SMS</p>
            </div>
            <li className="font-bold text-gray-400 text-3xl cursor-pointer hover:text-white">
              <Link href="/gallery">Gallery</Link>
            </li>
            <li className="font-bold text-gray-400 text-3xl cursor-pointer hover:text-white">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          {!showNumber ? (
            <BsTelephone
              size={25}
              onClick={() => setShowNumber(true)}
              className="cursor-pointer hover:text-green-400"
            />
          ) : (
            <h2
              onClick={handleCopyClick}
              className="whitespace-nowrap cursor-pointer hover:text-green-400"
            >
              812-525-1307
            </h2>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
