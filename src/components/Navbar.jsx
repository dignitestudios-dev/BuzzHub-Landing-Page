import React, { useState } from 'react';
import { logo } from "../assets/export"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); 
    }
  };

  return (
<div className="relative bg-transparent text-white flex flex-col items-center pt-2">
<nav className="flex justify-between items-center w-full px-4 md:px-10 lg:px-36 text-sm">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-[93px] w-[93px]" />
        </div>
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex space-x-8">
            <li className="hover:underline cursor-pointer" onClick={() => scrollToSection('home')}>Home</li>
            <li className="hover:underline cursor-pointer" onClick={() => scrollToSection('features')}>Features</li>
            <li className="hover:underline cursor-pointer" onClick={() => scrollToSection('howItWorks')}>How It Works</li>
            <li className="hover:underline cursor-pointer" onClick={() => scrollToSection('aboutUs')}>About Us</li>
            <li className="hover:underline cursor-pointer" onClick={() => scrollToSection('testimonials')}>Testimonial</li>
            <li className="hover:underline cursor-pointer" onClick={() => scrollToSection('faqs')}>FAQs</li>
          </ul>
        </div>
        <div className="hidden md:flex">
          <button className="bg-white text-black px-5 rounded-full font-medium hover:bg-gray-200 w-[163px] h-[40px]">
            Get The App
          </button>
        </div>
        {/* Hamburger Icon */}
        <button
          className="md:hidden flex items-center focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-green-200 text-green-600 w-full py-4 px-4 ">
          <ul className="flex flex-col space-y-4 items-center justify-center uppercase">
            <li className="hover:underline cursor-pointer" onClick={() => scrollToSection('home')}>Home</li>
            <li className="hover:underline cursor-pointer" onClick={() => scrollToSection('features')}>Features</li>
            <li className="hover:underline cursor-pointer" onClick={() => scrollToSection('howItWorks')}>How It Works</li>
            <li className="hover:underline cursor-pointer" onClick={() => scrollToSection('aboutUs')}>About Us</li>
            <li className="hover:underline cursor-pointer" onClick={() => scrollToSection('testimonials')}>Testimonial</li>
            <li className="hover:underline cursor-pointer" onClick={() => scrollToSection('faqs')}>FAQs</li>
          </ul>
          <button className="bg-green-600 text-white w-full mt-4 py-2 rounded-full font-semibold hover:bg-green-700">
            Get The App
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
