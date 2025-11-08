'use client'
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function ModernHero() {
  const router = useRouter();
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
   const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Track scroll progress - extended to cover both sections
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      // Extended range: progress from 0 to 3 to fully reach carousel bottom
      const progress = Math.min(scrollPosition / (windowHeight * 0.7), 3);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Preload images
  useEffect(() => {
    const imageUrls = ['/mandala.png', '/women3.png'];
    let loaded = 0;
    const imageElements: HTMLImageElement[] = [];

    imageUrls.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loaded++;
        setLoadedCount(loaded);
        if (loaded === imageUrls.length) {
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        loaded++;
        setLoadedCount(loaded);
        if (loaded === imageUrls.length) {
          setImagesLoaded(true);
        }
      };
      imageElements.push(img);
    });

    return () => {
      imageElements.forEach(img => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, []);

  const handleStartJourney = () => {
    router.push('/about');
  };

  // Loading screen
  if (!imagesLoaded) {
    return (
      <div className="relative min-h-screen bg-gradient-to-b from-[#f6cf92] to-white flex items-center justify-center overflow-hidden">
        <div className="text-center z-10">
          <div className="w-16 h-16 border-4 border-[#4D5557] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#4D5557] text-lg font-semibold" style={{ fontFamily: 'Playfair Display' }}>
            Loading your journey... {Math.round((loadedCount / 2) * 100)}%
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#f6cf92] to-white overflow-visible">
      {/* Subtle Background Gradient Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffd7a8] opacity-20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f6d992] opacity-20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 min-h-screen flex items-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full py-20">
          {/* Left Side - Text Content */}
          <div className="space-y-6" style={{ animation: 'fadeInLeft 1s ease-out both' }}>
            <h1
              className="text-4xl lg:text-6xl xl:text-7xl font-bold text-[#4D5557] leading-tight"
              style={{ fontFamily: 'Playfair Display' }}
            >
              Begin Your Healing Journey with{' '}
              <span className="bg-gradient-to-r from-[#6a7577] to-[#4D5557] bg-clip-text text-transparent">
                Celestials
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-[#4A1A11] leading-relaxed max-w-xl">
              Reconnect with your true self through Reiki, Astrology, and Yoga. 
              Experience the harmony of energy, stars, and body to find peace and balance 
              in your life's journey.
            </p>

            <button
              onClick={handleStartJourney}
              className="px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#32120b] to-[#4a1e16] hover:from-[#4D5557] hover:to-[#5d6769] rounded-full shadow-xl transition-all duration-300 transform hover:scale-105"
              style={{ fontFamily: 'Playfair Display' }}
            >
              Start Your Journey
            </button>
          </div>

   {/* Right Side - Images with rotating mandala behind */}
<div
  className="relative flex items-center justify-center"
  style={{ animation: 'fadeInRight 1s ease-out both' }}
>
  <div className="relative w-full flex items-center justify-center">
    {/* Rotating Mandala Background */}
    <div
      className="absolute w-[700px] h-[700px] lg:w-[800px] lg:h-[800px] pointer-events-none"
      style={
        isMobile
          ? {
              position: 'absolute',
              opacity: 0.3,
              transform: 'translateX(0) translateY(0) scale(0.8)',
              transition: 'none',
              willChange: 'auto',
              zIndex: 'auto',
              width: '400px',
              height: '400px',
              right: 'auto',
              bottom: 'auto',
            }
          : {
         
              position: scrollProgress > 1.5 ? 'fixed' : 'absolute',
                  opacity: scrollProgress > 3 ? Math.max(0.4, 1 - (scrollProgress - 3) * 0.3) : Math.max(0.4, 1 - scrollProgress * 0.2),
                  transform: scrollProgress <= 1.5
                    ? `
                      translateX(${scrollProgress * -80}%) 
                      translateY(${scrollProgress * 100}vh)
                      scale(${1 - scrollProgress * 0.3})
                    `
                    : scrollProgress <= 2.5
                    ? `
                      translateX(${-120 + (scrollProgress - 1.5) * 150}%) 
                      translateY(${150 - (scrollProgress - 1.5) * 20}vh)
                      scale(${0.55 + (scrollProgress - 1.5) * 0.15})
                      rotate(${(scrollProgress - 1.5) * 200}deg)
                    `
                    : `
                      translateX(${40 + (scrollProgress - 2.5) * -5}%) 
                      translateY(${210 + (scrollProgress - 2.5) * 10}vh)
                      scale(0.7)
                      rotate(${200 + (scrollProgress - 2.5) * 100}deg)
                    `,
                  transition: 'all 0.15s ease-out',
                  willChange: 'transform, opacity',
                  zIndex: scrollProgress > 1.5 ? 1 : 'auto',
                  right: scrollProgress > 2.5 ? `${-5 + (scrollProgress - 2.5) * -2}%` : (scrollProgress > 1.5 ? `${Math.min((scrollProgress - 1.5) * 50, 0)}%` : 'auto'),
                  bottom: scrollProgress > 2.5 ? `${-10 + (scrollProgress - 2.5) * -3}%` : (scrollProgress > 1.5 ? `${Math.min((scrollProgress - 1.5) * 30, 0)}%` : 'auto'),
                }}
              >
                <img
                  src="/mandala.png"
                  alt="Mandala"
                  className="w-full h-full"
                  style={{
                    animation: 'rotateSlow 60s linear infinite',
                    willChange: 'transform',
                  }}
                />
    </div>

    {/* Main Woman Image */}
    <img
      src="/women3.png"
      alt="Spiritual Healing"
      className="relative z-10 w-[500px] h-auto lg:w-[600px]"
      style={{
        animation: 'gentleFloat 4s ease-in-out infinite',
        willChange: 'transform',
      }}
    />
  </div>
</div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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
            transform: translateY(-15px);
          }
        }

        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0.5) translateY(20px);
          }
          70% {
            transform: scale(1.05) translateY(-5px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes floatTestimonial1 {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-12px) translateX(-5px);
          }
        }
      `}</style>
    </div>
  );
}