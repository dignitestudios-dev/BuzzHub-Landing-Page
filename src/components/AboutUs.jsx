import React, { useEffect, useState, useRef } from 'react';
import { aboutUs2, aboutUs1, aboutBG, leafImage } from "../assets/export";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); 
        } else {
          setIsVisible(false); // Reset visibility when out of view
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className="flex justify-center py-10 px-4" ref={ref} id="aboutUs">
      <div
        className="relative flex w-full max-w-[1200px] h-[472px] rounded-2xl overflow-visible"
        style={{ backgroundImage: `url(${aboutBG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="hidden lg:block absolute ml-20 translate-x-4 top-[-100px] w-[270.15px] h-[551.48px]">
          <img
            src={aboutUs1}
            alt="Preview 1"
          />
        </div>

        <div className={`hidden lg:block absolute ml-24 left-[240px] top-[-28px] w-[235.39px] h-[480.52px] transition-transform duration-700 ${isVisible ? 'translate-x-0' : '-translate-x-32'}`}>
          <img
            src={aboutUs2}
            alt="Preview 2"
          />
        </div>

        <div className="flex flex-col items-center md:flex-row md:items-start md:ml-auto md:mr-16 py-8 text-white max-w-lg mt-12">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <img
              src={leafImage}
              alt="Green Leaf Decoration"
              className="w-16 h-auto mb-2"
            />
            <h2 className="text-lg md:text-[22px] text-white mb-2 font-medium text-center md:text-left pl-2">About Us</h2>
            <h1 className="text-2xl md:text-3xl lg:text-[42px] font-medium text-center md:text-left pl-2">Why We Built This App</h1>
            <p className="mt-4 text-sm md:text-base text-gray-200 leading-relaxed font-extralight p-2">
              We built Buzzhub to address the challenges faced by patients seeking medical cannabis. Many users struggle with finding reliable dispensaries that comply with legal regulations while also providing the products they need. Navigating this complex landscape can be overwhelming, leading to frustration and delays in receiving necessary care.
            </p>
            {/* <ul className="mt-6 space-y-3 text-sm md:text-base md:font-extralight list-disc list-inside text-gray-200">
              <li>Lorem Ipsum Dolor Sit Amet Consectetur.</li>
              <li>Justo Nisl Id Amet Suscipit Lorem Vestibulum Quam.</li>
              <li>Ut Nulla In Fringilla Erat. Faucibus A Ultrices Rhoncus Urna.</li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
