"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { ChevronDownIcon } from "lucide-react";

interface FormDataType {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  topic: string;
  source: string;
  message: string;
  agreeToTerms: boolean;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormDataType>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    topic: "",
    source: "",
    message: "",
    agreeToTerms: false,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  // const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setFormData((prev) => ({
  //     ...prev,
  //     source: e.target.value,
  //   }));
  // };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="relative  bg-gradient-to-b from-[#f6cf92] to-white overflow-hidden pt-20 pb-20">
    <div className="max-w-4xl mx-auto px-4 py-12 border border-[#4D5557] text-[#4D5557] ">
      <div className="text-center mb-8">
        {/* <p className="text-sm mb-1">Connect</p> */}
        <h1 className="text-5xl font-bold mb-3">Please Register</h1>
        <p>We&apos;re here to help you with our expertise in your journey.</p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
        {/* First & Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label htmlFor="firstName" className="block mb-2 text-sm">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full border border-[#4D5557] px-3 py-2"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block mb-2 text-sm">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full border border-[#4D5557] px-3 py-2"
              required
            />
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border border-[#4D5557] px-3 py-2"
              required
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block mb-2 text-sm">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-full border border-[#4D5557] px-3 py-2"
            />
          </div>
        </div>

        {/* Select Topic */}
        <div className="mb-6">
          <label htmlFor="topic" className="block mb-2 text-sm">Select a Course</label>
          <div className="relative">
            <select
              id="topic"
              name="topic"
              value={formData.topic}
              onChange={handleInputChange}
              className="w-full border border-[#4D5557] px-3 py-2 appearance-none pr-10"
              required
            >
              <option value="">Choose one...</option>
              <option value="general">Raiki Courses</option>
              <option value="services">Astrology Insights</option>
              <option value="pricing">Yoga Practices</option>
              <option value="support">Tarot Readings</option>
              
            </select>
            <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none" />
          </div>
        </div>

        {/* Radio Buttons */}
        {/* <div className="mb-6">
          <p className="block mb-3 text-sm">How did you hear?</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {["Referral Source", "Social Media", "Website Visit", "Friend Recommendation", "Other Source", "Other"].map((option) => (
              <div className="flex items-center" key={option}>
                <input
                  type="radio"
                  id={option}
                  name="source"
                  value={option}
                  checked={formData.source === option}
                  onChange={handleRadioChange}
                  className="mr-2 h-4 w-4"
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>
        </div> */}

        {/* Message */}
        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 text-sm">Why you want to join this course?</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={6}
            placeholder="Enter your message..."
            className="w-full border border-[#4D5557] px-3 py-2"
            required
          ></textarea>
        </div>

        {/* Checkbox */}
        <div className="mb-8">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="agreeToTerms"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleCheckboxChange}
              className="mr-2 h-4 w-4"
              required
            />
            <label htmlFor="agreeToTerms" className="text-sm">I agree to Terms</label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#4A1A11] text-white px-8 py-2 hover:bg-gray-800 transition-colors"
          >
            Go To Payment
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default ContactForm;