import React, { useState, useEffect } from 'react';
import { GreenleafImage } from "../assets/export";

const Testimonials = () => {
  const [testimonials] = useState([
    {
      id: 1,
      name: 'Mike D',
      designation: 'Designation',
      message:
        'Discreet, Reliable Delivery! - I love how convenient this app makes everything. My order arrives quickly, and the discreet packaging is a big plus!',
      image: 'https://i.pravatar.cc/50?img=12',
    },
    {
      id: 2,
      name: 'Alex R',
      designation: 'Designation',
      message:
        'My Go-To Cannabis App - I’ve tried a few different apps, but this one is hands down the best. The product quality is consistently high, and I feel confident in what I’m getting.',
      image: 'https://i.pravatar.cc/50?img=13',
    },
    {
      id: 3,
      name: ' Jamie L',
      designation: 'Designation',
      message:
        'Helpful Recommendations Right in the App - The recommendations in the app are spot on! I always find something new to try, and the support team is just a message away.',
      image: 'https://i.pravatar.cc/50?img=14',
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleTestimonialClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (currentIndex === testimonials.length - 1) {
      const timer = setTimeout(() => {
        setCurrentIndex(0);
      }, 5000); 

      return () => clearTimeout(timer);
    }
  }, [currentIndex, testimonials.length]);

  return (
    <div className="p-6 md:max-w-[1280px] w-auto h-auto mx-auto flex flex-col md:flex-row" id="testimonials">
      <div className="w-full md:w-1/2 mb-8 text-left">
        <img
          src={GreenleafImage}
          alt="Green Leaf Decoration"
          className="w-12 h-12" 
        />
        <h2 className="text-[#1D7C42] font-semibold text-lg mb-2">Testimonials</h2>
        <h1 className="text-4xl font-semibold mb-4">What Our Customers Say</h1>
        <p className="text-gray-600">
        See what our customers have to say about their <br/> Buzzhub experience.
        </p>
      </div>

      <div className="flex overflow-hidden relative w-full">
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${currentIndex * 33.33}%)` }} 
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              onClick={() => handleTestimonialClick(index)}
              className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 ease-in-out 
                ${currentIndex === index ? 'bg-gradient-to-r from-[#1D7C42] to-[#24A456] text-white' : 'bg-white border border-gray-300 text-[#969696]'}
                w-[350px] h-[250px] flex-shrink-0 mx-2 md:w-[350px] md:h-[250px] mobile:w-[90%] mobile:h-[auto] mobile:mx-auto`}
            >
              <div className="flex items-center space-x-3 mb-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-[60px] h-[60px] rounded-full"
                />
                <div>
                  <h3 className={`font-medium ${currentIndex === index ? 'text-white' : 'text-black'}`}>
                    {testimonial.name}
                  </h3>
                  <p className={`text-sm ${currentIndex === index ? 'text-white' : 'text-green-500'}`}>
                    {testimonial.designation}
                  </p>
                </div>
              </div>
              <p className="text-[16px] p-2 font-extralight leading-relaxed italic">{testimonial.message}</p>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @media (max-width: 768px) {
          .mobile\:w-\[90\%\] {
            width: 90%;
          }
          .mobile\:h-\[auto\] {
            height: auto;
          }
        }

        @media (max-width: 375px) and (max-height: 667px) {
          .mobile\:w-\[40\%\] {
            width: 40%;
          }
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
