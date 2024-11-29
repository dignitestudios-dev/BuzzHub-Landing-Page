import React, { useState } from 'react';
import { GreenleafImage, howitworksBg, howitWorks1, howitWorks2, howitWorks3, howitWorks4, icon1, icon1white, icon2, icon2white, icon3, icon3white, icon4, icon4white, icon5, icon5white, icon6, icon6white } from "../assets/export";

const HowItWorks = () => {
  const [isCustomerApp, setIsCustomerApp] = useState(true);

  const handleAppToggle = (isCustomer) => {
    setIsCustomerApp(isCustomer);
  };

  const stepsData = isCustomerApp
    ? [
        { icon: icon1, iconWhite: icon1white, title: "Login/Signup", description: "Join Buzzhub easily with secure sign-up via email or social media!" },
        { icon: icon3, iconWhite: icon3white, title: "Product Search", description: "Find cannabis products quickly with our intuitive search filters!" },
        { icon: icon4, iconWhite: icon4white, title: "Product Ordering", description: "Order effortlessly with easy cart management and secure checkout!" },
        { icon: icon2, iconWhite: icon2white, title: "Product Delivery", description: "Choose convenient delivery or pickup options tailored to you!" },
      ]
    : [
      { icon: icon1, iconWhite: icon1white, title: "Login/Signup", description: "Access your vendor account and manage your listings and orders." },
        { icon: icon5, iconWhite: icon5white, title: "Get Order & Dispatch", description: " Receive and manage incoming orders, track order status, and dispatch orders." },
        { icon: icon6, iconWhite: icon6white, title: "Manage Orders", description: "Complete your dispensary profile to provide buyers with information about your business" },
        { icon: icon2, iconWhite: icon2white, title: "Add Product Listing", description: " Create detailed product listings with images, descriptions, prices, and availability." },

      ];

  return (
    <section className="py-20 bg-white p-8" id="howItWorks">
      <style>
  {`
    @keyframes bounceDown {
      0%, 100% {
        transform: translateY(0) rotate(-6deg);
      }
      40% {
        transform: translateY(-30px) rotate(-6deg);
      }
      60% {
        transform: translateY(-15px) rotate(-6deg);
      }
    }
    @keyframes bounceUp {
      0%, 100% {
        transform: translateY(0) rotate(6deg);
      }
      40% {
        transform: translateY(30px) rotate(6deg);
      }
      60% {
        transform: translateY(15px) rotate(6deg);
      }
    }
    .bounce-down {
      animation: bounceDown 4.5s ease-in-out infinite; /* Slowed down */
    }
    .bounce-up {
      animation: bounceUp 4.5s ease-in-out infinite; /* Slowed down */
    }
  `}
</style>


      <img src={GreenleafImage} alt="Green Leaf Decoration" className="w-14 h-14 mx-auto mb-2" />
      <div className="mb-12 text-center">
        <p className="text-green-600 font-medium text-[22px]">How It Works</p>
        <h2 className="text-2xl md:text-[42px] font-semibold mt-2">How Does This App Work</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-medium md:text-[16px]">
        Effortlessly explore dispensaries, compare products, and place secure orders. Whether you're a customer or a vendor, Buzzhub streamlines the process for all your cannabis needs.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center mb-6">
        <div className="bg-[#F7F7F7] w-full max-w-[386px] h-[70px] rounded-full p-2 flex items-center">
          <button onClick={() => handleAppToggle(true)} className={`flex-1 h-[50px] rounded-full font-normal text-sm  md:text-[18px] md:text-normal ${isCustomerApp ? 'bg-[#1D7C42] text-white' : 'text-gray-700'}`}>
            Customer App
          </button>
          <button onClick={() => handleAppToggle(false)} className={`flex-1 h-[50px] rounded-full font-normal text-sm md:text-[18px] md:text-normal ${!isCustomerApp ? 'bg-[#1D7C42] text-white' : 'text-gray-700'}`}>
            Vendor App
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between mb-16">
        <div className="relative flex justify-center items-center mb-8 md:mb-0 md:w-1/2">
          <div
            className={`absolute inset-0 flex justify-center items-center bg-no-repeat bg-center ${isCustomerApp ? 'bg-contain' : 'bg-cover md:bg-contain'}`}
            style={{ backgroundImage: `url(${howitworksBg})` }}
          >
            <div className="w-72 h-72 md:w-[350px] md:h-[350px] opacity-30" />
            <div className="w-72 h-72 md:w-[350px] md:h-[350px] opacity-30" />
          </div>
          <img
            src={isCustomerApp ? howitWorks4 : howitWorks1}
            alt={isCustomerApp ? "Customer App Mockup 1" : "Vendor App Mockup 1"}
            className="w-36 md:w-[280px] md:h-[514px] transform mb-8 -rotate-6 translate-x-2 z-10 mr-2 bounce-down"
          />
          <img
            src={isCustomerApp ? howitWorks3 : howitWorks2}
            alt={isCustomerApp ? "Customer App Mockup 2" : "Vendor App Mockup 2"}
            className="w-36 md:w-[280px] md:h-[514px] translate-y-16 translate-x-8 transform rotate-6 -ml-8 z-10 bounce-up"
          />
        </div>

        <div className="md:w-1/2 md:ml-[-40px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"> 
            {stepsData.map((step, index) => (
              <Step key={index} icon={step.icon} iconWhite={step.iconWhite} title={step.title} description={step.description} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Step = ({ icon, iconWhite, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-start text-center md:text-left">
      <div 
        className={`flex items-center justify-center w-[70px] h-[70px] rounded-lg ${isHovered ? 'bg-[#1D7C42]' : 'bg-[#E6F4EC]'} transition-all duration-300`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      > 
        <img src={isHovered ? iconWhite : icon} alt={title} className="w-16 h-16 p-2" />
      </div>
      <h3 className="text-lg font-semibold mt-2">{title}</h3>
      <p className="text-gray-600 text-left text text-sm md:text-base mb-6">{description}</p>
    </div>
  );
};

export default HowItWorks;
