import React, { useState, useEffect } from 'react';
import { GreenleafImage } from "../assets/export";

const Testimonials = () => {
  const [testimonials] = useState([
    {
      id: 1,
      name: 'Ryan Cooper',
      designation: 'Designation',
      message:
        'Lorem Ipsum Dolor Sit Amet Consectetur. Justo Nisl Id Amet Suscipit Lorem Vestibulum Quam. Ut Nulla In Fringilla Erat. Faucibus A Ultrices Rhoncus Urna.',
      image: 'https://i.pravatar.cc/50?img=2',
    },
    {
      id: 2,
      name: 'Simmi Pal',
      designation: 'Designation',
      message:
        'Lorem Ipsum Dolor Sit Amet Consectetur. Justo Nisl Id Amet Suscipit Lorem Vestibulum Quam. Ut Nulla In Fringilla Erat. Faucibus A Ultrices Rhoncus Urna.',
      image: 'https://i.pravatar.cc/50?img=3',
    },
    {
      id: 3,
      name: 'Alex Doe',
      designation: 'Designation',
      message:
        'Lorem Ipsum Dolor Sit Amet Consectetur. Justo Nisl Id Amet Suscipit Lorem Vestibulum Quam. Ut Nulla In Fringilla Erat. Faucibus A Ultrices Rhoncus Urna.',
      image: 'https://i.pravatar.cc/50?img=4',
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
          className="w-auto h-auto" 
        />
        <h2 className="text-[#1D7C42] font-semibold text-lg mb-2">Testimonials</h2>
        <h1 className="text-4xl font-semibold mb-4">What Our Customers Say</h1>
        <p className="text-gray-600">
          Lorem Ipsum Dolor Sit Amet Consectetur. Justo Nisl Id Amet Suscipit Lorem Vestibulum Quam. Ut Nulla In Fringilla Erat. Faucibus A Ultrices Rhoncus Urna.
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
      
      {/* Styles for mobile view */}
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
