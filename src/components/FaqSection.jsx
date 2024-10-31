import React, { useState } from 'react';
import { GreenleafImage } from "../assets/export";


const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Lorem Ipsum Dolor Sit Amet Consectetur?',
      answer: 'Lorem Ipsum Dolor Sit Amet Consectetur. Erim Eu Viverra Diam Volutpat Eu. Id Pharetra Sit Consectetur Eget Senectus Mi. Vel Pellentesque In Consectetur Blandit Integer Orci Neque Tellus. Lectus Eget Ornare Urna Adipiscing Eti Condimentum. Risus Vestibulum Viverra Ultrices Pulvinar Leo Purus Mi Volutpat Magnis. Non Et Pellentesque Dictumst Diam Facilisi Quisque Viverra. Ut Orci Pretium Id Non Morbi Viverra Odio. In Dictumst Lectus Ipsum Lorem Dictum Et In Nibh Urna. Mattis Elit Massa Odio Arcu. Sem Ultrices Tempus Hac Aliquet Eleifend Magna Bibendum Neque Laoreet. Ut Eget Aliquam Sem Neque Id Turpis Neque Blandit Tristique.'
    },
    { question: 'Lorem Ipsum Dolor Sit Amet Consectetur?', answer: 'Answer for second question goes here.' },
    { question: 'Lorem Ipsum Dolor Sit Amet Consectetur?', answer: 'Answer for third question goes here.' },
    { question: 'Lorem Ipsum Dolor Sit Amet Consectetur?', answer: 'Answer for fourth question goes here.' },
    { question: 'Lorem Ipsum Dolor Sit Amet Consectetur?', answer: 'Answer for fifth question goes here.' },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto" id="faqs">
      <div className="text-center mb-8">
      <img
          src={GreenleafImage}
          alt="Green Leaf Decoration"
          className="w-16 h-auto mx-auto" 
        />
        <h2 className="text-[#1D7C42] mx-auto font-medium text-[22px] flex justify-center items-center">
          FAQs
        </h2>
        <h1 className="text-[42px] font-bold mt-2 mb-4">We're Here To Answer All <br/>  Your Questions.</h1>
      </div>

      <div className="flex flex-col items-center space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            onClick={() => toggleFAQ(index)}
            className={`p-6 rounded-xl w-full md:w-[1200px] items-center justify-center cursor-pointer border transition-all duration-300 ease-in-out`}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-[18px] font-medium text-center pl-4">{faq.question}</h3>
              <span className="text-green-500 text-2xl">
                {openIndex === index ? 'x' : '+'}
              </span>
            </div>
            {openIndex === index && (
              <p className="text-[#969696] text-[14px] mt-4 text-left pl-4">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
