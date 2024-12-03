import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import { logo } from "../assets/export"; 

const GlobalNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    
    if (window.location.pathname === "/") {
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const targetElement = document.getElementById(sectionId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500); 
    }

    setIsOpen(false); 
  };

  return (
    <div className="relative bg-green-600  text-white flex flex-col items-center pt-4">
      <nav className="flex items-center justify-between w-full px-4 md:px-10 lg:px-36 text-sm">
        <div className="flex items-center mb-2 md:mb-0 pb-4">
          <img src={logo} alt="Logo" className="h-8 md:h-16" />
        </div>

        <div className="font-inter hidden md:flex flex-1 justify-center mb-4">
          <ul className="flex space-x-12 lg:space-x-10 text-white">
            <li
              className="hover:underline cursor-pointer"
              onClick={() => handleScrollToSection('home')}
            >
              Home
            </li>
            <li
              className="hover:underline  cursor-pointer"
              onClick={() => handleScrollToSection('features')}
            >
              Features
            </li>
            <li
              className="hover:underline  cursor-pointer"
              onClick={() => handleScrollToSection('howItWorks')}
            >
How It Works            </li>
            <li
              className="hover:underline  cursor-pointer"
              onClick={() => handleScrollToSection('aboutus')}
            >
              About Us
            </li>
            <li
              className="hover:underline  cursor-pointer"
              onClick={() => handleScrollToSection('testimonials')}
            >
              Testimonials
            </li>
            <li
              className="hover:underline  cursor-pointer"
              onClick={() => handleScrollToSection('faqs')}
            >
              FAQs
            </li>
          </ul>
        </div>

        <div className="font-inter hidden md:flex mb-4">
          <button className="bg-white text-black px-5 py-2 rounded-full font-medium w-[163px] h-[40px]">
            Get The App
          </button>
        </div>

        <button
          className="md:hidden flex items-center justify-end focus:outline-none mb-4"
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
        <div className="md:hidden bg-[#0D1B2A] text-white w-full py-4 px-4">
          <ul className="flex flex-col space-y-4 items-center justify-center uppercase">
            <li
              className="hover:underline cursor-pointer"
              onClick={() => handleScrollToSection('home')}
            >
              Home
            </li>
            <li
              className="hover:underline cursor-pointer"
              onClick={() => handleScrollToSection('features')}
            >
              Features
            </li>
            <li
              className="hover:underline cursor-pointer"
              onClick={() => handleScrollToSection('aboutus')}
            >
              About Us
            </li>
            <li
              className="hover:underline cursor-pointer"
              onClick={() => handleScrollToSection('contactus')}
            >
              Contact Us
            </li>
          </ul>
          <button className="bg-[#EF1C68] text-white w-full mt-4 py-2 rounded-full font-semibold hover:bg-green-700">
            Get The App
          </button>
        </div>
      )}
    </div>
  );
};

export default GlobalNavbar;