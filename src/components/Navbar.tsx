import { useState } from "react";
import logo from "./../assets/logo.png";
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="container z-[9999] flex justify-between items-center py-2 my-4 relative">
      <img src={logo} alt="Logo" className="w-16" />
      <div className="hidden lg:flex flex-row gap-10 items-center">
        <a href="#" className="text-[#00000080] hover:text-[#27A6D1] transition">Beranda</a>
        <a href="#" className="text-[#00000080] hover:text-[#27A6D1] transition">About Us</a>
        <a href="#" className="text-[#00000080] hover:text-[#27A6D1] transition">Courses</a>
        <a href="#" className="text-[#00000080] hover:text-[#27A6D1] transition">Tutors</a>
        <Button>Sign Up</Button>
      </div>
      <button
        className="flex flex-col items center  lg:hidden text-[#00000080] focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className={`w-6 h-6 transition-transform ${
            isMenuOpen ? "rotate-90" : "rotate-0"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={!isMenuOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}
          />
        </svg>
      </button>
      <div
        className={`absolute top-16 right-0 bg-white shadow-md w-full px-4 py-4 lg:hidden transition-all duration-300  ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <a href="#" className="block py-2 text-[#00000080] hover:text-[#27A6D1] transition text-center">Beranda</a>
        <a href="#" className="block py-2 text-[#00000080] hover:text-[#27A6D1] transition text-center">About Us</a>
        <a href="#" className="block py-2 text-[#00000080] hover:text-[#27A6D1] transition text-center">Courses</a>
        <a href="#" className="block py-2 text-[#00000080] hover:text-[#27A6D1] transition text-center">Tutors</a>
        <Button className="self-center mt-4 ">Sign Up</Button>
      </div>
    </nav>
  );
};

export default Navbar;
