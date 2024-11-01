  import React from 'react';
  import { featurebg, featureImage, GreenleafImage } from "../assets/export";

  const FeatureSection = () => {
    return (
      <section className="bg-white text-center">
        <div id="features">
          <img
            src={GreenleafImage}
            alt="Green Leaf Decoration"
            className="w-auto h-auto mx-auto mb-4" 
          />
          <p className="text-green-600 font-medium uppercase">Features</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">How Buzzhub Works</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto p-2">
          Effortlessly explore dispensaries, compare products, and place secure orders. Whether you're a customer or a vendor, Buzzhub streamlines the process for all your cannabis needs.          </p>
        </div>

        <div className="relative flex flex-col md:flex-row items-center justify-center mt-16 space-y-12 md:space-y-0">
          <div className="flex flex-col items-center md:items-end space-y-12 md:mr-8 text-right">
          <FeatureItem
  number="1"
  title="Log/Sign Up"
  description={
    <>
      Join Buzzhub easily with secure sign-up via <br /> email or social media!
      Start enjoying a seamless <br /> shopping experience today!
    </>
  }
  alignment="right"
/>

            <FeatureItem
              number="3"
              title="Product Ordering"
              description={
                <>
                 Order effortlessly with easy <br /> cart management and secure checkout!
                </>
              }              alignment="right"
            />
          </div>
          
          <img
            src={featurebg}
            className="absolute top-[-80px] w-full hidden md:block md:w-auto" 
            alt="Background"
          />
          
          <div className="relative mx-8 md:mx-24">
            <img
              src={featureImage}
              alt="Mobile Mockup"
              className="w-full max-w-xs md:max-w-[246.71px] md:max-h-[503.61px] animate-bounce-up ml-12"
            />
          </div>

          <div className="flex flex-col items-center md:items-start space-y-12 md:ml-8 text-left">
            <FeatureItem
              number="2"
              title="Product Search"
              description={
                <>
Find cannabis products quickly with our <br /> intuitive search filters!
Start enjoying <br /> a seamless shopping  experience today!
                </>
              }              alignment="left"
            />
            <FeatureItem
              number="4"
              title=" Product Delivery"
              description={
                <>
                  Choose convenient delivery or pickup <br /> options tailored to you!
                </>
              }              alignment="left"
            />
          </div>
        </div>
      </section>
    );
  };

  const FeatureItem = ({ number, title, description, alignment }) => {
    return (
      <div className={`flex flex-col items-${alignment === 'left' ? 'start' : 'end'} space-y-2`}>
      <div className={`flex justify-${alignment}`}>
      <p className="flex items-center justify-center w-[70px] h-[70px] rounded-2xl bg-[#E6F4EC] text-[#1D7C42] font-normal text-[32px] mb-2">
          {number}
        </p>
        </div>
        
        <h3 className="text-xl font-semibold">{title}</h3> 
        <p className="text-gray-600 text-[16px]">{description}</p>
      </div>
    );
  };



  export default FeatureSection;
