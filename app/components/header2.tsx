'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react';


interface ImageData {
  src: string;
  route: string;
  delay: string;
  position: {
    top: string;
    right: string;
  };
  hoverText: string;
}

export default function ResponsiveHero() {
  const router = useRouter();
    const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);


  const handleStartJourney = () => {
    router.push('/about');
  };

  const images = [
    { src: '/about.jpeg', route: '/Yoga', delay: '0.2s', position: { top: '10px', right: '65px' }, hoverText: 'Explore Yoga' },
    { src: '/image.jpg', route: '/courses', delay: '0.4s', position: { top: '80px', right: '215px' }, hoverText: 'Explore Reiki' },
    { src: '/astrology1.jpg', route: '/Astrology', delay: '0.6s', position: { top: '140px', right: '90px' }, hoverText: 'Discover Astrology' },
  ];

    const handleImageClick = (image: ImageData) => {
    setSelectedImage(image);
    setTimeout(() => {
      router.push(image.route);
    }, 600);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#f6cf92] to-white overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute top-0 left-0 w-32 h-32 md:w-48 lg:w-72 md:h-48 lg:h-72 bg-[#f6d992] opacity-30 rounded-full blur-3xl floating" />
      <div className="absolute top-0 right-0 w-32 h-32 md:w-48 lg:w-72 md:h-48 lg:h-72 bg-[#f6d992] opacity-30 rounded-full blur-3xl floating-delayed" />
      <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-[#ffd7a8] opacity-20 rounded-full blur-3xl floating-slow" />

      {/* Background Mandala - Desktop Only */}
      <img
        src="/mandala.png"
        alt="Background Decorative Shape"
        className="absolute z-0 rotate-slow hidden lg:block"
        style={{
          width: '686px',
          height: '686px',
          top: '0px',
          left: '-30px',
          opacity: 1,
        }}
      />
  
      {/* Foreground Woman Image - Desktop Only */}
      <img
        src="/women3.png"
        alt="Decorative"
        className="absolute z-10 gentle-float hidden lg:block"
        style={{
          width: '489px',
          height: '506px',
          top: '140px',
          left: '50px',
          opacity: 1,
        }}
      />

      {/* Desktop Layout */}
      <div className="hidden lg:flex lg:flex-col">
        {/* Heading with gradient text */}
        <h1
          className="absolute z-20 text-8xl xl:text-8xl font-extrabold bg-gradient-to-r from-[#4D5557] via-[#6a7577] to-[#4D5557] bg-clip-text text-[#4D5557] leading-tight fade-in-up"
          style={{
            top: '185px',
            left: '429px',
            width: '950px',
            height: '200px',
            fontFamily: 'Playfair Display',
            fontWeight: 900,
            animationDelay: '0.2s',
          }}
        >
          Welcome to<br />
          Celestials healing.
        </h1>

        {/* Paragraph with subtle shine effect */}
        <p
          className="absolute z-20 text-lg text-[#4A1A11] fade-in-up"
          style={{
            top: '450px',
            left: '445px',
            width: '730px',
            height: '105px',
            fontWeight: 500,
            animationDelay: '0.6s',
            lineHeight: '1.8',
          }}
        >
          Welcome to our serene space dedicated to Reiki Offerings. 
          Explore our courses designed to empower your spiritual journey 
          and enhance your healing abilities.
        </p>

        {/* Enhanced Button with ripple effect */}
        <button
          onClick={handleStartJourney}
          className="absolute z-20 mt-4 px-8 py-4 text-2xl xl:text-3xl font-bold text-white bg-gradient-to-r from-[#4D5557] to-[#5d6769] hover:from-[#32120b] hover:to-[#4a1e16] rounded-full shadow-2xl transition-all duration-500 transform hover:scale-105 pulse-glow"
          style={{
            top: '500px',
            left: '445px',
            fontFamily: 'Playfair Display',
            fontWeight: "400",
          }}
        >
          Start Your Journey
          <span className="absolute inset-0 rounded-full bg-white opacity-0 hover:opacity-20 transition-opacity duration-300"></span>
        </button>

        {/* Interactive Decorative Images with hover effects */}
        <div className="absolute z-20" style={{ top: '30px', right: '60px' }}>
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => handleImageClick(image)}
              className={`absolute slide-in cursor-pointer group ${
                selectedImage?.src === image.src ? 'enlarge-exit' : ''
              }`}
              style={{
                width: index === 0 ? '200px' : index === 1 ? '180px' : '190px',
                height: index === 0 ? '260px' : index === 1 ? '240px' : '230px',
                top: index === 0 ? '0px' : index === 1 ? '50px' : '290px',
                right: index === 0 ? '0px' : index === 1 ? '220px' : '30px',
                animationDelay: image.delay,
              }}
            >
              {/* Subtle pulse indicator for clickability */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#f6d992] to-[#f6cf92] rounded-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 pulse-ring"></div>
              
              {/* Click indicator badge */}
              <div className="absolute -top-2 -right-2 z-30 w-8 h-8 bg-[#32120b] rounded-full shadow-lg flex items-center justify-center opacity-80 group-hover:opacity-0 transition-opacity duration-300 click-pulse">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              
              <div className="relative w-full h-full overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-700 group-hover:scale-105 group-hover:shadow-3xl group-hover:rotate-3 image-float">
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#f6d992] via-[#f6cf92] to-[#4D5557] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl p-1">
                  <div className="w-full h-full bg-white rounded-3xl"></div>
                </div>
                
                <img
                  src={image.src}
                  alt="Decorative"
                  className="relative w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-3xl"
                />
                
                {/* Overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#4D5557] via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500 rounded-3xl"></div>
                
                {/* Decorative corner accent */}
                <div className="absolute top-3 right-3 w-12 h-12 border-t-4 border-r-4 border-white opacity-0 group-hover:opacity-80 transition-all duration-500 rounded-tr-2xl"></div>
                <div className="absolute bottom-3 left-3 w-12 h-12 border-b-4 border-l-4 border-white opacity-0 group-hover:opacity-80 transition-all duration-500 rounded-bl-2xl"></div>
                
                {/* Hover text with better styling */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
                  <span className="text-[#32120b] font-bold text-xl transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 mb-2" style={{ fontFamily: 'Playfair Display' }}>
                    {image.hoverText}
                  </span>
                  <div className="w-16 h-0.5 bg-[#32120b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
                
                {/* Enhanced shimmer effect */}
                <div className="absolute inset-0 shimmer rounded-3xl"></div>
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ boxShadow: '0 0 40px rgba(246, 207, 146, 0.6)' }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col items-center justify-center min-h-screen px-6 relative z-20 pb-20">
        {/* Background Mandala - Mobile */}
        <img
          src="/mandala.png"
          alt="Background Decorative Shape"
          className="absolute z-0 rotate-slow opacity-40"
          style={{
            width: '350px',
            height: '350px',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        />

        {/* Mobile Heading */}
        <h1
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#4D5557] to-[#6a7577] bg-clip-text text-transparent leading-tight text-center mb-6 mt-20 fade-in-up relative z-10"
          style={{
            fontFamily: 'Playfair Display',
            fontWeight: 900,
            animationDelay: '0.2s',
          }}
        >
          Welcome to<br />
          <span>Celestials healing.</span>
        </h1>

        {/* Mobile Image Grid */}
        <div className="relative z-10 w-full max-w-md mt-8 mb-8 fade-in-up" style={{ animationDelay: '0.4s' }}>
          {/* Tap instruction for mobile */}
          <div className="text-center mb-4">
            <p className="text-sm text-[#4D5557] font-medium animate-bounce-slow">
              ✨ Tap any image to explore ✨
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                onClick={() => handleImageClick(image)}
                className={`cursor-pointer group slide-in-mobile ${
                  selectedImage?.src === image.src ? 'enlarge-exit' : ''
                } ${index === 2 ? 'col-span-2 mx-auto w-1/2' : ''}`}
                style={{
                  animationDelay: `${0.6 + index * 0.2}s`,
                }}
              >
                {/* Click indicator for mobile */}
                <div className="absolute -top-1 -right-1 z-30 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center opacity-80 click-pulse">
                  <svg className="w-3 h-3 text-[#4D5557]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </div>
                
                <div className="relative w-full h-48 overflow-hidden rounded-xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl pulse-ring">
                  <img
                    src={image.src}
                    alt="Decorative"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4D5557] via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                  {/* Hover text */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-white font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      Explore
                    </span>
                  </div>
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 shimmer"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Description */}
        <p
          className="text-base md:text-lg text-[#4A1A11] text-center mb-8 leading-relaxed bg-white bg-opacity-80 p-6 rounded-2xl backdrop-blur-sm fade-in-up relative z-10 shadow-lg max-w-md"
          style={{
            fontWeight: 500,
            animationDelay: '1s',
          }}
        >
          Welcome to our serene space dedicated to Reiki offerings. Explore our courses designed to empower your spiritual journey and enhance your healing abilities.
        </p>

        {/* Mobile Button */}
        <button
          onClick={handleStartJourney}
          className="px-8 py-4 text-lg md:text-xl font-semibold text-white bg-gradient-to-r from-[#4D5557] to-[#5d6769] hover:from-[#32120b] hover:to-[#4a1e16] rounded-full shadow-2xl transition-all duration-500 transform hover:scale-105 pulse-glow relative z-10 fade-in-up"
          style={{
            fontFamily: 'Playfair Display',
            fontWeight: "400",
            animationDelay: '1.2s',
          }}
        >
          Start Your Journey
        </button>
      </div>

      {/* Fullscreen overlay for image transition */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-[#f6cf92] flex items-center justify-center">
          <img
            src={selectedImage.src}
            alt="Transitioning"
            className="enlarge-animation rounded-3xl shadow-3xl"
          />
        </div>
      )}

      {/* Enhanced Animations */}
      <style jsx>{`
        .pop-up {
          opacity: 0;
          transform: scale(0.5);
          animation: popUp 0.6s ease-out forwards;
        }

        @keyframes popUp {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .slide-in {
          opacity: 0;
          transform: translateX(100%) rotate(10deg);
          animation: slideIn 0.8s ease-out forwards;
        }

        @keyframes slideIn {
          to {
            transform: translateX(0) rotate(0deg);
            opacity: 1;
          }
        }

        .fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 1s ease-out forwards;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .floating {
          animation: floating 6s ease-in-out infinite;
        }

        .floating-delayed {
          animation: floating 6s ease-in-out infinite;
          animation-delay: 3s;
        }

        .floating-slow {
          animation: floating 8s ease-in-out infinite;
        }

        @keyframes floating {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        .gentle-float {
          animation: gentleFloat 4s ease-in-out infinite;
        }

        @keyframes gentleFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .rotate-slow {
          animation: rotateSlow 60s linear infinite;
        }

        @keyframes rotateSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .pulse-glow {
          animation: pulseGlow 2s ease-in-out infinite;
        }

        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 10px 40px rgba(77, 85, 87, 0.3);
          }
          50% {
            box-shadow: 0 10px 60px rgba(77, 85, 87, 0.5);
          }
        }

        .shimmer {
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          transform: translateX(-100%);
        }

        .group:hover .shimmer {
          animation: shimmer 2s ease-in-out;
        }

        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }

        .image-float {
          animation: imageFloat 6s ease-in-out infinite;
        }

        @keyframes imageFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .image-float:nth-child(2) {
          animation-delay: 1s;
        }

        .image-float:nth-child(3) {
          animation-delay: 2s;
        }

        .enlarge-animation {
          animation: enlargeAndFade 3s ease-out forwards;
        }

        @keyframes enlargeAndFade {
          0% {
            transform: scale(0.5);
            opacity: 0;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
          100% {
            transform: scale(20);
            opacity: 0;
          }
        }

        .enlarge-exit {
          animation: shrinkToCenter 0.6s ease-in forwards;
        }

        @keyframes shrinkToCenter {
          to {
            transform: scale(0);
            opacity: 0;
          }
        }

        .pulse-ring {
          animation: pulseRing 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulseRing {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.05);
          }
        }

        .click-pulse {
          animation: clickPulse 2s ease-in-out infinite;
        }

        @keyframes clickPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
        }

        .animate-bounce-slow {
          animation: bounceSlow 3s ease-in-out infinite;
        }

        @keyframes bounceSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .rotate-slow,
        .gentle-float {
          opacity: 1 !important;
        }

        @media (max-width: 1023px) {
          .pop-up {
            opacity: 0.9 !important;
          }
          
          .rotate-slow {
            animation: rotateSlow 40s linear infinite;
          }
        }

        button:hover {
          transform: translateY(-4px) scale(1.05);
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3);
        }

        .slide-in-mobile {
          opacity: 0;
          transform: translateY(30px) scale(0.9);
          animation: slideInMobile 0.8s ease-out forwards;
        }

        @keyframes slideInMobile {
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}