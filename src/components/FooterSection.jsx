import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { logo2 } from "../assets/export";

const Footer = () => {
    return (
        <footer className="bg-[#2F3133] text-white py-4 p-6">
            <div className="container mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-8">
                
                <div className="flex flex-col items-center md:items-start">
                    <img src={logo2} alt="Buzzhub logo2" className="w-32 h-32" />
                    <p className="text-sm text-center md:text-left">
                        Lorem Ipsum Dolor Sit Amet Consectetur. Elit Sit Risus Turpis Dolor Sagittis Amet Tortor. Sed At Turpis Integer Turpis Velit Trincidunt Sit Eros. Amet Accumsan Sed.
                    </p>
                </div>
                
                <div className="text-center md:text-left space-y-2 py-10">
                    <h3 className="text-lg font-semibold">Quick Links</h3>
                    <ul className="space-y-1">
                        <li><a href="#" className="hover:text-gray-400">Home</a></li>
                        <li><a href="#" className="hover:text-gray-400">Features</a></li>
                        <li><a href="#" className="hover:text-gray-400">How It Works</a></li>
                        <li><a href="#" className="hover:text-gray-400">About Us</a></li>
                        <li><a href="#" className="hover:text-gray-400">Testimonial</a></li>
                        <li><a href="#" className="hover:text-gray-400">FAQs</a></li>
                    </ul>
                </div>
                
                <div className="text-center md:text-left space-y-2 py-10">
                    <h3 className="text-lg font-semibold">Contact</h3>
                    <p>5053 Kiehn Junctions, Corpus Christi 19197</p>
                    <p>1-774-770-2563 X587</p>
                    <p>rebecca21@yahoo.com</p>
                </div>
                
                <div className="text-center md:text-left space-y-4 py-10">
                    <h3 className="text-lg font-semibold">Get Latest Information</h3>
                    <p>Lorem Ipsum Dolor Sit Amet Consectetur Sit Amet Conse.</p>
                    <div className="relative">
                        <input 
                            type="email" 
                            placeholder="Enter Email" 
                            className="w-full py-2 px-4 rounded-full focus:outline-none pr-12" 
                        />
                        <button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-green-600 hover:bg-green-700 text-white p-2 rounded-full">
                            <FiSend className="h-5 w-5" />
                        </button>
                    </div>
                </div>

            </div>

            <div className="border-t border-gray-700 my-6"></div>

            <div className="container mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                <div className="flex space-x-4 mb-4 md:mb-0">
                    <a href="#" className="hover:text-gray-400"><FaFacebook /></a>
                    <a href="#" className="hover:text-gray-400"><FaTwitter /></a>
                    <a href="#" className="hover:text-gray-400"><FaLinkedin /></a>
                </div>
                <p className="text-center md:text-left">2024 Copyright Reserves. Buzzhub.co</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" className="hover:text-gray-400">Privacy Policy</a>
                    <a href="#" className="hover:text-gray-400">Terms & Conditions</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
