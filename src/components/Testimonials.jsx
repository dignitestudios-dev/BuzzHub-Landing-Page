import React, { useState, useEffect } from 'react';
import { GreenleafImage } from "../assets/export";

const Testimonials = () => {
  const [testimonials] = useState([
    {
      id: 1,
      name: 'Mike D',
      designation: 'Designation',
      message:
        'I love how convenient this app makes everything. My order arrives quickly, and the discreet packaging is a big plus!',
      image: 'https://i.pravatar.cc/50?img=12',
    },
    {
      id: 2,
      name: 'Jamie L',
      designation: 'Designation',
      message:
        'The recommendations in the app are spot on! I always find something new to try, and the support team is just a message away.',
      image: 'https://i.pravatar.cc/50?img=13',
    },
    {
      id: 3,
      name: 'Chris M',
      designation: 'Designation',
      message:
        'The variety on this app is fantastic, and I can always find something in my price range. It’s become my go-to for all my cannabis needs.',
      image: 'https://i.pravatar.cc/50?img=14',
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleTestimonialClick = (index) => {
    setCurrentIndex(index);
  };

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
          See what our customers have to say about their <br /> Buzzhub experience.
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
                w-[350px] h-[250px] flex-shrink-0 mx-2 
                md:w-[350px] md:h-[250px] 
                mobile:w-[90%] mobile:h-auto mobile:mx-auto mobile:p-2 mobile:my-2`}
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
              <p className="text-[14px] p-2 font-extralight leading-relaxed italic">{testimonial.message}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .mobile\:w-\[90\%] {
            width: 90%;  // Reduce card width on smaller devices
          }
          .mobile\:h-auto {
            height: auto;  // Adjust height to content
          }
          .mobile\:p-2 {
            padding: 8px;  // Reduce padding inside the cards
          }
          .mobile\:my-2 {
            margin-top: 8px;
            margin-bottom: 8px;  // Reduce margin between cards
          }
        }

        @media (max-width: 375px) {
          .mobile\:w-\[90\%] {
            width: 90%;  // Ensure the card takes 90% of the screen width on iPhone SE
          }
          .mobile\:text-[12px] {
            font-size: 12px;  // Reduce font size for small screens
          }
          .mobile\:p-2 {
            padding: 6px;  // Further reduce padding for small screens
          }
          .mobile\:my-2 {
            margin-top: 4px;
            margin-bottom: 4px;  // Further reduce margin for very small screens
          }
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
