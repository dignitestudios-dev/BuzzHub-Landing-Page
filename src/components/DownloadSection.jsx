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
          className="w-12 h-auto mb-4 lg:w-16"
        />
        <h2 className="text-green-500 font-semibold text-lg flex items-center">
          Get The App
        </h2>
        <h1 className="text-3xl lg:text-4xl font-bold mt-2 mb-4">Get Started Today!</h1>
        <p className="text-gray-600 mb-6 text-sm lg:text-base">
          <span>
            Lorem ipsum dolor sit amet consectetur. Justo nisl id amet suscipit
            lorem
          </span>
          <br />
          <span>
            vestibulum quam. Ut nulla in fringilla erat. Faucibus a ultrices
            rhoncus urna. Ut
          </span>
          <br />
          nulla in fringilla erat. Faucibus a ultrices rhoncus urna.
        </p>

        <div className="flex flex-col lg:flex-row">
          <a
            href="#download"
            className="text-white rounded-lg py-2 mb-2 lg:mb-0 flex items-center"
          >
            <img src={playstore} alt="Google Play" />
          </a>
          <a
            href="#download"
            className="text-white rounded-lg md:px-4 py-2 flex items-center"
          >
            <img src={appstore} alt="App Store" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
