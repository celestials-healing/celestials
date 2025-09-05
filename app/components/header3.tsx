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
            Transform Your Life: Reiki Healing
          </h1>
          
          <p className="text-lg mb-12 text-[#4A1A11]">
          Reiki is a gentle, hands-on energy healing technique that restores balance and promotes natural healing in the body. Originating from Japan, Reiki works by channeling universal life force energy to remove energy blockages, reduce stress, and support physical, emotional, and spiritual well-being.
          </p>
          <p className="text-lg mb-12 text-[#4A1A11]">
During a session, the practitioner lightly places their hands on or near the body, helping you relax deeply while your body activates its natural healing process. Reiki can ease pain, calm the mind, boost immunity, and bring a deep sense of peace and clarity.
</p>
<p className="text-lg mb-12 text-[#4A1A11]">
It’s safe, non-invasive, and suitable for people of all ages.
          </p>
          
         
        </div>
        
        {/* Right Image */}
        <div className="w-full lg:w-2/5 relative">
  <div className="gradient-border-wrapper aspect-[3/5] w-lg mx-auto rounded-full p-1">
    <div className="relative w-full h-full rounded-full overflow-hidden">
      <Image
        src="/image(1).jpg"
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