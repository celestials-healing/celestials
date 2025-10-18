'use client'

export default function ScrollingStrip() {
  const text = " Reconnect with your true self through Reiki, Astrology, and Yoga. Discover how the flow of energy, the wisdom of the stars, and the stillness of the body unite to bring peace, clarity, and transformation. This is more than a practice & it's a journey back to balance and inner radiance. ";
  
  return (
    <div className="relative w-full bg-gradient-to-r from-[#4D5557] via-[#6a7577] to-[#4D5557] py-4 overflow-hidden">
      {/* Scrolling content */}
      <div className="flex whitespace-nowrap animate-scroll">
        {/* Repeat text multiple times for seamless loop */}
        <span className="text-white text-lg font-semibold px-8" style={{ fontFamily: 'Playfair Display' }}>
          {text}
        </span>
        <span className="text-white text-lg font-semibold px-8" style={{ fontFamily: 'Playfair Display' }}>
          {text}
        </span>
        <span className="text-white text-lg font-semibold px-8" style={{ fontFamily: 'Playfair Display' }}>
          {text}
        </span>
        <span className="text-white text-lg font-semibold px-8" style={{ fontFamily: 'Playfair Display' }}>
          {text}
        </span>
      </div>

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
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}