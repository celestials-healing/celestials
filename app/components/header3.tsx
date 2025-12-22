// app/page.tsx
import Image from 'next/image';
import { Inter } from 'next/font/google';

// Initialize the font
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Transform Your Life: Discover the Healing Power of Reiki Certification',
  description: 'Reiki certification empowers you to harness healing energy for personal and professional growth.',
};

export default function Header3() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#f6cf92] to-white overflow-hidden">
      <div className={`w-full min-h-screen ${inter.className}`}>
        <main className="flex flex-col lg:flex-row items-center justify-between text-[#4D5557]">

          {/* Left Content */}
          <div className="w-full lg:w-3/5 pr-0 lg:pr-12 mb-8 lg:mb-0 px-8 lg:px-16 max-w-7xl mx-auto">
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#4D5557] leading-tight"
              style={{ fontFamily: 'Playfair Display' }}
            >
              Reiki – The Gift of{' '}
              <span className="bg-gradient-to-r from-[#6a7577] to-[#4D5557] bg-clip-text text-transparent">
                Presence
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-[#4A1A11] leading-relaxed max-w-2xl font-light mt-6">
              Wherever you are, soft light surrounds you. Offering space to breathe, to heal & to simply be held gently in caring hands.
            </p>
             <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                className="px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#32120b] to-[#4a1e16] hover:from-[#4D5557] hover:to-[#5d6769] rounded-full shadow-xl transition-all duration-300 transform hover:scale-105"
                style={{ fontFamily: 'Playfair Display' }}
              >
                Feel it Today
              </button>
              
              <button 
                className="px-10 py-4 text-lg font-semibold text-[#4D5557] bg-white/80 hover:bg-white border-2 border-[#4D5557] rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
                style={{ fontFamily: 'Playfair Display' }}
              >
                Get Yourself Healed Today
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-3/5 relative h-[60vh] lg:h-screen">
            <Image
              src="/image(1).jpg"
              alt="Meditation setup with Buddha statue, sage bundle, singing bowl, and crystals"
              fill
              className="object-cover"
              priority
            />
          </div>

        </main>
      </div>
    </div>
  );
}
