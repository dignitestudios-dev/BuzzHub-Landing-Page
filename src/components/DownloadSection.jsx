import React from "react";
import {
  aboutPhone1,
  aboutPhone2,
  featurebg,
  GreenleafImage,
  playstore,
  appstore,
} from "../assets/export";

const DownloadSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center p-5 lg:p-10 bg-white">
      <div className="relative flex-1 flex items-center justify-center mb-8 lg:mb-0">
        <img
          src={featurebg}
          className="absolute top-[-80px] w-full h-full"
        />

        <div className="relative z-10 flex">
          <img
            src={aboutPhone1}
            alt="Phone Screenshot 1"
            className="w-[160px] lg:w-[290.93px] h-auto transform rotate-[-5deg] translate-x-4 lg:translate-x-16 animate-bounce-down"
          />
          <img
            src={aboutPhone2}
            alt="Phone Screenshot 2"
            className="w-[180px] lg:w-[322.28px] h-auto transform  -translate-x-4 translate-y-4 lg:translate-x-6 lg:translate-y-12 animate-bounce-up"
          />
        </div>
      </div>

      <div className="flex-1 text-left z-10">
        <img
          src={GreenleafImage}
          alt="Green Leaf Decoration"
          className="w-12 h-auto mb-2 lg:w-16"
        />
        <h2 className="text-[#1D7C42] font-medium text-[22px] flex items-center">
          Get The App
        </h2>
        <h1 className="text-3xl lg:text-4xl font-semibold mt-2 mb-4">Get Started Today!</h1>
        <p className="text-gray-600 mb-6 text-sm lg:text-base">
          <span>
          Experience the convenience and ease of cannabis delivery with Buzzhub. 
  
          </span>
          
          
          <br />
          Download our app now and start exploring the best products from trusted dispensaries 
          <br />
          in your area.
        </p>

       <div className="flex flex-col sm:flex-row justify-center items-center space-x-4 sm:space-x-6">
  <a
    href="#download"
    className="text-white rounded-lg py-2 px-3 mb-2 sm:mb-0 flex items-center text-sm sm:text-base"
  >
    <img src={playstore} alt="Google Play" className="w-20 h-auto sm:w-24" />
  </a>
  <a
    href="#download"
    className="text-white rounded-lg py-2 px-3 flex items-center text-sm sm:text-base"
  >
    <img src={appstore} alt="App Store" className="w-20 h-auto sm:w-24" />
  </a>
</div>

      </div>
    </div>
  );
};

export default DownloadSection;
