import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [open, isOpen] = useState(false);

  return (
    <nav
      className={`sticky z-[999] h-fit flex justify-between px-6 md:px-12 lg:px-24 w-full`}
    >
      <div className="flex flex-wrap items-center justify-between container py-4">
        {/* Logo */}
        <a href={"/"} className="cursor-pointer">
          <img src="/src/assets/PitutorLogo.png" alt="Logo" className="h-20 w-auto" />
        </a>

        {/* Hamburger Icon */}
        <div
          onClick={() => isOpen(!open)}
          className={`items-center cursor-pointer lg:hidden transition-all duration-500 ${
            open ? "hidden" : ""
          }`}
        >
          <FaBars
            name={open ? "close" : "menu"}
            size={40}
            className="text-dark-green"
          />
        </div>

        {/* Close Icon */}
        <div
          className={`items-center cursor-pointer lg:hidden z-10 transition-all duration-1000 ${
            open ? "z-10" : "hidden"
          }`}
          onClick={() => isOpen(!open)}
        >
          <RxCross1 size={40} className="text-dark-green" />
        </div>

        {/* Navigation Links */}
        <div
          className={`flex items-start flex-1 justify-end flex-col gap-8 lg:flex lg:flex-row lg:items-center absolute lg:static py-20 lg:py-0 lg:z-auto left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-0 " : "top-[-490px]"
          }`}
        >
          <ul className="flex flex-col gap-8 items-start lg:flex lg:flex-row lg:gap-6 flex-1 justify-center">
            <li>
              <a href="/" className="hover:underline">
                Beranda
              </a>
            </li>
            <li>
              <a href="/tentang" className="hover:underline">
                Tentang Kami
              </a>
            </li>
            <li>
              <a href="/course" className="hover:underline">
                Course
              </a>
            </li>
            <li>
              <a href="/tutors" className="hover:underline">
                Tutors
              </a>
            </li>
          </ul>
          <button className="bg-[#21a7d4] rounded-[20px] text-white py-3 px-4">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
