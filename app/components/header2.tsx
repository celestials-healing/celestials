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
}

export default function ResponsiveHero() {
  const router = useRouter();
    const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);


  const handleStartJourney = () => {
    router.push('/about');
  };

  const images = [
    { src: '/about.jpeg', route: '/Yoga', delay: '0.2s', position: { top: '10px', right: '65px' } },
    { src: '/image.jpg', route: '/courses', delay: '0.4s', position: { top: '80px', right: '215px' } },
    { src: '/astrology1.jpg', route: '/Astrology', delay: '0.6s', position: { top: '170px', right: '105px' } },
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
          className="absolute z-20 text-6xl xl:text-8xl font-extrabold bg-gradient-to-r from-[#4D5557] via-[#6a7577] to-[#4D5557] bg-clip-text text-[#4D5557] leading-tight fade-in-up"
          style={{
            top: '185px',
            left: '409px',
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
            left: '425px',
            width: '900px',
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
            left: '425px',
            fontFamily: 'Playfair Display',
            fontWeight: "400",
          }}
        >
          Start Your Journey
          <span className="absolute inset-0 rounded-full bg-white opacity-0 hover:opacity-20 transition-opacity duration-300"></span>
        </button>

        {/* Interactive Decorative Images with hover effects */}
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => handleImageClick(image)}
            className={`absolute z-20 slide-in cursor-pointer group ${
              selectedImage?.src === image.src ? 'enlarge-exit' : ''
            }`}
            style={{
              width: index === 1 ? '180px' : index === 0 ? '180px' : '152px',
              height: index === 1 ? '220px' : index === 0 ? '220px' : '229px',
              top: image.position.top,
              right: image.position.right,
              animationDelay: image.delay,
            }}
          >
            <div className="relative w-full h-full overflow-hidden rounded-lg shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:shadow-3xl group-hover:-rotate-2">
              <img
                src={image.src}
                alt="Decorative"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
              />
              {/* Overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#4D5557] via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
              {/* Hover text */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  Click to Explore
                </span>
              </div>
              {/* Shimmer effect */}
              <div className="absolute inset-0 shimmer"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col items-center justify-center h-screen px-6 relative z-20">
        <h1
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#4D5557] to-[#6a7577] bg-clip-text text-transparent leading-tight text-center mb-6 absolute top-16 fade-in-up"
          style={{
            fontFamily: 'Playfair Display',
            fontWeight: 900,
            width: "400px",
          }}
        >
          Welcome to<br />
          <span>Celestials healing.</span>
        </h1>

        <p
          className="text-xl md:text-2xl text-[#4A1A11] text-center mb-8 max-w-2xl absolute bottom-10 leading-tight bg-white bg-opacity-70 p-4 rounded-2xl backdrop-blur-sm fade-in-up"
          style={{
            fontWeight: 500,
            animationDelay: '0.4s',
          }}
        >
          Welcome to our serene space dedicated to Reiki certification. Explore our courses designed to empower your spiritual journey and enhance your healing abilities.
        </p>

        <button
          onClick={handleStartJourney}
          className="px-8 py-4 text-xl md:text-2xl font-semibold text-white bg-gradient-to-r from-[#4D5557] to-[#5d6769] hover:from-[#32120b] hover:to-[#4a1e16] rounded-full shadow-2xl transition-all duration-500 transform hover:scale-105 absolute bottom-5 pulse-glow"
          style={{
            fontFamily: 'Playfair Display',
            fontWeight: "400",
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
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transform: translateX(-100%);
        }

        .group:hover .shimmer {
          animation: shimmer 1.5s ease-in-out;
        }

        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }

        .enlarge-animation {
          animation: enlargeAndFade 0.6s ease-out forwards;
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

        .rotate-slow,
        .gentle-float {
          opacity: 1 !important;
        }

        @media (max-width: 1023px) {
          .pop-up {
            opacity: 0.9 !important;
          }
        }

        button:hover {
          transform: translateY(-4px) scale(1.05);
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
}