'use client'
import { useState } from 'react';
import { Mail, Phone } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setErrors({});
    
    try {
      const response = await fetch('/api/Contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        // Handle validation errors from backend
        if (data.errors && data.errors.length > 0) {
          const errorMap: Record<string, string> = {};
          data.errors.forEach((error: { field: string; message: string }) => {
            errorMap[error.field] = error.message;
          });
          setErrors(errorMap);
        } else {
          setErrors({ general: data.message || 'Failed to send message. Please try again.' });
        }
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setErrors({ general: 'Something went wrong. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#f6cf92] to-white overflow-hidden">
      {/* Top Left Circle */}
      <div className="absolute top-0 left-0 w-32 h-32 md:w-48 lg:w-72 md:h-48 lg:h-72 bg-[#f6d992] opacity-30 rounded-full blur-3xl" />
      
      {/* Top Right Circle */}
      <div className="absolute top-0 right-0 w-32 h-32 md:w-48 lg:w-72 md:h-48 lg:h-72 bg-[#f6d992] opacity-30 rounded-full blur-3xl" />

      {/* Background Decorative Element */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#f6d992] opacity-10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#f6d992] opacity-10 rounded-full blur-3xl" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h1 
            className="text-5xl md:text-7xl font-extrabold text-[#4D5557] mb-6"
            style={{ fontFamily: 'Playfair Display' }}
          >
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-[#4A1A11] max-w-2xl mx-auto">
            Have questions about our healing sessions? We&apos;d love to hear from you.
          </p>
        </div>

        {/* Contact Cards Container */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Email Card */}
          <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 fade-in-left">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-[#4D5557] p-6 rounded-full">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#4D5557]" style={{ fontFamily: 'Playfair Display' }}>
                Email Us
              </h3>
              
              <a 
                href="mailto:hello@celestialshealing.com" 
                className="text-xl font-semibold text-[#4D5557] hover:text-[#32120b] transition-colors break-all"
              >
                hello@celestialshealing.com
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 fade-in-right">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-[#4D5557] p-6 rounded-full">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#4D5557]" style={{ fontFamily: 'Playfair Display' }}>
                Call Us
              </h3>
              
              <a 
                href="tel:+7303089983" 
                className="text-xl font-semibold text-[#4D5557] hover:text-[#32120b] transition-colors"
              >
                +91 7303089983
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto fade-in-up-delay-2">
          <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
            <h2 
              className="text-3xl md:text-4xl font-bold text-[#4D5557] mb-8 text-center"
              style={{ fontFamily: 'Playfair Display' }}
            >
              Tell us about your experience
            </h2>

            {submitSuccess && (
              <div className="mb-6 bg-green-50 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                Thank you for Sharing with us.
              </div>
            )}

            {errors.general && (
              <div className="mb-6 bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                {errors.general}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#4D5557] mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className={`w-full px-4 py-3 border ${
                    errors.name ? 'border-red-500' : 'border-[#f6d992]'
                  } text-black rounded-lg focus:ring-2 focus:ring-[#4D5557] focus:border-transparent outline-none transition duration-300`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#4D5557] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className={`w-full px-4 py-3 border ${
                    errors.email ? 'border-red-500' : 'border-[#f6d992]'
                  } text-black rounded-lg focus:ring-2 focus:ring-[#4D5557] focus:border-transparent outline-none transition duration-300`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#4D5557] mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us how we can help you..."
                  rows={6}
                  className={`w-full px-4 py-3 border ${
                    errors.message ? 'border-red-500' : 'border-[#f6d992]'
                  } text-black rounded-lg focus:ring-2 focus:ring-[#4D5557] focus:border-transparent outline-none transition duration-300 resize-none`}
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 text-lg font-semibold text-white bg-[#4D5557] hover:bg-[#32120b] rounded-full shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                style={{ fontFamily: 'Playfair Display', fontWeight: "400" }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .fade-in-up-delay {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.8s ease-out 0.2s forwards;
        }

        .fade-in-up-delay-2 {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.8s ease-out 0.4s forwards;
        }

        .fade-in-left {
          opacity: 0;
          transform: translateX(-30px);
          animation: fadeInLeft 0.8s ease-out 0.2s forwards;
        }

        .fade-in-right {
          opacity: 0;
          transform: translateX(30px);
          animation: fadeInRight 0.8s ease-out 0.4s forwards;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        button:not(:disabled):hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(77, 85, 87, 0.3);
        }

        input:focus, textarea:focus {
          transform: translateY(-1px);
          box-shadow: 0 5px 15px rgba(77, 85, 87, 0.1);
        }
      `}</style>
    </div>
  );
}