// app/page.tsx
import Image from 'next/image';
import { Inter } from 'next/font/google';

// Initialize the font
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Find Your Balance: Embrace the Practice of Yoga',
  description:
    'Yoga harmonizes body, mind, and spirit through movement, breath, and mindfulness, guiding you toward inner peace and vitality.',
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
              Find Your Balance: The Journey of Yoga
            </h1>

            <p className="text-lg mb-12 text-[#4A1A11]">
              Yoga is an ancient practice that unites movement, breath, and awareness to create harmony between body, mind, and spirit. Rooted in thousands of years of tradition, yoga is both a physical discipline and a path to inner peace.
            </p>

            <p className="text-lg mb-12 text-[#4A1A11]">
              Through postures (asanas), mindful breathing (pranayama), and meditation, yoga strengthens the body, calms the mind, and nurtures emotional well-being. It encourages presence in the moment and deepens the connection to your inner self.
            </p>

            <p className="text-lg mb-12 text-[#4A1A11]">
              Whether you seek flexibility, strength, stress relief, or spiritual growth, yoga offers a timeless path to balance and self-discovery for people of all ages and abilities.
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-2/5 relative">
            <div className="gradient-border-wrapper aspect-[3/5] w-lg mx-auto rounded-full p-1">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/yoga.jpg"
                  alt="Person practicing yoga in a peaceful natural setting at sunrise"
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
