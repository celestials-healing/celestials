"use client"
import { useState} from 'react';
import Head from 'next/head';
import Link from 'next/link';

// Video player component that supports YouTube and Google Drive links
const VideoPlayer = ({ videoUrl }: { videoUrl: string }) => {
  // Function to determine video type and extract ID
  const getVideoSource = () => {
    if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
      // Extract YouTube video ID
      let videoId = '';
      if (videoUrl.includes('youtu.be/')) {
        videoId = videoUrl.split('youtu.be/')[1];
      } else if (videoUrl.includes('watch?v=')) {
        videoId = videoUrl.split('watch?v=')[1].split('&')[0];
      }
      return `https://www.youtube.com/embed/${videoId}`;
    } else if (videoUrl.includes('drive.google.com')) {
      // Convert Google Drive link to embed format
      if (videoUrl.includes('/view')) {
        const fileId = videoUrl.split('/d/')[1]?.split('/view')[0];
        if (fileId) {
          return `https://drive.google.com/file/d/${fileId}/preview`;
        }
      }
    }
    // Return original URL if not YouTube or Drive, or if parsing failed
    return videoUrl;
  };

  return (
    <div className="relative w-full h-full bg-gray-700 rounded-md overflow-hidden">
      {videoUrl ? (
        <iframe
          src={getVideoSource()}
          className="absolute w-full h-full"
          title="Video Player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className="flex items-center justify-center w-full h-full">
          <button className="rounded-full bg-white p-4 flex items-center justify-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-8 w-8" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" 
                clipRule="evenodd" 
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default function WellnessLandingPage2() {
  // You can replace this URL with your YouTube or Google Drive video link
  const [videoUrl] = useState<string>('https://www.youtube.com/watch?v=BrACkUh7sA0');
  
  return (
    <div className=" bg-white">
      <Head>
        <title>Inner Peace Journey</title>
        <meta name="description" content="Find your path to inner peace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative bg-gradient-to-b from-white to-[#f6cf92] overflow-hidden">
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="lg:flex lg:items-start lg:justify-between">
            {/* Left side - Heading and text */}
            <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
              <h1 className="text-5xl font-bold text-[#4D5557] mb-6" style={{ fontFamily: 'Playfair Display' }}>
                Embrace Your Journey to Inner Peace
              </h1>
              <p className="text-gray-600 mb-8 text-[#4A1A11]">
                Welcome to a sanctuary of spirituality and devotion. Here, you can explore 
                paths to tranquility through our offerings in Reiki, astrology, tarot, and 
                yoga.
              </p>
              <div className="flex flex-wrap gap-4">
              <Link href="/Register" className="inline-block border border-black px-8 py-3 font-medium bg-[#4A1A11] text-white " style={{ fontFamily: 'Playfair Display' }}>
            Register
          </Link>
          <Link href="/about" className="inline-flex items-center gap-2 px-8 py-3 font-medium text-[#4A1A11]" style={{ fontFamily: 'Playfair Display' }}>
            Explore
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
              </div>
            </div>
            
            {/* Right side - Video */}
            <div className="lg:w-1/2 lg:pl-8">
              {/* Option 1: With aspect-ratio plugin */}
              {/* <div className="aspect-w-16 aspect-h-9 w-full">
                <VideoPlayer videoUrl={videoUrl} />
              </div> */}
              
              {/* Option 2: Without aspect-ratio plugin (uncomment this if you prefer not to use the plugin) */}
              <div className="relative w-full pb-[56.25%]">
                <div className="absolute inset-0">
                  <VideoPlayer videoUrl={videoUrl} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      </div>
    </div>
  );
}