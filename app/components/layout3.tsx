// app/page.tsx
import Image from 'next/image';
import { Inter } from 'next/font/google';

// Initialize the font
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Transform Your Life: Discover the Healing Power of Reiki Certification',
  description: 'Reiki certification empowers you to harness healing energy for personal and professional growth.',
};

export default function Layout2() {
  return (
    <div className={`w-full min-h-screen ${inter.className}`}>
      <main className="flex flex-col lg:flex-row items-center justify-between px-4 py-12 md:px-16  mx-auto">
        {/* Left Content */}
        <div className="w-full lg:w-3/5 pr-0 lg:pr-12 mb-8 lg:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Unlock Your Potential with Celestials Healing
          </h1>
          
          <p className="text-lg mb-12">
          Join our comprehensive healing courses designed to elevate your healing journey. Experience personal growth and spiritual enlightenment through expert-led sessions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Healing Column */}
            <div>
              <h2 className="text-4xl font-bold mb-3">50%</h2>
              <p>Limited time offer on our Reiki course!</p>
            </div>
            
            {/* Growth Column */}
            <div>
              <h2 className="text-4xl font-bold mb-3">50%</h2>
              <p>Enroll now and start your healing journey!</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <button className="bg-black text-white px-8 py-3 font-medium">
              Enroll
            </button>
            <button className="border border-black px-8 py-3 font-medium">
            Learn More
            </button>
          </div>
        </div>
        
        {/* Right Image */}
        <div className="w-full lg:w-3/5 relative">
          <div className="relative w-[700px] h-[600px] aspect-[4/5] max-w-lg mx-auto">
            <Image
              src="/image5.png" 
              alt="Meditation setup with Buddha statue, sage bundle, singing bowl, and crystals"
              fill
              style={{ objectFit: 'cover' }}
              className=""
              priority
            />
          </div>
        </div>
        
      </main>
     
    </div>
  );
}