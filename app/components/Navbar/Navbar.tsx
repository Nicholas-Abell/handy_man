"use client";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { GoTools } from "react-icons/go";
import Link from "next/link";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [showNumber, setShowNumber] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText("812-525-1307");
  };

  return (
    <>
      <div className="fixed w-full flex justify-between items-center p-4 z-[999] bg-black text-gray-300 md:hidden">
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
          className="z-50 cursor-pointer hover:text-white"
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

      <div className="fixed opacity-60 hover:opacity-100 ease-in-out duration-200 w-full justify-between items-center border-b-2 border-black p-4 z-[999] bg-black text-black hidden md:flex">
        <div className="w-full flex justify-between items-center px-4">
          <ul className="flex w-full z-10 text-gray-400 items-center justify-center gap-12">
            <div className="flex w-full py-2 justify-center items-center gap-12 border-b-2 border-t-2 border-gray-400">
              <li className="font-bold text-3xl cursor-pointer hover:text-white">
                <Link href="/">Home</Link>
              </li>
              <li className="font-bold text-3xl cursor-pointer hover:text-white">
                <Link href="/services">Services</Link>
              </li>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-2xl">SMS</p>
              <div className="rounded-full border border-gray-300 p-2">
                <GoTools size={25} />
              </div>
            </div>
            <div className="flex w-full py-2 justify-center items-center gap-12 border-b-2 border-t-2 border-gray-400">
              <li className="font-bold text-3xl cursor-pointer hover:text-white">
                <Link href="/gallery">Gallery</Link>
              </li>
              <li className="font-bold text-3xl cursor-pointer hover:text-white">
                <Link href="/contact">Contact</Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
