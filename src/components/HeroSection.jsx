import React from 'react';
import { hero, leafImage, heroBG, playstore, appstore, hero2 ,hero3,hero4 } from "../assets/export"; 
import Navbar from './Navbar';

const HeroSection = () => {
  return (
    <div
      className="relative text-white items-center"
      style={{
        backgroundImage: `url(${heroBG})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
      }}
    >
      <Navbar /> 

      <div className="text-center pt-10 " id="home"> 
        <img
          src={leafImage}
          alt="Leaf Decoration"
          className="w-16 h-auto mx-auto mb-4" 
        
        />
        <h2 className="text-sm uppercase tracking-wider">The Best Online Shopping App</h2>
        <h1 className="text-4xl md:text-5xl font-bold mt-4">Lorem Ipsum Dolor Sit Amet</h1>
        <p className="text-4xl md:text-5xl mt-2 font-bold">Consectetur. A Viverra.</p>

        <div className="flex justify-center space-x-4 mt-8">
          <a href="#" className="flex items-center">
            <img src={playstore} alt="Get it on Google Play" className="h-12" />
          </a>
          <a href="#" className="flex items-center">
            <img src={appstore} alt="Download on the App Store" className="h-12" />
          </a>
        </div>
      </div>

      <div className="w-full relative mt-10">
        <div className="absolute inset-0 h-1/2"></div>
        <div className="absolute inset-0 top-1/2 h-1/2 bg-white"></div>
        <img
          src={hero4}
          alt="Mobile App Mockup"
          className="relative mx-auto translate-y-2 w-full max-w-xs md:max-w-xs lg:max-w-md z-10"
        />
      </div>  
    </div>
  );
};

export default HeroSection;
