// app/page.tsx
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';

// Initialize the font
const inter = Inter({ subsets: ['latin'] });



export default function Layout() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white to-[#f6cf92] overflow-hidden">
    <div className={`w-full min-h-screen ${inter.className} px-4 py-12 md:px-8 lg:px-16`}>
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center mb-16 text-[#4D5557]">
        <p className="text-lg mb-2 text-[#4A1A11]">Empower</p>
        <h1 className="font-celestial text-6xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Playfair Display' }}>
          Transform Your Journey with Our Offerings
        </h1>
        <p className="text-lg max-w-3xl mx-auto mb-8 text-[#4A1A11]">
          Unlock your potential with our comprehensive online courses. 
          Designed for all levels, our platform ensures a fulfilling learning experience.
        </p>
      </section>

      {/* Three Column Features */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="flex flex-col items-center">
            <div className="w-full h-64 relative mb-6">
              <Image
                src="/image1.jpg"
                alt="Hand with chakra crystals"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
            <h2 className="font-celestial text-2xl font-bold mb-4 text-center text-[#4D5557] " style={{ fontFamily: 'Playfair Display' }} >
              Learn from Seasoned Professionals
            </h2>
            <p className="text-center text-[#4A1A11]">
              Our instructors bring years of experience and wisdom.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center">
            <div className="w-full h-64 relative mb-6">
              <Image
                src="/image2.jpg"
                alt="Reiki healing session"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
            <h2 className="font-celestial text-2xl font-bold mb-4 text-center text-[#4D5557]" style={{ fontFamily: 'Playfair Display' }} >
              Engage with Our Interactive Learning Tools
            </h2>
            <p className="text-center text-[#4A1A11]">
              Experience a dynamic platform that enhances your learning.
            </p>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-center">
            <div className="w-full h-64 relative mb-6">
              <Image
                src="/image3.jpg"
                alt="Meditation space with amethyst, candle and Buddha statue"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
            <h2 className="font-celestial text-2xl font-bold mb-4 text-center text-[#4D5557]" style={{ fontFamily: 'Playfair Display' }}>
              Start Your Journey Today
            </h2>
            <p className="text-center text-[#4A1A11]">
              Join our community and embrace the healing arts.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/registerForm" className="inline-block border border-black px-8 py-3 font-medium bg-[#4A1A11]">
            Register
          </Link>
          <Link href="/about" className="inline-flex items-center gap-2 px-8 py-3 font-medium text-[#4A1A11]">
            Explore
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </section>
    </div>
    </div>
  );
}