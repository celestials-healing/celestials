"use client"
// import { useState} from 'react';
import { Play } from 'lucide-react';

// Video player component that supports YouTube and Google Drive links
const VideoPlayer = ({ videoUrl }: { videoUrl: string }) => {
  const getVideoSource = () => {
    if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
      let videoId = '';
      if (videoUrl.includes('youtu.be/')) {
        videoId = videoUrl.split('youtu.be/')[1];
      } else if (videoUrl.includes('watch?v=')) {
        videoId = videoUrl.split('watch?v=')[1].split('&')[0];
      }
      return `https://www.youtube.com/embed/${videoId}`;
    } else if (videoUrl.includes('drive.google.com')) {
      if (videoUrl.includes('/view')) {
        const fileId = videoUrl.split('/d/')[1]?.split('/view')[0];
        if (fileId) {
          return `https://drive.google.com/file/d/${fileId}/preview`;
        }
      }
    }
    return videoUrl;
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-[#4D5557] via-[#5d6769] to-[#6a7577] rounded-3xl overflow-hidden shadow-2xl">
      {videoUrl ? (
        <iframe
          src={getVideoSource()}
          className="w-full h-full"
          title="Video Player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className="flex items-center justify-center w-full h-full">
          <div className="flex flex-col items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg">
              <Play className="text-[#4D5557] w-10 h-10 fill-[#4D5557]" />
            </div>
            <p className="text-white text-lg opacity-75" style={{ fontFamily: 'Playfair Display' }}>
              Video will appear here
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default function WellnessLandingPage() {
  // const [videoUrl] = useState<string>('');
  // const [scrollProgress, setScrollProgress] = useState(0);

  // // Track scroll for mandala animation - continues from offerings section
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     const windowHeight = window.innerHeight;
  //     // Track from offerings section (2vh) through video section (3-4vh)
  //     const sectionStart = windowHeight * 2.5;
  //     const sectionLength = windowHeight * 1.5;
  //     const progress = Math.max(0, Math.min((scrollPosition - sectionStart) / sectionLength, 1));
  //     setScrollProgress(progress);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   handleScroll(); // Initial calculation
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);


  
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white to-[#f6cf92] py-20 px-6 overflow-hidden">
      {/* Animated Mandala Background - continues journey from offerings section */}
     

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Text Section */}
        <div className="text-center mb-16">
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#4D5557] mb-6" 
            style={{ fontFamily: 'Playfair Display', fontWeight: '700' }}
          >
            Embrace Your Journey to Inner Peace
          </h1>
          <p className="text-lg sm:text-xl text-[#4A1A11] max-w-4xl mx-auto leading-relaxed">
            Welcome to a sanctuary of spirituality and devotion. Here, you can explore 
            paths to tranquility through our offerings in Reiki, astrology, tarot, and 
            yoga.
          </p>
        </div>

        {/* Video Section */}
        <div className="w-full max-w-6xl mx-auto">
          <div className="aspect-video">
            <VideoPlayer videoUrl={"https://youtu.be/BrACkUh7sA0"} />
          </div>
        </div>
      </div>
    </div>
  );
}