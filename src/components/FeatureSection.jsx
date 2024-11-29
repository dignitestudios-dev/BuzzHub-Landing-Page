import React from "react";
import { featurebg, featureImage, GreenleafImage } from "../assets/export";

const FeatureSection = () => {
  return (
    <section className="bg-white text-center">
      <div id="features">
        <img
          src={GreenleafImage}
          alt="Green Leaf Decoration"
          className="w-12 h-12 mx-auto mb-4"
        />
        <p className="text-green-600 font-medium">Features</p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
What Does Buzzhub Offer?
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto p-2">
          Buzzhub is committed to providing a safe, secure, and convenient platform for both buyers and dispensaries. With a focus on user-friendly interfaces, transparent information, and excellent customer support, Buzzhub aims to build trust and foster a thriving cannabis community.
        </p>
      </div>

      {/* Features for Mobile */}
      <div className="relative flex flex-col md:hidden items-center justify-center mt-16 space-y-12">
        <FeatureItem
          number="1"
          title="User-Friendly Interface"
          description={
            <>
              Both buyer and dispensary interfaces <br /> should be intuitive and easy to navigate, <br />  with clear labeling and a logical flow.
            </>
          }
          alignment="center"
        />

        <FeatureItem
          number="2"
          title="Transparent Information"
          description={
            <>
              Provide clear and accurate information <br /> about products, pricing, <br /> and dispensary details for both buyers <br /> and dispensaries. This includes product <br /> descriptions, strain information, <br /> pricing, and dispensary locations.
            </>
          }
          alignment="center"
        />

        <FeatureItem
          number="3"
          title="Secure Transactions"
          description={
            <>
              Ensure that all transactions are secure <br /> and protected from fraud. This includes using <br /> encryption for sensitive data and <br /> implementing robust security measures.
            </>
          }
          alignment="center"
          mobileMarginRight="mr-4"  
        />

        <FeatureItem
          number="4"
          title="Excellent Customer Support"
          description={
            <>
              Offer responsive and helpful customer <br /> support to address any questions or concerns <br /> that buyers or dispensaries may have. <br /> This can include live chat, <br /> email support, or a FAQ section.
            </>
          }
          alignment="center"
          mobileMarginRight="mr-4"  
        />
      </div>

      {/* Features for Desktop */}
      <div className="relative flex flex-col md:flex-row items-center justify-center mt-16 space-y-12 md:space-y-0 md:space-x-8">
        <div className="flex flex-col items-center md:items-end space-y-12 md:mr-8 text-right hidden md:block">
          <FeatureItem
            number="1"
            title="User-Friendly Interface"
            description={
              <>
                Both buyer and dispensary interfaces <br /> should be intuitive and easy to navigate, <br />  with clear labeling and a logical flow.
              </>
            }
            alignment="right"
          />

          <FeatureItem
            number="3"
            title="Secure Transactions"
            description={
              <>
                Ensure that all transactions are secure  <br /> and protected from fraud. This includes using   <br /> encryption for sensitive data and   <br /> implementing robust security measures.
              </>
            }
            alignment="right"
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

        <div className="flex flex-col items-center md:items-start space-y-12 md:ml-8 text-left hidden md:block">
          <FeatureItem
            number="2"
            title="Transparent Information"
            description={
              <>
                Provide clear and accurate information  <br /> about products, pricing,  <br /> and dispensary details for both buyers  <br /> and dispensaries. This includes product  <br /> descriptions, strain information,   <br /> pricing, and dispensary locations.
              </>
            }
            alignment="left"
          />
          <FeatureItem
            number="4"
            title="Excellent Customer Support"
            description={
              <>
               Offer responsive and helpful customer  <br /> support to address any questions or concerns  <br /> that buyers or dispensaries may have.  <br /> This can include live chat,  <br /> email support, or a FAQ section.
              </>
            }
            alignment="left"
          />
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ number, title, description, alignment = "left", mobileMarginRight = "" }) => {
  const alignmentClasses = alignment === "left" ? "items-start" : alignment === "right" ? "items-end" : "items-center";
  const justifyClasses = alignment === "left" ? "justify-start" : alignment === "right" ? "justify-end" : "justify-center";

  return (
    <div className={`flex flex-col ${alignmentClasses} ${mobileMarginRight} space-y-2`}>
      <div className={`flex ${justifyClasses}`}>
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
