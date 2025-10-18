'use client'
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

interface ImageData {
  src: string;
  route: string;
  hoverText: string;
}

export default function CarouselHero() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const images: ImageData[] = [
    { src: '/yoga.jpg', route: '/Yoga', hoverText: 'Explore Yoga' },
    { src: '/image.jpg', route: '/courses', hoverText: 'Explore Reiki' },
    { src: '/astro.jpg', route: '/Astrology', hoverText: 'Discover Astrology' },
  ];

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, images.length]);

  const handleStartJourney = () => {
    router.push('/about');
  };

  const handleImageClick = (image: ImageData) => {
    router.push(image.route);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 8000);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 8000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 8000);
  };

  const getCardPosition = (index: number) => {
    const position = (index - currentIndex + images.length) % images.length;
    
    if (position === 0) {
      return { 
        zIndex: 30, 
        transform: 'translateX(0) scale(1) rotateY(0deg) rotateZ(0deg)', 
        opacity: 1 
      };
    } else if (position === 1) {
      return { 
        zIndex: 10, 
        transform: 'translateX(220px) scale(0.75) rotateY(-40deg) rotateZ(10deg)', 
        opacity: 0.6 
      };
    } else {
      return { 
        zIndex: 10, 
        transform: 'translateX(-220px) scale(0.75) rotateY(40deg) rotateZ(-10deg)', 
        opacity: 0.6 
      };
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#f6cf92] to-white overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute top-0 left-0 w-32 h-32 md:w-48 lg:w-72 md:h-48 lg:h-72 bg-[#f6d992] opacity-30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-0 right-0 w-32 h-32 md:w-48 lg:w-72 md:h-48 lg:h-72 bg-[#f6d992] opacity-30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-[#ffd7a8] opacity-20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Background Mandala - Desktop Only */}
      <img
        src="/mandala.png"
        alt="Background Decorative Shape"
        className="absolute z-0 hidden lg:block"
        style={{
          width: '730px',
          height: '730px',
          top: '0px',
          left: '-30px',
          opacity: 1,
          animation: 'rotateSlow 60s linear infinite',
        }}
      />

      {/* Foreground Woman Image - Desktop Only */}
      <img
        src="/women3.png"
        alt="Decorative Woman"
        className="absolute z-10 hidden lg:block"
        style={{
          width: '489px',
          height: '506px',
          top: '140px',
          left: '50px',
          opacity: 1,
          animation: 'gentleFloat 4s ease-in-out infinite',
        }}
      />

      {/* Desktop Layout */}
      <div className="hidden lg:flex lg:flex-col min-h-screen">
        {/* Heading */}
        <h1
          className="absolute z-20 text-5xl xl:text-5xl font-extrabold bg-gradient-to-r from-[#4D5557] via-[#6a7577] to-[#4D5557] bg-clip-text text-transparent leading-tight"
          style={{
            top: '475px',
            left: '600px',
            width: '1250px',
            fontFamily: 'Playfair Display',
            fontWeight: 900,
            animation: 'fadeInUp 1s ease-out 0.2s both',
          }}
        >
          &quot;Begin your healing journey 
          with Celestials&quot;
        </h1>

        {/* Description */}
        <p
          className="absolute z-20 text-lg text-[#4A1A11] text-center"
          style={{
            top: '540px',
            left: '605px',
            width: '860px',
            fontWeight: 500,
            lineHeight: '1.8',
            animation: 'fadeInUp 1s ease-out 0.4s both',
          }}
        >
          
 
  Reconnect with your true self through Reiki, Astrology, and Yoga. 
  Experience the harmony of energy, stars, and body to find peace and balance.


</p>

        

        {/* Buttons */}
        <div className="absolute z-20 flex gap-6" style={{ top: '620px', left: '800px' }}>
          <button
            onClick={handleStartJourney}
            className="px-8 py-4 text-2xl font-bold text-white bg-gradient-to-r from-[#32120b] to-[#4a1e16]  hover:from-[#4D5557] hover:to-[#5d6769] rounded-full shadow-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-3xl"
            style={{
              fontFamily: 'Playfair Display',
              animation: 'fadeInUp 1s ease-out 0.6s both',
            }}
          >
            Start Your Journey
          </button>

          <button
            onClick={() => handleImageClick(images[currentIndex])}
            className="px-8 py-4 text-2xl font-bold text-[#4D5557] bg-white border-2 border-[#4D5557] hover:bg-[#4D5557] hover:text-white rounded-full shadow-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-3xl"
            style={{
              fontFamily: 'Playfair Display',
              animation: 'fadeInUp 1s ease-out 0.8s both',
            }}
          >
            {images[currentIndex].hoverText}
          </button>
        </div>

        {/* 3D Carousel Container */}
        <div className="absolute z-20 right-110 top-10">
          <div style={{ perspective: '1000px' }} className="relative w-full h-96 flex items-center justify-center">
            {/* Carousel cards with 3D tilt */}
            {images.map((image, index) => {
              const position = getCardPosition(index);
              return (
                <div
                  key={index}
                  onClick={() => handleImageClick(image)}
                  className="absolute transition-all duration-1000 ease-in-out cursor-pointer"
                  style={{
                    ...position,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div className="relative w-95 h-106 shadow-2xl rounded-3xl overflow-hidden group">
                    <img
                      src={image.src}
                      alt={image.hoverText}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Shimmer effect */}
                    <div className="shimmer absolute inset-0 pointer-events-none" />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#4D5557] via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                    
                    {/* Hover text and button */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="text-white font-bold text-2xl" style={{ fontFamily: 'Playfair Display' }}>
                        {image.hoverText}
                      </span>
                      <button className="px-6 py-2 bg-white text-[#4D5557] font-bold rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-110">
                        Click to Explore
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col items-center justify-center min-h-screen px-6 relative z-20 pb-20">
        {/* Background Mandala - Mobile */}
        <img
          src="/mandala.png"
          alt="Background Decorative Shape"
          className="absolute z-0 opacity-40"
          style={{
            width: '350px',
            height: '350px',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            animation: 'rotateSlow 60s linear infinite',
          }}
        />

        {/* Mobile Heading */}
        <h1
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#4D5557] to-[#6a7577] bg-clip-text text-transparent leading-tight text-center mb-6 mt-20 relative z-10"
          style={{
            fontFamily: 'Playfair Display',
            fontWeight: 900,
            animation: 'fadeInUp 1s ease-out 0.2s both',
          }}
        >
          Welcome to<br />
          <span>Celestials healing.</span>
        </h1>

        {/* Mobile Navigation Buttons on Top */}
        {/* <div className="flex justify-center gap-6 mb-6 relative z-10">
          <button
            onClick={goToPrev}
            className="bg-white bg-opacity-70 text-[#4D5557] rounded-full p-2 shadow-lg transition-all hover:bg-opacity-100"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="bg-white bg-opacity-70 text-[#4D5557] rounded-full p-2 shadow-lg transition-all hover:bg-opacity-100"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div> */}

        {/* Mobile Carousel with 3D tilt */}
        <div style={{ perspective: '1000px', animation: 'fadeInUp 1s ease-out 0.4s both' }} className="relative w-full max-w-sm h-80 mb-8 z-10 flex items-center justify-center">
          {images.map((image, index) => {
            const position = getCardPosition(index);
            return (
              <div
                key={index}
                onClick={() => handleImageClick(image)}
                className="absolute transition-all duration-1000 ease-in-out cursor-pointer"
                style={{
                  ...position,
                  transformStyle: 'preserve-3d',
                }}
              >
                <div className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src={image.src}
                    alt={image.hoverText}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Shimmer effect */}
                  <div className="shimmer absolute inset-0 pointer-events-none" />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4D5557] via-transparent to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <span className="text-white font-bold text-lg text-center px-4" style={{ fontFamily: 'Playfair Display' }}>
                      {image.hoverText}
                    </span>
                    <button className="px-5 py-2 bg-white text-[#4D5557] font-semibold rounded-full text-sm hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
                      Explore Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile dots */}
        <div className="flex justify-center gap-2 mb-8 relative z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index
                  ? 'bg-[#4D5557] w-8 h-2'
                  : 'bg-[#4D5557] bg-opacity-40 w-2 h-2'
              }`}
            />
          ))}
        </div>

        {/* Description */}
        <p
          className="text-base md:text-lg text-[#4A1A11] text-center mb-8 leading-relaxed bg-white bg-opacity-80 p-6 rounded-2xl backdrop-blur-sm relative z-10 shadow-lg max-w-md"
          style={{
            fontWeight: 500,
            animation: 'fadeInUp 1s ease-out 1s both',
          }}
        >
          Welcome to our serene space dedicated to Reiki offerings. Explore our courses designed to empower your spiritual journey and enhance your healing abilities.
        </p>

        {/* Mobile Buttons */}
        <div className="flex flex-col gap-4 items-center w-full max-w-md px-4">
          <button
            onClick={handleStartJourney}
            className="w-full px-8 py-4 text-lg md:text-xl font-semibold text-white bg-gradient-to-r from-[#4D5557] to-[#5d6769] hover:from-[#32120b] hover:to-[#4a1e16] rounded-full shadow-2xl transition-all duration-500 transform hover:scale-105 relative z-10"
            style={{
              fontFamily: 'Playfair Display',
              animation: 'fadeInUp 1s ease-out 1.2s both',
            }}
          >
            Start Your Journey
          </button>

          <button
            onClick={() => handleImageClick(images[currentIndex])}
            className="w-full px-8 py-4 text-lg md:text-xl font-semibold text-[#4D5557] bg-white border-2 border-[#4D5557] hover:bg-[#4D5557] hover:text-white rounded-full shadow-2xl transition-all duration-500 transform hover:scale-105 relative z-10"
            style={{
              fontFamily: 'Playfair Display',
              animation: 'fadeInUp 1s ease-out 1.4s both',
            }}
          >
            {images[currentIndex].hoverText}
          </button>
        </div>
      </div>

      <style jsx>{`
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

        @keyframes gentleFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

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

        .rotate-slow {
          animation: rotateSlow 60s linear infinite;
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
            transform: translate(-50%, -50%) scale(0.5);
            opacity: 0;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(20);
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

        @media (max-width: 1023px) {
          .pop-up {
            opacity: 0.9 !important;
          }
          
          .rotate-slow {
            animation: rotateSlow 40s linear infinite;
          }
        }
      `}</style>
    </div>
  );
}