// components/MusicPlayer.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    // Set volume or autoplay logic (optional)
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio ref={audioRef} src="/background-music.mp3" loop />
      <button
        onClick={toggleMusic}
        className="bg-[#4A1A11] text-white p-3 rounded-full shadow-lg hover:bg-[#4A1A11] transition duration-300"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
    </div>
  );
};

export default MusicPlayer;
