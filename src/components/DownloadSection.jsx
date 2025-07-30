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
            className="w-[180px] lg:w-[322.28px] h-auto transform -translate-x-4 translate-y-4 lg:translate-x-6 lg:translate-y-12 animate-bounce-up"
          />
        </div>
      </div>

      <div className="flex-1 text-left z-10">
        <img
          src={GreenleafImage}
          alt="Green Leaf Decoration"
          className="w-12 h-auto mb-4 lg:w-16"
        />
        <h2 className="text-[#1D7C42] font-medium text-[22px] flex items-center">
          Get The App
        </h2>
        <h1 className="text-3xl lg:text-4xl font-semibold mt-2 mb-4">Get Started Today!</h1>
        <p className="text-gray-600 mb-6 text-sm lg:text-base">
          <span>
            Experience the convenience and ease of cannabis delivery. Download our app
          </span>
          <br />
          <span>
            with Buzzhub. Download our app now and start exploring trusted dispensaries in your area
          </span>
          <br />
          the best products from trusted dispensaries in your area.
        </p>

        {/* Flex container to ensure icons are always beside each other */}
        <div className="flex space-x-4"> {/* Flex container with horizontal space between icons */}
          <a
            href="#download"
            className="flex items-center justify-center py-2"
          >
            <img 
              src={playstore} 
              alt="Google Play" 
              className="w-32 h-auto lg:w-44" /* Increase size on large screens */
            />
          </a>
          <a
            href="https://apps.apple.com/us/app/buzzhub-user/id6739570527"
            className="flex items-center justify-center py-2"
          >
            <img 
              src={appstore} 
              alt="App Store" 
              className="w-[125px] h-auto lg:w-44" /* Increase size on large screens */
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
