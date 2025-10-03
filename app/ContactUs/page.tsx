'use client'
import { Mail, Phone } from 'lucide-react';

export default function ContactUs() {
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
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Email Card */}
          <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 fade-in-left">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-[#4D5557] p-6 rounded-full">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#4D5557]" style={{ fontFamily: 'Playfair Display' }}>
                Email Us
              </h3>
              <p className="text-[#4A1A11]">
                Send us a message anytime
              </p>
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
              <p className="text-[#4A1A11]">
                Available Mon-Fri, 9AM-6PM
              </p>
              <a 
                href="tel:+7303089983" 
                className="text-xl font-semibold text-[#4D5557] hover:text-[#32120b] transition-colors"
              >
                +91 7303089983
              </a>
            </div>
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
      `}</style>
    </div>
  );
}