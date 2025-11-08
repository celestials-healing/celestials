'use client'
import { useState, useEffect } from 'react';

export default function WhyCelestialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      title: 'We Understand',
      description: "At Celestial, we don't just track your stress — we understand it. Our approach blends ancient wisdom with empathy, helping you heal deeply and meaningfully.",
      image: '/about.jpeg'
    },
    {
      title: 'Expertise',
      description: 'Every session is led by trained Reiki masters, Yoga instructors, and Astrology professionals who truly know their craft — not influencers.',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80'
    },
    {
      title: 'Science Meets Soul',
      description: 'We track your mood, sleep, and energy to guide you with personalized practices rooted in traditional healing — where modern science meets timeless wisdom.',
      image: '/image(1).jpg'
    },
    {
      title: 'Your Journey, Your Plan',
      description: 'No generic plans. Every step is personalized based on your emotions, energy, and stars — because your healing journey should be uniquely yours.',
      image: '/yoga.jpg'
    },
    {
      title: 'A Safe Space to Be You',
      description: 'No judgment. No pressure. Celestials is your space to pause, breathe, and start feeling like yourself again.',
      image: '/image.png'
    }
  ];

  useEffect(() => {
    if (hoveredIndex === null) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % features.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [hoveredIndex, features.length]);

  const currentImage = hoveredIndex !== null ? hoveredIndex : activeIndex;

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white to-[#f6cf92] py-12 md:py-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 md:top-20 left-0 w-40 h-40 md:w-72 md:h-72 bg-[#ffd7a8] opacity-15 rounded-full blur-3xl" />
      <div className="absolute bottom-10 md:bottom-20 right-0 w-48 h-48 md:w-96 md:h-96 bg-[#f6d992] opacity-15 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16 animate-fadeIn">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#4D5557] mb-4 md:mb-6 px-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Why <span className="bg-gradient-to-r from-[#6a7577] to-[#4D5557] bg-clip-text text-transparent">Celestials?</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-[#4A1A11] max-w-3xl mx-auto leading-relaxed px-4">
            Our holistic programs and mindful practices drive transformation within your spiritual journey, 
            creating a meaningful impact for your life path.
          </p>
        </div>

        {/* Mobile Layout - Stacked Cards with Images */}
        <div className="lg:hidden space-y-6 max-w-lg mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 transform ${
                activeIndex === index
                  ? 'shadow-2xl scale-105'
                  : 'shadow-lg'
              }`}
              style={{
                animation: `fadeInUp ${0.5 + index * 0.1}s ease-out both`
              }}
            >
              {/* Image Background */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-700"
                  style={{
                    transform: activeIndex === index ? 'scale(1.1)' : 'scale(1)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#32120b] via-[#32120b]/70 to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 
                    className="text-xl sm:text-2xl font-bold text-[#f6cf92]"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {feature.title}
                  </h3>
                  <div className={`w-2 h-2 rounded-full bg-[#f6cf92] transition-opacity duration-300 ${
                    activeIndex === index ? 'opacity-100' : 'opacity-0'
                  }`} />
                </div>
                <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Active Indicator Bar */}
              <div 
                className={`absolute top-0 left-0 right-0 h-1 bg-[#f6cf92] transition-all duration-500 ${
                  activeIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>
          ))}

          {/* Mobile Progress Dots */}
          <div className="flex justify-center gap-2 pt-4">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-500 rounded-full ${
                  activeIndex === index
                    ? 'w-8 h-2 bg-gradient-to-r from-[#32120b] to-[#4a1e16]'
                    : 'w-2 h-2 bg-[#4D5557]/30'
                }`}
                aria-label={`Go to ${features[index].title}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Layout - Original Two Column */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Side - Image Container */}
          <div className="relative h-[650px] lg:h-[750px]">
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    currentImage === index 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-95'
                  }`}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4D5557]/30 to-transparent" />
                </div>
              ))}
              
              <div 
                className="absolute -bottom-10 -right-10 w-32 h-32 opacity-20"
                style={{ animation: 'rotateSlow 40s linear infinite' }}
              >
                <div className="w-full h-full bg-[#4D5557] rounded-full blur-xl" />
              </div>
            </div>
          </div>

          {/* Right Side - Feature Cards */}
          <div className="space-y-3 max-w-[650px]">
            {features.map((feature, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative p-4 rounded-2xl cursor-pointer transition-all duration-500 transform ${
                  (hoveredIndex === index || (hoveredIndex === null && activeIndex === index))
                    ? 'bg-gradient-to-r from-[#32120b] to-[#4a1e16] shadow-2xl scale-105 -translate-x-2'
                    : 'bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl'
                }`}
                style={{
                  animation: `fadeInUp ${0.5 + index * 0.2}s ease-out both`
                }}
              >
                <div 
                  className={`absolute left-0 top-0 bottom-0 w-1 rounded-r-full transition-all duration-500 ${
                    (hoveredIndex === index || (hoveredIndex === null && activeIndex === index))
                      ? 'bg-[#f6cf92] opacity-100'
                      : 'bg-[#4D5557] opacity-0'
                  }`}
                />

                <h3 
                  className={`text-lg font-bold mb-3 transition-colors duration-500 ${
                    (hoveredIndex === index || (hoveredIndex === null && activeIndex === index))
                      ? 'text-[#f6cf92]'
                      : 'text-[#4D5557]'
                  }`}
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {feature.title}
                </h3>
                
                <p 
                  className={`text-sm leading-relaxed transition-colors duration-500 ${
                    (hoveredIndex === index || (hoveredIndex === null && activeIndex === index))
                      ? 'text-white/90'
                      : 'text-[#4A1A11]'
                  }`}
                >
                  {feature.description}
                </p>

                <div 
                  className={`absolute top-8 right-8 w-3 h-3 rounded-full transition-all duration-500 ${
                    (hoveredIndex === index || (hoveredIndex === null && activeIndex === index))
                      ? 'bg-[#f6cf92] scale-100'
                      : 'bg-[#4D5557]/20 scale-0'
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes rotateSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out both;
        }
      `}</style>
    </div>
  );
}