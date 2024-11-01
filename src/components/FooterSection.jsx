import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FiSend } from 'react-icons/fi';
import { logo2 } from "../assets/export";

const Footer = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-[#2F3133] text-white py-4 p-6 md:p-14 pt-16 mt-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                
                <div className="flex flex-col items-center md:items-start">
                    <img src={logo2} alt="Buzzhub logo2" className="w-[132px] h-[132px] mb-2" />
                    <p className="text-sm text-center md:text-left">
                        Lorem Ipsum Dolor Sit Amet Consectetur. <br/> Elit Sit Risus Turpis Dolor Sagittis Amet Tortor. <br/> Sed At Turpis Integer Turpis Velit Trincidunt Sit Eros.  Amet Accumsan Sed.
                    </p>
                </div>
                
                <div className="text-center md:text-left space-y-2 py-10">
                    <h3 className="text-lg font-semibold">Quick Links</h3>
                    <ul className="space-y-1">
                        <li className="hover:underline cursor-pointer font-light text-gray-300" onClick={() => scrollToSection('home')}>Home</li>
                        <li className="hover:underline cursor-pointer font-light text-gray-300" onClick={() => scrollToSection('features')}>Features</li>
                        <li className="hover:underline cursor-pointer font-light text-gray-300" onClick={() => scrollToSection('howItWorks')}>How It Works</li>
                        <li className="hover:underline cursor-pointer font-light text-gray-300" onClick={() => scrollToSection('aboutUs')}>About Us</li>
                        <li className="hover:underline cursor-pointer font-light text-gray-300" onClick={() => scrollToSection('testimonials')}>Testimonial</li>
                        <li className="hover:underline cursor-pointer font-light text-gray-300" onClick={() => scrollToSection('faqs')}>FAQs</li>
                    </ul>
                </div>
                
                <div className="text-center md:text-left space-y-2 py-10">
                    <h3 className="text-lg font-semibold">Contact</h3>
                    <p className="font-light text-gray-300">5053 Kiehn Junctions, <br/> Corpus Christi 19197</p>
                    <p className="font-light text-gray-300">1-774-770-2563 X587</p>
                    <p className="font-light text-gray-300">rebecca21@yahoo.com</p>
                </div>
                
                <div className="text-center md:text-left space-y-4 py-10">
                    <h3 className="text-lg font-semibold">Get Latest Information</h3>
                    <p>Subscribe now with your email</p>
                    <div className="relative flex flex-col sm:flex-row items-center">
                        <input 
                            type="email" 
                            placeholder="Enter Email" 
                            className="py-2 px-4 rounded-full focus:outline-none pr-12 text-black w-full sm:w-[260px] lg:w-[304px] h-[50px] mb-2 sm:mb-0" 
                        />
                        <button className="absolute sm:relative right-2 sm:right-0 top-2 sm:top-0 sm:ml-2 bg-[#1D7C42] hover:bg-green-700 text-white p-2 rounded-full flex items-center justify-center">
                            <FiSend className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="border-t border-white my-6"></div>

            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-white px-6 md:px-10">
                <div className="flex space-x-4 mb-4 md:mb-0">
                    <a href="#" className="hover:text-gray-400 text-xl"><FaFacebookF /></a>
                    <a href="#" className="hover:text-gray-400 text-xl"><FaTwitter /></a>
                    <a href="#" className="hover:text-gray-400 text-xl"><FaLinkedinIn /></a>
                </div>
                <p className="text-center md:text-left">2024 Copyright Reserves. Buzzhub</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" className="hover:text-gray-400">Privacy Policy</a>
                    <a href="#" className="hover:text-gray-400">Terms & Conditions</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
