import React, { useState } from 'react';
import { GreenleafImage } from "../assets/export";


const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is Buzzhub?',
      answer: 'Buzzhub is a cannabis delivery app that connects buyers with trusted dispensaries in your area.'
    },
    { question: 'How does Buzzhub work?', answer: 'Simply download the app, create an account, and start browsing products from local dispensaries. Place your order, and it will be delivered right to your doorstep.' },
    { question: 'Is Buzzhub legal?', answer: 'Yes, Buzzhub operates within the legal framework of your region. We adhere to all applicable laws and regulations.' },
    { question: 'How secure is Buzzhub?', answer: 'We take your privacy and security seriously. We use state-of-the-art encryption to protect your personal information and payment details.' },
    { question: 'Can I track my order?', answer: 'Yes, you can track your order status in real-time through the Buzzhub app.' },
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
          className="w-12 h-auto mx-auto" 
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
            className={`p-4 rounded-3xl w-full md:w-[1200px] items-center justify-center cursor-pointer border transition-all duration-300 ease-in-out `}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-[18px] font-medium text-center pl-4">{faq.question}</h3>
              <span className="text-[#1D7C42] text-[40px]">
                {openIndex === index ? '×' : '+'}
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
