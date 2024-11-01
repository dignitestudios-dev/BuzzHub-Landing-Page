import React, { useEffect, useState, useRef } from 'react';
import { hero, leafImage, heroBG, playstore, appstore, hero2, hero3 } from "../assets/export"; 
import Navbar from './Navbar';

const HeroSection = () => {
  const [animateLeft, setAnimateLeft] = useState(false);
  const [animateRight, setAnimateRight] = useState(false);
  const heroRef = useRef(null);

  const handleIntersection = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setAnimateLeft(true);
        setAnimateRight(true);
      } else {
        // Reset animations if needed
        setAnimateLeft(false);
        setAnimateRight(false);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, 
    });

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative text-white items-center"
      style={{
        backgroundImage: `url(${heroBG})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
      }}
    >
      <Navbar /> 

      <div className="text-center pt-10" id="home"> 
        <img
          src={leafImage}
          alt="Leaf Decoration"
          className="w-16 h-auto mx-auto mb-4" 
        />
        <h2 className="text-sm uppercase tracking-wider">Elevating Your Cannabis Experience</h2>
        <h1 className="text-4xl md:text-5xl font-bold mt-4">By Connecting You to Trusted Dispensaries</h1>
        <p className="text-4xl md:text-5xl mt-2 font-bold">Find. Order. Enjoy. Anytime, Anywhere.</p>

        <div className="flex justify-center space-x-4 mt-8">
          <a href="#" className="flex items-center">
            <img src={playstore} alt="Get it on Google Play" className="h-12" />
          </a>
          <a href="#" className="flex items-center">
            <img src={appstore} alt="Download on the App Store" className="h-12" />
          </a>
        </div>
      </div>

      <div className="w-full relative mt-10 flex justify-center">
        <div className="absolute inset-0 h-1/2"></div>
        <div className="absolute inset-0 top-1/2 h-1/2 bg-white"></div>

        <img
          src={hero}
          alt="Mobile App Mockup"
          className="relative mx-auto translate-y-2 max-w-xs md:max-w-xs lg:max-md z-10"
        />

        <img
          src={hero2}
          alt="Hero Image 2"
          className={`hidden md:block lg:block absolute left-0 transform translate-y-20 -rotate-12 z-0 transition-transform duration-500 ${animateLeft ? 'translate-x-96' : 'translate-x-[450px]'}`}
        />

        <img
          src={hero3}
          alt="Hero Image 3"
          className={`hidden md:block lg:block absolute right-0 transform translate-y-20 rotate-12 z-0 transition-transform duration-500 ${animateRight ? '-translate-x-96' : '-translate-x-[450px]'}`}
        />
      </div>  
    </div>
  );
};

export default HeroSection;
