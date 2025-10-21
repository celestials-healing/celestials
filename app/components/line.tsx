'use client'

export default function ScrollingStrip() {
  const text = " Reconnect with your true self through Reiki, Astrology, and Yoga. Discover how the flow of energy, the wisdom of the stars, and the stillness of the body unite to bring peace, clarity, and transformation. This is more than a practice & it's a journey back to balance and inner radiance. ";
  
  return (
    <div className="relative w-full bg-gradient-to-r from-[#f6cf92] via-[#ffd7a8] to-[#f6cf92] py-6 overflow-hidden shadow-lg">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#4D5557] to-transparent opacity-30"></div>
      
      {/* Animated orbs in background */}
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#f6d992] opacity-20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-[#ffd7a8] opacity-25 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Scrolling content */}
      <div className="flex whitespace-nowrap animate-scroll">
        {/* Repeat text multiple times for seamless loop */}
        <span className="text-[#4D5557] text-lg md:text-xl font-bold px-8" style={{ fontFamily: 'Playfair Display' }}>
          ✨ {text}
        </span>
        <span className="text-[#4D5557] text-lg md:text-xl font-bold px-8" style={{ fontFamily: 'Playfair Display' }}>
          ✨ {text}
        </span>
        <span className="text-[#4D5557] text-lg md:text-xl font-bold px-8" style={{ fontFamily: 'Playfair Display' }}>
          ✨ {text}
        </span>
        <span className="text-[#4D5557] text-lg md:text-xl font-bold px-8" style={{ fontFamily: 'Playfair Display' }}>
          ✨ {text}
        </span>
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#4D5557] to-transparent opacity-30"></div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
}