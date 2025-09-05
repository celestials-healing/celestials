"use client"

import React, { useState, FormEvent, ChangeEvent } from 'react';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState('');
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Success handling
      setIsSuccess(true);
      setEmail('');
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message); // ✅ Use the actual error message
      } else {
        setError('Something went wrong. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (

    <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto text-[#4D5557]">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold leading-tight mb-2">
            Stay Updated with Our Newsletter
          </h2>
        </div>
        
        <div className="w-full md:w-1/2">
          <p className="mb-6">
            Join our community to receive the latest news, tips, and exclusive content on Reiki and spiritual growth. Don&apos;t miss out on valuable insights that can enhance your journey.
          </p>
          
          <form onSubmit={handleSubmit} className="mb-2">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                placeholder="Your Email Here"
                className="flex-1 border border-[#4D5557] px-4 py-3"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-black text-white px-6 py-3 whitespace-nowrap hover:bg-gray-800 transition-colors disabled:bg-gray-500"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
              </button>
            </div>
          </form>
          
          {isSuccess && (
            <p className="text-green-600 text-sm mt-2">
              Thank you for subscribing!
            </p>
          )}
          
          {error && (
            <p className="text-red-600 text-sm mt-2">
              {error}
            </p>
          )}
          
          <p className="text-sm text-gray-700 mt-4">
            By clicking Subscribe Now, you confirm your agreement with our Terms and Conditions.
          </p>
        </div>
      </div>
    </section>
    
  );
};

export default NewsletterSubscription;