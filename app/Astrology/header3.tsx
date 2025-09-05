// app/page.tsx
import Image from 'next/image';
import { Inter } from 'next/font/google';

// Initialize the font
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Unlock Your Cosmic Path: Explore the Wisdom of Astrology',
  description: 'Astrology reveals the patterns of the stars and planets, guiding you toward self-discovery, clarity, and life alignment.',
};

export default function header3() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#f6cf92] to-white overflow-hidden">
      <div className={`w-full min-h-screen ${inter.className}`}>
        <main className="flex flex-col lg:flex-row items-center justify-between px-4 py-12 md:px-16 max-w-7xl mx-auto text-[#4D5557]">
          
          {/* Left Content */}
          <div className="w-full lg:w-3/5 pr-0 lg:pr-12 mb-8 lg:mb-0">
            <h1
              className="font-celestial text-6xl font-bold mb-6 leading-tight"
              style={{ fontFamily: 'Playfair Display' }}
            >
              Unlock Your Cosmic Path: Astrology Insights
            </h1>

            <p className="text-lg mb-12 text-[#4A1A11]">
              Astrology is an ancient science that maps the positions of the stars and planets at the time of your birth, revealing your unique personality traits, strengths, challenges, and life patterns. It offers a profound tool for self-awareness, decision-making, and understanding your place in the universe.
            </p>

            <p className="text-lg mb-12 text-[#4A1A11]">
              By studying your natal chart, astrology provides guidance on love, career, health, and spiritual growth. It helps you align with cosmic cycles, navigate challenges with clarity, and embrace opportunities in harmony with the universe’s rhythm.
            </p>

            <p className="text-lg mb-12 text-[#4A1A11]">
              Whether you seek personal insight or guidance for the future, astrology offers a timeless connection between the heavens and your inner journey.
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-2/5 relative">
            <div className="gradient-border-wrapper aspect-[3/5] w-lg mx-auto rounded-full p-1">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/astro.jpg"
                  alt="Astrology chart with zodiac signs, constellations, and celestial symbols"
                  fill
                  className="rounded-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
