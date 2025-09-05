"use client"

import React, { useState, ReactNode } from 'react';
import { ChevronUpIcon } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string | ReactNode;
}

const ReikiFAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems: FAQItem[] = [
    {
      question: 'What is Reiki certification?',
      answer: 'Reiki certification is a process that trains individuals in the practice of Reiki healing. It involves learning techniques to channel energy for healing purposes. Our courses are designed to provide comprehensive knowledge and hands-on experience.'
    },
    {
      question: 'How long is the course?',
      answer: 'The Reiki certification course typically spans several weeks, depending on the level of certification. Each level includes both theoretical and practical components. We offer flexible scheduling to accommodate your needs.'
    },
    {
      question: 'Is prior experience needed?',
      answer: 'No prior experience is necessary to begin our Reiki certification courses. We welcome beginners and those looking to deepen their practice. Our instructors provide guidance tailored to your skill level.'
    },
    {
      question: 'What materials are provided?',
      answer: 'Participants receive comprehensive course materials, including manuals and access to online resources. Additional tools, such as guided meditations and practice exercises, are also included. We ensure you have everything needed for a successful learning experience.'
    },
    {
      question: 'How do I enroll?',
      answer: 'Enrolling in our Reiki certification course is simple! You can sign up directly through our website or contact us for assistance. We\'re here to help you begin your journey.'
    }
  ];

  return (
    <div className="px-4 py-8 flex items-center text-[#4D5557] pt-20 pb-20">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <h1 className="text-6xl font-bold mb-4" style={{ fontFamily: "'CelestialFont', Petrona, serif",}}>FAQs</h1>
          <p className="mb-6 text-[#4A1A11]">Find answers to your questions about our Reiki certification course and related services.</p>
          <button className="border border-[#4A1A11] text-white py-2 px-6 bg-[#4A1A11] hover:bg-gray-800 transition-colors">
            Contact
          </button>
        </div>
        
        <div className="md:w-2/3">
          {faqItems.map((item, index) => (
            <div key={index}>
              <div className="border-t border-[#4D5557]">
                <button
                  className="w-full py-4 flex justify-between items-center text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <h2 className="text-lg font-medium">{item.question}</h2>
                  <ChevronUpIcon 
                    className={`h-5 w-5 transition-transform ${openIndex === index ? '' : 'transform rotate-180'}`}
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 pb-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              </div>
              {/* Add line below each FAQ item, including the last one */}
              <div className="border-t border-[#4D5557] mt-4"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReikiFAQs;