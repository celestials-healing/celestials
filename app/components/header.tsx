// app/page.tsx
import Image from 'next/image';
import { Inter } from 'next/font/google';

// Initialize the font
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Transform Your Life: Discover the Healing Power of Reiki Certification',
  description: 'Reiki certification empowers you to harness healing energy for personal and professional growth.',
};

export default function header3() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#f6cf92] to-white overflow-hidden">
    <div className={`w-full min-h-screen ${inter.className}`}>
      <main className="flex flex-col lg:flex-row items-center justify-between px-4 py-12 md:px-16 max-w-7xl mx-auto text-[#4D5557]">
        {/* Left Content */}
        <div className="w-full lg:w-3/5 pr-0 lg:pr-12 mb-8 lg:mb-0">
          <h1 className="font-celestial text-6xl  font-bold mb-6 leading-tight" style={{ fontFamily: 'Playfair Display' }}>
            Transform Your Life: Celestials Healing
          </h1>
          
          <p className="text-lg mb-12 text-[#4A1A11]">
          Celestial Healing is a peaceful sanctuary devoted to nurturing the mind, body, and spirit. Rooted in ancient wisdom and gentle guidance, we offer soul-enriching courses in Reiki, Astrology, Yoga, and Tarot.
          </p>
          <p className="text-lg mb-12 text-[#4A1A11]">
          Our mission is to support your spiritual journey with love, light, and compassion. Each offering is crafted to bring  balance, clarity, and a deeper connection to your inner self and the universe.

          </p>
<p className="text-lg mb-12 text-[#4A1A11]">
Step into a space of healing and harmony — where every soul is welcomed, and every path is honored.


          </p>
          
         
        </div>
        
        {/* Right Image */}
        <div className="w-full lg:w-2/5 relative">
  <div className="gradient-border-wrapper aspect-[4/5] w-lg mx-auto rounded-full p-1">
    <div className="relative w-full h-full rounded-full overflow-hidden">
      <Image
        src="/about.jpeg"
        alt="Meditation setup with Buddha statue, sage bundle, singing bowl, and crystals"
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